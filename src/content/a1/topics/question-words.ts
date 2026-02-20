import { Topic } from '@/content/types';

export const questionWords: Topic = {
  id: 'question-words',
  levelId: 'a1',
  title: 'Asking Questions',
  subtitle: 'Vragen stellen',
  order: 7,
  estimatedMinutes: 25,
  prerequisites: ['word-order-main-clause'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Two Types of Questions in Dutch',
        rule: 'Dutch has two types of questions: open questions (with a question word) and yes/no questions (without a question word). Both types require inversion (verb before subject).',
        explanation:
          'Open questions start with a question word (wie, wat, waar, etc.) followed by the verb. Yes/no questions start directly with the verb. In both cases, the verb is in second position (after the question word) or first position (yes/no questions).',
      },
      {
        type: 'grammar-table',
        title: 'Question Words (Vraagwoorden)',
        headers: ['Dutch', 'English', 'Example'],
        rows: [
          ['wie', 'who', 'Wie is dat?'],
          ['wat', 'what', 'Wat doe je?'],
          ['waar', 'where', 'Waar woon je?'],
          ['wanneer', 'when', 'Wanneer kom je?'],
          ['waarom', 'why', 'Waarom ben je laat?'],
          ['hoe', 'how', 'Hoe gaat het?'],
          ['welke / welk', 'which', 'Welke kleur wil je?'],
          ['hoeveel', 'how many / how much', 'Hoeveel kost het?'],
        ],
        caption: '"Welke" is used with de-woorden and plural nouns; "welk" is used with het-woorden.',
      },
      {
        type: 'grammar-rule',
        title: 'Word Order: Open Questions',
        rule: 'Question word + Verb + Subject + Rest of the sentence. The verb is always in the second position, right after the question word.',
        explanation:
          'This is consistent with the Dutch V2 (verb-second) rule. The question word takes the first position, pushing the subject after the verb. For example: "Waar werk je?" (Where do you work?) - "Waar" is position 1, "werk" is position 2, "je" is position 3.',
      },
      {
        type: 'examples',
        title: 'Open Questions with Question Words',
        examples: [
          { dutch: 'Wat doe je?', english: 'What do you do?', highlight: ['Wat'], note: 'Question word + verb + subject' },
          { dutch: 'Waar woon je?', english: 'Where do you live?', highlight: ['Waar'] },
          { dutch: 'Wanneer begint de vergadering?', english: 'When does the meeting start?', highlight: ['Wanneer'] },
          { dutch: 'Waarom ben je laat?', english: 'Why are you late?', highlight: ['Waarom'] },
          { dutch: 'Hoe heet u?', english: 'What is your name? (formal)', highlight: ['Hoe'], note: 'Literally: How are you called?' },
          { dutch: 'Wie is de manager?', english: 'Who is the manager?', highlight: ['Wie'] },
          { dutch: 'Hoeveel collega\'s heb je?', english: 'How many colleagues do you have?', highlight: ['Hoeveel'] },
          { dutch: 'Welke taal spreek je?', english: 'Which language do you speak?', highlight: ['Welke'] },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Word Order: Yes/No Questions',
        rule: 'Verb + Subject + Rest of the sentence. Yes/no questions start directly with the verb.',
        explanation:
          'To form a yes/no question, simply place the verb first: "Je werkt morgen." (You work tomorrow.) becomes "Werk je morgen?" (Do you work tomorrow?) Remember: with jij/je, the -t drops when the subject comes after the verb.',
      },
      {
        type: 'examples',
        title: 'Yes/No Questions',
        examples: [
          { dutch: 'Werk je morgen?', english: 'Do you work tomorrow?', highlight: ['Werk'], note: 'Verb first, -t drops with je' },
          { dutch: 'Spreekt u Nederlands?', english: 'Do you speak Dutch? (formal)', highlight: ['Spreekt'] },
          { dutch: 'Heb je een pen?', english: 'Do you have a pen?', highlight: ['Heb'], note: '-t drops with je' },
          { dutch: 'Is hij ziek?', english: 'Is he sick?', highlight: ['Is'] },
          { dutch: 'Komen jullie ook?', english: 'Are you (plural) coming too?', highlight: ['Komen'] },
          { dutch: 'Ben jij de nieuwe collega?', english: 'Are you the new colleague?', highlight: ['Ben'], note: '-t drops with jij' },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Word Order Summary',
        headers: ['Type', 'Position 1', 'Position 2', 'Position 3', 'Rest'],
        rows: [
          ['Statement', 'Subject', 'Verb', '', 'Rest'],
          ['Open question', 'Question word', 'Verb', 'Subject', 'Rest'],
          ['Yes/No question', 'Verb', 'Subject', '', 'Rest'],
        ],
        caption: 'The verb is always in position 2 for statements and open questions, and position 1 for yes/no questions.',
      },
      {
        type: 'note',
        title: '"Welke" vs. "Welk"',
        content:
          '"Welke" is used with de-woorden and all plural nouns: "Welke auto?" (de auto), "Welke boeken?" (plural). "Welk" is used with het-woorden in singular: "Welk huis?" (het huis), "Welk probleem?" (het probleem).',
        variant: 'info',
      },
      {
        type: 'workplace-context',
        title: 'Questions at Work',
        scenario: 'Asking questions during a job interview and at the office',
        examples: [
          { dutch: 'Waar werk je?', english: 'Where do you work?', highlight: ['Waar'] },
          { dutch: 'Wanneer begint de vergadering?', english: 'When does the meeting start?', highlight: ['Wanneer'] },
          { dutch: 'Wat is uw functie?', english: 'What is your position? (formal)', highlight: ['Wat'] },
          { dutch: 'Hoe laat is de pauze?', english: 'What time is the break?', highlight: ['Hoe laat'], note: '"Hoe laat" = what time' },
          { dutch: 'Wie is mijn leidinggevende?', english: 'Who is my supervisor?', highlight: ['Wie'] },
          { dutch: 'Waar is de kantine?', english: 'Where is the canteen?', highlight: ['Waar'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Waar je werkt?',
            correct: 'Waar werk je?',
            explanation: 'In questions, the verb must come directly after the question word (V2 rule): "Waar werk je?"',
          },
          {
            incorrect: 'Wat je doet?',
            correct: 'Wat doe je?',
            explanation: 'Verb must be in second position and the -t drops with je after inversion: "Wat doe je?"',
          },
          {
            incorrect: 'Je werkt morgen?',
            correct: 'Werk je morgen?',
            explanation: 'Yes/no questions require inversion (verb first): "Werk je morgen?"',
          },
          {
            incorrect: 'Welk taal spreek je?',
            correct: 'Welke taal spreek je?',
            explanation: '"Taal" is a de-woord, so use "welke" (not "welk"). "Welk" is only for het-woorden.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a1-qw-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct question word.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ heet je? - Ik heet Anna.',
            options: ['Waar', 'Wat', 'Hoe', 'Wie'],
            correctIndex: 2,
            explanation: '"Hoe heet je?" means "What is your name?" (literally: "How are you called?").',
          },
          {
            question: '___ woon je? - Ik woon in Amsterdam.',
            options: ['Wat', 'Waar', 'Wanneer', 'Wie'],
            correctIndex: 1,
            explanation: '"Waar" (where) is used to ask about location: "Waar woon je?"',
          },
          {
            question: '___ kost het? - Het kost vijf euro.',
            options: ['Hoe', 'Wat', 'Hoeveel', 'Welke'],
            correctIndex: 2,
            explanation: '"Hoeveel" (how much/many) is used for quantity and price: "Hoeveel kost het?"',
          },
        ],
      },
    },
    {
      id: 'a1-qw-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct question word.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: 'is dat? - Dat is mijn collega.', correctAnswer: 'Wie', hint: 'asking about a person' },
          { before: '', after: 'doe je? - Ik ben ingenieur.', correctAnswer: 'Wat', hint: 'asking about an activity or profession' },
          { before: '', after: 'kom je? - Ik kom om negen uur.', correctAnswer: 'Wanneer', hint: 'asking about time' },
          { before: '', after: 'ben je laat? - De trein had vertraging.', correctAnswer: 'Waarom', hint: 'asking for a reason' },
        ],
      },
    },
    {
      id: 'a1-qw-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct word order for the question.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you ask "Where do you work?" in Dutch?',
            options: ['Waar je werkt?', 'Waar werk je?', 'Je werkt waar?', 'Werk waar je?'],
            correctIndex: 1,
            explanation: 'Question word + verb + subject: "Waar werk je?" The -t drops with je after inversion.',
          },
          {
            question: 'How do you ask "Do you speak Dutch?" (formal)',
            options: ['U spreekt Nederlands?', 'Spreekt u Nederlands?', 'Nederlands spreekt u?', 'U Nederlands spreekt?'],
            correctIndex: 1,
            explanation: 'Yes/no questions: verb first + subject: "Spreekt u Nederlands?"',
          },
        ],
      },
    },
    {
      id: 'a1-qw-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a question.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['woon', 'Waar', 'je', '?'],
            correctOrder: ['Waar', 'woon', 'je', '?'],
            translation: 'Where do you live?',
          },
          {
            shuffledWords: ['begint', 'Wanneer', 'de', 'vergadering', '?'],
            correctOrder: ['Wanneer', 'begint', 'de', 'vergadering', '?'],
            translation: 'When does the meeting start?',
          },
          {
            shuffledWords: ['je', 'Werk', 'morgen', '?'],
            correctOrder: ['Werk', 'je', 'morgen', '?'],
            translation: 'Do you work tomorrow?',
          },
        ],
      },
    },
    {
      id: 'a1-qw-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct question word.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: 'laat is het? - Het is drie uur.', correctAnswer: 'Hoe', hint: '"___ laat" = what time' },
          { before: '', after: 'boek lees je? - Dit boek.', correctAnswer: 'Welk', hint: '"boek" is a het-woord' },
          { before: '', after: 'collega\'s heb je? - Ik heb tien collega\'s.', correctAnswer: 'Hoeveel', hint: 'asking about a number' },
          { before: '', after: 'afdeling werk je? - Ik werk bij marketing.', correctAnswer: 'Welke', acceptableAnswers: ['Op welke'], hint: '"afdeling" is a de-woord' },
        ],
      },
    },
    {
      id: 'a1-qw-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose "welke" or "welk".',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ auto is van jou?',
            options: ['Welk', 'Welke'],
            correctIndex: 1,
            explanation: '"Auto" is a de-woord, so use "welke": "Welke auto?"',
          },
          {
            question: '___ kantoor is dat?',
            options: ['Welk', 'Welke'],
            correctIndex: 0,
            explanation: '"Kantoor" is a het-woord, so use "welk": "Welk kantoor?"',
          },
          {
            question: '___ boeken lees je?',
            options: ['Welk', 'Welke'],
            correctIndex: 1,
            explanation: 'Plural nouns always use "welke", regardless of de/het: "Welke boeken?"',
          },
        ],
      },
    },
    {
      id: 'a1-qw-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a question.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['is', 'uw', 'Wat', 'functie', '?'],
            correctOrder: ['Wat', 'is', 'uw', 'functie', '?'],
            translation: 'What is your position? (formal)',
          },
          {
            shuffledWords: ['de', 'Waar', 'kantine', 'is', '?'],
            correctOrder: ['Waar', 'is', 'de', 'kantine', '?'],
            translation: 'Where is the canteen?',
          },
          {
            shuffledWords: ['u', 'Spreekt', 'Nederlands', '?'],
            correctOrder: ['Spreekt', 'u', 'Nederlands', '?'],
            translation: 'Do you speak Dutch? (formal)',
          },
        ],
      },
    },
    {
      id: 'a1-qw-err-1',
      type: 'error-correction',
      instruction: 'Find and correct the word order error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Waar je woont?',
            correctedSentence: 'Waar woon je?',
            errorExplanation: 'The verb must come directly after the question word, and the -t drops with je: "Waar woon je?"',
          },
          {
            incorrectSentence: 'Wat je doet?',
            correctedSentence: 'Wat doe je?',
            errorExplanation: 'Verb in second position after the question word, and -t drops with je: "Wat doe je?"',
          },
          {
            incorrectSentence: 'Je hebt een vraag?',
            correctedSentence: 'Heb je een vraag?',
            errorExplanation: 'Yes/no questions require the verb first (inversion): "Heb je een vraag?" The -t also drops.',
          },
        ],
      },
    },
    {
      id: 'a1-qw-trans-1',
      type: 'translation',
      instruction: 'Translate the following questions into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'When does the meeting start?',
            correctDutch: 'Wanneer begint de vergadering?',
            keyVocabulary: [
              { dutch: 'wanneer', english: 'when' },
              { dutch: 'beginnen', english: 'to start' },
              { dutch: 'vergadering', english: 'meeting' },
            ],
          },
          {
            english: 'Who is your supervisor?',
            correctDutch: 'Wie is jouw leidinggevende?',
            acceptableAnswers: ['Wie is je leidinggevende?', 'Wie is uw leidinggevende?'],
            keyVocabulary: [
              { dutch: 'wie', english: 'who' },
              { dutch: 'leidinggevende', english: 'supervisor' },
            ],
          },
          {
            english: 'Do you work tomorrow?',
            correctDutch: 'Werk je morgen?',
            acceptableAnswers: ['Werk jij morgen?', 'Werkt u morgen?'],
            keyVocabulary: [
              { dutch: 'werken', english: 'to work' },
              { dutch: 'morgen', english: 'tomorrow' },
            ],
          },
        ],
      },
    },
    {
      id: 'a1-qw-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the question based on the answer given.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: 'werk je? - Ik werk bij Philips.', correctAnswer: 'Waar', hint: 'The answer is a location/company' },
          { before: '', after: 'begin je? - Om acht uur.', correctAnswer: 'Hoe laat', acceptableAnswers: ['Wanneer'], hint: 'The answer is a specific time' },
          { before: '', after: 'is de directeur? - Dat is meneer De Vries.', correctAnswer: 'Wie', hint: 'The answer is a person' },
        ],
      },
    },
    {
      id: 'a1-qw-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the question from the given words.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Wat', 'is', 'uw', 'naam', '?'],
            correctSentence: 'Wat is uw naam?',
            englishPrompt: 'What is your name? (formal)',
          },
          {
            availableWords: ['Waarom', 'ben', 'je', 'laat', '?'],
            correctSentence: 'Waarom ben je laat?',
            englishPrompt: 'Why are you late?',
          },
          {
            availableWords: ['Hoeveel', 'kost', 'het', '?'],
            correctSentence: 'Hoeveel kost het?',
            englishPrompt: 'How much does it cost?',
          },
          {
            availableWords: ['Heb', 'je', 'vragen', '?'],
            correctSentence: 'Heb je vragen?',
            englishPrompt: 'Do you have questions?',
          },
        ],
      },
    },
    {
      id: 'a1-qw-wp-1',
      type: 'writing-prompt',
      instruction: 'Write 4–5 questions you would ask a new colleague on their first day at work. Use different question words.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf 4–5 vragen die je aan een nieuwe collega zou stellen op zijn/haar eerste werkdag.',
        context: 'Think about information you would want to know: their name, where they live, what they do, why they chose this job, how long they have been learning Dutch, etc.',
        guidelines: [
          'Use at least 4 different question words (wie, wat, waar, wanneer, waarom, hoe, hoeveel, welke/welk)',
          'Include at least one yes/no question (verb first)',
          'Use both formal (u) and informal (je) forms',
          'Check that each question has correct word order (V2 for open questions, verb-first for yes/no)',
        ],
        sampleResponse: 'Hoe heet jij? Waar woon je? Wat doe je in je vrije tijd? Spreek je al lang Nederlands? Waarom heb je voor dit bedrijf gekozen?',
      },
    },
  ],
};
