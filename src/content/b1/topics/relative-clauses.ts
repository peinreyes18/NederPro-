import { Topic } from '@/content/types';

export const relativeClauses: Topic = {
  id: 'relative-clauses',
  levelId: 'b1',
  order: 3,
  title: 'Relative Clauses',
  subtitle: 'Betrekkelijke bijzinnen',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'relative-1',
      title: 'Relative Pronouns: die and dat',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'A relative clause gives more information about a noun. Dutch uses "die" or "dat" as the relative pronoun.',
          explanation:
            'The relative pronoun connects a subordinate clause to the noun it refers to (the antecedent). The choice between "die" and "dat" depends on the gender of the antecedent noun:\n• de-words (common gender) → die\n• het-words (neuter gender) → dat\n• Plural nouns (all genders) → die',
        },
        {
          type: 'grammar-table',
          title: 'die vs. dat',
          headers: ['Noun type', 'Relative pronoun', 'Example'],
          rows: [
            ['de-word (singular)', 'die', 'de man die werkt'],
            ['het-word (singular)', 'dat', 'het boek dat ik lees'],
            ['plural (all genders)', 'die', 'de boeken die ik lees'],
            ['de-word (singular)', 'die', 'de vrouw die zingt'],
            ['het-word (singular)', 'dat', 'het kind dat speelt'],
          ],
          caption: 'Tip: If you know the article, you know the relative pronoun — de → die, het → dat. Plural is always die.',
        },
        {
          type: 'examples',
          title: 'Relative clauses in sentences',
          examples: [
            { dutch: 'De collega die naast mij zit, heet Thomas.', english: 'The colleague who sits next to me is called Thomas.', highlight: 'die naast mij zit' },
            { dutch: 'Het rapport dat ik heb geschreven, is goedgekeurd.', english: 'The report that I wrote has been approved.', highlight: 'dat ik heb geschreven' },
            { dutch: 'De vergaderingen die elke maandag plaatsvinden, zijn verplicht.', english: 'The meetings that take place every Monday are compulsory.', highlight: 'die elke maandag plaatsvinden' },
            { dutch: 'De stad die ik het mooist vind, is Amsterdam.', english: 'The city that I find most beautiful is Amsterdam.', highlight: 'die ik het mooist vind' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Word order in relative clauses',
          content: 'A relative clause is a subordinate clause. This means the finite verb goes to the END of the clause.\n\nMain clause: De man werkt hard.\nRelative clause: de man die hard werkt\n\nNote that the verb moves from position 2 (main clause) to the end (subordinate clause).',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Het probleem die we hebben.', correct: 'Het probleem dat we hebben.', explanation: '"Probleem" is a het-word. Use "dat" for het-words.' },
            { incorrect: 'De kinderen dat buiten spelen.', correct: 'De kinderen die buiten spelen.', explanation: 'All plural nouns use "die", regardless of the article of the singular form.' },
            { incorrect: 'De man die werkt hard.', correct: 'De man die hard werkt.', explanation: 'In a relative clause (subordinate clause), the verb goes to the end.' },
          ],
        },
      ],
    },
    {
      id: 'relative-2',
      title: 'Relative Clauses with Prepositions: waar + preposition',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When the relative pronoun is the object of a preposition and refers to a thing, use "waar" + preposition.',
          explanation:
            'In English, you can say "the chair that I sit on" or "the chair on which I sit." In Dutch, when referring to things (not people), you combine "waar" with the preposition. This is called a "pronominal adverb." The preposition can stay next to "waar" or be split to the end of the clause.',
        },
        {
          type: 'grammar-table',
          title: 'waar + preposition combinations',
          headers: ['Preposition', 'Combination', 'Example', 'Translation'],
          rows: [
            ['op', 'waarop', 'de stoel waarop ik zit', 'the chair on which I sit'],
            ['in', 'waarin', 'het land waarin ik woon', 'the country in which I live'],
            ['over', 'waarover', 'het onderwerp waarover we spreken', 'the topic about which we speak'],
            ['mee', 'waarmee', 'het gereedschap waarmee hij werkt', 'the tool with which he works'],
            ['van', 'waarvan', 'de reden waarvan ik schrik', 'the reason of which I am startled'],
            ['aan', 'waaraan', 'het project waaraan we werken', 'the project on which we work'],
          ],
          caption: 'The waar + preposition combination can be split: "het project waar we aan werken" is also correct.',
        },
        {
          type: 'grammar-rule',
          rule: 'When referring to people, use "die/dat + preposition" or "wie + preposition".',
          explanation:
            'When the antecedent is a person, do NOT use waar + preposition. Instead, use the relative pronoun + preposition, or "wie" + preposition (more formal).',
        },
        {
          type: 'examples',
          title: 'Things vs. people with prepositions',
          examples: [
            { dutch: 'Het project waaraan we werken, loopt goed.', english: 'The project we are working on is going well.', highlight: 'waaraan' },
            { dutch: 'Het project waar we aan werken, loopt goed.', english: 'The project we are working on is going well.', highlight: 'waar we aan werken' },
            { dutch: 'De collega met wie ik samenwerk, is erg competent.', english: 'The colleague I work with is very competent.', highlight: 'met wie' },
            { dutch: 'De manager aan wie ik rapporteer, is op vakantie.', english: 'The manager to whom I report is on holiday.', highlight: 'aan wie' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De stoel waarop dat ik zit.', correct: 'De stoel waarop ik zit.', explanation: 'Do not use both "waarop" and "dat". Use only the waar + preposition combination.' },
            { incorrect: 'De persoon waarover ik praat.', correct: 'De persoon over wie ik praat.', explanation: 'When referring to people, use "wie" + preposition, not "waar" + preposition.' },
            { incorrect: 'De auto waarmee ik mee rijd.', correct: 'De auto waarmee ik rijd.', explanation: 'Do not repeat the preposition. "Waarmee" already contains "mee".' },
          ],
        },
      ],
    },
    {
      id: 'relative-3',
      title: 'Relative Clauses with "wat" and "wie"',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use "wat" as a relative pronoun when referring to an entire clause, an indefinite pronoun, or a superlative.',
          explanation:
            'The relative pronoun "wat" (what) is used when the antecedent is:\n1. An entire clause (not a single noun)\n2. An indefinite pronoun: alles, iets, niets, veel, weinig\n3. A superlative used as a noun: het mooiste, het beste',
        },
        {
          type: 'grammar-table',
          title: 'When to use "wat"',
          headers: ['Context', 'Example', 'Translation'],
          rows: [
            ['Refers to entire clause', 'Hij is ziek, wat jammer is.', 'He is ill, which is a shame.'],
            ['After alles', 'Alles wat je zegt, klopt.', 'Everything (that) you say is correct.'],
            ['After iets', 'Iets wat ik niet begrijp.', 'Something (that) I do not understand.'],
            ['After niets', 'Niets wat hij doet, helpt.', 'Nothing (that) he does helps.'],
            ['After superlative', 'Het mooiste wat ik heb gezien.', 'The most beautiful thing I have seen.'],
            ['After veel/weinig', 'Veel wat hij zei, was waar.', 'Much of what he said was true.'],
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'Use "wie" as a relative pronoun when referring to a person without a specific antecedent noun.',
          explanation:
            '"Wie" is used like English "whoever" or "he who" — when there is no specific noun that the clause refers to. It is often used in proverbs, formal writing, and generalizations.',
        },
        {
          type: 'examples',
          title: '"wat" and "wie" in context',
          examples: [
            { dutch: 'Ze werd bevorderd, wat ze had verdiend.', english: 'She was promoted, which she had earned.', highlight: 'wat' },
            { dutch: 'Alles wat hij belooft, doet hij ook.', english: 'Everything (that) he promises, he also does.', highlight: 'wat' },
            { dutch: 'Wie goed doet, goed ontmoet.', english: 'He who does good, meets good. (What goes around comes around.)', highlight: 'Wie' },
            { dutch: 'Wie dit heeft gedaan, moet het opbiechten.', english: 'Whoever did this must confess.', highlight: 'Wie' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Alles die ik zeg.', correct: 'Alles wat ik zeg.', explanation: 'After indefinite pronouns like "alles", use "wat" as the relative pronoun.' },
            { incorrect: 'Ze is ziek, die jammer is.', correct: 'Ze is ziek, wat jammer is.', explanation: 'When referring to an entire clause (not a specific noun), use "wat".' },
            { incorrect: 'Dat is het mooiste dat ik heb gezien.', correct: 'Dat is het mooiste wat ik heb gezien.', explanation: 'After superlatives used as nouns (het mooiste), use "wat" not "dat".' },
          ],
        },
      ],
    },
    {
      id: 'relative-4',
      title: 'Relative Clauses in Workplace Communication',
      sections: [
        {
          type: 'workplace-context',
          scenario: 'Professional emails and reports',
          examples: [
            { dutch: 'De kandidaat die wij hebben geselecteerd, heeft uitstekende referenties.', english: 'The candidate that we have selected has excellent references.' },
            { dutch: 'Het probleem waarover u heeft gebeld, is inmiddels opgelost.', english: 'The problem about which you called has since been resolved.' },
            { dutch: 'De afdeling waarvoor ik werk, groeit snel.', english: 'The department for which I work is growing quickly.' },
            { dutch: 'De collega met wie ik samenwerk, neemt volgende maand ontslag.', english: 'The colleague with whom I work is resigning next month.' },
          ],
          note: 'Relative clauses are very common in formal Dutch business writing. Mastering them will significantly improve the quality of your professional communication.',
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Splitting waar + preposition',
          content: 'In spoken Dutch and informal writing, it is very common to split the waar + preposition combination:\n\nFormal: "Het project waaraan wij werken"\nInformal: "Het project waar wij aan werken"\n\nBoth are correct. The split version is more natural in everyday speech.',
        },
        {
          type: 'grammar-table',
          title: 'Summary: choosing the right relative pronoun',
          headers: ['Antecedent', 'No preposition', 'With preposition'],
          rows: [
            ['de-word (thing)', 'die', 'waar + prep'],
            ['het-word (thing)', 'dat', 'waar + prep'],
            ['Plural (things)', 'die', 'waar + prep'],
            ['Person', 'die/dat', 'prep + wie'],
            ['Entire clause', 'wat', 'waar + prep'],
            ['Indefinite pronoun', 'wat', 'waar + prep'],
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'relative-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose "die" or "dat" to complete the relative clause.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De man ___ naast mij werkt, is mijn collega.',
            options: ['die', 'dat', 'wat', 'wie'],
            correctIndex: 0,
            explanation: '"Man" is a de-word. Use "die" for de-words.',
          },
          {
            question: 'Het boek ___ ik heb gekocht, is erg interessant.',
            options: ['die', 'dat', 'wat', 'wie'],
            correctIndex: 1,
            explanation: '"Boek" is a het-word. Use "dat" for het-words.',
          },
          {
            question: 'De kinderen ___ buiten spelen, zijn mijn neven.',
            options: ['die', 'dat', 'wat', 'wie'],
            correctIndex: 0,
            explanation: 'All plural nouns use "die", regardless of their singular article.',
          },
          {
            question: 'Alles ___ hij zegt, is waar.',
            options: ['die', 'dat', 'wat', 'wie'],
            correctIndex: 2,
            explanation: 'After "alles" (an indefinite pronoun), use "wat".',
          },
          {
            question: 'Ze is bevorderd, ___ ik geweldig vind.',
            options: ['die', 'dat', 'wat', 'wie'],
            correctIndex: 2,
            explanation: 'When the relative clause refers to the entire previous clause (not a specific noun), use "wat".',
          },
        ],
      },
    },
    {
      id: 'relative-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct relative pronoun (die, dat, wat, wie, or waar + preposition).',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het project',
            after: 'wij werken, loopt goed.',
            correctAnswer: 'waaraan',
            hint: 'Thing + "aan" → waar + aan = waaraan',
            acceptableAnswers: ['waaraan', 'waar we aan', 'waar wij aan'],
          },
          {
            before: 'De collega met',
            after: 'ik samenwerk, is erg aardig.',
            correctAnswer: 'wie',
            hint: 'Person + preposition → preposition + wie',
            acceptableAnswers: ['wie'],
          },
          {
            before: 'Het idee',
            after: 'jij hebt voorgesteld, is heel goed.',
            correctAnswer: 'dat',
            hint: '"Idee" is a het-word.',
            acceptableAnswers: ['dat'],
          },
          {
            before: 'De reden',
            after: 'ik hier ben, is persoonlijk.',
            correctAnswer: 'waarom',
            hint: 'Thing + "om" → waarom',
            acceptableAnswers: ['waarom'],
          },
          {
            before: 'Niets',
            after: 'hij doet, is goed genoeg.',
            correctAnswer: 'wat',
            hint: 'After "niets" (indefinite pronoun), use "wat".',
            acceptableAnswers: ['wat'],
          },
        ],
      },
    },
    {
      id: 'relative-ex-3',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Het huis dat ik in woon, is groot.',
            correctedSentence: 'Het huis waarin ik woon, is groot.',
            errorExplanation: 'Use "waarin" (waar + in) instead of separating "dat" and "in". With thing antecedents + preposition, use waar + preposition.',
          },
          {
            incorrectSentence: 'De vrouw waarover ik praat, is mijn manager.',
            correctedSentence: 'De vrouw over wie ik praat, is mijn manager.',
            errorExplanation: '"Vrouw" is a person. Use preposition + "wie" for people, not waar + preposition.',
          },
          {
            incorrectSentence: 'De problemen die we mee zitten, zijn groot.',
            correctedSentence: 'De problemen waarmee we zitten, zijn groot.',
            errorExplanation: 'Things + preposition → waar + preposition. "Waarmee" replaces "die ... mee".',
          },
          {
            incorrectSentence: 'Hij slaagde, dat ik verwacht had.',
            correctedSentence: 'Hij slaagde, wat ik verwacht had.',
            errorExplanation: 'When the relative clause refers to the entire preceding clause, use "wat" not "dat".',
          },
          {
            incorrectSentence: 'De man die ik met werk, is vriendelijk.',
            correctedSentence: 'De man met wie ik werk, is vriendelijk.',
            errorExplanation: 'For people + preposition: use preposition + wie. The preposition comes before "wie", not after "die".',
          },
        ],
      },
    },
    {
      id: 'relative-ex-4',
      type: 'sentence-builder',
      instruction: 'Combine the two sentences into one using a relative clause.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['De', 'collega', 'die', 'naast', 'mij', 'werkt', 'is', 'ziek'],
            correctSentence: 'De collega die naast mij werkt, is ziek.',
            englishPrompt: 'The colleague who works next to me is ill. ("Collega" = de-word)',
          },
          {
            availableWords: ['Het', 'rapport', 'dat', 'ik', 'heb', 'geschreven', 'is', 'goedgekeurd'],
            correctSentence: 'Het rapport dat ik heb geschreven, is goedgekeurd.',
            englishPrompt: 'The report that I have written has been approved. ("Rapport" = het-word)',
          },
          {
            availableWords: ['Het', 'project', 'waaraan', 'wij', 'werken', 'loopt', 'goed'],
            correctSentence: 'Het project waaraan wij werken, loopt goed.',
            englishPrompt: 'The project we are working on is going well. (Thing + "aan" → waaraan)',
          },
          {
            availableWords: ['De', 'manager', 'aan', 'wie', 'ik', 'rapporteer', 'is', 'op', 'vakantie'],
            correctSentence: 'De manager aan wie ik rapporteer, is op vakantie.',
            englishPrompt: 'The manager to whom I report is on holiday. (Person + "aan" → aan wie)',
          },
        ],
      },
    },
    {
      id: 'relative-ex-5',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The company where I work has 500 employees.',
            correctDutch: 'Het bedrijf waar ik werk, heeft 500 medewerkers.',
            acceptableAnswers: ['Het bedrijf waar ik werk, heeft 500 medewerkers.', 'Het bedrijf waarin ik werk, heeft 500 medewerkers.'],
          },
          {
            english: 'Everything that she said was correct.',
            correctDutch: 'Alles wat ze zei, klopte.',
            acceptableAnswers: ['Alles wat ze zei, klopte.', 'Alles wat zij zei, klopte.'],
          },
          {
            english: 'The colleague with whom I work is very competent.',
            correctDutch: 'De collega met wie ik samenwerk, is zeer competent.',
            acceptableAnswers: ['De collega met wie ik samenwerk, is erg competent.', 'De collega met wie ik samenwerk, is zeer competent.', 'De collega met wie ik werk, is erg competent.'],
          },
          {
            english: 'That is the most interesting book that I have ever read.',
            correctDutch: 'Dat is het interessantste boek wat ik ooit heb gelezen.',
            acceptableAnswers: ['Dat is het interessantste boek wat ik ooit heb gelezen.'],
          },
        ],
      },
    },
    {
      id: 'relative-ex-6',
      type: 'writing-prompt',
      instruction: 'Describe your ideal job or workplace using at least 3 relative clauses.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Beschrijf jouw ideale baan of werkplek. Gebruik minstens drie betrekkelijke bijzinnen (met die, dat, wat of waar + voorzetsel).',
        context: 'Think about what kind of work environment, team, and role you would like. Use relative clauses to describe them.',
        guidelines: [
          'At least 3 relative clauses with correct relative pronouns (die, dat, wat, wie, or waar + prep)',
          'Correct verb placement at the end of each subordinate clause',
          'Logical and coherent description',
        ],
        sampleResponse: 'Mijn ideale baan is een functie die veel verantwoordelijkheid geeft. Ik zou graag werken in een team waarmee ik goed kan samenwerken. Het bedrijf waarvoor ik werk, moet duurzaamheid belangrijk vinden. De manager aan wie ik rapporteer, moet open staan voor nieuwe ideeën.',
      },
    },
  ],
};
