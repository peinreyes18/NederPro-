import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam4: ExamPracticeTest = {
  id: 'knm-practice-4',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 4 – Kennis van de Nederlandse Maatschappij',
  description:
    'Practice exam for the Kennis van de Nederlandse Maatschappij (KNM) component of the inburgeringsexamen. Tests knowledge of Dutch society, norms, institutions, and daily life. This exam covers social benefits, public transport, consumer rights, employment, housing, and civic life.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Sociale Zekerheid ──
    {
      id: 'knm4-s1',
      passageTitle: 'Sociale Zekerheid en Uitkeringen',
      instructions: 'Beantwoord de vragen over sociale zekerheid en uitkeringen in Nederland.',
      questions: [
        {
          id: 'knm4-q1',
          type: 'multiple-choice',
          question: 'Wat is de WW-uitkering?',
          options: [
            'Een uitkering voor mensen die niet kunnen werken door ziekte.',
            'Een uitkering voor mensen die werkloos zijn geworden.',
            'Een uitkering voor mensen die met pensioen gaan.',
            'Een uitkering voor mensen met een laag inkomen.',
          ],
          correctIndex: 1,
          explanation:
            'De WW (Werkloosheidswet) is een uitkering voor mensen die hun baan hebben verloren en aan bepaalde voorwaarden voldoen.',
          topicArea: 'social-benefits',
        },
        {
          id: 'knm4-q2',
          type: 'true-false',
          question:
            'Als u een WW-uitkering ontvangt, hoeft u niet actief op zoek te gaan naar werk.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Mensen met een WW-uitkering zijn verplicht actief te solliciteren en beschikbaar te zijn voor werk.',
          topicArea: 'social-benefits',
        },
        {
          id: 'knm4-q3',
          type: 'multiple-choice',
          question: 'Wat is de bijstand?',
          options: [
            'Een lening van de gemeente voor mensen met schulden.',
            'Een uitkering voor mensen die geen recht hebben op WW en onvoldoende inkomen hebben.',
            'Een subsidie voor mensen die een eigen bedrijf beginnen.',
            'Een vergoeding voor mensen die mantelzorg verlenen.',
          ],
          correctIndex: 1,
          explanation:
            'De bijstand (Participatiewet) is een laatste vangnet voor mensen zonder andere inkomsten.',
          topicArea: 'social-benefits',
        },
        {
          id: 'knm4-q4',
          type: 'multiple-choice',
          question: 'Bij welke instantie vraagt u een WW-uitkering aan?',
          options: ['De gemeente.', 'Het UWV.', 'De Belastingdienst.', 'De SVB.'],
          correctIndex: 1,
          explanation:
            'Het UWV (Uitvoeringsinstituut Werknemersverzekeringen) is verantwoordelijk voor de WW-uitkering.',
          topicArea: 'social-benefits',
        },
        {
          id: 'knm4-q5',
          type: 'true-false',
          question: 'De AOW is een pensioenuitkering van de overheid voor mensen vanaf 67 jaar.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'De AOW (Algemene Ouderdomswet) is een staatspensioen dat iedereen ontvangt die in Nederland heeft gewoond of gewerkt, momenteel vanaf de AOW-leeftijd (rond 67 jaar).',
          topicArea: 'social-benefits',
        },
      ],
    },

    // ── Section 2: Openbaar Vervoer ──
    {
      id: 'knm4-s2',
      passageTitle: 'Openbaar Vervoer',
      instructions: 'Beantwoord de vragen over het openbaar vervoer in Nederland.',
      questions: [
        {
          id: 'knm4-q6',
          type: 'multiple-choice',
          question: 'Hoe betaalt u voor de trein in Nederland?',
          options: [
            'U koopt altijd een papieren kaartje bij de automaat.',
            'U in- en uitcheckt met een OV-chipkaart of bankpas.',
            'U betaalt de conducteur contant in de trein.',
            'U heeft een abonnement nodig dat u bij de gemeente aanvraagt.',
          ],
          correctIndex: 1,
          explanation:
            'In Nederland checkt u in en uit met een OV-chipkaart of contactloze betaalpas. U kunt ook een e-ticket kopen via de NS-app.',
          topicArea: 'transport',
        },
        {
          id: 'knm4-q7',
          type: 'true-false',
          question: 'In de trein mag u altijd gratis een fiets meenemen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Voor het meenemen van een fiets in de trein moet u een apart fietsenkaartje kopen. Dit is niet gratis.',
          topicArea: 'transport',
        },
        {
          id: 'knm4-q8',
          type: 'multiple-choice',
          question: 'Wat is het verschil tussen een intercity en een sprinter?',
          options: [
            'Een intercity stopt op alle stations; een sprinter alleen op grote stations.',
            'Een intercity stopt alleen op grote stations; een sprinter stopt ook op kleine stations.',
            "Een intercity rijdt alleen overdag; een sprinter rijdt ook 's nachts.",
            'Er is geen verschil; het zijn twee namen voor hetzelfde.',
          ],
          correctIndex: 1,
          explanation:
            'Een intercity rijdt sneller en stopt alleen op grotere stations. Een sprinter stopt op alle stations, ook kleine.',
          topicArea: 'transport',
        },
        {
          id: 'knm4-q9',
          type: 'multiple-choice',
          question: 'Wat doet u als u in de trein zit zonder geldig vervoersbewijs?',
          options: [
            'U stapt op het volgende station uit.',
            'U vraagt de conducteur om een nieuw kaartje te kopen.',
            'U kunt een boete krijgen van de conducteur.',
            'U checkt alsnog in met uw OV-chipkaart.',
          ],
          correctIndex: 2,
          explanation:
            'Reizen zonder geldig vervoersbewijs is zwartrijden. De conducteur kan een boete opleggen.',
          topicArea: 'transport',
        },
        {
          id: 'knm4-q10',
          type: 'true-false',
          question: 'Met een OV-jaarkaart kunt u onbeperkt reizen met al het openbaar vervoer in Nederland.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Er zijn verschillende soorten OV-abonnementen met verschillende voorwaarden. Een OV-jaarkaart geldt doorgaans voor trein maar niet automatisch voor bus, tram en metro van regionale vervoerders.',
          topicArea: 'transport',
        },
      ],
    },

    // ── Section 3: Consumentenrechten ──
    {
      id: 'knm4-s3',
      passageTitle: 'Consumentenrechten en Klachten',
      instructions: 'Beantwoord de vragen over consumentenrechten in Nederland.',
      questions: [
        {
          id: 'knm4-q11',
          type: 'multiple-choice',
          question:
            'U koopt online een jas. Na ontvangst wilt u de jas terugsturen. Hoe lang heeft u wettelijk de tijd om dit te doen?',
          options: ['7 dagen.', '14 dagen.', '30 dagen.', '60 dagen.'],
          correctIndex: 1,
          explanation:
            'Bij online aankopen heeft u in Nederland en de EU wettelijk 14 dagen bedenktijd om het product terug te sturen zonder opgave van reden.',
          topicArea: 'consumer-rights',
        },
        {
          id: 'knm4-q12',
          type: 'true-false',
          question:
            'Als u een product met garantie koopt en het binnen de garantietermijn kapotgaat, moet de winkel het altijd gratis repareren of vervangen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Bij garantie heeft u recht op gratis reparatie, vervanging of terugbetaling als het product niet aan de verwachte kwaliteit voldoet binnen de garantietermijn.',
          topicArea: 'consumer-rights',
        },
        {
          id: 'knm4-q13',
          type: 'multiple-choice',
          question: 'Bij welke organisatie kunt u terecht als u een klacht heeft over een bedrijf en er niet uitkomt?',
          options: [
            'De politie.',
            'De gemeente.',
            'De Consumentenbond of een geschillencommissie.',
            'De Belastingdienst.',
          ],
          correctIndex: 2,
          explanation:
            'De Consumentenbond helpt consumenten met klachten. Voor bindende uitspraken kunt u naar een geschillencommissie.',
          topicArea: 'consumer-rights',
        },
        {
          id: 'knm4-q14',
          type: 'multiple-choice',
          question: 'Farida koopt een koelkast. Na twee weken werkt hij niet meer. Wat kan ze het beste doen?',
          options: [
            'Een nieuwe koelkast kopen.',
            'Contact opnemen met de winkel en haar recht op garantie inroepen.',
            'De koelkast zelf proberen te repareren.',
            'Naar de gemeente gaan voor hulp.',
          ],
          correctIndex: 1,
          explanation:
            'Bij een defect product binnen de garantietermijn neemt u contact op met de winkel en beroept u zich op uw garantierechten.',
          topicArea: 'consumer-rights',
        },
        {
          id: 'knm4-q15',
          type: 'true-false',
          question: 'Een winkel is verplicht uw geld terug te geven als u spijt heeft van een aankoop in de winkel.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Bij aankopen in een fysieke winkel heeft u geen wettelijk recht op retour. De winkel kan dit als service aanbieden, maar is er niet toe verplicht (tenzij het product defect is).',
          topicArea: 'consumer-rights',
        },
      ],
    },

    // ── Section 4: Werk en Arbeidsrecht ──
    {
      id: 'knm4-s4',
      passageTitle: 'Werk en Arbeidsrecht',
      instructions: 'Beantwoord de vragen over werken en arbeidsrecht in Nederland.',
      questions: [
        {
          id: 'knm4-q16',
          type: 'multiple-choice',
          question: 'Wat staat er in een arbeidscontract?',
          options: [
            'Alleen het salaris van de werknemer.',
            'Afspraken over salaris, werktijden, taken en andere arbeidsvoorwaarden.',
            'De regels van de vakbond voor de werkgever.',
            'De belastingaangifte van de werknemer.',
          ],
          correctIndex: 1,
          explanation:
            'Een arbeidscontract bevat afspraken tussen werkgever en werknemer over salaris, werktijden, functie, vakantiedagen en andere arbeidsvoorwaarden.',
          topicArea: 'employment',
        },
        {
          id: 'knm4-q17',
          type: 'true-false',
          question: 'In Nederland mag een werkgever u ontslaan zonder enige reden of procedure.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'In Nederland heeft u ontslagbescherming. Een werkgever moet een geldige reden hebben en in de meeste gevallen toestemming van het UWV of de rechter.',
          topicArea: 'employment',
        },
        {
          id: 'knm4-q18',
          type: 'multiple-choice',
          question: 'Wat is het minimumloon in Nederland?',
          options: [
            'Het loon dat de vakbond vaststelt voor elke sector.',
            'Het wettelijk vastgestelde minimumbedrag dat een werkgever moet betalen.',
            'Het gemiddelde loon in Nederland.',
            'Het loon dat u ontvangt als u in bijstand zit.',
          ],
          correctIndex: 1,
          explanation:
            'Het minimumloon is het wettelijk minimum dat werkgevers verplicht zijn te betalen aan werknemers van 21 jaar en ouder.',
          topicArea: 'employment',
        },
        {
          id: 'knm4-q19',
          type: 'multiple-choice',
          question: 'Wat is een nuluren-contract?',
          options: [
            'Een contract waarbij u 0 uur per week werkt maar toch betaald wordt.',
            'Een contract waarbij u werkt als de werkgever u oproept, zonder vast aantal uren.',
            'Een contract voor mensen die geen ervaring hebben.',
            'Een contract voor mensen die tijdelijk werkloos zijn.',
          ],
          correctIndex: 1,
          explanation:
            'Bij een nuluren-contract (oproepcontract) heeft u geen gegarandeerd aantal uren. U wordt opgeroepen als er werk is.',
          topicArea: 'employment',
        },
        {
          id: 'knm4-q20',
          type: 'true-false',
          question: 'In Nederland heeft elke werknemer recht op minimaal 20 vakantiedagen per jaar bij een voltijds dienstverband.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Wettelijk hebben werknemers recht op minimaal 4 × het aantal werkuren per week aan vakantiedagen. Bij 40 uur per week zijn dat 20 dagen.',
          topicArea: 'employment',
        },
      ],
    },

    // ── Section 5: Wonen en Huren ──
    {
      id: 'knm4-s5',
      passageTitle: 'Wonen en Huren',
      instructions: 'Beantwoord de vragen over wonen en huren in Nederland.',
      questions: [
        {
          id: 'knm4-q21',
          type: 'multiple-choice',
          question: 'Wat is huurtoeslag?',
          options: [
            'Een lening van de bank voor mensen die een huis willen kopen.',
            'Een bijdrage van de overheid om de huurkosten te verlagen voor mensen met een laag inkomen.',
            'Een vergoeding die u van uw werkgever krijgt voor woonkosten.',
            'Een belasting die huurders betalen aan de gemeente.',
          ],
          correctIndex: 1,
          explanation:
            'Huurtoeslag is een financiële bijdrage van de Belastingdienst/Toeslagen voor mensen met een laag inkomen die huren.',
          topicArea: 'housing',
        },
        {
          id: 'knm4-q22',
          type: 'true-false',
          question: 'Als huurder bent u altijd verantwoordelijk voor groot onderhoud aan de woning, zoals een nieuw dak.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Groot onderhoud (zoals een dak of cv-ketel) is de verantwoordelijkheid van de verhuurder. Kleine reparaties zijn voor de huurder.',
          topicArea: 'housing',
        },
        {
          id: 'knm4-q23',
          type: 'multiple-choice',
          question: 'Wat is een Vereniging van Eigenaren (VvE)?',
          options: [
            'Een organisatie voor huurders in sociale woningbouw.',
            'Een organisatie van eigenaren van appartementen die gezamenlijk het gebouw beheren.',
            'Een vakbond voor mensen die in de bouwsector werken.',
            'Een overheidsinstantie die woningprijzen reguleert.',
          ],
          correctIndex: 1,
          explanation:
            'Een VvE beheert gezamenlijk het gebouw en de gemeenschappelijke ruimtes van een appartementencomplex.',
          topicArea: 'housing',
        },
        {
          id: 'knm4-q24',
          type: 'multiple-choice',
          question:
            'U wilt uw huurwoning verlaten. Hoeveel opzegtermijn heeft u doorgaans als huurder?',
          options: ['1 week.', '1 maand.', '3 maanden.', '6 maanden.'],
          correctIndex: 1,
          explanation:
            'Voor huurders geldt doorgaans een opzegtermijn van 1 maand. Verhuurders hebben een langere opzegtermijn (minimaal 3 maanden).',
          topicArea: 'housing',
        },
        {
          id: 'knm4-q25',
          type: 'true-false',
          question: 'U kunt bij de Huurcommissie terecht als u een geschil heeft met uw verhuurder over de huurprijs.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'De Huurcommissie is een onafhankelijke organisatie die geschillen tussen huurder en verhuurder behandelt, onder andere over de huurprijs.',
          topicArea: 'housing',
        },
      ],
    },

    // ── Section 6: Gezondheid en Zorg ──
    {
      id: 'knm4-s6',
      passageTitle: 'Gezondheid en Zorg',
      instructions: 'Beantwoord de vragen over gezondheid en de gezondheidszorg in Nederland.',
      questions: [
        {
          id: 'knm4-q26',
          type: 'multiple-choice',
          question: 'Wat is de rol van de huisarts in Nederland?',
          options: [
            'De huisarts voert alle medische behandelingen zelf uit.',
            'De huisarts is de eerste stap in de zorg en verwijst door naar specialisten indien nodig.',
            'De huisarts is alleen beschikbaar voor spoedeisende hulp.',
            'De huisarts werkt alleen in ziekenhuizen.',
          ],
          correctIndex: 1,
          explanation:
            'In Nederland gaat u eerst naar de huisarts (poortwachter). De huisarts verwijst u zo nodig door naar een specialist.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm4-q27',
          type: 'true-false',
          question: 'De spoedeisende hulp (SEH) van een ziekenhuis is bedoeld voor alle kleine klachten waarvoor u niet bij de huisarts terecht kunt.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'De SEH is bedoeld voor ernstige of levensbedreigende situaties. Voor niet-spoedeisende klachten buiten kantooruren gaat u naar de huisartsenpost (HAP).',
          topicArea: 'healthcare',
        },
        {
          id: 'knm4-q28',
          type: 'multiple-choice',
          question: 'Wat is het eigen risico bij de zorgverzekering?',
          options: [
            'Het bedrag dat u per maand betaalt voor uw zorgverzekering.',
            'Het bedrag dat u per jaar zelf betaalt voor zorgkosten voordat de verzekering bijspringt.',
            'De kosten van medicijnen die niet worden vergoed.',
            'Het bedrag dat u betaalt als u naar het buitenland gaat.',
          ],
          correctIndex: 1,
          explanation:
            'Het eigen risico is een drempelbedrag per jaar. U betaalt zorgkosten zelf totdat dit bedrag bereikt is; daarna betaalt de verzekeraar.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm4-q29',
          type: 'multiple-choice',
          question: 'Hamid heeft hoge koorts en kan zijn huisarts niet bereiken. Het is middernacht. Wat moet hij doen?',
          options: [
            'Wachten tot de volgende ochtend.',
            'Direct naar de SEH van het ziekenhuis gaan.',
            'De huisartsenpost (HAP) bellen.',
            '112 bellen.',
          ],
          correctIndex: 2,
          explanation:
            'Voor niet-levensbedreigende spoed buiten kantooruren belt u de huisartsenpost (HAP). Alleen bij echte noodgevallen belt u 112.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm4-q30',
          type: 'true-false',
          question: 'Kinderen onder de 18 jaar hoeven geen zorgverzekering af te sluiten en zijn automatisch meeverzekerd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Kinderen tot 18 jaar zijn gratis meeverzekerd via de zorgverzekering van hun ouder of verzorger.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 7: Democratie en Burgerzaken ──
    {
      id: 'knm4-s7',
      passageTitle: 'Democratie, Rechten en Plichten',
      instructions: 'Beantwoord de vragen over democratie, rechten en burgerzaken.',
      questions: [
        {
          id: 'knm4-q31',
          type: 'multiple-choice',
          question: 'Hoe vaak vinden er in Nederland Tweede Kamerverkiezingen plaats?',
          options: [
            'Elke twee jaar.',
            'Elke vier jaar, of eerder als de regering valt.',
            'Elke vijf jaar, nooit eerder.',
            'Elke zes jaar.',
          ],
          correctIndex: 1,
          explanation:
            'Tweede Kamerverkiezingen worden elke vier jaar gehouden, maar kunnen eerder plaatsvinden als de coalitie valt.',
          topicArea: 'politics',
        },
        {
          id: 'knm4-q32',
          type: 'true-false',
          question: 'Iedereen die in Nederland woont, mag stemmen bij de Tweede Kamerverkiezingen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Alleen Nederlanders van 18 jaar en ouder mogen stemmen bij de Tweede Kamerverkiezingen. EU-burgers mogen stemmen bij gemeenteraads- en Europees Parlementsverkiezingen.',
          topicArea: 'politics',
        },
        {
          id: 'knm4-q33',
          type: 'multiple-choice',
          question: 'Wat is de taak van de Eerste Kamer?',
          options: [
            'Het maken van nieuwe wetten.',
            'Het controleren en goedkeuren van wetten die door de Tweede Kamer zijn aangenomen.',
            'Het benoemen van de minister-president.',
            'Het beheren van de rijksbegroting.',
          ],
          correctIndex: 1,
          explanation:
            'De Eerste Kamer (Senaat) controleert wetten die de Tweede Kamer heeft aangenomen en kan ze goedkeuren of verwerpen, maar geen wijzigingen aanbrengen.',
          topicArea: 'politics',
        },
        {
          id: 'knm4-q34',
          type: 'multiple-choice',
          question: 'Wat is de vrijheid van meningsuiting?',
          options: [
            'Het recht om alles te zeggen of schrijven zonder gevolgen.',
            'Het recht om uw mening te uiten, binnen de grenzen van de wet.',
            'Het recht om alleen positieve dingen over de overheid te zeggen.',
            'Het recht om anoniem informatie te verspreiden.',
          ],
          correctIndex: 1,
          explanation:
            'Vrijheid van meningsuiting is een grondrecht, maar heeft grenzen: haatzaaien, belediging en opruiing zijn strafbaar.',
          topicArea: 'rights',
        },
        {
          id: 'knm4-q35',
          type: 'true-false',
          question: 'In Nederland is scheiding van kerk en staat wettelijk vastgelegd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'De scheiding van kerk en staat is een fundamenteel principe in Nederland: de overheid bemoeit zich niet met religie en religie bemoeit zich niet met het bestuur.',
          topicArea: 'rights',
        },
      ],
    },

    // ── Section 8: Onderwijs en Integratie ──
    {
      id: 'knm4-s8',
      passageTitle: 'Onderwijs en Inburgering',
      instructions: 'Beantwoord de vragen over onderwijs en inburgering in Nederland.',
      questions: [
        {
          id: 'knm4-q36',
          type: 'multiple-choice',
          question: 'Tot welke leeftijd is onderwijs verplicht in Nederland?',
          options: ['14 jaar.', '16 jaar.', '18 jaar.', '21 jaar.'],
          correctIndex: 1,
          explanation:
            'De leerplicht geldt in Nederland tot 16 jaar (volledige leerplicht). Daarna geldt de kwalificatieplicht tot 18 jaar voor jongeren zonder startkwalificatie.',
          topicArea: 'education',
        },
        {
          id: 'knm4-q37',
          type: 'true-false',
          question: 'Een MBO-opleiding is hoger dan een HBO-opleiding.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'MBO (middelbaar beroepsonderwijs) is lager dan HBO (hoger beroepsonderwijs). De volgorde is: basisschool → middelbare school (VMBO/HAVO/VWO) → MBO/HBO/WO.',
          topicArea: 'education',
        },
        {
          id: 'knm4-q38',
          type: 'multiple-choice',
          question: 'Wat houdt het inburgeringsexamen in?',
          options: [
            'Een examen over de Nederlandse taal en kennis van de Nederlandse samenleving.',
            'Een rijexamen dat nieuwkomers moeten halen.',
            'Een medisch onderzoek voor mensen die naar Nederland komen.',
            'Een financieel examen over belastingen betalen in Nederland.',
          ],
          correctIndex: 0,
          explanation:
            'Het inburgeringsexamen toetst of nieuwkomers voldoende Nederlands spreken, lezen en schrijven (A2-niveau) en de Nederlandse samenleving kennen (KNM).',
          topicArea: 'integration',
        },
        {
          id: 'knm4-q39',
          type: 'multiple-choice',
          question: 'Yara is 7 jaar en woont met haar ouders in Nederland. Heeft zij recht op onderwijs?',
          options: [
            'Nee, alleen als haar ouders de Nederlandse nationaliteit hebben.',
            'Ja, alle kinderen die in Nederland wonen hebben recht op onderwijs.',
            'Alleen als haar ouders een verblijfsvergunning hebben.',
            'Nee, kinderen van buitenlanders gaan naar een internationale school.',
          ],
          correctIndex: 1,
          explanation:
            'Alle kinderen die in Nederland wonen, ongeacht hun nationaliteit of verblijfsstatus, hebben recht op onderwijs en vallen onder de leerplicht.',
          topicArea: 'education',
        },
        {
          id: 'knm4-q40',
          type: 'true-false',
          question: 'Als nieuwkomer kunt u zelf een taalcursus kiezen en de kosten declareren via de DUO-lening.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Inburgeraars kunnen een lening aanvragen bij DUO om een taalcursus en inburgeringscursus te betalen. Na het behalen van het examen hoeft (een deel van) de lening niet terugbetaald te worden.',
          topicArea: 'integration',
        },
      ],
    },
  ],
};
