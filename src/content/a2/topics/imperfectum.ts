import { Topic } from '@/content/types';

export const imperfectum: Topic = {
  id: 'imperfectum',
  levelId: 'a2',
  order: 7,
  title: 'Simple Past Tense',
  subtitle: 'Onvoltooid verleden tijd (OVT) / Imperfectum',
  estimatedMinutes: 35,
  prerequisites: ['perfectum-regular'],
  lessons: [
    {
      id: 'imperfectum-1',
      title: 'Regular Verbs: The Kofschip Rule',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'For regular verbs, add -te(n) to the stem if the stem ends in t, k, f, s, ch, or p (remember: "kofschip"). Otherwise, add -de(n).',
          explanation:
            'To form the imperfectum (simple past) of regular verbs, first find the stem of the verb (infinitive minus -en). Then check the last letter of the stem. If it is one of the letters in "t kofschip" (t, k, f, s, ch, p), add -te for singular and -ten for plural. For all other endings, add -de (singular) and -den (plural).',
        },
        {
          type: 'grammar-table',
          headers: ['Infinitive', 'Stem', 'Last Letter', 'Singular (ik/jij/hij)', 'Plural (wij/jullie/zij)'],
          rows: [
            ['werken', 'werk', 'k (kofschip)', 'werkte', 'werkten'],
            ['fietsen', 'fiets', 's (kofschip)', 'fietste', 'fietsten'],
            ['maken', 'maak', 'k (kofschip)', 'maakte', 'maakten'],
            ['stoppen', 'stop', 'p (kofschip)', 'stopte', 'stopten'],
            ['wonen', 'woon', 'n (not kofschip)', 'woonde', 'woonden'],
            ['leven', 'leef', 'f (kofschip)', 'leefde', 'leefden'],
            ['reizen', 'reis', 's (kofschip)', 'reisde', 'reisden'],
            ['studeren', 'studeer', 'r (not kofschip)', 'studeerde', 'studeerden'],
          ],
          caption: 'Regular imperfectum forms using the kofschip rule. Note: "leven" has stem "leef" (v→f) and "reizen" has stem "reis" (z→s).',
        },
        {
          type: 'note',
          content:
            'Be careful with verbs whose stem ends in -f or -s after a v→f or z→s spelling change. For example: "leven" → stem "leef" → the f IS in kofschip, but because the original spelling has v, you use -de: "leefde". Similarly, "reizen" → stem "reis" → the s IS in kofschip, but the original z means you use -de: "reisde". The rule applies to the original consonant, not the spelling change.',
          variant: 'warning',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik werkte gisteren de hele dag.',
              english: 'I worked the whole day yesterday.',
              highlight: 'werkte',
            },
            {
              dutch: 'Wij woonden vroeger in Rotterdam.',
              english: 'We used to live in Rotterdam.',
              highlight: 'woonden',
            },
            {
              dutch: 'Zij fietste elke dag naar school.',
              english: 'She cycled to school every day.',
              highlight: 'fietste',
            },
            {
              dutch: 'De kinderen speelden in het park.',
              english: 'The children played in the park.',
              highlight: 'speelden',
            },
          ],
        },
      ],
    },
    {
      id: 'imperfectum-2',
      title: 'Irregular Verbs in the Imperfectum',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Irregular verbs change their vowel (and sometimes the whole stem) in the imperfectum. These forms must be memorized.',
          explanation:
            'Many common Dutch verbs are irregular in the imperfectum. They do not follow the kofschip rule. Instead, the stem vowel changes, and some verbs change completely. The plural form of irregular verbs typically adds -en to the singular past form (but there are exceptions).',
        },
        {
          type: 'grammar-table',
          headers: ['Infinitive', 'Meaning', 'Singular', 'Plural'],
          rows: [
            ['zijn', 'to be', 'was', 'waren'],
            ['hebben', 'to have', 'had', 'hadden'],
            ['gaan', 'to go', 'ging', 'gingen'],
            ['komen', 'to come', 'kwam', 'kwamen'],
            ['doen', 'to do', 'deed', 'deden'],
            ['zien', 'to see', 'zag', 'zagen'],
            ['nemen', 'to take', 'nam', 'namen'],
            ['geven', 'to give', 'gaf', 'gaven'],
            ['schrijven', 'to write', 'schreef', 'schreven'],
            ['lezen', 'to read', 'las', 'lazen'],
            ['eten', 'to eat', 'at', 'aten'],
            ['drinken', 'to drink', 'dronk', 'dronken'],
          ],
          caption: 'Common irregular verbs in the imperfectum',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik was gisteren thuis.',
              english: 'I was at home yesterday.',
              highlight: 'was',
            },
            {
              dutch: 'Zij hadden geen tijd.',
              english: 'They had no time.',
              highlight: 'hadden',
            },
            {
              dutch: 'Hij ging naar de winkel.',
              english: 'He went to the store.',
              highlight: 'ging',
            },
            {
              dutch: 'Wij kwamen te laat.',
              english: 'We arrived too late.',
              highlight: 'kwamen',
            },
            {
              dutch: 'Zij schreef een brief.',
              english: 'She wrote a letter.',
              highlight: 'schreef',
            },
          ],
        },
      ],
    },
    {
      id: 'imperfectum-3',
      title: 'Imperfectum vs. Perfectum',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use the imperfectum for stories, descriptions, and habitual actions in the past. Use the perfectum for recent events and results.',
          explanation:
            'Both the imperfectum and the perfectum describe past events, but they are used differently. The imperfectum is preferred for: narratives and storytelling, descriptions of past situations, habitual or repeated actions in the past, and background information. The perfectum is preferred for: recent or completed actions, results that are still relevant, and conversational past tense.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Toen ik jong was, speelde ik elke dag buiten.',
              english: 'When I was young, I played outside every day.',
              note: 'Imperfectum: habitual past action and background description.',
            },
            {
              dutch: 'Ik heb vandaag een boek gekocht.',
              english: 'I bought a book today.',
              note: 'Perfectum: recent completed action.',
            },
            {
              dutch: 'Het regende en het was koud.',
              english: 'It was raining and it was cold.',
              note: 'Imperfectum: description of a past situation.',
            },
            {
              dutch: 'Heb je de e-mail al gelezen?',
              english: 'Have you already read the email?',
              note: 'Perfectum: asking about a result.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik werkte bij een stem dat eindigde op "k".',
              correct: 'Ik werkte (not werkde) because the stem "werk" ends in k (kofschip).',
              explanation:
                'Always check the last letter of the stem against "t kofschip" to determine whether to use -te or -de.',
            },
            {
              incorrect: 'Wij was in het park.',
              correct: 'Wij waren in het park.',
              explanation:
                '"Was" is the singular form of "zijn" in the imperfectum. The plural form is "waren".',
            },
            {
              incorrect: 'Hij gingte naar huis.',
              correct: 'Hij ging naar huis.',
              explanation:
                'Irregular verbs do not add -te/-de. They have their own unique past tense forms that must be memorized.',
            },
          ],
        },
      ],
    },
    {
      id: 'imperfectum-4',
      title: 'Imperfectum in the Workplace',
      sections: [
        {
          type: 'workplace-context',
          scenario:
            'The imperfectum is commonly used in professional settings to describe past experiences, previous positions, completed projects, and to tell colleagues about what happened.',
          examples: [
            {
              dutch: 'Ik werkte vroeger bij een ander bedrijf.',
              english: 'I used to work at a different company.',
            },
            {
              dutch: 'De vergadering duurde twee uur.',
              english: 'The meeting lasted two hours.',
            },
            {
              dutch: 'Wij hadden vorig jaar meer klanten.',
              english: 'We had more clients last year.',
            },
            {
              dutch: 'De manager gaf een presentatie over de resultaten.',
              english: 'The manager gave a presentation about the results.',
            },
            {
              dutch: 'Toen ik bij dat bedrijf werkte, reisde ik veel.',
              english: 'When I worked at that company, I traveled a lot.',
            },
          ],
        },
        {
          type: 'note',
          content:
            'In written reports and professional narratives, the imperfectum is the standard past tense. In spoken Dutch, especially in informal contexts, people often prefer the perfectum.',
          variant: 'info',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-imp-mc-1',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct imperfectum form.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the imperfectum form of "werken" (to work) for "ik"?',
            options: ['werkde', 'werkte', 'gewerkt', 'werkten'],
            correctIndex: 1,
            explanation:
              'The stem of "werken" is "werk". The last letter "k" is in "kofschip", so we add -te: "werkte".',
          },
        ],
      },
    },
    {
      id: 'a2-imp-mc-2',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Select the verb that is irregular in the simple past.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which verb is irregular in the imperfectum?',
            options: ['werken', 'maken', 'gaan', 'wonen'],
            correctIndex: 2,
            explanation:
              '"Gaan" is irregular: gaan → ging/gingen. The other verbs are regular and follow the kofschip rule.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-mc-3',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose when to use the imperfectum.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'When do you use the imperfectum instead of the perfectum?',
            options: [
              'For recent completed actions.',
              'For stories, descriptions, and habitual past actions.',
              'For actions happening right now.',
              'Only in formal writing.',
            ],
            correctIndex: 1,
            explanation:
              'The imperfectum is used for narratives, descriptions, and habitual or repeated actions in the past. The perfectum is preferred for recent events and results.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-1',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct imperfectum form of the verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'gisteren de hele dag. (werken)',
            correctAnswer: 'werkte',
            hint: 'The stem is "werk". Is the last letter in kofschip?',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-2',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Complete the sentence with the correct past tense form.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wij',
            after: 'vroeger in Amsterdam. (wonen)',
            correctAnswer: 'woonden',
            hint: 'The stem is "woon". The letter "n" is NOT in kofschip, so use -den for plural.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-3',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Type the correct simple past form using the kofschip rule.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij',
            after: 'elke dag naar kantoor. (fietsen)',
            correctAnswer: 'fietste',
            hint: 'The stem is "fiets". The last letter "s" is in kofschip.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-4',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Fill in the irregular past tense form of the verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij',
            after: 'een brief aan haar moeder. (schrijven)',
            correctAnswer: 'schreef',
            hint: 'This is an irregular verb. The past tense has a vowel change.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-5',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Complete with the correct plural imperfectum form.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De kinderen',
            after: 'naar school. (gaan)',
            correctAnswer: 'gingen',
            hint: 'Irregular verb. Plural form of "ging".',
          },
        ],
      },
    },
    {
      id: 'a2-imp-order-1',
      type: 'word-order',
      difficulty: 'guided',
      instruction: 'Put the words in the correct order to form a past tense sentence.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['vergadering', 'de', 'twee', 'duurde', 'uur'],
            correctOrder: ['De', 'vergadering', 'duurde', 'twee', 'uur'],
            translation: 'The meeting lasted two hours.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-6',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction: 'Write the correct imperfectum form of "zijn".',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Toen ik klein',
            after: ', speelde ik elke dag buiten. (zijn)',
            correctAnswer: 'was',
            hint: '"Zijn" is irregular in the imperfectum.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-fill-7',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction: 'Complete the sentence with the correct past tense of "geven".',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De manager',
            after: 'een presentatie over de resultaten. (geven)',
            correctAnswer: 'gaf',
            hint: 'Irregular verb. Think of the vowel change from "e" to "a".',
          },
        ],
      },
    },
    {
      id: 'a2-imp-mc-4',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction: 'Select the correctly spelled imperfectum sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Choose the correct sentence using the imperfectum:',
            options: [
              'Wij kwammen gisteren laat thuis.',
              'Wij kwamen gisteren laat thuis.',
              'Wij kwaamen gisteren laat thuis.',
              'Wij komt gisteren laat thuis.',
            ],
            correctIndex: 1,
            explanation:
              '"Komen" → "kwam" (singular) / "kwamen" (plural). "Kwamen" is the correct plural past tense form.',
          },
        ],
      },
    },
    {
      id: 'a2-imp-err-1',
      type: 'error-correction',
      topicId: 'imperfectum',
      instruction: 'Find and correct the mistake in each past tense sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik werkde gisteren tot laat.',
            correctedSentence: 'Ik werkte gisteren tot laat.',
            errorExplanation:
              'The stem of "werken" is "werk". The last letter "k" is in kofschip, so you must use -te, not -de: "werkte".',
          },
          {
            incorrectSentence: 'Zij leefte in een klein dorp.',
            correctedSentence: 'Zij leefde in een klein dorp.',
            errorExplanation:
              'Although the stem "leef" ends in "f" (kofschip), the original verb "leven" has a "v". The kofschip rule applies to the original consonant, so use -de: "leefde".',
          },
          {
            incorrectSentence: 'Hij gingte naar de winkel.',
            correctedSentence: 'Hij ging naar de winkel.',
            errorExplanation:
              '"Gaan" is an irregular verb. Irregular verbs do not add -te/-de. The imperfectum of "gaan" is simply "ging" (singular) or "gingen" (plural).',
          },
          {
            incorrectSentence: 'Wij was gisteren op kantoor.',
            correctedSentence: 'Wij waren gisteren op kantoor.',
            errorExplanation:
              '"Was" is the singular imperfectum form of "zijn". For plural subjects like "wij", you must use "waren".',
          },
        ],
      },
    },
    {
      id: 'a2-imp-trans-1',
      type: 'translation',
      topicId: 'imperfectum',
      instruction: 'Translate the following past tense sentences into Dutch using the imperfectum.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'When I was young, I lived in Amsterdam.',
            correctDutch: 'Toen ik jong was, woonde ik in Amsterdam.',
            acceptableAnswers: ['Toen ik jong was, woonde ik in Amsterdam.'],
            keyVocabulary: [
              { dutch: 'toen', english: 'when' },
              { dutch: 'was', english: 'was' },
              { dutch: 'woonde', english: 'lived' },
            ],
          },
          {
            english: 'She wrote a letter and he read a book.',
            correctDutch: 'Zij schreef een brief en hij las een boek.',
            acceptableAnswers: ['Ze schreef een brief en hij las een boek.', 'Zij schreef een brief en hij las een boek.'],
            keyVocabulary: [
              { dutch: 'schreef', english: 'wrote' },
              { dutch: 'las', english: 'read (past)' },
            ],
          },
          {
            english: 'The children went to school and played in the park.',
            correctDutch: 'De kinderen gingen naar school en speelden in het park.',
            acceptableAnswers: ['De kinderen gingen naar school en speelden in het park.'],
            keyVocabulary: [
              { dutch: 'gingen', english: 'went' },
              { dutch: 'speelden', english: 'played' },
            ],
          },
          {
            english: 'We had a meeting and it lasted three hours.',
            correctDutch: 'Wij hadden een vergadering en die duurde drie uur.',
            acceptableAnswers: ['We hadden een vergadering en die duurde drie uur.', 'Wij hadden een vergadering en het duurde drie uur.'],
            keyVocabulary: [
              { dutch: 'hadden', english: 'had' },
              { dutch: 'duurde', english: 'lasted' },
            ],
          },
        ],
      },
    },
    {
      id: 'a2-imp-order-2',
      type: 'word-order',
      topicId: 'imperfectum',
      instruction: 'Arrange the words into correct imperfectum sentences.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['vroeger', 'ik', 'bij', 'werkte', 'bedrijf', 'een', 'ander'],
            correctOrder: ['Ik', 'werkte', 'vroeger', 'bij', 'een', 'ander', 'bedrijf'],
            translation: 'I used to work at a different company.',
          },
          {
            shuffledWords: ['de', 'gaf', 'manager', 'presentatie', 'een', 'over', 'resultaten', 'de'],
            correctOrder: ['De', 'manager', 'gaf', 'een', 'presentatie', 'over', 'de', 'resultaten'],
            translation: 'The manager gave a presentation about the results.',
          },
          {
            shuffledWords: ['toen', 'jong', 'was', 'hij', 'las', 'veel', 'hij', 'boeken'],
            correctOrder: ['Toen', 'hij', 'jong', 'was', 'las', 'hij', 'veel', 'boeken'],
            translation: 'When he was young, he read many books.',
          },
        ],
      },
    },
  ],
};
