import { Topic } from '@/content/types';

export const hebbenZijn: Topic = {
  id: 'hebben-zijn',
  levelId: 'a1',
  title: 'Hebben and Zijn',
  subtitle: 'De werkwoorden hebben en zijn',
  order: 5,
  estimatedMinutes: 30,
  prerequisites: ['present-tense-regular', 'subject-pronouns'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'The Verb "Hebben" (To Have)',
        rule: 'Hebben is one of the most important verbs in Dutch. It is used for possession, age, and many common expressions.',
        explanation:
          'Like English "to have", hebben is irregular and must be memorized. Pay special attention to the jij-form: when "jij" or "je" comes AFTER the verb (in questions or inversion), the -t ending drops. So "jij hebt" becomes "heb jij?" This rule applies to all Dutch verbs with jij/je.',
      },
      {
        type: 'grammar-table',
        title: 'Conjugation of Hebben',
        headers: ['Pronoun', 'Conjugation', 'English'],
        rows: [
          ['ik', 'heb', 'I have'],
          ['jij / je', 'hebt', 'you have (informal)'],
          ['u', 'hebt / heeft', 'you have (formal)'],
          ['hij / zij / het', 'heeft', 'he / she / it has'],
          ['wij / we', 'hebben', 'we have'],
          ['jullie', 'hebben', 'you have (plural)'],
          ['zij / ze', 'hebben', 'they have'],
        ],
        caption: 'Note: "u hebt" and "u heeft" are both correct. "U heeft" is more common in speech.',
      },
      {
        type: 'note',
        title: 'Inversion Rule with Jij/Je',
        content:
          'When "jij" or "je" comes AFTER the verb, the -t drops. This happens in questions and after introductory words. "Jij hebt een auto." becomes "Heb jij een auto?" (NOT "Hebt jij een auto?"). This rule applies to both hebben and all other verbs.',
        variant: 'warning',
      },
      {
        type: 'grammar-rule',
        title: 'The Verb "Zijn" (To Be)',
        rule: 'Zijn is the Dutch equivalent of "to be". It is completely irregular and is used to describe identity, location, nationality, and states of being.',
        explanation:
          'Zijn is one of the most frequently used verbs in Dutch. Like hebben, it follows the inversion rule with jij/je: "jij bent" becomes "ben jij?" The formal "u" can take either "bent" or "is".',
      },
      {
        type: 'grammar-table',
        title: 'Conjugation of Zijn',
        headers: ['Pronoun', 'Conjugation', 'English'],
        rows: [
          ['ik', 'ben', 'I am'],
          ['jij / je', 'bent', 'you are (informal)'],
          ['u', 'bent / is', 'you are (formal)'],
          ['hij / zij / het', 'is', 'he / she / it is'],
          ['wij / we', 'zijn', 'we are'],
          ['jullie', 'zijn', 'you are (plural)'],
          ['zij / ze', 'zijn', 'they are'],
        ],
        caption: 'Note: "ben jij?" (NOT "bent jij?") because of the inversion rule.',
      },
      {
        type: 'examples',
        title: 'Uses of Hebben',
        examples: [
          { dutch: 'Ik heb een hond.', english: 'I have a dog.', highlight: ['heb'], note: 'Possession' },
          { dutch: 'Zij heeft twee kinderen.', english: 'She has two children.', highlight: ['heeft'], note: 'Possession' },
          { dutch: 'Wij hebben een groot huis.', english: 'We have a big house.', highlight: ['hebben'] },
          { dutch: 'Heb jij een pen?', english: 'Do you have a pen?', highlight: ['Heb'], note: 'Inversion: -t drops' },
          { dutch: 'Ik heb honger.', english: 'I am hungry.', highlight: ['heb', 'honger'], note: 'Literally: I have hunger' },
          { dutch: 'Hij heeft dorst.', english: 'He is thirsty.', highlight: ['heeft', 'dorst'], note: 'Literally: He has thirst' },
          { dutch: 'Zij heeft gelijk.', english: 'She is right.', highlight: ['heeft', 'gelijk'], note: 'Literally: She has right' },
          { dutch: 'Ik heb het druk.', english: 'I am busy.', highlight: ['heb', 'druk'], note: 'Literally: I have it busy' },
        ],
      },
      {
        type: 'examples',
        title: 'Uses of Zijn',
        examples: [
          { dutch: 'Ik ben student.', english: 'I am a student.', highlight: ['ben'], note: 'Identity (no article needed)' },
          { dutch: 'Hij is Nederlands.', english: 'He is Dutch.', highlight: ['is'], note: 'Nationality' },
          { dutch: 'Wij zijn op kantoor.', english: 'We are at the office.', highlight: ['zijn'], note: 'Location' },
          { dutch: 'Het is koud vandaag.', english: 'It is cold today.', highlight: ['is'], note: 'State / weather' },
          { dutch: 'Ben jij klaar?', english: 'Are you ready?', highlight: ['Ben'], note: 'Inversion: -t drops' },
          { dutch: 'Ik ben 30 jaar oud.', english: 'I am 30 years old.', highlight: ['ben'], note: 'Age uses zijn in Dutch' },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Common Expressions with Hebben',
        headers: ['Dutch Expression', 'English Meaning', 'Literal Translation'],
        rows: [
          ['honger hebben', 'to be hungry', 'to have hunger'],
          ['dorst hebben', 'to be thirsty', 'to have thirst'],
          ['gelijk hebben', 'to be right', 'to have right'],
          ['het druk hebben', 'to be busy', 'to have it busy'],
          ['haast hebben', 'to be in a hurry', 'to have hurry'],
          ['zin hebben (in)', 'to feel like', 'to have desire (in)'],
          ['het koud/warm hebben', 'to be cold/warm (person)', 'to have it cold/warm'],
        ],
      },
      {
        type: 'workplace-context',
        title: 'Hebben and Zijn at Work',
        scenario: 'Talking about your job and workplace',
        examples: [
          { dutch: 'Ik heb een vergadering om tien uur.', english: 'I have a meeting at ten o\'clock.', highlight: ['heb', 'vergadering'] },
          { dutch: 'Zij is de manager.', english: 'She is the manager.', highlight: ['is'] },
          { dutch: 'Wij zijn collega\'s.', english: 'We are colleagues.', highlight: ['zijn'] },
          { dutch: 'Heb je het rapport?', english: 'Do you have the report?', highlight: ['Heb'] },
          { dutch: 'De directeur is op vakantie.', english: 'The director is on vacation.', highlight: ['is'] },
          { dutch: 'Ik heb het druk vandaag.', english: 'I am busy today.', highlight: ['heb', 'druk'] },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'Hebt jij een auto?',
            correct: 'Heb jij een auto?',
            explanation: 'When "jij/je" comes after the verb, the -t drops. This is a fundamental rule in Dutch.',
          },
          {
            incorrect: 'Bent jij klaar?',
            correct: 'Ben jij klaar?',
            explanation: 'Same inversion rule: "jij bent" becomes "ben jij?" The -t always drops after inversion with jij/je.',
          },
          {
            incorrect: 'Ik heb 25 jaar oud.',
            correct: 'Ik ben 25 jaar oud.',
            explanation: 'Age uses "zijn" (to be) in Dutch, just like in English: "Ik ben 25 jaar oud."',
          },
          {
            incorrect: 'Ik ben honger.',
            correct: 'Ik heb honger.',
            explanation: 'Dutch uses "hebben" (to have) for hunger, thirst, and similar sensations, unlike English.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a1-heb-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of "hebben".',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik', after: 'een kat.', correctAnswer: 'heb', hint: 'ik + hebben' },
          { before: 'Zij', after: 'drie kinderen.', correctAnswer: 'heeft', hint: 'zij (she) + hebben' },
          { before: 'Wij', after: 'een groot huis.', correctAnswer: 'hebben', hint: 'wij + hebben' },
          { before: 'Jij', after: 'een nieuwe baan.', correctAnswer: 'hebt', hint: 'jij + hebben (normal order)' },
        ],
      },
    },
    {
      id: 'a1-heb-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of "zijn".',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik', after: 'student.', correctAnswer: 'ben', hint: 'ik + zijn' },
          { before: 'Hij', after: 'ingenieur.', correctAnswer: 'is', hint: 'hij + zijn' },
          { before: 'Wij', after: 'collega\'s.', correctAnswer: 'zijn', hint: 'wij + zijn' },
          { before: 'Jij', after: 'heel slim.', correctAnswer: 'bent', hint: 'jij + zijn (normal order)' },
        ],
      },
    },
    {
      id: 'a1-heb-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct verb form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is correct? "___ jij een broer?"',
            options: ['Hebt', 'Heb', 'Heeft', 'Hebben'],
            correctIndex: 1,
            explanation: 'When "jij" comes after the verb (in a question), the -t drops: "Heb jij?"',
          },
          {
            question: 'Which is correct? "Zij ___ op kantoor."',
            options: ['ben', 'bent', 'is', 'zijn'],
            correctIndex: 2,
            explanation: '"Zij" (she, singular) takes "is": "Zij is op kantoor."',
          },
          {
            question: 'Which is correct? "Ik ___ 30 jaar oud."',
            options: ['heb', 'heeft', 'ben', 'is'],
            correctIndex: 2,
            explanation: 'Age uses "zijn" (to be) in Dutch: "Ik ben 30 jaar oud."',
          },
        ],
      },
    },
    {
      id: 'a1-heb-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct expression.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "I am hungry" in Dutch?',
            options: ['Ik ben honger.', 'Ik heb honger.', 'Ik ben hongerig.', 'Ik heeft honger.'],
            correctIndex: 1,
            explanation: 'Dutch uses "honger hebben" (to have hunger): "Ik heb honger."',
          },
          {
            question: 'How do you say "She is right" in Dutch?',
            options: ['Zij is gelijk.', 'Zij bent gelijk.', 'Zij heeft gelijk.', 'Zij heb gelijk.'],
            correctIndex: 2,
            explanation: 'Dutch uses "gelijk hebben" (to have right): "Zij heeft gelijk."',
          },
          {
            question: 'How do you say "We are busy" in Dutch?',
            options: ['Wij zijn druk.', 'Wij hebben het druk.', 'Wij heb druk.', 'Wij bent druk.'],
            correctIndex: 1,
            explanation: '"Het druk hebben" is the expression: "Wij hebben het druk." However, "Wij zijn druk" is also used informally.',
          },
        ],
      },
    },
    {
      id: 'a1-heb-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of "hebben" or "zijn". Pay attention to inversion.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: '', after: 'jij moe?', correctAnswer: 'Ben', acceptableAnswers: ['ben'], hint: 'Inversion with jij + zijn' },
          { before: '', after: 'je een pen?', correctAnswer: 'Heb', acceptableAnswers: ['heb'], hint: 'Inversion with je + hebben' },
          { before: 'Vandaag', after: 'jij jarig.', correctAnswer: 'ben', hint: 'After inversion, -t drops with jij' },
          { before: 'Het', after: 'heel warm vandaag.', correctAnswer: 'is', hint: 'het + zijn' },
        ],
      },
    },
    {
      id: 'a1-heb-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Choose "hebben" or "zijn" and fill in the correct form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik', after: 'honger. Waar is de kantine?', correctAnswer: 'heb', hint: 'honger + ?' },
          { before: 'Zij', after: 'de nieuwe directeur.', correctAnswer: 'is', hint: 'identity = ?' },
          { before: 'Wij', after: 'een vergadering om drie uur.', correctAnswer: 'hebben', hint: 'possession / scheduled event' },
          { before: 'Jullie', after: 'te laat.', correctAnswer: 'zijn', hint: 'state of being = ?' },
        ],
      },
    },
    {
      id: 'a1-heb-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['een', 'Ik', 'vergadering', 'heb', '.'],
            correctOrder: ['Ik', 'heb', 'een', 'vergadering', '.'],
            translation: 'I have a meeting.',
          },
          {
            shuffledWords: ['de', 'Zij', 'is', 'manager', '.'],
            correctOrder: ['Zij', 'is', 'de', 'manager', '.'],
            translation: 'She is the manager.',
          },
          {
            shuffledWords: ['jij', 'Heb', 'auto', 'een', '?'],
            correctOrder: ['Heb', 'jij', 'een', 'auto', '?'],
            translation: 'Do you have a car?',
          },
        ],
      },
    },
    {
      id: 'a1-heb-order-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a question.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['klaar', 'jij', 'Ben', '?'],
            correctOrder: ['Ben', 'jij', 'klaar', '?'],
            translation: 'Are you ready?',
          },
          {
            shuffledWords: ['zij', 'Hebben', 'kinderen', '?'],
            correctOrder: ['Hebben', 'zij', 'kinderen', '?'],
            translation: 'Do they have children?',
          },
        ],
      },
    },
    {
      id: 'a1-heb-mc-3',
      type: 'multiple-choice',
      instruction: 'Select the correct sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is grammatically correct?',
            options: [
              'Hebt jij een zus?',
              'Heb jij een zus?',
              'Hebben jij een zus?',
              'Heb jij een zus.',
            ],
            correctIndex: 1,
            explanation: 'Inversion with jij drops the -t: "Heb jij...?" And questions end with a question mark.',
          },
          {
            question: 'Which sentence is grammatically correct?',
            options: [
              'Wij bent op kantoor.',
              'Wij is op kantoor.',
              'Wij ben op kantoor.',
              'Wij zijn op kantoor.',
            ],
            correctIndex: 3,
            explanation: '"Wij" takes the plural form "zijn": "Wij zijn op kantoor."',
          },
        ],
      },
    },
    {
      id: 'a1-heb-err-1',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik heb 25 jaar oud.',
            correctedSentence: 'Ik ben 25 jaar oud.',
            errorExplanation: 'Age uses "zijn" (to be), not "hebben" (to have) in Dutch.',
          },
          {
            incorrectSentence: 'Bent jij de nieuwe collega?',
            correctedSentence: 'Ben jij de nieuwe collega?',
            errorExplanation: 'When "jij/je" comes after the verb, the -t drops: "ben jij" (not "bent jij").',
          },
          {
            incorrectSentence: 'Hij ben ziek vandaag.',
            correctedSentence: 'Hij is ziek vandaag.',
            errorExplanation: '"Hij" takes "is" (not "ben"). "Ben" is only used with "ik".',
          },
        ],
      },
    },
    {
      id: 'a1-heb-trans-1',
      type: 'translation',
      instruction: 'Translate the following sentences into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I have a meeting at three o\'clock.',
            correctDutch: 'Ik heb een vergadering om drie uur.',
            acceptableAnswers: ['Ik heb om drie uur een vergadering.'],
            keyVocabulary: [
              { dutch: 'vergadering', english: 'meeting' },
              { dutch: 'om drie uur', english: 'at three o\'clock' },
            ],
          },
          {
            english: 'She is the new colleague.',
            correctDutch: 'Zij is de nieuwe collega.',
            acceptableAnswers: ['Ze is de nieuwe collega.'],
            keyVocabulary: [
              { dutch: 'nieuwe', english: 'new' },
              { dutch: 'collega', english: 'colleague' },
            ],
          },
          {
            english: 'Are you hungry?',
            correctDutch: 'Heb jij honger?',
            acceptableAnswers: ['Heb je honger?', 'Heeft u honger?'],
            keyVocabulary: [{ dutch: 'honger', english: 'hunger / hungry' }],
          },
        ],
      },
    },
    {
      id: 'a1-heb-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Fill in "heb", "hebt", "heeft", or "hebben".',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'U', after: 'een afspraak om twee uur.', correctAnswer: 'heeft', acceptableAnswers: ['hebt'], hint: 'u + hebben' },
          { before: 'Jullie', after: 'een mooie tuin.', correctAnswer: 'hebben', hint: 'jullie + hebben' },
          { before: 'Het kind', after: 'een nieuwe fiets.', correctAnswer: 'heeft', hint: 'het kind = hij/zij/het' },
        ],
      },
    },
    {
      id: 'a1-heb-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the Dutch sentence using the correct form of hebben or zijn.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['Wij', 'zijn', 'hebben', "collega's", '.'],
            correctSentence: "Wij zijn collega's.",
            englishPrompt: 'We are colleagues.',
          },
          {
            availableWords: ['Ik', 'heb', 'ben', 'honger', 'dorst', '.'],
            correctSentence: 'Ik heb honger.',
            englishPrompt: 'I am hungry.',
          },
        ],
      },
    },
  ],
};
