import { Topic } from '@/content/types';

export const negation: Topic = {
  id: 'negation',
  levelId: 'b1',
  order: 13,
  title: 'Negation: niet vs. geen',
  subtitle: 'Ontkenning',
  estimatedMinutes: 45,
  lessons: [
    {
      id: 'negation-1',
      title: 'The Two Negators: niet and geen',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use "geen" to negate nouns with an indefinite article or nouns without an article. Use "niet" for everything else.',
          explanation:
            '"Geen" replaces "een" (a/an) or the absence of an article before a noun. It means "no" or "not a/any". "Niet" negates verbs, adjectives, adverbs, proper nouns, nouns with a definite article (de/het), and the entire predicate of a sentence.',
        },
        {
          type: 'grammar-table',
          title: 'geen vs. niet at a glance',
          headers: ['Use geen when…', 'Example', 'Use niet when…', 'Example'],
          rows: [
            ['Negating "een + noun"', 'Ik heb geen auto.', 'Negating a verb', 'Ik rijd niet.'],
            ['Negating a noun without article', 'Ik drink geen koffie.', 'Negating "de/het + noun"', 'Ik drink de koffie niet.'],
            ['Negating a plural without article', 'Ik eet geen groenten.', 'Negating an adjective/adverb', 'Hij is niet groot.'],
            ['', '', 'Negating a proper noun', 'Dat is niet Parijs.'],
          ],
          caption: 'When in doubt: does a definite article come before the noun? → use niet.',
        },
        {
          type: 'examples',
          title: 'geen in practice',
          examples: [
            { dutch: 'Ik heb geen auto.', english: 'I don\'t have a car.', highlight: 'geen' },
            { dutch: 'Hij heeft geen geld.', english: 'He has no money.', highlight: 'geen' },
            { dutch: 'We hebben geen tijd.', english: 'We have no time.', highlight: 'geen' },
            { dutch: 'Zij drinkt geen alcohol.', english: 'She doesn\'t drink alcohol.', highlight: 'geen' },
          ],
        },
        {
          type: 'examples',
          title: 'niet in practice',
          examples: [
            { dutch: 'Ik rijd niet.', english: 'I don\'t drive.', highlight: 'niet' },
            { dutch: 'Ik drink de koffie niet.', english: 'I\'m not drinking the coffee.', highlight: 'niet' },
            { dutch: 'Hij is niet moe.', english: 'He isn\'t tired.', highlight: 'niet' },
            { dutch: 'Ze werkt niet snel.', english: 'She doesn\'t work quickly.', highlight: 'niet' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik heb niet een auto.', correct: 'Ik heb geen auto.', explanation: '"Geen" replaces "een + noun". Never use "niet een".' },
            { incorrect: 'Ik drink geen de koffie.', correct: 'Ik drink de koffie niet.', explanation: 'When a definite article is present (de/het), use "niet", not "geen".' },
            { incorrect: 'Ze eet geen vlees niet.', correct: 'Ze eet geen vlees.', explanation: 'Never use both "geen" and "niet" together on the same noun.' },
          ],
        },
      ],
    },
    {
      id: 'negation-2',
      title: 'Position of niet in a Sentence',
      sections: [
        {
          type: 'grammar-rule',
          rule: '"Niet" goes before what it negates. In sentence-final negation, it comes just before the infinitive, past participle, separable prefix, or predicate adjective/noun.',
          explanation:
            'The position of "niet" is one of the trickiest aspects of Dutch. The general principle: "niet" goes as far to the end of the clause as possible, but before the elements that cluster at the end of a Dutch sentence (past participle, infinitive, separable prefix, adjectival complement).',
        },
        {
          type: 'grammar-table',
          title: 'Position of niet by sentence type',
          headers: ['Sentence type', 'Position of niet', 'Example'],
          rows: [
            ['Simple present', 'End of clause', 'Ik werk niet.'],
            ['With past participle', 'Before past participle', 'Hij heeft niet gewerkt.'],
            ['With infinitive', 'Before infinitive', 'Ze kan niet komen.'],
            ['With separable verb', 'Before prefix', 'Hij belt niet op.'],
            ['With predicate adjective', 'Before adjective', 'Ze is niet ziek.'],
            ['Negating one element', 'Directly before that element', 'Hij rijdt niet snel. (speed only)'],
          ],
          caption: 'When "niet" negates the whole predicate, place it at the end or just before the final verbal cluster.',
        },
        {
          type: 'examples',
          title: 'niet position in context',
          examples: [
            { dutch: 'Ik begrijp het niet.', english: 'I don\'t understand it.', highlight: 'niet' },
            { dutch: 'Ze heeft de brief niet verstuurd.', english: 'She didn\'t send the letter.', highlight: 'niet verstuurd' },
            { dutch: 'Hij belt nooit op.', english: 'He never calls back.', highlight: 'nooit op' },
            { dutch: 'We gaan morgen niet naar Amsterdam.', english: 'We\'re not going to Amsterdam tomorrow.', highlight: 'niet naar Amsterdam' },
            { dutch: 'Hij heeft het niet goed begrepen.', english: 'He didn\'t understand it correctly.', highlight: 'niet goed' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Negation before a specific element',
          content: 'When "niet" appears in the middle of a sentence, it negates only the word or phrase that follows it — not the whole sentence.\n\n• "Hij rijdt niet snel." = He doesn\'t drive fast (but he does drive).\n• "Niet hij rijdt snel." = It\'s not him who drives fast (someone else does).\n\nUse this contrast deliberately to create emphasis.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik heb gewerkt niet.', correct: 'Ik heb niet gewerkt.', explanation: '"Niet" comes before the past participle, not after it.' },
            { incorrect: 'Ze belt op niet.', correct: 'Ze belt niet op.', explanation: '"Niet" comes before the separable prefix "op", not after it.' },
            { incorrect: 'Ik ga niet naar niet school.', correct: 'Ik ga niet naar school.', explanation: 'Only one negation is needed.' },
          ],
        },
      ],
    },
    {
      id: 'negation-3',
      title: 'Other Negative Words',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch has several other negative words: nooit, niemand, niets, nergens, nooit, nauwelijks, neither…nor (noch…noch).',
          explanation:
            'These negative words often replace "niet/geen" and can stand in the same structural positions. Unlike English, Dutch does not use double negatives with these words — one negation is enough.',
        },
        {
          type: 'grammar-table',
          title: 'Negative words overview',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['nooit', 'never', 'Hij belt nooit terug.'],
            ['niemand', 'nobody / no one', 'Niemand weet het antwoord.'],
            ['niets', 'nothing', 'Ze zegt niets.'],
            ['nergens', 'nowhere', 'Ik kan het nergens vinden.'],
            ['nauwelijks', 'hardly / barely', 'Ik slaap nauwelijks.'],
            ['noch … noch', 'neither … nor', 'Hij spreekt noch Frans noch Spaans.'],
            ['helemaal niet', 'not at all', 'Dat klopt helemaal niet.'],
            ['nog niet', 'not yet', 'Ze is er nog niet.'],
            ['niet meer', 'no longer / not anymore', 'Hij werkt hier niet meer.'],
          ],
        },
        {
          type: 'examples',
          title: 'Negative words in context',
          examples: [
            { dutch: 'Ik heb niemand gezien.', english: 'I didn\'t see anyone / I saw nobody.', highlight: 'niemand' },
            { dutch: 'Er is niets aan de hand.', english: 'Nothing is wrong.', highlight: 'niets' },
            { dutch: 'Ze woont nergens in de buurt.', english: 'She doesn\'t live anywhere nearby.', highlight: 'nergens' },
            { dutch: 'Hij is nog niet klaar.', english: 'He isn\'t ready yet.', highlight: 'nog niet' },
            { dutch: 'Ik ga hier niet meer naartoe.', english: 'I\'m not coming here anymore.', highlight: 'niet meer' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: 'No double negatives in Dutch',
          content: 'Dutch does not allow double negatives. Where English informally uses "I don\'t know nothing," Dutch uses a single negative:\n\n✓ "Ik weet niets." (I know nothing.)\n✗ "Ik weet niet niets." ← incorrect\n\nThe single negative word carries the full negation.',
        },
        {
          type: 'workplace-context',
          scenario: 'Professional communication — polite negation',
          examples: [
            { dutch: 'Ik ben helaas niet beschikbaar op die dag.', english: 'Unfortunately, I\'m not available on that day.' },
            { dutch: 'We hebben daar nog geen beslissing over genomen.', english: 'We haven\'t made a decision about that yet.' },
            { dutch: 'Dit valt niet onder onze verantwoordelijkheid.', english: 'This doesn\'t fall under our responsibility.' },
            { dutch: 'Er is niets bijzonders te melden.', english: 'There is nothing special to report.' },
          ],
          note: 'In formal Dutch, negation is often softened with "helaas" (unfortunately) or "nog niet" (not yet) to sound more polite.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'negation-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose "niet" or "geen" to complete the sentence correctly.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik heb ___ auto.',
            options: ['niet', 'geen', 'nooit', 'niets'],
            correctIndex: 1,
            explanation: '"Een auto" → replace "een" with "geen": Ik heb geen auto.',
          },
          {
            question: 'Hij drinkt de soep ___.',
            options: ['geen', 'niet', 'niets', 'nergens'],
            correctIndex: 1,
            explanation: 'Definite article "de" before the noun → use "niet" at the end.',
          },
          {
            question: 'Ze spreken ___ Nederlands.',
            options: ['niet', 'geen', 'nooit', 'nauwelijks'],
            correctIndex: 1,
            explanation: '"Nederlands" is a bare noun (no article) → use "geen".',
          },
          {
            question: 'Dat is ___ goed idee.',
            options: ['geen', 'niet', 'niemand', 'niets'],
            correctIndex: 0,
            explanation: '"Een goed idee" → replace "een" with "geen": Dat is geen goed idee.',
          },
          {
            question: 'Ik begrijp het ___.',
            options: ['geen', 'niet', 'niets', 'nergens'],
            correctIndex: 1,
            explanation: '"Het" is a pronoun, not a noun that can take "geen". Negate the whole predicate with "niet".',
          },
          {
            question: 'Ze is ___ moe.',
            options: ['geen', 'niet', 'nooit', 'niets'],
            correctIndex: 1,
            explanation: '"Moe" is a predicate adjective → use "niet": Ze is niet moe.',
          },
        ],
      },
    },
    {
      id: 'negation-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "niet" or "geen" to make the sentence negative.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb',
            after: 'zin om te werken.',
            correctAnswer: 'geen',
            hint: '"Zin" is a bare noun → geen',
            acceptableAnswers: ['geen'],
          },
          {
            before: 'Hij werkt',
            after: 'hard.',
            correctAnswer: 'niet',
            hint: '"Hard" is an adverb → niet',
            acceptableAnswers: ['niet'],
          },
          {
            before: 'We hebben',
            after: 'problemen gehad.',
            correctAnswer: 'geen',
            hint: '"Problemen" is a bare plural noun → geen',
            acceptableAnswers: ['geen'],
          },
          {
            before: 'Ik heb de brief',
            after: 'verstuurd.',
            correctAnswer: 'niet',
            hint: '"De brief" has a definite article → niet before past participle',
            acceptableAnswers: ['niet'],
          },
          {
            before: 'Ze is',
            after: 'thuis.',
            correctAnswer: 'niet',
            hint: '"Thuis" is an adverb → niet',
            acceptableAnswers: ['niet'],
          },
          {
            before: 'Hij heeft',
            after: 'ervaring met dit systeem.',
            correctAnswer: 'geen',
            hint: '"Ervaring" is a bare noun → geen',
            acceptableAnswers: ['geen'],
          },
        ],
      },
    },
    {
      id: 'negation-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence has a negation error. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik heb niet een fiets.',
            correctedSentence: 'Ik heb geen fiets.',
            errorExplanation: '"Geen" replaces "een + noun". Never say "niet een" in Dutch.',
          },
          {
            incorrectSentence: 'Ze heeft gewerkt niet gisteren.',
            correctedSentence: 'Ze heeft gisteren niet gewerkt.',
            errorExplanation: '"Niet" must come before the past participle (gewerkt), not after it. Time adverbs like "gisteren" generally come before "niet".',
          },
          {
            incorrectSentence: 'Hij drinkt geen de koffie.',
            correctedSentence: 'Hij drinkt de koffie niet.',
            errorExplanation: 'When a definite article is present (de), use "niet" at the end, not "geen".',
          },
          {
            incorrectSentence: 'Ik weet niet niets over dit project.',
            correctedSentence: 'Ik weet niets over dit project.',
            errorExplanation: 'Dutch does not use double negatives. Use either "niet" or "niets", not both.',
          },
          {
            incorrectSentence: 'Ze belt op niet.',
            correctedSentence: 'Ze belt niet op.',
            errorExplanation: '"Niet" comes before the separable prefix "op", not after the whole verb.',
          },
        ],
      },
    },
    {
      id: 'negation-ex-4',
      type: 'translation',
      instruction: 'Translate the sentences into Dutch using correct negation.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I don\'t have a car.',
            correctDutch: 'Ik heb geen auto.',
            acceptableAnswers: ['Ik heb geen auto.'],
          },
          {
            english: 'She is not tired.',
            correctDutch: 'Ze is niet moe.',
            acceptableAnswers: ['Ze is niet moe.', 'Zij is niet moe.'],
          },
          {
            english: 'He doesn\'t speak Dutch.',
            correctDutch: 'Hij spreekt geen Nederlands.',
            acceptableAnswers: ['Hij spreekt geen Nederlands.', 'Hij spreekt niet Nederlands.'],
          },
          {
            english: 'I haven\'t seen the report yet.',
            correctDutch: 'Ik heb het rapport nog niet gezien.',
            acceptableAnswers: ['Ik heb het rapport nog niet gezien.', 'Ik heb nog niet het rapport gezien.'],
          },
          {
            english: 'Nobody knows the answer.',
            correctDutch: 'Niemand weet het antwoord.',
            acceptableAnswers: ['Niemand weet het antwoord.', 'Niemand kent het antwoord.'],
          },
          {
            english: 'We no longer work there.',
            correctDutch: 'We werken daar niet meer.',
            acceptableAnswers: ['We werken daar niet meer.', 'Wij werken daar niet meer.'],
          },
        ],
      },
    },
    {
      id: 'negation-ex-5',
      type: 'word-order',
      instruction: 'Arrange the words to form a correct negative sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['Ik', 'de', 'vergadering', 'niet', 'heb', 'bijgewoond'],
            correctOrder: ['Ik', 'heb', 'de', 'vergadering', 'niet', 'bijgewoond'],
            translation: 'I didn\'t attend the meeting.',
          },
          {
            shuffledWords: ['Hij', 'meer', 'hier', 'niet', 'werkt'],
            correctOrder: ['Hij', 'werkt', 'hier', 'niet', 'meer'],
            translation: 'He no longer works here.',
          },
          {
            shuffledWords: ['geen', 'We', 'tijd', 'voor', 'hebben', 'dit'],
            correctOrder: ['We', 'hebben', 'geen', 'tijd', 'voor', 'dit'],
            translation: 'We have no time for this.',
          },
          {
            shuffledWords: ['Ze', 'begrepen', 'heeft', 'uitleg', 'de', 'niet'],
            correctOrder: ['Ze', 'heeft', 'de', 'uitleg', 'niet', 'begrepen'],
            translation: 'She didn\'t understand the explanation.',
          },
        ],
      },
    },
    {
      id: 'negation-ex-6',
      type: 'writing-prompt',
      instruction: 'Write 4–5 sentences about something you do NOT have, cannot do, or did not do recently. Use a variety of negation words.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf over dingen die je niet hebt, niet kunt of niet hebt gedaan. Gebruik "niet", "geen", en minstens één ander negatief woord (nooit, niets, niemand, etc.)',
        context: 'Think about your daily life — things you can\'t do, don\'t own, or haven\'t done recently.',
        guidelines: [
          'Use "niet" at least twice in correct sentence position',
          'Use "geen" at least twice',
          'Include at least one other negative word (nooit, niets, niemand, nergens, nog niet, niet meer)',
          'Write complete sentences',
        ],
        sampleResponse: 'Ik heb geen rijbewijs, dus ik rijd niet. Ik heb gisteren geen sport gedaan omdat ik niet genoeg tijd had. Ik heb niemand gebeld en ik heb de e-mails nog niet beantwoord. Ik ga nooit naar de sportschool in het weekend.',
      },
    },
    {
      id: 'negation-ex-7',
      type: 'listening-comprehension',
      instruction: 'Listen to the conversation and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'Two colleagues, Sanne and Mark, are discussing project plans in the office.',
        audioText:
          'Sanne: Mark, heb je het rapport al afgemaakt? Mark: Nee, nog niet. Ik heb gisteren geen tijd gehad. Sanne: Maar de deadline is morgen! Kunnen we het niet uitstellen? Mark: Nee, dat kan echt niet. De klant wacht. Ik heb ook niemand gevraagd om te helpen. Sanne: Dat begrijp ik niet. Waarom niet? Mark: Ik wist niet dat het zo ingewikkeld zou zijn. Sanne: Oké, ik heb vanavond niets gepland. Ik help je wel.',
        maxPlays: 2,
        questions: [
          {
            question: 'Why hasn\'t Mark finished the report yet?',
            options: [
              'He doesn\'t know how to do it.',
              'He had no time yesterday.',
              'He was sick.',
              'He forgot about it.',
            ],
            correctIndex: 1,
            explanation: '"Ik heb gisteren geen tijd gehad" — "geen tijd" means no time. Mark didn\'t have time yesterday.',
          },
          {
            question: 'What does Mark say about asking for help?',
            options: [
              'He asked everyone but nobody was available.',
              'He didn\'t ask anyone.',
              'He asked Sanne but she was busy.',
              'He didn\'t need help.',
            ],
            correctIndex: 1,
            explanation: '"Ik heb ook niemand gevraagd om te helpen" — "niemand" means nobody. He didn\'t ask anyone.',
          },
          {
            question: 'How does Sanne offer to help?',
            options: [
              'She will finish the report alone.',
              'She says she has nothing planned this evening.',
              'She will postpone the deadline.',
              'She will call the client.',
            ],
            correctIndex: 1,
            explanation: '"Ik heb vanavond niets gepland" — "niets gepland" means nothing planned. Sanne is free this evening.',
          },
        ],
      },
    },
  ],
};
