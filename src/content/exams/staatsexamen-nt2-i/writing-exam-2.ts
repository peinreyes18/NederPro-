import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IWriting2: ExamPracticeTest = {
  id: 'staatsexamen-nt2-i-writing-2',
  examType: 'staatsexamen-nt2-i',
  skill: 'writing',
  title: 'Staatsexamen NT2 Programma I – Schrijven (Oefening 2)',
  description:
    'Practice exam for the Schrijven (writing) component of the Staatsexamen NT2 Programma I (B1 level). Tasks include writing formal and informal texts such as letters, emails, complaints, and informational messages. Writing tasks are self-assessed against sample responses.',
  timeLimitMinutes: 60,
  passingScore: 60,
  totalQuestions: 5,
  sections: [
    // ── Section 1: Informele berichten ──
    {
      id: 'nt2-i-w2-s1',
      passageTitle: 'Opdracht 1 – Informeel bericht',
      instructions: 'Schrijf een informeel bericht in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w2-q1',
          type: 'writing',
          question: 'Schrijfopdracht 1: Bericht aan een collega over een teamuitje',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Uw team organiseert een uitje volgende maand. Schrijf een bericht (60–90 woorden) aan uw collega Fatima. Vertel haar over het uitje: wat het plan is, wanneer het is, wat ze moet meenemen, en vraag of ze mee kan.',
          writingContext:
            'Situatie: Het team gaat op zaterdag 15 maart bowlen in Rotterdam. Daarna eten ze samen in een restaurant. Iedereen betaalt €25 voor bowling en diner. U heeft Fatima al een tijdje niet gesproken en weet niet of ze het al weet.',
          writingGuidelines: [
            'Gebruik een informele toon (je/jij)',
            'Vertel het plan duidelijk (bowling + diner)',
            'Noem de datum en locatie',
            'Vertel wat het kost',
            'Stel een vraag aan het einde',
            'Schrijf 60–90 woorden',
          ],
          writingKeyPhrases: ['uitje', 'bowling', 'datum', 'meenemen', 'mee'],
          writingSampleResponse:
            'Hey Fatima,\n\nWeet jij al van het teamuitje? Op zaterdag 15 maart gaan we bowlen in Rotterdam! Daarna eten we samen in een restaurant. Het kost in totaal €25 per persoon, dat is voor bowling én het diner.\n\nJe hoeft alleen jezelf mee te nemen, comfortabele schoenen zijn handig. We vertrekken om 14:00 uur vanaf het kantoor.\n\nKan jij erbij zijn? Laat het me even weten!\n\nGroetjes, Sara',
          topicArea: 'informal-writing',
        },
      ],
    },

    // ── Section 2: Formele brief of e-mail ──
    {
      id: 'nt2-i-w2-s2',
      passageTitle: 'Opdracht 2 – Formele brief of e-mail',
      instructions: 'Schrijf een formele brief of e-mail in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w2-q2',
          type: 'writing',
          question: 'Schrijfopdracht 2: E-mail aan verhuurder over lekkage',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Er is al een week een lekkage in uw badkamer. Het plafond is nat en er is schimmel. Schrijf een formele e-mail (70–100 woorden) aan uw verhuurder. Beschrijf het probleem, de gevolgen, hoe lang het al duurt, en vraag om snel een reparateur te sturen.',
          writingContext:
            'Situatie: U huurt een appartement aan de Tulpstraat 12 in Haarlem. De lekkage begon op 3 februari na zware regenval. U heeft al eerder een WhatsApp gestuurd maar geen reactie gekregen. Het plafond heeft nu een bruine vlek van 40 cm en u maakt zich zorgen over schimmel.',
          writingGuidelines: [
            'Begin formeel: "Geachte heer/mevrouw,"',
            'Geef uw adres en huurnummer als bekend',
            'Beschrijf het probleem concreet (lekkage, plafond, schimmel)',
            'Noem de datum waarop het begon',
            'Verwijs naar uw eerdere bericht',
            'Vraag om spoedige actie',
            'Sluit formeel af',
          ],
          writingKeyPhrases: ['lekkage', 'plafond', 'schimmel', 'reparateur', 'zo snel mogelijk'],
          writingSampleResponse:
            'Geachte heer/mevrouw,\n\nIk schrijf u over een lekkage in mijn appartement op Tulpstraat 12 in Haarlem. Sinds 3 februari lekt het plafond van de badkamer. Er is inmiddels een grote bruine vlek en ik zie tekenen van schimmel.\n\nIk heb u al eerder een bericht gestuurd, maar heb geen reactie ontvangen. De situatie wordt erger en kan schadelijk zijn voor mijn gezondheid.\n\nIk verzoek u dringend een reparateur te sturen.\n\nMet vriendelijke groet,\nFatima El Amrani\nTulpstraat 12, Haarlem',
          topicArea: 'formal-writing',
        },
        {
          id: 'nt2-i-w2-q3',
          type: 'writing',
          question: 'Schrijfopdracht 3: Brief aan school over afwezigheid kind',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Uw kind is ziek en kan deze week niet naar school. Schrijf een formele brief (70–100 woorden) aan de leerkracht. Leg uit waarom uw kind afwezig is, hoe lang de afwezigheid vermoedelijk duurt, en vraag hoe u het gemiste werk kunt bijhouden.',
          writingContext:
            'Situatie: Uw dochter Nadia (groep 6) heeft koorts en keelpijn. De huisarts heeft gezegd dat ze drie tot vijf dagen thuis moet blijven. Het is maandag en ze mist de volgende dag een toets over aardrijkskunde. U wilt weten of ze die later mag inhalen.',
          writingGuidelines: [
            'Spreek de leerkracht formeel aan',
            'Noem de naam en klas van uw kind',
            'Beschrijf de klachten kort',
            'Noem de verwachte duur van de afwezigheid',
            'Vraag naar de gemiste toets en het huiswerk',
            'Sluit formeel af',
          ],
          writingKeyPhrases: ['afwezig', 'ziek', 'koorts', 'toets', 'inhalen', 'huiswerk'],
          writingSampleResponse:
            'Geachte juf Van Dijk,\n\nIk schrijf u om u te informeren dat mijn dochter Nadia (groep 6) deze week helaas niet naar school kan komen. Ze heeft koorts en keelpijn. De huisarts heeft geadviseerd dat ze drie tot vijf dagen thuis moet blijven.\n\nIk begrijp dat ze dinsdag een toets heeft over aardrijkskunde. Is het mogelijk dat ze deze op een later moment inhaalt? Kunt u mij ook laten weten welk huiswerk ze mist?\n\nMet vriendelijke groet,\nSoumaya Benali',
          topicArea: 'formal-writing',
        },
      ],
    },

    // ── Section 3: Klacht of bezwaar ──
    {
      id: 'nt2-i-w2-s3',
      passageTitle: 'Opdracht 3 – Klacht indienen',
      instructions: 'Schrijf een klachtbrief of bezwaar in de gegeven situatie.',
      questions: [
        {
          id: 'nt2-i-w2-q4',
          type: 'writing',
          question: 'Schrijfopdracht 4: Klachtenbrief aan werkgever over werkomstandigheden',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'U werkt in een kantoor dat de afgelopen weken erg koud is. De verwarming is kapot en u en uw collega\'s kunnen niet goed werken. Schrijf een formele brief (80–110 woorden) aan uw leidinggevende of HR-afdeling. Beschrijf het probleem, de gevolgen voor het werk, en vraag om een oplossing.',
          writingContext:
            'Situatie: De verwarming op de derde verdieping is al drie weken kapot. De temperatuur in het kantoor is soms minder dan 15 graden. Twee collega\'s zijn ziek geworden. U heeft het al mondeling gemeld bij de receptie maar er is niets gedaan. U schrijft nu een officiële brief.',
          writingGuidelines: [
            'Adresseer de brief aan HR of uw leidinggevende',
            'Beschrijf hoe lang het probleem al duurt',
            'Noem de lage temperatuur concreet',
            'Verwijs naar de gevolgen (ziekte, productiviteitsverlies)',
            'Noem dat u het al mondeling heeft gemeld',
            'Vraag om concrete actie met een deadline',
          ],
          writingKeyPhrases: ['verwarming', 'kapot', 'temperatuur', 'ziek', 'werkomstandigheden', 'oplossing'],
          writingSampleResponse:
            'Geachte HR-afdeling,\n\nIk schrijf u over de werkomstandigheden op de derde verdieping. Al drie weken is de verwarming kapot. De temperatuur is regelmatig onder de 15 graden, wat het onmogelijk maakt om geconcentreerd te werken.\n\nIk heb dit al mondeling gemeld bij de receptie, maar er is nog geen actie ondernomen. Inmiddels zijn twee collega\'s ziek geworden, vermoedelijk door de kou.\n\nIk verzoek u dit probleem uiterlijk deze week op te lossen. Graag ontvang ik een reactie.\n\nMet vriendelijke groet,\nKarim Tahiri',
          topicArea: 'complaints',
        },
      ],
    },

    // ── Section 4: Beschrijving en advies ──
    {
      id: 'nt2-i-w2-s4',
      passageTitle: 'Opdracht 4 – Beschrijving en advies',
      instructions: 'Schrijf een tekst met advies of een beschrijving.',
      questions: [
        {
          id: 'nt2-i-w2-q5',
          type: 'writing',
          question: 'Schrijfopdracht 5: Advies aan een vriend over het zoeken van werk in Nederland',
          options: [],
          correctIndex: 0,
          writingPrompt:
            'Een vriend uit uw land wil in Nederland gaan werken maar weet niet hoe hij moet beginnen. Schrijf een informele tekst (80–110 woorden) met praktisch advies. Leg uit hoe het Nederlandse arbeidsmarkt werkt, hoe hij een cv schrijft, en geef drie tips voor het zoeken van werk.',
          writingContext:
            'Situatie: Uw vriend Mehmet heeft een HBO-diploma boekhouding en spreekt redelijk Nederlands. Hij woont sinds zes maanden in Amsterdam en heeft nog geen werk. Hij is goed in administratie maar vindt het moeilijk om te solliciteren in Nederland.',
          writingGuidelines: [
            'Gebruik een vriendelijke, informele toon',
            'Leg kort uit hoe de arbeidsmarkt in Nederland werkt',
            'Geef advies over het cv (kort, duidelijk, in het Nederlands)',
            'Noem nuttige websites (bijv. LinkedIn, Indeed, Werk.nl)',
            'Geef minimaal drie praktische tips',
            'Moedig hem aan',
          ],
          writingKeyPhrases: ['cv', 'solliciteren', 'LinkedIn', 'werk', 'tips', 'arbeidsmarkt'],
          writingSampleResponse:
            'Hey Mehmet,\n\nGoed nieuws: met jouw diploma en Nederlands heb je zeker kansen! In Nederland is een goed cv heel belangrijk. Houd het kort: één pagina, in het Nederlands, met een duidelijke foto en contactgegevens.\n\nMijn tips:\n1. Maak een LinkedIn-profiel aan en zet al je ervaring erin.\n2. Kijk op Werk.nl, Indeed en LinkedIn Jobs voor vacatures in de boekhouding.\n3. Schrijf voor elke sollicitatie een korte motivatiebrief — dat maakt echt verschil.\n\nNiet opgeven, het lukt je!\n\nGroetjes, Karim',
          topicArea: 'civic-knowledge',
        },
      ],
    },
  ],
};
