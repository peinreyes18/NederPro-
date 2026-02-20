import { Topic } from '@/content/types';

export const basicGreetings: Topic = {
  id: 'basic-greetings',
  levelId: 'a0',
  title: 'Basic Greetings and Introductions',
  subtitle: 'Begroetingen en jezelf voorstellen',
  order: 2,
  estimatedMinutes: 20,
  prerequisites: ['alphabet-pronunciation'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Formal vs. Informal Address',
        rule: 'Dutch has two forms of "you": "jij/je" (informal) and "u" (formal). Use "u" with strangers, at work, and with older people.',
        explanation:
          'This distinction is important in Dutch culture. At work, you will often start with "u" until someone invites you to use "je/jij". This is called "tutoyeren". When in doubt, use "u" - it is always polite.',
      },
      {
        type: 'grammar-table',
        title: 'Common Greetings',
        headers: ['Dutch', 'English', 'When to use'],
        audioColumns: [0],
        rows: [
          ['Hallo', 'Hello', 'Anytime, informal'],
          ['Goedemorgen', 'Good morning', 'Before 12:00'],
          ['Goedemiddag', 'Good afternoon', '12:00 - 18:00'],
          ['Goedenavond', 'Good evening', 'After 18:00'],
          ['Dag', 'Hi / Bye', 'Informal, both greeting and farewell'],
          ['Hoi', 'Hey', 'Very informal'],
          ['Tot ziens', 'Goodbye', 'Formal farewell'],
          ['Doei / Doeg', 'Bye', 'Informal farewell'],
        ],
      },
      {
        type: 'examples',
        title: 'Introducing Yourself',
        examples: [
          { dutch: 'Ik heet Maria.', english: 'My name is Maria.', highlight: ['heet'], note: '"heten" = to be called' },
          { dutch: 'Mijn naam is Jan.', english: 'My name is Jan.', highlight: ['naam'], note: 'More formal way to say your name' },
          { dutch: 'Ik ben Peter.', english: 'I am Peter.', highlight: ['ben'], note: '"zijn" = to be' },
          { dutch: 'Hoe heet je?', english: 'What is your name? (informal)', highlight: ['heet', 'je'] },
          { dutch: 'Hoe heet u?', english: 'What is your name? (formal)', highlight: ['heet', 'u'] },
          { dutch: 'Aangenaam.', english: 'Nice to meet you.', highlight: ['Aangenaam'] },
          { dutch: 'Ik kom uit Duitsland.', english: 'I come from Germany.', highlight: ['kom', 'uit'] },
          { dutch: 'Ik woon in Amsterdam.', english: 'I live in Amsterdam.', highlight: ['woon', 'in'] },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Asking How Someone Is',
        headers: ['Dutch', 'English', 'Register'],
        audioColumns: [0],
        rows: [
          ['Hoe gaat het?', 'How are you?', 'Neutral'],
          ['Hoe gaat het met u?', 'How are you? (formal)', 'Formal'],
          ['Hoe gaat het met je?', 'How are you? (informal)', 'Informal'],
          ['Goed, dank u wel.', 'Fine, thank you.', 'Formal response'],
          ['Goed, dank je wel.', 'Fine, thank you.', 'Informal response'],
          ['Het gaat goed.', 'I am fine.', 'Neutral response'],
          ['En met u? / En met jou?', 'And with you?', 'Formal / Informal'],
        ],
      },
      {
        type: 'workplace-context',
        title: 'At the Office',
        scenario: 'Meeting a new colleague at work',
        examples: [
          { dutch: 'Goedemorgen, ik ben Anna. Ik ben de nieuwe collega.', english: 'Good morning, I am Anna. I am the new colleague.' },
          { dutch: 'Aangenaam. Ik heet Mark. Welkom bij het bedrijf.', english: 'Nice to meet you. My name is Mark. Welcome to the company.' },
          { dutch: 'Dank u wel. Ik begin vandaag.', english: 'Thank you. I start today.' },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Hoe gaat het met jij?',
            correct: 'Hoe gaat het met jou?',
            explanation: 'After a preposition (met), use "jou" instead of "jij".',
          },
          {
            incorrect: 'Ik heet is Maria.',
            correct: 'Ik heet Maria.',
            explanation: '"Heten" already means "to be called" - do not add "is".',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-greet-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct response.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Your manager asks "Hoe gaat het met u?" How do you respond politely?',
            options: [
              'Hoi!',
              'Goed, dank u wel. En met u?',
              'Doei!',
              'Ik heet goed.',
            ],
            correctIndex: 1,
            explanation: '"Goed, dank u wel" is the polite formal response to "Hoe gaat het met u?".',
          },
          {
            question: 'It is 9 AM. Which greeting is most appropriate at work?',
            options: ['Goedenavond', 'Goedemiddag', 'Goedemorgen', 'Doei'],
            correctIndex: 2,
            explanation: '"Goedemorgen" is used before noon (12:00).',
          },
          {
            question: 'How do you say "My name is" in Dutch?',
            options: ['Ik ben naam', 'Ik heet', 'Ik naam is', 'Mijn heet'],
            correctIndex: 1,
            explanation: '"Ik heet..." means "My name is..." (literally: "I am called...").',
          },
        ],
      },
    },
    {
      id: 'a0-greet-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the introduction.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Hallo, ik', after: 'Maria.', correctAnswer: 'heet', hint: 'to be called' },
          { before: 'Ik kom', after: 'Spanje.', correctAnswer: 'uit', hint: 'from' },
          { before: 'Ik woon', after: 'Rotterdam.', correctAnswer: 'in', hint: 'location' },
        ],
      },
    },
    {
      id: 'a0-greet-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Choose the correct form: formal (u) or informal (je/jou).',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Hoe gaat het met', after: '? (speaking to your boss)', correctAnswer: 'u', hint: 'formal' },
          { before: 'Hoe heet', after: '? (speaking to a friend)', correctAnswer: 'je', hint: 'informal' },
          { before: 'Goed, dank', after: 'wel. (to a stranger)', correctAnswer: 'u', hint: 'formal' },
        ],
      },
    },
    {
      id: 'a0-greet-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['heet', 'Ik', 'Peter', '.'],
            correctOrder: ['Ik', 'heet', 'Peter', '.'],
            translation: 'My name is Peter.',
          },
          {
            shuffledWords: ['het', 'gaat', 'Hoe', '?'],
            correctOrder: ['Hoe', 'gaat', 'het', '?'],
            translation: 'How are you?',
          },
        ],
      },
    },
    {
      id: 'a0-greet-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct greeting for the situation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'It is 3 PM. Which greeting is most appropriate?',
            options: ['Goedemorgen', 'Goedemiddag', 'Goedenavond', 'Goedenacht'],
            correctIndex: 1,
            explanation: '"Goedemiddag" is used between 12:00 and 18:00.',
          },
          {
            question: 'You are leaving the office. What do you say to your boss?',
            options: ['Hoi!', 'Doei!', 'Tot ziens.', 'Dag dag!'],
            correctIndex: 2,
            explanation: '"Tot ziens" is a formal farewell, appropriate for a professional setting.',
          },
          {
            question: 'How do you say "Nice to meet you" in Dutch?',
            options: ['Goedendag', 'Aangenaam', 'Alstublieft', 'Dank u wel'],
            correctIndex: 1,
            explanation: '"Aangenaam" means "Nice to meet you" or "Pleased to meet you".',
          },
        ],
      },
    },
    {
      id: 'a0-greet-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the conversation with the correct word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Hoe gaat het met', after: '? (formal)', correctAnswer: 'u', hint: 'formal "you"' },
          { before: 'Goed, dank u', after: '.', correctAnswer: 'wel', hint: 'thank you ...' },
          { before: 'Ik kom', after: 'Marokko.', correctAnswer: 'uit', hint: 'from' },
          { before: 'Ik', after: 'de nieuwe collega.', correctAnswer: 'ben', hint: 'to be' },
        ],
      },
    },
    {
      id: 'a0-greet-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct Dutch expression.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is the INFORMAL way to ask someone\'s name?',
            options: ['Hoe heet u?', 'Hoe heet je?', 'Wat is uw naam?', 'Hoe heet hij?'],
            correctIndex: 1,
            explanation: '"Hoe heet je?" uses "je" (informal you). "Hoe heet u?" uses "u" (formal you).',
          },
          {
            question: '"Ik woon in Den Haag." means:',
            options: [
              'I work in The Hague.',
              'I live in The Hague.',
              'I come from The Hague.',
              'I study in The Hague.',
            ],
            correctIndex: 1,
            explanation: '"wonen" means "to live (somewhere)". "Ik woon in Den Haag" = I live in The Hague.',
          },
        ],
      },
    },
    {
      id: 'a0-greet-order-2',
      type: 'word-order',
      instruction: 'Build the correct Dutch sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['uit', 'kom', 'Ik', 'Turkije', '.'],
            correctOrder: ['Ik', 'kom', 'uit', 'Turkije', '.'],
            translation: 'I come from Turkey.',
          },
          {
            shuffledWords: ['in', 'woon', 'Ik', 'Rotterdam', '.'],
            correctOrder: ['Ik', 'woon', 'in', 'Rotterdam', '.'],
            translation: 'I live in Rotterdam.',
          },
          {
            shuffledWords: ['de', 'ben', 'Ik', 'nieuwe', 'collega', '.'],
            correctOrder: ['Ik', 'ben', 'de', 'nieuwe', 'collega', '.'],
            translation: 'I am the new colleague.',
          },
        ],
      },
    },
    {
      id: 'a0-greet-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Match the time of day to the correct greeting. Write the greeting.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '08:00 →', after: '', correctAnswer: 'Goedemorgen', hint: 'before 12:00', acceptableAnswers: ['goedemorgen'] },
          { before: '14:30 →', after: '', correctAnswer: 'Goedemiddag', hint: '12:00 - 18:00', acceptableAnswers: ['goedemiddag'] },
          { before: '20:00 →', after: '', correctAnswer: 'Goedenavond', hint: 'after 18:00', acceptableAnswers: ['goedenavond'] },
        ],
      },
    },
    {
      id: 'a0-greet-mc-4',
      type: 'multiple-choice',
      instruction: 'Select the correct response in a workplace introduction.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Your new colleague says: "Hallo, ik ben Mark. Welkom bij het bedrijf." What is the best response?',
            options: [
              'Doei Mark!',
              'Aangenaam, ik heet Anna. Dank u wel.',
              'Nee, dank u.',
              'Hoe gaat het met jou?',
            ],
            correctIndex: 1,
            explanation: 'The best response introduces yourself and thanks them: "Aangenaam, ik heet Anna. Dank u wel."',
          },
          {
            question: 'At a formal meeting, someone asks "Hoe gaat het met u?" and you want to respond and ask them back. What do you say?',
            options: [
              'Goed, dank u wel. En met u?',
              'Hoi! En jij?',
              'Ja, goed.',
              'Doei!',
            ],
            correctIndex: 0,
            explanation: 'In a formal setting, respond with "Goed, dank u wel. En met u?" using the formal "u" form.',
          },
        ],
      },
    },
    {
      id: 'a0-greet-order-3',
      type: 'word-order',
      instruction: 'Build the correct introduction sentence.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['bij', 'Welkom', 'bedrijf', 'het', '.'],
            correctOrder: ['Welkom', 'bij', 'het', 'bedrijf', '.'],
            translation: 'Welcome to the company.',
          },
          {
            shuffledWords: ['het', 'met', 'gaat', 'Hoe', 'u', '?'],
            correctOrder: ['Hoe', 'gaat', 'het', 'met', 'u', '?'],
            translation: 'How are you? (formal)',
          },
        ],
      },
    },
    {
      id: 'a0-greet-err-1',
      type: 'error-correction',
      instruction: 'Correct the greeting or introduction mistake.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik ben naam Jan.',
            correctedSentence: 'Ik heet Jan.',
            errorExplanation: 'To say your name in Dutch, use "Ik heet [naam]" or "Mijn naam is [naam]". "Ik ben naam" is not correct.',
          },
          {
            incorrectSentence: 'Dag, hoe gaat het jij?',
            correctedSentence: 'Dag, hoe gaat het met jou?',
            errorExplanation: '"Hoe gaat het?" is followed by "met" + the person: "Hoe gaat het met jou?" or "Hoe gaat het met u?" (formal).',
          },
          {
            incorrectSentence: 'Goede morgen, meneer.',
            correctedSentence: 'Goedemorgen, meneer.',
            errorExplanation: '"Goedemorgen" is written as one word in Dutch, not two.',
          },
        ],
      },
    },
    {
      id: 'a0-greet-trans-1',
      type: 'translation',
      instruction: 'Translate the greeting or phrase into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'Good morning! (formal)',
            correctDutch: 'Goedemorgen!',
            acceptableAnswers: ['Goedemorgen'],
            keyVocabulary: [{ dutch: 'goedemorgen', english: 'good morning' }],
          },
          {
            english: 'Nice to meet you.',
            correctDutch: 'Aangenaam.',
            acceptableAnswers: ['Aangenaam kennis te maken.', 'Leuk je te ontmoeten.'],
            keyVocabulary: [{ dutch: 'aangenaam', english: 'nice to meet you (formal)' }],
          },
          {
            english: 'See you tomorrow!',
            correctDutch: 'Tot morgen!',
            keyVocabulary: [{ dutch: 'tot morgen', english: 'see you tomorrow' }],
          },
        ],
      },
    },
    {
      id: 'a0-greet-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the greeting or introduction from the given words.',
      difficulty: 'open',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Mijn', 'naam', 'is', 'Anna', '.'],
            correctSentence: 'Mijn naam is Anna.',
            englishPrompt: 'My name is Anna.',
          },
          {
            availableWords: ['Ik', 'kom', 'uit', 'Nederland', '.'],
            correctSentence: 'Ik kom uit Nederland.',
            englishPrompt: 'I come from the Netherlands.',
          },
          {
            availableWords: ['Hoe', 'gaat', 'met', 'het', 'u', '?'],
            correctSentence: 'Hoe gaat het met u?',
            englishPrompt: 'How are you? (formal)',
          },
        ],
      },
    },
  ],
};
