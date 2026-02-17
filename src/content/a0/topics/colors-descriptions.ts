import { Topic } from '@/content/types';

export const colorsDescriptions: Topic = {
  id: 'colors-descriptions',
  levelId: 'a0',
  title: 'Colors & Descriptions',
  subtitle: 'Kleuren en beschrijvingen',
  order: 7,
  estimatedMinutes: 20,
  prerequisites: ['basic-greetings'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Colors in Dutch',
        rule: 'Dutch color words work as adjectives. Before a noun they may get an -e ending, but at this level you just need to know the basic color words.',
        explanation:
          'Colors are some of the most useful words for daily life — describing things you see, shopping for clothes, or understanding directions ("the red building"). Most Dutch colors are similar to English or German, making them relatively easy to learn.',
      },
      {
        type: 'grammar-table',
        title: 'De kleuren (The Colors)',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['rood', 'red'],
          ['blauw', 'blue'],
          ['groen', 'green'],
          ['geel', 'yellow'],
          ['oranje', 'orange'],
          ['wit', 'white'],
          ['zwart', 'black'],
          ['grijs', 'grey'],
          ['bruin', 'brown'],
          ['roze', 'pink'],
          ['paars', 'purple'],
        ],
      },
      {
        type: 'note',
        title: 'Oranje is special!',
        content:
          'Orange is the national color of the Netherlands (the royal family is the House of Orange-Nassau). You\'ll see oranje everywhere during Koningsdag and football matches!',
        variant: 'tip',
      },
      {
        type: 'grammar-rule',
        title: 'Basic Descriptions',
        rule: 'Adjectives before a noun usually get an -e ending: "een grote hond" (a big dog). After the verb "zijn" (to be), they stay unchanged: "De hond is groot."',
        explanation:
          'At this beginner level, focus on learning the base forms of common descriptive words. The -e ending rule has exceptions (especially with het-words and "een"), but for now just recognize both forms when you see them.',
      },
      {
        type: 'grammar-table',
        title: 'Useful Descriptions',
        headers: ['Dutch', 'English', 'Opposite'],
        audioColumns: [0],
        rows: [
          ['groot', 'big / large', 'klein (small)'],
          ['lang', 'long / tall', 'kort (short)'],
          ['dik', 'thick / fat', 'dun (thin)'],
          ['oud', 'old', 'nieuw (new) / jong (young)'],
          ['mooi', 'beautiful / nice', 'lelijk (ugly)'],
          ['goed', 'good', 'slecht (bad)'],
          ['warm', 'warm / hot', 'koud (cold)'],
          ['duur', 'expensive', 'goedkoop (cheap)'],
          ['licht', 'light / bright', 'donker (dark)'],
          ['snel', 'fast', 'langzaam (slow)'],
        ],
      },
      {
        type: 'examples',
        title: 'Colors and Descriptions in Sentences',
        examples: [
          { dutch: 'De lucht is blauw.', english: 'The sky is blue.', highlight: ['blauw'] },
          { dutch: 'Ik heb een rode auto.', english: 'I have a red car.', highlight: ['rode'] },
          { dutch: 'Het huis is groot.', english: 'The house is big.', highlight: ['groot'] },
          { dutch: 'Dat is een mooie bloem.', english: 'That is a beautiful flower.', highlight: ['mooie'] },
          { dutch: 'De koffie is warm.', english: 'The coffee is warm.', highlight: ['warm'] },
        ],
      },
      {
        type: 'note',
        title: 'The -e ending',
        content:
          'Notice how "rood" becomes "rode" and "mooi" becomes "mooie" before a noun? This -e ending is very common in Dutch. Don\'t worry about the exact rules yet — just start recognizing the pattern.',
        variant: 'tip',
      },
      {
        type: 'workplace-context',
        scenario: 'Describing things at work and in daily life',
        examples: [
          { dutch: 'Waar is het groene boek?', english: 'Where is the green book?', highlight: ['groene'] },
          { dutch: 'De kleine vergaderzaal is vrij.', english: 'The small meeting room is free.', highlight: ['kleine'] },
          { dutch: 'Dit is te duur.', english: 'This is too expensive.', highlight: ['duur'] },
          { dutch: 'Het weer is slecht vandaag.', english: 'The weather is bad today.', highlight: ['slecht'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'De auto is rode.',
            correct: 'De auto is rood.',
            explanation:
              'After "is" (or other forms of "zijn"), the adjective does NOT get an -e ending. "De auto is rood." But: "de rode auto."',
          },
          {
            incorrect: 'Ik heb een rood auto.',
            correct: 'Ik heb een rode auto.',
            explanation:
              'Before a de-word noun, the adjective gets -e even after "een": "een rode auto." (Auto is a de-word.)',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-colors-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct translation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What color is "groen"?',
            options: ['blue', 'green', 'grey', 'brown'],
            correctIndex: 1,
            explanation: 'Groen = green. Blauw = blue, grijs = grey, bruin = brown.',
          },
          {
            question: 'What is the Dutch word for "yellow"?',
            options: ['grijs', 'geel', 'groen', 'goud'],
            correctIndex: 1,
            explanation: 'Geel = yellow. Grijs = grey, groen = green.',
          },
          {
            question: 'What does "groot" mean?',
            options: ['green', 'great / big', 'grey', 'good'],
            correctIndex: 1,
            explanation: 'Groot = big / large / great. Think of the name "Groot" from Guardians of the Galaxy!',
          },
          {
            question: 'What is the opposite of "duur" (expensive)?',
            options: ['dun', 'goedkoop', 'donker', 'slecht'],
            correctIndex: 1,
            explanation: 'Goedkoop = cheap (literally "good buy"). Dun = thin, donker = dark, slecht = bad.',
          },
        ],
      },
    },
    {
      id: 'a0-colors-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct color or description.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De lucht is', after: '. (blue)', correctAnswer: 'blauw', hint: 'the color of the sky' },
          { before: 'Het huis is', after: '. (big)', correctAnswer: 'groot', hint: 'the opposite of klein' },
          { before: 'De koffie is', after: '. (warm)', correctAnswer: 'warm', hint: 'not cold' },
        ],
      },
    },
    {
      id: 'a0-colors-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['is', 'De', 'rood', 'auto', '.'],
            correctOrder: ['De', 'auto', 'is', 'rood', '.'],
            translation: 'The car is red.',
          },
          {
            shuffledWords: ['een', 'heb', 'Ik', 'hond', 'grote', '.'],
            correctOrder: ['Ik', 'heb', 'een', 'grote', 'hond', '.'],
            translation: 'I have a big dog.',
          },
        ],
      },
    },
    {
      id: 'a0-colors-translation-1',
      type: 'translation',
      instruction: 'Translate into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The sky is blue.',
            correctDutch: 'De lucht is blauw.',
            keyVocabulary: [
              { dutch: 'de lucht', english: 'the sky' },
              { dutch: 'blauw', english: 'blue' },
            ],
          },
          {
            english: 'This is too expensive.',
            correctDutch: 'Dit is te duur.',
            keyVocabulary: [
              { dutch: 'dit', english: 'this' },
              { dutch: 'te', english: 'too' },
              { dutch: 'duur', english: 'expensive' },
            ],
          },
        ],
      },
    },
    {
      id: 'a0-colors-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct translation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What color is "paars"?',
            options: ['pink', 'purple', 'brown', 'grey'],
            correctIndex: 1,
            explanation: 'Paars = purple. Roze = pink, bruin = brown, grijs = grey.',
          },
          {
            question: 'What is the Dutch word for "white"?',
            options: ['zwart', 'grijs', 'wit', 'bruin'],
            correctIndex: 2,
            explanation: 'Wit = white. Zwart = black, grijs = grey, bruin = brown.',
          },
          {
            question: 'What does "langzaam" mean?',
            options: ['long', 'slow', 'lazy', 'light'],
            correctIndex: 1,
            explanation: 'Langzaam = slow. The opposite is "snel" (fast).',
          },
          {
            question: 'What is the opposite of "oud"?',
            options: ['groot', 'nieuw', 'mooi', 'goed'],
            correctIndex: 1,
            explanation: 'Nieuw = new, the opposite of oud (old). For people, you can also use "jong" (young).',
          },
        ],
      },
    },
    {
      id: 'a0-colors-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct form of the adjective.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik heb een ___ kat. (black)',
            options: ['zwarte', 'zwart', 'zwarten', 'zwartte'],
            correctIndex: 0,
            explanation: 'Before a de-word noun after "een," the adjective gets -e: "een zwarte kat." Kat is a de-word.',
          },
          {
            question: 'De bloem is ___. (beautiful)',
            options: ['mooie', 'mooi', 'moois', 'mooien'],
            correctIndex: 1,
            explanation: 'After "is" (or other forms of "zijn"), the adjective stays in its base form: "De bloem is mooi."',
          },
          {
            question: 'Dat is een ___ huis. (small)',
            options: ['kleine', 'klein', 'kleins', 'kleinen'],
            correctIndex: 1,
            explanation: 'Huis is a het-word. After "een" + het-word, the adjective does NOT get -e: "een klein huis."',
          },
          {
            question: 'De ___ auto is van mij. (red)',
            options: ['rood', 'rode', 'roden', 'roode'],
            correctIndex: 1,
            explanation: 'Before a de-word noun with "de," the adjective gets -e: "de rode auto."',
          },
        ],
      },
    },
    {
      id: 'a0-colors-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct adjective form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het weer is',
            after: 'vandaag. (bad)',
            correctAnswer: 'slecht',
            hint: 'After "is," no -e ending',
          },
          {
            before: 'Zij heeft een',
            after: 'jurk. (green)',
            correctAnswer: 'groene',
            hint: 'Before a de-word noun: add -e',
          },
          {
            before: 'De',
            after: 'tas is van mijn moeder. (brown)',
            correctAnswer: 'bruine',
            hint: 'Before a noun with "de": add -e',
          },
        ],
      },
    },
    {
      id: 'a0-colors-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct color or description.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Gras is',
            after: '.',
            correctAnswer: 'groen',
            acceptableAnswers: ['groen'],
          },
          {
            before: 'Sneeuw is',
            after: '.',
            correctAnswer: 'wit',
            acceptableAnswers: ['wit', 'koud', 'wit en koud'],
          },
          {
            before: 'Een olifant is',
            after: '.',
            correctAnswer: 'groot',
            acceptableAnswers: ['groot', 'grijs'],
          },
        ],
      },
    },
    {
      id: 'a0-colors-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['is', 'het', 'groene', 'Waar', 'boek', '?'],
            correctOrder: ['Waar', 'is', 'het', 'groene', 'boek', '?'],
            translation: 'Where is the green book?',
          },
          {
            shuffledWords: ['kleine', 'De', 'is', 'vergaderzaal', 'vrij', '.'],
            correctOrder: ['De', 'kleine', 'vergaderzaal', 'is', 'vrij', '.'],
            translation: 'The small meeting room is free.',
          },
        ],
      },
    },
    {
      id: 'a0-colors-error-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De auto is rode.',
            correctedSentence: 'De auto is rood.',
            errorExplanation: 'After "is" (or other forms of "zijn"), the adjective does NOT get an -e ending. Use the base form: "rood."',
          },
          {
            incorrectSentence: 'Ik heb een rood auto.',
            correctedSentence: 'Ik heb een rode auto.',
            errorExplanation: 'Auto is a de-word. Before a de-word noun, the adjective gets -e even after "een": "een rode auto."',
          },
          {
            incorrectSentence: 'Het is een goede weer vandaag.',
            correctedSentence: 'Het is goed weer vandaag.',
            errorExplanation: 'Weer is a het-word. After "een" (or no article) + het-word, the adjective stays in its base form: "goed weer."',
          },
        ],
      },
    },
  ],
};
