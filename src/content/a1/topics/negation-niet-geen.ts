import { Topic } from '@/content/types';

export const negationNietGeen: Topic = {
  id: 'negation-niet-geen',
  levelId: 'a1',
  title: 'Negation: Niet and Geen',
  subtitle: 'Ontkenning: niet en geen',
  order: 6,
  estimatedMinutes: 30,
  prerequisites: ['de-het-articles', 'hebben-zijn'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Two Ways to Say "Not" in Dutch',
        rule: 'Dutch has two main negation words: "niet" (not) and "geen" (no / not a / not any). The choice between them depends on what you are negating.',
        explanation:
          'This is one of the trickiest parts of Dutch grammar for learners. In English, you mostly use "not" for everything, but Dutch requires you to choose between "niet" and "geen". The key rule is: use "geen" when you would negate an indefinite noun (with "een" or no article), and use "niet" for everything else.',
      },
      {
        type: 'grammar-rule',
        title: 'When to Use "Geen"',
        rule: '"Geen" replaces the indefinite article "een" or negates bare nouns (nouns without an article). Think of "geen" as "not a" or "no".',
        explanation:
          '"Ik heb een auto" becomes "Ik heb geen auto." "Ik heb geld" (I have money) becomes "Ik heb geen geld." "Geen" is also used with plural nouns that have no article: "Ik heb kinderen" becomes "Ik heb geen kinderen."',
      },
      {
        type: 'examples',
        title: 'Examples with "Geen"',
        examples: [
          { dutch: 'Ik heb geen auto.', english: 'I do not have a car.', highlight: ['geen'], note: '"een auto" becomes "geen auto"' },
          { dutch: 'Zij heeft geen kinderen.', english: 'She does not have children.', highlight: ['geen'], note: 'Bare plural noun' },
          { dutch: 'Wij hebben geen tijd.', english: 'We do not have time.', highlight: ['geen'], note: 'Bare noun (uncountable)' },
          { dutch: 'Er is geen melk.', english: 'There is no milk.', highlight: ['geen'], note: 'Bare noun (uncountable)' },
          { dutch: 'Ik heb geen zin.', english: 'I don\'t feel like it.', highlight: ['geen'], note: '"zin" without article' },
          { dutch: 'Hij heeft geen ervaring.', english: 'He has no experience.', highlight: ['geen'] },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'When to Use "Niet"',
        rule: '"Niet" is used in all other cases: with definite nouns (de/het), verbs, adjectives, adverbs, and prepositional phrases.',
        explanation:
          'Use "niet" when the noun has a definite article (de/het), a possessive pronoun (mijn, jouw), or a demonstrative (deze, dit). Also use "niet" to negate verbs, adjectives, adverbs, and prepositional phrases.',
      },
      {
        type: 'grammar-table',
        title: 'Geen vs. Niet: Quick Reference',
        headers: ['Use "Geen"', 'Use "Niet"'],
        rows: [
          ['Before nouns with "een"', 'With definite nouns (de/het/mijn/deze)'],
          ['Before bare nouns (no article)', 'With verbs'],
          ['Before plural nouns without article', 'With adjectives'],
          ['', 'With adverbs'],
          ['', 'With prepositional phrases'],
        ],
        caption: 'Rule of thumb: "geen" replaces "een" or negates bare nouns. "Niet" handles everything else.',
      },
      {
        type: 'grammar-rule',
        title: 'Position of "Niet" in a Sentence',
        rule: '"Niet" goes at the END of the sentence in most cases. But it goes BEFORE the element you want to negate: before adjectives, prepositional phrases, adverbs, and specific words you want to emphasize.',
        explanation:
          'Default position: end of the sentence ("Ik werk niet."). Before adjectives: "Ik ben niet moe." Before prepositional phrases: "Ik ga niet naar huis." Before adverbs: "Hij komt niet vaak." Before specific negation: "Ik drink niet koffie, maar thee." (I don\'t drink coffee, but tea.)',
      },
      {
        type: 'examples',
        title: 'Position of "Niet"',
        examples: [
          { dutch: 'Ik werk niet.', english: 'I do not work.', highlight: ['niet'], note: 'End of sentence (negating the verb)' },
          { dutch: 'Ik ben niet moe.', english: 'I am not tired.', highlight: ['niet'], note: 'Before adjective "moe"' },
          { dutch: 'Ik ga niet naar huis.', english: 'I am not going home.', highlight: ['niet'], note: 'Before prepositional phrase' },
          { dutch: 'Hij komt niet vaak.', english: 'He does not come often.', highlight: ['niet'], note: 'Before adverb "vaak"' },
          { dutch: 'Ik ken hem niet.', english: 'I do not know him.', highlight: ['niet'], note: 'End of sentence' },
          { dutch: 'Dat is niet waar.', english: 'That is not true.', highlight: ['niet'], note: 'Before adjective "waar"' },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Negation at Work',
        scenario: 'Discussing tasks, availability, and skills at the office',
        examples: [
          { dutch: 'Ik heb geen ervaring met dit programma.', english: 'I have no experience with this program.', highlight: ['geen'] },
          { dutch: 'De manager is niet aanwezig.', english: 'The manager is not present.', highlight: ['niet'] },
          { dutch: 'Wij hebben geen vergadering vandaag.', english: 'We do not have a meeting today.', highlight: ['geen'] },
          { dutch: 'Het rapport is niet klaar.', english: 'The report is not ready.', highlight: ['niet'] },
          { dutch: 'Ik heb geen vragen.', english: 'I have no questions.', highlight: ['geen'] },
          { dutch: 'Zij werkt niet op vrijdag.', english: 'She does not work on Friday.', highlight: ['niet'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Ik heb niet een auto.',
            correct: 'Ik heb geen auto.',
            explanation: 'When negating a noun with "een", always use "geen" (not "niet een").',
          },
          {
            incorrect: 'Ik heb niet geld.',
            correct: 'Ik heb geen geld.',
            explanation: 'Bare nouns (without an article) are negated with "geen", not "niet".',
          },
          {
            incorrect: 'Ik ben geen moe.',
            correct: 'Ik ben niet moe.',
            explanation: '"Geen" is only for nouns. Adjectives are negated with "niet".',
          },
          {
            incorrect: 'Ik ga geen naar huis.',
            correct: 'Ik ga niet naar huis.',
            explanation: 'Prepositional phrases are negated with "niet", not "geen".',
          },
        ],
      },
      {
        type: 'note',
        title: 'Tip: "Geen" = "Not a / No"',
        content:
          'A helpful trick: if you can say "no" or "not a / not any" in English, use "geen" in Dutch. If you would say "not" in English, use "niet" in Dutch. "I have no car" = "Ik heb geen auto." "I am not tired" = "Ik ben niet moe."',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-neg-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose "niet" or "geen" to complete the sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik heb ___ auto.',
            options: ['niet', 'geen'],
            correctIndex: 1,
            explanation: '"Auto" is a noun with an implied "een". Use "geen" to replace "een auto".',
          },
          {
            question: 'Zij is ___ ziek.',
            options: ['niet', 'geen'],
            correctIndex: 0,
            explanation: '"Ziek" is an adjective. Use "niet" before adjectives.',
          },
          {
            question: 'Wij hebben ___ tijd.',
            options: ['niet', 'geen'],
            correctIndex: 1,
            explanation: '"Tijd" is a bare noun (no article). Use "geen" to negate bare nouns.',
          },
        ],
      },
    },
    {
      id: 'a1-neg-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct negation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik ga ___ naar kantoor.',
            options: ['niet', 'geen'],
            correctIndex: 0,
            explanation: '"Naar kantoor" is a prepositional phrase. Use "niet" before prepositional phrases.',
          },
          {
            question: 'Hij heeft ___ kinderen.',
            options: ['niet', 'geen'],
            correctIndex: 1,
            explanation: '"Kinderen" is a bare plural noun. Use "geen" for bare nouns.',
          },
          {
            question: 'De koffie is ___ lekker.',
            options: ['niet', 'geen'],
            correctIndex: 0,
            explanation: '"Lekker" is an adjective. Use "niet" before adjectives.',
          },
        ],
      },
    },
    {
      id: 'a1-neg-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "niet" or "geen".',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik heb', after: 'broer.', correctAnswer: 'geen', hint: 'negating a noun with implied "een"' },
          { before: 'Hij werkt', after: '.', correctAnswer: 'niet', hint: 'negating a verb, end of sentence' },
          { before: 'Wij zijn', after: 'klaar.', correctAnswer: 'niet', hint: 'negating an adjective' },
          { before: 'Zij heeft', after: 'geld.', correctAnswer: 'geen', hint: 'negating a bare noun' },
        ],
      },
    },
    {
      id: 'a1-neg-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "niet" or "geen".',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De manager is', after: 'aanwezig.', correctAnswer: 'niet', hint: 'negating an adjective' },
          { before: 'Ik heb', after: 'ervaring met Excel.', correctAnswer: 'geen', hint: 'negating a bare noun' },
          { before: 'Het rapport is', after: 'klaar.', correctAnswer: 'niet', hint: '"het rapport" is definite' },
          { before: 'Er zijn', after: 'problemen.', correctAnswer: 'geen', hint: 'negating a bare plural noun' },
        ],
      },
    },
    {
      id: 'a1-neg-mc-3',
      type: 'multiple-choice',
      instruction: 'Which sentence is correct?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "I don\'t have a car"?',
            options: ['Ik heb niet een auto.', 'Ik heb geen auto.', 'Ik niet heb auto.', 'Ik geen heb auto.'],
            correctIndex: 1,
            explanation: '"Geen" replaces "een" when negating: "een auto" becomes "geen auto".',
          },
          {
            question: 'How do you say "I am not going home"?',
            options: ['Ik ga geen naar huis.', 'Ik ga naar huis niet.', 'Ik ga niet naar huis.', 'Ik niet ga naar huis.'],
            correctIndex: 2,
            explanation: '"Niet" goes before a prepositional phrase: "niet naar huis".',
          },
          {
            question: 'How do you say "She does not work on Monday"?',
            options: ['Zij werkt geen op maandag.', 'Zij niet werkt op maandag.', 'Zij werkt op maandag niet.', 'Zij werkt niet op maandag.'],
            correctIndex: 3,
            explanation: '"Niet" goes before the prepositional phrase "op maandag".',
          },
        ],
      },
    },
    {
      id: 'a1-neg-err-1',
      type: 'error-correction',
      instruction: 'Find and correct the negation error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik heb niet een hond.',
            correctedSentence: 'Ik heb geen hond.',
            errorExplanation: 'Use "geen" (not "niet een") when negating a noun with the indefinite article.',
          },
          {
            incorrectSentence: 'Zij is geen blij.',
            correctedSentence: 'Zij is niet blij.',
            errorExplanation: '"Blij" (happy) is an adjective. Adjectives are negated with "niet", not "geen".',
          },
          {
            incorrectSentence: 'Wij gaan geen naar de vergadering.',
            correctedSentence: 'Wij gaan niet naar de vergadering.',
            errorExplanation: 'Prepositional phrases are negated with "niet", not "geen".',
          },
        ],
      },
    },
    {
      id: 'a1-neg-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a negative sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['geen', 'heb', 'Ik', 'tijd', '.'],
            correctOrder: ['Ik', 'heb', 'geen', 'tijd', '.'],
            translation: 'I have no time.',
          },
          {
            shuffledWords: ['niet', 'is', 'De', 'manager', 'aanwezig', '.'],
            correctOrder: ['De', 'manager', 'is', 'niet', 'aanwezig', '.'],
            translation: 'The manager is not present.',
          },
          {
            shuffledWords: ['werk', 'niet', 'Ik', 'vandaag', '.'],
            correctOrder: ['Ik', 'werk', 'vandaag', 'niet', '.'],
            translation: 'I do not work today.',
          },
        ],
      },
    },
    {
      id: 'a1-neg-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct negation word ("niet" or "geen").',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik spreek', after: 'goed Nederlands.', correctAnswer: 'niet', hint: 'negating adverb "goed"' },
          { before: 'Wij hebben', after: 'vragen.', correctAnswer: 'geen', hint: 'negating a bare plural noun' },
          { before: 'Het is', after: 'ver.', correctAnswer: 'niet', hint: 'negating adjective "ver"' },
          { before: 'Hij heeft', after: 'computer.', correctAnswer: 'geen', hint: 'negating noun with implied "een"' },
        ],
      },
    },
    {
      id: 'a1-neg-trans-1',
      type: 'translation',
      instruction: 'Translate the following negative sentences into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I do not have experience with this program.',
            correctDutch: 'Ik heb geen ervaring met dit programma.',
            keyVocabulary: [
              { dutch: 'ervaring', english: 'experience' },
              { dutch: 'programma', english: 'program' },
            ],
          },
          {
            english: 'The report is not ready.',
            correctDutch: 'Het rapport is niet klaar.',
            keyVocabulary: [
              { dutch: 'rapport', english: 'report' },
              { dutch: 'klaar', english: 'ready' },
            ],
          },
          {
            english: 'We do not have a meeting today.',
            correctDutch: 'Wij hebben geen vergadering vandaag.',
            acceptableAnswers: ['We hebben geen vergadering vandaag.', 'We hebben vandaag geen vergadering.'],
            keyVocabulary: [
              { dutch: 'vergadering', english: 'meeting' },
              { dutch: 'vandaag', english: 'today' },
            ],
          },
        ],
      },
    },
    {
      id: 'a1-neg-mc-4',
      type: 'multiple-choice',
      instruction: 'Where should "niet" go in this sentence?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Place "niet" correctly: "Ik ben ___ moe ___."',
            options: ['Ik ben moe niet.', 'Ik niet ben moe.', 'Ik ben niet moe.', 'Niet ik ben moe.'],
            correctIndex: 2,
            explanation: '"Niet" goes before the adjective "moe": "Ik ben niet moe."',
          },
          {
            question: 'Place "niet" correctly: "Hij gaat ___ naar school ___."',
            options: ['Hij gaat naar school niet.', 'Hij niet gaat naar school.', 'Hij gaat niet naar school.', 'Niet hij gaat naar school.'],
            correctIndex: 2,
            explanation: '"Niet" goes before the prepositional phrase "naar school": "Hij gaat niet naar school."',
          },
          {
            question: 'Place "niet" correctly: "Ik ken ___ haar ___."',
            options: ['Ik niet ken haar.', 'Ik ken niet haar.', 'Ik ken haar niet.', 'Niet ik ken haar.'],
            correctIndex: 2,
            explanation: 'When negating the entire sentence (verb + object), "niet" goes at the end: "Ik ken haar niet."',
          },
        ],
      },
    },
    {
      id: 'a1-neg-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Make the sentence negative by filling in "niet" or "geen" in the correct position.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik drink', after: 'koffie.', correctAnswer: 'geen', hint: 'koffie = bare noun' },
          { before: 'Het kantoor is', after: 'groot.', correctAnswer: 'niet', hint: 'groot = adjective' },
          { before: 'Zij hebben', after: 'pauze gehad.', correctAnswer: 'geen', hint: 'pauze = bare noun' },
        ],
      },
    },
    {
      id: 'a1-neg-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['spreek', 'niet', 'goed', 'Ik', 'Nederlands', '.'],
            correctOrder: ['Ik', 'spreek', 'niet', 'goed', 'Nederlands', '.'],
            translation: 'I do not speak Dutch well.',
          },
          {
            shuffledWords: ['geen', 'heeft', 'Hij', 'ervaring', 'met', 'Python', '.'],
            correctOrder: ['Hij', 'heeft', 'geen', 'ervaring', 'met', 'Python', '.'],
            translation: 'He has no experience with Python.',
          },
        ],
      },
    },
  ],
};
