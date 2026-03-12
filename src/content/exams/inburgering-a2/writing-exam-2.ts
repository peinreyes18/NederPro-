import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Writing2: ExamPracticeTest = {
  id: 'inburgering-a2-writing-2',
  examType: 'inburgering-a2',
  skill: 'writing',
  title: 'Inburgeringsexamen A2 – Schrijven (Oefening 2)',
  description:
    'Practice exam for the Schrijven (writing) component of the Inburgeringsexamen A2. You will complete short practical writing tasks such as filling in forms, writing brief messages, and composing simple notes. All tasks are at CEFR A2 level. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 45,
  passingScore: 70,
  totalQuestions: 6,
  sections: [
    // ── Section 1: Formulieren en korte berichten ──
    {
      id: 'a2-w2-s1',
      passageTitle: 'Opdracht 1 – Formulier invullen',
      instructions:
        'Lees de situatie en schrijf een kort bericht of vul de gevraagde informatie in.',
      questions: [
        {
          id: 'a2-w2-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Aanmelding voor een taalcursus',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U wilt zich aanmelden voor een Nederlandse taalcursus. Schrijf een korte tekst (30–50 woorden) met uw naam, huidig taalniveau, wanneer u beschikbaar bent, en waarom u Nederlands wilt leren.',
          writingContext:
            'Situatie: De taalschool Taalpunt heeft een cursus Nederlands op A2- en B1-niveau. De lessen zijn op maandag en donderdag, of dinsdag en vrijdag. U werkt overdag maar bent \'s avonds vrij.',
          writingGuidelines: [
            'Noem uw (fictieve) naam',
            'Vermeld uw taalniveau',
            'Schrijf op welke dagen u kunt',
            'Geef een reden waarom u Nederlands leert',
            'Schrijf minimaal 30 woorden',
          ],
          writingKeyPhrases: ['naam', 'niveau', 'beschikbaar', 'leren', 'werk'],
          writingSampleResponse:
            'Naam: Ali Hassan\n\nIk wil mij aanmelden voor de taalcursus Nederlands. Mijn niveau is A2. Ik ben beschikbaar op dinsdag- en vrijdagavond. Ik leer Nederlands omdat ik in Nederland wil werken en mijn inburgeringsexamen wil halen.',
          topicArea: 'forms',
        },
        {
          id: 'a2-w2-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: Briefje voor de buren over een feestje',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U organiseert zaterdag een verjaardag thuis. Er kunnen veel mensen komen en er is muziek. Schrijf een kort briefje (30–50 woorden) aan uw buren. Vertel hen over het feestje, wanneer het is, hoe laat de muziek stopt, en vraag of het goed is.',
          writingContext:
            'Situatie: U woont in een appartementencomplex. Het feestje begint om 18.00 uur en de muziek stopt om 22.00 uur. U heeft goede buren en wilt vriendelijk zijn.',
          writingGuidelines: [
            'Begin met een vriendelijke begroeting',
            'Vertel dat u een feestje organiseert',
            'Noem de datum en het tijdstip',
            'Vertel wanneer de muziek stopt',
            'Vraag of het goed is of verontschuldig u van tevoren',
          ],
          writingKeyPhrases: ['feestje', 'verjaardag', 'muziek', 'stopt', 'sorry'],
          writingSampleResponse:
            'Beste buren,\n\nZaterdag vier ik mijn verjaardag thuis. Er komen vrienden en er is wat muziek. De muziek stopt om 22.00 uur. Ik hoop dat dit geen probleem is. Excuses voor het eventuele lawaai!\n\nGroetjes, Ali',
          topicArea: 'messages',
        },
      ],
    },

    // ── Section 2: Korte berichten ──
    {
      id: 'a2-w2-s2',
      passageTitle: 'Opdracht 2 – Korte berichten schrijven',
      instructions: 'Schrijf korte berichten in de gegeven situaties.',
      questions: [
        {
          id: 'a2-w2-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: Bericht aan de huisarts',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U wilt een afspraak maken bij de huisarts. Schrijf een kort bericht (25–40 woorden) via de patiëntenportal. Vertel wat uw klacht is, hoe lang u er al last van heeft, en vraag om een afspraak.',
          writingContext:
            'Situatie: U heeft al een week last van pijn in uw rug. U wilt een afspraak zo snel mogelijk, maar het hoeft geen spoed te zijn. U bent beschikbaar op maandag en woensdag.',
          writingGuidelines: [
            'Noem uw naam',
            'Beschrijf de klacht kort',
            'Vertel hoe lang u er al last van heeft',
            'Vraag om een afspraak',
            'Noem wanneer u beschikbaar bent',
          ],
          writingKeyPhrases: ['rugpijn', 'afspraak', 'last', 'beschikbaar', 'maandag'],
          writingSampleResponse:
            'Goedendag, mijn naam is Ali Hassan. Ik heb al een week last van rugpijn. Het is geen spoed, maar ik wil graag een afspraak maken. Ik ben beschikbaar op maandag of woensdag. Alvast bedankt!',
          topicArea: 'messages',
        },
        {
          id: 'a2-w2-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Bericht aan een vriend over een afspraak verzetten',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U had vrijdag een afspraak met uw vriend David om samen te sporten, maar u kunt niet meer. Schrijf een kort bericht (30–45 woorden) aan David. Leg uit waarom u niet kunt, bied uw excuses aan, en stel een nieuwe afspraak voor.',
          writingContext:
            'Situatie: U moet vrijdag overwerken. U wist dit niet van tevoren. U wilt David niet teleurstellen en stelt voor om de week erna op woensdag te sporten.',
          writingGuidelines: [
            'Leg uit dat u de afspraak moet verzetten',
            'Geef de reden (overwerken)',
            'Bied uw excuses aan',
            'Stel een nieuwe datum voor',
          ],
          writingKeyPhrases: ['afspraak', 'verzetten', 'overwerken', 'sorry', 'volgende week'],
          writingSampleResponse:
            'Hoi David, sorry maar ik kan vrijdag toch niet. Ik moet helaas overwerken, dat wist ik niet eerder. Excuses! Kunnen we het verzetten naar woensdag volgende week? Laat het me weten. Groetjes, Ali',
          topicArea: 'messages',
        },
      ],
    },

    // ── Section 3: Informatie geven ──
    {
      id: 'a2-w2-s3',
      passageTitle: 'Opdracht 3 – Informatie geven',
      instructions:
        'Schrijf een korte tekst met informatie over uzelf of een situatie.',
      questions: [
        {
          id: 'a2-w2-q5',
          type: 'writing',
          question: 'Schrijfopdracht 5: Beschrijving van uw buurt',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U schrijft een bijdrage voor de buurtnieuwsbrief. Schrijf een korte tekst (50–70 woorden) over uw buurt. Vertel wat u fijn vindt aan de buurt, wat beter kan, en wat u doet om de buurt beter te maken.',
          writingContext:
            'Situatie: U woont twee jaar in uw buurt. U kent een paar buren. Er is een speeltuin, een supermarkt en een bushalte vlakbij. Maar het is soms vuil op straat en er is weinig groen.',
          writingGuidelines: [
            'Begin met hoe lang u al in de buurt woont',
            'Noem twee positieve dingen',
            'Noem één ding dat beter kan',
            'Vertel iets wat u zelf doet',
            'Schrijf minimaal 50 woorden',
          ],
          writingKeyPhrases: ['buurt', 'fijn', 'beter', 'supermarkt', 'schoon'],
          writingSampleResponse:
            'Ik woon al twee jaar in deze buurt en ik vind het over het algemeen prettig wonen. Er is een speeltuin voor de kinderen en de supermarkt is vlakbij. Wel vind ik dat de straat soms te vuil is. Ik raap zelf regelmatig zwerfafval op en praat mijn buren hierover aan. Meer groen zou ook mooi zijn!',
          topicArea: 'self-description',
        },
        {
          id: 'a2-w2-q6',
          type: 'writing',
          question: 'Schrijfopdracht 6: E-mail aan de gemeente over een gevaarlijke situatie',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Er is een gevaarlijke kuil in uw straat. Auto\'s en fietsers kunnen er bijna invallen. Schrijf een korte e-mail (50–70 woorden) aan de gemeente. Beschrijf het probleem, de locatie, en vraag om reparatie.',
          writingContext:
            'Situatie: De kuil ligt op de hoek van de Rozenlaan en de Bergweg in uw stad. Hij is er al twee weken. Vorige week viel een fietser bijna. U wilt dat de gemeente snel actie onderneemt.',
          writingGuidelines: [
            'Begin formeel: "Geachte heer/mevrouw,"',
            'Beschrijf het probleem (kuil in de weg)',
            'Noem de exacte locatie',
            'Beschrijf het gevaar',
            'Vraag om reparatie',
            'Sluit af met "Met vriendelijke groet,"',
          ],
          writingKeyPhrases: ['kuil', 'gevaarlijk', 'locatie', 'reparatie', 'vriendelijke groet'],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nOp de hoek van de Rozenlaan en de Bergweg ligt al twee weken een grote kuil in het wegdek. Dit is gevaarlijk voor fietsers en automobilisten. Vorige week viel een fietser bijna. Ik verzoek u dit zo snel mogelijk te repareren.\n\nMet vriendelijke groet,\nAli Hassan',
          topicArea: 'formal-writing',
        },
      ],
    },
  ],
};
