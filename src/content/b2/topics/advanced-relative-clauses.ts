import { Topic } from '@/content/types';

export const advancedRelativeClauses: Topic = {
  id: 'advanced-relative-clauses',
  levelId: 'b2',
  order: 7,
  title: 'Advanced Relative & Noun Clauses',
  subtitle: 'Geavanceerde betrekkelijke bijzinnen',
  estimatedMinutes: 60,
  lessons: [
    {
      id: 'arc-1',
      title: 'Relative Clauses with wie, wat, and hetgeen',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Beyond "die" and "dat", Dutch uses "wie" (who, whoever), "wat" (what, whatever), and "hetgeen" (that which — formal) as relative pronouns in specific contexts.',
          explanation:
            '"Wie" is used when the antecedent is a person and there is no explicit noun: "Wie dit zegt, heeft gelijk" (Whoever says this is right). "Wat" is used when the antecedent is an entire clause, an indefinite pronoun (iets, niets, alles, veel), or a superlative: "Het beste wat we kunnen doen..." (The best thing we can do...). "Hetgeen" is a formal written equivalent of "wat" used in legal and official texts.',
        },
        {
          type: 'grammar-table',
          title: 'Use of wie, wat, hetgeen',
          headers: ['Pronoun', 'Used when antecedent is...', 'Example', 'English'],
          rows: [
            ['wie', 'person (no explicit noun)', 'Wie dit wil, kan zich aanmelden.', 'Whoever wants this can register.'],
            ['wie', 'person after preposition', 'De man met wie ik sprak...', 'The man with whom I spoke...'],
            ['wat', 'entire preceding clause', 'Hij vertrok vroeg, wat ik niet verwachtte.', 'He left early, which I did not expect.'],
            ['wat', 'iets, niets, alles, veel, weinig', 'Er is niets wat ik kan doen.', 'There is nothing I can do.'],
            ['wat', 'superlative noun', 'Het mooiste wat ik ooit zag.', 'The most beautiful thing I ever saw.'],
            ['hetgeen', 'entire clause (formal written)', 'De wet verbiedt dit, hetgeen logisch is.', 'The law prohibits this, which is logical.'],
          ],
          caption: '"Hetgeen" is literary/legal; in spoken Dutch always use "wat" instead.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Het is het beste dat we kunnen doen.', correct: 'Het is het beste wat we kunnen doen.', explanation: 'After superlatives, use "wat" as the relative pronoun, not "dat".' },
            { incorrect: 'Alles dat hij zei, was interessant.', correct: 'Alles wat hij zei, was interessant.', explanation: 'After "alles", "niets", "iets", "veel", "weinig", use "wat" as the relative pronoun.' },
          ],
        },
      ],
    },
    {
      id: 'arc-2',
      title: 'Noun Clauses: het feit dat, de vraag of, de reden waarom',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Noun clauses are subordinate clauses that function as the subject or object of a sentence. In Dutch they are introduced by "dat", "of", "wie", "wat", "hoe", "wanneer", and "waarom".',
          explanation:
            'A noun clause replaces a noun phrase: "Ik weet het" → "Ik weet dat hij komt." At B2, these are combined with abstract head nouns: "het feit dat" (the fact that), "de vraag of" (the question whether), "de reden waarom" (the reason why), "de mogelijkheid dat" (the possibility that). This creates complex noun phrases that appear frequently in academic and formal texts.',
        },
        {
          type: 'grammar-table',
          title: 'Noun clause structures',
          headers: ['Head noun + connector', 'Example', 'English'],
          rows: [
            ['het feit dat', 'Het feit dat hij ziek is, verklaart zijn afwezigheid.', 'The fact that he is ill explains his absence.'],
            ['de vraag of', 'De vraag of dit haalbaar is, blijft open.', 'The question of whether this is feasible remains open.'],
            ['de reden waarom', 'De reden waarom ze weigerde, is onduidelijk.', 'The reason why she refused is unclear.'],
            ['de mogelijkheid dat', 'We houden rekening met de mogelijkheid dat het mislukt.', 'We account for the possibility that it fails.'],
            ['de verwachting dat', 'De verwachting dat de markt groeit, is realistisch.', 'The expectation that the market will grow is realistic.'],
            ['de kans dat', 'De kans dat het lukt, is groot.', 'The chance that it will work is high.'],
            ['het idee dat', 'Het idee dat dit simpel is, klopt niet.', 'The idea that this is simple is incorrect.'],
          ],
        },
        {
          type: 'note',
          content: 'In these constructions the head noun (het feit, de vraag) is the grammatical subject or object. The "dat/of/waarom" clause elaborates on it. The entire construction can be very long — common in formal written Dutch.',
          variant: 'info',
        },
      ],
    },
    {
      id: 'arc-3',
      title: 'Stacked and Non-Restrictive Relative Clauses',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'At B2 level, relative clauses can be stacked (one inside another) or non-restrictive (adding extra information, set off by commas). Both require careful punctuation and word order management.',
          explanation:
            'A restrictive relative clause limits the noun: "De medewerker die dit heeft gedaan, moet verantwoording afleggen" (The employee who did this must be accountable). A non-restrictive relative clause adds parenthetical information: "De directeur, die al twintig jaar in dienst is, gaat met pensioen" (The director, who has been with the company for twenty years, is retiring). Non-restrictive clauses are set off by commas and never use "dat" — only "die", "wie", or "wat".',
        },
        {
          type: 'grammar-table',
          title: 'Restrictive vs. non-restrictive',
          headers: ['Type', 'Example', 'Effect'],
          rows: [
            ['Restrictive (no comma)', 'De wet die in 2020 werd ingevoerd, geldt nog steeds.', 'Specifies which law'],
            ['Non-restrictive (comma)', 'De wet, die in 2020 werd ingevoerd, geldt nog steeds.', 'Adds extra info about the law'],
            ['Stacked (nested)', 'Het rapport dat de commissie die vorig jaar was opgericht heeft gepubliceerd...', 'Complex: commission clause inside report clause'],
          ],
          caption: 'Stacked relative clauses are grammatically possible but often rewritten in formal prose for clarity.',
        },
        {
          type: 'examples',
          title: 'In academic and legal text',
          examples: [
            { dutch: 'Het voorstel, waarover al weken werd gediscussieerd, werd uiteindelijk aangenomen.', english: 'The proposal, which had been debated for weeks, was finally adopted.', highlight: 'waarover … werd gediscussieerd' },
            { dutch: 'Er is niets wat de rechtbank in dit dossier niet heeft onderzocht.', english: 'There is nothing that the court has not investigated in this case.', highlight: 'wat … heeft onderzocht' },
            { dutch: 'De vraag of de maatregel rechtmatig is, wordt door de rechter beoordeeld.', english: 'The question of whether the measure is lawful is being assessed by the judge.', highlight: 'De vraag of … is' },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-arc-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct relative pronoun.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Er is niets ___ ik liever zou willen.',
            options: ['dat', 'wat', 'die', 'wie'],
            correctIndex: 1,
            explanation: 'After "niets" (indefinite pronoun), use "wat" as the relative pronoun.',
          },
          {
            question: 'Hij vertrok plotseling, ___ iedereen verraste.',
            options: ['dat', 'wat', 'die', 'hetgeen'],
            correctIndex: 1,
            explanation: 'When the antecedent is an entire clause ("hij vertrok plotseling"), use "wat". "Hetgeen" is also grammatically correct here but very formal.',
          },
          {
            question: '___ dit wil, kan een formulier aanvragen.',
            options: ['Dat', 'Die', 'Wie', 'Wat'],
            correctIndex: 2,
            explanation: '"Wie" introduces a free relative clause with a person as antecedent when no noun is present: "Whoever wants this..."',
          },
        ],
      },
    },
    {
      id: 'b2-arc-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct relative pronoun or noun clause connector.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Het feit', after: 'hij de vergadering miste, werd genoteerd.', correctAnswer: 'dat', hint: '"Het feit dat" — noun clause introduced by "dat".' },
          { before: 'De vraag', after: 'het project haalbaar is, blijft onbeantwoord.', correctAnswer: 'of', hint: '"De vraag of" — whether clause.' },
          { before: 'De reden', after: 'ze weigerde, was onduidelijk.', correctAnswer: 'waarom', hint: '"De reden waarom" — the reason why.' },
          { before: 'Dit is het beste', after: 'we konden doen.', correctAnswer: 'wat', hint: 'After a superlative noun use "wat", not "dat".' },
        ],
      },
    },
    {
      id: 'b2-arc-err-1',
      type: 'error-correction',
      instruction: 'Correct the relative pronoun error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Het is het mooiste dat ik ooit heb gezien.',
            correctedSentence: 'Het is het mooiste wat ik ooit heb gezien.',
            errorExplanation: 'After superlatives, use "wat" as the relative pronoun, not "dat".',
          },
          {
            incorrectSentence: 'Alles dat hij zei, klopte niet.',
            correctedSentence: 'Alles wat hij zei, klopte niet.',
            errorExplanation: '"Alles", like "iets", "niets", "veel", "weinig", takes "wat" as its relative pronoun.',
          },
          {
            incorrectSentence: 'De man met die ik samenwerk, is erg competent.',
            correctedSentence: 'De man met wie ik samenwerk, is erg competent.',
            errorExplanation: 'After a preposition, use "wie" for persons in relative clauses, not "die".',
          },
          {
            incorrectSentence: 'De vraag dat het systeem werkt, is nog niet beantwoord.',
            correctedSentence: 'De vraag of het systeem werkt, is nog niet beantwoord.',
            errorExplanation: '"De vraag" takes "of" (whether) when the content is a yes/no question, not "dat".',
          },
        ],
      },
    },
    {
      id: 'b2-arc-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the sentence using the given words.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['niets', 'Er', 'is', 'doen', 'wat', 'kan', 'ik'],
            correctSentence: 'Er is niets wat ik kan doen.',
            englishPrompt: 'There is nothing I can do.',
          },
          {
            availableWords: ['Het', 'dat', 'feit', 'hij', 'aanwezig', 'was', 'verraste', 'iedereen'],
            correctSentence: 'Het feit dat hij aanwezig was, verraste iedereen.',
            englishPrompt: 'The fact that he was present surprised everyone.',
          },
          {
            availableWords: ['De', 'of', 'vraag', 'haalbaar', 'het', 'is', 'blijft', 'open'],
            correctSentence: 'De vraag of het haalbaar is, blijft open.',
            englishPrompt: 'The question of whether it is feasible remains open.',
          },
        ],
      },
    },
    {
      id: 'b2-arc-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'Whoever is responsible for this must explain themselves.',
            correctDutch: 'Wie hiervoor verantwoordelijk is, moet zich verantwoorden.',
            acceptableAnswers: ['Degene die hiervoor verantwoordelijk is, moet zich verantwoorden.'],
            keyVocabulary: [{ dutch: 'wie', english: 'whoever' }, { dutch: 'zich verantwoorden', english: 'to explain oneself / account for oneself' }],
          },
          {
            english: 'The possibility that the project will be cancelled has not been ruled out.',
            correctDutch: 'De mogelijkheid dat het project wordt geannuleerd, is niet uitgesloten.',
            acceptableAnswers: ['De kans dat het project geannuleerd wordt, is niet uitgesloten.'],
            keyVocabulary: [{ dutch: 'de mogelijkheid dat', english: 'the possibility that' }, { dutch: 'uitgesloten', english: 'ruled out' }],
          },
          {
            english: 'The new law, which was passed last month, affects all companies with more than 50 employees.',
            correctDutch: 'De nieuwe wet, die vorige maand werd aangenomen, geldt voor alle bedrijven met meer dan 50 medewerkers.',
            acceptableAnswers: ['De nieuwe wet, die vorige maand is aangenomen, is van toepassing op alle bedrijven met meer dan 50 werknemers.'],
            keyVocabulary: [{ dutch: 'aangenomen worden', english: 'to be passed (legislation)' }, { dutch: 'geldt voor', english: 'applies to' }],
          },
        ],
      },
    },
  ],
};
