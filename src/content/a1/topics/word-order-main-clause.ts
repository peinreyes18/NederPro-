import { Topic } from '@/content/types';

export const wordOrderMainClause: Topic = {
  id: 'word-order-main-clause',
  levelId: 'a1',
  title: 'Word Order in Main Clauses',
  subtitle: 'Woordvolgorde in de hoofdzin',
  order: 4,
  estimatedMinutes: 35,
  prerequisites: ['present-tense-regular', 'subject-pronouns'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'The V2 Rule: Verb in Second Position',
        rule: 'In a Dutch main clause, the conjugated verb is ALWAYS in the second position.',
        explanation:
          'The most important rule of Dutch word order is the V2 (verb-second) rule. In every main clause (statement), the conjugated verb must be the second element. The first position can be filled by the subject, a time expression, a place, or another element \u2014 but no matter what comes first, the verb is always second. This is different from English, where the subject almost always comes first. Understanding V2 is the key to sounding natural in Dutch.',
      },
      {
        type: 'grammar-table',
        title: 'Basic Sentence Structure: SVO',
        headers: ['Position 1 (Subject)', 'Position 2 (Verb)', 'Rest of sentence'],
        rows: [
          ['Ik', 'werk', 'op kantoor.'],
          ['Zij', 'leest', 'een boek.'],
          ['Wij', 'hebben', 'een vergadering.'],
          ['De manager', 'schrijft', 'een e-mail.'],
        ],
        caption:
          'In the simplest sentences, the subject is in position 1 and the verb in position 2, just like English SVO order.',
      },
      {
        type: 'grammar-rule',
        title: 'Inversion: When Something Other Than the Subject Comes First',
        rule: 'When a non-subject element (time, place, etc.) occupies position 1, the subject moves behind the verb. The verb stays in position 2.',
        explanation:
          'This is called "inversion" (inversie). If you start a sentence with a time expression, a place, or any other element, the verb must still be second, so the subject swaps to the position right after the verb. Compare: "Ik werk morgen." (I work tomorrow \u2014 normal SVO) vs. "Morgen werk ik." (Tomorrow I work \u2014 inversion). The meaning is the same, but Dutch often starts with the time or context to set the scene.',
      },
      {
        type: 'grammar-table',
        title: 'Inversion Examples',
        headers: ['Position 1', 'Position 2 (Verb)', 'Subject', 'Rest'],
        rows: [
          ['Morgen', 'werk', 'ik', 'in Amsterdam.'],
          ['Vandaag', 'heeft', 'zij', 'een vergadering.'],
          ['Op maandag', 'beginnen', 'wij', 'om negen uur.'],
          ['In het kantoor', 'staat', 'een bureau.', ''],
          ['Helaas', 'kan', 'ik', 'niet komen.'],
        ],
        caption:
          'Notice: the verb is ALWAYS in position 2, regardless of what fills position 1.',
      },
      {
        type: 'examples',
        title: 'Normal Order vs. Inversion',
        examples: [
          {
            dutch: 'Ik werk morgen in Amsterdam.',
            english: 'I work tomorrow in Amsterdam.',
            highlight: ['Ik', 'werk'],
            note: 'Normal SVO: subject first, verb second',
          },
          {
            dutch: 'Morgen werk ik in Amsterdam.',
            english: 'Tomorrow I work in Amsterdam.',
            highlight: ['Morgen', 'werk', 'ik'],
            note: 'Inversion: time first, verb second, subject third',
          },
          {
            dutch: 'Zij stuurt het rapport vandaag.',
            english: 'She sends the report today.',
            highlight: ['Zij', 'stuurt'],
          },
          {
            dutch: 'Vandaag stuurt zij het rapport.',
            english: 'Today she sends the report.',
            highlight: ['Vandaag', 'stuurt', 'zij'],
            note: 'Inversion: time first',
          },
          {
            dutch: 'Wij vergaderen op dinsdag in de grote zaal.',
            english: 'We meet on Tuesday in the large hall.',
            highlight: ['Wij', 'vergaderen'],
          },
          {
            dutch: 'Op dinsdag vergaderen wij in de grote zaal.',
            english: 'On Tuesday we meet in the large hall.',
            highlight: ['Op dinsdag', 'vergaderen', 'wij'],
          },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Time \u2013 Manner \u2013 Place (TMP Rule)',
        rule: 'When a sentence has multiple adverbials, they follow the order: Time \u2013 Manner \u2013 Place.',
        explanation:
          'In Dutch, when you have information about when (time), how (manner), and where (place), they generally appear in that order after the verb and subject. This is the opposite of English, which tends to use Place-Manner-Time. For example: "Ik werk morgen (T) hard (M) op kantoor (P)." This is a strong tendency rather than an absolute rule, but following TMP will make your Dutch sound natural.',
      },
      {
        type: 'grammar-table',
        title: 'Time \u2013 Manner \u2013 Place Order',
        headers: ['Subject + Verb', 'Time', 'Manner', 'Place'],
        rows: [
          ['Ik ga', 'morgen', 'met de trein', 'naar Utrecht.'],
          ['Zij werkt', 'elke dag', 'hard', 'op kantoor.'],
          ['Wij fietsen', "'s ochtends", 'snel', 'naar het station.'],
          ['Hij rijdt', 'vandaag', 'met de auto', 'naar Schiphol.'],
        ],
        caption: 'T(ime) - M(anner) - P(lace): remember this order for natural Dutch.',
      },
      {
        type: 'common-mistakes',
        title: 'Common Word Order Mistakes',
        mistakes: [
          {
            incorrect: 'Morgen ik werk in Amsterdam.',
            correct: 'Morgen werk ik in Amsterdam.',
            explanation:
              'When time comes first, the verb must still be second. The subject moves after the verb (inversion). "Morgen ik werk" violates the V2 rule.',
          },
          {
            incorrect: 'Ik op kantoor werk.',
            correct: 'Ik werk op kantoor.',
            explanation:
              'The verb must be in position 2. Placing the place before the verb is a common English-speaker error. The verb "werk" must come right after "ik".',
          },
          {
            incorrect: 'Vandaag ik heb een vergadering.',
            correct: 'Vandaag heb ik een vergadering.',
            explanation:
              'After "vandaag" in position 1, the verb "heb" must be in position 2, followed by the subject "ik". Forgetting inversion is one of the most common mistakes.',
          },
          {
            incorrect: 'Ik ga naar Utrecht met de trein morgen.',
            correct: 'Ik ga morgen met de trein naar Utrecht.',
            explanation:
              'The TMP rule: Time (morgen) comes before Manner (met de trein), which comes before Place (naar Utrecht).',
          },
          {
            incorrect: 'Op kantoor ik werk elke dag.',
            correct: 'Op kantoor werk ik elke dag.',
            explanation:
              'When a place expression starts the sentence, inversion is required: verb second, subject third.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Word Order in Workplace Communication',
        scenario:
          'In Dutch business communication, it is very common to start sentences with a time expression to set the context for meetings, deadlines, and schedules. Mastering inversion is essential for sounding professional.',
        examples: [
          {
            dutch: 'Maandag hebben wij een teamvergadering.',
            english: 'Monday we have a team meeting.',
            highlight: ['Maandag', 'hebben', 'wij'],
            note: 'Inversion: time first, verb second, subject third',
          },
          {
            dutch: 'Volgende week begint het nieuwe project.',
            english: 'Next week the new project starts.',
            highlight: ['Volgende week', 'begint'],
          },
          {
            dutch: 'Om tien uur heb ik een afspraak met de klant.',
            english: 'At ten o\'clock I have an appointment with the client.',
            highlight: ['Om tien uur', 'heb', 'ik'],
          },
          {
            dutch: 'Na de lunch bespreken wij het budget.',
            english: 'After lunch we discuss the budget.',
            highlight: ['Na de lunch', 'bespreken', 'wij'],
          },
          {
            dutch: 'Vandaag werkt het hele team vanuit huis.',
            english: 'Today the entire team works from home.',
            highlight: ['Vandaag', 'werkt'],
          },
        ],
      },
      {
        type: 'note',
        title: 'Questions Also Use V2',
        content:
          'In yes/no questions, the verb moves to position 1, and the subject comes right after: "Werk jij morgen?" (Do you work tomorrow?). In questions with a question word (wie, wat, waar, wanneer), the question word is in position 1 and the verb is in position 2: "Wanneer begint de vergadering?" (When does the meeting start?). The V2 principle applies to questions too!',
        variant: 'info',
      },
      {
        type: 'note',
        title: 'Tip: Always Check Verb Position',
        content:
          'When you write or say a Dutch sentence, always double-check: is the conjugated verb in the second position? If it is not, something is probably wrong. This one habit will dramatically improve your Dutch word order.',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-word-order-main-clause-wo-1',
      type: 'word-order',
      instruction:
        'Put the words in the correct order. Remember: the verb must be in position 2.',
      difficulty: 'controlled',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['werk', 'op', 'kantoor', 'ik'],
            correctOrder: ['Ik', 'werk', 'op', 'kantoor.'],
            translation: 'I work at the office.',
          },
          {
            shuffledWords: ['leest', 'zij', 'een', 'boek'],
            correctOrder: ['Zij', 'leest', 'een', 'boek.'],
            translation: 'She reads a book.',
          },
          {
            shuffledWords: ['hebben', 'wij', 'een', 'vergadering'],
            correctOrder: ['Wij', 'hebben', 'een', 'vergadering.'],
            translation: 'We have a meeting.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-2',
      type: 'word-order',
      instruction:
        'These sentences start with a time expression. Apply inversion: verb second, subject third.',
      difficulty: 'controlled',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['morgen', 'ik', 'werk', 'thuis'],
            correctOrder: ['Morgen', 'werk', 'ik', 'thuis.'],
            translation: 'Tomorrow I work from home.',
          },
          {
            shuffledWords: ['vandaag', 'zij', 'heeft', 'een', 'afspraak'],
            correctOrder: ['Vandaag', 'heeft', 'zij', 'een', 'afspraak.'],
            translation: 'Today she has an appointment.',
          },
          {
            shuffledWords: ['om', 'negen', 'uur', 'begint', 'de', 'vergadering'],
            correctOrder: ['Om', 'negen', 'uur', 'begint', 'de', 'vergadering.'],
            translation: 'At nine o\'clock the meeting starts.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-mc-1',
      type: 'multiple-choice',
      instruction: 'Which sentence has the correct word order?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is correct?',
            options: [
              'Morgen ik werk in Amsterdam.',
              'Morgen werk ik in Amsterdam.',
              'Morgen in Amsterdam werk ik.',
              'Ik morgen werk in Amsterdam.',
            ],
            correctIndex: 1,
            explanation:
              'When "morgen" is in position 1, the verb "werk" must be in position 2, followed by the subject "ik". Correct: "Morgen werk ik in Amsterdam."',
          },
          {
            question: 'Which is correct?',
            options: [
              'Wij vergaderen op maandag.',
              'Wij op maandag vergaderen.',
              'Op maandag wij vergaderen.',
              'Vergaderen wij op maandag.',
            ],
            correctIndex: 0,
            explanation:
              '"Wij vergaderen op maandag" is correct SVO order. The verb "vergaderen" is in position 2.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-3',
      type: 'word-order',
      instruction:
        'Arrange these words. Apply the Time-Manner-Place (TMP) rule for the adverbials.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['ga', 'ik', 'morgen', 'met', 'de', 'trein', 'naar', 'Utrecht'],
            correctOrder: ['Ik', 'ga', 'morgen', 'met', 'de', 'trein', 'naar', 'Utrecht.'],
            translation: 'I go tomorrow by train to Utrecht.',
          },
          {
            shuffledWords: ['werkt', 'zij', 'elke', 'dag', 'hard', 'op', 'kantoor'],
            correctOrder: ['Zij', 'werkt', 'elke', 'dag', 'hard', 'op', 'kantoor.'],
            translation: 'She works every day hard at the office.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-4',
      type: 'word-order',
      instruction:
        'Start these sentences with the given time expression and apply inversion.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['volgende', 'week', 'begint', 'het', 'nieuwe', 'project'],
            correctOrder: ['Volgende', 'week', 'begint', 'het', 'nieuwe', 'project.'],
            translation: 'Next week the new project starts.',
          },
          {
            shuffledWords: ['na', 'de', 'lunch', 'bespreken', 'wij', 'het', 'plan'],
            correctOrder: ['Na', 'de', 'lunch', 'bespreken', 'wij', 'het', 'plan.'],
            translation: 'After lunch we discuss the plan.',
          },
          {
            shuffledWords: ['elke', 'ochtend', 'drinkt', 'hij', 'koffie', 'op', 'kantoor'],
            correctOrder: ['Elke', 'ochtend', 'drinkt', 'hij', 'koffie', 'op', 'kantoor.'],
            translation: 'Every morning he drinks coffee at the office.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-mc-2',
      type: 'multiple-choice',
      instruction: 'Identify the sentence with correct inversion.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Start with "Vandaag": "The team works from home."',
            options: [
              'Vandaag het team werkt vanuit huis.',
              'Vandaag werkt het team vanuit huis.',
              'Vandaag het team vanuit huis werkt.',
              'Het team vandaag werkt vanuit huis.',
            ],
            correctIndex: 1,
            explanation:
              '"Vandaag" in position 1, "werkt" in position 2, "het team" in position 3. Correct: "Vandaag werkt het team vanuit huis."',
          },
          {
            question:
              'Which shows correct TMP order? "I cycle every morning quickly to the station."',
            options: [
              'Ik fiets naar het station snel elke ochtend.',
              'Ik fiets elke ochtend naar het station snel.',
              'Ik fiets elke ochtend snel naar het station.',
              'Ik fiets snel elke ochtend naar het station.',
            ],
            correctIndex: 2,
            explanation:
              'TMP: Time (elke ochtend) + Manner (snel) + Place (naar het station). Correct: "Ik fiets elke ochtend snel naar het station."',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-fill-1',
      type: 'fill-in-the-blank',
      instruction:
        'Fill in the correct subject to complete the inverted sentence.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Morgen werkt',
            after: 'vanuit huis.',
            correctAnswer: 'hij',
            acceptableAnswers: ['Hij', 'zij', 'Zij', 'ze', 'Ze'],
            hint: 'After inversion, the subject follows the verb',
          },
          {
            before: 'Volgende week hebben',
            after: 'een vergadering.',
            correctAnswer: 'wij',
            acceptableAnswers: ['Wij', 'we', 'We'],
            hint: 'The subject comes right after the verb in inversion',
          },
          {
            before: 'Om drie uur belt',
            after: 'de klant.',
            correctAnswer: 'hij',
            acceptableAnswers: ['Hij', 'zij', 'Zij', 'ze', 'Ze'],
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-5',
      type: 'word-order',
      instruction:
        'Form questions with the correct word order. In yes/no questions, the verb comes first.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['werk', 'jij', 'morgen'],
            correctOrder: ['Werk', 'jij', 'morgen?'],
            translation: 'Do you work tomorrow?',
          },
          {
            shuffledWords: ['begint', 'wanneer', 'de', 'vergadering'],
            correctOrder: ['Wanneer', 'begint', 'de', 'vergadering?'],
            translation: 'When does the meeting start?',
          },
          {
            shuffledWords: ['werkt', 'waar', 'uw', 'collega'],
            correctOrder: ['Waar', 'werkt', 'uw', 'collega?'],
            translation: 'Where does your colleague work?',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-6',
      type: 'word-order',
      instruction:
        'These are longer workplace sentences. Pay attention to V2, inversion, and TMP.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['maandag', 'op', 'hebben', 'wij', 'om', 'tien', 'uur', 'een', 'teamvergadering', 'op', 'kantoor'],
            correctOrder: ['Op', 'maandag', 'hebben', 'wij', 'om', 'tien', 'uur', 'een', 'teamvergadering', 'op', 'kantoor.'],
            translation: 'On Monday we have a team meeting at ten o\'clock at the office.',
          },
          {
            shuffledWords: ['stuurt', 'de', 'manager', 'elke', 'vrijdag', 'een', 'update', 'naar', 'het', 'team'],
            correctOrder: ['De', 'manager', 'stuurt', 'elke', 'vrijdag', 'een', 'update', 'naar', 'het', 'team.'],
            translation: 'The manager sends an update to the team every Friday.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-mc-3',
      type: 'multiple-choice',
      instruction:
        'Identify which sentence breaks the V2 rule.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence has INCORRECT word order?',
            options: [
              'Morgen werk ik thuis.',
              'Ik werk morgen thuis.',
              'Morgen ik werk thuis.',
              'Op maandag werken wij op kantoor.',
            ],
            correctIndex: 2,
            explanation:
              '"Morgen ik werk thuis" is wrong because the verb "werk" is in position 3 instead of position 2. It should be "Morgen werk ik thuis."',
          },
          {
            question: 'Which sentence has INCORRECT word order?',
            options: [
              'De klant belt om drie uur.',
              'Om drie uur belt de klant.',
              'Belt de klant om drie uur?',
              'Om drie uur de klant belt.',
            ],
            correctIndex: 3,
            explanation:
              '"Om drie uur de klant belt" is wrong \u2014 the verb "belt" must be in position 2: "Om drie uur belt de klant."',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-fill-2',
      type: 'fill-in-the-blank',
      instruction:
        'Fill in the missing verb in the correct position. The verb is given in parentheses.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Elke maandag',
            after: 'wij een statusupdate. (hebben)',
            correctAnswer: 'hebben',
            hint: 'Inversion: time first, verb second, subject third',
          },
          {
            before: 'In de ochtend',
            after: 'ik mijn e-mails. (lezen)',
            correctAnswer: 'lees',
            hint: 'ik-form = stem; inversion applies',
          },
          {
            before: 'Na de vergadering',
            after: 'hij een kop koffie. (drinken)',
            correctAnswer: 'drinkt',
            hint: 'hij-form = stem + t; inversion applies',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-wo-7',
      type: 'word-order',
      instruction:
        'Rearrange these words to form a natural workplace sentence. Apply all word order rules you have learned.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['bespreken', 'na', 'de', 'pauze', 'wij', 'samen', 'het', 'budget', 'in', 'de', 'vergaderzaal'],
            correctOrder: ['Na', 'de', 'pauze', 'bespreken', 'wij', 'samen', 'het', 'budget', 'in', 'de', 'vergaderzaal.'],
            translation: 'After the break we discuss the budget together in the meeting room.',
          },
          {
            shuffledWords: ['rijdt', 'hij', 'elke', 'dag', 'met', 'de', 'auto', 'naar', 'het', 'werk'],
            correctOrder: ['Hij', 'rijdt', 'elke', 'dag', 'met', 'de', 'auto', 'naar', 'het', 'werk.'],
            translation: 'He drives every day by car to work.',
          },
        ],
      },
    },
    {
      id: 'a1-word-order-main-clause-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the Dutch sentence from the English prompt by selecting words.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Ik', 'werk', 'in', 'Amsterdam', 'woon', 'niet', '.'],
            correctSentence: 'Ik werk in Amsterdam.',
            englishPrompt: 'I work in Amsterdam.',
          },
          {
            availableWords: ['Morgen', 'werk', 'ik', 'thuis', 'werkt', 'zij', '.'],
            correctSentence: 'Morgen werk ik thuis.',
            englishPrompt: 'Tomorrow I work from home.',
          },
        ],
      },
    },
  ],
};
