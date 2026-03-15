import { Topic } from '@/content/types';

export const basicPrepositions: Topic = {
  id: 'basic-prepositions',
  levelId: 'a0',
  title: 'Basic Prepositions',
  subtitle: 'Voorzetsels — in, op, aan, bij, naar, van, met, voor',
  order: 10,
  estimatedMinutes: 25,
  prerequisites: ['colors-descriptions'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What are prepositions?',
        rule: 'Prepositions are small words that show the relationship between nouns — location, direction, time, or manner. They come before a noun or pronoun.',
        explanation:
          'Dutch prepositions do not change form based on the gender of the noun that follows. This makes them easier than in some other languages. The eight most common beginner prepositions are: in, op, aan, bij, naar, van, met, voor.',
      },
      {
        type: 'grammar-table',
        title: 'The 8 Essential Prepositions',
        headers: ['Dutch', 'English', 'Example'],
        rows: [
          ['in', 'in / inside', 'in de kamer — in the room'],
          ['op', 'on / at (location)', 'op tafel — on the table'],
          ['aan', 'on / at (attached/side)', 'aan de muur — on the wall'],
          ['bij', 'at / near / with', 'bij de dokter — at the doctor\'s'],
          ['naar', 'to (direction)', 'naar huis — to (the) home'],
          ['van', 'from / of', 'van Amsterdam — from Amsterdam'],
          ['met', 'with', 'met mijn collega — with my colleague'],
          ['voor', 'for / in front of', 'voor de deur — in front of the door'],
        ],
      },
      {
        type: 'examples',
        title: 'Prepositions in context',
        examples: [
          {
            dutch: 'Ik woon in Amsterdam.',
            english: 'I live in Amsterdam.',
            highlight: ['in'],
          },
          {
            dutch: 'De sleutels liggen op tafel.',
            english: 'The keys are on the table.',
            highlight: ['op'],
          },
          {
            dutch: 'Het schilderij hangt aan de muur.',
            english: 'The painting hangs on the wall.',
            highlight: ['aan'],
          },
          {
            dutch: 'Ik ga naar de supermarkt.',
            english: 'I am going to the supermarket.',
            highlight: ['naar'],
          },
          {
            dutch: 'Ik kom van Rotterdam.',
            english: 'I come from Rotterdam.',
            highlight: ['van'],
          },
          {
            dutch: 'Ik fiets met mijn vriend.',
            english: 'I cycle with my friend.',
            highlight: ['met'],
          },
        ],
      },
      {
        type: 'note',
        title: 'in vs op vs aan',
        content:
          'These three can be confusing. In general: in = enclosed space (in the box, in the city). Op = surface or platform (on the table, on the floor). Aan = attached to a surface or edge (on the wall, at the table for sitting). Examples: in de doos (in the box), op de tafel (on the table), aan de muur (on the wall), aan tafel zitten (to sit at the table).',
        variant: 'tip',
      },
      {
        type: 'note',
        title: 'naar = direction only',
        content:
          'Use naar only when you are going/moving somewhere: Ik ga naar school. Do NOT use naar for location (where you already are). For location, use in, op, bij, or aan: Ik ben op school (I am at school).',
        variant: 'warning',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Ik ben naar huis.',
            correct: 'Ik ben thuis. / Ik ga naar huis.',
            explanation: 'naar indicates movement. When you are already home, say "thuis". Use "naar huis gaan" for going home.',
          },
          {
            incorrect: 'Het ligt in de tafel.',
            correct: 'Het ligt op de tafel.',
            explanation: 'Use op for objects resting on a surface, not in.',
          },
          {
            incorrect: 'Ik werk met kantoor.',
            correct: 'Ik werk op kantoor.',
            explanation: 'op kantoor = at the office (location). met = with (a person or thing).',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Prepositions at work',
        scenario: 'You will use these prepositions constantly in everyday and work situations.',
        examples: [
          {
            dutch: 'De vergadering is in zaal drie.',
            english: 'The meeting is in room three.',
            highlight: ['in'],
          },
          {
            dutch: 'Ik werk bij een groot bedrijf.',
            english: 'I work at a large company.',
            highlight: ['bij'],
          },
          {
            dutch: 'Het formulier ligt op mijn bureau.',
            english: 'The form is on my desk.',
            highlight: ['op'],
          },
          {
            dutch: 'De afspraak is voor drie uur.',
            english: 'The appointment is before three o\'clock.',
            highlight: ['voor'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-basic-prepositions-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct preposition.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik woon ___ Utrecht.',
            options: ['op', 'in', 'aan', 'naar'],
            correctIndex: 1,
            explanation: 'in = inside a city or enclosed space.',
          },
          {
            question: 'De sleutels liggen ___ tafel.',
            options: ['in', 'aan', 'op', 'van'],
            correctIndex: 2,
            explanation: 'op = on a surface.',
          },
          {
            question: 'Ik ga ___ school.',
            options: ['bij', 'in', 'op', 'naar'],
            correctIndex: 3,
            explanation: 'naar = direction/movement toward.',
          },
          {
            question: 'Zij werkt ___ een ziekenhuis.',
            options: ['naar', 'bij', 'aan', 'voor'],
            correctIndex: 1,
            explanation: 'bij = at (a place of work or institution).',
          },
        ],
      },
    },
    {
      id: 'a0-basic-prepositions-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct preposition: in, op, aan, bij, naar, van, met, voor.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het schilderij hangt',
            after: 'de muur.',
            correctAnswer: 'aan',
            hint: 'attached to a vertical surface = aan',
          },
          {
            before: 'Ik kom',
            after: 'Polen.',
            correctAnswer: 'van',
            hint: 'from = van',
          },
          {
            before: 'Ik fiets',
            after: 'mijn collega naar het werk.',
            correctAnswer: 'met',
            hint: 'with = met',
          },
        ],
      },
    },
    {
      id: 'a0-basic-prepositions-mc-2',
      type: 'multiple-choice',
      instruction: 'in, op, or aan?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De lamp hangt ___ het plafond.',
            options: ['in', 'op', 'aan'],
            correctIndex: 2,
            explanation: 'aan = attached/hanging from a surface.',
          },
          {
            question: 'Het boek ligt ___ de stoel.',
            options: ['in', 'op', 'aan'],
            correctIndex: 1,
            explanation: 'op = resting on a surface.',
          },
          {
            question: 'De kat zit ___ de doos.',
            options: ['in', 'op', 'aan'],
            correctIndex: 0,
            explanation: 'in = inside an enclosed space.',
          },
        ],
      },
    },
    {
      id: 'a0-basic-prepositions-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['supermarkt', 'naar', 'ga', 'ik', 'de'],
            correctOrder: ['Ik', 'ga', 'naar', 'de', 'supermarkt.'],
            translation: 'I am going to the supermarket.',
          },
          {
            shuffledWords: ['bureau', 'mijn', 'op', 'ligt', 'het', 'formulier'],
            correctOrder: ['Het', 'formulier', 'ligt', 'op', 'mijn', 'bureau.'],
            translation: 'The form is on my desk.',
          },
          {
            shuffledWords: ['mijn', 'met', 'fiets', 'vriend', 'ik'],
            correctOrder: ['Ik', 'fiets', 'met', 'mijn', 'vriend.'],
            translation: 'I cycle with my friend.',
          },
        ],
      },
    },
    {
      id: 'a0-basic-prepositions-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete these sentences with the right preposition.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De vergadering is',
            after: 'zaal twee.',
            correctAnswer: 'in',
            hint: 'in = inside a room',
          },
          {
            before: 'Dit pakket is',
            after: 'u.',
            correctAnswer: 'voor',
            hint: 'for = voor',
          },
          {
            before: 'Ik ga morgen',
            after: 'de dokter.',
            correctAnswer: 'naar',
            hint: 'going to = naar',
          },
        ],
      },
    },
  ],
};
