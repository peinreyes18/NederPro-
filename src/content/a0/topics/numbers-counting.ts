import { Topic } from '@/content/types';

export const numbersCounting: Topic = {
  id: 'numbers-counting',
  levelId: 'a0',
  title: 'Numbers and Counting',
  subtitle: 'Getallen en tellen',
  order: 3,
  estimatedMinutes: 20,
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Dutch Numbers 0-20',
        rule: 'Dutch numbers 0-12 have unique names. From 13-19, the pattern is "units + tien" (similar to English "-teen").',
        explanation:
          'Learning numbers is essential for daily life in the Netherlands: telling time, giving phone numbers, understanding prices, and scheduling at work.',
      },
      {
        type: 'grammar-table',
        title: 'Numbers 0-20',
        headers: ['Number', 'Dutch', 'Number', 'Dutch'],
        audioColumns: [1, 3],
        rows: [
          ['0', 'nul', '11', 'elf'],
          ['1', 'een', '12', 'twaalf'],
          ['2', 'twee', '13', 'dertien'],
          ['3', 'drie', '14', 'veertien'],
          ['4', 'vier', '15', 'vijftien'],
          ['5', 'vijf', '16', 'zestien'],
          ['6', 'zes', '17', 'zeventien'],
          ['7', 'zeven', '18', 'achttien'],
          ['8', 'acht', '19', 'negentien'],
          ['9', 'negen', '20', 'twintig'],
          ['10', 'tien', '', ''],
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Numbers 21-100',
        rule: 'From 21 onwards, Dutch says the unit BEFORE the ten: "eenentwintig" (one-and-twenty) = 21.',
        explanation:
          'This is the opposite of English. "23" is "drieentwintig" (three-and-twenty). The units come first, connected by "en" (and), then the tens. This takes practice but follows a consistent pattern:\n\n21 = eenentwintig\n32 = tweeendertig\n45 = vijfenveertig\n67 = zevenenzestig\n89 = negenentachtig',
      },
      {
        type: 'grammar-table',
        title: 'Tens',
        headers: ['Number', 'Dutch'],
        audioColumns: [1],
        rows: [
          ['10', 'tien'],
          ['20', 'twintig'],
          ['30', 'dertig'],
          ['40', 'veertig'],
          ['50', 'vijftig'],
          ['60', 'zestig'],
          ['70', 'zeventig'],
          ['80', 'tachtig'],
          ['90', 'negentig'],
          ['100', 'honderd'],
        ],
      },
      {
        type: 'examples',
        title: 'Numbers in Context',
        examples: [
          { dutch: 'Ik ben drieendertig jaar oud.', english: 'I am 33 years old.', highlight: ['drieendertig'] },
          { dutch: 'Het kost vijfentwintig euro.', english: 'It costs 25 euros.', highlight: ['vijfentwintig'] },
          { dutch: 'Mijn telefoonnummer is nul-zes-twee-drie.', english: 'My phone number is 0-6-2-3.', note: 'Phone numbers are read digit by digit' },
        ],
      },
      {
        type: 'workplace-context',
        scenario: 'Scheduling a meeting',
        examples: [
          { dutch: 'De vergadering is om twee uur.', english: 'The meeting is at two o\'clock.' },
          { dutch: 'Ik heb vijftien minuten pauze.', english: 'I have a fifteen-minute break.' },
          { dutch: 'Er zijn twaalf collega\'s in het team.', english: 'There are twelve colleagues in the team.' },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'tweeentig',
            correct: 'twintig',
            explanation: '"Twenty" in Dutch is "twintig", not derived regularly from "twee".',
          },
          {
            incorrect: 'veertwintig (24)',
            correct: 'vierentwintig',
            explanation: 'The unit comes first: vier + en + twintig = vierentwintig.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-num-mc-1',
      type: 'multiple-choice',
      instruction: 'Select the correct Dutch number.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is 15 in Dutch?',
            options: ['vijftig', 'vijftien', 'vijfteen', 'dertien'],
            correctIndex: 1,
            explanation: '15 = vijftien (vijf + tien).',
          },
          {
            question: 'What is 37 in Dutch?',
            options: ['drieenzestig', 'zevenendertig', 'drieenzeventig', 'zevenendertien'],
            correctIndex: 1,
            explanation: '37 = zevenendertig. Remember: units first, then tens.',
          },
          {
            question: 'What number is "tweeenvijftig"?',
            options: ['25', '52', '42', '55'],
            correctIndex: 1,
            explanation: 'twee + en + vijftig = 2 + 50 = 52.',
          },
        ],
      },
    },
    {
      id: 'a0-num-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch word for the number.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '7 =', after: '', correctAnswer: 'zeven', hint: 'number 7' },
          { before: '12 =', after: '', correctAnswer: 'twaalf', hint: 'number 12' },
          { before: '20 =', after: '', correctAnswer: 'twintig', hint: 'number 20' },
        ],
      },
    },
    {
      id: 'a0-num-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Write the number (digits) for the Dutch word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'achttien =', after: '', correctAnswer: '18', hint: 'acht + tien' },
          { before: 'drieenveertig =', after: '', correctAnswer: '43', hint: 'drie + en + veertig' },
          { before: 'zesenzeventig =', after: '', correctAnswer: '76', hint: 'zes + en + zeventig' },
        ],
      },
    },
    {
      id: 'a0-num-mc-2',
      type: 'multiple-choice',
      instruction: 'Select the correct Dutch number.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is 11 in Dutch?',
            options: ['tien', 'elf', 'een', 'eentien'],
            correctIndex: 1,
            explanation: '11 = elf. This is an irregular number with its own name.',
          },
          {
            question: 'What number is "negenentachtig"?',
            options: ['98', '89', '79', '99'],
            correctIndex: 1,
            explanation: 'negen + en + tachtig = 9 + 80 = 89. Remember: units first, then tens.',
          },
          {
            question: 'How do you say 100 in Dutch?',
            options: ['honderd', 'tientig', 'duizend', 'hunderd'],
            correctIndex: 0,
            explanation: '100 = honderd.',
          },
        ],
      },
    },
    {
      id: 'a0-num-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch word for the number.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '3 =', after: '', correctAnswer: 'drie', hint: 'number 3' },
          { before: '8 =', after: '', correctAnswer: 'acht', hint: 'number 8' },
          { before: '0 =', after: '', correctAnswer: 'nul', hint: 'number 0' },
          { before: '10 =', after: '', correctAnswer: 'tien', hint: 'number 10' },
        ],
      },
    },
    {
      id: 'a0-num-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer about Dutch numbers.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'In Dutch numbers above 20, which part comes FIRST?',
            options: ['The tens', 'The units', 'They are the same as English', 'The hundreds'],
            correctIndex: 1,
            explanation: 'In Dutch, units come before tens: 23 = drieentwintig (three-and-twenty).',
          },
          {
            question: 'What connects the units and tens in Dutch numbers?',
            options: ['Nothing', 'The word "en" (and)', 'A hyphen', 'The word "plus"'],
            correctIndex: 1,
            explanation: '"en" (and) connects units and tens: vierentwintig = vier + en + twintig (24).',
          },
          {
            question: 'Which Dutch number word is IRREGULAR (not following the pattern)?',
            options: ['dertien (13)', 'twintig (20)', 'Both dertien and twintig', 'vijftien (15)'],
            correctIndex: 2,
            explanation: 'Both "dertien" and "twintig" are irregular. "dertien" doesn\'t follow "drietien" and "twintig" doesn\'t follow "tweentig".',
          },
        ],
      },
    },
    {
      id: 'a0-num-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch word for the compound number.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '21 =', after: '', correctAnswer: 'eenentwintig', hint: 'een + en + twintig' },
          { before: '35 =', after: '', correctAnswer: 'vijfendertig', hint: 'vijf + en + dertig' },
          { before: '64 =', after: '', correctAnswer: 'vierenzestig', hint: 'vier + en + zestig' },
        ],
      },
    },
    {
      id: 'a0-num-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Write the number (digits) for the Dutch word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'tweeendertig =', after: '', correctAnswer: '32', hint: 'twee + en + dertig' },
          { before: 'achtennegentig =', after: '', correctAnswer: '98', hint: 'acht + en + negentig' },
          { before: 'vijfenveertig =', after: '', correctAnswer: '45', hint: 'vijf + en + veertig' },
          { before: 'elfhonderd =', after: '', correctAnswer: '1100', hint: 'elf + honderd' },
        ],
      },
    },
    {
      id: 'a0-num-order-1',
      type: 'word-order',
      instruction: 'Put the Dutch numbers in order from smallest to largest.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['tien', 'drie', 'zeven', 'een'],
            correctOrder: ['een', 'drie', 'zeven', 'tien'],
            translation: 'Order from smallest to largest: 10, 3, 7, 1',
          },
          {
            shuffledWords: ['dertig', 'vijftig', 'twintig', 'veertig'],
            correctOrder: ['twintig', 'dertig', 'veertig', 'vijftig'],
            translation: 'Order from smallest to largest: 30, 50, 20, 40',
          },
        ],
      },
    },
    {
      id: 'a0-num-fill-6',
      type: 'fill-in-the-blank',
      instruction: 'Complete the workplace sentence with the correct number word.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De vergadering is om', after: 'uur. (2)', correctAnswer: 'twee', hint: 'number 2' },
          { before: 'Er zijn', after: 'collega\'s in het team. (8)', correctAnswer: 'acht', hint: 'number 8' },
          { before: 'Ik heb', after: 'minuten pauze. (15)', correctAnswer: 'vijftien', hint: 'vijf + tien' },
        ],
      },
    },
    {
      id: 'a0-num-mc-4',
      type: 'multiple-choice',
      instruction: 'Answer the question about numbers in a workplace context.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Your colleague says: "De vergadering begint om halftwee." What time does the meeting start?',
            options: ['2:00', '1:30', '2:30', '12:30'],
            correctIndex: 1,
            explanation: '"Halftwee" means "half (before) two" = 1:30. Dutch tells time by halves before the next hour.',
          },
          {
            question: 'How would you say your phone number "06-1234" digit by digit?',
            options: [
              'Zeshonderd-twaalfvierendertig',
              'Nul-zes-een-twee-drie-vier',
              'Zes-twaalf-vierendertig',
              'Nulzes-eentwee-drievier',
            ],
            correctIndex: 1,
            explanation: 'Phone numbers in Dutch are read digit by digit: nul-zes-een-twee-drie-vier.',
          },
        ],
      },
    },
  ],
};
