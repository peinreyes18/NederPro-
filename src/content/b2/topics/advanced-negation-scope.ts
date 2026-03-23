import { Topic } from '@/content/types';

export const advancedNegationScope: Topic = {
  id: 'advanced-negation-scope',
  levelId: 'b2',
  order: 14,
  title: 'Advanced Negation & Scope',
  subtitle: 'Gevorderde ontkenning en bereik',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'adv-negation-1',
      title: 'Partial Negation and Scope',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The scope of negation — what exactly is being negated — is determined by the position of "niet" and the stress pattern. Different positions produce crucially different meanings.',
          explanation:
            'At B2 level, the challenge of negation shifts from choosing between "niet" and "geen" (covered at B1) to understanding how the position of the negator and the use of partial negators ("niet…maar", "niet alleen…maar ook") affect the meaning of a sentence. Misplacing "niet" or choosing the wrong negative scope can lead to serious misunderstandings in formal texts.',
        },
        {
          type: 'grammar-table',
          title: 'Scope of negation with niet',
          headers: ['Sentence', 'What is negated', 'Meaning'],
          rows: [
            ['Ik heb hem gisteren niet gezien.', 'the whole predicate (seeing him yesterday)', 'I did not see him yesterday.'],
            ['Niet ik heb hem gisteren gezien.', 'the subject (ik)', 'It wasn\'t me who saw him yesterday (someone else did).'],
            ['Ik heb hem niet gisteren gezien.', 'the time (gisteren)', 'I didn\'t see him yesterday (but at another time).'],
            ['Ik heb niet hem gisteren gezien.', 'the object (hem)', 'It wasn\'t him I saw yesterday (but someone else).'],
          ],
          caption: 'In speech, stress makes scope clear. In writing, word order and context carry this information.',
        },
        {
          type: 'examples',
          title: 'Scope contrast in context',
          examples: [
            { dutch: 'De minister heeft niet besloten de belasting te verhogen.', english: 'The minister did not decide to raise the tax. (no decision made)', highlight: 'niet besloten' },
            { dutch: 'Niet de minister heeft besloten de belasting te verhogen.', english: 'It wasn\'t the minister who decided to raise the tax. (someone else did)', highlight: 'Niet de minister' },
            { dutch: 'De minister heeft besloten de belasting niet te verhogen.', english: 'The minister decided NOT to raise the tax. (decision against raising it)', highlight: 'niet te verhogen' },
          ],
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'The "besloten niet te" vs "niet besloten te" distinction',
          content: '"Besloten niet te + infinitive" means a decision was made against something:\n→ "Ze hebben besloten de fabriek niet te sluiten." = They decided NOT to close the factory.\n\n"Niet besloten te + infinitive" means no decision was made:\n→ "Ze hebben niet besloten de fabriek te sluiten." = They have not decided to close the factory.\n\nThis contrast is frequently tested in NT2 reading comprehension.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De overheid heeft niet besloten te bezuinigen. (intended: they decided against cuts)', correct: 'De overheid heeft besloten niet te bezuinigen.', explanation: 'To express a decision against something, "niet" must come AFTER "besloten" and before the infinitive.' },
            { incorrect: 'Ik raad dit aan iedereen aan.', correct: 'Ik raad dit niet aan iedereen aan.', explanation: '"Niet aan iedereen" narrows the scope of negation — it means "not to everyone" rather than a full negation. Make sure the separable prefix "aan" stays at the end.' },
          ],
        },
      ],
    },
    {
      id: 'adv-negation-2',
      title: 'Formal Negative Constructions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Formal Dutch uses a set of negative constructions beyond "niet" and "geen": "geenszins", "allerminst", "koste wat kost niet", "zonder…te", "in geen geval", and double-scope negation with "noch…noch".',
          explanation:
            'Written formal Dutch, especially in policy documents, academic texts, and legal language, employs a richer inventory of negation than everyday speech. These forms signal precision and formality. Recognising them in reading and using them appropriately in writing are both tested at B2 level.',
        },
        {
          type: 'grammar-table',
          title: 'Formal negative expressions',
          headers: ['Expression', 'Meaning', 'Register', 'Example'],
          rows: [
            ['geenszins', 'by no means / not at all', 'very formal', 'Dit is geenszins wat wij beoogden.'],
            ['allerminst', 'least of all / not in the slightest', 'formal', 'De resultaten zijn allerminst bemoedigend.'],
            ['in geen geval', 'in no case / under no circumstances', 'formal', 'In geen geval mag dit worden vrijgegeven.'],
            ['koste wat kost niet', 'at all costs (negative)', 'formal/emphatic', 'Dit mag koste wat kost niet gebeuren.'],
            ['noch … noch', 'neither … nor', 'formal', 'Noch de directeur noch de raad was op de hoogte.'],
            ['zonder … te + inf.', 'without doing something', 'neutral/formal', 'Hij vertrok zonder een woord te zeggen.'],
            ['niet zozeer … als wel', 'not so much … as', 'formal', 'Het is niet zozeer een financieel als wel een organisatorisch probleem.'],
            ['laat staan', 'let alone', 'semi-formal', 'Ze begrijpen de vraag niet, laat staan het antwoord.'],
          ],
        },
        {
          type: 'examples',
          title: 'Formal negation in professional texts',
          examples: [
            { dutch: 'Dit standpunt is geenszins in overeenstemming met de feiten.', english: 'This position is by no means in accordance with the facts.', highlight: 'geenszins' },
            { dutch: 'Noch de timing noch de communicatie was adequaat.', english: 'Neither the timing nor the communication was adequate.', highlight: 'Noch … noch' },
            { dutch: 'Het is niet zozeer een gebrek aan middelen als wel een gebrek aan politieke wil.', english: 'It is not so much a lack of resources as a lack of political will.', highlight: 'niet zozeer … als wel' },
            { dutch: 'Ze hebben de vergadering verlaten zonder een toelichting te geven.', english: 'They left the meeting without giving any explanation.', highlight: 'zonder … te geven' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: '"Noch … noch" — word order',
          content: '"Noch … noch" (neither … nor) with subjects triggers singular verb agreement:\n\n"Noch de directeur noch de raad was aanwezig." (singular was, not waren)\n\nHowever, when the nearest subject is plural, plural agreement is also accepted:\n"Noch de directeur noch de leden waren aanwezig."\n\nIn formal writing, singular is the safer choice when the subjects are both singular.',
        },
      ],
    },
    {
      id: 'adv-negation-3',
      title: 'Negation in Complex Clauses',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'In complex sentences with embedded clauses, negation can scope over the main clause, the embedded clause, or only part of either. Getting this right requires careful attention to clause boundaries.',
          explanation:
            'When negation occurs in a main clause containing a subordinate "dat"-clause or infinitive construction, the scope can be ambiguous. Dutch formal style resolves this ambiguity with precise word order and punctuation. Understanding these patterns is critical for correctly interpreting complex journalistic and legal texts.',
        },
        {
          type: 'grammar-table',
          title: 'Negation scope in complex sentences',
          headers: ['Sentence', 'Scope', 'Interpretation'],
          rows: [
            ['Ik beweer niet dat hij liegt.', 'main clause (beweer)', 'I\'m not claiming that he is lying. (I may believe it, but not claiming it)'],
            ['Ik beweer dat hij niet liegt.', 'embedded clause (liegt)', 'I claim that he is NOT lying. (a claim about his honesty)'],
            ['Ze verwacht niet dat hij belt.', 'main clause (verwacht)', 'She doesn\'t expect him to call.'],
            ['Ze verwacht dat hij niet belt.', 'embedded clause (belt)', 'She expects that he will NOT call.'],
            ['Het is niet duidelijk of hij komt.', 'main clause + uncertainty', 'It is not clear whether he will come.'],
          ],
        },
        {
          type: 'examples',
          title: 'Scope in formal argumentation',
          examples: [
            { dutch: 'De minister ontkende niet dat er problemen waren, maar stelde dat ze beheersbaar zijn.', english: 'The minister did not deny that there were problems, but stated that they are manageable.', highlight: 'ontkende niet dat' },
            { dutch: 'De rechtbank oordeelde dat de contractant niet aan zijn verplichtingen had voldaan.', english: 'The court ruled that the contractor had NOT fulfilled his obligations.', highlight: 'niet aan zijn verplichtingen had voldaan' },
            { dutch: 'Het valt niet te ontkennen dat de situatie ernstig is.', english: 'It cannot be denied that the situation is serious.', highlight: 'valt niet te ontkennen' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Formal correspondence — precise negation',
          examples: [
            { dutch: 'Wij betwisten geenszins de kwaliteit van uw product, maar betreuren de vertraging in de levering.', english: 'We by no means dispute the quality of your product, but regret the delay in delivery.' },
            { dutch: 'In geen geval kan worden ingestemd met de voorgestelde wijzigingen zonder nader overleg.', english: 'Under no circumstances can the proposed changes be agreed to without further consultation.' },
            { dutch: 'Het voorstel houdt geen rekening met de gevolgen voor de kleine ondernemer, laat staan voor de consument.', english: 'The proposal does not take into account the consequences for small businesses, let alone for the consumer.' },
          ],
          note: 'In formal disputes and contracts, precise negation is legally significant. "Geenszins" and "in geen geval" are stronger than plain "niet" and signal a firm position.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'adv-negation-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the sentence that conveys the intended meaning.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Intended meaning: "The committee decided not to publish the report."',
            options: [
              'De commissie heeft niet besloten het rapport te publiceren.',
              'De commissie heeft besloten het rapport niet te publiceren.',
              'De commissie heeft het rapport niet besloten te publiceren.',
              'Niet de commissie heeft besloten het rapport te publiceren.',
            ],
            correctIndex: 1,
            explanation: '"besloten … niet te publiceren" = decided NOT to publish. Option A means "has not yet decided to publish" (different).',
          },
          {
            question: 'Intended meaning: "It was not the director who authorised the payment."',
            options: [
              'De directeur heeft de betaling niet geautoriseerd.',
              'De directeur heeft niet de betaling geautoriseerd.',
              'Niet de directeur heeft de betaling geautoriseerd.',
              'De directeur heeft de betaling geenszins geautoriseerd.',
            ],
            correctIndex: 2,
            explanation: '"Niet de directeur" negates the subject — it wasn\'t the director (someone else authorised it).',
          },
          {
            question: 'Which sentence uses "geenszins" correctly in formal register?',
            options: [
              'Dit is geenszins wat wij hebben bedoeld.',
              'Geenszins wij hebben dit bedoeld.',
              'Wij hebben geenszins dit bedoeld niet.',
              'Dit is geenszins niet wat wij bedoelden.',
            ],
            correctIndex: 0,
            explanation: '"Geenszins" replaces "niet" entirely — do not add "niet" after it. Word order: "Dit is geenszins + rest of predicate."',
          },
          {
            question: 'Choose the correct "noch … noch" sentence.',
            options: [
              'Noch de president noch de ministers waren aanwezig.',
              'Noch de president noch de ministers was aanwezig.',
              'De president noch ministers waren aanwezig.',
              'Noch de president, noch de ministers, waren aanwezig.',
            ],
            correctIndex: 0,
            explanation: '"Noch … noch" with a plural nearest subject ("de ministers") takes plural agreement ("waren"). Note: "de president" is singular, but since the nearest subject "de ministers" is plural, "waren" is accepted. No comma between the two "noch" elements.',
          },
        ],
      },
    },
    {
      id: 'adv-negation-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct formal negative expression.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het besluit mag',
            after: 'worden vrijgegeven aan de pers.',
            correctAnswer: 'in geen geval',
            hint: 'in geen geval = under no circumstances',
            acceptableAnswers: ['in geen geval', 'geenszins'],
          },
          {
            before: 'Het is',
            after: 'een financieel als wel een organisatorisch probleem.',
            correctAnswer: 'niet zozeer',
            hint: 'niet zozeer … als wel = not so much … as',
            acceptableAnswers: ['niet zozeer'],
          },
          {
            before: 'De resultaten zijn',
            after: 'bemoedigend voor de toekomst van het project.',
            correctAnswer: 'allerminst',
            hint: 'allerminst = least of all / not in the slightest',
            acceptableAnswers: ['allerminst', 'geenszins'],
          },
          {
            before: 'Ze verliet de vergadering',
            after: 'een reden op te geven.',
            correctAnswer: 'zonder',
            hint: 'zonder … te + infinitive = without doing something',
            acceptableAnswers: ['zonder'],
          },
          {
            before: 'Ze begrijpt de theorie nauwelijks,',
            after: 'de praktische toepassing.',
            correctAnswer: 'laat staan',
            hint: 'laat staan = let alone',
            acceptableAnswers: ['laat staan'],
          },
        ],
      },
    },
    {
      id: 'adv-negation-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence contains a negation error. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De directeur heeft niet besloten de fabriek te sluiten. (intended: decided against closing)',
            correctedSentence: 'De directeur heeft besloten de fabriek niet te sluiten.',
            errorExplanation: 'To express a decision against an action, "niet" must follow "besloten" and precede the infinitive: "besloten … niet te sluiten".',
          },
          {
            incorrectSentence: 'Dit standpunt is geenszins niet in lijn met ons beleid.',
            correctedSentence: 'Dit standpunt is geenszins in lijn met ons beleid.',
            errorExplanation: '"Geenszins" already means "not at all" — adding "niet" creates a double negation that is incorrect in formal Dutch.',
          },
          {
            incorrectSentence: 'Noch de minister noch de staatssecretaris waren beschikbaar voor commentaar.',
            correctedSentence: 'Noch de minister noch de staatssecretaris was beschikbaar voor commentaar.',
            errorExplanation: 'With "noch … noch" and two singular subjects, the verb takes singular agreement: "was", not "waren".',
          },
          {
            incorrectSentence: 'Ze vertrokken niet zonder te zeggen iets.',
            correctedSentence: 'Ze vertrokken niet zonder iets te zeggen.',
            errorExplanation: 'In "zonder … te + infinitive" constructions, the object ("iets") comes before "te + infinitive".',
          },
        ],
      },
    },
    {
      id: 'adv-negation-ex-4',
      type: 'translation',
      instruction: 'Translate into formal Dutch using precise negative constructions.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The board decided not to proceed with the merger.',
            correctDutch: 'De raad heeft besloten niet door te gaan met de fusie.',
            acceptableAnswers: ['De raad heeft besloten niet door te gaan met de fusie.', 'De raad heeft besloten de fusie niet door te zetten.'],
          },
          {
            english: 'This proposal is by no means acceptable to us.',
            correctDutch: 'Dit voorstel is geenszins aanvaardbaar voor ons.',
            acceptableAnswers: ['Dit voorstel is geenszins aanvaardbaar voor ons.', 'Dit voorstel is voor ons geenszins acceptabel.'],
          },
          {
            english: 'Neither the time nor the location suits us.',
            correctDutch: 'Noch het tijdstip noch de locatie past ons.',
            acceptableAnswers: ['Noch het tijdstip noch de locatie past ons.', 'Noch de tijd noch de locatie is geschikt voor ons.'],
          },
          {
            english: 'It is not so much a technical problem as an organisational one.',
            correctDutch: 'Het is niet zozeer een technisch als wel een organisatorisch probleem.',
            acceptableAnswers: ['Het is niet zozeer een technisch als wel een organisatorisch probleem.'],
          },
        ],
      },
    },
    {
      id: 'adv-negation-ex-5',
      type: 'writing-prompt',
      instruction: 'Write a formal letter of objection (5–7 sentences) responding to a proposal you disagree with. Use at least three advanced negative expressions.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele bezwaarbrief van 5–7 zinnen over een voorstel dat u afwijst. Gebruik minstens drie gevorderde ontkennende uitdrukkingen.',
        context: 'Imagine you are a business owner objecting to a proposed new regulation, a resident opposing a local construction plan, or a professional disagreeing with a policy change.',
        guidelines: [
          'Use "geenszins" or "allerminst" at least once',
          'Use "in geen geval" or "noch … noch" at least once',
          'Use a scope-specific negation (e.g. "besloten … niet te", "niet zozeer … als wel")',
          'Maintain formal register throughout (passive, "men", "wij" not "ik")',
          'Conclude with a formal request or demand',
        ],
        sampleResponse: 'Geachte commissie, wij schrijven u naar aanleiding van het voorgestelde bouwplan aan de Keizersgracht. Wij zijn allerminst overtuigd van de noodzaak van dit ingrijpende plan. Noch de omwonenden noch de lokale ondernemers zijn geraadpleegd in de planningsfase. Het is geenszins in overeenstemming met het geldende bestemmingsplan. Het betreft niet zozeer esthetische bezwaren als wel fundamentele bezwaren ten aanzien van de verkeersafwikkeling en leefbaarheid. In geen geval kan worden ingestemd met de voorgestelde uitvoering zonder aanvullend overleg. Wij verzoeken u derhalve het voorstel in heroverweging te nemen.',
      },
    },
    {
      id: 'adv-negation-ex-6',
      type: 'listening-comprehension',
      instruction: 'Listen to the formal policy statement and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'A government spokesperson reads a formal statement about a controversial policy decision.',
        audioText: 'De minister heeft vandaag een verklaring afgelegd. Hij benadrukte dat de overheid geenszins van plan is de zorgpremies opnieuw te verhogen. In geen geval zullen daartoe besluiten worden genomen zonder raadpleging van het parlement. Het gaat hier niet zozeer om een financiële als wel om een politieke afweging. Noch de coalitie noch de oppositie is bereid dit onderwerp te laten rusten. De minister vertrok zonder verdere vragen te beantwoorden.',
        maxPlays: 2,
        questions: [
          {
            question: 'What does "geenszins van plan is … te verhogen" tell us about the minister\'s intention?',
            options: [
              'He is considering raising health insurance premiums.',
              'He is by no means planning to raise health insurance premiums.',
              'He has already decided to raise premiums.',
              'He is unsure about the premium policy.',
            ],
            correctIndex: 1,
            explanation: '"Geenszins van plan zijn om te + inf." = to have absolutely no intention of doing something. The minister firmly rules out a premium increase.',
          },
          {
            question: 'What does "niet zozeer … als wel" tell us about the nature of the decision?',
            options: [
              'It is primarily a financial decision.',
              'It is primarily a political, rather than financial, consideration.',
              'Both financial and political factors are equally important.',
              'Neither factor is relevant.',
            ],
            correctIndex: 1,
            explanation: '"Niet zozeer een financiële als wel een politieke afweging" = not so much a financial as a political consideration. The political dimension is highlighted.',
          },
          {
            question: 'How did the minister leave the press conference?',
            options: [
              'He answered all questions thoroughly.',
              'He left without answering further questions.',
              'He left after giving a written statement.',
              'He refused to give any statement.',
            ],
            correctIndex: 1,
            explanation: '"De minister vertrok zonder verdere vragen te beantwoorden." = The minister left without answering further questions. "Zonder … te + inf." construction.',
          },
        ],
      },
    },
  ],
};
