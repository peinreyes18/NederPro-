import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam2: ExamPracticeTest = {
  id: 'knm-practice-2',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 2',
  description:
    'Kennis van de Nederlandse Maatschappij (KNM) practice exam covering Dutch customs, politics, geography, healthcare, education, waste management, housing, work, and services.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Customs & Social Norms ──
    {
      id: 'knm-2-customs-social',
      title: 'Gewoonten en Sociale Normen',
      instructions:
        'Beantwoord de volgende vragen over Nederlandse gewoonten en sociale normen.',
      questions: [
        {
          id: 'knm-2-q1',
          type: 'multiple-choice',
          question:
            'U bent uitgenodigd voor een diner bij uw Nederlandse collega. Het eten begint om 18:00. Hoe laat komt u aan?',
          options: [
            'Om 18:00, want in Nederland is men op tijd',
            'Om 19:00, want een uur te laat is gezellig',
            'Om 17:30, want vroeg komen toont respect',
          ],
          correctIndex: 0,
          topicArea: 'customs',
        },
        {
          id: 'knm-2-q2',
          type: 'true-false',
          question:
            'In Nederland is het gebruikelijk om mensen die je net ontmoet een hand te geven.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'customs',
        },
        {
          id: 'knm-2-q3',
          type: 'multiple-choice',
          question:
            'U ziet dat uw buurvrouw valt en gewond raakt. Wat doet u?',
          options: [
            'U loopt door want u kent haar niet goed',
            'U helpt haar en belt eventueel een ambulance',
            'U belt de politie direct',
          ],
          correctIndex: 1,
          topicArea: 'social-norms',
        },
        {
          id: 'knm-2-q4',
          type: 'multiple-choice',
          question:
            'Uw kind heeft ruzie op school met een klasgenoot. Wat doet u als ouder als eerste?',
          options: [
            'U gaat naar de ouders van het andere kind en wordt boos',
            'U praat met uw kind over de ruzie en contact op met de leerkracht',
            'U belt de politie',
          ],
          correctIndex: 1,
          topicArea: 'social-norms',
        },
        {
          id: 'knm-2-q5',
          type: 'true-false',
          question:
            'In Nederland is het normaal dat mannen en vrouwen gelijke rechten hebben op de werkvloer.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'social-norms',
        },
      ],
    },

    // ── Section 2: Politics & Rights ──
    {
      id: 'knm-2-politics-rights',
      title: 'Politiek en Rechten',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse politiek en rechten.',
      questions: [
        {
          id: 'knm-2-q6',
          type: 'multiple-choice',
          question: 'Wat is de taak van de minister-president in Nederland?',
          options: [
            'De wetten ondertekenen namens de koning',
            'Leiding geven aan het kabinet en de ministers coördineren',
            'De Tweede Kamer voorzitten',
          ],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-2-q7',
          type: 'multiple-choice',
          question:
            'Nasrin wordt gediscrimineerd door haar baas vanwege haar religie. Waar kan zij terecht?',
          options: [
            'Bij de Belastingdienst',
            'Bij het Anti Discriminatie Bureau',
            'Bij de Kamer van Koophandel',
          ],
          correctIndex: 1,
          topicArea: 'rights',
        },
        {
          id: 'knm-2-q8',
          type: 'true-false',
          question:
            'In Nederland is vrijheid van meningsuiting een grondrecht, maar u mag niet aanzetten tot haat.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'rights',
        },
        {
          id: 'knm-2-q9',
          type: 'multiple-choice',
          question:
            'Hoeveel leden telt de Tweede Kamer?',
          options: ['75', '100', '150'],
          correctIndex: 2,
          topicArea: 'politics',
        },
        {
          id: 'knm-2-q10',
          type: 'multiple-choice',
          question:
            'Wat is de rol van de koning of koningin in de Nederlandse politiek?',
          options: [
            'De koning regeert het land en neemt alle beslissingen',
            'De koning heeft een symbolische rol en ondertekent wetten',
            'De koning kiest de ministers',
          ],
          correctIndex: 1,
          topicArea: 'politics',
        },
        {
          id: 'knm-2-q11',
          type: 'true-false',
          question:
            'Nederlanders die in het buitenland wonen mogen niet stemmen bij de Tweede Kamerverkiezingen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'politics',
        },
      ],
    },

    // ── Section 3: Geography & History ──
    {
      id: 'knm-2-geography-history',
      title: 'Aardrijkskunde en Geschiedenis',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse aardrijkskunde en geschiedenis.',
      questions: [
        {
          id: 'knm-2-q12',
          type: 'multiple-choice',
          question: 'Welke rivier stroomt door Rotterdam?',
          options: ['De Rijn', 'De Maas', 'De IJssel'],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-2-q13',
          type: 'multiple-choice',
          question: 'Wat is de Randstad?',
          options: [
            'Een provincie in het noorden van Nederland',
            'Het stedelijk gebied met Amsterdam, Rotterdam, Den Haag en Utrecht',
            'Een historisch fort uit de Tweede Wereldoorlog',
          ],
          correctIndex: 1,
          topicArea: 'geography',
        },
        {
          id: 'knm-2-q14',
          type: 'true-false',
          question: 'Flevoland is de jongste provincie van Nederland.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'geography',
        },
        {
          id: 'knm-2-q15',
          type: 'multiple-choice',
          question:
            'Wat herdenkt Nederland op 4 mei elk jaar?',
          options: [
            'Het einde van de Eerste Wereldoorlog',
            'De slachtoffers van de Tweede Wereldoorlog',
            'De bevrijding van Nederland in 1945',
          ],
          correctIndex: 1,
          topicArea: 'history',
        },
        {
          id: 'knm-2-q16',
          type: 'multiple-choice',
          question: 'Wat viert Nederland op 5 mei?',
          options: [
            'Koningsdag',
            'Bevrijdingsdag',
            'Nationale Dodenherdenking',
          ],
          correctIndex: 1,
          topicArea: 'history',
        },
        {
          id: 'knm-2-q17',
          type: 'multiple-choice',
          question:
            'Welke stad is bekend als de stad van de internationale rechtbanken?',
          options: ['Amsterdam', 'Rotterdam', 'Den Haag'],
          correctIndex: 2,
          topicArea: 'geography',
        },
      ],
    },

    // ── Section 4: Healthcare ──
    {
      id: 'knm-2-healthcare',
      title: 'Gezondheidszorg',
      instructions:
        'Beantwoord de volgende vragen over de Nederlandse gezondheidszorg.',
      questions: [
        {
          id: 'knm-2-q18',
          type: 'multiple-choice',
          question:
            'Het is nacht en uw kind heeft hoge koorts. De huisartsenpraktijk is dicht. Wat doet u?',
          options: [
            'U wacht tot de volgende ochtend',
            'U belt de huisartsenpost (HAP)',
            'U rijdt direct naar de spoedeisende hulp',
          ],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-2-q19',
          type: 'true-false',
          question:
            'Kinderen onder de 18 jaar hebben geen eigen risico bij de zorgverzekering.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-2-q20',
          type: 'multiple-choice',
          question:
            'Voor welk telefoonnummer belt u als er levensgevaar is?',
          options: ['0800-0290', '112', '0900-8844'],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-2-q21',
          type: 'multiple-choice',
          question:
            'Wat is de taak van de wijkverpleegkundige?',
          options: [
            'Operaties uitvoeren bij mensen thuis',
            'Zorg verlenen aan mensen thuis die dat nodig hebben',
            'Recepten uitschrijven voor medicijnen',
          ],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-2-q22',
          type: 'true-false',
          question:
            'De tandarts valt volledig onder de basisverzekering voor volwassenen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'healthcare',
        },
        {
          id: 'knm-2-q23',
          type: 'multiple-choice',
          question:
            'U heeft een aanvullende verzekering. Wat dekt dit naast de basisverzekering?',
          options: [
            'Extra behandelingen zoals fysiotherapie en tandheelkunde',
            'Uw autokosten bij een ongeluk',
            'Uw huur als u ziek bent',
          ],
          correctIndex: 0,
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 5: Education ──
    {
      id: 'knm-2-education',
      title: 'Onderwijs',
      instructions:
        'Beantwoord de volgende vragen over het Nederlandse onderwijssysteem.',
      questions: [
        {
          id: 'knm-2-q24',
          type: 'multiple-choice',
          question:
            'Uw kind heeft een HAVO-diploma. Waarnaar kan hij of zij doorstromen?',
          options: [
            'Naar de universiteit',
            'Naar het HBO',
            'Alleen naar het MBO',
          ],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-2-q25',
          type: 'true-false',
          question:
            'Kinderen met een beperking mogen niet naar een reguliere school in Nederland.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-2-q26',
          type: 'multiple-choice',
          question: 'Wat is de leerplicht voor kinderen in Nederland?',
          options: [
            'Van 4 tot 16 jaar',
            'Van 5 tot 16 jaar en daarna kwalificatieplicht tot 18 jaar',
            'Van 6 tot 18 jaar',
          ],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-2-q27',
          type: 'multiple-choice',
          question:
            'Wat is het doel van het MBO?',
          options: [
            'Wetenschappelijk onderzoek doen',
            'Een beroepsopleiding volgen en een startkwalificatie halen',
            'Doorstromen naar de universiteit',
          ],
          correctIndex: 1,
          topicArea: 'education',
        },
        {
          id: 'knm-2-q28',
          type: 'true-false',
          question:
            'Ouders mogen zelf kiezen naar welke school hun kind gaat in Nederland.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'education',
        },
      ],
    },

    // ── Section 6: Waste & Environment ──
    {
      id: 'knm-2-waste-environment',
      title: 'Afval en Milieu',
      instructions:
        'Beantwoord de volgende vragen over afval en milieu in Nederland.',
      questions: [
        {
          id: 'knm-2-q29',
          type: 'multiple-choice',
          question:
            'Welke kleur heeft de container voor groente-, fruit- en tuinafval (GFT) meestal in Nederland?',
          options: ['Grijze container', 'Groene container', 'Blauwe container'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-2-q30',
          type: 'true-false',
          question:
            'Plastic verpakkingen mogen bij het restafval in de grijze container.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-2-q31',
          type: 'multiple-choice',
          question:
            'Wat is een milieustraat?',
          options: [
            'Een straat met alleen elektrische auto\'s',
            'Een inzamelpunt waar u verschillende soorten afval kunt brengen',
            'Een straat zonder vuilcontainers',
          ],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-2-q32',
          type: 'multiple-choice',
          question:
            'Hoe gooit u lege medicijnverpakkingen weg?',
          options: [
            'In de grijze container',
            'Teruggeven aan de apotheek',
            'In de groene container',
          ],
          correctIndex: 1,
          topicArea: 'waste',
        },
        {
          id: 'knm-2-q33',
          type: 'true-false',
          question:
            'U mag uw container pas de avond voor de ophaaldag aan de straat zetten.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          topicArea: 'waste',
        },
      ],
    },

    // ── Section 7: Housing, Work & Benefits ──
    {
      id: 'knm-2-housing-work',
      title: 'Wonen, Werk en Uitkeringen',
      instructions:
        'Beantwoord de volgende vragen over wonen, werk en uitkeringen in Nederland.',
      questions: [
        {
          id: 'knm-2-q34',
          type: 'multiple-choice',
          question:
            'Wat is de functie van een woningcorporatie?',
          options: [
            'Dure koopwoningen verkopen',
            'Sociale huurwoningen beheren en verhuren aan mensen met een laag inkomen',
            'Hypotheken verstrekken',
          ],
          correctIndex: 1,
          topicArea: 'housing',
        },
        {
          id: 'knm-2-q35',
          type: 'true-false',
          question:
            'Als u een bijstandsuitkering ontvangt, hoeft u niet te solliciteren.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'work',
        },
        {
          id: 'knm-2-q36',
          type: 'multiple-choice',
          question:
            'Tamar werkt parttime en verdient weinig. Ze betaalt huur. Op welke toeslag heeft ze mogelijk recht?',
          options: ['Zorgtoeslag en huurtoeslag', 'WW-uitkering', 'Bijstand'],
          correctIndex: 0,
          topicArea: 'housing',
        },
        {
          id: 'knm-2-q37',
          type: 'multiple-choice',
          question: 'Waar kunt u een uitreksel van de Burgerlijke Stand aanvragen?',
          options: [
            'Bij de Belastingdienst',
            'Bij de gemeente',
            'Bij de rechtbank',
          ],
          correctIndex: 1,
          topicArea: 'services',
        },
        {
          id: 'knm-2-q38',
          type: 'true-false',
          question:
            'Als huurder mag u uw woning onderverhuren zonder toestemming van de verhuurder.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          topicArea: 'housing',
        },
      ],
    },

    // ── Section 8: Taxes, Finance & Digital Services ──
    {
      id: 'knm-2-taxes-finance',
      title: 'Belasting, Financiën en Digitale Diensten',
      instructions:
        'Beantwoord de volgende vragen over belastingen, financiën en digitale diensten in Nederland.',
      questions: [
        {
          id: 'knm-2-q39',
          type: 'multiple-choice',
          question:
            'Wat is zorgtoeslag?',
          options: [
            'Een bijdrage van de overheid om de zorgverzekering te betalen',
            'Een vergoeding van de verzekering voor artsbezoeken',
            'Korting op medicijnen bij de apotheek',
          ],
          correctIndex: 0,
          topicArea: 'economics',
        },
        {
          id: 'knm-2-q40',
          type: 'multiple-choice',
          question:
            'Voor welke diensten heeft u een DigiD nodig?',
          options: [
            'Voor internetbankieren',
            'Voor zaken regelen met de overheid, zoals belasting en toeslagen',
            'Voor het huren van een woning',
          ],
          correctIndex: 1,
          topicArea: 'services',
        },
      ],
    },
  ],
};
