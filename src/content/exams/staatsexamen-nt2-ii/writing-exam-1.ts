import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IIWriting1: ExamPracticeTest = {
  id: 'staatsexamen-nt2-ii-writing-1',
  examType: 'staatsexamen-nt2-ii',
  skill: 'writing',
  title: 'Staatsexamen NT2 Programma II – Schrijven (Oefening 1)',
  description:
    'Practice exam for the Schrijven (writing) component of the Staatsexamen NT2 Programma II (B2 level). Tasks include writing professional reports, argumentative texts, formal correspondence, and analytical summaries. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 80,
  passingScore: 60,
  totalQuestions: 4,
  sections: [
    // ── Section 1: Formele zakelijke correspondentie ──
    {
      id: 'nt2-ii-w1-s1',
      passageTitle: 'Opdracht 1 – Formele zakelijke correspondentie',
      instructions:
        'Schrijf een zakelijke brief of e-mail op B2-niveau in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-ii-w1-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Motivatiebrief voor een functie',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U solliciteert naar de functie van beleidsmedewerker bij een gemeentelijke dienst. Schrijf een motivatiebrief (120–160 woorden). Verklaar uw interesse in de functie, uw relevante achtergrond en vaardigheden, en waarom u geschikt bent voor deze rol.',
          writingContext:
            'Situatie: De vacature is bij de afdeling Participatie en Integratie van Gemeente Utrecht. Vereisten: HBO-niveau, kennis van de doelgroep nieuwkomers, communicatieve vaardigheden. U heeft een HBO-opleiding Sociaal Werk en twee jaar ervaring als casemanager bij een vluchtelingenorganisatie.',
          writingGuidelines: [
            'Begin met een aanhef en inleiding die uw interesse toont',
            'Koppel uw opleiding en ervaring aan de functie-eisen',
            'Gebruik professioneel taalgebruik op B2-niveau',
            'Sluit af met een verzoek om een gesprek',
            'Gebruik correcte formele afsluiting',
            'Schrijf 120–160 woorden',
          ],
          writingKeyPhrases: [
            'solliciteren', 'ervaring', 'opleiding', 'geschikt', 'motivatie', 'gesprek',
          ],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nMet veel interesse heb ik uw vacature voor beleidsmedewerker bij de afdeling Participatie en Integratie gelezen. Ik ben ervan overtuigd dat mijn achtergrond en ervaring goed aansluiten bij deze functie.\n\nIk heb een HBO-opleiding Sociaal Werk afgerond en werk de afgelopen twee jaar als casemanager bij een vluchtelingenorganisatie. In deze rol heb ik intensief samengewerkt met nieuwkomers bij hun inburgeringsproces, arbeidsmarkttoeleiding en maatschappelijke participatie. Ik ken de uitdagingen van deze doelgroep uit de praktijk.\n\nWat mij in de functie aanspreekt, is de mogelijkheid om op beleidsniveau bij te dragen aan de integratie van nieuwkomers in de samenleving.\n\nIk ga graag met u in gesprek over de mogelijkheden. Mijn cv is bijgevoegd.\n\nMet vriendelijke groet,\nNadia El Amrani',
          topicArea: 'professional-writing',
        },
      ],
    },

    // ── Section 2: Argumentatieve tekst ──
    {
      id: 'nt2-ii-w1-s2',
      passageTitle: 'Opdracht 2 – Argumentatieve tekst',
      instructions:
        'Schrijf een argumentatieve tekst over het gegeven onderwerp.',
      questions: [
        {
          id: 'nt2-ii-w1-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: Standpunttekst over thuiswerken',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Schrijf een betoog (130–170 woorden) voor of tegen de stelling: "Thuiswerken moet structureel worden ingevoerd in alle kantooromgevingen." Neem duidelijk een standpunt in, onderbouw dit met minimaal drie argumenten, en ga kort in op een tegenargument.',
          writingContext:
            'Situatie: U schrijft dit betoog voor een werkoverleg over het nieuwe personeelsbeleid van uw organisatie. Uw manager heeft om een schriftelijk standpunt gevraagd van alle medewerkers.',
          writingGuidelines: [
            'Neem een duidelijk standpunt in (voor of tegen)',
            'Gebruik minimaal drie concrete argumenten',
            'Ga in op minimaal één tegenargument',
            'Gebruik formeel zakelijk taalgebruik',
            'Schrijf een inleiding, middendeel en conclusie',
            'Schrijf 130–170 woorden',
          ],
          writingKeyPhrases: [
            'standpunt', 'argumenten', 'thuiswerken', 'productiviteit', 'werk-privébalans', 'echter',
          ],
          writingSampleResponse:
            'Ik ben een voorstander van structureel thuiswerken in kantooromgevingen. Er zijn meerdere argumenten die dit standpunt ondersteunen.\n\nTen eerste verhoogt thuiswerken de productiviteit. Werknemers worden minder afgeleid door kantoorgeluiden en onnodig overleg. Ten tweede verbetert het de werk-privébalans: medewerkers besparen reistijd en kunnen hun dag beter indelen. Ten derde heeft thuiswerken voordelen voor het milieu, omdat minder woon-werkverkeer de CO₂-uitstoot vermindert.\n\nTegenstanders beweren dat samenwerking en teamcohesie lijden onder thuiswerken. Dit is een begrijpelijk bezwaar. Een hybride model — bijvoorbeeld twee of drie dagen thuis en de rest op kantoor — biedt echter een goede balans.\n\nConclusie: structureel thuiswerken is haalbaar en wenselijk, mits er duidelijke afspraken zijn over bereikbaarheid en samenwerking.',
          topicArea: 'argumentation',
        },
        {
          id: 'nt2-ii-w1-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: Adviesnotitie over diversiteitsbeleid',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U werkt bij de HR-afdeling van een middelgrote organisatie. De directeur heeft u gevraagd een korte adviesnotitie (130–160 woorden) te schrijven over hoe de organisatie meer diversiteit en inclusie kan bevorderen op de werkvloer. Noem concrete maatregelen en beargumenteer het belang ervan.',
          writingContext:
            'Situatie: De organisatie heeft 150 medewerkers. Slechts 8% heeft een niet-westerse achtergrond, terwijl de regio 25% kent. De directeur wil actie ondernemen maar heeft nog geen concreet plan.',
          writingGuidelines: [
            'Begin met een korte probleemschets',
            'Noem minimaal drie concrete maatregelen',
            'Onderbouw het zakelijk en maatschappelijk belang',
            'Gebruik zakelijk, helder taalgebruik',
            'Schrijf in notitievorm (niet als brief)',
            'Schrijf 130–160 woorden',
          ],
          writingKeyPhrases: [
            'diversiteit', 'inclusie', 'maatregelen', 'werving', 'beleid', 'anoniem solliciteren',
          ],
          writingSampleResponse:
            'Adviesnotitie: Diversiteit en inclusie op de werkvloer\n\nProbleemstelling: De huidige samenstelling van ons personeelsbestand weerspiegelt niet de diversiteit van de regio. Dit vormt een risico voor innovatie, imago en aantrekkelijkheid als werkgever.\n\nAanbevolen maatregelen:\n1. Anoniem solliciteren invoeren om onbewuste selectiebias te verminderen.\n2. Actieve werving bij organisaties die gericht zijn op diverse doelgroepen.\n3. Bewustwordingstraining voor leidinggevenden over inclusief leiderschap.\n4. Mentorprogramma opzetten voor medewerkers met een niet-westerse achtergrond.\n\nBelang: Diverse teams presteren aantoonbaar beter en zijn creatiever. Bovendien vergroot een inclusieve werkcultuur de medewerkersbetrokkenheid.\n\nAdvies: Stel een diversiteitscommissie in die concrete doelstellingen formuleert en de voortgang bewaakt.\n\nOpgesteld door: HR-afdeling, juni 2024',
          topicArea: 'professional-writing',
        },
      ],
    },

    // ── Section 3: Samenvatting en analyse ──
    {
      id: 'nt2-ii-w1-s3',
      passageTitle: 'Opdracht 3 – Samenvatting en analyse',
      instructions:
        'Lees de tekst en schrijf een samenvatting of analyse.',
      questions: [
        {
          id: 'nt2-ii-w1-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Samenvatting van een nieuwsartikel',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Schrijf een objectieve samenvatting (100–130 woorden) van de onderstaande tekst. Gebruik uw eigen woorden. Noem het hoofdonderwerp, de belangrijkste argumenten of bevindingen, en de conclusie van de tekst.',
          writingContext:
            'Tekst om samen te vatten:\n\nHet Nederlandse onderwijsstelsel staat opnieuw ter discussie. Onderzoek van het Centraal Planbureau (CPB) toont aan dat de kansenongelijkheid in het onderwijs toeneemt. Kinderen van hoogopgeleide ouders stromen vaker door naar het vwo, terwijl kinderen met lager opgeleide ouders vaker op het vmbo belanden — ongeacht hun eigen capaciteiten.\n\nDe oorzaken zijn divers: vroege selectie op 12-jarige leeftijd, sociaal-cultureel kapitaal thuis, en de kwaliteit van de basisschool. Scholen in achterstandswijken hebben moeite om goede leraren te behouden.\n\nExperts pleiten voor latere selectie, meer gemengde scholen en hogere investeringen in achterstandsscholen. De staatssecretaris van Onderwijs heeft aangegeven de aanbevelingen te bestuderen, maar heeft nog geen concrete maatregelen aangekondigd.',
          writingGuidelines: [
            'Schrijf in uw eigen woorden — kopieer niet letterlijk',
            'Noem het hoofdonderwerp in de eerste zin',
            'Beschrijf de oorzaken die de tekst noemt',
            'Vermeld de aanbevolen maatregelen',
            'Eindig met de reactie van de staatssecretaris',
            'Schrijf objectief — geen eigen mening',
          ],
          writingKeyPhrases: [
            'kansenongelijkheid', 'onderwijsstelsel', 'oorzaken', 'maatregelen', 'selectie',
          ],
          writingSampleResponse:
            'Het artikel bespreekt de toenemende kansenongelijkheid in het Nederlandse onderwijs, gebaseerd op onderzoek van het CPB. De bevinding is dat de keuze voor schooltype (vwo of vmbo) op 12-jarige leeftijd sterk afhankelijk is van het opleidingsniveau van de ouders en niet alleen van de capaciteiten van het kind.\n\nAls oorzaken worden genoemd: vroege selectie, het sociaal-cultureel kapitaal van het gezin, en kwaliteitsverschillen tussen scholen in arme en rijke wijken.\n\nDeskundigen bevelen aan om de selectie later te laten plaatsvinden, scholen meer te mengen en extra te investeren in scholen in achterstandsgebieden. De staatssecretaris heeft gezegd de aanbevelingen te bekijken, maar heeft nog geen concrete stappen aangekondigd.',
          topicArea: 'academic-writing',
        },
      ],
    },
  ],
};
