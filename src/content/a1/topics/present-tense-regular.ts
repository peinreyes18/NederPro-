import { Topic } from '@/content/types';

export const presentTenseRegular: Topic = {
  id: 'present-tense-regular',
  levelId: 'a1',
  title: 'Present Tense: Regular Verbs',
  subtitle: 'Onvoltooid tegenwoordige tijd (OTT)',
  order: 1,
  estimatedMinutes: 35,
  prerequisites: ['subject-pronouns'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Finding the Stem (de stam)',
        rule: 'To conjugate a regular Dutch verb, first find the stem by removing -en from the infinitive.',
        explanation:
          'The stem (stam) is the foundation of Dutch verb conjugation. Take the infinitive form of the verb (e.g., werken) and remove the -en ending to get the stem (werk). There are a few spelling adjustments to keep in mind: if the stem ends in a doubled consonant, you keep only one (e.g., pakken \u2192 pak); if the stem ends in a "v", change it to "f" (e.g., leven \u2192 leef); if the stem ends in a "z", change it to "s" (e.g., reizen \u2192 reis). These spelling changes preserve the original vowel sound of the infinitive.',
      },
      {
        type: 'grammar-table',
        title: 'Regular Verb Conjugation Pattern',
        headers: ['Pronoun', 'Conjugation', 'Example (werken)'],
        rows: [
          ['ik', 'stam', 'ik werk'],
          ['jij / je', 'stam + t', 'jij werkt'],
          ['u', 'stam + t', 'u werkt'],
          ['hij / zij / het', 'stam + t', 'hij werkt'],
          ['wij / we', 'infinitief', 'wij werken'],
          ['jullie', 'infinitief', 'jullie werken'],
          ['zij / ze (plural)', 'infinitief', 'zij werken'],
        ],
        caption:
          'Note: when "jij/je" comes AFTER the verb (in questions), the -t is dropped: "Werk jij hier?"',
      },
      {
        type: 'grammar-rule',
        title: 'Spelling Changes for the Stem',
        rule: 'Double consonants become single; "v" becomes "f"; "z" becomes "s".',
        explanation:
          'Dutch spelling rules require these adjustments to maintain correct pronunciation. A doubled consonant in the infinitive keeps the preceding vowel short (pakken \u2192 pak, not paak). The changes from "v" to "f" and "z" to "s" occur because voiced consonants (v, z) become voiceless (f, s) at the end of a syllable in Dutch. Compare: leven (to live) \u2192 stam: leef; schrijven (to write) \u2192 stam: schrijf; reizen (to travel) \u2192 stam: reis; verhuizen (to move house) \u2192 stam: verhuis.',
      },
      {
        type: 'examples',
        title: 'Regular Verb Examples',
        examples: [
          {
            dutch: 'Ik werk elke dag.',
            english: 'I work every day.',
            highlight: ['werk'],
            note: 'werken \u2192 stam: werk (ik-form = stem)',
          },
          {
            dutch: 'Jij woont in Amsterdam.',
            english: 'You live in Amsterdam.',
            highlight: ['woont'],
            note: 'wonen \u2192 stam: woon + t = woont',
          },
          {
            dutch: 'Hij leeft gezond.',
            english: 'He lives healthily.',
            highlight: ['leeft'],
            note: 'leven \u2192 stam: leef (v \u2192 f) + t = leeft',
          },
          {
            dutch: 'Zij reist naar Belgi\u00eb.',
            english: 'She travels to Belgium.',
            highlight: ['reist'],
            note: 'reizen \u2192 stam: reis (z \u2192 s) + t = reist',
          },
          {
            dutch: 'Wij maken een rapport.',
            english: 'We make a report.',
            highlight: ['maken'],
            note: 'wij/we \u2192 infinitive form: maken',
          },
          {
            dutch: 'Werk jij op kantoor?',
            english: 'Do you work at the office?',
            highlight: ['Werk'],
            note: 'Inversion: jij comes after the verb, so the -t is dropped',
          },
        ],
      },
      {
        type: 'note',
        title: 'The jij/je Inversion Rule',
        content:
          'When jij or je comes AFTER the verb (typically in questions or after certain introductory words), the -t ending is dropped from the verb. For example: "Jij werkt hier." (statement) vs. "Werk jij hier?" (question). This only applies to jij/je, not to u, hij, or zij.',
        variant: 'warning',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes with Regular Verbs',
        mistakes: [
          {
            incorrect: 'Ik werkt elke dag.',
            correct: 'Ik werk elke dag.',
            explanation:
              'The ik-form uses only the stem, without -t. Only jij/u/hij/zij/het get the -t ending.',
          },
          {
            incorrect: 'Hij levent in Nederland.',
            correct: 'Hij leeft in Nederland.',
            explanation:
              'The stem of "leven" is "leef" (v \u2192 f), not "leven" minus "-en" plus "-t". Remember the v \u2192 f spelling change.',
          },
          {
            incorrect: 'Werkt jij hier?',
            correct: 'Werk jij hier?',
            explanation:
              'When jij/je comes after the verb, the -t is dropped. "Werkt jij" is incorrect; it should be "Werk jij".',
          },
          {
            incorrect: 'Wij werkt samen.',
            correct: 'Wij werken samen.',
            explanation:
              'With wij/we, jullie, and zij (plural), the verb takes the infinitive form (werken), not the stam + t form.',
          },
          {
            incorrect: 'Zij reizet naar Duitsland.',
            correct: 'Zij reist naar Duitsland.',
            explanation:
              'The stem of "reizen" is "reis" (z \u2192 s). The conjugation is reis + t = reist, not "reize" + t.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Regular Verbs at Work',
        scenario:
          'In a Dutch workplace, you will constantly use regular verbs to talk about daily tasks, communication, and collaboration. Here are some common workplace sentences using regular present-tense verbs.',
        examples: [
          {
            dutch: 'Ik werk bij een groot bedrijf.',
            english: 'I work at a large company.',
            highlight: ['werk'],
          },
          {
            dutch: 'Zij schrijft een e-mail aan de klant.',
            english: 'She writes an email to the client.',
            highlight: ['schrijft'],
          },
          {
            dutch: 'Wij vergaderen elke maandag.',
            english: 'We have a meeting every Monday.',
            highlight: ['vergaderen'],
          },
          {
            dutch: 'Hij belt de leverancier.',
            english: 'He calls the supplier.',
            highlight: ['belt'],
          },
          {
            dutch: 'Maak jij de notulen?',
            english: 'Do you take the minutes?',
            highlight: ['Maak'],
            note: 'Inversion with jij: -t is dropped from "maakt"',
          },
        ],
      },
      {
        type: 'note',
        title: 'Tip: Practicing with Daily Routines',
        content:
          'A great way to practice regular verb conjugation is to describe your daily routine in Dutch. Try writing out what you do each morning: "Ik open mijn laptop. Ik lees mijn e-mails. Ik bel mijn collega." This helps you internalize the conjugation patterns naturally.',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-present-tense-regular-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct present tense form of the verb in parentheses.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'elke dag op kantoor. (werken)',
            correctAnswer: 'werk',
            hint: 'ik-form = stem only',
          },
          {
            before: 'Jij',
            after: 'in Utrecht. (wonen)',
            correctAnswer: 'woont',
            hint: 'jij-form = stem + t',
          },
          {
            before: 'Hij',
            after: 'een brief. (schrijven)',
            correctAnswer: 'schrijft',
            hint: 'v \u2192 f in the stem, then add -t',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct present tense form of the verb in parentheses.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wij',
            after: 'Nederlands. (leren)',
            correctAnswer: 'leren',
            hint: 'wij-form = infinitive',
          },
          {
            before: 'Zij (she)',
            after: 'naar Belgi\u00eb. (reizen)',
            correctAnswer: 'reist',
            hint: 'z \u2192 s in the stem, then add -t',
          },
          {
            before: 'Jullie',
            after: 'te hard. (praten)',
            correctAnswer: 'praten',
            hint: 'jullie-form = infinitive',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct verb form to complete the sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Hij ___ in een restaurant. (werken)',
            options: ['werk', 'werkt', 'werken', 'werke'],
            correctIndex: 1,
            explanation:
              'Hij takes the stem + t form. The stem of "werken" is "werk", so it becomes "werkt".',
          },
          {
            question: 'Ik ___ koffie voor de vergadering. (maken)',
            options: ['maakt', 'maak', 'maken', 'make'],
            correctIndex: 1,
            explanation:
              'Ik always takes the stem without -t. The stem of "maken" is "maak".',
          },
          {
            question: '___ jij in Amsterdam? (wonen)',
            options: ['Woont', 'Woon', 'Wonen', 'Wonet'],
            correctIndex: 1,
            explanation:
              'When jij comes AFTER the verb (inversion in a question), the -t is dropped. So it is "Woon jij", not "Woont jij".',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-mc-2',
      type: 'multiple-choice',
      instruction: 'Select the correct stem (stam) of each verb.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the stem of "leven" (to live)?',
            options: ['leven', 'leev', 'leef', 'lev'],
            correctIndex: 2,
            explanation:
              'Remove -en to get "lev", then apply the v \u2192 f rule: the stem is "leef".',
          },
          {
            question: 'What is the stem of "pakken" (to grab)?',
            options: ['pakk', 'pak', 'paken', 'pakke'],
            correctIndex: 1,
            explanation:
              'Remove -en to get "pakk", then reduce the double consonant: the stem is "pak".',
          },
          {
            question: 'What is the stem of "verhuizen" (to move house)?',
            options: ['verhuiz', 'verhuis', 'verhuize', 'verhuist'],
            correctIndex: 1,
            explanation:
              'Remove -en to get "verhuiz", then apply the z \u2192 s rule: the stem is "verhuis".',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-fill-3',
      type: 'fill-in-the-blank',
      instruction:
        'Fill in the correct verb form. Pay attention to the v/f and z/s spelling changes.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij',
            after: 'in een mooi huis. (leven)',
            correctAnswer: 'leeft',
            hint: 'Remember: v becomes f in the stem',
          },
          {
            before: 'U',
            after: 'morgen naar Duitsland. (reizen)',
            correctAnswer: 'reist',
            hint: 'Remember: z becomes s in the stem; u takes stem + t',
          },
          {
            before: '',
            after: 'jij elke dag? (fietsen)',
            correctAnswer: 'Fiets',
            acceptableAnswers: ['fiets'],
            hint: 'Inversion: jij after the verb means no -t',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['elke', 'werk', 'dag', 'ik'],
            correctOrder: ['Ik', 'werk', 'elke', 'dag.'],
            translation: 'I work every day.',
          },
          {
            shuffledWords: ['schrijft', 'een', 'zij', 'e-mail'],
            correctOrder: ['Zij', 'schrijft', 'een', 'e-mail.'],
            translation: 'She writes an email.',
          },
          {
            shuffledWords: ['in', 'wonen', 'Rotterdam', 'wij'],
            correctOrder: ['Wij', 'wonen', 'in', 'Rotterdam.'],
            translation: 'We live in Rotterdam.',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-wo-2',
      type: 'word-order',
      instruction:
        'Arrange the words to form a correct Dutch question. Remember the inversion rule!',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['hier', 'jij', 'werk'],
            correctOrder: ['Werk', 'jij', 'hier?'],
            translation: 'Do you work here?',
          },
          {
            shuffledWords: ['de', 'maakt', 'wie', 'notulen'],
            correctOrder: ['Wie', 'maakt', 'de', 'notulen?'],
            translation: 'Who takes the minutes?',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-fill-4',
      type: 'fill-in-the-blank',
      instruction:
        'Complete these workplace sentences with the correct verb form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De manager',
            after: 'het team elke ochtend. (bellen)',
            correctAnswer: 'belt',
            hint: 'Double consonant rule: bellen \u2192 bel + t',
          },
          {
            before: 'Wij',
            after: 'samen aan het project. (werken)',
            correctAnswer: 'werken',
            hint: 'wij takes the infinitive form',
          },
          {
            before: '',
            after: 'u ook naar de vergadering? (komen)',
            correctAnswer: 'Komt',
            acceptableAnswers: ['komt'],
            hint: 'u takes stem + t; komen \u2192 stam: kom + t',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-mc-3',
      type: 'multiple-choice',
      instruction: 'Which sentence is grammatically correct?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is correct?',
            options: [
              'Ik werkt bij een bank.',
              'Ik werk bij een bank.',
              'Ik werken bij een bank.',
              'Ik werke bij een bank.',
            ],
            correctIndex: 1,
            explanation:
              'The ik-form uses the stem only, without -t or -en. "Ik werk" is correct.',
          },
          {
            question: 'Which question is correct?',
            options: [
              'Werkt jij op maandag?',
              'Werken jij op maandag?',
              'Werk jij op maandag?',
              'Werke jij op maandag?',
            ],
            correctIndex: 2,
            explanation:
              'In questions with inversion, the -t is dropped when jij/je follows the verb. "Werk jij" is correct.',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-wo-3',
      type: 'word-order',
      instruction:
        'Arrange these words into a correct Dutch sentence. Pay attention to verb position.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['vergaderen', 'elke', 'wij', 'maandag', 'op', 'kantoor'],
            correctOrder: ['Wij', 'vergaderen', 'elke', 'maandag', 'op', 'kantoor.'],
            translation: 'We meet every Monday at the office.',
          },
          {
            shuffledWords: ['de', 'schrijft', 'een', 'collega', 'e-mail', 'aan', 'klant', 'de'],
            correctOrder: ['De', 'collega', 'schrijft', 'een', 'e-mail', 'aan', 'de', 'klant.'],
            translation: 'The colleague writes an email to the client.',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-fill-5',
      type: 'fill-in-the-blank',
      instruction:
        'Complete the paragraph by filling in the correct form of each verb.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Elke ochtend',
            after: 'ik naar kantoor. (fietsen)',
            correctAnswer: 'fiets',
            hint: 'Ik-form; note the inversion when time comes first',
          },
          {
            before: 'Mijn collega',
            after: 'altijd koffie. (maken)',
            correctAnswer: 'maakt',
          },
          {
            before: 'Wij',
            after: 'samen en daarna beginnen we met werken. (lunchen)',
            correctAnswer: 'lunchen',
          },
        ],
      },
    },
    {
      id: 'a1-present-tense-regular-mc-4',
      type: 'multiple-choice',
      instruction:
        'Read the mini-dialogue and choose the correct verb form.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question:
              'A: "Waar ___ jullie?" B: "Wij ___ in Den Haag." (wonen)',
            options: [
              'woont / woont',
              'wonen / wonen',
              'woon / wonen',
              'woont / wonen',
            ],
            correctIndex: 1,
            explanation:
              'Both jullie and wij take the infinitive form: "wonen". So the answer is "wonen / wonen".',
          },
          {
            question:
              'A: "___ u Nederlands?" B: "Ja, ik ___ een beetje Nederlands." (spreken)',
            options: [
              'Spreekt / spreek',
              'Spreek / spreekt',
              'Spreken / spreek',
              'Spreekt / spreekt',
            ],
            correctIndex: 0,
            explanation:
              'U takes stem + t: "spreekt". Ik takes the stem only: "spreek".',
          },
        ],
      },
    },
  ],
};
