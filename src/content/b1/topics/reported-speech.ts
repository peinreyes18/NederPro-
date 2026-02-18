import { Topic } from '@/content/types';

export const reportedSpeech: Topic = {
  id: 'reported-speech',
  levelId: 'b1',
  order: 8,
  title: 'Reported Speech',
  subtitle: 'Indirecte rede',
  estimatedMinutes: 50,
  prerequisites: ['relative-clauses', 'conditional-sentences'],

  lessons: [
    {
      id: 'rs-statements',
      topicId: 'reported-speech',
      title: 'Reported Statements — dat-Clauses',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Reported statements use dat + verb-final word order.',
          explanation:
            'Reported speech (indirecte rede) is used when you tell someone what another person said. In Dutch, reported statements use the conjunction dat (that) to introduce the reported clause. After dat, the verb moves to the END of the clause.',
        },
        {
          type: 'grammar-table',
          title: 'Direct vs. Indirect Speech',
          headers: ['Direct speech', 'Indirect speech'],
          rows: [
            ['Hij zegt: "Ik werk hier."', 'Hij zegt dat hij hier werkt.'],
            ['Ze zegt: "Ik ben moe."', 'Ze zegt dat ze moe is.'],
            ['Ze zei: "Ik ben moe."', 'Ze zei dat ze moe was.'],
            ['"Wij wonen in Amsterdam."', 'Ze vertellen dat ze in Amsterdam wonen.'],
          ],
          caption: 'Note: a past reporting verb (zei, vertelde) triggers tense backshift in the dat-clause.',
        },
        {
          type: 'note',
          title: 'Word Order with dat',
          content: 'After "dat", the verb moves to the END of the clause. This is the same rule as with all subordinating conjunctions in Dutch.',
          variant: 'info',
        },
        {
          type: 'grammar-rule',
          rule: 'Structure: [Reporting verb] + dat + [subject] + [rest] + [verb]',
          explanation:
            'Common reporting verbs: zeggen (to say), vertellen (to tell), denken (to think), geloven (to believe), hopen (to hope), weten (to know), vinden (to think/find). The infinitive stays at the very end in compound tenses.',
        },
        {
          type: 'examples',
          title: 'Reported Statements',
          examples: [
            { dutch: 'Hij vertelt dat hij een nieuwe baan heeft gevonden.', english: 'He tells us that he has found a new job.', note: 'Perfect tense stays the same when reporting verb is present' },
            { dutch: 'Ik denk dat het morgen gaat regenen.', english: 'I think that it is going to rain tomorrow.' },
            { dutch: 'Ze weten dat de vergadering om drie uur begint.', english: 'They know that the meeting starts at three o\'clock.' },
            { dutch: 'Wij geloven dat dit de beste oplossing is.', english: 'We believe that this is the best solution.' },
          ],
        },
      ],
    },
    {
      id: 'rs-backshift',
      topicId: 'reported-speech',
      title: 'Tense Changes in Reported Speech',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When the reporting verb is in the past tense, the reported verb shifts one step back.',
          explanation:
            'Tense backshift (tijdsverschuiving) occurs when the reporting verb is in the past tense. Present → simple past, present perfect → pluperfect, zal → zou. If the reporting verb is in the present tense, no backshift is required.',
        },
        {
          type: 'grammar-table',
          title: 'Tense Backshift Overview',
          headers: ['Original tense', 'After backshift', 'Example'],
          rows: [
            ['Present (is/werkt)', 'Simple past (was/werkte)', '"Ik werk." → hij zei dat hij werkte.'],
            ['Present perfect (heeft gewerkt)', 'Pluperfect (had gewerkt)', '"Ik heb gewerkt." → hij zei dat hij had gewerkt.'],
            ['Simple past (werkte)', 'Pluperfect (had gewerkt)', '"Ik werkte." → hij zei dat hij had gewerkt.'],
            ['Future (zal gaan)', 'Conditional (zou gaan)', '"Ik zal gaan." → hij zei dat hij zou gaan.'],
          ],
          caption: 'Backshift only applies when the reporting verb is in the past tense (zei, vertelde, vroeg, etc.).',
        },
        {
          type: 'examples',
          title: 'No Backshift vs. Backshift',
          examples: [
            { dutch: 'Hij zegt dat hij ziek IS.', english: 'He says that he IS sick.', note: 'Present reporting verb: keep present tense' },
            { dutch: 'Hij zei dat hij ziek WAS.', english: 'He said that he WAS sick.', note: 'Past reporting verb: present → simple past' },
            { dutch: 'Ze zeggen dat ze HEBBEN geslapen.', english: 'They say that they HAVE slept.', note: 'Present reporting: no change to perfect' },
            { dutch: 'Ze zeiden dat ze HADDEN geslapen.', english: 'They said that they HAD slept.', note: 'Past reporting: perfect → pluperfect' },
          ],
        },
        {
          type: 'note',
          title: 'Pronoun Changes',
          content: 'Don\'t forget to change pronouns when reporting speech! "Ik" (I) becomes "hij/zij" (he/she); "mijn" becomes "zijn/haar"; "jij/u" may become "ik" depending on who the speaker is.',
          variant: 'warning',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Hij zei dat hij moe is.', correct: 'Hij zei dat hij moe was.', explanation: '"Zei" is past tense, so backshift is required: is → was.' },
            { incorrect: 'Ze vertelde dat ze het boek heeft gelezen.', correct: 'Ze vertelde dat ze het boek had gelezen.', explanation: '"Vertelde" triggers backshift: heeft gelezen → had gelezen.' },
          ],
        },
      ],
    },
    {
      id: 'rs-questions',
      topicId: 'reported-speech',
      title: 'Reported Questions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Yes/no questions use "of" (whether); wh-questions keep their question word.',
          explanation:
            'Dutch has two types of reported questions: (1) Yes/no questions use "of" (whether/if) to introduce the reported clause. (2) Wh-questions keep the question word (waar, wanneer, waarom, hoe, etc.). In both cases, the verb goes to the END of the clause.',
        },
        {
          type: 'grammar-table',
          title: 'Direct vs. Indirect Questions',
          headers: ['Direct question', 'Indirect question'],
          rows: [
            ['"Kom je morgen?"', 'Hij vroeg of ik de volgende dag zou komen.'],
            ['"Heb je de brief ontvangen?"', 'Ze vroeg of ik de brief had ontvangen.'],
            ['"Waar woon je?"', 'Hij vroeg waar ik woonde.'],
            ['"Wanneer begint de vergadering?"', 'Ze wilde weten wanneer de vergadering begon.'],
            ['"Waarom ben je te laat?"', 'De manager vroeg waarom ik te laat was.'],
          ],
          caption: 'Note: time expressions also shift — morgen → de volgende dag; nu → toen; hier → daar.',
        },
        {
          type: 'note',
          title: 'Time and Place Expressions Shift',
          content: 'When reporting past speech, time and place expressions often change: nu → toen, morgen → de volgende dag, gisteren → de dag ervoor, hier → daar, vandaag → die dag.',
          variant: 'info',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Hij vroeg dat ik mee wilde gaan.', correct: 'Hij vroeg of ik mee wilde gaan.', explanation: 'Reported yes/no questions use "of" (whether), not "dat".' },
            { incorrect: 'Ze vroeg wanneer kom je.', correct: 'Ze vroeg wanneer je zou komen.', explanation: 'In reported questions, word order is subordinate: verb goes to the end.' },
          ],
        },
      ],
    },
    {
      id: 'rs-commands',
      topicId: 'reported-speech',
      title: 'Reported Commands & Professional Context',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Commands are reported using zeggen dat + moest, or vragen (om) te + infinitive.',
          explanation:
            'When reporting commands and requests, Dutch uses:\n• zeggen dat + subject + moest/moesten (to tell someone to do something)\n• vragen (om) te + infinitive (to ask to do something)\n• bevelen/opdragen om te + infinitive (to order to do something)',
        },
        {
          type: 'examples',
          title: 'Reported Commands',
          examples: [
            { dutch: 'Direct: "Sluit de deur!" → Indirect: Hij zei dat ik de deur moest sluiten.', english: 'Direct: "Close the door!" → Indirect: He said I had to close the door.', note: 'Imperative → moest + infinitive at end' },
            { dutch: 'De baas vroeg ons om vroeger te komen.', english: 'The boss asked us to come earlier.', note: 'vragen om te + infinitive' },
            { dutch: 'Ze beval hem het gebouw onmiddellijk te verlaten.', english: 'She ordered him to leave the building immediately.', note: 'bevelen + te + infinitive' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Meetings and Professional Communication',
          examples: [
            { dutch: 'De directeur zei dat het project volgende week klaar moest zijn.', english: 'The director said that the project had to be ready next week.' },
            { dutch: 'Mijn collega vertelde me dat de klant niet tevreden was.', english: 'My colleague told me that the client was not satisfied.' },
            { dutch: 'In de vergadering vroeg de manager of iedereen de nieuwe procedure kende.', english: 'In the meeting, the manager asked whether everyone knew the new procedure.' },
            { dutch: 'De HR-afdeling liet weten dat de sollicitatietermijn was verlengd.', english: 'The HR department announced that the application deadline had been extended.' },
          ],
          note: 'In professional Dutch, reported speech is very common in meeting notes (notulen), emails summarizing conversations, and formal reports.',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'rs-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct reported speech form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Direct: Hij zegt: "Ik ga op vakantie." → Indirect: Hij zegt dat hij ...',
            options: ['op vakantie gaat', 'op vakantie ga', 'gaat op vakantie', 'op vakantie gegaan'],
            correctIndex: 0,
            explanation: 'After "dat", the verb moves to the end: "gaat" comes after "op vakantie".',
          },
          {
            question: 'Direct: Ze zegt: "Ik heb het boek gelezen." → Indirect: Ze zegt dat ze het boek ...',
            options: ['heeft gelezen', 'gelezen heeft', 'leest', 'heeft gelezen het'],
            correctIndex: 1,
            explanation: 'In a subordinate clause with perfect tense, the auxiliary (heeft) goes to the very end: "gelezen heeft".',
          },
          {
            question: 'Which sentence is CORRECT reported speech?',
            options: ['Hij zei dat hij is moe.', 'Hij zei dat hij moe was.', 'Hij zei dat hij moe is.', 'Hij zei dat was hij moe.'],
            correctIndex: 1,
            explanation: '"Zei" (past tense) triggers tense backshift: is → was. The verb goes to the end of the dat-clause.',
          },
          {
            question: 'Direct: "Ik zal het morgen doen." → Hij beloofde dat hij het de volgende dag ...',
            options: ['zou doen', 'zal doen', 'zal het doen', 'deed'],
            correctIndex: 0,
            explanation: 'Past reporting verb triggers backshift: zal → zou. Morgen → de volgende dag in reported speech.',
          },
          {
            question: 'Direct: "Kom je morgen?" → Hij vroeg ...',
            options: ['dat ik de volgende dag zou komen', 'of ik de volgende dag zou komen', 'of kom ik de volgende dag', 'wanneer ik zou komen'],
            correctIndex: 1,
            explanation: 'Yes/no questions use "of" (whether) in reported speech.',
          },
        ],
      },
    },
    {
      id: 'rs-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of the verb for reported speech.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Direct: "Ik werk elke dag." → Ze zei dat ze elke dag',
            after: '.',
            correctAnswer: 'werkte',
            hint: 'Present → simple past (backshift with past reporting verb)',
          },
          {
            before: 'Direct: "We hebben het probleem opgelost." → Ze vertelden dat ze het probleem',
            after: '.',
            correctAnswer: 'hadden opgelost',
            hint: 'Perfect → pluperfect (backshift)',
          },
          {
            before: 'Direct: "Ik zal je bellen." → Ze beloofde dat ze me',
            after: '.',
            correctAnswer: 'zou bellen',
            hint: 'Zal → zou (future → conditional)',
          },
          {
            before: 'Direct: "Het project loopt goed." → De manager zegt dat het project goed',
            after: '.',
            correctAnswer: 'loopt',
            hint: 'Present reporting verb "zegt" → no backshift needed',
          },
          {
            before: 'Hij vroeg waar ik',
            after: '.',
            correctAnswer: 'woonde',
            hint: 'Wh-question keeps "waar"; verb goes to end with backshift: woon → woonde',
          },
        ],
      },
    },
    {
      id: 'rs-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence contains an error in reported speech. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Hij zei dat hij moe is.',
            correctedSentence: 'Hij zei dat hij moe was.',
            errorExplanation: '"Zei" (past) requires tense backshift: is → was.',
          },
          {
            incorrectSentence: 'Ze vertelde dat ze het boek heeft gelezen.',
            correctedSentence: 'Ze vertelde dat ze het boek had gelezen.',
            errorExplanation: '"Vertelde" (past) requires backshift: heeft gelezen → had gelezen.',
          },
          {
            incorrectSentence: 'Hij vroeg dat ik mee wilde gaan.',
            correctedSentence: 'Hij vroeg of ik mee wilde gaan.',
            errorExplanation: 'Reported yes/no questions use "of" (whether), not "dat".',
          },
          {
            incorrectSentence: 'De leraar zei dat ik stil moet zijn.',
            correctedSentence: 'De leraar zei dat ik stil moest zijn.',
            errorExplanation: '"Zei" (past) requires backshift: moet → moest.',
          },
          {
            incorrectSentence: 'Ze zei dat ze morgen zou komen.',
            correctedSentence: 'Ze zei dat ze de volgende dag zou komen.',
            errorExplanation: 'In past reported speech, "morgen" (tomorrow) becomes "de volgende dag" (the following day).',
          },
        ],
      },
    },
    {
      id: 'rs-ex-4',
      type: 'multiple-choice',
      instruction: 'Choose the correct reported question form.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Direct: "Waar woon je?" → Ze wilde weten ...',
            options: ['dat ik woonde', 'of ik woonde', 'waar ik woonde', 'waarom ik woonde'],
            correctIndex: 2,
            explanation: 'Wh-questions keep their question word (waar) in reported speech.',
          },
          {
            question: 'Direct: "Hoe oud ben je?" → Hij vroeg ...',
            options: ['hoe oud ik was', 'of ik oud was', 'hoe oud was ik', 'dat ik oud was'],
            correctIndex: 0,
            explanation: 'Hoe oud stays; verb goes to end (was); backshift: ben → was.',
          },
          {
            question: 'Direct: "Heeft u het formulier ingevuld?" → De medewerker vroeg ...',
            options: ['dat ik het formulier had ingevuld', 'of ik het formulier had ingevuld', 'of had ik het formulier ingevuld', 'wanneer ik het formulier had ingevuld'],
            correctIndex: 1,
            explanation: 'Yes/no question → "of". Perfect → pluperfect (backshift). Verb goes to end.',
          },
        ],
      },
    },
    {
      id: 'rs-ex-5',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a reported speech sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['vroeg', 'hij', 'woonde', 'ik', 'of', 'in', 'Nederland'],
            correctOrder: ['hij', 'vroeg', 'of', 'ik', 'in', 'Nederland', 'woonde'],
            translation: 'He asked whether I lived in the Netherlands.',
          },
          {
            shuffledWords: ['zei', 'ze', 'dat', 'de', 'vergadering', 'geannuleerd', 'was'],
            correctOrder: ['ze', 'zei', 'dat', 'de', 'vergadering', 'geannuleerd', 'was'],
            translation: 'She said that the meeting had been cancelled.',
          },
          {
            shuffledWords: ['weten', 'wilde', 'de', 'manager', 'project', 'wanneer', 'klaar', 'het', 'zou', 'zijn'],
            correctOrder: ['de', 'manager', 'wilde', 'weten', 'wanneer', 'het', 'project', 'klaar', 'zou', 'zijn'],
            translation: 'The manager wanted to know when the project would be ready.',
          },
          {
            shuffledWords: ['vertelde', 'hij', 'dat', 'nieuwe', 'hij', 'een', 'had', 'gevonden', 'baan'],
            correctOrder: ['hij', 'vertelde', 'dat', 'hij', 'een', 'nieuwe', 'baan', 'had', 'gevonden'],
            translation: 'He told us that he had found a new job.',
          },
        ],
      },
    },
    {
      id: 'rs-ex-6',
      type: 'translation',
      instruction: 'Translate these reported speech sentences into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'She said that she was tired.',
            correctDutch: 'Ze zei dat ze moe was.',
            acceptableAnswers: ['Zij zei dat zij moe was.'],
          },
          {
            english: 'He asked whether the train was on time.',
            correctDutch: 'Hij vroeg of de trein op tijd was.',
            acceptableAnswers: ['Hij vroeg of de trein op tijd reed.'],
          },
          {
            english: 'They said that they had already eaten.',
            correctDutch: 'Ze zeiden dat ze al hadden gegeten.',
            acceptableAnswers: ['Zij zeiden dat zij al hadden gegeten.'],
          },
          {
            english: 'The boss asked us to come on time.',
            correctDutch: 'De baas vroeg ons op tijd te komen.',
            acceptableAnswers: ['De baas vroeg ons om op tijd te komen.'],
          },
          {
            english: 'She wanted to know where he had been.',
            correctDutch: 'Ze wilde weten waar hij was geweest.',
            acceptableAnswers: ['Zij wilde weten waar hij geweest was.'],
          },
        ],
      },
    },
    {
      id: 'rs-ex-7',
      type: 'writing-prompt',
      instruction: 'Write a short meeting summary using reported speech.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Write a short email (5–7 sentences) summarizing what was said in a team meeting. Report on at least: one statement, one question, and one instruction/request from the meeting.',
        context: 'You attended a team meeting about a new project. Write a summary email to a colleague who missed the meeting, using reported speech throughout.',
        guidelines: [
          'Use at least one dat-clause for a reported statement',
          'Use of for at least one reported yes/no question',
          'Use a wh-word for at least one reported wh-question',
          'Include tense backshift (use past tense reporting verbs)',
          'Report at least one instruction or request',
          'Use appropriate time expressions (de volgende dag, die dag, etc.)',
        ],
        sampleResponse: 'Hoi Thomas,\n\nIk wil je even bijpraten over de vergadering van gisteren. De manager zei dat het nieuwe project eind volgende maand zou beginnen. Ze vroeg of iedereen al kennis had gemaakt met de nieuwe software. Mijn collega Lisa vertelde dat ze al een training had gevolgd en dat het systeem heel gebruiksvriendelijk was. De manager vroeg ook wanneer de eerste resultaten verwacht konden worden. Ten slotte vroeg ze ons om vóór vrijdag een korte planning in te sturen.\n\nMet vriendelijke groeten,\nAnna',
      },
    },
  ],
};
