import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import GrammarTable from '@/components/lesson/GrammarTable';
import Alert from '@/components/ui/Alert';
import { GrammarTableSection } from '@/content/types';

const referenceTables: Record<
  string,
  { title: string; sections: { table: GrammarTableSection; note?: string }[] }
> = {
  'verb-conjugation': {
    title: 'Verb Conjugation',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Present Tense: Regular Verbs',
          headers: ['Pronoun', 'Ending', 'werken', 'wonen', 'fietsen'],
          rows: [
            ['ik', 'stam', 'werk', 'woon', 'fiets'],
            ['jij/je', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['u', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['hij/zij/het', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['wij/we', 'infinitief', 'werken', 'wonen', 'fietsen'],
            ['jullie', 'infinitief', 'werken', 'wonen', 'fietsen'],
            ['zij/ze', 'infinitief', 'werken', 'wonen', 'fietsen'],
          ],
          caption: 'Note: When "jij/je" comes AFTER the verb, the -t drops: "werk jij?" (not "werkt jij?")',
        },
        note: 'The stem (stam) is found by removing -en from the infinitive. Apply spelling rules: double vowels become single in closed syllables (wonen → woon), v→f (leven → leef), z→s (reizen → reis).',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Hebben and Zijn (Irregular)',
          headers: ['Pronoun', 'hebben', 'zijn'],
          rows: [
            ['ik', 'heb', 'ben'],
            ['jij/je', 'hebt', 'bent'],
            ['u', 'hebt / heeft', 'bent / is'],
            ['hij/zij/het', 'heeft', 'is'],
            ['wij/we', 'hebben', 'zijn'],
            ['jullie', 'hebben', 'zijn'],
            ['zij/ze', 'hebben', 'zijn'],
          ],
        },
      },
    ],
  },
  'de-het-list': {
    title: 'De / Het Word Lists',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Common Het-woorden',
          headers: ['Dutch', 'English'],
          rows: [
            ['het huis', 'the house'],
            ['het boek', 'the book'],
            ['het kind', 'the child'],
            ['het werk', 'the work'],
            ['het water', 'the water'],
            ['het jaar', 'the year'],
            ['het land', 'the country'],
            ['het probleem', 'the problem'],
            ['het moment', 'the moment'],
            ['het voorbeeld', 'the example'],
            ['het meisje', 'the girl (diminutive)'],
            ['het kantoor', 'the office'],
            ['het bedrijf', 'the company'],
            ['het systeem', 'the system'],
            ['het gesprek', 'the conversation'],
          ],
        },
        note: 'Patterns: diminutives (-je) are always het. Words ending in -ment, -isme are usually het. Most words starting with be-, ge-, ver-, ont- are het.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Common De-woorden',
          headers: ['Dutch', 'English'],
          rows: [
            ['de man', 'the man'],
            ['de vrouw', 'the woman'],
            ['de tafel', 'the table'],
            ['de stad', 'the city'],
            ['de auto', 'the car'],
            ['de tijd', 'the time'],
            ['de vraag', 'the question'],
            ['de dag', 'the day'],
            ['de week', 'the week'],
            ['de vergadering', 'the meeting'],
            ['de collega', 'the colleague'],
            ['de manager', 'the manager'],
            ['de e-mail', 'the email'],
            ['de telefoon', 'the telephone'],
            ['de koffie', 'the coffee'],
          ],
        },
        note: 'All plural nouns use "de". Most words referring to people use "de".',
      },
    ],
  },
  'word-order-rules': {
    title: 'Word Order Rules',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Main Clause Word Order',
          headers: ['Position', 'Element', 'Example'],
          rows: [
            ['1', 'Subject (or other element)', 'Ik / Morgen'],
            ['2', 'Conjugated verb (ALWAYS)', 'werk / werk'],
            ['3', 'Subject (if position 1 is not subject)', '- / ik'],
            ['4+', 'Rest: Time, Manner, Place', 'morgen in Amsterdam / in Amsterdam'],
          ],
          caption: 'The verb is ALWAYS in second position in a Dutch main clause.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Time - Manner - Place',
          headers: ['Type', 'Example Words'],
          rows: [
            ['Time (wanneer?)', 'morgen, vandaag, om 9 uur, volgende week'],
            ['Manner (hoe?)', 'graag, snel, met de trein, goed'],
            ['Place (waar?)', 'in Amsterdam, op kantoor, naar huis, hier'],
          ],
          caption: 'When multiple adverbials appear, follow Time-Manner-Place order.',
        },
      },
    ],
  },
  prepositions: {
    title: 'Prepositions',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Prepositions of Place',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['in', 'in', 'in de stad (in the city)'],
            ['op', 'on / at', 'op kantoor (at the office)'],
            ['aan', 'at / on', 'aan de tafel (at the table)'],
            ['bij', 'at / near / with', 'bij het station (near the station)'],
            ['naar', 'to', 'naar huis (to home)'],
            ['uit', 'from / out of', 'uit Nederland (from the Netherlands)'],
            ['van', 'from / of', 'van het station (from the station)'],
            ['met', 'with', 'met de trein (by train)'],
            ['voor', 'for / in front of', 'voor de deur (in front of the door)'],
            ['achter', 'behind', 'achter het gebouw (behind the building)'],
            ['naast', 'next to', 'naast het kantoor (next to the office)'],
            ['tussen', 'between', 'tussen de huizen (between the houses)'],
          ],
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Prepositions of Time',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['om', 'at (clock time)', 'om drie uur (at three o\'clock)'],
            ['op', 'on (day)', 'op maandag (on Monday)'],
            ['in', 'in (month/season/year)', 'in maart / in de zomer / in 2024'],
            ['aan', 'at / in (part of day)', 'aan het begin van de dag'],
            ['voor', 'before', 'voor het eten (before the meal)'],
            ['na', 'after', 'na het werk (after work)'],
            ['tijdens', 'during', 'tijdens de vergadering (during the meeting)'],
            ['vanaf', 'from (a point in time)', 'vanaf maandag (from Monday)'],
            ['tot', 'until', 'tot vrijdag (until Friday)'],
            ['over', 'in (future)', 'over twee weken (in two weeks)'],
            ['geleden', 'ago', 'drie jaar geleden (three years ago)'],
          ],
        },
        note: 'Use "om" for clock times, "op" for days, "in" for months/seasons/years.',
      },
    ],
  },

  'past-tenses': {
    title: 'Past Tenses',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Perfectum (Present Perfect) — Formation',
          headers: ['Component', 'Rule', 'Example'],
          rows: [
            ['Auxiliary', 'hebben or zijn', 'Ik heb / Ik ben'],
            ['Past participle', 'ge- + stem + -d/-t', 'gewerkt, gewoond'],
            ['Past participle', 'ge- + stem + -d (voiced)', 'geleefd, gegooid'],
            ['Irregular', 'must be memorised', 'gegaan, gezien, gedaan'],
            ['Verb position', 'past participle goes to END', 'Ik heb gisteren gewerkt.'],
          ],
          caption: 'Use the \'t kofschip rule to choose -d or -t: if the stem ends in t, k, f, s, ch, p → use -t, otherwise -d.',
        },
        note: 'Use perfectum for completed actions with a connection to the present, for recent past, and in spoken Dutch for most past situations.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Hebben vs. Zijn as Auxiliary',
          headers: ['Use zijn when...', 'Examples'],
          rows: [
            ['Movement from A to B', 'gaan, komen, rijden, lopen, fietsen, vliegen'],
            ['Change of state', 'worden, groeien, vallen, sterven, opstaan'],
            ['Fixed verbs', 'zijn, blijven, gebeuren, slagen, mislukken'],
          ],
          caption: 'All other verbs use hebben.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Imperfectum (Simple Past) — Regular Verbs',
          headers: ['Group', 'Singular', 'Plural', 'Example stem'],
          rows: [
            ['-te / -ten (\'t kofschip)', 'stam + -te', 'stam + -ten', 'werkte / werkten'],
            ['-de / -den (other)', 'stam + -de', 'stam + -den', 'woonde / woonden'],
          ],
          caption: 'Apply the same \'t kofschip rule as perfectum to choose -te or -de.',
        },
        note: 'Imperfectum is used mainly in written Dutch, formal narration, and for repeated/habitual past actions.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Common Irregular Past Participles',
          headers: ['Infinitive', 'Past Participle', 'Auxiliary', 'Meaning'],
          rows: [
            ['gaan', 'gegaan', 'zijn', 'to go'],
            ['komen', 'gekomen', 'zijn', 'to come'],
            ['zijn', 'geweest', 'zijn', 'to be'],
            ['hebben', 'gehad', 'hebben', 'to have'],
            ['zien', 'gezien', 'hebben', 'to see'],
            ['doen', 'gedaan', 'hebben', 'to do'],
            ['zeggen', 'gezegd', 'hebben', 'to say'],
            ['weten', 'geweten', 'hebben', 'to know'],
            ['kunnen', 'gekund', 'hebben', 'to be able to'],
            ['willen', 'gewild', 'hebben', 'to want'],
            ['moeten', 'gemoeten', 'hebben', 'to must'],
            ['schrijven', 'geschreven', 'hebben', 'to write'],
            ['rijden', 'gereden', 'zijn/hebben', 'to drive/ride'],
            ['blijven', 'gebleven', 'zijn', 'to stay'],
            ['worden', 'geworden', 'zijn', 'to become'],
          ],
        },
      },
    ],
  },

  'modal-verbs': {
    title: 'Modal Verbs',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Modal Verbs — Present Tense',
          headers: ['Pronoun', 'kunnen', 'mogen', 'moeten', 'willen', 'zullen', 'hoeven'],
          rows: [
            ['ik', 'kan', 'mag', 'moet', 'wil', 'zal', 'hoef'],
            ['jij/je', 'kunt/kan', 'mag', 'moet', 'wilt/wil', 'zult/zal', 'hoeft'],
            ['u', 'kunt', 'mag', 'moet', 'wilt', 'zult', 'hoeft'],
            ['hij/zij', 'kan', 'mag', 'moet', 'wil', 'zal', 'hoeft'],
            ['wij', 'kunnen', 'mogen', 'moeten', 'willen', 'zullen', 'hoeven'],
            ['jullie', 'kunnen', 'mogen', 'moeten', 'willen', 'zullen', 'hoeven'],
            ['zij', 'kunnen', 'mogen', 'moeten', 'willen', 'zullen', 'hoeven'],
          ],
        },
        note: 'Modal verbs take position 2 (conjugated). The main verb goes to the END of the clause as an infinitive: "Ik kan Nederlands spreken."',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Meanings and Usage',
          headers: ['Verb', 'Core meaning', 'Example'],
          rows: [
            ['kunnen', 'ability / possibility', 'Ik kan zwemmen. (I can swim.)'],
            ['mogen', 'permission', 'Je mag hier niet parkeren. (You may not park here.)'],
            ['moeten', 'obligation / necessity', 'Je moet werken. (You must work.)'],
            ['willen', 'want / wish', 'Ik wil koffie. (I want coffee.)'],
            ['zullen', 'future / intention / promise', 'Ik zal je helpen. (I will help you.)'],
            ['hoeven (+ niet/geen)', 'negative necessity', 'Je hoeft niet te komen. (You don\'t need to come.)'],
          ],
          caption: 'Hoeven is almost always used with "niet" or "geen" and requires "te" before the infinitive.',
        },
      },
    ],
  },

  'separable-verbs': {
    title: 'Separable Verbs',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'How Separable Verbs Work',
          headers: ['Context', 'Rule', 'Example'],
          rows: [
            ['Main clause (present)', 'Prefix goes to END', 'Ik bel je op. (I call you up.)'],
            ['Main clause (past)', 'Prefix goes to END', 'Ik belde je op.'],
            ['Perfectum', 'ge- goes BETWEEN prefix and verb', 'Ik heb je opgebeld.'],
            ['Subordinate clause', 'Verb stays together at end', '...dat ik je opbel.'],
            ['Infinitive', 'Verb stays together', 'Ik ga je opbellen.'],
          ],
          caption: 'The prefix is always stressed when speaking: "OPbellen", "UITgaan".',
        },
        note: 'Common prefixes: op-, aan-, uit-, af-, mee-, terug-, door-, over-, neer-, weg-, toe-, bij-',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Common Separable Verbs',
          headers: ['Verb', 'Meaning', 'Example'],
          rows: [
            ['opbellen', 'to call (phone)', 'Ik bel je morgen op.'],
            ['uitleggen', 'to explain', 'Hij legt het goed uit.'],
            ['aankomen', 'to arrive', 'De trein komt om 9 uur aan.'],
            ['meenemen', 'to take along', 'Neem je je tas mee?'],
            ['uitgaan', 'to go out', 'We gaan vanavond uit.'],
            ['terugkomen', 'to come back', 'Wanneer kom je terug?'],
            ['afmaken', 'to finish', 'Maak je huiswerk af!'],
            ['aanzetten', 'to turn on', 'Ze zet de tv aan.'],
            ['uitzetten', 'to turn off', 'Zet het licht uit.'],
            ['voorstellen', 'to introduce / suggest', 'Mag ik mezelf voorstellen?'],
          ],
        },
      },
    ],
  },

  'adjectives': {
    title: 'Adjectives',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Adjective Inflection Rules',
          headers: ['Position', 'De-word', 'Het-word', 'Plural'],
          rows: [
            ['Before noun (definite: de/het/die/dat)', 'de grote man', 'het grote huis', 'de grote huizen'],
            ['Before noun (indefinite: een)', 'een grote man', 'een groot huis', 'grote huizen'],
            ['After noun (predicative)', 'De man is groot.', 'Het huis is groot.', 'De huizen zijn groot.'],
          ],
          caption: 'KEY RULE: Adjectives before a het-word with "een" (or no article) do NOT get -e.',
        },
        note: 'Predicative adjectives (after zijn, worden, lijken, etc.) never get -e: "Het kind is klein." Attributive adjectives (before a noun) almost always get -e, except before singular het-words with indefinite article.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Spelling Rules for Adjectives',
          headers: ['Rule', 'Base form', 'Inflected (-e)'],
          rows: [
            ['Double vowel → single before consonant', 'rood', 'rode'],
            ['Single vowel stays single before -e (open syllable)', 'groot', 'grote'],
            ['Final -f → -v', 'lief', 'lieve'],
            ['Final -s → -z (sometimes)', 'grijs', 'grijze'],
            ['No change needed', 'mooi', 'mooie'],
          ],
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Comparative and Superlative',
          headers: ['Degree', 'Formation', 'Example'],
          rows: [
            ['Positive', 'base form', 'groot (big)'],
            ['Comparative', 'base + -er', 'groter (bigger)'],
            ['Superlative (predicative)', 'het + base + -st', 'het grootst (the biggest)'],
            ['Superlative (attributive)', 'base + -ste', 'de grootste man'],
            ['Irregular: goed', '—', 'goed → beter → het best(e)'],
            ['Irregular: veel', '—', 'veel → meer → het meest(e)'],
            ['Irregular: weinig', '—', 'weinig → minder → het minst(e)'],
          ],
          caption: 'Adjectives ending in -r add -der: duur → duurder. Very long adjectives use "meer/meest".',
        },
      },
    ],
  },

  pronouns: {
    title: 'Pronouns',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Personal Pronouns',
          headers: ['Person', 'Subject (stressed)', 'Subject (unstressed)', 'Object'],
          rows: [
            ['1st singular', 'ik', 'ik', 'mij / me'],
            ['2nd singular', 'jij', 'je', 'jou / je'],
            ['2nd formal', 'u', 'u', 'u'],
            ['3rd masc.', 'hij', 'ie', 'hem'],
            ['3rd fem.', 'zij', 'ze', 'haar'],
            ['3rd neuter', 'het', "'t", 'het'],
            ['1st plural', 'wij', 'we', 'ons'],
            ['2nd plural', 'jullie', 'jullie', 'jullie'],
            ['3rd plural', 'zij', 'ze', 'hen / ze'],
          ],
          caption: 'Use "hen" after prepositions (met hen); "ze" in other positions (Ik zie ze).',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Reflexive Pronouns',
          headers: ['Person', 'Reflexive', 'Example'],
          rows: [
            ['ik', 'me / mezelf', 'Ik vergis me. / Ik zie mezelf.'],
            ['jij/je', 'je / jezelf', 'Je vergist je. / Jij doet het jezelf.'],
            ['u', 'u / uzelf', 'U vergist u.'],
            ['hij/zij', 'zich / zichzelf', 'Hij schaamt zich.'],
            ['wij', 'ons / onszelf', 'We haasten ons.'],
            ['jullie', 'je / jezelf', 'Jullie vergissen je.'],
            ['zij', 'zich / zichzelf', 'Ze haasten zich.'],
          ],
        },
        note: 'Use the emphatic form (mezelf, zichzelf) when you want to stress that the subject acts on themselves: "Hij deed het helemaal zichzelf."',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Possessive Pronouns',
          headers: ['Person', 'Before de-word', 'Before het-word', 'Standalone'],
          rows: [
            ['ik', 'mijn', 'mijn', 'die van mij / de mijne'],
            ['jij/je', 'jouw / je', 'jouw / je', 'die van jou / de jouwe'],
            ['u', 'uw', 'uw', 'die van u'],
            ['hij', 'zijn', 'zijn', 'die van hem / de zijne'],
            ['zij (sg)', 'haar', 'haar', 'die van haar / de hare'],
            ['wij', 'ons (de-words) / ons (het-words)', 'ons', 'die van ons / de onze'],
            ['jullie', 'jullie', 'jullie', 'die van jullie'],
            ['zij (pl)', 'hun', 'hun', 'die van hen'],
          ],
          caption: '"Je" is the unstressed form of "jouw"; use "jouw" for emphasis.',
        },
      },
    ],
  },

  negation: {
    title: 'Negation',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Niet vs. Geen',
          headers: ['Use', 'Rule', 'Example'],
          rows: [
            ['geen', 'Negates nouns with een or no article', 'Ik heb geen auto. / Ik heb geen tijd.'],
            ['niet', 'Negates verbs, adjectives, adverbs', 'Ik werk niet. / Hij is niet groot.'],
            ['niet', 'Negates nouns with de/het/possessive', 'Ik zie de auto niet. / Dat is mijn boek niet.'],
            ['niet', 'Negates prepositional phrases', 'Ik ga niet naar huis.'],
          ],
          caption: 'Quick test: if you can replace the noun with "a/an" in English → gebruik geen. Otherwise → gebruik niet.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Position of Niet',
          headers: ['What is negated', 'Position of niet', 'Example'],
          rows: [
            ['Whole clause', 'Before past participle / infinitive at end', 'Ik heb het niet gedaan.'],
            ['Whole clause (simple)', 'At end of clause', 'Ik werk niet.'],
            ['Adjective / adverb', 'Directly before it', 'Hij is niet ziek. / Dat gaat niet goed.'],
            ['Prepositional phrase', 'Before the preposition', 'Ik ga niet naar Amsterdam.'],
            ['Specific element (contrast)', 'Directly before that element', 'Niet ik, maar jij moet dit doen.'],
          ],
        },
        note: 'When there is a place or direction complement, "niet" usually comes before it: "Ik ga niet naar kantoor."',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Other Negative Words',
          headers: ['Word', 'Meaning', 'Example'],
          rows: [
            ['nooit', 'never', 'Ik drink nooit alcohol.'],
            ['niemand', 'nobody', 'Er is niemand thuis.'],
            ['niets', 'nothing', 'Ik weet niets.'],
            ['nergens', 'nowhere', 'Ik kan het nergens vinden.'],
            ['noch ... noch', 'neither ... nor', 'Noch hij noch zij kwam.'],
            ['helemaal niet / geen', 'not at all', 'Dat is helemaal niet waar.'],
          ],
        },
      },
    ],
  },

  conjunctions: {
    title: 'Conjunctions',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Coordinating Conjunctions (no word order change)',
          headers: ['Conjunction', 'Meaning', 'Example'],
          rows: [
            ['en', 'and', 'Ik werk en ik studeer.'],
            ['maar', 'but', 'Hij wil komen, maar hij kan niet.'],
            ['of', 'or', 'Kom je morgen of overmorgen?'],
            ['want', 'because (coordinating)', 'Ik blijf thuis, want ik ben ziek.'],
            ['dus', 'so / therefore', 'Het regent, dus ik neem een paraplu.'],
            ['noch', 'nor (with noch...noch)', 'Hij eet noch vlees noch vis.'],
          ],
          caption: 'After these conjunctions, word order stays normal (verb in 2nd position).',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Subordinating Conjunctions (verb to end)',
          headers: ['Conjunction', 'Meaning', 'Example'],
          rows: [
            ['omdat', 'because', 'Ik blijf thuis omdat ik ziek ben.'],
            ['dat', 'that', 'Ik weet dat hij komt.'],
            ['als', 'if / when', 'Als het regent, blijf ik thuis.'],
            ['toen', 'when (past, one-time)', 'Toen ik jong was, woonde ik in Utrecht.'],
            ['terwijl', 'while', 'Ik lees terwijl hij kookt.'],
            ['hoewel', 'although', 'Hoewel het koud is, gaat ze fietsen.'],
            ['zodat', 'so that', 'Ik oefen veel zodat ik snel leer.'],
            ['of', 'whether / if (indirect)', 'Ik weet niet of hij komt.'],
            ['wanneer', 'when (general)', 'Bel me wanneer je aankomt.'],
            ['nadat', 'after', 'Nadat ze gegeten hadden, gingen ze weg.'],
            ['voordat', 'before', 'Was je handen voordat je eet.'],
          ],
          caption: 'After subordinating conjunctions: all verbs go to the END. The conjugated verb comes last (or second-to-last before past participle).',
        },
        note: 'If the subordinate clause comes FIRST in the sentence, the main clause inverts: "Omdat ik ziek ben, blijf ik thuis." (verb "blijf" immediately after the comma).',
      },
    ],
  },

  'irregular-verbs': {
    title: 'Irregular Verbs',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Common Irregular Verbs — Full Conjugation',
          headers: ['Infinitive', 'Ik (present)', 'Hij (present)', 'Imperfectum', 'Perfectum', 'Meaning'],
          rows: [
            ['zijn', 'ben', 'is', 'was / waren', 'is geweest', 'to be'],
            ['hebben', 'heb', 'heeft', 'had / hadden', 'heeft gehad', 'to have'],
            ['gaan', 'ga', 'gaat', 'ging / gingen', 'is gegaan', 'to go'],
            ['komen', 'kom', 'komt', 'kwam / kwamen', 'is gekomen', 'to come'],
            ['doen', 'doe', 'doet', 'deed / deden', 'heeft gedaan', 'to do'],
            ['zien', 'zie', 'ziet', 'zag / zagen', 'heeft gezien', 'to see'],
            ['zeggen', 'zeg', 'zegt', 'zei / zeiden', 'heeft gezegd', 'to say'],
            ['weten', 'weet', 'weet', 'wist / wisten', 'heeft geweten', 'to know'],
            ['lopen', 'loop', 'loopt', 'liep / liepen', 'is gelopen', 'to walk'],
            ['rijden', 'rijd', 'rijdt', 'reed / reden', 'heeft/is gereden', 'to drive'],
            ['schrijven', 'schrijf', 'schrijft', 'schreef / schreven', 'heeft geschreven', 'to write'],
            ['lezen', 'lees', 'leest', 'las / lazen', 'heeft gelezen', 'to read'],
            ['liggen', 'lig', 'ligt', 'lag / lagen', 'heeft gelegen', 'to lie (down)'],
            ['zitten', 'zit', 'zit', 'zat / zaten', 'heeft gezeten', 'to sit'],
            ['staan', 'sta', 'staat', 'stond / stonden', 'heeft gestaan', 'to stand'],
            ['krijgen', 'krijg', 'krijgt', 'kreeg / kregen', 'heeft gekregen', 'to get/receive'],
            ['kopen', 'koop', 'koopt', 'kocht / kochten', 'heeft gekocht', 'to buy'],
            ['brengen', 'breng', 'brengt', 'bracht / brachten', 'heeft gebracht', 'to bring'],
            ['denken', 'denk', 'denkt', 'dacht / dachten', 'heeft gedacht', 'to think'],
            ['vinden', 'vind', 'vindt', 'vond / vonden', 'heeft gevonden', 'to find/think'],
          ],
        },
        note: 'For rijden: use "is gereden" for movement (Ik ben naar Amsterdam gereden) and "heeft gereden" for general activity (Hij heeft vandaag gereden).',
      },
    ],
  },

  'subordinate-clauses': {
    title: 'Subordinate Clauses & Verb Position',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Verb Position in Subordinate Clauses',
          headers: ['Situation', 'Order at end', 'Example'],
          rows: [
            ['Simple tense', 'conjugated verb at end', '...dat hij werkt.'],
            ['Perfectum', 'past participle + auxiliary', '...dat hij gewerkt heeft.'],
            ['Modal + infinitive', 'infinitive + modal', '...dat hij kan werken.'],
            ['Modal perfect', 'inf + past part + modal', '...dat hij heeft kunnen werken.'],
            ['Separable verb', 'verb stays together', '...dat hij opbelt.'],
            ['Separable perfectum', 'ge- between prefix + verb', '...dat hij opgebeld heeft.'],
          ],
          caption: 'In subordinate clauses, ALL verbs cluster at the end. The main principle: infinitives and past participles come BEFORE the conjugated auxiliary.',
        },
        note: 'Exception: in informal speech, the auxiliary often comes before the past participle: "...dat hij heeft gewerkt" is also accepted.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Relative Clauses',
          headers: ['Antecedent', 'Relative pronoun', 'Example'],
          rows: [
            ['de-word (subject/object)', 'die', 'de man die werkt / de auto die ik koop'],
            ['het-word (subject/object)', 'dat', 'het kind dat slaapt / het boek dat ik lees'],
            ['After preposition (de-word)', 'wie', 'de collega met wie ik werk'],
            ['After preposition (het-word)', 'waar + prep', 'het kantoor waarover ik praat'],
            ['Referring to whole sentence', 'wat', 'Hij is geslaagd, wat me blij maakt.'],
            ['Referring to "alles/niets/iets"', 'wat', 'Alles wat hij zegt is waar.'],
          ],
          caption: 'The verb goes to the END of the relative clause.',
        },
      },
    ],
  },

  'numbers-quantities': {
    title: 'Numbers & Quantities',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Cardinal Numbers',
          headers: ['Number', 'Dutch', 'Number', 'Dutch'],
          rows: [
            ['0', 'nul', '11', 'elf'],
            ['1', 'één', '12', 'twaalf'],
            ['2', 'twee', '13', 'dertien'],
            ['3', 'drie', '14', 'veertien'],
            ['4', 'vier', '15', 'vijftien'],
            ['5', 'vijf', '20', 'twintig'],
            ['6', 'zes', '30', 'dertig'],
            ['7', 'zeven', '40', 'veertig'],
            ['8', 'acht', '50', 'vijftig'],
            ['9', 'negen', '100', 'honderd'],
            ['10', 'tien', '1000', 'duizend'],
          ],
          caption: '21 = eenentwintig, 35 = vijfendertig. Compound numbers: unit + "en" + tens.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Ordinal Numbers',
          headers: ['Number', 'Ordinal', 'Number', 'Ordinal'],
          rows: [
            ['1st', 'eerste', '7th', 'zevende'],
            ['2nd', 'tweede', '8th', 'achtste'],
            ['3rd', 'derde', '9th', 'negende'],
            ['4th', 'vierde', '10th', 'tiende'],
            ['5th', 'vijfde', '20th', 'twintigste'],
            ['6th', 'zesde', '100th', 'honderdste'],
          ],
          caption: 'Pattern: 1st–19th mostly add -de (except 1st, 2nd, 3rd, 8th). 20th onwards add -ste.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Useful Quantity Expressions',
          headers: ['Expression', 'Meaning', 'Example'],
          rows: [
            ['een paar', 'a couple of', 'een paar dagen (a couple of days)'],
            ['een paar', 'a few', 'Ik heb een paar vragen.'],
            ['een beetje', 'a little (uncountable)', 'een beetje melk / een beetje moe'],
            ['een heleboel', 'a lot of', 'een heleboel werk'],
            ['veel', 'much / many', 'veel tijd / veel mensen'],
            ['weinig', 'little / few', 'weinig geld / weinig mensen'],
            ['genoeg', 'enough', 'Ik heb genoeg geld.'],
            ['te veel', 'too much/many', 'te veel suiker'],
            ['te weinig', 'too little/few', 'te weinig slaap'],
            ['al', 'already / all', 'al het geld (all the money)'],
          ],
        },
      },
    ],
  },
};

const referenceTopicIds = Object.keys(referenceTables);

export function generateStaticParams() {
  return referenceTopicIds.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: topicId } = await params;
  const data = referenceTables[topicId];
  return {
    title: `${data?.title || 'Reference'} | NederPro`,
    description: `Dutch grammar reference: ${data?.title}`,
  };
}

export default async function ReferenceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const data = referenceTables[topicId];

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Reference', href: '/reference' },
          { label: data.title },
        ]}
      />

      <h1 className="text-3xl font-bold text-primary mb-8">{data.title}</h1>

      {data.sections.map((section, i) => (
        <div key={i} className="mb-8">
          <GrammarTable section={section.table} />
          {section.note && (
            <Alert variant="tip">{section.note}</Alert>
          )}
        </div>
      ))}
    </div>
  );
}
