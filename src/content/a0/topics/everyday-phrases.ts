import { Topic } from '@/content/types';

export const everydayPhrases: Topic = {
  id: 'everyday-phrases',
  levelId: 'a0',
  title: 'Essential Everyday Phrases',
  subtitle: 'Dagelijkse zinnen',
  order: 4,
  estimatedMinutes: 20,
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Polite Expressions',
        rule: 'Dutch uses "alstublieft" (formal) or "alsjeblieft" (informal) for both "please" and "here you are".',
        explanation:
          'Polite expressions are essential for daily interactions at work and in shops. "Alstublieft" is used when giving something to someone AND when requesting something politely. Context determines the meaning.',
      },
      {
        type: 'grammar-table',
        title: 'Essential Polite Expressions',
        headers: ['Dutch', 'English', 'Register'],
        audioColumns: [0],
        rows: [
          ['Alstublieft', 'Please / Here you are', 'Formal'],
          ['Alsjeblieft', 'Please / Here you are', 'Informal'],
          ['Dank u wel', 'Thank you', 'Formal'],
          ['Dank je wel', 'Thank you', 'Informal'],
          ['Bedankt', 'Thanks', 'Neutral'],
          ['Graag gedaan', 'You\'re welcome', 'Neutral'],
          ['Pardon / Sorry', 'Excuse me / Sorry', 'Neutral'],
          ['Neem me niet kwalijk', 'Excuse me (formal)', 'Formal'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Basic Communication',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['Ja', 'Yes'],
          ['Nee', 'No'],
          ['Ik begrijp het.', 'I understand.'],
          ['Ik begrijp het niet.', 'I don\'t understand.'],
          ['Kunt u dat herhalen?', 'Can you repeat that? (formal)'],
          ['Spreekt u Engels?', 'Do you speak English? (formal)'],
          ['Ik spreek een beetje Nederlands.', 'I speak a little Dutch.'],
          ['Wat betekent dat?', 'What does that mean?'],
        ],
      },
      {
        type: 'examples',
        title: 'In a Shop or Restaurant',
        examples: [
          { dutch: 'Mag ik een koffie, alstublieft?', english: 'May I have a coffee, please?', highlight: ['Mag', 'alstublieft'] },
          { dutch: 'Hoeveel kost het?', english: 'How much does it cost?', highlight: ['Hoeveel', 'kost'] },
          { dutch: 'De rekening, alstublieft.', english: 'The bill, please.' },
        ],
      },
      {
        type: 'workplace-context',
        scenario: 'At the office',
        examples: [
          { dutch: 'Ik heb een afspraak.', english: 'I have an appointment.', highlight: ['afspraak'] },
          { dutch: 'Waar is de vergaderzaal?', english: 'Where is the meeting room?', highlight: ['Waar', 'vergaderzaal'] },
          { dutch: 'Kunt u mij helpen?', english: 'Can you help me? (formal)', highlight: ['Kunt', 'helpen'] },
          { dutch: 'Ik heb een vraag.', english: 'I have a question.' },
          { dutch: 'Tot morgen!', english: 'See you tomorrow!' },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Alstublieft, ik wil koffie.',
            correct: 'Mag ik een koffie, alstublieft?',
            explanation: 'When requesting, "alstublieft" goes at the end. Use "Mag ik..." to be polite.',
          },
          {
            incorrect: 'Kan u dat herhalen?',
            correct: 'Kunt u dat herhalen?',
            explanation: 'With "u" (formal), the verb form is "kunt", not "kan".',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-phrases-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct Dutch phrase.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "Thank you" formally in Dutch?',
            options: ['Dank je wel', 'Bedankt', 'Dank u wel', 'Graag gedaan'],
            correctIndex: 2,
            explanation: '"Dank u wel" is the formal way to say thank you. "Dank je wel" is informal.',
          },
          {
            question: 'You want to order a coffee politely. What do you say?',
            options: [
              'Ik wil koffie.',
              'Koffie!',
              'Mag ik een koffie, alstublieft?',
              'Geef mij koffie.',
            ],
            correctIndex: 2,
            explanation: '"Mag ik een koffie, alstublieft?" is the polite way to order.',
          },
          {
            question: 'Someone thanks you. How do you respond?',
            options: ['Bedankt', 'Graag gedaan', 'Alstublieft', 'Pardon'],
            correctIndex: 1,
            explanation: '"Graag gedaan" means "You\'re welcome" (literally: "gladly done").',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik begrijp het', after: '.', correctAnswer: 'niet', hint: 'negative' },
          { before: 'Spreekt u', after: '?', correctAnswer: 'Engels', hint: 'English language' },
          { before: 'Mag ik een koffie,', after: '?', correctAnswer: 'alstublieft', hint: 'please (formal)', acceptableAnswers: ['alsjeblieft'] },
        ],
      },
    },
    {
      id: 'a0-phrases-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['afspraak', 'heb', 'Ik', 'een', '.'],
            correctOrder: ['Ik', 'heb', 'een', 'afspraak', '.'],
            translation: 'I have an appointment.',
          },
          {
            shuffledWords: ['vergaderzaal', 'is', 'de', 'Waar', '?'],
            correctOrder: ['Waar', 'is', 'de', 'vergaderzaal', '?'],
            translation: 'Where is the meeting room?',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct Dutch expression for the situation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'You don\'t understand what someone said. What do you say?',
            options: [
              'Ik begrijp het.',
              'Graag gedaan.',
              'Kunt u dat herhalen?',
              'Tot ziens.',
            ],
            correctIndex: 2,
            explanation: '"Kunt u dat herhalen?" means "Can you repeat that?" (formal).',
          },
          {
            question: 'What does "Wat betekent dat?" mean?',
            options: [
              'What is your name?',
              'What does that mean?',
              'What time is it?',
              'What do you want?',
            ],
            correctIndex: 1,
            explanation: '"Wat betekent dat?" means "What does that mean?" - useful when you hear a new word.',
          },
          {
            question: 'Which is the FORMAL way to say "please"?',
            options: ['Alsjeblieft', 'Alstublieft', 'Bedankt', 'Graag'],
            correctIndex: 1,
            explanation: '"Alstublieft" is formal (with "u"). "Alsjeblieft" is informal (with "je").',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-mc-3',
      type: 'multiple-choice',
      instruction: 'Match the Dutch phrase to its English meaning.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Neem me niet kwalijk" means:',
            options: ['Thank you very much', 'Excuse me (formal)', 'Nice to meet you', 'Goodbye'],
            correctIndex: 1,
            explanation: '"Neem me niet kwalijk" is a formal way to say "Excuse me" or "I\'m sorry".',
          },
          {
            question: '"Ik spreek een beetje Nederlands" means:',
            options: [
              'I speak Dutch fluently.',
              'I don\'t speak Dutch.',
              'I speak a little Dutch.',
              'I want to learn Dutch.',
            ],
            correctIndex: 2,
            explanation: '"een beetje" means "a little". So: "I speak a little Dutch."',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the polite expression.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Kunt u mij', after: '? (help)', correctAnswer: 'helpen', hint: 'to help' },
          { before: 'Ik heb een', after: '. (question)', correctAnswer: 'vraag', hint: 'Dutch word for question' },
          { before: 'Hoeveel', after: 'het? (costs)', correctAnswer: 'kost', hint: 'to cost' },
          { before: 'De rekening,', after: '. (please, formal)', correctAnswer: 'alstublieft', hint: 'formal please', acceptableAnswers: ['alsjeblieft'] },
        ],
      },
    },
    {
      id: 'a0-phrases-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Choose between "ja" and "nee" to answer the question.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Spreekt u Engels? -', after: ', ik spreek Engels.', correctAnswer: 'Ja', hint: 'positive answer', acceptableAnswers: ['ja'] },
          { before: 'Begrijpt u het? -', after: ', ik begrijp het niet.', correctAnswer: 'Nee', hint: 'negative answer', acceptableAnswers: ['nee'] },
        ],
      },
    },
    {
      id: 'a0-phrases-order-2',
      type: 'word-order',
      instruction: 'Build the correct sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['u', 'mij', 'Kunt', 'helpen', '?'],
            correctOrder: ['Kunt', 'u', 'mij', 'helpen', '?'],
            translation: 'Can you help me? (formal)',
          },
          {
            shuffledWords: ['een', 'koffie', 'Mag', 'ik', 'alstublieft', '?', ','],
            correctOrder: ['Mag', 'ik', 'een', 'koffie', ',', 'alstublieft', '?'],
            translation: 'May I have a coffee, please?',
          },
          {
            shuffledWords: ['het', 'begrijp', 'Ik', 'niet', '.'],
            correctOrder: ['Ik', 'begrijp', 'het', 'niet', '.'],
            translation: 'I don\'t understand.',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-mc-4',
      type: 'multiple-choice',
      instruction: 'Choose the best response for the workplace situation.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'A colleague gives you a document and says "Alstublieft." What does this mean here?',
            options: [
              'Please',
              'Here you are',
              'Thank you',
              'Excuse me',
            ],
            correctIndex: 1,
            explanation: '"Alstublieft" means both "please" (when requesting) and "here you are" (when giving). Context determines the meaning.',
          },
          {
            question: 'You need to leave the office early. What do you say?',
            options: [
              'Hoi!',
              'Neem me niet kwalijk, ik moet gaan.',
              'Hoeveel kost het?',
              'Wat betekent dat?',
            ],
            correctIndex: 1,
            explanation: '"Neem me niet kwalijk, ik moet gaan" = "Excuse me, I have to go." Polite and professional.',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Write the correct Dutch phrase for the English meaning.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: '(Yes)', correctAnswer: 'Ja', hint: 'affirmative', acceptableAnswers: ['ja'] },
          { before: '', after: '(No)', correctAnswer: 'Nee', hint: 'negative', acceptableAnswers: ['nee'] },
          { before: '', after: '(Sorry / Excuse me)', correctAnswer: 'Sorry', hint: 'same as English', acceptableAnswers: ['sorry', 'Pardon', 'pardon'] },
          { before: '', after: '(Thanks)', correctAnswer: 'Bedankt', hint: 'neutral thank you', acceptableAnswers: ['bedankt', 'Dank u wel', 'dank u wel'] },
        ],
      },
    },
    {
      id: 'a0-phrases-order-3',
      type: 'word-order',
      instruction: 'Build the workplace sentence in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['morgen', 'Tot', '!'],
            correctOrder: ['Tot', 'morgen', '!'],
            translation: 'See you tomorrow!',
          },
          {
            shuffledWords: ['beetje', 'spreek', 'Ik', 'een', 'Nederlands', '.'],
            correctOrder: ['Ik', 'spreek', 'een', 'beetje', 'Nederlands', '.'],
            translation: 'I speak a little Dutch.',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-err-1',
      type: 'error-correction',
      instruction: 'Correct the polite phrase mistake.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Alstublieft, heb ik een koffie?',
            correctedSentence: 'Mag ik een koffie, alstublieft?',
            errorExplanation: 'To request something politely, use "Mag ik … alstublieft?" (May I have … please?). "Alstublieft" comes at the end as a polite addition.',
          },
          {
            incorrectSentence: 'Dank jij wel.',
            correctedSentence: 'Dank je wel.',
            errorExplanation: '"Dank je wel" (informal thank you) uses "je", not "jij". "Jij" is the stressed form of the pronoun and is not used in this fixed expression.',
          },
          {
            incorrectSentence: 'Sorry, ik niet begrijp.',
            correctedSentence: 'Sorry, ik begrijp het niet.',
            errorExplanation: 'The verb "begrijp" must come directly after the subject "ik". The object "het" goes after the verb, and "niet" goes at the end.',
          },
        ],
      },
    },
    {
      id: 'a0-phrases-trans-1',
      type: 'translation',
      instruction: 'Translate the everyday phrase into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'Excuse me.',
            correctDutch: 'Pardon.',
            acceptableAnswers: ['Sorry.', 'Excuseer.'],
            keyVocabulary: [{ dutch: 'pardon', english: 'excuse me (also used to get attention)' }],
          },
          {
            english: 'Can you repeat that?',
            correctDutch: 'Kunt u dat herhalen?',
            acceptableAnswers: ['Kun je dat herhalen?', 'Kunt u dat nog een keer zeggen?'],
            keyVocabulary: [{ dutch: 'herhalen', english: 'to repeat' }],
          },
          {
            english: 'I do not understand.',
            correctDutch: 'Ik begrijp het niet.',
            acceptableAnswers: ['Ik snap het niet.'],
            keyVocabulary: [{ dutch: 'begrijpen', english: 'to understand' }],
          },
        ],
      },
    },
    {
      id: 'a0-phrases-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the polite phrase from the given words.',
      difficulty: 'open',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Mag', 'ik', 'een', 'koffie', 'alstublieft', '?'],
            correctSentence: 'Mag ik een koffie alstublieft?',
            englishPrompt: 'May I have a coffee please?',
          },
          {
            availableWords: ['Spreekt', 'u', 'Engels', '?'],
            correctSentence: 'Spreekt u Engels?',
            englishPrompt: 'Do you speak English? (formal)',
          },
          {
            availableWords: ['langzamer', 'Kunt', 'spreken', 'u', '?'],
            correctSentence: 'Kunt u langzamer spreken?',
            englishPrompt: 'Can you speak more slowly?',
          },
        ],
      },
    },
  ],
};
