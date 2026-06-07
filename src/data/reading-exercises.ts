export type Level = 'A1' | 'A2' | 'B1' | 'B2';

export interface ReadingQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ReadingExercise {
  id: string;
  title: string;
  level: Level;
  topic: string;
  description: string;
  text: string;
  questions: ReadingQuestion[];
}

export const readingExercises: ReadingExercise[] = [
  // ─── A1 ───────────────────────────────────────────────────────────────────
  {
    id: 'a1-briefje',
    title: 'Een briefje van de buren',
    level: 'A1',
    topic: 'Dagelijks leven',
    description: 'Lees het briefje en beantwoord de vragen.',
    text: `Hallo buren,

Ik ben deze week op vakantie. Kunt u mijn post in de brievenbus laten? En kunt u mijn plant één keer water geven? De sleutel ligt onder de mat voor de deur.

Heel erg bedankt!

Groeten,
Sandra`,
    questions: [
      {
        question: 'Waarom schrijft Sandra dit briefje?',
        options: ['Ze is ziek', 'Ze is op vakantie', 'Ze verhuist', 'Ze heeft een nieuwe baan'],
        answer: 1,
        explanation: 'Sandra schrijft: "Ik ben deze week op vakantie."',
      },
      {
        question: 'Waar ligt de sleutel?',
        options: ['In de brievenbus', 'Bij de buren', 'Onder de mat', 'Op de vensterbank'],
        answer: 2,
        explanation: '"De sleutel ligt onder de mat voor de deur."',
      },
      {
        question: 'Wat vraagt Sandra haar buren te doen?',
        options: [
          'Post ophalen en de kat voeren',
          'Post in de bus laten en de plant water geven',
          'De deur opendoen en de post sturen',
          'De plant buiten zetten en water geven',
        ],
        answer: 1,
        explanation: 'Sandra vraagt om de post in de brievenbus te laten en de plant water te geven.',
      },
      {
        question: 'Hoe eindigt Sandra het briefje?',
        options: ['Met "Tot ziens"', 'Met "Vriendelijke groet"', 'Met "Groeten"', 'Met "Dank u wel"'],
        answer: 2,
        explanation: 'Sandra sluit af met "Groeten, Sandra."',
      },
    ],
  },
  {
    id: 'a1-advertentie',
    title: 'Een vacature',
    level: 'A1',
    topic: 'Werk',
    description: 'Lees de vacature en beantwoord de vragen.',
    text: `GEZOCHT: Medewerker bakkerij

Bakkerij De Goudkorst zoekt een nieuwe medewerker.

Werktijden: maandag tot en met vrijdag, 6:00 – 14:00 uur
Salaris: €12,50 per uur
Vereisten: u spreekt goed Nederlands en heeft ervaring in de horeca of voedingssector.

Interesse? Stuur uw cv naar: werk@degoudkorst.nl`,
    questions: [
      {
        question: 'Wat voor bedrijf zoekt een medewerker?',
        options: ['Een supermarkt', 'Een restaurant', 'Een bakkerij', 'Een hotel'],
        answer: 2,
        explanation: '"Bakkerij De Goudkorst zoekt een nieuwe medewerker."',
      },
      {
        question: 'Hoe laat begint het werk?',
        options: ['7:00 uur', '8:00 uur', '9:00 uur', '6:00 uur'],
        answer: 3,
        explanation: 'De werktijden zijn "6:00 – 14:00 uur."',
      },
      {
        question: 'Wat is het salaris?',
        options: ['€10,00 per uur', '€12,50 per uur', '€15,00 per uur', '€11,00 per uur'],
        answer: 1,
        explanation: '"Salaris: €12,50 per uur."',
      },
      {
        question: 'Hoe reageert u op de vacature?',
        options: [
          'U belt het bedrijf',
          'U gaat langs',
          'U stuurt uw cv per e-mail',
          'U schrijft een brief',
        ],
        answer: 2,
        explanation: '"Stuur uw cv naar: werk@degoudkorst.nl"',
      },
    ],
  },
  {
    id: 'a1-gemeente',
    title: 'Bij de gemeente',
    level: 'A1',
    topic: 'Officiële zaken',
    description: 'Lees de informatie van de gemeente en beantwoord de vragen.',
    text: `Gemeente Amsterdam – Uittreksel aanvragen

Voor een uittreksel uit de Basisregistratie Personen (BRP) heeft u nodig:
• Een geldig paspoort of identiteitskaart
• Uw burgerservicenummer (BSN)
• €14,00 (pin of contant)

Het uittreksel is klaar in 5 minuten.

Openingstijden loket:
Maandag t/m vrijdag: 9:00 – 17:00 uur`,
    questions: [
      {
        question: 'Wat kunt u hier aanvragen?',
        options: [
          'Een rijbewijs',
          'Een paspoort',
          'Een uittreksel uit de BRP',
          'Een verblijfsvergunning',
        ],
        answer: 2,
        explanation: 'U kunt hier "een uittreksel uit de Basisregistratie Personen (BRP)" aanvragen.',
      },
      {
        question: 'Welk document heeft u nodig als legitimatie?',
        options: [
          'Een rijbewijs of paspoort',
          'Een paspoort of identiteitskaart',
          'Alleen een paspoort',
          'Een bankpas',
        ],
        answer: 1,
        explanation: '"Een geldig paspoort of identiteitskaart."',
      },
      {
        question: 'Hoeveel kost het uittreksel?',
        options: ['€10,00', '€12,00', '€14,00', 'Gratis'],
        answer: 2,
        explanation: '"€14,00 (pin of contant)."',
      },
      {
        question: 'Hoe lang duurt het om een uittreksel te krijgen?',
        options: ['1 dag', '1 uur', '30 minuten', '5 minuten'],
        answer: 3,
        explanation: '"Het uittreksel is klaar in 5 minuten."',
      },
    ],
  },

  // ─── A2 ───────────────────────────────────────────────────────────────────
  {
    id: 'a2-verhuurder',
    title: 'Brief van de verhuurder',
    level: 'A2',
    topic: 'Wonen',
    description: 'Lees de brief en beantwoord de vragen.',
    text: `Beste huurder,

Hierbij informeer ik u dat er op woensdag 15 maart onderhoud wordt gepleegd aan de centrale verwarming in uw woning. Een monteur van het verwarmingsbedrijf komt tussen 9:00 en 12:00 uur.

Wij verzoeken u aanwezig te zijn zodat de monteur naar binnen kan. Als u die ochtend niet thuis kunt zijn, kunt u een reservesleutel inleveren bij de beheerder (appartement 1).

Let op: de verwarmingsinstallatie is die dag niet beschikbaar. Zorg voor voldoende dekens of een alternatieve verwarming.

Met vriendelijke groet,
De verhuurder`,
    questions: [
      {
        question: 'Waarover gaat de brief?',
        options: [
          'Een huurverhoging',
          'Onderhoud aan de verwarming',
          'Een nieuwe huurder',
          'Problemen met de waterleiding',
        ],
        answer: 1,
        explanation: '"Onderhoud wordt gepleegd aan de centrale verwarming."',
      },
      {
        question: 'Wanneer komt de monteur?',
        options: [
          'Dinsdag 15 maart',
          'Woensdag 15 maart, 9:00–12:00',
          'Donderdag, de hele dag',
          'Vrijdag 15 maart, 10:00–14:00',
        ],
        answer: 1,
        explanation: '"Op woensdag 15 maart… tussen 9:00 en 12:00 uur."',
      },
      {
        question: 'Wat moet u doen als u niet thuis kunt zijn?',
        options: [
          'De verhuurder bellen',
          'De afspraak verzetten',
          'Een reservesleutel inleveren bij de beheerder',
          'De monteur zelf bellen',
        ],
        answer: 2,
        explanation: '"U kunt een reservesleutel inleveren bij de beheerder (appartement 1)."',
      },
      {
        question: 'Wat wordt aanbevolen voor die dag?',
        options: [
          'Ergens anders slapen',
          'Voldoende dekens of alternatieve verwarming',
          'Warme kleding dragen',
          'De verwarming eerder aanzetten',
        ],
        answer: 1,
        explanation: '"Zorg voor voldoende dekens of een alternatieve verwarming."',
      },
    ],
  },
  {
    id: 'a2-inburgering',
    title: 'Het inburgeringsexamen',
    level: 'A2',
    topic: 'Inburgering',
    description: 'Lees de informatie over het inburgeringsexamen.',
    text: `Informatie over het inburgeringsexamen

Het inburgeringsexamen bestaat uit vijf onderdelen:
1. Lezen
2. Luisteren
3. Schrijven
4. Spreken
5. Kennis van de Nederlandse Maatschappij (KNM)

U heeft maximaal drie jaar de tijd om alle onderdelen te halen. Als u niet slaagt voor een onderdeel, kunt u het opnieuw doen. De examens worden afgenomen door DUO (Dienst Uitvoering Onderwijs).

Kosten: voor statushouders is de eerste keer gratis. Bij een herkansing betaalt u zelf.`,
    questions: [
      {
        question: 'Hoeveel onderdelen heeft het inburgeringsexamen?',
        options: ['3', '4', '5', '6'],
        answer: 2,
        explanation: 'Het examen bestaat uit vijf onderdelen.',
      },
      {
        question: 'Hoelang heeft u de tijd om alle onderdelen te halen?',
        options: ['1 jaar', '2 jaar', '3 jaar', '5 jaar'],
        answer: 2,
        explanation: '"U heeft maximaal drie jaar de tijd."',
      },
      {
        question: 'Welke organisatie neemt de examens af?',
        options: ['De gemeente', 'Het UWV', 'DUO', 'De Belastingdienst'],
        answer: 2,
        explanation: '"De examens worden afgenomen door DUO."',
      },
      {
        question: 'Wanneer is het examen gratis?',
        options: [
          'Altijd gratis',
          'Voor statushouders, de eerste keer',
          'Nooit gratis',
          'Bij de tweede poging',
        ],
        answer: 1,
        explanation: '"Voor statushouders is de eerste keer gratis."',
      },
    ],
  },
  {
    id: 'a2-cursus',
    title: 'Cursusaankondiging',
    level: 'A2',
    topic: 'Onderwijs',
    description: 'Lees de aankondiging en beantwoord de vragen.',
    text: `GRATIS NEDERLANDSE LES!

De bibliotheek biedt Nederlandse les aan voor beginners.

Wanneer: elke dinsdag en donderdag
Tijd: 10:00 – 12:00 uur
Niveau: beginners (A1)
Groepsgrootte: maximaal 8 personen

U leert basiswoordenschat en eenvoudige gesprekken voor het dagelijks leven.

Aanmelden:
• Kom langs bij de bibliotheek (balie, begane grond)
• Of bel: 020-123 45 67

Neem uw legitimatiebewijs mee bij aanmelding.`,
    questions: [
      {
        question: 'Hoe vaak per week zijn er lessen?',
        options: ['Één keer', 'Twee keer', 'Drie keer', 'Elke dag'],
        answer: 1,
        explanation: 'De lessen zijn "elke dinsdag en donderdag" — twee keer per week.',
      },
      {
        question: 'Hoe lang duurt een les?',
        options: ['1 uur', '1,5 uur', '2 uur', '3 uur'],
        answer: 2,
        explanation: '"10:00 – 12:00 uur" is twee uur.',
      },
      {
        question: 'Hoeveel personen zitten er maximaal in een groep?',
        options: ['5', '8', '10', '12'],
        answer: 1,
        explanation: '"Groepsgrootte: maximaal 8 personen."',
      },
      {
        question: 'Wat moet u meenemen bij aanmelding?',
        options: [
          'Een foto',
          'Uw legitimatiebewijs',
          'Uw BSN-nummer',
          'Een aanbevelingsbrief',
        ],
        answer: 1,
        explanation: '"Neem uw legitimatiebewijs mee bij aanmelding."',
      },
    ],
  },

  // ─── B1 ───────────────────────────────────────────────────────────────────
  {
    id: 'b1-huurprijzen',
    title: 'Stijgende huurprijzen',
    level: 'B1',
    topic: 'Wonen & samenleving',
    description: 'Lees het krantenartikel en beantwoord de vragen.',
    text: `Huurprijzen stijgen opnieuw

De huurprijzen in Nederland zijn het afgelopen jaar met gemiddeld acht procent gestegen. Vooral in de grote steden zoals Amsterdam en Rotterdam is het steeds moeilijker om betaalbare woonruimte te vinden.

Mensen met een middeninkomen zitten in een lastige positie: zij komen niet in aanmerking voor sociale huur, maar kunnen een vrije sectorwoning ook niet betalen. De overheid heeft aangekondigd dat er meer woningen worden gebouwd, maar gemeenten waarschuwen dat dit tijd kost.

Intussen zoeken steeds meer mensen naar alternatieven. Tiny houses en wooncoöperaties worden populairder. Experts zeggen dat dit tijdelijke oplossingen zijn, en dat structurele maatregelen nodig blijven.`,
    questions: [
      {
        question: 'Met hoeveel procent zijn de huurprijzen gestegen?',
        options: ['Vijf procent', 'Zes procent', 'Acht procent', 'Tien procent'],
        answer: 2,
        explanation: '"De huurprijzen zijn het afgelopen jaar met gemiddeld acht procent gestegen."',
      },
      {
        question: 'Welke groep heeft de meeste problemen op de woningmarkt?',
        options: [
          'Mensen met een laag inkomen',
          'Mensen met een hoog inkomen',
          'Mensen met een middeninkomen',
          'Studenten',
        ],
        answer: 2,
        explanation:
          '"Mensen met een middeninkomen zitten in een lastige positie": te rijk voor sociale huur, te arm voor vrije sector.',
      },
      {
        question: 'Welke alternatieven worden in het artikel genoemd?',
        options: [
          'Studentenkamers en tijdelijke woningen',
          'Tiny houses en wooncoöperaties',
          'Campings en woonboten',
          'Vakantiehuizen en hotels',
        ],
        answer: 1,
        explanation: '"Tiny houses en wooncoöperaties worden populairder."',
      },
      {
        question: 'Wat zeggen experts over deze alternatieven?',
        options: [
          'Ze zijn een permanente oplossing',
          'Ze zijn te duur',
          'Ze zijn tijdelijk; structurele maatregelen zijn nodig',
          'Ze werken alleen in kleine steden',
        ],
        answer: 2,
        explanation:
          '"Experts zeggen dat dit tijdelijke oplossingen zijn, en dat structurele maatregelen nodig blijven."',
      },
    ],
  },
  {
    id: 'b1-bezwaarbrief',
    title: 'Een bezwaarbrief schrijven',
    level: 'B1',
    topic: 'Officiële communicatie',
    description: 'Lees de brief en beantwoord de vragen.',
    text: `Geachte heer / mevrouw,

Hierbij maak ik bezwaar tegen de beslissing van uw gemeente om mijn aanvraag voor een parkeervergunning af te wijzen. Als reden geeft u op dat ik niet ingeschreven sta op het betreffende adres. Dit klopt echter niet.

Ik woon al twee jaar op dit adres en sta officieel ingeschreven bij de Basisregistratie Personen. Bijgevoegd vindt u een kopie van mijn inschrijvingsbewijs ter bevestiging.

Ik verzoek u vriendelijk de beslissing te herzien en de parkeervergunning alsnog te verlenen. Mocht u nadere informatie wensen, dan ben ik telefonisch bereikbaar op 06-12345678.

Met vriendelijke groet,
K. Okonkwo`,
    questions: [
      {
        question: 'Waartegen maakt de schrijver bezwaar?',
        options: [
          'Een boete voor fout parkeren',
          'De afwijzing van een parkeervergunning',
          'Een verhoging van parkeertarieven',
          'De annulering van een parkeerplaats',
        ],
        answer: 1,
        explanation: '"Ik maak bezwaar tegen de beslissing om mijn aanvraag voor een parkeervergunning af te wijzen."',
      },
      {
        question: 'Welke reden geeft de gemeente voor de afwijzing?',
        options: [
          'Er zijn geen parkeerplaatsen meer',
          'De aanvraag is te laat ingediend',
          'De schrijver staat niet ingeschreven op het adres',
          'Het adres ligt buiten de vergunningzone',
        ],
        answer: 2,
        explanation: '"U geeft op dat ik niet ingeschreven sta op het betreffende adres."',
      },
      {
        question: 'Hoe lang woont de schrijver al op dit adres?',
        options: ['Een half jaar', 'Een jaar', 'Twee jaar', 'Drie jaar'],
        answer: 2,
        explanation: '"Ik woon al twee jaar op dit adres."',
      },
      {
        question: 'Wat voegt de schrijver bij de brief?',
        options: [
          'Een kopie van het paspoort',
          'Een kopie van het inschrijvingsbewijs',
          'Een foto van de parkeerplaats',
          'Een huurcontract',
        ],
        answer: 1,
        explanation: '"Bijgevoegd vindt u een kopie van mijn inschrijvingsbewijs."',
      },
    ],
  },
  {
    id: 'b1-zorgstelsel',
    title: 'Het Nederlandse zorgstelsel',
    level: 'B1',
    topic: 'Zorg & gezondheid',
    description: 'Lees de uitleg over het zorgstelsel en beantwoord de vragen.',
    text: `Het Nederlandse zorgstelsel

In Nederland heeft iedereen die hier woont of werkt een basisverzekering nodig. U sluit deze zelf af bij een zorgverzekeraar naar keuze. De maandelijkse premie verschilt per verzekeraar.

Mensen met een laag inkomen kunnen zorgtoeslag aanvragen bij de Belastingdienst om de premie te verlagen. Naast de premie betaalt u ook een eigen risico. In 2025 is dat €385 per jaar. Dit eigen risico betaalt u alleen als u zorg gebruikt, zoals een specialist of ziekenhuis.

De huisarts is gratis en valt niet onder het eigen risico. U heeft een verwijzing van de huisarts nodig om naar een specialist te gaan.`,
    questions: [
      {
        question: 'Wie heeft in Nederland een basisverzekering nodig?',
        options: [
          'Alleen Nederlandse burgers',
          'Alleen werknemers',
          'Iedereen die hier woont of werkt',
          'Alleen mensen boven de 18 jaar',
        ],
        answer: 2,
        explanation: '"Iedereen die hier woont of werkt" heeft een basisverzekering nodig.',
      },
      {
        question: 'Hoe hoog is het eigen risico in 2025?',
        options: ['€285', '€350', '€385', '€450'],
        answer: 2,
        explanation: '"In 2025 is dat €385 per jaar."',
      },
      {
        question: 'Wanneer betaalt u het eigen risico?',
        options: [
          'Elke maand',
          'Alleen als u zorg gebruikt',
          'Aan het begin van het jaar',
          'Als u naar de huisarts gaat',
        ],
        answer: 1,
        explanation: '"U betaalt dit eigen risico alleen als u zorg gebruikt."',
      },
      {
        question: 'Wat heeft u nodig om naar een specialist te gaan?',
        options: [
          'Een verzekeringspas',
          'Een afspraak via internet',
          'Een verwijzing van de huisarts',
          'Toestemming van de verzekeraar',
        ],
        answer: 2,
        explanation: '"U heeft een verwijzing van de huisarts nodig om naar een specialist te gaan."',
      },
    ],
  },

  // ─── B2 ───────────────────────────────────────────────────────────────────
  {
    id: 'b2-arbeidsmigratie',
    title: 'Arbeidsmigratie in Nederland',
    level: 'B2',
    topic: 'Maatschappij & politiek',
    description: 'Lees het opiniestuk en beantwoord de vragen.',
    text: `Arbeidsmigratie: kans of probleem?

De discussie over arbeidsmigratie in Nederland is genuanceerder dan ze in het publieke debat vaak lijkt. Enerzijds zijn arbeidsmigranten onmisbaar voor sectoren als de landbouw, logistiek en bouw, waar structurele personeelstekorten bestaan die niet door de eigen bevolking kunnen worden opgevuld.

Anderzijds wijzen critici op ernstige sociale gevolgen: extra druk op de toch al gespannen woningmarkt, onderbetaling en soms openlijke uitbuiting van kwetsbare werknemers. Het rapport van de commissie-Roemer concludeerde dat Nederland een zogenaamde 'magneetfunctie' heeft, die migranten aantrekt door zwakke handhaving van arbeidsrechten en sociale regels.

Een duurzame aanpak vereist een delicate balans: strengere regulering en handhaving zijn noodzakelijk, maar mogen de economische sectoren die van arbeidsmigranten afhankelijk zijn niet onevenredig belasten.`,
    questions: [
      {
        question: 'Welke sectoren zijn volgens de tekst afhankelijk van arbeidsmigranten?',
        options: [
          'Zorg, onderwijs en overheid',
          'Landbouw, logistiek en bouw',
          'IT, financiën en consultancy',
          'Toerisme, retail en horeca',
        ],
        answer: 1,
        explanation: '"Sectoren als de landbouw, logistiek en bouw" hebben structurele personeelstekorten.',
      },
      {
        question: "Wat bedoelt de commissie-Roemer met 'magneetfunctie'?",
        options: [
          'Nederland trekt hoogopgeleide migranten aan',
          'Migranten kiezen Nederland vanwege het klimaat',
          'Nederland trekt migranten aan door zwakke handhaving van arbeidsrechten',
          'Nederland heeft een actief wervingsbeleid voor arbeidsmigranten',
        ],
        answer: 2,
        explanation:
          '"Nederland heeft een magneetfunctie die migranten aantrekt door zwakke handhaving van arbeidsrechten en sociale regels."',
      },
      {
        question: 'Welke sociale gevolgen van arbeidsmigratie worden genoemd?',
        options: [
          'Hogere criminaliteit en taalbarrières',
          'Druk op woningmarkt, onderbetaling en uitbuiting',
          'Lagere lonen voor alle werknemers',
          'Culturele spanningen en integratieproblemen',
        ],
        answer: 1,
        explanation:
          '"Extra druk op de woningmarkt, onderbetaling en soms openlijke uitbuiting van kwetsbare werknemers."',
      },
      {
        question: 'Wat is de conclusie van de schrijver over regulering?',
        options: [
          'Regulering is niet nodig',
          'Volledige stopzetting van arbeidsmigratie is de oplossing',
          'Strengere regulering is nodig, maar mag economie niet onevenredig belasten',
          'De markt moet het probleem zelf oplossen',
        ],
        answer: 2,
        explanation:
          '"Strengere regulering en handhaving zijn noodzakelijk, maar mogen de economische sectoren niet onevenredig belasten."',
      },
    ],
  },
  {
    id: 'b2-taalverwerving',
    title: 'Taalverwerving bij volwassenen',
    level: 'B2',
    topic: 'Wetenschap & onderwijs',
    description: 'Lees het wetenschappelijke artikel en beantwoord de vragen.',
    text: `Taalverwerving bij volwassenen: motivatie boven leeftijd

Onderzoek naar taalverwerving bij volwassenen nuanceert het wijdverbreide geloof dat leeftijd de bepalende factor is. Hoewel kinderen grammaticale structuren inderdaad sneller en intuïtiever internaliseren, kunnen gemotiveerde volwassenen een opmerkelijk hoge taalvaardigheid bereiken.

Bepalender dan leeftijd blijkt de kwaliteit van blootstelling aan de doeltaal. Passief luisteren — bijvoorbeeld televisiekijken zonder actieve betrokkenheid — levert beduidend minder resultaat op dan actieve communicatie in authentieke situaties. Taalleerders die regelmatig en betekenisvol interacteren met moedertaalsprekers, boeken aantoonbaar meer vooruitgang.

Gestructureerde instructie, zoals taallessen en grammatica-oefeningen, blijft waardevol, maar vormt slechts een aanvulling op informeel leren in de praktijk. De meest effectieve leerders combineren beide: formele studie én dagelijkse blootstelling.`,
    questions: [
      {
        question: 'Wat is volgens het onderzoek bepalender dan leeftijd bij taalverwerving?',
        options: [
          'Intelligentie',
          'Opleidingsniveau',
          'De kwaliteit van blootstelling aan de doeltaal',
          'Het aantal uren studie per week',
        ],
        answer: 2,
        explanation:
          '"Bepalender dan leeftijd blijkt de kwaliteit van blootstelling aan de doeltaal."',
      },
      {
        question: 'Wat levert minder resultaat op dan actieve communicatie?',
        options: [
          'Grammatica-oefeningen',
          'Passief luisteren (zoals tv-kijken)',
          'Lezen van boeken',
          'Woordenlijsten leren',
        ],
        answer: 1,
        explanation:
          '"Passief luisteren — bijvoorbeeld televisiekijken — levert beduidend minder resultaat op."',
      },
      {
        question: 'Wie boeken aantoonbaar meer vooruitgang?',
        options: [
          'Leerders die elke dag studeren',
          'Leerders die jonger zijn dan 30',
          'Leerders die regelmatig interacteren met moedertaalsprekers',
          'Leerders die professionele taallessen volgen',
        ],
        answer: 2,
        explanation:
          '"Taalleerders die regelmatig en betekenisvol interacteren met moedertaalsprekers, boeken aantoonbaar meer vooruitgang."',
      },
      {
        question: 'Wat is de meest effectieve aanpak volgens het artikel?',
        options: [
          'Alleen formele taallessen volgen',
          'Alleen informeel leren in de praktijk',
          'Formele studie combineren met dagelijkse blootstelling',
          'Zo veel mogelijk televisie kijken',
        ],
        answer: 2,
        explanation:
          '"De meest effectieve leerders combineren beide: formele studie én dagelijkse blootstelling."',
      },
    ],
  },
  {
    id: 'b2-klimaatplan',
    title: 'Gemeentelijk klimaatplan',
    level: 'B2',
    topic: 'Klimaat & beleid',
    description: 'Lees het beleidsdocument en beantwoord de vragen.',
    text: `Klimaatplan gemeente 2025–2030

De gemeente heeft een ambitieus klimaatplan gepresenteerd met als doel de CO2-uitstoot tegen 2030 met vijftig procent te verminderen ten opzichte van het niveau van 1990.

Het plan rust op drie pijlers:
1. Energiebesparing in de gebouwde omgeving
2. Verduurzaming van het gemeentelijke en particuliere verkeer
3. Overgang naar hernieuwbare energiebronnen (zon, wind)

Alle nieuwbouw dient aardgasvrij te zijn. Bewoners die hun bestaande woning isoleren of zonnepanelen plaatsen, kunnen een gemeentelijke subsidie aanvragen.

Critici, waaronder een aantal raadsleden en het lokale bedrijfsleven, stellen dat de ambities niet realistisch zijn zonder voldoende financiering en een duidelijk handhavingskader. De gemeente erkent deze zorgen en belooft een jaarlijkse voortgangsrapportage.`,
    questions: [
      {
        question: 'Met hoeveel procent moet de CO2-uitstoot dalen tegen 2030?',
        options: ['25%', '30%', '40%', '50%'],
        answer: 3,
        explanation: '"De CO2-uitstoot met vijftig procent verminderen ten opzichte van 1990."',
      },
      {
        question: 'Wat is de tweede pijler van het klimaatplan?',
        options: [
          'Energiebesparing in gebouwen',
          'Verduurzaming van het verkeer',
          'Overgang naar hernieuwbare energie',
          'Aanplant van bomen',
        ],
        answer: 1,
        explanation: 'De tweede pijler is "verduurzaming van het gemeentelijke en particuliere verkeer."',
      },
      {
        question: 'Welke eis geldt voor nieuwbouw?',
        options: [
          'Zonnepanelen verplicht',
          'Minimaal energielabel A',
          'Aardgasvrij zijn',
          'Groene daken verplicht',
        ],
        answer: 2,
        explanation: '"Alle nieuwbouw dient aardgasvrij te zijn."',
      },
      {
        question: 'Wat belooft de gemeente als reactie op de kritiek?',
        options: [
          'Extra budget vrij te maken',
          'De doelstelling te verlagen',
          'Een jaarlijkse voortgangsrapportage',
          'Een onafhankelijke commissie in te stellen',
        ],
        answer: 2,
        explanation: '"De gemeente belooft een jaarlijkse voortgangsrapportage."',
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
