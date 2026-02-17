import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam3: ExamPracticeTest = {
  id: 'knm-practice-3',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 3',
  description:
    'Kennis van de Nederlandse Maatschappij (KNM) practice exam covering Dutch customs, politics, geography, healthcare, education, waste management, housing, work, and services.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Customs & Social Norms ──
    {
      id: 'knm-3-customs-social',
      title: 'Gewoonten en Sociale Normen',
      instructions:
        'Beantwoord de volgende vragen over Nederlandse gewoonten en sociale normen.',
      questions: [
        {
          id: 'knm-3-q1',
          type: 'multiple-choice',
          question:
            'Wat is de gewoonte in Nederland als iemand is geslaagd voor het diploma op het voortgezet onderwijs?',
          options: [
            'De schooltas buiten hangen',
            'De jas buiten hangen',
            'Het diploma buiten hangen',
          ],
          correctIndex: 0,
          topicArea: 'customs',
        },
        {
          id: 'knm-3-q2',
          type: 'multiple-choice',
          question:
            'U ziet een jongen met een bal. Hij schopt de bal tegen uw winkelraam. Het raam is kapot en uw spullen ook. U bent boos. Mag u de jongen slaan?',
          options: [
            'Nee maar u pakt de jongen en trekt hem hard aan zijn arm',
            'Nee maar u pakt de bal en maakt de bal kapot',
            'Nee u vraagt aan de jongen hoe hij heet en waar hij woont. U raakt hem niet aan',
          ],
          correctIndex: 2,
          topicArea: 'social-norms',
        },
        {
          id: 'knm-3-q22',
          type: 'multiple-choice',
          question:
            'Uw dochter gaat op kamers wonen. U maakt kennis met de buren. De buren zijn lesbische vrouwen. Wat kunt u het beste doen?',
          options: [
            'U zoekt een andere kamer voor uw dochter',
            'U waarschuwt de buren dat ze uit de buurt van uw dochter moeten blijven',
            'Niets',
          ],
          correctIndex: 2,
          topicArea: 'social-norms',
        },
      ],
    },

    // ── Section 2: Politics & Rights ──
    {
      id: 'knm-3-politics-rights',
      title: 'Politiek en Rechten',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse politiek en rechten.',
      questions: [
        {
          id: 'knm-3-q3',
          type: 'multiple-choice',
          question:
            'In Nederland zijn heel veel politieke partijen. De partijen zijn rechts, links of middenpartijen. Welke combinatie is goed?',
          options: [
            'CDA=links PvdA=midden VVD=rechts',
            'CDA=midden PvdA=links VVD=rechts',
            'CDA=rechts PvdA=links VVD=midden',
          ],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-3-q4',
          type: 'multiple-choice',
          question:
            'Hassan wil graag in een schoenwinkel werken. De chef zegt dat Nederlanders harder werken. Hij wil Hassan niet aannemen. Wat kan Hassan het beste doen?',
          options: [
            'Naar de politie gaan',
            'Naar de Nationale Ombudsman gaan',
            'Naar het Anti Discriminatie Bureau gaan',
          ],
          correctIndex: 2,
          topicArea: 'rights',
        },
        {
          id: 'knm-3-q5',
          type: 'true-false',
          question:
            'Iemand met de Nederlandse nationaliteit is altijd in Nederland geboren.',
          options: ['Waar', 'Niet Waar'],
          correctIndex: 1,
          topicArea: 'citizenship',
        },
        {
          id: 'knm-3-q21',
          type: 'multiple-choice',
          question:
            'Wat doet het Anti Discriminatie Bureau met een klacht over discriminatie?',
          options: [
            'Dit bureau registreert uw klacht en kan zorgen dat u juridische hulp krijgt',
            'Dit bureau geeft een gevangenisstraf of een boete aan degene die u heeft gediscrimineerd',
            'Dit bureau doet onderzoek naar discriminatie in Nederland. Uw klacht wordt voor het onderzoek gebruikt',
          ],
          correctIndex: 0,
          topicArea: 'rights',
        },
        {
          id: 'knm-3-q23',
          type: 'multiple-choice',
          question:
            'U woont 4 jaar legaal in Nederland. Er zijn verkiezingen voor de gemeente. Mag u stemmen voor de gemeente?',
          options: [
            'Ja want u woont legaal in Nederland',
            'Nee want u woont nog geen vijf jaar legaal in Nederland',
            'Ja want voor de gemeenteraad mogen alle buitenlanders stemmen',
          ],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-3-q34',
          type: 'multiple-choice',
          question: 'Wie is de baas in Nederland?',
          options: ['De koning', 'De premier', 'Het volk'],
          correctIndex: 2,
          topicArea: 'politics',
        },
      ],
    },

    // ── Section 3: Geography & History ──
    {
      id: 'knm-3-geography-history',
      title: 'Aardrijkskunde en Geschiedenis',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse aardrijkskunde en geschiedenis.',
      questions: [
        {
          id: 'knm-3-q7',
          type: 'multiple-choice',
          question: 'Welke 2 buurlanden heeft Nederland?',
          options: [
            'Belgi\u00eb en Duitsland',
            'Belgi\u00eb en de Noordzee',
            'Belgi\u00eb en Frankrijk',
            'Belgi\u00eb en Friesland',
          ],
          correctIndex: 0,
          topicArea: 'geography',
        },
        {
          id: 'knm-3-q8',
          type: 'multiple-choice',
          question: 'In welke provincie zijn er veel duinen?',
          options: ['Friesland', 'Noord-Holland', 'Zeeland'],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-3-q11',
          type: 'multiple-choice',
          question:
            'Friya kijkt hoe ze moet rijden naar Den Haag. Waar ligt Den Haag?',
          options: [
            'in het noorden van Nederland',
            'in het westen van Nederland',
            'in het oosten van Nederland',
            'in het zuiden van Nederland',
          ],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-3-q12',
          type: 'multiple-choice',
          question:
            'Hoe heten de dijken die na de Watersnoodramp in Zeeland zijn gemaakt?',
          options: [
            'De Afsluitdijk',
            'De Deltawerken',
            'De Flevopolder',
            'De Hondsbossche zeewering',
          ],
          correctIndex: 1,
          topicArea: 'history',
        },
        {
          id: 'knm-3-q13',
          type: 'multiple-choice',
          question:
            'Wanneer kwamen er veel gastarbeiders naar Nederland?',
          options: [
            'Na 1985',
            'Na de Tweede Wereldoorlog',
            'Na de Eerste Wereldoorlog',
            'Na de wederopbouw',
          ],
          correctIndex: 3,
          topicArea: 'history',
        },
      ],
    },

    // ── Section 4: Healthcare ──
    {
      id: 'knm-3-healthcare',
      title: 'Gezondheidszorg',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse gezondheidszorg.',
      questions: [
        {
          id: 'knm-3-q6',
          type: 'true-false',
          question:
            'Als je een rekening declareert, moet je een formulier invullen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q9',
          type: 'true-false',
          question:
            'Als je kiest voor een eigen risico, betaal je alle kosten zelf.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q14',
          type: 'multiple-choice',
          question: 'Welk briefje heb je nodig voor de specialist?',
          options: ['Een etiket', 'Een recept', 'Een verwijsbrief'],
          correctIndex: 2,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q15',
          type: 'true-false',
          question:
            'Bij de basisverzekering worden alle kosten voor je betaald.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q16',
          type: 'true-false',
          question:
            'In het groeiboekje staat een grafiek met de groeicurve van je baby.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q17',
          type: 'true-false',
          question: 'De wijkverpleegkundige is een dokter.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q35',
          type: 'true-false',
          question:
            'Bij het consultatiebureau krijgen de ouders van kinderen tot vier jaar advies.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-3-q40',
          type: 'multiple-choice',
          question: 'Wat is een pati\u00ebntenpas?',
          options: [
            'Een plastic kaartje met NAW gegevens',
            'Een plastic kaart met ziekenhuisafspraken',
            'Een plastic kaartje met informatie over jou en een persoonlijke barcode',
          ],
          correctIndex: 2,
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 5: Education ──
    {
      id: 'knm-3-education',
      title: 'Onderwijs',
      instructions:
        'Beantwoord de volgende vragen over het Nederlandse onderwijssysteem.',
      questions: [
        {
          id: 'knm-3-q18',
          type: 'true-false',
          question:
            'Lina is drie jaar. De ouders van haar hebben een afspraak gemaakt met een basisschool. Ze krijgen informatie van de directeur van de school over het basisonderwijs.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'education',
        },
        {
          id: 'knm-3-q19',
          type: 'multiple-choice',
          question:
            'De ouders van Lina krijgen tijdens het overleg de schoolgids om thuis de informatie nog eens rustig na te lezen. Wat staat er in de schoolgids?',
          options: [
            'Onder andere hoe zij hun kind kunnen aanmelden de lestijden en de vakantiedagen',
            'Onder andere hoe groot het schoolplein is',
            'Onder andere wat voor eten hun kind op school krijgt',
          ],
          correctIndex: 0,
          topicArea: 'education',
        },
        {
          id: 'knm-3-q20',
          type: 'multiple-choice',
          question: 'Wat is de brugklas?',
          options: [
            'Het is een klas met een brug',
            'Het is een klas met extra taallessen',
            'Het is een klas waarin de definitieve keuze voor een schoolsoort wordt uitgesteld',
          ],
          correctIndex: 2,
          topicArea: 'education',
        },
        {
          id: 'knm-3-q36',
          type: 'multiple-choice',
          question: 'Alle kinderen zijn leerplichtig tot',
          options: ['16 jaar', '17 jaar', '18 jaar'],
          correctIndex: 0,
          topicArea: 'education',
        },
        {
          id: 'knm-3-q37',
          type: 'multiple-choice',
          question: 'Het VWO duurt',
          options: ['4 jaar', '5 jaar', '6 jaar'],
          correctIndex: 2,
          topicArea: 'education',
        },
        {
          id: 'knm-3-q38',
          type: 'multiple-choice',
          question: 'Het VMBO duurt',
          options: ['4 jaar', '5 jaar', '6 jaar'],
          correctIndex: 0,
          topicArea: 'education',
        },
      ],
    },

    // ── Section 6: Waste & Environment ──
    {
      id: 'knm-3-waste-environment',
      title: 'Afval en Milieu',
      instructions:
        'Beantwoord de volgende vragen over afval en milieu in Nederland.',
      questions: [
        {
          id: 'knm-3-q24',
          type: 'true-false',
          question:
            'Chemisch afval mag in de container met groente-, fruit- en tuinafval.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-3-q26',
          type: 'multiple-choice',
          question:
            "'Grof huishoudelijk afval' Wat betekent grof?",
          options: ['Vies', 'Groot', 'Goed'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-3-q27',
          type: 'multiple-choice',
          question: 'Hoe werkt een kledinginzamelactie?',
          options: [
            'U krijgt thuis een plastic zak waar u oude kleding in doet',
            'U krijgt thuis een plastic zak waar u nieuwe kleding in doet',
            'U verzamelt kleding voor de textielbak',
          ],
          correctIndex: 0,
          topicArea: 'waste',
        },
        {
          id: 'knm-3-q28',
          type: 'multiple-choice',
          question: 'Waar kunt u textiel naartoe wegbrengen?',
          options: [
            'Naar de fabriek',
            'Naar de fabriek en de textielbak',
            'Naar de textielbak of kledingsinzamelacties',
          ],
          correctIndex: 2,
          topicArea: 'waste',
        },
        {
          id: 'knm-3-q29',
          type: 'multiple-choice',
          question:
            'U heeft een volle chemobox. U wilt hem morgen legen. Wat doet u?',
          options: [
            'U brengt uw chemobox naar de gemeente',
            'U geeft uw chemobox aan de vuilnisman',
            'U brengt uw chemobox naar de milieustraat',
          ],
          correctIndex: 2,
          topicArea: 'waste',
        },
        {
          id: 'knm-3-q39',
          type: 'multiple-choice',
          question:
            'U gaat vrijdag op vakantie. De vuilniswagen komt volgende week woensdag pas langs. Uw container zit helemaal vol. Wat doet u?',
          options: [
            'U zet de container alvast op straat dan bent u zeker op tijd',
            'U belt de gemeente en vraagt of ze vrijdag uw container kunnen komen legen',
            'U vraagt de buren of zij uw container buiten kunnen zetten op woensdag',
          ],
          correctIndex: 2,
          topicArea: 'waste',
        },
      ],
    },

    // ── Section 7: Housing, Work & Services ──
    {
      id: 'knm-3-housing-work-services',
      title: 'Wonen, Werk en Diensten',
      instructions:
        'Beantwoord de volgende vragen over wonen, werk en diensten in Nederland.',
      questions: [
        {
          id: 'knm-3-q25',
          type: 'true-false',
          question: 'Een loodgieter kan je kapotte kraan repareren.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'housing',
        },
        {
          id: 'knm-3-q30',
          type: 'true-false',
          question:
            'U kunt een inschrijfformulier voor de bibliotheek bij de gemeente ophalen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'services',
        },
        {
          id: 'knm-3-q31',
          type: 'true-false',
          question:
            'Als je wilt scheiden, kan een advocaat je helpen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'legal',
        },
        {
          id: 'knm-3-q32',
          type: 'true-false',
          question:
            'Als je een woning krijgt aangeboden van de woningbouwvereniging, moet je er gaan wonen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'housing',
        },
        {
          id: 'knm-3-q33',
          type: 'multiple-choice',
          question: 'Hoe verdient een zelfstandig ondernemer geld?',
          options: [
            'Met een baan',
            'Met een eigen bedrijf',
            'Met een uitkering',
          ],
          correctIndex: 1,
          topicArea: 'work',
        },
      ],
    },

    // ── Section 8: Currency ──
    {
      id: 'knm-3-currency',
      title: 'Valuta',
      instructions:
        'Beantwoord de volgende vraag over de euro en geld in Europa.',
      questions: [
        {
          id: 'knm-3-q10',
          type: 'multiple-choice',
          question: 'Met de euro betalen de mensen',
          options: [
            'alleen in Nederland',
            'in veel landen in Europa',
            'in alle landen van Europa',
          ],
          correctIndex: 1,
          topicArea: 'economics',
        },
      ],
    },
  ],
};
