'use client';

import { useState, useCallback, useEffect, useRef } from 'react';

export function usePronunciation() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const dutchVoiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    setIsSupported(true);

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prefer nl-NL, fall back to any nl voice
      dutchVoiceRef.current =
        voices.find((v) => v.lang === 'nl-NL') ||
        voices.find((v) => v.lang.startsWith('nl')) ||
        null;
    };

    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pickVoice);
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'nl-NL';
    utterance.rate = 0.9;
    if (dutchVoiceRef.current) {
      utterance.voice = dutchVoiceRef.current;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak, isSpeaking, isSupported };
}
