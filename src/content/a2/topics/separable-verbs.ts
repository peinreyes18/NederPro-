import { Topic } from '@/content/types';

export const separableVerbs: Topic = {
  id: 'separable-verbs',
  levelId: 'a2',
  order: 3,
  title: 'Separable Verbs',
  subtitle: 'Scheidbare werkwoorden',
  estimatedMinutes: 35,
  lessons: [
    {
      id: 'separable-verbs-intro',
      topicId: 'separable-verbs',
      title: 'What Are Separable Verbs?',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Separable verbs (scheidbare werkwoorden) consist of a prefix + verb. In main clauses, the prefix separates and moves to the end of the sentence.',
          explanation:
            'Dutch has many compound verbs where a prefix (often a preposition or adverb) is attached to a base verb. In a main clause with the verb in second position, the prefix detaches and goes to the end. For example: "opbellen" splits into "Ik bel je op." The prefix carries stress in pronunciation: OPbellen, AANkomen.',
        },
        {
          type: 'grammar-table',
          headers: ['Prefix', 'Example verb', 'Meaning', 'Separated example'],
          rows: [
            ['aan', 'aankomen', 'to arrive', 'De trein komt om 9 uur aan.'],
            ['af', 'afspreken', 'to arrange/agree', 'Wij spreken een tijd af.'],
            ['bij', 'bijdragen', 'to contribute', 'Hij draagt veel bij.'],
            ['in', 'invullen', 'to fill in', 'Ik vul het formulier in.'],
            ['mee', 'meenemen', 'to take along', 'Neem je je laptop mee?'],
            ['op', 'opbellen', 'to call (phone)', 'Ik bel je morgen op.'],
            ['uit', 'uitnodigen', 'to invite', 'Zij nodigt haar vrienden uit.'],
            ['terug', 'terugkomen', 'to come back', 'Ik kom om vijf uur terug.'],
            ['door', 'doorgaan', 'to continue', 'De les gaat door tot zes uur.'],
            ['weg', 'weggaan', 'to leave/go away', 'Hij gaat om drie uur weg.'],
          ],
          caption:
            'Common separable prefixes with example verbs. The prefix always receives stress in pronunciation.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik bel je vanavond op.',
              english: 'I will call you tonight.',
              highlight: 'bel ... op',
              note: 'opbellen splits: verb in position 2, prefix at the end',
            },
            {
              dutch: 'De trein komt om half tien aan.',
              english: 'The train arrives at half past nine.',
              highlight: 'komt ... aan',
              note: 'aankomen splits: komt in position 2, aan at the end',
            },
            {
              dutch: 'Zij nodigt alle collega\'s uit.',
              english: 'She invites all colleagues.',
              highlight: 'nodigt ... uit',
              note: 'uitnodigen splits: nodigt in position 2, uit at the end',
            },
            {
              dutch: 'Neem je je paraplu mee?',
              english: 'Are you taking your umbrella along?',
              highlight: 'Neem ... mee',
              note: 'meenemen splits in questions too',
            },
          ],
        },
        {
          type: 'note',
          content:
            'How do you know if a verb is separable? Listen to the stress. Separable verbs have stress on the prefix: OPbellen, AANkomen. Inseparable verbs have stress on the stem: beGINnen, verTELlen. The prefixes be-, er-, ge-, her-, ont-, ver- are always inseparable.',
          variant: 'tip',
        },
      ],
    },
    {
      id: 'separable-verbs-subordinate',
      topicId: 'separable-verbs',
      title: 'Separable Verbs in Subordinate Clauses',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'In subordinate clauses (introduced by conjunctions like dat, omdat, als, wanneer, etc.), the separable verb stays together and the whole verb moves to the end.',
          explanation:
            'In subordinate clauses, the conjugated verb goes to the end of the clause. Since the prefix is already at the end (as part of the verb), the verb does not split. The prefix and verb remain as one word.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik weet dat hij morgen aankomt.',
              english: 'I know that he arrives tomorrow.',
              highlight: 'aankomt',
              note: 'In the dat-clause, aankomen stays together',
            },
            {
              dutch: 'Zij belt niet op, omdat zij druk is.',
              english: 'She does not call because she is busy.',
              highlight: 'opbelt',
              note: 'Main clause: splits. If the subordinate had opbellen, it would stay together.',
            },
            {
              dutch: 'Ik ga naar huis als de vergadering afloopt.',
              english: 'I go home when the meeting ends.',
              highlight: 'afloopt',
              note: 'In the als-clause, aflopen stays together',
            },
          ],
        },
      ],
    },
    {
      id: 'separable-verbs-perfect',
      topicId: 'separable-verbs',
      title: 'Separable Verbs in the Perfect Tense',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'In the perfect tense, the ge- of the past participle goes between the prefix and the stem: prefix + ge- + stem + -t/-d/-en.',
          explanation:
            'When forming the past participle of separable verbs, the ge- marker is inserted between the separable prefix and the verb stem. For regular separable verbs, the t kofschip rule applies to the ending. For irregular separable verbs, the vowel changes as expected.',
        },
        {
          type: 'grammar-table',
          headers: ['Infinitive', 'Past participle', 'Type', 'Example'],
          rows: [
            ['opbellen', 'opgebeld', 'regular (-d)', 'Ik heb hem opgebeld.'],
            ['aanmaken', 'aangemaakt', 'regular (-t)', 'Zij heeft een account aangemaakt.'],
            ['uitnodigen', 'uitgenodigd', 'regular (-d)', 'Wij hebben hen uitgenodigd.'],
            ['opruimen', 'opgeruimd', 'regular (-d)', 'Hij heeft de kamer opgeruimd.'],
            ['terugkomen', 'teruggekomen', 'irregular', 'Zij is teruggekomen.'],
            ['meenemen', 'meegenomen', 'irregular', 'Ik heb mijn laptop meegenomen.'],
            ['doorgaan', 'doorgegaan', 'irregular', 'De les is doorgegaan.'],
            ['aankomen', 'aangekomen', 'irregular', 'De trein is aangekomen.'],
            ['weggaan', 'weggegaan', 'irregular', 'Hij is weggegaan.'],
          ],
          caption:
            'Notice how ge- is always placed between the prefix and the verb stem.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik heb je gisteren opgebeld.',
              english: 'I called you yesterday.',
              highlight: 'opgebeld',
              note: 'op + ge + beld',
            },
            {
              dutch: 'Zij heeft het document aangemaakt.',
              english: 'She created the document.',
              highlight: 'aangemaakt',
              note: 'aan + ge + maakt',
            },
            {
              dutch: 'Wij hebben alle collega\'s uitgenodigd.',
              english: 'We invited all colleagues.',
              highlight: 'uitgenodigd',
              note: 'uit + ge + nodigd',
            },
            {
              dutch: 'De trein is om tien uur aangekomen.',
              english: 'The train arrived at ten o\'clock.',
              highlight: 'aangekomen',
              note: 'aan + ge + komen (irregular, uses zijn)',
            },
          ],
        },
        {
          type: 'workplace-context',
          scenario:
            'Separable verbs are very common in workplace Dutch. Here are typical sentences you might use at the office.',
          examples: [
            {
              dutch: 'Ik bel u terug.',
              english: 'I will call you back.',
            },
            {
              dutch: 'Zij maakt het document aan.',
              english: 'She is creating the document.',
            },
            {
              dutch: 'Wij nodigen alle collega\'s uit voor de borrel.',
              english: 'We are inviting all colleagues to the drinks.',
            },
            {
              dutch: 'Kunt u dit formulier invullen?',
              english: 'Can you fill in this form?',
            },
            {
              dutch: 'Ik heb het kantoor opgeruimd.',
              english: 'I tidied up the office.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik opbel je morgen.',
              correct: 'Ik bel je morgen op.',
              explanation:
                'In a main clause, the separable verb must split. The conjugated stem goes to position 2, the prefix goes to the end.',
            },
            {
              incorrect: 'Ik heb hem gebeld op.',
              correct: 'Ik heb hem opgebeld.',
              explanation:
                'In the perfect tense, ge- goes between the prefix and stem: opgebeld, not gebeld op.',
            },
            {
              incorrect: 'Ik weet dat hij op morgen komt.',
              correct: 'Ik weet dat hij morgen aankomt.',
              explanation:
                'In subordinate clauses, the separable verb stays together and goes to the end: aankomt, not op ... komt.',
            },
            {
              incorrect: 'Zij heeft de collega\'s geuitnodigd.',
              correct: 'Zij heeft de collega\'s uitgenodigd.',
              explanation:
                'The ge- goes between the prefix and stem: uit-ge-nodigd, not ge-uitnodigd.',
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-sep-fill-1',
      topicId: 'separable-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction:
        'Fill in the separated verb form in the present tense. The infinitive is given.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'je morgen ___. (opbellen)',
            correctAnswer: 'bel ... op',
            acceptableAnswers: ['bel op'],
            hint: 'opbellen splits: bel in position 2, op at the end',
          },
          {
            before: 'De trein',
            after: 'om negen uur ___. (aankomen)',
            correctAnswer: 'komt ... aan',
            acceptableAnswers: ['komt aan'],
            hint: 'aankomen splits: komt in position 2, aan at the end',
          },
          {
            before: 'Hij',
            after: 'om vijf uur ___. (weggaan)',
            correctAnswer: 'gaat ... weg',
            acceptableAnswers: ['gaat weg'],
            hint: 'weggaan splits: gaat in position 2, weg at the end',
          },
        ],
      },
    },
    {
      id: 'a2-sep-order-1',
      topicId: 'separable-verbs',
      type: 'word-order',
      difficulty: 'controlled',
      instruction:
        'Put the words in the correct order. Remember: the prefix goes to the end in main clauses.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['op', 'ik', 'bel', 'je', 'vanavond'],
            correctOrder: ['Ik', 'bel', 'je', 'vanavond', 'op'],
            translation: 'I will call you tonight.',
          },
          {
            shuffledWords: ['aan', 'de', 'trein', 'komt', 'om', 'tien', 'uur'],
            correctOrder: ['De', 'trein', 'komt', 'om', 'tien', 'uur', 'aan'],
            translation: 'The train arrives at ten o\'clock.',
          },
          {
            shuffledWords: ['uit', 'zij', 'nodigt', 'haar', 'vrienden'],
            correctOrder: ['Zij', 'nodigt', 'haar', 'vrienden', 'uit'],
            translation: 'She invites her friends.',
          },
        ],
      },
    },
    {
      id: 'a2-sep-mc-1',
      topicId: 'separable-verbs',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "I fill in the form" in Dutch? (invullen)',
            options: [
              'Ik invul het formulier.',
              'Ik vul het formulier in.',
              'Ik het formulier invul.',
              'Ik vul in het formulier.',
            ],
            correctIndex: 1,
            explanation:
              "In a main clause, the conjugated verb goes to position 2 (vul) and the prefix goes to the end (in): 'Ik vul het formulier in.'",
          },
          {
            question: 'Which past participle of "opruimen" is correct?',
            options: ['geruimd op', 'opgeruimd', 'geruimtop', 'geop ruimd'],
            correctIndex: 1,
            explanation:
              "For separable verbs, ge- goes between the prefix and the stem: op + ge + ruimd = opgeruimd.",
          },
          {
            question: 'In a subordinate clause, what happens to "aankomen"?',
            options: [
              'It stays together: ...dat de trein aankomt.',
              'It splits: ...dat de trein komt aan.',
              'Only the prefix moves: ...dat aan de trein komt.',
              'It disappears: ...dat de trein komt.',
            ],
            correctIndex: 0,
            explanation:
              'In subordinate clauses, separable verbs stay together and the whole verb goes to the end of the clause.',
          },
        ],
      },
    },
    {
      id: 'a2-sep-order-2',
      topicId: 'separable-verbs',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Arrange the words to form correct sentences. Some are main clauses (verb splits), some are subordinate clauses (verb stays together).',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['mee', 'neem', 'je', 'je', 'laptop'],
            correctOrder: ['Neem', 'je', 'je', 'laptop', 'mee'],
            translation: 'Are you taking your laptop along?',
          },
          {
            shuffledWords: ['dat', 'ik', 'weet', 'hij', 'terugkomt', 'morgen'],
            correctOrder: ['Ik', 'weet', 'dat', 'hij', 'morgen', 'terugkomt'],
            translation: 'I know that he comes back tomorrow.',
          },
          {
            shuffledWords: ['uur', 'gaat', 'de', 'door', 'les', 'tot', 'zes'],
            correctOrder: ['De', 'les', 'gaat', 'door', 'tot', 'zes', 'uur'],
            translation: 'The lesson continues until six o\'clock.',
          },
        ],
      },
    },
    {
      id: 'a2-sep-fill-2',
      topicId: 'separable-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in the correct past participle of the separable verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb je gisteren',
            after: '. (opbellen)',
            correctAnswer: 'opgebeld',
            hint: 'op + ge + beld',
          },
          {
            before: 'Zij heeft het document',
            after: '. (aanmaken)',
            correctAnswer: 'aangemaakt',
            hint: 'aan + ge + maakt',
          },
          {
            before: 'De trein is om tien uur',
            after: '. (aankomen)',
            correctAnswer: 'aangekomen',
            hint: 'aan + ge + komen (irregular)',
          },
        ],
      },
    },
    {
      id: 'a2-sep-mc-2',
      topicId: 'separable-verbs',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Select the grammatically correct sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence correctly uses "terugbellen" (to call back)?',
            options: [
              'Ik terugbel je na de lunch.',
              'Ik bel je terug na de lunch.',
              'Ik bel je na de lunch terug.',
              'Ik bel terug je na de lunch.',
            ],
            correctIndex: 2,
            explanation:
              "The prefix 'terug' goes to the end of the sentence. The time expression 'na de lunch' comes before the prefix: 'Ik bel je na de lunch terug.'",
          },
          {
            question: 'Which perfect tense sentence with "uitnodigen" is correct?',
            options: [
              'Wij hebben de buren geuitnodigd.',
              'Wij hebben de buren uitgenodigd.',
              'Wij hebben de buren uitnodigt.',
              'Wij hebben de buren genodigd uit.',
            ],
            correctIndex: 1,
            explanation:
              "For separable verbs in perfect tense, ge- goes between the prefix and stem: uit + ge + nodigd = uitgenodigd.",
          },
        ],
      },
    },
    {
      id: 'a2-sep-order-3',
      topicId: 'separable-verbs',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Create correct perfect tense sentences with separable verbs.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['opgebeld', 'heb', 'ik', 'de', 'dokter'],
            correctOrder: ['Ik', 'heb', 'de', 'dokter', 'opgebeld'],
            translation: 'I called the doctor.',
          },
          {
            shuffledWords: ['is', 'zij', 'gisteren', 'teruggekomen'],
            correctOrder: ['Zij', 'is', 'gisteren', 'teruggekomen'],
            translation: 'She came back yesterday.',
          },
          {
            shuffledWords: [
              'uitgenodigd',
              'voor',
              'hebben',
              'het',
              'feest',
              'wij',
              'iedereen',
            ],
            correctOrder: [
              'Wij',
              'hebben',
              'iedereen',
              'voor',
              'het',
              'feest',
              'uitgenodigd',
            ],
            translation: 'We invited everyone to the party.',
          },
        ],
      },
    },
    {
      id: 'a2-sep-fill-3',
      topicId: 'separable-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Complete the workplace sentences with the correct form of the separable verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Kunt u dit formulier',
            after: '? (invullen)',
            correctAnswer: 'invullen',
            hint: 'After a modal verb (kunt), the infinitive stays together',
          },
          {
            before: 'Ik heb het kantoor',
            after: '. (opruimen)',
            correctAnswer: 'opgeruimd',
            hint: 'Perfect tense: op + ge + ruimd',
          },
          {
            before: 'De vergadering',
            after: 'om drie uur ___. (doorgaan, present tense)',
            correctAnswer: 'gaat ... door',
            acceptableAnswers: ['gaat door'],
            hint: 'Main clause present tense: verb splits',
          },
        ],
      },
    },
    {
      id: 'a2-sep-order-4',
      topicId: 'separable-verbs',
      type: 'word-order',
      difficulty: 'open',
      instruction:
        'Arrange these words into correct sentences. Pay attention to clause type.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: [
              'omdat',
              'ik',
              'niet',
              'opneem',
              'zij',
              'belt',
              'terug',
            ],
            correctOrder: [
              'Zij',
              'belt',
              'terug',
              'omdat',
              'ik',
              'niet',
              'opneem',
            ],
            translation:
              'She calls back because I do not pick up.',
          },
          {
            shuffledWords: [
              'meegenomen',
              'mijn',
              'heb',
              'naar',
              'laptop',
              'ik',
              'werk',
            ],
            correctOrder: [
              'Ik',
              'heb',
              'mijn',
              'laptop',
              'naar',
              'werk',
              'meegenomen',
            ],
            translation: 'I took my laptop to work.',
          },
        ],
      },
    },
    {
      id: 'a2-sep-mc-3',
      topicId: 'separable-verbs',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Choose the correct way to express each idea in Dutch.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question:
              'How do you say "She tidied up the kitchen before she left" in Dutch?',
            options: [
              'Zij heeft de keuken opgeruimd voordat zij wegging.',
              'Zij heeft de keuken geruimd op voordat zij weg ging.',
              'Zij opruimde de keuken voordat zij wegging.',
              'Zij heeft opgeruimd de keuken voordat zij ging weg.',
            ],
            correctIndex: 0,
            explanation:
              "Perfect tense of opruimen: opgeruimd (op + ge + ruimd). In the voordat-clause, wegging stays together (subordinate clause).",
          },
          {
            question:
              'Your colleague says: "Ik weet niet of hij morgen terugkomt." What does this mean?',
            options: [
              'I don\'t know if he comes back tomorrow.',
              'I don\'t know if he called back tomorrow.',
              'I know that he comes back tomorrow.',
              'I don\'t know if he went away tomorrow.',
            ],
            correctIndex: 0,
            explanation:
              "In the of-clause (subordinate), terugkomen stays together: terugkomt. The sentence means 'I don't know if he comes back tomorrow.'",
          },
        ],
      },
    },
    {
      id: 'a2-sep-fill-4',
      topicId: 'separable-verbs',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction:
        'Complete these complex sentences with the correct form of the separable verb.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik weet niet of de vergadering vandaag',
            after: '. (doorgaan)',
            correctAnswer: 'doorgaat',
            hint: 'Subordinate clause (of): verb stays together at the end',
          },
          {
            before: 'Nadat hij het formulier had',
            after: ', ging hij naar huis. (invullen)',
            correctAnswer: 'ingevuld',
            hint: 'Past participle in subordinate clause: in + ge + vuld',
          },
          {
            before: 'Zij heeft alle gasten voor het diner',
            after: '. (uitnodigen)',
            correctAnswer: 'uitgenodigd',
            hint: 'Perfect tense: uit + ge + nodigd',
          },
        ],
      },
    },
  ],
};
