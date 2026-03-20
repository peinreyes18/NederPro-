import { Topic } from '@/content/types';

export const argumentPersuasion: Topic = {
  id: 'argument-persuasion',
  levelId: 'b2',
  order: 15,
  title: 'Argument & Persuasion Language',
  subtitle: 'Argumentatie en overtuiging',
  estimatedMinutes: 60,
  lessons: [
    {
      id: 'argument-1',
      title: 'Stating and Qualifying Claims',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Academic and formal Dutch argumentation uses a set of hedging and asserting expressions to signal the strength of a claim. Using the right strength of claim is as important as the claim itself.',
          explanation:
            'NT2 Programma II writing tasks require students to present and support arguments. Dutch academic writing uses specific verbs and modal constructions to signal how certain the writer is: from strong assertions ("het staat vast dat", "het is onomstotelijk bewezen") to soft hedges ("het lijkt erop dat", "men zou kunnen stellen"). Mismatching claim strength and evidence weakens an argument.',
        },
        {
          type: 'grammar-table',
          title: 'Claim strength spectrum',
          headers: ['Strength', 'Expression', 'Example'],
          rows: [
            ['Very strong', 'het staat vast dat / het is bewezen dat', 'Het staat vast dat roken kanker veroorzaakt.'],
            ['Strong', 'het is duidelijk dat / blijkt dat', 'Uit onderzoek blijkt dat de maatregel effectief is.'],
            ['Moderate', 'men kan stellen dat / het lijkt erop dat', 'Men kan stellen dat de situatie verbetert.'],
            ['Weak/hedged', 'het is mogelijk dat / zou kunnen', 'Het zou kunnen dat de kosten verder stijgen.'],
            ['Concession', 'toegegeven dat / hoewel / weliswaar', 'Weliswaar zijn er nadelen, maar de voordelen wegen zwaarder.'],
            ['Counter-argument', 'tegenstanders stellen dat / men kan tegenwerpen dat', 'Men kan tegenwerpen dat de kosten te hoog zijn.'],
          ],
          caption: 'Skilled arguers vary their claim strength deliberately: strong for well-supported facts, hedged for uncertain claims.',
        },
        {
          type: 'examples',
          title: 'Claim strength in formal writing',
          examples: [
            { dutch: 'Uit recent onderzoek blijkt onomstotelijk dat de maatregel het beoogde effect heeft gehad.', english: 'Recent research shows conclusively that the measure has had the intended effect.', highlight: 'blijkt onomstotelijk' },
            { dutch: 'Het lijkt erop dat de economische situatie zich stabiliseert, hoewel definitieve conclusies nog prematuur zijn.', english: 'It appears that the economic situation is stabilising, although definitive conclusions are still premature.', highlight: 'Het lijkt erop dat … hoewel' },
            { dutch: 'Weliswaar is de maatregel kostbaar, maar de maatschappelijke baten overtreffen de kosten.', english: 'Admittedly, the measure is costly, but the social benefits outweigh the costs.', highlight: 'Weliswaar … maar' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: '"Weliswaar … maar" — the concession structure',
          content: '"Weliswaar" (admittedly / it is true that) introduces a concession. It always pairs with "maar" (but) to signal the real point. This is a powerful structure for balanced argumentation:\n\n"Weliswaar zijn er nadelen, maar de voordelen zijn groter."\n\nThe real argument is always in the "maar" clause. Use "weliswaar" to acknowledge the opposition\'s point before refuting or outweighing it.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik denk dat iedereen het hiermee eens is.', correct: 'Men kan ervan uitgaan dat de meerderheid dit standpunt deelt.', explanation: 'Formal Dutch argumentation avoids "ik denk" (I think). Use impersonal constructions: "men kan stellen", "het valt te beargumenteren", "er is reden om aan te nemen dat".' },
            { incorrect: 'Dit bewijst dat mijn mening correct is.', correct: 'Dit ondersteunt het standpunt dat…', explanation: '"Dit bewijst" is too strong unless you have conclusive evidence. Academic writing prefers "ondersteunt", "wijst op", "suggereert" for partial evidence.' },
          ],
        },
      ],
    },
    {
      id: 'argument-2',
      title: 'Structuring an Argument: Thesis, Evidence, Rebuttal',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'A well-structured Dutch argument follows a recognisable pattern: claim → support → counter-argument → rebuttal → conclusion. Specific language signals each stage.',
          explanation:
            'The NT2 Programma II writing task (schrijfvaardigheid) assesses whether candidates can present a coherent, structured argument. Each structural element has characteristic language in formal Dutch. Examiners look for explicit signposting of each stage, not just correct grammar.',
        },
        {
          type: 'grammar-table',
          title: 'Argument structure with signpost language',
          headers: ['Stage', 'Function', 'Dutch expressions'],
          rows: [
            ['Thesis', 'State your position clearly', 'In dit betoog wordt verdedigd dat… / Centraal staat de stelling dat… / Ik betoog dat…'],
            ['Reason 1', 'First supporting reason', 'In de eerste plaats / Ten eerste / Om te beginnen'],
            ['Reason 2', 'Second supporting reason', 'Bovendien / Daarnaast / Ten tweede / Voorts'],
            ['Evidence', 'Back up with data/examples', 'Uit onderzoek blijkt dat… / Ter illustratie… / Zo toont … aan dat…'],
            ['Counter-argument', 'Acknowledge the other side', 'Tegenstanders stellen dat… / Men kan tegenwerpen dat… / Weliswaar…'],
            ['Rebuttal', 'Refute or outweigh counter-argument', 'Dit argument gaat echter voorbij aan… / Echter, dit negeert het feit dat… / Desalniettemin…'],
            ['Conclusion', 'Restate thesis + so what', 'Kortom / Al met al / Samenvattend / Concluderend kan worden gesteld dat…'],
          ],
        },
        {
          type: 'examples',
          title: 'A full argument in miniature',
          examples: [
            { dutch: 'Centraal staat de stelling dat de werkweek verkort moet worden.', english: '[Thesis] The central proposition is that the working week should be shortened.', highlight: 'Centraal staat de stelling dat' },
            { dutch: 'In de eerste plaats toont Noors onderzoek aan dat productiviteit niet daalt bij een kortere werkweek.', english: '[Reason + Evidence] First, Norwegian research shows that productivity does not fall with a shorter working week.', highlight: 'In de eerste plaats … toont aan dat' },
            { dutch: 'Men kan tegenwerpen dat dit niet geldt voor alle sectoren. Dit argument gaat echter voorbij aan de flexibiliteit die hybride roosters bieden.', english: '[Counter + Rebuttal] One might argue that this does not apply to all sectors. However, this argument overlooks the flexibility that hybrid schedules offer.', highlight: 'Men kan tegenwerpen … Dit argument gaat echter voorbij aan' },
            { dutch: 'Al met al wegen de voordelen voor werknemers en werkgevers zwaarder dan de nadelen.', english: '[Conclusion] All in all, the benefits for employees and employers outweigh the disadvantages.', highlight: 'Al met al' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Impersonal vs. first-person argumentation',
          content: 'Dutch academic writing allows two registers:\n\n1. Impersonal (preferred in reports/formal writing):\n"In dit betoog wordt verdedigd dat…" / "Men kan concluderen dat…"\n\n2. First person (acceptable in opinion pieces/columns):\n"Ik betoog dat…" / "Naar mijn mening…" / "Ik ben van mening dat…"\n\nThe NT2 exam writing task typically expects impersonal or mixed style. Avoid "ik vind" (too informal) — use "naar mijn mening" or "ik ben van mening dat" if you use first person.',
        },
      ],
    },
    {
      id: 'argument-3',
      title: 'Persuasive Techniques in Dutch Formal Writing',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Beyond logical structure, formal Dutch persuasion uses rhetorical techniques: rhetorical questions, appeal to authority, appeal to shared values, and escalating evidence.',
          explanation:
            'The NT2 Programma II reading comprehension tasks often include journalistic opinion pieces and editorials that use rhetorical techniques. Identifying these techniques — and using them appropriately in your own writing — demonstrates mastery of Dutch at C1 level, which is the target of NT2 Programma II.',
        },
        {
          type: 'grammar-table',
          title: 'Rhetorical techniques in Dutch',
          headers: ['Technique', 'Dutch name', 'Example'],
          rows: [
            ['Rhetorical question', 'retorische vraag', 'Wie wil nu een onveilige stad?'],
            ['Appeal to authority', 'beroep op autoriteit', 'Zoals hoogleraar De Vries aantoonde…'],
            ['Appeal to shared values', 'beroep op gedeelde waarden', 'Als we ons inzetten voor gelijkheid, dan…'],
            ['Tricolon (rule of three)', 'driedeling', 'Het plan is ondoordacht, onhaalbaar en onrechtvaardig.'],
            ['Concession then counterattack', 'toegeven-maar constructie', 'Weliswaar zijn er nadelen, maar…'],
            ['Urgency / call to action', 'oproep tot actie', 'Het is tijd om in actie te komen. Wacht niet langer.'],
            ['Statistics as proof', 'cijfermatig bewijs', 'Maar liefst 78% van de Nederlanders…'],
          ],
          caption: 'Reading comprehension at B2+ often asks you to identify which technique is used, not just what is being said.',
        },
        {
          type: 'examples',
          title: 'Rhetorical techniques in practice',
          examples: [
            { dutch: 'Wie durft nog te beweren dat klimaatverandering geen probleem is?', english: '[Rhetorical question] Who still dares to claim that climate change is not a problem?', highlight: 'Wie durft nog te beweren dat' },
            { dutch: 'Maar liefst 83% van de ondervraagden geeft aan ontevreden te zijn. Cijfers liegen niet.', english: '[Statistics] As many as 83% of respondents say they are dissatisfied. Numbers don\'t lie.', highlight: 'Maar liefst … Cijfers liegen niet' },
            { dutch: 'Het systeem is inefficiënt, duur en onrechtvaardig.', english: '[Tricolon] The system is inefficient, expensive, and unjust.', highlight: 'inefficiënt, duur en onrechtvaardig' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Writing a formal opinion piece or business proposal',
          examples: [
            { dutch: 'In de eerste plaats dient te worden vastgesteld dat de huidige situatie onhoudbaar is.', english: 'First of all, it must be established that the current situation is untenable.' },
            { dutch: 'Weliswaar vergt de invoering een investering, maar de return on investment is aantoonbaar positief.', english: 'Admittedly, implementation requires an investment, but the return on investment is demonstrably positive.' },
            { dutch: 'Naar de mening van de auteur vormt dit voorstel de enige reële uitweg uit de huidige impasse.', english: 'In the author\'s view, this proposal constitutes the only realistic way out of the current deadlock.' },
            { dutch: 'Kortom: dit is geen kwestie van willen, maar van moeten.', english: 'In short: this is not a question of wanting, but of having to.' },
          ],
          note: 'Opinion pieces in Dutch newspapers (NRC, de Volkskrant, Trouw) are excellent reading material for B2+ argumentation language. The NT2 Programma II reading tasks frequently use excerpts from these sources.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'argument-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the expression that best fits the indicated role in the argument.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '[Thesis] ___ dat investeren in onderwijs de beste garantie is voor economische groei.',
            options: [
              'Ik vind het zo',
              'Centraal staat de stelling',
              'Het is waar',
              'Iedereen weet',
            ],
            correctIndex: 1,
            explanation: '"Centraal staat de stelling dat…" is the formal academic way to introduce a thesis in Dutch.',
          },
          {
            question: '[Counter-argument] ___ dat de maatregel te kostbaar is voor kleine bedrijven.',
            options: [
              'Maar sommigen zeggen',
              'Men kan tegenwerpen',
              'Het is misschien zo',
              'Eigenlijk is het zo',
            ],
            correctIndex: 1,
            explanation: '"Men kan tegenwerpen dat…" (one might argue that / one can counter that) is the standard formal counter-argument introducer.',
          },
          {
            question: '[Evidence] ___ recent Europees onderzoek ___ dat de uitstoot met 30% is gedaald.',
            options: [
              'Uit … blijkt', 'Van … is bewezen', 'Door … ziet men', 'In … staat',
            ],
            correctIndex: 0,
            explanation: '"Uit [source] blijkt dat…" (it emerges from / research shows that) is the standard academic evidence formula.',
          },
          {
            question: '[Concession + rebuttal] ___ zijn er nadelen, ___ de voordelen zijn groter.',
            options: [
              'Hoewel … toch', 'Weliswaar … maar', 'Ofschoon … echter', 'Al … alhoewel',
            ],
            correctIndex: 1,
            explanation: '"Weliswaar … maar" is the classical concession-rebuttal structure in Dutch argumentation.',
          },
          {
            question: '[Conclusion] ___ kan worden gesteld dat het voorgestelde beleid de juiste richting inslaat.',
            options: [
              'Ik denk', 'Samenvattend', 'Eigenlijk', 'Sowieso',
            ],
            correctIndex: 1,
            explanation: '"Samenvattend kan worden gesteld dat…" (summing up, it can be stated that) is a formal, impersonal conclusion marker.',
          },
        ],
      },
    },
    {
      id: 'argument-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct argument signpost from the options.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'staat de stelling dat meer investering in duurzame energie noodzakelijk is.',
            correctAnswer: 'Centraal',
            hint: 'Centraal staat de stelling dat = the central proposition is that',
            acceptableAnswers: ['Centraal'],
          },
          {
            before: 'In de eerste plaats toont onderzoek aan dat de aanpak werkt.',
            after: 'is het kostenefficiënter dan alternatieve maatregelen.',
            correctAnswer: 'Bovendien',
            hint: 'Second point / additionally = Bovendien / Voorts / Tevens',
            acceptableAnswers: ['Bovendien', 'Voorts', 'Tevens', 'Daarnaast'],
          },
          {
            before: '',
            after: 'zijn er uitvoeringsrisico\'s, maar die wegen niet op tegen de verwachte baten.',
            correctAnswer: 'Weliswaar',
            hint: 'Weliswaar … maar = admittedly … but',
            acceptableAnswers: ['Weliswaar'],
          },
          {
            before: '',
            after: 'blijkt uit de cijfers dat de maatregel het beoogde effect heeft.',
            correctAnswer: 'Uit onderzoek',
            hint: 'Uit [source] blijkt dat = research/data shows that',
            acceptableAnswers: ['Uit onderzoek', 'Uit de data', 'Uit de resultaten'],
          },
          {
            before: '',
            after: 'kan worden gesteld dat het beleid bijsturing behoeft.',
            correctAnswer: 'Concluderend',
            hint: 'Concluderend / Samenvattend / Kortom = in conclusion',
            acceptableAnswers: ['Concluderend', 'Samenvattend', 'Kortom'],
          },
        ],
      },
    },
    {
      id: 'argument-ex-3',
      type: 'multiple-choice',
      instruction: 'Identify the rhetorical technique used in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Wie wil er nu in een stad wonen waar de luchtkwaliteit gevaarlijk is?" — What technique is used?',
            options: [
              'Appeal to authority',
              'Rhetorical question',
              'Tricolon',
              'Statistics as proof',
            ],
            correctIndex: 1,
            explanation: 'A rhetorical question (retorische vraag) — it does not expect an answer. It implies "nobody wants to live in such a city" and is designed to persuade.',
          },
          {
            question: '"Maar liefst 72% van de Nederlanders steunt het voorstel." — What technique?',
            options: [
              'Appeal to shared values',
              'Concession',
              'Statistics as proof',
              'Urgency call',
            ],
            correctIndex: 2,
            explanation: '"Maar liefst" (as many as) emphasises the high number. This is cijfermatig bewijs (statistical proof).',
          },
          {
            question: '"Het plan is onrealistisch, onhaalbaar en onbetaalbaar." — What technique?',
            options: [
              'Rhetorical question',
              'Tricolon (rule of three)',
              'Concession-rebuttal',
              'Appeal to authority',
            ],
            correctIndex: 1,
            explanation: 'Three adjectives in a row — a tricolon (driedeling). The rhythm of three creates emphasis and memorability.',
          },
          {
            question: '"Zoals professor Van der Berg heeft aangetoond in zijn studie uit 2023…" — What technique?',
            options: [
              'Statistics as proof',
              'Urgency call',
              'Appeal to authority',
              'Rhetorical question',
            ],
            correctIndex: 2,
            explanation: 'Citing an expert by name and study is an appeal to authority (beroep op autoriteit). It lends credibility to the claim.',
          },
        ],
      },
    },
    {
      id: 'argument-ex-4',
      type: 'error-correction',
      instruction: 'Each sentence has a formal register or argument structure error. Correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik vind dat de overheid meer moet doen voor klimaat.',
            correctedSentence: 'Men kan betogen dat de overheid meer verantwoordelijkheid dient te nemen op het gebied van klimaatbeleid.',
            errorExplanation: '"Ik vind" is too informal for formal argumentation. Use "men kan betogen dat", "naar mijn mening" (if first person is required), or impersonal constructions.',
          },
          {
            incorrectSentence: 'Dit bewijst dat mijn standpunt goed is.',
            correctedSentence: 'Dit ondersteunt het standpunt dat de maatregel effectief is.',
            errorExplanation: '"Bewijst" is too strong unless you have conclusive evidence. Use "ondersteunt", "wijst op", or "suggereert". Also avoid "mijn standpunt" in formal impersonal writing.',
          },
          {
            incorrectSentence: 'Maar tegenstanders zeggen dat de kosten te hoog zijn.',
            correctedSentence: 'Men kan tegenwerpen dat de kosten te hoog zijn.',
            errorExplanation: '"Maar … zeggen" is conversational. In formal argumentation, introduce counter-arguments with "Men kan tegenwerpen dat" or "Tegenstanders stellen dat" (without "maar" at the start).',
          },
          {
            incorrectSentence: 'Sowieso is het beleid niet goed genoeg.',
            correctedSentence: 'Al met al voldoet het beleid niet aan de gestelde eisen.',
            errorExplanation: '"Sowieso" is a colloquial word that does not belong in formal writing. Replace with "al met al", "kortom", or "hoe dan ook" in formal register.',
          },
        ],
      },
    },
    {
      id: 'argument-ex-5',
      type: 'writing-prompt',
      instruction: 'Write a formal opinion piece (7–9 sentences) arguing for or against a topic of your choice, using the full argument structure: thesis → reasons → evidence → counter-argument → rebuttal → conclusion.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formeel betoog van 7–9 zinnen over een maatschappelijk thema. Gebruik de volledige argumentatiestructuur: stelling → argumenten → bewijs → tegenargument → weerlegging → conclusie.',
        context: 'Suggested topics: the four-day working week, mandatory voting, free public transport, stricter social media regulation, a universal basic income.',
        guidelines: [
          'Open with "Centraal staat de stelling dat…" or "In dit betoog wordt verdedigd dat…"',
          'Use "In de eerste plaats" and "Bovendien" for your two main arguments',
          'Support one argument with "Uit onderzoek blijkt dat…" or "Zo toont … aan dat…"',
          'Acknowledge the opposition with "Men kan tegenwerpen dat…" or "Weliswaar…"',
          'Rebut with "Dit argument gaat echter voorbij aan…" or "Desalniettemin…"',
          'Conclude with "Kortom" or "Al met al"',
          'Use impersonal style throughout',
        ],
        sampleResponse: 'Centraal staat de stelling dat gratis openbaar vervoer ingevoerd moet worden in Nederland. In de eerste plaats zou dit de filedruk op de snelwegen aanzienlijk verminderen. Bovendien is mobiliteit een grondrecht, en mag het niet afhangen van iemands inkomen. Uit onderzoek in Luxemburg, het eerste land ter wereld met gratis openbaar vervoer, blijkt dat het gebruik met maar liefst 40% steeg. Men kan tegenwerpen dat de kosten voor de overheid te hoog zijn. Dit argument gaat echter voorbij aan de besparingen op wegonderhoud en de maatschappelijke kosten van luchtvervuiling. Weliswaar vergt de invoering een aanzienlijke investering, maar de maatschappelijke baten zijn groter. Al met al is gratis openbaar vervoer een investering in de toekomst van ons land.',
      },
    },
    {
      id: 'argument-ex-6',
      type: 'listening-comprehension',
      instruction: 'Listen to the debate fragment and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'Two politicians debate a proposal for stricter social media regulation in a radio programme.',
        audioText: 'Presentator: U bent voorstander van strengere regulering van sociale media. Kunt u uw standpunt toelichten? Politica A: Centraal staat de stelling dat ongereguleerd sociale mediagebrek aan aanspreekbaarheid heeft geleid tot ernstige maatschappelijke schade. In de eerste plaats toont onderzoek van de Universiteit Utrecht aan dat desinformatie via sociale media de democratie ondermijnt. Bovendien worden kwetsbare jongeren blootgesteld aan schadelijke inhoud. Politicus B: Men kan tegenwerpen dat regulering censuur in de hand werkt. Politica A: Dit argument gaat echter voorbij aan het feit dat ook de drukpers gereguleerd is, en dat niemand dat censuur noemt. Weliswaar is er een risico op overregulering, maar dat risico is beheersbaar. Kortom: de maatschappelijke kosten van niets doen zijn groter dan de risico\'s van regulering.',
        maxPlays: 2,
        questions: [
          {
            question: 'What evidence does Politician A use to support her first argument?',
            options: [
              'A personal anecdote about young people online.',
              'Research from Utrecht University about disinformation.',
              'Statistics on social media usage in the Netherlands.',
              'An appeal to shared European values.',
            ],
            correctIndex: 1,
            explanation: '"Onderzoek van de Universiteit Utrecht toont aan dat…" — she uses academic research (appeal to authority + evidence) to support her claim about disinformation.',
          },
          {
            question: 'What counter-argument does Politician B raise?',
            options: [
              'The costs are too high.',
              'Regulation could enable censorship.',
              'Young people are not vulnerable.',
              'Social media is already regulated.',
            ],
            correctIndex: 1,
            explanation: '"Men kan tegenwerpen dat regulering censuur in de hand werkt." — the counter-argument is that regulation could lead to censorship.',
          },
          {
            question: 'How does Politician A rebut the censorship argument?',
            options: [
              'She says censorship is acceptable in some cases.',
              'She compares it to the already-regulated press.',
              'She dismisses the concern entirely.',
              'She says the risk is too small to matter.',
            ],
            correctIndex: 1,
            explanation: '"Dit argument gaat voorbij aan het feit dat ook de drukpers gereguleerd is." She uses an analogy — if press regulation is not censorship, neither is social media regulation.',
          },
        ],
      },
    },
  ],
};
