import { Topic } from '@/content/types';

export const inversionEmphasis: Topic = {
  id: 'inversion-emphasis',
  levelId: 'b2',
  order: 10,
  title: 'Inversion & Emphasis',
  subtitle: 'Inversie en nadruk',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'ie-1',
      title: 'Topicalization and Focus',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch speakers move elements to the front of the sentence (topicalization) to signal what is already known (topic) and contrast it with new information (focus).',
          explanation:
            'Every Dutch main clause has exactly one position before the finite verb (position 1). Whatever occupies that position is the topic — the anchor or frame for what follows. The rest of the sentence provides the focus (new information). Skilled speakers and writers use this distinction to control the flow of information, create contrast, and vary rhythm. Any constituent — adverb, object, prepositional phrase, subordinate clause, or even a past participle — can be topicalized.',
        },
        {
          type: 'grammar-table',
          title: 'What can be topicalized',
          headers: ['Constituent type', 'Example', 'Effect'],
          rows: [
            ['Time adverb', 'Gisteren belde hij op.', 'Temporal frame set first'],
            ['Direct object', 'Dat rapport heb ik niet gelezen.', 'Contrast/emphasis on object'],
            ['Indirect object', 'Haar heb ik niets verteld.', 'Her specifically — contrast'],
            ['Prepositional phrase', 'Op kantoor mag je niet roken.', 'Location as frame'],
            ['Manner adverb', 'Voorzichtig opende hij de deur.', 'Manner highlighted'],
            ['Subordinate clause', 'Dat hij zou komen, wist ik niet.', 'Whole proposition as topic'],
            ['Past participle (rare)', 'Gelezen heb ik het wel.', 'Very emphatic contrast'],
            ['Predicate adjective (rare)', 'Tevreden was ze zeker niet.', 'Contrastive negation'],
          ],
          caption: 'Only ONE element can be topicalized per clause. The subject itself can also occupy position 1, in which case no inversion occurs.',
        },
        {
          type: 'examples',
          title: 'Same content, different focus',
          examples: [
            {
              dutch: 'Ik heb dat rapport gisteren op kantoor gelezen.',
              english: 'I read that report yesterday at the office. (neutral)',
              highlight: 'Ik',
            },
            {
              dutch: 'Gisteren heb ik dat rapport op kantoor gelezen.',
              english: 'Yesterday was when I read that report at the office. (time = topic)',
              highlight: 'Gisteren',
            },
            {
              dutch: 'Dat rapport heb ik gisteren op kantoor gelezen.',
              english: 'That report — I read it yesterday at the office. (object = topic, often contrastive)',
              highlight: 'Dat rapport',
            },
            {
              dutch: 'Op kantoor heb ik dat rapport gisteren gelezen.',
              english: 'At the office was where I read that report yesterday. (place = frame)',
              highlight: 'Op kantoor',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Gisteren ik heb dat rapport gelezen.',
              correct: 'Gisteren heb ik dat rapport gelezen.',
              explanation: 'After a topicalized element, V2 inversion is obligatory: the finite verb (heb) must come immediately after the fronted element, before the subject (ik).',
            },
            {
              incorrect: 'Dat rapport en gisteren heb ik gelezen.',
              correct: 'Dat rapport heb ik gisteren gelezen.',
              explanation: 'Only one element can occupy the topic position. "Dat rapport" is topicalized; "gisteren" stays in its normal position after the verb cluster.',
            },
          ],
        },
      ],
    },
    {
      id: 'ie-2',
      title: 'Emphatic Constructions: Wel, Toch, Juist, Pas',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch uses a set of focus particles — wel, toch, juist, pas, net, alleen, zelfs — to add emphasis, contrast, or nuance without changing word order.',
          explanation:
            'These particles are placed close to the element they emphasize. They are unstressed (except when used contrastively) and carry subtle but important pragmatic meaning. Mastering them is key to sounding natural and expressing contrast, reassurance, surprise, or restriction at advanced level.',
        },
        {
          type: 'grammar-table',
          title: 'Focus particles and their functions',
          headers: ['Particle', 'Core function', 'Example', 'Nuance'],
          rows: [
            ['wel', 'Affirmative contrast / reassurance', 'Ik heb het wel gedaan.', 'Contradicts a negative assumption: "I did do it."'],
            ['toch', 'Concession / mild surprise / reminder', 'Je weet toch dat hij ziek is?', 'Appeals to shared knowledge; expresses expectation.'],
            ['juist', 'Precision / "precisely" / "exactly"', 'Juist dat detail is belangrijk.', 'Highlights that the specific element (not others) matters.'],
            ['pas', 'Lateness / recency / only then', 'Hij is pas gisteren aangekomen.', 'Expresses that something happened later than expected.'],
            ['net', 'Just (recently) / exactly', 'Ik heb het net gedaan.', 'Very recent past or precise match.'],
            ['alleen', 'Restriction', 'Alleen zij weet het antwoord.', '"Only she knows the answer."'],
            ['zelfs', 'Scalar emphasis', 'Zelfs de directeur wist het niet.', '"Even the director didn\'t know."'],
            ['al', 'Earlier than expected', 'Ze is al klaar.', '"She is already done." — sooner than expected.'],
          ],
          caption: '"Wel" as a focus particle is unstressed; when stressed (WEL) it is emphatic contrast. Context and intonation determine which sense is meant.',
        },
        {
          type: 'examples',
          title: 'Contrast pairs',
          examples: [
            {
              dutch: 'A: "Je hebt het niet gelezen." B: "Ik heb het wel gelezen."',
              english: 'A: "You didn\'t read it." B: "I did read it." (contrastive wel)',
              highlight: 'wel',
            },
            {
              dutch: 'Pas na drie uur kregen we een reactie.',
              english: 'Only after three hours did we get a response. (pas = later than expected)',
              highlight: 'Pas',
            },
            {
              dutch: 'Juist de kleine details maken het verschil.',
              english: 'It is precisely the small details that make the difference.',
              highlight: 'Juist',
            },
            {
              dutch: 'Zelfs zijn eigen collega\'s geloofden hem niet.',
              english: 'Even his own colleagues didn\'t believe him.',
              highlight: 'Zelfs',
            },
          ],
        },
        {
          type: 'note',
          content: '"Toch" has many uses: as a focus particle ("Je weet toch…"), as a connector meaning "yet/however" ("Hij was moe, toch ging hij door."), and as an emphatic imperative softener ("Doe dat toch niet!"). Context is key.',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'ie-3',
      title: 'Cleft Sentences: Het is … die/dat',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Cleft sentences ("het is … die/dat …") isolate a single element for strong emphasis by splitting a simple clause into a copular sentence and a relative clause.',
          explanation:
            'A cleft sentence takes a normal sentence and restructures it to put one element in sharp focus. The structure is: "Het is/zijn + [focused element] + die/dat + [rest of clause]". This construction is used when emphasis alone is not enough — when the speaker wants to uniquely identify or contrast an element as the key piece of information.',
        },
        {
          type: 'grammar-table',
          title: 'Cleft sentence structure',
          headers: ['Normal sentence', 'Cleft (focused element)', 'Cleft sentence'],
          rows: [
            ['Jan heeft het gedaan.', 'Jan (subject)', 'Het is Jan die het heeft gedaan.'],
            ['Jan heeft het gedaan.', 'het (object)', 'Het is dit dat Jan heeft gedaan.'],
            ['Ze belde gisteren.', 'gisteren (time)', 'Het was gisteren dat ze belde.'],
            ['Hij werkt op kantoor.', 'op kantoor (place)', 'Het is op kantoor dat hij werkt.'],
            ['Ze vertrok vanwege stress.', 'vanwege stress (reason)', 'Het was vanwege stress dat ze vertrok.'],
          ],
          caption: 'Use "die" when the focused element refers to a person; use "dat" for things, times, places, and reasons.',
        },
        {
          type: 'examples',
          title: 'Clefts in context',
          examples: [
            {
              dutch: 'Het was niet hij, maar zijn collega die de fout had gemaakt.',
              english: 'It was not he but his colleague who had made the mistake.',
              highlight: 'Het was … die',
            },
            {
              dutch: 'Het is juist dit gebrek aan communicatie dat de problemen veroorzaakt.',
              english: 'It is precisely this lack of communication that is causing the problems.',
              highlight: 'Het is … dat',
            },
            {
              dutch: 'Het was pas na maanden dat de waarheid aan het licht kwam.',
              english: 'It was only after months that the truth came to light.',
              highlight: 'Het was … dat',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Het is Jan dat het heeft gedaan.',
              correct: 'Het is Jan die het heeft gedaan.',
              explanation: 'When the focused element is a person, use "die", not "dat".',
            },
            {
              incorrect: 'Het is gisteren die ze belde.',
              correct: 'Het was gisteren dat ze belde.',
              explanation: 'For times, places, and things, use "dat". Also match the tense of "zijn" to the time reference.',
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-ie-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the sentence that correctly topicalizes the underlined element.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Topicalize "gisteren": Ik heb het rapport gisteren gelezen.',
            options: [
              'Gisteren heb ik het rapport gelezen.',
              'Gisteren ik heb het rapport gelezen.',
              'Gisteren het rapport heb ik gelezen.',
              'Ik gisteren heb het rapport gelezen.',
            ],
            correctIndex: 0,
            explanation: 'After topicalization, the finite verb must come second (V2): "Gisteren heb ik…"',
          },
          {
            question: 'Which focus particle best fills the gap? "Ik heb het ___ gedaan!" (contradicting someone who says I didn\'t)',
            options: ['wel', 'pas', 'juist', 'toch'],
            correctIndex: 0,
            explanation: '"Wel" is the affirmative contrast particle: it contradicts a negative assumption.',
          },
          {
            question: 'Choose the correct cleft sentence to emphasize "zijn collega": "Zijn collega heeft de fout gemaakt."',
            options: [
              'Het is zijn collega die de fout heeft gemaakt.',
              'Het is zijn collega dat de fout heeft gemaakt.',
              'Het zijn zijn collega die de fout heeft gemaakt.',
              'Het is zijn collega wie de fout heeft gemaakt.',
            ],
            correctIndex: 0,
            explanation: 'The focused element is a person → use "die". "Het is" is correct for singular.',
          },
        ],
      },
    },
    {
      id: 'b2-ie-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct focus particle (wel, toch, juist, pas, zelfs, al).',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ze is',
            after: 'om acht uur aangekomen — twee uur later dan gepland.',
            correctAnswer: 'pas',
            hint: '"Pas" = later than expected.',
          },
          {
            before: 'Ik heb het',
            after: 'gedaan, maar niemand gelooft me.',
            correctAnswer: 'wel',
            hint: '"Wel" contradicts a negative assumption.',
          },
          {
            before: '',
            after: 'de directeur was aanwezig bij de vergadering.',
            correctAnswer: 'Zelfs',
            hint: '"Zelfs" = even (scalar emphasis — more than expected).',
          },
          {
            before: 'Je weet',
            after: 'dat we morgen vroeg moeten beginnen?',
            correctAnswer: 'toch',
            hint: '"Toch" appeals to shared knowledge.',
          },
        ],
      },
    },
    {
      id: 'b2-ie-err-1',
      type: 'error-correction',
      instruction: 'Identify and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Morgen ik ga naar het kantoor.',
            correctedSentence: 'Morgen ga ik naar het kantoor.',
            errorExplanation: 'After a topicalized time adverb, V2 inversion is required: finite verb before subject.',
          },
          {
            incorrectSentence: 'Het is de deadline dat we moeten halen.',
            correctedSentence: 'Het is de deadline die we moeten halen.',
            errorExplanation: '"De deadline" refers to a thing that is personified as a target but in Dutch it takes "die" because it is a de-word and can be a relative clause antecedent with "die". Actually, both are possible but "die" is more natural here for a concrete noun in object position.',
          },
          {
            incorrectSentence: 'Het is gisteren die de beslissing is genomen.',
            correctedSentence: 'Het was gisteren dat de beslissing is genomen.',
            errorExplanation: 'For times, "dat" is required. Also, use past tense "was" since "gisteren" refers to the past.',
          },
          {
            incorrectSentence: 'Dat rapport en zijn collega heb ik gisteren gesproken.',
            correctedSentence: 'Gisteren heb ik dat rapport gelezen en met zijn collega gesproken.',
            errorExplanation: 'Only one element can occupy the topic position. Multiple topics must be restructured.',
          },
        ],
      },
    },
    {
      id: 'b2-ie-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch, using the construction indicated.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'It was precisely the lack of preparation that caused the failure. (cleft sentence)',
            correctDutch: 'Het was juist het gebrek aan voorbereiding dat het mislukken heeft veroorzaakt.',
            acceptableAnswers: ['Juist het gebrek aan voorbereiding heeft het mislukken veroorzaakt.'],
            keyVocabulary: [
              { dutch: 'gebrek aan', english: 'lack of' },
              { dutch: 'mislukken', english: 'failure / to fail' },
            ],
          },
          {
            english: 'Only after the meeting did he realize the seriousness of the situation. (topicalization + pas)',
            correctDutch: 'Pas na de vergadering besefte hij de ernst van de situatie.',
            acceptableAnswers: ['Na de vergadering besefte hij pas de ernst van de situatie.'],
            keyVocabulary: [
              { dutch: 'beseffen', english: 'to realize' },
              { dutch: 'ernst', english: 'seriousness' },
            ],
          },
          {
            english: 'Even the most experienced employees didn\'t know the answer. (zelfs + topicalization)',
            correctDutch: 'Zelfs de meest ervaren medewerkers wisten het antwoord niet.',
            acceptableAnswers: ['Zelfs de ervarenste medewerkers kenden het antwoord niet.'],
            keyVocabulary: [
              { dutch: 'ervaren', english: 'experienced' },
              { dutch: 'medewerker', english: 'employee' },
            ],
          },
        ],
      },
    },
    {
      id: 'b2-ie-wo-1',
      type: 'word-order',
      instruction: 'Reorder the words to form a correct Dutch sentence with the indicated element in topic position.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['heb', 'Op', 'kantoor', 'ik', 'rapport', 'het', 'gelezen'],
            correctOrder: ['Op', 'kantoor', 'heb', 'ik', 'het', 'rapport', 'gelezen'],
            translation: 'At the office I read the report. (place topicalized)',
          },
          {
            shuffledWords: ['Het', 'Jan', 'is', 'die', 'fout', 'heeft', 'de', 'gemaakt'],
            correctOrder: ['Het', 'is', 'Jan', 'die', 'de', 'fout', 'heeft', 'gemaakt'],
            translation: 'It is Jan who made the mistake. (cleft sentence)',
          },
          {
            shuffledWords: ['Zelfs', 'wist', 'directeur', 'de', 'het', 'niet'],
            correctOrder: ['Zelfs', 'de', 'directeur', 'wist', 'het', 'niet'],
            translation: 'Even the director didn\'t know it.',
          },
        ],
      },
    },
    {
      id: 'b2-ie-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short argumentative paragraph (5–6 sentences) using topicalization, at least two focus particles, and one cleft sentence to make your argument more persuasive.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een korte argumenterende alinea over een maatregel of beslissing (op school, werk, of in de maatschappij) die jij belangrijk vindt.',
        context: 'Use topicalization to vary sentence rhythm. Use at least two focus particles (wel, toch, juist, pas, zelfs, al, alleen). Include one cleft sentence (Het is/was … die/dat …).',
        guidelines: [
          'Topicalize at least two non-subject elements',
          'Use two different focus particles',
          'Include one cleft sentence',
          'Keep the argument coherent and logical',
        ],
        sampleResponse: 'Juist in tijden van crisis is communicatie het allerbelangrijkste. Het is niet de beslissing zelf, maar de manier waarop ze wordt gecommuniceerd die het vertrouwen bepaalt. Zelfs een moeilijke maatregel kan worden geaccepteerd als mensen tijdig en eerlijk worden geïnformeerd. Toch wordt transparantie vaak pas achteraf als een prioriteit gezien. Het zijn de leiders die open communiceren die het verschil maken.',
      },
    },
  ],
};
