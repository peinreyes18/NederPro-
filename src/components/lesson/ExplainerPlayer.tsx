'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import type { ExplainerSlide } from '@/lib/explainer';
import { slideDurationMs } from '@/lib/explainer';

/**
 * Story-style "video" player for the auto-generated grammar explainers.
 *
 * Nothing here is a real video file: the slides are built from the lesson
 * content (see lib/explainer.ts) and animated in the browser, with the Dutch
 * sentences read aloud. Audio prefers the server voice (/api/tts, Google
 * Cloud TTS when configured) and falls back to the browser's Dutch voice.
 *
 * Starts paused — the first tap is the user gesture that unlocks audio on iOS.
 */

interface Props {
  /** Slides safe to show everyone (built from the free taster of the lesson). */
  slides: ExplainerSlide[];
  /** Full-lesson slides, shown only to subscribers / valid trials. */
  fullSlides?: ExplainerSlide[];
  className?: string;
}

// ── speech helpers ──────────────────────────────────────────────────────────
let serverTts: boolean | null = null; // null = unknown, false = 401/501/failed

function pickDutchVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang === 'nl-NL') ?? voices.find((v) => v.lang.startsWith('nl')) ?? null;
}

/** ~1 ms of silence as an object URL — lets the reused <audio> element play later on iOS. */
function silentWavUrl(): string {
  const b = new Uint8Array(52);
  const v = new DataView(b.buffer);
  const w = (o: number, s: string) => { for (let i = 0; i < s.length; i++) b[o + i] = s.charCodeAt(i); };
  w(0, 'RIFF'); v.setUint32(4, 44, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true);
  v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, 8000, true); v.setUint32(28, 8000, true);
  v.setUint16(32, 1, true); v.setUint16(34, 8, true); w(36, 'data'); v.setUint32(40, 8, true); b.fill(0x80, 44);
  return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
}

function highlightWords(text: string, highlights?: string | string[]): React.ReactNode {
  if (!highlights) return text;
  const list = Array.isArray(highlights) ? highlights : [highlights];
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;
  for (const word of list) {
    const i = remaining.toLowerCase().indexOf(word.toLowerCase());
    if (i === -1) continue;
    if (i > 0) parts.push(remaining.slice(0, i));
    parts.push(<span key={key++} className="text-accent font-bold underline decoration-accent/40 decoration-2 underline-offset-4">{remaining.slice(i, i + word.length)}</span>);
    remaining = remaining.slice(i + word.length);
  }
  if (remaining) parts.push(remaining);
  return parts.length ? parts : text;
}

