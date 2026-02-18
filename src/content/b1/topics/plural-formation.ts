import { Topic } from '@/content/types';

export const pluralFormation: Topic = {
  id: 'plural-formation',
  levelId: 'b1',
  order: 1,
  title: 'Plural Formation',
  subtitle: 'Meervoudsvorming',
  estimatedMinutes: 45,
  lessons: [
    {
      id: 'plural-1',
      title: 'Basic Rules: -en and -s',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Most Dutch nouns form the plural by adding -en.',
          explanation:
            'The standard way to form plurals in Dutch is by adding -en to the singular. Normal Dutch spelling rules apply: the vowel value must be preserved (short vowels stay short, long vowels stay long), and the letters z and v only appear at the start of a syllable (elsewhere they become s or f).',
        },
        {
          type: 'grammar-table',
          title: 'Common -en plurals',
          headers: ['Singular', 'Plural', 'Spelling note'],
          rows: [
            ['boek', 'boeken', 'Standard addition of -en'],
            ['deur', 'deuren', 'Standard addition of -en'],
            ['fiets', 'fietsen', 'Standard addition of -en'],
            ['boom', 'bomen', 'One o keeps the long sound (oo → o in open syllable)'],
            ['huis', 'huizen', 's → z at the start of a new syllable'],
            ['reis', 'reizen', 's → z at the start of a new syllable'],
            ['raaf', 'raven', 'f → v at the start of a new syllable'],
            ['tak', 'takken', 'Double k to keep the short vowel'],
            ['taak', 'taken', 'aa → a in open syllable (long vowel preserved)'],
            ['baas', 'bazen', 's → z; aa → a in open syllable'],
          ],
          caption: 'Note how spelling rules keep the vowel sound consistent between singular and plural.',
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'Er staan veel bomen in het park.', english: 'There are many trees in the park.', highlight: 'bomen' },
            { dutch: 'Er staan bijna geen huizen aan de rechterkant van de straat.', english: 'There are almost no houses on the right side of the street.', highlight: 'huizen' },
            { dutch: 'Ik moet nog een aantal taken verrichten.', english: 'I still have a number of tasks to complete.', highlight: 'taken' },
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Many nouns ending in -el, -em, -en, -er, -aar, -aard, -erd, -ster, or -je form the plural with -s.',
          explanation:
            'This is the second general rule. Nouns with these unstressed endings take -s instead of -en. This includes all diminutives (verkleinwoorden) ending in -je.',
        },
        {
          type: 'grammar-table',
          title: 'Common -s plurals',
          headers: ['Ending', 'Singular', 'Plural'],
          rows: [
            ['-el', 'tafel', 'tafels'],
            ['-el', 'winkel', 'winkels'],
            ['-em', 'bezem', 'bezems'],
            ['-en', 'wagen', 'wagens'],
            ['-en', 'jongen', 'jongens'],
            ['-er', 'speler', 'spelers'],
            ['-aar', 'metselaar', 'metselaars'],
            ['-aard', 'grijsaard', 'grijsaards'],
            ['-erd', 'dikkerd', 'dikkerds'],
            ['-ster', 'arbeidster', 'arbeidsters'],
            ['-je', 'meisje', 'meisjes'],
            ['-je', 'hondje', 'hondjes'],
          ],
          caption: 'All diminutives (-je) always take -s.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'tafelen', correct: 'tafels', explanation: 'Nouns ending in -el take -s, not -en.' },
            { incorrect: 'meisjen', correct: 'meisjes', explanation: 'All diminutives (ending in -je) always take -s.' },
            { incorrect: 'wagenen', correct: 'wagens', explanation: 'Nouns ending in unstressed -en take -s.' },
          ],
        },
      ],
    },
    {
      id: 'plural-2',
      title: 'Borrowed Words, Long Vowels & Professions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Borrowed words (bastaardwoorden) usually form plurals with -s.',
          explanation:
            'This applies to words ending in a schwa sound (-e), and those ending in -é, -ee, -eau, -ey, -ay, -ieu, -oe, or -ui.',
        },
        {
          type: 'grammar-table',
          title: 'Borrowed word plurals',
          headers: ['Singular', 'Plural', 'Origin'],
          rows: [
            ['garage', 'garages', 'French (schwa ending)'],
            ['etalage', 'etalages', 'French (schwa ending)'],
            ['café', 'cafés', 'French (-é ending)'],
            ['bureau', 'bureaus', 'French (-eau ending)'],
            ['milieu', 'milieus', 'French (-ieu ending)'],
            ['taboe', 'taboes', 'Polynesian (-oe ending)'],
            ['etui', 'etuis', 'French (-ui ending)'],
            ['essay', 'essays', 'English (pronounced as diphthong)'],
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Nouns ending in a long vowel take an apostrophe + s.',
          explanation:
            'When a noun ends in a long vowel sound (a, i, o, u, y), the plural is formed with an apostrophe and s. The apostrophe shows that the s is a separate sound.',
        },
        {
          type: 'grammar-table',
          title: 'Apostrophe + s plurals',
          headers: ['Singular', 'Plural'],
          rows: [
            ["auto", "auto's"],
            ["ski", "ski's"],
            ["menu", "menu's"],
            ["paraplu", "paraplu's"],
            ["villa", "villa's"],
            ["baby", "baby's"],
            ["hobby", "hobby's"],
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Nouns for professions and family relations often take -s.',
          explanation:
            'Many nouns referring to specific professions or family members form the plural with -s, even though you might expect -en.',
        },
        {
          type: 'grammar-table',
          title: 'Professions & family',
          headers: ['Singular', 'Plural', 'Category'],
          rows: [
            ['ingenieur', 'ingenieurs', 'Profession'],
            ['acteur', 'acteurs', 'Profession'],
            ['directeur', 'directeurs', 'Profession'],
            ['generaal', 'generaals', 'Military'],
            ['oom', 'ooms', 'Family'],
            ['broer', 'broers', 'Family'],
            ['tante', 'tantes', 'Family'],
          ],
        },
        {
          type: 'note',
          content:
            'Watch out for exceptions! Some similar-looking words take -en: scholier → scholieren, officier → officieren. Words ending in a schwa -e (like actrice → actrices) follow the borrowed word rule.',
          variant: 'warning',
        },
      ],
    },
    {
      id: 'plural-3',
      title: 'Vowel Changes & Irregular Plurals',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'A small group of het-words take the special plural ending -eren.',
          explanation:
            'Historically these nouns had a plural on -er (like in German: Kinder, Eier), but over time a regular -en was added on top, creating the -eren ending.',
        },
        {
          type: 'grammar-table',
          title: '-eren plurals',
          headers: ['Singular', 'Plural', 'English'],
          rows: [
            ['het kind', 'de kinderen', 'children'],
            ['het ei', 'de eieren', 'eggs'],
            ['het been', 'de beenderen', 'bones (skeleton)'],
            ['het blad', 'de bladeren', 'leaves (tree)'],
            ['het kalf', 'de kalveren', 'calves'],
            ['het lam', 'de lammeren', 'lambs'],
            ['het lied', 'de liederen', 'songs'],
            ['het rund', 'de runderen', 'cattle'],
          ],
          caption: 'Note: all these are het-words in singular but become de-words in the plural (as all plurals do).',
        },
        {
          type: 'grammar-rule',
          rule: 'Some nouns change their vowel from short to long in the plural.',
          explanation:
            'A notable group of nouns have a short vowel in the singular but a long vowel in the plural. This is an important pattern to memorize.',
        },
        {
          type: 'grammar-table',
          title: 'Vowel change plurals',
          headers: ['Singular', 'Plural', 'Vowel change'],
          rows: [
            ['bad', 'baden', 'a (short) → a (long)'],
            ['dag', 'dagen', 'a (short) → a (long)'],
            ['dak', 'daken', 'a (short) → a (long)'],
            ['gat', 'gaten', 'a (short) → a (long)'],
            ['glas', 'glazen', 'a (short) → a (long) + s→z'],
            ['god', 'goden', 'o (short) → o (long)'],
            ['lid', 'leden', 'i (short) → e (long)'],
            ['oorlog', 'oorlogen', 'o (short) → o (long)'],
            ['schip', 'schepen', 'i (short) → e (long)'],
            ['stad', 'steden', 'a (short) → e (long)'],
            ['weg', 'wegen', 'e (short) → e (long)'],
          ],
          caption: 'These must be memorized. They are among the most common nouns in Dutch.',
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'Wat zijn de belangrijkste steden in Nederland?', english: 'What are the most important cities in the Netherlands?', highlight: 'steden' },
            { dutch: 'Onze club telt meer dan 200 leden.', english: 'Our club has more than 200 members.', highlight: 'leden' },
            { dutch: 'Alle wegen leiden naar Rome.', english: 'All roads lead to Rome.', highlight: 'wegen' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'stadden', correct: 'steden', explanation: 'Stad changes its vowel completely in the plural: stad → steden.' },
            { incorrect: 'kinders', correct: 'kinderen', explanation: 'Kind takes the special -eren ending.' },
            { incorrect: 'glazen (meaning "glasses to drink from")', correct: 'glazen', explanation: 'Glas → glazen is correct. Note the vowel change AND s→z.' },
          ],
        },
      ],
    },
    {
      id: 'plural-4',
      title: 'Special Rules & Exceptions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Nouns ending in -heid always form the plural with -heden.',
          explanation:
            'The suffix -heid replaces its ending with -heden in the plural. This is consistent and has no exceptions.',
        },
        {
          type: 'grammar-table',
          title: '-heid → -heden',
          headers: ['Singular', 'Plural'],
          rows: [
            ['moeilijkheid', 'moeilijkheden'],
            ['waarheid', 'waarheden'],
            ['bezienswaardigheid', 'bezienswaardigheden'],
            ['kleinigheid', 'kleinigheden'],
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Nouns ending in -or shift stress and lengthen the vowel: -or → -oren.',
          explanation:
            'Words like professor and motor change their stress pattern and vowel in the plural. An alternative -s plural exists but is less common.',
        },
        {
          type: 'grammar-table',
          title: '-or noun plurals',
          headers: ['Singular', 'Plural (-oren)', 'Plural (-s)'],
          rows: [
            ['professor', 'professoren', 'professors'],
            ['rector', 'rectoren', 'rectors'],
            ['motor', 'motoren', 'motors'],
            ['senator', 'senatoren', 'senators'],
          ],
          caption: 'The -oren form shifts stress to the second-to-last syllable. The -s form keeps the original stress.',
        },
        {
          type: 'grammar-rule',
          rule: 'Nouns ending in stressed -ie take -ën; unstressed -ie takes -s.',
          explanation:
            'The stress placement on the -ie ending determines the plural form. If the -ie is stressed (like knie), add -ën. If unstressed (like olie), add -s.',
        },
        {
          type: 'grammar-table',
          title: '-ie noun plurals',
          headers: ['Singular', 'Plural', 'Stress on -ie?'],
          rows: [
            ['olie', 'olies', 'No (unstressed)'],
            ['premie', 'premies', 'No (unstressed)'],
            ['revolutie', 'revoluties', 'No (unstressed)'],
            ['directie', 'directies', 'No (unstressed)'],
            ['knie', 'knieën', 'Yes (stressed)'],
            ['industrie', 'industrieën', 'Yes (stressed)'],
            ['categorie', 'categorieën', 'Yes (stressed)'],
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Greek/Latin words keep classical plural forms.',
          explanation:
            'Words borrowed from Greek or Latin often form their plural following the original language pattern. Words ending in -um often become -a, and words ending in -us often become -i.',
        },
        {
          type: 'grammar-table',
          title: 'Classical plurals',
          headers: ['Singular', 'Classical plural', 'Dutch alternative'],
          rows: [
            ['museum', 'musea', 'museums'],
            ['minimum', 'minima', '—'],
            ['maximum', 'maxima', '—'],
            ['decennium', 'decennia', '—'],
            ['politicus', 'politici', '—'],
            ['technicus', 'technici', '—'],
            ['historicus', 'historici', '—'],
          ],
          caption: 'Note: album → albums (always -s, no classical form).',
        },
        {
          type: 'note',
          content:
            'Measurements (meter, kilo, liter), time words (uur, jaar, kwartier), and currency words (euro, dollar) stay singular after a number: drie meter, vijf kilo, twee uur, tien euro. They only get a plural when used with an adjective: drie zware kilometers.',
          variant: 'tip',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'drie uren', correct: 'drie uur', explanation: 'After a number, uur stays singular (unless there is an adjective: drie lange uren).' },
            { incorrect: 'vijf euros', correct: 'vijf euro', explanation: 'Currency stays singular after a number.' },
            { incorrect: 'museen', correct: 'musea (or museums)', explanation: 'Museum takes the Latin plural -a or the Dutch -s, not -en.' },
          ],
        },
      ],
    },
  ],
  exercises: [
    // === CONTROLLED (drills) ===
    {
      id: 'b1-plural-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct plural form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the plural of "huis"?',
            options: ['huisen', 'huizen', 'huiss', 'huis'],
            correctIndex: 1,
            explanation: 'Huis → huizen. The s becomes z at the start of the new syllable.',
          },
          {
            question: 'What is the plural of "kind"?',
            options: ['kinden', 'kinds', 'kinderen', 'kindes'],
            correctIndex: 2,
            explanation: 'Kind is a het-word that takes the special -eren ending: kinderen.',
          },
          {
            question: 'What is the plural of "tafel"?',
            options: ['tafelen', 'tafels', 'tafelens', 'tafelss'],
            correctIndex: 1,
            explanation: 'Nouns ending in -el take -s: tafels.',
          },
          {
            question: 'What is the plural of "stad"?',
            options: ['stadden', 'stads', 'steden', 'staden'],
            correctIndex: 2,
            explanation: 'Stad has an irregular vowel change: stad → steden.',
          },
          {
            question: 'What is the plural of "auto"?',
            options: ['autos', "auto's", 'autoen', 'autoos'],
            correctIndex: 1,
            explanation: "Nouns ending in a long vowel take apostrophe + s: auto's.",
          },
        ],
      },
    },
    {
      id: 'b1-plural-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct plural form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the plural of "moeilijkheid"?',
            options: ['moeilijkheids', 'moeilijkheiden', 'moeilijkheden', 'moeilijkheets'],
            correctIndex: 2,
            explanation: 'Nouns ending in -heid always form their plural with -heden.',
          },
          {
            question: 'What is the plural of "museum"?',
            options: ['museen', 'museumen', 'museums', 'musea'],
            correctIndex: 3,
            explanation: 'Museum takes the Latin plural musea (museums is also acceptable).',
          },
          {
            question: 'What is the plural of "café"?',
            options: ['caféen', 'cafés', "café's", 'cafées'],
            correctIndex: 1,
            explanation: 'Borrowed words ending in -é take -s: cafés.',
          },
          {
            question: 'What is the plural of "meisje"?',
            options: ['meisjen', 'meisjes', 'meisjeën', 'meisjes'],
            correctIndex: 1,
            explanation: 'All diminutives (-je) take -s: meisjes.',
          },
          {
            question: 'What is the plural of "industrie" (stress on the last syllable)?',
            options: ['industries', 'industrieën', 'industrien', 'industriees'],
            correctIndex: 1,
            explanation: 'When -ie is stressed, the plural is -ieën: industrieën.',
          },
        ],
      },
    },
    {
      id: 'b1-plural-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Write the plural form of the word in parentheses.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Er staan veel', after: '(boom) in het park.', correctAnswer: 'bomen', hint: 'oo → o in open syllable' },
          { before: 'Ik heb twee', after: '(fiets): een VTT en een racefiets.', correctAnswer: 'fietsen' },
          { before: 'Wat zijn de belangrijkste', after: '(stad) in Nederland?', correctAnswer: 'steden', hint: 'Irregular vowel change' },
          { before: 'De', after: '(kind) spelen buiten.', correctAnswer: 'kinderen', hint: 'Special -eren plural' },
          { before: 'Alle', after: '(weg) leiden naar Rome.', correctAnswer: 'wegen', hint: 'Short e → long e' },
        ],
      },
    },
    {
      id: 'b1-plural-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Write the plural form of the word in parentheses.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Alle', after: "(baby) liggen te slapen.", correctAnswer: "baby's", hint: "Long vowel ending → apostrophe + s" },
          { before: 'De', after: '(speler) trainen elke dag.', correctAnswer: 'spelers', hint: '-er ending takes -s' },
          { before: 'We bezoeken de', after: '(bezienswaardigheid) van Amsterdam.', correctAnswer: 'bezienswaardigheden', hint: '-heid → -heden' },
          { before: 'In deze straat staan mooie', after: '(villa).', correctAnswer: "villa's", hint: "Long vowel ending → apostrophe + s" },
          { before: 'De twee', after: '(professor) gaven een lezing.', correctAnswer: 'professoren', acceptableAnswers: ['professors'], hint: '-or → -oren (or -s)' },
        ],
      },
    },
    // === GUIDED ===
    {
      id: 'b1-plural-err-1',
      type: 'error-correction',
      instruction: 'Find and correct the plural form error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Er zijn veel mogelijkheiden om te studeren.',
            correctedSentence: 'Er zijn veel mogelijkheden om te studeren.',
            errorExplanation: '-heid nouns form the plural with -heden, not -heiden.',
          },
          {
            incorrectSentence: 'De kinders spelen in de tuin.',
            correctedSentence: 'De kinderen spelen in de tuin.',
            errorExplanation: 'Kind takes the special -eren ending: kinderen.',
          },
          {
            incorrectSentence: 'Er staan drie autoos op de parkeerplaats.',
            correctedSentence: "Er staan drie auto's op de parkeerplaats.",
            errorExplanation: "Nouns ending in a long vowel take apostrophe + s: auto's.",
          },
          {
            incorrectSentence: 'De tafelen zijn gedekt.',
            correctedSentence: 'De tafels zijn gedekt.',
            errorExplanation: 'Nouns ending in -el take -s, not -en: tafels.',
          },
        ],
      },
    },
    {
      id: 'b1-plural-mc-3',
      type: 'multiple-choice',
      instruction: 'Which plural formation rule applies to the given noun?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"hobby" → Which rule applies?',
            options: [
              'Add -en',
              'Add -s (unstressed ending)',
              "Add apostroph + s (long vowel ending)",
              'Special -eren plural',
            ],
            correctIndex: 2,
            explanation: "Hobby ends in a long vowel (y), so it takes apostrophe + s: hobby's.",
          },
          {
            question: '"waarheid" → Which rule applies?',
            options: [
              'Add -en',
              'Add -s',
              '-heid becomes -heden',
              'Vowel change plural',
            ],
            correctIndex: 2,
            explanation: 'All -heid nouns take -heden: waarheden.',
          },
          {
            question: '"dag" → Which rule applies?',
            options: [
              'Add -en (regular)',
              'Add -s',
              'Vowel change: short → long',
              'Special -eren plural',
            ],
            correctIndex: 2,
            explanation: 'Dag has an irregular vowel change: dag (short a) → dagen (long a).',
          },
          {
            question: '"directie" → Which rule applies?',
            options: [
              'Add -s (unstressed -ie)',
              'Add -ën (stressed -ie)',
              'Add -en',
              'Classical Latin plural',
            ],
            correctIndex: 0,
            explanation: 'Directie has the stress before -ie (di-REC-tie), so it takes -s: directies.',
          },
        ],
      },
    },
    // === OPEN (free application) ===
    {
      id: 'b1-plural-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch. Pay attention to the correct plural forms.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The children are playing in the garden.',
            correctDutch: 'De kinderen spelen in de tuin.',
            acceptableAnswers: ['De kinderen spelen in de tuin'],
            keyVocabulary: [
              { dutch: 'kinderen', english: 'children' },
              { dutch: 'tuin', english: 'garden' },
            ],
          },
          {
            english: 'There are many cities in the Netherlands.',
            correctDutch: 'Er zijn veel steden in Nederland.',
            acceptableAnswers: ['Er zijn veel steden in Nederland'],
            keyVocabulary: [
              { dutch: 'steden', english: 'cities' },
            ],
          },
          {
            english: 'The museums in Amsterdam are beautiful.',
            correctDutch: 'De musea in Amsterdam zijn mooi.',
            acceptableAnswers: ['De museums in Amsterdam zijn mooi', 'De musea in Amsterdam zijn mooi'],
            keyVocabulary: [
              { dutch: 'musea / museums', english: 'museums' },
            ],
          },
        ],
      },
    },
    {
      id: 'b1-plural-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct plural. Think carefully about which rule applies.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De', after: '(fotograaf) maken mooie foto\'s.', correctAnswer: 'fotografen', hint: 'f → v in the plural' },
          { before: 'We hebben twee', after: '(ei) nodig voor het recept.', correctAnswer: 'eieren', hint: 'Special -eren plural' },
          { before: 'Hoeveel', after: '(politicus) zitten in het parlement?', correctAnswer: 'politici', hint: 'Latin plural: -us → -i' },
          { before: 'De', after: '(garage) zijn gesloten op zondag.', correctAnswer: 'garages', hint: 'Borrowed word with schwa ending' },
          { before: 'Dit kost vijf', after: '(euro).', correctAnswer: 'euro', hint: 'Currency stays singular after a number' },
        ],
      },
    },
    {
      id: 'b1-plural-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a sentence with a plural noun.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['veel', 'Er', 'in', 'staan', 'bomen', 'park', 'het'],
            correctOrder: ['Er', 'staan', 'veel', 'bomen', 'in', 'het', 'park'],
            translation: 'There are many trees in the park.',
          },
          {
            shuffledWords: ['De', 'spelen', 'buiten', 'kinderen'],
            correctOrder: ['De', 'kinderen', 'spelen', 'buiten'],
            translation: 'The children are playing outside.',
          },
          {
            shuffledWords: ['de', 'zijn', 'van', 'steden', 'Wat', 'grootste', 'Nederland'],
            correctOrder: ['Wat', 'zijn', 'de', 'grootste', 'steden', 'van', 'Nederland'],
            translation: 'What are the biggest cities of the Netherlands?',
          },
        ],
      },
    },
  ],
};
