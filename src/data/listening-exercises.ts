export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface ListeningQuestion {
  question: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
}

export interface ListeningExercise {
  id: string;
  title: string;
  level: Level;
  topic: string;
  description: string;
  transcript: string;
  questions: ListeningQuestion[];
}

export const listeningExercises: ListeningExercise[] = [
  // ─── A1 ───────────────────────────────────────────────────────────────────
  {
    id: 'a1-introductie',
    title: 'Zichzelf voorstellen',
    level: 'A1',
    topic: 'Introductie',
    description: 'Een vrouw stelt zichzelf voor.',
    transcript:
      'Hallo, mijn naam is Emma. Ik kom uit Nederland, uit de stad Utrecht. Ik ben achtentwintig jaar oud. Ik werk als lerares op een basisschool. Ik woon in een appartement met mijn kat. In mijn vrije tijd lees ik graag boeken en ga ik fietsen.',
    questions: [
      {
        question: 'Uit welke stad komt Emma?',
        options: ['Amsterdam', 'Utrecht', 'Rotterdam', 'Den Haag'],
        answer: 1,
        explanation: 'Emma zegt: "Ik kom uit Nederland, uit de stad Utrecht."',
      },
      {
        question: 'Hoe oud is Emma?',
        options: ['25 jaar', '30 jaar', '28 jaar', '18 jaar'],
        answer: 2,
        explanation: 'Emma zegt: "Ik ben achtentwintig jaar oud." Achtentwintig = 28.',
      },
      {
        question: "Wat is Emma's beroep?",
        options: ['Dokter', 'Verkoopster', 'Ingenieur', 'Lerares'],
        answer: 3,
        explanation: 'Emma zegt: "Ik werk als lerares op een basisschool."',
      },
      {
        question: 'Wat doet Emma in haar vrije tijd?',
        options: [
          'Zwemmen en koken',
          'Sporten en reizen',
          'Lezen en fietsen',
          'Muziek maken',
        ],
        answer: 2,
        explanation:
          'Emma zegt: "In mijn vrije tijd lees ik graag boeken en ga ik fietsen."',
      },
    ],
  },
  {
    id: 'a1-winkel',
    title: 'In de winkel',
    level: 'A1',
    topic: 'Winkelen',
    description: 'Een klant koopt kleding in een winkel.',
    transcript:
      'Goedemiddag. Kan ik u helpen? Ja, ik zoek een rode trui voor mijn dochter. Ze is tien jaar oud. Heeft u maat honderdveertig? Ja, die hebben we. Hij kost vijftien euro. Prima, ik neem hem. Wilt u een tas? Nee, dank u. Dat is vijftien euro graag. Hier is twintig euro. Uw wisselgeld is vijf euro. Fijne dag!',
    questions: [
      {
        question: 'Wat zoekt de klant?',
        options: ['Een blauwe jas', 'Een groene jurk', 'Een rode trui', 'Een witte blouse'],
        answer: 2,
        explanation: 'De klant zegt: "Ik zoek een rode trui voor mijn dochter."',
      },
      {
        question: 'Voor wie is de trui?',
        options: ['Haar zoon', 'Haar moeder', 'Zichzelf', 'Haar dochter'],
        answer: 3,
        explanation: 'De klant koopt de trui voor haar dochter.',
      },
      {
        question: 'Hoeveel kost de trui?',
        options: ['€10', '€15', '€20', '€12'],
        answer: 1,
        explanation: 'De verkoper zegt: "Hij kost vijftien euro."',
      },
      {
        question: 'Hoeveel wisselgeld krijgt de klant?',
        options: ['€10', '€3', '€5', '€2'],
        answer: 2,
        explanation:
          'De klant betaalt twintig euro voor een trui van vijftien euro, dus het wisselgeld is vijf euro.',
      },
    ],
  },
  {
    id: 'a1-dagprogramma',
    title: 'Een dag beschrijven',
    level: 'A1',
    topic: 'Dagelijks leven',
    description: 'Iemand beschrijft zijn of haar dagelijkse routine.',
    transcript:
      'Ik sta elke dag om zeven uur op. Daarna douche ik en eet ik ontbijt. Ik eet meestal brood met kaas of hagelslag. Om half negen ga ik met de fiets naar mijn werk. Ik werk tot vijf uur. s Avonds kook ik en eet ik om zes uur. Daarna kijk ik televisie of lees ik een boek. Ik ga om half elf naar bed.',
    questions: [
      {
        question: 'Hoe laat staat de persoon op?',
        options: ['6 uur', 'Half zeven', '7 uur', '8 uur'],
        answer: 2,
        explanation: 'De persoon zegt: "Ik sta elke dag om zeven uur op."',
      },
      {
        question: 'Hoe gaat de persoon naar het werk?',
        options: ['Met de bus', 'Met de auto', 'Te voet', 'Met de fiets'],
        answer: 3,
        explanation: 'De persoon zegt: "Om half negen ga ik met de fiets naar mijn werk."',
      },
      {
        question: "Wat eet de persoon 's ochtends?",
        options: [
          'Eieren en spek',
          'Yoghurt met fruit',
          'Brood met kaas of hagelslag',
          'Niets',
        ],
        answer: 2,
        explanation: 'De persoon zegt: "Ik eet meestal brood met kaas of hagelslag."',
      },
      {
        question: "Hoe laat eet de persoon 's avonds?",
        options: ['5 uur', '6 uur', '7 uur', 'Half zes'],
        answer: 1,
        explanation: "De persoon zegt: \"'s Avonds kook ik en eet ik om zes uur.\"",
      },
    ],
  },

  // ─── A2 ───────────────────────────────────────────────────────────────────
  {
    id: 'a2-weg-vragen',
    title: 'De weg vragen',
    level: 'A2',
    topic: 'Oriëntatie in de stad',
    description: 'Iemand vraagt de weg naar het gemeentehuis.',
    transcript:
      'Pardon, weet u waar het gemeentehuis is? Ja, dat weet ik. U gaat hier rechtdoor, dan slaat u de tweede straat rechts in. Daarna loopt u langs het park. Het gemeentehuis staat aan het einde van die straat, naast de bibliotheek. Het is ongeveer tien minuten lopen. Dank u wel! Graag gedaan. U kunt het niet missen, het is een groot gebouw met een Nederlandse vlag.',
    questions: [
      {
        question: 'Waarnaar vraagt de persoon de weg?',
        options: ['De bibliotheek', 'Het postkantoor', 'Het gemeentehuis', 'De supermarkt'],
        answer: 2,
        explanation: 'De persoon vraagt: "Weet u waar het gemeentehuis is?"',
      },
      {
        question: 'Welke richting moet de persoon inslaan?',
        options: [
          'De eerste straat links',
          'De tweede straat rechts',
          'Rechtdoor blijven gaan',
          'De derde straat links',
        ],
        answer: 1,
        explanation: 'De aanwijzing is: "dan slaat u de tweede straat rechts in."',
      },
      {
        question: 'Wat staat naast het gemeentehuis?',
        options: ['Een park', 'Een supermarkt', 'Een kerk', 'De bibliotheek'],
        answer: 3,
        explanation: 'Het gemeentehuis staat "naast de bibliotheek."',
      },
      {
        question: 'Hoe lang is het lopen?',
        options: ['Vijf minuten', 'Twintig minuten', 'Ongeveer tien minuten', 'Een kwartier'],
        answer: 2,
        explanation: '"Het is ongeveer tien minuten lopen."',
      },
    ],
  },
  {
    id: 'a2-doktersafspraak',
    title: 'Afspraak bij de dokter',
    level: 'A2',
    topic: 'Gezondheid',
    description: 'Een patiënt belt de huisartsenpraktijk voor een afspraak.',
    transcript:
      'Huisartsenpraktijk de Linde, goedemorgen. Goedemorgen, ik wil graag een afspraak maken met dokter Bakker. Wat is uw klacht? Ik heb al drie dagen last van keelpijn en koorts. Heeft u al paracetamol geprobeerd? Ja, maar het helpt niet echt. Ik kan u morgenochtend inplannen om tien uur. Gaat dat? Ja, dat is prima. Wat is uw naam? Mijn naam is Jansen, Peter Jansen. Tot morgenochtend, meneer Jansen.',
    questions: [
      {
        question: 'Waarvoor belt de patiënt?',
        options: [
          'Om een recept op te halen',
          'Om testresultaten te vragen',
          'Om een afspraak te maken',
          'Om een afspraak af te zeggen',
        ],
        answer: 2,
        explanation: 'De patiënt zegt: "Ik wil graag een afspraak maken met dokter Bakker."',
      },
      {
        question: 'Welke klachten heeft de patiënt?',
        options: [
          'Hoofdpijn en misselijkheid',
          'Keelpijn en koorts',
          'Buikpijn en diarree',
          'Hoesten en verkoudheid',
        ],
        answer: 1,
        explanation: 'De patiënt zegt: "Ik heb al drie dagen last van keelpijn en koorts."',
      },
      {
        question: 'Wanneer is de afspraak?',
        options: [
          'Vandaag om twee uur',
          'Morgenochtend om tien uur',
          'Overmorgen om elf uur',
          'Morgemiddag om drie uur',
        ],
        answer: 1,
        explanation: 'De receptionist biedt aan: "morgenochtend om tien uur."',
      },
      {
        question: 'Wat heeft de patiënt al geprobeerd?',
        options: ['Ibuprofen', 'Hoestsiroop', 'Niets', 'Paracetamol'],
        answer: 3,
        explanation: '"Heeft u al paracetamol geprobeerd? Ja, maar het helpt niet echt."',
      },
    ],
  },
  {
    id: 'a2-treinstation',
    title: 'Op het treinstation',
    level: 'A2',
    topic: 'Reizen',
    description: 'Een reiziger koopt een treinkaartje aan het loket.',
    transcript:
      'Ik wil graag een treinkaartje naar Amsterdam Centraal. Enkele reis of retour? Retour graag. Wanneer wilt u reizen? Vandaag om twee uur. Dan is er een toeslag omdat het spitsuur is. Een retour kost drieëndertig euro. Met de kortingskaart is dat twintig euro tachtig. Heeft u een ov chipkaart? Ja, hier is mijn kaart. Uw trein vertrekt om veertien uur vijf van spoor zeven. Let op: de trein heeft tien minuten vertraging.',
    questions: [
      {
        question: 'Waar wil de reiziger naartoe?',
        options: [
          'Rotterdam Centraal',
          'Utrecht Centraal',
          'Amsterdam Centraal',
          'Den Haag HS',
        ],
        answer: 2,
        explanation: 'De reiziger vraagt een kaartje "naar Amsterdam Centraal."',
      },
      {
        question: 'Wat voor kaartje wil de reiziger?',
        options: ['Enkele reis', 'Retour', 'Weekabonnement', 'Dagkaart'],
        answer: 1,
        explanation: 'De reiziger vraagt: "Retour graag."',
      },
      {
        question: 'Van welk spoor vertrekt de trein?',
        options: ['Spoor 4', 'Spoor 7', 'Spoor 12', 'Spoor 9'],
        answer: 1,
        explanation: '"Uw trein vertrekt van spoor zeven."',
      },
      {
        question: 'Hoeveel vertraging heeft de trein?',
        options: ['Vijf minuten', 'Tien minuten', 'Een kwartier', 'Geen vertraging'],
        answer: 1,
        explanation: '"De trein heeft tien minuten vertraging."',
      },
    ],
  },

  // ─── B1 ───────────────────────────────────────────────────────────────────
  {
    id: 'b1-nieuwsbericht',
    title: 'Woningmarkt in het nieuws',
    level: 'B1',
    topic: 'Nieuws & samenleving',
    description: 'Een nieuwsbericht over nieuwe maatregelen voor de woningmarkt.',
    transcript:
      'De Nederlandse regering heeft nieuwe maatregelen aangekondigd om de woningnood aan te pakken. Er worden de komende vijf jaar honderdduizend nieuwe woningen gebouwd. De helft daarvan zal betaalbare huurwoningen zijn voor mensen met een lager inkomen. De minister van Volkshuisvesting zei dat dit een historische investering is. Gemeenten krijgen meer geld en bevoegdheden om de bouw te versnellen. Critici zeggen echter dat vijf jaar te lang duurt en dat er nu actie nodig is.',
    questions: [
      {
        question: 'Hoeveel nieuwe woningen worden er gebouwd?',
        options: ['50.000', '75.000', '200.000', '100.000'],
        answer: 3,
        explanation: '"Er worden de komende vijf jaar honderdduizend nieuwe woningen gebouwd."',
      },
      {
        question: 'Wat voor woningen zijn de helft?',
        options: [
          'Koopwoningen',
          'Betaalbare huurwoningen',
          'Woningen voor studenten',
          'Luxe appartementen',
        ],
        answer: 1,
        explanation:
          '"De helft daarvan zal betaalbare huurwoningen zijn voor mensen met een lager inkomen."',
      },
      {
        question: 'Hoe lang duurt het plan?',
        options: ['2 jaar', '3 jaar', '5 jaar', '10 jaar'],
        answer: 2,
        explanation: '"De komende vijf jaar" worden de woningen gebouwd.',
      },
      {
        question: 'Wat zeggen critici?',
        options: [
          'Het plan is goed genoeg',
          'Er moeten meer woningen komen',
          'Vijf jaar is te lang',
          'De maatregel is te duur',
        ],
        answer: 2,
        explanation: '"Critici zeggen dat vijf jaar te lang duurt en dat er nu actie nodig is."',
      },
    ],
  },
  {
    id: 'b1-werkvergadering',
    title: 'Vergadering op het werk',
    level: 'B1',
    topic: 'Werk',
    description: 'Een manager bespreekt een probleem met zijn team.',
    transcript:
      'Goedemorgen iedereen. Voordat we beginnen, wil ik een paar dingen bespreken. Het project loopt achter op schema. We hadden de eerste fase vorige week moeten afronden, maar we zijn nog niet klaar. Er waren twee oorzaken: problemen met de software en twee collega\'s waren ziek. We moeten nu het tempo verhogen. Ik stel voor dat we vrijdag overwerken om de achterstand in te halen. Wie kan extra uren maken deze week?',
    questions: [
      {
        question: 'Wat is het probleem?',
        options: [
          'Er is te weinig budget',
          'Een klant is ontevreden',
          'Het project loopt achter op schema',
          'Er is personeelstekort',
        ],
        answer: 2,
        explanation: 'De manager zegt: "Het project loopt achter op schema."',
      },
      {
        question: 'Wat zijn de oorzaken van de vertraging?',
        options: [
          'Vakantie en slechte planning',
          'Budgettekort en miscommunicatie',
          'Softwareproblemen en ziekte van collega\'s',
          'Technische storing en staking',
        ],
        answer: 2,
        explanation:
          '"Er waren problemen met de software en twee collega\'s waren ziek."',
      },
      {
        question: 'Wanneer had de eerste fase klaar moeten zijn?',
        options: ['Gisteren', 'Vorige week', 'Twee weken geleden', 'Maandag'],
        answer: 1,
        explanation: '"We hadden de eerste fase vorige week moeten afronden."',
      },
      {
        question: 'Wat stelt de manager voor?',
        options: [
          'Extra personeel inhuren',
          'Een nieuwe deadline aanvragen',
          'Het project verkleinen',
          'Vrijdag overwerken',
        ],
        answer: 3,
        explanation:
          '"Ik stel voor dat we vrijdag overwerken om de achterstand in te halen."',
      },
    ],
  },
  {
    id: 'b1-radio-interview',
    title: 'Radio-interview: arbeidsmarkt',
    level: 'B1',
    topic: 'Onderwijs & werk',
    description: 'Een directeur van een hogeschool wordt geïnterviewd over de arbeidsmarkt.',
    transcript:
      'We spreken vandaag met mevrouw De Vries, directeur van een grote hogeschool in Rotterdam. Mevrouw De Vries, hoe kijkt u aan tegen de arbeidsmarkt voor afgestudeerden? Studenten hebben tegenwoordig veel meer moeite om een vaste baan te vinden. Werkgevers bieden steeds vaker tijdelijke contracten aan, wat voor onzekerheid zorgt bij jonge mensen. Maar ik zie ook positieve ontwikkelingen: er is veel vraag naar mensen met technische vaardigheden en in de zorg. Onze studenten in die richtingen vinden over het algemeen snel werk.',
    questions: [
      {
        question: 'Wie wordt er geïnterviewd?',
        options: [
          'Een minister',
          'Een student',
          'Een werkgever',
          'Een directeur van een hogeschool',
        ],
        answer: 3,
        explanation: 'Mevrouw De Vries is "directeur van een grote hogeschool in Rotterdam."',
      },
      {
        question: 'Wat is een probleem op de arbeidsmarkt?',
        options: [
          'Moeilijk een vaste baan vinden',
          'Te weinig afgestudeerden',
          'Te lage salarissen',
          'Te veel buitenlandse concurrentie',
        ],
        answer: 0,
        explanation:
          '"Studenten hebben tegenwoordig veel meer moeite om een vaste baan te vinden."',
      },
      {
        question: 'Wat bieden werkgevers steeds vaker aan?',
        options: [
          'Hogere salarissen',
          'Meer vakantiedagen',
          'Tijdelijke contracten',
          'Parttime werk',
        ],
        answer: 2,
        explanation: '"Werkgevers bieden steeds vaker tijdelijke contracten aan."',
      },
      {
        question: 'In welke sectoren is veel vraag naar personeel?',
        options: [
          'Onderwijs en politiek',
          'Horeca en retail',
          'Techniek en zorg',
          'Kunst en cultuur',
        ],
        answer: 2,
        explanation:
          '"Er is veel vraag naar mensen met technische vaardigheden en in de zorg."',
      },
    ],
  },

  // ─── B2 ───────────────────────────────────────────────────────────────────
  {
    id: 'b2-klimaatdebat',
    title: 'Debat over klimaatbeleid',
    level: 'B2',
    topic: 'Klimaat & politiek',
    description: 'Een fragment uit een publiek debat over klimaatmaatregelen.',
    transcript:
      'In het debat over klimaatverandering staan twee visies tegenover elkaar. Aan de ene kant pleiten wetenschappers en milieuactivisten voor drastische en onmiddellijke maatregelen: een snelle overgang naar hernieuwbare energie, een CO2 belasting en strenge regelgeving voor de industrie. Aan de andere kant waarschuwen economen en sommige politici voor de economische gevolgen van te snel handelen. Zij stellen dat een geleidelijke transitie de werkgelegenheid beter beschermt en innovatie meer ruimte geeft. De vraag is niet of we moeten handelen, maar hoe snel en op welke manier.',
    questions: [
      {
        question: 'Wat is het centrale debatpunt?',
        options: [
          'Of klimaatverandering bestaat',
          'Wie verantwoordelijk is voor klimaatverandering',
          'Hoe snel en op welke manier klimaatmaatregelen nemen',
          'Of hernieuwbare energie werkt',
        ],
        answer: 2,
        explanation:
          '"De vraag is niet óf we moeten handelen, maar hoe snel en op welke manier."',
      },
      {
        question: 'Welke maatregel wordt expliciet genoemd?',
        options: [
          'Subsidies voor elektrische auto\'s',
          'Een CO2-belasting',
          'Kernenergie',
          'Beprijzing van vluchten',
        ],
        answer: 1,
        explanation: 'Er wordt een "CO2-belasting" genoemd als maatregel.',
      },
      {
        question: 'Wat is de zorg van economen en sommige politici?',
        options: [
          'Technologische haalbaarheid',
          'Internationale concurrentie',
          'Economische gevolgen van snel handelen',
          'Politieke weerstand',
        ],
        answer: 2,
        explanation:
          '"Economen en sommige politici waarschuwen voor de economische gevolgen van te snel handelen."',
      },
      {
        question: 'Wat stellen voorstanders van een geleidelijke transitie?',
        options: [
          'Het versnelt integratie',
          'Het bespaart geld',
          'Het verhoogt de werkgelegenheid direct',
          'Het beschermt de werkgelegenheid beter',
        ],
        answer: 3,
        explanation:
          '"Een geleidelijke transitie beschermt de werkgelegenheid beter en geeft innovatie meer ruimte."',
      },
    ],
  },
  {
    id: 'b2-reorganisatie',
    title: 'Aankondiging van een reorganisatie',
    level: 'B2',
    topic: 'Werk & organisatie',
    description: 'Een directeur informeert medewerkers over een ingrijpende reorganisatie.',
    transcript:
      'Beste collega\'s, ik moet u vandaag informeren over een ingrijpende reorganisatie. Door de teruglopende omzet en stijgende kosten zijn we genoodzaakt onze bedrijfsstructuur te herzien. We hebben besloten twee afdelingen samen te voegen: Marketing en Communicatie worden één afdeling. Dit betekent helaas dat er twaalf functies komen te vervallen. We doen er alles aan om gedwongen ontslagen te voorkomen door herplaatsing en een vrijwillige vertrekregeling aan te bieden. De ondernemingsraad is geïnformeerd en heeft ingestemd met het plan.',
    questions: [
      {
        question: 'Waarom is de reorganisatie nodig?',
        options: [
          'Fusie met een ander bedrijf',
          'Nieuwe strategie van de directie',
          'Teruglopende omzet en stijgende kosten',
          'Nieuwe overheidsregels',
        ],
        answer: 2,
        explanation:
          '"Door de teruglopende omzet en stijgende kosten zijn we genoodzaakt onze bedrijfsstructuur te herzien."',
      },
      {
        question: 'Welke afdelingen worden samengevoegd?',
        options: [
          'Sales en Marketing',
          'HR en Finance',
          'Marketing en Communicatie',
          'IT en Operations',
        ],
        answer: 2,
        explanation: '"Marketing en Communicatie worden één afdeling."',
      },
      {
        question: 'Hoeveel functies komen te vervallen?',
        options: ['8', '12', '15', '20'],
        answer: 1,
        explanation: '"Er komen twaalf functies te vervallen."',
      },
      {
        question: 'Wat heeft de ondernemingsraad gedaan?',
        options: [
          'Het plan afgewezen',
          'Bezwaar gemaakt',
          'Nog niet gereageerd',
          'Ingestemd met het plan',
        ],
        answer: 3,
        explanation: '"De ondernemingsraad is geïnformeerd en heeft ingestemd met het plan."',
      },
    ],
  },
  {
    id: 'b2-integratie',
    title: 'Podcast: taal en integratie',
    level: 'B2',
    topic: 'Integratie & samenleving',
    description: 'Een fragment uit een podcast over taal en integratie in Nederland.',
    transcript:
      'In de discussie over integratie in Nederland speelt taal een cruciale rol. Onderzoek toont aan dat mensen die goed Nederlands spreken aanzienlijk meer kans hebben op werk en sociale participatie. Toch blijft het leren van de taal voor veel nieuwkomers een uitdaging. Factoren als leeftijd, opleidingsniveau en de aanwezigheid van een eigen taalgemeenschap beïnvloeden het taalleerproces sterk. Critici van het huidige inburgeringsbeleid wijzen erop dat de verplichte examens soms te hoog gegrepen zijn, terwijl voorstanders stellen dat hoge eisen nodig zijn voor volwaardige deelname aan de samenleving.',
    questions: [
      {
        question: 'Welke rol speelt taal bij integratie?',
        options: [
          'Minder belangrijk dan cultuur',
          'Alleen belangrijk voor werk',
          'Niet de belangrijkste factor',
          'Cruciaal voor werk en sociale participatie',
        ],
        answer: 3,
        explanation:
          '"Mensen die goed Nederlands spreken hebben aanzienlijk meer kans op werk en sociale participatie."',
      },
      {
        question: 'Welke factoren beïnvloeden het taalleerproces?',
        options: [
          'Motivatie en budget',
          'Woonplaats en inkomen',
          'Leeftijd, opleidingsniveau en taalgemeenschap',
          'Nationaliteit en religie',
        ],
        answer: 2,
        explanation:
          '"Factoren als leeftijd, opleidingsniveau en de aanwezigheid van een eigen taalgemeenschap beïnvloeden het taalleerproces."',
      },
      {
        question: 'Wat zeggen critici over de inburgeringsexamens?',
        options: [
          'Ze zijn te makkelijk',
          'Ze kosten te veel geld',
          'Ze zijn nutteloos',
          'Ze zijn soms te hoog gegrepen',
        ],
        answer: 3,
        explanation:
          '"Critici wijzen erop dat de verplichte examens soms te hoog gegrepen zijn."',
      },
      {
        question: 'Wat stellen voorstanders van hoge exameneisen?',
        options: [
          'Het verhoogt de werkgelegenheid',
          'Het is nodig voor volwaardige deelname aan de samenleving',
          'Het bespaart geld',
          'Het versnelt integratie',
        ],
        answer: 1,
        explanation:
          '"Voorstanders stellen dat hoge eisen nodig zijn voor volwaardige deelname aan de samenleving."',
      },
    ],
  },
];

export const levelColors: Record<Level, string> = {
  A1: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  A2: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  B1: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  B2: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
};
