import { Topic } from '@/content/types';

export const perfectumRegular: Topic = {
  id: 'perfectum-regular',
  levelId: 'a2',
  order: 1,
  title: 'Perfect Tense: Regular Verbs',
  subtitle: 'Voltooid tegenwoordige tijd: regelmatige werkwoorden',
  estimatedMinutes: 40,
  lessons: [
    {
      id: 'perfectum-regular-intro',
      topicId: 'perfectum-regular',
      title: 'Forming the Perfect Tense',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The Dutch perfect tense (voltooid tegenwoordige tijd) is formed with an auxiliary verb (hebben or zijn) + past participle (voltooid deelwoord).',
          explanation:
            'The perfect tense is used to describe completed actions in the past. Unlike English, the past participle always goes to the end of the sentence. The auxiliary verb (hebben or zijn) takes the conjugated position (second place in a main clause).',
        },
        {
          type: 'grammar-rule',
          rule: "Regular past participle formation: ge- + stem + -t (if the stem ends in a 't kofschip' consonant) or ge- + stem + -d (all other stems).",
          explanation:
            "To form the stem, take the infinitive, remove -en, and check the last consonant. If the stem ends in t, k, f, s, ch, or p (remembered by the mnemonic 't kofschip), the past participle ends in -t. Otherwise it ends in -d.",
        },
        {
          type: 'grammar-table',
          headers: ['Infinitive', 'Stem', 'Last consonant', 'Past participle'],
          rows: [
            ['werken', 'werk', 'k (kofschip)', 'gewerkt'],
            ['fietsen', 'fiets', 's (kofschip)', 'gefietst'],
            ['stoppen', 'stop', 'p (kofschip)', 'gestopt'],
            ['straffen', 'straf', 'f (kofschip)', 'gestraft'],
            ['lachen', 'lach', 'ch (kofschip)', 'gelachen'],
            ['wonen', 'woon', 'n (not kofschip)', 'gewoond'],
            ['leven', 'leef', 'f (kofschip)', 'geleefd'],
            ['reizen', 'reis', 's (kofschip)', 'gereisd'],
            ['bouwen', 'bouw', 'w (not kofschip)', 'gebouwd'],
            ['maken', 'maak', 'k (kofschip)', 'gemaakt'],
          ],
          caption:
            "Remember: 't kofschip consonants (t, k, f, s, ch, p) take -t; all others take -d.",
        },
        {
          type: 'note',
          content:
            "Be careful with the verb 'leven' (to live). The stem is 'leef' (v becomes f at the end of a syllable in Dutch spelling), and f is a kofschip letter, but the past participle is 'geleefd' because the original infinitive has a 'v'. Apply the rule to the original consonant before spelling changes: v -> -d, z -> -d.",
          variant: 'warning',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik heb gisteren gewerkt.',
              english: 'I worked yesterday.',
              highlight: 'gewerkt',
            },
            {
              dutch: 'Zij heeft in Amsterdam gewoond.',
              english: 'She has lived in Amsterdam.',
              highlight: 'gewoond',
            },
            {
              dutch: 'Wij hebben naar muziek geluisterd.',
              english: 'We listened to music.',
              highlight: 'geluisterd',
            },
            {
              dutch: 'Hij heeft de hele dag gefietst.',
              english: 'He cycled all day.',
              highlight: 'gefietst',
            },
          ],
        },
      ],
    },
    {
      id: 'perfectum-regular-no-ge',
      topicId: 'perfectum-regular',
      title: 'Verbs Without ge- Prefix',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Verbs with the unstressed prefixes be-, er-, ge-, her-, ont-, ver- do NOT get the ge- prefix in the past participle.',
          explanation:
            'These prefixes are inseparable and already occupy the position where ge- would go. The past participle is formed by simply adding -t or -d to the stem, without ge-.',
        },
        {
          type: 'grammar-table',
          headers: ['Prefix', 'Infinitive', 'Past participle', 'Example sentence'],
          rows: [
            ['be-', 'betalen', 'betaald', 'Ik heb de rekening betaald.'],
            ['be-', 'beloven', 'beloofd', 'Hij heeft het beloofd.'],
            ['er-', 'erkennen', 'erkend', 'Zij heeft het probleem erkend.'],
            ['ge-', 'gebruiken', 'gebruikt', 'Wij hebben de computer gebruikt.'],
            ['ge-', 'geloven', 'geloofd', 'Hij heeft mij geloofd.'],
            ['her-', 'herhalen', 'herhaald', 'De leraar heeft de les herhaald.'],
            ['ont-', 'ontdekken', 'ontdekt', 'Ze hebben een fout ontdekt.'],
            ['ver-', 'vertellen', 'verteld', 'Zij heeft het verhaal verteld.'],
            ['ver-', 'verhuizen', 'verhuisd', 'Wij zijn vorig jaar verhuisd.'],
          ],
        },
        {
          type: 'note',
          content:
            'Verbs ending in -eren (like telefoneren, studeren, repareren) also do not get ge-: getelefoneerd becomes gebeld, but telefoneren -> getelefoneerd. Actually, -eren verbs DO get ge-: getelefoneerd, gestudeerd. Exception: verbs with unstressed prefixes like reserveren -> gereserveerd.',
          variant: 'tip',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik heb de rekening betaald.',
              english: 'I paid the bill.',
              highlight: 'betaald',
              note: 'No ge- because of be- prefix',
            },
            {
              dutch: 'Zij heeft het verhaal verteld.',
              english: 'She told the story.',
              highlight: 'verteld',
              note: 'No ge- because of ver- prefix',
            },
            {
              dutch: 'Wij hebben de computer gebruikt.',
              english: 'We used the computer.',
              highlight: 'gebruikt',
              note: 'No ge- because of ge- prefix',
            },
          ],
        },
      ],
    },
    {
      id: 'perfectum-regular-hebben-zijn',
      topicId: 'perfectum-regular',
      title: 'Hebben vs. Zijn as Auxiliary',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Most verbs use "hebben" as auxiliary. Verbs indicating a change of state or movement from A to B use "zijn".',
          explanation:
            'The choice of auxiliary verb (hebben or zijn) depends on the meaning of the main verb. Transitive verbs (with a direct object) always use hebben. Intransitive verbs that express movement toward a destination or a change of state use zijn.',
        },
        {
          type: 'grammar-table',
          headers: ['Subject', 'hebben (present)', 'zijn (present)'],
          rows: [
            ['ik', 'heb', 'ben'],
            ['jij / je', 'hebt', 'bent'],
            ['u', 'heeft / hebt', 'bent'],
            ['hij / zij / het', 'heeft', 'is'],
            ['wij / we', 'hebben', 'zijn'],
            ['jullie', 'hebben', 'zijn'],
            ['zij (plural)', 'hebben', 'zijn'],
          ],
          caption: 'Conjugation of auxiliary verbs hebben and zijn in the present tense.',
        },
        {
          type: 'examples',
          examples: [
            {
              dutch: 'Ik heb hard gewerkt.',
              english: 'I have worked hard.',
              highlight: 'heb',
              note: 'hebben: no movement/state change',
            },
            {
              dutch: 'Hij is naar huis gefietst.',
              english: 'He cycled home.',
              highlight: 'is',
              note: 'zijn: movement from A to B',
            },
            {
              dutch: 'Wij zijn verhuisd.',
              english: 'We moved (house).',
              highlight: 'zijn',
              note: 'zijn: change of state',
            },
            {
              dutch: 'Zij heeft de brief gestuurd.',
              english: 'She sent the letter.',
              highlight: 'heeft',
              note: 'hebben: transitive verb with direct object',
            },
          ],
        },
        {
          type: 'workplace-context',
          scenario:
            'In a professional setting, the perfect tense is used frequently to report on completed tasks and actions.',
          examples: [
            {
              dutch: 'Ik heb de e-mail verstuurd.',
              english: 'I have sent the email.',
            },
            {
              dutch: 'Wij hebben het rapport afgemaakt.',
              english: 'We have finished the report.',
            },
            {
              dutch: 'De manager heeft de vergadering gepland.',
              english: 'The manager has planned the meeting.',
            },
            {
              dutch: 'Ik heb alle documenten gekopieerd.',
              english: 'I have copied all the documents.',
            },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ik heb gisteren gewerk.',
              correct: 'Ik heb gisteren gewerkt.',
              explanation:
                "Don't forget the -t or -d ending on the past participle. The stem 'werk' ends in k (kofschip), so the ending is -t: gewerkt.",
            },
            {
              incorrect: 'Zij heeft naar huis gefietst.',
              correct: 'Zij is naar huis gefietst.',
              explanation:
                "Fietsen with a destination (naar huis) indicates movement from A to B, so use 'zijn' as the auxiliary, not 'hebben'.",
            },
            {
              incorrect: 'Ik heb de rekening gebetaald.',
              correct: 'Ik heb de rekening betaald.',
              explanation:
                "Verbs with unstressed prefixes (be-, ver-, ont-, etc.) do not get ge-. 'Betalen' already starts with 'be-', so the past participle is 'betaald', not 'gebetaald'.",
            },
            {
              incorrect: 'Hij heeft het gewoont.',
              correct: 'Hij heeft daar gewoond.',
              explanation:
                "The stem of 'wonen' is 'woon'. The last letter n is not a kofschip consonant, so the ending is -d: gewoond, not gewoont.",
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'a2-perf-fill-1',
      topicId: 'perfectum-regular',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct past participle of the verb in parentheses.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb gisteren hard',
            after: '. (werken)',
            correctAnswer: 'gewerkt',
            hint: "Stem 'werk' ends in k (kofschip) -> -t",
          },
          {
            before: 'Zij heeft in Utrecht',
            after: '. (wonen)',
            correctAnswer: 'gewoond',
            hint: "Stem 'woon' ends in n (not kofschip) -> -d",
          },
          {
            before: 'Wij hebben de auto',
            after: '. (wassen)',
            correctAnswer: 'gewassen',
            acceptableAnswers: ['gewast'],
            hint: "Stem 'was' ends in s (kofschip) -> -t",
          },
        ],
      },
    },
    {
      id: 'a2-perf-fill-2',
      topicId: 'perfectum-regular',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction: 'Fill in the correct past participle. Pay attention to the t kofschip rule.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Hij heeft de hele dag',
            after: '. (fietsen)',
            correctAnswer: 'gefietst',
            hint: "Stem 'fiets' ends in s (kofschip) -> -t",
          },
          {
            before: 'Ik heb naar de radio',
            after: '. (luisteren)',
            correctAnswer: 'geluisterd',
            hint: "Stem 'luister' ends in r (not kofschip) -> -d",
          },
          {
            before: 'Zij hebben het huis',
            after: '. (bouwen)',
            correctAnswer: 'gebouwd',
            hint: "Stem 'bouw' ends in w (not kofschip) -> -d",
          },
        ],
      },
    },
    {
      id: 'a2-perf-fill-3',
      topicId: 'perfectum-regular',
      type: 'fill-in-the-blank',
      difficulty: 'controlled',
      instruction:
        'Fill in the past participle. Remember: some verbs do not get ge-.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik heb de rekening',
            after: '. (betalen)',
            correctAnswer: 'betaald',
            hint: "Prefix be- means no ge-: betaald",
          },
          {
            before: 'Hij heeft het verhaal',
            after: '. (vertellen)',
            correctAnswer: 'verteld',
            hint: "Prefix ver- means no ge-: verteld",
          },
          {
            before: 'Zij heeft de computer',
            after: '. (gebruiken)',
            correctAnswer: 'gebruikt',
            hint: "Prefix ge- means no extra ge-: gebruikt",
          },
        ],
      },
    },
    {
      id: 'a2-perf-mc-1',
      topicId: 'perfectum-regular',
      type: 'multiple-choice',
      difficulty: 'controlled',
      instruction: 'Choose the correct past participle.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Wij hebben de hele dag ___. (koken)',
            options: ['gekookt', 'gekookd', 'gekooken', 'kookt'],
            correctIndex: 0,
            explanation:
              "The stem of 'koken' is 'kook'. The last consonant k is a kofschip letter, so the ending is -t: gekookt.",
          },
          {
            question: 'Zij heeft haar moeder ___. (bellen)',
            options: ['gebelt', 'gebeld', 'gebellen', 'beld'],
            correctIndex: 1,
            explanation:
              "The stem of 'bellen' is 'bel'. The last consonant l is not a kofschip letter, so the ending is -d: gebeld.",
          },
          {
            question: 'Hij heeft een nieuwe baan ___. (ontdekken)',
            options: ['geontdekt', 'ontgedekt', 'ontdekt', 'geontdekken'],
            correctIndex: 2,
            explanation:
              "Verbs with the prefix ont- do not get ge-. The past participle of 'ontdekken' is 'ontdekt'.",
          },
        ],
      },
    },
    {
      id: 'a2-perf-mc-2',
      topicId: 'perfectum-regular',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Choose the correct auxiliary verb: hebben or zijn.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Zij ___ naar de winkel gefietst.',
            options: ['heeft', 'is', 'zijn', 'hebben'],
            correctIndex: 1,
            explanation:
              "Fietsen with a destination (naar de winkel) indicates movement from A to B, so use 'is'.",
          },
          {
            question: 'Ik ___ de hele avond gestudeerd.',
            options: ['ben', 'heb', 'is', 'zijn'],
            correctIndex: 1,
            explanation:
              "Studeren does not indicate movement or state change, so use 'heb'.",
          },
          {
            question: 'Wij ___ vorige week verhuisd.',
            options: ['hebben', 'zijn', 'is', 'heb'],
            correctIndex: 1,
            explanation:
              "Verhuizen indicates a change of state/location, so use 'zijn'.",
          },
        ],
      },
    },
    {
      id: 'a2-perf-order-1',
      topicId: 'perfectum-regular',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Put the words in the correct order to form a perfect tense sentence.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['gewerkt', 'heb', 'ik', 'gisteren'],
            correctOrder: ['Ik', 'heb', 'gisteren', 'gewerkt'],
            translation: 'I worked yesterday.',
          },
          {
            shuffledWords: ['gefietst', 'naar', 'is', 'school', 'hij'],
            correctOrder: ['Hij', 'is', 'naar', 'school', 'gefietst'],
            translation: 'He cycled to school.',
          },
          {
            shuffledWords: ['de', 'hebben', 'wij', 'betaald', 'rekening'],
            correctOrder: ['Wij', 'hebben', 'de', 'rekening', 'betaald'],
            translation: 'We paid the bill.',
          },
        ],
      },
    },
    {
      id: 'a2-perf-fill-4',
      topicId: 'perfectum-regular',
      type: 'fill-in-the-blank',
      difficulty: 'guided',
      instruction:
        'Fill in both the auxiliary verb and the past participle.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Zij',
            after: 'de e-mail ___. (versturen)',
            correctAnswer: 'heeft ... verstuurd',
            acceptableAnswers: ['heeft verstuurd'],
            hint: 'Auxiliary + past participle with ver- prefix',
          },
          {
            before: 'Ik',
            after: 'het rapport ___. (maken)',
            correctAnswer: 'heb ... gemaakt',
            acceptableAnswers: ['heb gemaakt'],
            hint: 'Stem "maak" ends in k (kofschip)',
          },
          {
            before: 'Wij',
            after: 'naar Amsterdam ___. (reizen)',
            correctAnswer: 'zijn ... gereisd',
            acceptableAnswers: ['zijn gereisd'],
            hint: 'Movement from A to B: use zijn',
          },
        ],
      },
    },
    {
      id: 'a2-perf-mc-3',
      topicId: 'perfectum-regular',
      type: 'multiple-choice',
      difficulty: 'guided',
      instruction: 'Which sentence is correct?',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is the correct perfect tense of "Ik werk vandaag"?',
            options: [
              'Ik heb vandaag gewerkt.',
              'Ik heb vandaag gewerked.',
              'Ik ben vandaag gewerkt.',
              'Ik heb vandaag werkt.',
            ],
            correctIndex: 0,
            explanation:
              "Werken uses hebben (no movement/state change). The past participle is gewerkt (stem 'werk', k is kofschip -> -t).",
          },
          {
            question:
              'Which is the correct perfect tense of "Zij betaalt de huur"?',
            options: [
              'Zij heeft de huur gebetaald.',
              'Zij heeft de huur betaald.',
              'Zij is de huur betaald.',
              'Zij heeft de huur betaalt.',
            ],
            correctIndex: 1,
            explanation:
              "Betalen has the prefix be-, so no ge- is added. The past participle is betaald.",
          },
        ],
      },
    },
    {
      id: 'a2-perf-order-2',
      topicId: 'perfectum-regular',
      type: 'word-order',
      difficulty: 'guided',
      instruction:
        'Arrange the words to form correct workplace sentences in the perfect tense.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['verstuurd', 'de', 'heeft', 'manager', 'de', 'e-mail'],
            correctOrder: ['De', 'manager', 'heeft', 'de', 'e-mail', 'verstuurd'],
            translation: 'The manager sent the email.',
          },
          {
            shuffledWords: ['wij', 'rapport', 'het', 'afgemaakt', 'hebben'],
            correctOrder: ['Wij', 'hebben', 'het', 'rapport', 'afgemaakt'],
            translation: 'We finished the report.',
          },
        ],
      },
    },
    {
      id: 'a2-perf-fill-5',
      topicId: 'perfectum-regular',
      type: 'fill-in-the-blank',
      difficulty: 'open',
      instruction:
        'Complete these workplace sentences with the correct perfect tense form.',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ik',
            after: 'alle documenten ___. (kopiëren)',
            correctAnswer: 'heb ... gekopieerd',
            acceptableAnswers: ['heb gekopieerd'],
            hint: 'Think about the auxiliary and the past participle',
          },
          {
            before: 'De collega',
            after: 'het probleem ___. (ontdekken)',
            correctAnswer: 'heeft ... ontdekt',
            acceptableAnswers: ['heeft ontdekt'],
            hint: 'ont- prefix: no ge-',
          },
        ],
      },
    },
    {
      id: 'a2-perf-order-3',
      topicId: 'perfectum-regular',
      type: 'word-order',
      difficulty: 'open',
      instruction:
        'Create complete perfect tense sentences from these scrambled words.',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: [
              'de',
              'heeft',
              'gepland',
              'vergadering',
              'directeur',
              'de',
            ],
            correctOrder: [
              'De',
              'directeur',
              'heeft',
              'de',
              'vergadering',
              'gepland',
            ],
            translation: 'The director planned the meeting.',
          },
          {
            shuffledWords: [
              'verhuisd',
              'naar',
              'zijn',
              'kantoor',
              'een',
              'wij',
              'nieuw',
            ],
            correctOrder: [
              'Wij',
              'zijn',
              'naar',
              'een',
              'nieuw',
              'kantoor',
              'verhuisd',
            ],
            translation: 'We moved to a new office.',
          },
        ],
      },
    },
    {
      id: 'a2-perf-mc-4',
      topicId: 'perfectum-regular',
      type: 'multiple-choice',
      difficulty: 'open',
      instruction:
        'Select the sentence that correctly uses the perfect tense in a workplace context.',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'How do you say "We discussed the proposal" in Dutch?',
            options: [
              'Wij hebben het voorstel besproken.',
              'Wij zijn het voorstel bespreekt.',
              'Wij hebben het voorstel gebespreekt.',
              'Wij hebben het voorstel gebesproken.',
            ],
            correctIndex: 0,
            explanation:
              "Bespreken is an irregular verb with the prefix be- (no ge-). The past participle is 'besproken'. The auxiliary is 'hebben' because it is transitive.",
          },
          {
            question:
              'Your colleague asks what you did. How do you say "I updated the website"?',
            options: [
              'Ik heb de website geüpdatet.',
              'Ik heb de website bijgewerkt.',
              'Ik ben de website gewerkt.',
              'Ik heb de website gewerken.',
            ],
            correctIndex: 1,
            explanation:
              "The Dutch equivalent is 'bijwerken' (separable verb). In the perfect tense: bijgewerkt (ge- between prefix and stem). 'Hebben' is used because it is transitive.",
          },
        ],
      },
    },
  ],
};
