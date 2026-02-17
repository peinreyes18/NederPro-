import { Topic } from '@/content/types';

export const tellingTime: Topic = {
  id: 'telling-time',
  levelId: 'a0',
  title: 'Telling Time',
  subtitle: 'Hoe laat is het?',
  order: 6,
  estimatedMinutes: 25,
  prerequisites: ['numbers-counting'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Asking and Telling Time',
        rule: 'Dutch tells time relative to the NEXT hour using "over" (past) and "voor" (to), which is the opposite of English.',
        explanation:
          'The Dutch system of telling time is different from English. While English says "half past three," Dutch says "half vier" (half four) — meaning halfway TO four. This is one of the trickiest parts for English speakers. For the full hours, it\'s straightforward: "Het is drie uur" (It is three o\'clock).',
      },
      {
        type: 'grammar-table',
        title: 'Full and Half Hours',
        headers: ['Time', 'Dutch', 'Literal meaning'],
        audioColumns: [1],
        rows: [
          ['3:00', 'drie uur', 'three o\'clock'],
          ['3:15', 'kwart over drie', 'quarter past three'],
          ['3:30', 'half vier', 'half four (= halfway to four!)'],
          ['3:45', 'kwart voor vier', 'quarter to four'],
          ['12:00', 'twaalf uur / middag / middernacht', 'twelve / noon / midnight'],
        ],
      },
      {
        type: 'note',
        title: 'Important!',
        content: '"Half vier" means 3:30, NOT 4:30! Dutch "half" refers to halfway to the next hour. This is the #1 mistake foreigners make with Dutch time.',
        variant: 'warning',
      },
      {
        type: 'grammar-table',
        title: 'Minutes Past and To',
        headers: ['Time', 'Dutch', 'Pattern'],
        audioColumns: [1],
        rows: [
          ['3:05', 'vijf over drie', '5 past 3'],
          ['3:10', 'tien over drie', '10 past 3'],
          ['3:20', 'tien voor half vier', '10 before half 4 (= 3:20)'],
          ['3:25', 'vijf voor half vier', '5 before half 4 (= 3:25)'],
          ['3:35', 'vijf over half vier', '5 past half 4 (= 3:35)'],
          ['3:40', 'tien over half vier', '10 past half 4 (= 3:40)'],
          ['3:50', 'tien voor vier', '10 to 4'],
          ['3:55', 'vijf voor vier', '5 to 4'],
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Digital Time',
        rule: 'In formal contexts (trains, appointments), Dutch uses 24-hour time.',
        explanation:
          'On train schedules, official appointments, and in writing, the Dutch use 24-hour time: "15:30" instead of "3:30 PM." In casual speech, people use the conversational system (half vier). At work, you\'ll often hear both.',
      },
      {
        type: 'examples',
        title: 'Time in Daily Life',
        examples: [
          { dutch: 'Hoe laat is het?', english: 'What time is it?', highlight: ['Hoe laat'] },
          { dutch: 'Het is half acht.', english: 'It is 7:30.', highlight: ['half', 'acht'] },
          { dutch: 'De trein vertrekt om kwart over negen.', english: 'The train departs at 9:15.', highlight: ['kwart over negen'] },
          { dutch: 'Ik begin om negen uur.', english: 'I start at nine o\'clock.' },
          { dutch: 'De winkel sluit om zes uur.', english: 'The shop closes at six o\'clock.' },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Useful Time Expressions',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['Hoe laat?', 'What time?'],
          ['om ... uur', 'at ... o\'clock'],
          ['\'s ochtends / \'s morgens', 'in the morning'],
          ['\'s middags', 'in the afternoon'],
          ['\'s avonds', 'in the evening'],
          ['\'s nachts', 'at night'],
          ['nu', 'now'],
          ['straks', 'later / soon'],
          ['op tijd', 'on time'],
          ['te laat', 'too late'],
        ],
      },
      {
        type: 'workplace-context',
        scenario: 'At the office — scheduling and punctuality',
        examples: [
          { dutch: 'De vergadering begint om half tien.', english: 'The meeting starts at 9:30.', highlight: ['half tien'] },
          { dutch: 'Ik ben er om kwart voor drie.', english: 'I\'ll be there at 2:45.', highlight: ['kwart voor drie'] },
          { dutch: 'Hoe laat is de lunch?', english: 'What time is lunch?' },
          { dutch: 'Sorry, ik ben te laat.', english: 'Sorry, I\'m late.', highlight: ['te laat'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Het is half drie. (meaning 3:30)',
            correct: 'Het is half vier. (for 3:30)',
            explanation: '"Half vier" = 3:30 (halfway to four). "Half drie" = 2:30. The number after "half" is the NEXT hour.',
          },
          {
            incorrect: 'De vergadering is in drie uur.',
            correct: 'De vergadering is om drie uur.',
            explanation: 'Use "om" for clock times: "om drie uur" (at three o\'clock). "In" is used for months/seasons.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-time-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct time.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What time is "half vijf"?',
            options: ['5:30', '4:30', '4:00', '5:00'],
            correctIndex: 1,
            explanation: '"Half vijf" means halfway to five = 4:30. Remember: the number after "half" is the NEXT hour.',
          },
          {
            question: 'How do you say 9:15 in Dutch?',
            options: ['kwart voor negen', 'kwart over negen', 'half negen', 'negen uur'],
            correctIndex: 1,
            explanation: '9:15 = kwart over negen (quarter past nine).',
          },
          {
            question: 'What does "kwart voor twee" mean?',
            options: ['2:15', '2:45', '1:45', '1:15'],
            correctIndex: 2,
            explanation: '"Kwart voor twee" = quarter to two = 1:45.',
          },
          {
            question: 'Which word means "in the morning"?',
            options: ["'s avonds", "'s middags", "'s ochtends", "'s nachts"],
            correctIndex: 2,
            explanation: "'s Ochtends / 's morgens = in the morning. 's Middags = afternoon, 's avonds = evening, 's nachts = night.",
          },
        ],
      },
    },
    {
      id: 'a0-time-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch time expression.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Het is', after: '. (3:00)', correctAnswer: 'drie uur', hint: 'three o\'clock' },
          { before: 'De trein vertrekt om', after: '. (10:30)', correctAnswer: 'half elf', hint: 'half + next hour' },
          { before: 'Ik begin om', after: '. (8:15)', correctAnswer: 'kwart over acht', hint: 'quarter past eight' },
        ],
      },
    },
    {
      id: 'a0-time-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['is', 'laat', 'het', 'Hoe', '?'],
            correctOrder: ['Hoe', 'laat', 'is', 'het', '?'],
            translation: 'What time is it?',
          },
          {
            shuffledWords: ['om', 'begint', 'vergadering', 'De', 'negen', 'uur', '.'],
            correctOrder: ['De', 'vergadering', 'begint', 'om', 'negen', 'uur', '.'],
            translation: 'The meeting starts at nine o\'clock.',
          },
        ],
      },
    },
    {
      id: 'a0-time-translation-1',
      type: 'translation',
      instruction: 'Translate into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'What time is it?',
            correctDutch: 'Hoe laat is het?',
          },
          {
            english: 'The shop closes at six o\'clock.',
            correctDutch: 'De winkel sluit om zes uur.',
            keyVocabulary: [
              { dutch: 'de winkel', english: 'the shop' },
              { dutch: 'sluiten', english: 'to close' },
            ],
          },
        ],
      },
    },
    {
      id: 'a0-time-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct time.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What time is "half negen"?',
            options: ['9:30', '8:30', '9:00', '8:00'],
            correctIndex: 1,
            explanation: '"Half negen" means halfway to nine = 8:30. The number after "half" is the NEXT hour.',
          },
          {
            question: 'How do you say 6:45 in Dutch?',
            options: ['kwart over zes', 'kwart voor zes', 'kwart voor zeven', 'half zeven'],
            correctIndex: 2,
            explanation: '6:45 = kwart voor zeven (quarter to seven).',
          },
          {
            question: 'What time is "vijf over half drie"?',
            options: ['2:25', '2:35', '3:35', '3:25'],
            correctIndex: 1,
            explanation: '"Half drie" = 2:30. "Vijf over half drie" = 5 minutes past 2:30 = 2:35.',
          },
          {
            question: 'Which expression means "at night"?',
            options: ["'s ochtends", "'s middags", "'s avonds", "'s nachts"],
            correctIndex: 3,
            explanation: "'s Nachts = at night. 's Ochtends = in the morning, 's middags = in the afternoon, 's avonds = in the evening.",
          },
        ],
      },
    },
    {
      id: 'a0-time-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct option to complete the sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De vergadering begint ___ half twee.',
            options: ['in', 'op', 'om', 'aan'],
            correctIndex: 2,
            explanation: 'Use "om" with clock times: "om half twee" (at 1:30).',
          },
          {
            question: 'Ik eet ontbijt \'s ___.',
            options: ['nachts', 'ochtends', 'avonds', 'middags'],
            correctIndex: 1,
            explanation: 'Breakfast is eaten in the morning: "\'s ochtends" (in the morning).',
          },
          {
            question: 'How do you say 4:20 in Dutch?',
            options: ['tien over half vijf', 'tien voor half vijf', 'twintig over vier', 'tien over half vier'],
            correctIndex: 1,
            explanation: '4:20 = tien voor half vijf (10 minutes before half five, i.e., 10 before 4:30).',
          },
          {
            question: '"Tien over half acht" is which time?',
            options: ['7:40', '8:40', '7:20', '8:20'],
            correctIndex: 0,
            explanation: '"Half acht" = 7:30. "Tien over half acht" = 10 minutes past 7:30 = 7:40.',
          },
        ],
      },
    },
    {
      id: 'a0-time-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Write the Dutch time expression.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het is',
            after: '. (5:30)',
            correctAnswer: 'half zes',
            hint: 'half + next hour',
          },
          {
            before: 'De les begint om',
            after: '. (2:15)',
            correctAnswer: 'kwart over twee',
            hint: 'quarter past two',
          },
          {
            before: 'Ik ga slapen om tien uur',
            after: '. (in the evening)',
            correctAnswer: "'s avonds",
            hint: 'the time-of-day expression for evening',
            acceptableAnswers: ["'s avonds"],
          },
        ],
      },
    },
    {
      id: 'a0-time-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Write the time in Dutch.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het is',
            after: '. (7:45)',
            correctAnswer: 'kwart voor acht',
            acceptableAnswers: ['kwart voor acht'],
          },
          {
            before: 'Het is',
            after: '. (9:35)',
            correctAnswer: 'vijf over half tien',
            acceptableAnswers: ['vijf over half tien'],
          },
          {
            before: 'De trein vertrekt om',
            after: '. (11:30)',
            correctAnswer: 'half twaalf',
            acceptableAnswers: ['half twaalf'],
          },
        ],
      },
    },
    {
      id: 'a0-time-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['om', 'eet', 'Ik', 'half', 'zeven', "'s avonds", '.'],
            correctOrder: ['Ik', 'eet', 'om', 'half', 'zeven', "'s avonds", '.'],
            translation: 'I eat at 6:30 in the evening.',
          },
          {
            shuffledWords: ['om', 'begint', 'De', 'kwart', 'over', 'les', 'negen', '.'],
            correctOrder: ['De', 'les', 'begint', 'om', 'kwart', 'over', 'negen', '.'],
            translation: 'The class starts at 9:15.',
          },
        ],
      },
    },
    {
      id: 'a0-time-error-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De vergadering is in drie uur.',
            correctedSentence: 'De vergadering is om drie uur.',
            errorExplanation: 'Use "om" for clock times: "om drie uur" (at three o\'clock). "In" is for months and seasons.',
          },
          {
            incorrectSentence: 'Het is half drie. (meaning 3:30)',
            correctedSentence: 'Het is half vier. (for 3:30)',
            errorExplanation: '"Half vier" = 3:30 (halfway to four). "Half drie" = 2:30. The number after "half" is the NEXT hour.',
          },
          {
            incorrectSentence: 'Ik begin op kwart over acht.',
            correctedSentence: 'Ik begin om kwart over acht.',
            errorExplanation: 'Use "om" with time expressions: "om kwart over acht" (at 8:15). "Op" is for days and dates.',
          },
        ],
      },
    },
  ],
};
