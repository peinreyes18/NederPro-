import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam1: ExamPracticeTest = {
  id: 'knm-practice-1',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 1',
  description:
    'Kennis van de Nederlandse Maatschappij (KNM) practice exam covering Dutch customs, politics, geography, healthcare, education, waste management, housing, work, and services.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Customs & Social Norms ──
    {
      id: 'knm-1-customs-social',
      title: 'Gewoonten en Sociale Normen',
      instructions:
        'Beantwoord de volgende vragen over Nederlandse gewoonten en sociale normen.',
      questions: [
        {
          id: 'knm-1-q1',
          type: 'multiple-choice',
          question:
            'U wordt uitgenodigd voor een verjaardag bij een Nederlandse collega thuis. Wat doet u?',
          options: [
            'U brengt een cadeau mee en feliciteert de jarige als eerste',
            'U gaat zonder cadeau want dat is normaal in Nederland',
            'U komt een uur later omdat dat gezellig is',
          ],
          correctIndex: 0,
          topicArea: 'customs',
        },
        {
          id: 'knm-1-q2',
          type: 'multiple-choice',
          question:
            'U rijdt met de fiets en u rijdt per ongeluk een voetganger omver. Wat doet u?',
          options: [
            'U rijdt snel weg want u heeft het druk',
            'U stopt en vraagt of de voetganger gewond is en helpt hem',
            'U roept dat de voetganger moet uitkijken',
          ],
          correctIndex: 1,
          topicArea: 'social-norms',
        },
        {
          id: 'knm-1-q3',
          type: 'true-false',
          question:
            'In Nederland is het normaal om een afspraak te maken voordat u iemand thuis bezoekt.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'customs',
        },
        {
          id: 'knm-1-q4',
          type: 'multiple-choice',
          question:
            'Uw buurman maakt elke avond heel veel lawaai. U kunt niet slapen. Wat doet u als eerste?',
          options: [
            'U belt direct de politie',
            'U gaat naar uw buurman en praat met hem over het lawaai',
            'U doet niets want buren mogen lawaai maken',
          ],
          correctIndex: 1,
          topicArea: 'social-norms',
        },
        {
          id: 'knm-1-q5',
          type: 'true-false',
          question:
            'In Nederland betalen mannen en vrouwen op een eerste afspraakje altijd elk de helft.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'customs',
        },
      ],
    },

    // ── Section 2: Politics & Government ──
    {
      id: 'knm-1-politics',
      title: 'Politiek en Bestuur',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse politiek en het bestuur.',
      questions: [
        {
          id: 'knm-1-q6',
          type: 'multiple-choice',
          question: 'Hoe vaak zijn er verkiezingen voor de Tweede Kamer in Nederland?',
          options: [
            'Elke vier jaar, tenzij de Tweede Kamer eerder wordt ontbonden',
            'Elke twee jaar',
            'Elke zes jaar',
          ],
          correctIndex: 0,
          topicArea: 'politics',
        },
        {
          id: 'knm-1-q7',
          type: 'multiple-choice',
          question: 'Wat is de taak van de Eerste Kamer?',
          options: [
            'Wetten maken',
            'Wetten controleren die de Tweede Kamer heeft aangenomen',
            'De minister-president kiezen',
          ],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-1-q8',
          type: 'true-false',
          question: 'De koning of koningin heeft in Nederland de meeste politieke macht.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-1-q9',
          type: 'multiple-choice',
          question:
            'Farrukh wil klagen over de gemeente. Hij vindt dat de gemeente oneerlijk heeft gehandeld. Waar kan hij terecht?',
          options: [
            'Bij de Nationale Ombudsman',
            'Bij de Tweede Kamer',
            'Bij de minister-president',
          ],
          correctIndex: 0,
          topicArea: 'rights',
        },
        {
          id: 'knm-1-q10',
          type: 'multiple-choice',
          question: 'Welk document bewijst dat u in Nederland woont?',
          options: [
            'Het paspoort',
            'De DigiD',
            'Het uittreksel van de Basisregistratie Personen (BRP)',
          ],
          correctIndex: 2,
          topicArea: 'rights',
        },
        {
          id: 'knm-1-q11',
          type: 'true-false',
          question:
            'In Nederland mag u stemmen bij gemeenteraadsverkiezingen als u vijf jaar legaal in Nederland woont.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'politics',
        },
      ],
    },

    // ── Section 3: Geography & History ──
    {
      id: 'knm-1-geography-history',
      title: 'Aardrijkskunde en Geschiedenis',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse aardrijkskunde en geschiedenis.',
      questions: [
        {
          id: 'knm-1-q12',
          type: 'multiple-choice',
          question: 'Waar ligt Amsterdam?',
          options: [
            'In het noorden van Nederland',
            'In het westen van Nederland',
            'In het zuiden van Nederland',
          ],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-1-q13',
          type: 'multiple-choice',
          question: 'Hoeveel provincies heeft Nederland?',
          options: ['10', '12', '14'],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-1-q14',
          type: 'multiple-choice',
          question: 'Wat is de hoofdstad van Nederland?',
          options: ['Den Haag', 'Rotterdam', 'Amsterdam'],
          correctIndex: 2,
          topicArea: 'geography',
        },
        {
          id: 'knm-1-q15',
          type: 'multiple-choice',
          question: 'In welke stad vergadert de Nederlandse regering?',
          options: ['Amsterdam', 'Den Haag', 'Utrecht'],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-1-q16',
          type: 'multiple-choice',
          question:
            'Wanneer was de Tweede Wereldoorlog voor Nederland?',
          options: ['1914–1918', '1939–1945', '1940–1945'],
          correctIndex: 2,
          topicArea: 'history',
        },
        {
          id: 'knm-1-q17',
          type: 'true-false',
          question: 'Nederland heeft een grens met de zee in het westen en het noorden.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'geography',
        },
      ],
    },

    // ── Section 4: Healthcare ──
    {
      id: 'knm-1-healthcare',
      title: 'Gezondheidszorg',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse gezondheidszorg.',
      questions: [
        {
          id: 'knm-1-q18',
          type: 'multiple-choice',
          question:
            'Manon is ziek. Ze wil naar de specialist. Wat moet ze eerst doen?',
          options: [
            'Direct naar het ziekenhuis gaan',
            'Naar de huisarts gaan voor een verwijsbrief',
            'Zelf een afspraak maken bij de specialist',
          ],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-1-q19',
          type: 'true-false',
          question:
            'In Nederland moet iedereen verplicht een zorgverzekering hebben.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-1-q20',
          type: 'multiple-choice',
          question:
            'Wat is het eigen risico bij de zorgverzekering?',
          options: [
            'Het bedrag dat u zelf betaalt voordat de verzekering bijdraagt',
            'Het bedrag dat de verzekering altijd betaalt',
            'Het bedrag dat u terugkrijgt van de verzekering',
          ],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-1-q21',
          type: 'true-false',
          question: 'U kunt zonder afspraak bij de huisarts langsgaan.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-1-q22',
          type: 'multiple-choice',
          question:
            'Uw baby huilt veel en drinkt slecht. Waar gaat u voor advies als het niet urgent is?',
          options: [
            'Naar de spoedeisende hulp van het ziekenhuis',
            'Naar het consultatiebureau',
            'Naar de apotheek',
          ],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-1-q23',
          type: 'multiple-choice',
          question: 'Wat doet een apotheek?',
          options: [
            'Een apotheek geeft medisch advies en schrijft recepten uit',
            'Een apotheek maakt en verkoopt medicijnen op recept',
            'Een apotheek verzekert mensen voor ziektekosten',
          ],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 5: Education ──
    {
      id: 'knm-1-education',
      title: 'Onderwijs',
      instructions:
        'Beantwoord de volgende vragen over het Nederlandse onderwijssysteem.',
      questions: [
        {
          id: 'knm-1-q24',
          type: 'multiple-choice',
          question: 'Vanaf welke leeftijd zijn kinderen in Nederland leerplichtig?',
          options: ['Vier jaar', 'Vijf jaar', 'Zes jaar'],
          correctIndex: 2,
          topicArea: 'education',
        },
        {
          id: 'knm-1-q25',
          type: 'multiple-choice',
          question:
            'Welk type school is bedoeld voor kinderen die later naar de universiteit willen?',
          options: ['VMBO', 'HAVO', 'VWO'],
          correctIndex: 2,
          topicArea: 'education',
        },
        {
          id: 'knm-1-q26',
          type: 'true-false',
          question:
            'Na het basisonderwijs gaan alle kinderen naar hetzelfde type middelbare school.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-1-q27',
          type: 'multiple-choice',
          question: 'Hoe lang duurt de basisschool in Nederland?',
          options: ['6 jaar', '8 jaar', '10 jaar'],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-1-q28',
          type: 'multiple-choice',
          question:
            'Op welke school kan een kind na de basisschool doorstromen naar het HBO?',
          options: ['VMBO', 'VWO', 'HAVO'],
          correctIndex: 2,
          topicArea: 'education',
        },
      ],
    },

    // ── Section 6: Waste & Environment ──
    {
      id: 'knm-1-waste-environment',
      title: 'Afval en Milieu',
      instructions:
        'Beantwoord de volgende vragen over afval en milieu in Nederland.',
      questions: [
        {
          id: 'knm-1-q29',
          type: 'multiple-choice',
          question: 'Waar gooit u lege flessen van glas?',
          options: [
            'In de groene container',
            'In de glasbak',
            'Bij het grofvuil',
          ],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-1-q30',
          type: 'true-false',
          question: 'Oud papier en karton mag u in dezelfde container als groente- en fruitafval gooien.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-1-q31',
          type: 'multiple-choice',
          question: 'Waar brengt u grote kapotte meubels naartoe?',
          options: [
            'Naar de glasbak',
            'Naar de milieustraat',
            'In de groene container',
          ],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-1-q32',
          type: 'multiple-choice',
          question: 'Hoe heet het gele afvalbakje voor klein chemisch afval thuis?',
          options: ['Textielbak', 'Chemobox', 'Milieucontainer'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-1-q33',
          type: 'true-false',
          question: 'Lege batterijen mag u in de gewone prullenbak gooien.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'waste',
        },
      ],
    },

    // ── Section 7: Housing, Work & Benefits ──
    {
      id: 'knm-1-housing-work',
      title: 'Wonen, Werk en Uitkeringen',
      instructions:
        'Beantwoord de volgende vragen over wonen, werk en uitkeringen in Nederland.',
      questions: [
        {
          id: 'knm-1-q34',
          type: 'multiple-choice',
          question:
            'Hamid wil een sociale huurwoning. Hij schrijft zich in bij de woningcorporatie. Hoe lang kan hij moeten wachten?',
          options: [
            'Een paar weken',
            'Soms meerdere jaren',
            'Maximaal zes maanden',
          ],
          correctIndex: 1,
          topicArea: 'housing',
        },
        {
          id: 'knm-1-q35',
          type: 'true-false',
          question:
            'Als u werkloos wordt, kunt u een WW-uitkering aanvragen bij het UWV.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'work',
        },
        {
          id: 'knm-1-q36',
          type: 'multiple-choice',
          question: 'Wat is het minimumloon?',
          options: [
            'Het laagste loon dat een werkgever wettelijk mag betalen',
            'Het gemiddelde loon in Nederland',
            'Het loon dat de overheid betaalt aan ambtenaren',
          ],
          correctIndex: 0,
          topicArea: 'work',
        },
        {
          id: 'knm-1-q37',
          type: 'multiple-choice',
          question:
            'Leila heeft schulden en kan ze niet meer betalen. Waar kan ze het beste hulp zoeken?',
          options: [
            'Bij de politie',
            'Bij de schuldhulpverlening van de gemeente',
            'Bij de woningcorporatie',
          ],
          correctIndex: 1,
          topicArea: 'services',
        },
        {
          id: 'knm-1-q38',
          type: 'true-false',
          question: 'Huursubsidie heet in Nederland huurtoeslag.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'housing',
        },
      ],
    },

    // ── Section 8: Taxes, Benefits & DigiD ──
    {
      id: 'knm-1-taxes-benefits',
      title: 'Belasting, Toeslagen en DigiD',
      instructions:
        'Beantwoord de volgende vragen over belastingen, toeslagen en DigiD in Nederland.',
      questions: [
        {
          id: 'knm-1-q39',
          type: 'multiple-choice',
          question: 'Wat is een DigiD?',
          options: [
            'Een digitale identiteitskaart om online zaken te regelen met de overheid',
            'Een bankpas voor internetbankieren',
            'Een app om belasting terug te vragen',
          ],
          correctIndex: 0,
          topicArea: 'services',
        },
        {
          id: 'knm-1-q40',
          type: 'multiple-choice',
          question:
            'Waar betaalt u belasting over uw inkomen aan?',
          options: [
            'Aan de gemeente',
            'Aan de Belastingdienst',
            'Aan het UWV',
          ],
          correctIndex: 1,
          topicArea: 'economics',
        },
      ],
    },
  ],
};
