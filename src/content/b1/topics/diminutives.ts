import { Topic } from '@/content/types';

export const diminutives: Topic = {
  id: 'diminutives',
  levelId: 'b1',
  title: 'Diminutives',
  subtitle: 'Formation rules for -tje, -je, -pje, -etje, -kje and their uses',
  order: 18,
  estimatedMinutes: 35,
  prerequisites: ['plural-formation', 'noun-gender'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What is a diminutive?',
        rule: 'A diminutive is a modified form of a noun that signals smallness, affection, informality, or nuance. In Dutch, ALL diminutives end in -tje (and its spelling variants). Crucially, all diminutives take the article "het", regardless of the original noun\'s gender.',
        explanation:
          'Dutch uses diminutives far more than English. You will hear them constantly in everyday speech: "een kopje koffie" (a cup of coffee), "een ogenblikje" (just a moment), "het meisje" (the girl). Learning the formation rules lets you produce and understand thousands of derived words automatically.',
      },
      {
        type: 'grammar-table',
        title: 'Diminutive suffix rules',
        headers: ['Ending of base noun', 'Suffix added', 'Example', 'Diminutive'],
        rows: [
          ['Most consonants (l, n, r, p, t, k, s, f, etc.)', '-tje', 'tafel, raam', 'tafeltje, raampje*'],
          ['Unstressed -e', '-tje', 'koffie, foto', 'koffietje, fototje*'],
          ['-l, -n, -r after short vowel (1 syllable)', '-etje', 'bal, man, ster', 'balletje, mannetje, sterretje'],
          ['-m after short vowel', '-pje', 'boom, tram', 'boompje, trampje*'],
          ['-ng or -nk', '-etje', 'ring, drank', 'ringetje, drankje'],
          ['-w (after a vowel)', '-tje', 'rij, koe', 'rijtje, koetje'],
        ],
      },
      {
        type: 'note',
        title: 'The doubling / softening rule',
        content:
          'When the base noun has a short stressed vowel followed by a single consonant (l, m, n, r), the consonant is doubled before -etje to preserve the short vowel sound: bal → balletje, man → mannetje, ster → sterretje, kam → kammetje. This mirrors the plural doubling rule.',
        variant: 'tip',
      },
      {
        type: 'grammar-table',
        title: 'Common diminutives you must know',
        headers: ['Base noun (de/het)', 'Diminutive (het)', 'Meaning'],
        rows: [
          ['de hond', 'het hondje', 'little dog / puppy (affectionate)'],
          ['de man', 'het mannetje', 'little man / (also: male of an animal)'],
          ['de vrouw', 'het vrouwtje', 'little woman / female of animal'],
          ['het kind', 'het kindje', 'little child / baby'],
          ['het meisje', '(already a diminutive!)', '"girl" is historically meid + -tje'],
          ['de koffie', 'het koffietje', 'a cup of coffee'],
          ['de thee', 'het theetje', 'a cup of tea'],
          ['het woord', 'het woordje', 'a (small) word / quick word'],
          ['de straat', 'het straatje', 'little street / alley'],
          ['het ogenblik', 'het ogenblikje', 'a brief moment'],
          ['de taart', 'het taartje', 'a small cake / pastry'],
          ['de vraag', 'het vraagje', 'a small/quick question'],
        ],
      },
      {
        type: 'note',
        title: 'All diminutives → het',
        content:
          'Even if the base noun is "de", the diminutive always uses "het": de man → het mannetje, de tafel → het tafeltje. This is one of the rare absolute rules in Dutch grammar — no exceptions.',
        variant: 'warning',
      },
      {
        type: 'grammar-rule',
        title: 'Meanings and uses of diminutives',
        rule: 'Dutch diminutives are used for: (1) physical smallness, (2) affection/cuteness, (3) softening a request, (4) a fixed quantity (een kopje = a cup of), (5) expressing that something is casual or brief.',
        explanation:
          'Context determines whether a diminutive conveys physical smallness or social nuance. "Een ogenblikje" does not mean a tiny moment — it is a polite way to ask someone to wait. "Even een vraagje" softens the request. Overuse can sound childish; underuse sounds blunt.',
      },
      {
        type: 'examples',
        title: 'Diminutives in everyday use',
        examples: [
          {
            dutch: 'Wilt u een kopje koffie of een glaasje water?',
            english: 'Would you like a cup of coffee or a glass of water?',
            highlight: ['kopje', 'glaasje'],
            note: 'Fixed quantity expressions — very common',
          },
          {
            dutch: 'Wacht even een ogenblikje, ik ben zo terug.',
            english: 'Just wait a moment, I\'ll be right back.',
            highlight: ['ogenblikje'],
            note: 'Polite softening, not physical smallness',
          },
          {
            dutch: 'Mag ik even een vraagje stellen?',
            english: 'May I ask a quick question?',
            highlight: ['vraagje'],
            note: 'Signals the question is brief/non-threatening',
          },
          {
            dutch: 'Het hondje rende vrolijk door de tuin.',
            english: 'The little dog ran happily through the garden.',
            highlight: ['hondje'],
            note: 'Affectionate / cute',
          },
          {
            dutch: 'Ze heeft een leuk winkeltje in het centrum.',
            english: 'She has a nice little shop in the city centre.',
            highlight: ['winkeltje'],
            note: 'Implies cosy, small-scale',
          },
          {
            dutch: 'Kunnen we even een woordje spreken?',
            english: 'Can we have a quick word?',
            highlight: ['woordje'],
            note: '"Een woordje spreken" = a common set phrase',
          },
          {
            dutch: 'Het meisje speelt op het pleintje.',
            english: 'The girl is playing on the small square.',
            highlight: ['meisje', 'pleintje'],
            note: 'meisje is itself a historic diminutive',
          },
        ],
      },
      {
        type: 'common-mistakes',
        title: 'Common mistakes',
        mistakes: [
          {
            incorrect: 'de tafeltje',
            correct: 'het tafeltje',
            explanation: 'All diminutives take "het", regardless of the base noun\'s gender.',
          },
          {
            incorrect: 'een mantje',
            correct: 'een mannetje',
            explanation: '"Man" has a short vowel + single -n → consonant doubles: mannetje.',
          },
          {
            incorrect: 'een boomtje',
            correct: 'een boompje',
            explanation: 'Nouns ending in -m take -pje (not -tje): boom → boompje.',
          },
          {
            incorrect: 'een drinktje',
            correct: 'een drankje',
            explanation: '-nk endings take -je: drank → drankje.',
          },
          {
            incorrect: 'een ballentje',
            correct: 'een balletje',
            explanation: 'Short vowel + -l → -etje with doubled l: bal → balletje.',
          },
        ],
      },
      {
        type: 'workplace-context',
        title: 'Diminutives in professional Dutch',
        scenario: 'Even in professional settings, diminutives appear constantly in spoken Dutch and informal written communication.',
        examples: [
          {
            dutch: 'Heb je even een vraagje?',
            english: 'Do you have a quick question?',
          },
          {
            dutch: 'Wacht maar een momentje.',
            english: 'Just wait a moment.',
          },
          {
            dutch: 'Ik stuur je snel een berichtje.',
            english: 'I\'ll send you a quick message.',
          },
          {
            dutch: 'Kunnen we een overzichtje maken?',
            english: 'Can we make a brief overview?',
          },
        ],
        note: 'In formal written documents, diminutives are generally avoided. But in spoken meetings, phone calls, and chat messages, they are natural and expected.',
      },
    ],
  },
  exercises: [
    {
      id: 'diminutives-ex1',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the correct diminutive of "de man"?',
            options: ['het mantje', 'het mannetje', 'de mannetje', 'het manjte'],
            correctIndex: 1,
            explanation: 'Short vowel + -n → double the consonant + -etje; all diminutives use "het".',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex2',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wilt u een',
            after: 'koffie?',
            correctAnswer: 'kopje',
            hint: 'a cup of coffee — diminutive of kop',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex3',
      type: 'multiple-choice',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What article does every Dutch diminutive take?',
            options: ['het', 'de', 'depends on the base noun', 'een'],
            correctIndex: 0,
            explanation: 'All diminutives use "het" without exception — even those from "de" nouns.',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex4',
      type: 'error-correction',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik heb de hondje meegenomen naar het park.',
            correctedSentence: 'Ik heb het hondje meegenomen naar het park.',
            errorExplanation: 'Diminutives always take "het", so "de hondje" → "het hondje".',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex5',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'We planten een',
            after: 'in de tuin.',
            correctAnswer: 'boompje',
            hint: 'diminutive of boom',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex6',
      type: 'multiple-choice',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'In the sentence "Mag ik even een vraagje stellen?", the diminutive signals:',
            options: [
              'The question is physically small',
              'The question is brief/non-threatening',
              'The speaker is being childish',
              'The question is unimportant',
            ],
            correctIndex: 1,
            explanation: 'Using the diminutive "vraagje" softens the request, signalling it will only take a moment.',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex7',
      type: 'word-order',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['een', 'woordje', 'even', 'we', 'kunnen', 'spreken'],
            correctOrder: ['Kunnen', 'we', 'even', 'een', 'woordje', 'spreken', '?'],
            translation: 'Can we have a quick word?',
          },
        ],
      },
    },
    {
      id: 'diminutives-ex8',
      type: 'listening-comprehension',
      difficulty: 'guided',
      content: {
        type: 'listening-comprehension',
        audioText:
          'Goedemiddag, een ogenblikje alstublieft. Wilt u een kopje thee of een glaasje water terwijl u wacht? De dokter heeft nog een kwartiertje nodig.',
        situation: 'A receptionist at a doctor\'s practice.',
        questions: [
          {
            question: 'Which diminutives did you hear? (Select the correct list)',
            options: [
              'ogenblikje, kopje, glaasje, kwartiertje',
              'momentje, kopje, flesje, uurtje',
              'ogenblikje, beertje, glaasje, kwartiertje',
              'ogenblikje, kopje, glaasje, minutje',
            ],
            correctIndex: 0,
            explanation: 'Four diminutives: ogenblik+tje, kop+je, glas+je, kwartier+tje.',
          },
        ],
      },
    },
  ],
};
