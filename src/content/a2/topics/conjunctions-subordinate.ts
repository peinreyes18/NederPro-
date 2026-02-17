import { Topic } from '@/content/types';

export const conjunctionsSubordinate: Topic = {
  id: 'conjunctions-subordinate',
  levelId: 'a2',
  order: 6,
  title: 'Conjunctions and Subordinate Clauses',
  subtitle: 'Voegwoorden en bijzinnen',
  estimatedMinutes: 40,
  lessons: [
    {
      id: 'conjunctions-subordinate-1',
      title: 'Coordinating Conjunctions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Coordinating conjunctions connect two main clauses without changing word order.',
          explanation:
            'The most common coordinating conjunctions in Dutch are: en (and), of (or), maar (but), and want (because/for). When you use these, the word order in both clauses stays the same as in a normal sentence: subject + verb + rest.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik werk en hij studeert.',
              english: 'I work and he studies.',
              highlight: 'en',
            },
            {
              dutch: 'Wil je koffie of wil je thee?',
              english: 'Do you want coffee or do you want tea?',
              highlight: 'of',
            },
            {
              dutch: 'Ik ben moe, maar ik ga toch sporten.',
              english: 'I am tired, but I am going to exercise anyway.',
              highlight: 'maar',
            },
            {
              dutch: 'Ik blijf thuis, want ik ben ziek.',
              english: 'I am staying home, because I am sick.',
              highlight: 'want',
            },
          ],
        },
        {
          type: 'note',
          content:
            'Remember: "want" (because/for) is a coordinating conjunction and does NOT send the verb to the end. Do not confuse it with "omdat" (because), which IS a subordinating conjunction.',
          variant: 'warning',
        },
      ],
    },
    {
      id: 'conjunctions-subordinate-2',
      title: 'Subordinating Conjunctions and Verb-Final Position',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Subordinating conjunctions send the conjugated verb to the END of the subordinate clause.',
          explanation:
            'When a subordinating conjunction introduces a clause, the conjugated verb moves to the very end of that clause. This is one of the most important word order rules in Dutch. Common subordinating conjunctions include: dat (that), omdat (because), als (if/when), wanneer (when), toen (when, in the past), voordat (before), nadat (after), terwijl (while), hoewel/alhoewel (although), zodat (so that), totdat (until), and sinds (since).',
        },
        {
          type: 'grammar-table',
          headers: ['Conjunction', 'Meaning', 'Example'],
          rows: [
            ['dat', 'that', 'Ik weet dat hij morgen komt.'],
            ['omdat', 'because', 'Ik blijf thuis omdat ik ziek ben.'],
            ['als', 'if / when', 'Als het regent, blijf ik thuis.'],
            ['wanneer', 'when', 'Wanneer kom je? (direct) / Ik weet niet wanneer hij komt. (subordinate)'],
            ['toen', 'when (past)', 'Toen ik klein was, woonde ik in Amsterdam.'],
            ['voordat', 'before', 'Voordat ik ga, maak ik het af.'],
            ['nadat', 'after', 'Nadat hij had gegeten, ging hij weg.'],
            ['terwijl', 'while', 'Terwijl ik kook, leest hij de krant.'],
            ['hoewel', 'although', 'Hoewel het regent, gaan we wandelen.'],
            ['zodat', 'so that', 'Ik studeer hard zodat ik slaag.'],
            ['totdat', 'until', 'Wacht totdat ik klaar ben.'],
            ['sinds', 'since', 'Sinds ik hier woon, voel ik me gelukkig.'],
          ],
          caption: 'Common subordinating conjunctions in Dutch',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik weet dat hij morgen komt.',
              english: 'I know that he is coming tomorrow.',
              highlight: 'dat hij morgen komt',
              note: 'The verb "komt" goes to the end of the subordinate clause.',
            },
            {
              dutch: 'Omdat ik ziek ben, werk ik niet.',
              english: 'Because I am sick, I do not work.',
              highlight: 'Omdat ik ziek ben',
              note: 'The verb "ben" goes to the end. The main clause starts with the verb "werk" (inversion).',
            },
            {
              dutch: 'Ik blijf thuis totdat het stopt met regenen.',
              english: 'I am staying home until it stops raining.',
              highlight: 'totdat het stopt',
            },
          ],
        },
      ],
    },
    {
      id: 'conjunctions-subordinate-3',
      title: 'Inversion After a Subordinate Clause',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When a subordinate clause comes FIRST, the main clause begins with the conjugated verb (inversion).',
          explanation:
            'In Dutch, the verb in a main clause must always be in the second position. When a subordinate clause occupies the first position, the entire subordinate clause counts as position 1, so the verb of the main clause must come immediately after. This is called inversion.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Als het regent, blijf ik thuis.',
              english: 'If it rains, I stay home.',
              highlight: 'blijf ik',
              note: 'After the subordinate clause, the main clause verb "blijf" comes before the subject "ik".',
            },
            {
              dutch: 'Omdat ik een afspraak heb, ga ik eerder weg.',
              english: 'Because I have an appointment, I am leaving earlier.',
              highlight: 'ga ik',
            },
            {
              dutch: 'Wanneer je klaar bent, kun je naar huis gaan.',
              english: 'When you are ready, you can go home.',
              highlight: 'kun je',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Omdat ik ziek ben, ik werk niet.',
              correct: 'Omdat ik ziek ben, werk ik niet.',
              explanation:
                'After a subordinate clause at the start, the main clause must begin with the verb, not the subject. The verb and subject invert.',
            },
            {
              incorrect: 'Ik weet dat hij komt morgen.',
              correct: 'Ik weet dat hij morgen komt.',
              explanation:
                'In a subordinate clause, the conjugated verb goes to the very end, after all other elements.',
            },
            {
              incorrect: 'Want ik ben ziek, blijf ik thuis.',
              correct: 'Omdat ik ziek ben, blijf ik thuis.',
              explanation:
                '"Want" is a coordinating conjunction and cannot start a sentence to introduce a reason clause with inversion. Use "omdat" instead.',
            },
          ],
        },
      ],
    },
    {
      id: 'conjunctions-subordinate-4',
      title: 'Conjunctions in the Workplace',
      sections: [
        {
          type: 'workplace-context',
          scenario:
            'Using conjunctions correctly is essential in professional communication. You need them for explaining reasons, describing conditions, and connecting ideas in meetings and emails.',
          examples: [
            {
              dutch: 'Ik denk dat de vergadering om twee uur begint.',
              english: 'I think that the meeting starts at two o\'clock.',
            },
            {
              dutch: 'Omdat ik een afspraak heb, ga ik eerder weg.',
              english: 'Because I have an appointment, I am leaving earlier.',
            },
            {
              dutch: 'Als u vragen heeft, kunt u mij bellen.',
              english: 'If you have questions, you can call me.',
            },
            {
              dutch: 'Ik stuur het rapport voordat de deadline is.',
              english: 'I will send the report before the deadline.',
            },
            {
              dutch: 'Terwijl we op het antwoord wachten, kunnen we aan iets anders werken.',
              english: 'While we wait for the answer, we can work on something else.',
            },
          ],
        },
        {
          type: 'note',
          content:
            'In professional emails, subordinating conjunctions help you write more complex and nuanced sentences. Practice combining clauses to sound more fluent and professional.',
          variant: 'tip',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-conj-mc-1',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct conjunction type.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which conjunction does NOT change the word order in a clause?',
            options: ['omdat', 'maar', 'dat', 'als'],
            correctIndex: 1,
            explanation:
              '"Maar" (but) is a coordinating conjunction. It connects two main clauses without changing the word order. The others are subordinating conjunctions that send the verb to the end.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-mc-2',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Select the correct answer about subordinate clause word order.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What happens to the verb in a subordinate clause introduced by "omdat"?',
            options: [
              'It stays in the second position.',
              'It moves to the first position.',
              'It moves to the end of the clause.',
              'It is omitted.',
            ],
            correctIndex: 2,
            explanation:
              'Subordinating conjunctions like "omdat" send the conjugated verb to the end of the subordinate clause. For example: "Omdat ik ziek ben, ..." (the verb "ben" is at the end).',
          },
        ],
      },
    },
    {
      id: 'a2-conj-mc-3',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Pick the correctly formed sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence is correct?',
            options: [
              'Ik blijf thuis want ik ben ziek.',
              'Ik blijf thuis want ik ziek ben.',
              'Want ik ziek ben, blijf ik thuis.',
              'Ik blijf thuis want ben ik ziek.',
            ],
            correctIndex: 0,
            explanation:
              '"Want" is a coordinating conjunction, so the word order in the clause after "want" stays normal: subject + verb. "Ik blijf thuis want ik ben ziek." is correct.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-1',
      type: 'word-order',
      difficulty: 'controlled',
      instruction: 'Put the words in the correct order to form a subordinate clause.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['dat', 'Ik', 'komt', 'morgen', 'weet', 'hij'],
            correctOrder: ['Ik', 'weet', 'dat', 'hij', 'morgen', 'komt'],
            translation: 'I know that he is coming tomorrow.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-2',
      type: 'word-order',
      difficulty: 'guided',
      instruction: 'Arrange the words to build the correct sentence with "omdat".',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['ben', 'omdat', 'werk', 'ik', 'ziek', 'niet', 'ik'],
            correctOrder: ['Omdat', 'ik', 'ziek', 'ben', 'werk', 'ik', 'niet'],
            translation: 'Because I am sick, I do not work.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-3',
      type: 'word-order',
      difficulty: 'guided',
      instruction: 'Build the correct sentence using "als" with inversion.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['het', 'regent', 'als', 'ik', 'blijf', 'thuis'],
            correctOrder: ['Als', 'het', 'regent', 'blijf', 'ik', 'thuis'],
            translation: 'If it rains, I stay home.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-4',
      type: 'word-order',
      difficulty: 'guided',
      instruction: 'Order the words to form a sentence with "dat".',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['vergadering', 'denk', 'de', 'dat', 'ik', 'om', 'begint', 'twee', 'uur'],
            correctOrder: ['Ik', 'denk', 'dat', 'de', 'vergadering', 'om', 'twee', 'uur', 'begint'],
            translation: 'I think the meeting starts at two o\'clock.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-fill-1',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Fill in the correct conjunction.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik weet niet',
            after: 'hij vandaag komt.',
            correctAnswer: 'of',
            acceptableAnswers: ['of'],
            hint: 'Use the conjunction meaning "whether/if".',
          },
        ],
      },
    },
    {
      id: 'a2-conj-fill-2',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction: 'Complete the sentence with the missing conjunction.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'ik klaar ben, ga ik naar huis.',
            correctAnswer: 'Wanneer',
            acceptableAnswers: ['Wanneer', 'Als'],
            hint: 'Use a conjunction meaning "when".',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-5',
      type: 'word-order',
      difficulty: 'open',
      instruction: 'Put the words in the correct order using "terwijl".',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['terwijl', 'wachten', 'we', 'antwoord', 'het', 'op', 'kunnen', 'aan', 'we', 'werken', 'anders', 'iets'],
            correctOrder: ['Terwijl', 'we', 'op', 'het', 'antwoord', 'wachten', 'kunnen', 'we', 'aan', 'iets', 'anders', 'werken'],
            translation: 'While we wait for the answer, we can work on something else.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-6',
      type: 'word-order',
      difficulty: 'open',
      instruction: 'Arrange the words to form a sentence with "voordat".',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['voordat', 'is', 'stuur', 'het', 'rapport', 'ik', 'deadline', 'de'],
            correctOrder: ['Ik', 'stuur', 'het', 'rapport', 'voordat', 'de', 'deadline', 'is'],
            translation: 'I will send the report before the deadline.',
          },
        ],
      },
    },
    {
      id: 'a2-conj-order-7',
      type: 'word-order',
      difficulty: 'open',
      instruction: 'Build the correct sentence with "hoewel" and inversion.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['hoewel', 'druk', 'het', 'is', 'probeer', 'ik', 'op', 'tijd', 'te', 'zijn'],
            correctOrder: ['Hoewel', 'het', 'druk', 'is', 'probeer', 'ik', 'op', 'tijd', 'te', 'zijn'],
            translation: 'Although it is busy, I try to be on time.',
          },
        ],
      },
    },
  ],
};
