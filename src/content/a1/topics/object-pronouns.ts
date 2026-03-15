import { Topic } from '@/content/types';

export const objectPronouns: Topic = {
  id: 'object-pronouns',
  levelId: 'a1',
  title: 'Object Pronouns',
  subtitle: 'Persoonlijke voornaamwoorden als object — me, je, hem, haar, ons, ze',
  order: 9,
  estimatedMinutes: 30,
  prerequisites: ['subject-pronouns'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Subject vs Object pronouns',
        rule: 'Subject pronouns perform the action (ik, jij, hij…). Object pronouns receive the action (me, je, hem…). They replace nouns that are the object of the verb.',
        explanation:
          'In Dutch, the object form of a pronoun is often different from the subject form. For example: "Ik bel hem" (I call him) — ik is the subject, hem is the object. Understanding object pronouns lets you replace nouns and speak much more naturally.',
      },
      {
        type: 'grammar-table',
        title: 'Subject vs Object pronouns',
        headers: ['Subject', 'Object (stressed)', 'Object (unstressed)', 'Example'],
        rows: [
          ['ik', 'mij', 'me', 'Hij belt mij. / Hij belt me.'],
          ['jij / je', 'jou', 'je', 'Ik zie jou. / Ik zie je.'],
          ['u', 'u', 'u', 'Ik help u.'],
          ['hij', 'hem', 'hem', 'Ik bel hem.'],
          ['zij / ze (she)', 'haar', 'haar', 'Ik ken haar.'],
          ['het', 'het', '\'t', 'Ik lees het.'],
          ['wij / we', 'ons', 'ons', 'Hij helpt ons.'],
          ['jullie', 'jullie', 'je', 'Ik zie jullie. / Ik zie je.'],
          ['zij / ze (they)', 'hen / hun', 'ze', 'Ik bel hen. / Ik bel ze.'],
        ],
        caption: 'In everyday spoken Dutch, the unstressed forms (me, je, ze) are used most often. The stressed forms (mij, jou, hen) emphasise or contrast.',
      },
      {
        type: 'examples',
        title: 'Object pronouns in sentences',
        examples: [
          {
            dutch: 'Ik bel hem morgen.',
            english: 'I will call him tomorrow.',
            highlight: ['hem'],
            note: 'hem replaces a male noun',
          },
          {
            dutch: 'Ken jij haar?',
            english: 'Do you know her?',
            highlight: ['haar'],
          },
          {
            dutch: 'De manager belt ons.',
            english: 'The manager is calling us.',
            highlight: ['ons'],
          },
          {
            dutch: 'Ik zie je morgen!',
            english: 'I\'ll see you tomorrow!',
            highlight: ['je'],
            note: 'Unstressed form — most natural in speech',
          },
          {
            dutch: 'Hij helpt mij altijd.',
            english: 'He always helps me.',
            highlight: ['mij'],
            note: 'Stressed form — emphasises "me specifically"',
          },
          {
            dutch: 'Wij kennen ze niet.',
            english: 'We don\'t know them.',
            highlight: ['ze'],
          },
        ],
      },
      {
        type: 'note',
        title: 'hen vs hun vs ze',
        content:
          'For "them" as an object, Dutch has three options: hen (direct object, formal), hun (indirect object, formal), ze (both, informal/spoken). In everyday speech, ze is used for almost everything. Example: "Ik bel ze" (I call them). In writing: "Ik bel hen" (direct) / "Ik geef hun een brief" (indirect — giving TO them).',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Ik bel hij morgen.',
            correct: 'Ik bel hem morgen.',
            explanation: 'hij is the subject form; as an object you need hem.',
          },
          {
            incorrect: 'De manager ziet zij.',
            correct: 'De manager ziet haar.',
            explanation: 'zij (she) is subject form; as an object you need haar.',
          },
          {
            incorrect: 'Hij helpt wij niet.',
            correct: 'Hij helpt ons niet.',
            explanation: 'wij is the subject form; as an object you need ons.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Object pronouns in the workplace',
        scenario: 'Object pronouns are essential for talking about colleagues, clients, and tasks.',
        examples: [
          {
            dutch: 'Kan ik u helpen?',
            english: 'Can I help you? (formal)',
            highlight: ['u'],
          },
          {
            dutch: 'De klant belt hem elke dag.',
            english: 'The client calls him every day.',
            highlight: ['hem'],
          },
          {
            dutch: 'Stuur je haar een e-mail?',
            english: 'Are you sending her an email?',
            highlight: ['haar'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a1-object-pronouns-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct object pronoun.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik bel ___ morgen. (him)',
            options: ['hij', 'hem', 'zijn', 'ze'],
            correctIndex: 1,
            explanation: 'him = hem (object form of hij).',
          },
          {
            question: 'Ken jij ___? (her)',
            options: ['zij', 'haar', 'ze', 'hun'],
            correctIndex: 1,
            explanation: 'her = haar (object form of zij/ze).',
          },
          {
            question: 'De manager helpt ___. (us)',
            options: ['wij', 'we', 'ons', 'onze'],
            correctIndex: 2,
            explanation: 'us = ons (object form of wij/we).',
          },
          {
            question: 'Ik zie ___ morgen. (you — informal)',
            options: ['jij', 'jou', 'je', 'Both B and C are correct'],
            correctIndex: 3,
            explanation: 'Both jou (stressed) and je (unstressed) are correct object forms for "you" informal.',
          },
        ],
      },
    },
    {
      id: 'a1-object-pronouns-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Replace the underlined noun with the correct object pronoun.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik bel',
            after: 'morgen. (mijn collega — male)',
            correctAnswer: 'hem',
            hint: 'male person → hem',
          },
          {
            before: 'Hij kent',
            after: 'goed. (mijn zus)',
            correctAnswer: 'haar',
            hint: 'female person → haar',
          },
          {
            before: 'Wij helpen',
            after: 'elke dag. (de klanten)',
            correctAnswer: 'ze',
            acceptableAnswers: ['hen'],
            hint: 'them (people) → ze / hen',
          },
        ],
      },
    },
    {
      id: 'a1-object-pronouns-mc-2',
      type: 'multiple-choice',
      instruction: 'Which sentence is correct?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Choose the correct sentence:',
            options: [
              'Ik zie hij elke dag.',
              'Ik zie hem elke dag.',
              'Ik zie zijn elke dag.',
            ],
            correctIndex: 1,
            explanation: 'him = hem as object; hij is only used as subject.',
          },
          {
            question: 'Choose the correct sentence:',
            options: [
              'De baas belt wij.',
              'De baas belt we.',
              'De baas belt ons.',
            ],
            correctIndex: 2,
            explanation: 'us = ons as object form.',
          },
        ],
      },
    },
    {
      id: 'a1-object-pronouns-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct object pronoun.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kan ik',
            after: 'helpen? (you — formal)',
            correctAnswer: 'u',
            hint: 'formal you = u (same as subject)',
          },
          {
            before: 'Stuur jij',
            after: 'een e-mail? (her)',
            correctAnswer: 'haar',
            hint: 'her = haar',
          },
          {
            before: 'Hij ziet',
            after: 'elke ochtend. (me)',
            correctAnswer: 'me',
            acceptableAnswers: ['mij'],
            hint: 'me = me or mij',
          },
        ],
      },
    },
    {
      id: 'a1-object-pronouns-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['belt', 'de', 'klant', 'elke', 'hem', 'dag'],
            correctOrder: ['De', 'klant', 'belt', 'hem', 'elke', 'dag.'],
            translation: 'The client calls him every day.',
          },
          {
            shuffledWords: ['ons', 'manager', 'de', 'helpt'],
            correctOrder: ['De', 'manager', 'helpt', 'ons.'],
            translation: 'The manager helps us.',
          },
          {
            shuffledWords: ['ze', 'niet', 'kennen', 'wij'],
            correctOrder: ['Wij', 'kennen', 'ze', 'niet.'],
            translation: 'We don\'t know them.',
          },
        ],
      },
    },
  ],
};
