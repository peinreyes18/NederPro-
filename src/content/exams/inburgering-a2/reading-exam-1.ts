import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Reading1: ExamPracticeTest = {
  id: 'inburgering-a2-reading-1',
  examType: 'inburgering-a2',
  skill: 'reading',
  title: 'Inburgeringsexamen A2 – Lezen (Oefening 1)',
  description:
    'Practice reading exam for the Inburgeringsexamen at A2 level. Read short Dutch texts — notices, signs, letters, forms, and ads — and answer comprehension questions. Reflects the format of the official DUO exam.',
  timeLimitMinutes: 40,
  passingScore: 70,
  totalQuestions: 25,
  sections: [

    // ── Section 1: Signs & Short Notices ──
    {
      id: 'ib-a2-r1-s1',
      title: 'Bordjes en korte mededelingen',
      passageTitle: 'Lees de bordje en beantwoord de vragen.',
      instructions: 'Lees de korte teksten en kies het juiste antwoord.',
      questions: [
        {
          id: 'ib-a2-r1-q1',
          type: 'multiple-choice',
          question:
            'U ziet dit bordje op een deur: "GESLOTEN WEGENS VERBOUWING – Open vanaf maandag 14 april." Wat betekent dit?',
          options: [
            'De winkel is nu open.',
            'De winkel is dicht voor renovatie en opent op 14 april.',
            'De winkel is altijd gesloten op maandag.',
          ],
          correctIndex: 1,
          explanation: '"Gesloten wegens verbouwing" = closed for renovation. "Vanaf maandag 14 april" = from Monday 14 April.',
          topicArea: 'signs',
        },
        {
          id: 'ib-a2-r1-q2',
          type: 'multiple-choice',
          question:
            'U leest: "LET OP: Geen fietsen plaatsen voor de ingang. Fietsen worden verwijderd." Wat moet u NIET doen?',
          options: [
            'Uw fiets bij de ingang zetten.',
            'Door de ingang naar binnen gaan.',
            'Uw fiets meenemen naar binnen.',
          ],
          correctIndex: 0,
          explanation: '"Geen fietsen plaatsen voor de ingang" = do not park bicycles in front of the entrance.',
          topicArea: 'signs',
        },
        {
          id: 'ib-a2-r1-q3',
          type: 'multiple-choice',
          question:
            'U ziet op een parkeerplaats: "Parkeren alleen voor bewoners. Parkeerschijf verplicht. Max. 2 uur." Hoe lang mag u hier parkeren?',
          options: [
            'Onbeperkt als u een bewoner bent.',
            'Maximaal 2 uur als u een bewoner bent met een parkeerschijf.',
            'Maximaal 1 uur voor iedereen.',
          ],
          correctIndex: 1,
          explanation: '"Max. 2 uur" = maximum 2 hours. "Parkeerschijf verplicht" = parking disc required. The parking is for residents only.',
          topicArea: 'signs',
        },
        {
          id: 'ib-a2-r1-q4',
          type: 'true-false',
          question:
            'U leest op een apotheek: "Spoedrecept? Bel ons altijd eerst: 020-555 1234." Waar of niet waar: U kunt op elk moment van de dag bij de apotheek aankloppen zonder te bellen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: 'The notice says to always call first for urgent prescriptions. Walking in without calling is not what the sign instructs.',
          topicArea: 'signs',
        },
      ],
    },

    // ── Section 2: Short letter / email ──
    {
      id: 'ib-a2-r1-s2',
      passageTitle: 'Brief van de gemeente',
      passage:
        'Geachte mevrouw Yildiz,\n\nU heeft op 3 maart een brief ontvangen over uw inburgeringsplicht. Wij hebben uw dossier bekeken. Wij zien dat u nog geen taalcursus heeft gevolgd.\n\nU heeft nog 18 maanden de tijd om aan uw inburgeringsplicht te voldoen. Als u niet op tijd klaar bent, kan de gemeente een boete opleggen.\n\nWij raden u aan zo snel mogelijk contact op te nemen met uw klantmanager. U kunt een afspraak maken via het telefoonnummer hieronder.\n\nMet vriendelijke groet,\nGemeente Rotterdam\nAfdeling Inburgering\nTel: 010-267 1000',
      instructions: 'Lees de brief van de gemeente en beantwoord de vragen.',
      questions: [
        {
          id: 'ib-a2-r1-q5',
          type: 'multiple-choice',
          question: 'Waarom schrijft de gemeente aan mevrouw Yildiz?',
          options: [
            'Omdat ze een boete heeft gekregen.',
            'Omdat ze nog geen taalcursus heeft gevolgd.',
            'Omdat haar inburgeringstermijn al voorbij is.',
          ],
          correctIndex: 1,
          explanation: 'The letter states: "Wij zien dat u nog geen taalcursus heeft gevolgd" — she has not yet followed a language course.',
          topicArea: 'civic-integration',
        },
        {
          id: 'ib-a2-r1-q6',
          type: 'multiple-choice',
          question: 'Hoeveel tijd heeft mevrouw Yildiz nog om in te burgeren?',
          options: ['6 maanden', '12 maanden', '18 maanden'],
          correctIndex: 2,
          explanation: '"U heeft nog 18 maanden de tijd" = you have 18 months left.',
          topicArea: 'civic-integration',
        },
        {
          id: 'ib-a2-r1-q7',
          type: 'multiple-choice',
          question: 'Wat adviseert de gemeente mevrouw Yildiz te doen?',
          options: [
            'Een boete betalen.',
            'Zo snel mogelijk contact opnemen met haar klantmanager.',
            'Een brief schrijven aan de gemeente.',
          ],
          correctIndex: 1,
          explanation: '"Wij raden u aan zo snel mogelijk contact op te nemen met uw klantmanager."',
          topicArea: 'civic-integration',
        },
        {
          id: 'ib-a2-r1-q8',
          type: 'true-false',
          question:
            'Als mevrouw Yildiz niet op tijd klaar is, kan de gemeente haar een boete geven.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"Als u niet op tijd klaar bent, kan de gemeente een boete opleggen." = True.',
          topicArea: 'civic-integration',
        },
      ],
    },

    // ── Section 3: Advertisement / Announcement ──
    {
      id: 'ib-a2-r1-s3',
      passageTitle: 'Advertentie: Cursusaanbod',
      passage:
        'TAAL & WERK CENTRUM ROTTERDAM\n\nWij bieden:\n• Nederlandse taalcursussen (A1 t/m B1)\n• Cursussen voor de inburgeringsexamens\n• Computerlessen voor beginners\n• Hulp bij het zoeken naar werk\n\nOpeningstijden: maandag t/m vrijdag 09:00–17:00\nAvondcursussen: maandag en donderdag 18:30–20:30\n\nInschrijven? Kom langs of bel: 010-345 6789\nVrije proefles mogelijk!\n\nAdres: Coolsingel 44, Rotterdam',
      instructions: 'Lees de advertentie en beantwoord de vragen.',
      questions: [
        {
          id: 'ib-a2-r1-q9',
          type: 'multiple-choice',
          question: 'Op welke dagen zijn er avondcursussen?',
          options: [
            'Dinsdag en woensdag.',
            'Maandag en donderdag.',
            'Vrijdag en zaterdag.',
          ],
          correctIndex: 1,
          explanation: '"Avondcursussen: maandag en donderdag" = evening courses on Monday and Thursday.',
          topicArea: 'services',
        },
        {
          id: 'ib-a2-r1-q10',
          type: 'multiple-choice',
          question: 'U wilt weten of de cursus goed bij u past. Wat kunt u doen?',
          options: [
            'Een e-mail sturen.',
            'Een vrije proefles volgen.',
            'U inschrijven voor een heel jaar.',
          ],
          correctIndex: 1,
          explanation: '"Vrije proefles mogelijk!" = a free trial lesson is possible.',
          topicArea: 'services',
        },
        {
          id: 'ib-a2-r1-q11',
          type: 'true-false',
          question:
            'Het centrum biedt ook hulp bij het zoeken naar werk.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"Hulp bij het zoeken naar werk" is listed among the services offered.',
          topicArea: 'services',
        },
        {
          id: 'ib-a2-r1-q12',
          type: 'multiple-choice',
          question: 'Tot welk niveau bieden zij taalcursussen aan?',
          options: ['Tot A2', 'Tot B1', 'Tot B2'],
          correctIndex: 1,
          explanation: '"Nederlandse taalcursussen (A1 t/m B1)" = Dutch language courses from A1 up to B1.',
          topicArea: 'services',
        },
      ],
    },

    // ── Section 4: Form / Information sheet ──
    {
      id: 'ib-a2-r1-s4',
      passageTitle: 'Informatie: Zorgverzekering',
      passage:
        'Zorgverzekering in Nederland – Belangrijke informatie\n\nIedereen die in Nederland woont of werkt, is verplicht een zorgverzekering te hebben.\n\nBasisverzekering\nDe basisverzekering dekt de belangrijkste medische kosten, zoals bezoeken aan de huisarts, ziekenhuisopnames en medicijnen.\n\nEigen risico\nU betaalt elk jaar een eigen risico van minimaal €385. Dat wil zeggen: de eerste €385 aan zorgkosten betaalt u zelf. Daarna betaalt de verzekering.\n\nZorgtoeslag\nHeeft u een laag inkomen? Dan kunt u zorgtoeslag aanvragen bij de Belastingdienst. Dit is een bijdrage in de kosten van uw zorgverzekering.\n\nAanvullende verzekering\nNaast de basisverzekering kunt u een aanvullende verzekering afsluiten voor zaken die de basisverzekering niet dekt, zoals tandarts of fysiotherapie.',
      instructions: 'Lees de informatietekst en beantwoord de vragen.',
      questions: [
        {
          id: 'ib-a2-r1-q13',
          type: 'true-false',
          question:
            'In Nederland bent u verplicht een zorgverzekering te hebben als u hier woont of werkt.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"Iedereen die in Nederland woont of werkt, is verplicht een zorgverzekering te hebben." = True.',
          topicArea: 'healthcare',
        },
        {
          id: 'ib-a2-r1-q14',
          type: 'multiple-choice',
          question: 'Wat is het eigen risico?',
          options: [
            'Het bedrag dat de verzekering elke maand betaalt.',
            'Het bedrag dat u per jaar zelf eerst betaalt voordat de verzekering bijspringt.',
            'Een extra verzekering voor de tandarts.',
          ],
          correctIndex: 1,
          explanation: '"De eerste €385 aan zorgkosten betaalt u zelf. Daarna betaalt de verzekering." = the amount you pay yourself first.',
          topicArea: 'healthcare',
        },
        {
          id: 'ib-a2-r1-q15',
          type: 'multiple-choice',
          question: 'Waar kunt u zorgtoeslag aanvragen?',
          options: [
            'Bij de gemeente.',
            'Bij de zorgverzekeraar.',
            'Bij de Belastingdienst.',
          ],
          correctIndex: 2,
          explanation: '"U kunt zorgtoeslag aanvragen bij de Belastingdienst." = Tax Authority.',
          topicArea: 'healthcare',
        },
        {
          id: 'ib-a2-r1-q16',
          type: 'multiple-choice',
          question: 'Waarvoor is een aanvullende verzekering bedoeld?',
          options: [
            'Voor zaken die de basisverzekering niet dekt, zoals de tandarts.',
            'Als vervanging van de basisverzekering.',
            'Voor mensen zonder inkomen.',
          ],
          correctIndex: 0,
          explanation: '"Aanvullende verzekering … voor zaken die de basisverzekering niet dekt, zoals tandarts of fysiotherapie."',
          topicArea: 'healthcare',
        },
        {
          id: 'ib-a2-r1-q17',
          type: 'true-false',
          question:
            'De basisverzekering dekt ook tandartsbezoeken.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: 'Tandarts (dentist) is specifically listed as something the basic insurance does NOT cover — it is for the additional (aanvullende) insurance.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 5: Notice board / mixed short texts ──
    {
      id: 'ib-a2-r1-s5',
      passageTitle: 'Prikbord: Berichten uit de buurt',
      passage:
        'Bericht 1 – Te huur\nKamer beschikbaar in gedeelde woning. 3e etage, geen lift. €650 per maand inclusief gas, water en licht. Geen huisdieren. Bel Mehmet: 06-123 456 78.\n\nBericht 2 – Buurtbijeenkomst\nDonderdag 20 april om 19:30 uur in Buurthuis De Schakel, Hoofdstraat 12. Onderwerp: veiligheid in de wijk. Iedereen is welkom!\n\nBericht 3 – Gevonden\nOp 15 april gevonden bij de bushalte: een zwarte rugzak. Geef beschrijving van de inhoud en haal hem op bij de politie, Rijnstraat 5.\n\nBericht 4 – Verkoop\nWegens verhuizing te koop: bank (bruin leer, goede staat) €150 en eettafel met 4 stoelen €80. Bel of app: 06-987 654 32.',
      instructions: 'Lees de berichten van het prikbord en beantwoord de vragen.',
      questions: [
        {
          id: 'ib-a2-r1-q18',
          type: 'multiple-choice',
          question: 'U heeft een hond. Kunt u de kamer huren bij Mehmet?',
          options: [
            'Ja, huisdieren zijn welkom.',
            'Nee, want er zijn geen huisdieren toegestaan.',
            'Alleen als de hond klein is.',
          ],
          correctIndex: 1,
          explanation: '"Geen huisdieren" = no pets allowed.',
          topicArea: 'housing',
        },
        {
          id: 'ib-a2-r1-q19',
          type: 'multiple-choice',
          question: 'U bent op 15 april een zwarte rugzak kwijtgeraakt bij de bushalte. Wat moet u doen?',
          options: [
            'Bellen naar 06-123 456 78.',
            'Naar de politie gaan op Rijnstraat 5 en de inhoud beschrijven.',
            'Een bericht op het prikbord plakken.',
          ],
          correctIndex: 1,
          explanation: 'Bericht 3 says: "Geef beschrijving van de inhoud en haal hem op bij de politie, Rijnstraat 5."',
          topicArea: 'services',
        },
        {
          id: 'ib-a2-r1-q20',
          type: 'multiple-choice',
          question: 'De buurtbijeenkomst gaat over',
          options: [
            'De huurprijzen in de wijk.',
            'Veiligheid in de wijk.',
            'De nieuwe bushalte.',
          ],
          correctIndex: 1,
          explanation: '"Onderwerp: veiligheid in de wijk" = the topic is neighbourhood safety.',
          topicArea: 'civic',
        },
        {
          id: 'ib-a2-r1-q21',
          type: 'multiple-choice',
          question: 'U wilt de eettafel kopen. Hoeveel kost de eettafel met vier stoelen?',
          options: ['€80', '€150', '€230'],
          correctIndex: 0,
          explanation: '"Eettafel met 4 stoelen €80" = dining table with 4 chairs for €80.',
          topicArea: 'housing',
        },
        {
          id: 'ib-a2-r1-q22',
          type: 'true-false',
          question: 'De kamer bij Mehmet is op de begane grond.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"3e etage" = third floor. Not the ground floor (begane grond).',
          topicArea: 'housing',
        },
      ],
    },

    // ── Section 6: Practical information text ──
    {
      id: 'ib-a2-r1-s6',
      passageTitle: 'DigiD: Wat is het en hoe vraag je het aan?',
      passage:
        'Met een DigiD kunt u veilig inloggen op websites van de overheid, zoals de Belastingdienst, het UWV en uw gemeente.\n\nHoe vraagt u een DigiD aan?\n1. Ga naar www.digid.nl\n2. Klik op "DigiD aanvragen"\n3. Vul uw gegevens in: naam, geboortedatum en BSN\n4. U ontvangt een brief met een activeringscode binnen 5 werkdagen\n5. Activeer uw DigiD op de website\n\nBelangrijk:\n• U heeft een BSN (Burgerservicenummer) nodig\n• Uw adres moet geregistreerd zijn bij de gemeente\n• De brief wordt verstuurd naar het adres dat bij de gemeente bekend is',
      instructions: 'Lees de tekst over DigiD en beantwoord de vragen.',
      questions: [
        {
          id: 'ib-a2-r1-q23',
          type: 'multiple-choice',
          question: 'Waarvoor gebruikt u een DigiD?',
          options: [
            'Om online te winkelen.',
            'Om veilig in te loggen op websites van de overheid.',
            'Om uw belasting zelf te berekenen.',
          ],
          correctIndex: 1,
          explanation: '"Met een DigiD kunt u veilig inloggen op websites van de overheid."',
          topicArea: 'civic',
        },
        {
          id: 'ib-a2-r1-q24',
          type: 'multiple-choice',
          question: 'Hoelang duurt het voordat u de activeringscode per post ontvangt?',
          options: [
            '1 werkdag.',
            'Tot 5 werkdagen.',
            '2 weken.',
          ],
          correctIndex: 1,
          explanation: '"U ontvangt een brief met een activeringscode binnen 5 werkdagen."',
          topicArea: 'civic',
        },
        {
          id: 'ib-a2-r1-q25',
          type: 'true-false',
          question:
            'U kunt een DigiD aanvragen zonder een BSN te hebben.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"U heeft een BSN (Burgerservicenummer) nodig" = a BSN is required. Without it you cannot apply.',
          topicArea: 'civic',
        },
      ],
    },
  ],
};
