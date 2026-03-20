import { Topic } from '@/content/types';

export const comparison: Topic = {
  id: 'comparison',
  levelId: 'b1',
  title: 'Comparison',
  subtitle: 'Comparatives, superlatives, equality — -er, -st, meer, meest, zo...als',
  order: 20,
  estimatedMinutes: 35,
  prerequisites: ['noun-gender'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Forming comparatives and superlatives',
        rule: 'Dutch forms comparatives by adding -er to the adjective and superlatives by adding -st (or -est). Most adjectives follow this pattern. Adjectives ending in -r use "meer/meest" instead.',
        explanation:
          'The Dutch comparison system is similar to English but with some important differences: (1) "meer/meest" is used for longer adjectives or those ending in -r; (2) superlatives must agree for adjective inflection just like base adjectives; (3) the equality structure is "zo...als" (as...as).',
      },
      {
        type: 'grammar-table',
        title: 'Regular comparison formation',
        headers: ['Adjective', 'Comparative', 'Superlative', 'English'],
        rows: [
          ['groot', 'groter', 'grootst', 'big → bigger → biggest'],
          ['klein', 'kleiner', 'kleinst', 'small → smaller → smallest'],
          ['snel', 'sneller', 'snelst', 'fast → faster → fastest'],
          ['mooi', 'mooier', 'mooist', 'beautiful → more beautiful → most beautiful'],
          ['oud', 'ouder', 'oudst', 'old → older → oldest'],
          ['jong', 'jonger', 'jongst', 'young → younger → youngest'],
          ['lang', 'langer', 'langst', 'long/tall → longer → longest'],
          ['kort', 'korter', 'kortst', 'short → shorter → shortest'],
          ['duur', 'duurder', 'duurst', 'expensive → more expensive → most expensive'],
          ['lekker', 'lekkerder', 'lekkerst', 'tasty → tastier → tastiest'],
        ],
      },
      {
        type: 'note',
        title: 'Adjectives ending in -r: use meer / meest',
        content:
          'Adjectives already ending in -r cannot simply add another -r. Instead, use "meer" (comparative) and "meest" (superlative): populair → meer populair, meest populair.',
        variant: 'tip',
      },
      {
        type: 'grammar-table',
        title: 'Irregular comparisons (must memorise)',
        headers: ['Positive', 'Comparative', 'Superlative', 'English'],
        rows: [
          ['goed', 'beter', 'best', 'good → better → best'],
          ['veel', 'meer', 'meest', 'many/much → more → most'],
          ['weinig', 'minder', 'minst', 'few/little → fewer/less → fewest/least'],
          ['graag', 'liever', 'liefst', 'gladly → rather → most preferably'],
          ['ver', 'verder', 'verst', 'far → farther → farthest'],
        ],
      },
      {
        type: 'note',
        title: '"Graag" — the preference irregular',
        content:
          '"Graag" (gladly/with pleasure) has the irregular comparative "liever" (rather/prefer) and superlative "liefst" (most preferably). These are very high-frequency: "Ik drink liever thee dan koffie" (I prefer tea to coffee), "Ik zou het liefst thuis blijven" (I\'d most like to stay home).',
        variant: 'warning',
      },
      {
        type: 'grammar-rule',
        title: 'Comparative sentences: dan (than)',
        rule: 'Use "dan" (than) after a comparative to introduce the second element of a comparison: "Hij is groter dan ik." Standard Dutch uses "dan" after comparatives — not "als".',
        explanation:
          '"Als" is used only in equality constructions (zo...als). After comparatives always use "dan": "groter dan" (bigger than) not "groter als".',
      },
      {
        type: 'grammar-table',
        title: 'Comparison sentence patterns',
        headers: ['Pattern', 'Dutch example', 'English'],
        rows: [
          ['comparative + dan', 'Ze is slimmer dan haar zus.', 'She is smarter than her sister.'],
          ['zo + adj + als (equality)', 'Hij is zo groot als zijn vader.', 'He is as tall as his father.'],
          ['net zo + adj + als (equality)', 'Dit is net zo duur als dat.', 'This is just as expensive as that.'],
          ['minder + adj + dan', 'Het is minder koud dan gisteren.', 'It is less cold than yesterday.'],
          ['het + superlative + van/in', 'Zij is de beste van de klas.', 'She is the best in the class.'],
          ['superlative predicate (no inflection)', 'Deze weg is het kortst.', 'This road is the shortest.'],
        ],
      },
      {
        type: 'note',
        title: 'Superlative inflection: attributive vs predicate',
        content:
          'When the superlative comes BEFORE a noun (attributive), it inflects with -e: "de beste leerling", "het grootste huis". When it stands alone after the verb (predicate), it takes "het" + uninflected superlative: "Dit huis is het grootst." NOT "dit huis is de grootst".',
        variant: 'warning',
      },
      {
        type: 'examples',
        title: 'Comparisons in natural speech',
        examples: [
          {
            dutch: 'Amsterdam is groter dan Utrecht, maar kleiner dan Londen.',
            english: 'Amsterdam is bigger than Utrecht, but smaller than London.',
            highlight: ['groter', 'dan', 'kleiner', 'dan'],
          },
          {
            dutch: 'Ik spreek liever Nederlands dan Engels op het werk.',
            english: 'I prefer to speak Dutch rather than English at work.',
            highlight: ['liever', 'dan'],
            note: 'liever = comparative of graag',
          },
          {
            dutch: 'Het is hier net zo warm als in Spanje.',
            english: 'It is just as warm here as in Spain.',
            highlight: ['net zo', 'als'],
          },
          {
            dutch: 'Dit restaurant is het lekkerst van de stad.',
            english: 'This restaurant is the tastiest in the city.',
            highlight: ['het lekkerst'],
            note: 'predicate superlative: "het lekkerst" (no -e)',
          },
          {
            dutch: 'Ze heeft de best betaalde baan van het team.',
            english: 'She has the best-paid job in the team.',
            highlight: ['best betaalde'],
            note: 'attributive superlative inflects: best + -e',
          },
          {
            dutch: 'Hoe meer je oefent, hoe beter je wordt.',
            english: 'The more you practise, the better you get.',
            highlight: ['Hoe meer', 'hoe beter'],
            note: 'hoe...hoe = the more...the more',
          },
          {
            dutch: 'We hebben minder tijd dan we dachten.',
            english: 'We have less time than we thought.',
            highlight: ['minder', 'dan'],
          },
        ],
      },
      {
        type: 'grammar-table',
        title: 'Hoe...hoe (the more...the more)',
        headers: ['Dutch', 'English'],
        rows: [
          ['Hoe groter, hoe beter.', 'The bigger, the better.'],
          ['Hoe meer je leest, hoe meer je leert.', 'The more you read, the more you learn.'],
          ['Hoe eerder, hoe liever.', 'The sooner, the better.'],
          ['Hoe ouder je wordt, hoe sneller de tijd gaat.', 'The older you get, the faster time passes.'],
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common mistakes',
        mistakes: [
          {
            incorrect: 'Ze is groter als ik.',
            correct: 'Ze is groter dan ik.',
            explanation: 'After comparatives, use "dan" (than), not "als". "Als" is for equality constructions (zo...als).',
          },
          {
            incorrect: 'Dit is het grootst huis.',
            correct: 'Dit is het grootste huis.',
            explanation: 'Attributive superlative (before a noun) adds -e: "het grootste huis".',
          },
          {
            incorrect: 'Ik wil liefst koffie.',
            correct: 'Ik drink liever koffie.',
            explanation: '"Liever" is the comparative of graag (preferring one over another). "Liefst" is the superlative (most preferred of all options).',
          },
          {
            incorrect: 'meer groot',
            correct: 'groter',
            explanation: 'Short, one-syllable adjectives always use the -er/-st suffix. "Meer groot" is incorrect.',
          },
          {
            incorrect: 'Zij is de beste in haar klas.',
            correct: 'Zij is de beste van haar klas.',
            explanation: 'For "best in a group", Dutch uses "van" (of): "de beste van de klas".',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Comparisons in professional Dutch',
        scenario: 'Comparisons are used constantly in professional evaluations, reports, and presentations.',
        examples: [
          {
            dutch: 'De nieuwe aanpak is efficiënter dan de vorige.',
            english: 'The new approach is more efficient than the previous one.',
          },
          {
            dutch: 'Het beste scenario is een stapsgewijze implementatie.',
            english: 'The best scenario is a step-by-step implementation.',
          },
          {
            dutch: 'Hoe meer data, hoe betrouwbaarder de analyse.',
            english: 'The more data, the more reliable the analysis.',
          },
          {
            dutch: 'Dit kwartaal presteerden we beter dan verwacht.',
            english: 'This quarter we performed better than expected.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'comparison-ex1',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Mijn auto is',
            after: 'dan jouw auto.',
            correctAnswer: 'groter',
            hint: 'comparative of groot',
          },
        ],
      },
    },
    {
      id: 'comparison-ex2',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Choose the correct sentence:',
            options: [
              'Ze is slimmer als haar broer.',
              'Ze is slimmer dan haar broer.',
              'Ze is meer slim dan haar broer.',
              'Ze is slim dan haar broer.',
            ],
            correctIndex: 1,
            explanation: 'Comparative + "dan" (not "als"). Short adjectives use -er, not "meer".',
          },
        ],
      },
    },
    {
      id: 'comparison-ex3',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the correct superlative of "goed"?',
            options: ['goedst', 'beters', 'best', 'goedste'],
            correctIndex: 2,
            explanation: '"Goed" is irregular: goed → beter → best.',
          },
        ],
      },
    },
    {
      id: 'comparison-ex4',
      type: 'error-correction',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Dit is het grootst hotel van de stad.',
            correctedSentence: 'Dit is het grootste hotel van de stad.',
            errorExplanation: 'Attributive superlative (before a noun) requires inflection: "het grootste hotel".',
          },
        ],
      },
    },
    {
      id: 'comparison-ex5',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hoe meer je oefent, hoe',
            after: 'je wordt.',
            correctAnswer: 'beter',
            hint: 'comparative of goed',
          },
        ],
      },
    },
    {
      id: 'comparison-ex6',
      type: 'multiple-choice',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Ik drink ___ thee dan koffie." — What word expresses preference here?',
            options: ['liever', 'liefst', 'meer', 'graag'],
            correctIndex: 0,
            explanation: '"Liever" (comparative of graag) expresses preference between two options.',
          },
        ],
      },
    },
    {
      id: 'comparison-ex7',
      type: 'word-order',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['ze', 'dan', 'is', 'haar', 'slim', 'zus', 'slimmer'],
            correctOrder: ['Ze', 'is', 'slimmer', 'dan', 'haar', 'zus', '.'],
            translation: 'She is smarter than her sister.',
          },
        ],
      },
    },
    {
      id: 'comparison-ex8',
      type: 'listening-comprehension',
      difficulty: 'guided',
      content: {
        type: 'listening-comprehension',
        audioText:
          'Rotterdam is groter dan Den Haag, maar niet zo groot als Amsterdam. Het is wel de grootste haven van Europa.',
        situation: 'A geography lesson about Dutch cities.',
        questions: [
          {
            question: 'Which comparison is made about Rotterdam?',
            options: [
              'Rotterdam is bigger than Amsterdam but smaller than Den Haag.',
              'Rotterdam is bigger than Den Haag but not as big as Amsterdam.',
              'Rotterdam is the biggest city in Europe.',
              'Rotterdam and Amsterdam are the same size.',
            ],
            correctIndex: 1,
            explanation: '"groter dan Den Haag" (bigger than Den Haag), "niet zo groot als Amsterdam" (not as big as Amsterdam).',
          },
        ],
      },
    },
  ],
};
