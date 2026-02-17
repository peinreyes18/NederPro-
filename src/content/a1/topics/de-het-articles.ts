import { Topic } from '@/content/types';

export const deHetArticles: Topic = {
  id: 'de-het-articles',
  levelId: 'a1',
  title: 'Articles: De and Het',
  subtitle: 'Lidwoorden: de en het',
  order: 3,
  estimatedMinutes: 30,
  prerequisites: ['subject-pronouns'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Definite Articles: de and het',
        rule: 'Dutch has two definite articles: "de" for common gender nouns (de-woorden) and "het" for neuter gender nouns (het-woorden).',
        explanation:
          'Unlike English, which has only "the", Dutch distinguishes between two genders for nouns. About two-thirds of Dutch nouns use "de" and one-third use "het". Unfortunately, there is no single reliable rule to determine which article a noun takes \u2014 you must learn the article together with each new noun. However, there are some helpful patterns and guidelines that can reduce the guesswork.',
      },
      {
        type: 'grammar-rule',
        title: 'The Indefinite Article: een',
        rule: 'The indefinite article "een" (a/an) is the same for both de-woorden and het-woorden.',
        explanation:
          'Good news: the indefinite article does not change based on gender. Whether the noun is a de-word or a het-word, the indefinite article is always "een". For example: "een man" (a man, de-word) and "een huis" (a house, het-word). The article "een" is pronounced as a short, unstressed "un" in everyday speech. When you want to emphasize "one" as a number, it is spelled "\u00e9\u00e9n" with accents.',
      },
      {
        type: 'grammar-table',
        title: 'De-woorden vs. Het-woorden',
        headers: ['', 'Definite article', 'Indefinite article', 'Examples'],
        rows: [
          ['Common (de-woorden)', 'de', 'een', 'de man, de vrouw, de tafel, de stad'],
          ['Neuter (het-woorden)', 'het', 'een', 'het huis, het boek, het kind, het water'],
          ['Plural (always)', 'de', '\u2014', 'de mannen, de huizen, de boeken'],
        ],
        caption: 'All plural nouns take "de", regardless of their singular article.',
      },
      {
        type: 'grammar-rule',
        title: 'Reliable Rules for "het"',
        rule: 'Diminutives (-je) are always het-woorden. Plural nouns are always de-woorden.',
        explanation:
          'Two rules you can always count on: (1) All diminutives (words ending in -je, -tje, -pje, -etje) are het-woorden: het huisje, het meisje, het kopje. (2) All plural nouns take "de": de huizen, de boeken, de kinderen. These rules have no exceptions.',
      },
      {
        type: 'grammar-table',
        title: 'Patterns for Het-woorden',
        headers: ['Pattern', 'Examples'],
        rows: [
          ['Diminutives (-je)', 'het huisje, het meisje, het kopje, het bloemetje'],
          ['Words ending in -ment', 'het moment, het document, het experiment'],
          ['Words ending in -isme', 'het optimisme, het realisme, het toerisme'],
          ['Words ending in -um', 'het museum, het centrum, het stadium'],
          ['Two-syllable words starting with be-', 'het begin, het belang, het besluit, het bedrijf'],
          ['Two-syllable words starting with ge-', 'het geluk, het gevoel, het gebied, het gesprek'],
          ['Two-syllable words starting with ver-', 'het verschil, het verzoek, het verlof'],
          ['Two-syllable words starting with ont-', 'het ontbijt, het ontwerp, het ontslag'],
          ['Languages', 'het Nederlands, het Engels, het Frans'],
          ['Metals', 'het goud, het zilver, het ijzer'],
          ['Sports and games', 'het voetbal, het tennis, het schaak'],
        ],
        caption:
          'These are general tendencies, not absolute rules (except diminutives). Always verify with a dictionary when unsure.',
      },
      {
        type: 'grammar-table',
        title: 'Common De-woorden to Memorize',
        headers: ['Dutch', 'English'],
        rows: [
          ['de man', 'the man'],
          ['de vrouw', 'the woman'],
          ['de tafel', 'the table'],
          ['de stoel', 'the chair'],
          ['de stad', 'the city'],
          ['de auto', 'the car'],
          ['de krant', 'the newspaper'],
          ['de brief', 'the letter'],
          ['de kamer', 'the room'],
          ['de vraag', 'the question'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Common Het-woorden to Memorize',
        headers: ['Dutch', 'English'],
        rows: [
          ['het huis', 'the house'],
          ['het boek', 'the book'],
          ['het werk', 'the work'],
          ['het kind', 'the child'],
          ['het water', 'the water'],
          ['het jaar', 'the year'],
          ['het probleem', 'the problem'],
          ['het kantoor', 'the office'],
          ['het verschil', 'the difference'],
          ['het gesprek', 'the conversation'],
        ],
      },
      {
        type: 'examples',
        title: 'Articles in Sentences',
        examples: [
          {
            dutch: 'De man leest een boek.',
            english: 'The man reads a book.',
            highlight: ['De', 'een'],
            note: '"man" is a de-word; "boek" with indefinite article "een"',
          },
          {
            dutch: 'Het kind speelt in de tuin.',
            english: 'The child plays in the garden.',
            highlight: ['Het', 'de'],
            note: '"kind" is a het-word; "tuin" is a de-word',
          },
          {
            dutch: 'Ik heb een vraag over het document.',
            english: 'I have a question about the document.',
            highlight: ['een', 'het'],
            note: '"vraag" with indefinite "een"; "document" is a het-word (-ment ending)',
          },
          {
            dutch: 'De huizen in Amsterdam zijn duur.',
            english: 'The houses in Amsterdam are expensive.',
            highlight: ['De'],
            note: 'Plural: always "de", even though "huis" is a het-word in singular',
          },
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes with Articles',
        mistakes: [
          {
            incorrect: 'Het man werkt hier.',
            correct: 'De man werkt hier.',
            explanation:
              '"Man" is a de-word. People nouns are almost always de-woorden (except het kind, het meisje).',
          },
          {
            incorrect: 'De boek ligt op de tafel.',
            correct: 'Het boek ligt op de tafel.',
            explanation:
              '"Boek" is a het-word. This is one of the most common het-woorden to memorize.',
          },
          {
            incorrect: 'De meisje heet Anna.',
            correct: 'Het meisje heet Anna.',
            explanation:
              '"Meisje" is a diminutive (-je ending), so it always takes "het", even though it refers to a girl.',
          },
          {
            incorrect: 'Het huizen zijn groot.',
            correct: 'De huizen zijn groot.',
            explanation:
              'Plural nouns always take "de", even if the singular form is a het-word. "Het huis" \u2192 "de huizen".',
          },
          {
            incorrect: 'Ik heb de probleem.',
            correct: 'Ik heb het probleem.',
            explanation:
              '"Probleem" ends in a long vowel + m pattern and is a het-word. Many words of Greek/Latin origin are het-woorden.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Articles in the Workplace',
        scenario:
          'Knowing the correct article is important in professional communication. Using the wrong article can sound unpolished in emails, reports, and meetings. Here are common workplace nouns with their articles:',
        examples: [
          {
            dutch: 'Het kantoor is op de tweede verdieping.',
            english: 'The office is on the second floor.',
            highlight: ['Het', 'de'],
          },
          {
            dutch: 'De vergadering begint om negen uur.',
            english: 'The meeting starts at nine o\'clock.',
            highlight: ['De'],
          },
          {
            dutch: 'Ik stuur het rapport naar de klant.',
            english: 'I am sending the report to the client.',
            highlight: ['het', 'de'],
          },
          {
            dutch: 'Het bedrijf heeft een nieuw beleid.',
            english: 'The company has a new policy.',
            highlight: ['Het', 'een'],
            note: '"bedrijf" starts with be- and is a het-word',
          },
          {
            dutch: 'De e-mail is verstuurd.',
            english: 'The email has been sent.',
            highlight: ['De'],
          },
        ],
      },
      {
        type: 'note',
        title: 'Tip: Learn the Article with the Noun',
        content:
          'The most effective strategy is to always learn a new Dutch noun together with its article. Instead of memorizing "huis = house", memorize "het huis = the house". Over time, the correct article will feel natural. Many Dutch language apps and flashcard systems include the article for this reason.',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-de-het-articles-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "de" or "het" to complete each phrase.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'man',
            correctAnswer: 'de',
            acceptableAnswers: ['De'],
            hint: 'People nouns are almost always de-woorden',
          },
          {
            before: '',
            after: 'huis',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
            hint: 'One of the most common het-woorden',
          },
          {
            before: '',
            after: 'boek',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
          },
          {
            before: '',
            after: 'tafel',
            correctAnswer: 'de',
            acceptableAnswers: ['De'],
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "de" or "het". Use the patterns you learned.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'meisje',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
            hint: 'Diminutives (-je) are always het-woorden',
          },
          {
            before: '',
            after: 'document',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
            hint: 'Words ending in -ment are het-woorden',
          },
          {
            before: '',
            after: 'kinderen',
            correctAnswer: 'de',
            acceptableAnswers: ['De'],
            hint: 'Plural nouns are always de-woorden',
          },
          {
            before: '',
            after: 'stad',
            correctAnswer: 'de',
            acceptableAnswers: ['De'],
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct article for each noun.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which article goes with "kantoor" (office)?',
            options: ['de kantoor', 'het kantoor', 'een kantoor (de-word)', 'een kantoor (het-word)'],
            correctIndex: 1,
            explanation:
              '"Kantoor" is a het-word. It follows the pattern of two-syllable words. "Het kantoor" is correct.',
          },
          {
            question: 'Which article goes with "huisje" (little house)?',
            options: ['de huisje', 'het huisje'],
            correctIndex: 1,
            explanation:
              '"Huisje" is a diminutive (-je ending). All diminutives are het-woorden, so "het huisje" is correct.',
          },
          {
            question: 'Which article goes with "boeken" (books)?',
            options: ['de boeken', 'het boeken'],
            correctIndex: 0,
            explanation:
              'All plural nouns take "de", regardless of their singular article. "Het boek" but "de boeken".',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-mc-2',
      type: 'multiple-choice',
      instruction: 'Select the sentence with the correct article usage.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is correct?',
            options: [
              'Het vrouw werkt op het kantoor.',
              'De vrouw werkt op het kantoor.',
              'De vrouw werkt op de kantoor.',
              'Het vrouw werkt op de kantoor.',
            ],
            correctIndex: 1,
            explanation:
              '"Vrouw" is a de-word (people nouns are almost always de-woorden). "Kantoor" is a het-word. So: "De vrouw werkt op het kantoor."',
          },
          {
            question: 'Which sentence is correct?',
            options: [
              'Het kind leest het boek.',
              'De kind leest de boek.',
              'Het kind leest de boek.',
              'De kind leest het boek.',
            ],
            correctIndex: 0,
            explanation:
              'Both "kind" and "boek" are het-woorden. "Het kind leest het boek" is correct.',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct article (de, het, or een) in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb',
            after: 'vraag over het project.',
            correctAnswer: 'een',
            acceptableAnswers: ['Een'],
            hint: 'Indefinite article: "a question"',
          },
          {
            before: '',
            after: 'bedrijf groeit snel.',
            correctAnswer: 'Het',
            acceptableAnswers: ['het'],
            hint: '"Bedrijf" starts with be- (two syllables) \u2192 het-word',
          },
          {
            before: 'Waar is',
            after: 'koffiezetapparaat?',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
            hint: '"Apparaat" and compound nouns with het-word endings are often het-woorden',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order. Pay attention to the articles.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['leest', 'de', 'een', 'man', 'boek'],
            correctOrder: ['De', 'man', 'leest', 'een', 'boek.'],
            translation: 'The man reads a book.',
          },
          {
            shuffledWords: ['op', 'het', 'de', 'ligt', 'boek', 'tafel'],
            correctOrder: ['Het', 'boek', 'ligt', 'op', 'de', 'tafel.'],
            translation: 'The book is on the table.',
          },
          {
            shuffledWords: ['speelt', 'het', 'de', 'kind', 'in', 'tuin'],
            correctOrder: ['Het', 'kind', 'speelt', 'in', 'de', 'tuin.'],
            translation: 'The child plays in the garden.',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-mc-3',
      type: 'multiple-choice',
      instruction:
        'Based on the pattern rules, predict the article for these less common words.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the likely article for "experiment"?',
            options: ['de experiment', 'het experiment'],
            correctIndex: 1,
            explanation:
              'Words ending in -ment are typically het-woorden. "Het experiment" is correct.',
          },
          {
            question: 'What is the likely article for "toerisme" (tourism)?',
            options: ['de toerisme', 'het toerisme'],
            correctIndex: 1,
            explanation:
              'Words ending in -isme are het-woorden. "Het toerisme" is correct.',
          },
          {
            question: 'What is the article for "bloemetje" (little flower)?',
            options: ['de bloemetje', 'het bloemetje'],
            correctIndex: 1,
            explanation:
              'Diminutives (-je/-tje/-etje) are always het-woorden. "Het bloemetje" is correct.',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-fill-4',
      type: 'fill-in-the-blank',
      instruction:
        'Complete these workplace sentences with the correct article.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'vergadering is om twee uur.',
            correctAnswer: 'De',
            acceptableAnswers: ['de'],
          },
          {
            before: 'Ik stuur',
            after: 'rapport naar de directeur.',
            correctAnswer: 'het',
            acceptableAnswers: ['Het'],
          },
          {
            before: '',
            after: 'collega\'s zijn aardig.',
            correctAnswer: 'De',
            acceptableAnswers: ['de'],
            hint: 'Plural nouns always take "de"',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-wo-2',
      type: 'word-order',
      instruction:
        'Arrange the words to form a correct sentence. Use the right articles.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['stuurt', 'het', 'de', 'naar', 'rapport', 'manager', 'het', 'team'],
            correctOrder: ['De', 'manager', 'stuurt', 'het', 'rapport', 'naar', 'het', 'team.'],
            translation: 'The manager sends the report to the team.',
          },
          {
            shuffledWords: ['zijn', 'de', 'in', 'duur', 'huizen', 'de', 'stad'],
            correctOrder: ['De', 'huizen', 'in', 'de', 'stad', 'zijn', 'duur.'],
            translation: 'The houses in the city are expensive.',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-mc-4',
      type: 'multiple-choice',
      instruction:
        'Read the paragraph and identify the error.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question:
              '"Het kind speelt in de tuin. De meisje leest een boek. De man drinkt het water." Which sentence has an article error?',
            options: [
              'Het kind speelt in de tuin.',
              'De meisje leest een boek.',
              'De man drinkt het water.',
            ],
            correctIndex: 1,
            explanation:
              '"Meisje" is a diminutive (-je) and always takes "het". The correct sentence is "Het meisje leest een boek."',
          },
          {
            question:
              '"Ik werk op het kantoor. De bedrijf is groot. Het werk is interessant." Which sentence has an article error?',
            options: [
              'Ik werk op het kantoor.',
              'De bedrijf is groot.',
              'Het werk is interessant.',
            ],
            correctIndex: 1,
            explanation:
              '"Bedrijf" starts with be- and is a het-word. The correct sentence is "Het bedrijf is groot."',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-fill-5',
      type: 'fill-in-the-blank',
      instruction:
        'Complete each sentence with "de", "het", or "een".',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Er staat',
            after: 'kopje koffie op de tafel.',
            correctAnswer: 'een',
            acceptableAnswers: ['Een'],
            hint: '"A cup" \u2014 indefinite article',
          },
          {
            before: '',
            after: 'gesprek met de klant duurt een uur.',
            correctAnswer: 'Het',
            acceptableAnswers: ['het'],
            hint: '"Gesprek" starts with ge- \u2192 het-word',
          },
          {
            before: 'Wij hebben',
            after: 'nieuwe collega in ons team.',
            correctAnswer: 'een',
            acceptableAnswers: ['Een'],
          },
          {
            before: '',
            after: 'verschil is duidelijk.',
            correctAnswer: 'Het',
            acceptableAnswers: ['het'],
            hint: '"Verschil" starts with ver- \u2192 het-word',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-mc-5',
      type: 'multiple-choice',
      instruction: 'Choose the correct sentence.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is fully correct?',
            options: [
              'De museum in de stad is mooi.',
              'Het museum in de stad is mooi.',
              'Het museum in het stad is mooi.',
              'De museum in het stad is mooi.',
            ],
            correctIndex: 1,
            explanation:
              '"Museum" ends in -um and is a het-word. "Stad" is a de-word. The correct combination is "Het museum in de stad is mooi."',
          },
        ],
      },
    },
    {
      id: 'a1-de-het-articles-rc-1',
      type: 'reading-comprehension',
      instruction: 'Read the short text and answer the questions about articles.',
      difficulty: 'guided',
      content: {
        type: 'reading-comprehension',
        passageTitle: 'Het kantoor',
        passage:
          'Het kantoor is groot. De tafels zijn bruin. Het boek ligt op de tafel. De kinderen spelen buiten. Het meisje leest een boek in de tuin.',
        questions: [
          {
            question: 'Which article does "kantoor" use?',
            options: ['de', 'het', 'een'],
            correctAnswer: 'het',
            explanation: '"Kantoor" is a het-word: "het kantoor".',
          },
          {
            question: 'Why does the text say "de kinderen" instead of "het kinderen"?',
            options: [
              'Because "kinderen" is a de-word',
              'Because plural nouns always take "de"',
              'Because "kind" is a de-word',
              'Because it is a mistake',
            ],
            correctAnswer: 'Because plural nouns always take "de"',
            explanation:
              '"Kind" is a het-word (het kind), but plural nouns always take "de": de kinderen.',
          },
          {
            question: 'Why does "meisje" take "het" even though it refers to a girl?',
            correctAnswer: 'Because meisje is a diminutive',
            explanation:
              'Diminutives (words ending in -je) are always het-woorden, regardless of what they refer to.',
          },
        ],
      },
    },
  ],
};
