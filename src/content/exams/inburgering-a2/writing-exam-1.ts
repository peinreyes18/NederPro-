import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Writing1: ExamPracticeTest = {
  id: 'inburgering-a2-writing-1',
  examType: 'inburgering-a2',
  skill: 'writing',
  title: 'Inburgeringsexamen A2 – Schrijven (Oefening 1)',
  description:
    'Practice exam for the Schrijven (writing) component of the Inburgeringsexamen A2. You will complete short practical writing tasks such as filling in forms, writing brief messages, and composing simple notes. All tasks are at CEFR A2 level. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 45,
  passingScore: 70,
  totalQuestions: 6,
  sections: [
    // ── Section 1: Formulieren invullen (filling in forms) ──
    {
      id: 'a2-w1-s1',
      passageTitle: 'Opdracht 1 – Formulier invullen',
      instructions:
        'Lees de situatie en schrijf een kort bericht of vul de gevraagde informatie in.',
      questions: [
        {
          id: 'a2-w1-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Aanmeldingsformulier',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U wilt lid worden van een sportclub. Vul het aanmeldingsformulier in. Schrijf een korte tekst (30–50 woorden) met uw naam, adres, leeftijd, en welke sport u wilt doen.',
          writingContext:
            'Situatie: U heeft een folder gezien van Sportclub De Leeuw. De club biedt voetbal, zwemmen en tennis aan. U wilt voetbal of zwemmen proberen.',
          writingGuidelines: [
            'Noem uw (fictieve) naam en adres',
            'Vermeld uw leeftijd',
            'Schrijf welke sport u wilt doen en waarom',
            'Gebruik minimaal 30 woorden',
          ],
          writingKeyPhrases: ['naam', 'adres', 'jaar oud', 'wil', 'sporten'],
          writingSampleResponse:
            'Naam: Sara Bosman\nAdres: Tulpstraat 12, 2500 Rotterdam\nLeeftijd: 28 jaar oud\n\nIk wil graag lid worden van uw sportclub. Ik wil zwemmen, omdat ik dat leuk vind en het goed is voor mijn gezondheid. Ik ben beschikbaar op maandag en woensdag.',
          topicArea: 'forms',
        },
        {
          id: 'a2-w1-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: Bericht voor de buurvrouw',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U verwacht een pakket maar u bent niet thuis. Schrijf een briefje voor uw buurvrouw mevrouw De Vries (30–50 woorden). Vraag of zij het pakket kan aannemen en zeg wanneer u het ophaalt.',
          writingContext:
            'Situatie: De postbezorger komt morgen tussen 10.00 en 12.00 uur. U moet morgen werken en bent niet thuis. Uw buurvrouw woont naast u.',
          writingGuidelines: [
            'Begin met een begroeting',
            'Leg uit dat u een pakket verwacht',
            'Vraag de buurvrouw het pakket aan te nemen',
            'Vertel wanneer u het ophaalt',
            'Sluit af met een bedankje',
          ],
          writingKeyPhrases: ['pakket', 'aannemen', 'ophalen', 'bedankt', 'thuis'],
          writingSampleResponse:
            'Beste mevrouw De Vries,\n\nMorgen verwacht ik een pakket tussen 10.00 en 12.00 uur, maar ik ben dan aan het werk. Kunt u het pakket aannemen? Ik haal het morgenavond na 18.00 uur op bij u.\n\nHartelijk bedankt!\nSara',
          topicArea: 'messages',
        },
      ],
    },

    // ── Section 2: Korte berichten (short messages) ──
    {
      id: 'a2-w1-s2',
      passageTitle: 'Opdracht 2 – Korte berichten schrijven',
      instructions: 'Schrijf korte berichten in de gegeven situaties.',
      questions: [
        {
          id: 'a2-w1-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: App-bericht aan collega',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Stuur een kort bericht (25–40 woorden) aan uw collega Hasan. U bent ziek en kunt niet naar het werk komen. Vraag of hij uw vergadering van 14.00 uur kan overnemen.',
          writingContext:
            'Situatie: U heeft hoofdpijn en koorts. De vergadering gaat over het nieuwe rooster. Hasan weet al iets over dit onderwerp.',
          writingGuidelines: [
            'Vertel dat u ziek bent',
            'Vraag of Hasan uw vergadering kan overnemen',
            'Vermeld het tijdstip van de vergadering',
            'Bedank hem',
          ],
          writingKeyPhrases: ['ziek', 'vergadering', 'overnemen', 'bedankt'],
          writingSampleResponse:
            'Hoi Hasan, ik ben helaas ziek vandaag en kan niet komen. Kun jij mijn vergadering om 14.00 uur overnemen? Het gaat over het nieuwe rooster. Je weet er al iets van. Bedankt!',
          topicArea: 'messages',
        },
        {
          id: 'a2-w1-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Reactie op uitnodiging',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U heeft een uitnodiging ontvangen voor een buurtbarbecue op zaterdag 14 juni om 15.00 uur. Schrijf een kort bericht (30–45 woorden) aan de organisator Petra. Bedank haar voor de uitnodiging en zeg of u komt. Leg uit waarom wel of niet.',
          writingContext:
            'Situatie: U wilt graag komen maar u moet eerder weg omdat u \'s avonds een verjaardag heeft. U kunt er zijn van 15.00 tot 17.30 uur.',
          writingGuidelines: [
            'Bedank Petra voor de uitnodiging',
            'Zeg dat u komt',
            'Leg uit dat u eerder weg moet',
            'Noem de reden en het tijdstip waarop u weggaat',
          ],
          writingKeyPhrases: ['bedankt', 'uitnodiging', 'kom', 'weg', 'verjaardag'],
          writingSampleResponse:
            'Hoi Petra, hartelijk bedankt voor de uitnodiging voor de barbecue! Ik kom graag. Ik moet helaas om 17.30 uur weg omdat ik \'s avonds een verjaardag heb. Tot zaterdag!\nGroetjes, Sara',
          topicArea: 'messages',
        },
      ],
    },

    // ── Section 3: Beschrijving en informatie (description and information) ──
    {
      id: 'a2-w1-s3',
      passageTitle: 'Opdracht 3 – Informatie geven',
      instructions:
        'Schrijf een korte tekst met informatie over uzelf of een situatie.',
      questions: [
        {
          id: 'a2-w1-q5',
          type: 'writing',
          question: 'Schrijfopdracht 5: Profiel op een talensite',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U wilt een taalmaatje vinden om Nederlands te oefenen. Schrijf een kort profiel (50–70 woorden) voor een talensite. Beschrijf uzelf, uw niveau Nederlands, uw moedertaal, en wat u wilt oefenen.',
          writingContext:
            'Situatie: U leert al een jaar Nederlands. U spreekt thuis uw eigen taal. U wilt graag praten oefenen, want u vindt schrijven al oké.',
          writingGuidelines: [
            'Beschrijf uzelf kort (naam, leeftijd, land van herkomst)',
            'Noem uw moedertaal',
            'Vertel hoe lang en waarom u Nederlands leert',
            'Zeg wat u wilt oefenen',
            'Schrijf minimaal 50 woorden',
          ],
          writingKeyPhrases: ['naam', 'Nederlands leren', 'moedertaal', 'oefenen', 'praten'],
          writingSampleResponse:
            'Hallo! Mijn naam is Sara Bosman. Ik kom uit Syrië en woon al twee jaar in Nederland. Mijn moedertaal is Arabisch. Ik leer Nederlands omdat ik hier wil werken en wonen. Ik oefen al een jaar en mijn schrijven gaat goed. Maar ik wil graag mijn spreekvaardigheid verbeteren. Ben jij mijn taalmaatje?',
          topicArea: 'self-description',
        },
        {
          id: 'a2-w1-q6',
          type: 'writing',
          question: 'Schrijfopdracht 6: Klachtenbrief aan verhuurder',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U heeft al drie weken een kapot slot op uw voordeur. U heeft dit al twee keer mondeling gemeld maar er is niets gedaan. Schrijf een korte brief (50–70 woorden) aan uw verhuurder. Beschrijf het probleem, wanneer u het heeft gemeld, en vraag om snel herstel.',
          writingContext:
            'Situatie: U woont in een huurwoning van woningcorporatie WonenPlus. U heeft het slot gemeld op 3 mei en 10 mei. Het is nu 21 mei. Het slot werkt slecht — soms kunt u de deur niet openen.',
          writingGuidelines: [
            'Begin formeel: "Geachte heer/mevrouw,"',
            'Beschrijf het probleem duidelijk',
            'Noem de datums waarop u het heeft gemeld',
            'Vraag om spoedige reparatie',
            'Sluit formeel af: "Met vriendelijke groet,"',
          ],
          writingKeyPhrases: ['slot', 'gemeld', 'reparatie', 'spoedig', 'vriendelijke groet'],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nIk schrijf u over een probleem met het slot van mijn voordeur. Het slot werkt al drie weken slecht. Ik heb dit op 3 mei en 10 mei mondeling gemeld, maar het is nog niet gerepareerd. Ik verzoek u dit zo snel mogelijk te laten repareren, want dit is onveilig.\n\nMet vriendelijke groet,\nSara Bosman',
          topicArea: 'formal-writing',
        },
      ],
    },
  ],
};
