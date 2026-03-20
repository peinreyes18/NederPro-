import { Topic } from '@/content/types';

export const modalParticles: Topic = {
  id: 'modal-particles',
  levelId: 'b1',
  title: 'Modal Particles',
  subtitle: 'wel, even, maar, toch, eens, hoor, zeker — Dutch flavour words',
  order: 19,
  estimatedMinutes: 35,
  prerequisites: ['conjunctions-connectors', 'expressing-contrast'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What are modal particles?',
        rule: 'Modal particles (modale partikels) are small unstressed words — wel, even, maar, toch, eens, hoor, zeker — that modify the tone, attitude, or pragmatic meaning of a sentence without changing its core content. They are one of the most distinctively Dutch features of everyday spoken language.',
        explanation:
          'Native Dutch speakers use modal particles constantly. They can make a request sound more polite, signal impatience, express surprise, soften a command, or add reassurance — all without changing the sentence\'s factual content. Learners who master particles sound immediately more natural. Learners who avoid them often sound blunt or formal even in casual conversation.',
      },
      {
        type: 'grammar-table',
        title: 'Core modal particles and their primary meanings',
        headers: ['Particle', 'Core meaning / tone', 'Example', 'Translation'],
        rows: [
          ['even', 'briefly / just (softens a request)', 'Kun je even helpen?', 'Can you help (for a moment)?'],
          ['maar', 'go ahead / just do it (encouragement)', 'Ga maar zitten.', 'Go ahead and sit down.'],
          ['wel', 'emphasis / reassurance / "do" auxiliary', 'Ik doe het wel.', 'I will do it (don\'t worry).'],
          ['toch', 'appeal / confirmation / "surely"', 'Dat is toch niet waar?', 'That\'s not true, is it / surely?'],
          ['eens', 'just try / let\'s see (casual invitation)', 'Kom eens kijken!', 'Come and have a look!'],
          ['hoor', 'softening / reassurance at sentence end', 'Dat geeft niet, hoor.', 'That\'s fine, don\'t worry.'],
          ['zeker', 'certainty / "of course" / "surely"', 'Je bent het toch zeker vergeten?', 'You\'ve surely forgotten it?'],
          ['gewoon', '"just / simply" (nonchalance)', 'Doe gewoon normaal.', 'Just act normally.'],
        ],
      },
      {
        type: 'note',
        title: '"Even" vs "eens" for requests',
        content:
          '"Even" emphasises brevity — it signals the action will take only a moment: "Kun je even wachten?" (Can you wait just a moment?). "Eens" has more of a casual invitation feel — "let\'s" or "why don\'t you": "Kom eens langs!" (Why don\'t you come over?). Both soften the request compared to the bare imperative.',
        variant: 'tip',
      },
      {
        type: 'grammar-rule',
        title: '"Wel" — the Swiss army knife particle',
        rule: '"Wel" is the most versatile particle. It can mean: (1) emphasis/contrast with a negative ("Ik ga wel" = I AM going); (2) reassurance ("Dat komt wel goed" = That will be fine); (3) modest agreement ("Dat is wel leuk" = That\'s actually quite nice).',
        explanation:
          '"Wel" often directly contrasts with a real or implied negative. If someone says "I can\'t do it," a response with "wel" emphasises the contrary: "Dat kun je echt wel!" (You really can do it!). In positive contexts it adds a mild emphasis of pleasant surprise or reassurance.',
      },
      {
        type: 'grammar-table',
        title: '"Toch" — multiple meanings',
        headers: ['Use', 'Example', 'English equivalent'],
        rows: [
          ['Confirmation question (tag)', 'Je spreekt toch Nederlands?', 'You do speak Dutch, don\'t you?'],
          ['Contradicting a negative', 'Ik ga toch!', 'I\'m going anyway!'],
          ['Resigned acceptance', 'Het is toch al te laat.', 'It\'s too late now anyway.'],
          ['Appealing / persuading', 'Kom toch mee!', 'Come along, won\'t you!'],
          ['Expressing surprise', 'Dat is toch niet mogelijk!', 'Surely that\'s not possible!'],
        ],
      },
      {
        type: 'note',
        title: 'Position in the sentence',
        content:
          'Modal particles typically appear after the finite verb and any object pronouns, but before the main lexical verb. "Hoor" is special — it almost always appears at the very end of the sentence: "Het geeft niet, hoor." Placing "hoor" anywhere else sounds unnatural.',
        variant: 'tip',
      },
      {
        type: 'examples',
        title: 'Modal particles in natural speech',
        examples: [
          {
            dutch: 'Ga maar vast zitten, ik kom zo.',
            english: 'Go ahead and sit down, I\'ll be right there.',
            highlight: ['maar'],
            note: '"maar" = permission / encouragement to proceed',
          },
          {
            dutch: 'Ik doe het wel, maak je maar geen zorgen.',
            english: 'I\'ll do it, don\'t worry.',
            highlight: ['wel', 'maar'],
            note: '"wel" = reassurance; "maar" softens the command',
          },
          {
            dutch: 'Dat is toch niet eerlijk!',
            english: 'That\'s just not fair!',
            highlight: ['toch'],
            note: 'Appeals to the listener\'s sense of what is obvious',
          },
          {
            dutch: 'Kun je even de deur dichttrekken?',
            english: 'Could you just close the door quickly?',
            highlight: ['even'],
            note: '"even" signals it\'s a small, quick request',
          },
          {
            dutch: 'Kom eens bij ons langs dit weekend!',
            english: 'Why don\'t you come and visit us this weekend!',
            highlight: ['eens'],
            note: 'Casual invitation; warmer than a bare imperative',
          },
          {
            dutch: 'Sorry, ik wist het niet — geeft niet, hoor.',
            english: 'Sorry, I didn\'t know — that\'s all right, don\'t worry.',
            highlight: ['hoor'],
            note: '"hoor" at sentence end provides reassurance',
          },
          {
            dutch: 'Ze heeft dat boek gewoon op de grond laten liggen.',
            english: 'She just left that book lying on the floor.',
            highlight: ['gewoon'],
            note: '"gewoon" expresses mild incredulity / nonchalance',
          },
          {
            dutch: 'Dat kan toch niet waar zijn?',
            english: 'That can\'t be true, can it / surely?',
            highlight: ['toch'],
            note: 'Expresses disbelief, appeals to shared judgment',
          },
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common mistakes',
        mistakes: [
          {
            incorrect: 'Hoor, dat geeft niet.',
            correct: 'Dat geeft niet, hoor.',
            explanation: '"Hoor" as a reassurance particle always goes at the end of the sentence.',
          },
          {
            incorrect: 'Ik doe het eens. (for reassurance)',
            correct: 'Ik doe het wel.',
            explanation: '"Wel" is used for reassurance/contrast with a negative. "Eens" expresses a casual try or invitation.',
          },
          {
            incorrect: 'Kom maar eens kijken. (over-stacking)',
            correct: 'Kom eens kijken.',
            explanation: 'Stacking "maar eens" in this order sounds awkward. Use one particle.',
          },
          {
            incorrect: 'Dat is toch zeker niet waar? (over-stacking)',
            correct: 'Dat is toch niet waar?',
            explanation: 'Using too many particles at once sounds unnatural. Pick the one that matches your nuance.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Modal particles in professional Dutch',
        scenario: 'Modal particles appear even in professional emails and spoken meetings, adding natural politeness and tone.',
        examples: [
          {
            dutch: 'Kun je even de bijlage controleren?',
            english: 'Could you just check the attachment?',
          },
          {
            dutch: 'Dat klopt toch?',
            english: 'That is correct, isn\'t it?',
          },
          {
            dutch: 'We doen het maar zo.',
            english: 'Let\'s just do it this way.',
          },
          {
            dutch: 'Ik stuur het rapport wel door.',
            english: 'I\'ll forward the report (don\'t worry).',
          },
        ],
        note: 'In formal written documents, particles are generally avoided. They are essential in spoken meetings, phone calls, and workplace chat messages.',
      },
    ],
  },
  exercises: [
    {
      id: 'modal-particles-ex1',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Ga ___ zitten" — which particle completes the polite invitation to sit down?',
            options: ['maar', 'toch', 'wel', 'hoor'],
            correctIndex: 0,
            explanation: '"Maar" in imperatives signals permission or encouragement to proceed: "Ga maar zitten" = Go ahead and sit down.',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex2',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kun je',
            after: 'de deur dichtdoen?',
            correctAnswer: 'even',
            hint: 'just / quickly — brief request',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex3',
      type: 'multiple-choice',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'A colleague says "Sorry voor de vertraging." You want to reassure them it\'s fine. Which sentence is best?',
            options: [
              'Dat geeft niet, hoor.',
              'Hoor, dat geeft niet.',
              'Dat geeft niet, toch.',
              'Dat geeft niet, maar.',
            ],
            correctIndex: 0,
            explanation: '"Hoor" as a reassurance particle goes at the sentence end.',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex4',
      type: 'multiple-choice',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What does "Dat klopt toch?" most likely mean in context?',
            options: [
              'That is correct anyway.',
              'That is correct, isn\'t it? (seeking confirmation)',
              'That is surprisingly correct.',
              'That is definitely correct.',
            ],
            correctIndex: 1,
            explanation: '"Toch" in a question appeals to the listener to confirm shared knowledge.',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex5',
      type: 'error-correction',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Hoor, maak je maar geen zorgen, ik doe het wel.',
            correctedSentence: 'Maak je maar geen zorgen, ik doe het wel, hoor.',
            errorExplanation: '"Hoor" as reassurance goes at the sentence end, not the beginning.',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex6',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik ga',
            after: 'mee, ook al wil ik niet.',
            correctAnswer: 'toch',
            hint: 'anyway, regardless',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex7',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Kom ___ langs als je in de buurt bent!" — which particle makes this a casual, warm invitation?',
            options: ['eens', 'maar', 'wel', 'toch'],
            correctIndex: 0,
            explanation: '"Eens" in an imperative gives a warm, casual invitation — "why don\'t you / do come".',
          },
        ],
      },
    },
    {
      id: 'modal-particles-ex8',
      type: 'listening-comprehension',
      difficulty: 'guided',
      content: {
        type: 'listening-comprehension',
        audioText: 'Ga maar vast naar binnen, ik parkeer de auto nog even. Dat duurt toch niet lang, hoor.',
        situation: 'Two friends arriving at a venue.',
        questions: [
          {
            question: 'Which modal particles are used in this audio?',
            options: [
              'maar, even, toch, hoor',
              'wel, even, maar, zeker',
              'toch, hoor, eens, maar',
              'even, wel, hoor, zeker',
            ],
            correctIndex: 0,
            explanation: '"Maar" (go ahead), "even" (just briefly), "toch" (reassurance/surely), "hoor" (end-of-sentence reassurance).',
          },
        ],
      },
    },
  ],
};
