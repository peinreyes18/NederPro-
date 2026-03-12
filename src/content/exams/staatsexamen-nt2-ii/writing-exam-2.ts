import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IIWriting2: ExamPracticeTest = {
  id: 'staatsexamen-nt2-ii-writing-2',
  examType: 'staatsexamen-nt2-ii',
  skill: 'writing',
  title: 'Staatsexamen NT2 Programma II – Schrijven (Oefening 2)',
  description:
    'Practice exam for the Schrijven (writing) component of the Staatsexamen NT2 Programma II (B2 level). Tasks include writing professional reports, argumentative texts, formal correspondence, and analytical summaries. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 80,
  passingScore: 60,
  totalQuestions: 4,
  sections: [
    // ── Section 1: Formele zakelijke correspondentie ──
    {
      id: 'nt2-ii-w2-s1',
      passageTitle: 'Opdracht 1 – Formele zakelijke correspondentie',
      instructions:
        'Schrijf een zakelijke brief of e-mail op B2-niveau in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-ii-w2-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Formele klachtenbrief aan een zorginstelling',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U heeft een klacht over de behandeling van uw familielid in een zorginstelling. Schrijf een formele klachtenbrief (120–160 woorden) aan de directie. Beschrijf wat er is misgegaan, wat de gevolgen waren, welke actie u al heeft ondernomen, en wat u als oplossing verwacht.',
          writingContext:
            'Situatie: Uw moeder (75 jaar) verblijft in een verpleeghuis. De afgelopen maand is haar medicatie twee keer verkeerd toegediend. U heeft dit mondeling gemeld bij de verpleging, maar er is geen schriftelijke bevestiging ontvangen en het is opnieuw misgegaan. U wilt een officiële reactie en garanties voor de toekomst.',
          writingGuidelines: [
            'Adresseer de brief aan de directie of klachtencommissie',
            'Beschrijf de incidenten chronologisch en concreet',
            'Vermeld de gevolgen voor uw moeder',
            'Noem uw eerdere mondelinge melding en het gebrek aan opvolging',
            'Formuleer duidelijk wat u verwacht (schriftelijke erkenning, actieplan)',
            'Gebruik formeel taalgebruik op B2-niveau',
            'Schrijf 120–160 woorden',
          ],
          writingKeyPhrases: [
            'klacht', 'medicatie', 'incident', 'melding', 'erkenning', 'garantie', 'directie',
          ],
          writingSampleResponse:
            'Geachte directie,\n\nIk schrijf u over een ernstige kwestie betreffende de verzorging van mijn moeder, mevrouw A. Khalil (kamer 14), in uw instelling.\n\nAfgelopen maand is haar medicatie op 3 en 17 februari onjuist toegediend. Bij de eerste gelegenheid heb ik dit mondeling gemeld bij de dienstdoende verpleegkundige. Helaas heb ik geen schriftelijke bevestiging ontvangen en heeft het incident zich herhaald.\n\nDeze situatie is onaanvaardbaar. Onjuiste medicatieverstrekking brengt de gezondheid van mijn moeder in gevaar. Ik verwacht een schriftelijke erkenning van beide incidenten, een toelichting op de oorzaak, en een concreet actieplan om herhaling te voorkomen.\n\nIk verzoek u binnen tien werkdagen te reageren. Indien ik geen bevredigende reactie ontvang, zal ik de klacht voorleggen aan de Inspectie Gezondheidszorg.\n\nMet vriendelijke groet,\nYoussef Khalil',
          topicArea: 'professional-writing',
        },
      ],
    },

    // ── Section 2: Argumentatieve tekst ──
    {
      id: 'nt2-ii-w2-s2',
      passageTitle: 'Opdracht 2 – Argumentatieve tekst',
      instructions:
        'Schrijf een argumentatieve tekst over het gegeven onderwerp.',
      questions: [
        {
          id: 'nt2-ii-w2-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: Standpunttekst over verplichte inburgering voor EU-burgers',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Schrijf een betoog (130–170 woorden) over de stelling: "Inburgering moet ook verplicht worden voor EU-burgers die langer dan twee jaar in Nederland wonen." Neem duidelijk een standpunt in, onderbouw dit met minimaal drie argumenten en bespreek kort een tegenargument.',
          writingContext:
            'Situatie: U schrijft dit betoog als reactie op een opiniestuk in een regionaal dagblad dat heeft opgeroepen tot maatschappelijk debat over dit onderwerp.',
          writingGuidelines: [
            'Neem een duidelijk standpunt in (voor of tegen)',
            'Gebruik minimaal drie concrete en goed onderbouwde argumenten',
            'Ga in op minimaal één tegenargument en weerleg het',
            'Gebruik formeel, gevarieerd taalgebruik',
            'Schrijf een herkenbare structuur: inleiding, middendeel, conclusie',
            'Schrijf 130–170 woorden',
          ],
          writingKeyPhrases: [
            'inburgering', 'EU-burgers', 'integratie', 'taalvaardigheid', 'participatie', 'solidariteit',
          ],
          writingSampleResponse:
            'Ik ben van mening dat inburgering ook verplicht zou moeten worden voor EU-burgers die langer dan twee jaar in Nederland wonen. Er zijn hiervoor meerdere goede redenen.\n\nTen eerste bevordert taalvaardigheid de arbeidsparticipatie. Werknemers die goed Nederlands spreken, functioneren beter op de werkvloer en dragen meer bij aan de economie. Ten tweede versterkt kennis van de Nederlandse maatschappij sociale cohesie: inburgeraars begrijpen rechten, plichten en normen beter. Ten derde is het een kwestie van wederkerigheid: niet-EU-burgers worden al verplicht in te burgeren, wat een ongelijkheid creëert.\n\nTegenstanders wijzen op het vrije verkeer van personen als EU-recht. Dit argument is begrijpelijk, maar inburgering staat integratie niet in de weg — het ondersteunt juist een duurzaam verblijf.\n\nAl met al is verplichte inburgering voor langdurig verblijvende EU-burgers een redelijke en samenhangende maatregel.',
          topicArea: 'argumentation',
        },
        {
          id: 'nt2-ii-w2-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: Beleidsadvies over duurzaam woon-werkverkeer',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U werkt bij de afdeling Mobiliteit van een gemeente. De wethouder heeft u gevraagd een korte beleidsadviesnotitie (130–160 woorden) te schrijven over hoe de gemeente haar medewerkers kan stimuleren om duurzamer naar het werk te reizen. Noem concrete maatregelen en onderbouw het belang ervan.',
          writingContext:
            'Situatie: De gemeente heeft 800 medewerkers. Momenteel reist 65% met de auto. De gemeente heeft de doelstelling om in 2030 CO₂-neutraal te zijn. Er is een beperkt budget beschikbaar voor mobiliteitsmaatregelen.',
          writingGuidelines: [
            'Schrijf in notitievorm met een duidelijke kop',
            'Begin met een korte probleemschets',
            'Noem minimaal drie concrete maatregelen',
            'Onderbouw de keuze van de maatregelen (effectiviteit, kosten)',
            'Sluit af met een aanbeveling',
            'Gebruik zakelijk, helder taalgebruik op B2-niveau',
            'Schrijf 130–160 woorden',
          ],
          writingKeyPhrases: [
            'duurzaam', 'woon-werkverkeer', 'fiets', 'OV', 'CO₂', 'stimuleren', 'maatregelen',
          ],
          writingSampleResponse:
            'Adviesnotitie: Duurzaam woon-werkverkeer gemeentepersoneel\n\nProbleemstelling: 65% van de gemeentemedewerkers reist dagelijks met de auto. Dit staat op gespannen voet met de gemeentelijke klimaatdoelstelling van CO₂-neutraliteit in 2030.\n\nAanbevolen maatregelen:\n1. Fietsvergoeding verhogen naar €0,23 per kilometer en elektrische leasefiets aanbieden voor medewerkers op meer dan 10 km afstand.\n2. OV-abonnement volledig vergoeden voor medewerkers die met openbaar vervoer kunnen reizen.\n3. Thuiswerken structureel faciliteren voor functies waarbij dat mogelijk is, waardoor het aantal reisbewegingen afneemt.\n4. Parkeerplaatsen op locatie geleidelijk reduceren om autogebruik te ontmoedigen.\n\nDeze maatregelen zijn kosteneffectief en bewezen effectief in vergelijkbare gemeenten.\n\nAdvies: Start met de fiets- en OV-maatregel in 2025 en evalueer na één jaar.\n\nOpgesteld door: Afdeling Mobiliteit, februari 2025',
          topicArea: 'professional-writing',
        },
      ],
    },

    // ── Section 3: Samenvatting en analyse ──
    {
      id: 'nt2-ii-w2-s3',
      passageTitle: 'Opdracht 3 – Samenvatting en analyse',
      instructions:
        'Lees de tekst en schrijf een samenvatting of analyse.',
      questions: [
        {
          id: 'nt2-ii-w2-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Samenvatting van een opiniestuk over de woningmarkt',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Schrijf een objectieve samenvatting (100–130 woorden) van de onderstaande tekst. Gebruik uw eigen woorden. Noem het hoofdonderwerp, de belangrijkste argumenten of standpunten, en de conclusie van de auteur.',
          writingContext:
            'Tekst om samen te vatten:\n\nDe Nederlandse woningmarkt verkeert in een ernstige crisis. Het tekort aan betaalbare woningen heeft de afgelopen jaren een ongekende omvang aangenomen. Vooral starters en mensen met een middeninkomen worden door de markt buitengesloten: koopprijzen zijn voor hen onbereikbaar, terwijl de sociale huur al jaren overbelast is.\n\nEconomen wijzen op een combinatie van factoren: jarenlange bezuinigingen op sociale woningbouw, bevolkingsgroei door migratie, en speculatieve opkoop van woningen door beleggers. De markt heeft gefaald, en overheidsinterventie is onvermijdelijk.\n\nVoorgestelde oplossingen lopen uiteen: meer bouwen in stedelijke gebieden, beleggers belasten via een opkoopverbod, en de huurprijzen in de vrije sector reguleren. Critici waarschuwen dat regulering investeerders afschrikt en het aanbod verder verkleint.\n\nDe auteur pleit voor een integrale aanpak waarbij zowel aanbod als betaalbaarheid structureel worden aangepakt, gecombineerd met tijdelijke marktregulering als noodmaatregel.',
          writingGuidelines: [
            'Schrijf in uw eigen woorden — kopieer niet letterlijk',
            'Noem het hoofdonderwerp in de eerste zin',
            'Beschrijf de oorzaken die de auteur noemt',
            'Vermeld de voorgestelde oplossingen en de kritiek erop',
            'Eindig met de conclusie of aanbeveling van de auteur',
            'Schrijf objectief — geen eigen mening',
          ],
          writingKeyPhrases: [
            'woningmarkt', 'betaalbaarheid', 'oorzaken', 'oplossingen', 'regulering', 'aanbod',
          ],
          writingSampleResponse:
            'Het artikel behandelt de ernstige crisis op de Nederlandse woningmarkt, waarbij betaalbare woningen steeds moeilijker bereikbaar zijn voor starters en mensen met een middeninkomen.\n\nAls oorzaken noemt de auteur bezuinigingen op sociale woningbouw, bevolkingsgroei en speculatieve aankopen door beleggers. De markt heeft volgens de auteur gefaald, waardoor overheidsoptreden noodzakelijk is.\n\nAangevoerde oplossingen zijn onder meer meer bouwen in steden, een opkoopverbod voor beleggers en huurprijsregulering in de vrije sector. Critici plaatsen vraagtekens bij regulering, omdat dit investeerders zou kunnen ontmoedigen.\n\nDe auteur bepleit een integrale aanpak die zowel het woningaanbod vergroot als de betaalbaarheid verbetert, aangevuld met tijdelijke marktregulering als noodmaatregel.',
          topicArea: 'academic-writing',
        },
      ],
    },
  ],
};
