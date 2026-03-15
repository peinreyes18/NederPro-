import { Topic } from '@/content/types';

export const erIsErZijn: Topic = {
  id: 'er-is-er-zijn',
  levelId: 'a0',
  title: 'Er is / Er zijn',
  subtitle: 'There is / There are — the Dutch existential construction',
  order: 11,
  estimatedMinutes: 20,
  prerequisites: ['basic-prepositions'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Er is and er zijn',
        rule: 'Use er is to say "there is" (singular) and er zijn to say "there are" (plural).',
        explanation:
          'Er is a small but essential Dutch word. In its most basic use, it functions like English "there" in "there is/are". Er is fills the subject position in the sentence. This construction is used to announce the existence of something or someone.',
      },
      {
        type: 'grammar-table',
        title: 'Er is vs Er zijn',
        headers: ['Construction', 'Use', 'Example'],
        rows: [
          ['er is', 'one thing / singular noun', 'Er is een probleem. — There is a problem.'],
          ['er zijn', 'more than one / plural noun', 'Er zijn drie kamers. — There are three rooms.'],
          ['er is geen', 'there is no (singular)', 'Er is geen melk. — There is no milk.'],
          ['er zijn geen', 'there are no (plural)', 'Er zijn geen stoelen. — There are no chairs.'],
        ],
      },
      {
        type: 'examples',
        title: 'Er is / er zijn in everyday sentences',
        examples: [
          {
            dutch: 'Er is een supermarkt in de buurt.',
            english: 'There is a supermarket nearby.',
            highlight: ['Er is'],
          },
          {
            dutch: 'Er zijn twee badkamers in het huis.',
            english: 'There are two bathrooms in the house.',
            highlight: ['Er zijn'],
          },
          {
            dutch: 'Er is geen parkeerplaats.',
            english: 'There is no parking.',
            highlight: ['Er is', 'geen'],
          },
          {
            dutch: 'Er zijn veel mensen op straat.',
            english: 'There are many people on the street.',
            highlight: ['Er zijn'],
          },
          {
            dutch: 'Is er een dokter in de buurt?',
            english: 'Is there a doctor nearby?',
            highlight: ['er', 'een'],
            note: 'In questions, er moves after the verb: Is er...?',
          },
          {
            dutch: 'Zijn er stoelen genoeg?',
            english: 'Are there enough chairs?',
            highlight: ['er'],
            note: 'In questions: Zijn er...?',
          },
        ],
      },
      {
        type: 'note',
        title: 'Questions with er',
        content:
          'In yes/no questions, the verb moves to the front and er comes after it: "Er is een bus." → "Is er een bus?" / "Er zijn plaatsen." → "Zijn er plaatsen?" This is regular Dutch inversion — the subject (er) moves after the verb.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Er zijn een probleem.',
            correct: 'Er is een probleem.',
            explanation: 'een probleem is singular → use er is, not er zijn.',
          },
          {
            incorrect: 'Er is drie stoelen.',
            correct: 'Er zijn drie stoelen.',
            explanation: 'drie stoelen is plural → use er zijn.',
          },
          {
            incorrect: 'Is er geen stoelen?',
            correct: 'Zijn er geen stoelen?',
            explanation: 'stoelen is plural → Zijn er geen stoelen?',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Er is / er zijn in practical situations',
        scenario: 'These constructions come up constantly — at the housing agency, at work, at the doctor.',
        examples: [
          {
            dutch: 'Er is een vergadering om 10 uur.',
            english: 'There is a meeting at 10 o\'clock.',
            highlight: ['Er is'],
          },
          {
            dutch: 'Er zijn geen vrije plekken meer.',
            english: 'There are no more free spots.',
            highlight: ['Er zijn', 'geen'],
          },
          {
            dutch: 'Is er een toilet op deze verdieping?',
            english: 'Is there a toilet on this floor?',
            highlight: ['er'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-er-is-er-zijn-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose er is or er zijn.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ een supermarkt op de hoek.',
            options: ['Er is', 'Er zijn'],
            correctIndex: 0,
            explanation: 'een supermarkt = singular → er is.',
          },
          {
            question: '___ veel fietsen buiten.',
            options: ['Er is', 'Er zijn'],
            correctIndex: 1,
            explanation: 'veel fietsen = plural → er zijn.',
          },
          {
            question: '___ drie slaapkamers in het huis.',
            options: ['Er is', 'Er zijn'],
            correctIndex: 1,
            explanation: 'drie slaapkamers = plural → er zijn.',
          },
          {
            question: '___ geen melk in de koelkast.',
            options: ['Er is', 'Er zijn'],
            correctIndex: 0,
            explanation: 'melk is uncountable/singular → er is geen melk.',
          },
        ],
      },
    },
    {
      id: 'a0-er-is-er-zijn-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in er is or er zijn.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'een probleem met de computer.',
            correctAnswer: 'Er is',
            hint: 'een probleem = singular',
          },
          {
            before: '',
            after: 'tien studenten in de klas.',
            correctAnswer: 'Er zijn',
            hint: 'tien studenten = plural',
          },
          {
            before: '',
            after: 'geen parkeerplaatsen hier.',
            correctAnswer: 'Er zijn',
            hint: 'parkeerplaatsen = plural',
          },
        ],
      },
    },
    {
      id: 'a0-er-is-er-zijn-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct question form.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Is there a bus stop nearby?',
            options: ['Er is een bushalte in de buurt?', 'Is er een bushalte in de buurt?', 'Zijn er een bushalte in de buurt?'],
            correctIndex: 1,
            explanation: 'In questions, the verb comes first: Is er een bushalte...?',
          },
          {
            question: 'Are there any free rooms?',
            options: ['Is er vrije kamers?', 'Zijn er vrije kamers?', 'Er zijn vrije kamers?'],
            correctIndex: 1,
            explanation: 'vrije kamers is plural → Zijn er...?',
          },
        ],
      },
    },
    {
      id: 'a0-er-is-er-zijn-wo-1',
      type: 'word-order',
      instruction: 'Form a correct Dutch sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['een', 'is', 'er', 'ziekenhuis', 'hier'],
            correctOrder: ['Er', 'is', 'een', 'ziekenhuis', 'hier.'],
            translation: 'There is a hospital here.',
          },
          {
            shuffledWords: ['geen', 'zijn', 'stoelen', 'er', 'meer'],
            correctOrder: ['Er', 'zijn', 'geen', 'stoelen', 'meer.'],
            translation: 'There are no more chairs.',
          },
          {
            shuffledWords: ['er', 'is', 'een', 'vergadering', 'morgen'],
            correctOrder: ['Er', 'is', 'een', 'vergadering', 'morgen.'],
            translation: 'There is a meeting tomorrow.',
          },
        ],
      },
    },
  ],
};
