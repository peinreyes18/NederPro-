import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Reading2: ExamPracticeTest = {
  id: 'inburgering-a2-reading-2',
  examType: 'inburgering-a2',
  skill: 'reading',
  title: 'Inburgeringsexamen A2 – Lezen (Oefening 2)',
  description:
    'Practice reading exam for the Inburgeringsexamen at A2 level. Read short Dutch texts — notices, letters, advertisements, and information sheets — and answer comprehension questions. Reflects the format and difficulty of the official DUO inburgeringsexamen.',
  timeLimitMinutes: 40,
  passingScore: 70,
  totalQuestions: 25,
  sections: [
    // ── Section 1: Signs & notices ──
    {
      id: 'a2-r2-s1',
      passageTitle: 'Tekst 1: Borden en mededelingen',
      instructions: 'Lees de mededelingen en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q1',
          type: 'multiple-choice',
          question:
            'U ziet dit bordje op een deur: "Alleen toegang voor medewerkers." Wat betekent dit?',
          options: [
            'Iedereen mag naar binnen.',
            'Alleen mensen die er werken mogen naar binnen.',
            'De deur is altijd gesloten.',
            'U moet aanbellen om naar binnen te gaan.',
          ],
          correctIndex: 1,
          explanation: '"Alleen toegang voor medewerkers" means only employees may enter.',
          topicArea: 'signs',
        },
        {
          id: 'a2-r2-q2',
          type: 'multiple-choice',
          question:
            'Bij de ingang van een winkel staat: "Wegens verbouwing tijdelijk gesloten. Heropening 15 maart." Wat betekent dit?',
          options: [
            'De winkel is voor altijd gesloten.',
            'De winkel is gesloten omdat er gewerkt wordt aan het gebouw.',
            'De winkel opent voor het eerst op 15 maart.',
            'De winkel is alleen gesloten op 15 maart.',
          ],
          correctIndex: 1,
          explanation:
            '"Wegens verbouwing tijdelijk gesloten" means the shop is temporarily closed due to renovation.',
          topicArea: 'signs',
        },
        {
          id: 'a2-r2-q3',
          type: 'multiple-choice',
          question:
            'Op een parkeerplaats staat: "Parkeren uitsluitend voor klanten van dit bedrijf. Max. 2 uur." Wat mag u hier doen?',
          options: [
            'Gratis de hele dag parkeren als u klant bent.',
            'Maximaal 2 uur parkeren als u klant bent van dit bedrijf.',
            'Altijd parkeren, ook als u geen klant bent.',
            'Hier parkeren als u een vergunning heeft.',
          ],
          correctIndex: 1,
          explanation:
            'You may park for a maximum of 2 hours if you are a customer of the business.',
          topicArea: 'signs',
        },
        {
          id: 'a2-r2-q4',
          type: 'true-false',
          question:
            'Het bordje "Nooduitgang — Niet blokkeren" betekent dat u spullen voor de deur mag zetten.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            '"Niet blokkeren" means do not block — you must keep the emergency exit clear.',
          topicArea: 'signs',
        },
      ],
    },

    // ── Section 2: Letter from school ──
    {
      id: 'a2-r2-s2',
      passageTitle: 'Tekst 2: Brief van de basisschool',
      passage:
        'Beste ouders en verzorgers,\n\nOp vrijdag 21 maart organiseren wij een schoolfeest voor alle leerlingen. Het feest begint om 14:00 uur en eindigt om 16:30 uur. De kinderen hoeven die dag geen schooltas mee te nemen.\n\nWij vragen alle ouders om een bijdrage van €2,50 per kind. U kunt dit bedrag voor 14 maart overmaken naar rekeningnummer NL12 ABCD 0123 4567 89 onder vermelding van de naam van uw kind en "schoolfeest".\n\nAls uw kind ziek is op die dag, vragen wij u dit voor 09:00 uur telefonisch te melden via 020-1234567.\n\nMet vriendelijke groet,\nDe directie van basisschool De Regenboog',
      instructions: 'Lees de brief van de school en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q5',
          type: 'multiple-choice',
          question: 'Wanneer begint het schoolfeest?',
          options: ['Om 14:00 uur.', 'Om 16:30 uur.', 'Om 09:00 uur.', 'Om 14 maart.'],
          correctIndex: 0,
          explanation: 'The letter states the party starts at 14:00.',
          topicArea: 'school',
        },
        {
          id: 'a2-r2-q6',
          type: 'multiple-choice',
          question: 'Hoeveel moeten ouders betalen voor het schoolfeest?',
          options: ['€2,00 per kind.', '€2,50 per kind.', '€3,50 per kind.', 'Het is gratis.'],
          correctIndex: 1,
          explanation: 'The letter asks for a contribution of €2.50 per child.',
          topicArea: 'school',
        },
        {
          id: 'a2-r2-q7',
          type: 'true-false',
          question: 'De kinderen moeten op de dag van het schoolfeest hun schooltas meenemen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The letter explicitly says the children do not need to bring their school bag.',
          topicArea: 'school',
        },
        {
          id: 'a2-r2-q8',
          type: 'multiple-choice',
          question: 'Wat moet u doen als uw kind ziek is op 21 maart?',
          options: [
            'Een e-mail sturen naar de school.',
            'Voor 09:00 uur bellen.',
            'Uw kind zelf naar school brengen.',
            'Niets — de school begrijpt het wel.',
          ],
          correctIndex: 1,
          explanation: 'The letter asks parents to call before 09:00 if their child is ill.',
          topicArea: 'school',
        },
      ],
    },

    // ── Section 3: Advertisement ──
    {
      id: 'a2-r2-s3',
      passageTitle: 'Tekst 3: Advertentie — Taallessen voor volwassenen',
      passage:
        'TAALLESSEN VOOR VOLWASSENEN\nTaalcentrum Rotterdam\n\nLeer Nederlands in een kleine groep!\n\n• Niveaus: beginners (A1) en gevorderden (A2–B1)\n• Lesavonden: maandag en woensdag, 19:00–21:00 uur\n• Locatie: Bibliotheek Rotterdam-Zuid, Brede Hilledijk 110\n• Kosten: €120 per cursus (10 weken)\n• Gratis proefles — geen verplichtingen\n\nAanmelden of meer informatie?\nBel: 010-9876543\nMail: info@taalcentrumrotterdam.nl\nOf kom langs op maandag van 18:30 tot 19:00 uur.',
      instructions: 'Lees de advertentie en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q9',
          type: 'multiple-choice',
          question: 'Op welke avonden zijn de taallessen?',
          options: [
            'Dinsdag en donderdag.',
            'Maandag en woensdag.',
            'Maandag en vrijdag.',
            'Elke avond van de week.',
          ],
          correctIndex: 1,
          explanation: 'The advertisement states lessons are on Monday and Wednesday evenings.',
          topicArea: 'advertisement',
        },
        {
          id: 'a2-r2-q10',
          type: 'multiple-choice',
          question: 'Hoeveel kost de cursus?',
          options: ['€100 voor 10 weken.', '€120 voor 10 weken.', '€120 per maand.', 'De cursus is gratis.'],
          correctIndex: 1,
          explanation: 'The advertisement states the course costs €120 for 10 weeks.',
          topicArea: 'advertisement',
        },
        {
          id: 'a2-r2-q11',
          type: 'true-false',
          question: 'U kunt een gratis proefles volgen zonder u te verplichten de cursus te kopen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: 'The ad explicitly states "Gratis proefles — geen verplichtingen" (free trial lesson, no obligations).',
          topicArea: 'advertisement',
        },
        {
          id: 'a2-r2-q12',
          type: 'multiple-choice',
          question: 'Hoe kunt u zich aanmelden voor de cursus?',
          options: [
            'Alleen via de website.',
            'Bellen, mailen of langskomen op maandag.',
            'Alleen langskomen tijdens de les.',
            'Via een formulier bij de gemeente.',
          ],
          correctIndex: 1,
          explanation: 'You can call, email, or visit on Monday between 18:30 and 19:00.',
          topicArea: 'advertisement',
        },
      ],
    },

    // ── Section 4: Information sheet (gemeente) ──
    {
      id: 'a2-r2-s4',
      passageTitle: 'Tekst 4: Informatie — Verhuizen en adreswijziging',
      passage:
        'VERHUIZEN? VERGEET UW ADRESWIJZIGING NIET!\n\nAls u verhuist naar een nieuw adres, moet u dit doorgeven aan de gemeente. Dit heet een adreswijziging.\n\nWat moet u doen?\n1. Ga naar het gemeentehuis of meld u online aan via MijnGemeente.nl\n2. Neem een geldig identiteitsbewijs mee (paspoort of ID-kaart)\n3. Meld uw verhuizing uiterlijk 5 dagen na de verhuisdatum\n\nWaarom is dit belangrijk?\n• De gemeente stuurt brieven naar uw nieuwe adres\n• U kunt toeslagen en uitkeringen niet missen\n• Uw DigiD blijft geldig\n\nHet doorgeven van uw adres is gratis.\nVoor vragen: bel de gemeente op 14 010 (lokaal tarief).',
      instructions: 'Lees de informatie en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q13',
          type: 'multiple-choice',
          question: 'Wanneer moet u uw adreswijziging doorgeven aan de gemeente?',
          options: [
            'Uiterlijk 1 week voor de verhuisdatum.',
            'Uiterlijk 5 dagen na de verhuisdatum.',
            'Binnen 1 maand na de verhuisdatum.',
            'Zo snel mogelijk, maar er is geen deadline.',
          ],
          correctIndex: 1,
          explanation: 'The information sheet states you must register your new address within 5 days after moving.',
          topicArea: 'government',
        },
        {
          id: 'a2-r2-q14',
          type: 'multiple-choice',
          question: 'Wat heeft u nodig als u naar het gemeentehuis gaat voor een adreswijziging?',
          options: [
            'Een huurcontract van uw nieuwe woning.',
            'Een geldig identiteitsbewijs.',
            'Een brief van uw verhuurder.',
            'Uw DigiD-code.',
          ],
          correctIndex: 1,
          explanation: 'You need a valid identity document (passport or ID card).',
          topicArea: 'government',
        },
        {
          id: 'a2-r2-q15',
          type: 'true-false',
          question: 'Het doorgeven van een adreswijziging aan de gemeente kost geld.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The information sheet states that registering your address change is free.',
          topicArea: 'government',
        },
      ],
    },

    // ── Section 5: Notice board ──
    {
      id: 'a2-r2-s5',
      passageTitle: 'Tekst 5: Mededelingen op een prikbord',
      instructions: 'Lees de berichten op een prikbord en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q16',
          type: 'multiple-choice',
          question:
            'Bericht A: "Te huur: fietsstalling voor 2 fietsen in afgesloten ruimte. €8 per maand. Bel Maarten: 06-11223344." Wat biedt Maarten aan?',
          options: [
            'Een fiets te koop.',
            'Een plek om fietsen veilig op te slaan voor €8 per maand.',
            'Fietsherstelwerk voor €8.',
            'Een fietsverhuurservice.',
          ],
          correctIndex: 1,
          explanation: 'Maarten is renting out a locked bicycle storage space for €8 per month.',
          topicArea: 'notice-board',
        },
        {
          id: 'a2-r2-q17',
          type: 'multiple-choice',
          question:
            'Bericht B: "Gevonden: gouden ring bij de ingang van het zwembad op 10 april. Eigenaar kan contact opnemen via het zwembad." Wat moet u doen als de ring van u is?',
          options: [
            'Naar de politie gaan.',
            'Contact opnemen via het zwembad.',
            'Wachten tot iemand u belt.',
            'Een bericht achterlaten op het prikbord.',
          ],
          correctIndex: 1,
          explanation: 'The notice says the owner should contact the swimming pool.',
          topicArea: 'notice-board',
        },
        {
          id: 'a2-r2-q18',
          type: 'multiple-choice',
          question:
            'Bericht C: "Buurtbijeenkomst over parkeeroverlast. Dinsdag 25 april, 20:00 uur. Locatie: wijkcentrum De Schakel. Iedereen welkom." Voor wie is deze bijeenkomst?',
          options: [
            'Alleen voor mensen met een auto.',
            'Alleen voor buurtbewoners met een parkeervergunning.',
            'Voor iedereen die wil komen.',
            'Alleen voor de gemeente.',
          ],
          correctIndex: 2,
          explanation: 'The notice states "Iedereen welkom" — everyone is welcome.',
          topicArea: 'notice-board',
        },
      ],
    },

    // ── Section 6: Public health information ──
    {
      id: 'a2-r2-s6',
      passageTitle: 'Tekst 6: Informatie over de apotheek',
      passage:
        'Apotheek De Linde — praktische informatie\n\nOpeningstijden:\nMaandag t/m vrijdag: 08:30–18:00 uur\nZaterdag: 10:00–14:00 uur\nZondag: gesloten\n\nHerhalingsrecept aanvragen:\nU kunt een herhalingsrecept aanvragen via onze website of telefonisch op 030-5556677. Houd er rekening mee dat wij 2 werkdagen nodig hebben om uw medicijnen klaar te zetten.\n\nMedicijnen ophalen:\nU kunt uw medicijnen ophalen aan de balie. Neem uw legitimatiebewijs mee bij de eerste keer. Als u niet zelf kunt komen, kan iemand anders uw medicijnen ophalen mits hij of zij uw naam en geboortedatum weet.\n\nVragen over medicijnen?\nSpreek de apotheker aan of bel tijdens openingstijden.',
      instructions: 'Lees de informatie van de apotheek en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q19',
          type: 'multiple-choice',
          question: 'Hoe laat sluit de apotheek op zaterdag?',
          options: ['Om 18:00 uur.', 'Om 14:00 uur.', 'Om 16:00 uur.', 'De apotheek is zaterdag gesloten.'],
          correctIndex: 1,
          explanation: 'On Saturday the pharmacy closes at 14:00.',
          topicArea: 'healthcare',
        },
        {
          id: 'a2-r2-q20',
          type: 'multiple-choice',
          question: 'Hoe lang duurt het voordat uw medicijnen klaarstaan na een herhaalrecept?',
          options: ['Dezelfde dag.', '1 werkdag.', '2 werkdagen.', '1 week.'],
          correctIndex: 2,
          explanation: 'The information states 2 working days are needed to prepare the medication.',
          topicArea: 'healthcare',
        },
        {
          id: 'a2-r2-q21',
          type: 'true-false',
          question: 'Iemand anders kan uw medicijnen ophalen als hij of zij uw naam en geboortedatum weet.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: 'The information sheet confirms someone else can collect your medication if they know your name and date of birth.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 7: Formal notification ──
    {
      id: 'a2-r2-s7',
      passageTitle: 'Tekst 7: Brief van de woningcorporatie',
      passage:
        'Betreft: Geplande onderhoudswerkzaamheden\n\nGeachte huurder,\n\nOp dinsdag 8 mei voeren wij onderhoud uit aan de centrale verwarming in uw woning. Een monteur komt tussen 09:00 en 13:00 uur. Wij vragen u om die ochtend thuis te zijn.\n\nTijdens de werkzaamheden moet het water en de verwarming kort worden afgesloten (maximaal 2 uur). Zorg ervoor dat u voldoende water in huis heeft.\n\nAls u op die dag niet thuis kunt zijn, neem dan contact met ons op via 030-2223333 of bewoner@woningstichting.nl om een andere afspraak te maken.\n\nMet vriendelijke groet,\nWoningstichting De Sleutel',
      instructions: 'Lees de brief en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-r2-q22',
          type: 'multiple-choice',
          question: 'Wat komt de monteur doen op 8 mei?',
          options: [
            'De badkamer renoveren.',
            'Onderhoud uitvoeren aan de centrale verwarming.',
            'Een nieuwe voordeur plaatsen.',
            'De waterleiding inspecteren.',
          ],
          correctIndex: 1,
          explanation: 'The letter states the maintenance is for the central heating system.',
          topicArea: 'housing',
        },
        {
          id: 'a2-r2-q23',
          type: 'multiple-choice',
          question: 'Tussen welke tijden komt de monteur?',
          options: ['08:00–12:00 uur.', '09:00–13:00 uur.', '10:00–14:00 uur.', '13:00–17:00 uur.'],
          correctIndex: 1,
          explanation: 'The letter states the technician will come between 09:00 and 13:00.',
          topicArea: 'housing',
        },
        {
          id: 'a2-r2-q24',
          type: 'true-false',
          question: 'Het water en de verwarming worden de hele dag afgesloten tijdens de werkzaamheden.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The letter states the water and heating will be shut off for a maximum of 2 hours, not the whole day.',
          topicArea: 'housing',
        },
        {
          id: 'a2-r2-q25',
          type: 'multiple-choice',
          question: 'Wat moet u doen als u op 8 mei niet thuis kunt zijn?',
          options: [
            'Een buurman vragen om de monteur binnen te laten.',
            'De deur open laten staan voor de monteur.',
            'Contact opnemen met de woningstichting voor een andere afspraak.',
            'Niets — de monteur komt dan een andere dag vanzelf terug.',
          ],
          correctIndex: 2,
          explanation: 'The letter asks you to contact them to arrange a different appointment.',
          topicArea: 'housing',
        },
      ],
    },
  ],
};
