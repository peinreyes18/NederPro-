import { Topic } from '@/content/types';

export const diminutives: Topic = {
  id: 'diminutives',
  levelId: 'a1',
  title: 'Diminutives',
  subtitle: 'Verkleinwoorden — het kopje, het huisje, het meisje',
  order: 11,
  estimatedMinutes: 25,
  prerequisites: ['de-het-articles'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'What is a diminutive?',
        rule: 'A diminutive makes a noun smaller, cuter, or less formal. In Dutch, diminutives are formed by adding -je (or a variant) to the noun. All diminutives are het-words.',
        explanation:
          'Dutch uses diminutives far more than English. They signal smallness, affection, informality, or cuteness. Every Dutch noun can form a diminutive. The standard ending is -je, but the exact form depends on the final letters of the noun. Crucially, all diminutives take het — even if the original noun was de.',
      },
      {
        type: 'grammar-table',
        title: 'Diminutive Endings',
        headers: ['Noun ends in…', 'Add', 'Example'],
        rows: [
          ['most consonants', '-je', 'boek → boekje, hond → hondje'],
          ['-l, -m, -n, -r, -ng after short vowel', '-etje', 'zon → zonnetje, kan → kannetje'],
          ['-s, -f, -t after short vowel', '-je (double consonant)', 'kat → katje'],
          ['-w', '-tje', 'rij → rijtje, ei → eitje'],
          ['unstressed -el, -em, -en, -er', '-tje', 'kamer → kamertje, bezem → bezemtje'],
          ['-je already', 'no change / context', 'meisje (already diminutive)'],
        ],
        caption: 'When in doubt, the base form is -je. The variants (-etje, -tje) appear mainly after certain consonants following a short vowel.',
      },
      {
        type: 'note',
        title: 'All diminutives are het-words',
        content:
          'This is one of the most useful rules in Dutch grammar: no matter what article the original noun had, its diminutive always takes het. de kop (cup) → het kopje. de straat (street) → het straatje. de man (man) → het mannetje. This makes diminutives easier — you never have to guess the article.',
        variant: 'tip',
      },
      {
        type: 'examples',
        title: 'Diminutives in everyday Dutch',
        examples: [
          {
            dutch: 'Wil je een kopje koffie?',
            english: 'Do you want a (little) cup of coffee?',
            highlight: ['kopje'],
            note: 'de kop → het kopje. The diminutive is actually standard here — Dutch always says kopje for a cup of coffee.',
          },
          {
            dutch: 'Het meisje speelt in de tuin.',
            english: 'The girl plays in the garden.',
            highlight: ['meisje'],
            note: 'meisje is the standard word for girl (already a diminutive of meid)',
          },
          {
            dutch: 'We wonen in een klein huisje.',
            english: 'We live in a small (little) house.',
            highlight: ['huisje'],
            note: 'het huis → het huisje',
          },
          {
            dutch: 'Er zit een vogeltje op het dak.',
            english: 'There is a little bird on the roof.',
            highlight: ['vogeltje'],
            note: 'de vogel → het vogeltje (-el ending → -tje)',
          },
          {
            dutch: 'Kun je even een berichtje sturen?',
            english: 'Can you send a quick message?',
            highlight: ['berichtje'],
            note: 'het bericht → het berichtje. Very common in informal communication.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Diminutives signal informality',
        content:
          'In Dutch culture, diminutives are extremely common in informal speech and often have no "small" meaning at all. "Doe maar een biertje" (just a beer), "even een momentje" (just a moment), "een bakje" (a container/cup) are all everyday expressions. Using diminutives appropriately makes your Dutch sound natural and friendly.',
        variant: 'tip',
      },
      {
        type: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            incorrect: 'de kopje',
            correct: 'het kopje',
            explanation: 'All diminutives are het-words, no exceptions.',
          },
          {
            incorrect: 'zonnje',
            correct: 'zonnetje',
            explanation: 'zon ends in -n after a short vowel → double the n and add -etje: zonnetje.',
          },
          {
            incorrect: 'kamertje (with de)',
            correct: 'het kamertje',
            explanation: 'Even though kamer is de kamer, the diminutive is always het: het kamertje.',
          },
        ],
      },
    ],
  },
  exercises: [
    {
      id: 'a1-diminutives-mc-1',
      type: 'multiple-choice',
      instruction: 'What is the correct diminutive?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the diminutive of "boek" (book)?',
            options: ['boekje', 'boektje', 'boeketje', 'boekske'],
            correctIndex: 0,
            explanation: 'boek ends in a consonant cluster → add -je: boekje.',
          },
          {
            question: 'What is the diminutive of "kamer" (room)?',
            options: ['kamerje', 'kamertje', 'kameretje', 'kamer\'tje'],
            correctIndex: 1,
            explanation: 'kamer ends in unstressed -er → add -tje: kamertje.',
          },
          {
            question: 'What is the diminutive of "zon" (sun)?',
            options: ['zonje', 'zontje', 'zonnetje', 'zonetje'],
            correctIndex: 2,
            explanation: 'zon ends in -n after a short vowel → double n + -etje: zonnetje.',
          },
        ],
      },
    },
    {
      id: 'a1-diminutives-mc-2',
      type: 'multiple-choice',
      instruction: 'What article does a diminutive always take?',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'de straat → ___ straatje',
            options: ['de', 'het', 'een'],
            correctIndex: 1,
            explanation: 'All diminutives are het-words.',
          },
          {
            question: 'de hond → ___ hondje',
            options: ['de', 'het', 'een'],
            correctIndex: 1,
            explanation: 'All diminutives are het-words.',
          },
        ],
      },
    },
    {
      id: 'a1-diminutives-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Write the diminutive of the noun in brackets.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Wil je een',
            after: 'koffie? (kop)',
            correctAnswer: 'kopje',
            hint: 'kop → kopje (+je)',
          },
          {
            before: 'We wonen in een klein',
            after: '. (huis)',
            correctAnswer: 'huisje',
            hint: 'huis → huisje (+je)',
          },
          {
            before: 'Kun je een',
            after: 'sturen? (bericht)',
            correctAnswer: 'berichtje',
            hint: 'bericht → berichtje (+je)',
          },
        ],
      },
    },
    {
      id: 'a1-diminutives-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct diminutive form.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het',
            after: 'speelt in de tuin. (meisje — already the correct form)',
            correctAnswer: 'meisje',
            hint: 'meisje is already the standard word',
          },
          {
            before: 'Doe maar een',
            after: ', alsjeblieft. (bier)',
            correctAnswer: 'biertje',
            hint: 'bier → biertje (+tje after -r)',
          },
          {
            before: 'Er zit een',
            after: 'op het dak. (vogel)',
            correctAnswer: 'vogeltje',
            hint: 'vogel ends in -el → vogeltje',
          },
        ],
      },
    },
  ],
};
