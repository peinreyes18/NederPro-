import { Topic } from '@/content/types';

export const adjectivesBasics: Topic = {
  id: 'adjectives-basics',
  levelId: 'a1',
  title: 'Adjectives: With or Without -e',
  subtitle: 'Bijvoeglijke naamwoorden: met of zonder -e',
  order: 8,
  estimatedMinutes: 30,
  prerequisites: ['de-het-articles'],
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'Adjective Inflection in Dutch',
        rule: 'In Dutch, adjectives that come BEFORE a noun may need an -e ending. Whether or not to add -e depends on the gender of the noun (de-woord or het-woord) and the article used.',
        explanation:
          'This is one of the most important grammar rules in Dutch. When an adjective stands before a noun, it usually gets an -e ending. The only exception is: a het-woord with "een" (or no article) in singular form does NOT get the -e. In all other cases, the adjective gets -e.',
      },
      {
        type: 'grammar-rule',
        title: 'De-woorden: Always Add -e',
        rule: 'Before de-woorden, the adjective ALWAYS gets an -e ending, regardless of whether the article is "de" or "een".',
        explanation:
          'De-woorden are the easiest case: always add -e. "De grote man" (the big man), "een grote man" (a big man). Both use "grote" with -e. This applies to all de-woorden without exception.',
      },
      {
        type: 'grammar-rule',
        title: 'Het-woorden: It Depends on the Article',
        rule: 'Before het-woorden with a definite article (het, dit, dat) or in plural: add -e. Before het-woorden with "een" or no article in singular: do NOT add -e.',
        explanation:
          'This is the tricky part. "Het grote huis" (the big house) uses -e because of "het" (definite). But "een groot huis" (a big house) does NOT use -e because of "een" (indefinite) + het-woord. In plural, all nouns use "de", so adjectives always get -e: "de grote huizen" (the big houses).',
      },
      {
        type: 'grammar-table',
        title: 'Adjective Inflection Summary',
        headers: ['Noun Type', 'Article', 'Adjective Ending', 'Example'],
        rows: [
          ['de-woord', 'de', '+ e', 'de grote man'],
          ['de-woord', 'een', '+ e', 'een grote man'],
          ['het-woord', 'het / dit / dat', '+ e', 'het grote huis'],
          ['het-woord', 'een / no article', 'NO -e', 'een groot huis'],
          ['plural (any)', 'de / geen article', '+ e', 'de grote huizen'],
        ],
        caption: 'The ONLY case without -e: singular het-woord with "een" or no article.',
      },
      {
        type: 'examples',
        title: 'De-woorden: Always -e',
        examples: [
          { dutch: 'de grote man', english: 'the big man', highlight: ['grote'], note: 'de-woord + de = -e' },
          { dutch: 'een grote man', english: 'a big man', highlight: ['grote'], note: 'de-woord + een = still -e' },
          { dutch: 'de nieuwe auto', english: 'the new car', highlight: ['nieuwe'] },
          { dutch: 'een kleine kamer', english: 'a small room', highlight: ['kleine'] },
          { dutch: 'de oude stad', english: 'the old city', highlight: ['oude'] },
        ],
      },
      {
        type: 'examples',
        title: 'Het-woorden: With and Without -e',
        examples: [
          { dutch: 'het grote huis', english: 'the big house', highlight: ['grote'], note: 'het-woord + het = -e' },
          { dutch: 'een groot huis', english: 'a big house', highlight: ['groot'], note: 'het-woord + een = NO -e' },
          { dutch: 'dit kleine kind', english: 'this small child', highlight: ['kleine'], note: 'het-woord + dit = -e' },
          { dutch: 'een klein kind', english: 'a small child', highlight: ['klein'], note: 'het-woord + een = NO -e' },
          { dutch: 'het nieuwe kantoor', english: 'the new office', highlight: ['nieuwe'], note: 'het-woord + het = -e' },
          { dutch: 'een nieuw kantoor', english: 'a new office', highlight: ['nieuw'], note: 'het-woord + een = NO -e' },
        ],
      },
      {
        type: 'grammar-rule',
        title: 'Spelling Rules When Adding -e',
        rule: 'When adding -e to an adjective, apply the same spelling rules as with verb stems: double the consonant to keep a short vowel, or drop a double vowel to keep it long.',
        explanation:
          'Short vowel + single consonant: double the consonant. "Dik" becomes "dikke" (fat), "nat" becomes "natte" (wet). Long vowel + double letter: drop one vowel letter. "Groot" becomes "grote" (big), "braaf" becomes "brave" (well-behaved). Also: -f becomes -v and -s becomes -z in some cases: "lief" becomes "lieve" (sweet), "grijs" becomes "grijze" (grey).',
      },
      {
        type: 'grammar-table',
        title: 'Spelling Changes When Adding -e',
        headers: ['Base Form', 'With -e', 'Rule Applied'],
        rows: [
          ['groot', 'grote', 'Drop one vowel: oo -> o (long vowel stays long)'],
          ['dik', 'dikke', 'Double consonant: k -> kk (short vowel stays short)'],
          ['nat', 'natte', 'Double consonant: t -> tt (short vowel stays short)'],
          ['lief', 'lieve', 'f -> v (voicing before -e)'],
          ['grijs', 'grijze', 's -> z (voicing before -e)'],
          ['mooi', 'mooie', 'Simply add -e (no change needed)'],
          ['nieuw', 'nieuwe', 'Simply add -e (no change needed)'],
          ['oud', 'oude', 'Simply add -e (no change needed)'],
        ],
      },
      {
        type: 'workplace-context',
        title: 'Adjectives at Work',
        scenario: 'Describing your company, colleagues, and work environment',
        examples: [
          { dutch: 'Het is een groot bedrijf.', english: 'It is a big company.', highlight: ['groot'], note: 'het-woord + een = NO -e' },
          { dutch: 'Zij is een goede manager.', english: 'She is a good manager.', highlight: ['goede'], note: 'de-woord + een = -e' },
          { dutch: 'Wij hebben een nieuw kantoor.', english: 'We have a new office.', highlight: ['nieuw'], note: 'het-woord + een = NO -e' },
          { dutch: 'De oude computer werkt niet meer.', english: 'The old computer doesn\'t work anymore.', highlight: ['oude'] },
          { dutch: 'Het is een interessant project.', english: 'It is an interesting project.', highlight: ['interessant'], note: 'het-woord + een = NO -e' },
          { dutch: 'Ik heb een drukke dag.', english: 'I have a busy day.', highlight: ['drukke'], note: 'de-woord + een = -e' },
        ],
      },
      {
        type: 'common-mistakes',
        mistakes: [
          {
            incorrect: 'een grote huis',
            correct: 'een groot huis',
            explanation: '"Huis" is a het-woord. With "een" + het-woord, the adjective gets NO -e ending.',
          },
          {
            incorrect: 'de groot man',
            correct: 'de grote man',
            explanation: '"Man" is a de-woord. De-woorden always require -e on the adjective: "de grote man".',
          },
          {
            incorrect: 'een groot vrouw',
            correct: 'een grote vrouw',
            explanation: '"Vrouw" is a de-woord. Even with "een", de-woorden always take -e: "een grote vrouw".',
          },
          {
            incorrect: 'de dikke boek',
            correct: 'het dikke boek',
            explanation: '"Boek" is a het-woord, so use "het" (not "de"). With "het", the adjective does get -e: "het dikke boek".',
          },
        ],
      },
      {
        type: 'note',
        title: 'Predicate Adjectives: No -e',
        content:
          'When an adjective comes AFTER the verb (predicative position), it NEVER gets an -e ending. "Het huis is groot." (The house is big.) "De man is groot." (The man is big.) The -e rule only applies to adjectives that come BEFORE the noun.',
        variant: 'info',
      },
    ],
  },
  exercises: [
    {
      id: 'a1-adj-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct form of the adjective.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De ___ man is mijn vader. (groot)',
            options: ['groot', 'grote', 'groote', 'groten'],
            correctIndex: 1,
            explanation: '"Man" is a de-woord with "de". Always add -e: "de grote man". (oo becomes o before -e)',
          },
          {
            question: 'Ik heb een ___ huis. (groot)',
            options: ['grote', 'groot', 'groote', 'groten'],
            correctIndex: 1,
            explanation: '"Huis" is a het-woord with "een". No -e: "een groot huis".',
          },
          {
            question: 'Zij heeft een ___ auto. (nieuw)',
            options: ['nieuw', 'nieuwe', 'nieuwen', 'niews'],
            correctIndex: 1,
            explanation: '"Auto" is a de-woord. De-woorden always get -e, even with "een": "een nieuwe auto".',
          },
        ],
      },
    },
    {
      id: 'a1-adj-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Het ___ kind speelt buiten. (klein)',
            options: ['klein', 'kleine', 'kleinen', 'kleines'],
            correctIndex: 1,
            explanation: '"Kind" is a het-woord with "het" (definite). Add -e: "het kleine kind".',
          },
          {
            question: 'Een ___ kind speelt buiten. (klein)',
            options: ['kleine', 'klein', 'kleinen', 'kleines'],
            correctIndex: 1,
            explanation: '"Kind" is a het-woord with "een" (indefinite). No -e: "een klein kind".',
          },
          {
            question: 'De ___ boeken liggen op tafel. (dik)',
            options: ['dik', 'dikke', 'dikken', 'dike'],
            correctIndex: 1,
            explanation: 'Plural nouns always take -e: "de dikke boeken". (k doubles to kk to keep the short vowel)',
          },
        ],
      },
    },
    {
      id: 'a1-adj-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of the adjective (with or without -e).',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'de', after: 'man (oud)', correctAnswer: 'oude', hint: 'de-woord + de = always -e' },
          { before: 'een', after: 'huis (mooi)', correctAnswer: 'mooi', hint: 'het-woord + een = no -e' },
          { before: 'het', after: 'meisje (klein)', correctAnswer: 'kleine', hint: 'het-woord + het = -e' },
          { before: 'een', after: 'vrouw (jong)', correctAnswer: 'jonge', hint: 'de-woord + een = -e' },
        ],
      },
    },
    {
      id: 'a1-adj-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of the adjective. Watch the spelling!',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'de', after: 'kat (dik)', correctAnswer: 'dikke', hint: 'Short vowel: double the consonant' },
          { before: 'een', after: 'boek (dik)', correctAnswer: 'dik', hint: 'het-woord + een = no -e' },
          { before: 'de', after: 'hond (lief)', correctAnswer: 'lieve', hint: 'f becomes v before -e' },
          { before: 'het', after: 'gebouw (groot)', correctAnswer: 'grote', hint: 'het-woord + het = -e; oo becomes o' },
        ],
      },
    },
    {
      id: 'a1-adj-mc-3',
      type: 'multiple-choice',
      instruction: 'Which sentence is correct?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is correct for "a new office" (het kantoor)?',
            options: ['een nieuwe kantoor', 'een nieuw kantoor', 'een nieuwen kantoor', 'het nieuw kantoor'],
            correctIndex: 1,
            explanation: '"Kantoor" is a het-woord. With "een" + het-woord singular, no -e: "een nieuw kantoor".',
          },
          {
            question: 'Which is correct for "the small car" (de auto)?',
            options: ['de klein auto', 'het kleine auto', 'de kleine auto', 'een klein auto'],
            correctIndex: 2,
            explanation: '"Auto" is a de-woord. With "de", always add -e: "de kleine auto".',
          },
          {
            question: 'Which is correct for "a good manager" (de manager)?',
            options: ['een goed manager', 'een goede manager', 'een goeden manager', 'het goede manager'],
            correctIndex: 1,
            explanation: '"Manager" is a de-woord. De-woorden always get -e, even with "een": "een goede manager".',
          },
        ],
      },
    },
    {
      id: 'a1-adj-fill-3',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct adjective form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Het is een', after: 'bedrijf. (groot)', correctAnswer: 'groot', hint: 'het-woord (het bedrijf) + een' },
          { before: 'Zij is een', after: 'manager. (goed)', correctAnswer: 'goede', hint: 'de-woord (de manager) + een' },
          { before: 'Wij werken in het', after: 'gebouw. (nieuw)', correctAnswer: 'nieuwe', hint: 'het-woord (het gebouw) + het' },
          { before: 'Ik heb een', after: 'dag. (druk)', correctAnswer: 'drukke', hint: 'de-woord (de dag) + een; short vowel' },
        ],
      },
    },
    {
      id: 'a1-adj-err-1',
      type: 'error-correction',
      instruction: 'Find and correct the adjective error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik heb een grote probleem.',
            correctedSentence: 'Ik heb een groot probleem.',
            errorExplanation: '"Probleem" is a het-woord. With "een" + het-woord, the adjective gets no -e: "een groot probleem".',
          },
          {
            incorrectSentence: 'De jong vrouw werkt hier.',
            correctedSentence: 'De jonge vrouw werkt hier.',
            errorExplanation: '"Vrouw" is a de-woord. With "de", always add -e: "de jonge vrouw".',
          },
          {
            incorrectSentence: 'Het is een goede bedrijf.',
            correctedSentence: 'Het is een goed bedrijf.',
            errorExplanation: '"Bedrijf" is a het-woord. With "een" + het-woord, no -e: "een goed bedrijf".',
          },
        ],
      },
    },
    {
      id: 'a1-adj-order-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['grote', 'de', 'man', 'is', 'aardig', '.'],
            correctOrder: ['de', 'grote', 'man', 'is', 'aardig', '.'],
            translation: 'The big man is nice.',
          },
          {
            shuffledWords: ['een', 'heeft', 'Zij', 'nieuwe', 'baan', '.'],
            correctOrder: ['Zij', 'heeft', 'een', 'nieuwe', 'baan', '.'],
            translation: 'She has a new job.',
          },
          {
            shuffledWords: ['klein', 'een', 'is', 'Het', 'kantoor', '.'],
            correctOrder: ['Het', 'is', 'een', 'klein', 'kantoor', '.'],
            translation: 'It is a small office.',
          },
        ],
      },
    },
    {
      id: 'a1-adj-fill-4',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct adjective form. Think about de/het and the article.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Dit is een', after: 'project. (interessant / het project)', correctAnswer: 'interessant', hint: 'het-woord + een = no -e' },
          { before: 'De', after: 'computer werkt niet. (oud / de computer)', correctAnswer: 'oude', hint: 'de-woord + de = -e' },
          { before: 'Ik zoek een', after: 'baan. (goed / de baan)', correctAnswer: 'goede', hint: 'de-woord + een = -e' },
          { before: 'Het', after: 'rapport is klaar. (nieuw / het rapport)', correctAnswer: 'nieuwe', hint: 'het-woord + het = -e' },
        ],
      },
    },
    {
      id: 'a1-adj-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch. Pay attention to adjective endings.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'It is a big company.',
            correctDutch: 'Het is een groot bedrijf.',
            keyVocabulary: [
              { dutch: 'groot', english: 'big' },
              { dutch: 'bedrijf (het)', english: 'company' },
            ],
          },
          {
            english: 'She is a good manager.',
            correctDutch: 'Zij is een goede manager.',
            acceptableAnswers: ['Ze is een goede manager.'],
            keyVocabulary: [
              { dutch: 'goed', english: 'good' },
              { dutch: 'manager (de)', english: 'manager' },
            ],
          },
          {
            english: 'The old house is beautiful.',
            correctDutch: 'Het oude huis is mooi.',
            keyVocabulary: [
              { dutch: 'oud', english: 'old' },
              { dutch: 'huis (het)', english: 'house' },
              { dutch: 'mooi', english: 'beautiful' },
            ],
          },
        ],
      },
    },
    {
      id: 'a1-adj-mc-4',
      type: 'multiple-choice',
      instruction: 'Choose the correct spelling when adding -e.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the -e form of "groot"?',
            options: ['groote', 'grote', 'grotte', 'grotle'],
            correctIndex: 1,
            explanation: 'Double vowel (oo) becomes single (o) before -e to keep the long vowel sound: "grote".',
          },
          {
            question: 'What is the -e form of "dik"?',
            options: ['dike', 'dikke', 'dieke', 'dicke'],
            correctIndex: 1,
            explanation: 'Single consonant (k) doubles (kk) before -e to keep the short vowel sound: "dikke".',
          },
          {
            question: 'What is the -e form of "lief"?',
            options: ['liefe', 'lieffe', 'lieve', 'lieven'],
            correctIndex: 2,
            explanation: 'The -f becomes -v before -e: "lieve" (voicing rule).',
          },
        ],
      },
    },
    {
      id: 'a1-adj-fill-5',
      type: 'fill-in-the-blank',
      instruction: 'Complete each phrase with the correctly spelled adjective form.',
      difficulty: 'open',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'de', after: 'jongen (nat)', correctAnswer: 'natte', hint: 'short vowel: double the t' },
          { before: 'een', after: 'probleem (groot / het probleem)', correctAnswer: 'groot', hint: 'het-woord + een = no -e' },
          { before: 'de', after: 'muziek (grijs / de kleur)', correctAnswer: 'grijze', hint: 's becomes z before -e' },
          { before: 'het', after: 'huis (wit)', correctAnswer: 'witte', hint: 'het-woord + het = -e; short vowel: double t' },
        ],
      },
    },
  ],
};
