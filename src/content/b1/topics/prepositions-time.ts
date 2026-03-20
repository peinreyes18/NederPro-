import { Topic } from '@/content/types';

export const prepositionsTime: Topic = {
  id: 'prepositions-time',
  levelId: 'b1',
  title: 'Prepositions of Time',
  subtitle: 'op, in, om, voor, na, sinds, tot, binnen, gedurende',
  order: 17,
  estimatedMinutes: 30,
  prerequisites: ['conjunctions-connectors'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Time prepositions in Dutch',
        rule: 'Dutch uses specific prepositions to locate events in time. The choice of preposition depends on what type of time expression follows: a clock time, a day/date, a period, a point before/after, or a duration.',
        explanation:
          'English speakers often confuse op, in, and om because they can all mean "on" or "at" in certain contexts. Dutch assigns them strictly: op for days and dates, om for clock times, in for months, seasons, years, and decades. Na, voor, sinds, tot, binnen, and gedurende cover relative and duration expressions.',
      },
      {
        type: 'grammar-table',
        title: 'Core time prepositions',
        headers: ['Preposition', 'Used with', 'Example'],
        rows: [
          ['op', 'days of the week, dates', 'op maandag · op 5 april'],
          ['in', 'months, seasons, years, decades', 'in maart · in de zomer · in 1990'],
          ['om', 'clock times (exact hour/minutes)', 'om drie uur · om half vier'],
          ['voor', 'before a time point', 'voor het eten · voor vijf uur'],
          ['na', 'after a time point', 'na het werk · na drie jaar'],
          ['sinds', 'since a starting point (ongoing)', 'sinds maandag · sinds 2018'],
          ['tot (aan)', 'until / up to a time point', 'tot vrijdag · tot aan het einde'],
          ['binnen', 'within a time span', 'binnen een uur · binnen twee weken'],
          ['gedurende', 'during / throughout a period', 'gedurende de vergadering'],
          ['over', 'in X from now (future)', 'over een week · over twee maanden'],
        ],
      },
      {
        type: 'note',
        title: 'op vs. in for periods',
        content:
          '"Op" is for specific named days (op zaterdag, op kerst, op mijn verjaardag). "In" is for longer spans — months, seasons, years: in de winter, in januari, in 2024. Do NOT say "in maandag" or "op januari".',
        variant: 'warning',
      },
      {
        type: 'grammar-table',
        title: 'Tricky contrasts',
        headers: ['Dutch', 'English', 'Note'],
        rows: [
          ['om 8 uur', 'at 8 o\'clock', 'om = for clock times only'],
          ['op 8 mei', 'on 8 May', 'op = for calendar dates'],
          ['in mei', 'in May', 'in = for months (not "op mei")'],
          ['voor drie uur', 'before three o\'clock', 'deadline sense'],
          ['over drie uur', 'in three hours\' time', 'future countdown'],
          ['binnen drie uur', 'within three hours', 'time limit / window'],
          ['drie uur geleden', 'three hours ago', 'geleden = ago (no preposition)'],
          ['sinds drie uur', 'since three o\'clock', 'ongoing from that point'],
        ],
      },
      {
        type: 'note',
        title: 'Geen preposition with "geleden" (ago)',
        content:
          '"Geleden" (ago) does not use a preposition. Just say the time span + geleden: "drie dagen geleden" (three days ago), "een jaar geleden" (a year ago). Never add "voor" here.',
        variant: 'tip',
      },
      {
        type: 'examples',
        title: 'Time prepositions in natural sentences',
        examples: [
          {
            dutch: 'De vergadering begint om half tien op dinsdag.',
            english: 'The meeting starts at half past nine on Tuesday.',
            highlight: ['om', 'op'],
            note: 'om for clock time, op for day',
          },
          {
            dutch: 'Ik woon hier al sinds januari 2022.',
            english: 'I have been living here since January 2022.',
            highlight: ['sinds'],
            note: 'ongoing situation starting in the past',
          },
          {
            dutch: 'Je moet het rapport voor vrijdag inleveren.',
            english: 'You must hand in the report before Friday.',
            highlight: ['voor'],
          },
          {
            dutch: 'Het pakket komt over drie werkdagen.',
            english: 'The package will arrive in three working days.',
            highlight: ['over'],
          },
          {
            dutch: 'Ik ben twee weken geleden teruggekomen.',
            english: 'I came back two weeks ago.',
            highlight: ['geleden'],
            note: 'no preposition with geleden',
          },
          {
            dutch: 'Gedurende de zomer werken we van 9 tot 4.',
            english: 'During the summer we work from 9 to 4.',
            highlight: ['Gedurende', 'tot'],
          },
          {
            dutch: 'Kun je het binnen een uur afmaken?',
            english: 'Can you finish it within an hour?',
            highlight: ['binnen'],
          },
          {
            dutch: 'Ze is na het weekend beschikbaar.',
            english: 'She is available after the weekend.',
            highlight: ['na'],
          },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Common time expressions to memorise',
        headers: ['Dutch', 'English'],
        rows: [
          ['\'s ochtends / \'s middags / \'s avonds / \'s nachts', 'in the morning / afternoon / evening / at night'],
          ['in het weekend', 'at the weekend'],
          ['op werkdagen', 'on weekdays'],
          ['aan het begin van', 'at the beginning of'],
          ['aan het einde van', 'at the end of'],
          ['in de loop van', 'in the course of'],
          ['tot nader order', 'until further notice'],
          ['met terugwerkende kracht', 'retroactively'],
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common mistakes',
        mistakes: [
          {
            incorrect: 'Ik ben op januari geboren.',
            correct: 'Ik ben in januari geboren.',
            explanation: '"Op" is for days and dates, not months. Use "in" for months.',
          },
          {
            incorrect: 'De film begint in 8 uur.',
            correct: 'De film begint om 8 uur.',
            explanation: 'Clock times always use "om", not "in".',
          },
          {
            incorrect: 'Ik kom voor twee weken terug.',
            correct: 'Ik kom over twee weken terug.',
            explanation: '"Over" = in X time from now (future). "Voor" = before a deadline.',
          },
          {
            incorrect: 'drie dagen voor geleden',
            correct: 'drie dagen geleden',
            explanation: '"Geleden" (ago) needs no preposition — just time span + geleden.',
          },
          {
            incorrect: 'Ik wacht hier voor vrijdag.',
            correct: 'Ik wacht hier tot vrijdag.',
            explanation: '"Tot" = until. "Voor" = before. These have different meanings.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Workplace and formal use',
        scenario: 'In professional Dutch, time prepositions appear constantly in schedules, deadlines, and formal notices.',
        examples: [
          {
            dutch: 'De vergadering loopt van 14 tot 15 uur.',
            english: 'The meeting runs from 2 to 3 pm.',
          },
          {
            dutch: 'Lever het rapport uiterlijk voor 5 september in.',
            english: 'Submit the report by 5 September at the latest.',
          },
          {
            dutch: 'Binnen de gestelde termijn moet alles klaar zijn.',
            english: 'Everything must be ready within the agreed deadline.',
          },
          {
            dutch: 'Met ingang van 1 januari gelden de nieuwe regels.',
            english: 'The new rules apply from 1 January.',
          },
          {
            dutch: 'De kantoren zijn tot nader order gesloten.',
            english: 'The offices are closed until further notice.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'prepositions-time-ex1',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De vergadering is ___ maandag ___ twee uur.',
            options: ['op · om', 'in · om', 'op · op', 'om · in'],
            correctIndex: 0,
            explanation: '"Op" for days of the week, "om" for clock times.',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex2',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het project moet',
            after: 'vrijdag klaar zijn.',
            correctAnswer: 'voor',
            hint: 'before a deadline',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex3',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'We gaan ___ twee weken op vakantie. (in two weeks\' time)',
            options: ['over', 'binnen', 'voor', 'na'],
            correctIndex: 0,
            explanation: '"Over" = in X time from now (looking forward to a future moment).',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex4',
      type: 'error-correction',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De cursus begint in 9 uur op september.',
            correctedSentence: 'De cursus begint om 9 uur in september.',
            errorExplanation: 'Clock times use "om"; months use "in".',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex5',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb haar een week',
            after: 'gezien.',
            correctAnswer: 'geleden',
            hint: 'a week ago',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex6',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ze woont hier ___ drie jaar. (has been living here for three years — ongoing)',
            options: ['sinds', 'voor', 'over', 'binnen'],
            correctIndex: 0,
            explanation: '"Sinds" marks an ongoing situation starting at a point in the past.',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex7',
      type: 'word-order',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['het', 'om', 'begint', 'half', 'acht', 'concert'],
            correctOrder: ['Het', 'concert', 'begint', 'om', 'half', 'acht', '.'],
            translation: 'The concert starts at half past seven.',
          },
        ],
      },
    },
    {
      id: 'prepositions-time-ex8',
      type: 'listening-comprehension',
      difficulty: 'guided',
      content: {
        type: 'listening-comprehension',
        audioText:
          'De wekelijkse vergadering vindt plaats op woensdag om kwart over negen. Iedereen moet voor half tien aanwezig zijn.',
        situation: 'An office announcement about a weekly meeting.',
        questions: [
          {
            question: 'On which day and at what time does the meeting take place?',
            options: [
              'Tuesday at 9:00',
              'Wednesday at 9:15',
              'Wednesday at 9:30',
              'Thursday at 9:15',
            ],
            correctIndex: 1,
            explanation: '"Op woensdag" = Wednesday; "om kwart over negen" = at 9:15.',
          },
        ],
      },
    },
  ],
};
