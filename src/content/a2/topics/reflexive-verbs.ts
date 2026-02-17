import { Topic } from '@/content/types';

export const reflexiveVerbs: Topic = {
  id: 'reflexive-verbs',
  levelId: 'a2',
  order: 8,
  title: 'Reflexive Verbs',
  subtitle: 'Wederkerend werkwoorden',
  estimatedMinutes: 30,
  lessons: [
    {
      id: 'reflexive-verbs-1',
      title: 'What Are Reflexive Verbs?',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Reflexive verbs use a reflexive pronoun to indicate that the subject performs the action on itself.',
          explanation:
            'In Dutch, reflexive verbs (wederkerend werkwoorden) are accompanied by a reflexive pronoun. The pronoun changes depending on the subject. Many verbs that are reflexive in Dutch are not reflexive in English, so you need to learn which verbs require a reflexive pronoun.',
        },
        {
          type: 'grammar-table',
          headers: ['Subject', 'Reflexive Pronoun (unstressed)', 'Reflexive Pronoun (stressed)'],
          rows: [
            ['ik', 'me', 'mij'],
            ['jij / je', 'je', 'jou'],
            ['hij / zij / het', 'zich', 'zich'],
            ['u', 'zich', 'zich'],
            ['wij / we', 'ons', 'ons'],
            ['jullie', 'je', 'jullie'],
            ['zij (plural)', 'zich', 'zich'],
          ],
          caption: 'Reflexive pronouns by subject. In everyday speech, the unstressed forms are more common.',
        },
        {
          type: 'note',
          content:
            'The formal "u" always uses "zich" as its reflexive pronoun, just like the third person. The unstressed forms (me, je, zich, ons) are standard in normal conversation.',
          variant: 'info',
        },
      ],
    },
    {
      id: 'reflexive-verbs-2',
      title: 'Common Reflexive Verbs',
      sections: [
        {
          type: 'grammar-table',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['zich voelen', 'to feel', 'Ik voel me goed.'],
            ['zich vergissen', 'to be mistaken', 'Hij vergist zich.'],
            ['zich voorstellen', 'to introduce oneself / to imagine', 'Ik stel me even voor.'],
            ['zich herinneren', 'to remember', 'Zij herinnert zich de vakantie.'],
            ['zich aankleden', 'to get dressed', 'Ik kleed me aan.'],
            ['zich wassen', 'to wash oneself', 'Hij wast zich elke ochtend.'],
            ['zich zorgen maken', 'to worry', 'Wij maken ons zorgen.'],
            ['zich aanmelden', 'to register / to sign up', 'Kunt u zich aanmelden bij de receptie?'],
            ['zich schamen', 'to be ashamed', 'Zij schaamt zich.'],
            ['zich gedragen', 'to behave', 'De kinderen gedragen zich goed.'],
            ['zich haasten', 'to hurry', 'Ik moet me haasten.'],
            ['zich ergeren aan', 'to be annoyed at', 'Hij ergert zich aan het lawaai.'],
            ['zich bemoeien met', 'to meddle with', 'Bemoei je er niet mee!'],
            ['zich interesseren voor', 'to be interested in', 'Zij interesseert zich voor kunst.'],
            ['zich voorbereiden', 'to prepare oneself', 'We bereiden ons voor op het examen.'],
            ['zich vervelen', 'to be bored', 'De studenten vervelen zich.'],
            ['zich abonneren', 'to subscribe', 'Ik heb me geabonneerd op de krant.'],
            ['zich verstoppen', 'to hide (oneself)', 'De kat verstopt zich onder het bed.'],
            ['zich concentreren', 'to concentrate', 'Ik kan me niet concentreren.'],
            ['zich verontschuldigen', 'to apologize', 'Hij verontschuldigt zich voor de fout.'],
          ],
          caption: 'Common reflexive verbs in Dutch. Many take a preposition (aan, met, voor, op).',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik voel me goed.',
              english: 'I feel good.',
              highlight: 'me',
            },
            {
              dutch: 'Hij vergist zich.',
              english: 'He is mistaken.',
              highlight: 'zich',
            },
            {
              dutch: 'Wij stellen ons voor.',
              english: 'We introduce ourselves.',
              highlight: 'ons',
            },
            {
              dutch: 'Zij herinnert zich de vakantie.',
              english: 'She remembers the vacation.',
              highlight: 'zich',
            },
            {
              dutch: 'De kinderen kleden zich aan.',
              english: 'The children get dressed.',
              highlight: 'zich',
              note: 'For separable reflexive verbs, the reflexive pronoun comes after the conjugated verb, and the prefix goes to the end.',
            },
          ],
        },
      ],
    },
    {
      id: 'reflexive-verbs-3',
      title: 'Position of the Reflexive Pronoun',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The reflexive pronoun comes directly after the conjugated verb in main clauses.',
          explanation:
            'In a standard main clause, the reflexive pronoun is placed immediately after the conjugated verb. In questions with inversion, the reflexive pronoun comes after the subject. In subordinate clauses, the reflexive pronoun follows the subject.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik voel me vandaag niet lekker.',
              english: 'I do not feel well today.',
              note: 'Main clause: reflexive pronoun "me" comes right after verb "voel".',
            },
            {
              dutch: 'Voel je je vandaag beter?',
              english: 'Do you feel better today?',
              note: 'Question with inversion: "je" (subject) comes after verb, then "je" (reflexive pronoun).',
            },
            {
              dutch: 'Ik denk dat hij zich vergist.',
              english: 'I think that he is mistaken.',
              note: 'Subordinate clause: reflexive pronoun "zich" follows the subject "hij".',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik voel zich goed.',
              correct: 'Ik voel me goed.',
              explanation:
                '"Zich" is only used for third person (hij/zij/het) and formal "u". With "ik", use "me" or "mij".',
            },
            {
              incorrect: 'Hij voelt hem goed.',
              correct: 'Hij voelt zich goed.',
              explanation:
                'For reflexive verbs in the third person, always use "zich", not "hem" or "haar". "Hem" would mean he feels someone else.',
            },
            {
              incorrect: 'Wij voelen zich goed.',
              correct: 'Wij voelen ons goed.',
              explanation:
                'With "wij", the reflexive pronoun is "ons", not "zich".',
            },
            {
              incorrect: 'Ik kleed aan me.',
              correct: 'Ik kleed me aan.',
              explanation:
                'The reflexive pronoun comes right after the conjugated verb, before the separable prefix.',
            },
          ],
        },
      ],
    },
    {
      id: 'reflexive-verbs-4',
      title: 'Reflexive Verbs in the Workplace',
      sections: [
        {
          type: 'workplace-context',
          scenario:
            'Reflexive verbs are frequently used in professional introductions, registrations, and expressing how you feel about work situations.',
          examples: [
            {
              dutch: 'Ik stel me even voor: mijn naam is Anna en ik ben de nieuwe projectmanager.',
              english: 'Let me introduce myself: my name is Anna and I am the new project manager.',
            },
            {
              dutch: 'Kunt u zich aanmelden bij de receptie?',
              english: 'Could you register at the reception?',
            },
            {
              dutch: 'Ik voel me thuis bij dit team.',
              english: 'I feel at home with this team.',
            },
            {
              dutch: 'We moeten ons voorbereiden op de presentatie.',
              english: 'We need to prepare ourselves for the presentation.',
            },
            {
              dutch: 'Zij maakt zich zorgen over de deadline.',
              english: 'She is worried about the deadline.',
            },
          ],
        },
        {
          type: 'note',
          content:
            'When introducing yourself in a formal setting, "Ik stel me even voor" is a very natural and commonly used phrase. Practice this for meetings and networking events.',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'reflexive-verbs-5',
      title: 'Healthcare & Daily Care Reflexive Verbs',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Many reflexive verbs describe daily self-care and health situations.',
          explanation:
            'In healthcare contexts and daily routines, reflexive verbs are essential. These describe actions you do to yourself: washing, dressing, injuring, feeling unwell, etc. Knowing these is important for doctor visits and talking about your health.',
        },
        {
          type: 'grammar-table',
          title: 'Healthcare & daily care reflexive verbs',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['zich wassen', 'to wash oneself', 'Ik was me elke ochtend.'],
            ['zich aankleden', 'to get dressed', 'Hij kleedt zich snel aan.'],
            ['zich uitkleden', 'to undress', 'Kunt u zich uitkleden voor het onderzoek?'],
            ['zich omkleden', 'to change clothes', 'Ik moet me even omkleden.'],
            ['zich verzorgen', 'to take care of oneself', 'Zij verzorgt zich goed.'],
            ['zich bezeren', 'to hurt oneself', 'Ik heb me bezeerd aan mijn knie.'],
            ['zich verwonden', 'to wound oneself', 'Hij heeft zich verwond met een mes.'],
            ['zich snijden', 'to cut oneself', 'Ik heb me gesneden.'],
            ['zich verbranden', 'to burn oneself', 'Zij heeft zich verbrand aan de oven.'],
            ['zich verslikken', 'to choke (on food/drink)', 'Hij verslikte zich in het water.'],
            ['zich voelen', 'to feel (health)', 'Ik voel me niet lekker.'],
            ['zich ziek melden', 'to call in sick', 'Ik moet me ziek melden bij mijn baas.'],
          ],
        },
        {
          type: 'examples',
          title: 'At the doctor',
          examples: [
            {
              dutch: 'Kunt u zich uitkleden achter het gordijn?',
              english: 'Could you undress behind the curtain?',
              highlight: 'zich uitkleden',
            },
            {
              dutch: 'Ik heb me bezeerd tijdens het sporten.',
              english: 'I hurt myself while exercising.',
              highlight: 'me bezeerd',
            },
            {
              dutch: 'Ik voel me al drie dagen niet lekker.',
              english: 'I have not been feeling well for three days.',
              highlight: 'me',
            },
            {
              dutch: 'Hij heeft zich verbrand aan heet water.',
              english: 'He burned himself on hot water.',
              highlight: 'zich verbrand',
            },
          ],
        },
        {
          type: 'note',
          content:
            'At the doctor, you will often hear "Kunt u zich uitkleden?" (Can you undress?). This is a standard and polite instruction. In the perfect tense, reflexive verbs follow the same pattern: "Ik heb me gesneden" (I cut myself).',
          variant: 'tip',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-refl-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the correct reflexive pronoun for "ik"?',
            options: ['zich', 'me', 'ons', 'je'],
            correctIndex: 1,
            explanation:
              'The reflexive pronoun for "ik" is "me" (unstressed) or "mij" (stressed). "Zich" is used for third person and formal "u".',
          },
        ],
      },
    },
    {
      id: 'a2-refl-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is correct?',
            options: [
              'Hij voelt hem goed.',
              'Hij voelt zich goed.',
              'Hij voelt ons goed.',
              'Hij voelt me goed.',
            ],
            correctIndex: 1,
            explanation:
              'For reflexive verbs with "hij", the reflexive pronoun is "zich". Using "hem" would imply he is feeling someone else.',
          },
        ],
      },
    },
    {
      id: 'a2-refl-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct answer.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Where does the reflexive pronoun go in a main clause?',
            options: [
              'At the beginning of the sentence.',
              'At the end of the sentence.',
              'Directly after the conjugated verb.',
              'Before the subject.',
            ],
            correctIndex: 2,
            explanation:
              'In a main clause, the reflexive pronoun is placed directly after the conjugated verb: "Ik voel me goed."',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik voel',
            after: 'vandaag niet lekker.',
            correctAnswer: 'me',
            acceptableAnswers: ['me', 'mij'],
            hint: 'Which reflexive pronoun goes with "ik"?',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wij maken',
            after: 'zorgen over het project.',
            correctAnswer: 'ons',
            hint: 'Which reflexive pronoun goes with "wij"?',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kunt u',
            after: 'aanmelden bij de receptie?',
            correctAnswer: 'zich',
            hint: 'Which reflexive pronoun goes with formal "u"?',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij herinnert',
            after: 'de vakantie nog goed.',
            correctAnswer: 'zich',
            hint: 'Which reflexive pronoun goes with "hij"?',
          },
        ],
      },
    },
    {
      id: 'a2-refl-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['voor', 'stel', 'me', 'ik', 'even'],
            correctOrder: ['Ik', 'stel', 'me', 'even', 'voor'],
            translation: 'Let me introduce myself.',
          },
        ],
      },
    },
    {
      id: 'a2-refl-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['kinderen', 'de', 'kleden', 'aan', 'zich', 'elke', 'ochtend'],
            correctOrder: ['De', 'kinderen', 'kleden', 'zich', 'elke', 'ochtend', 'aan'],
            translation: 'The children get dressed every morning.',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik denk dat hij',
            after: 'vergist.',
            correctAnswer: 'zich',
            hint: 'In a subordinate clause, the reflexive pronoun follows the subject.',
          },
        ],
      },
    },
    {
      id: 'a2-refl-mc-health-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct sentence about a healthcare situation.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "I hurt myself" in Dutch?',
            options: [
              'Ik heb mij bezeerd.',
              'Ik heb zich bezeerd.',
              'Ik heb hem bezeerd.',
              'Ik heb ons bezeerd.',
            ],
            correctIndex: 0,
            explanation: 'With "ik", use "me" or "mij" as the reflexive pronoun: Ik heb me/mij bezeerd.',
          },
          {
            question: 'What does "Zij heeft zich verbrand" mean?',
            options: [
              'She has burned something.',
              'She has burned herself.',
              'She has a fever.',
              'She is feeling warm.',
            ],
            correctIndex: 1,
            explanation: '"Zich verbranden" is a reflexive verb meaning to burn oneself.',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-health-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun in these healthcare situations.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kunt u',
            after: 'uitkleden achter het gordijn?',
            correctAnswer: 'zich',
            hint: 'Formal "u" uses which reflexive pronoun?',
          },
          {
            before: 'Ik heb',
            after: 'gesneden aan een mes.',
            correctAnswer: 'me',
            acceptableAnswers: ['me', 'mij'],
            hint: 'Which reflexive pronoun for "ik"?',
          },
          {
            before: 'Hij verslikte',
            after: 'in het water.',
            correctAnswer: 'zich',
            hint: 'Third person uses which reflexive pronoun?',
          },
        ],
      },
    },
    {
      id: 'a2-refl-fill-prep-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct reflexive pronoun for verbs with prepositions.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij interesseert',
            after: 'voor Nederlandse kunst.',
            correctAnswer: 'zich',
            hint: 'zich interesseren voor = to be interested in',
          },
          {
            before: 'Wij bereiden',
            after: 'voor op het examen.',
            correctAnswer: 'ons',
            hint: 'Which reflexive pronoun for "wij"?',
          },
          {
            before: 'Hij ergert',
            after: 'aan het lawaai van de buren.',
            correctAnswer: 'zich',
            hint: 'zich ergeren aan = to be annoyed at',
          },
          {
            before: 'Ik moet',
            after: 'ziek melden bij mijn baas.',
            correctAnswer: 'me',
            acceptableAnswers: ['me', 'mij'],
            hint: 'zich ziek melden = to call in sick',
          },
        ],
      },
    },
  ],
};
