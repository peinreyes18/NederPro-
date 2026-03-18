import { Topic } from '@/content/types';

export const nounGender: Topic = {
  id: 'noun-gender',
  levelId: 'b1',
  order: 14,
  title: 'Noun Gender: de & het',
  subtitle: 'Het woordgeslacht',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'noun-gender-1',
      title: 'The Two Articles: de and het',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'All Dutch nouns are either "de-words" (common gender) or "het-words" (neuter gender). There is no reliable rule that covers every word — learning the article with the noun is essential.',
          explanation:
            'Dutch has two definite articles: "de" and "het". About 75% of nouns are "de-words" and 25% are "het-words". The indefinite article "een" is used for both genders. The gender affects the forms of adjectives, pronouns, and relative clauses throughout the language, so mastering it pays dividends everywhere.',
        },
        {
          type: 'grammar-table',
          title: 'de vs. het',
          headers: ['Feature', 'de (common)', 'het (neuter)'],
          rows: [
            ['Definite article', 'de man, de vrouw', 'het kind, het huis'],
            ['Indefinite article', 'een man, een vrouw', 'een kind, een huis'],
            ['Plural (definite)', 'de mannen, de vrouwen', 'de kinderen, de huizen'],
            ['Adjective before noun (indef.)', 'een grote man', 'een groot huis'],
            ['Adjective before noun (def.)', 'de grote man', 'het grote huis'],
            ['Relative pronoun', 'die (de man die…)', 'dat (het huis dat…)'],
            ['Pronoun (singular)', 'hij / zij / hem / haar', 'het'],
          ],
          caption: 'All plurals take "de", regardless of the singular article.',
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Approximate split',
          content: 'Roughly 75% of Dutch nouns are de-words and 25% are het-words. When you\'re unsure, guessing "de" gives you a 3-in-4 chance of being correct — but for high-frequency nouns, always learn the article.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'het man, het vrouw', correct: 'de man, de vrouw', explanation: 'Nouns referring to people with natural gender (men and women) are always "de-words".' },
            { incorrect: 'de kind', correct: 'het kind', explanation: '"Kind" (child) is a "het-word" — one of the most common errors.' },
            { incorrect: 'een groot de stad', correct: 'een grote stad / de grote stad', explanation: 'Don\'t mix indefinite and definite articles. Adjectives also change form based on the article used.' },
          ],
        },
      ],
    },
    {
      id: 'noun-gender-2',
      title: 'Patterns and Rules for het-words',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Certain word categories are almost always "het-words". Learning these patterns dramatically reduces the number of articles you need to memorise.',
          explanation:
            'While there is no perfect system, several reliable patterns exist for het-words. Memorising these patterns — especially the diminutive rule — will cover a large proportion of the het-words you encounter.',
        },
        {
          type: 'grammar-table',
          title: 'Reliable het-word patterns',
          headers: ['Pattern', 'Rule', 'Examples'],
          rows: [
            ['Diminutives (-je/-tje/-pje/-etje)', 'ALWAYS het', 'het huisje, het tafeltje, het hondje'],
            ['Verbs used as nouns (infinitive nouns)', 'Always het', 'het lopen, het eten, het schrijven'],
            ['Languages', 'Always het', 'het Nederlands, het Frans, het Engels'],
            ['Metals and chemical elements', 'Usually het', 'het goud, het ijzer, het koper'],
            ['Sports and games', 'Usually het', 'het voetbal, het tennis, het schaken'],
            ['Points of the compass', 'Always het', 'het noorden, het zuiden, het oosten, het westen'],
            ['Two-syllable words with be-, ge-, ver-, ont-', 'Usually het', 'het gebouw, het bericht, het vertrek'],
          ],
          caption: 'The diminutive rule (always het) is the most useful: any noun ending in -je is a het-word.',
        },
        {
          type: 'grammar-table',
          title: 'Reliable de-word patterns',
          headers: ['Pattern', 'Rule', 'Examples'],
          rows: [
            ['People (professions, roles)', 'Always de', 'de leraar, de dokter, de vrouw, de man'],
            ['Rivers, mountains', 'Always de', 'de Rijn, de Alpen, de Maas'],
            ['-ing suffix', 'Always de', 'de vergadering, de woning, de oefening'],
            ['-heid / -heid', 'Always de', 'de vrijheid, de mogelijkheid, de veiligheid'],
            ['-schap (abstract)', 'Usually de', 'de vriendschap, de wetenschap'],
            ['-ie suffix', 'Always de', 'de politie, de functie, de productie'],
            ['-uur, -eur, -aar, -er (person)', 'Always de', 'deuur → het uur; de chauffeur, de bakker'],
          ],
          caption: 'Note: "uur" (hour) is an exception — it is het uur despite the -uur ending.',
        },
        {
          type: 'examples',
          title: 'Applying the patterns',
          examples: [
            { dutch: 'het huisje (diminutive → always het)', english: 'the little house', highlight: 'het' },
            { dutch: 'de vergadering (-ing → always de)', english: 'the meeting', highlight: 'de' },
            { dutch: 'het lopen (verb as noun → always het)', english: 'walking / the act of walking', highlight: 'het' },
            { dutch: 'de vrijheid (-heid → always de)', english: 'freedom', highlight: 'de' },
            { dutch: 'het noorden (compass direction → always het)', english: 'the north', highlight: 'het' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Practical tip: use a colour-coding system',
          content: 'Many Dutch learners colour-code their vocabulary — writing de-words in blue and het-words in green (or any two contrasting colours). This creates a visual association that makes article recall faster than trying to remember rules.',
        },
      ],
    },
    {
      id: 'noun-gender-3',
      title: 'Why Gender Matters: Adjectives, Pronouns, and Relatives',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Noun gender determines adjective endings, pronoun choice, and relative pronoun selection.',
          explanation:
            'Knowing the article of a noun is not just about the article itself — it cascades through the whole sentence. Getting the gender right ensures correct adjective forms, correct pronoun substitution, and correct relative clauses.',
        },
        {
          type: 'grammar-table',
          title: 'Gender effects in a sentence',
          headers: ['Effect', 'de-word example', 'het-word example'],
          rows: [
            ['Definite article', 'de grote stad', 'het grote land'],
            ['Indefinite article + adj.', 'een grote stad', 'een groot land'],
            ['Personal pronoun', 'De stad is mooi. Hij/Zij is mooi.', 'Het land is groot. Het is groot.'],
            ['Relative clause pronoun', 'de stad die mooi is', 'het land dat groot is'],
            ['Demonstrative', 'deze stad / die stad', 'dit land / dat land'],
          ],
          caption: 'Adjectives take -e in all cases EXCEPT: indefinite article + het-word (singular) → no -e.',
        },
        {
          type: 'examples',
          title: 'The adjective exception',
          examples: [
            { dutch: 'een groot huis (het-word, indefinite → no -e)', english: 'a big house', highlight: 'groot' },
            { dutch: 'het grote huis (het-word, definite → -e)', english: 'the big house', highlight: 'grote' },
            { dutch: 'een grote stad (de-word, indefinite → -e)', english: 'a big city', highlight: 'grote' },
            { dutch: 'de grote stad (de-word, definite → -e)', english: 'the big city', highlight: 'grote' },
          ],
        },
        {
          type: 'grammar-table',
          title: 'Demonstratives by gender',
          headers: ['', 'Singular de-word', 'Singular het-word', 'All plurals'],
          rows: [
            ['Near (this/these)', 'deze stoel', 'dit boek', 'deze stoelen/boeken'],
            ['Far (that/those)', 'die stoel', 'dat boek', 'die stoelen/boeken'],
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Writing professional emails — precision with gender',
          examples: [
            { dutch: 'Het rapport is klaar. U kunt het lezen.', english: 'The report is ready. You can read it.' },
            { dutch: 'De vergadering die gisteren plaatsvond, was informatief.', english: 'The meeting that took place yesterday was informative.' },
            { dutch: 'Dit project vereist extra aandacht.', english: 'This project requires extra attention.' },
            { dutch: 'De manager die verantwoordelijk is, heet Peters.', english: 'The manager who is responsible is called Peters.' },
          ],
          note: 'In professional writing, incorrect article use can undermine your credibility. Precision with de/het signals advanced language control.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'noun-gender-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct article: de or het.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ kind speelt in de tuin.',
            options: ['De', 'Het', 'Een', 'Die'],
            correctIndex: 1,
            explanation: '"Kind" is a het-word: het kind.',
          },
          {
            question: '___ vergadering begint om drie uur.',
            options: ['Het', 'De', 'Dit', 'Dat'],
            correctIndex: 1,
            explanation: 'Words ending in -ing are always de-words: de vergadering.',
          },
          {
            question: '___ huisje aan de rivier is oud.',
            options: ['De', 'Een', 'Het', 'Dit'],
            correctIndex: 2,
            explanation: 'All diminutives (-je) are het-words: het huisje.',
          },
          {
            question: '___ vrijheid is belangrijk.',
            options: ['Het', 'De', 'Dit', 'Dat'],
            correctIndex: 1,
            explanation: 'Words ending in -heid are always de-words: de vrijheid.',
          },
          {
            question: '___ noorden van Nederland is vlak.',
            options: ['De', 'Een', 'Het', 'Die'],
            correctIndex: 2,
            explanation: 'Compass points are always het-words: het noorden.',
          },
          {
            question: '___ gebouw is vijftig jaar oud.',
            options: ['De', 'Het', 'Die', 'Deze'],
            correctIndex: 1,
            explanation: 'Words with ge- prefix are usually het-words: het gebouw.',
          },
        ],
      },
    },
    {
      id: 'noun-gender-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct demonstrative: deze, dit, die, or dat.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'boek is heel interessant. (near, het-word)',
            correctAnswer: 'Dit',
            hint: 'Near + het-word → dit',
            acceptableAnswers: ['Dit'],
          },
          {
            before: '',
            after: 'stad is erg groot. (near, de-word)',
            correctAnswer: 'Deze',
            hint: 'Near + de-word → deze',
            acceptableAnswers: ['Deze'],
          },
          {
            before: '',
            after: 'huis aan de overkant staat te koop. (far, het-word)',
            correctAnswer: 'Dat',
            hint: 'Far + het-word → dat',
            acceptableAnswers: ['Dat'],
          },
          {
            before: '',
            after: 'mensen kennen de regels niet. (far/plural)',
            correctAnswer: 'Die',
            hint: 'Plural (all genders) far → die',
            acceptableAnswers: ['Die'],
          },
          {
            before: 'Ik begrijp',
            after: 'vraag niet. (far, de-word)',
            correctAnswer: 'die',
            hint: 'Far + de-word → die',
            acceptableAnswers: ['die'],
          },
        ],
      },
    },
    {
      id: 'noun-gender-ex-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct adjective form.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ze woont in een ___ huis.',
            options: ['grote', 'groot', 'groter', 'grootst'],
            correctIndex: 1,
            explanation: '"Huis" is a het-word + indefinite article "een" → adjective has NO -e ending: een groot huis.',
          },
          {
            question: 'Ik lees het ___ boek.',
            options: ['interessant', 'interessante', 'interessanter', 'meest interessante'],
            correctIndex: 1,
            explanation: '"Boek" is a het-word + definite article "het" → adjective takes -e: het interessante boek.',
          },
          {
            question: 'Ze werkt voor een ___ bedrijf.',
            options: ['grote', 'groot', 'groter', 'grootse'],
            correctIndex: 1,
            explanation: '"Bedrijf" is a het-word + indefinite "een" → no -e: een groot bedrijf.',
          },
          {
            question: 'De ___ stad trekt veel toeristen.',
            options: ['mooie', 'mooi', 'mooier', 'mooist'],
            correctIndex: 0,
            explanation: '"Stad" is a de-word + definite "de" → adjective takes -e: de mooie stad.',
          },
          {
            question: 'Het is een ___ probleem.',
            options: ['groot', 'grote', 'grotere', 'grootste'],
            correctIndex: 0,
            explanation: '"Probleem" is a het-word + indefinite "een" → no -e: een groot probleem.',
          },
        ],
      },
    },
    {
      id: 'noun-gender-ex-4',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct relative pronoun: die or dat.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het kind',
            after: 'daar speelt, heet Emma.',
            correctAnswer: 'dat',
            hint: '"Kind" is a het-word → dat',
            acceptableAnswers: ['dat'],
          },
          {
            before: 'De medewerker',
            after: 'het project leidt, heet Jansen.',
            correctAnswer: 'die',
            hint: '"Medewerker" is a de-word → die',
            acceptableAnswers: ['die'],
          },
          {
            before: 'Het rapport',
            after: 'gisteren werd verstuurd, is goedgekeurd.',
            correctAnswer: 'dat',
            hint: '"Rapport" is a het-word → dat',
            acceptableAnswers: ['dat'],
          },
          {
            before: 'De auto',
            after: 'voor de deur staat, is van de buurman.',
            correctAnswer: 'die',
            hint: '"Auto" is a de-word → die',
            acceptableAnswers: ['die'],
          },
          {
            before: 'De mensen',
            after: 'hier wonen, zijn vriendelijk.',
            correctAnswer: 'die',
            hint: 'Plural nouns always take "die"',
            acceptableAnswers: ['die'],
          },
        ],
      },
    },
    {
      id: 'noun-gender-ex-5',
      type: 'error-correction',
      instruction: 'Each sentence has an article or adjective error. Correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De kind speelt buiten.',
            correctedSentence: 'Het kind speelt buiten.',
            errorExplanation: '"Kind" is a het-word, not a de-word.',
          },
          {
            incorrectSentence: 'Ze woont in een grote huis.',
            correctedSentence: 'Ze woont in een groot huis.',
            errorExplanation: '"Huis" is a het-word. With indefinite article "een", the adjective takes no -e: groot huis.',
          },
          {
            incorrectSentence: 'De vergadering dat gisteren was, is afgezegd.',
            correctedSentence: 'De vergadering die gisteren was, is afgezegd.',
            errorExplanation: '"Vergadering" is a de-word → use relative pronoun "die", not "dat".',
          },
          {
            incorrectSentence: 'Dit mensen zijn heel aardig.',
            correctedSentence: 'Deze mensen zijn heel aardig.',
            errorExplanation: 'Plural nouns always take "deze" (near) or "die" (far). "Dit" is only for singular het-words.',
          },
          {
            incorrectSentence: 'Het vrijheid is belangrijk voor iedereen.',
            correctedSentence: 'De vrijheid is belangrijk voor iedereen.',
            errorExplanation: 'Words ending in -heid are always de-words: de vrijheid.',
          },
        ],
      },
    },
    {
      id: 'noun-gender-ex-6',
      type: 'listening-comprehension',
      instruction: 'Listen and answer questions about de/het usage.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'A real estate agent is describing properties to a couple looking for a home.',
        audioText:
          'Makelaar: Goedemiddag! Ik heb vandaag drie woningen voor u. Ten eerste: dit grote huis in Haarlem. Het heeft vijf kamers en een mooie tuin. Dan is er dit kleine appartement in het centrum van Amsterdam. Het gebouw is oud maar goed onderhouden. En tot slot: deze ruime woning in het westen van de stad. De vrijheid die u daar heeft, is uniek. Welke woning spreekt u het meeste aan? Klant: Het huis in Haarlem lijkt ons het beste. Het heeft een grote tuin die we heel fijn vinden.',
        maxPlays: 2,
        questions: [
          {
            question: 'How many properties does the agent present?',
            options: ['Two', 'Three', 'Four', 'Five'],
            correctIndex: 1,
            explanation: '"Ik heb vandaag drie woningen voor u" — drie means three.',
          },
          {
            question: 'Which property is in the city centre?',
            options: [
              'The big house in Haarlem',
              'The spacious home in the west',
              'The small apartment in Amsterdam',
              'The building near the garden',
            ],
            correctIndex: 2,
            explanation: '"dit kleine appartement in het centrum van Amsterdam" — the apartment is in the centre of Amsterdam.',
          },
          {
            question: 'Which property does the client prefer, and why?',
            options: [
              'The apartment — because it is in the city.',
              'The western home — because of the freedom.',
              'The Haarlem house — because of the big garden.',
              'The old building — because it is well maintained.',
            ],
            correctIndex: 2,
            explanation: '"Het huis in Haarlem lijkt ons het beste. Het heeft een grote tuin die we heel fijn vinden." — the garden (tuin) is the reason.',
          },
        ],
      },
    },
  ],
};
