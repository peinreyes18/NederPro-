import { Topic } from '@/content/types';

export const complexWordOrder: Topic = {
  id: 'complex-word-order',
  levelId: 'b2',
  order: 1,
  title: 'Complex Word Order',
  subtitle: 'Complexe woordvolgorde',
  estimatedMinutes: 60,
  lessons: [
    {
      id: 'cwo-1',
      title: 'Verb Clusters in Subordinate Clauses',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'In subordinate clauses with multiple verbs, the verbs cluster at the end. The order within the cluster follows strict rules.',
          explanation:
            'Dutch subordinate clauses place all verbs at the end. When several verbs appear together — a past participle, an infinitive, and an auxiliary — their sequence is determined by grammatical function. The two major orders are the "red" (auxiliary-last) and "green" (auxiliary-first) sequence, and both are used in standard Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Verb cluster orders',
          headers: ['Structure', 'Order', 'Example'],
          rows: [
            ['hebben + past participle', 'pp – hebben', '...dat hij het rapport heeft geschreven.'],
            ['modal + infinitive', 'inf – modal', '...dat ze dit moet doen.'],
            ['modal + inf + hebben + pp ("red")', 'pp – inf – heeft', '...dat hij het had kunnen zeggen.'],
            ['modal + inf + hebben + pp ("green")', 'heeft – pp – inf', '...dat hij het heeft kunnen zeggen.'],
            ['worden + pp (passive)', 'pp – wordt', '...dat het rapport wordt geschreven.'],
            ['zijn + pp', 'pp – is', '...dat hij vertrokken is.'],
          ],
          caption: 'Both "red" and "green" orders are standard Dutch. Speakers and regions differ; use the one that feels natural.',
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'Ik weet dat hij dit probleem eerder had kunnen oplossen.', english: 'I know that he could have solved this problem earlier.', highlight: 'had kunnen oplossen' },
            { dutch: 'Ze zei dat de vergadering al was begonnen.', english: 'She said that the meeting had already started.', highlight: 'was begonnen' },
            { dutch: 'Het is jammer dat dit niet eerder is opgemerkt.', english: 'It is a pity that this was not noticed earlier.', highlight: 'is opgemerkt' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'dat hij heeft het geschreven', correct: 'dat hij het heeft geschreven', explanation: 'In a subordinate clause the object comes before the verb cluster, not inside it.' },
            { incorrect: 'dat ze moet dit doen', correct: 'dat ze dit moet doen', explanation: 'The object (dit) precedes the verb cluster (moet doen), not between the modal and the infinitive.' },
          ],
        },
      ],
    },
    {
      id: 'cwo-2',
      title: 'R-Pronouns and Prepositional Phrases',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When a prepositional object refers to a thing (not a person), Dutch uses an r-pronoun (er, daar, hier, waar) combined with the preposition, often split across the clause.',
          explanation:
            'Instead of saying "over het" (about it), Dutch combines the preposition with er/daar/hier/waar: erover, daarvoor, hiermee, waarop. Crucially, these combinations can be split: the r-word stays in the main clause near the front and the preposition goes to the end of the clause near the verbs. This split is obligatory with "er" in most registers.',
        },
        {
          type: 'grammar-table',
          title: 'R-pronoun forms',
          headers: ['Preposition', 'er (unstressed)', 'daar (that)', 'hier (this)', 'waar (which/where)'],
          rows: [
            ['over', 'erover', 'daarover', 'hierover', 'waarover'],
            ['van', 'ervan', 'daarvan', 'hiervan', 'waarvan'],
            ['mee (met)', 'ermee', 'daarmee', 'hiermee', 'waarmee'],
            ['op', 'erop', 'daarop', 'hierop', 'waarop'],
            ['aan', 'eraan', 'daaraan', 'hieraan', 'waaraan'],
            ['in', 'erin', 'daarin', 'hierin', 'waarin'],
            ['voor', 'ervoor', 'daarvoor', 'hiervoor', 'waarvoor'],
          ],
          caption: '"Er" is typically split in spoken and written Dutch; "daar" and "hier" may remain unsplit in formal writing.',
        },
        {
          type: 'examples',
          title: 'Split vs. unsplit',
          examples: [
            { dutch: 'Hij heeft er lang over nagedacht.', english: 'He thought about it for a long time. (split)', highlight: 'er … over' },
            { dutch: 'Hij heeft daarover lang nagedacht.', english: 'He thought about that for a long time. (unsplit, formal)', highlight: 'daarover' },
            { dutch: 'Dit is het project waaraan ik werk.', english: 'This is the project I am working on.', highlight: 'waaraan' },
            { dutch: 'Er wordt veel over gesproken.', english: 'A lot is being said about it.', highlight: 'Er … over' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik denk over het.', correct: 'Ik denk erover.', explanation: '"Het" cannot follow a preposition when referring to a thing; use the r-pronoun erover.' },
            { incorrect: 'De taak waar ik werk aan.', correct: 'De taak waaraan ik werk.', explanation: 'In relative clauses "waar" and the preposition must combine: waaraan.' },
          ],
        },
      ],
    },
    {
      id: 'cwo-3',
      title: 'Fronting, Inversion, and Information Structure',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Any constituent except the subject can be moved to the front (topic position) of a main clause, forcing verb-second (V2) inversion.',
          explanation:
            'Dutch is a verb-second language: the finite verb always occupies the second position in a main clause. When anything other than the subject is fronted — an adverb, an object, a subordinate clause, a prepositional phrase — the subject must follow the verb (inversion). Speakers use fronting to manage information: fronted elements are the topic (known/given), the rest is the focus (new).',
        },
        {
          type: 'grammar-table',
          title: 'Fronting examples',
          headers: ['Fronted element', 'Example', 'Notes'],
          rows: [
            ['Adverb', 'Gisteren belde hij mij op.', '"Gisteren" fronted → subject "hij" after verb'],
            ['Object', 'Dit rapport heb ik nog niet gelezen.', '"Dit rapport" fronted for emphasis'],
            ['Subordinate clause', 'Dat hij zou komen, wist ik niet.', 'Entire clause in topic position'],
            ['Prepositional phrase', 'In deze situatie kan ik niet helpen.', 'PP fronted, subject follows verb'],
            ['Past participle (emphasis)', 'Gelezen heb ik het wel, maar begrepen niet.', 'Rare; very emphatic contrast'],
          ],
          caption: 'Only one constituent can be fronted per clause. The subject itself does not trigger inversion when fronted.',
        },
        {
          type: 'note',
          content: 'A common advanced error is double fronting: *"Gisteren het rapport heb ik gelezen." Only one element precedes the finite verb.',
          variant: 'warning',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Gisteren het rapport heb ik gelezen.', correct: 'Gisteren heb ik het rapport gelezen.', explanation: 'Only one constituent can occupy the topic position (position 1). Choose one: the adverb or the object.' },
            { incorrect: 'Dat hij ziek is, ik wist het niet.', correct: 'Dat hij ziek is, wist ik het niet.', explanation: 'After a fronted subordinate clause, inversion is required: verb before subject.' },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-cwo-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct verb cluster order in the subordinate clause.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik weet dat hij dit eerder ... (had, kunnen, zeggen)',
            options: ['had kunnen zeggen', 'kunnen had zeggen', 'zeggen kunnen had', 'had zeggen kunnen'],
            correctIndex: 0,
            explanation: 'The standard "red" order for a modal perfect: past participle – infinitive – auxiliary = "had kunnen zeggen". The "green" order "heeft kunnen zeggen" is also acceptable.',
          },
          {
            question: 'Ze vertelde dat de brief al ... (was, verstuurd)',
            options: ['verstuurd was', 'was verstuurd', 'verstuurd heeft', 'heeft verstuurd'],
            correctIndex: 0,
            explanation: 'Passive with zijn in a subordinate clause: past participle before auxiliary → verstuurd was. ("was verstuurd" is the green order and also acceptable, but "verstuurd was" is the traditional red order.)',
          },
          {
            question: 'Het is duidelijk dat we dit project niet ... (kunnen, afronden)',
            options: ['afronden kunnen', 'kunnen afronden', 'afronden kunnen niet', 'niet afronden kunnen'],
            correctIndex: 1,
            explanation: 'Modal + infinitive in subordinate clause: the negation precedes the cluster and the order is modal before infinitive: "niet kunnen afronden". Of the given options, "kunnen afronden" is the correct cluster; negation would appear before it.',
          },
        ],
      },
    },
    {
      id: 'b2-cwo-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the correct r-pronoun construction.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Hij heeft ___ lang ___ nagedacht. (about it)',
            options: ['er … over', 'over … het', 'het … over', 'daar … over'],
            correctIndex: 0,
            explanation: '"Er" combines with "over" to form "erover", which is split in spoken Dutch: er [adverb] over. "Daarover" (unsplit) is also correct but not listed as split form.',
          },
          {
            question: 'Dit is de reden ___ ik ontslag neem. (for which)',
            options: ['waarvoor', 'ervoor', 'daarvoor', 'hiervoor'],
            correctIndex: 0,
            explanation: 'In a relative clause referring to a thing, use waar + preposition: waarvoor (for which).',
          },
          {
            question: 'Ze weet niet ___ ze het geld heeft gelaten. (where)',
            options: ['waar', 'er', 'waarnaar', 'waarop'],
            correctIndex: 0,
            explanation: '"Waar" functions as a question word / relative adverb meaning "where". No preposition is needed here since "laten" does not take one.',
          },
        ],
      },
    },
    {
      id: 'b2-cwo-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct r-pronoun (write the combined form, e.g. "erover").',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Ik heb', after: 'veel over nagedacht.', correctAnswer: 'er', hint: 'Unstressed r-pronoun for "it"; split with "over" later in the clause.' },
          { before: 'De kwestie', after: 'hij het meest bezorgd over is, is de deadline.', correctAnswer: 'waar', hint: 'Relative clause referring to a thing: waar + preposition.' },
          { before: 'We zijn blij', after: '.', correctAnswer: 'daarmee', hint: '"Met dat" → daarmee (with that).' },
          { before: 'Dit is het formulier', after: 'u uw gegevens op invult.', correctAnswer: 'waarop', hint: '"Op welk" in a relative clause → waarop.' },
        ],
      },
    },
    {
      id: 'b2-cwo-err-1',
      type: 'error-correction',
      instruction: 'Correct the word order error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik denk over het al de hele dag.',
            correctedSentence: 'Ik denk er al de hele dag over.',
            errorExplanation: '"Het" cannot follow a preposition referring to a thing. Use the r-pronoun split form: er … over.',
          },
          {
            incorrectSentence: 'Gisteren het rapport heb ik gelezen.',
            correctedSentence: 'Gisteren heb ik het rapport gelezen.',
            errorExplanation: 'Only one element can be fronted (position 1). Here "Gisteren" is fronted; "het rapport" stays in its normal post-verb position.',
          },
          {
            incorrectSentence: 'Ze zei dat ze de taak heeft kunnen niet voltooien.',
            correctedSentence: 'Ze zei dat ze de taak niet heeft kunnen voltooien.',
            errorExplanation: 'Negation (niet) precedes the entire verb cluster. The cluster order is: heeft – kunnen – voltooien (green order).',
          },
          {
            incorrectSentence: 'Dat hij zou vertrekken, ik wist het niet.',
            correctedSentence: 'Dat hij zou vertrekken, wist ik het niet.',
            errorExplanation: 'After a fronted subordinate clause, the finite verb must come immediately (V2 inversion): wist ik, not ik wist.',
          },
        ],
      },
    },
    {
      id: 'b2-cwo-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Rewrite the verb cluster in the correct order for the subordinate clause.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Hij vertelde dat het contract al', after: '. [ondertekend / was]', correctAnswer: 'ondertekend was', acceptableAnswers: ['was ondertekend'], hint: 'Passive auxiliary zijn + past participle in subordinate clause.' },
          { before: 'Ik begrijp niet waarom ze dit niet eerder', after: '. [hebben / gemeld / had / kunnen]', correctAnswer: 'had kunnen melden', acceptableAnswers: ['hebben kunnen melden'], hint: 'Perfect modal: auxiliary – modal infinitive – main infinitive (red order).' },
          { before: 'Het is belangrijk dat u het formulier volledig', after: '. [invult]', correctAnswer: 'invult', hint: 'Separable verb in subordinate clause: prefix re-attaches at the end. "Vul … in" → invult.' },
        ],
      },
    },
    {
      id: 'b2-cwo-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch. Pay attention to verb clusters and r-pronouns.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I know that this problem could have been solved earlier.',
            correctDutch: 'Ik weet dat dit probleem eerder opgelost had kunnen worden.',
            acceptableAnswers: ['Ik weet dat dit probleem eerder had kunnen worden opgelost.'],
            keyVocabulary: [{ dutch: 'opgelost', english: 'solved (past participle)' }, { dutch: 'had kunnen worden', english: 'could have been (passive perfect modal)' }],
          },
          {
            english: 'The project she is working on has been delayed.',
            correctDutch: 'Het project waaraan ze werkt, is uitgesteld.',
            acceptableAnswers: ['Het project waar ze aan werkt, is uitgesteld.'],
            keyVocabulary: [{ dutch: 'waaraan', english: 'on which' }, { dutch: 'uitgesteld', english: 'delayed' }],
          },
          {
            english: 'Yesterday, the director informed us that the deadline had been moved.',
            correctDutch: 'Gisteren heeft de directeur ons meegedeeld dat de deadline is verschoven.',
            acceptableAnswers: ['Gisteren deelde de directeur ons mee dat de deadline was verschoven.'],
            keyVocabulary: [{ dutch: 'meegedeeld', english: 'informed / communicated' }, { dutch: 'verschoven', english: 'moved / shifted' }],
          },
        ],
      },
    },
    {
      id: 'b2-cwo-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['weet', 'Ik', 'dit', 'dat', 'eerder', 'gezegd', 'hij', 'heeft'],
            correctOrder: ['Ik', 'weet', 'dat', 'hij', 'dit', 'eerder', 'heeft', 'gezegd'],
            translation: 'I know that he said this earlier.',
          },
          {
            shuffledWords: ['de', 'waarover', 'gaat', 'vergadering', 'Dit', 'is'],
            correctOrder: ['Dit', 'is', 'de', 'vergadering', 'waarover', 'het', 'gaat'],
            translation: 'This is the meeting that it is about.',
          },
          {
            shuffledWords: ['rapport', 'Dat', 'niet', 'gelezen', 'wist', 'ik', 'had', 'hij', 'het'],
            correctOrder: ['Dat', 'hij', 'het', 'rapport', 'niet', 'had', 'gelezen', 'wist', 'ik'],
            translation: 'I did not know that he had not read the report.',
          },
        ],
      },
    },
    {
      id: 'b2-cwo-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short paragraph (4–5 sentences) explaining a complex situation at work or in your studies, using subordinate clauses with verb clusters and at least one r-pronoun.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een alinea over een ingewikkelde situatie op het werk of in je studie.',
        context: 'Use subordinate clauses introduced by dat, omdat, hoewel, terwijl, or relative pronouns. Include at least one modal perfect and one r-pronoun (split or unsplit).',
        guidelines: [
          'Use at least two subordinate clauses with verb clusters',
          'Include one r-pronoun construction (e.g. er … over, waarvoor, daarmee)',
          'Front at least one element other than the subject to vary sentence rhythm',
        ],
        sampleResponse: 'Mijn leidinggevende heeft me verteld dat het project niet op tijd afgerond had kunnen worden. Hier had ik al een tijdje over nagedacht, maar ik had er niets over gezegd omdat ik niet zeker was van de feiten. Gisteren heb ik het rapport eindelijk doorgestuurd, waarop mijn collega\'s direct hebben gereageerd.',
      },
    },
  ],
};
