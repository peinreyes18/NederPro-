import { Topic } from '@/content/types';

export const futureTense: Topic = {
  id: 'future-tense',
  levelId: 'a2',
  title: 'Future Tense',
  subtitle: 'De toekomst — gaan + infinitief, zullen, and present tense for future',
  order: 11,
  estimatedMinutes: 30,
  prerequisites: ['modal-verbs'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Three ways to express the future in Dutch',
        rule: 'Dutch has three common ways to talk about the future: (1) present tense + time expression, (2) gaan + infinitive, (3) zullen + infinitive.',
        explanation:
          'Unlike English, Dutch does not have a single dedicated future tense. The most common approach in spoken Dutch is simply to use the present tense with a time word (morgen, volgende week, straks). For planned intentions, gaan + infinitive is used. For predictions, promises, or formal future statements, zullen + infinitive is used.',
      },
      {
        type: 'grammar-table',
        title: 'The Three Future Constructions',
        headers: ['Construction', 'Use', 'Example'],
        rows: [
          ['Present + time word', 'scheduled / near future', 'Morgen werk ik thuis. — Tomorrow I work from home.'],
          ['gaan + infinitive', 'planned intention', 'Ik ga morgen naar Amsterdam. — I am going to Amsterdam tomorrow.'],
          ['zullen + infinitive', 'prediction / promise / formal', 'Het zal morgen regenen. — It will rain tomorrow.'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Conjugation of gaan and zullen',
        headers: ['Pronoun', 'gaan', 'zullen'],
        rows: [
          ['ik', 'ga', 'zal'],
          ['jij / je', 'gaat', 'zult / zal'],
          ['u', 'gaat', 'zult'],
          ['hij / zij / het', 'gaat', 'zal'],
          ['wij / we', 'gaan', 'zullen'],
          ['jullie', 'gaan', 'zullen'],
          ['zij / ze', 'gaan', 'zullen'],
        ],
        caption: 'The infinitive comes at the end of the sentence: Ik ga morgen werken. Zij zullen bellen.',
      },
      {
        type: 'examples',
        title: 'Future tense in context',
        examples: [
          {
            dutch: 'Morgen ga ik naar de dokter.',
            english: 'Tomorrow I am going to the doctor.',
            highlight: ['ga'],
            note: 'gaan + infinitive for a planned event',
          },
          {
            dutch: 'We gaan volgend jaar naar Spanje.',
            english: 'We are going to Spain next year.',
            highlight: ['gaan'],
          },
          {
            dutch: 'Het zal morgen hard regenen.',
            english: 'It will rain hard tomorrow.',
            highlight: ['zal'],
            note: 'zullen for a prediction',
          },
          {
            dutch: 'Ik zal je bellen als ik klaar ben.',
            english: 'I will call you when I am done.',
            highlight: ['zal'],
            note: 'zullen for a promise',
          },
          {
            dutch: 'Volgende week beginnen we met het project.',
            english: 'Next week we start the project.',
            highlight: ['beginnen'],
            note: 'Present tense + time word — most natural in spoken Dutch',
          },
        ],
      },
      {
        type: 'note',
        title: 'Word order: infinitive goes to the end',
        content:
          'With gaan and zullen, the main verb infinitive goes to the very end of the clause: "Ik ga morgen werken." (I am going to work tomorrow.) In a subordinate clause: "...omdat ik morgen ga werken." The same end-position rule applies to zullen: "Ik denk dat het zal regenen."',
        variant: 'tip',
      },
      {
        type: 'note',
        title: 'When to use which form',
        content:
          'In everyday spoken Dutch, the present tense + time word is the most natural: "Morgen werk ik thuis." Using gaan is natural for personal plans and intentions. Zullen sounds more formal or predictive — use it for weather forecasts, promises, and written/formal contexts. Avoid using zullen for simple plans: "Ik zal morgen naar de winkel gaan" sounds unnatural; "Ik ga morgen naar de winkel" is much better.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Ik zal morgen naar de supermarkt gaan.',
            correct: 'Ik ga morgen naar de supermarkt.',
            explanation: 'For concrete plans, gaan is more natural. Zullen sounds overly formal for everyday plans.',
          },
          {
            incorrect: 'Ik ga morgen regen.',
            correct: 'Het zal morgen regenen.',
            explanation: 'For weather predictions and impersonal future statements, use zullen. Also: gaan + infinitive requires a proper infinitive (regenen), not a noun.',
          },
          {
            incorrect: 'Wij zult bellen.',
            correct: 'Wij zullen bellen.',
            explanation: 'wij/we takes zullen (not zult). zult is only for jij/u.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Future tense at work',
        scenario: 'Planning meetings, making promises, and discussing project timelines all require the future tense.',
        examples: [
          {
            dutch: 'We gaan volgende week de resultaten presenteren.',
            english: 'We are going to present the results next week.',
            highlight: ['gaan', 'presenteren'],
          },
          {
            dutch: 'Ik zal het rapport maandag opsturen.',
            english: 'I will send the report on Monday.',
            highlight: ['zal', 'opsturen'],
          },
          {
            dutch: 'Morgen hebben we een vergadering om 10 uur.',
            english: 'Tomorrow we have a meeting at 10 o\'clock.',
            highlight: ['hebben'],
            note: 'Present tense — most natural for scheduled events',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a2-future-tense-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct future construction.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik ___ morgen naar Utrecht. (plan — going to)',
            options: ['zal gaan', 'ga gaan', 'ga', 'zal'],
            correctIndex: 2,
            explanation: 'gaan + infinitive for plans: Ik ga morgen naar Utrecht (no second infinitive needed when the main verb IS gaan).',
          },
          {
            question: 'Het ___ morgen regenen. (prediction)',
            options: ['gaat', 'zal', 'is', 'heeft'],
            correctIndex: 1,
            explanation: 'Weather predictions use zullen: het zal regenen.',
          },
          {
            question: 'Wij ___ volgend jaar naar Portugal. (plan)',
            options: ['zullen gaan', 'gaan', 'zal gaan', 'gaat'],
            correctIndex: 1,
            explanation: 'wij → gaan. For concrete plans: Wij gaan volgend jaar naar Portugal.',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of gaan or zullen.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'morgen vroeg opstaan. (plan — I)',
            correctAnswer: 'ga',
            hint: 'ik + gaan → ga',
          },
          {
            before: 'Hij',
            after: 'je zeker bellen. (promise — he)',
            correctAnswer: 'zal',
            hint: 'hij + zullen → zal',
          },
          {
            before: 'Wij',
            after: 'de vergadering voorbereiden. (plan — we)',
            correctAnswer: 'gaan',
            hint: 'wij + gaan → gaan',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order. Remember: infinitive goes to the end.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['ga', 'ik', 'morgen', 'werken', 'thuis'],
            correctOrder: ['Ik', 'ga', 'morgen', 'thuis', 'werken.'],
            translation: 'I am going to work from home tomorrow.',
          },
          {
            shuffledWords: ['zal', 'rapport', 'het', 'hij', 'maandag', 'opsturen'],
            correctOrder: ['Hij', 'zal', 'het', 'rapport', 'maandag', 'opsturen.'],
            translation: 'He will send the report on Monday.',
          },
          {
            shuffledWords: ['naar', 'gaan', 'wij', 'Spanje', 'jaar', 'volgend'],
            correctOrder: ['Wij', 'gaan', 'volgend', 'jaar', 'naar', 'Spanje.'],
            translation: 'We are going to Spain next year.',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-mc-2',
      type: 'multiple-choice',
      instruction: 'Which sentence sounds most natural in spoken Dutch?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'You want to say: "I am going to the supermarket tomorrow."',
            options: [
              'Ik zal morgen naar de supermarkt gaan.',
              'Ik ga morgen naar de supermarkt.',
              'Morgen zal ik naar de supermarkt.',
            ],
            correctIndex: 1,
            explanation: 'For concrete personal plans, gaan is the most natural choice. Zullen sounds overly formal here.',
          },
          {
            question: 'You want to make a promise: "I will definitely help you."',
            options: [
              'Ik ga je zeker helpen.',
              'Ik zal je zeker helpen.',
              'Ik help je zeker morgen.',
            ],
            correctIndex: 1,
            explanation: 'Promises and commitments sound most natural with zullen.',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete with the correct future form of the verb in brackets.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij',
            after: 'volgende week een presentatie geven. (plan)',
            correctAnswer: 'gaat',
            hint: 'zij (she) + gaan → gaat',
          },
          {
            before: 'Het',
            after: 'morgen koud zijn. (prediction)',
            correctAnswer: 'zal',
            hint: 'weather prediction → zullen; het + zullen → zal',
          },
          {
            before: 'Jullie',
            after: 'dat nooit vergeten. (strong prediction)',
            correctAnswer: 'zullen',
            hint: 'jullie + zullen → zullen',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-wo-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order. The infinitive goes to the end.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['jullie', 'volgende', 'gaan', 'week', 'beginnen'],
            correctOrder: ['Jullie', 'gaan', 'volgende', 'week', 'beginnen.'],
            translation: 'You (plural) are going to start next week.',
          },
          {
            shuffledWords: ['zal', 'het', 'morgen', 'koud', 'zijn'],
            correctOrder: ['Het', 'zal', 'morgen', 'koud', 'zijn.'],
            translation: 'It will be cold tomorrow.',
          },
          {
            shuffledWords: ['ik', 'maandag', 'zal', 'bellen', 'je'],
            correctOrder: ['Ik', 'zal', 'je', 'maandag', 'bellen.'],
            translation: 'I will call you on Monday.',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-ec-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'open',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Wij zult morgen vergaderen.',
            correctedSentence: 'Wij zullen morgen vergaderen.',
            errorExplanation: 'wij/we takes zullen, not zult. zult is only for jij/u.',
          },
          {
            incorrectSentence: 'Ik ga morgen regen.',
            correctedSentence: 'Het zal morgen regenen.',
            errorExplanation: 'Weather predictions use zullen. Also: "regen" is a noun; the verb is "regenen".',
          },
          {
            incorrectSentence: 'Ze gaan het rapport opsturen morgen te.',
            correctedSentence: 'Ze gaan het rapport morgen opsturen.',
            errorExplanation: 'With gaan + infinitive, just place the infinitive at the end without "te".',
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch. Choose the most natural future construction.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I am going to the doctor tomorrow.',
            correctDutch: 'Ik ga morgen naar de dokter.',
            acceptableAnswers: ['Morgen ga ik naar de dokter.'],
          },
          {
            english: 'It will rain this afternoon.',
            correctDutch: 'Het zal vanmiddag regenen.',
          },
          {
            english: 'We are going to present the results next week.',
            correctDutch: 'We gaan volgende week de resultaten presenteren.',
            acceptableAnswers: ['Wij gaan volgende week de resultaten presenteren.'],
          },
        ],
      },
    },
    {
      id: 'a2-future-tense-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form: gaan, zullen, or present tense. Choose the most natural option.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik denk dat het morgen',
            after: 'regenen. (prediction with zullen)',
            correctAnswer: 'zal',
            hint: 'prediction → zullen; het + zullen → zal',
          },
          {
            before: 'We',
            after: 'volgende maand verhuizen. (firm plan — wij)',
            correctAnswer: 'gaan',
            hint: 'wij/we + gaan → gaan; firm personal plan',
          },
          {
            before: 'Jij',
            after: 'dat zeker begrijpen. (reassuring prediction — jij)',
            correctAnswer: 'zult',
            acceptableAnswers: ['zal'],
            hint: 'jij + zullen → zult (also: zal)',
          },
        ],
      },
    },
  ],
};
