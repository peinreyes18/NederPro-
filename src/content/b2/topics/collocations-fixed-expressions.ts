import { Topic } from '@/content/types';

export const collocationsFixedExpressions: Topic = {
  id: 'collocations-fixed-expressions',
  levelId: 'b2',
  order: 12,
  title: 'Collocations & Fixed Expressions',
  subtitle: 'Collocaties en vaste uitdrukkingen',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'collocations-1',
      title: 'What Are Collocations?',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'A collocation is a pair or group of words that habitually appear together. Using the wrong combination sounds unnatural even if it is grammatically correct.',
          explanation:
            'Native speakers do not construct phrases by choosing any synonym — they use fixed word combinations that "belong together". Learning collocations is one of the most effective ways to move from sounding grammatically correct to sounding natural in Dutch. At B2 level, collocations are tested in reading comprehension and formal writing tasks.',
        },
        {
          type: 'grammar-table',
          title: 'Common collocation types',
          headers: ['Type', 'Pattern', 'Examples'],
          rows: [
            ['Verb + noun', 'verb that "goes with" a noun', 'een beslissing nemen, een vergadering houden, aandacht besteden aan'],
            ['Adjective + noun', 'adjective that collocates with noun', 'hoge kosten, strikte regels, brede steun, zware verantwoordelijkheid'],
            ['Noun + verb', 'subject noun with habitual verb', 'de spanning loopt op, de tijd dringt, het gevaar dreigt'],
            ['Verb + adverb', 'intensifier that collocates with verb', 'sterk aanbevelen, volledig begrijpen, ten zeerste betreuren'],
            ['Fixed prepositional phrase', 'prep phrase with fixed meaning', 'op de hoogte zijn, in aanmerking komen, van belang zijn'],
          ],
          caption: 'Collocations must be memorised as units — there is rarely a logical rule.',
        },
        {
          type: 'examples',
          title: 'Natural vs. unnatural collocations',
          examples: [
            { dutch: '✓ een beslissing nemen', english: 'to make a decision (lit. to take a decision)', highlight: 'nemen' },
            { dutch: '✗ een beslissing maken', english: 'WRONG — "maken" does not collocate with "beslissing"', highlight: 'maken' },
            { dutch: '✓ aandacht besteden aan iets', english: 'to pay attention to something (lit. to spend attention on)', highlight: 'besteden' },
            { dutch: '✓ hoge verwachtingen', english: 'high expectations', highlight: 'hoge' },
            { dutch: '✗ grote verwachtingen (in this sense)', english: 'UNUSUAL for abstract expectations in formal Dutch', highlight: 'grote' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'een fout maken → een vergissing maken', correct: 'een fout maken / een vergissing begaan', explanation: '"Vergissing" (mistake/oversight) collocates with "begaan", not "maken" in formal contexts.' },
            { incorrect: 'veel lawaai maken', correct: 'veel lawaai maken / veel herrie maken', explanation: 'This one IS correct — a useful reminder not to over-apply rules.' },
            { incorrect: 'de wet breken', correct: 'de wet overtreden', explanation: 'In Dutch, laws are "overtreden" (violated), not "gebroken" (broken).' },
          ],
        },
      ],
    },
    {
      id: 'collocations-2',
      title: 'High-Frequency Academic and Professional Collocations',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Academic and professional Dutch uses a set of recurrent collocations that signal formal register. Mastering these is essential for the NT2 Programma II writing and reading tasks.',
          explanation:
            'The NT2 Programma II exam includes formal texts from journalism, policy documents, and academic writing. These texts are dense with collocations that learners must recognise in reading and reproduce in writing tasks.',
        },
        {
          type: 'grammar-table',
          title: 'Academic & professional collocations',
          headers: ['Dutch collocation', 'English equivalent', 'Domain'],
          rows: [
            ['een onderzoek uitvoeren', 'to conduct a study/investigation', 'academic'],
            ['conclusies trekken', 'to draw conclusions', 'academic'],
            ['een standpunt innemen', 'to take a position/stance', 'argumentation'],
            ['in het licht van', 'in light of', 'argumentation'],
            ['rekening houden met', 'to take into account', 'professional'],
            ['een beroep doen op', 'to appeal to / to call on', 'formal/legal'],
            ['maatregelen treffen', 'to take measures', 'policy/formal'],
            ['op de agenda staan', 'to be on the agenda', 'professional'],
            ['tot stand brengen', 'to bring about / to achieve', 'formal'],
            ['van kracht zijn', 'to be in force/effect', 'legal/policy'],
          ],
        },
        {
          type: 'examples',
          title: 'Academic collocations in context',
          examples: [
            { dutch: 'De commissie heeft een uitgebreid onderzoek uitgevoerd naar de oorzaken van de crisis.', english: 'The committee conducted an extensive investigation into the causes of the crisis.', highlight: 'onderzoek uitgevoerd' },
            { dutch: 'Op basis van de resultaten kunnen we de conclusie trekken dat de maatregel effectief was.', english: 'Based on the results, we can draw the conclusion that the measure was effective.', highlight: 'conclusie trekken' },
            { dutch: 'De regering heeft strenge maatregelen getroffen om de uitstoot te beperken.', english: 'The government has taken strict measures to limit emissions.', highlight: 'maatregelen getroffen' },
          ],
        },
        {
          type: 'grammar-table',
          title: 'Verb collocations with "nemen", "maken", "doen"',
          headers: ['nemen', 'maken', 'doen'],
          rows: [
            ['een beslissing nemen', 'gebruik maken van', 'een beroep doen op'],
            ['maatregelen nemen', 'een opmerking maken', 'recht doen aan'],
            ['verantwoordelijkheid nemen', 'bezwaar maken', 'moeite doen'],
            ['contact opnemen', 'misbruik maken van', 'aangifte doen'],
            ['risico nemen', 'een uitzondering maken', 'onderzoek doen'],
          ],
          caption: 'These three verbs carry a large share of formal collocations. Learning which nouns each takes prevents common errors.',
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Corpus strategy',
          content: 'When you encounter an unfamiliar word in a formal Dutch text, search for it in the Dutch Language Institute\'s online corpus (INT) or in newspaper archives. Looking at which words appear repeatedly next to the target word reveals its collocations faster than any dictionary.',
        },
      ],
    },
    {
      id: 'collocations-3',
      title: 'Fixed Expressions, Idioms, and Register',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Fixed expressions (vaste uitdrukkingen) and idioms (idiomen) are frozen phrases whose meaning cannot be derived from the individual words. At B2 level, you are expected to understand and use common ones in appropriate contexts.',
          explanation:
            'Dutch has a rich stock of fixed expressions used in both everyday and formal communication. B2 texts frequently include figurative expressions that learners must interpret correctly. Unlike collocations, idioms are fully opaque: "het bijltje erbij neergooien" (to throw in the towel) cannot be understood from its literal meaning.',
        },
        {
          type: 'grammar-table',
          title: 'Common Dutch idioms and their meanings',
          headers: ['Expression', 'Literal meaning', 'Actual meaning'],
          rows: [
            ['het bijltje erbij neergooien', 'to put down the hatchet', 'to give up / quit'],
            ['iemand voor de gek houden', 'to keep someone for the fool', 'to fool/deceive someone'],
            ['met de deur in huis vallen', 'to fall in the door with the door', 'to get straight to the point'],
            ['op zijn lauweren rusten', 'to rest on one\'s laurels', 'to stop making an effort after success'],
            ['de kogel is door de kerk', 'the bullet is through the church', 'the decision has been made'],
            ['iets voor lief nemen', 'to take something as dear', 'to accept something as it is'],
            ['ergens warm voor lopen', 'to run warm for something', 'to be enthusiastic about something'],
            ['het roer omgooien', 'to throw the helm', 'to make a drastic change of direction'],
          ],
          caption: 'These expressions appear regularly in Dutch journalism, opinion pieces, and formal debate — all tested at NT2 Programma II level.',
        },
        {
          type: 'examples',
          title: 'Fixed expressions in formal texts',
          examples: [
            { dutch: 'Na jaren van groei heeft het bedrijf besloten het roer om te gooien en zich te richten op duurzaamheid.', english: 'After years of growth, the company decided to make a drastic change and focus on sustainability.', highlight: 'het roer om te gooien' },
            { dutch: 'De kogel is door de kerk: het fusieplan wordt doorgezet.', english: 'The decision has been made: the merger plan will proceed.', highlight: 'De kogel is door de kerk' },
            { dutch: 'De minister viel meteen met de deur in huis en kondigde bezuinigingen aan.', english: 'The minister got straight to the point and announced cuts.', highlight: 'viel meteen met de deur in huis' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Professional collocations in meetings and reports',
          examples: [
            { dutch: 'Wij doen een beroep op alle betrokkenen om constructief mee te denken.', english: 'We call on all involved parties to think constructively.' },
            { dutch: 'Het voorstel houdt rekening met de belangen van alle stakeholders.', english: 'The proposal takes into account the interests of all stakeholders.' },
            { dutch: 'De nieuwe wet treedt per 1 januari van kracht.', english: 'The new law takes effect on 1 January.' },
            { dutch: 'We moeten tot een gezamenlijk standpunt komen voordat we naar buiten treden.', english: 'We must arrive at a joint position before going public.' },
          ],
          note: 'In professional Dutch, using the right collocations signals mastery of the register. Substituting a synonym (e.g. "rekening nemen" instead of "rekening houden") immediately marks you as a non-native speaker.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'collocations-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct collocating verb to complete the sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De directeur heeft een moeilijke beslissing ___ over de fusie.',
            options: ['gemaakt', 'genomen', 'gedaan', 'getrokken'],
            correctIndex: 1,
            explanation: '"Een beslissing nemen" is the fixed collocation. "Maken" is a common interference error from English "to make a decision".',
          },
          {
            question: 'De onderzoekers hebben op basis van hun data de volgende conclusie ___.',
            options: ['gemaakt', 'getrokken', 'gehaald', 'genomen'],
            correctIndex: 1,
            explanation: '"Conclusies trekken" (to draw conclusions) is the standard academic collocation.',
          },
          {
            question: 'De overheid heeft strenge maatregelen ___ om fraude te bestrijden.',
            options: ['gemaakt', 'genomen', 'getroffen', 'gedaan'],
            correctIndex: 2,
            explanation: '"Maatregelen treffen" is the formal/official collocation. "Nemen" is also acceptable but less formal.',
          },
          {
            question: 'Het bedrijf maakt ___ van overheidssubsidie voor de nieuwe installatie.',
            options: ['gebruik', 'bruik', 'toepassing', 'profijt'],
            correctIndex: 0,
            explanation: '"Gebruik maken van" (to make use of) is a fixed collocation in Dutch.',
          },
          {
            question: 'De nieuwe wet is per 1 september van ___.',
            options: ['werking', 'kracht', 'effect', 'invloed'],
            correctIndex: 1,
            explanation: '"Van kracht zijn/worden" (to be/come into force) is the legal/formal expression.',
          },
        ],
      },
    },
    {
      id: 'collocations-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct collocating word to complete the formal expression.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De commissie doet een',
            after: 'op alle partijen om tot een compromis te komen.',
            correctAnswer: 'beroep',
            hint: 'een beroep doen op = to appeal to',
            acceptableAnswers: ['beroep'],
          },
          {
            before: 'Het plan moet',
            after: 'houden met de budgetaire beperkingen.',
            correctAnswer: 'rekening',
            hint: 'rekening houden met = to take into account',
            acceptableAnswers: ['rekening'],
          },
          {
            before: 'Na wekenlange onderhandelingen is de',
            after: 'door de kerk: het akkoord is ondertekend.',
            correctAnswer: 'kogel',
            hint: 'de kogel is door de kerk = the decision has been made',
            acceptableAnswers: ['kogel'],
          },
          {
            before: 'Het ministerie heeft een uitgebreid',
            after: 'uitgevoerd naar de oorzaken van de problemen.',
            correctAnswer: 'onderzoek',
            hint: 'een onderzoek uitvoeren = to conduct an investigation',
            acceptableAnswers: ['onderzoek'],
          },
          {
            before: 'De minister viel meteen met de deur in',
            after: 'en kondigde het nieuwe beleid aan.',
            correctAnswer: 'huis',
            hint: 'met de deur in huis vallen = to get straight to the point',
            acceptableAnswers: ['huis'],
          },
        ],
      },
    },
    {
      id: 'collocations-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence contains a collocation error. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De rechtbank heeft besloten de wet te breken in dit specifieke geval.',
            correctedSentence: 'De rechtbank heeft besloten de wet te overtreden in dit specifieke geval.',
            errorExplanation: '"Wetten" (laws) are "overtreden" (violated), not "gebroken" (broken) in Dutch.',
          },
          {
            incorrectSentence: 'We moeten een beslissing maken over de toekomst van het bedrijf.',
            correctedSentence: 'We moeten een beslissing nemen over de toekomst van het bedrijf.',
            errorExplanation: '"Een beslissing nemen" is the fixed Dutch collocation. "Maken" is an anglicism.',
          },
          {
            incorrectSentence: 'De onderzoeker heeft grote conclusies gemaakt op basis van de data.',
            correctedSentence: 'De onderzoeker heeft vergaande conclusies getrokken op basis van de data.',
            errorExplanation: '"Conclusies trekken" — not "maken". Also "grote conclusies" is unusual; "vergaande" (far-reaching) or "harde" (strong) collocates better with "conclusies".',
          },
          {
            incorrectSentence: 'Het nieuwe beleid is per 1 januari van werking.',
            correctedSentence: 'Het nieuwe beleid is per 1 januari van kracht.',
            errorExplanation: '"Van kracht zijn" is the fixed expression for "to be in force". "Van werking" does not exist in this collocation.',
          },
          {
            incorrectSentence: 'Ze loopt warm voor het idee om eigen baas te zijn.',
            correctedSentence: 'Ze loopt warm voor het idee om eigen baas te zijn.',
            errorExplanation: 'This sentence is actually correct! "Warm lopen voor" = to be enthusiastic about. A good example of a correct idiom.',
          },
        ],
      },
    },
    {
      id: 'collocations-ex-4',
      type: 'translation',
      instruction: 'Translate into Dutch using the correct collocation or fixed expression.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The government has taken measures to combat the housing shortage.',
            correctDutch: 'De overheid heeft maatregelen getroffen om de woningnood te bestrijden.',
            acceptableAnswers: ['De overheid heeft maatregelen getroffen om de woningnood te bestrijden.', 'De regering heeft maatregelen getroffen om de woningnood te bestrijden.'],
          },
          {
            english: 'The committee will draw conclusions from the investigation.',
            correctDutch: 'De commissie zal conclusies trekken uit het onderzoek.',
            acceptableAnswers: ['De commissie zal conclusies trekken uit het onderzoek.', 'De commissie trekt conclusies uit het onderzoek.'],
          },
          {
            english: 'The new policy takes account of the needs of small businesses.',
            correctDutch: 'Het nieuwe beleid houdt rekening met de behoeften van kleine bedrijven.',
            acceptableAnswers: ['Het nieuwe beleid houdt rekening met de behoeften van kleine bedrijven.'],
          },
          {
            english: 'After months of debate, the decision has finally been made.',
            correctDutch: 'Na maanden van debat is de kogel eindelijk door de kerk.',
            acceptableAnswers: ['Na maanden van debat is de kogel eindelijk door de kerk.', 'Na maanden van debat is er eindelijk een beslissing genomen.'],
          },
        ],
      },
    },
    {
      id: 'collocations-ex-5',
      type: 'multiple-choice',
      instruction: 'Choose the correct interpretation of the underlined fixed expression.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Na het succes van vorig jaar rusten we niet op onze lauweren." What does the underlined phrase mean?',
            options: [
              'We are celebrating our success.',
              'We are not going to stop working hard after our success.',
              'We are going to rest before continuing.',
              'We are proud of last year\'s results.',
            ],
            correctIndex: 1,
            explanation: '"Op zijn lauweren rusten" = to rest on one\'s laurels = to stop making an effort after a success. The sentence says they will NOT do this.',
          },
          {
            question: '"De minister gooide het roer om na de slechte verkiezingsuitslag." What happened?',
            options: [
              'The minister resigned.',
              'The minister changed direction drastically.',
              'The minister threw something at the election results.',
              'The minister gave a press conference.',
            ],
            correctIndex: 1,
            explanation: '"Het roer omgooien" = to change course / make a drastic change of direction. After poor election results, the minister changed strategy.',
          },
          {
            question: '"Hij hield zijn collega\'s voor de gek met zijn nep-aankondiging." What did he do?',
            options: [
              'He made a fool of himself.',
              'He fooled his colleagues with a fake announcement.',
              'He kept his colleagues waiting.',
              'He made an important announcement.',
            ],
            correctIndex: 1,
            explanation: '"Iemand voor de gek houden" = to fool / deceive someone. He tricked his colleagues with a fake announcement.',
          },
        ],
      },
    },
    {
      id: 'collocations-ex-6',
      type: 'writing-prompt',
      instruction: 'Write a formal paragraph (5–6 sentences) about a problem in society and what should be done about it. Use at least four collocations or fixed expressions from this lesson.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele alinea over een maatschappelijk probleem naar keuze. Gebruik minstens vier collocaties of vaste uitdrukkingen.',
        context: 'Choose a topic: housing shortages, climate change, education, healthcare, inequality, traffic…',
        guidelines: [
          'Use at least two verb+noun collocations (e.g. maatregelen treffen, onderzoek uitvoeren)',
          'Use at least one fixed expression or idiom',
          'Use formal register throughout (no "je" — use "men" or passive)',
          'Write 5–6 complete sentences',
        ],
        sampleResponse: 'De woningnood in de grote steden vraagt om onmiddellijk ingrijpen. De overheid dient maatregelen te treffen die rekening houden met zowel kopers als huurders. Verschillende onderzoeken zijn uitgevoerd naar de oorzaken, en de conclusies zijn getrokken: er moet meer gebouwd worden. De kogel moet door de kerk: het nieuwe bouwplan moet nu van kracht worden. Een beroep wordt gedaan op gemeenten om de procedures te versnellen. Het roer moet om, want de huidige aanpak werkt onvoldoende.',
      },
    },
    {
      id: 'collocations-ex-7',
      type: 'listening-comprehension',
      instruction: 'Listen to the news item and answer the questions about collocations and expressions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'A radio news item about government policy on housing.',
        audioText: 'De minister van Volkshuisvesting heeft vandaag bekendgemaakt dat de kogel door de kerk is: er wordt een grootschalig bouwprogramma gestart. De overheid treft strenge maatregelen om de bouw te versnellen. Het programma houdt rekening met duurzaamheid en betaalbaarheid. Gemeenten worden opgeroepen om gebruik te maken van de nieuwe subsidieregeling. Een beroep wordt gedaan op projectontwikkelaars om snel te handelen. De minister viel meteen met de deur in huis en kondigde aan dat de eerste woningen al in 2026 opgeleverd worden.',
        maxPlays: 2,
        questions: [
          {
            question: 'What does "de kogel is door de kerk" signal in this context?',
            options: [
              'The decision about the building programme has been made.',
              'The building programme has failed.',
              'The minister has resigned.',
              'A vote will take place soon.',
            ],
            correctIndex: 0,
            explanation: '"De kogel is door de kerk" = the decision has been made. Here it announces that the large-scale building programme is confirmed.',
          },
          {
            question: 'Which collocation means "to call on project developers to act quickly"?',
            options: [
              'gebruik maken van',
              'rekening houden met',
              'een beroep doen op',
              'maatregelen treffen',
            ],
            correctIndex: 2,
            explanation: '"Een beroep doen op" = to appeal to / call on. Project developers are called on to act quickly.',
          },
          {
            question: 'What does "met de deur in huis vallen" tell us about the minister\'s communication style?',
            options: [
              'The minister was late to the press conference.',
              'The minister was very direct and got straight to the point.',
              'The minister was nervous and unprepared.',
              'The minister announced bad news.',
            ],
            correctIndex: 1,
            explanation: '"Met de deur in huis vallen" = to get straight to the point, without introduction. The minister was direct.',
          },
        ],
      },
    },
  ],
};
