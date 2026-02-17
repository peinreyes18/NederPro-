import { Topic } from '@/content/types';

export const subjectPronouns: Topic = {
  id: 'subject-pronouns',
  levelId: 'a1',
  title: 'Subject Pronouns',
  subtitle: 'Persoonlijke voornaamwoorden (onderwerp)',
  order: 2,
  estimatedMinutes: 25,
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Dutch Subject Pronouns',
        rule: 'Dutch has stressed and unstressed forms for several subject pronouns.',
        explanation:
          'In Dutch, subject pronouns indicate who or what performs the action. Several pronouns have two forms: a stressed (emphatic) form used when you want to emphasize the subject, and an unstressed (reduced) form used in everyday, casual speech. The stressed forms are: jij, zij (she), wij, zij (they). The unstressed forms are: je, ze, we, ze. Using the unstressed form is very common and not considered sloppy \u2014 it is standard in spoken Dutch. The pronoun "u" is the formal form of "you" and has no unstressed variant.',
      },
      {
        type: 'grammar-table',
        title: 'Subject Pronouns Overview',
        headers: ['English', 'Dutch (stressed)', 'Dutch (unstressed)', 'Usage'],
        rows: [
          ['I', 'ik', '\u2014', 'Always ik (lowercase, unless at start of sentence)'],
          ['you (informal)', 'jij', 'je', 'je is the everyday form; jij is for emphasis'],
          ['he', 'hij', '\u2014', 'No unstressed form'],
          ['she', 'zij', 'ze', 'ze is the everyday form; zij for emphasis or contrast'],
          ['it', 'het', '\u2014', 'Used for het-woorden and impersonal constructions'],
          ['you (formal)', 'u', '\u2014', 'Used with strangers, elders, in formal/business contexts'],
          ['we', 'wij', 'we', 'we is the everyday form; wij for emphasis'],
          ['you (plural)', 'jullie', '\u2014', 'Informal plural; no unstressed form'],
          ['they', 'zij', 'ze', 'Same forms as "she"; context makes the meaning clear'],
        ],
        caption:
          'Note: "ik" is written in lowercase even in the middle of a sentence, unlike English "I".',
      },
      {
        type: 'examples',
        title: 'Stressed vs. Unstressed in Context',
        examples: [
          {
            dutch: 'Jij bent mijn beste vriend.',
            english: 'YOU are my best friend. (emphasis on you)',
            highlight: ['Jij'],
            note: 'Stressed: emphasizing that it is specifically you',
          },
          {
            dutch: 'Je bent mijn beste vriend.',
            english: 'You are my best friend. (neutral)',
            highlight: ['Je'],
            note: 'Unstressed: normal, everyday usage',
          },
          {
            dutch: 'Wij gaan naar het feest, maar zij blijven thuis.',
            english: 'WE are going to the party, but THEY are staying home.',
            highlight: ['Wij', 'zij'],
            note: 'Stressed: contrasting two groups',
          },
          {
            dutch: 'We gaan naar het feest.',
            english: 'We are going to the party. (neutral)',
            highlight: ['We'],
            note: 'Unstressed: no contrast needed',
          },
          {
            dutch: 'Het regent vandaag.',
            english: 'It is raining today.',
            highlight: ['Het'],
            note: '"Het" used in impersonal weather expressions',
          },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'When to Use "u"',
        rule: '"U" is the formal pronoun for "you" (both singular and plural) and is used in professional, official, and respectful contexts.',
        explanation:
          'Use "u" when speaking to someone you do not know well, someone older, in customer service, in official letters, and in most business settings. In the Netherlands, workplaces are becoming more informal and many colleagues use "je/jij" with each other. However, when in doubt \u2014 especially with clients, superiors, or in written communication \u2014 start with "u". The verb with "u" conjugates the same as hij/zij: u + stem + t (e.g., "U werkt hier").',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes with Subject Pronouns',
        mistakes: [
          {
            incorrect: 'Ik ben Peter. Jij bent mijn collega.',
            correct: 'Ik ben Peter. Je bent mijn collega.',
            explanation:
              'Using "jij" here implies unnecessary emphasis. In neutral statements, the unstressed form "je" is more natural.',
          },
          {
            incorrect: 'Het is een goede leraar.',
            correct: 'Hij is een goede leraar.',
            explanation:
              '"Het" cannot refer to people (except babies in some old-fashioned contexts). Use "hij" for a male teacher.',
          },
          {
            incorrect: 'Zij is mijn boek. (referring to a book)',
            correct: 'Het is mijn boek.',
            explanation:
              'Objects use "het" (for het-woorden like "boek") or "hij" (for de-woorden), not "zij". "Zij" only refers to female persons or plural "they".',
          },
          {
            incorrect: 'Me werk hier.',
            correct: 'Ik werk hier.',
            explanation:
              '"Me" is an object pronoun, not a subject pronoun. The subject form is "ik".',
          },
          {
            incorrect: 'Jou bent laat.',
            correct: 'Jij bent laat. / Je bent laat.',
            explanation:
              '"Jou" is an object pronoun. The subject forms are "jij" (stressed) or "je" (unstressed).',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Pronouns in the Workplace',
        scenario:
          'In a Dutch office, you will encounter both formal and informal pronoun usage. When emailing a client, you might use "u". Among colleagues, "je" or "jij" is common. Here are typical workplace sentences:',
        examples: [
          {
            dutch: 'U kunt de documenten hier vinden.',
            english: 'You can find the documents here. (formal)',
            highlight: ['U'],
          },
          {
            dutch: 'Heb je het rapport al gelezen?',
            english: 'Have you read the report yet? (informal)',
            highlight: ['je'],
          },
          {
            dutch: 'Wij werken samen aan dit project.',
            english: 'We are working together on this project.',
            highlight: ['Wij'],
            note: 'Stressed "wij" to emphasize the team',
          },
          {
            dutch: 'Zij is de nieuwe manager.',
            english: 'She is the new manager.',
            highlight: ['Zij'],
          },
          {
            dutch: 'Jullie hebben morgen een vergadering.',
            english: 'You (all) have a meeting tomorrow.',
            highlight: ['Jullie'],
          },
        ],
      },
      {
        type: 'note',
        title: 'Lowercase "ik"',
        content:
          'Unlike English "I", the Dutch pronoun "ik" is written in lowercase when it appears in the middle of a sentence. It is only capitalized at the beginning of a sentence: "Morgen ga ik naar kantoor." This is a common mistake for English speakers learning Dutch.',
        variant: 'info',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-subject-pronouns-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct subject pronoun to complete the sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ ben een student. (I)',
            options: ['Me', 'Mij', 'Ik', 'Ij'],
            correctIndex: 2,
            explanation:
              '"Ik" is the subject pronoun for "I". "Me" and "mij" are object pronouns.',
          },
          {
            question: '___ woont in Rotterdam. (He)',
            options: ['Het', 'Hij', 'Hem', 'Zij'],
            correctIndex: 1,
            explanation:
              '"Hij" is the subject pronoun for "he". "Het" means "it", and "hem" is the object form.',
          },
          {
            question: '___ zijn collega\'s. (We - neutral/unstressed)',
            options: ['Wij', 'We', 'Ons', 'Jullie'],
            correctIndex: 1,
            explanation:
              'The unstressed form "we" is used in neutral, everyday speech. "Wij" would add emphasis.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-mc-2',
      type: 'multiple-choice',
      instruction:
        'Decide whether the stressed or unstressed pronoun is more appropriate.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question:
              '"___ gaat naar de winkel, niet hij." (You, emphasized contrast)',
            options: ['Je', 'Jij', 'U', 'Jullie'],
            correctIndex: 1,
            explanation:
              'When contrasting ("you, not he"), the stressed form "jij" is used for emphasis.',
          },
          {
            question: '"___ werkt hier al vijf jaar." (She, neutral statement)',
            options: ['Zij', 'Ze', 'Het', 'Haar'],
            correctIndex: 1,
            explanation:
              'In a neutral statement without emphasis, the unstressed form "ze" is more natural.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-fill-1',
      type: 'fill-in-the-blank',
      instruction:
        'Fill in the correct Dutch subject pronoun based on the English hint.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'is mijn zus. (She - neutral)',
            correctAnswer: 'Ze',
            acceptableAnswers: ['ze', 'Zij', 'zij'],
            hint: 'Unstressed form of "she"',
          },
          {
            before: '',
            after: 'spreekt goed Nederlands. (You - formal)',
            correctAnswer: 'U',
            acceptableAnswers: ['u'],
            hint: 'The formal pronoun for "you"',
          },
          {
            before: '',
            after: 'heet Jan en ik werk hier. (I)',
            correctAnswer: 'Ik',
            acceptableAnswers: ['ik'],
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-fill-2',
      type: 'fill-in-the-blank',
      instruction:
        'Complete the sentences with the correct pronoun. Pay attention to context.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'regent vandaag. (it - weather)',
            correctAnswer: 'Het',
            acceptableAnswers: ['het'],
            hint: '"Het" is used for impersonal/weather expressions',
          },
          {
            before: '',
            after: 'hebben morgen een vergadering. (you all)',
            correctAnswer: 'Jullie',
            acceptableAnswers: ['jullie'],
            hint: 'Informal plural "you"',
          },
          {
            before: '',
            after: 'gaan vanavond uit, maar ik blijf thuis. (they - emphasized contrast)',
            correctAnswer: 'Zij',
            acceptableAnswers: ['zij'],
            hint: 'Stressed form needed for contrast',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-mc-3',
      type: 'multiple-choice',
      instruction: 'In which situation would you use "u" instead of "jij/je"?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'When would you most likely use "u"?',
            options: [
              'Talking to your best friend at a party',
              'Writing an email to a new client',
              'Chatting with your young cousin',
              'Texting a classmate',
            ],
            correctIndex: 1,
            explanation:
              '"U" is the formal pronoun, used in professional or respectful contexts such as writing to a new client.',
          },
          {
            question:
              'Your colleague says: "Heb ___ het rapport gelezen?" Which pronoun fits best for an informal Dutch office?',
            options: ['u', 'je', 'jullie', 'zij'],
            correctIndex: 1,
            explanation:
              'In an informal Dutch office, colleagues typically use "je" with each other.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-wo-1',
      type: 'word-order',
      instruction: 'Arrange the words to form a correct Dutch sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['ben', 'ik', 'nieuw', 'hier'],
            correctOrder: ['Ik', 'ben', 'hier', 'nieuw.'],
            translation: 'I am new here.',
          },
          {
            shuffledWords: ['is', 'zij', 'manager', 'de'],
            correctOrder: ['Zij', 'is', 'de', 'manager.'],
            translation: 'She is the manager.',
          },
          {
            shuffledWords: ['werken', 'wij', 'samen'],
            correctOrder: ['Wij', 'werken', 'samen.'],
            translation: 'We work together.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-fill-3',
      type: 'fill-in-the-blank',
      instruction:
        'Fill in the correct pronoun to complete this workplace dialogue.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Receptionist: "Goedemorgen,',
            after: 'heeft een afspraak met meneer De Vries." (you - formal)',
            correctAnswer: 'u',
            acceptableAnswers: ['U'],
            hint: 'A receptionist speaking to a visitor uses the formal form',
          },
          {
            before: 'Collega: "Hoi! Ben',
            after: 'de nieuwe stagiair?" (you - informal)',
            correctAnswer: 'jij',
            acceptableAnswers: ['je'],
            hint: 'Colleagues in a Dutch office usually use informal pronouns',
          },
          {
            before: 'Stagiair: "Ja,',
            after: 'begin vandaag!" (I)',
            correctAnswer: 'ik',
            acceptableAnswers: ['Ik'],
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-mc-4',
      type: 'multiple-choice',
      instruction: 'Which sentence uses the pronoun correctly?',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is correct?',
            options: [
              'Het is een aardige man.',
              'Hij is een aardige man.',
              'Hem is een aardige man.',
              'Zijn is een aardige man.',
            ],
            correctIndex: 1,
            explanation:
              '"Hij" is the correct subject pronoun for a male person. "Het" is for things (het-woorden) or impersonal constructions, not for people.',
          },
          {
            question:
              'Which is the most natural way to say "They are my colleagues" in a casual conversation?',
            options: [
              'Zij zijn mijn collega\'s.',
              'Ze zijn mijn collega\'s.',
              'Hun zijn mijn collega\'s.',
              'Hen zijn mijn collega\'s.',
            ],
            correctIndex: 1,
            explanation:
              'In casual speech, the unstressed form "ze" is more natural. "Zij" would add emphasis. "Hun" and "hen" are object pronouns, not subject pronouns.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-wo-2',
      type: 'word-order',
      instruction:
        'Arrange the words into a correct sentence. Think about which pronoun form fits the context.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['u', 'kunt', 'hier', 'tekenen'],
            correctOrder: ['U', 'kunt', 'hier', 'tekenen.'],
            translation: 'You can sign here. (formal)',
          },
          {
            shuffledWords: ['morgen', 'we', 'vergaderen'],
            correctOrder: ['We', 'vergaderen', 'morgen.'],
            translation: 'We have a meeting tomorrow.',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-fill-4',
      type: 'fill-in-the-blank',
      instruction:
        'Choose the correct pronoun (stressed or unstressed) based on the context clue in parentheses.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'wil koffie, maar hij wil thee. (I want coffee, but he wants tea \u2014 contrast)',
            correctAnswer: 'Ik',
            acceptableAnswers: ['ik'],
            hint: '"ik" has no unstressed form, so it is always "ik"',
          },
          {
            before: '',
            after: 'gaan naar huis, niet jullie. (we, not you \u2014 emphasized)',
            correctAnswer: 'Wij',
            acceptableAnswers: ['wij'],
            hint: 'Contrast requires the stressed form',
          },
        ],
      },
    },
    {
      id: 'a1-subject-pronouns-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short self-introduction in Dutch.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt:
          'Introduce yourself in 3\u20134 sentences. Include your name, where you are from, and what you do.',
        context:
          'You are meeting a new colleague at work for the first time. Introduce yourself informally.',
        guidelines: [
          'Start with "Hallo" or "Hoi"',
          'Say your name using "Ik heet..." or "Mijn naam is..."',
          'Say where you are from using "Ik kom uit..."',
          'Mention your job or role',
        ],
        sampleResponse:
          'Hallo! Ik heet Maria. Ik kom uit Spanje. Ik werk hier als software engineer.',
        keyPhrases: ['Ik heet', 'Ik kom uit', 'Ik werk'],
      },
    },
  ],
};
