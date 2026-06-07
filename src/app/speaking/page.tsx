'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SubscriptionGate from '@/components/ui/SubscriptionGate';
import { cn } from '@/lib/utils';

const TalkingOwl = dynamic(() => import('@/components/speaking/TalkingOwl'), { ssr: false });

type OwlState = 'idle' | 'listening' | 'thinking' | 'speaking';
type Level = 'A1' | 'A2' | 'B1' | 'B2';
type ScenarioId =
  | 'shopping' | 'cafe' | 'restaurant' | 'pharmacy' | 'hairsalon' | 'market' | 'library'
  | 'municipality' | 'bank' | 'phone' | 'postoffice' | 'housing'
  | 'work' | 'school' | 'colleague'
  | 'neighbors' | 'party' | 'sportsclub'
  | 'transport' | 'doctor' | 'dentist' | 'airport';

type CategoryId = 'daily' | 'official' | 'work' | 'social' | 'travel';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  translation?: string;
  feedback?: string;
}

interface SessionSummary {
  totalTurns: number;
  errorCount: number;
  corrections: string[];
}

const SCENARIO_CATEGORIES: { id: CategoryId; label: string; emoji: string }[] = [
  { id: 'daily',    label: 'Daily life',  emoji: '🛍️' },
  { id: 'official', label: 'Official',    emoji: '🏛️' },
  { id: 'work',     label: 'Work',        emoji: '💼' },
  { id: 'social',   label: 'Social',      emoji: '🤝' },
  { id: 'travel',   label: 'Travel',      emoji: '✈️' },
];

const SCENARIOS: { id: ScenarioId; emoji: string; label: string; category: CategoryId }[] = [
  // Daily life
  { id: 'shopping',    emoji: '🛒', label: 'Supermarket',      category: 'daily' },
  { id: 'cafe',        emoji: '☕', label: 'Café',             category: 'daily' },
  { id: 'restaurant',  emoji: '🍽️', label: 'Restaurant',       category: 'daily' },
  { id: 'pharmacy',    emoji: '💊', label: 'Pharmacy',         category: 'daily' },
  { id: 'hairsalon',   emoji: '✂️', label: 'Hair salon',       category: 'daily' },
  { id: 'market',      emoji: '🥦', label: 'Market',           category: 'daily' },
  { id: 'library',     emoji: '📚', label: 'Library',          category: 'daily' },
  // Official
  { id: 'municipality',emoji: '🏛️', label: 'Municipality',     category: 'official' },
  { id: 'bank',        emoji: '🏦', label: 'Bank',             category: 'official' },
  { id: 'phone',       emoji: '📞', label: 'Phone call',       category: 'official' },
  { id: 'postoffice',  emoji: '📮', label: 'Post office',      category: 'official' },
  { id: 'housing',     emoji: '🏠', label: 'Landlord',         category: 'official' },
  // Work
  { id: 'work',        emoji: '💼', label: 'Job interview',    category: 'work' },
  { id: 'school',      emoji: '🏫', label: 'Parent meeting',   category: 'work' },
  { id: 'colleague',   emoji: '🖥️', label: 'Colleague chat',   category: 'work' },
  // Social
  { id: 'neighbors',   emoji: '🏡', label: 'Neighbors',        category: 'social' },
  { id: 'party',       emoji: '🎉', label: 'Birthday party',   category: 'social' },
  { id: 'sportsclub',  emoji: '⚽', label: 'Sports club',      category: 'social' },
  // Travel & health
  { id: 'transport',   emoji: '🚆', label: 'Train station',    category: 'travel' },
  { id: 'doctor',      emoji: '🏥', label: 'Doctor',           category: 'travel' },
  { id: 'dentist',     emoji: '🦷', label: 'Dentist',          category: 'travel' },
  { id: 'airport',     emoji: '✈️', label: 'Airport',          category: 'travel' },
];

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SpeechRecognition: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    webkitSpeechRecognition: any;
  }
}

