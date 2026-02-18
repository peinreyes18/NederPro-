import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IIReading2: ExamPracticeTest = {
  id: 'staatsexamen-nt2-ii-reading-2',
  examType: 'staatsexamen-nt2-ii',
  skill: 'reading',
  title: 'Staatsexamen NT2 Programma II – Lezen (Oefening 2)',
  description:
    'Practice reading exam for Staatsexamen NT2 Programma II at B2 level. Read complex Dutch texts — opinion pieces, academic articles, policy documents, and analytical reports — and answer in-depth comprehension questions. Reflects the format and difficulty of the official DUO Staatsexamen Programma II.',
  timeLimitMinutes: 100,
  passingScore: 60,
  totalQuestions: 35,
  sections: [
    // ── Section 1: Opinion column ──
    {
      id: 'nt2-ii-r2-s1',
      passageTitle: 'Tekst 1: Moeten scholen meer aandacht besteden aan mediawijsheid?',
      passage:
        'In een wereld die steeds meer wordt bepaald door algoritmen, sociale media en nepnieuws, rijst de vraag of het Nederlandse onderwijs voldoende jongeren voorbereidt op het kritisch omgaan met digitale informatie. Mediawijsheid — het vermogen om media bewust en kritisch te gebruiken — is geen luxe meer, maar een basisvaardigheid.\n\nToch blijkt uit onderzoek van de Universiteit van Utrecht dat slechts een derde van de middelbare scholieren in staat is om betrouwbare van onbetrouwbare nieuwsbronnen te onderscheiden. Scholieren herkennen gesponsorde content niet als reclame, verwarren meningen met feiten, en zijn gevoelig voor emotioneel geladen desinformatie. Dit heeft gevolgen: niet alleen voor individuele beslissingen, maar ook voor de kwaliteit van het democratische debat.\n\nVoorstanders van verplicht mediawijsheidsonderwijs wijzen erop dat Finland al jarenlang succesvol is met dit model. Leerlingen leren er van jongs af aan bronnen te checken, argumenten te analyseren en de logica achter aanbevelingsalgoritmen te begrijpen. Critici vrezen echter dat extra vakken ten koste gaan van andere vakken en dat leraren onvoldoende zijn opgeleid voor dit onderwerp.\n\nDe discussie raakt aan een fundamentele vraag: wie is verantwoordelijk voor digitale geletterdheid — de school, de ouders, of de overheid die sociale mediaplatforms moet reguleren?',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q1',
          type: 'multiple-choice',
          question: 'Wat is de centrale stelling van dit artikel?',
          options: [
            'Sociale media moet worden verboden voor jongeren onder de 18.',
            'Mediawijsheid is een essentiële vaardigheid die onvoldoende aandacht krijgt in het onderwijs.',
            'Finland heeft het beste onderwijssysteem ter wereld.',
            'Algoritmen vormen geen gevaar voor de democratie.',
          ],
          correctIndex: 1,
          explanation:
            'The article argues that media literacy is a basic skill that is insufficiently addressed in Dutch education.',
          topicArea: 'education-media',
        },
        {
          id: 'nt2-ii-r2-q2',
          type: 'multiple-choice',
          question: 'Wat blijkt uit het onderzoek van de Universiteit van Utrecht?',
          options: [
            'Twee derde van de scholieren kan betrouwbare bronnen herkennen.',
            'Slechts een derde van de scholieren onderscheidt betrouwbare van onbetrouwbare bronnen.',
            'Alle scholieren herkennen gesponsorde content als reclame.',
            'Middelbare scholieren zijn goed in het analyseren van argumenten.',
          ],
          correctIndex: 1,
          explanation:
            'The research found that only one third of secondary school students can distinguish reliable from unreliable sources.',
          topicArea: 'education-media',
        },
        {
          id: 'nt2-ii-r2-q3',
          type: 'true-false',
          question: 'Critici zijn volledig voor verplicht mediawijsheidsonderwijs.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Critics worry that extra subjects come at the expense of other subjects and that teachers are insufficiently trained.',
          topicArea: 'education-media',
        },
        {
          id: 'nt2-ii-r2-q4',
          type: 'multiple-choice',
          question: 'Welk land wordt als positief voorbeeld genoemd voor mediawijsheidsonderwijs?',
          options: ['Duitsland.', 'Zweden.', 'Finland.', 'Denemarken.'],
          correctIndex: 2,
          explanation: 'The article mentions Finland as a country that has successfully implemented media literacy education.',
          topicArea: 'education-media',
        },
        {
          id: 'nt2-ii-r2-q5',
          type: 'multiple-choice',
          question: 'Welke fundamentele vraag stelt de auteur aan het einde?',
          options: [
            'Hoe kunnen scholieren beter leren programmeren?',
            'Wie is verantwoordelijk voor digitale geletterdheid?',
            'Wanneer moet mediawijsheid een verplicht vak worden?',
            'Hoe kunnen algoritmen worden aangepast voor jongeren?',
          ],
          correctIndex: 1,
          explanation:
            'The final paragraph poses the fundamental question of who is responsible for digital literacy.',
          topicArea: 'education-media',
        },
      ],
    },

    // ── Section 2: Academic/scientific article ──
    {
      id: 'nt2-ii-r2-s2',
      passageTitle: 'Tekst 2: Vergrijzing en de arbeidsmarkt',
      passage:
        'Nederland vergrijst in rap tempo. Naar verwachting is in 2040 een kwart van de bevolking ouder dan 65 jaar. Deze demografische verschuiving heeft verstrekkende gevolgen voor de arbeidsmarkt, de zorgsector en het pensioenstelsel.\n\nEen van de meest zichtbare gevolgen is het personeelstekort in cruciale sectoren. In de zorg, het onderwijs en de techniek zijn nu al grote tekorten. Als de arbeidsparticipatie niet stijgt, dreigen deze tekorten zich in de komende decennia te verdiepen. Dat vraagt om een herziening van hoe we naar arbeid kijken: langer doorwerken, flexibelere pensioenleeftijden en actieve werving van internationale arbeidskrachten worden steeds vaker als oplossingen aangedragen.\n\nEen andere strategie is investeren in arbeidsproductiviteit. Automatisering en AI kunnen taken overnemen die nu door mensen worden uitgevoerd, waardoor minder mensen meer werk kunnen verzetten. Critici wijzen er echter op dat deze technologieën ook banen vernietigen en dat de overgang voor laagopgeleiden extra risicovol is.\n\nTenslotte wordt de mantelzorgdruk groter: meer ouderen betekent ook meer mensen die zorg nodig hebben van familie. Dit legt druk op werkenden die thuis voor naasten zorgen, wat hun arbeidsparticipatie kan verminderen. Bedrijven en overheden zoeken naar manieren om werk en zorg beter te combineren.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q6',
          type: 'multiple-choice',
          question: 'Wat wordt verwacht over de samenstelling van de bevolking in 2040?',
          options: [
            'Een derde van de bevolking zal ouder zijn dan 65.',
            'Een kwart van de bevolking zal ouder zijn dan 65.',
            'De helft van de bevolking zal ouder zijn dan 60.',
            'Het aantal jongeren zal groter zijn dan het aantal ouderen.',
          ],
          correctIndex: 1,
          explanation: 'The article states that by 2040, a quarter of the population is expected to be older than 65.',
          topicArea: 'demographics',
        },
        {
          id: 'nt2-ii-r2-q7',
          type: 'multiple-choice',
          question: 'Welke drie oplossingen voor personeelstekorten worden in de tekst genoemd?',
          options: [
            'Meer automatisering, hogere lonen en kortere werkweken.',
            'Langer doorwerken, flexibelere pensioenleeftijden en internationale arbeidskrachten.',
            'Meer deeltijdwerk, hogere subsidies voor werkgevers en betere opleidingen.',
            'Hogere belastingen, meer migratie en kortere pensioentermijnen.',
          ],
          correctIndex: 1,
          explanation:
            'The article mentions working longer, flexible pension ages, and active recruitment of international workers.',
          topicArea: 'demographics',
        },
        {
          id: 'nt2-ii-r2-q8',
          type: 'true-false',
          question:
            'Critici zijn van mening dat automatisering en AI alleen maar voordelen hebben voor de arbeidsmarkt.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Critics point out that these technologies also destroy jobs and that the transition is particularly risky for low-skilled workers.',
          topicArea: 'demographics',
        },
        {
          id: 'nt2-ii-r2-q9',
          type: 'multiple-choice',
          question: 'Wat wordt bedoeld met "mantelzorgdruk" in de laatste alinea?',
          options: [
            'De druk op professionele zorgverleners in verpleeghuizen.',
            'De toenemende last op werkenden die thuis voor familieleden zorgen.',
            'De financiële druk van het betalen voor ouderenzorg.',
            'De druk op gemeenten om zorgcentra te bouwen.',
          ],
          correctIndex: 1,
          explanation:
            '"Mantelzorgdruk" refers to the increasing burden on working people who provide informal care at home for loved ones.',
          topicArea: 'demographics',
        },
        {
          id: 'nt2-ii-r2-q10',
          type: 'multiple-choice',
          question: 'In welke sectoren worden nu al grote personeelstekorten gemeld?',
          options: [
            'Financiën, recht en ICT.',
            'Zorg, onderwijs en techniek.',
            'Landbouw, transport en horeca.',
            'Media, kunst en toerisme.',
          ],
          correctIndex: 1,
          explanation: 'The article specifically mentions healthcare, education, and technology as sectors with large shortages.',
          topicArea: 'demographics',
        },
      ],
    },

    // ── Section 3: Policy document ──
    {
      id: 'nt2-ii-r2-s3',
      passageTitle: 'Tekst 3: Beleidsnotitie — Duurzame mobiliteit in de provincie',
      passage:
        'De provincie heeft als doel om de CO₂-uitstoot van het verkeer met 40% te verminderen voor 2030. Om dit te bereiken, stelt de provincie de volgende beleidsprioriteiten voor:\n\n1. Stimulering van elektrisch rijden\nDe provincie investeert €15 miljoen in de uitbreiding van het laadpalennetwerk. Gemeenten worden financieel ondersteund bij de plaatsing van snelladers op strategische locaties. Tevens worden subsidies beschikbaar gesteld voor particulieren die een elektrische auto of elektrische fiets aanschaffen.\n\n2. Verbetering van het openbaar vervoer\nDe provincie werkt samen met vervoersbedrijven om de frequentie van buslijnen op het platteland te verhogen. Hiermee wil de provincie bereiken dat ook inwoners in landelijke gebieden minder afhankelijk zijn van de auto.\n\n3. Stimulering van thuiswerken\nIn samenwerking met regionale werkgevers zet de provincie in op het stimuleren van thuiswerken en hybride werken, waarmee woon-werkverkeer kan worden verminderd.\n\nEvaluatie vindt jaarlijks plaats. De provincie stelt een voortgangsrapportage beschikbaar voor Provinciale Staten en publiceert deze openbaar op de provinciale website.',
      instructions: 'Lees het beleidsdocument en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q11',
          type: 'multiple-choice',
          question: 'Wat is het CO₂-reductiedoel van de provincie voor 2030?',
          options: ['20% reductie.', '30% reductie.', '40% reductie.', '50% reductie.'],
          correctIndex: 2,
          explanation: 'The policy document states the goal is to reduce CO₂ emissions from traffic by 40% by 2030.',
          topicArea: 'environment-policy',
        },
        {
          id: 'nt2-ii-r2-q12',
          type: 'multiple-choice',
          question: 'Hoeveel investeert de provincie in het laadpalennetwerk?',
          options: ['€5 miljoen.', '€10 miljoen.', '€15 miljoen.', '€20 miljoen.'],
          correctIndex: 2,
          explanation: 'The document states an investment of €15 million for the expansion of the charging network.',
          topicArea: 'environment-policy',
        },
        {
          id: 'nt2-ii-r2-q13',
          type: 'true-false',
          question:
            'De voortgangsrapportage wordt alleen intern gedeeld met Provinciale Staten en niet gepubliceerd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The document states the progress report is made available to Provinciale Staten AND published publicly on the provincial website.',
          topicArea: 'environment-policy',
        },
        {
          id: 'nt2-ii-r2-q14',
          type: 'multiple-choice',
          question: 'Waarom wil de provincie de busfrequentie op het platteland verhogen?',
          options: [
            'Om de reistijd voor forenzen te verkorten.',
            'Om inwoners in landelijke gebieden minder autoafhankelijk te maken.',
            'Om de kosten van het openbaar vervoer te verlagen.',
            'Om nieuwe banen te creëren bij vervoersbedrijven.',
          ],
          correctIndex: 1,
          explanation:
            'The goal is that residents in rural areas become less dependent on the car.',
          topicArea: 'environment-policy',
        },
        {
          id: 'nt2-ii-r2-q15',
          type: 'multiple-choice',
          question: 'Op welke drie gebieden richt het provinciale mobiliteitsbeleid zich?',
          options: [
            'Luchtvaart, scheepvaart en wegverkeer.',
            'Elektrisch rijden, openbaar vervoer en thuiswerken.',
            'Fietsen, treinverkeer en carpooling.',
            'Elektrisch rijden, snelwegen en parkeerbeleid.',
          ],
          correctIndex: 1,
          explanation:
            'The three policy priorities are: stimulating electric driving, improving public transport, and encouraging working from home.',
          topicArea: 'environment-policy',
        },
      ],
    },

    // ── Section 4: Analytical newspaper article ──
    {
      id: 'nt2-ii-r2-s4',
      passageTitle: 'Tekst 4: Woningmarkt in crisis — oorzaken en mogelijke oplossingen',
      passage:
        'De Nederlandse woningmarkt kampt al jaren met een structureel tekort. Het Planbureau voor de Leefomgeving (PBL) schat dat er tot 2030 nog circa 900.000 woningen moeten worden gebouwd om aan de vraag te voldoen. Ondanks beleidsambities loopt de nieuwbouwproductie achter op de doelstellingen.\n\nMeerdere factoren verklaren de crisis. Ten eerste heeft Nederland een langdurig periode van beperkte investeringen in sociale huurwoningen doorgemaakt. Woningcorporaties werden beperkt in hun bouwmogelijkheden door regelgeving en beperkte leencapaciteit. Ten tweede hebben lage rentetarieven de koopwoningprijzen opgedreven, waardoor een koopwoning voor een grote groep mensen onbereikbaar is geworden. Ten derde maken stikstofregels en ruimtelijke beperkingen nieuwbouw in veel gebieden moeilijk.\n\nOplossingen worden gezocht op meerdere fronten. De overheid streeft naar versnelling van de vergunningverlening en heeft afspraken gemaakt met provincies over te bouwen aantallen. Woningcorporaties krijgen meer ruimte om te investeren. Ook wordt ingezet op transformatie van kantoorgebouwen naar woningen en de bouw van betaalbare woningen in gemengde wijken.\n\nEconomen waarschuwen dat ook vraagzijdemaatregelen noodzakelijk zijn: zolang de vraag structureel groter is dan het aanbod, zullen prijzen hoog blijven, ongeacht het aantal nieuwbouwwoningen.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q16',
          type: 'multiple-choice',
          question: 'Hoeveel woningen moeten er volgens het PBL tot 2030 worden gebouwd?',
          options: ['Circa 500.000.', 'Circa 700.000.', 'Circa 900.000.', 'Circa 1,2 miljoen.'],
          correctIndex: 2,
          explanation: 'The PBL estimates approximately 900,000 homes still need to be built by 2030.',
          topicArea: 'housing-market',
        },
        {
          id: 'nt2-ii-r2-q17',
          type: 'multiple-choice',
          question: 'Welke drie factoren worden als oorzaken van de woningcrisis genoemd?',
          options: [
            'Bevolkingsgroei, immigratie en gebrek aan grond.',
            'Beperkte investeringen in sociale huur, hoge koopwoningprijzen door lage rente, en stikstofregels.',
            'Hoge belastingen, strengere hypotheekeisen en vergrijzing.',
            'Sloop van oude woningen, dure grondstoffen en arbeidsmarktproblemen.',
          ],
          correctIndex: 1,
          explanation:
            'The article cites limited investment in social housing, low interest rates driving up prices, and nitrogen rules restricting construction.',
          topicArea: 'housing-market',
        },
        {
          id: 'nt2-ii-r2-q18',
          type: 'true-false',
          question:
            'Economen zijn van mening dat alleen meer nieuwbouw voldoende is om de woningprijzen te laten dalen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Economists warn that demand-side measures are also necessary — as long as demand structurally exceeds supply, prices will remain high regardless of new construction.',
          topicArea: 'housing-market',
        },
        {
          id: 'nt2-ii-r2-q19',
          type: 'multiple-choice',
          question: 'Welke maatregel betreft de transformatie van bestaand vastgoed?',
          options: [
            'Versnelling van vergunningverlening.',
            'Meer leencapaciteit voor woningcorporaties.',
            'Omzetten van kantoorgebouwen naar woningen.',
            'Afspraken met provincies over bouwdoelstellingen.',
          ],
          correctIndex: 2,
          explanation: 'Transforming office buildings into homes is mentioned as one of the solutions.',
          topicArea: 'housing-market',
        },
        {
          id: 'nt2-ii-r2-q20',
          type: 'multiple-choice',
          question: 'Wat wordt bedoeld met "vraagzijdemaatregelen" in de laatste alinea?',
          options: [
            'Maatregelen om meer huizen te bouwen.',
            'Maatregelen om de vraag naar woningen te verminderen of te reguleren.',
            'Maatregelen om woningcorporaties te ondersteunen.',
            'Maatregelen om de bouwsector te stimuleren.',
          ],
          correctIndex: 1,
          explanation:
            '"Vraagzijdemaatregelen" are demand-side measures — policies aimed at reducing or regulating the demand for housing.',
          topicArea: 'housing-market',
        },
      ],
    },

    // ── Section 5: Formal institutional letter ──
    {
      id: 'nt2-ii-r2-s5',
      passageTitle: 'Tekst 5: Brief van de Raad van Bestuur aan alle medewerkers',
      passage:
        'Aan: Alle medewerkers\nVan: Raad van Bestuur\nBetreft: Strategische koerswijziging 2026–2030\nDatum: 1 februari 2026\n\nGeachte collega,\n\nMet deze brief informeren wij u over de strategische koerswijziging die de Raad van Bestuur heeft vastgesteld voor de periode 2026–2030.\n\nIn de afgelopen jaren heeft onze organisatie te maken gehad met toenemende concurrentie, veranderende klantverwachtingen en de noodzaak tot verduurzaming. Na een uitgebreid strategisch traject, waarbij ook medewerkers zijn geraadpleegd, heeft de Raad van Bestuur besloten de organisatie te herpositioneren met drie speerpunten:\n\n1. Innovatie: Wij investeren jaarlijks 8% van de omzet in onderzoek en ontwikkeling.\n2. Duurzaamheid: Wij streven naar CO₂-neutraliteit in 2028 en reduceren plasticgebruik met 50% voor 2027.\n3. Klantgerichtheid: Wij implementeren een nieuw klantbeheersysteem en trainen alle medewerkers in klantgericht werken.\n\nIn de komende maanden volgen informatiebijeenkomsten per afdeling. Wij nodigen u van harte uit aanwezig te zijn en vragen te stellen.\n\nMet collegiale groet,\nDe Raad van Bestuur',
      instructions: 'Lees de brief en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q21',
          type: 'multiple-choice',
          question: 'Wat zijn de drie strategische speerpunten van de organisatie?',
          options: [
            'Groei, efficiency en kostenbesparing.',
            'Innovatie, duurzaamheid en klantgerichtheid.',
            'Internationalisering, digitalisering en personeelsbeleid.',
            'Kwaliteit, veiligheid en winst.',
          ],
          correctIndex: 1,
          explanation: 'The letter explicitly names the three priorities: innovation, sustainability, and customer focus.',
          topicArea: 'business',
        },
        {
          id: 'nt2-ii-r2-q22',
          type: 'multiple-choice',
          question: 'Wanneer wil de organisatie CO₂-neutraal zijn?',
          options: ['In 2026.', 'In 2027.', 'In 2028.', 'In 2030.'],
          correctIndex: 2,
          explanation: 'The letter states the goal is CO₂ neutrality in 2028.',
          topicArea: 'business',
        },
        {
          id: 'nt2-ii-r2-q23',
          type: 'true-false',
          question: 'Medewerkers zijn niet betrokken geweest bij het opstellen van de nieuwe strategie.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The letter states that employees were consulted during the extensive strategic process.',
          topicArea: 'business',
        },
        {
          id: 'nt2-ii-r2-q24',
          type: 'multiple-choice',
          question: 'Welk percentage van de omzet wordt jaarlijks geïnvesteerd in onderzoek en ontwikkeling?',
          options: ['5%.', '6%.', '8%.', '10%.'],
          correctIndex: 2,
          explanation: 'The letter states 8% of revenue is invested annually in R&D.',
          topicArea: 'business',
        },
        {
          id: 'nt2-ii-r2-q25',
          type: 'multiple-choice',
          question: 'Hoe kunnen medewerkers meer informatie krijgen over de nieuwe strategie?',
          options: [
            'Via de interne nieuwsbrief.',
            'Door de website van de organisatie te bezoeken.',
            'Door aanwezig te zijn bij informatiebijeenkomsten per afdeling.',
            'Door contact op te nemen met de Raad van Bestuur.',
          ],
          correctIndex: 2,
          explanation: 'The letter announces information sessions per department where employees can ask questions.',
          topicArea: 'business',
        },
      ],
    },

    // ── Section 6: Social/cultural article ──
    {
      id: 'nt2-ii-r2-s6',
      passageTitle: 'Tekst 6: De veranderende rol van de bibliotheek',
      passage:
        'De bibliotheek zoals we die kennen — een stille ruimte vol boekenkasten — bestaat nog steeds, maar heeft een ingrijpende transformatie ondergaan. Moderne bibliotheken zijn uitgegroeid tot multifunctionele ontmoetingsplekken waar lezen slechts een van de vele activiteiten is.\n\nBibliotheken bieden tegenwoordig naast boeken ook toegang tot digitale diensten, 3D-printers, muziekstudio\'s en werkplekken. Ze organiseren taallessen voor nieuwkomers, mediawijsheidstrainingen voor ouderen, huiswerkbegeleiding voor kinderen en debatavonden over maatschappelijke thema\'s. Hiermee vervullen ze een sociale functie die verder reikt dan informatieverstrekking.\n\nDeze uitbreiding van het takenpakket is echter niet zonder discussie. Bibliotheekmedewerkers signaleren dat de commercialisering van de ruimte en de nadruk op activiteiten de traditionele leescultuur verdringt. Sommige bezoekers missen de rust en stilte van vroeger. Bovendien staan bibliotheken onder financiële druk: gemeenten bezuinigen, wat leidt tot kortere openingstijden en minder personeel.\n\nToch zien velen de bibliotheek als onmisbare pijler van de democratische samenleving: een plek waar kennis vrij toegankelijk is voor iedereen, ongeacht inkomen of achtergrond. De uitdaging is om innovatie en inclusie te combineren zonder de kernwaarden te verliezen.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q26',
          type: 'multiple-choice',
          question: 'Welke transformatie hebben moderne bibliotheken ondergaan?',
          options: [
            'Ze zijn kleiner geworden en bieden alleen digitale boeken aan.',
            'Ze zijn uitgegroeid tot multifunctionele ontmoetingsplekken.',
            'Ze zijn samengevoegd met scholen en buurthuizen.',
            'Ze zijn geprivatiseerd en vragen nu entreegeld.',
          ],
          correctIndex: 1,
          explanation: 'The article states modern libraries have evolved into multifunctional meeting places.',
          topicArea: 'culture-society',
        },
        {
          id: 'nt2-ii-r2-q27',
          type: 'multiple-choice',
          question: 'Welke activiteiten worden als voorbeelden van het nieuwe aanbod genoemd?',
          options: [
            'Sportlessen, kookcursussen en yoga.',
            'Taallessen, mediawijsheidstrainingen en debatavonden.',
            'Kinderopvang, muziekles en schilderworkshops.',
            'Belastingadvies, juridische hulp en financieel advies.',
          ],
          correctIndex: 1,
          explanation: 'The article mentions language lessons, media literacy training for elderly, homework support for children, and debate evenings.',
          topicArea: 'culture-society',
        },
        {
          id: 'nt2-ii-r2-q28',
          type: 'true-false',
          question:
            'Alle bibliotheekmedewerkers zijn positief over de uitbreiding van het activiteitenaanbod.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Some library staff signal that the commercialisation and focus on activities is crowding out traditional reading culture.',
          topicArea: 'culture-society',
        },
        {
          id: 'nt2-ii-r2-q29',
          type: 'multiple-choice',
          question: 'Welke financiële druk wordt in het artikel beschreven?',
          options: [
            'Bibliotheken moeten meer geld uitgeven aan digitalisering.',
            'Gemeenten bezuinigen, wat leidt tot kortere openingstijden en minder personeel.',
            'De boekeninkoop is te duur geworden.',
            'Bibliotheken moeten huur betalen voor hun gebouwen.',
          ],
          correctIndex: 1,
          explanation: 'Municipalities are cutting budgets, leading to shorter opening hours and fewer staff.',
          topicArea: 'culture-society',
        },
        {
          id: 'nt2-ii-r2-q30',
          type: 'multiple-choice',
          question: 'Waarom wordt de bibliotheek een "pijler van de democratische samenleving" genoemd?',
          options: [
            'Omdat bibliotheken stemlocaties zijn bij verkiezingen.',
            'Omdat kennis er vrij toegankelijk is voor iedereen, ongeacht inkomen of achtergrond.',
            'Omdat bibliotheekmedewerkers politiek neutraal zijn.',
            'Omdat bibliotheken worden gefinancierd door de overheid.',
          ],
          correctIndex: 1,
          explanation:
            'The library is seen as a pillar of democratic society because knowledge is freely accessible to everyone regardless of income or background.',
          topicArea: 'culture-society',
        },
      ],
    },

    // ── Section 7: Report / government info ──
    {
      id: 'nt2-ii-r2-s7',
      passageTitle: 'Tekst 7: Rapportage — Integratie op de arbeidsmarkt',
      passage:
        'Uit de jaarlijkse Integratiebarometer van het SCP (Sociaal en Cultureel Planbureau) blijkt dat de arbeidsmarktpositie van mensen met een migratieachtergrond de afgelopen tien jaar is verbeterd, maar dat er nog steeds significante achterstanden bestaan.\n\nDe werkloosheid onder niet-westerse migranten lag in 2025 op 9,3%, tegenover 3,8% voor de totale beroepsbevolking. Hoewel dit verschil kleiner is dan tien jaar geleden, wijst het SCP op structurele belemmeringen: discriminatie op de arbeidsmarkt, ongelijke toegang tot netwerken en een mismatch tussen opleiding en beschikbare banen.\n\nPositief is de stijging van het hoger onderwijsniveau onder de tweede generatie. Kinderen van migranten behalen steeds vaker een hbo- of wo-diploma, wat hun kansen op de arbeidsmarkt vergroot. Toch zijn zij nog altijd ondervertegenwoordigd in leidinggevende en hogere functies.\n\nHet rapport beveelt aan dat werkgevers actief diversiteitsbeleid voeren en dat de overheid discriminatie op de arbeidsmarkt harder aanpakt. Ook wordt aanbevolen te investeren in taalondersteuning en bijscholing voor nieuwkomers, zodat hun kwalificaties beter aansluiten bij de vraag op de arbeidsmarkt.',
      instructions: 'Lees het rapport en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r2-q31',
          type: 'multiple-choice',
          question: 'Hoeveel bedroeg de werkloosheid onder niet-westerse migranten in 2025?',
          options: ['3,8%.', '6,5%.', '9,3%.', '12,1%.'],
          correctIndex: 2,
          explanation: 'The report states unemployment among non-western migrants was 9.3% in 2025.',
          topicArea: 'integration',
        },
        {
          id: 'nt2-ii-r2-q32',
          type: 'multiple-choice',
          question: 'Welke drie structurele belemmeringen worden door het SCP genoemd?',
          options: [
            'Taalbarrières, gebrek aan opleidingen en slechte woonomstandigheden.',
            'Discriminatie, ongelijke netwerktoegang en een mismatch tussen opleiding en banen.',
            'Lage motivatie, culturele verschillen en slechte referenties.',
            'Gebrekkige digitale vaardigheden, mobiliteit en werkervaring.',
          ],
          correctIndex: 1,
          explanation:
            'The SCP points to discrimination, unequal access to networks, and a mismatch between qualifications and available jobs.',
          topicArea: 'integration',
        },
        {
          id: 'nt2-ii-r2-q33',
          type: 'true-false',
          question:
            'Kinderen van migranten zijn goed vertegenwoordigd in leidinggevende functies.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The report states they are still underrepresented in leadership and higher-level positions.',
          topicArea: 'integration',
        },
        {
          id: 'nt2-ii-r2-q34',
          type: 'multiple-choice',
          question: 'Wat wordt als een positieve ontwikkeling gezien?',
          options: [
            'De werkloosheid is volledig gelijk aan het nationale gemiddelde.',
            'De tweede generatie behaalt steeds vaker een hbo- of wo-diploma.',
            'Discriminatie op de arbeidsmarkt is volledig verdwenen.',
            'Alle nieuwkomers vinden binnen een jaar werk.',
          ],
          correctIndex: 1,
          explanation:
            'The report notes the positive trend of the second generation increasingly obtaining higher education degrees.',
          topicArea: 'integration',
        },
        {
          id: 'nt2-ii-r2-q35',
          type: 'multiple-choice',
          question: 'Welke twee aanbevelingen worden aan werkgevers en overheid gedaan?',
          options: [
            'Hogere minimumlonen en meer stageplaatsen.',
            'Actief diversiteitsbeleid en harder optreden tegen discriminatie.',
            'Meer subsidies voor migranten en kortere sollicitatieprocedures.',
            'Verplichte taaltoetsen en meer controles op werkgevers.',
          ],
          correctIndex: 1,
          explanation:
            'The report recommends active diversity policies from employers and stronger government action against discrimination.',
          topicArea: 'integration',
        },
      ],
    },
  ],
};
