import { Topic } from '@/content/types';

export const numbersQuantities: Topic = {
  id: 'numbers-quantities',
  levelId: 'b1',
  order: 16,
  title: 'Numbers, Dates & Quantities',
  subtitle: 'Getallen, datums en hoeveelheden',
  estimatedMinutes: 45,
  lessons: [
    {
      id: 'numbers-1',
      title: 'Cardinal Numbers and Large Numbers',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch numbers follow specific patterns. Compound numbers (21–99) are formed with the unit first, then "en", then the tens: "eenentwintig" (21), "drieëndertig" (33).',
          explanation:
            'While basic numbers 1–20 must be memorised, larger numbers follow a predictable pattern. In Dutch, unlike English, the unit comes before the ten in compound numbers: 21 = één-en-twintig (one and twenty). Numbers in the hundreds and thousands follow standard additive patterns.',
        },
        {
          type: 'grammar-table',
          title: 'Key number patterns',
          headers: ['Range', 'Pattern', 'Examples'],
          rows: [
            ['1–20', 'Irregular, must memorise', 'één, twee, drie … tien, elf, twaalf … twintig'],
            ['21–99', 'unit + en + tens', 'eenentwintig (21), tweeënveertig (42), negenenvijftig (59)'],
            ['100s', 'honderd + number', 'honderd (100), tweehonderd (200), driehonderdvijf (305)'],
            ['1000s', 'duizend + number', 'duizend (1000), vijfduizend (5000), tienduizend (10,000)'],
            ['Millions', 'miljoenen', 'een miljoen (1,000,000), twee miljoen'],
            ['Ordinals', 'add -de or -ste', 'eerste (1st), tweede (2nd), derde (3rd), vierde (4th), twintigste (20th)'],
          ],
          caption: 'Note: "één" uses an accent only when it could be confused with "een" (a/an). In isolation or for emphasis, write "één".',
        },
        {
          type: 'grammar-table',
          title: 'Ordinal numbers',
          headers: ['Cardinal', 'Ordinal', 'Rule'],
          rows: [
            ['één (1)', 'eerste', 'Irregular'],
            ['twee (2)', 'tweede', '-de'],
            ['drie (3)', 'derde', 'Irregular'],
            ['vier (4)', 'vierde', '-de'],
            ['acht (8)', 'achtste', '-ste (not -de after t/d/s/x)'],
            ['negen (9)', 'negende', '-de'],
            ['twintig (20)', 'twintigste', '-ste'],
            ['honderd (100)', 'honderdste', '-ste'],
          ],
          caption: 'Most numbers take -de. Numbers ending in -t, -d, -s, -x take -ste.',
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'The ë in two-digit numbers',
          content: 'When a number compound would put two vowels together, Dutch adds a diaeresis (ë) for clarity:\n• twee + en + twintig → tweeëntwintig (22)\n• drie + en + dertig → drieëndertig (33)\n\nBut: eenentwintig (21) — no diaeresis needed because "ee" is a single vowel sound.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'twintig-en-twee', correct: 'tweeëntwintig', explanation: 'Dutch compounds put the unit first: two-and-twenty, not twenty-two.' },
            { incorrect: 'één miljoen euro\'s', correct: 'één miljoen euro', explanation: '"Miljoen" takes no plural marker when preceded by a number. "Euro" also does not pluralise after numbers in formal contexts.' },
            { incorrect: 'de tweeende', correct: 'de tweede', explanation: 'The ordinal of twee is "tweede", not "tweeende".' },
          ],
        },
      ],
    },
    {
      id: 'numbers-2',
      title: 'Dates, Years, and Time Expressions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch dates are written and spoken as: day (ordinal) + month + year. Time uses a 24-hour clock in formal contexts and a 12-hour clock in conversation.',
          explanation:
            'Dates in Dutch always use ordinal numbers for the day: "de vijftiende maart" (the 15th of March). Years are read as two pairs: 1985 = negentienhonderdvijfentachtig; years from 2000 are often read as tweeduizend + number. Time expressions include quarter-past, half, and quarter-to patterns that differ significantly from English.',
        },
        {
          type: 'grammar-table',
          title: 'Date format',
          headers: ['Component', 'Format', 'Example'],
          rows: [
            ['Day', 'Ordinal number', 'de vijftiende (15th)'],
            ['Month', 'Month name', 'maart (March)'],
            ['Year', 'Cardinal number', 'tweeduizend-vier-en-twintig (2024)'],
            ['Full date (spoken)', 'de [day] [month] [year]', 'de vijftiende maart tweeduizendvierentwintig'],
            ['Full date (written)', 'DD-MM-YYYY or DD/MM/YYYY', '15-03-2024 or 15 maart 2024'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'Telling the time',
          headers: ['Time', 'Dutch expression', 'Literal meaning'],
          rows: [
            ['3:00', 'drie uur', 'three o\'clock'],
            ['3:15', 'kwart over drie', 'quarter past three'],
            ['3:30', 'half vier', 'half four (= halfway to four)'],
            ['3:45', 'kwart voor vier', 'quarter to four'],
            ['3:10', 'tien over drie', 'ten past three'],
            ['3:20', 'tien voor half vier', 'ten to half four (= 20 past three)'],
            ['3:40', 'tien over half vier', 'ten past half four (= 20 to four)'],
          ],
          caption: 'IMPORTANT: "half vier" = 3:30 (halfway towards four), NOT 4:30. This is a common trap for English speakers.',
        },
        {
          type: 'examples',
          title: 'Dates and times in context',
          examples: [
            { dutch: 'De vergadering is op maandag de zesde juni.', english: 'The meeting is on Monday the 6th of June.', highlight: 'de zesde juni' },
            { dutch: 'Hij is geboren op vijftien augustus negentienhonderdnegentig.', english: 'He was born on the 15th of August 1990.', highlight: 'vijftien augustus negentienhonderdnegentig' },
            { dutch: 'De trein vertrekt om half acht.', english: 'The train departs at 7:30.', highlight: 'half acht' },
            { dutch: 'Ik ben er kwart voor negen.', english: 'I\'ll be there at 8:45.', highlight: 'kwart voor negen' },
          ],
        },
        {
          type: 'note',
          variant: 'warning',
          title: '"Half" in Dutch time — a major difference from English',
          content: '"Half [hour]" in Dutch means HALF BEFORE that hour, not half past:\n\n• half twee = 1:30 (half before two)\n• half zeven = 6:30 (half before seven)\n• half twaalf = 11:30 (half before twelve)\n\nThis is one of the most common mistakes English speakers make in Dutch. Always subtract 30 minutes from the hour mentioned.',
        },
      ],
    },
    {
      id: 'numbers-3',
      title: 'Quantities, Measurements, and Approximations',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch uses specific quantity words and phrases for expressing amounts, measurements, and approximate numbers.',
          explanation:
            'Quantity expressions in Dutch include both precise measurements and approximate modifiers. Learning these expressions is essential for practical language use in shopping, cooking, giving directions, and professional communication.',
        },
        {
          type: 'grammar-table',
          title: 'Quantity and measurement vocabulary',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['een kilo(gram)', 'a kilogram', 'een kilo appels'],
            ['een pond', 'half a kilogram (≈500g)', 'een pond gehakt'],
            ['een liter', 'a litre', 'twee liter melk'],
            ['een meter', 'a metre', 'drie meter stof'],
            ['een stuk of …', 'about … (roughly)', 'een stuk of tien mensen'],
            ['ongeveer', 'approximately', 'ongeveer vijftig euro'],
            ['meer dan', 'more than', 'meer dan honderd deelnemers'],
            ['minder dan', 'fewer than / less than', 'minder dan een uur'],
            ['bijna', 'almost / nearly', 'bijna klaar'],
            ['ruim', 'well over / comfortably', 'ruim driehonderd euro'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'Fractions and percentages',
          headers: ['Dutch', 'English'],
          rows: [
            ['een half / de helft', 'a half / half of it'],
            ['een derde', 'a third'],
            ['een kwart', 'a quarter'],
            ['driekwart', 'three quarters'],
            ['tien procent', 'ten percent'],
            ['anderhalf', 'one and a half'],
            ['tweeëneenhalf', 'two and a half'],
          ],
        },
        {
          type: 'examples',
          title: 'Quantities in everyday use',
          examples: [
            { dutch: 'Er waren een stuk of dertig mensen op het feest.', english: 'There were around 30 people at the party.', highlight: 'een stuk of dertig' },
            { dutch: 'Het kost ruim vijfhonderd euro.', english: 'It costs well over five hundred euros.', highlight: 'ruim vijfhonderd' },
            { dutch: 'Ze zijn al bijna anderhalf jaar samen.', english: 'They\'ve been together for nearly one and a half years.', highlight: 'bijna anderhalf jaar' },
            { dutch: 'Meer dan de helft van de studenten is geslaagd.', english: 'More than half of the students passed.', highlight: 'meer dan de helft' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Reporting figures in a business meeting',
          examples: [
            { dutch: 'De omzet is gestegen met ruim tien procent.', english: 'Revenue has increased by well over ten percent.' },
            { dutch: 'Er zijn meer dan tweehonderd sollicitaties ontvangen.', english: 'More than two hundred applications have been received.' },
            { dutch: 'Het project duurt naar schatting anderhalf jaar.', english: 'The project will take approximately one and a half years.' },
            { dutch: 'Bijna een derde van de medewerkers werkt hybride.', english: 'Almost a third of employees work hybrid.' },
          ],
          note: 'Precise number language is crucial in professional Dutch. Mixing up "half drie" (2:30) and "half drie uur" in a meeting schedule causes real confusion.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'numbers-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct Dutch number or time expression.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "47" in Dutch?',
            options: ['veertig-zeven', 'zevenveertig', 'zevenenveertig', 'vier-en-zeventig'],
            correctIndex: 2,
            explanation: 'Dutch compound numbers: unit + en + tens → zeven-en-veertig = zevenenveertig (47).',
          },
          {
            question: 'What time is "half tien"?',
            options: ['10:30', '9:30', '10:15', '9:45'],
            correctIndex: 1,
            explanation: '"Half tien" = halfway to ten = 9:30. This is a classic Dutch trap — it is NOT 10:30.',
          },
          {
            question: 'How do you express 3:45 in Dutch?',
            options: ['kwart over drie', 'half vier', 'kwart voor vier', 'driekwart vier'],
            correctIndex: 2,
            explanation: '3:45 = 15 minutes before 4 → "kwart voor vier".',
          },
          {
            question: 'What does "een stuk of twintig" mean?',
            options: ['Exactly 20', 'About 20', '20 pieces', 'At least 20'],
            correctIndex: 1,
            explanation: '"Een stuk of …" = approximately, roughly. "Een stuk of twintig" = about 20.',
          },
          {
            question: 'What is the ordinal form of "acht"?',
            options: ['achtde', 'achtste', 'achte', 'achtende'],
            correctIndex: 1,
            explanation: 'Numbers ending in -t take -ste: acht → achtste.',
          },
          {
            question: 'How do you write the date "the 3rd of March" in Dutch?',
            options: ['drie maart', 'de derde van maart', 'de derde maart', 'derde maart'],
            correctIndex: 2,
            explanation: 'Dutch dates: de + ordinal + month name → "de derde maart".',
          },
        ],
      },
    },
    {
      id: 'numbers-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Write out the number or time in words.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij is',
            after: 'jaar oud. (33)',
            correctAnswer: 'drieëndertig',
            hint: '30 + 3 = drie-en-dertig',
            acceptableAnswers: ['drieëndertig', 'drie-en-dertig'],
          },
          {
            before: 'De trein vertrekt om',
            after: '. (7:30)',
            correctAnswer: 'half acht',
            hint: '7:30 in Dutch = halfway to 8',
            acceptableAnswers: ['half acht'],
          },
          {
            before: 'Er waren',
            after: 'mensen aanwezig. (approximately 50)',
            correctAnswer: 'een stuk of vijftig',
            hint: '"Een stuk of …" = approximately',
            acceptableAnswers: ['een stuk of vijftig', 'ongeveer vijftig'],
          },
          {
            before: 'De vergadering is op',
            after: 'mei. (the 15th)',
            correctAnswer: 'de vijftiende',
            hint: '15th = vijftiende',
            acceptableAnswers: ['de vijftiende', 'vijftiende'],
          },
          {
            before: 'Het duurt',
            after: 'jaar. (1.5)',
            correctAnswer: 'anderhalf',
            hint: '1.5 = anderhalf',
            acceptableAnswers: ['anderhalf'],
          },
        ],
      },
    },
    {
      id: 'numbers-ex-3',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De vergadering begint om half drie, dus om 3:30.',
            correctedSentence: 'De vergadering begint om half drie, dus om 2:30.',
            errorExplanation: '"Half drie" = 2:30 (halfway to three), NOT 3:30. This is the most common time error for English speakers.',
          },
          {
            incorrectSentence: 'Hij is op de tweeende rij gezeten.',
            correctedSentence: 'Hij is op de tweede rij gezeten.',
            errorExplanation: 'The ordinal of "twee" is "tweede", not "tweeende".',
          },
          {
            incorrectSentence: 'Er zijn meer dan honderd euro\'s nodig.',
            correctedSentence: 'Er zijn meer dan honderd euro nodig.',
            errorExplanation: '"Euro" does not pluralise with an apostrophe after a number. Use "euro" (not euro\'s) in this context.',
          },
          {
            incorrectSentence: 'De meeting is op twintig-drie april.',
            correctedSentence: 'De meeting is op drieëntwintig april.',
            errorExplanation: 'Compound numbers put the unit first: drie-en-twintig (23), not twintig-drie. Also: no hyphen in written form.',
          },
          {
            incorrectSentence: 'Het kost tien procenten meer.',
            correctedSentence: 'Het kost tien procent meer.',
            errorExplanation: '"Procent" does not take a plural -en ending after a number: "tien procent", not "tien procenten".',
          },
        ],
      },
    },
    {
      id: 'numbers-ex-4',
      type: 'translation',
      instruction: 'Translate these number and time expressions into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The meeting starts at half past eight in the morning.',
            correctDutch: 'De vergadering begint om half negen \'s ochtends.',
            acceptableAnswers: ['De vergadering begint om half negen \'s ochtends.', 'De vergadering begint om half negen.'],
          },
          {
            english: 'She was born on the 22nd of July 1998.',
            correctDutch: 'Ze is geboren op tweeëntwintig juli negentienhonderdachtennegentig.',
            acceptableAnswers: ['Ze is geboren op tweeëntwintig juli negentienhonderdachtennegentig.', 'Ze is geboren op 22 juli 1998.'],
          },
          {
            english: 'There were approximately a hundred participants.',
            correctDutch: 'Er waren ongeveer honderd deelnemers.',
            acceptableAnswers: ['Er waren ongeveer honderd deelnemers.', 'Er waren een stuk of honderd deelnemers.'],
          },
          {
            english: 'Almost three quarters of the staff works from home.',
            correctDutch: 'Bijna driekwart van het personeel werkt thuis.',
            acceptableAnswers: ['Bijna driekwart van het personeel werkt thuis.', 'Bijna driekwart van de medewerkers werkt thuis.'],
          },
          {
            english: 'The project costs well over fifty thousand euros.',
            correctDutch: 'Het project kost ruim vijftigduizend euro.',
            acceptableAnswers: ['Het project kost ruim vijftigduizend euro.', 'Het project kost ruim vijftig duizend euro.'],
          },
        ],
      },
    },
    {
      id: 'numbers-ex-5',
      type: 'listening-comprehension',
      instruction: 'Listen to the radio announcement and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'A radio news bulletin with statistics and dates.',
        audioText:
          'Goedemorgen, hier is het nieuws van zeven uur. Vandaag, de drieëntwintigste april, opent de nieuwe brug officieel. De brug kostte ruim tweehonderd miljoen euro en heeft tweeënhalf jaar gebouwd. De openingsceremonie begint om half elf en duurt naar schatting twee uur. Er worden een stuk of vijfhonderd bezoekers verwacht. De brug is bijna twee kilometer lang en verbindt twee stadsdelen. Meer informatie is te vinden op de website van de gemeente.',
        maxPlays: 2,
        questions: [
          {
            question: 'What date is the bridge opening?',
            options: ['13 April', '23 April', '3 April', '30 April'],
            correctIndex: 1,
            explanation: '"de drieëntwintigste april" = the 23rd of April.',
          },
          {
            question: 'What time does the opening ceremony start?',
            options: ['11:30', '10:30', '11:00', '10:00'],
            correctIndex: 1,
            explanation: '"om half elf" = half before eleven = 10:30.',
          },
          {
            question: 'How long did the bridge take to build?',
            options: [
              'Two years',
              'Three and a half years',
              'Two and a half years',
              'Almost three years',
            ],
            correctIndex: 2,
            explanation: '"tweeënhalf jaar" = two and a half years.',
          },
        ],
      },
    },
  ],
};
