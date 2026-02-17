import { Topic } from '@/content/types';

export const daysMonthsSeasons: Topic = {
  id: 'days-months-seasons',
  levelId: 'a0',
  title: 'Days, Months & Seasons',
  subtitle: 'Dagen, maanden en seizoenen',
  order: 5,
  estimatedMinutes: 20,
  prerequisites: ['numbers-counting'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Days of the Week',
        rule: 'Dutch days of the week are not capitalized (unlike English) and all end in "-dag" (day).',
        explanation:
          'In Dutch, days of the week start with a lowercase letter unless they begin a sentence. They all contain "-dag" which means "day." You\'ll use these constantly when making appointments, discussing schedules, and at work.',
      },
      {
        type: 'grammar-table',
        title: 'De dagen van de week',
        headers: ['Dutch', 'English', 'Abbreviation'],
        audioColumns: [0],
        rows: [
          ['maandag', 'Monday', 'ma'],
          ['dinsdag', 'Tuesday', 'di'],
          ['woensdag', 'Wednesday', 'wo'],
          ['donderdag', 'Thursday', 'do'],
          ['vrijdag', 'Friday', 'vr'],
          ['zaterdag', 'Saturday', 'za'],
          ['zondag', 'Sunday', 'zo'],
        ],
      },
      {
        type: 'examples',
        title: 'Using Days in Sentences',
        examples: [
          { dutch: 'Ik werk op maandag.', english: 'I work on Monday.', highlight: ['op', 'maandag'] },
          { dutch: 'De vergadering is op woensdag.', english: 'The meeting is on Wednesday.', highlight: ['op', 'woensdag'] },
          { dutch: 'Wat doe je op vrijdag?', english: 'What do you do on Friday?', highlight: ['op', 'vrijdag'] },
          { dutch: 'Het weekend is zaterdag en zondag.', english: 'The weekend is Saturday and Sunday.' },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Months of the Year',
        rule: 'Dutch months are similar to English months and are also written in lowercase.',
        explanation:
          'Most Dutch month names are very similar to English, making them easy to learn. Like days, they are not capitalized. You use "in" before months: "in januari" (in January).',
      },
      {
        type: 'grammar-table',
        title: 'De maanden van het jaar',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['januari', 'January'],
          ['februari', 'February'],
          ['maart', 'March'],
          ['april', 'April'],
          ['mei', 'May'],
          ['juni', 'June'],
          ['juli', 'July'],
          ['augustus', 'August'],
          ['september', 'September'],
          ['oktober', 'October'],
          ['november', 'November'],
          ['december', 'December'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'De vier seizoenen (The Four Seasons)',
        headers: ['Dutch', 'English', 'Months'],
        audioColumns: [0],
        rows: [
          ['de lente / het voorjaar', 'spring', 'maart – mei'],
          ['de zomer', 'summer', 'juni – augustus'],
          ['de herfst', 'autumn / fall', 'september – november'],
          ['de winter', 'winter', 'december – februari'],
        ],
      },
      {
        type: 'examples',
        title: 'Talking About Dates and Seasons',
        examples: [
          { dutch: 'Mijn verjaardag is in maart.', english: 'My birthday is in March.', highlight: ['in', 'maart'] },
          { dutch: 'In de zomer is het warm.', english: 'In summer it is warm.', highlight: ['In', 'zomer'] },
          { dutch: 'De herfst begint in september.', english: 'Autumn begins in September.' },
          { dutch: 'Vandaag is het dinsdag 15 februari.', english: 'Today is Tuesday, February 15th.' },
        ],
      },
      {
        type: 'workplace-context',
        scenario: 'Making appointments and discussing schedules',
        examples: [
          { dutch: 'Kunt u maandag om tien uur?', english: 'Can you do Monday at ten o\'clock?', highlight: ['maandag'] },
          { dutch: 'De deadline is in december.', english: 'The deadline is in December.', highlight: ['in', 'december'] },
          { dutch: 'Ik heb vakantie in juli.', english: 'I have vacation in July.', highlight: ['vakantie', 'juli'] },
          { dutch: 'De vergadering is elke dinsdag.', english: 'The meeting is every Tuesday.', highlight: ['elke', 'dinsdag'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Ik werk op Maandag.',
            correct: 'Ik werk op maandag.',
            explanation: 'Days of the week are not capitalized in Dutch (unlike English).',
          },
          {
            incorrect: 'Mijn verjaardag is op maart.',
            correct: 'Mijn verjaardag is in maart.',
            explanation: 'Use "in" with months: "in maart." Use "op" with specific dates: "op 5 maart."',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-days-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct translation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is "Wednesday" in Dutch?',
            options: ['dinsdag', 'woensdag', 'donderdag', 'vrijdag'],
            correctIndex: 1,
            explanation: 'Woensdag is Wednesday. Dinsdag = Tuesday, donderdag = Thursday, vrijdag = Friday.',
          },
          {
            question: 'Which month is "augustus"?',
            options: ['April', 'June', 'August', 'October'],
            correctIndex: 2,
            explanation: 'Augustus = August. It looks almost the same as the English word.',
          },
          {
            question: 'What is "de herfst"?',
            options: ['spring', 'summer', 'autumn', 'winter'],
            correctIndex: 2,
            explanation: 'De herfst = autumn/fall. De lente = spring, de zomer = summer, de winter = winter.',
          },
          {
            question: 'Which preposition do you use with months?',
            options: ['op', 'in', 'aan', 'bij'],
            correctIndex: 1,
            explanation: 'Use "in" with months: "in januari," "in december." Use "op" with specific days or dates.',
          },
        ],
      },
    },
    {
      id: 'a0-days-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct day or month.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De vergadering is op', after: '.', correctAnswer: 'maandag', hint: 'Monday' },
          { before: 'Mijn verjaardag is in', after: '.', correctAnswer: 'mei', hint: 'May' },
          { before: 'In de', after: 'is het koud.', correctAnswer: 'winter', hint: 'The cold season' },
        ],
      },
    },
    {
      id: 'a0-days-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['op', 'werk', 'Ik', 'dinsdag', '.'],
            correctOrder: ['Ik', 'werk', 'op', 'dinsdag', '.'],
            translation: 'I work on Tuesday.',
          },
          {
            shuffledWords: ['in', 'is', 'verjaardag', 'Mijn', 'oktober', '.'],
            correctOrder: ['Mijn', 'verjaardag', 'is', 'in', 'oktober', '.'],
            translation: 'My birthday is in October.',
          },
        ],
      },
    },
    {
      id: 'a0-days-translation-1',
      type: 'translation',
      instruction: 'Translate the sentence into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The meeting is on Thursday.',
            correctDutch: 'De vergadering is op donderdag.',
            keyVocabulary: [
              { dutch: 'de vergadering', english: 'the meeting' },
              { dutch: 'donderdag', english: 'Thursday' },
            ],
          },
          {
            english: 'I have vacation in July.',
            correctDutch: 'Ik heb vakantie in juli.',
            keyVocabulary: [
              { dutch: 'vakantie', english: 'vacation' },
              { dutch: 'juli', english: 'July' },
            ],
          },
        ],
      },
    },
    {
      id: 'a0-days-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which day comes right after woensdag?',
            options: ['dinsdag', 'vrijdag', 'donderdag', 'maandag'],
            correctIndex: 2,
            explanation: 'Donderdag (Thursday) comes right after woensdag (Wednesday).',
          },
          {
            question: 'What is "Saturday" in Dutch?',
            options: ['zondag', 'vrijdag', 'zaterdag', 'dinsdag'],
            correctIndex: 2,
            explanation: 'Zaterdag = Saturday. Zondag = Sunday, vrijdag = Friday, dinsdag = Tuesday.',
          },
          {
            question: 'Which season does "juni" belong to?',
            options: ['de lente', 'de zomer', 'de herfst', 'de winter'],
            correctIndex: 1,
            explanation: 'Juni (June) is a summer month. De zomer runs from juni to augustus.',
          },
          {
            question: 'How do you say "on Tuesday" in Dutch?',
            options: ['in dinsdag', 'op dinsdag', 'aan dinsdag', 'bij dinsdag'],
            correctIndex: 1,
            explanation: 'Use "op" with days of the week: "op dinsdag" (on Tuesday).',
          },
        ],
      },
    },
    {
      id: 'a0-days-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct option to complete the sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Mijn verjaardag is ___ 5 maart.',
            options: ['in', 'op', 'aan', 'bij'],
            correctIndex: 1,
            explanation: 'Use "op" with specific dates: "op 5 maart." Use "in" with months alone: "in maart."',
          },
          {
            question: 'De lente begint ___ maart.',
            options: ['op', 'in', 'aan', 'om'],
            correctIndex: 1,
            explanation: 'Use "in" with months: "in maart." Use "op" only with specific dates (e.g., op 1 maart).',
          },
          {
            question: 'Which sentence correctly writes a date in Dutch?',
            options: [
              'Vandaag is het Maandag 10 Januari.',
              'Vandaag is het maandag 10 januari.',
              'Vandaag is het Maandag 10 januari.',
              'Vandaag is het maandag 10 Januari.',
            ],
            correctIndex: 1,
            explanation: 'In Dutch, both days and months are written in lowercase: "maandag 10 januari."',
          },
          {
            question: '___ de winter is het koud.',
            options: ['Op', 'In', 'Aan', 'Om'],
            correctIndex: 1,
            explanation: 'Use "in" with seasons: "In de winter" (In winter).',
          },
        ],
      },
    },
    {
      id: 'a0-days-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct preposition or word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik ga naar de markt',
            after: 'zaterdag.',
            correctAnswer: 'op',
            hint: 'preposition used with days',
          },
          {
            before: 'De vakantie is',
            after: 'augustus.',
            correctAnswer: 'in',
            hint: 'preposition used with months',
          },
          {
            before: 'Na woensdag komt',
            after: '.',
            correctAnswer: 'donderdag',
            hint: 'Thursday',
          },
        ],
      },
    },
    {
      id: 'a0-days-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Write the correct Dutch word for the date or time expression.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Vandaag is het',
            after: '14 februari.',
            correctAnswer: 'vrijdag',
            acceptableAnswers: ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'],
          },
          {
            before: 'Oktober en november zijn in',
            after: '.',
            correctAnswer: 'de herfst',
            acceptableAnswers: ['de herfst'],
          },
          {
            before: 'Het eerste seizoen van het jaar is',
            after: '.',
            correctAnswer: 'de winter',
            acceptableAnswers: ['de winter'],
          },
        ],
      },
    },
    {
      id: 'a0-days-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['in', 'begint', 'De', 'september', 'herfst', '.'],
            correctOrder: ['De', 'herfst', 'begint', 'in', 'september', '.'],
            translation: 'Autumn begins in September.',
          },
          {
            shuffledWords: ['op', 'het', 'Vandaag', 'is', 'woensdag', '12', 'juni', '.'],
            correctOrder: ['Vandaag', 'is', 'het', 'woensdag', '12', 'juni', '.'],
            translation: 'Today is Wednesday June 12th.',
          },
        ],
      },
    },
    {
      id: 'a0-days-error-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Mijn verjaardag is op december.',
            correctedSentence: 'Mijn verjaardag is in december.',
            errorExplanation: 'Use "in" with months: "in december." Use "op" with specific dates: "op 5 december."',
          },
          {
            incorrectSentence: 'Ik werk op Dinsdag en Donderdag.',
            correctedSentence: 'Ik werk op dinsdag en donderdag.',
            errorExplanation: 'Days of the week are not capitalized in Dutch. Write "dinsdag" and "donderdag" in lowercase.',
          },
          {
            incorrectSentence: 'De zomer begint op juni.',
            correctedSentence: 'De zomer begint in juni.',
            errorExplanation: 'Use "in" with months: "in juni." The preposition "op" is for specific dates or days.',
          },
        ],
      },
    },
  ],
};
