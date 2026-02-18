import { Topic } from '@/content/types';

export const conjunctionsConnectors: Topic = {
  id: 'conjunctions-connectors',
  levelId: 'b1',
  order: 9,
  title: 'Conjunctions & Connectors',
  subtitle: 'Voegwoorden & verbindingswoorden',
  estimatedMinutes: 50,
  prerequisites: ['relative-clauses'],

  lessons: [
    {
      id: 'cc-coordinating',
      topicId: 'conjunctions-connectors',
      title: 'Coordinating Conjunctions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Coordinating conjunctions connect two main clauses without changing word order.',
          explanation:
            'Coordinating conjunctions (nevenschikkende voegwoorden) connect two main clauses of equal importance. They do NOT change the word order of the second clause. Main Dutch coordinating conjunctions: en (and), maar (but), of (or), want (because), dus (so), noch...noch (neither...nor).',
        },
        {
          type: 'examples',
          title: 'Coordinating Conjunctions in Use',
          examples: [
            { dutch: 'Ik werk hard en ik verdien goed.', english: 'I work hard and I earn well.', note: 'en — connects two equal statements' },
            { dutch: 'Ik wil gaan, maar ik heb geen tijd.', english: 'I want to go, but I have no time.', note: 'maar — introduces a contrast' },
            { dutch: 'Kom je morgen of kom je volgende week?', english: 'Are you coming tomorrow or next week?', note: 'of — presents an alternative' },
            { dutch: 'Ik blijf thuis, want ik ben ziek.', english: 'I am staying home because I am sick.', note: 'want — gives a reason; normal word order follows' },
            { dutch: 'Het regent, dus ik neem een paraplu.', english: 'It is raining, so I am taking an umbrella.', note: 'dus — expresses a consequence' },
          ],
        },
        {
          type: 'note',
          title: 'want vs. omdat',
          content: 'Want (coordinating) keeps normal word order in the second clause. Omdat (subordinating) sends the verb to the end. Both mean "because"!\n\nWant: Ik blijf thuis, want ik ben ziek.\nOmdat: Ik blijf thuis omdat ik ziek ben.',
          variant: 'warning',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik blijf thuis omdat ik ben ziek.', correct: 'Ik blijf thuis omdat ik ziek ben.', explanation: '"Omdat" is subordinating: verb goes to the end of the clause.' },
            { incorrect: 'Ik wil gaan, want heb ik geen auto.', correct: 'Ik wil gaan, maar ik heb geen auto.', explanation: '"Want" keeps normal word order. Check meaning too: "want" = because, "maar" = but.' },
          ],
        },
      ],
    },
    {
      id: 'cc-subordinating',
      topicId: 'conjunctions-connectors',
      title: 'Subordinating Conjunctions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Subordinating conjunctions introduce a clause where the verb moves to the END.',
          explanation:
            'Subordinating conjunctions (onderschikkende voegwoorden) introduce a subordinate clause. The verb moves to the very end of that clause. When the subordinate clause starts the sentence, the main clause verb comes immediately after the comma (verb-second rule).',
        },
        {
          type: 'grammar-table',
          title: 'Key Subordinating Conjunctions',
          headers: ['Conjunction', 'Meaning', 'Category'],
          rows: [
            ['omdat', 'because', 'Reason'],
            ['zodat', 'so that', 'Purpose/result'],
            ['hoewel / ofschoon', 'although', 'Concession'],
            ['tenzij', 'unless', 'Condition'],
            ['als / wanneer', 'if / when (present)', 'Condition / Time'],
            ['toen', 'when (past, single event)', 'Time'],
            ['terwijl', 'while', 'Time'],
            ['nadat', 'after', 'Time'],
            ['voordat', 'before', 'Time'],
            ['totdat', 'until', 'Time'],
          ],
          caption: 'All these conjunctions send the verb to the end of their clause.',
        },
        {
          type: 'examples',
          title: 'Subordinating Conjunctions in Use',
          examples: [
            { dutch: 'Ik studeer hard omdat ik wil slagen.', english: 'I study hard because I want to pass.', note: 'omdat — reason; verb to end' },
            { dutch: 'Als het mooi weer is, ga ik fietsen.', english: 'When the weather is nice, I go cycling.', note: 'als — inversion after comma when clause comes first' },
            { dutch: 'Hoewel het laat was, bleef hij werken.', english: 'Although it was late, he kept working.', note: 'hoewel — verb-second in main clause after comma' },
            { dutch: 'Nadat hij had gegeten, ging hij slapen.', english: 'After he had eaten, he went to sleep.', note: 'nadat — often uses pluperfect' },
            { dutch: 'Ik kom, tenzij het regent.', english: 'I am coming, unless it rains.', note: 'tenzij — negated condition' },
            { dutch: 'Ik was al op kantoor toen mijn collega aankwam.', english: 'I was already at the office when my colleague arrived.', note: 'toen — when for a single past event' },
          ],
        },
        {
          type: 'note',
          title: 'Verb-Second Rule When Subordinate Clause Comes First',
          content: 'When the subordinate clause starts the sentence, the main clause verb must come IMMEDIATELY after the comma:\n\n"Als het regent, NEEMik een paraplu." ✗\n"Als het regent, NEEM IK een paraplu." ✓',
          variant: 'warning',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Als het regent, ik neem een paraplu.', correct: 'Als het regent, neem ik een paraplu.', explanation: 'When a subordinate clause starts the sentence, the main clause needs inversion: verb before subject.' },
            { incorrect: 'Hoewel ik ben moe, ik ga toch.', correct: 'Hoewel ik moe ben, ga ik toch.', explanation: 'Two errors: (1) verb goes to end in the hoewel-clause: moe ben. (2) inversion in main clause: ga ik.' },
          ],
        },
      ],
    },
    {
      id: 'cc-connectors',
      topicId: 'conjunctions-connectors',
      title: 'Sentence Connectors',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Sentence connectors are adverbs that link ideas; they trigger inversion when sentence-initial.',
          explanation:
            'Sentence connectors (verbindingswoorden) are adverbs that link sentences and ideas. Unlike conjunctions, they do NOT introduce a subordinate clause. When used at the START of a sentence, they trigger inversion (verb before subject). In mid-sentence position, inversion is not needed.',
        },
        {
          type: 'grammar-table',
          title: 'Common Sentence Connectors',
          headers: ['Connector', 'Meaning', 'Function'],
          rows: [
            ['bovendien', 'moreover / besides', 'Adding information'],
            ['ook / tevens', 'also / furthermore', 'Adding information'],
            ['echter', 'however', 'Contrast (formal)'],
            ['toch', 'yet / still', 'Concession/surprise'],
            ['daarentegen', 'on the other hand', 'Contrast'],
            ['desondanks / desalniettemin', 'nevertheless / nonetheless', 'Concession (formal)'],
            ['daarom', 'therefore / that\'s why', 'Cause → effect'],
            ['dus', 'so / therefore', 'Cause → effect (informal)'],
            ['hierdoor / daardoor', 'because of this / as a result', 'Cause → effect'],
            ['vervolgens', 'then / next', 'Sequence'],
            ['uiteindelijk', 'eventually / finally', 'Sequence'],
            ['ten eerste / ten tweede / ten slotte', 'firstly / secondly / finally', 'Listing'],
          ],
          caption: 'All connectors at the start of a sentence trigger verb-second (inversion).',
        },
        {
          type: 'examples',
          title: 'Sentence Connectors in Use',
          examples: [
            { dutch: 'Het is duur. Bovendien werkt het niet goed.', english: 'It is expensive. Moreover, it doesn\'t work well.', note: 'Bovendien triggers inversion: werkt het' },
            { dutch: 'Ik was moe. Toch ging ik naar het feest.', english: 'I was tired. Yet I went to the party.', note: 'Toch triggers inversion: ging ik' },
            { dutch: 'Hij was ziek. Daarom is hij niet gekomen.', english: 'He was sick. That\'s why he didn\'t come.', note: 'Daarom triggers inversion: is hij' },
            { dutch: 'Het plan klinkt goed. Echter, de kosten zijn te hoog.', english: 'The plan sounds good. However, the costs are too high.', note: 'Echter is formal; triggers inversion' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Daarom, ik ben te laat.', correct: 'Daarom ben ik te laat.', explanation: '"Daarom" at the start of a sentence triggers inversion: verb (ben) before subject (ik). No comma after a connector.' },
            { incorrect: 'Toch hij bleef werken.', correct: 'Toch bleef hij werken.', explanation: '"Toch" triggers inversion: bleef hij (not hij bleef).' },
          ],
        },
      ],
    },
    {
      id: 'cc-professional',
      topicId: 'conjunctions-connectors',
      title: 'Connectors in Professional Context',
      sections: [
        {
          type: 'grammar-table',
          title: 'Formal vs. Informal Connectors',
          headers: ['Formal', 'Informal', 'Meaning'],
          rows: [
            ['echter', 'maar', 'however / but'],
            ['dientengevolge / bijgevolg', 'daardoor / dus', 'as a result / so'],
            ['voorts / tevens', 'ook / en', 'furthermore / also'],
            ['desalniettemin', 'toch', 'nevertheless / yet'],
            ['ofschoon', 'hoewel', 'although'],
          ],
          caption: 'Choose formal connectors for professional writing; informal ones for spoken Dutch.',
        },
        {
          type: 'workplace-context',
          scenario: 'Writing Reports and Professional Emails',
          examples: [
            { dutch: 'De resultaten zijn positief. Echter, er zijn nog verbeterpunten.', english: 'The results are positive. However, there are still areas for improvement.' },
            { dutch: 'Ten eerste willen we de kosten verlagen. Ten tweede willen we de kwaliteit verhogen.', english: 'Firstly, we want to reduce costs. Secondly, we want to increase quality.' },
            { dutch: 'De vergadering is verschoven omdat de directeur ziek is. Dientengevolge zullen we de beslissing uitstellen.', english: 'The meeting has been moved because the director is ill. As a result, we will postpone the decision.' },
            { dutch: 'Hoewel we de deadline hebben gehaald, zijn er nog openstaande punten.', english: 'Although we have met the deadline, there are still outstanding issues.' },
          ],
          note: 'In formal Dutch writing, connectors at the start of a sentence always trigger inversion. In emails and reports, "echter", "bovendien", "desalniettemin" sound more professional than their informal equivalents.',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'cc-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct conjunction to complete each sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik wil graag gaan, ___ ik heb helaas geen tijd.',
            options: ['want', 'maar', 'dus', 'omdat'],
            correctIndex: 1,
            explanation: '"Maar" (but) introduces a contrast. Word order after "maar" remains normal.',
          },
          {
            question: 'Hij is vroeg opgestaan ___ hij wilde de trein niet missen.',
            options: ['maar', 'of', 'want', 'dus'],
            correctIndex: 2,
            explanation: '"Want" (because) gives a reason and keeps normal word order in the second clause.',
          },
          {
            question: 'Ik leer Nederlands ___ ik in Nederland wil werken.',
            options: ['want', 'omdat', 'maar', 'dus'],
            correctIndex: 1,
            explanation: '"Omdat" (because — subordinating) sends the verb to the end: "wil werken" goes last.',
          },
          {
            question: 'What is the key difference between "want" and "omdat"?',
            options: [
              'They are completely interchangeable',
              '"Want" uses normal word order; "omdat" sends the verb to the end',
              '"Omdat" uses normal word order; "want" sends the verb to the end',
              '"Want" is formal; "omdat" is informal',
            ],
            correctIndex: 1,
            explanation: '"Want" is coordinating (normal word order). "Omdat" is subordinating (verb to end).',
          },
          {
            question: 'Het regent hard, ___ ik neem een taxi.',
            options: ['want', 'maar', 'of', 'dus'],
            correctIndex: 3,
            explanation: '"Dus" (so/therefore) expresses a logical consequence of the previous statement.',
          },
        ],
      },
    },
    {
      id: 'cc-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct subordinating conjunction: omdat, zodat, hoewel, toen, nadat, tenzij, terwijl.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik leer Nederlands',
            after: 'ik in Nederland wil werken.',
            correctAnswer: 'omdat',
            hint: 'Reason/cause: "because"',
          },
          {
            before: 'Hij zette de muziek harder',
            after: 'we hem niet konden horen.',
            correctAnswer: 'zodat',
            hint: 'Purpose or result: "so that"',
          },
          {
            before: '',
            after: 'het moeilijk was, gaf ze niet op.',
            correctAnswer: 'Hoewel',
            hint: 'Concession/contrast: "although" — followed by inversion in main clause',
          },
          {
            before: 'Ik was al op kantoor',
            after: 'mijn collega aankwam.',
            correctAnswer: 'toen',
            hint: 'Past time: "when" for a single past event',
          },
          {
            before: 'Ze controleerde alles nog een keer',
            after: 'ze het rapport had ingediend.',
            correctAnswer: 'nadat',
            hint: '"After" a completed action',
          },
          {
            before: 'Ik kom naar het feest,',
            after: 'het erg laat wordt.',
            correctAnswer: 'tenzij',
            hint: 'Exception: "unless"',
          },
        ],
      },
    },
    {
      id: 'cc-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence has an error related to conjunctions or word order. Correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Als het regent, ik neem een paraplu.',
            correctedSentence: 'Als het regent, neem ik een paraplu.',
            errorExplanation: 'When a subordinate clause starts the sentence, the main clause verb must come immediately after the comma (verb-second rule): "neem ik".',
          },
          {
            incorrectSentence: 'Hoewel ik ben moe, ik ga toch.',
            correctedSentence: 'Hoewel ik moe ben, ga ik toch.',
            errorExplanation: 'Two errors: (1) In the hoewel-clause, verb goes to end: "moe ben". (2) Main clause after the comma needs inversion: "ga ik".',
          },
          {
            incorrectSentence: 'Daarom, ik ben te laat gekomen.',
            correctedSentence: 'Daarom ben ik te laat gekomen.',
            errorExplanation: '"Daarom" at the start triggers inversion: verb (ben) before subject (ik). No comma after a sentence connector.',
          },
          {
            incorrectSentence: 'Toch hij bleef werken.',
            correctedSentence: 'Toch bleef hij werken.',
            errorExplanation: '"Toch" at the start of a sentence triggers inversion: "bleef hij" (not "hij bleef").',
          },
          {
            incorrectSentence: 'Toen ik woon hier, heb ik veel vrienden gemaakt.',
            correctedSentence: 'Toen ik hier woonde, heb ik veel vrienden gemaakt.',
            errorExplanation: '"Toen" refers to the past, so use past tense "woonde". Also, "hier" should come before the verb in the subordinate clause.',
          },
        ],
      },
    },
    {
      id: 'cc-ex-4',
      type: 'multiple-choice',
      instruction: 'Choose the best connector to link the sentences logically.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Het was koud en regenachtig. ___ gingen we toch naar buiten.',
            options: ['Daardoor', 'Toch', 'Dus', 'Bovendien'],
            correctIndex: 1,
            explanation: '"Toch" (yet/still) introduces a surprising action despite the previous statement.',
          },
          {
            question: 'Hij werkt heel hard. ___ verdient hij een goed salaris.',
            options: ['Echter', 'Toch', 'Daarom', 'Desondanks'],
            correctIndex: 2,
            explanation: '"Daarom" (therefore) expresses a logical result. Triggers inversion: "verdient hij".',
          },
          {
            question: 'De presentatie was interessant. ___ waren de slides niet erg duidelijk.',
            options: ['Bovendien', 'Echter', 'Daarom', 'Vervolgens'],
            correctIndex: 1,
            explanation: '"Echter" (however) introduces a contrast. It is formal and fits written/professional style.',
          },
          {
            question: 'Which sentence has CORRECT word order?',
            options: [
              'Daarom, ik ben te laat.',
              'Toch hij bleef werken.',
              'Bovendien heeft hij ook een diploma.',
              'Dus, ik neem de bus.',
            ],
            correctIndex: 2,
            explanation: '"Bovendien heeft hij" is correct (verb before subject after sentence-initial connector). The others have wrong word order.',
          },
        ],
      },
    },
    {
      id: 'cc-ex-5',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['Daarom', 'hij', 'vroeg', 'hulp', 'om'],
            correctOrder: ['Daarom', 'vroeg', 'hij', 'om', 'hulp'],
            translation: 'Therefore he asked for help.',
          },
          {
            shuffledWords: ['Hoewel', 'laat', 'was', 'het', 'bleef', 'ze', 'werken'],
            correctOrder: ['Hoewel', 'het', 'laat', 'was', 'bleef', 'ze', 'werken'],
            translation: 'Although it was late, she kept working.',
          },
          {
            shuffledWords: ['hij', 'ik', 'kom', 'omdat', 'mij', 'nodig', 'heeft'],
            correctOrder: ['ik', 'kom', 'omdat', 'hij', 'mij', 'nodig', 'heeft'],
            translation: 'I am coming because he needs me.',
          },
          {
            shuffledWords: ['Als', 'weet', 'je', 'bel', 'antwoord', 'het', 'me', 'dan', 'je'],
            correctOrder: ['Als', 'je', 'het', 'antwoord', 'weet', 'bel', 'dan', 'je', 'me'],
            translation: 'If you know the answer, then call me.',
          },
          {
            shuffledWords: ['Ten', 'eerste', 'verlagen', 'we', 'willen', 'kosten', 'de'],
            correctOrder: ['Ten', 'eerste', 'willen', 'we', 'de', 'kosten', 'verlagen'],
            translation: 'Firstly, we want to reduce the costs.',
          },
        ],
      },
    },
    {
      id: 'cc-ex-6',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch, paying attention to conjunctions and word order.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I study hard because I want to pass the exam.',
            correctDutch: 'Ik studeer hard omdat ik voor het examen wil slagen.',
            acceptableAnswers: ['Ik studeer hard want ik wil voor het examen slagen.'],
          },
          {
            english: 'Although the project is difficult, we will continue.',
            correctDutch: 'Hoewel het project moeilijk is, gaan we toch door.',
            acceptableAnswers: ['Hoewel het project moeilijk is, zullen we doorgaan.'],
          },
          {
            english: 'The meeting was cancelled. Therefore, we will reschedule.',
            correctDutch: 'De vergadering is geannuleerd. Daarom plannen we het opnieuw in.',
            acceptableAnswers: ['De vergadering werd geannuleerd. Daarom zullen we het opnieuw inplannen.'],
          },
          {
            english: 'He studied Dutch so that he could communicate with his colleagues.',
            correctDutch: 'Hij leerde Nederlands zodat hij met zijn collega\'s kon communiceren.',
            acceptableAnswers: ['Hij studeerde Nederlands zodat hij met zijn collega\'s kon communiceren.'],
          },
          {
            english: 'She was tired; however, she finished the report.',
            correctDutch: 'Ze was moe; echter, ze maakte het rapport af.',
            acceptableAnswers: ['Ze was moe, maar ze maakte het rapport af.', 'Ze was moe. Toch maakte ze het rapport af.'],
          },
        ],
      },
    },
    {
      id: 'cc-ex-7',
      type: 'writing-prompt',
      instruction: 'Write a short paragraph using a variety of conjunctions and connectors.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Write a paragraph (6–8 sentences) arguing for or against working from home (thuiswerken). Use at least five different conjunctions or connectors from this lesson.',
        context: 'Use a mix of coordinating conjunctions (en, maar, want), subordinating conjunctions (omdat, hoewel, als, terwijl), and sentence connectors (echter, daarom, bovendien, toch) to build a well-structured argument.',
        guidelines: [
          'Use at least one coordinating conjunction (en, maar, want, dus)',
          'Use at least one subordinating conjunction with correct word order (omdat, hoewel, als, terwijl)',
          'Use at least two sentence connectors (bovendien, echter, daarom, toch, desondanks)',
          'Apply the verb-second rule after sentence connectors and fronted subordinate clauses',
          'Make a clear argument with at least one supporting point and one counterpoint',
          'Use formal or semi-formal register',
        ],
        sampleResponse: 'Thuiswerken heeft veel voordelen. Ten eerste bespaar je tijd omdat je niet hoeft te reizen. Bovendien kun je je eigen werkplek inrichten zodat je optimaal kunt concentreren. Hoewel thuiswerken comfortabel is, mis je soms het contact met collega\'s. Toch denk ik dat de voordelen groter zijn dan de nadelen. Je bent flexibeler want je kunt je eigen uren plannen. Daarom vind ik dat thuiswerken vaker aangeboden moet worden.',
      },
    },
  ],
};
