import { Topic } from '@/content/types';

export const prepositionsTime: Topic = {
  id: 'prepositions-time',
  levelId: 'a2',
  order: 5,
  title: 'Prepositions of Time',
  subtitle: 'Voorzetsels van tijd',
  estimatedMinutes: 30,
  lessons: [
    {
      id: 'prepositions-time-basic',
      topicId: 'prepositions-time',
      title: 'Basic Time Prepositions: op, in, om',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use "op" with days and dates, "in" with months, seasons, and years, and "om" with clock times.',
          explanation:
            'Dutch uses specific prepositions for different time expressions. These must be memorized as they do not always correspond to English prepositions. The three most important ones are: op (on) for days and dates, in (in) for months/seasons/years, and om (at) for clock times.',
        },
        {
          type: 'grammar-table',
          headers: ['Preposition', 'Used with', 'Dutch example', 'English'],
          rows: [
            ['op', 'days of the week', 'op maandag', 'on Monday'],
            ['op', 'dates', 'op 5 januari', 'on January 5th'],
            ['op', 'specific days', 'op Kerstdag', 'on Christmas Day'],
            ['in', 'months', 'in januari', 'in January'],
            ['in', 'seasons', 'in de zomer', 'in (the) summer'],
            ['in', 'years', 'in 2024', 'in 2024'],
            ['in', 'centuries', 'in de 21e eeuw', 'in the 21st century'],
            ['om', 'clock times', 'om drie uur', 'at three o\'clock'],
            ['om', 'specific times', 'om half acht', 'at half past seven'],
          ],
          caption:
            'Note: "in de zomer/winter/herfst/lente" uses the article "de" with seasons.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'De vergadering is op dinsdag.',
              english: 'The meeting is on Tuesday.',
              highlight: 'op dinsdag',
            },
            {
              dutch: 'Ik ben geboren in 1990.',
              english: 'I was born in 1990.',
              highlight: 'in 1990',
            },
            {
              dutch: 'De les begint om negen uur.',
              english: 'The lesson starts at nine o\'clock.',
              highlight: 'om negen uur',
            },
            {
              dutch: 'In de winter is het koud in Nederland.',
              english: 'In winter it is cold in the Netherlands.',
              highlight: 'In de winter',
            },
          ],
        },
        {
          type: 'note',
          content:
            'When combining day + time: "De vergadering is op maandag om tien uur." (The meeting is on Monday at ten o\'clock.) The day comes before the time.',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'prepositions-time-parts-of-day',
      topicId: 'prepositions-time',
      title: 'Parts of the Day',
      sections: [
        {
          type: 'grammar-rule',
          rule: "Dutch uses special contracted forms for parts of the day: 's morgens (in the morning), 's middags (in the afternoon), 's avonds (in the evening), 's nachts (at night).",
          explanation:
            "These forms are contractions of the old genitive: des morgens -> 's morgens. The 's is a shortened form of 'des' (of the). These are fixed expressions and must be memorized. Alternative forms exist: in de ochtend, in de middag, in de avond, in de nacht.",
        },
        {
          type: 'grammar-table',
          headers: ['Contracted form', 'Alternative', 'English', 'Approximate time'],
          rows: [
            ["'s morgens", 'in de ochtend', 'in the morning', '6:00 - 12:00'],
            ["'s middags", 'in de middag', 'in the afternoon', '12:00 - 18:00'],
            ["'s avonds", 'in de avond', 'in the evening', '18:00 - 24:00'],
            ["'s nachts", 'in de nacht', 'at night', '0:00 - 6:00'],
          ],
          caption:
            "Both forms are correct. The contracted forms ('s morgens, etc.) are very common in everyday Dutch.",
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: "Ik drink 's morgens altijd koffie.",
              english: 'I always drink coffee in the morning.',
              highlight: "'s morgens",
            },
            {
              dutch: "Zij werkt 's avonds in het restaurant.",
              english: 'She works in the evening at the restaurant.',
              highlight: "'s avonds",
            },
            {
              dutch: "'s Nachts is het stil op straat.",
              english: 'At night it is quiet in the street.',
              highlight: "'s Nachts",
              note: "When 's nachts starts the sentence, the 's is capitalized as 'S",
            },
          ],
        },
      ],
    },
    {
      id: 'prepositions-time-other',
      topicId: 'prepositions-time',
      title: 'Other Time Prepositions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Additional time prepositions: van...tot (from...to), sinds (since), tijdens (during), voor (before), na (after), over (in...time from now).',
          explanation:
            'These prepositions help express more specific time relationships. "Over" is particularly tricky for English speakers: "over een uur" means "in one hour" (from now), not "over one hour". "Sinds" indicates a starting point that continues to the present: "sinds januari" (since January, and still ongoing).',
        },
        {
          type: 'grammar-table',
          headers: ['Dutch', 'English', 'Example', 'Translation'],
          rows: [
            ['van...tot', 'from...to', 'van negen tot vijf', 'from nine to five'],
            ['sinds', 'since', 'sinds januari', 'since January'],
            ['tijdens', 'during', 'tijdens de vergadering', 'during the meeting'],
            ['voor', 'before', 'voor de lunch', 'before lunch'],
            ['na', 'after', 'na het werk', 'after work'],
            ['over', 'in (time from now)', 'over een uur', 'in one hour'],
            ['tot', 'until', 'tot vrijdag', 'until Friday'],
            ['tegen', 'by / around', 'tegen vijf uur', 'by/around five o\'clock'],
          ],
          caption:
            'Pay special attention to "over" which means "in (a certain amount of time from now)".',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik werk van maandag tot vrijdag.',
              english: 'I work from Monday to Friday.',
              highlight: 'van ... tot',
            },
            {
              dutch: 'Zij woont hier sinds 2020.',
              english: 'She has been living here since 2020.',
              highlight: 'sinds',
            },
            {
              dutch: 'Tijdens de pauze eet ik een broodje.',
              english: 'During the break I eat a sandwich.',
              highlight: 'Tijdens',
            },
            {
              dutch: 'De bus komt over tien minuten.',
              english: 'The bus comes in ten minutes.',
              highlight: 'over',
              note: '"over" = in (time from now)',
            },
            {
              dutch: 'Ik bel je na de vergadering.',
              english: 'I will call you after the meeting.',
              highlight: 'na',
            },
          ],
        },
        {
          type: 'workplace-context',
          scenario:
            'Time prepositions are essential in professional settings for scheduling, deadlines, and describing work routines.',
          examples: [
            {
              dutch: 'De vergadering is op maandag om tien uur.',
              english: 'The meeting is on Monday at ten o\'clock.',
            },
            {
              dutch: 'Ik werk hier sinds januari.',
              english: 'I have been working here since January.',
            },
            {
              dutch: 'Kunt u het rapport voor vrijdag afmaken?',
              english: 'Can you finish the report before Friday?',
            },
            {
              dutch: 'Het kantoor is open van acht tot zes.',
              english: 'The office is open from eight to six.',
            },
            {
              dutch: 'Tijdens de lunch bespreken we het project.',
              english: 'During lunch we will discuss the project.',
            },
            {
              dutch: 'De klant komt over een half uur.',
              english: 'The client is coming in half an hour.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'De vergadering is in maandag.',
              correct: 'De vergadering is op maandag.',
              explanation:
                "Use 'op' with days of the week, not 'in'. 'In' is for months, seasons, and years.",
            },
            {
              incorrect: 'De bus komt in tien minuten.',
              correct: 'De bus komt over tien minuten.',
              explanation:
                "When referring to time from now, use 'over', not 'in'. 'Over tien minuten' = in ten minutes (from now).",
            },
            {
              incorrect: 'Ik werk hier van januari.',
              correct: 'Ik werk hier sinds januari.',
              explanation:
                "'Sinds' means 'since' (ongoing from a starting point). 'Van' is used in the combination 'van...tot' (from...to).",
            },
            {
              incorrect: 'Op de zomer ga ik op vakantie.',
              correct: 'In de zomer ga ik op vakantie.',
              explanation:
                "Use 'in' with seasons: in de zomer, in de winter, in de herfst, in de lente. 'Op' is for days and dates.",
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-prep-fill-1',
      topicId: 'prepositions-time',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct preposition of time: op, in, or om.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De vergadering is',
            after: 'dinsdag.',
            correctAnswer: 'op',
            hint: 'Days of the week take "op"',
          },
          {
            before: 'Ik ben geboren',
            after: '1995.',
            correctAnswer: 'in',
            hint: 'Years take "in"',
          },
          {
            before: 'De trein vertrekt',
            after: 'half drie.',
            correctAnswer: 'om',
            hint: 'Clock times take "om"',
          },
        ],
      },
    },
    {
      id: 'a2-prep-fill-2',
      topicId: 'prepositions-time',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct preposition.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'de zomer ga ik op vakantie.',
            correctAnswer: 'In',
            hint: 'Seasons take "in"',
          },
          {
            before: 'Het feest is',
            after: '31 december.',
            correctAnswer: 'op',
            hint: 'Dates take "op"',
          },
          {
            before: 'De winkel opent',
            after: 'negen uur.',
            correctAnswer: 'om',
            hint: 'Clock times take "om"',
          },
        ],
      },
    },
    {
      id: 'a2-prep-mc-1',
      topicId: 'prepositions-time',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct preposition.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De les begint ___ kwart over negen.',
            options: ['in', 'op', 'om', 'van'],
            correctIndex: 2,
            explanation:
              "Clock times use 'om'. 'Om kwart over negen' = at quarter past nine.",
          },
          {
            question: '___ de winter is het koud.',
            options: ['Op', 'Om', 'In', 'Aan'],
            correctIndex: 2,
            explanation:
              "Seasons use 'in': in de winter, in de zomer, in de herfst, in de lente.",
          },
          {
            question: 'Mijn verjaardag is ___ 15 maart.',
            options: ['in', 'om', 'op', 'aan'],
            correctIndex: 2,
            explanation:
              "Dates use 'op': op 15 maart = on March 15th.",
          },
        ],
      },
    },
    {
      id: 'a2-prep-fill-3',
      topicId: 'prepositions-time',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in the correct preposition: sinds, tijdens, voor, na, over, van...tot.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik werk hier',
            after: 'september.',
            correctAnswer: 'sinds',
            hint: 'Since (ongoing) = sinds',
          },
          {
            before: '',
            after: 'de vergadering mag je niet bellen.',
            correctAnswer: 'Tijdens',
            hint: 'During = tijdens',
          },
          {
            before: 'De bus komt',
            after: 'vijf minuten.',
            correctAnswer: 'over',
            hint: 'In (time from now) = over',
          },
        ],
      },
    },
    {
      id: 'a2-prep-mc-2',
      topicId: 'prepositions-time',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Choose the correct time expression.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "I work from 9 to 5" in Dutch?',
            options: [
              'Ik werk sinds negen tot vijf.',
              'Ik werk van negen tot vijf.',
              'Ik werk op negen om vijf.',
              'Ik werk in negen tot vijf.',
            ],
            correctIndex: 1,
            explanation:
              "'From...to' for time ranges is 'van...tot': van negen tot vijf.",
          },
          {
            question: '"The client arrives in half an hour." Which is correct?',
            options: [
              'De klant komt in een half uur.',
              'De klant komt over een half uur.',
              'De klant komt op een half uur.',
              'De klant komt om een half uur.',
            ],
            correctIndex: 1,
            explanation:
              "'In (time from now)' is expressed with 'over' in Dutch: over een half uur = in half an hour.",
          },
          {
            question: 'How do you say "in the evening" using the contracted form?',
            options: ["'s morgens", "'s middags", "'s avonds", "'s nachts"],
            correctIndex: 2,
            explanation:
              "'s avonds is the contracted form of 'des avonds', meaning 'in the evening'.",
          },
        ],
      },
    },
    {
      id: 'a2-prep-order-1',
      topicId: 'prepositions-time',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Put the words in the correct order to form sentences with time expressions.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['op', 'is', 'de', 'vergadering', 'om', 'maandag', 'tien', 'uur'],
            correctOrder: ['De', 'vergadering', 'is', 'op', 'maandag', 'om', 'tien', 'uur'],
            translation: 'The meeting is on Monday at ten o\'clock.',
          },
          {
            shuffledWords: ['sinds', 'ik', 'hier', 'werk', 'januari'],
            correctOrder: ['Ik', 'werk', 'hier', 'sinds', 'januari'],
            translation: 'I have been working here since January.',
          },
          {
            shuffledWords: ['koffie', "'s morgens", 'drink', 'ik', 'altijd'],
            correctOrder: ['Ik', 'drink', "'s morgens", 'altijd', 'koffie'],
            translation: 'I always drink coffee in the morning.',
          },
        ],
      },
    },
    {
      id: 'a2-prep-fill-4',
      topicId: 'prepositions-time',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in the correct time preposition in these workplace sentences.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kunt u het rapport',
            after: 'vrijdag afmaken?',
            correctAnswer: 'voor',
            hint: 'Before (deadline) = voor',
          },
          {
            before: 'Ik bel u',
            after: 'de lunch terug.',
            correctAnswer: 'na',
            hint: 'After = na',
          },
          {
            before: 'Het kantoor is open',
            after: 'acht ___ zes.',
            correctAnswer: 'van ... tot',
            acceptableAnswers: ['van tot', 'van...tot'],
            hint: 'From...to = van...tot',
          },
        ],
      },
    },
    {
      id: 'a2-prep-mc-3',
      topicId: 'prepositions-time',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Choose the correct Dutch sentence for each English sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"I have a meeting on Wednesday at half past two in the afternoon."',
            options: [
              "Ik heb een vergadering in woensdag om half twee 's middags.",
              "Ik heb een vergadering op woensdag om half drie 's middags.",
              "Ik heb een vergadering op woensdag in half drie 's middags.",
              "Ik heb een vergadering om woensdag op half drie 's middags.",
            ],
            correctIndex: 1,
            explanation:
              "Days use 'op' (op woensdag), times use 'om' (om half drie = at half past two in Dutch time telling). 's middags = in the afternoon.",
          },
          {
            question: '"During the break, the office is closed."',
            options: [
              'In de pauze is het kantoor gesloten.',
              'Tijdens de pauze is het kantoor gesloten.',
              'Op de pauze is het kantoor gesloten.',
              'Over de pauze is het kantoor gesloten.',
            ],
            correctIndex: 1,
            explanation:
              "'During' = 'tijdens'. 'Tijdens de pauze is het kantoor gesloten.'",
          },
        ],
      },
    },
    {
      id: 'a2-prep-order-2',
      topicId: 'prepositions-time',
      type: 'word-order',
      difficulty: 'open',
      instruction:
        'Arrange the words to form correct Dutch sentences.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: [
              'komt',
              'over',
              'de',
              'klant',
              'een',
              'half',
              'uur',
            ],
            correctOrder: [
              'De',
              'klant',
              'komt',
              'over',
              'een',
              'half',
              'uur',
            ],
            translation: 'The client is coming in half an hour.',
          },
          {
            shuffledWords: [
              'het',
              'voor',
              'rapport',
              'af',
              'vrijdag',
              'moet',
              'zijn',
            ],
            correctOrder: [
              'Het',
              'rapport',
              'moet',
              'voor',
              'vrijdag',
              'af',
              'zijn',
            ],
            translation: 'The report must be finished before Friday.',
          },
        ],
      },
    },
    {
      id: 'a2-prep-fill-5',
      topicId: 'prepositions-time',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction:
        'Complete these sentences with the correct preposition. Think carefully about the context.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: "Ik ga",
            after: "de herfst naar Nederland.",
            correctAnswer: 'in',
            hint: 'Seasons use "in"',
          },
          {
            before: "Hij heeft",
            after: "2019 ___ 2023 in Rotterdam gewoond.",
            correctAnswer: 'van ... tot',
            acceptableAnswers: ['van tot', 'van...tot'],
            hint: 'From year to year = van...tot',
          },
          {
            before: "De deadline is",
            after: "een week. Kunnen we dat halen?",
            correctAnswer: 'over',
            hint: 'In (time from now) = over',
          },
        ],
      },
    },
  ],
};
