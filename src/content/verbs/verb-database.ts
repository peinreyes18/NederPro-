import type { VerbConjugation } from './types';

// ---------------------------------------------------------------------------
// Complete verb conjugation data for all verbs appearing in grammar tables
// ---------------------------------------------------------------------------

const verbs: VerbConjugation[] = [
  // ===== CORE VERBS =====
  {
    infinitive: 'hebben',
    translation: 'to have',
    auxiliary: 'hebben',
    pastParticiple: 'gehad',
    isRegular: false,
    present: { ik: 'heb', jij: 'hebt', u: 'hebt / heeft', hijZijHet: 'heeft', wij: 'hebben', jullie: 'hebben', zij: 'hebben' },
    pastSimple: { ik: 'had', jij: 'had', u: 'had', hijZijHet: 'had', wij: 'hadden', jullie: 'hadden', zij: 'hadden' },
    imperative: 'heb!',
    examples: [
      { dutch: 'Ik heb een hond.', english: 'I have a dog.' },
      { dutch: 'Zij heeft twee kinderen.', english: 'She has two children.' },
    ],
    notes: 'Irregular. Inversion with jij: "Heb jij?" (not "Hebt jij?").',
  },
  {
    infinitive: 'zijn',
    translation: 'to be',
    auxiliary: 'zijn',
    pastParticiple: 'geweest',
    isRegular: false,
    present: { ik: 'ben', jij: 'bent', u: 'bent / is', hijZijHet: 'is', wij: 'zijn', jullie: 'zijn', zij: 'zijn' },
    pastSimple: { ik: 'was', jij: 'was', u: 'was', hijZijHet: 'was', wij: 'waren', jullie: 'waren', zij: 'waren' },
    imperative: 'wees!',
    examples: [
      { dutch: 'Ik ben student.', english: 'I am a student.' },
      { dutch: 'Wij zijn op kantoor.', english: 'We are at the office.' },
    ],
    notes: 'Completely irregular. Inversion: "Ben jij?" (not "Bent jij?").',
  },

  // ===== REGULAR VERBS (present tense topic) =====
  {
    infinitive: 'werken',
    translation: 'to work',
    auxiliary: 'hebben',
    pastParticiple: 'gewerkt',
    isRegular: true,
    present: { ik: 'werk', jij: 'werkt', u: 'werkt', hijZijHet: 'werkt', wij: 'werken', jullie: 'werken', zij: 'werken' },
    pastSimple: { ik: 'werkte', jij: 'werkte', u: 'werkte', hijZijHet: 'werkte', wij: 'werkten', jullie: 'werkten', zij: 'werkten' },
    imperative: 'werk!',
    examples: [
      { dutch: 'Ik werk elke dag.', english: 'I work every day.' },
      { dutch: 'Zij werkt bij een groot bedrijf.', english: 'She works at a large company.' },
    ],
  },
  {
    infinitive: 'wonen',
    translation: 'to live (reside)',
    auxiliary: 'hebben',
    pastParticiple: 'gewoond',
    isRegular: true,
    present: { ik: 'woon', jij: 'woont', u: 'woont', hijZijHet: 'woont', wij: 'wonen', jullie: 'wonen', zij: 'wonen' },
    pastSimple: { ik: 'woonde', jij: 'woonde', u: 'woonde', hijZijHet: 'woonde', wij: 'woonden', jullie: 'woonden', zij: 'woonden' },
    imperative: 'woon!',
    examples: [
      { dutch: 'Jij woont in Amsterdam.', english: 'You live in Amsterdam.' },
      { dutch: 'Wij woonden vroeger in Rotterdam.', english: 'We used to live in Rotterdam.' },
    ],
  },
  {
    infinitive: 'fietsen',
    translation: 'to cycle',
    auxiliary: 'hebben/zijn',
    pastParticiple: 'gefietst',
    isRegular: true,
    present: { ik: 'fiets', jij: 'fietst', u: 'fietst', hijZijHet: 'fietst', wij: 'fietsen', jullie: 'fietsen', zij: 'fietsen' },
    pastSimple: { ik: 'fietste', jij: 'fietste', u: 'fietste', hijZijHet: 'fietste', wij: 'fietsten', jullie: 'fietsten', zij: 'fietsten' },
    imperative: 'fiets!',
    examples: [
      { dutch: 'Ik fiets elke dag naar kantoor.', english: 'I cycle to the office every day.' },
      { dutch: 'Hij is naar school gefietst.', english: 'He cycled to school.' },
    ],
    notes: 'Uses "zijn" when movement from A to B; "hebben" otherwise.',
  },
  {
    infinitive: 'leven',
    translation: 'to live (be alive)',
    auxiliary: 'hebben',
    pastParticiple: 'geleefd',
    isRegular: true,
    present: { ik: 'leef', jij: 'leeft', u: 'leeft', hijZijHet: 'leeft', wij: 'leven', jullie: 'leven', zij: 'leven' },
    pastSimple: { ik: 'leefde', jij: 'leefde', u: 'leefde', hijZijHet: 'leefde', wij: 'leefden', jullie: 'leefden', zij: 'leefden' },
    imperative: 'leef!',
    examples: [
      { dutch: 'Hij leeft gezond.', english: 'He lives healthily.' },
    ],
    notes: 'Stem: leef (v becomes f). Past participle: geleefd (original v -> -d ending).',
  },
  {
    infinitive: 'reizen',
    translation: 'to travel',
    auxiliary: 'hebben/zijn',
    pastParticiple: 'gereisd',
    isRegular: true,
    present: { ik: 'reis', jij: 'reist', u: 'reist', hijZijHet: 'reist', wij: 'reizen', jullie: 'reizen', zij: 'reizen' },
    pastSimple: { ik: 'reisde', jij: 'reisde', u: 'reisde', hijZijHet: 'reisde', wij: 'reisden', jullie: 'reisden', zij: 'reisden' },
    imperative: 'reis!',
    examples: [
      { dutch: 'Zij reist naar Belgie.', english: 'She travels to Belgium.' },
    ],
    notes: 'Stem: reis (z becomes s). Past participle: gereisd (original z -> -d ending).',
  },
  {
    infinitive: 'maken',
    translation: 'to make',
    auxiliary: 'hebben',
    pastParticiple: 'gemaakt',
    isRegular: true,
    present: { ik: 'maak', jij: 'maakt', u: 'maakt', hijZijHet: 'maakt', wij: 'maken', jullie: 'maken', zij: 'maken' },
    pastSimple: { ik: 'maakte', jij: 'maakte', u: 'maakte', hijZijHet: 'maakte', wij: 'maakten', jullie: 'maakten', zij: 'maakten' },
    imperative: 'maak!',
    examples: [
      { dutch: 'Wij maken een rapport.', english: 'We make a report.' },
    ],
  },
  {
    infinitive: 'schrijven',
    translation: 'to write',
    auxiliary: 'hebben',
    pastParticiple: 'geschreven',
    isRegular: false,
    present: { ik: 'schrijf', jij: 'schrijft', u: 'schrijft', hijZijHet: 'schrijft', wij: 'schrijven', jullie: 'schrijven', zij: 'schrijven' },
    pastSimple: { ik: 'schreef', jij: 'schreef', u: 'schreef', hijZijHet: 'schreef', wij: 'schreven', jullie: 'schreven', zij: 'schreven' },
    imperative: 'schrijf!',
    examples: [
      { dutch: 'Zij schrijft een e-mail.', english: 'She writes an email.' },
      { dutch: 'Hij heeft een brief geschreven.', english: 'He wrote a letter.' },
    ],
  },
  {
    infinitive: 'leren',
    translation: 'to learn / to teach',
    auxiliary: 'hebben',
    pastParticiple: 'geleerd',
    isRegular: true,
    present: { ik: 'leer', jij: 'leert', u: 'leert', hijZijHet: 'leert', wij: 'leren', jullie: 'leren', zij: 'leren' },
    pastSimple: { ik: 'leerde', jij: 'leerde', u: 'leerde', hijZijHet: 'leerde', wij: 'leerden', jullie: 'leerden', zij: 'leerden' },
    imperative: 'leer!',
    examples: [
      { dutch: 'Wij leren Nederlands.', english: 'We learn Dutch.' },
    ],
  },
  {
    infinitive: 'praten',
    translation: 'to talk',
    auxiliary: 'hebben',
    pastParticiple: 'gepraat',
    isRegular: true,
    present: { ik: 'praat', jij: 'praat', u: 'praat', hijZijHet: 'praat', wij: 'praten', jullie: 'praten', zij: 'praten' },
    pastSimple: { ik: 'praatte', jij: 'praatte', u: 'praatte', hijZijHet: 'praatte', wij: 'praatten', jullie: 'praatten', zij: 'praatten' },
    imperative: 'praat!',
    examples: [
      { dutch: 'Jullie praten te hard.', english: 'You all talk too loudly.' },
    ],
  },
  {
    infinitive: 'bellen',
    translation: 'to call (phone)',
    auxiliary: 'hebben',
    pastParticiple: 'gebeld',
    isRegular: true,
    present: { ik: 'bel', jij: 'belt', u: 'belt', hijZijHet: 'belt', wij: 'bellen', jullie: 'bellen', zij: 'bellen' },
    pastSimple: { ik: 'belde', jij: 'belde', u: 'belde', hijZijHet: 'belde', wij: 'belden', jullie: 'belden', zij: 'belden' },
    imperative: 'bel!',
    examples: [
      { dutch: 'Hij belt de leverancier.', english: 'He calls the supplier.' },
    ],
  },
  {
    infinitive: 'vergaderen',
    translation: 'to have a meeting',
    auxiliary: 'hebben',
    pastParticiple: 'vergaderd',
    isRegular: true,
    present: { ik: 'vergader', jij: 'vergadert', u: 'vergadert', hijZijHet: 'vergadert', wij: 'vergaderen', jullie: 'vergaderen', zij: 'vergaderen' },
    pastSimple: { ik: 'vergaderde', jij: 'vergaderde', u: 'vergaderde', hijZijHet: 'vergaderde', wij: 'vergaderden', jullie: 'vergaderden', zij: 'vergaderden' },
    imperative: 'vergader!',
    examples: [
      { dutch: 'Wij vergaderen elke maandag.', english: 'We meet every Monday.' },
    ],
  },
  {
    infinitive: 'komen',
    translation: 'to come',
    auxiliary: 'zijn',
    pastParticiple: 'gekomen',
    isRegular: false,
    present: { ik: 'kom', jij: 'komt', u: 'komt', hijZijHet: 'komt', wij: 'komen', jullie: 'komen', zij: 'komen' },
    pastSimple: { ik: 'kwam', jij: 'kwam', u: 'kwam', hijZijHet: 'kwam', wij: 'kwamen', jullie: 'kwamen', zij: 'kwamen' },
    imperative: 'kom!',
    examples: [
      { dutch: 'Hij komt morgen.', english: 'He comes tomorrow.' },
      { dutch: 'Zij is laat gekomen.', english: 'She arrived late.' },
    ],
  },
  {
    infinitive: 'spreken',
    translation: 'to speak',
    auxiliary: 'hebben',
    pastParticiple: 'gesproken',
    isRegular: false,
    present: { ik: 'spreek', jij: 'spreekt', u: 'spreekt', hijZijHet: 'spreekt', wij: 'spreken', jullie: 'spreken', zij: 'spreken' },
    pastSimple: { ik: 'sprak', jij: 'sprak', u: 'sprak', hijZijHet: 'sprak', wij: 'spraken', jullie: 'spraken', zij: 'spraken' },
    imperative: 'spreek!',
    examples: [
      { dutch: 'Ik heb met de baas gesproken.', english: 'I spoke with the boss.' },
    ],
  },
  {
    infinitive: 'stoppen',
    translation: 'to stop',
    auxiliary: 'hebben/zijn',
    pastParticiple: 'gestopt',
    isRegular: true,
    present: { ik: 'stop', jij: 'stopt', u: 'stopt', hijZijHet: 'stopt', wij: 'stoppen', jullie: 'stoppen', zij: 'stoppen' },
    pastSimple: { ik: 'stopte', jij: 'stopte', u: 'stopte', hijZijHet: 'stopte', wij: 'stopten', jullie: 'stopten', zij: 'stopten' },
    imperative: 'stop!',
    examples: [
      { dutch: 'De bus stopt hier.', english: 'The bus stops here.' },
    ],
  },
  {
    infinitive: 'bouwen',
    translation: 'to build',
    auxiliary: 'hebben',
    pastParticiple: 'gebouwd',
    isRegular: true,
    present: { ik: 'bouw', jij: 'bouwt', u: 'bouwt', hijZijHet: 'bouwt', wij: 'bouwen', jullie: 'bouwen', zij: 'bouwen' },
    pastSimple: { ik: 'bouwde', jij: 'bouwde', u: 'bouwde', hijZijHet: 'bouwde', wij: 'bouwden', jullie: 'bouwden', zij: 'bouwden' },
    imperative: 'bouw!',
    examples: [
      { dutch: 'Zij hebben het huis gebouwd.', english: 'They built the house.' },
    ],
  },
  {
    infinitive: 'studeren',
    translation: 'to study',
    auxiliary: 'hebben',
    pastParticiple: 'gestudeerd',
    isRegular: true,
    present: { ik: 'studeer', jij: 'studeert', u: 'studeert', hijZijHet: 'studeert', wij: 'studeren', jullie: 'studeren', zij: 'studeren' },
    pastSimple: { ik: 'studeerde', jij: 'studeerde', u: 'studeerde', hijZijHet: 'studeerde', wij: 'studeerden', jullie: 'studeerden', zij: 'studeerden' },
    imperative: 'studeer!',
    examples: [
      { dutch: 'Hij studeert medicijnen.', english: 'He studies medicine.' },
    ],
  },

  // ===== IRREGULAR VERBS (perfect / imperfect topics) =====
  {
    infinitive: 'gaan',
    translation: 'to go',
    auxiliary: 'zijn',
    pastParticiple: 'gegaan',
    isRegular: false,
    present: { ik: 'ga', jij: 'gaat', u: 'gaat', hijZijHet: 'gaat', wij: 'gaan', jullie: 'gaan', zij: 'gaan' },
    pastSimple: { ik: 'ging', jij: 'ging', u: 'ging', hijZijHet: 'ging', wij: 'gingen', jullie: 'gingen', zij: 'gingen' },
    imperative: 'ga!',
    examples: [
      { dutch: 'Hij ging naar de winkel.', english: 'He went to the store.' },
      { dutch: 'Zij is naar huis gegaan.', english: 'She went home.' },
    ],
  },
  {
    infinitive: 'doen',
    translation: 'to do',
    auxiliary: 'hebben',
    pastParticiple: 'gedaan',
    isRegular: false,
    present: { ik: 'doe', jij: 'doet', u: 'doet', hijZijHet: 'doet', wij: 'doen', jullie: 'doen', zij: 'doen' },
    pastSimple: { ik: 'deed', jij: 'deed', u: 'deed', hijZijHet: 'deed', wij: 'deden', jullie: 'deden', zij: 'deden' },
    imperative: 'doe!',
    examples: [
      { dutch: 'Wat deed hij gisteren?', english: 'What did he do yesterday?' },
    ],
  },
  {
    infinitive: 'zien',
    translation: 'to see',
    auxiliary: 'hebben',
    pastParticiple: 'gezien',
    isRegular: false,
    present: { ik: 'zie', jij: 'ziet', u: 'ziet', hijZijHet: 'ziet', wij: 'zien', jullie: 'zien', zij: 'zien' },
    pastSimple: { ik: 'zag', jij: 'zag', u: 'zag', hijZijHet: 'zag', wij: 'zagen', jullie: 'zagen', zij: 'zagen' },
    imperative: 'zie!',
    examples: [
      { dutch: 'Ik zag hem gisteren.', english: 'I saw him yesterday.' },
    ],
  },
  {
    infinitive: 'nemen',
    translation: 'to take',
    auxiliary: 'hebben',
    pastParticiple: 'genomen',
    isRegular: false,
    present: { ik: 'neem', jij: 'neemt', u: 'neemt', hijZijHet: 'neemt', wij: 'nemen', jullie: 'nemen', zij: 'nemen' },
    pastSimple: { ik: 'nam', jij: 'nam', u: 'nam', hijZijHet: 'nam', wij: 'namen', jullie: 'namen', zij: 'namen' },
    imperative: 'neem!',
    examples: [
      { dutch: 'Hij nam de trein.', english: 'He took the train.' },
    ],
  },
  {
    infinitive: 'geven',
    translation: 'to give',
    auxiliary: 'hebben',
    pastParticiple: 'gegeven',
    isRegular: false,
    present: { ik: 'geef', jij: 'geeft', u: 'geeft', hijZijHet: 'geeft', wij: 'geven', jullie: 'geven', zij: 'geven' },
    pastSimple: { ik: 'gaf', jij: 'gaf', u: 'gaf', hijZijHet: 'gaf', wij: 'gaven', jullie: 'gaven', zij: 'gaven' },
    imperative: 'geef!',
    examples: [
      { dutch: 'De manager gaf een presentatie.', english: 'The manager gave a presentation.' },
    ],
  },
  {
    infinitive: 'lezen',
    translation: 'to read',
    auxiliary: 'hebben',
    pastParticiple: 'gelezen',
    isRegular: false,
    present: { ik: 'lees', jij: 'leest', u: 'leest', hijZijHet: 'leest', wij: 'lezen', jullie: 'lezen', zij: 'lezen' },
    pastSimple: { ik: 'las', jij: 'las', u: 'las', hijZijHet: 'las', wij: 'lazen', jullie: 'lazen', zij: 'lazen' },
    imperative: 'lees!',
    examples: [
      { dutch: 'Ik heb de krant gelezen.', english: 'I read the newspaper.' },
    ],
  },
  {
    infinitive: 'eten',
    translation: 'to eat',
    auxiliary: 'hebben',
    pastParticiple: 'gegeten',
    isRegular: false,
    present: { ik: 'eet', jij: 'eet', u: 'eet', hijZijHet: 'eet', wij: 'eten', jullie: 'eten', zij: 'eten' },
    pastSimple: { ik: 'at', jij: 'at', u: 'at', hijZijHet: 'at', wij: 'aten', jullie: 'aten', zij: 'aten' },
    imperative: 'eet!',
    examples: [
      { dutch: 'Wij hebben pasta gegeten.', english: 'We ate pasta.' },
    ],
  },
  {
    infinitive: 'drinken',
    translation: 'to drink',
    auxiliary: 'hebben',
    pastParticiple: 'gedronken',
    isRegular: false,
    present: { ik: 'drink', jij: 'drinkt', u: 'drinkt', hijZijHet: 'drinkt', wij: 'drinken', jullie: 'drinken', zij: 'drinken' },
    pastSimple: { ik: 'dronk', jij: 'dronk', u: 'dronk', hijZijHet: 'dronk', wij: 'dronken', jullie: 'dronken', zij: 'dronken' },
    imperative: 'drink!',
    examples: [
      { dutch: 'Hij heeft water gedronken.', english: 'He drank water.' },
    ],
  },
  {
    infinitive: 'rijden',
    translation: 'to drive / to ride',
    auxiliary: 'hebben/zijn',
    pastParticiple: 'gereden',
    isRegular: false,
    present: { ik: 'rijd', jij: 'rijdt', u: 'rijdt', hijZijHet: 'rijdt', wij: 'rijden', jullie: 'rijden', zij: 'rijden' },
    pastSimple: { ik: 'reed', jij: 'reed', u: 'reed', hijZijHet: 'reed', wij: 'reden', jullie: 'reden', zij: 'reden' },
    imperative: 'rijd!',
    examples: [
      { dutch: 'Ik ben naar Utrecht gereden.', english: 'I drove to Utrecht.' },
    ],
    notes: 'Uses "zijn" for movement A to B; "hebben" for driving in general.',
  },
  {
    infinitive: 'slapen',
    translation: 'to sleep',
    auxiliary: 'hebben',
    pastParticiple: 'geslapen',
    isRegular: false,
    present: { ik: 'slaap', jij: 'slaapt', u: 'slaapt', hijZijHet: 'slaapt', wij: 'slapen', jullie: 'slapen', zij: 'slapen' },
    pastSimple: { ik: 'sliep', jij: 'sliep', u: 'sliep', hijZijHet: 'sliep', wij: 'sliepen', jullie: 'sliepen', zij: 'sliepen' },
    imperative: 'slaap!',
    examples: [
      { dutch: 'Het kind heeft goed geslapen.', english: 'The child slept well.' },
    ],
  },
  {
    infinitive: 'beginnen',
    translation: 'to begin',
    auxiliary: 'zijn',
    pastParticiple: 'begonnen',
    isRegular: false,
    present: { ik: 'begin', jij: 'begint', u: 'begint', hijZijHet: 'begint', wij: 'beginnen', jullie: 'beginnen', zij: 'beginnen' },
    pastSimple: { ik: 'begon', jij: 'begon', u: 'begon', hijZijHet: 'begon', wij: 'begonnen', jullie: 'begonnen', zij: 'begonnen' },
    imperative: 'begin!',
    examples: [
      { dutch: 'De vergadering is begonnen.', english: 'The meeting has started.' },
    ],
  },
  {
    infinitive: 'vinden',
    translation: 'to find',
    auxiliary: 'hebben',
    pastParticiple: 'gevonden',
    isRegular: false,
    present: { ik: 'vind', jij: 'vindt', u: 'vindt', hijZijHet: 'vindt', wij: 'vinden', jullie: 'vinden', zij: 'vinden' },
    pastSimple: { ik: 'vond', jij: 'vond', u: 'vond', hijZijHet: 'vond', wij: 'vonden', jullie: 'vonden', zij: 'vonden' },
    imperative: 'vind!',
    examples: [
      { dutch: 'Hij heeft de sleutels gevonden.', english: 'He found the keys.' },
    ],
  },

  // ===== MODAL VERBS =====
  {
    infinitive: 'kunnen',
    translation: 'can / to be able to',
    auxiliary: 'hebben',
    pastParticiple: 'gekund',
    isRegular: false,
    present: { ik: 'kan', jij: 'kunt / kan', u: 'kunt / kan', hijZijHet: 'kan', wij: 'kunnen', jullie: 'kunnen', zij: 'kunnen' },
    pastSimple: { ik: 'kon', jij: 'kon', u: 'kon', hijZijHet: 'kon', wij: 'konden', jullie: 'konden', zij: 'konden' },
    imperative: '-',
    examples: [
      { dutch: 'Ik kan goed zwemmen.', english: 'I can swim well.' },
    ],
    notes: 'Modal verb. "Kan" is increasingly used for all singular persons in spoken Dutch.',
  },
  {
    infinitive: 'moeten',
    translation: 'must / to have to',
    auxiliary: 'hebben',
    pastParticiple: 'gemoeten',
    isRegular: false,
    present: { ik: 'moet', jij: 'moet', u: 'moet', hijZijHet: 'moet', wij: 'moeten', jullie: 'moeten', zij: 'moeten' },
    pastSimple: { ik: 'moest', jij: 'moest', u: 'moest', hijZijHet: 'moest', wij: 'moesten', jullie: 'moesten', zij: 'moesten' },
    imperative: '-',
    examples: [
      { dutch: 'Zij moet morgen werken.', english: 'She has to work tomorrow.' },
    ],
    notes: 'Modal verb expressing obligation or necessity.',
  },
  {
    infinitive: 'mogen',
    translation: 'may / to be allowed to',
    auxiliary: 'hebben',
    pastParticiple: 'gemogen',
    isRegular: false,
    present: { ik: 'mag', jij: 'mag', u: 'mag', hijZijHet: 'mag', wij: 'mogen', jullie: 'mogen', zij: 'mogen' },
    pastSimple: { ik: 'mocht', jij: 'mocht', u: 'mocht', hijZijHet: 'mocht', wij: 'mochten', jullie: 'mochten', zij: 'mochten' },
    imperative: '-',
    examples: [
      { dutch: 'Mag ik hier zitten?', english: 'May I sit here?' },
    ],
    notes: 'Modal verb expressing permission.',
  },
  {
    infinitive: 'willen',
    translation: 'to want to',
    auxiliary: 'hebben',
    pastParticiple: 'gewild',
    isRegular: false,
    present: { ik: 'wil', jij: 'wilt / wil', u: 'wilt', hijZijHet: 'wil', wij: 'willen', jullie: 'willen', zij: 'willen' },
    pastSimple: { ik: 'wilde / wou', jij: 'wilde / wou', u: 'wilde / wou', hijZijHet: 'wilde / wou', wij: 'wilden / wouden', jullie: 'wilden / wouden', zij: 'wilden / wouden' },
    imperative: '-',
    examples: [
      { dutch: 'Wij willen een huis kopen.', english: 'We want to buy a house.' },
    ],
    notes: 'Modal verb. "Wil" is common for all singular in spoken Dutch.',
  },
  {
    infinitive: 'zullen',
    translation: 'shall / will',
    auxiliary: 'hebben',
    pastParticiple: '-',
    isRegular: false,
    present: { ik: 'zal', jij: 'zult / zal', u: 'zult', hijZijHet: 'zal', wij: 'zullen', jullie: 'zullen', zij: 'zullen' },
    pastSimple: { ik: 'zou', jij: 'zou', u: 'zou', hijZijHet: 'zou', wij: 'zouden', jullie: 'zouden', zij: 'zouden' },
    imperative: '-',
    examples: [
      { dutch: 'Het zal morgen regenen.', english: 'It will rain tomorrow.' },
      { dutch: 'Zullen we vanavond uit eten gaan?', english: 'Shall we eat out tonight?' },
    ],
    notes: 'Modal verb used for future and suggestions.',
  },
  {
    infinitive: 'hoeven',
    translation: 'to need to (negative only)',
    auxiliary: 'hebben',
    pastParticiple: 'gehoeven',
    isRegular: false,
    present: { ik: 'hoef', jij: 'hoeft', u: 'hoeft', hijZijHet: 'hoeft', wij: 'hoeven', jullie: 'hoeven', zij: 'hoeven' },
    pastSimple: { ik: 'hoefde', jij: 'hoefde', u: 'hoefde', hijZijHet: 'hoefde', wij: 'hoefden', jullie: 'hoefden', zij: 'hoefden' },
    imperative: '-',
    examples: [
      { dutch: 'Je hoeft niet te komen.', english: "You don't need to come." },
    ],
    notes: 'Only used in negative sentences with "niet" or "geen", followed by "te" + infinitive.',
  },

  // ===== SEPARABLE VERBS =====
  {
    infinitive: 'aankomen',
    translation: 'to arrive',
    auxiliary: 'zijn',
    pastParticiple: 'aangekomen',
    separablePrefix: 'aan',
    isRegular: false,
    present: { ik: 'kom aan', jij: 'komt aan', u: 'komt aan', hijZijHet: 'komt aan', wij: 'komen aan', jullie: 'komen aan', zij: 'komen aan' },
    pastSimple: { ik: 'kwam aan', jij: 'kwam aan', u: 'kwam aan', hijZijHet: 'kwam aan', wij: 'kwamen aan', jullie: 'kwamen aan', zij: 'kwamen aan' },
    imperative: 'kom aan!',
    examples: [
      { dutch: 'De trein komt om 9 uur aan.', english: 'The train arrives at 9 o\'clock.' },
    ],
  },
  {
    infinitive: 'afspreken',
    translation: 'to arrange / to agree',
    auxiliary: 'hebben',
    pastParticiple: 'afgesproken',
    separablePrefix: 'af',
    isRegular: false,
    present: { ik: 'spreek af', jij: 'spreekt af', u: 'spreekt af', hijZijHet: 'spreekt af', wij: 'spreken af', jullie: 'spreken af', zij: 'spreken af' },
    pastSimple: { ik: 'sprak af', jij: 'sprak af', u: 'sprak af', hijZijHet: 'sprak af', wij: 'spraken af', jullie: 'spraken af', zij: 'spraken af' },
    imperative: 'spreek af!',
    examples: [
      { dutch: 'Wij spreken een tijd af.', english: 'We arrange a time.' },
    ],
  },
  {
    infinitive: 'opbellen',
    translation: 'to call (phone)',
    auxiliary: 'hebben',
    pastParticiple: 'opgebeld',
    separablePrefix: 'op',
    isRegular: true,
    present: { ik: 'bel op', jij: 'belt op', u: 'belt op', hijZijHet: 'belt op', wij: 'bellen op', jullie: 'bellen op', zij: 'bellen op' },
    pastSimple: { ik: 'belde op', jij: 'belde op', u: 'belde op', hijZijHet: 'belde op', wij: 'belden op', jullie: 'belden op', zij: 'belden op' },
    imperative: 'bel op!',
    examples: [
      { dutch: 'Ik bel je morgen op.', english: 'I will call you tomorrow.' },
    ],
  },
  {
    infinitive: 'invullen',
    translation: 'to fill in',
    auxiliary: 'hebben',
    pastParticiple: 'ingevuld',
    separablePrefix: 'in',
    isRegular: true,
    present: { ik: 'vul in', jij: 'vult in', u: 'vult in', hijZijHet: 'vult in', wij: 'vullen in', jullie: 'vullen in', zij: 'vullen in' },
    pastSimple: { ik: 'vulde in', jij: 'vulde in', u: 'vulde in', hijZijHet: 'vulde in', wij: 'vulden in', jullie: 'vulden in', zij: 'vulden in' },
    imperative: 'vul in!',
    examples: [
      { dutch: 'Ik vul het formulier in.', english: 'I fill in the form.' },
    ],
  },
  {
    infinitive: 'meenemen',
    translation: 'to take along',
    auxiliary: 'hebben',
    pastParticiple: 'meegenomen',
    separablePrefix: 'mee',
    isRegular: false,
    present: { ik: 'neem mee', jij: 'neemt mee', u: 'neemt mee', hijZijHet: 'neemt mee', wij: 'nemen mee', jullie: 'nemen mee', zij: 'nemen mee' },
    pastSimple: { ik: 'nam mee', jij: 'nam mee', u: 'nam mee', hijZijHet: 'nam mee', wij: 'namen mee', jullie: 'namen mee', zij: 'namen mee' },
    imperative: 'neem mee!',
    examples: [
      { dutch: 'Ik heb mijn laptop meegenomen.', english: 'I took my laptop along.' },
    ],
  },
  {
    infinitive: 'uitnodigen',
    translation: 'to invite',
    auxiliary: 'hebben',
    pastParticiple: 'uitgenodigd',
    separablePrefix: 'uit',
    isRegular: true,
    present: { ik: 'nodig uit', jij: 'nodigt uit', u: 'nodigt uit', hijZijHet: 'nodigt uit', wij: 'nodigen uit', jullie: 'nodigen uit', zij: 'nodigen uit' },
    pastSimple: { ik: 'nodigde uit', jij: 'nodigde uit', u: 'nodigde uit', hijZijHet: 'nodigde uit', wij: 'nodigden uit', jullie: 'nodigden uit', zij: 'nodigden uit' },
    imperative: 'nodig uit!',
    examples: [
      { dutch: 'Zij nodigt haar vrienden uit.', english: 'She invites her friends.' },
    ],
  },
  {
    infinitive: 'terugkomen',
    translation: 'to come back',
    auxiliary: 'zijn',
    pastParticiple: 'teruggekomen',
    separablePrefix: 'terug',
    isRegular: false,
    present: { ik: 'kom terug', jij: 'komt terug', u: 'komt terug', hijZijHet: 'komt terug', wij: 'komen terug', jullie: 'komen terug', zij: 'komen terug' },
    pastSimple: { ik: 'kwam terug', jij: 'kwam terug', u: 'kwam terug', hijZijHet: 'kwam terug', wij: 'kwamen terug', jullie: 'kwamen terug', zij: 'kwamen terug' },
    imperative: 'kom terug!',
    examples: [
      { dutch: 'Ik kom om vijf uur terug.', english: 'I come back at five o\'clock.' },
    ],
  },
  {
    infinitive: 'doorgaan',
    translation: 'to continue',
    auxiliary: 'zijn',
    pastParticiple: 'doorgegaan',
    separablePrefix: 'door',
    isRegular: false,
    present: { ik: 'ga door', jij: 'gaat door', u: 'gaat door', hijZijHet: 'gaat door', wij: 'gaan door', jullie: 'gaan door', zij: 'gaan door' },
    pastSimple: { ik: 'ging door', jij: 'ging door', u: 'ging door', hijZijHet: 'ging door', wij: 'gingen door', jullie: 'gingen door', zij: 'gingen door' },
    imperative: 'ga door!',
    examples: [
      { dutch: 'De les gaat door tot zes uur.', english: 'The lesson continues until six.' },
    ],
  },
  {
    infinitive: 'weggaan',
    translation: 'to leave / to go away',
    auxiliary: 'zijn',
    pastParticiple: 'weggegaan',
    separablePrefix: 'weg',
    isRegular: false,
    present: { ik: 'ga weg', jij: 'gaat weg', u: 'gaat weg', hijZijHet: 'gaat weg', wij: 'gaan weg', jullie: 'gaan weg', zij: 'gaan weg' },
    pastSimple: { ik: 'ging weg', jij: 'ging weg', u: 'ging weg', hijZijHet: 'ging weg', wij: 'gingen weg', jullie: 'gingen weg', zij: 'gingen weg' },
    imperative: 'ga weg!',
    examples: [
      { dutch: 'Hij gaat om drie uur weg.', english: 'He leaves at three o\'clock.' },
    ],
  },
  {
    infinitive: 'bijdragen',
    translation: 'to contribute',
    auxiliary: 'hebben',
    pastParticiple: 'bijgedragen',
    separablePrefix: 'bij',
    isRegular: false,
    present: { ik: 'draag bij', jij: 'draagt bij', u: 'draagt bij', hijZijHet: 'draagt bij', wij: 'dragen bij', jullie: 'dragen bij', zij: 'dragen bij' },
    pastSimple: { ik: 'droeg bij', jij: 'droeg bij', u: 'droeg bij', hijZijHet: 'droeg bij', wij: 'droegen bij', jullie: 'droegen bij', zij: 'droegen bij' },
    imperative: 'draag bij!',
    examples: [
      { dutch: 'Hij draagt veel bij.', english: 'He contributes a lot.' },
    ],
  },

  // ===== INSEPARABLE PREFIX VERBS (perfectum-regular topic) =====
  {
    infinitive: 'betalen',
    translation: 'to pay',
    auxiliary: 'hebben',
    pastParticiple: 'betaald',
    isRegular: true,
    present: { ik: 'betaal', jij: 'betaalt', u: 'betaalt', hijZijHet: 'betaalt', wij: 'betalen', jullie: 'betalen', zij: 'betalen' },
    pastSimple: { ik: 'betaalde', jij: 'betaalde', u: 'betaalde', hijZijHet: 'betaalde', wij: 'betaalden', jullie: 'betaalden', zij: 'betaalden' },
    imperative: 'betaal!',
    examples: [
      { dutch: 'Ik heb de rekening betaald.', english: 'I paid the bill.' },
    ],
    notes: 'Inseparable prefix be-. No ge- in past participle.',
  },
  {
    infinitive: 'vertellen',
    translation: 'to tell',
    auxiliary: 'hebben',
    pastParticiple: 'verteld',
    isRegular: true,
    present: { ik: 'vertel', jij: 'vertelt', u: 'vertelt', hijZijHet: 'vertelt', wij: 'vertellen', jullie: 'vertellen', zij: 'vertellen' },
    pastSimple: { ik: 'vertelde', jij: 'vertelde', u: 'vertelde', hijZijHet: 'vertelde', wij: 'vertelden', jullie: 'vertelden', zij: 'vertelden' },
    imperative: 'vertel!',
    examples: [
      { dutch: 'Zij heeft het verhaal verteld.', english: 'She told the story.' },
    ],
    notes: 'Inseparable prefix ver-. No ge- in past participle.',
  },
  {
    infinitive: 'gebruiken',
    translation: 'to use',
    auxiliary: 'hebben',
    pastParticiple: 'gebruikt',
    isRegular: true,
    present: { ik: 'gebruik', jij: 'gebruikt', u: 'gebruikt', hijZijHet: 'gebruikt', wij: 'gebruiken', jullie: 'gebruiken', zij: 'gebruiken' },
    pastSimple: { ik: 'gebruikte', jij: 'gebruikte', u: 'gebruikte', hijZijHet: 'gebruikte', wij: 'gebruikten', jullie: 'gebruikten', zij: 'gebruikten' },
    imperative: 'gebruik!',
    examples: [
      { dutch: 'Wij hebben de computer gebruikt.', english: 'We used the computer.' },
    ],
    notes: 'Inseparable prefix ge-. No extra ge- in past participle.',
  },
  {
    infinitive: 'verhuizen',
    translation: 'to move (house)',
    auxiliary: 'zijn',
    pastParticiple: 'verhuisd',
    isRegular: true,
    present: { ik: 'verhuis', jij: 'verhuist', u: 'verhuist', hijZijHet: 'verhuist', wij: 'verhuizen', jullie: 'verhuizen', zij: 'verhuizen' },
    pastSimple: { ik: 'verhuisde', jij: 'verhuisde', u: 'verhuisde', hijZijHet: 'verhuisde', wij: 'verhuisden', jullie: 'verhuisden', zij: 'verhuisden' },
    imperative: 'verhuis!',
    examples: [
      { dutch: 'Wij zijn vorig jaar verhuisd.', english: 'We moved last year.' },
    ],
    notes: 'Inseparable prefix ver-. No ge- in past participle. Uses "zijn".',
  },
  {
    infinitive: 'herhalen',
    translation: 'to repeat',
    auxiliary: 'hebben',
    pastParticiple: 'herhaald',
    isRegular: true,
    present: { ik: 'herhaal', jij: 'herhaalt', u: 'herhaalt', hijZijHet: 'herhaalt', wij: 'herhalen', jullie: 'herhalen', zij: 'herhalen' },
    pastSimple: { ik: 'herhaalde', jij: 'herhaalde', u: 'herhaalde', hijZijHet: 'herhaalde', wij: 'herhaalden', jullie: 'herhaalden', zij: 'herhaalden' },
    imperative: 'herhaal!',
    examples: [
      { dutch: 'De leraar heeft de les herhaald.', english: 'The teacher repeated the lesson.' },
    ],
    notes: 'Inseparable prefix her-. No ge- in past participle.',
  },
  {
    infinitive: 'ontdekken',
    translation: 'to discover',
    auxiliary: 'hebben',
    pastParticiple: 'ontdekt',
    isRegular: true,
    present: { ik: 'ontdek', jij: 'ontdekt', u: 'ontdekt', hijZijHet: 'ontdekt', wij: 'ontdekken', jullie: 'ontdekken', zij: 'ontdekken' },
    pastSimple: { ik: 'ontdekte', jij: 'ontdekte', u: 'ontdekte', hijZijHet: 'ontdekte', wij: 'ontdekten', jullie: 'ontdekten', zij: 'ontdekten' },
    imperative: 'ontdek!',
    examples: [
      { dutch: 'Ze hebben een fout ontdekt.', english: 'They discovered a mistake.' },
    ],
    notes: 'Inseparable prefix ont-. No ge- in past participle.',
  },

  // ===== REFLEXIVE VERBS (a sample — base verbs not already listed) =====
  {
    infinitive: 'voelen',
    translation: 'to feel',
    auxiliary: 'hebben',
    pastParticiple: 'gevoeld',
    reflexive: true,
    isRegular: true,
    present: { ik: 'voel', jij: 'voelt', u: 'voelt', hijZijHet: 'voelt', wij: 'voelen', jullie: 'voelen', zij: 'voelen' },
    pastSimple: { ik: 'voelde', jij: 'voelde', u: 'voelde', hijZijHet: 'voelde', wij: 'voelden', jullie: 'voelden', zij: 'voelden' },
    imperative: 'voel!',
    examples: [
      { dutch: 'Ik voel me goed.', english: 'I feel well.' },
    ],
    notes: 'Commonly used reflexively: zich voelen.',
  },
  {
    infinitive: 'voorstellen',
    translation: 'to introduce / to imagine',
    auxiliary: 'hebben',
    pastParticiple: 'voorgesteld',
    separablePrefix: 'voor',
    reflexive: true,
    isRegular: true,
    present: { ik: 'stel voor', jij: 'stelt voor', u: 'stelt voor', hijZijHet: 'stelt voor', wij: 'stellen voor', jullie: 'stellen voor', zij: 'stellen voor' },
    pastSimple: { ik: 'stelde voor', jij: 'stelde voor', u: 'stelde voor', hijZijHet: 'stelde voor', wij: 'stelden voor', jullie: 'stelden voor', zij: 'stelden voor' },
    imperative: 'stel voor!',
    examples: [
      { dutch: 'Mag ik mij voorstellen?', english: 'May I introduce myself?' },
    ],
    notes: 'Separable + reflexive: zich voorstellen.',
  },
  {
    infinitive: 'herinneren',
    translation: 'to remember',
    auxiliary: 'hebben',
    pastParticiple: 'herinnerd',
    reflexive: true,
    isRegular: true,
    present: { ik: 'herinner', jij: 'herinnert', u: 'herinnert', hijZijHet: 'herinnert', wij: 'herinneren', jullie: 'herinneren', zij: 'herinneren' },
    pastSimple: { ik: 'herinnerde', jij: 'herinnerde', u: 'herinnerde', hijZijHet: 'herinnerde', wij: 'herinnerden', jullie: 'herinnerden', zij: 'herinnerden' },
    imperative: 'herinner!',
    examples: [
      { dutch: 'Ik herinner me dat nog.', english: 'I still remember that.' },
    ],
    notes: 'Inseparable prefix her-. Reflexive: zich herinneren.',
  },
  {
    infinitive: 'aanmelden',
    translation: 'to register / to sign up',
    auxiliary: 'hebben',
    pastParticiple: 'aangemeld',
    separablePrefix: 'aan',
    reflexive: true,
    isRegular: true,
    present: { ik: 'meld aan', jij: 'meldt aan', u: 'meldt aan', hijZijHet: 'meldt aan', wij: 'melden aan', jullie: 'melden aan', zij: 'melden aan' },
    pastSimple: { ik: 'meldde aan', jij: 'meldde aan', u: 'meldde aan', hijZijHet: 'meldde aan', wij: 'meldden aan', jullie: 'meldden aan', zij: 'meldden aan' },
    imperative: 'meld aan!',
    examples: [
      { dutch: 'Ik heb me aangemeld voor de cursus.', english: 'I registered for the course.' },
    ],
    notes: 'Separable + reflexive: zich aanmelden.',
  },

  // ===== ADDITIONAL VERBS from perfectum-regular (inseparable prefix) =====
  {
    infinitive: 'beloven',
    translation: 'to promise',
    auxiliary: 'hebben',
    pastParticiple: 'beloofd',
    isRegular: true,
    present: { ik: 'beloof', jij: 'belooft', u: 'belooft', hijZijHet: 'belooft', wij: 'beloven', jullie: 'beloven', zij: 'beloven' },
    pastSimple: { ik: 'beloofde', jij: 'beloofde', u: 'beloofde', hijZijHet: 'beloofde', wij: 'beloofden', jullie: 'beloofden', zij: 'beloofden' },
    imperative: 'beloof!',
    examples: [
      { dutch: 'Hij heeft het beloofd.', english: 'He promised it.' },
    ],
    notes: 'Inseparable prefix be-. No ge- in past participle.',
  },
  {
    infinitive: 'erkennen',
    translation: 'to acknowledge / to recognize',
    auxiliary: 'hebben',
    pastParticiple: 'erkend',
    isRegular: true,
    present: { ik: 'erken', jij: 'erkent', u: 'erkent', hijZijHet: 'erkent', wij: 'erkennen', jullie: 'erkennen', zij: 'erkennen' },
    pastSimple: { ik: 'erkende', jij: 'erkende', u: 'erkende', hijZijHet: 'erkende', wij: 'erkenden', jullie: 'erkenden', zij: 'erkenden' },
    imperative: 'erken!',
    examples: [
      { dutch: 'Zij heeft het probleem erkend.', english: 'She acknowledged the problem.' },
    ],
    notes: 'Inseparable prefix er-. No ge- in past participle.',
  },
  {
    infinitive: 'geloven',
    translation: 'to believe',
    auxiliary: 'hebben',
    pastParticiple: 'geloofd',
    isRegular: true,
    present: { ik: 'geloof', jij: 'gelooft', u: 'gelooft', hijZijHet: 'gelooft', wij: 'geloven', jullie: 'geloven', zij: 'geloven' },
    pastSimple: { ik: 'geloofde', jij: 'geloofde', u: 'geloofde', hijZijHet: 'geloofde', wij: 'geloofden', jullie: 'geloofden', zij: 'geloofden' },
    imperative: 'geloof!',
    examples: [
      { dutch: 'Hij heeft mij geloofd.', english: 'He believed me.' },
    ],
    notes: 'Inseparable prefix ge-. No extra ge- in past participle.',
  },

  // ===== EXTRA VERBS appearing in tables =====
  {
    infinitive: 'straffen',
    translation: 'to punish',
    auxiliary: 'hebben',
    pastParticiple: 'gestraft',
    isRegular: true,
    present: { ik: 'straf', jij: 'straft', u: 'straft', hijZijHet: 'straft', wij: 'straffen', jullie: 'straffen', zij: 'straffen' },
    pastSimple: { ik: 'strafte', jij: 'strafte', u: 'strafte', hijZijHet: 'strafte', wij: 'straften', jullie: 'straften', zij: 'straften' },
    imperative: 'straf!',
    examples: [
      { dutch: 'De leraar heeft het kind gestraft.', english: 'The teacher punished the child.' },
    ],
  },
  {
    infinitive: 'lachen',
    translation: 'to laugh',
    auxiliary: 'hebben',
    pastParticiple: 'gelachen',
    isRegular: false,
    present: { ik: 'lach', jij: 'lacht', u: 'lacht', hijZijHet: 'lacht', wij: 'lachen', jullie: 'lachen', zij: 'lachen' },
    pastSimple: { ik: 'lachte', jij: 'lachte', u: 'lachte', hijZijHet: 'lachte', wij: 'lachten', jullie: 'lachten', zij: 'lachten' },
    imperative: 'lach!',
    examples: [
      { dutch: 'Wij hebben hard gelachen.', english: 'We laughed hard.' },
    ],
  },
  {
    infinitive: 'opruimen',
    translation: 'to tidy up',
    auxiliary: 'hebben',
    pastParticiple: 'opgeruimd',
    separablePrefix: 'op',
    isRegular: true,
    present: { ik: 'ruim op', jij: 'ruimt op', u: 'ruimt op', hijZijHet: 'ruimt op', wij: 'ruimen op', jullie: 'ruimen op', zij: 'ruimen op' },
    pastSimple: { ik: 'ruimde op', jij: 'ruimde op', u: 'ruimde op', hijZijHet: 'ruimde op', wij: 'ruimden op', jullie: 'ruimden op', zij: 'ruimden op' },
    imperative: 'ruim op!',
    examples: [
      { dutch: 'Hij heeft de kamer opgeruimd.', english: 'He tidied up the room.' },
    ],
  },
  {
    infinitive: 'aanmaken',
    translation: 'to create / to turn on',
    auxiliary: 'hebben',
    pastParticiple: 'aangemaakt',
    separablePrefix: 'aan',
    isRegular: true,
    present: { ik: 'maak aan', jij: 'maakt aan', u: 'maakt aan', hijZijHet: 'maakt aan', wij: 'maken aan', jullie: 'maken aan', zij: 'maken aan' },
    pastSimple: { ik: 'maakte aan', jij: 'maakte aan', u: 'maakte aan', hijZijHet: 'maakte aan', wij: 'maakten aan', jullie: 'maakten aan', zij: 'maakten aan' },
    imperative: 'maak aan!',
    examples: [
      { dutch: 'Zij heeft een account aangemaakt.', english: 'She created an account.' },
    ],
  },

  // ===== VOCABULARY PAGE: Everyday Verbs (additional) =====
  {
    infinitive: 'zeggen',
    translation: 'to say',
    auxiliary: 'hebben',
    pastParticiple: 'gezegd',
    isRegular: true,
    present: { ik: 'zeg', jij: 'zegt', u: 'zegt', hijZijHet: 'zegt', wij: 'zeggen', jullie: 'zeggen', zij: 'zeggen' },
    pastSimple: { ik: 'zei', jij: 'zei', u: 'zei', hijZijHet: 'zei', wij: 'zeiden', jullie: 'zeiden', zij: 'zeiden' },
    imperative: 'zeg!',
    examples: [
      { dutch: 'Wat zeg je?', english: 'What are you saying?' },
    ],
  },
  {
    infinitive: 'lopen',
    translation: 'to walk / to run',
    auxiliary: 'hebben/zijn',
    pastParticiple: 'gelopen',
    isRegular: false,
    present: { ik: 'loop', jij: 'loopt', u: 'loopt', hijZijHet: 'loopt', wij: 'lopen', jullie: 'lopen', zij: 'lopen' },
    pastSimple: { ik: 'liep', jij: 'liep', u: 'liep', hijZijHet: 'liep', wij: 'liepen', jullie: 'liepen', zij: 'liepen' },
    imperative: 'loop!',
    examples: [
      { dutch: 'Ik loop naar het station.', english: 'I walk to the station.' },
    ],
    notes: 'Uses "zijn" for movement from A to B; "hebben" otherwise.',
  },
  {
    infinitive: 'kopen',
    translation: 'to buy',
    auxiliary: 'hebben',
    pastParticiple: 'gekocht',
    isRegular: false,
    present: { ik: 'koop', jij: 'koopt', u: 'koopt', hijZijHet: 'koopt', wij: 'kopen', jullie: 'kopen', zij: 'kopen' },
    pastSimple: { ik: 'kocht', jij: 'kocht', u: 'kocht', hijZijHet: 'kocht', wij: 'kochten', jullie: 'kochten', zij: 'kochten' },
    imperative: 'koop!',
    examples: [
      { dutch: 'Ik koop brood bij de bakker.', english: 'I buy bread at the bakery.' },
    ],
  },
  {
    infinitive: 'luisteren',
    translation: 'to listen',
    auxiliary: 'hebben',
    pastParticiple: 'geluisterd',
    isRegular: true,
    present: { ik: 'luister', jij: 'luistert', u: 'luistert', hijZijHet: 'luistert', wij: 'luisteren', jullie: 'luisteren', zij: 'luisteren' },
    pastSimple: { ik: 'luisterde', jij: 'luisterde', u: 'luisterde', hijZijHet: 'luisterde', wij: 'luisterden', jullie: 'luisterden', zij: 'luisterden' },
    imperative: 'luister!',
    examples: [
      { dutch: 'Ik luister naar muziek.', english: 'I listen to music.' },
    ],
  },
  {
    infinitive: 'kijken',
    translation: 'to look / to watch',
    auxiliary: 'hebben',
    pastParticiple: 'gekeken',
    isRegular: false,
    present: { ik: 'kijk', jij: 'kijkt', u: 'kijkt', hijZijHet: 'kijkt', wij: 'kijken', jullie: 'kijken', zij: 'kijken' },
    pastSimple: { ik: 'keek', jij: 'keek', u: 'keek', hijZijHet: 'keek', wij: 'keken', jullie: 'keken', zij: 'keken' },
    imperative: 'kijk!',
    examples: [
      { dutch: 'Ik kijk televisie.', english: 'I watch television.' },
    ],
  },
  {
    infinitive: 'wachten',
    translation: 'to wait',
    auxiliary: 'hebben',
    pastParticiple: 'gewacht',
    isRegular: true,
    present: { ik: 'wacht', jij: 'wacht', u: 'wacht', hijZijHet: 'wacht', wij: 'wachten', jullie: 'wachten', zij: 'wachten' },
    pastSimple: { ik: 'wachtte', jij: 'wachtte', u: 'wachtte', hijZijHet: 'wachtte', wij: 'wachtten', jullie: 'wachtten', zij: 'wachtten' },
    imperative: 'wacht!',
    examples: [
      { dutch: 'Ik wacht op de bus.', english: 'I wait for the bus.' },
    ],
  },
  {
    infinitive: 'vragen',
    translation: 'to ask',
    auxiliary: 'hebben',
    pastParticiple: 'gevraagd',
    isRegular: true,
    present: { ik: 'vraag', jij: 'vraagt', u: 'vraagt', hijZijHet: 'vraagt', wij: 'vragen', jullie: 'vragen', zij: 'vragen' },
    pastSimple: { ik: 'vroeg', jij: 'vroeg', u: 'vroeg', hijZijHet: 'vroeg', wij: 'vroegen', jullie: 'vroegen', zij: 'vroegen' },
    imperative: 'vraag!',
    examples: [
      { dutch: 'Mag ik iets vragen?', english: 'May I ask something?' },
    ],
  },
  {
    infinitive: 'begrijpen',
    translation: 'to understand',
    auxiliary: 'hebben',
    pastParticiple: 'begrepen',
    isRegular: false,
    present: { ik: 'begrijp', jij: 'begrijpt', u: 'begrijpt', hijZijHet: 'begrijpt', wij: 'begrijpen', jullie: 'begrijpen', zij: 'begrijpen' },
    pastSimple: { ik: 'begreep', jij: 'begreep', u: 'begreep', hijZijHet: 'begreep', wij: 'begrepen', jullie: 'begrepen', zij: 'begrepen' },
    imperative: 'begrijp!',
    examples: [
      { dutch: 'Ik begrijp het niet.', english: "I don't understand it." },
    ],
    notes: 'Inseparable prefix be-. No ge- in past participle.',
  },
  {
    infinitive: 'helpen',
    translation: 'to help',
    auxiliary: 'hebben',
    pastParticiple: 'geholpen',
    isRegular: false,
    present: { ik: 'help', jij: 'helpt', u: 'helpt', hijZijHet: 'helpt', wij: 'helpen', jullie: 'helpen', zij: 'helpen' },
    pastSimple: { ik: 'hielp', jij: 'hielp', u: 'hielp', hijZijHet: 'hielp', wij: 'hielpen', jullie: 'hielpen', zij: 'hielpen' },
    imperative: 'help!',
    examples: [
      { dutch: 'Kunt u mij helpen?', english: 'Can you help me?' },
    ],
  },
  {
    infinitive: 'zoeken',
    translation: 'to search / to look for',
    auxiliary: 'hebben',
    pastParticiple: 'gezocht',
    isRegular: false,
    present: { ik: 'zoek', jij: 'zoekt', u: 'zoekt', hijZijHet: 'zoekt', wij: 'zoeken', jullie: 'zoeken', zij: 'zoeken' },
    pastSimple: { ik: 'zocht', jij: 'zocht', u: 'zocht', hijZijHet: 'zocht', wij: 'zochten', jullie: 'zochten', zij: 'zochten' },
    imperative: 'zoek!',
    examples: [
      { dutch: 'Ik zoek mijn sleutels.', english: "I'm looking for my keys." },
    ],
  },
  {
    infinitive: 'proberen',
    translation: 'to try',
    auxiliary: 'hebben',
    pastParticiple: 'geprobeerd',
    isRegular: true,
    present: { ik: 'probeer', jij: 'probeert', u: 'probeert', hijZijHet: 'probeert', wij: 'proberen', jullie: 'proberen', zij: 'proberen' },
    pastSimple: { ik: 'probeerde', jij: 'probeerde', u: 'probeerde', hijZijHet: 'probeerde', wij: 'probeerden', jullie: 'probeerden', zij: 'probeerden' },
    imperative: 'probeer!',
    examples: [
      { dutch: 'Ik probeer het nog een keer.', english: 'I try it one more time.' },
    ],
  },
  {
    infinitive: 'weten',
    translation: 'to know (a fact)',
    auxiliary: 'hebben',
    pastParticiple: 'geweten',
    isRegular: false,
    present: { ik: 'weet', jij: 'weet', u: 'weet', hijZijHet: 'weet', wij: 'weten', jullie: 'weten', zij: 'weten' },
    pastSimple: { ik: 'wist', jij: 'wist', u: 'wist', hijZijHet: 'wist', wij: 'wisten', jullie: 'wisten', zij: 'wisten' },
    imperative: 'weet!',
    examples: [
      { dutch: 'Ik weet het niet.', english: "I don't know." },
    ],
  },
  {
    infinitive: 'kennen',
    translation: 'to know (a person/place)',
    auxiliary: 'hebben',
    pastParticiple: 'gekend',
    isRegular: true,
    present: { ik: 'ken', jij: 'kent', u: 'kent', hijZijHet: 'kent', wij: 'kennen', jullie: 'kennen', zij: 'kennen' },
    pastSimple: { ik: 'kende', jij: 'kende', u: 'kende', hijZijHet: 'kende', wij: 'kenden', jullie: 'kenden', zij: 'kenden' },
    imperative: 'ken!',
    examples: [
      { dutch: 'Ken je die man?', english: 'Do you know that man?' },
    ],
  },
  {
    infinitive: 'denken',
    translation: 'to think',
    auxiliary: 'hebben',
    pastParticiple: 'gedacht',
    isRegular: false,
    present: { ik: 'denk', jij: 'denkt', u: 'denkt', hijZijHet: 'denkt', wij: 'denken', jullie: 'denken', zij: 'denken' },
    pastSimple: { ik: 'dacht', jij: 'dacht', u: 'dacht', hijZijHet: 'dacht', wij: 'dachten', jullie: 'dachten', zij: 'dachten' },
    imperative: 'denk!',
    examples: [
      { dutch: 'Ik denk dat het goed is.', english: "I think it's good." },
    ],
  },
  {
    infinitive: 'zitten',
    translation: 'to sit',
    auxiliary: 'hebben',
    pastParticiple: 'gezeten',
    isRegular: false,
    present: { ik: 'zit', jij: 'zit', u: 'zit', hijZijHet: 'zit', wij: 'zitten', jullie: 'zitten', zij: 'zitten' },
    pastSimple: { ik: 'zat', jij: 'zat', u: 'zat', hijZijHet: 'zat', wij: 'zaten', jullie: 'zaten', zij: 'zaten' },
    imperative: 'zit!',
    examples: [
      { dutch: 'Ik zit op de bank.', english: 'I sit on the couch.' },
    ],
  },
  {
    infinitive: 'staan',
    translation: 'to stand',
    auxiliary: 'hebben',
    pastParticiple: 'gestaan',
    isRegular: false,
    present: { ik: 'sta', jij: 'staat', u: 'staat', hijZijHet: 'staat', wij: 'staan', jullie: 'staan', zij: 'staan' },
    pastSimple: { ik: 'stond', jij: 'stond', u: 'stond', hijZijHet: 'stond', wij: 'stonden', jullie: 'stonden', zij: 'stonden' },
    imperative: 'sta!',
    examples: [
      { dutch: 'Ik sta bij de deur.', english: 'I stand at the door.' },
    ],
  },
  {
    infinitive: 'liggen',
    translation: 'to lie (down)',
    auxiliary: 'hebben',
    pastParticiple: 'gelegen',
    isRegular: false,
    present: { ik: 'lig', jij: 'ligt', u: 'ligt', hijZijHet: 'ligt', wij: 'liggen', jullie: 'liggen', zij: 'liggen' },
    pastSimple: { ik: 'lag', jij: 'lag', u: 'lag', hijZijHet: 'lag', wij: 'lagen', jullie: 'lagen', zij: 'lagen' },
    imperative: 'lig!',
    examples: [
      { dutch: 'De kat ligt op het bed.', english: 'The cat lies on the bed.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Build lookup index: maps every known form to its VerbConjugation entry
// ---------------------------------------------------------------------------

const formIndex = new Map<string, VerbConjugation>();

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function addForm(form: string, verb: VerbConjugation) {
  // Handle forms like "hebt / heeft" → add both "hebt" and "heeft"
  for (const part of form.split('/')) {
    const key = normalize(part);
    if (key && key !== '-') {
      formIndex.set(key, verb);
    }
  }
}

for (const verb of verbs) {
  // Infinitive
  addForm(verb.infinitive, verb);

  // Past participle
  addForm(verb.pastParticiple, verb);

  // All present-tense forms
  for (const form of Object.values(verb.present)) {
    // Handle separated forms like "kom aan" — index both the full form and the base verb
    addForm(form, verb);
    if (form.includes(' ')) {
      addForm(form.split(' ')[0], verb);
    }
  }

  // All past-simple forms
  for (const form of Object.values(verb.pastSimple)) {
    addForm(form, verb);
    if (form.includes(' ')) {
      addForm(form.split(' ')[0], verb);
    }
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Look up a verb by any known form (infinitive, conjugated form, past participle).
 * Returns the full VerbConjugation object or null if not found.
 *
 * The cell text from a grammar table is checked as-is against the index.
 * Phrases like "ik werk" are NOT matched — only bare verb forms.
 */
export function lookupVerb(cellText: string): VerbConjugation | null {
  const key = normalize(cellText);
  return formIndex.get(key) ?? null;
}

/** Get all verb entries (useful for listing / searching) */
export function getAllVerbs(): VerbConjugation[] {
  return verbs;
}
