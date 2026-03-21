import { Topic } from '@/content/types';

export const expressingContrast: Topic = {
  id: 'expressing-contrast',
  levelId: 'b1',
  title: 'Expressing Contrast and Addition',
  subtitle: 'Zowel...als, niet alleen...maar ook, terwijl, toch, echter',
  order: 12,
  estimatedMinutes: 30,
  prerequisites: ['conjunctions-connectors'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Connectors for contrast and addition',
        rule: 'Dutch has several structures for expressing contrast (but, however, while) and addition (both...and, not only...but also). These are essential for fluent, nuanced writing and speech.',
        explanation:
          'At B1 level you need to go beyond simple conjunctions like maar (but) and en (and). This topic covers correlative conjunctions (zowel...als, niet alleen...maar ook), contrastive conjunctions (terwijl, hoewel), and discourse connectors (toch, echter, daarentegen) that appear in professional and written Dutch.',
      },
      {
        type: 'grammar-table',
        title: 'Contrast and Addition Structures',
        headers: ['Dutch', 'English', 'Type', 'Example'],
        rows: [
          ['zowel...als', 'both...and', 'correlative', 'Zowel hij als zij spreken Nederlands.'],
          ['niet alleen...maar ook', 'not only...but also', 'correlative', 'Ze werkt niet alleen hard, maar ook slim.'],
          ['terwijl', 'while / whereas', 'subordinating', 'Hij slaapt terwijl ik werk.'],
          ['hoewel', 'although / even though', 'subordinating', 'Hoewel het regent, fiets ik.'],
          ['toch', 'yet / still / however', 'discourse marker', 'Het is moeilijk, maar ik doe het toch.'],
          ['echter', 'however (formal)', 'discourse marker', 'Dit is echter niet het geval.'],
          ['daarentegen', 'on the other hand', 'discourse marker', 'Hij werkt hard; zij is daarentegen lui.'],
        ],
      },
      {
        type: 'note',
        title: 'Word order with terwijl and hoewel',
        content:
          'Both terwijl and hoewel are subordinating conjunctions — the verb goes to the end of their clause. "Hoewel het regent, fiets ik." (Although it rains, I cycle.) When the subordinate clause comes first, the main clause starts with the verb (inversion): "Hoewel hij moe was, werkte hij door."',
        variant: 'tip',
      },
      {
        type: 'examples',
        title: 'Contrast and addition in context',
        examples: [
          {
            dutch: 'Zowel mijn man als mijn vrouw spreken vloeiend Nederlands.',
            english: 'Both my husband and my wife speak fluent Dutch.',
            highlight: ['Zowel', 'als'],
          },
          {
            dutch: 'Ze is niet alleen intelligent, maar ook heel vriendelijk.',
            english: 'She is not only intelligent, but also very friendly.',
            highlight: ['niet alleen', 'maar ook'],
          },
          {
            dutch: 'Terwijl hij kookt, kijk ik televisie.',
            english: 'While he cooks, I watch television.',
            highlight: ['Terwijl', 'kookt'],
            note: 'verb to the end in terwijl clause',
          },
          {
            dutch: 'Hoewel ik moe was, ben ik toch naar de vergadering gegaan.',
            english: 'Although I was tired, I still went to the meeting.',
            highlight: ['Hoewel', 'was', 'toch'],
          },
          {
            dutch: 'Dit product is goedkoop; de kwaliteit is echter uitstekend.',
            english: 'This product is cheap; the quality is however excellent.',
            highlight: ['echter'],
            note: 'echter is formal — common in business writing',
          },
        ],
      },
      {
        type: 'note',
        title: 'toch: a versatile word',
        content:
          'Toch is one of the most useful Dutch words. It can mean "yet", "still", "anyway", "however", or add emphasis. "Ik doe het toch" (I\'ll do it anyway). "Kom toch binnen!" (Come in, do!). "Dat is toch raar?" (That\'s strange, right?). Learning to use toch naturally is a big step toward fluent Dutch.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'Zowel hij als zij spreken Nederlands. (thinking it needs singular)',
            correct: 'Zowel hij als zij spreken Nederlands.',
            explanation: 'Zowel...als with two subjects requires a plural verb.',
          },
          {
            incorrect: 'Terwijl ik werk, hij slaapt.',
            correct: 'Terwijl ik werk, slaapt hij.',
            explanation: 'When a subordinate clause comes first, the main clause inverts: verb before subject.',
          },
          {
            incorrect: 'Hoewel het is koud, ik ga zwemmen.',
            correct: 'Hoewel het koud is, ga ik zwemmen.',
            explanation: 'hoewel sends the verb to the end of its clause; main clause inverts when subordinate comes first.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Contrast and addition in professional Dutch',
        scenario: 'These structures are heavily used in reports, emails, and professional presentations.',
        examples: [
          {
            dutch: 'Zowel de kosten als de kwaliteit zijn verbeterd.',
            english: 'Both the costs and the quality have improved.',
            highlight: ['Zowel', 'als'],
          },
          {
            dutch: 'We bieden niet alleen een goed salaris, maar ook uitstekende arbeidsvoorwaarden.',
            english: 'We offer not only a good salary, but also excellent working conditions.',
            highlight: ['niet alleen', 'maar ook'],
          },
          {
            dutch: 'De omzet steeg; de winst daalde echter.',
            english: 'Revenue increased; profit, however, declined.',
            highlight: ['echter'],
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'b1-expressing-contrast-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct connector.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ hij als zij werken bij dezelfde firma.',
            options: ['Zowel', 'Niet alleen', 'Hoewel', 'Terwijl'],
            correctIndex: 0,
            explanation: 'Zowel...als = both...and.',
          },
          {
            question: 'Ze is niet alleen slim, ___ ook creatief.',
            options: ['maar ook', 'als ook', 'toch ook', 'echter ook'],
            correctIndex: 0,
            explanation: 'niet alleen...maar ook = not only...but also.',
          },
          {
            question: '___ het moeilijk was, gaf hij niet op.',
            options: ['Terwijl', 'Zowel', 'Hoewel', 'Echter'],
            correctIndex: 2,
            explanation: 'Hoewel = although/even though (subordinating conjunction).',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct connector: zowel...als, niet alleen...maar ook, terwijl, hoewel, toch, echter.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'hij kookt, kijk ik televisie.',
            correctAnswer: 'Terwijl',
            hint: 'while = terwijl (verb to end in its clause)',
          },
          {
            before: 'De prijs is hoog;',
            after: 'is de kwaliteit uitstekend.',
            correctAnswer: 'echter',
            hint: 'however (formal) = echter',
          },
          {
            before: 'Het was moeilijk, maar ik deed het',
            after: '.',
            correctAnswer: 'toch',
            hint: 'anyway / still = toch',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order. Pay attention to verb position.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['hij', 'zowel', 'als', 'spreken', 'zij', 'Nederlands'],
            correctOrder: ['Zowel', 'hij', 'als', 'zij', 'spreken', 'Nederlands.'],
            translation: 'Both he and she speak Dutch.',
          },
          {
            shuffledWords: ['was', 'hoewel', 'hij', 'moe', 'hij', 'door', 'werkte'],
            correctOrder: ['Hoewel', 'hij', 'moe', 'was,', 'werkte', 'hij', 'door.'],
            translation: 'Although he was tired, he kept working.',
          },
          {
            shuffledWords: ['slim', 'ook', 'niet', 'alleen', 'maar', 'ze', 'is', 'creatief'],
            correctOrder: ['Ze', 'is', 'niet', 'alleen', 'slim,', 'maar', 'ook', 'creatief.'],
            translation: 'She is not only smart, but also creative.',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentences with the correct contrast/addition structure.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: '',
            after: 'de kosten als de kwaliteit zijn verbeterd.',
            correctAnswer: 'Zowel',
            hint: 'both...and = zowel...als',
          },
          {
            before: 'We bieden niet alleen een goed salaris,',
            after: 'uitstekende arbeidsvoorwaarden.',
            correctAnswer: 'maar ook',
            hint: 'not only...but also',
          },
          {
            before: 'De resultaten zijn goed;',
            after: 'zijn er nog verbeterpunten.',
            correctAnswer: 'toch',
            acceptableAnswers: ['echter'],
            hint: 'yet/still = toch; however = echter',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the best connector for each sentence.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '___ hij moe was, werkte hij de hele nacht door.',
            options: ['Terwijl', 'Hoewel', 'Echter', 'Toch'],
            correctIndex: 1,
            explanation: 'Hoewel = although/even though. It introduces a concessive subordinate clause.',
          },
          {
            question: 'Het project was duur; ___ waren de resultaten uitstekend.',
            options: ['hoewel', 'zowel', 'echter', 'terwijl'],
            correctIndex: 2,
            explanation: 'echter = however (formal). Used as a discourse connector between two main clauses.',
          },
          {
            question: 'Hij werkt hard ___ zij nauwelijks iets doet.',
            options: ['toch', 'echter', 'terwijl', 'zowel'],
            correctIndex: 2,
            explanation: 'terwijl = while/whereas. Used to contrast simultaneous or opposing situations.',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-ec-1',
      type: 'error-correction',
      instruction: 'Find and correct the grammar or word-order error.',
      difficulty: 'open',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Hoewel het regent, ik fiets naar het werk.',
            correctedSentence: 'Hoewel het regent, fiets ik naar het werk.',
            errorExplanation: 'When a hoewel-clause comes first, the main clause inverts: verb before subject.',
          },
          {
            incorrectSentence: 'Terwijl ik kook, hij kijkt televisie.',
            correctedSentence: 'Terwijl ik kook, kijkt hij televisie.',
            errorExplanation: 'Inversion in the main clause after a fronted subordinate clause: kijkt hij.',
          },
          {
            incorrectSentence: 'Zowel hij of zijn collega spreekt Nederlands.',
            correctedSentence: 'Zowel hij als zijn collega spreekt Nederlands.',
            errorExplanation: 'The correlative pair is zowel...als (not zowel...of).',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using the contrast or addition structure in brackets.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'Although it is expensive, the quality is excellent. (hoewel)',
            correctDutch: 'Hoewel het duur is, is de kwaliteit uitstekend.',
          },
          {
            english: 'Both the manager and the team are satisfied. (zowel...als)',
            correctDutch: 'Zowel de manager als het team is tevreden.',
            acceptableAnswers: ['Zowel de manager als het team zijn tevreden.'],
          },
          {
            english: 'She is not only smart, but also very hard-working. (niet alleen...maar ook)',
            correctDutch: 'Ze is niet alleen slim, maar ook heel hardwerkend.',
            acceptableAnswers: ['Zij is niet alleen slim, maar ook heel hardwerkend.'],
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-wo-2',
      type: 'word-order',
      instruction: 'Put the words in the correct order. Pay attention to inversion after fronted subordinate clauses.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['hoewel', 'moe', 'hij', 'was', 'werkte', 'door', 'hij'],
            correctOrder: ['Hoewel', 'hij', 'moe', 'was,', 'werkte', 'hij', 'door.'],
            translation: 'Although he was tired, he kept working.',
          },
          {
            shuffledWords: ['niet', 'alleen', 'ze', 'is', 'maar', 'ook', 'slim', 'creatief'],
            correctOrder: ['Ze', 'is', 'niet', 'alleen', 'slim,', 'maar', 'ook', 'creatief.'],
            translation: 'She is not only smart, but also creative.',
          },
          {
            shuffledWords: ['ik', 'terwijl', 'kook', 'televisie', 'kijkt', 'hij'],
            correctOrder: ['Terwijl', 'ik', 'kook,', 'kijkt', 'hij', 'televisie.'],
            translation: 'While I cook, he watches television.',
          },
        ],
      },
    },
    {
      id: 'b1-expressing-contrast-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct contrast or addition connector.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De vergadering was lang;',
            after: 'waren de besluiten duidelijk.',
            correctAnswer: 'toch',
            acceptableAnswers: ['echter'],
            hint: 'yet/still = toch; however (formal) = echter',
          },
          {
            before: '',
            after: 'de kosten als de baten zijn gestegen.',
            correctAnswer: 'Zowel',
            hint: 'both...and = zowel...als',
          },
          {
            before: 'Ze spreekt niet alleen Engels,',
            after: 'ook Duits en Frans.',
            correctAnswer: 'maar ook',
            hint: 'niet alleen...maar ook = not only...but also',
          },
        ],
      },
    },
  ],
};
