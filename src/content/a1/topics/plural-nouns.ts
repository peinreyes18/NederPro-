import { Topic } from '@/content/types';

export const pluralNouns: Topic = {
  id: 'plural-nouns',
  levelId: 'a1',
  title: 'Plural Nouns',
  subtitle: 'Meervoud — -en, -s, and irregular plurals',
  order: 10,
  estimatedMinutes: 30,
  prerequisites: ['de-het-articles'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'How Dutch plurals work',
        rule: 'Most Dutch nouns form the plural by adding -en or -s. There are also some irregular plurals. All plurals take the article de (never het).',
        explanation:
          'Dutch has no single universal plural rule — you need to learn which suffix to use. However, there are clear patterns. The most common plural ending is -en. The -s ending is used mainly for words ending in unstressed -el, -em, -en, -er, -aar, -eur, as well as loanwords ending in a vowel. All plurals use de as the article, regardless of whether the singular was de or het.',
      },
      {
        type: 'grammar-table',
        title: 'Plural Rules Overview',
        headers: ['Rule', 'Singular', 'Plural', 'Notes'],
        rows: [
          ['+en (standard)', 'huis', 'huizen', 'spelling change: s→z before -en'],
          ['+en (standard)', 'brief', 'brieven', 'spelling change: f→v before -en'],
          ['+en (standard)', 'dag', 'dagen', 'vowel lengthened: dag → da-gen'],
          ['+en (standard)', 'fiets', 'fietsen', 'no change needed'],
          ['+s (unstressed ending)', 'collega', 'collega\'s', 'ends in vowel → add \'s'],
          ['+s (unstressed ending)', 'leraar', 'leraren', 'exception: -aar → -aren'],
          ['irregular', 'kind', 'kinderen', 'common irregular'],
          ['irregular', 'ei', 'eieren', 'common irregular'],
        ],
        caption: 'All plurals take de as the article: het huis → de huizen; het kind → de kinderen.',
      },
      {
        type: 'note',
        title: 'Spelling rules when adding -en',
        content:
          'Adding -en can trigger spelling changes to preserve pronunciation: (1) Short vowel with double consonant: keep spelling — kat → katten, bus → bussen. (2) Long vowel with single consonant: drop one consonant letter — maan → manen, boot → boten. (3) f → v: brief → brieven, klif → klieven. (4) s → z: huis → huizen, kies → kiezen. These are the same spelling rules you see in verb conjugation.',
        variant: 'tip',
      },
      {
        type: 'examples',
        title: 'Plurals in sentences',
        examples: [
          {
            dutch: 'Er zijn drie kamers in ons huis.',
            english: 'There are three rooms in our house.',
            highlight: ['kamers'],
            note: 'kamer → kamers (-s ending, unstressed -er)',
          },
          {
            dutch: 'De kinderen spelen buiten.',
            english: 'The children are playing outside.',
            highlight: ['kinderen'],
            note: 'kind → kinderen (irregular)',
          },
          {
            dutch: 'Mijn collega\'s werken hard.',
            english: 'My colleagues work hard.',
            highlight: ['collega\'s'],
            note: "collega → collega's (ends in vowel)",
          },
          {
            dutch: 'De brieven liggen op het bureau.',
            english: 'The letters are on the desk.',
            highlight: ['brieven'],
            note: 'brief → brieven (f→v)',
          },
          {
            dutch: 'Hoeveel huizen zijn er in de straat?',
            english: 'How many houses are on the street?',
            highlight: ['huizen'],
            note: 'huis → huizen (s→z)',
          },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Common Irregular Plurals',
        headers: ['Singular', 'Plural', 'Translation'],
        rows: [
          ['kind', 'kinderen', 'child → children'],
          ['ei', 'eieren', 'egg → eggs'],
          ['lid', 'leden', 'member → members'],
          ['gelid', 'gelederen', 'rank → ranks'],
          ['been', 'benen / beenderen', 'leg/bone → legs/bones'],
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'de huis → de huiss',
            correct: 'het huis → de huizen',
            explanation: 'huis uses het in singular; the plural is de huizen (s→z spelling change).',
          },
          {
            incorrect: 'collega → collegas',
            correct: "collega → collega's",
            explanation: "Words ending in a vowel take 's (with apostrophe) to prevent mispronunciation.",
          },
          {
            incorrect: 'maan → maanen',
            correct: 'maan → manen',
            explanation: 'Long vowel (aa) with single n: in the plural only one n is written — manen.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a1-plural-nouns-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct plural form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the plural of "brief" (letter)?',
            options: ['briefs', 'briefen', 'brieven', 'brieften'],
            correctIndex: 2,
            explanation: 'brief → brieven (f→v before -en).',
          },
          {
            question: 'What is the plural of "kind" (child)?',
            options: ['kinds', 'kinden', 'kindes', 'kinderen'],
            correctIndex: 3,
            explanation: 'kind → kinderen (irregular plural).',
          },
          {
            question: 'What is the plural of "collega"?',
            options: ['collegas', "collega's", 'collegas\'', 'collegaen'],
            correctIndex: 1,
            explanation: "Words ending in unstressed vowels take 's: collega's.",
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Write the plural form of the noun in brackets.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Er zijn veel',
            after: 'in de stad. (fiets)',
            correctAnswer: 'fietsen',
            hint: 'fiets → fietsen (+en, no change)',
          },
          {
            before: 'De',
            after: 'spelen in het park. (kind)',
            correctAnswer: 'kinderen',
            hint: 'kind → kinderen (irregular)',
          },
          {
            before: 'Mijn',
            after: 'werken in Amsterdam. (collega)',
            correctAnswer: "collega's",
            hint: "collega ends in vowel → collega's",
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the plural. Watch the spelling changes.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Er staan drie',
            after: 'op de tafel. (lamp)',
            correctAnswer: 'lampen',
            hint: 'lamp → lampen (+en)',
          },
          {
            before: 'De',
            after: 'zijn erg groot hier. (huis)',
            correctAnswer: 'huizen',
            hint: 'huis → huizen (s→z)',
          },
          {
            before: 'Ik schrijf twee',
            after: 'per dag. (brief)',
            correctAnswer: 'brieven',
            hint: 'brief → brieven (f→v)',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-mc-2',
      type: 'multiple-choice',
      instruction: 'Which article is used with all plural nouns?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'het kind → ___ kinderen',
            options: ['het', 'de', 'een'],
            correctIndex: 1,
            explanation: 'All plurals use de, even if the singular used het.',
          },
          {
            question: 'het huis → ___ huizen',
            options: ['het', 'de', 'een'],
            correctIndex: 1,
            explanation: 'All plurals use de.',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-wo-1',
      type: 'word-order',
      instruction: 'Build a correct sentence using the plural noun given.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['de', 'buiten', 'spelen', 'kinderen'],
            correctOrder: ['De', 'kinderen', 'spelen', 'buiten.'],
            translation: 'The children play outside.',
          },
          {
            shuffledWords: ['op', 'mijn', 'liggen', 'brieven', 'bureau', 'de'],
            correctOrder: ['De', 'brieven', 'liggen', 'op', 'mijn', 'bureau.'],
            translation: 'The letters are on my desk.',
          },
          {
            shuffledWords: ['veel', 'zijn', 'stad', 'in', 'er', 'fietsen', 'de'],
            correctOrder: ['Er', 'zijn', 'veel', 'fietsen', 'in', 'de', 'stad.'],
            translation: 'There are many bikes in the city.',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct plural form.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the plural of "dag" (day)?',
            options: ['dags', 'dagen', 'daagen', 'daggen'],
            correctIndex: 1,
            explanation: 'dag has a short vowel + single consonant: lengthen the vowel in spelling — dagen.',
          },
          {
            question: 'What is the plural of "maan" (moon)?',
            options: ['maans', 'maanen', 'manen', 'maanden'],
            correctIndex: 2,
            explanation: 'maan has a long vowel (aa): in the plural drop one a — manen.',
          },
          {
            question: 'What is the plural of "kat" (cat)?',
            options: ['kats', 'katen', 'katten', 'katsen'],
            correctIndex: 2,
            explanation: 'kat has a short vowel: double the consonant before -en — katten.',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Write the plural form. Watch spelling changes carefully.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hoeveel',
            after: 'heb jij vrij? (dag)',
            correctAnswer: 'dagen',
            hint: 'dag → dagen (lengthen vowel)',
          },
          {
            before: 'De',
            after: 'zitten op het dak. (kat)',
            correctAnswer: 'katten',
            hint: 'kat → katten (double consonant)',
          },
          {
            before: 'Er zijn veel',
            after: 'in de stad. (huis)',
            correctAnswer: 'huizen',
            hint: 'huis → huizen (s→z)',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-ec-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in the plural form.',
      difficulty: 'open',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De collegas werken allemaal hard.',
            correctedSentence: "De collega's werken allemaal hard.",
            errorExplanation: "collega ends in a vowel → collega's (with apostrophe before s).",
          },
          {
            incorrectSentence: 'Er zijn veel manen in het jaar.',
            correctedSentence: 'Er zijn veel maanden in het jaar.',
            errorExplanation: 'maand (month) → maanden. manen is the plural of maan (moon), not maand (month).',
          },
          {
            incorrectSentence: 'Ik heb twee briefen geschreven.',
            correctedSentence: 'Ik heb twee brieven geschreven.',
            errorExplanation: 'brief → brieven (f changes to v before -en).',
          },
        ],
      },
    },
    {
      id: 'a1-plural-nouns-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch. Use the correct plural form.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The letters are on the desk.',
            correctDutch: 'De brieven liggen op het bureau.',
          },
          {
            english: 'There are many houses in this street.',
            correctDutch: 'Er zijn veel huizen in deze straat.',
          },
          {
            english: 'My colleagues start early.',
            correctDutch: "Mijn collega's beginnen vroeg.",
          },
        ],
      },
    },
  ],
};
