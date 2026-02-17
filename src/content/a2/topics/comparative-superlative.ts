import { Topic } from '@/content/types';

export const comparativeSuperlative: Topic = {
  id: 'comparative-superlative',
  levelId: 'a2',
  order: 9,
  title: 'Comparatives and Superlatives',
  subtitle: 'De vergrotende en overtreffende trap',
  estimatedMinutes: 30,
  lessons: [
    {
      id: 'comparative-superlative-1',
      title: 'Forming the Comparative',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'To form the comparative in Dutch, add -er to the adjective. Use "dan" (than) for comparisons.',
          explanation:
            'The comparative (vergrotende trap) is formed by adding -er to the base form of the adjective. The same Dutch spelling rules that apply when adding -e to adjectives also apply here: double vowels may be shortened, double consonants may be added, etc. After the comparative, use "dan" (than) to introduce the thing being compared.',
        },
        {
          type: 'grammar-table',
          headers: ['Adjective', 'Meaning', 'Comparative', 'Example'],
          rows: [
            ['groot', 'big/tall', 'groter', 'Hij is groter dan ik.'],
            ['klein', 'small', 'kleiner', 'Deze kamer is kleiner dan die kamer.'],
            ['mooi', 'beautiful', 'mooier', 'Dit schilderij is mooier dan dat.'],
            ['duur', 'expensive', 'duurder', 'De trein is duurder dan de bus.'],
            ['oud', 'old', 'ouder', 'Mijn broer is ouder dan ik.'],
            ['snel', 'fast', 'sneller', 'De auto is sneller dan de fiets.'],
            ['lang', 'long/tall', 'langer', 'Haar haar is langer dan mijn haar.'],
            ['belangrijk', 'important', 'belangrijker', 'Gezondheid is belangrijker dan geld.'],
          ],
          caption: 'Regular comparative forms',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Hij is groter dan ik.',
              english: 'He is taller than me.',
              highlight: 'groter dan',
            },
            {
              dutch: 'Amsterdam is groter dan Utrecht.',
              english: 'Amsterdam is bigger than Utrecht.',
              highlight: 'groter dan',
            },
            {
              dutch: 'Deze taak is moeilijker dan ik dacht.',
              english: 'This task is more difficult than I thought.',
              highlight: 'moeilijker dan',
            },
          ],
        },
        {
          type: 'note',
          content:
            'Unlike English, Dutch always adds -er to the adjective, even for long adjectives. There is no equivalent of "more + adjective". For example: "belangrijker" (more important), not "meer belangrijk".',
          variant: 'info',
        },
      ],
    },
    {
      id: 'comparative-superlative-2',
      title: 'Forming the Superlative',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'To form the superlative, add -st or -ste to the adjective. Use "het" before the superlative when it stands alone, and -ste when it comes before a noun.',
          explanation:
            'The superlative (overtreffende trap) is formed by adding -st to the base adjective. When the superlative comes before a noun, it gets -ste (with the adjectival -e ending). When it stands alone as a predicate with "het", it can be -st or -ste. If the adjective already ends in -s, only add -t for the superlative.',
        },
        {
          type: 'grammar-table',
          headers: ['Adjective', 'Comparative', 'Superlative (predicative)', 'Superlative (before noun)'],
          rows: [
            ['groot', 'groter', 'het grootst(e)', 'de/het grootste'],
            ['klein', 'kleiner', 'het kleinst(e)', 'de/het kleinste'],
            ['mooi', 'mooier', 'het mooist(e)', 'de/het mooiste'],
            ['duur', 'duurder', 'het duurst(e)', 'de/het duurste'],
            ['snel', 'sneller', 'het snelst(e)', 'de/het snelste'],
            ['belangrijk', 'belangrijker', 'het belangrijkst(e)', 'de/het belangrijkste'],
          ],
          caption: 'Comparative and superlative forms',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Dit is het mooiste boek.',
              english: 'This is the most beautiful book.',
              highlight: 'het mooiste',
            },
            {
              dutch: 'Zij is de snelste loper van de klas.',
              english: 'She is the fastest runner in the class.',
              highlight: 'de snelste',
            },
            {
              dutch: 'Welke stad is het grootst?',
              english: 'Which city is the biggest?',
              highlight: 'het grootst',
            },
          ],
        },
      ],
    },
    {
      id: 'comparative-superlative-3',
      title: 'Irregular Comparatives and Superlatives',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Some common adjectives have irregular comparative and superlative forms that must be memorized.',
          explanation:
            'Just like in English (good, better, best), Dutch has several adjectives with irregular comparative and superlative forms. These are among the most commonly used adjectives, so learning them is essential.',
        },
        {
          type: 'grammar-table',
          headers: ['Adjective', 'Meaning', 'Comparative', 'Superlative'],
          rows: [
            ['goed', 'good', 'beter', 'best(e)'],
            ['veel', 'much/many', 'meer', 'meest(e)'],
            ['weinig', 'little/few', 'minder', 'minst(e)'],
            ['graag', 'gladly/willingly', 'liever', 'het liefst(e)'],
          ],
          caption: 'Irregular comparatives and superlatives',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Zij is beter in wiskunde dan ik.',
              english: 'She is better at math than me.',
              highlight: 'beter',
            },
            {
              dutch: 'Ik heb meer ervaring dan hij.',
              english: 'I have more experience than he does.',
              highlight: 'meer',
            },
            {
              dutch: 'Ik drink liever thee dan koffie.',
              english: 'I prefer to drink tea over coffee.',
              highlight: 'liever',
              note: '"Liever" literally means "more gladly".',
            },
            {
              dutch: 'Dit is het beste restaurant van de stad.',
              english: 'This is the best restaurant in the city.',
              highlight: 'het beste',
            },
            {
              dutch: 'Hij heeft de minste fouten gemaakt.',
              english: 'He made the fewest mistakes.',
              highlight: 'de minste',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Hij is goeder dan zij.',
              correct: 'Hij is beter dan zij.',
              explanation:
                '"Goed" is irregular. The comparative form is "beter", not "goeder".',
            },
            {
              incorrect: 'Ik heb meer veel boeken.',
              correct: 'Ik heb meer boeken.',
              explanation:
                '"Meer" already IS the comparative of "veel". Do not combine them.',
            },
            {
              incorrect: 'Dit is meer belangrijk.',
              correct: 'Dit is belangrijker.',
              explanation:
                'In Dutch, always use the -er suffix for comparatives. Do not use "meer" + adjective as in English "more important".',
            },
            {
              incorrect: 'Hij is groter als ik.',
              correct: 'Hij is groter dan ik.',
              explanation:
                'In comparisons, always use "dan" (than), not "als". "Als" means "if/when" or is used in the pattern "even ... als" (as ... as).',
            },
          ],
        },
      ],
    },
    {
      id: 'comparative-superlative-4',
      title: 'Comparisons in the Workplace',
      sections: [
        {
          type: 'workplace-context',
          scenario:
            'Comparatives and superlatives are essential for discussing performance, priorities, and making decisions at work. You will use them in meetings, evaluations, and reports.',
          examples: [
            {
              dutch: 'Dit project is belangrijker dan het andere.',
              english: 'This project is more important than the other one.',
            },
            {
              dutch: 'Zij is de beste manager van het team.',
              english: 'She is the best manager on the team.',
            },
            {
              dutch: 'We moeten een snellere oplossing vinden.',
              english: 'We need to find a faster solution.',
            },
            {
              dutch: 'Dit is de goedkoopste optie.',
              english: 'This is the cheapest option.',
            },
            {
              dutch: 'Heeft u een beter voorstel?',
              english: 'Do you have a better proposal?',
            },
          ],
        },
        {
          type: 'note',
          content:
            'The pattern "even ... als" means "as ... as" and is used for equal comparisons: "Dit project is even belangrijk als dat project." (This project is as important as that project.)',
          variant: 'tip',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-comp-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct comparative or superlative form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the comparative form of "groot" (big)?',
            options: ['grooter', 'groter', 'grotter', 'meer groot'],
            correctIndex: 1,
            explanation:
              'The comparative of "groot" is "groter". The double "oo" becomes a single "o" before the -er suffix because the syllable is now open (gro-ter).',
          },
        ],
      },
    },
    {
      id: 'a2-comp-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct comparative or superlative form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the irregular comparative of "goed" (good)?',
            options: ['goeder', 'beter', 'meer goed', 'best'],
            correctIndex: 1,
            explanation:
              '"Goed" has an irregular comparative: "beter" (better). The superlative is "best(e)".',
          },
        ],
      },
    },
    {
      id: 'a2-comp-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct comparative or superlative form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which word do you use for "than" in Dutch comparisons?',
            options: ['als', 'dan', 'van', 'met'],
            correctIndex: 1,
            explanation:
              'In comparisons with a comparative adjective, use "dan" (than): "Hij is groter dan ik." Using "als" instead of "dan" is a very common mistake.',
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct comparative or superlative form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Amsterdam is',
            after: 'dan Utrecht. (groot)',
            correctAnswer: 'groter',
            hint: 'Add -er to the adjective. Remember the spelling rule for "oo".',
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct comparative or superlative form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Dit is het',
            after: 'boek dat ik ooit heb gelezen. (mooi)',
            correctAnswer: 'mooiste',
            hint: 'Use the superlative form before a noun (add -ste).',
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct comparative or superlative form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb',
            after: 'ervaring dan mijn collega. (veel)',
            correctAnswer: 'meer',
            hint: '"Veel" has an irregular comparative form.',
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct comparative or superlative form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij is de',
            after: 'manager van het team. (goed)',
            correctAnswer: 'beste',
            hint: '"Goed" has an irregular superlative form.',
          },
        ],
      },
    },
    {
      id: 'a2-comp-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['de', 'is', 'duurder', 'trein', 'de', 'dan', 'bus'],
            correctOrder: ['De', 'trein', 'is', 'duurder', 'dan', 'de', 'bus'],
            translation: 'The train is more expensive than the bus.',
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct comparative or superlative form.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik drink',
            after: 'thee dan koffie. (graag)',
            correctAnswer: 'liever',
            hint: '"Graag" has an irregular comparative form meaning "prefer".',
          },
        ],
      },
    },
    {
      id: 'a2-comp-mc-4',
      type: 'multiple-choice',
      instruction: 'Choose the correct sentence.',
      difficulty: 'open',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence correctly uses a superlative?',
            options: [
              'Dit is de belangrijkste vergadering van het jaar.',
              'Dit is de meer belangrijke vergadering van het jaar.',
              'Dit is de belangrijkerste vergadering van het jaar.',
              'Dit is de meest belangrijke vergadering van het jaar.',
            ],
            correctIndex: 0,
            explanation:
              'The superlative of "belangrijk" is "belangrijkst(e)". In Dutch, always use the -st(e) suffix, not "meest" + adjective. Option A is correct: "de belangrijkste vergadering".',
          },
        ],
      },
    },
    {
      id: 'a2-comp-err-1',
      type: 'error-correction',
      topicId: 'comparative-superlative',
      instruction: 'Find and correct the mistake in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Dit project is meer belangrijk dan dat project.',
            correctedSentence: 'Dit project is belangrijker dan dat project.',
            errorExplanation:
              'In Dutch, always use the -er suffix for comparatives. Do not use "meer" + adjective as in English "more important". The correct form is "belangrijker".',
          },
          {
            incorrectSentence: 'Hij is de goedste speler van het team.',
            correctedSentence: 'Hij is de beste speler van het team.',
            errorExplanation:
              '"Goed" is irregular. The superlative is "best(e)", not "goedst(e)". You must memorize the irregular forms: goed → beter → best.',
          },
          {
            incorrectSentence: 'Mijn auto is sneller als jouw auto.',
            correctedSentence: 'Mijn auto is sneller dan jouw auto.',
            errorExplanation:
              'In comparisons, always use "dan" (than), not "als". "Als" is used in equal comparisons with "even ... als" (as ... as), but never after a comparative form.',
          },
          {
            incorrectSentence: 'Zij heeft de meerste ervaring.',
            correctedSentence: 'Zij heeft de meeste ervaring.',
            errorExplanation:
              '"Veel" has an irregular superlative: "meest(e)", not "meerst(e)". The forms are: veel → meer → meest.',
          },
        ],
      },
    },
    {
      id: 'a2-comp-trans-1',
      type: 'translation',
      topicId: 'comparative-superlative',
      instruction: 'Translate the following comparative and superlative sentences into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'This book is more interesting than that book.',
            correctDutch: 'Dit boek is interessanter dan dat boek.',
            acceptableAnswers: ['Dit boek is interessanter dan dat boek.'],
            keyVocabulary: [
              { dutch: 'interessanter', english: 'more interesting' },
              { dutch: 'dan', english: 'than' },
            ],
          },
          {
            english: 'She is the fastest runner in the class.',
            correctDutch: 'Zij is de snelste loper van de klas.',
            acceptableAnswers: ['Ze is de snelste loper van de klas.', 'Zij is de snelste loper in de klas.'],
            keyVocabulary: [
              { dutch: 'snelste', english: 'fastest' },
              { dutch: 'loper', english: 'runner' },
            ],
          },
          {
            english: 'I prefer to work at home than at the office.',
            correctDutch: 'Ik werk liever thuis dan op kantoor.',
            acceptableAnswers: ['Ik werk liever thuis dan op kantoor.'],
            keyVocabulary: [
              { dutch: 'liever', english: 'rather / preferably' },
              { dutch: 'dan', english: 'than' },
            ],
          },
          {
            english: 'He has fewer mistakes than his colleague.',
            correctDutch: 'Hij heeft minder fouten dan zijn collega.',
            acceptableAnswers: ['Hij heeft minder fouten dan zijn collega.'],
            keyVocabulary: [
              { dutch: 'minder', english: 'fewer / less' },
              { dutch: 'fouten', english: 'mistakes' },
            ],
          },
        ],
      },
    },
    {
      id: 'a2-comp-fill-6',
      type: 'fill-in-the-blank',
      topicId: 'comparative-superlative',
      instruction: 'Fill in the correct comparative or superlative form in these workplace sentences.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'We moeten een',
            after: 'oplossing vinden voor dit probleem. (snel)',
            correctAnswer: 'snellere',
            hint: 'Comparative form before a noun needs the adjectival -e ending.',
            acceptableAnswers: ['snellere'],
          },
          {
            before: 'Dit kwartaal was',
            after: 'dan het vorige kwartaal. (goed)',
            correctAnswer: 'beter',
            hint: '"Goed" has an irregular comparative form.',
            acceptableAnswers: ['beter'],
          },
          {
            before: 'Zij is de',
            after: 'kandidaat voor de functie. (geschikt)',
            correctAnswer: 'geschiktste',
            hint: 'Superlative before a noun: add -ste to the adjective.',
            acceptableAnswers: ['geschiktste', 'meest geschikte'],
          },
          {
            before: 'Wij hebben',
            after: 'klanten dan vorig jaar. (veel)',
            correctAnswer: 'meer',
            hint: '"Veel" has an irregular comparative: not "veeler".',
            acceptableAnswers: ['meer'],
          },
        ],
      },
    },
  ],
};