function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function parseFeedbackItems(feedback: string): string[] {
  if (feedback.match(/\d+\.\s/)) {
    return feedback.split(/(?=\d+\.\s)/).map(s => s.trim()).filter(Boolean);
  }
  return [feedback];
}

function FeedbackDisplay({ feedback, className }: { feedback: string; className?: string }) {
  const items = parseFeedbackItems(feedback);
  return (
    <div className={className}>
      {items.map((item, i) => <p key={i}>{item}</p>)}
    </div>
  );
}

export default function SpeakingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Speaking Practice</p>
        <h1 className="text-3xl font-extrabold text-primary mb-2">Talk to the Owl 🦉</h1>
        <p className="text-sm text-muted max-w-md mx-auto">
          Choose a scenario, pick your level, then speak or type in Dutch. The owl replies and gives instant feedback.
        </p>
      </div>
      <SubscriptionGate feature="speaking practice">
        <SpeakingPractice />
      </SubscriptionGate>
    </div>
  );
}

function SpeakingPractice() {
  const [scenario, setScenario] = useState<ScenarioId>('shopping');
  const [category, setCategory] = useState<CategoryId>('daily');
  const [level, setLevel] = useState<Level>('A2');
  const [owlState, setOwlState] = useState<OwlState>('idle');
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [lastFeedback, setLastFeedback] = useState('');
  const [userTranscript, setUserTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [textInput, setTextInput] = useState('');
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
  const [error, setError] = useState('');
  const [browserSupported, setBrowserSupported] = useState(true);
  const [dutchVoice, setDutchVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [ios, setIos] = useState(false);
  const [lastOwlText, setLastOwlText] = useState('');
  const [summary, setSummary] = useState<SessionSummary | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false);
  const isBusyRef = useRef(false);
  const transcriptRef = useRef('');
  const messagesRef = useRef<Message[]>([]);
  const intentionalStopRef = useRef(false);
  const submittedRef = useRef(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const speakTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { messagesRef.current = messages; }, [messages]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, interimTranscript]);

  useEffect(() => {
    setIos(isIOS());
    const supported = !!(window.SpeechRecognition || window.webkitSpeechRecognition);
    setBrowserSupported(supported);
    if (!supported) setInputMode('text');

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const nl = voices.find((v) => v.lang === 'nl-NL') ?? voices.find((v) => v.lang.startsWith('nl')) ?? null;
      setDutchVoice(nl);
    };
    loadVoices();
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  }, []);

  useEffect(() => () => {
    window.speechSynthesis.cancel();
    if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);
    isListeningRef.current = false;
    intentionalStopRef.current = true;
    recognitionRef.current?.stop();
  }, []);

  const speakDutch = useCallback((text: string, onDone: () => void) => {
    window.speechSynthesis.cancel();
    if (speakTimeoutRef.current) clearTimeout(speakTimeoutRef.current);
    setLastOwlText(text);

    const doSpeak = () => {
      const utter = new SpeechSynthesisUtterance(text);
      if (dutchVoice) utter.voice = dutchVoice;
      utter.lang = 'nl-NL';
      utter.rate = 0.88;
      utter.pitch = 1;

      // Safety timeout: if speech hasn't ended in 30s, force-complete
      const safetyTimer = setTimeout(() => {
        window.speechSynthesis.cancel();
        isBusyRef.current = false;
        setOwlState('idle');
        onDone();
      }, 30000);

      const keepAlive = setInterval(() => {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      }, 8000);

      utter.onstart = () => setOwlState('speaking');
      utter.onend = () => {
        clearInterval(keepAlive);
        clearTimeout(safetyTimer);
        isBusyRef.current = false;
        setOwlState('idle');
        onDone();
      };
      utter.onerror = () => {
        clearInterval(keepAlive);
        clearTimeout(safetyTimer);
        isBusyRef.current = false;
        setOwlState('idle');
        onDone();
      };
      window.speechSynthesis.speak(utter);
    };

    speakTimeoutRef.current = setTimeout(doSpeak, ios ? 300 : 50);
  }, [dutchVoice, ios]);

  const replayOwl = useCallback(() => {
    if (!lastOwlText || isBusyRef.current) return;
    isBusyRef.current = true;
    speakDutch(lastOwlText, () => {});
  }, [lastOwlText, speakDutch]);

  const callAPI = useCallback(async (transcript: string, currentMessages: Message[]) => {
    isBusyRef.current = true;
    setOwlState('thinking');
    setError('');
    try {
      const apiMessages = currentMessages.map(({ role, content }) => ({ role, content }));
      const res = await fetch('/api/speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario, level, messages: apiMessages, userTranscript: transcript }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.');
        isBusyRef.current = false;
        setOwlState('idle');
        return;
      }
      const { dutchResponse, translation, feedback } = data;
      const newMessages: Message[] = [
        ...currentMessages,
        ...(transcript ? [{ role: 'user' as const, content: transcript }] : []),
        { role: 'assistant' as const, content: dutchResponse, translation, feedback },
      ];
      setMessages(newMessages);
      setLastFeedback(feedback ?? '');
      speakDutch(dutchResponse, () => {});
    } catch {
      setError('Network error. Please try again.');
      isBusyRef.current = false;
      setOwlState('idle');
    }
  }, [scenario, level, speakDutch]);

  const buildRecognition = useCallback(() => {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition: any = new SpeechRecognitionClass();
    recognition.lang = 'nl-NL';
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.continuous = !ios;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let finalText = '';
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const r = event.results[i];
        if (r.isFinal) finalText += r[0].transcript;
        else interimText += r[0].transcript;
      }
      if (finalText) {
        transcriptRef.current = (transcriptRef.current + ' ' + finalText).trim();
        setUserTranscript(transcriptRef.current);
      }
      setInterimTranscript(interimText);
    };

    recognition.onend = () => {
      if (intentionalStopRef.current) {
        if (submittedRef.current) return;
        submittedRef.current = true;
        const transcript = transcriptRef.current.trim();
        setInterimTranscript('');
        isListeningRef.current = false;
        setOwlState('idle');
        if (transcript) callAPI(transcript, messagesRef.current);
        return;
      }
      // iOS: auto-restart when continuous=false
      if (isListeningRef.current && ios) {
        try { recognition.start(); } catch { /* already started */ }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (e: any) => {
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      if (e.error === 'not-allowed') {
        setError('Microphone access denied. Please allow microphone in your browser settings.');
        setBrowserSupported(false);
        setInputMode('text');
      }
      isListeningRef.current = false;
      setOwlState('idle');
    };

    return recognition;
  }, [ios, callAPI]);

  const startListening = useCallback(() => {
    if (!browserSupported || isBusyRef.current) return;
    window.speechSynthesis.cancel();
    isListeningRef.current = true;
    intentionalStopRef.current = false;
    submittedRef.current = false;
    setOwlState('listening');
    setUserTranscript('');
    setInterimTranscript('');
    transcriptRef.current = '';
    setError('');
    const recognition = buildRecognition();
    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch {
      setError('Could not start microphone. Please try again or use text input.');
      isListeningRef.current = false;
      setOwlState('idle');
    }
  }, [browserSupported, buildRecognition]);

  const stopListening = useCallback(() => {
    intentionalStopRef.current = true;
    isListeningRef.current = false;
    recognitionRef.current?.stop();
  }, []);

  const handleTextSubmit = useCallback(() => {
    const text = textInput.trim();
    if (!text || isBusyRef.current) return;
    setTextInput('');
    setError('');
    callAPI(text, messagesRef.current);
  }, [textInput, callAPI]);

  const handleStart = useCallback(() => {
    window.speechSynthesis.cancel();
    setStarted(true);
    setMessages([]);
    setLastFeedback('');
    setUserTranscript('');
    setInterimTranscript('');
    setLastOwlText('');
    setSummary(null);
    setError('');
    callAPI('', []);
  }, [callAPI]);

  const handleEndConversation = useCallback(() => {
    window.speechSynthesis.cancel();
    intentionalStopRef.current = true;
    isListeningRef.current = false;
    recognitionRef.current?.stop();
    isBusyRef.current = false;

    const msgs = messagesRef.current;
    const userMsgs = msgs.filter(m => m.role === 'user');
    const assistantMsgs = msgs.filter(m => m.role === 'assistant');
    const corrections: string[] = [];
    let errorCount = 0;

    assistantMsgs.forEach(m => {
      if (!m.feedback) return;
      const lower = m.feedback.toLowerCase();
      const isPositive = (lower.includes('correct') || lower.includes('goed') || lower.includes('perfect') || lower.includes('well done') || lower.includes('listen and try'))
        && !lower.includes('should be') && !lower.includes('instead') && !lower.includes('error') && !lower.includes('incorrect');
      if (!isPositive && m.feedback !== 'Listen and try to reply in Dutch!') {
        errorCount++;
        corrections.push(m.feedback);
      }
    });

    setSummary({ totalTurns: userMsgs.length, errorCount, corrections });
    setOwlState('idle');
  }, []);

  const handleReset = useCallback(() => {
    window.speechSynthesis.cancel();
    intentionalStopRef.current = true;
    isListeningRef.current = false;
    recognitionRef.current?.stop();
    recognitionRef.current = null;
    isBusyRef.current = false;
    setStarted(false);
    setMessages([]);
    setLastFeedback('');
    setUserTranscript('');
    setInterimTranscript('');
    setOwlState('idle');
    setError('');
    setLastOwlText('');
    setTextInput('');
    setSummary(null);
  }, []);

  const isDisabled = owlState === 'thinking' || owlState === 'speaking';
  const scenarioObj = SCENARIOS.find(s => s.id === scenario);

  // ── Setup screen ──────────────────────────────────────────────────────────────
  if (!started) {
    const filteredScenarios = SCENARIOS.filter(s => s.category === category);
    return (
      <div className="space-y-4">
        {/* Category tabs */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Category</p>
          <div className="flex flex-wrap gap-2">
            {SCENARIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setCategory(cat.id);
                  const first = SCENARIOS.find(s => s.category === cat.id);
                  if (first) setScenario(first.id);
                }}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all',
                  category === cat.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-border hover:border-accent/40 text-primary-light'
                )}
              >
                <span>{cat.emoji}</span>{cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scenario grid */}
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Choose a scenario</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {filteredScenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setScenario(s.id)}
                className={cn(
                  'flex items-center gap-2 py-2.5 px-3 rounded-xl border-2 text-sm font-medium transition-all text-left',
                  scenario === s.id
                    ? 'border-accent bg-accent-light text-accent'
                    : 'border-border hover:border-accent/40 text-primary-light'
                )}
              >
                <span className="text-lg flex-shrink-0">{s.emoji}</span>
                <span className="truncate">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Level + input mode */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Your level</p>
            <div className="grid grid-cols-2 gap-1.5">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={cn(
                    'py-2 rounded-lg border-2 text-sm font-bold transition-all',
                    level === l
                      ? 'border-accent bg-accent text-white'
                      : 'border-border hover:border-accent/40 text-primary-light'
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Input method</p>
            <div className="space-y-1.5">
              {[
                { id: 'voice', label: '🎙️ Voice', disabled: !browserSupported },
                { id: 'text',  label: '⌨️ Type' , disabled: false },
              ].map((m) => (
                <button
                  key={m.id}
                  disabled={m.disabled}
                  onClick={() => setInputMode(m.id as 'voice' | 'text')}
                  className={cn(
                    'w-full py-2 rounded-lg border-2 text-sm font-medium transition-all',
                    inputMode === m.id
                      ? 'border-accent bg-accent-light text-accent'
                      : 'border-border hover:border-accent/40 text-primary-light',
                    m.disabled && 'opacity-40 cursor-not-allowed'
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center py-4">
          <TalkingOwl state="idle" />
          <button
            onClick={handleStart}
            className="mt-4 px-8 py-3 bg-accent text-white rounded-full font-semibold text-base hover:bg-accent-hover transition-all shadow-md hover:shadow-lg"
          >
            Start conversation →
          </button>
        </div>
      </div>
    );
  }

  // ── Session summary ───────────────────────────────────────────────────────────
  if (summary) {
    const passed = summary.errorCount === 0;
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-border bg-surface p-6 text-center">
          <div className="text-4xl mb-2">{passed ? '🎉' : '📝'}</div>
          <h2 className="text-xl font-bold text-primary mb-1">Session complete</h2>
          <p className="text-sm text-muted mb-4">
            {scenarioObj?.emoji} {scenarioObj?.label} · {level}
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded-xl bg-background border border-border p-3">
              <p className="text-2xl font-bold text-primary">{summary.totalTurns}</p>
              <p className="text-xs text-muted">Turns spoken</p>
            </div>
            <div className="rounded-xl bg-background border border-border p-3">
              <p className={cn('text-2xl font-bold', summary.errorCount === 0 ? 'text-green-600' : 'text-amber-600')}>
                {summary.errorCount}
              </p>
              <p className="text-xs text-muted">Errors caught</p>
            </div>
          </div>

          {summary.corrections.length > 0 && (
            <div className="text-left mb-5">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">What to work on</p>
              <div className="space-y-2">
                {summary.corrections.map((c, i) => (
                  <div key={i} className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-3 py-2">
                    <FeedbackDisplay
                      feedback={c}
                      className="text-xs text-amber-800 dark:text-amber-200 leading-snug space-y-0.5"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={handleStart}
              className="px-5 py-2.5 rounded-xl border border-border text-sm text-muted hover:bg-surface-hover transition-colors"
            >
              Try again
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
            >
              New scenario →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Active conversation ───────────────────────────────────────────────────────
  const lastOwlMsg = [...messages].reverse().find(m => m.role === 'assistant');

  return (
    <div className="flex flex-col gap-4">

      {/* Owl + status */}
      <div className="flex items-center gap-4 py-2">
        <TalkingOwl state={owlState} />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
            {owlState === 'listening' ? '🔴 Listening…' : owlState === 'thinking' ? '⏳ Thinking…' : owlState === 'speaking' ? '🔊 Speaking…' : '💬 Your turn'}
          </p>
          {lastOwlMsg && (
            <div className="flex items-start gap-2">
              <p className="text-sm text-primary font-medium leading-snug">{lastOwlMsg.content}</p>
              <button
                onClick={replayOwl}
                disabled={isDisabled}
                title="Replay"
                className="shrink-0 mt-0.5 p-1 rounded-md text-muted hover:text-accent hover:bg-accent-light transition-colors disabled:opacity-30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                </svg>
              </button>
            </div>
          )}
          {lastOwlMsg?.translation && (
            <p className="text-xs text-muted italic mt-0.5">{lastOwlMsg.translation}</p>
          )}
        </div>
      </div>

      {/* Chat history */}
      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <div className="px-3 py-2 border-b border-border flex items-center justify-between">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            {scenarioObj?.emoji} {scenarioObj?.label}
          </span>
          <span className="text-xs text-muted">{messages.filter(m => m.role === 'user').length} replies</span>
        </div>
        <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
          {messages.length === 0 && (
            <p className="text-xs text-muted text-center py-4 italic">The conversation will appear here…</p>
          )}
          {messages.map((msg, i) => {
            const nextMsg = messages[i + 1];
            const feedbackForUser = msg.role === 'user' && nextMsg?.role === 'assistant' && nextMsg.feedback && nextMsg.feedback !== 'Listen and try to reply in Dutch!'
              ? nextMsg.feedback
              : null;
            return (
              <div key={i}>
                <div className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn(
                    'max-w-[80%] rounded-2xl px-3 py-2 text-sm',
                    msg.role === 'assistant'
                      ? 'bg-accent text-white rounded-tl-sm'
                      : 'bg-surface-hover text-primary rounded-tr-sm border border-border'
                  )}>
                    <p className="font-medium leading-snug">{msg.content}</p>
                    {msg.role === 'assistant' && msg.translation && (
                      <p className="text-xs opacity-75 mt-0.5 italic">{msg.translation}</p>
                    )}
                  </div>
                </div>
                {feedbackForUser && (
                  <div className="flex justify-end mt-1">
                    <FeedbackDisplay
                      feedback={feedbackForUser}
                      className="text-xs text-amber-600 dark:text-amber-400 max-w-[80%] text-right leading-snug space-y-0.5"
                    />
                  </div>
                )}
              </div>
            );
          })}
          {/* Live interim transcript */}
          {(userTranscript || interimTranscript) && owlState === 'listening' && (
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-3 py-2 text-sm bg-surface-hover text-primary border border-border border-dashed">
                <p className="font-medium leading-snug">
                  {userTranscript}
                  {interimTranscript && <span className="text-muted"> {interimTranscript}</span>}
                </p>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>
      </div>

      {/* Latest feedback panel */}
      {lastFeedback && lastFeedback !== 'Listen and try to reply in Dutch!' && (
        <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 px-4 py-3 flex items-start gap-2">
          <span className="text-base shrink-0">💡</span>
          <FeedbackDisplay
            feedback={lastFeedback}
            className="text-sm text-amber-800 dark:text-amber-200 leading-snug space-y-1"
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      {/* Controls */}
      {inputMode === 'voice' ? (
        <div className="flex items-center gap-4 justify-center pt-1">
          <button
            onClick={owlState === 'listening' ? stopListening : startListening}
            disabled={isDisabled}
            className={cn(
              'w-20 h-20 rounded-full flex flex-col items-center justify-center gap-1 border-4 transition-all shadow-lg text-white font-semibold text-xs select-none',
              owlState === 'listening'
                ? 'bg-green-500 border-green-400 scale-110 shadow-green-200 dark:shadow-green-900'
                : isDisabled
                ? 'bg-muted border-muted opacity-40 cursor-not-allowed'
                : 'bg-accent border-accent-hover hover:scale-105 active:scale-95 cursor-pointer'
            )}
          >
            {owlState === 'listening' ? (
              <><div className="w-5 h-5 bg-white rounded-sm" />Stop</>
            ) : owlState === 'thinking' ? (
              <><svg className="w-7 h-7 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>Wait</>
            ) : (
              <><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>Speak</>
            )}
          </button>

          <div className="flex flex-col gap-2">
            <button onClick={() => setInputMode('text')} className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors">
              ⌨️ Switch to text
            </button>
            <button onClick={handleEndConversation} disabled={messages.length < 2} className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors disabled:opacity-30">
              End &amp; review
            </button>
            <button onClick={handleReset} className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors">
              New scenario
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleTextSubmit()}
              disabled={isDisabled}
              placeholder="Type your Dutch here…"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent disabled:opacity-50"
            />
            <button
              onClick={handleTextSubmit}
              disabled={isDisabled || !textInput.trim()}
              className="px-4 py-3 rounded-xl bg-accent hover:bg-accent-hover text-white font-semibold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
          <div className="flex gap-2">
            {browserSupported && (
              <button onClick={() => setInputMode('voice')} className="flex-1 px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors">
                🎙️ Switch to voice
              </button>
            )}
            <button onClick={handleEndConversation} disabled={messages.length < 2} className="flex-1 px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors disabled:opacity-30">
              End &amp; review
            </button>
            <button onClick={handleReset} className="flex-1 px-3 py-1.5 rounded-lg border border-border text-xs text-muted hover:bg-surface-hover transition-colors">
              New scenario
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
