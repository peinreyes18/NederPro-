import { Topic } from '@/content/types';

export const alphabetPronunciation: Topic = {
  id: 'alphabet-pronunciation',
  levelId: 'a0',
  title: 'The Dutch Alphabet and Pronunciation',
  subtitle: 'Het Nederlandse alfabet en uitspraak',
  order: 1,
  estimatedMinutes: 25,
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'The Dutch Alphabet',
        rule: 'Dutch uses the same 26 letters as English, but many letters are pronounced differently.',
        explanation:
          'The Dutch alphabet has 26 letters. While many look the same as English, the pronunciation is often very different. Mastering Dutch pronunciation early will help you be understood and understand others. Pay special attention to vowel sounds and the unique Dutch consonant combinations.',
      },
      {
        type: 'grammar-table',
        title: 'Vowel Sounds',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['a (short)', 'like "a" in "father" but shorter', 'kat', 'cat'],
          ['aa / a (long)', 'like "a" in "father"', 'maat', 'measure'],
          ['e (short)', 'like "e" in "bet"', 'bed', 'bed'],
          ['ee / e (long)', 'like "ay" in "say"', 'been', 'leg'],
          ['i (short)', 'like "i" in "sit"', 'dit', 'this'],
          ['ie', 'like "ee" in "see"', 'niet', 'not'],
          ['o (short)', 'like "o" in "pot"', 'bos', 'forest'],
          ['oo / o (long)', 'like "o" in "go"', 'boot', 'boat'],
          ['u (short)', 'like "u" in "put" (rounded)', 'bus', 'bus'],
          ['uu', 'like French "u" (no English equivalent)', 'uur', 'hour'],
          ['oe', 'like "oo" in "moon"', 'boek', 'book'],
          ['eu', 'like French "eu" (rounded lips)', 'neus', 'nose'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Dutch Diphthongs',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['ei / ij', 'like "ay" in "my" (identical sound)', 'trein / vrij', 'train / free'],
          ['ui', 'unique Dutch sound (rounded "ow")', 'huis', 'house'],
          ['ou / au', 'like "ow" in "how"', 'oud / blauw', 'old / blue'],
          ['aai', '"ah" + "ee"', 'draai', 'turn'],
          ['oei', '"oo" + "ee"', 'groei', 'growth'],
          ['ooi', '"oh" + "ee"', 'mooi', 'beautiful'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Consonant Sounds',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['g', 'guttural, back of throat (like clearing throat)', 'goed', 'good'],
          ['ch', 'same as Dutch "g"', 'nacht', 'night'],
          ['sch', '"s" + "ch" (guttural)', 'school', 'school'],
          ['r', 'rolled or guttural (varies by region)', 'rood', 'red'],
          ['v', 'softer than English "v", almost "f"', 'van', 'from'],
          ['w', 'between English "v" and "w"', 'wat', 'what'],
          ['j', 'like English "y" in "yes"', 'ja', 'yes'],
        ],
        caption: 'The Dutch "g" and "ch" are the most distinctive sounds for learners.',
      },
      {
        type: 'examples',
        title: 'Practice Words',
        examples: [
          { dutch: 'Goedemorgen', english: 'Good morning', highlight: ['Goe'], note: 'Notice the "g" sound at the start' },
          { dutch: 'Schiphol', english: 'Amsterdam airport', highlight: ['Sch'], note: 'Common word - practice the "sch" sound' },
          { dutch: 'Ik spreek een beetje Nederlands', english: 'I speak a little Dutch', highlight: ['spreek', 'beetje'] },
          { dutch: 'Hoe gaat het?', english: 'How are you?', highlight: ['Hoe', 'gaat'] },
        ],
      },
      {
        type: 'note',
        title: 'Pronunciation Tip',
        content:
          'Dutch spelling is quite regular once you know the rules. Unlike English, Dutch words are mostly pronounced as they are written. The key challenge is mastering the unique vowel and consonant sounds that do not exist in English.',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a0-alpha-speak-1',
      type: 'speaking',
      instruction: 'Say each Dutch word out loud. Tap the microphone and speak clearly.',
      difficulty: 'controlled',
      content: {
        type: 'speaking',
        items: [
          {
            dutchText: 'ja',
            englishTranslation: 'yes',
            hint: 'sounds like English "ya"',
          },
          {
            dutchText: 'goed',
            englishTranslation: 'good',
            hint: 'start with the guttural Dutch "g"',
          },
          {
            dutchText: 'boek',
            englishTranslation: 'book',
            hint: '"oe" sounds like "oo" in moon',
          },
          {
            dutchText: 'huis',
            englishTranslation: 'house',
            hint: '"ui" is a unique Dutch sound — rounded lips',
          },
          {
            dutchText: 'nacht',
            englishTranslation: 'night',
            hint: '"ch" is a guttural sound, like clearing your throat',
          },
          {
            dutchText: 'water',
            englishTranslation: 'water',
            hint: 'Dutch "w" is softer than English, between "v" and "w"',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-speak-2',
      type: 'speaking',
      instruction: 'Practice these slightly harder Dutch words. Focus on the vowel sounds.',
      difficulty: 'guided',
      content: {
        type: 'speaking',
        items: [
          {
            dutchText: 'mooi',
            englishTranslation: 'beautiful',
            hint: '"oo" + "ee" blended together',
          },
          {
            dutchText: 'neus',
            englishTranslation: 'nose',
            hint: '"eu" — round your lips as if to say "oo" but say "ee"',
          },
          {
            dutchText: 'school',
            englishTranslation: 'school',
            hint: '"sch" = "s" + guttural "ch"',
          },
          {
            dutchText: 'maan',
            englishTranslation: 'moon',
            hint: 'long "aa" sound — hold it a little longer',
          },
          {
            dutchText: 'trein',
            englishTranslation: 'train',
            hint: '"ei" sounds like "ay" in "my"',
            acceptableAnswers: ['trien', 'train'],
          },
          {
            dutchText: 'goedemorgen',
            englishTranslation: 'good morning',
            hint: 'guttural "g" at the start — "khoo-deh-MOR-khen"',
          },
        ],
      },
    },
  ],
};
