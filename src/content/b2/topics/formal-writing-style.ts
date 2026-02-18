import { Topic } from '@/content/types';

export const formalWritingStyle: Topic = {
  id: 'formal-writing-style',
  levelId: 'b2',
  order: 2,
  title: 'Formal & Academic Writing',
  subtitle: 'Formeel en academisch schrijven',
  estimatedMinutes: 65,
  lessons: [
    {
      id: 'fws-1',
      title: 'Impersonal Constructions and Passive Voice in Formal Prose',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal Dutch writing avoids personal pronouns by using impersonal constructions: "er wordt", "men", "het is", and passive voice.',
          explanation:
            'Academic and official texts minimise the first person. Instead of "Wij hebben onderzocht" (We investigated), formal prose prefers "Er is onderzocht" (It has been investigated) or "In dit rapport wordt onderzocht" (In this report, it is investigated). "Men" (one / people) replaces "wij" or "zij" as a generic subject. These constructions give text an objective, authoritative tone.',
        },
        {
          type: 'grammar-table',
          title: 'Personal → Impersonal transformations',
          headers: ['Informal / personal', 'Formal / impersonal', 'Device used'],
          rows: [
            ['We hebben geconcludeerd dat...', 'Er kan worden geconcludeerd dat...', 'Passive + er'],
            ['Ik stel voor dat...', 'Het wordt aanbevolen dat...', 'Passive + het'],
            ['Ze zeggen dat...', 'Men beweert dat...', '"men" as subject'],
            ['We gebruiken deze methode.', 'Deze methode wordt gehanteerd.', 'Passive, no agent'],
            ['Je kunt hieruit opmaken dat...', 'Hieruit kan worden opgemaakt dat...', 'Fronting + passive'],
          ],
        },
        {
          type: 'examples',
          title: 'In academic context',
          examples: [
            { dutch: 'In dit onderzoek wordt de relatie tussen taal en identiteit bestudeerd.', english: 'In this study, the relationship between language and identity is examined.', highlight: 'wordt … bestudeerd' },
            { dutch: 'Men kan stellen dat de resultaten significant zijn.', english: 'One can argue that the results are significant.', highlight: 'Men kan stellen' },
            { dutch: 'Er dient rekening te worden gehouden met mogelijke uitzonderingen.', english: 'Account must be taken of possible exceptions.', highlight: 'Er dient rekening te worden gehouden' },
          ],
        },
        {
          type: 'note',
          content: '"Dienen te" is a formal equivalent of "moeten": "Dit dient te worden ingediend vóór vrijdag" = This must be submitted before Friday.',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'fws-2',
      title: 'Nominalization: Writing with Nouns',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal writing converts verbs and adjectives into nouns (nominalization), creating a denser, more abstract style.',
          explanation:
            'Instead of "We analyseren de gegevens" (We analyse the data), formal writing prefers "De analyse van de gegevens" (The analysis of the data). Nominalization allows information to be packed into noun phrases, which can then be the subject, object, or topic of a clause. It is a hallmark of academic, legal, and bureaucratic Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Common nominalization patterns',
          headers: ['Verb / Adjective', 'Nominalization', 'Suffix'],
          rows: [
            ['analyseren', 'de analyse', '-e (from French/Latin stem)'],
            ['implementeren', 'de implementatie', '-atie'],
            ['concluderen', 'de conclusie', '-sie/-ie'],
            ['verbeteren', 'de verbetering', '-ing'],
            ['beoordelen', 'de beoordeling', '-ing'],
            ['flexibel', 'de flexibiliteit', '-iteit'],
            ['transparant', 'de transparantie', '-ie'],
            ['effectief', 'de effectiviteit', '-iteit'],
          ],
          caption: 'Nominalizations are typically de-words. Check a dictionary for exceptions.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De verbeteren van het proces', correct: 'De verbetering van het proces', explanation: 'Use the noun form (-ing), not the infinitive, as the head of a noun phrase.' },
            { incorrect: 'Na dat we geanalyseerd hebben', correct: 'Na de analyse', explanation: 'In formal writing replace subordinate clauses with nominalized noun phrases where possible.' },
          ],
        },
      ],
    },
    {
      id: 'fws-3',
      title: 'Hedging Language and Academic Phrases',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Academic writing uses hedging — language that qualifies claims, expresses uncertainty, or softens assertions — to maintain objectivity.',
          explanation:
            'Absolute statements are rare in academic Dutch. Writers hedge with modal verbs (zou, kan, lijkt), adverbs (mogelijk, vermoedelijk, naar alle waarschijnlijkheid), and phrases (het lijkt erop dat, er zijn aanwijzingen dat). Hedging acknowledges limitations and makes claims more defensible.',
        },
        {
          type: 'grammar-table',
          title: 'Hedging expressions',
          headers: ['Category', 'Dutch expression', 'English equivalent'],
          rows: [
            ['Modal verb', 'Dit zou kunnen betekenen dat...', 'This could mean that...'],
            ['Modal verb', 'Het resultaat lijkt te suggereren dat...', 'The result appears to suggest that...'],
            ['Adverb', 'Waarschijnlijk is dit te verklaren door...', 'This can probably be explained by...'],
            ['Adverb', 'Mogelijk speelt ook X een rol.', 'X may also play a role.'],
            ['Phrase', 'Er zijn aanwijzingen dat...', 'There are indications that...'],
            ['Phrase', 'Op basis van de beschikbare gegevens...', 'Based on the available data...'],
            ['Phrase', 'In zekere zin kan men stellen dat...', 'In a certain sense one can argue that...'],
            ['Phrase', 'Het valt niet uit te sluiten dat...', 'It cannot be ruled out that...'],
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Writing a business report conclusion',
          examples: [
            { dutch: 'Op basis van de beschikbare gegevens lijkt het aannemelijk dat de kosten met 15% zullen stijgen.', english: 'Based on the available data, it seems plausible that costs will increase by 15%.' },
            { dutch: 'Er zijn aanwijzingen dat de nieuwe aanpak effectiever is, al dient verder onderzoek dit te bevestigen.', english: 'There are indications that the new approach is more effective, although further research should confirm this.' },
          ],
          note: 'Hedging protects the writer from being wrong; in business it also signals professionalism.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-fws-mc-1',
      type: 'multiple-choice',
      instruction: 'Which sentence is the most appropriate formal/academic rewrite?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Informal: "We hebben ontdekt dat de methode niet werkt." Choose the best formal version.',
            options: [
              'Er is vastgesteld dat de methode niet effectief is.',
              'Wij hebben vastgesteld dat de methode niet werkt.',
              'Men hebben ontdekt dat de methode niet werkt.',
              'Het is dat de methode niet werkt.',
            ],
            correctIndex: 0,
            explanation: 'The best formal version uses the passive ("is vastgesteld") and a more neutral synonym ("effectief is" instead of "niet werkt"). "Wij" keeps the personal pronoun; "men hebben" is grammatically wrong (men takes singular verb); the last option is incomplete.',
          },
          {
            question: 'Which sentence uses nominalization correctly?',
            options: [
              'Na het implementeren van het systeem verbeterden de resultaten.',
              'Na de implementatie van het systeem verbeterden de resultaten.',
              'Na dat men het systeem geïmplementeerd heeft, verbeterden de resultaten.',
              'Nadat het systeem is geïmplementeerd, de resultaten verbeterden.',
            ],
            correctIndex: 1,
            explanation: '"Na de implementatie van het systeem" is a clean nominalized noun phrase. "Na het implementeren" is possible but less formal. The "nadat" versions are subordinate clauses, not nominalizations, and the last has a word order error.',
          },
          {
            question: 'Which phrase best hedges the following claim: "Deze aanpak lost het probleem op."',
            options: [
              'Deze aanpak lost misschien het probleem op.',
              'Het lijkt erop dat deze aanpak bij kan dragen aan de oplossing van het probleem.',
              'Deze aanpak lost waarschijnlijk het probleem niet op.',
              'Men denkt dat deze aanpak het probleem oplost.',
            ],
            correctIndex: 1,
            explanation: '"Het lijkt erop dat … bij kan dragen aan de oplossing" hedges both with "lijkt erop" and by replacing the absolute "oplost" with "bij kan dragen aan de oplossing" (can contribute to the solution). Option A hedges weakly; option C changes the meaning; option D presents hearsay.',
          },
        ],
      },
    },
    {
      id: 'b2-fws-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in a suitable formal/impersonal construction.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'In dit rapport', after: 'de resultaten van het onderzoek gepresenteerd.', correctAnswer: 'worden', hint: 'Passive present: worden + past participle.' },
          { before: '', after: 'kan worden geconcludeerd dat de aanpak succesvol was.', correctAnswer: 'Er', hint: 'Impersonal passive with "er" as placeholder subject.' },
          { before: 'Op basis van de gegevens', after: 'dit verband aannemelijk.', correctAnswer: 'lijkt', hint: 'Hedging: lijkt + adjective.' },
          { before: 'Hiermee', after: 'rekening worden gehouden bij toekomstige beslissingen.', correctAnswer: 'dient', hint: 'Formal equivalent of "moet": dienen te worden.' },
        ],
      },
    },
    {
      id: 'b2-fws-err-1',
      type: 'error-correction',
      instruction: 'Rewrite the sentence in a more formal register.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'We denken dat dit een goed idee is.',
            correctedSentence: 'Het lijkt aannemelijk dat dit een goede aanpak is.',
            errorExplanation: 'Replace "we denken" with an impersonal hedging phrase and use a more formal synonym for "goed idee".',
          },
          {
            incorrectSentence: 'Na dat ze de gegevens analyseerden, schreven ze een rapport.',
            correctedSentence: 'Na de analyse van de gegevens werd een rapport geschreven.',
            errorExplanation: 'Nominalize "analyseerden" → "de analyse van de gegevens" and use passive "werd geschreven" to avoid the personal pronoun.',
          },
          {
            incorrectSentence: 'Ze zeggen dat dit probleem moeilijk op te lossen is.',
            correctedSentence: 'Men stelt dat dit probleem moeilijk op te lossen is.',
            errorExplanation: '"Ze zeggen" is informal. "Men stelt" or "Er wordt gesteld" is the formal equivalent.',
          },
        ],
      },
    },
    {
      id: 'b2-fws-trans-1',
      type: 'translation',
      instruction: 'Translate into formal Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'It has been established that the new policy has led to significant improvements.',
            correctDutch: 'Er is vastgesteld dat het nieuwe beleid heeft geleid tot aanzienlijke verbeteringen.',
            acceptableAnswers: ['Er is aangetoond dat het nieuwe beleid heeft geleid tot significante verbeteringen.'],
            keyVocabulary: [{ dutch: 'vastgesteld', english: 'established' }, { dutch: 'aanzienlijke', english: 'significant / considerable' }],
          },
          {
            english: 'Based on the available data, it seems plausible that costs will decrease.',
            correctDutch: 'Op basis van de beschikbare gegevens lijkt het aannemelijk dat de kosten zullen dalen.',
            acceptableAnswers: ['Op basis van de beschikbare data lijkt het waarschijnlijk dat de kosten zullen afnemen.'],
            keyVocabulary: [{ dutch: 'aannemelijk', english: 'plausible' }, { dutch: 'dalen', english: 'decrease / fall' }],
          },
        ],
      },
    },
    {
      id: 'b2-fws-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short formal report paragraph (5–6 sentences) presenting a finding and a recommendation.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele rapportparagraaf met een bevinding en een aanbeveling.',
        context: 'Choose any workplace or study topic. Use impersonal constructions, at least one nominalization, and at least one hedging phrase.',
        guidelines: [
          'Avoid first-person pronouns (ik, wij); use "er", "men", or passive',
          'Include at least one nominalization (e.g. de implementatie, de beoordeling)',
          'Hedge at least one claim (lijkt, zou kunnen, er zijn aanwijzingen dat)',
          'End with a recommendation using "dient te" or "wordt aanbevolen"',
        ],
        sampleResponse: 'In dit rapport wordt de effectiviteit van het nieuwe trainingsprogramma beoordeeld. Op basis van de verzamelde gegevens lijkt het aannemelijk dat de deelname aanzienlijk is toegenomen. Er zijn aanwijzingen dat de kwaliteit van de uitvoering verbeterd is, al dient verder onderzoek dit te bevestigen. De implementatie van een evaluatiesysteem wordt dan ook sterk aanbevolen.',
      },
    },
  ],
};
