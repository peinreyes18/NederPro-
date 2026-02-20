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
      id: 'a0-alpha-mc-1',
      type: 'multiple-choice',
      instruction: 'Select the correct pronunciation description.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How is the Dutch "g" pronounced?',
            options: [
              'Like English "g" in "go"',
              'Like a guttural sound from the back of the throat',
              'Like English "j" in "jam"',
              'It is silent',
            ],
            correctIndex: 1,
            explanation: 'The Dutch "g" is a guttural sound produced at the back of the throat, similar to clearing your throat.',
          },
          {
            question: 'The Dutch "ij" sounds most like:',
            options: [
              '"ee" in "see"',
              '"ay" in "my"',
              '"oy" in "boy"',
              '"i" in "bit"',
            ],
            correctIndex: 1,
            explanation: '"ij" is a Dutch diphthong that sounds like "ay" in "my". It is identical in sound to "ei".',
          },
          {
            question: 'The Dutch "oe" sounds like:',
            options: [
              '"oo" in "moon"',
              '"ow" in "how"',
              '"oy" in "boy"',
              '"o" in "go"',
            ],
            correctIndex: 0,
            explanation: '"oe" in Dutch is pronounced like "oo" in the English word "moon".',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-mc-2',
      type: 'multiple-choice',
      instruction: 'Which word contains the "ui" diphthong?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which of these words contains the unique Dutch "ui" sound?',
            options: ['boot', 'huis', 'nacht', 'been'],
            correctIndex: 1,
            explanation: '"Huis" (house) contains the "ui" diphthong, which is a unique Dutch sound.',
          },
          {
            question: 'Which word pair has the same vowel sound?',
            options: ['ei / ij', 'oe / eu', 'aa / ui', 'ie / oe'],
            correctIndex: 0,
            explanation: '"ei" and "ij" are pronounced identically in Dutch, both sounding like "ay" in "my".',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the missing Dutch vowel combination.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'b', after: 'k (book)', correctAnswer: 'oe', hint: 'sounds like "oo" in moon' },
          { before: 'h', after: 's (house)', correctAnswer: 'ui', hint: 'unique Dutch sound' },
          { before: 'tr', after: 'n (train)', correctAnswer: 'ei', hint: 'sounds like "ay" in my', acceptableAnswers: ['ij'] },
        ],
      },
    },
    {
      id: 'a0-alpha-mc-3',
      type: 'multiple-choice',
      instruction: 'Select the correct answer about Dutch consonant sounds.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'The Dutch "j" is pronounced like:',
            options: [
              'English "j" in "jam"',
              'English "y" in "yes"',
              'English "h" in "hat"',
              'It is silent',
            ],
            correctIndex: 1,
            explanation: 'The Dutch "j" sounds like English "y" in "yes". For example: "ja" (yes) sounds like "yah".',
          },
          {
            question: 'Which Dutch consonant combination sounds the same as "g"?',
            options: ['sch', 'ch', 'ng', 'th'],
            correctIndex: 1,
            explanation: '"ch" is pronounced the same as the Dutch "g" - both are guttural sounds from the back of the throat.',
          },
          {
            question: 'The Dutch "w" is:',
            options: [
              'The same as English "w"',
              'Between English "v" and "w"',
              'Like English "f"',
              'Silent before vowels',
            ],
            correctIndex: 1,
            explanation: 'The Dutch "w" is somewhere between an English "v" and "w". It is softer than English "w".',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-mc-4',
      type: 'multiple-choice',
      instruction: 'Identify the correct vowel sound.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'The word "boot" (boat) contains which vowel sound?',
            options: ['Short "o"', 'Long "oo"', '"oe" sound', '"ou" sound'],
            correctIndex: 1,
            explanation: '"boot" has the long "oo" sound, like "o" in the English "go".',
          },
          {
            question: 'The word "neus" (nose) contains which vowel sound?',
            options: ['The "eu" sound', 'The "oe" sound', 'The "ui" sound', 'The short "e" sound'],
            correctIndex: 0,
            explanation: '"neus" contains the "eu" sound, which is like the French "eu" with rounded lips. It has no exact English equivalent.',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the missing vowel or consonant combination to complete the Dutch word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'n', after: 'ht (night)', correctAnswer: 'ac', hint: 'short "a" + "ch" sound' },
          { before: 'g', after: 'd (good)', correctAnswer: 'oe', hint: 'sounds like "oo" in moon' },
          { before: 'm', after: 'i (beautiful)', correctAnswer: 'oo', hint: 'long "o" sound' },
          { before: 'n', after: 's (nose)', correctAnswer: 'eu', hint: 'rounded lips sound' },
        ],
      },
    },
    {
      id: 'a0-alpha-mc-5',
      type: 'multiple-choice',
      instruction: 'Match the Dutch word to its correct vowel type.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'The word "kat" (cat) has:',
            options: ['A short "a" sound', 'A long "aa" sound', 'An "au" diphthong', 'An "aai" diphthong'],
            correctIndex: 0,
            explanation: '"kat" has a short "a". Compare with "maat" (measure) which has the long "aa" sound.',
          },
          {
            question: 'What is the difference between "man" and "maan"?',
            options: [
              '"man" has a short "a", "maan" has a long "a"',
              'They sound the same',
              '"man" has a long "a", "maan" has a short "a"',
              'The difference is only in spelling, not sound',
            ],
            correctIndex: 0,
            explanation: '"man" (man) has a short "a" sound, while "maan" (moon) has a long "aa" sound. This difference changes the meaning.',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the word with the correct Dutch diphthong.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'bl', after: 'w (blue)', correctAnswer: 'au', hint: 'sounds like "ow" in how', acceptableAnswers: ['ou'] },
          { before: 'vr', after: ' (free)', correctAnswer: 'ij', hint: 'sounds like "ay" in my', acceptableAnswers: ['ei'] },
          { before: 'gr', after: 'i (growth)', correctAnswer: 'oe', hint: 'like "oo" in moon + ee' },
        ],
      },
    },
    {
      id: 'a0-alpha-mc-6',
      type: 'multiple-choice',
      instruction: 'Test your knowledge of Dutch spelling and pronunciation rules.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which statement about Dutch pronunciation is TRUE?',
            options: [
              'Dutch has many silent letters like English',
              'Dutch words are mostly pronounced as they are written',
              'Dutch vowels sound the same as English vowels',
              'The Dutch "r" is always silent',
            ],
            correctIndex: 1,
            explanation: 'Dutch spelling is quite regular. Words are mostly pronounced as they are written, unlike English which has many irregularities.',
          },
          {
            question: 'Which sound is UNIQUE to Dutch (not found in English)?',
            options: ['The "b" sound', 'The "ui" diphthong', 'The "s" sound', 'The long "ee" sound'],
            correctIndex: 1,
            explanation: 'The "ui" diphthong is unique to Dutch. It has no equivalent in English and is one of the hardest sounds for learners.',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-order-1',
      type: 'word-order',
      instruction: 'Put the Dutch words in alphabetical order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['nacht', 'boek', 'goed', 'kat'],
            correctOrder: ['boek', 'goed', 'kat', 'nacht'],
            translation: 'Arrange in alphabetical order: night, book, good, cat',
          },
          {
            shuffledWords: ['water', 'huis', 'school', 'ja'],
            correctOrder: ['huis', 'ja', 'school', 'water'],
            translation: 'Arrange in alphabetical order: water, house, school, yes',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch word that matches the English meaning. Use the vowel sounds you have learned.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: '(yes)', correctAnswer: 'ja', hint: 'j sounds like English y' },
          { before: '', after: '(good)', correctAnswer: 'goed', hint: 'g + oe + d' },
          { before: '', after: '(book)', correctAnswer: 'boek', hint: 'b + oe + k' },
          { before: '', after: '(house)', correctAnswer: 'huis', hint: 'h + ui + s' },
        ],
      },
    },
    {
      id: 'a0-alpha-err-1',
      type: 'error-correction',
      instruction: 'The Dutch word is misspelled because of a common pronunciation mistake. Write the correct spelling.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'goet',
            correctedSentence: 'goed',
            errorExplanation: '"Goed" ends in -d (not -t). Although the final -d is often silent, the spelling keeps the -d.',
          },
          {
            incorrectSentence: 'hais',
            correctedSentence: 'huis',
            errorExplanation: '"Huis" contains the Dutch diphthong "ui", not "ai". The "ui" sound has no English equivalent.',
          },
          {
            incorrectSentence: 'jaa',
            correctedSentence: 'ja',
            errorExplanation: '"Ja" (yes) has a single short vowel "a", not a double "aa". Double vowels are only used in the middle of a word to indicate a long vowel.',
          },
        ],
      },
    },
    {
      id: 'a0-alpha-trans-1',
      type: 'translation',
      instruction: 'Write the Dutch word for each English word. Pay attention to spelling.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'school',
            correctDutch: 'school',
            keyVocabulary: [{ dutch: 'sch-', english: '"sch" sounds like "sgh" — the Dutch g after s' }],
          },
          {
            english: 'night',
            correctDutch: 'nacht',
            keyVocabulary: [{ dutch: '-cht', english: '"cht" — the ch is like the Dutch g (guttural)' }],
          },
          {
            english: 'water',
            correctDutch: 'water',
            acceptableAnswers: ['water'],
            keyVocabulary: [{ dutch: 'w-', english: 'Dutch w is softer than English w, somewhere between v and w' }],
          },
        ],
      },
    },
    {
      id: 'a0-alpha-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the sentence from the given Dutch words.',
      difficulty: 'open',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Ik', 'spreek', 'Nederlands', 'een', 'beetje'],
            correctSentence: 'Ik spreek een beetje Nederlands.',
            englishPrompt: 'I speak a little Dutch.',
          },
          {
            availableWords: ['Hoe', 'schrijf', 'je', 'dat', '?'],
            correctSentence: 'Hoe schrijf je dat?',
            englishPrompt: 'How do you spell that?',
          },
        ],
      },
    },
  ],
};
