import { Topic } from '@/content/types';

export const expressingWishes: Topic = {
  id: 'expressing-wishes',
  levelId: 'b1',
  order: 15,
  title: 'Expressing Wishes & Hypotheticals',
  subtitle: 'Wensen en hypothetische situaties',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'wishes-1',
      title: 'Expressing Wishes with "zou(den)" and "als"',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch uses "zou/zouden + infinitive" (conditional) and "als … zou(den)" to express wishes and hypothetical situations.',
          explanation:
            'Dutch does not have a distinct subjunctive mood for modern usage. Instead, wishes and hypothetical scenarios are expressed using the conditional tense (zou + infinitive for singular, zouden + infinitive for plural) and "als" (if) clauses. This structure is equivalent to English "would" and "if … would".',
        },
        {
          type: 'grammar-table',
          title: 'Conjugation of "zou(den)"',
          headers: ['Person', 'Form', 'Example'],
          rows: [
            ['ik', 'zou', 'Ik zou graag naar Parijs gaan.'],
            ['jij / u', 'zou', 'Jij zou dat beter begrijpen.'],
            ['hij / zij / het', 'zou', 'Hij zou morgen komen.'],
            ['wij', 'zouden', 'Wij zouden het anders doen.'],
            ['jullie', 'zouden', 'Jullie zouden het weten.'],
            ['zij (they)', 'zouden', 'Ze zouden eerder vertrekken.'],
          ],
          caption: '"Zou" is the past tense / conditional form of "zullen" (will/shall).',
        },
        {
          type: 'examples',
          title: 'Wishes with zou(den)',
          examples: [
            { dutch: 'Ik zou graag meer reizen.', english: 'I would love to travel more.', highlight: 'zou graag' },
            { dutch: 'Ze zou willen dat hij vaker belde.', english: 'She wishes he would call more often.', highlight: 'zou willen' },
            { dutch: 'We zouden graag een huis kopen.', english: 'We would love to buy a house.', highlight: 'zouden graag' },
            { dutch: 'Zou jij dat kunnen doen?', english: 'Would you be able to do that?', highlight: 'Zou … kunnen' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Graag, liever, liefst',
          content: '"Graag" (gladly/would like), "liever" (rather/prefer), and "het liefst" (most of all/ideally) combine naturally with "zou(den)" to express preferences and wishes:\n\n• Ik zou graag… = I would like to…\n• Ik zou liever… = I would rather…\n• Ik zou het liefst… = Ideally, I would…',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik wil dat ik meer geld heb.', correct: 'Ik wou dat ik meer geld had.', explanation: 'Wishes about current reality use past-tense verbs: "wou dat … had" (past form of "wil dat … heeft"). This signals the wish is contrary to current reality.' },
            { incorrect: 'Als ik rijk ben, zou ik reizen.', correct: 'Als ik rijk was/were, zou ik reizen.', explanation: 'Hypothetical "if" clauses use the past tense (was) to signal irreality: "Als ik rijk was, zou ik reizen."' },
            { incorrect: 'Ik zou gaan als ik kan.', correct: 'Ik zou gaan als ik kon.', explanation: 'In a hypothetical conditional, the "als" clause also uses the past tense (kon = could, past of kan).' },
          ],
        },
      ],
    },
    {
      id: 'wishes-2',
      title: 'Conditional Sentences: Als … dan',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'There are two types of conditional sentences in Dutch: real conditionals (present tense) and unreal/hypothetical conditionals (past tense in the "als" clause + zou(den) in the main clause).',
          explanation:
            'Real conditionals describe things that might actually happen: "Als het regent, neem ik een paraplu." Unreal conditionals describe imaginary or contrary-to-fact situations: "Als ik een miljoen euro had, zou ik stoppen met werken." The key distinction is: real → present tense; unreal → past tense.',
        },
        {
          type: 'grammar-table',
          title: 'Real vs. unreal conditionals',
          headers: ['Type', 'Als-clause', 'Main clause', 'Example'],
          rows: [
            ['Real (possible)', 'Present tense', 'Present / future', 'Als het regent, neem ik een paraplu.'],
            ['Real (possible)', 'Present tense', 'zal + infinitive', 'Als je hard werkt, zul je slagen.'],
            ['Unreal (hypothetical)', 'Past tense (was/had/kon)', 'zou(den) + infinitive', 'Als ik jou was, zou ik dat niet doen.'],
            ['Unreal (past regret)', 'Pluperfect (had + pp)', 'zou(den) + hebben/zijn + pp', 'Als ik harder had gestudeerd, zou ik geslaagd zijn.'],
          ],
          caption: 'The "dan" (then) in the main clause is optional but common in spoken Dutch.',
        },
        {
          type: 'examples',
          title: 'Conditional sentences in context',
          examples: [
            { dutch: 'Als het mooi weer is, gaan we fietsen.', english: 'If the weather is nice, we\'ll go cycling.', highlight: 'Als … is' },
            { dutch: 'Als ik meer tijd had, zou ik een cursus volgen.', english: 'If I had more time, I would take a course.', highlight: 'Als … had, zou' },
            { dutch: 'Als ze eerder was vertrokken, zou ze de trein hebben gehaald.', english: 'If she had left earlier, she would have caught the train.', highlight: 'Als … was vertrokken, zou … hebben gehaald' },
            { dutch: 'Als ik jou was, zou ik die baan niet aannemen.', english: 'If I were you, I wouldn\'t take that job.', highlight: 'Als ik jou was' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Word order after "als"',
          content: 'Remember: "als" is a subordinating conjunction, so the verb goes to the END of the als-clause.\n\n✓ Als ik tijd heb, kom ik.\n✗ Als ik heb tijd, kom ik.\n\nWhen the als-clause comes first, invert subject and verb in the main clause:\n✓ Als ik tijd heb, kom ik. (verb inversion: kom ik)\n✓ Ik kom als ik tijd heb. (no inversion when main clause is first)',
        },
        {
          type: 'workplace-context',
          scenario: 'Negotiating and proposing at work',
          examples: [
            { dutch: 'Als u eerder beslist, kunnen we de levertijd verkorten.', english: 'If you decide earlier, we can shorten the delivery time.' },
            { dutch: 'Als we meer budget hadden, zouden we het team uitbreiden.', english: 'If we had more budget, we would expand the team.' },
            { dutch: 'Als ik u was, zou ik dit voorstel accepteren.', english: 'If I were you, I would accept this proposal.' },
            { dutch: 'Als dit eerder gemeld was, hadden we het kunnen oplossen.', english: 'If this had been reported earlier, we could have resolved it.' },
          ],
          note: 'Conditional language is essential for professional negotiation and presenting alternatives diplomatically.',
        },
      ],
    },
    {
      id: 'wishes-3',
      title: '"Wensen", "Hopen", and Other Wish Expressions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch has several fixed expressions and verbs for expressing wishes, hopes, and desires.',
          explanation:
            'Beyond "zou graag" and "als … zou", Dutch uses specific verbs and fixed phrases for different types of wishes. Some require "dat + present tense", others require "dat + past tense" (for contrary-to-fact wishes), and some use an infinitive construction.',
        },
        {
          type: 'grammar-table',
          title: 'Verbs and expressions for wishes',
          headers: ['Expression', 'Structure', 'Example'],
          rows: [
            ['wensen (to wish)', 'wens dat + past tense', 'Ik wens dat hij hier was.'],
            ['hopen (to hope)', 'hoop dat + present/future', 'Ik hoop dat je komt.'],
            ['willen (to want)', 'wil(de) + infinitive / dat', 'Ik wil meer reizen. / Ik wilde dat ik meer tijd had.'],
            ['dromen van (to dream of)', 'droom van + noun / om te + inf.', 'Ik droom van een groot huis.'],
            ['liever willen (to prefer)', 'zou liever + infinitive', 'Ik zou liever thuis blijven.'],
            ['Wat fijn zou het zijn als…', 'fixed exclamation', 'Wat fijn zou het zijn als we meer personeel hadden!'],
            ['Mocht(en) + subject + inf.', 'formal conditional', 'Mocht u vragen hebben, bel ons gerust.'],
          ],
        },
        {
          type: 'examples',
          title: 'Wish expressions in use',
          examples: [
            { dutch: 'Ik hoop dat je snel beter wordt.', english: 'I hope you get better soon.', highlight: 'hoop dat' },
            { dutch: 'Ik wou dat ik eerder was begonnen.', english: 'I wish I had started earlier.', highlight: 'wou dat … was begonnen' },
            { dutch: 'Ze droomt ervan om architect te worden.', english: 'She dreams of becoming an architect.', highlight: 'droomt ervan om' },
            { dutch: 'Mocht u vragen hebben, neem dan contact op.', english: 'Should you have any questions, please get in touch.', highlight: 'Mocht u … hebben' },
          ],
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'Wou vs. wil for wishes',
          content: '"Wou dat …" uses the past tense (wou = informal past of willen) to signal a wish that contradicts current reality:\n\n• "Ik wou dat ik meer geld had." → I wish I had more money. (I don\'t have much now)\n• "Ik wil dat je komt." → I want you to come. (a real request)\n\nMixing these up changes the meaning from wish to demand.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'wishes-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct form to complete the conditional or wish sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Als ik meer geld ___, zou ik een huis kopen.',
            options: ['heb', 'had', 'heb gehad', 'zou hebben'],
            correctIndex: 1,
            explanation: 'Hypothetical conditional → past tense in the als-clause: "had".',
          },
          {
            question: 'Ik ___ graag meer reizen.',
            options: ['zal', 'wil', 'zou', 'heb'],
            correctIndex: 2,
            explanation: '"Zou graag + infinitive" expresses a wish / polite desire.',
          },
          {
            question: 'Als het regent, ___ we binnen blijven.',
            options: ['zouden', 'zullen', 'zouden willen', 'bleven'],
            correctIndex: 1,
            explanation: 'Real conditional (it might actually rain) → present/future in main clause: "zullen blijven" or plain present.',
          },
          {
            question: 'Ik wou dat hij vaker ___.',
            options: ['belt', 'belde', 'zou bellen', 'gebeld heeft'],
            correctIndex: 1,
            explanation: '"Ik wou dat …" expresses a wish contrary to reality → past tense in the embedded clause: "belde".',
          },
          {
            question: 'Als ik jou ___, zou ik dat aanbod accepteren.',
            options: ['ben', 'was', 'zou zijn', 'geweest ben'],
            correctIndex: 1,
            explanation: '"Als ik jou was" (If I were you) → hypothetical, so past tense "was" in the als-clause.',
          },
          {
            question: 'Als ze harder had gestudeerd, ___ ze geslaagd zijn.',
            options: ['zou', 'zal', 'is', 'was'],
            correctIndex: 0,
            explanation: 'Past unreal conditional → "zou + hebben/zijn + past participle": zou geslaagd zijn.',
          },
        ],
      },
    },
    {
      id: 'wishes-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct verb form to complete the conditional sentence.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Als ik tijd heb,',
            after: 'ik je morgen. (bellen)',
            correctAnswer: 'bel',
            hint: 'Real conditional → present tense in main clause',
            acceptableAnswers: ['bel'],
          },
          {
            before: 'Als ik rijker was,',
            after: 'ik een boot kopen. (zou + kopen)',
            correctAnswer: 'zou',
            hint: 'Hypothetical → zou + infinitive in main clause',
            acceptableAnswers: ['zou'],
          },
          {
            before: 'Ik wou dat het',
            after: 'was. (mooi)',
            correctAnswer: 'mooi',
            hint: '"Ik wou dat" + past-tense form',
            acceptableAnswers: ['mooi'],
          },
          {
            before: 'Als hij harder had gewerkt,',
            after: 'hij eerder klaar zijn geweest.',
            correctAnswer: 'zou',
            hint: 'Past unreal conditional → zou + hebben/zijn + pp',
            acceptableAnswers: ['zou'],
          },
          {
            before: 'Mocht u vragen hebben,',
            after: 'dan contact op.',
            correctAnswer: 'neemt',
            hint: '"Mocht u … hebben, neemt u dan … op" — formal polite wish',
            acceptableAnswers: ['neemt', 'neem'],
          },
        ],
      },
    },
    {
      id: 'wishes-ex-3',
      type: 'error-correction',
      instruction: 'Find and correct the error in each conditional or wish sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Als ik meer geld heb, zou ik stoppen met werken.',
            correctedSentence: 'Als ik meer geld had, zou ik stoppen met werken.',
            errorExplanation: 'Hypothetical conditional → past tense in the als-clause: "had" not "heb".',
          },
          {
            incorrectSentence: 'Ik wil dat ik groter ben.',
            correctedSentence: 'Ik wou dat ik groter was.',
            errorExplanation: 'A wish contrary to reality uses "wou dat … was" (past tense), not "wil dat … ben".',
          },
          {
            incorrectSentence: 'Als het regent, zouden we binnen blijven.',
            correctedSentence: 'Als het regent, blijven we binnen.',
            errorExplanation: 'A real conditional uses present tense (or zullen) in the main clause, not "zouden" which signals irreality.',
          },
          {
            incorrectSentence: 'Zou je liever koffie of thee drinken?',
            correctedSentence: 'Zou je liever koffie of thee drinken?',
            errorExplanation: 'This sentence is actually correct! "Zou je liever … drinken?" is a perfectly formed polite preference question.',
          },
          {
            incorrectSentence: 'Als ze op tijd zijn gekomen was, hadden ze het kunnen zien.',
            correctedSentence: 'Als ze op tijd was gekomen, had ze het kunnen zien.',
            errorExplanation: 'Past unreal: "was gekomen" (zijn-verb in pluperfect), main clause: "had … kunnen zien". Agreement must match singular "ze".',
          },
        ],
      },
    },
    {
      id: 'wishes-ex-4',
      type: 'translation',
      instruction: 'Translate the sentences into Dutch using conditional or wish structures.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'If I were you, I would take the job.',
            correctDutch: 'Als ik jou was, zou ik de baan aannemen.',
            acceptableAnswers: ['Als ik jou was, zou ik de baan aannemen.', 'Als ik u was, zou ik de baan aannemen.'],
          },
          {
            english: 'I wish it was summer.',
            correctDutch: 'Ik wou dat het zomer was.',
            acceptableAnswers: ['Ik wou dat het zomer was.', 'Ik wens dat het zomer was.'],
          },
          {
            english: 'If it rains, we will stay inside.',
            correctDutch: 'Als het regent, blijven we binnen.',
            acceptableAnswers: ['Als het regent, blijven we binnen.', 'Als het regent, zullen we binnen blijven.'],
          },
          {
            english: 'I would like to learn more languages.',
            correctDutch: 'Ik zou graag meer talen leren.',
            acceptableAnswers: ['Ik zou graag meer talen leren.', 'Ik wil graag meer talen leren.'],
          },
          {
            english: 'If she had studied harder, she would have passed the exam.',
            correctDutch: 'Als ze harder had gestudeerd, zou ze geslaagd zijn.',
            acceptableAnswers: ['Als ze harder had gestudeerd, zou ze geslaagd zijn.', 'Als ze harder had gestudeerd, zou ze het examen hebben gehaald.'],
          },
        ],
      },
    },
    {
      id: 'wishes-ex-5',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a conditional sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['Als', 'meer', 'ik', 'had', 'geld', 'kopen', 'auto', 'een', 'zou', 'ik'],
            correctOrder: ['Als', 'ik', 'meer', 'geld', 'had', 'zou', 'ik', 'een', 'auto', 'kopen'],
            translation: 'If I had more money, I would buy a car.',
          },
          {
            shuffledWords: ['zou', 'graag', 'een', 'Ik', 'cursus', 'volgen', 'Nederlandse'],
            correctOrder: ['Ik', 'zou', 'graag', 'een', 'Nederlandse', 'cursus', 'volgen'],
            translation: 'I would like to take a Dutch course.',
          },
          {
            shuffledWords: ['het', 'regent', 'Als', 'fiets', 'ik', 'niet'],
            correctOrder: ['Als', 'het', 'regent', 'fiets', 'ik', 'niet'],
            translation: 'If it rains, I won\'t cycle.',
          },
          {
            shuffledWords: ['wou', 'Ik', 'dat', 'hier', 'was', 'hij'],
            correctOrder: ['Ik', 'wou', 'dat', 'hij', 'hier', 'was'],
            translation: 'I wish he were here.',
          },
        ],
      },
    },
    {
      id: 'wishes-ex-6',
      type: 'writing-prompt',
      instruction: 'Write 4–5 sentences about what you would do if you could change something in your life. Use conditional and wish structures.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf over wat je zou doen als je iets in je leven kon veranderen. Gebruik "zou(den) + infinitive", "als … dan", en minstens één wens met "ik wou dat…".',
        context: 'Imagine a different life: more money, more time, a different job, living somewhere else…',
        guidelines: [
          'Use at least one real conditional (als + present tense)',
          'Use at least two unreal conditionals (als + past tense + zou(den))',
          'Use "ik wou dat …" at least once',
          'Use "zou graag" or "zou liever" at least once',
        ],
        sampleResponse: 'Als ik meer vrije tijd had, zou ik elke dag sporten. Ik wou dat ik dichter bij mijn familie woonde. Als ik kon kiezen, zou ik liever in Spanje wonen. Ik zou graag ook een nieuwe taal leren, misschien Japans. Als ik eerder was begonnen met sparen, zou ik nu al een eigen huis hebben.',
      },
    },
    {
      id: 'wishes-ex-7',
      type: 'listening-comprehension',
      instruction: 'Listen to the conversation and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'Two friends, Lena and Tim, are talking about their wishes and future plans over coffee.',
        audioText:
          'Lena: Tim, als jij meer geld had, wat zou je dan doen? Tim: Ik zou meteen stoppen met mijn huidige baan. Ik wou dat ik eigen baas kon zijn. Als ik kon kiezen, zou ik een kleine bakkerij openen. Lena: Wat leuk! Ik zou liever de wereld rondreizen. Als ik een sabbatical kon nemen, zou ik zes maanden in Azië leven. Tim: Zou je dan ook werken? Lena: Nee, ik zou alleen reizen en fotograferen. Ik hoop dat ik dat ooit echt doe. Tim: Als we allebei rijker waren, zouden we samen iets kunnen beginnen!',
        maxPlays: 2,
        questions: [
          {
            question: 'What would Tim do if he had more money?',
            options: [
              'Travel around the world.',
              'Quit his current job and open a bakery.',
              'Take a sabbatical.',
              'Move to Asia.',
            ],
            correctIndex: 1,
            explanation: '"Ik zou meteen stoppen met mijn huidige baan … ik zou een kleine bakkerij openen." Tim would quit and open a bakery.',
          },
          {
            question: 'What is Lena\'s dream if she could take a sabbatical?',
            options: [
              'Open a restaurant.',
              'Study languages.',
              'Live in Asia for six months.',
              'Work remotely from Europe.',
            ],
            correctIndex: 2,
            explanation: '"Als ik een sabbatical kon nemen, zou ik zes maanden in Azië leven." Lena would live in Asia.',
          },
          {
            question: 'What conditional structure does Tim use at the end?',
            options: [
              'Real conditional with present tense',
              'Past unreal with "had + past participle"',
              'Unreal conditional with "waren … zouden"',
              'A wish with "ik wou dat"',
            ],
            correctIndex: 2,
            explanation: '"Als we allebei rijker waren, zouden we samen iets kunnen beginnen" — unreal conditional: "waren" (past tense in als-clause) + "zouden … kunnen beginnen" (zou + infinitive in main clause).',
          },
        ],
      },
    },
  ],
};
