import { Topic } from '@/content/types';

export const indirectQuestions: Topic = {
  id: 'indirect-questions',
  levelId: 'a2',
  title: 'Indirect Questions',
  subtitle: 'Indirecte vragen — weet je of..., ik vraag me af wat...',
  order: 12,
  estimatedMinutes: 25,
  prerequisites: ['conjunctions-subordinate'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What is an indirect question?',
        rule: 'An indirect question reports or embeds a question inside a statement. In Dutch, the verb moves to the end of the clause — just like in subordinate clauses.',
        explanation:
          'A direct question: "Waar woont hij?" (Where does he live?). An indirect question: "Ik weet niet waar hij woont." (I don\'t know where he lives.) The question word (waar, wat, wie, hoe, wanneer) introduces the embedded clause, and the verb goes to the end. For yes/no questions, use of instead of a question word.',
      },
      {
        type: 'grammar-table',
        title: 'Direct question → Indirect question',
        headers: ['Direct question', 'Indirect question'],
        rows: [
          ['Waar woont hij?', 'Ik weet niet waar hij woont.'],
          ['Wat kost het?', 'Kun je me vertellen wat het kost?'],
          ['Wanneer begint de les?', 'Ik vraag me af wanneer de les begint.'],
          ['Komt zij morgen?', 'Ik weet niet of zij morgen komt.'],
          ['Heeft hij betaald?', 'Weet jij of hij betaald heeft?'],
        ],
        caption: 'Key rules: (1) verb goes to the end; (2) use of for yes/no questions; (3) no question mark at the end if it is a statement.',
      },
      {
        type: 'examples',
        title: 'Indirect questions in context',
        examples: [
          {
            dutch: 'Ik weet niet waar het postkantoor is.',
            english: 'I don\'t know where the post office is.',
            highlight: ['waar', 'is'],
            note: 'Direct: Waar is het postkantoor? → verb moves to end',
          },
          {
            dutch: 'Kun je me vertellen hoe laat het is?',
            english: 'Can you tell me what time it is?',
            highlight: ['hoe', 'is'],
          },
          {
            dutch: 'Ik vraag me af of hij vandaag werkt.',
            english: 'I wonder whether he is working today.',
            highlight: ['of', 'werkt'],
            note: 'Yes/no question → use of',
          },
          {
            dutch: 'Weet jij of de winkel open is?',
            english: 'Do you know whether the shop is open?',
            highlight: ['of', 'is'],
          },
          {
            dutch: 'Hij vraagt wat de prijs is.',
            english: 'He asks what the price is.',
            highlight: ['wat', 'is'],
          },
        ],
      },
      {
        type: 'note',
        title: 'of = whether (not or)',
        content:
          'In indirect questions, of means "whether/if" — not "or". "Ik weet niet of hij komt" = I don\'t know whether/if he is coming. Do not confuse this with of meaning "or" in choices: "Koffie of thee?" (Coffee or tea?). Context makes the meaning clear.',
        variant: 'warning',
      },
      {
        type: 'note',
        title: 'No question mark for statements',
        content:
          '"Ik weet niet waar hij woont." is a statement, not a question — so no question mark. But "Weet jij waar hij woont?" is a question (you are asking your listener), so it does take a question mark.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Ik weet niet waar woont hij.',
            correct: 'Ik weet niet waar hij woont.',
            explanation: 'In an indirect question, the verb moves to the end — not after the question word.',
          },
          {
            incorrect: 'Ik weet niet als hij komt.',
            correct: 'Ik weet niet of hij komt.',
            explanation: 'Use of (not als) to introduce an embedded yes/no question.',
          },
          {
            incorrect: 'Weet je waar hij woont?',
            correct: 'Correct! (this is a question, so question mark is correct)',
            explanation: 'When the main clause is a question, the sentence does end with a question mark.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Indirect questions at work',
        scenario: 'Indirect questions are essential for polite workplace communication — asking for information without sounding abrupt.',
        examples: [
          {
            dutch: 'Kunt u mij vertellen wanneer de vergadering begint?',
            english: 'Could you tell me when the meeting starts?',
            highlight: ['wanneer', 'begint'],
          },
          {
            dutch: 'Ik weet niet zeker of het rapport klaar is.',
            english: 'I\'m not sure whether the report is ready.',
            highlight: ['of', 'is'],
          },
          {
            dutch: 'Kun je nagaan wat de kosten zijn?',
            english: 'Can you check what the costs are?',
            highlight: ['wat', 'zijn'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a2-indirect-questions-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct indirect question.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Direct: "Waar is het station?" → Indirect: "Weet jij ___?"',
            options: [
              'waar is het station',
              'waar het station is',
              'het station waar is',
            ],
            correctIndex: 1,
            explanation: 'In indirect questions the verb moves to the end: waar het station is.',
          },
          {
            question: 'Direct: "Komt zij morgen?" → Indirect: "Ik weet niet ___."',
            options: [
              'of zij morgen komt',
              'als zij morgen komt',
              'of morgen zij komt',
            ],
            correctIndex: 0,
            explanation: 'Yes/no → use of; verb goes to the end: of zij morgen komt.',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the indirect question. Use the correct question word or of.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik weet niet',
            after: 'de winkel open is. (yes/no question)',
            correctAnswer: 'of',
            hint: 'yes/no embedded question → of',
          },
          {
            before: 'Kun je me vertellen',
            after: 'laat het is? (what time)',
            correctAnswer: 'hoe',
            hint: 'what time = hoe laat',
          },
          {
            before: 'Hij vraagt',
            after: 'de vergadering begint. (when)',
            correctAnswer: 'wanneer',
            hint: 'when = wanneer',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-wo-1',
      type: 'word-order',
      instruction: 'Put the indirect question in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['niet', 'hij', 'ik', 'weet', 'woont', 'waar'],
            correctOrder: ['Ik', 'weet', 'niet', 'waar', 'hij', 'woont.'],
            translation: 'I don\'t know where he lives.',
          },
          {
            shuffledWords: ['of', 'jij', 'weet', 'open', 'de', 'is', 'winkel'],
            correctOrder: ['Weet', 'jij', 'of', 'de', 'winkel', 'open', 'is?'],
            translation: 'Do you know whether the shop is open?',
          },
          {
            shuffledWords: ['wat', 'af', 'vraag', 'ik', 'me', 'kost', 'het'],
            correctOrder: ['Ik', 'vraag', 'me', 'af', 'wat', 'het', 'kost.'],
            translation: 'I wonder what it costs.',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Rewrite as indirect questions. Fill in the missing verb at the end.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Direct: "Wanneer begint de les?" → Ik weet niet wanneer de les',
            after: '.',
            correctAnswer: 'begint',
            hint: 'verb goes to the end',
          },
          {
            before: 'Direct: "Is hij ziek?" → Ik vraag me af of hij',
            after: '.',
            correctAnswer: 'ziek is',
            hint: 'yes/no question → of; verb at end',
          },
          {
            before: 'Direct: "Wat kost het?" → Kunt u vertellen wat het',
            after: '?',
            correctAnswer: 'kost',
            hint: 'verb moves to end',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct indirect question.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Direct: "Hoe heet jij?" → Indirect: "Kun jij me vertellen ___?"',
            options: [
              'hoe heet jij',
              'hoe jij heet',
              'hoe jij hebt',
            ],
            correctIndex: 1,
            explanation: 'In the indirect question the verb moves to the end: hoe jij heet.',
          },
          {
            question: 'Direct: "Heeft hij een afspraak?" → Indirect: "Ik weet niet ___."',
            options: [
              'of hij een afspraak heeft',
              'als hij een afspraak heeft',
              'of hij heeft een afspraak',
            ],
            correctIndex: 0,
            explanation: 'Yes/no question → of; verb at the end: of hij een afspraak heeft.',
          },
          {
            question: 'Which sentence uses the correct word order?',
            options: [
              'Ik vraag me af wanneer begint de trein.',
              'Ik vraag me af wanneer de trein begint.',
              'Ik vraag me af de trein wanneer begint.',
            ],
            correctIndex: 1,
            explanation: 'The verb always moves to the end of the indirect question clause.',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-ec-1',
      type: 'error-correction',
      instruction: 'Find and correct the word order error.',
      difficulty: 'open',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik weet niet waar woont hij.',
            correctedSentence: 'Ik weet niet waar hij woont.',
            errorExplanation: 'In indirect questions, the verb moves to the end of the clause.',
          },
          {
            incorrectSentence: 'Kun je me vertellen als de winkel open is?',
            correctedSentence: 'Kun je me vertellen of de winkel open is?',
            errorExplanation: 'Use of (not als) for embedded yes/no questions meaning "whether/if".',
          },
          {
            incorrectSentence: 'Ik weet niet wat kost de trein.',
            correctedSentence: 'Ik weet niet wat de trein kost.',
            errorExplanation: 'Verb goes to the end: wat de trein kost.',
          },
        ],
      },
    },
    {
      id: 'a2-indirect-questions-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch as indirect questions.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I don\'t know where the post office is.',
            correctDutch: 'Ik weet niet waar het postkantoor is.',
          },
          {
            english: 'Do you know whether she is coming tomorrow?',
            correctDutch: 'Weet jij of zij morgen komt?',
            acceptableAnswers: ['Weet je of ze morgen komt?'],
          },
          {
            english: 'Could you tell me when the meeting starts?',
            correctDutch: 'Kunt u mij vertellen wanneer de vergadering begint?',
            acceptableAnswers: ['Kun je me vertellen wanneer de vergadering begint?'],
          },
        ],
      },
    },
  ],
};
