import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IWriting1: ExamPracticeTest = {
  id: 'staatsexamen-nt2-i-writing-1',
  examType: 'staatsexamen-nt2-i',
  skill: 'writing',
  title: 'Staatsexamen NT2 Programma I – Schrijven (Oefening 1)',
  description:
    'Practice exam for the Schrijven (writing) component of the Staatsexamen NT2 Programma I (B1 level). Tasks include writing formal and informal texts such as letters, emails, complaints, and informational messages. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 60,
  passingScore: 60,
  totalQuestions: 5,
  sections: [
    // ── Section 1: Informele berichten ──
    {
      id: 'nt2-i-w1-s1',
      passageTitle: 'Opdracht 1 – Informeel bericht',
      instructions: 'Schrijf een informeel bericht in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w1-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Bericht aan een vriend over uw nieuwe baan',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U heeft een nieuwe baan gevonden. Schrijf een bericht (60–90 woorden) aan uw vriend Tariq. Vertel hem over uw nieuwe baan: wat voor werk het is, waar u werkt, wanneer u begint, en hoe u zich erbij voelt.',
          writingContext:
            'Situatie: U begint maandag als magazijnmedewerker bij een logistiek bedrijf in de buurt. Het is uw eerste vaste baan in Nederland. U bent blij maar ook een beetje nerveus.',
          writingGuidelines: [
            'Gebruik een informele toon (je/jij)',
            'Beschrijf de nieuwe baan concreet',
            'Vertel wanneer u begint',
            'Druk uw gevoel uit',
            'Schrijf 60–90 woorden',
          ],
          writingKeyPhrases: ['nieuwe baan', 'begint', 'blij', 'nerveus', 'werk'],
          writingSampleResponse:
            'Hey Tariq,\n\nIk heb goed nieuws! Ik heb eindelijk een nieuwe baan gevonden. Ik ga werken als magazijnmedewerker bij een logistiek bedrijf hier in de buurt. Ik begin maandag. Het is mijn eerste vaste baan in Nederland, dus ik ben super blij! Tegelijk ben ik ook een beetje nerveus, want ik weet nog niet precies hoe alles werkt. Maar ik kijk er naar uit.\n\nGroetjes, Omar',
          topicArea: 'informal-writing',
        },
      ],
    },

    // ── Section 2: Formele brief of e-mail ──
    {
      id: 'nt2-i-w1-s2',
      passageTitle: 'Opdracht 2 – Formele brief of e-mail',
      instructions: 'Schrijf een formele brief of e-mail in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w1-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: E-mail aan de gemeente over een kapotte straatlamp',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'De straatlamp voor uw huis is al twee weken kapot. \'s Avonds is het donker en onveilig op straat. Schrijf een formele e-mail (70–100 woorden) aan de gemeente. Beschrijf het probleem, de locatie, hoe lang het al zo is, en vraag om reparatie.',
          writingContext:
            'Situatie: U woont aan de Kerkstraat 45 in Utrecht. De lamp staat voor nummer 43-47. U heeft al via de gemeente-app gemeld maar er is nog niets gedaan. Een buurvrouw is al een keer gevallen in het donker.',
          writingGuidelines: [
            'Begin formeel: "Geachte heer/mevrouw,"',
            'Geef de exacte locatie',
            'Beschrijf hoe lang het probleem al bestaat',
            'Noem de veiligheidsrisico\'s',
            'Verwijs naar de eerdere melding via de app',
            'Sluit formeel af',
          ],
          writingKeyPhrases: ['straatlamp', 'kapot', 'locatie', 'onveilig', 'reparatie', 'vriendelijke groet'],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nIk schrijf u over de straatlamp voor Kerkstraat 43–47 in Utrecht. Deze lamp is al twee weken kapot. Ik heb dit al eerder gemeld via de gemeente-app, maar er is nog niets gedaan.\n\nDoor het ontbreken van verlichting is de situatie gevaarlijk. Een buurvrouw is vorige week gevallen in het donker. Ik verzoek u dit zo snel mogelijk te repareren.\n\nMet vriendelijke groet,\nOmar Khalil\nKerkstraat 45, Utrecht',
          topicArea: 'formal-writing',
        },
        {
          id: 'nt2-i-w1-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: Brief aan werkgever – aanvraag verlof',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U wilt drie dagen vrij nemen vanwege een familiebezoek uit het buitenland. Schrijf een formele brief (70–100 woorden) aan uw leidinggevende. Vraag toestemming voor de verlofperiode, leg de reden uit, en noem de data.',
          writingContext:
            'Situatie: U wilt verlof van woensdag 10 juli tot en met vrijdag 12 juli. Uw ouders komen voor het eerst naar Nederland. U heeft geen dringende afspraken in die periode.',
          writingGuidelines: [
            'Gebruik een formele maar vriendelijke toon',
            'Vermeld de exacte data duidelijk',
            'Leg kort de reden uit',
            'Benoem dat er geen dringende werkzaamheden zijn',
            'Sluit formeel af',
          ],
          writingKeyPhrases: ['verlof', 'data', 'ouders', 'toestemming', 'vriendelijke groet'],
          writingSampleResponse:
            'Geachte mevrouw Van der Berg,\n\nIk wil u vragen of ik verlof mag opnemen van woensdag 10 juli tot en met vrijdag 12 juli. Mijn ouders komen voor het eerst vanuit Marokko naar Nederland en ik wil graag bij hen zijn.\n\nVoor zover ik weet zijn er in die periode geen dringende afspraken of werkzaamheden. Ik regel van tevoren alles wat nodig is.\n\nIk hoop op uw goedkeuring.\n\nMet vriendelijke groet,\nOmar Khalil',
          topicArea: 'formal-writing',
        },
      ],
    },

    // ── Section 3: Klacht of bezwaar ──
    {
      id: 'nt2-i-w1-s3',
      passageTitle: 'Opdracht 3 – Klacht indienen',
      instructions: 'Schrijf een klachtbrief of bezwaar in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w1-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Klachtenbrief aan webwinkel',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U heeft online een telefoon besteld. U heeft de telefoon ontvangen maar hij werkt niet goed: het scherm is kapot en de batterij laadt niet op. Schrijf een klachtenbrief (80–110 woorden) aan de webwinkel. Beschrijf het probleem, vraag om terugbetaling of vervanging, en verwijs naar uw bestelling.',
          writingContext:
            'Situatie: U heeft de telefoon besteld op 5 juni. Ordernummer: WB-2024-8823. U heeft het product ontvangen op 10 juni. U heeft de webwinkel gebeld maar er is geen oplossing geboden. U wilt uw geld terug of een nieuwe telefoon.',
          writingGuidelines: [
            'Noem het ordernummer',
            'Beschrijf de schade duidelijk',
            'Vermeld dat u al contact heeft opgenomen',
            'Vraag om terugbetaling of vervanging',
            'Noem de wettelijke herroepingstermijn (14 dagen) indien relevant',
          ],
          writingKeyPhrases: ['ordernummer', 'scherm', 'kapot', 'terugbetaling', 'vervanging', 'klacht'],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nOp 5 juni heb ik via uw webshop een telefoon besteld (ordernummer: WB-2024-8823). Na ontvangst op 10 juni bleek de telefoon beschadigd: het scherm was kapot en de batterij laadde niet op.\n\nIk heb uw klantenservice al gebeld, maar er is geen oplossing aangeboden. Ik verzoek u het product te vervangen of mij het volledige aankoopbedrag terug te storten.\n\nIk zie uw reactie graag binnen 5 werkdagen tegemoet.\n\nMet vriendelijke groet,\nOmar Khalil',
          topicArea: 'complaints',
        },
      ],
    },

    // ── Section 4: Samenvatting of advies ──
    {
      id: 'nt2-i-w1-s4',
      passageTitle: 'Opdracht 4 – Beschrijving en advies',
      instructions: 'Schrijf een tekst met advies of een beschrijving.',
      questions: [
        {
          id: 'nt2-i-w1-q5',
          type: 'writing',
          question: 'Schrijfopdracht 5: Advies aan een nieuwkomer over inburgeren',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Een kennis uit uw thuisland komt binnenkort naar Nederland. Hij weet nog niet hoe het inburgeringsproces werkt. Schrijf een informele tekst (80–110 woorden) met praktisch advies. Leg uit wat inburgeren is, welke examens er zijn, en geef drie tips.',
          writingContext:
            'Situatie: Uw kennis Yusuf is 32 jaar en heeft een verblijfsvergunning gekregen. Hij spreekt nog geen Nederlands. Hij is nerveus over het inburgeringsproces.',
          writingGuidelines: [
            'Gebruik een vriendelijke, informele toon',
            'Leg kort uit wat inburgeren inhoudt',
            'Noem de inburgeringsexamens (KNM, lezen, luisteren, schrijven, spreken)',
            'Geef minimaal drie praktische tips',
            'Moedig hem aan',
          ],
          writingKeyPhrases: ['inburgeren', 'examen', 'Nederlands', 'tips', 'oefenen'],
          writingSampleResponse:
            'Hey Yusuf,\n\nWelkom in Nederland! Inburgeren betekent dat je leert over de Nederlandse taal en maatschappij. Je moet een aantal examens doen: lezen, luisteren, schrijven, spreken en kennis van de Nederlandse maatschappij (KNM).\n\nMijn tips:\n1. Begin zo snel mogelijk met een taalcursus.\n2. Oefen elke dag een beetje Nederlands — ook buiten de les.\n3. Lees de brieven van DUO goed — zij organiseren de examens.\n\nHet is veel werk, maar het lukt! Veel succes!\n\nGroetjes, Omar',
          topicArea: 'civic-knowledge',
        },
      ],
    },
  ],
};
