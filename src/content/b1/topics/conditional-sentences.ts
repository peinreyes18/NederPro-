import { Topic } from '@/content/types';

export const conditionalSentences: Topic = {
  id: 'conditional-sentences',
  levelId: 'b1',
  order: 7,
  title: 'Conditional Sentences',
  subtitle: 'Voorwaardelijke zinnen',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'conditional-1',
      title: 'Real Conditions: als + present tense',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Real (open) conditions use "als" (if/when) + present tense in the condition clause, and present or future tense in the main clause.',
          explanation:
            'A conditional sentence has two parts: the condition clause (introduced by "als") and the result clause. When the condition is realistic or possible, use the present tense in both clauses. This is called the "open" or "real" conditional — you are not ruling out that the condition will be met.',
        },
        {
          type: 'grammar-table',
          title: 'Real conditional: structure',
          headers: ['Clause order', 'Structure', 'Example'],
          rows: [
            ['Condition first', 'Als + [subord. word order], [main clause]', 'Als ik tijd heb, bel ik je.'],
            ['Result first', '[Main clause] als + [subord. word order]', 'Ik bel je als ik tijd heb.'],
          ],
          caption: 'In the "als" clause, the verb goes to the end (subordinate word order). In the main clause, normal word order applies.',
        },
        {
          type: 'examples',
          title: 'Real conditionals in context',
          examples: [
            { dutch: 'Als het morgen regent, blijven we binnen.', english: 'If it rains tomorrow, we will stay inside.', highlight: 'Als het morgen regent' },
            { dutch: 'Als je vragen hebt, kun je me altijd bellen.', english: 'If you have questions, you can always call me.', highlight: 'Als je vragen hebt' },
            { dutch: 'Ik stuur je het rapport als het klaar is.', english: 'I will send you the report when it is ready.', highlight: 'als het klaar is' },
            { dutch: 'Als de vergadering eerder eindigt, gaan we lunchen.', english: 'If the meeting ends earlier, we will go for lunch.', highlight: 'Als de vergadering eerder eindigt' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Als vs. wanneer vs. indien',
          content: '"Als" is the most common word for "if/when" in everyday Dutch.\n"Wanneer" = when (referring to time, not a condition) — but in practice, "als" and "wanneer" are often interchangeable in real conditions.\n"Indien" = if (formal/written Dutch only). You will see it in contracts, official letters, and legal texts: "Indien u vragen heeft, kunt u contact opnemen."',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Als ik zal tijd hebben, bel ik je.', correct: 'Als ik tijd heb, bel ik je.', explanation: 'In Dutch, the "als" clause uses present tense, NOT "zal + infinitive" (future). Unlike English "if I will have time", Dutch uses present tense for future conditions.' },
            { incorrect: 'Als ik tijd heb, dan ik bel je.', correct: 'Als ik tijd heb, bel ik je.', explanation: 'When the condition comes first, the main clause uses inverted word order (verb before subject): "bel ik" not "ik bel". "Dan" is optional and does not change this.' },
          ],
        },
      ],
    },
    {
      id: 'conditional-2',
      title: 'Unreal Conditions: zou(den) + infinitive',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Unreal (hypothetical) conditions use "als" + past tense in the condition clause, and "zou(den) + infinitive" in the result clause.',
          explanation:
            'When the condition is hypothetical, unlikely, or contrary to reality, use the imperfect tense (simple past) in the "als" clause and "zou" (I/he/she/it) or "zouden" (we/you/they) + infinitive in the result clause. This corresponds to English "If I were... I would..."',
        },
        {
          type: 'grammar-table',
          title: 'Unreal conditional: zou(den) + infinitive',
          headers: ['Person', 'zou/zouden', 'Example'],
          rows: [
            ['ik', 'zou', 'Ik zou gaan als ik kon.'],
            ['jij/u', 'zou', 'Jij zou het begrijpen als je luisterde.'],
            ['hij/zij/het', 'zou', 'Hij zou komen als hij tijd had.'],
            ['wij', 'zouden', 'Wij zouden helpen als we konden.'],
            ['jullie', 'zouden', 'Jullie zouden slagen als jullie studeerden.'],
            ['zij', 'zouden', 'Ze zouden het doen als ze de kans hadden.'],
          ],
          caption: '"Zou" is the conditional form of "zullen". It signals hypothetical or uncertain events.',
        },
        {
          type: 'examples',
          title: 'Unreal conditionals in context',
          examples: [
            { dutch: 'Als ik meer tijd had, zou ik een cursus volgen.', english: 'If I had more time, I would take a course.', highlight: 'zou ik een cursus volgen' },
            { dutch: 'Als ik directeur was, zou ik de regels veranderen.', english: 'If I were director, I would change the rules.', highlight: 'zou ik de regels veranderen' },
            { dutch: 'Ze zou vaker sporten als ze een sportschool in de buurt had.', english: 'She would exercise more often if she had a gym nearby.', highlight: 'zou vaker sporten' },
            { dutch: 'Als ik jou was, zou ik dat aanbod accepteren.', english: 'If I were you, I would accept that offer.', highlight: 'Als ik jou was' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: 'zou as softener (politeness)',
          content: '"Zou" is also used without a condition to make requests and suggestions more polite:\n\n• Zou je me kunnen helpen? (Could you help me?)\n• Ik zou het graag doen. (I would gladly do it.)\n• Zou u dit formulier willen invullen? (Would you fill in this form?)\n\nThis is very common in professional Dutch communication.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Als ik meer tijd zou hebben, zou ik een cursus volgen.', correct: 'Als ik meer tijd had, zou ik een cursus volgen.', explanation: 'In the "als" clause, use the simple past tense — NOT "zou + infinitive". Only the result clause uses "zou".' },
            { incorrect: 'Als ik jou ben, accepteer ik het.', correct: 'Als ik jou was, zou ik het accepteren.', explanation: 'For hypothetical conditions, use past tense "was" in the als-clause and "zou + infinitive" in the result clause.' },
          ],
        },
      ],
    },
    {
      id: 'conditional-3',
      title: 'Past Unreal Conditions: had + past participle',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Conditions contrary to past reality use "als" + pluperfect in the condition, and "zou(den) + hebben/zijn + past participle" in the result.',
          explanation:
            'To talk about an unreal condition in the past — something that did NOT happen — use the pluperfect tense (had/hadden + past participle) in the "als" clause, and "zou(den) + hebben/zijn + past participle" in the result clause. This corresponds to English "If I had... I would have..."',
        },
        {
          type: 'grammar-table',
          title: 'Past unreal conditional',
          headers: ['Part', 'Structure', 'Example'],
          rows: [
            ['Condition (als)', 'als + had/hadden + past participle', 'Als ik harder had gestudeerd…'],
            ['Result', 'zou(den) + hebben/zijn + past participle', '…zou ik geslaagd zijn.'],
            ['Full sentence', 'als + pluperfect, zou + perf. inf.', 'Als ik harder had gestudeerd, zou ik geslaagd zijn.'],
          ],
          caption: 'This is the most complex conditional. Practise it with common verbs first.',
        },
        {
          type: 'examples',
          title: 'Past unreal conditionals in context',
          examples: [
            { dutch: 'Als ik op tijd was gekomen, had ik de vergadering niet gemist.', english: 'If I had arrived on time, I would not have missed the meeting.', highlight: 'Als ik op tijd was gekomen' },
            { dutch: 'Als hij harder had gewerkt, zou hij zijn deadline hebben gehaald.', english: 'If he had worked harder, he would have met his deadline.', highlight: 'zou hij zijn deadline hebben gehaald' },
            { dutch: 'Ze zou de baan hebben gekregen als ze meer ervaring had gehad.', english: 'She would have gotten the job if she had had more experience.', highlight: 'zou de baan hebben gekregen' },
          ],
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'Common mix-up: present vs. past unreal',
          content: 'Learners often mix up present and past unreal conditionals:\n\nPresent unreal: Als ik tijd HAD, zou ik gaan. (I don\'t have time now)\nPast unreal: Als ik tijd had GEHAD, zou ik zijn gegaan. (I didn\'t have time then)\n\nThe key is the tense in the "als" clause: simple past = present unreal; pluperfect = past unreal.',
        },
      ],
    },
    {
      id: 'conditional-4',
      title: 'Conditional Language in the Workplace',
      sections: [
        {
          type: 'workplace-context',
          scenario: 'Negotiations, proposals, and polite requests',
          examples: [
            { dutch: 'Als u akkoord gaat, sturen we de factuur morgen.', english: 'If you agree, we will send the invoice tomorrow.' },
            { dutch: 'Zou u dit formulier willen invullen?', english: 'Would you be willing to fill in this form?' },
            { dutch: 'Als we meer personeel hadden, zouden we sneller kunnen leveren.', english: 'If we had more staff, we would be able to deliver faster.' },
            { dutch: 'Ik zou graag meer verantwoordelijkheid willen nemen.', english: 'I would like to take on more responsibility.' },
            { dutch: 'Als de klant eerder had gereageerd, hadden we het probleem kunnen oplossen.', english: 'If the client had responded earlier, we would have been able to solve the problem.' },
          ],
          note: 'Conditional language is essential for professional Dutch: negotiations, proposals, formal requests, and discussing hypothetical scenarios all rely on these structures.',
        },
        {
          type: 'grammar-table',
          title: 'Summary: three types of conditionals',
          headers: ['Type', 'Als-clause', 'Result clause', 'Meaning'],
          rows: [
            ['Real (open)', 'als + present tense', 'present / future', 'Possible: Als het regent, blijf ik thuis.'],
            ['Unreal (present)', 'als + simple past', 'zou(den) + inf.', 'Hypothetical: Als ik tijd had, zou ik gaan.'],
            ['Unreal (past)', 'als + pluperfect', 'zou(den) + hebben/zijn + pp', 'Contrary to past: Als ik had geweten, zou ik zijn gegaan.'],
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'conditional-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct verb form to complete the conditional sentence.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Als het morgen mooi weer ___, gaan we naar het strand.',
            options: ['zal zijn', 'is', 'was', 'zou zijn'],
            correctIndex: 1,
            explanation: 'Real/open condition about the future: use present tense in the "als" clause, not "zal zijn".',
          },
          {
            question: 'Als ik meer geld ___, zou ik een groter huis kopen.',
            options: ['heb', 'had', 'zou hebben', 'zal hebben'],
            correctIndex: 1,
            explanation: 'Unreal/hypothetical condition: use simple past "had" in the "als" clause.',
          },
          {
            question: 'Als ik directeur was, ___ ik de vergaderingen inkorten.',
            options: ['zal', 'zou', 'zouden', 'heb'],
            correctIndex: 1,
            explanation: 'Unreal condition (singular subject "ik"): use "zou" in the result clause.',
          },
          {
            question: 'Als hij harder had gewerkt, ___ hij de deadline gehaald.',
            options: ['heeft', 'zou hebben', 'had', 'zal hebben'],
            correctIndex: 1,
            explanation: 'Past unreal condition: result clause = "zou hebben + past participle".',
          },
          {
            question: '___ u dit document willen ondertekenen?',
            options: ['Wil', 'Zou', 'Zal', 'Kan'],
            correctIndex: 1,
            explanation: '"Zou" makes the request polite and professional. "Zou u willen...?" = Would you like to...?',
          },
        ],
      },
    },
    {
      id: 'conditional-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the conditional sentence with the correct form of the verb in brackets.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Als je hulp nodig',
            after: ', kun je me altijd bellen. [hebben]',
            correctAnswer: 'hebt',
            hint: 'Real condition → present tense in als-clause.',
            acceptableAnswers: ['hebt', 'heeft'],
          },
          {
            before: 'Als ik jou',
            after: ', zou ik dat aanbod accepteren. [zijn]',
            correctAnswer: 'was',
            hint: 'Unreal/hypothetical → simple past in als-clause.',
            acceptableAnswers: ['was'],
          },
          {
            before: 'We zouden meer kunnen produceren als we meer machines',
            after: '. [hebben]',
            correctAnswer: 'hadden',
            hint: 'Unreal present → simple past "hadden" in als-clause.',
            acceptableAnswers: ['hadden'],
          },
          {
            before: 'Als ze eerder was vertrokken,',
            after: 'ze de trein gehaald. [zou + hebben]',
            correctAnswer: 'zou ze hebben',
            hint: 'Past unreal → zou + hebben + past participle in result clause.',
            acceptableAnswers: ['zou ze hebben', 'had ze'],
          },
          {
            before: 'Als het document klaar is,',
            after: 'ik het meteen opsturen. [zullen]',
            correctAnswer: 'zal',
            hint: 'Real condition → future "zal" is possible in the result clause.',
            acceptableAnswers: ['zal', 'ga'],
          },
        ],
      },
    },
    {
      id: 'conditional-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence contains an error in the conditional structure. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Als ik zal meer tijd hebben, doe ik mee.',
            correctedSentence: 'Als ik meer tijd heb, doe ik mee.',
            errorExplanation: 'In Dutch, use present tense in the "als" clause for real conditions — not "zal + infinitive".',
          },
          {
            incorrectSentence: 'Als ik zou meer geld hebben, koop ik een nieuwe auto.',
            correctedSentence: 'Als ik meer geld had, zou ik een nieuwe auto kopen.',
            errorExplanation: 'For unreal conditions: als-clause uses simple past ("had"), result clause uses "zou + infinitive".',
          },
          {
            incorrectSentence: 'Als ik tijd had, ik zou gaan.',
            correctedSentence: 'Als ik tijd had, zou ik gaan.',
            errorExplanation: 'When the als-clause comes first, the main clause uses inverted word order: "zou ik gaan", not "ik zou gaan".',
          },
          {
            incorrectSentence: 'Als hij harder had gewerkt, zou hij de deadline gehad hebben gehaald.',
            correctedSentence: 'Als hij harder had gewerkt, zou hij de deadline hebben gehaald.',
            errorExplanation: 'Past unreal result: zou + hebben + past participle. "Gehad" is not needed here.',
          },
          {
            incorrectSentence: 'Zou u dit willen invullen, als het u belieft?',
            correctedSentence: 'Zou u dit willen invullen?',
            errorExplanation: '"Zou u willen...?" is already a polite request. "Als het u belieft" (please) is redundant in this construction.',
          },
        ],
      },
    },
    {
      id: 'conditional-ex-4',
      type: 'multiple-choice',
      instruction: 'Which type of conditional is used in each sentence?',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Als het regent, neem ik een paraplu mee."',
            options: [
              'Real / open conditional (possible situation)',
              'Unreal present conditional (hypothetical)',
              'Unreal past conditional (contrary to past reality)',
            ],
            correctIndex: 0,
            explanation: 'Present tense in both clauses = real/open conditional. The rain is a realistic possibility.',
          },
          {
            question: '"Als ik directeur was, zou ik meer thuiswerken toestaan."',
            options: [
              'Real / open conditional (possible situation)',
              'Unreal present conditional (hypothetical)',
              'Unreal past conditional (contrary to past reality)',
            ],
            correctIndex: 1,
            explanation: 'Simple past "was" in als-clause + "zou" in result = unreal present conditional. The speaker is not director.',
          },
          {
            question: '"Als ze haar sollicitatiebrief beter had geschreven, zou ze de baan hebben gekregen."',
            options: [
              'Real / open conditional (possible situation)',
              'Unreal present conditional (hypothetical)',
              'Unreal past conditional (contrary to past reality)',
            ],
            correctIndex: 2,
            explanation: 'Pluperfect "had geschreven" + "zou hebben gekregen" = past unreal. She did NOT write a good letter.',
          },
        ],
      },
    },
    {
      id: 'conditional-ex-5',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'If you have any questions, you can always send me an email.',
            correctDutch: 'Als je vragen hebt, kun je me altijd een e-mail sturen.',
            acceptableAnswers: ['Als je vragen hebt, kun je me altijd een e-mail sturen.', 'Als u vragen heeft, kunt u me altijd een e-mail sturen.'],
          },
          {
            english: 'If I were the manager, I would organise fewer meetings.',
            correctDutch: 'Als ik de manager was, zou ik minder vergaderingen organiseren.',
            acceptableAnswers: ['Als ik de manager was, zou ik minder vergaderingen organiseren.', 'Als ik manager was, zou ik minder vergaderingen organiseren.'],
          },
          {
            english: 'Would you like to take a look at the proposal?',
            correctDutch: 'Zou u het voorstel willen bekijken?',
            acceptableAnswers: ['Zou u het voorstel willen bekijken?', 'Zou je het voorstel willen bekijken?'],
          },
          {
            english: 'If they had left earlier, they would have caught the train.',
            correctDutch: 'Als ze eerder waren vertrokken, zouden ze de trein hebben gehaald.',
            acceptableAnswers: ['Als ze eerder waren vertrokken, zouden ze de trein hebben gehaald.', 'Als ze eerder vertrokken waren, zouden ze de trein hebben gehaald.'],
          },
        ],
      },
    },
    {
      id: 'conditional-ex-6',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a conditional sentence.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['Als', 'meer', 'tijd', 'had', 'ik', 'zou', 'sporten', 'ik', 'vaker'],
            correctOrder: ['Als', 'ik', 'meer', 'tijd', 'had', 'zou', 'ik', 'vaker', 'sporten'],
            translation: 'If I had more time, I would exercise more often.',
          },
          {
            shuffledWords: ['de', 'Als', 'vergadering', 'eindigt', 'gaan', 'we', 'eerder', 'koffiedrinken'],
            correctOrder: ['Als', 'de', 'vergadering', 'eerder', 'eindigt', 'gaan', 'we', 'koffiedrinken'],
            translation: 'If the meeting ends earlier, we will go for coffee.',
          },
          {
            shuffledWords: ['Zou', 'u', 'dit', 'willen', 'formulier', 'invullen'],
            correctOrder: ['Zou', 'u', 'dit', 'formulier', 'willen', 'invullen'],
            translation: 'Would you be willing to fill in this form?',
          },
        ],
      },
    },
    {
      id: 'conditional-ex-7',
      type: 'writing-prompt',
      instruction: 'Write 3–4 sentences about your work or learning situation using all three types of conditionals.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf zinnen over jouw werk- of leerervaring. Gebruik de drie soorten voorwaardelijke zinnen.',
        context: 'Think about your current situation, a hypothetical change, and something that could have been different in the past.',
        guidelines: [
          'Write one real conditional (als + present tense)',
          'Write one unreal present conditional (als + simple past, zou + infinitive)',
          'Write one past unreal conditional (als + pluperfect, zou + hebben/zijn + pp)',
        ],
        sampleResponse: 'Als ik genoeg vocabulaire ken, kan ik een sollicitatiegesprek in het Nederlands voeren. Als ik meer tijd had, zou ik elke dag twee uur Nederlands studeren. Als ik eerder was begonnen met leren, zou ik nu al vloeiend zijn geweest.',
      },
    },
  ],
};
