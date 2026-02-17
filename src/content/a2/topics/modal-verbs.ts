import { Topic } from '@/content/types';

export const modalVerbs: Topic = {
  id: 'modal-verbs',
  levelId: 'a2',
  order: 4,
  title: 'Modal Verbs',
  subtitle: 'Modale werkwoorden',
  estimatedMinutes: 35,
  lessons: [
    {
      id: 'modal-verbs-intro',
      topicId: 'modal-verbs',
      title: 'Introduction to Modal Verbs',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Modal verbs express ability, permission, obligation, desire, or future intent. They are conjugated and placed in second position, while the main verb stays as an infinitive at the end of the sentence.',
          explanation:
            'Dutch has six modal verbs: kunnen (can/be able to), moeten (must/have to), mogen (may/be allowed to), willen (want to), zullen (shall/will), and hoeven (need to). The sentence structure is: subject + modal verb (conjugated) + middle part + infinitive (at end).',
        },
        {
          type: 'grammar-table',
          headers: ['', 'kunnen', 'moeten', 'mogen', 'willen', 'zullen', 'hoeven'],
          rows: [
            ['ik', 'kan', 'moet', 'mag', 'wil', 'zal', 'hoef'],
            ['jij / je', 'kunt / kan', 'moet', 'mag', 'wilt / wil', 'zult / zal', 'hoeft'],
            ['u', 'kunt / kan', 'moet', 'mag', 'wilt', 'zult', 'hoeft'],
            ['hij / zij / het', 'kan', 'moet', 'mag', 'wil', 'zal', 'hoeft'],
            ['wij / we', 'kunnen', 'moeten', 'mogen', 'willen', 'zullen', 'hoeven'],
            ['jullie', 'kunnen', 'moeten', 'mogen', 'willen', 'zullen', 'hoeven'],
            ['zij (plural)', 'kunnen', 'moeten', 'mogen', 'willen', 'zullen', 'hoeven'],
          ],
          caption:
            'Conjugation of Dutch modal verbs in the present tense. Note the irregular singular forms.',
        },
        {
          type: 'note',
          content:
            'In spoken Dutch, "kan" is often used for all singular persons instead of "kunt". Similarly, "wil" is often used instead of "wilt" for jij. Both forms are correct.',
          variant: 'info',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik kan goed zwemmen.',
              english: 'I can swim well.',
              highlight: 'kan ... zwemmen',
              note: 'kunnen = ability',
            },
            {
              dutch: 'Zij moet morgen werken.',
              english: 'She has to work tomorrow.',
              highlight: 'moet ... werken',
              note: 'moeten = obligation',
            },
            {
              dutch: 'Mag ik hier zitten?',
              english: 'May I sit here?',
              highlight: 'Mag ... zitten',
              note: 'mogen = permission',
            },
            {
              dutch: 'Wij willen een huis kopen.',
              english: 'We want to buy a house.',
              highlight: 'willen ... kopen',
              note: 'willen = desire',
            },
            {
              dutch: 'Het zal morgen regenen.',
              english: 'It will rain tomorrow.',
              highlight: 'zal ... regenen',
              note: 'zullen = future',
            },
          ],
        },
      ],
    },
    {
      id: 'modal-verbs-meanings',
      topicId: 'modal-verbs',
      title: 'Meanings and Usage of Each Modal',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Kunnen expresses ability or possibility. Moeten expresses obligation or necessity. Mogen expresses permission. Willen expresses desire or intention. Zullen expresses future actions or suggestions. Hoeven expresses necessity and is used ONLY in negative sentences (with niet or geen) followed by te + infinitive.',
          explanation:
            'Each modal verb has specific uses. Hoeven is special: it is only used in negative constructions meaning "not to need to". It always requires "te" before the infinitive: "Je hoeft niet te komen." (You do not need to come.) In positive sentences, use moeten instead.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Kun je mij helpen?',
              english: 'Can you help me?',
              highlight: 'Kun',
              note: 'kunnen: asking about ability',
            },
            {
              dutch: 'Je moet je paspoort meenemen.',
              english: 'You must take your passport.',
              highlight: 'moet',
              note: 'moeten: obligation',
            },
            {
              dutch: 'Je mag hier niet roken.',
              english: 'You may not smoke here.',
              highlight: 'mag niet',
              note: 'mogen: prohibition (negative permission)',
            },
            {
              dutch: 'Ik wil graag een koffie bestellen.',
              english: 'I would like to order a coffee.',
              highlight: 'wil',
              note: 'willen + graag = polite request',
            },
            {
              dutch: 'Zullen we vanavond uit eten gaan?',
              english: 'Shall we go out for dinner tonight?',
              highlight: 'Zullen',
              note: 'zullen: suggestion',
            },
            {
              dutch: 'Je hoeft niet te komen.',
              english: 'You do not need to come.',
              highlight: 'hoeft niet te',
              note: 'hoeven: only used negatively, with te + infinitive',
            },
          ],
        },
        {
          type: 'note',
          content:
            'Subtle difference between moeten and hoeven: "Je moet komen" (You must come) vs. "Je hoeft niet te komen" (You don\'t need to come). The negative of moeten is stronger: "Je moet niet liegen" (You must not lie = it is wrong). "Je hoeft niet te liegen" (You don\'t need to lie = it is not necessary).',
          variant: 'warning',
        },
        {
          type: 'grammar-rule',
          rule: 'Mogen vs. kunnen: Mogen is about permission (being allowed), while kunnen is about ability (being able). "Mag ik hier parkeren?" (Am I allowed to park here?) vs. "Kan ik hier parkeren?" (Is it possible to park here?)',
          explanation:
            'In practice, Dutch speakers sometimes use kunnen where mogen would be more precise, similar to English "can" vs. "may". However, in formal contexts, the distinction matters. Mogen is used when asking for or granting permission; kunnen is used when discussing ability or possibility.',
        },
        {
          type: 'workplace-context',
          scenario:
            'Modal verbs are essential in professional Dutch for making requests, expressing obligations, and asking for permission.',
          examples: [
            {
              dutch: 'Mag ik een vraag stellen?',
              english: 'May I ask a question?',
            },
            {
              dutch: 'U moet dit formulier invullen.',
              english: 'You must fill in this form.',
            },
            {
              dutch: 'Ik wil graag een afspraak maken.',
              english: 'I would like to make an appointment.',
            },
            {
              dutch: 'Kunt u dat nog een keer uitleggen?',
              english: 'Can you explain that once more?',
            },
            {
              dutch: 'Zal ik de deur opendoen?',
              english: 'Shall I open the door?',
            },
            {
              dutch: 'Je hoeft vandaag niet over te werken.',
              english: 'You don\'t need to work overtime today.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik moet niet komen. (meaning: I don\'t need to come)',
              correct: 'Ik hoef niet te komen.',
              explanation:
                "'Ik moet niet komen' means 'I must not come' (prohibition). To say 'I don't need to come', use hoeven: 'Ik hoef niet te komen.'",
            },
            {
              incorrect: 'Ik kan een vraag stellen? (asking permission)',
              correct: 'Mag ik een vraag stellen?',
              explanation:
                "When asking for permission, use 'mogen' (mag), not 'kunnen' (kan). Kunnen is for ability, mogen is for permission.",
            },
            {
              incorrect: 'Ik wil graag bestellen een koffie.',
              correct: 'Ik wil graag een koffie bestellen.',
              explanation:
                'The infinitive always goes to the end of the sentence. The object comes before the infinitive.',
            },
            {
              incorrect: 'Je hoeft niet komen.',
              correct: 'Je hoeft niet te komen.',
              explanation:
                "Hoeven always requires 'te' before the infinitive: hoeft niet te + infinitive.",
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-modal-fill-1',
      topicId: 'modal-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction:
        'Fill in the correct modal verb based on the English translation.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'goed Nederlands spreken. (I can speak Dutch well.)',
            correctAnswer: 'kan',
            hint: 'Ability = kunnen -> ik kan',
          },
          {
            before: 'Zij',
            after: 'morgen werken. (She has to work tomorrow.)',
            correctAnswer: 'moet',
            hint: 'Obligation = moeten -> zij moet',
          },
          {
            before: '',
            after: 'ik hier zitten? (May I sit here?)',
            correctAnswer: 'Mag',
            hint: 'Permission = mogen -> mag ik',
          },
        ],
      },
    },
    {
      id: 'a2-modal-fill-2',
      topicId: 'modal-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction:
        'Fill in the correct modal verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wij',
            after: 'een nieuw huis kopen. (We want to buy a new house.)',
            correctAnswer: 'willen',
            hint: 'Desire = willen -> wij willen',
          },
          {
            before: 'Je',
            after: 'niet te wachten. (You don\'t need to wait.)',
            correctAnswer: 'hoeft',
            hint: 'Not necessary = hoeven -> je hoeft + niet + te',
          },
          {
            before: 'Het',
            after: 'morgen regenen. (It will rain tomorrow.)',
            correctAnswer: 'zal',
            hint: 'Future = zullen -> het zal',
          },
        ],
      },
    },
    {
      id: 'a2-modal-mc-1',
      topicId: 'modal-verbs',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct modal verb to complete the sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ ik een vraag stellen? (asking permission)',
            options: ['Kan', 'Mag', 'Moet', 'Zal'],
            correctIndex: 1,
            explanation:
              "When asking for permission, use 'mogen'. 'Mag ik een vraag stellen?' = May I ask a question?",
          },
          {
            question: 'Je ___ je huiswerk maken. (obligation)',
            options: ['wil', 'kan', 'moet', 'mag'],
            correctIndex: 2,
            explanation:
              "For obligation, use 'moeten'. 'Je moet je huiswerk maken' = You must do your homework.",
          },
          {
            question: '___ we morgen naar het strand gaan? (suggestion)',
            options: ['Moeten', 'Mogen', 'Hoeven', 'Zullen'],
            correctIndex: 3,
            explanation:
              "For suggestions, use 'zullen'. 'Zullen we gaan?' = Shall we go?",
          },
        ],
      },
    },
    {
      id: 'a2-modal-order-1',
      topicId: 'modal-verbs',
      type: 'word-order',
      difficulty: 'controlled',
      instruction:
        'Put the words in the correct order. Remember: modal verb in position 2, infinitive at the end.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['zwemmen', 'kan', 'goed', 'ik'],
            correctOrder: ['Ik', 'kan', 'goed', 'zwemmen'],
            translation: 'I can swim well.',
          },
          {
            shuffledWords: ['werken', 'morgen', 'moet', 'zij'],
            correctOrder: ['Zij', 'moet', 'morgen', 'werken'],
            translation: 'She has to work tomorrow.',
          },
          {
            shuffledWords: ['kopen', 'wij', 'een', 'huis', 'willen'],
            correctOrder: ['Wij', 'willen', 'een', 'huis', 'kopen'],
            translation: 'We want to buy a house.',
          },
        ],
      },
    },
    {
      id: 'a2-modal-mc-2',
      topicId: 'modal-verbs',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Choose the correct sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "You don\'t need to come" in Dutch?',
            options: [
              'Je moet niet komen.',
              'Je hoeft niet te komen.',
              'Je kan niet komen.',
              'Je hoeft niet komen.',
            ],
            correctIndex: 1,
            explanation:
              "'Je hoeft niet te komen' means 'You don't need to come.' Remember: hoeven requires niet + te + infinitive. 'Je moet niet komen' means 'You must not come' (prohibition).",
          },
          {
            question: 'Which is the polite way to order something?',
            options: [
              'Ik wil een koffie!',
              'Ik wil graag een koffie bestellen.',
              'Ik moet een koffie bestellen.',
              'Ik zal een koffie bestellen.',
            ],
            correctIndex: 1,
            explanation:
              "Adding 'graag' to 'willen' makes it polite: 'Ik wil graag...' = I would like to...",
          },
          {
            question:
              '"Je ___ hier niet parkeren." (There is a sign that forbids parking.)',
            options: ['kunt', 'hoeft', 'wilt', 'mag'],
            correctIndex: 3,
            explanation:
              "When something is forbidden (not allowed), use 'mogen': 'Je mag hier niet parkeren' = You may not / are not allowed to park here.",
          },
        ],
      },
    },
    {
      id: 'a2-modal-fill-3',
      topicId: 'modal-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in the correct modal verb based on context.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het is een vrije dag. Je',
            after: 'niet te werken. (not necessary)',
            correctAnswer: 'hoeft',
            hint: 'Not necessary = hoeven (+ niet + te)',
          },
          {
            before: '',
            after: 'u dat nog een keer uitleggen? (Are you able to...?)',
            correctAnswer: 'Kunt',
            acceptableAnswers: ['Kan'],
            hint: 'Ability = kunnen -> kunt u / kan u',
          },
          {
            before: '',
            after: 'ik de deur opendoen? (Shall I...? = offering)',
            correctAnswer: 'Zal',
            hint: 'Offering to do something = zullen -> zal ik',
          },
        ],
      },
    },
    {
      id: 'a2-modal-order-2',
      topicId: 'modal-verbs',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Arrange the words into correct Dutch sentences with modal verbs.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['stellen', 'ik', 'een', 'mag', 'vraag'],
            correctOrder: ['Mag', 'ik', 'een', 'vraag', 'stellen'],
            translation: 'May I ask a question?',
          },
          {
            shuffledWords: ['invullen', 'moet', 'u', 'dit', 'formulier'],
            correctOrder: ['U', 'moet', 'dit', 'formulier', 'invullen'],
            translation: 'You must fill in this form.',
          },
          {
            shuffledWords: ['te', 'hoeft', 'komen', 'niet', 'je'],
            correctOrder: ['Je', 'hoeft', 'niet', 'te', 'komen'],
            translation: 'You don\'t need to come.',
          },
        ],
      },
    },
    {
      id: 'a2-modal-fill-4',
      topicId: 'modal-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Complete the workplace sentences with the appropriate modal verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'graag een afspraak maken. (I would like to)',
            correctAnswer: 'wil',
            hint: 'Desire/polite request = willen -> ik wil (+ graag)',
          },
          {
            before: '',
            after: 'je morgen een uur eerder komen? (Are you able to)',
            correctAnswer: 'Kun',
            acceptableAnswers: ['Kan'],
            hint: 'Ability = kunnen -> kun je / kan je',
          },
          {
            before: 'Wij',
            after: 'de deadline halen. (We have to)',
            correctAnswer: 'moeten',
            hint: 'Obligation = moeten -> wij moeten',
          },
        ],
      },
    },
    {
      id: 'a2-modal-mc-3',
      topicId: 'modal-verbs',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Choose the best Dutch translation for each English sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"You don\'t have to worry about it."',
            options: [
              'Je moet je er niet druk om maken.',
              'Je hoeft je er geen zorgen over te maken.',
              'Je kan je er niet zorgen over maken.',
              'Je wilt je er geen zorgen over maken.',
            ],
            correctIndex: 1,
            explanation:
              "'Don't have to' (not necessary) = hoeven + niet/geen + te. 'Je hoeft je er geen zorgen over te maken.'",
          },
          {
            question: '"Shall we discuss this after the meeting?"',
            options: [
              'Moeten wij dit na de vergadering bespreken?',
              'Willen wij dit na de vergadering bespreken?',
              'Zullen we dit na de vergadering bespreken?',
              'Kunnen we dit na de vergadering bespreken?',
            ],
            correctIndex: 2,
            explanation:
              "'Shall we' for suggestions = 'Zullen we...?' This is the natural Dutch way to make a suggestion.",
          },
        ],
      },
    },
    {
      id: 'a2-modal-order-3',
      topicId: 'modal-verbs',
      type: 'word-order',
      difficulty: 'open',
      instruction:
        'Create correct Dutch sentences from the scrambled words.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: [
              'niet',
              'hier',
              'je',
              'mag',
              'roken',
            ],
            correctOrder: ['Je', 'mag', 'hier', 'niet', 'roken'],
            translation: 'You are not allowed to smoke here.',
          },
          {
            shuffledWords: [
              'uitleggen',
              'nog',
              'kunt',
              'een',
              'u',
              'keer',
              'dat',
            ],
            correctOrder: ['Kunt', 'u', 'dat', 'nog', 'een', 'keer', 'uitleggen'],
            translation: 'Can you explain that once more?',
          },
        ],
      },
    },
    {
      id: 'a2-modal-fill-5',
      topicId: 'modal-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction:
        'Choose the right modal verb for each situation and fill it in.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De dokter zegt dat ik meer',
            after: 'bewegen. (The doctor says I need to)',
            correctAnswer: 'moet',
            hint: 'Obligation from a doctor = moeten',
          },
          {
            before: 'We hebben genoeg eten. Je',
            after: 'niet nog meer mee te nemen. (not necessary)',
            correctAnswer: 'hoeft',
            hint: 'Not necessary = hoeven (+ niet + te)',
          },
          {
            before: '',
            after: 'ik u ergens mee helpen? (Can I / offering)',
            correctAnswer: 'Kan',
            acceptableAnswers: ['Mag'],
            hint: 'Offering help = kunnen or mogen',
          },
        ],
      },
    },
    {
      id: 'a2-modal-mc-4',
      topicId: 'modal-verbs',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Select the most appropriate response for each workplace scenario.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question:
              'Your manager asks if you can stay late. You cannot because you have a doctor\'s appointment. What do you say?',
            options: [
              'Ik wil niet overwerken.',
              'Ik hoef niet te blijven.',
              'Ik kan helaas niet blijven. Ik moet naar de dokter.',
              'Ik zal niet overwerken.',
            ],
            correctIndex: 2,
            explanation:
              "'Ik kan niet blijven' (I cannot stay) explains inability. 'Ik moet naar de dokter' (I have to go to the doctor) gives the reason. This is polite and appropriate for the workplace.",
          },
          {
            question:
              'A colleague wants to schedule a meeting. How do you suggest a time politely?',
            options: [
              'Je moet om twee uur komen.',
              'Zullen we om twee uur afspreken?',
              'Je mag om twee uur komen.',
              'Ik wil om twee uur vergaderen!',
            ],
            correctIndex: 1,
            explanation:
              "'Zullen we...?' is the most polite way to make a suggestion. It literally means 'Shall we arrange to meet at two?'",
          },
        ],
      },
    },
  ],
};
