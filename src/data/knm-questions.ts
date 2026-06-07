export type KnmCategory =
  | 'staatsinrichting'
  | 'rechten-plichten'
  | 'gezondheidszorg'
  | 'onderwijs'
  | 'werk-inkomen'
  | 'wonen'
  | 'sociale-zekerheid'
  | 'openbare-orde';

export interface KnmQuestion {
  id: string;
  category: KnmCategory;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const categoryLabels: Record<KnmCategory, string> = {
  staatsinrichting: 'Staatsinrichting',
  'rechten-plichten': 'Rechten & plichten',
  gezondheidszorg: 'Gezondheidszorg',
  onderwijs: 'Onderwijs',
  'werk-inkomen': 'Werk & inkomen',
  wonen: 'Wonen',
  'sociale-zekerheid': 'Sociale zekerheid',
  'openbare-orde': 'Openbare orde',
};

export const categoryIcons: Record<KnmCategory, string> = {
  staatsinrichting: '🏛️',
  'rechten-plichten': '⚖️',
  gezondheidszorg: '🏥',
  onderwijs: '🎓',
  'werk-inkomen': '💼',
  wonen: '🏠',
  'sociale-zekerheid': '🛡️',
  'openbare-orde': '🚔',
};

export const knmQuestions: KnmQuestion[] = [
  // ─── STAATSINRICHTING ────────────────────────────────────────────────────
  {
    id: 'si-01',
    category: 'staatsinrichting',
    question: 'Wat is de officiële regeringsvorm van Nederland?',
    options: ['Republiek', 'Constitutionele monarchie', 'Federale staat', 'Absolute monarchie'],
    answer: 1,
    explanation:
      'Nederland is een constitutionele monarchie: de koning of koningin is staatshoofd, maar de politieke macht ligt bij de gekozen volksvertegenwoordigers.',
  },
  {
    id: 'si-02',
    category: 'staatsinrichting',
    question: 'Wie is het hoofd van de regering in Nederland?',
    options: ['De koning', 'De minister-president', 'De voorzitter van de Tweede Kamer', 'De burgemeester van Amsterdam'],
    answer: 1,
    explanation:
      'De minister-president (premier) is het hoofd van de regering en leidt het kabinet.',
  },
  {
    id: 'si-03',
    category: 'staatsinrichting',
    question: 'Uit hoeveel kamers bestaat het Nederlandse parlement (de Staten-Generaal)?',
    options: ['1', '2', '3', '4'],
    answer: 1,
    explanation:
      'Het Nederlandse parlement bestaat uit twee kamers: de Eerste Kamer en de Tweede Kamer.',
  },
  {
    id: 'si-04',
    category: 'staatsinrichting',
    question: 'Hoeveel leden heeft de Tweede Kamer?',
    options: ['75', '100', '150', '225'],
    answer: 2,
    explanation: 'De Tweede Kamer bestaat uit 150 gekozen volksvertegenwoordigers.',
  },
  {
    id: 'si-05',
    category: 'staatsinrichting',
    question: 'Hoe vaak zijn er Tweede Kamerverkiezingen in Nederland?',
    options: ['Elke 2 jaar', 'Elke 4 jaar', 'Elke 5 jaar', 'Elke 6 jaar'],
    answer: 1,
    explanation:
      'Tweede Kamerverkiezingen vinden elke 4 jaar plaats, maar er kunnen ook tussentijdse verkiezingen zijn als de regering valt.',
  },
  {
    id: 'si-06',
    category: 'staatsinrichting',
    question: 'Wat is de taak van de Eerste Kamer?',
    options: [
      'Wetten maken',
      'Wetten controleren die de Tweede Kamer heeft aangenomen',
      'De minister-president kiezen',
      'Het budget opstellen',
    ],
    answer: 1,
    explanation:
      'De Eerste Kamer controleert of wetten die door de Tweede Kamer zijn aangenomen goed in elkaar zitten. Ze kan geen wetten wijzigen, alleen aanvaarden of verwerpen.',
  },
  {
    id: 'si-07',
    category: 'staatsinrichting',
    question: 'Wat is de rol van de koning of koningin in de Nederlandse politiek?',
    options: [
      'Alle wetten ondertekenen en goedkeuren',
      'Symbolisch staatshoofd; geen politieke macht',
      'De minister-president aanstellen en ontslaan',
      'Leiding geven aan de ministerraad',
    ],
    answer: 1,
    explanation:
      'De Nederlandse monarch is een symbolisch staatshoofd. De politieke macht berust bij de gekozen volksvertegenwoordigers en het kabinet.',
  },
  {
    id: 'si-08',
    category: 'staatsinrichting',
    question: 'Wat is een gemeente?',
    options: [
      'Een provincie',
      'De laagste bestuurslaag in Nederland',
      'Een nationaal ministerie',
      'Een rechterlijk college',
    ],
    answer: 1,
    explanation:
      'Een gemeente is de kleinste en laagste bestuurslaag in Nederland. Ze wordt bestuurd door een gemeenteraad, een college van burgemeester en wethouders, en een burgemeester.',
  },

  // ─── RECHTEN & PLICHTEN ──────────────────────────────────────────────────
  {
    id: 'rp-01',
    category: 'rechten-plichten',
    question: 'Vanaf welke leeftijd heeft u in Nederland stemrecht bij nationale verkiezingen?',
    options: ['16 jaar', '17 jaar', '18 jaar', '21 jaar'],
    answer: 2,
    explanation: 'U heeft stemrecht zodra u 18 jaar oud bent.',
  },
  {
    id: 'rp-02',
    category: 'rechten-plichten',
    question: 'Wat is de identificatieplicht in Nederland?',
    options: [
      'U moet altijd uw rijbewijs bij u hebben',
      'U moet vanaf 14 jaar een geldig legitimatiebewijs bij u kunnen tonen',
      'Alleen buitenlanders moeten een paspoort bij zich hebben',
      'U moet u identificeren als de politie hierom vraagt, maar alleen boven de 21',
    ],
    answer: 1,
    explanation:
      'Iedereen vanaf 14 jaar is verplicht een geldig identiteitsbewijs (paspoort, ID-kaart of rijbewijs) bij zich te dragen en dit te tonen als een opsporingsambtenaar hierom vraagt.',
  },
  {
    id: 'rp-03',
    category: 'rechten-plichten',
    question: 'Welk recht is vastgelegd in de Nederlandse Grondwet?',
    options: [
      'Het recht op gratis onderwijs voor iedereen',
      'Het recht op een minimuminkomen',
      'Het recht op gelijke behandeling',
      'Het recht op een sociale huurwoning',
    ],
    answer: 2,
    explanation:
      'Artikel 1 van de Nederlandse Grondwet garandeert gelijke behandeling en verbiedt discriminatie op grond van godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht of andere gronden.',
  },
  {
    id: 'rp-04',
    category: 'rechten-plichten',
    question: 'Wat is de leerplicht in Nederland?',
    options: [
      'Van 4 tot 16 jaar',
      'Van 5 tot 16 jaar, daarna kwalificatieplicht tot 18',
      'Van 6 tot 18 jaar',
      'Van 4 tot 18 jaar',
    ],
    answer: 1,
    explanation:
      'Kinderen zijn leerplichtig van hun 5e tot en met hun 16e jaar. Daarna geldt de kwalificatieplicht: jongeren tot 18 jaar zonder startkwalificatie moeten onderwijs blijven volgen.',
  },
  {
    id: 'rp-05',
    category: 'rechten-plichten',
    question: 'Wat is een DigiD?',
    options: [
      'Een digitale identiteitskaart voor reizen',
      'Een inlognaam en wachtwoord voor Nederlandse overheidsdiensten',
      'Een bankpas voor online betalingen',
      'Een elektronisch rijbewijs',
    ],
    answer: 1,
    explanation:
      'DigiD is uw digitale identiteit waarmee u kunt inloggen op websites van de overheid, zoals de Belastingdienst, het UWV en gemeenten.',
  },
  {
    id: 'rp-06',
    category: 'rechten-plichten',
    question: 'Wat is vrijheid van meningsuiting?',
    options: [
      'Het recht om altijd alles te zeggen zonder consequenties',
      'Het recht om uw mening te uiten, binnen de grenzen van de wet',
      'Het recht om de overheid te bekritiseren zonder straf',
      'Het recht om anoniem te publiceren',
    ],
    answer: 1,
    explanation:
      'Vrijheid van meningsuiting is een grondrecht, maar is niet absoluut. Uitingen die aanzetten tot haat of discriminatie, of die beledigend zijn, kunnen strafbaar zijn.',
  },

  // ─── GEZONDHEIDSZORG ─────────────────────────────────────────────────────
  {
    id: 'gz-01',
    category: 'gezondheidszorg',
    question: 'Wat is de eerste stap als u medische hulp nodig heeft in Nederland?',
    options: [
      'Direct naar het ziekenhuis gaan',
      'De huisarts bellen of bezoeken',
      'Naar een specialist gaan',
      'De apotheek bezoeken',
    ],
    answer: 1,
    explanation:
      'De huisarts (GP) is de eerste stap in de Nederlandse gezondheidszorg. U heeft in de meeste gevallen een verwijzing van de huisarts nodig om naar een specialist te gaan.',
  },
  {
    id: 'gz-02',
    category: 'gezondheidszorg',
    question: 'Wat is het eigen risico in de Nederlandse zorgverzekering?',
    options: [
      'Het bedrag dat de verzekeraar vergoedt',
      'Het bedrag dat u zelf betaalt voordat de verzekeraar vergoedt',
      'De maandelijkse premie',
      'Het bedrag voor een huisartsbezoek',
    ],
    answer: 1,
    explanation:
      'Het eigen risico is het bedrag dat u elk jaar zelf betaalt aan zorgkosten voordat de zorgverzekeraar de kosten vergoedt. In 2025 is dit €385. De huisarts valt hier niet onder.',
  },
  {
    id: 'gz-03',
    category: 'gezondheidszorg',
    question: 'Wat doet de GGD?',
    options: [
      'Huisartsenzorg verlenen',
      'Openbare gezondheidszorg en preventie organiseren',
      'Medicijnen verstrekken',
      'Ziekenhuizen beheren',
    ],
    answer: 1,
    explanation:
      'De GGD (Gemeentelijke Gezondheidsdienst) voert taken uit op het gebied van openbare gezondheidszorg, zoals vaccinaties, infectieziektebestrijding en jeugdgezondheidszorg.',
  },
  {
    id: 'gz-04',
    category: 'gezondheidszorg',
    question: 'Wanneer belt u 112?',
    options: [
      'Als u een afspraak wilt maken bij de huisarts',
      'Bij elke medische vraag',
      'In een levensbedreigende situatie of noodgeval',
      'Als u een herhaalrecept nodig heeft',
    ],
    answer: 2,
    explanation:
      '112 is het alarmnummer voor spoedeisende situaties: brandweer, ambulance en politie. Voor medische vragen buiten kantooruren belt u de huisartsenpost (HAP).',
  },
  {
    id: 'gz-05',
    category: 'gezondheidszorg',
    question: 'Wat is zorgtoeslag?',
    options: [
      'Een korting op medicijnen',
      'Een tegemoetkoming van de overheid voor de zorgpremie voor mensen met een laag inkomen',
      'Een vergoeding voor tandartskosten',
      'Een bijdrage voor de eigen bijdrage',
    ],
    answer: 1,
    explanation:
      'Zorgtoeslag is een bijdrage van de overheid om de zorgpremie betaalbaar te maken voor mensen met een laag of middeninkomen. U vraagt het aan via de Belastingdienst.',
  },

  // ─── ONDERWIJS ────────────────────────────────────────────────────────────
  {
    id: 'ow-01',
    category: 'onderwijs',
    question: 'Welk schooltype bereidt leerlingen voor op universitair onderwijs?',
    options: ['VMBO', 'HAVO', 'VWO', 'MBO'],
    answer: 2,
    explanation:
      'VWO (Voorbereidend Wetenschappelijk Onderwijs) duurt 6 jaar en geeft toegang tot de universiteit (WO).',
  },
  {
    id: 'ow-02',
    category: 'onderwijs',
    question: 'Wat is een startkwalificatie?',
    options: [
      'Een diploma van de basisschool',
      'Een HAVO- of VWO-diploma, of een MBO-diploma niveau 2 of hoger',
      'Een universitair diploma',
      'Een taaldiploma Nederlands',
    ],
    answer: 1,
    explanation:
      'Een startkwalificatie is het minimale onderwijsniveau dat nodig is voor een goede positie op de arbeidsmarkt: minimaal een HAVO/VWO-diploma of een MBO-diploma niveau 2.',
  },
  {
    id: 'ow-03',
    category: 'onderwijs',
    question: 'Wat is het basisonderwijs in Nederland?',
    options: [
      'Onderwijs voor kinderen van 2 tot 10 jaar',
      'Onderwijs voor kinderen van 4 tot 12 jaar (groep 1 t/m 8)',
      'Onderwijs voor kinderen van 6 tot 14 jaar',
      'Alleen onderwijs voor kleuters',
    ],
    answer: 1,
    explanation:
      'Het basisonderwijs duurt 8 jaar (groep 1 t/m 8) en is voor kinderen van 4 tot 12 jaar. Vanaf groep 3 (6 jaar) is het verplicht.',
  },
  {
    id: 'ow-04',
    category: 'onderwijs',
    question: 'Wat is de functie van de Cito-toets (nu: Eindtoets)?',
    options: [
      'Toelating tot de universiteit',
      'Een advies geven voor het voortgezet onderwijs na de basisschool',
      'Bepalen of een kind naar het speciaal onderwijs gaat',
      'Meten van de Nederlandse taalvaardigheid',
    ],
    answer: 1,
    explanation:
      'De Eindtoets (vroeger Cito-toets) wordt gemaakt in groep 8 en geeft een advies voor de meest passende vorm van voortgezet onderwijs.',
  },

  // ─── WERK & INKOMEN ───────────────────────────────────────────────────────
  {
    id: 'wi-01',
    category: 'werk-inkomen',
    question: 'Wat is het minimumloon?',
    options: [
      'Het loon dat u verdient bij de overheid',
      'Het wettelijk vastgestelde minimale uurloon dat een werkgever moet betalen',
      'Het loon voor deeltijdwerkers',
      'Het gemiddelde loon in Nederland',
    ],
    answer: 1,
    explanation:
      'Het wettelijk minimumloon is het minimale bedrag dat een werkgever verplicht is te betalen. Het wordt periodiek aangepast en geldt voor werknemers van 21 jaar en ouder.',
  },
  {
    id: 'wi-02',
    category: 'werk-inkomen',
    question: 'Wat is een arbeidscontract?',
    options: [
      'Een inschrijving bij het UWV',
      'Een schriftelijke overeenkomst tussen werkgever en werknemer over werk en salaris',
      'Een bewijs dat u heeft gesolliciteerd',
      'Een document van de Belastingdienst',
    ],
    answer: 1,
    explanation:
      'Een arbeidscontract (arbeidsovereenkomst) legt de afspraken vast tussen werkgever en werknemer: functie, uren, salaris, verlof en andere arbeidsvoorwaarden.',
  },
  {
    id: 'wi-03',
    category: 'werk-inkomen',
    question: 'Wat is het UWV?',
    options: [
      'Een vakbond voor werknemers',
      'De uitvoeringsinstantie die uitkeringen verstrekt zoals WW en WIA',
      'De belastingdienst voor werkenden',
      'Een arbeidsbemiddelingsbureau van de overheid',
    ],
    answer: 1,
    explanation:
      'Het UWV (Uitvoeringsinstituut Werknemersverzekeringen) voert werknemersverzekeringen uit, zoals de WW (werkloosheidsuitkering) en de WIA (arbeidsongeschiktheid).',
  },
  {
    id: 'wi-04',
    category: 'werk-inkomen',
    question: 'Wat is de WW-uitkering?',
    options: [
      'Een uitkering voor mensen die nooit hebben gewerkt',
      'Een uitkering bij werkloosheid voor mensen die eerder hebben gewerkt en premie hebben betaald',
      'Een uitkering voor zelfstandigen',
      'Een aanvulling op een laag loon',
    ],
    answer: 1,
    explanation:
      'De WW (Werkloosheidswet) is een tijdelijke uitkering voor werknemers die werkloos worden en die voldoen aan de wekeneis (minstens 26 van de 36 weken gewerkt).',
  },
  {
    id: 'wi-05',
    category: 'werk-inkomen',
    question: 'Hoeveel vakantiedagen heeft een fulltime werknemer in Nederland minimaal per jaar?',
    options: ['10 dagen', '15 dagen', '20 dagen', '25 dagen'],
    answer: 2,
    explanation:
      'Wettelijk hebben fulltime werknemers recht op minimaal 20 vakantiedagen per jaar (4 × het aantal werkdagen per week). Veel cao\'s geven meer dagen.',
  },
  {
    id: 'wi-06',
    category: 'werk-inkomen',
    question: 'Wat is een BSN?',
    options: [
      'Een bankrekeningnummer',
      'Een burgerservicenummer: uw persoonlijke identificatienummer bij de overheid',
      'Een verzekeringsnummer',
      'Een inschrijvingsnummer bij de gemeente',
    ],
    answer: 1,
    explanation:
      'Het BSN (Burgerservicenummer) is een uniek persoonlijk nummer dat u nodig heeft voor contact met de overheid, de Belastingdienst, de zorgverzekeraar en bij het werken in loondienst.',
  },

  // ─── WONEN ────────────────────────────────────────────────────────────────
  {
    id: 'wo-01',
    category: 'wonen',
    question: 'Wat is huurtoeslag?',
    options: [
      'Een korting op de koopprijs van een woning',
      'Een bijdrage van de overheid voor mensen met een laag inkomen die huur betalen',
      'Een belasting op huurwoningen',
      'Een vergoeding voor het verduurzamen van uw woning',
    ],
    answer: 1,
    explanation:
      'Huurtoeslag is een maandelijkse bijdrage van de Belastingdienst voor huurders met een laag inkomen en een huurwoning tot de liberalisatiegrens.',
  },
  {
    id: 'wo-02',
    category: 'wonen',
    question: 'Wat is een sociale huurwoning?',
    options: [
      'Een woning die door de gemeente wordt gebouwd',
      'Een huurwoning met een huurprijs onder de liberalisatiegrens, bestemd voor mensen met een lager inkomen',
      'Een woning voor statushouders',
      'Een gratis woning van de overheid',
    ],
    answer: 1,
    explanation:
      'Sociale huurwoningen hebben een huurprijs onder de liberalisatiegrens en zijn bedoeld voor mensen met een lager inkomen. Ze worden verhuurd door woningcorporaties.',
  },
  {
    id: 'wo-03',
    category: 'wonen',
    question: 'Wat moet u doen als u gaat verhuizen?',
    options: [
      'Uw nieuwe adres doorgeven aan de Belastingdienst',
      'U inschrijven bij de nieuwe gemeente (BRP)',
      'Een verhuisvergunning aanvragen',
      'De politie informeren',
    ],
    answer: 1,
    explanation:
      'U bent verplicht uw nieuwe adres door te geven aan de gemeente waar u naartoe verhuist. Dit heet inschrijving in de Basisregistratie Personen (BRP). U moet dit doen binnen 5 dagen na de verhuizing.',
  },
  {
    id: 'wo-04',
    category: 'wonen',
    question: 'Wie is verantwoordelijk voor groot onderhoud aan een huurwoning?',
    options: [
      'De huurder',
      'De verhuurder',
      'De gemeente',
      'De Huurcommissie',
    ],
    answer: 1,
    explanation:
      'Groot onderhoud (zoals dak, fundering, buitenmuren) is de verantwoordelijkheid van de verhuurder. Klein onderhoud en reparaties (zoals kapotte kranen en lekkende toiletten) zijn voor de huurder.',
  },

  // ─── SOCIALE ZEKERHEID ───────────────────────────────────────────────────
  {
    id: 'sz-01',
    category: 'sociale-zekerheid',
    question: 'Wat is de bijstand (Participatiewet)?',
    options: [
      'Een uitkering voor mensen die ziek zijn',
      'Een uitkering als laatste vangnet voor mensen zonder inkomen die niet in aanmerking komen voor andere uitkeringen',
      'Een subsidie voor mensen die een opleiding volgen',
      'Een uitkering voor ouderen',
    ],
    answer: 1,
    explanation:
      'De bijstand (via de Participatiewet) is een minimumuitkering als laatste vangnet. U kunt er aanspraak op maken als u geen werk, geen eigen vermogen en geen recht op andere uitkeringen heeft.',
  },
  {
    id: 'sz-02',
    category: 'sociale-zekerheid',
    question: 'Wat is de AOW?',
    options: [
      'Een uitkering voor arbeidsongeschikten',
      'De staatspensioensuitkering voor mensen die de AOW-gerechtigde leeftijd hebben bereikt',
      'Een werkloosheidsuitkering voor ouderen',
      'Een aanvullend pensioen van de werkgever',
    ],
    answer: 1,
    explanation:
      'De AOW (Algemene Ouderdomswet) is de staatspensioen die iedereen ontvangt die in Nederland heeft gewoond of gewerkt en de AOW-leeftijd heeft bereikt (momenteel 67 jaar).',
  },
  {
    id: 'sz-03',
    category: 'sociale-zekerheid',
    question: 'Wat is kinderbijslag?',
    options: [
      'Een tegemoetkoming voor kinderopvangkosten',
      'Een periodieke uitkering voor ouders met kinderen tot 18 jaar',
      'Een korting op schoolgeld',
      'Een eenmalige uitkering bij de geboorte van een kind',
    ],
    answer: 1,
    explanation:
      'Kinderbijslag (AKW) is een kwartaaluitkering van de Sociale Verzekeringsbank (SVB) voor ouders met kinderen tot 18 jaar, ongeacht het inkomen.',
  },
  {
    id: 'sz-04',
    category: 'sociale-zekerheid',
    question: 'Wie betaalt de sociale verzekeringen in Nederland?',
    options: [
      'Alleen de werkgever',
      'Alleen de werknemer',
      'Zowel werkgever als werknemer via premies',
      'Alleen de overheid via belastingen',
    ],
    answer: 2,
    explanation:
      'Sociale verzekeringen worden gefinancierd door premies die zowel werkgevers als werknemers betalen, naast een bijdrage van de overheid.',
  },

  // ─── OPENBARE ORDE ───────────────────────────────────────────────────────
  {
    id: 'oo-01',
    category: 'openbare-orde',
    question: 'Wat is de taak van de Nederlandse politie?',
    options: [
      'Wetten maken',
      'Handhaving van de openbare orde, veiligheid en strafrechtelijke opsporing',
      'Belasting innen',
      'Rechtspreken',
    ],
    answer: 1,
    explanation:
      'De politie is verantwoordelijk voor de handhaving van de openbare orde en veiligheid, de strafrechtelijke opsporing en de hulpverlening aan burgers.',
  },
  {
    id: 'oo-02',
    category: 'openbare-orde',
    question: 'Wat doet u als u getuige bent van een misdrijf?',
    options: [
      'U grijpt zelf in',
      'U belt 112 of 0900-8844 en geeft het door aan de politie',
      'U belt de gemeente',
      'U schrijft een brief naar het ministerie',
    ],
    answer: 1,
    explanation:
      '112 is voor spoedeisende situaties. 0900-8844 is het niet-spoednummer van de politie voor het melden van niet-acute zaken.',
  },
  {
    id: 'oo-03',
    category: 'openbare-orde',
    question: 'Is het toegestaan om drugs te gebruiken in Nederland?',
    options: [
      'Ja, alle drugs zijn legaal',
      'Softdrugs (cannabis) worden gedoogd in beperkte hoeveelheden; harddrugs zijn verboden',
      'Nee, alle drugs zijn verboden',
      'Alleen alcohol en tabak zijn toegestaan',
    ],
    answer: 1,
    explanation:
      'Nederland hanteert een gedoogbeleid voor cannabis: gebruik en bezit van kleine hoeveelheden (max. 5 gram) wordt niet actief vervolgd. Harddrugs zijn wel verboden.',
  },
  {
    id: 'oo-04',
    category: 'openbare-orde',
    question: 'Wat is het rookverbod in Nederland?',
    options: [
      'Roken is overal verboden',
      'Roken is verboden in openbare gebouwen, het openbaar vervoer en op de werkplek',
      'Roken is alleen verboden in ziekenhuizen',
      'Er is geen rookverbod in Nederland',
    ],
    answer: 1,
    explanation:
      'In Nederland geldt een rookverbod in openbare binnenruimten, openbaar vervoer, werkplekken en horeca. Buiten mag wel worden gerookt op aangewezen plekken.',
  },
  {
    id: 'oo-05',
    category: 'openbare-orde',
    question: 'Wat is huiselijk geweld?',
    options: [
      'Geweld dat buiten de woning plaatsvindt',
      'Geweld of mishandeling door iemand in de huiselijke kring (partner, familielid)',
      'Vandalisme aan woningen',
      'Overlast door buren',
    ],
    answer: 1,
    explanation:
      'Huiselijk geweld is geweld gepleegd door iemand uit de huiselijke kring: een (ex-)partner, familielid of huisgenoot. Het is strafbaar en u kunt het melden bij Veilig Thuis (0800-2000).',
  },
];
