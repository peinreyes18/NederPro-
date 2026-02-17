import { Topic } from '@/content/types';

export const familyMembers: Topic = {
  id: 'family-members',
  levelId: 'a0',
  title: 'Family Members',
  subtitle: 'De familie',
  order: 8,
  estimatedMinutes: 20,
  prerequisites: ['basic-greetings'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Talking About Family',
        rule: 'Dutch family words are very similar to English and German. Most family members use "de" as their article.',
        explanation:
          'Family is one of the first topics people talk about when meeting someone new. In the Netherlands, you\'ll often be asked "Heb je broers of zussen?" (Do you have brothers or sisters?). Knowing these words helps you introduce your family and understand others.',
      },
      {
        type: 'grammar-table',
        title: 'Close Family (Het gezin)',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['de vader / papa', 'father / dad'],
          ['de moeder / mama', 'mother / mom'],
          ['de ouders', 'the parents'],
          ['de zoon', 'son'],
          ['de dochter', 'daughter'],
          ['de broer', 'brother'],
          ['de zus', 'sister'],
          ['het kind', 'child'],
          ['de kinderen', 'children'],
          ['de baby', 'baby'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Extended Family',
        headers: ['Dutch', 'English'],
        audioColumns: [0],
        rows: [
          ['de opa / grootvader', 'grandfather'],
          ['de oma / grootmoeder', 'grandmother'],
          ['de oom', 'uncle'],
          ['de tante', 'aunt'],
          ['de neef', 'nephew / male cousin'],
          ['de nicht', 'niece / female cousin'],
          ['de man / echtgenoot', 'husband'],
          ['de vrouw / echtgenote', 'wife'],
          ['de vriend / vriendin', 'boyfriend / girlfriend'],
          ['de schoonouders', 'parents-in-law'],
        ],
      },
      {
        type: 'note',
        title: 'Neef & Nicht — Double meaning!',
        content:
          'In Dutch, "neef" means both nephew AND male cousin. "Nicht" means both niece AND female cousin. Context makes it clear which meaning is intended.',
        variant: 'warning',
      },
      {
        type: 'examples',
        title: 'Talking About Your Family',
        examples: [
          { dutch: 'Ik heb twee broers en een zus.', english: 'I have two brothers and a sister.', highlight: ['broers', 'zus'] },
          { dutch: 'Mijn moeder heet Anna.', english: 'My mother is called Anna.', highlight: ['moeder', 'heet'] },
          { dutch: 'Heb je kinderen?', english: 'Do you have children?', highlight: ['kinderen'] },
          { dutch: 'Mijn opa woont in Amsterdam.', english: 'My grandfather lives in Amsterdam.', highlight: ['opa', 'woont'] },
          { dutch: 'Dit is mijn vrouw.', english: 'This is my wife.', highlight: ['vrouw'] },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Possessives with Family',
        rule: 'Use "mijn" (my), "jouw/je" (your), and "zijn/haar" (his/her) before family words.',
        explanation:
          'When talking about family, you\'ll constantly use possessive pronouns. "Mijn vader" (my father), "jouw broer" (your brother), "zijn moeder" (his mother), "haar zus" (her sister). "Je" is the informal short form of "jouw."',
      },
      {
        type: 'grammar-table',
        title: 'Possessive Pronouns',
        headers: ['Dutch', 'English', 'Example'],
        audioColumns: [0],
        rows: [
          ['mijn', 'my', 'mijn vader (my father)'],
          ['jouw / je', 'your (informal)', 'jouw broer (your brother)'],
          ['uw', 'your (formal)', 'uw zoon (your son)'],
          ['zijn', 'his', 'zijn moeder (his mother)'],
          ['haar', 'her', 'haar zus (her sister)'],
          ['ons / onze', 'our', 'onze familie (our family)'],
        ],
      },
      {
        type: 'workplace-context',
        scenario: 'Small talk about family at work',
        examples: [
          { dutch: 'Heb je broers of zussen?', english: 'Do you have brothers or sisters?', highlight: ['broers', 'zussen'] },
          { dutch: 'Ik ben getrouwd.', english: 'I am married.', highlight: ['getrouwd'] },
          { dutch: 'Mijn dochter gaat naar school.', english: 'My daughter goes to school.', highlight: ['dochter'] },
          { dutch: 'Hoe oud zijn je kinderen?', english: 'How old are your children?', highlight: ['Hoe oud', 'kinderen'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Ik heb twee zussen en een broeren.',
            correct: 'Ik heb twee zussen en een broer.',
            explanation:
              '"Broer" is singular. The plural is "broers." With "een" (one), use the singular form: "een broer."',
          },
          {
            incorrect: 'Mijn nicht is mijn uncle\'s daughter.',
            correct: 'Mijn nicht is de dochter van mijn oom.',
            explanation:
              'Dutch doesn\'t use \'s for possession the way English does. Use "van" (of): "de dochter van mijn oom" (my uncle\'s daughter).',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-family-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct translation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is "de broer" in English?',
            options: ['sister', 'brother', 'father', 'son'],
            correctIndex: 1,
            explanation: 'De broer = brother. De zus = sister, de vader = father, de zoon = son.',
          },
          {
            question: 'What does "de oma" mean?',
            options: ['aunt', 'mother', 'grandmother', 'sister'],
            correctIndex: 2,
            explanation: 'De oma = grandmother. De tante = aunt, de moeder = mother, de zus = sister.',
          },
          {
            question: 'How do you say "my wife" in Dutch?',
            options: ['mijn vriendin', 'mijn vrouw', 'mijn zus', 'mijn moeder'],
            correctIndex: 1,
            explanation: 'Mijn vrouw = my wife. Mijn vriendin = my girlfriend, mijn zus = my sister.',
          },
          {
            question: 'What is special about the word "neef"?',
            options: [
              'It means both nephew and male cousin',
              'It means uncle',
              'It is a het-word',
              'It has no plural form',
            ],
            correctIndex: 0,
            explanation:
              '"Neef" means both nephew AND male cousin. Similarly, "nicht" means both niece AND female cousin.',
          },
        ],
      },
    },
    {
      id: 'a0-family-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct family word.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Mijn', after: 'heet Anna. (mother)', correctAnswer: 'moeder', hint: 'mama' },
          { before: 'Ik heb twee', after: '. (brothers)', correctAnswer: 'broers', hint: 'plural of broer' },
          { before: 'Heb je', after: '? (children)', correctAnswer: 'kinderen', hint: 'plural of kind' },
        ],
      },
    },
    {
      id: 'a0-family-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['twee', 'heb', 'en', 'Ik', 'zussen', 'broer', 'een', '.'],
            correctOrder: ['Ik', 'heb', 'twee', 'zussen', 'en', 'een', 'broer', '.'],
            translation: 'I have two sisters and a brother.',
          },
          {
            shuffledWords: ['heet', 'vader', 'Mijn', 'Jan', '.'],
            correctOrder: ['Mijn', 'vader', 'heet', 'Jan', '.'],
            translation: 'My father is called Jan.',
          },
        ],
      },
    },
    {
      id: 'a0-family-translation-1',
      type: 'translation',
      instruction: 'Translate into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'Do you have brothers or sisters?',
            correctDutch: 'Heb je broers of zussen?',
            keyVocabulary: [
              { dutch: 'broers', english: 'brothers' },
              { dutch: 'zussen', english: 'sisters' },
            ],
          },
          {
            english: 'My grandfather lives in Amsterdam.',
            correctDutch: 'Mijn opa woont in Amsterdam.',
            keyVocabulary: [
              { dutch: 'de opa', english: 'grandfather' },
              { dutch: 'wonen', english: 'to live' },
            ],
          },
        ],
      },
    },
    {
      id: 'a0-family-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct translation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What does "de tante" mean?',
            options: ['grandmother', 'aunt', 'niece', 'cousin'],
            correctIndex: 1,
            explanation: 'De tante = aunt. De oma = grandmother, de nicht = niece/female cousin.',
          },
          {
            question: 'What is "de schoonouders" in English?',
            options: ['grandparents', 'parents-in-law', 'stepparents', 'godparents'],
            correctIndex: 1,
            explanation: 'De schoonouders = parents-in-law. "Schoon-" is the prefix for in-law family members.',
          },
          {
            question: 'How do you say "children" in Dutch?',
            options: ['kinds', 'kinders', 'kinderen', 'kindes'],
            correctIndex: 2,
            explanation: 'Kinderen is the plural of "het kind" (child). It is an irregular plural.',
          },
          {
            question: 'What can "nicht" mean in Dutch?',
            options: [
              'only niece',
              'only female cousin',
              'both niece and female cousin',
              'aunt',
            ],
            correctIndex: 2,
            explanation: '"Nicht" means both niece AND female cousin. Context determines which meaning is intended.',
          },
        ],
      },
    },
    {
      id: 'a0-family-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct option to complete the sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De dochter ___ mijn oom is mijn nicht.',
            options: ['van', 'voor', 'met', 'bij'],
            correctIndex: 0,
            explanation: 'Use "van" to express possession in Dutch: "de dochter van mijn oom" (my uncle\'s daughter).',
          },
          {
            question: '___ broer woont in Rotterdam.',
            options: ['Mij', 'Mijn', 'Me', 'Ik'],
            correctIndex: 1,
            explanation: '"Mijn" is the possessive pronoun meaning "my": "Mijn broer" (my brother).',
          },
          {
            question: 'Dat zijn ___ ouders. (her)',
            options: ['zijn', 'haar', 'hun', 'je'],
            correctIndex: 1,
            explanation: '"Haar" = her. "Haar ouders" = her parents. "Zijn" = his, "hun" = their.',
          },
          {
            question: 'Mijn opa en oma zijn mijn ___.',
            options: ['ouders', 'grootouders', 'schoonouders', 'kinderen'],
            correctIndex: 1,
            explanation: 'Grootouders = grandparents. Opa (grandfather) and oma (grandmother) are your grootouders.',
          },
        ],
      },
    },
    {
      id: 'a0-family-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct possessive pronoun or family word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Dit is',
            after: 'zus. (his)',
            correctAnswer: 'zijn',
            hint: 'possessive pronoun for "he"',
          },
          {
            before: 'De moeder',
            after: 'Jan is aardig.',
            correctAnswer: 'van',
            hint: 'Dutch word for possession (like English "of")',
          },
          {
            before: 'Mijn broer heeft drie',
            after: '. (daughters)',
            correctAnswer: 'dochters',
            hint: 'plural of dochter',
          },
        ],
      },
    },
    {
      id: 'a0-family-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct family member.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De broer van mijn moeder is mijn',
            after: '.',
            correctAnswer: 'oom',
            acceptableAnswers: ['oom'],
          },
          {
            before: 'De zoon van mijn oom is mijn',
            after: '.',
            correctAnswer: 'neef',
            acceptableAnswers: ['neef'],
          },
          {
            before: 'De moeder van mijn vader is mijn',
            after: '.',
            correctAnswer: 'oma',
            acceptableAnswers: ['oma', 'grootmoeder'],
          },
        ],
      },
    },
    {
      id: 'a0-family-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['van', 'De', 'zus', 'heet', 'mijn', 'vader', 'Lisa', '.'],
            correctOrder: ['De', 'zus', 'van', 'mijn', 'vader', 'heet', 'Lisa', '.'],
            translation: 'My father\'s sister is called Lisa.',
          },
          {
            shuffledWords: ['haar', 'woont', 'Haar', 'in', 'oom', 'Den Haag', '.'],
            correctOrder: ['Haar', 'oom', 'woont', 'in', 'Den Haag', '.'],
            translation: 'Her uncle lives in The Hague.',
          },
        ],
      },
    },
    {
      id: 'a0-family-error-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Dat is mijn vader\'s auto.',
            correctedSentence: 'Dat is de auto van mijn vader.',
            errorExplanation: 'Dutch does not use the English possessive \'s in this way. Use "van" instead: "de auto van mijn vader."',
          },
          {
            incorrectSentence: 'Ik heb twee zussen en een broeren.',
            correctedSentence: 'Ik heb twee zussen en een broer.',
            errorExplanation: 'With "een" (one), use the singular form "broer," not the plural "broeren." The correct plural is "broers."',
          },
          {
            incorrectSentence: 'Haar kindes zijn op school.',
            correctedSentence: 'Haar kinderen zijn op school.',
            errorExplanation: 'The plural of "kind" is "kinderen" (irregular plural), not "kindes."',
          },
        ],
      },
    },
  ],
};
