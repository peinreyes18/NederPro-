import { Topic } from '@/content/types';

export const perfectumIrregular: Topic = {
  id: 'perfectum-irregular',
  levelId: 'a2',
  order: 2,
  title: 'Perfect Tense: Irregular Verbs',
  subtitle: 'Voltooid tegenwoordige tijd: onregelmatige werkwoorden',
  estimatedMinutes: 35,
  prerequisites: ['perfectum-regular'],
  lessons: [
    {
      id: 'perfectum-irregular-intro',
      topicId: 'perfectum-irregular',
      title: 'Irregular Past Participles',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Irregular verbs change their vowel in the past participle and typically end in -en instead of -t or -d. The pattern is: ge- + changed stem + -en.',
          explanation:
            'Unlike regular verbs that follow the t kofschip rule, irregular (strong) verbs undergo a vowel change in their stem. These forms must be memorized. The past participle of irregular verbs almost always ends in -en.',
        },
        {
          type: 'grammar-table',
          headers: ['Infinitive', 'Past participle', 'English'],
          rows: [
            ['zijn', 'geweest', 'to be'],
            ['hebben', 'gehad', 'to have'],
            ['gaan', 'gegaan', 'to go'],
            ['komen', 'gekomen', 'to come'],
            ['doen', 'gedaan', 'to do'],
            ['zien', 'gezien', 'to see'],
            ['nemen', 'genomen', 'to take'],
            ['geven', 'gegeven', 'to give'],
            ['schrijven', 'geschreven', 'to write'],
            ['spreken', 'gesproken', 'to speak'],
            ['lezen', 'gelezen', 'to read'],
            ['eten', 'gegeten', 'to eat'],
            ['drinken', 'gedronken', 'to drink'],
            ['rijden', 'gereden', 'to drive/ride'],
            ['slapen', 'geslapen', 'to sleep'],
            ['beginnen', 'begonnen', 'to begin'],
            ['vinden', 'gevonden', 'to find'],
          ],
          caption:
            'These irregular past participles must be memorized. Notice the vowel changes in the stem.',
        },
        {
          type: 'note',
          content:
            'A good strategy is to learn irregular verbs in groups based on their vowel change pattern. For example: schrijven -> geschreven, rijden -> gereden (ij -> e); drinken -> gedronken, vinden -> gevonden (i -> o); nemen -> genomen, spreken -> gesproken (e -> o).',
          variant: 'tip',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik heb het boek gelezen.',
              english: 'I have read the book.',
              highlight: 'gelezen',
            },
            {
              dutch: 'Zij heeft een brief geschreven.',
              english: 'She wrote a letter.',
              highlight: 'geschreven',
            },
            {
              dutch: 'Wij hebben koffie gedronken.',
              english: 'We drank coffee.',
              highlight: 'gedronken',
            },
            {
              dutch: 'Hij heeft de sleutels gevonden.',
              english: 'He found the keys.',
              highlight: 'gevonden',
            },
          ],
        },
      ],
    },
    {
      id: 'perfectum-irregular-hebben-zijn',
      topicId: 'perfectum-irregular',
      title: 'Hebben vs. Zijn with Irregular Verbs',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The same rule applies for irregular verbs: movement/state-change verbs use zijn; the rest use hebben.',
          explanation:
            'Many common irregular verbs use zijn as their auxiliary because they express movement or a change of state. Key examples include: zijn (is geweest), gaan (is gegaan), komen (is gekomen), rijden (is gereden when indicating movement from A to B), beginnen (is begonnen), and worden (is geworden).',
        },
        {
          type: 'grammar-table',
          headers: ['Verb', 'Auxiliary', 'Perfect tense example'],
          rows: [
            ['zijn', 'zijn', 'Ik ben ziek geweest.'],
            ['gaan', 'zijn', 'Zij is naar huis gegaan.'],
            ['komen', 'zijn', 'Hij is laat gekomen.'],
            ['rijden', 'zijn / hebben', 'Ik ben naar Utrecht gereden. / Ik heb auto gereden.'],
            ['beginnen', 'zijn', 'De vergadering is begonnen.'],
            ['lezen', 'hebben', 'Ik heb de krant gelezen.'],
            ['schrijven', 'hebben', 'Zij heeft een e-mail geschreven.'],
            ['eten', 'hebben', 'Wij hebben pasta gegeten.'],
            ['drinken', 'hebben', 'Hij heeft water gedronken.'],
            ['spreken', 'hebben', 'Ik heb met de baas gesproken.'],
          ],
          caption:
            'Some verbs like rijden can use both hebben and zijn depending on whether movement from A to B is expressed.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik ben naar de vergadering gegaan.',
              english: 'I went to the meeting.',
              highlight: 'ben ... gegaan',
              note: 'zijn: movement to a destination',
            },
            {
              dutch: 'Zij is vorige week gekomen.',
              english: 'She came last week.',
              highlight: 'is ... gekomen',
              note: 'zijn: movement',
            },
            {
              dutch: 'Wij hebben Nederlands gesproken.',
              english: 'We spoke Dutch.',
              highlight: 'hebben ... gesproken',
              note: 'hebben: no movement',
            },
            {
              dutch: 'Het project is gisteren begonnen.',
              english: 'The project started yesterday.',
              highlight: 'is ... begonnen',
              note: 'zijn: change of state',
            },
          ],
        },
        {
          type: 'workplace-context',
          scenario:
            'Irregular verbs appear frequently in professional Dutch. Here are common workplace sentences using irregular past participles.',
          examples: [
            {
              dutch: 'Ik heb het rapport gelezen.',
              english: 'I have read the report.',
            },
            {
              dutch: 'Zij is naar de vergadering gegaan.',
              english: 'She went to the meeting.',
            },
            {
              dutch: 'Wij hebben met de klant gesproken.',
              english: 'We spoke with the client.',
            },
            {
              dutch: 'Hij heeft een voorstel geschreven.',
              english: 'He wrote a proposal.',
            },
            {
              dutch: 'De presentatie is goed gegaan.',
              english: 'The presentation went well.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik heb het boek gelest.',
              correct: 'Ik heb het boek gelezen.',
              explanation:
                "Lezen is irregular. The past participle is 'gelezen', not 'gelest'. It does not follow regular t kofschip rules.",
            },
            {
              incorrect: 'Zij heeft naar de winkel gegaan.',
              correct: 'Zij is naar de winkel gegaan.',
              explanation:
                "Gaan expresses movement from A to B, so it requires 'zijn' as the auxiliary, not 'hebben'.",
            },
            {
              incorrect: 'Hij heeft een brief geschrijven.',
              correct: 'Hij heeft een brief geschreven.',
              explanation:
                "The past participle of 'schrijven' is 'geschreven' (ij changes to e), not 'geschrijven'.",
            },
            {
              incorrect: 'Wij zijn koffie gedronken.',
              correct: 'Wij hebben koffie gedronken.',
              explanation:
                "Drinken is not a movement or state-change verb. It uses 'hebben' as the auxiliary.",
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-irr-fill-1',
      topicId: 'perfectum-irregular',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct irregular past participle.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb het boek',
            after: '. (lezen)',
            correctAnswer: 'gelezen',
            hint: 'lezen -> gelezen (vowel stays the same)',
          },
          {
            before: 'Zij heeft een brief',
            after: '. (schrijven)',
            correctAnswer: 'geschreven',
            hint: 'schrijven -> geschreven (ij changes to e)',
          },
          {
            before: 'Wij hebben koffie',
            after: '. (drinken)',
            correctAnswer: 'gedronken',
            hint: 'drinken -> gedronken (i changes to o)',
          },
        ],
      },
    },
    {
      id: 'a2-irr-fill-2',
      topicId: 'perfectum-irregular',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct irregular past participle.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij heeft de sleutels',
            after: '. (vinden)',
            correctAnswer: 'gevonden',
            hint: 'vinden -> gevonden (i changes to o)',
          },
          {
            before: 'Ik heb met hem',
            after: '. (spreken)',
            correctAnswer: 'gesproken',
            hint: 'spreken -> gesproken (e changes to o)',
          },
          {
            before: 'Zij heeft het cadeau',
            after: '. (geven)',
            correctAnswer: 'gegeven',
            hint: 'geven -> gegeven (vowel stays the same)',
          },
        ],
      },
    },
    {
      id: 'a2-irr-mc-1',
      topicId: 'perfectum-irregular',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct past participle.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik heb de hele dag ___. (slapen)',
            options: ['geslaapd', 'geslapen', 'geslapt', 'gesliepen'],
            correctIndex: 1,
            explanation:
              "Slapen is irregular. The past participle is 'geslapen' (vowel stays the same, ends in -en).",
          },
          {
            question: 'Zij heeft een appel ___. (eten)',
            options: ['geëten', 'gegeten', 'geeet', 'geten'],
            correctIndex: 1,
            explanation:
              "Eten is irregular. The past participle is 'gegeten' (ge- + geten).",
          },
          {
            question: 'Wij hebben het antwoord ___. (nemen - in the sense of taking a decision)',
            options: ['genoomen', 'genomen', 'geneemd', 'genomen'],
            correctIndex: 1,
            explanation:
              "Nemen is irregular. The past participle is 'genomen' (e changes to o).",
          },
        ],
      },
    },
    {
      id: 'a2-irr-mc-2',
      topicId: 'perfectum-irregular',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct auxiliary verb for these irregular verbs.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Hij ___ naar Amsterdam gegaan.',
            options: ['heeft', 'is', 'ben', 'hebben'],
            correctIndex: 1,
            explanation:
              "Gaan expresses movement from A to B, so it uses 'zijn'. Hij is gegaan.",
          },
          {
            question: 'Wij ___ het probleem gezien.',
            options: ['zijn', 'is', 'hebben', 'heeft'],
            correctIndex: 2,
            explanation:
              "Zien does not express movement or state change, so it uses 'hebben'. Note: the correct participle is 'gezien'.",
          },
          {
            question: 'De vergadering ___ om negen uur begonnen.',
            options: ['heeft', 'is', 'zijn', 'heb'],
            correctIndex: 1,
            explanation:
              "Beginnen expresses a change of state (something starts), so it uses 'zijn'.",
          },
        ],
      },
    },
    {
      id: 'a2-irr-order-1',
      topicId: 'perfectum-irregular',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Put the words in the correct order to form a perfect tense sentence.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['gelezen', 'heb', 'ik', 'het', 'boek'],
            correctOrder: ['Ik', 'heb', 'het', 'boek', 'gelezen'],
            translation: 'I read the book.',
          },
          {
            shuffledWords: ['is', 'zij', 'naar', 'gegaan', 'huis'],
            correctOrder: ['Zij', 'is', 'naar', 'huis', 'gegaan'],
            translation: 'She went home.',
          },
          {
            shuffledWords: ['gedronken', 'wij', 'thee', 'hebben'],
            correctOrder: ['Wij', 'hebben', 'thee', 'gedronken'],
            translation: 'We drank tea.',
          },
        ],
      },
    },
    {
      id: 'a2-irr-fill-3',
      topicId: 'perfectum-irregular',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in the correct auxiliary and past participle.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij',
            after: 'gisteren laat ___. (komen)',
            correctAnswer: 'is ... gekomen',
            acceptableAnswers: ['is gekomen'],
            hint: 'komen = movement verb -> zijn + gekomen',
          },
          {
            before: 'Ik',
            after: 'de manager ___. (zien)',
            correctAnswer: 'heb ... gezien',
            acceptableAnswers: ['heb gezien'],
            hint: 'zien = no movement -> hebben + gezien',
          },
          {
            before: 'Het',
            after: 'een mooi feest ___. (zijn)',
            correctAnswer: 'is ... geweest',
            acceptableAnswers: ['is geweest'],
            hint: 'zijn -> is geweest',
          },
        ],
      },
    },
    {
      id: 'a2-irr-mc-3',
      topicId: 'perfectum-irregular',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Which sentence is completely correct?',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Select the correct sentence:',
            options: [
              'Ik heb naar de bioscoop gegaan.',
              'Ik ben naar de bioscoop gegaan.',
              'Ik ben naar de bioscoop gegeaan.',
              'Ik heb naar de bioscoop gegeaan.',
            ],
            correctIndex: 1,
            explanation:
              "Gaan (movement A to B) uses 'zijn'. Past participle of gaan is 'gegaan'.",
          },
          {
            question: 'Select the correct sentence:',
            options: [
              'Zij heeft de taart genomen.',
              'Zij is de taart genomen.',
              'Zij heeft de taart genoomen.',
              'Zij heeft de taart genomd.',
            ],
            correctIndex: 0,
            explanation:
              "Nemen uses 'hebben' (transitive, direct object 'de taart'). Past participle is 'genomen'.",
          },
        ],
      },
    },
    {
      id: 'a2-irr-fill-4',
      topicId: 'perfectum-irregular',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Complete the workplace sentences with the correct perfect tense.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb met de klant',
            after: '. (spreken)',
            correctAnswer: 'gesproken',
            hint: 'spreken -> gesproken (e changes to o)',
          },
          {
            before: 'De presentatie is goed',
            after: '. (gaan)',
            correctAnswer: 'gegaan',
            hint: 'gaan -> gegaan',
          },
          {
            before: 'Hij heeft een voorstel',
            after: '. (schrijven)',
            correctAnswer: 'geschreven',
            hint: 'schrijven -> geschreven (ij changes to e)',
          },
        ],
      },
    },
    {
      id: 'a2-irr-order-2',
      topicId: 'perfectum-irregular',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Create correct perfect tense sentences from these scrambled words.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['met', 'heb', 'ik', 'gesproken', 'de', 'baas'],
            correctOrder: ['Ik', 'heb', 'met', 'de', 'baas', 'gesproken'],
            translation: 'I spoke with the boss.',
          },
          {
            shuffledWords: ['gegaan', 'is', 'goed', 'de', 'vergadering'],
            correctOrder: ['De', 'vergadering', 'is', 'goed', 'gegaan'],
            translation: 'The meeting went well.',
          },
        ],
      },
    },
    {
      id: 'a2-irr-fill-5',
      topicId: 'perfectum-irregular',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction:
        'Complete these sentences with the full perfect tense (auxiliary + past participle).',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De collega\'s',
            after: 'gisteren pizza ___. (eten)',
            correctAnswer: 'hebben ... gegeten',
            acceptableAnswers: ['hebben gegeten'],
            hint: 'eten = transitive -> hebben; eten -> gegeten',
          },
          {
            before: 'De nieuwe medewerker',
            after: 'vorige week ___. (komen)',
            correctAnswer: 'is ... gekomen',
            acceptableAnswers: ['is gekomen'],
            hint: 'komen = movement -> zijn; komen -> gekomen',
          },
          {
            before: 'Ik',
            after: 'het contract ___. (lezen)',
            correctAnswer: 'heb ... gelezen',
            acceptableAnswers: ['heb gelezen'],
            hint: 'lezen = transitive -> hebben; lezen -> gelezen',
          },
        ],
      },
    },
    {
      id: 'a2-irr-order-3',
      topicId: 'perfectum-irregular',
      type: 'word-order',
      difficulty: 'open',
      instruction:
        'Arrange the words into correct Dutch sentences.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: [
              'geschreven',
              'heeft',
              'een',
              'zij',
              'e-mail',
              'de',
              'aan',
              'klant',
            ],
            correctOrder: [
              'Zij',
              'heeft',
              'een',
              'e-mail',
              'aan',
              'de',
              'klant',
              'geschreven',
            ],
            translation: 'She wrote an email to the client.',
          },
          {
            shuffledWords: [
              'we',
              'hebben',
              'gedaan',
              'ons',
              'best',
            ],
            correctOrder: ['We', 'hebben', 'ons', 'best', 'gedaan'],
            translation: 'We did our best.',
          },
        ],
      },
    },
    {
      id: 'a2-irr-mc-4',
      topicId: 'perfectum-irregular',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Choose the best translation for the Dutch sentence.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What does "De directeur is naar het kantoor gereden" mean?',
            options: [
              'The director drove to the office.',
              'The director is driving to the office.',
              'The director has the office.',
              'The director rode the office.',
            ],
            correctIndex: 0,
            explanation:
              "Is ... gereden = perfect tense of rijden with zijn (movement A to B). The director drove to the office.",
          },
          {
            question:
              'How would you say "We have already begun the project" in Dutch?',
            options: [
              'Wij hebben het project al begonnen.',
              'Wij zijn al met het project begonnen.',
              'Wij begonnen al het project.',
              'Wij zijn het project al beginnen.',
            ],
            correctIndex: 1,
            explanation:
              "Beginnen uses 'zijn' (change of state). The common construction is 'zijn met iets begonnen'. Past participle: begonnen.",
          },
        ],
      },
    },
  ],
};
