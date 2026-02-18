import { Topic } from '@/content/types';

export const participlesAdjectives: Topic = {
  id: 'participles-adjectives',
  levelId: 'b1',
  order: 10,
  title: 'Participles as Adjectives',
  subtitle: 'Deelwoorden als bijvoeglijk naamwoord',
  estimatedMinutes: 45,
  prerequisites: ['passive-voice', 'word-formation'],

  lessons: [
    {
      id: 'pa-present-participle',
      topicId: 'participles-adjectives',
      title: 'Present Participle as Adjective',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Present participle = infinitive + d (e.g., groeien → groeiend).',
          explanation:
            'The present participle (onvoltooid deelwoord) is formed by adding -d to the infinitive. When used as an adjective before a noun, it follows the normal adjective ending rules: add -e before de-words (always) and before definite het-words; no extra -e for indefinite het-words in singular.',
        },
        {
          type: 'grammar-table',
          title: 'Present Participle Formation',
          headers: ['Infinitive', 'Present Participle', 'Adjective Example'],
          rows: [
            ['slapen', 'slapend', 'een slapend kind (het-word, indefinite → no -e)'],
            ['groeien', 'groeiend', 'de groeiende economie (de-word → -e)'],
            ['uitdagen', 'uitdagend', 'een uitdagend project (het-word, indefinite → no -e)'],
            ['veranderen', 'veranderend', 'de veranderende wereld (de-word → -e)'],
            ['verrassen', 'verrassend', 'een verrassend resultaat (het-word, indefinite → no -e)'],
            ['beloven', 'veelbelovend', 'het veelbelovende talent (het-word, definite → -e)'],
          ],
          caption: 'The adjective ending -e is added before de-words and definite het-words.',
        },
        {
          type: 'note',
          title: 'Adjective Endings Reminder',
          content: 'Present participles as adjectives follow the same rules as all adjectives:\n• Add -e before de-words (always) and het-words (when definite)\n• No extra -e for het-words in indefinite singular: een slapend kind (not slapende)',
          variant: 'info',
        },
        {
          type: 'examples',
          title: 'Present Participles as Adjectives',
          examples: [
            { dutch: 'een slapend kind', english: 'a sleeping child', note: 'het-word, indefinite → no -e' },
            { dutch: 'de groeiende economie', english: 'the growing economy', note: 'de-word → -e' },
            { dutch: 'een verrassend resultaat', english: 'a surprising result', note: 'het-word, indefinite → no -e' },
            { dutch: 'het veelbelovende talent', english: 'the promising talent', note: 'het-word, definite → -e' },
            { dutch: 'De economie is groeiend.', english: 'The economy is growing.', note: 'Predicative (after zijn): no -e ending' },
          ],
        },
      ],
    },
    {
      id: 'pa-past-participle',
      topicId: 'participles-adjectives',
      title: 'Past Participle as Adjective',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Past participles can be used as adjectives, following the same -e ending rules.',
          explanation:
            'The past participle (voltooid deelwoord) can function as an adjective. Strong verbs: ge- + stem + en (breken → gebroken). Weak verbs: ge- + stem + t/d (werken → gewerkt). Past participle adjectives often have a passive meaning: "de gestolen auto" = the car that was stolen.',
        },
        {
          type: 'grammar-table',
          title: 'Past Participle as Adjective',
          headers: ['Verb', 'Past Participle', 'Adjective Example'],
          rows: [
            ['breken', 'gebroken', 'een gebroken hart (het-word, indefinite → no -e)'],
            ['stelen', 'gestolen', 'de gestolen auto (de-word → -e)'],
            ['voltooien', 'voltooid', 'het voltooide project (het-word, definite → -e)'],
            ['ervaren', 'ervaren', 'de ervaren medewerker (de-word → -e)'],
            ['opleiden', 'opgeleid', 'een opgeleid team (het-word, indefinite → no -e)'],
            ['bijvoegen', 'bijgevoegd', 'de bijgevoegde documenten (de-word → -e)'],
          ],
          caption: 'Past participle adjectives follow the same de/het and definite/indefinite rules.',
        },
        {
          type: 'examples',
          title: 'Past Participles as Adjectives in Context',
          examples: [
            { dutch: 'een gebroken hart', english: 'a broken heart', note: 'het-word, indefinite → no -e' },
            { dutch: 'de gestolen auto', english: 'the stolen car', note: 'de-word → -e' },
            { dutch: 'het voltooide project', english: 'the completed project', note: 'het-word, definite → -e' },
            { dutch: 'de ervaren medewerker', english: 'the experienced employee', note: 'de-word → -e' },
          ],
        },
        {
          type: 'note',
          title: 'Passive Meaning of Past Participles',
          content: 'Past participles used as adjectives often have a passive meaning: "de gestolen auto" means "the car that was stolen". They describe the result of an action performed on the noun.',
          variant: 'info',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'een gebroken harte', correct: 'een gebroken hart', explanation: '"Hart" is a het-word in indefinite singular → no -e ending on the adjective.' },
            { incorrect: 'een ervaren medewerker (as de-word)', correct: 'een ervaren medewerker', explanation: '"Ervaren" is already ends in -en (no change needed). "Medewerker" is a de-word, but "ervaren" does not visibly change.' },
          ],
        },
      ],
    },
    {
      id: 'pa-emotion-adjectives',
      topicId: 'participles-adjectives',
      title: 'Emotion Adjectives: Past vs. Present Participle',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Past participle = the person feeling the emotion; present participle = what causes the emotion.',
          explanation:
            'Many Dutch emotion adjectives come from verbs as participles. The past participle (-d/-t/-en) describes the PERSON experiencing the emotion. The present participle (-d) describes what CAUSES the emotion. This parallels English: bored (past) vs. boring (present).',
        },
        {
          type: 'grammar-table',
          title: 'Emotion Adjective Pairs',
          headers: ['Verb', 'Past Participle (person)', 'Present Participle (cause)', 'English'],
          rows: [
            ['vervelen', 'verveeld', 'vervelend', 'bored / boring'],
            ['verrassen', 'verrast', 'verrassend', 'surprised / surprising'],
            ['teleurstellen', 'teleurgesteld', 'teleurstellend', 'disappointed / disappointing'],
            ['interesseren', 'geïnteresseerd', 'interessant', 'interested / interesting'],
            ['opwinden', 'opgewonden', 'opwindend', 'excited / exciting'],
            ['bezorgen (zorgen)', 'bezorgd', 'zorgwekkend', 'worried / worrying'],
          ],
          caption: 'Use past participle for the person feeling the emotion; present participle for the thing causing it.',
        },
        {
          type: 'examples',
          title: 'Past vs. Present Participle for Emotions',
          examples: [
            { dutch: 'Ik ben VERVEELD.', english: 'I am BORED.', note: 'Past participle: the person is experiencing boredom' },
            { dutch: 'De film is VERVELEND.', english: 'The film is BORING.', note: 'Present participle: the film causes boredom' },
            { dutch: 'Ze is TELEURGESTELD over het resultaat.', english: 'She is DISAPPOINTED about the result.', note: 'Past participle: person feeling disappointed' },
            { dutch: 'De resultaten zijn TELEURSTELLEND.', english: 'The results are DISAPPOINTING.', note: 'Present participle: the results cause disappointment' },
            { dutch: 'Hij is OPGEWONDEN over het nieuws.', english: 'He is EXCITED about the news.', note: 'Past participle: person who is excited' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De film is verveeld.', correct: 'De film is vervelend.', explanation: '"Verveeld" = the person who is bored. A film cannot feel bored — use "vervelend" (boring) for the thing causing boredom.' },
            { incorrect: 'Ik ben vervelend over het boek.', correct: 'Ik ben verveeld door het boek.', explanation: '"Vervelend" = the thing that is boring. A person who is bored is "verveeld".' },
          ],
        },
      ],
    },
    {
      id: 'pa-professional',
      topicId: 'participles-adjectives',
      title: 'Participial Adjectives in Professional Dutch',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'In formal written Dutch, extended participial phrases replace relative clauses.',
          explanation:
            'In formal written Dutch (reports, articles, legal texts), extended participial phrases are common. They allow complex information to be packed into a noun phrase. A relative clause (spoken) can become a participial phrase (written) for a more compact, formal style.',
        },
        {
          type: 'grammar-table',
          title: 'Relative Clause vs. Participial Phrase',
          headers: ['Relative clause (spoken/written)', 'Participial phrase (formal written)'],
          rows: [
            ['de man die door de politie wordt gezocht', 'de door de politie gezochte man'],
            ['de regels die onlangs zijn veranderd', 'de onlangs veranderde regels'],
            ['het rapport dat gisteren is ingediend', 'het gisteren ingediende rapport'],
          ],
          caption: 'Extended participial phrases are common in formal Dutch documents.',
        },
        {
          type: 'workplace-context',
          scenario: 'Professional Communication',
          examples: [
            { dutch: 'De verwachte resultaten zijn positief.', english: 'The expected results are positive.' },
            { dutch: 'We zoeken een ervaren projectmanager.', english: 'We are looking for an experienced project manager.' },
            { dutch: 'Het goedgekeurde budget bedraagt €50.000.', english: 'The approved budget amounts to €50,000.' },
            { dutch: 'De bijgevoegde documenten bevatten alle informatie.', english: 'The attached documents contain all the information.' },
            { dutch: 'Hierbij stuur ik u het gevraagde rapport.', english: 'Herewith I am sending you the requested report.' },
          ],
          note: 'In business Dutch, participial adjectives like "bijgevoegd" (attached), "gevraagd" (requested), "goedgekeurd" (approved), and "verwacht" (expected) are extremely common in professional correspondence.',
        },
      ],
    },
  ],

  exercises: [
    {
      id: 'pa-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct present participle adjective form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is the correct present participle form of "groeien" used before "markt" (de-word)?',
            options: ['groeiend', 'groeiende', 'gegroeid', 'gegroeiende'],
            correctIndex: 1,
            explanation: '"Markt" is a de-word → the present participle adds -e: "de groeiende markt".',
          },
          {
            question: 'Fill in: "een ___ kind" (slapen)',
            options: ['slapende', 'geslapen', 'slapend', 'slapt'],
            correctIndex: 2,
            explanation: '"Kind" is a het-word in indefinite singular → no extra -e: "een slapend kind".',
          },
          {
            question: 'Which sentence correctly uses a present participle as adjective?',
            options: [
              'Het is een uitdagend project.',
              'Het is een uitdagende project.',
              'Het is een uitgedaagde project.',
              'Het is een uitdagt project.',
            ],
            correctIndex: 0,
            explanation: '"Project" is a het-word, indefinite → no extra -e: "een uitdagend project".',
          },
          {
            question: 'What does "een veelbelovende student" mean?',
            options: ['a promising student', 'a disappointed student', 'a hardworking student', 'a struggling student'],
            correctIndex: 0,
            explanation: '"Veelbelovend" = much promising = promising. From "beloven" (to promise) + "veel" (much). De-word → -e.',
          },
        ],
      },
    },
    {
      id: 'pa-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct past participle adjective form. Add -e if needed.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'We zoeken een',
            after: 'medewerker. (ervaren)',
            correctAnswer: 'ervaren',
            hint: 'Ervaren is also the past participle here. De-word, but already ends in -en.',
          },
          {
            before: 'Het',
            after: 'rapport ligt op tafel. (afmaken)',
            correctAnswer: 'afgemaakte',
            hint: 'Afgemaakt = past participle of afmaken; "rapport" = het-word, definite → add -e',
          },
          {
            before: 'De',
            after: 'auto staat in de garage. (stelen)',
            correctAnswer: 'gestolen',
            hint: 'Gestolen = past pp of stelen; de-word → add -e: gestolen + e = gestolene? No — gestolen already ends in -en',
          },
          {
            before: 'Dit is een',
            after: 'gebouw. (renoveren)',
            correctAnswer: 'gerenoveerd',
            hint: 'Gerenoveerd = past pp; "gebouw" = het-word, indefinite → no extra -e',
          },
          {
            before: 'De manager stuurde de',
            after: 'documenten. (bijvoegen)',
            correctAnswer: 'bijgevoegde',
            hint: 'Bijgevoegd = past pp of bijvoegen; de-word plural → add -e',
          },
        ],
      },
    },
    {
      id: 'pa-ex-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct participle adjective — past or present, with correct ending.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'The ___ letter was lying on the desk. (schrijven)',
            options: ['schrijvende brief', 'geschreven brief', 'schrijvend brief', 'schrijf brief'],
            correctIndex: 1,
            explanation: '"Geschreven" (past pp) = the written letter. "Schrijvende" would mean the letter is actively writing — nonsense.',
          },
          {
            question: 'Ze is ___ over het nieuws.',
            options: ['verrast', 'verrassend', 'verraste', 'verrassende'],
            correctIndex: 0,
            explanation: 'Predicative after zijn: no -e. Past participle "verrast" = the person who is surprised.',
          },
          {
            question: 'Het was een ___ presentatie.',
            options: ['verveeld', 'vervelend', 'vervelen', 'verveelde'],
            correctIndex: 1,
            explanation: '"Vervelend" (present pp) = boring. The presentation CAUSES boredom. "Verveeld" = the person feeling bored.',
          },
          {
            question: 'We sturen u het ___ rapport. (vragen)',
            options: ['vragende rapport', 'gevraagde rapport', 'gevraagd rapport', 'vragend rapport'],
            correctIndex: 1,
            explanation: '"Gevraagd" = past pp = requested. "Rapport" is het-word but definite → add -e: gevraagde.',
          },
        ],
      },
    },
    {
      id: 'pa-ex-4',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ze is vervelend over de situatie.',
            correctedSentence: 'Ze is verveeld over de situatie.',
            errorExplanation: '"Verveeld" (past pp) = the person who feels bored/annoyed. "Vervelend" = the thing that is boring/annoying.',
          },
          {
            incorrectSentence: 'Hij las een interessante boek.',
            correctedSentence: 'Hij las een interessant boek.',
            errorExplanation: '"Boek" is a het-word in indefinite singular → no -e ending: "een interessant boek".',
          },
          {
            incorrectSentence: 'De gesteald fiets staat buiten.',
            correctedSentence: 'De gestolen fiets staat buiten.',
            errorExplanation: '"Stelen" is a strong verb; past participle = gestolen (not gesteald).',
          },
          {
            incorrectSentence: 'We zoeken een ervarend medewerker.',
            correctedSentence: 'We zoeken een ervaren medewerker.',
            errorExplanation: '"Ervaren" (experienced) is a past participle used as adjective. "Ervarend" would mean currently experiencing, which is not the intended meaning.',
          },
          {
            incorrectSentence: 'De bijgevoegde documenten is compleet.',
            correctedSentence: 'De bijgevoegde documenten zijn compleet.',
            errorExplanation: '"Documenten" is plural → use "zijn" (not "is").',
          },
        ],
      },
    },
    {
      id: 'pa-ex-5',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['We', 'een', 'projectmanager', 'ervaren', 'zoeken'],
            correctOrder: ['We', 'zoeken', 'een', 'ervaren', 'projectmanager'],
            translation: 'We are looking for an experienced project manager.',
          },
          {
            shuffledWords: ['budget', 'goedgekeurde', 'Het', 'bedraagt', 'vijftigduizend', 'euro'],
            correctOrder: ['Het', 'goedgekeurde', 'budget', 'bedraagt', 'vijftigduizend', 'euro'],
            translation: 'The approved budget amounts to fifty thousand euros.',
          },
          {
            shuffledWords: ['u', 'Hierbij', 'het', 'ik', 'rapport', 'gevraagde', 'stuur'],
            correctOrder: ['Hierbij', 'stuur', 'ik', 'u', 'het', 'gevraagde', 'rapport'],
            translation: 'Herewith I am sending you the requested report.',
          },
          {
            shuffledWords: ['de', 'zijn', 'resultaten', 'verwachte', 'positief'],
            correctOrder: ['De', 'verwachte', 'resultaten', 'zijn', 'positief'],
            translation: 'The expected results are positive.',
          },
        ],
      },
    },
    {
      id: 'pa-ex-6',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch, using participle adjectives.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The attached file contains all the information.',
            correctDutch: 'Het bijgevoegde bestand bevat alle informatie.',
            acceptableAnswers: ['Het bijgevoegde document bevat alle informatie.'],
          },
          {
            english: 'We are looking for an experienced teacher.',
            correctDutch: 'We zoeken een ervaren leraar.',
            acceptableAnswers: ['Wij zoeken een ervaren leraar.', 'We zoeken een ervaren docent.'],
          },
          {
            english: 'The broken window needs to be repaired.',
            correctDutch: 'Het gebroken raam moet gerepareerd worden.',
            acceptableAnswers: ['Het gebroken raam moet worden gerepareerd.'],
          },
          {
            english: 'She looks disappointed.',
            correctDutch: 'Ze ziet er teleurgesteld uit.',
            acceptableAnswers: ['Ze lijkt teleurgesteld.'],
          },
          {
            english: 'The growing demand is a challenge for the company.',
            correctDutch: 'De groeiende vraag is een uitdaging voor het bedrijf.',
            acceptableAnswers: ['De groeiende vraag vormt een uitdaging voor het bedrijf.'],
          },
        ],
      },
    },
    {
      id: 'pa-ex-7',
      type: 'writing-prompt',
      instruction: 'Write a short professional text using at least five participial adjectives.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Write a short job posting or project description (5–7 sentences) for a Dutch company. Use at least five participial adjectives (both present and past participles).',
        context: 'You are writing either: (a) a job advertisement for an experienced position, or (b) a brief project update for stakeholders. Use participial adjectives to describe qualifications, results, or states.',
        guidelines: [
          'Use at least two past participle adjectives (e.g., ervaren, goedgekeurd, verwacht)',
          'Use at least two present participle adjectives (e.g., groeiend, veelbelovend, uitdagend)',
          'Apply correct adjective endings (-e or no -e) based on de/het and definiteness',
          'Include at least one professional term using a participial adjective',
          'Write in a formal, professional register',
          'Check word order, especially with definite/indefinite nouns',
        ],
        sampleResponse: 'Vacature: Ervaren Projectmanager\n\nOns groeiende bedrijf zoekt een ervaren en gemotiveerde projectmanager. U bent verantwoordelijk voor het leiden van uitdagende projecten en het beheren van toegewezen budgetten. U werkt nauw samen met een hecht team en rapporteert aan de directeur. Het verwachte startsalaris is marktconform. Wij bieden een stimulerende werkomgeving met veel ontwikkelingsmogelijkheden. Stuur uw bijgevoegde CV en motivatiebrief voor 1 april in.',
      },
    },
  ],
};
