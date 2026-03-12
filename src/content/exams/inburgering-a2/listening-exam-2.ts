import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Listening2: ExamPracticeTest = {
  id: 'inburgering-a2-listening-2',
  examType: 'inburgering-a2',
  skill: 'listening',
  title: 'Inburgeringsexamen A2 – Luisteren (Oefening 2)',
  description:
    'Practice exam for the Luisteren (listening) component of the Inburgeringsexamen A2. Listen to short spoken Dutch fragments — announcements, conversations, voicemails, and instructions — then answer comprehension questions. Each fragment can be played up to 2 times. All passages are read aloud using Dutch text-to-speech.',
  timeLimitMinutes: 35,
  passingScore: 70,
  totalQuestions: 20,
  sections: [
    // ── Fragment 1: Omroepbericht in een winkelcentrum ──
    {
      id: 'a2-l2-s1',
      passageTitle: 'Fragment 1: Omroepbericht in een winkelcentrum',
      passage:
        'Geachte klanten, wij informeren u dat winkelcentrum De Passage vandaag om twintig uur sluit in verband met een personeelsavond. Morgen zijn wij weer open vanaf tien uur. De parkeergarage op niveau twee is de hele avond gesloten. U kunt gratis parkeren op het buitenparkeerterrein aan de Lelylaan. Wij danken u voor uw begrip.',
      instructions: 'Luister naar het omroepbericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l2-q1',
          type: 'multiple-choice',
          question: 'Hoe laat sluit het winkelcentrum vandaag?',
          options: ['Om achttien uur', 'Om negentien uur', 'Om twintig uur', 'Om eenentwintig uur'],
          correctIndex: 2,
          explanation: '"winkelcentrum De Passage vandaag om twintig uur sluit."',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l2-q2',
          type: 'multiple-choice',
          question: 'Waarom sluit het winkelcentrum vroeg?',
          options: [
            'Vanwege een brand.',
            'Vanwege een personeelsavond.',
            'Vanwege verbouwing.',
            'Vanwege een feestdag.',
          ],
          correctIndex: 1,
          explanation: '"in verband met een personeelsavond."',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l2-q3',
          type: 'multiple-choice',
          question: 'Waar kunnen klanten vanavond gratis parkeren?',
          options: [
            'In de parkeergarage op niveau twee.',
            'Op het buitenparkeerterrein aan de Lelylaan.',
            'Op straat voor het winkelcentrum.',
            'Er is geen parkeermogelijkheid vanavond.',
          ],
          correctIndex: 1,
          explanation: '"U kunt gratis parkeren op het buitenparkeerterrein aan de Lelylaan."',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l2-q4',
          type: 'true-false',
          question: 'Het winkelcentrum is morgen gesloten.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: '"Morgen zijn wij weer open vanaf tien uur." — the centre is open tomorrow.',
          topicArea: 'shopping',
        },
      ],
    },

    // ── Fragment 2: Voicemail van een school ──
    {
      id: 'a2-l2-s2',
      passageTitle: 'Fragment 2: Voicemailbericht van een school',
      passage:
        'Goedemiddag, u spreekt met de administratie van de Talenacademie. Wij bellen voor mevrouw Ortega. Uw Nederlandse taalcursus op dinsdagavond begint volgende week niet op dinsdag maar op woensdag, vanwege een nationale feestdag. De les begint zoals gewoonlijk om half zeven en eindigt om half negen. De locatie is hetzelfde: zaal vijf op de tweede verdieping. Als u vragen heeft, kunt u ons bellen op nul-twintig, vijf-zes-zeven, acht-negen-nul-één. Fijne avond.',
      instructions: 'Luister naar het voicemailbericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l2-q5',
          type: 'multiple-choice',
          question: 'Op welke dag is de les volgende week?',
          options: ['Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'],
          correctIndex: 1,
          explanation: '"begint volgende week niet op dinsdag maar op woensdag."',
          topicArea: 'education',
        },
        {
          id: 'a2-l2-q6',
          type: 'multiple-choice',
          question: 'Hoe laat begint de les?',
          options: ['Om zes uur', 'Om half zeven', 'Om zeven uur', 'Om half acht'],
          correctIndex: 1,
          explanation: '"De les begint zoals gewoonlijk om half zeven."',
          topicArea: 'education',
        },
        {
          id: 'a2-l2-q7',
          type: 'multiple-choice',
          question: 'Waarom is de les op een andere dag?',
          options: [
            'Vanwege ziekte van de docent.',
            'Vanwege een nationale feestdag.',
            'Vanwege een schoolactiviteit.',
            'Vanwege een verbouwing.',
          ],
          correctIndex: 1,
          explanation: '"vanwege een nationale feestdag."',
          topicArea: 'education',
        },
        {
          id: 'a2-l2-q8',
          type: 'true-false',
          question: 'De les is in een andere zaal dan normaal.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: '"De locatie is hetzelfde: zaal vijf op de tweede verdieping." — same location.',
          topicArea: 'education',
        },
      ],
    },

    // ── Fragment 3: Gesprek bij een sportclub ──
    {
      id: 'a2-l2-s3',
      passageTitle: 'Fragment 3: Gesprek bij een sportclub',
      passage:
        'Medewerker: Goedemiddag, welkom bij Sportclub Oranje. Waarmee kan ik u helpen? Klant: Ik wil graag lid worden. Wat zijn de mogelijkheden? Medewerker: We hebben drie soorten lidmaatschappen. Een basislidmaatschap kost vijftien euro per maand. Daarmee kunt u gebruik maken van de fitnessruimte. Een pluslidmaatschap is vijfentwintig euro per maand en dan heeft u ook toegang tot groepslessen zoals yoga en zumba. En we hebben een familielidmaatschap voor veertig euro per maand, voor twee volwassenen en maximaal drie kinderen. Klant: Zijn er ook lessen voor kinderen? Medewerker: Ja, kinderen kunnen vanaf zes jaar meedoen aan zwemles of judo. Dat is alleen beschikbaar bij het familielidmaatschap. Klant: En moet ik een contract tekenen? Medewerker: Er is een minimale contractduur van drie maanden. Daarna kunt u maandelijks opzeggen.',
      instructions: 'Luister naar het gesprek en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l2-q9',
          type: 'multiple-choice',
          question: 'Wat kost het pluslidmaatschap per maand?',
          options: [
            'Vijftien euro',
            'Twintig euro',
            'Vijfentwintig euro',
            'Veertig euro',
          ],
          correctIndex: 2,
          explanation: '"Een pluslidmaatschap is vijfentwintig euro per maand."',
          topicArea: 'sport-leisure',
        },
        {
          id: 'a2-l2-q10',
          type: 'multiple-choice',
          question: 'Wat is inbegrepen bij het basislidmaatschap?',
          options: [
            'Fitnessruimte en groepslessen.',
            'Alleen de fitnessruimte.',
            'Zwemles en judo.',
            'Fitnessruimte en zwembad.',
          ],
          correctIndex: 1,
          explanation: '"Een basislidmaatschap kost vijftien euro per maand. Daarmee kunt u gebruik maken van de fitnessruimte."',
          topicArea: 'sport-leisure',
        },
        {
          id: 'a2-l2-q11',
          type: 'multiple-choice',
          question: 'Vanaf welke leeftijd kunnen kinderen meedoen aan lessen?',
          options: ['Vier jaar', 'Vijf jaar', 'Zes jaar', 'Acht jaar'],
          correctIndex: 2,
          explanation: '"kinderen kunnen vanaf zes jaar meedoen aan zwemles of judo."',
          topicArea: 'sport-leisure',
        },
        {
          id: 'a2-l2-q12',
          type: 'true-false',
          question: 'Na de minimale contractduur kunt u elke maand opzeggen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: '"Daarna kunt u maandelijks opzeggen."',
          topicArea: 'sport-leisure',
        },
      ],
    },

    // ── Fragment 4: Instructies voor een nieuwe bewoner ──
    {
      id: 'a2-l2-s4',
      passageTitle: 'Fragment 4: Welkomstgesprek nieuwe bewoner',
      passage:
        'Welkom in uw nieuwe woning! Ik wil u even de huisregels uitleggen. Het afval scheidt u als volgt: gft-afval gaat in de groene bak aan de achterkant, papier en karton gaan in de blauwe bak bij de ingang, en restafval gaat in de grijze bak op de hoek van de straat. Plastic, blik en drinkpakken doet u in de oranje zak — die kunt u ophalen bij de balie. De containers worden elke maandagochtend geleegd. Verder: in dit complex is het verboden om in de gemeenschappelijke ruimtes te roken. Voor de fiets heeft u een plek in de fietsenstalling achter het gebouw — u kunt een sleuteltje halen bij de beheerder. Bij storingen of problemen kunt u bellen met de storingsdienst: nul-tachtig, nul-nul-vijf.',
      instructions: 'Luister naar de instructies en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l2-q13',
          type: 'multiple-choice',
          question: 'In welke bak gooit u papier en karton?',
          options: ['De groene bak', 'De blauwe bak', 'De grijze bak', 'De oranje zak'],
          correctIndex: 1,
          explanation: '"papier en karton gaan in de blauwe bak bij de ingang."',
          topicArea: 'civic-life',
        },
        {
          id: 'a2-l2-q14',
          type: 'multiple-choice',
          question: 'Wanneer worden de containers geleegd?',
          options: [
            'Elke maandagochtend',
            'Elke woensdagochtend',
            'Elke vrijdagochtend',
            'Twee keer per week',
          ],
          correctIndex: 0,
          explanation: '"De containers worden elke maandagochtend geleegd."',
          topicArea: 'civic-life',
        },
        {
          id: 'a2-l2-q15',
          type: 'true-false',
          question: 'Roken in de gemeenschappelijke ruimtes is toegestaan.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: '"in dit complex is het verboden om in de gemeenschappelijke ruimtes te roken."',
          topicArea: 'civic-life',
        },
        {
          id: 'a2-l2-q16',
          type: 'multiple-choice',
          question: 'Waar kunt u een sleuteltje voor de fietsenstalling halen?',
          options: [
            'Bij de balie.',
            'Bij de storingsdienst.',
            'Bij de beheerder.',
            'Bij de gemeente.',
          ],
          correctIndex: 2,
          explanation: '"u kunt een sleuteltje halen bij de beheerder."',
          topicArea: 'civic-life',
        },
      ],
    },

    // ── Fragment 5: Radiobericht over een evenement ──
    {
      id: 'a2-l2-s5',
      passageTitle: 'Fragment 5: Radiobericht – Buurtfeest aankondiging',
      passage:
        'Goedemiddag. Zaterdag acht maart organiseert de buurtvereniging Oud-West haar jaarlijkse buurtfeest op het Mercatorplein. Het feest begint om twee uur \'s middags en duurt tot tien uur \'s avonds. Er is muziek, eten van de buurt, activiteiten voor kinderen en een tweedehands markt. De toegang is gratis. Meehelpen kan ook: de buurtvereniging zoekt nog vrijwilligers voor de opbouw op vrijdagavond en voor de opruiming op zaterdag na afloop. Aanmelden kan via de website buurtwest.nl of door te bellen naar nul-twintig, vier-vijf-zes, zeven-acht-negen-nul. Tot zaterdag!',
      instructions: 'Luister naar het radiobericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l2-q17',
          type: 'multiple-choice',
          question: 'Hoe laat begint het buurtfeest?',
          options: ['Om twaalf uur', 'Om twee uur', 'Om drie uur', 'Om vier uur'],
          correctIndex: 1,
          explanation: '"Het feest begint om twee uur \'s middags."',
          topicArea: 'community',
        },
        {
          id: 'a2-l2-q18',
          type: 'multiple-choice',
          question: 'Wat is de toegangsprijs voor het buurtfeest?',
          options: [
            'Vijf euro',
            'Tien euro',
            'Gratis',
            'Alleen voor leden van de buurtvereniging',
          ],
          correctIndex: 2,
          explanation: '"De toegang is gratis."',
          topicArea: 'community',
        },
        {
          id: 'a2-l2-q19',
          type: 'multiple-choice',
          question: 'Waarvoor zoekt de buurtvereniging nog vrijwilligers?',
          options: [
            'Voor de muziek en het eten.',
            'Voor de opbouw op vrijdagavond en de opruiming op zaterdagavond.',
            'Voor de kinderactiviteiten.',
            'Voor de organisatie van de tweedehands markt.',
          ],
          correctIndex: 1,
          explanation: '"de buurtvereniging zoekt nog vrijwilligers voor de opbouw op vrijdagavond en voor de opruiming op zaterdag na afloop."',
          topicArea: 'community',
        },
        {
          id: 'a2-l2-q20',
          type: 'true-false',
          question: 'Aanmelden als vrijwilliger kan alleen telefonisch.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: '"Aanmelden kan via de website buurtwest.nl of door te bellen" — both options are available.',
          topicArea: 'community',
        },
      ],
    },
  ],
};
