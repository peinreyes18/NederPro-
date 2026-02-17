import { Topic } from '@/content/types';

export const formalEmailWriting: Topic = {
  id: 'formal-email-writing',
  levelId: 'a2',
  order: 10,
  title: 'Formal Email Writing',
  subtitle: 'Formele e-mails schrijven',
  estimatedMinutes: 35,
  lessons: [
    {
      id: 'formal-email-writing-1',
      title: 'Opening and Addressing',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal Dutch emails begin with "Geachte" (Dear) followed by the recipient\'s title and name. Use a comma after the greeting.',
          explanation:
            'The level of formality in your greeting depends on your relationship with the recipient. "Geachte heer/mevrouw" is the most formal and is used when you do not know the person or their name. When you know the name, use "Geachte mevrouw De Vries," or "Geachte heer Jansen,". For a known contact where less formality is acceptable, "Beste meneer/mevrouw [naam]," is appropriate. Always use a comma after the greeting, and start the next line with a capital letter.',
        },
        {
          type: 'grammar-table',
          headers: ['Formality', 'Dutch', 'English', 'When to Use'],
          rows: [
            ['Very formal (unknown)', 'Geachte heer/mevrouw,', 'Dear Sir/Madam,', 'Unknown recipient or very formal contexts'],
            ['Formal (known name)', 'Geachte mevrouw De Vries,', 'Dear Mrs. De Vries,', 'Known recipient, formal relationship'],
            ['Semi-formal', 'Beste meneer Jansen,', 'Dear Mr. Jansen,', 'Known contact, professional but friendly'],
            ['Semi-formal (team)', 'Beste collega\'s,', 'Dear colleagues,', 'Addressing a group of colleagues'],
          ],
          caption: 'Email greetings ranked by formality level',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Geachte heer/mevrouw,',
              english: 'Dear Sir/Madam,',
              note: 'Most formal. Used when you do not know the recipient\'s name.',
            },
            {
              dutch: 'Geachte mevrouw Van den Berg,',
              english: 'Dear Mrs. Van den Berg,',
              note: 'Formal. Used when you know the name but the relationship is professional.',
            },
            {
              dutch: 'Beste meneer Bakker,',
              english: 'Dear Mr. Bakker,',
              note: 'Less formal. Used for known professional contacts.',
            },
          ],
        },
        {
          type: 'note',
          content:
            'In Dutch, "Geachte" literally means "esteemed" and is always followed by "heer" (sir/Mr.) or "mevrouw" (madam/Mrs./Ms.). Never write "Geachte meneer" -- use "Geachte heer" in formal contexts.',
          variant: 'warning',
        },
      ],
    },
    {
      id: 'formal-email-writing-2',
      title: 'Body: Opening Lines and Requests',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal email bodies use set phrases to introduce the purpose, make requests politely, and refer to previous communication.',
          explanation:
            'Dutch formal emails rely on standard phrases that signal professionalism. The opening line typically states the reason for writing. Requests are made politely using the conditional "zou" (would). References to prior communication use "naar aanleiding van" (with reference to).',
        },
        {
          type: 'grammar-table',
          headers: ['Function', 'Dutch Phrase', 'English Translation'],
          rows: [
            ['Referencing', 'Naar aanleiding van uw e-mail...', 'With reference to your email...'],
            ['Sending', 'Hierbij stuur ik u...', 'I hereby send you...'],
            ['Informing', 'Hierbij wil ik u informeren over...', 'I would like to inform you about...'],
            ['Requesting', 'Zou u zo vriendelijk willen zijn om...', 'Would you be so kind as to...'],
            ['Requesting (shorter)', 'Zou u mij kunnen informeren over...', 'Could you inform me about...'],
            ['Apologizing', 'Mijn excuses voor het ongemak.', 'My apologies for the inconvenience.'],
            ['Confirming', 'Hierbij bevestig ik dat...', 'I hereby confirm that...'],
          ],
          caption: 'Common formal email phrases for the body',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Naar aanleiding van ons telefoongesprek van gisteren, stuur ik u hierbij het rapport.',
              english: 'With reference to our phone call yesterday, I hereby send you the report.',
            },
            {
              dutch: 'Zou u zo vriendelijk willen zijn om mij de documenten te sturen?',
              english: 'Would you be so kind as to send me the documents?',
              highlight: 'Zou u zo vriendelijk willen zijn om',
              note: 'This is the most polite way to make a request in formal Dutch.',
            },
            {
              dutch: 'Hierbij wil ik u informeren over de nieuwe procedures.',
              english: 'I would like to inform you about the new procedures.',
              highlight: 'Hierbij wil ik u informeren over',
            },
          ],
        },
        {
          type: 'note',
          content:
            'Always use the formal "u" (you) form throughout formal emails, never "je/jij". This applies to all verb conjugations as well: "Zou u..." (Would you...) instead of "Zou je...".',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'formal-email-writing-3',
      title: 'Closing and Sign-off',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal emails end with a closing phrase, followed by a comma, and then your name. Common closing lines express anticipation of a reply or gratitude.',
          explanation:
            'Before the sign-off, it is common to include a sentence expressing your expectation of a reply or thanking the recipient. The sign-off itself varies in formality. "Hoogachtend" is the most formal, while "Met vriendelijke groet" is standard for professional communication.',
        },
        {
          type: 'grammar-table',
          headers: ['Type', 'Dutch', 'English'],
          rows: [
            ['Pre-closing', 'In afwachting van uw reactie,', 'Looking forward to your response,'],
            ['Pre-closing', 'Bij voorbaat dank.', 'Thank you in advance.'],
            ['Pre-closing', 'Mocht u vragen hebben, dan hoor ik het graag.', 'Should you have questions, I would be happy to hear from you.'],
            ['Sign-off (formal)', 'Hoogachtend,', 'Yours faithfully,'],
            ['Sign-off (standard)', 'Met vriendelijke groet,', 'Kind regards,'],
            ['Sign-off (semi-formal)', 'Met vriendelijke groeten,', 'With kind regards,'],
          ],
          caption: 'Common closing phrases and sign-offs',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'In afwachting van uw reactie verblijf ik.\n\nMet vriendelijke groet,\nAnna de Jong',
              english: 'Looking forward to your response.\n\nKind regards,\nAnna de Jong',
              note: 'Standard professional closing with the most common sign-off.',
            },
            {
              dutch: 'Bij voorbaat dank voor uw medewerking.\n\nHoogachtend,\nPieter van Dijk',
              english: 'Thank you in advance for your cooperation.\n\nYours faithfully,\nPieter van Dijk',
              note: 'Very formal closing, suitable for official correspondence.',
            },
          ],
        },
      ],
    },
    {
      id: 'formal-email-writing-4',
      title: 'Full Email Examples and Common Mistakes',
      sections: [
        {
          type: 'workplace-context',
          scenario:
            'Below are examples of complete formal emails for common workplace situations: reporting sick, requesting a meeting, and applying for a position.',
          examples: [
            {
              dutch: 'Geachte mevrouw Smit,\n\nHelaas moet ik u mededelen dat ik vandaag niet kan komen werken vanwege ziekte. Ik hoop morgen weer aanwezig te zijn. Mocht het langer duren, dan laat ik het u zo snel mogelijk weten.\n\nMet vriendelijke groet,\nThomas Bakker',
              english: 'Dear Mrs. Smit,\n\nUnfortunately, I must inform you that I cannot come to work today due to illness. I hope to be present again tomorrow. Should it take longer, I will let you know as soon as possible.\n\nKind regards,\nThomas Bakker',
            },
            {
              dutch: 'Geachte heer De Vries,\n\nZou het mogelijk zijn om volgende week een afspraak te plannen? Ik zou graag de voortgang van het project met u willen bespreken. Dinsdag of woensdag zou mij het beste uitkomen.\n\nIn afwachting van uw reactie.\n\nMet vriendelijke groet,\nSarah Jansen',
              english: 'Dear Mr. De Vries,\n\nWould it be possible to schedule a meeting next week? I would like to discuss the project progress with you. Tuesday or Wednesday would suit me best.\n\nLooking forward to your response.\n\nKind regards,\nSarah Jansen',
            },
            {
              dutch: 'Geachte heer/mevrouw,\n\nNaar aanleiding van uw vacature voor de functie van projectmanager, wil ik graag mijn interesse kenbaar maken. Hierbij stuur ik u mijn cv en motivatiebrief.\n\nBij voorbaat dank voor uw tijd en aandacht.\n\nHoogachtend,\nMark van der Berg',
              english: 'Dear Sir/Madam,\n\nWith reference to your vacancy for the position of project manager, I would like to express my interest. I hereby send you my CV and cover letter.\n\nThank you in advance for your time and attention.\n\nYours faithfully,\nMark van der Berg',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Hoi mevrouw Smit,',
              correct: 'Geachte mevrouw Smit,',
              explanation:
                '"Hoi" is very informal (like "Hi"). In formal emails, always use "Geachte" or at minimum "Beste".',
            },
            {
              incorrect: 'Ik wil dat je het rapport stuurt.',
              correct: 'Zou u zo vriendelijk willen zijn om het rapport te sturen?',
              explanation:
                'In formal emails, use "u" instead of "je" and make requests politely with "Zou u...".',
            },
            {
              incorrect: 'Groetjes, Anna',
              correct: 'Met vriendelijke groet,\nAnna',
              explanation:
                '"Groetjes" is informal (like "Cheers"). In formal emails, use "Met vriendelijke groet" or "Hoogachtend".',
            },
            {
              incorrect: 'Geachte meneer Jansen,',
              correct: 'Geachte heer Jansen,',
              explanation:
                'After "Geachte", use "heer" (not "meneer") and "mevrouw". "Meneer" is used after "Beste": "Beste meneer Jansen,".',
            },
          ],
        },
        {
          type: 'note',
          content:
            'When in doubt, err on the side of being too formal. It is better to be slightly too formal than too informal in Dutch professional correspondence. You can always adjust once the other person sets a more informal tone.',
          variant: 'tip',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-email-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the most formal way to begin a Dutch email when you do not know the recipient\'s name?',
            options: [
              'Hoi,',
              'Beste meneer/mevrouw,',
              'Geachte heer/mevrouw,',
              'Hallo,',
            ],
            correctIndex: 2,
            explanation:
              '"Geachte heer/mevrouw," is the most formal greeting used when the recipient\'s name is unknown. "Beste" is semi-formal, while "Hoi" and "Hallo" are informal.',
          },
        ],
      },
    },
    {
      id: 'a2-email-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which closing is appropriate for a formal business email?',
            options: [
              'Groetjes,',
              'Doei!',
              'Met vriendelijke groet,',
              'Kusjes,',
            ],
            correctIndex: 2,
            explanation:
              '"Met vriendelijke groet," (Kind regards,) is the standard formal closing for business emails. The others are informal or inappropriate for professional contexts.',
          },
        ],
      },
    },
    {
      id: 'a2-email-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What does "Bij voorbaat dank" mean?',
            options: [
              'Best wishes',
              'Thank you in advance',
              'Looking forward to hearing from you',
              'With reference to',
            ],
            correctIndex: 1,
            explanation:
              '"Bij voorbaat dank" means "Thank you in advance." It is a common pre-closing phrase in formal Dutch emails.',
          },
        ],
      },
    },
    {
      id: 'a2-email-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the formal email phrase.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'heer/mevrouw,',
            correctAnswer: 'Geachte',
            hint: 'The most formal Dutch email greeting means "esteemed".',
          },
        ],
      },
    },
    {
      id: 'a2-email-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the formal email phrase.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Naar aanleiding van uw e-mail,',
            after: 'ik u hierbij het gevraagde document.',
            correctAnswer: 'stuur',
            acceptableAnswers: ['stuur', 'zend'],
            hint: 'Complete: "I hereby send you the requested document."',
          },
        ],
      },
    },
    {
      id: 'a2-email-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the formal email phrase.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zou u zo vriendelijk',
            after: 'zijn om mij te bellen?',
            correctAnswer: 'willen',
            hint: 'Complete the polite request: "Would you be so kind as to call me?"',
          },
        ],
      },
    },
    {
      id: 'a2-email-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Complete the formal email phrase.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'In afwachting van uw',
            after: '.',
            correctAnswer: 'reactie',
            acceptableAnswers: ['reactie', 'antwoord'],
            hint: 'Complete: "Looking forward to your response/reply."',
          },
        ],
      },
    },
    {
      id: 'a2-email-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a formal phrase.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['stuur', 'hierbij', 'mijn', 'u', 'ik', 'cv'],
            correctOrder: ['Hierbij', 'stuur', 'ik', 'u', 'mijn', 'cv'],
            translation: 'I hereby send you my CV.',
          },
        ],
      },
    },
    {
      id: 'a2-email-mc-4',
      type: 'multiple-choice',
      instruction: 'Choose the most appropriate phrasing.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'You want to politely ask your manager to reschedule a meeting. Which phrasing is most appropriate?',
            options: [
              'Verplaats de vergadering.',
              'Zou u de vergadering kunnen verplaatsen?',
              'Je moet de vergadering verplaatsen.',
              'Ik wil dat je de vergadering verplaatst.',
            ],
            correctIndex: 1,
            explanation:
              '"Zou u de vergadering kunnen verplaatsen?" (Could you reschedule the meeting?) uses the formal "u" and the polite conditional "zou ... kunnen". The other options are either too direct or use the informal "je".',
          },
        ],
      },
    },
    {
      id: 'a2-email-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a formal phrase.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['u', 'zou', 'vriendelijk', 'zo', 'zijn', 'willen', 'mij', 'te', 'om', 'informeren'],
            correctOrder: ['Zou', 'u', 'zo', 'vriendelijk', 'willen', 'zijn', 'om', 'mij', 'te', 'informeren'],
            translation: 'Would you be so kind as to inform me?',
          },
        ],
      },
    },
    {
      id: 'a2-email-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Complete the formal email phrase.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Mocht u vragen hebben, dan',
            after: 'ik het graag.',
            correctAnswer: 'hoor',
            hint: 'Complete: "Should you have questions, I would be happy to hear from you." What verb means "to hear"?',
          },
        ],
      },
    },
    {
      id: 'a2-email-order-3',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a formal phrase.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['uw', 'aanleiding', 'naar', 'vacature', 'van', 'wil', 'ik', 'mijn', 'graag', 'kenbaar', 'interesse', 'maken'],
            correctOrder: ['Naar', 'aanleiding', 'van', 'uw', 'vacature', 'wil', 'ik', 'graag', 'mijn', 'interesse', 'kenbaar', 'maken'],
            translation: 'With reference to your vacancy, I would like to express my interest.',
          },
        ],
      },
    },
    {
      id: 'a2-email-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a formal email based on the scenario below.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt:
          'Write a formal email to your manager to request a day off next Friday.',
        context:
          'You work at a Dutch company. Your manager is Mevrouw Van den Berg. You need Friday off for a personal appointment. You will ensure your work is covered by a colleague.',
        guidelines: [
          'Use a formal greeting (Geachte...)',
          'State the reason for writing',
          'Mention that your work will be covered',
          'Use a formal closing (Met vriendelijke groet)',
        ],
        sampleResponse:
          'Geachte mevrouw Van den Berg,\n\nHierbij wil ik u vragen of het mogelijk is om aanstaande vrijdag vrij te nemen. Ik heb een persoonlijke afspraak. Mijn collega zal mijn taken overnemen.\n\nBij voorbaat dank voor uw begrip.\n\nMet vriendelijke groet,\n[naam]',
        keyPhrases: [
          'Geachte',
          'mevrouw',
          'vrijdag',
          'vrij',
          'collega',
          'Met vriendelijke groet',
        ],
      },
    },
    {
      id: 'a2-email-rc-1',
      type: 'reading-comprehension',
      instruction: 'Read the email and answer the questions.',
      difficulty: 'guided',
      content: {
        type: 'reading-comprehension',
        passageTitle: 'E-mail van de manager',
        passage:
          "Beste collega's,\n\nAanstaande maandag hebben wij een teamvergadering om 10:00 uur in vergaderzaal 3. De vergadering duurt ongeveer een uur. Wij bespreken de resultaten van het project en de planning voor volgende maand.\n\nZou iedereen de bijlage willen lezen voor de vergadering?\n\nMet vriendelijke groet,\nPieter de Vries\nProjectmanager",
        questions: [
          {
            question: 'Wanneer is de teamvergadering?',
            options: [
              'Vrijdag om 10:00',
              'Maandag om 10:00',
              'Dinsdag om 14:00',
              'Woensdag om 9:00',
            ],
            correctAnswer: 'Maandag om 10:00',
            explanation:
              'The email says "Aanstaande maandag ... om 10:00 uur".',
          },
          {
            question: 'Hoe lang duurt de vergadering?',
            options: [
              'Een half uur',
              'Ongeveer een uur',
              'Twee uur',
              'De hele ochtend',
            ],
            correctAnswer: 'Ongeveer een uur',
            explanation:
              'The email states "De vergadering duurt ongeveer een uur."',
          },
          {
            question: "Wat moeten de collega's doen voor de vergadering?",
            correctAnswer: 'De bijlage lezen',
            explanation:
              'Pieter asks "Zou iedereen de bijlage willen lezen voor de vergadering?"',
          },
        ],
      },
    },
  ],
};
