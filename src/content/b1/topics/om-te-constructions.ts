import { Topic } from '@/content/types';

export const omTeConstructions: Topic = {
  id: 'om-te-constructions',
  levelId: 'b1',
  title: 'Om...te Constructions',
  subtitle: 'Infinitief met om...te — expressing purpose and result',
  order: 11,
  estimatedMinutes: 30,
  prerequisites: ['infinitive-constructions'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What is om...te?',
        rule: 'Om...te introduces an infinitive clause that expresses purpose (in order to), result, or content after certain adjectives and verbs. The infinitive always comes at the end.',
        explanation:
          'The om...te construction is the Dutch equivalent of English "to" (in order to / to do something). It is used to express purpose, and also after many common adjectives (blij, klaar, moeilijk, gemakkelijk) and verbs (proberen, vergeten, beginnen). The structure: om + [rest of clause] + te + infinitive.',
      },
      {
        type: 'grammar-table',
        title: 'Om...te: structure and uses',
        headers: ['Use', 'Structure', 'Example'],
        rows: [
          ['Purpose (in order to)', 'om + ... + te + inf.', 'Ik leer Nederlands om te werken in Nederland.'],
          ['After adjective', 'adj. + om + te + inf.', 'Het is moeilijk om Nederlands te leren.'],
          ['After verb: proberen', 'proberen + om + te + inf.', 'Ik probeer om gezond te eten.'],
          ['After verb: vergeten', 'vergeten + te + inf.', 'Ik vergat te bellen.'],
          ['After verb: beginnen', 'beginnen + te + inf.', 'Het begint te regenen.'],
        ],
        caption: 'Note: with proberen, vergeten, and beginnen, om is optional or omitted. With purpose clauses and adjective constructions, om is required.',
      },
      {
        type: 'examples',
        title: 'Om...te in sentences',
        examples: [
          {
            dutch: 'Ik leer Nederlands om te werken in Nederland.',
            english: 'I am learning Dutch (in order) to work in the Netherlands.',
            highlight: ['om', 'te', 'werken'],
          },
          {
            dutch: 'Hij gaat elke dag naar de sportschool om fit te blijven.',
            english: 'He goes to the gym every day (in order) to stay fit.',
            highlight: ['om', 'te', 'blijven'],
          },
          {
            dutch: 'Het is niet gemakkelijk om een huis te vinden.',
            english: 'It is not easy to find a house.',
            highlight: ['om', 'te', 'vinden'],
          },
          {
            dutch: 'Ik ben blij om hier te zijn.',
            english: 'I am happy to be here.',
            highlight: ['om', 'te', 'zijn'],
          },
          {
            dutch: 'Ze probeert elke dag om vroeg op te staan.',
            english: 'She tries to get up early every day.',
            highlight: ['om', 'te', 'op', 'staan'],
            note: 'Separable verb: op + staan → te goes between op and staan: op te staan',
          },
          {
            dutch: 'Hij vergat zijn sleutels mee te nemen.',
            english: 'He forgot to take his keys.',
            highlight: ['te', 'nemen'],
            note: 'vergeten + te + infinitive (om optional)',
          },
        ],
      },
      {
        type: 'note',
        title: 'Separable verbs with om...te',
        content:
          'With separable verbs, te goes between the prefix and the verb: opstaan → op te staan. meenemen → mee te nemen. bellen → te bellen (not separable — no split). This is one of the trickier aspects of om...te.',
        variant: 'warning',
      },
      {
        type: 'note',
        title: 'When to use om and when to omit it',
        content:
          'After proberen, vergeten, beginnen, and a few other verbs, om can be omitted: "Ik probeer gezond te eten" and "Ik probeer om gezond te eten" are both correct. However, in purpose clauses ("I go to the gym IN ORDER TO...") and after adjectives ("it is hard TO..."), om is always required.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Ik leer Nederlands om werken in Nederland.',
            correct: 'Ik leer Nederlands om te werken in Nederland.',
            explanation: 'The te before the infinitive is required in om...te constructions.',
          },
          {
            incorrect: 'Ze probeert vroeg opstaan te.',
            correct: 'Ze probeert vroeg op te staan.',
            explanation: 'te goes between the prefix (op) and the verb stem (staan): op te staan.',
          },
          {
            incorrect: 'Het is moeilijk te leren Nederlands.',
            correct: 'Het is moeilijk om Nederlands te leren.',
            explanation: 'om is required after adjectives; the infinitive goes to the end of the clause.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Om...te in professional contexts',
        scenario: 'You will use om...te to express goals, obligations, and intentions in formal writing and workplace speech.',
        examples: [
          {
            dutch: 'Wij doen ons best om de kwaliteit te verbeteren.',
            english: 'We do our best (in order) to improve the quality.',
            highlight: ['om', 'te', 'verbeteren'],
          },
          {
            dutch: 'Het is belangrijk om op tijd te zijn.',
            english: 'It is important to be on time.',
            highlight: ['om', 'te', 'zijn'],
          },
          {
            dutch: 'Ze zijn bereid om extra uren te werken.',
            english: 'They are willing to work extra hours.',
            highlight: ['om', 'te', 'werken'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'b1-om-te-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct om...te sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik leer Nederlands ___ werken in Nederland.',
            options: ['om te', 'om', 'te', 'voor te'],
            correctIndex: 0,
            explanation: 'Purpose clause requires om te + infinitive.',
          },
          {
            question: 'Het is moeilijk ___ een huis vinden.',
            options: ['te', 'om te', 'voor', 'dat'],
            correctIndex: 1,
            explanation: 'After an adjective: om te + infinitive.',
          },
          {
            question: 'Ze proberen gezond ___. (eten)',
            options: ['om eten', 'te eten', 'om te eten', 'Both B and C'],
            correctIndex: 3,
            explanation: 'After proberen, om is optional: "te eten" and "om te eten" are both correct.',
          },
        ],
      },
    },
    {
      id: 'b1-om-te-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the om...te construction. Use the verb in brackets.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik ga naar de bibliotheek om',
            after: '. (studeren)',
            correctAnswer: 'te studeren',
            hint: 'om + te + infinitive',
          },
          {
            before: 'Het is niet gemakkelijk om een baan',
            after: '. (vinden)',
            correctAnswer: 'te vinden',
            hint: 'te + infinitive at end',
          },
          {
            before: 'Hij vergat zijn rapport',
            after: '. (opsturen)',
            correctAnswer: 'op te sturen',
            hint: 'separable verb: op + te + sturen',
          },
        ],
      },
    },
    {
      id: 'b1-om-te-wo-1',
      type: 'word-order',
      instruction: 'Put the om...te clause in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['Nederlands', 'om', 'leer', 'te', 'ik', 'werken'],
            correctOrder: ['Ik', 'leer', 'Nederlands', 'om', 'te', 'werken.'],
            translation: 'I learn Dutch (in order) to work.',
          },
          {
            shuffledWords: ['is', 'op', 'het', 'om', 'tijd', 'zijn', 'te', 'belangrijk'],
            correctOrder: ['Het', 'is', 'belangrijk', 'om', 'op', 'tijd', 'te', 'zijn.'],
            translation: 'It is important to be on time.',
          },
          {
            shuffledWords: ['probeert', 'vroeg', 'op', 'ze', 'te', 'staan'],
            correctOrder: ['Ze', 'probeert', 'vroeg', 'op', 'te', 'staan.'],
            translation: 'She tries to get up early.',
          },
        ],
      },
    },
    {
      id: 'b1-om-te-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete each sentence with the correct om...te form of the verb in brackets.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wij doen ons best om de kwaliteit',
            after: '. (verbeteren)',
            correctAnswer: 'te verbeteren',
            hint: 'te + infinitive at end',
          },
          {
            before: 'Ze zijn bereid om extra uren',
            after: '. (werken)',
            correctAnswer: 'te werken',
            hint: 'te + infinitive',
          },
          {
            before: 'Hij begint',
            after: '. (begrijpen — without om)',
            correctAnswer: 'te begrijpen',
            hint: 'beginnen + te + infinitive (no om needed)',
          },
        ],
      },
    },
  ],
};
