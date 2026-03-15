import { Topic } from '@/content/types';

export const possessivePronouns: Topic = {
  id: 'possessive-pronouns',
  levelId: 'a0',
  title: 'Possessive Pronouns',
  subtitle: 'Bezittelijke voornaamwoorden — mijn, jouw, zijn, haar…',
  order: 9,
  estimatedMinutes: 25,
  prerequisites: ['family-members'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What are possessive pronouns?',
        rule: 'Possessive pronouns show who something belongs to. In Dutch: mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun.',
        explanation:
          'Dutch possessive pronouns are simpler than verb conjugation — they do not change based on de/het gender in most cases. The main exception is ons (we) vs onze: use ons before het-words and onze before de-words and plurals.',
      },
      {
        type: 'grammar-table',
        title: 'Possessive Pronouns Overview',
        headers: ['Subject pronoun', 'Possessive', 'Example'],
        rows: [
          ['ik', 'mijn', 'mijn naam — my name'],
          ['jij / je', 'jouw / je', 'jouw huis / je huis — your house'],
          ['u (formal)', 'uw', 'uw adres — your address'],
          ['hij', 'zijn', 'zijn auto — his car'],
          ['zij / ze (she)', 'haar', 'haar tas — her bag'],
          ['het (it)', 'zijn', 'zijn dak — its roof'],
          ['wij / we', 'ons (het) / onze (de/plural)', 'ons huis / onze straat'],
          ['jullie', 'jullie', 'jullie kamer — your room'],
          ['zij / ze (they)', 'hun', 'hun kinderen — their children'],
        ],
        caption: 'ons vs onze: use ons before het-words (ons huis), onze before de-words and plurals (onze auto, onze kinderen).',
      },
      {
        type: 'examples',
        title: 'Possessive pronouns in sentences',
        examples: [
          {
            dutch: 'Mijn naam is Sara.',
            english: 'My name is Sara.',
            highlight: ['Mijn'],
          },
          {
            dutch: 'Wat is jouw adres?',
            english: 'What is your address?',
            highlight: ['jouw'],
            note: 'jouw is the stressed form; je is used in unstressed speech',
          },
          {
            dutch: 'Zijn fiets staat buiten.',
            english: 'His bike is outside.',
            highlight: ['Zijn'],
          },
          {
            dutch: 'Haar moeder woont in Utrecht.',
            english: 'Her mother lives in Utrecht.',
            highlight: ['Haar'],
          },
          {
            dutch: 'Ons appartement is klein.',
            english: 'Our apartment is small.',
            highlight: ['Ons'],
            note: 'appartement is a het-word → ons',
          },
          {
            dutch: 'Onze straat is rustig.',
            english: 'Our street is quiet.',
            highlight: ['Onze'],
            note: 'straat is a de-word → onze',
          },
        ],
      },
      {
        type: 'note',
        title: 'jouw vs je',
        content:
          'Both jouw and je mean "your" (singular informal). Use jouw when you want to stress or emphasise ownership: "Dat is JOUW probleem, niet het mijne." In everyday speech, je is more natural: "Wat is je naam?" Both are correct.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Zijn naam is Ahmed. (referring to a woman)',
            correct: 'Haar naam is Ahmed.',
            explanation: 'zijn = his; haar = her. Make sure you match the possessive to the person, not the noun.',
          },
          {
            incorrect: 'Onze huis is groot.',
            correct: 'Ons huis is groot.',
            explanation: 'huis is a het-word, so use ons, not onze.',
          },
          {
            incorrect: 'Hun is hier.',
            correct: 'Ze zijn hier.',
            explanation: 'hun is possessive (their), not a subject pronoun. As a subject, use zij/ze.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Possessive pronouns at work and at home',
        scenario: 'You use possessive pronouns constantly in everyday Dutch — at work, at the doctor, filling in forms.',
        examples: [
          {
            dutch: 'Wat is uw telefoonnummer?',
            english: 'What is your telephone number? (formal)',
            highlight: ['uw'],
          },
          {
            dutch: 'Mijn collega spreekt goed Nederlands.',
            english: 'My colleague speaks good Dutch.',
            highlight: ['Mijn'],
          },
          {
            dutch: 'Hun kinderen gaan naar school.',
            english: 'Their children go to school.',
            highlight: ['Hun'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a0-possessive-pronouns-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct possessive pronoun.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'That is ___ bag. (she)',
            options: ['zijn', 'haar', 'hun', 'uw'],
            correctIndex: 1,
            explanation: 'She = zij/ze → possessive is haar.',
          },
          {
            question: '___ naam is Pieter. (he)',
            options: ['Haar', 'Mijn', 'Zijn', 'Jullie'],
            correctIndex: 2,
            explanation: 'He = hij → possessive is zijn.',
          },
          {
            question: 'What is ___ address? (formal)',
            options: ['jouw', 'je', 'uw', 'hun'],
            correctIndex: 2,
            explanation: 'Formal "your" = uw.',
          },
        ],
      },
    },
    {
      id: 'a0-possessive-pronouns-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct possessive pronoun.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wat is',
            after: 'naam? (your — informal)',
            correctAnswer: 'jouw',
            acceptableAnswers: ['je'],
            hint: 'informal your = jouw or je',
          },
          {
            before: '',
            after: 'fiets is rood. (my)',
            correctAnswer: 'Mijn',
            acceptableAnswers: ['mijn'],
            hint: 'my = mijn',
          },
          {
            before: 'Dit is',
            after: 'auto. (their)',
            correctAnswer: 'hun',
            hint: 'their = hun',
          },
        ],
      },
    },
    {
      id: 'a0-possessive-pronouns-mc-2',
      type: 'multiple-choice',
      instruction: 'ons or onze?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ huis is groot. (our)',
            options: ['Ons', 'Onze'],
            correctIndex: 0,
            explanation: 'huis is a het-word → ons huis.',
          },
          {
            question: '___ auto is blauw. (our)',
            options: ['Ons', 'Onze'],
            correctIndex: 1,
            explanation: 'auto is a de-word → onze auto.',
          },
          {
            question: '___ kinderen zijn jong. (our)',
            options: ['Ons', 'Onze'],
            correctIndex: 1,
            explanation: 'kinderen is plural → onze kinderen.',
          },
        ],
      },
    },
    {
      id: 'a0-possessive-pronouns-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentences with the correct possessive pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Dit is',
            after: 'broer. (her)',
            correctAnswer: 'haar',
            hint: 'her = haar',
          },
          {
            before: '',
            after: 'kantoor is op de derde verdieping. (our — the word kantoor is het)',
            correctAnswer: 'Ons',
            acceptableAnswers: ['ons'],
            hint: 'kantoor = het-word → ons',
          },
          {
            before: 'Is dit',
            after: 'telefoon? (your — informal)',
            correctAnswer: 'jouw',
            acceptableAnswers: ['je'],
            hint: 'informal your = jouw / je',
          },
        ],
      },
    },
    {
      id: 'a0-possessive-pronouns-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['naam', 'mijn', 'Reza', 'is'],
            correctOrder: ['Mijn', 'naam', 'is', 'Reza.'],
            translation: 'My name is Reza.',
          },
          {
            shuffledWords: ['groot', 'huis', 'hun', 'is'],
            correctOrder: ['Hun', 'huis', 'is', 'groot.'],
            translation: 'Their house is big.',
          },
          {
            shuffledWords: ['buiten', 'staat', 'zijn', 'fiets'],
            correctOrder: ['Zijn', 'fiets', 'staat', 'buiten.'],
            translation: 'His bike is outside.',
          },
        ],
      },
    },
  ],
};