export default function ExplainerPlayer({ slides: freeSlides, fullSlides, className }: Props) {
  // Subscribers get the whole lesson's explainer; everyone else the free preview.
  const { isSubscribed } = useAuth();
  const slides = isSubscribed && fullSlides ? fullSlides : freeSlides;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 within current slide
  const [speaking, setSpeaking] = useState(false);

  const runRef = useRef(0);            // token: bump to cancel the running loop
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mutedRef = useRef(false);
  const indexRef = useRef(0);
  useEffect(() => { mutedRef.current = muted; }, [muted]);

  const stopSpeech = useCallback(() => {
    try { window.speechSynthesis?.cancel(); } catch { /* ignore */ }
    const a = audioRef.current;
    if (a) { try { a.pause(); a.onended = null; a.onerror = null; } catch { /* ignore */ } }
    setSpeaking(false);
  }, []);

  /** Speak Dutch text; resolves when done (or on timeout). Honors cancel token. */
  const speak = useCallback((text: string, token: number): Promise<void> => {
    if (mutedRef.current) return Promise.resolve();
    setSpeaking(true);
    const done = () => setSpeaking(false);
    const cap = Math.min(12000, 2500 + text.length * 90);

    const viaBrowser = (): Promise<void> => new Promise((resolve) => {
      if (!window.speechSynthesis) { done(); return resolve(); }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'nl-NL'; u.rate = 0.9;
      const voice = pickDutchVoice(); if (voice) u.voice = voice;
      let finished = false;
      const finish = () => { if (finished) return; finished = true; clearTimeout(t); done(); resolve(); };
      const t = setTimeout(() => { try { window.speechSynthesis.cancel(); } catch { /* ignore */ } finish(); }, cap);
      u.onend = finish; u.onerror = finish;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    });

    const viaServer = async (): Promise<boolean> => {
      if (serverTts === false) return false;
      const res = await fetch(`/api/tts?text=${encodeURIComponent(text)}`);
      if (!res.ok) { if (res.status === 401 || res.status === 501) serverTts = false; return false; }
      if (runRef.current !== token) return true; // cancelled while fetching — swallow
      serverTts = true;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = audioRef.current ?? new Audio();
      audioRef.current = audio;
      audio.src = url;
      await new Promise<void>((resolve) => {
        let finished = false;
        const finish = () => { if (finished) return; finished = true; clearTimeout(t); URL.revokeObjectURL(url); done(); resolve(); };
        const t = setTimeout(() => { audio.pause(); finish(); }, cap);
        audio.onended = finish; audio.onerror = finish;
        audio.play().catch(finish);
      });
      return true;
    };

    return viaServer().then((ok) => (ok ? undefined : viaBrowser())).catch(() => viaBrowser());
  }, []);

  /** Run slides from `from` until paused/finished. */
  const run = useCallback(async (from: number) => {
    const token = ++runRef.current;
    for (let i = from; i < slides.length; i++) {
      if (runRef.current !== token) return;
      indexRef.current = i;
      setIndex(i);
      setProgress(0);
      const slide = slides[i];
      const started = Date.now();
      const dur = slideDurationMs(slide);

      // progress ticker
      const tick = setInterval(() => {
        if (runRef.current !== token) return;
        setProgress(Math.min(1, (Date.now() - started) / dur));
      }, 60);

      // spoken slides: brief pause so the text appears first, then speak
      if ('speak' in slide && slide.speak) {
        await new Promise((r) => setTimeout(r, 500));
        if (runRef.current !== token) { clearInterval(tick); return; }
        await speak(slide.speak, token);
      }
      const remaining = dur - (Date.now() - started);
      if (remaining > 0) await new Promise((r) => setTimeout(r, remaining));
      clearInterval(tick);
      if (runRef.current !== token) return;
      if (slide.kind === 'end') { setPlaying(false); setProgress(1); return; }
    }
  }, [slides, speak]);

  const pause = useCallback(() => {
    runRef.current++;
    stopSpeech();
    setPlaying(false);
  }, [stopSpeech]);

  const play = useCallback((from?: number) => {
    // User gesture: unlock audio on iOS for both voices.
    try { window.speechSynthesis?.speak(new SpeechSynthesisUtterance('')); } catch { /* ignore */ }
    try {
      const a = new Audio(silentWavUrl());
      audioRef.current = a; // reused later for the server voice
      a.play().catch(() => { /* fine */ });
    } catch { /* ignore */ }
    const start = from ?? (indexRef.current >= slides.length - 1 ? 0 : indexRef.current);
    setPlaying(true);
    run(start);
  }, [run, slides.length]);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    runRef.current++;
    stopSpeech();
    indexRef.current = clamped;
    setIndex(clamped);
    setProgress(0);
    if (playing) run(clamped);
  }, [playing, run, slides.length, stopSpeech]);

  useEffect(() => () => { runRef.current++; stopSpeech(); }, [stopSpeech]);

  const slide = slides[index];
  const total = slides.length;

  return (
    <div className={cn('mx-auto w-full max-w-md', className)}>
      <style>{`
        @keyframes npFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        .np-slide { animation: npFadeUp .45s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .np-slide { animation: none; } }
      `}</style>

      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-accent-light/40 via-surface to-surface shadow-md">
        {/* segmented progress */}
        <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
          {slides.map((_, i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-border/70 overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-[width] duration-100"
                style={{ width: i < index ? '100%' : i === index ? `${Math.round(progress * 100)}%` : '0%' }}
              />
            </div>
          ))}
        </div>

        {/* slide */}
        <div className="min-h-[380px] sm:min-h-[420px] px-6 pt-10 pb-24 flex flex-col justify-center">
          <div key={index} className="np-slide">
            <SlideView slide={slide} speaking={speaking} />
          </div>
        </div>

        {/* big play overlay when paused */}
        {!playing && (
          <button
            type="button"
            onClick={() => play()}
            aria-label={index === 0 ? 'Play explainer' : 'Resume explainer'}
            className="absolute inset-0 z-10 flex items-center justify-center bg-background/20 backdrop-blur-[1px] group"
          >
            <span className="flex items-center gap-2 rounded-full bg-accent text-white pl-4 pr-5 py-3 text-sm font-semibold shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-lg leading-none">▶</span>
              {index === 0 ? 'Watch the 1-minute explainer' : index >= total - 1 ? 'Replay' : 'Resume'}
            </span>
          </button>
        )}

        {/* controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-surface/90 backdrop-blur border-t border-border">
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous"
              className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-hover disabled:opacity-30 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button type="button" onClick={() => (playing ? pause() : play())} aria-label={playing ? 'Pause' : 'Play'}
              className="p-2 rounded-lg text-primary hover:text-accent hover:bg-surface-hover transition-colors">
              {playing ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
            <button type="button" onClick={() => goTo(index + 1)} disabled={index >= total - 1} aria-label="Next"
              className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface-hover disabled:opacity-30 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <span className="text-xs text-muted tabular-nums">{index + 1} / {total}</span>
          <button type="button" onClick={() => { setMuted((m) => !m); if (!muted) stopSpeech(); }} aria-label={muted ? 'Unmute' : 'Mute'}
            className={cn('p-2 rounded-lg hover:bg-surface-hover transition-colors', muted ? 'text-muted' : 'text-accent')}>
            {muted ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" /></svg>
            )}
          </button>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-muted">
        Generated from this lesson · Dutch examples are read aloud
      </p>
    </div>
  );
}

function SlideView({ slide, speaking }: { slide: ExplainerSlide; speaking: boolean }) {
  switch (slide.kind) {
    case 'title':
      return (
        <div className="text-center">
          <span className="inline-block text-xs font-bold text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">{slide.level} · Grammar</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight">{slide.title}</h3>
          {slide.subtitle && <p className="mt-2 text-muted italic">{slide.subtitle}</p>}
        </div>
      );
    case 'rule':
      return (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">The rule{slide.title ? ` · ${slide.title}` : ''}</p>
          <p className="text-xl sm:text-2xl font-semibold text-primary leading-snug">{slide.rule}</p>
        </div>
      );
    case 'example':
      return (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-2">
            Example
            <span className={cn('inline-flex w-2 h-2 rounded-full bg-accent transition-opacity', speaking ? 'opacity-100 animate-pulse' : 'opacity-0')} />
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-primary leading-snug">{highlightWords(slide.dutch, slide.highlight)}</p>
          <p className="mt-3 text-base text-muted">{slide.english}</p>
          {slide.note && <p className="mt-4 text-sm text-primary-light border-l-2 border-accent/40 pl-3">{slide.note}</p>}
        </div>
      );
    case 'table':
      return (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">{slide.title ?? 'Pattern'}</p>
          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead><tr>{slide.headers.map((h) => <th key={h} className="text-left px-3 py-2 text-xs font-semibold text-muted border-b border-border">{h}</th>)}</tr></thead>
              <tbody>{slide.rows.map((r, i) => <tr key={i} className="border-b border-border/50 last:border-0">{r.map((c, j) => <td key={j} className={cn('px-3 py-2', j === r.length - 1 ? 'font-semibold text-primary' : 'text-primary-light')}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      );
    case 'mistake':
      return (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Common mistake</p>
          <p className="text-lg text-red-600 dark:text-red-400 line-through decoration-2">✗ {slide.incorrect}</p>
          <p className="mt-2 text-2xl font-bold text-green-700 dark:text-green-400 flex items-start gap-2">
            <span>✓</span><span>{slide.correct}</span>
            <span className={cn('mt-2 inline-flex w-2 h-2 rounded-full bg-accent transition-opacity', speaking ? 'opacity-100 animate-pulse' : 'opacity-0')} />
          </p>
          <p className="mt-4 text-sm text-primary-light">{slide.explanation}</p>
        </div>
      );
    case 'end':
      if (slide.locked) {
        return (
          <div className="text-center">
            <p className="text-4xl mb-3">🔒</p>
            <h3 className="text-xl font-bold text-primary">That was the free preview.</h3>
            <p className="mt-1 text-sm text-muted">
              The full lesson, the rest of this explainer and the exercises open with a free 7-day trial.
            </p>
            <Link href="/signup" className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors">
              Unlock {slide.title} →
            </Link>
            <p className="mt-3 text-xs text-muted">Cancel before day 7 and pay nothing.</p>
          </div>
        );
      }
      return (
        <div className="text-center">
          <p className="text-4xl mb-3">🦉</p>
          <h3 className="text-xl font-bold text-primary">You&apos;ve got the idea.</h3>
          <p className="mt-1 text-sm text-muted">Now make it stick with a few exercises.</p>
          <Link href={slide.exercisesHref} className="inline-block mt-5 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors">
            Practise {slide.title} →
          </Link>
        </div>
      );
  }
}
