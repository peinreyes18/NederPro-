'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

// Tries server-side Google TTS first (high quality, works on all browsers).
// Falls back to Web Speech API (free, browser-native).

let serverTtsAvailable: boolean | null = null; // null = unknown, cached after first check

async function checkServerTts(): Promise<boolean> {
  if (serverTtsAvailable !== null) return serverTtsAvailable;
  try {
    const res = await fetch('/api/tts?text=test');
    serverTtsAvailable = res.ok;
  } catch {
    serverTtsAvailable = false;
  }
  return serverTtsAvailable;
}

async function playServerTts(text: string): Promise<void> {
  const url = `/api/tts?text=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Server TTS failed');
  const blob = await res.blob();
  const audioUrl = URL.createObjectURL(blob);
  return new Promise((resolve, reject) => {
    const audio = new Audio(audioUrl);
    audio.onended = () => { URL.revokeObjectURL(audioUrl); resolve(); };
    audio.onerror = () => { URL.revokeObjectURL(audioUrl); reject(); };
    audio.play().catch(reject);
  });
}

export function usePronunciation() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const dutchVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsSupported(true); // always show button — server TTS or Web Speech API will handle it

    if (!window.speechSynthesis) return;

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      dutchVoiceRef.current =
        voices.find((v) => v.lang === 'nl-NL') ||
        voices.find((v) => v.lang.startsWith('nl')) ||
        null;
    };

    pickVoice();
    // Safari fires voiceschanged asynchronously; retry after short delay too
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    const timer = setTimeout(pickVoice, 500);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pickVoice);
      clearTimeout(timer);
    };
  }, []);

  const speak = useCallback(async (text: string) => {
    if (isSpeaking) return;
    setIsSpeaking(true);

    // Try server TTS first (Google Wavenet — natural Dutch voice)
    try {
      const hasServer = await checkServerTts();
      if (hasServer) {
        await playServerTts(text);
        setIsSpeaking(false);
        return;
      }
    } catch {
      // fall through to Web Speech API
    }

    // Fallback: Web Speech API
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    utterance.rate = 0.9;
    if (dutchVoiceRef.current) utterance.voice = dutchVoiceRef.current;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);

  return { speak, isSpeaking, isSupported };
}
