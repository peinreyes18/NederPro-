import { Topic } from '@/content/types';

export const infinitiveConstructions: Topic = {
  id: 'infinitive-constructions',
  levelId: 'b1',
  order: 4,
  title: 'Infinitive Constructions',
  subtitle: 'Infinitiefconstructies',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'infinitive-1',
      title: 'om … te + infinitive',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use "om … te + infinitive" to express purpose (in order to) or as a complement to certain adjectives, nouns, and verbs.',
          explanation:
            'The "om … te + infinitive" construction is one of the most common infinitive structures in Dutch. It corresponds to English "to" or "in order to" before a verb. The infinitive goes to the end of the clause, and "te" is placed directly before it.',
        },
        {
          type: 'grammar-table',
          title: 'om … te + infinitive: core uses',
          headers: ['Use', 'Example', 'Translation'],
          rows: [
            ['Purpose (in order to)', 'Ik leer Nederlands om te werken in Nederland.', 'I am learning Dutch in order to work in the Netherlands.'],
            ['After adjective', 'Het is moeilijk om Nederlands te leren.', 'It is difficult to learn Dutch.'],
            ['After noun', 'Ik heb geen tijd om te sporten.', 'I have no time to exercise.'],
            ['After verb', 'Hij probeert om vroeg te komen.', 'He tries to come early.'],
          ],
          caption: 'The "om" can sometimes be omitted (especially after certain verbs), but it is always safe to include it.',
        },
        {
          type: 'examples',
          title: 'om … te in workplace context',
          examples: [
            { dutch: 'Ze heeft een cursus gevolgd om haar Nederlands te verbeteren.', english: 'She took a course to improve her Dutch.', highlight: 'om haar Nederlands te verbeteren' },
            { dutch: 'Het is belangrijk om op tijd te zijn.', english: 'It is important to be on time.', highlight: 'om op tijd te zijn' },
            { dutch: 'Hij heeft geen gelegenheid gehad om het rapport te lezen.', english: 'He has not had the opportunity to read the report.', highlight: 'om het rapport te lezen' },
            { dutch: 'We vergaderen wekelijks om de voortgang te bespreken.', english: 'We meet weekly to discuss progress.', highlight: 'om de voortgang te bespreken' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Position of te with separable verbs',
          content: 'With separable verbs, "te" is inserted between the prefix and the verb stem:\n\n• opbellen → om op te bellen (to call)\n• voorbereiden → om voor te bereiden (to prepare)\n• meedoen → om mee te doen (to participate)\n\nNever write: "om te opbellen" — this is incorrect.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik leer Nederlands voor werken in Nederland.', correct: 'Ik leer Nederlands om te werken in Nederland.', explanation: 'Use "om … te + infinitive" to express purpose, not "voor + infinitive".' },
            { incorrect: 'Het is moeilijk te leren Nederlands.', correct: 'Het is moeilijk om Nederlands te leren.', explanation: '"Te" goes directly before the infinitive at the end of the clause. The object comes between "om" and "te + infinitive".' },
            { incorrect: 'om te opbellen', correct: 'om op te bellen', explanation: 'With separable verbs, insert "te" between prefix and verb stem.' },
          ],
        },
      ],
    },
    {
      id: 'infinitive-2',
      title: 'te + infinitive after verbs of perception and causation',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Certain verbs are followed directly by te + infinitive (without om).',
          explanation:
            'Some Dutch verbs take a "te + infinitive" complement without "om". The most important are:\n• blijken (to turn out)\n• lijken (to seem)\n• schijnen (to appear)\n• heten (to be said to)\n• proberen (to try) — can take om or not\n• dreigen (to threaten)\n• beloven (to promise)\n• weigeren (to refuse)',
        },
        {
          type: 'grammar-table',
          title: 'Verbs followed by te + infinitive (without om)',
          headers: ['Verb', 'Example', 'Translation'],
          rows: [
            ['blijken', 'Het blijkt te werken.', 'It turns out to work.'],
            ['lijken', 'Ze lijkt te slapen.', 'She seems to be sleeping.'],
            ['schijnen', 'Hij schijnt ziek te zijn.', 'He appears to be ill.'],
            ['dreigen', 'Het dreigt mis te gaan.', 'It threatens to go wrong.'],
            ['weigeren', 'Ze weigert te betalen.', 'She refuses to pay.'],
            ['beloven', 'Hij belooft te komen.', 'He promises to come.'],
            ['proberen', 'Ik probeer te slapen.', 'I try to sleep.'],
          ],
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'De nieuwe aanpak blijkt goed te werken.', english: 'The new approach turns out to work well.', highlight: 'blijkt goed te werken' },
            { dutch: 'De vergadering lijkt te duren.', english: 'The meeting seems to be dragging on.', highlight: 'lijkt te duren' },
            { dutch: 'Hij weigert de regels te volgen.', english: 'He refuses to follow the rules.', highlight: 'weigert de regels te volgen' },
            { dutch: 'Ze belooft het morgen af te maken.', english: 'She promises to finish it tomorrow.', highlight: 'belooft het morgen af te maken' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Het blijkt om te werken.', correct: 'Het blijkt te werken.', explanation: '"Blijken" takes "te + infinitive" directly, without "om".' },
            { incorrect: 'Ze schijnt om ziek te zijn.', correct: 'Ze schijnt ziek te zijn.', explanation: '"Schijnen" takes "te + infinitive" directly, without "om".' },
          ],
        },
      ],
    },
    {
      id: 'infinitive-3',
      title: 'Infinitive without te: laten, zien, horen, voelen',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Verbs of perception (zien, horen, voelen) and "laten" (to let/have) take a bare infinitive (without te).',
          explanation:
            'After laten (to let, to have something done), zien (to see), horen (to hear), and voelen (to feel), the dependent verb appears as a bare infinitive — no "te" is added. This is similar to English constructions like "I saw her run" or "I let him go."',
        },
        {
          type: 'grammar-table',
          title: 'Verbs taking bare infinitive',
          headers: ['Verb', 'Example', 'Translation'],
          rows: [
            ['laten', 'Ik laat de auto repareren.', 'I am having the car repaired.'],
            ['laten', 'Ze laat hem gaan.', 'She lets him go.'],
            ['zien', 'Ik zie hem werken.', 'I see him working.'],
            ['horen', 'Ze hoort de kinderen spelen.', 'She hears the children playing.'],
            ['voelen', 'Ik voel de wind waaien.', 'I feel the wind blowing.'],
          ],
          caption: 'In the perfect tense, these verbs take a double infinitive construction.',
        },
        {
          type: 'grammar-rule',
          rule: 'In the perfect tense, verbs of perception and laten use a double infinitive instead of a past participle.',
          explanation:
            'When the main verb (zien, horen, laten, etc.) is put in the perfect tense, both verbs appear as infinitives at the end of the clause. This is called the "dubbele infinitief" (double infinitive). This is a very important and common construction in Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Double infinitive in perfect tense',
          headers: ['Present', 'Perfect (double infinitive)', 'Translation'],
          rows: [
            ['Ik zie hem werken.', 'Ik heb hem zien werken.', 'I have seen him work.'],
            ['Ze hoort hen zingen.', 'Ze heeft hen horen zingen.', 'She has heard them sing.'],
            ['Ik laat de auto repareren.', 'Ik heb de auto laten repareren.', 'I have had the car repaired.'],
            ['Hij laat haar gaan.', 'Hij heeft haar laten gaan.', 'He has let her go.'],
          ],
          caption: 'Note: The past participle (gezien, gehoord, gelaten) is NOT used. Instead, both verbs appear as infinitives.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik heb hem gezien werken.', correct: 'Ik heb hem zien werken.', explanation: 'Use the double infinitive in perfect tense, not "gezien". The perception verb stays as infinitive.' },
            { incorrect: 'Ik laat te de auto repareren.', correct: 'Ik laat de auto repareren.', explanation: '"Laten" takes a bare infinitive — no "te".' },
            { incorrect: 'Ik heb de auto gelaten repareren.', correct: 'Ik heb de auto laten repareren.', explanation: 'In the perfect tense with laten + infinitive, use the double infinitive. "Gelaten" (past participle) is incorrect here.' },
          ],
        },
      ],
    },
    {
      id: 'infinitive-4',
      title: 'Infinitive Constructions in Formal Communication',
      sections: [
        {
          type: 'workplace-context',
          scenario: 'Formal emails and instructions',
          examples: [
            { dutch: 'Ik schrijf u om u te informeren over de veranderingen.', english: 'I am writing to inform you about the changes.' },
            { dutch: 'Het is verplicht om een veiligheidscursus te volgen.', english: 'It is compulsory to take a safety course.' },
            { dutch: 'We laten de installatie uitvoeren door een specialist.', english: 'We are having the installation carried out by a specialist.' },
            { dutch: 'U lijkt de e-mail niet te hebben ontvangen.', english: 'You appear not to have received the email.' },
          ],
          note: '"Om … te + infinitive" is very common in professional correspondence and formal instructions in Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Summary of infinitive constructions',
          headers: ['Construction', 'Use', 'Example'],
          rows: [
            ['om … te + inf.', 'Purpose; complement to adjectives/nouns', 'om te werken, om op te bellen'],
            ['te + inf. (no om)', 'After lijken, blijken, schijnen, weigeren, etc.', 'lijkt te werken, weigert te betalen'],
            ['bare inf. (no te)', 'After laten, zien, horen, voelen', 'laat repareren, ziet werken'],
            ['double inf. (perfect)', 'After laten/perception verbs in perfect tense', 'heb laten repareren, heb zien werken'],
          ],
        },
        {
          type: 'note',
          variant: 'warning',
          title: 'Common confusion: te or no te?',
          content: 'The most common mistakes are:\n1. Adding "te" after laten/zien/horen → wrong\n2. Omitting "te" after lijken/blijken/schijnen → wrong\n3. Adding "om" where only "te" is needed → wrong\n\nLearn each group of verbs separately and practise them in sentences.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'infinitive-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct infinitive construction.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Het is heel moeilijk ___ Nederlands te leren.',
            options: ['om', 'voor', 'te', '(nothing)'],
            correctIndex: 0,
            explanation: 'After "moeilijk" (adjective), use "om … te + infinitive". "Om" introduces the infinitive clause.',
          },
          {
            question: 'Ik heb haar ___ zingen.',
            options: ['te horen', 'horen', 'gehoord', 'om te horen'],
            correctIndex: 1,
            explanation: '"Horen" in perfect tense takes a double infinitive: "heb … horen zingen".',
          },
          {
            question: 'Ze weigert ___ betalen.',
            options: ['om te', 'te', 'om', 'voor te'],
            correctIndex: 1,
            explanation: '"Weigeren" takes "te + infinitive" directly — without "om".',
          },
          {
            question: 'Ik laat de fiets ___.',
            options: ['te repareren', 'repareren', 'om te repareren', 'gerepareerd'],
            correctIndex: 1,
            explanation: '"Laten" takes a bare infinitive — no "te".',
          },
          {
            question: 'De nieuwe methode blijkt goed ___.',
            options: ['te werken', 'om te werken', 'werken', 'gewerkt'],
            correctIndex: 0,
            explanation: '"Blijken" takes "te + infinitive" without "om".',
          },
        ],
      },
    },
    {
      id: 'infinitive-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete the sentence with the correct infinitive construction.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Ze studeert hard',
            after: 'voor haar examen.',
            correctAnswer: 'om te slagen',
            hint: 'Purpose = om … te + infinitive. "Slagen" = to pass.',
            acceptableAnswers: ['om te slagen'],
          },
          {
            before: 'Hij lijkt',
            after: 'tijdens de vergadering.',
            correctAnswer: 'te slapen',
            hint: '"Lijken" takes te + infinitive without om.',
            acceptableAnswers: ['te slapen'],
          },
          {
            before: 'We horen hen',
            after: 'in de tuin.',
            correctAnswer: 'zingen',
            hint: '"Horen" takes bare infinitive — no te.',
            acceptableAnswers: ['zingen'],
          },
          {
            before: 'Het is belangrijk',
            after: '.',
            correctAnswer: 'om eerlijk te zijn',
            hint: 'After adjective: om … te + infinitive.',
            acceptableAnswers: ['om eerlijk te zijn'],
          },
          {
            before: 'Ze heeft de manager',
            after: 'dat ze ziek is.',
            correctAnswer: 'laten weten',
            hint: 'Perfect tense with laten: heeft + laten + bare infinitive (double infinitive).',
            acceptableAnswers: ['laten weten'],
          },
        ],
      },
    },
    {
      id: 'infinitive-ex-3',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik laat te de auto wassen.',
            correctedSentence: 'Ik laat de auto wassen.',
            errorExplanation: '"Laten" takes a bare infinitive — no "te". Remove "te".',
          },
          {
            incorrectSentence: 'Ze schijnt om ziek te zijn.',
            correctedSentence: 'Ze schijnt ziek te zijn.',
            errorExplanation: '"Schijnen" takes "te + infinitive" directly without "om".',
          },
          {
            incorrectSentence: 'Ik heb hem gezien werken.',
            correctedSentence: 'Ik heb hem zien werken.',
            errorExplanation: 'With perception verbs in perfect tense, use double infinitive: "zien werken", not "gezien + infinitive".',
          },
          {
            incorrectSentence: 'Ze proberen om te ophouden met roken.',
            correctedSentence: 'Ze proberen op te houden met roken.',
            errorExplanation: '"Ophouden" is separable. Insert "te" between prefix and stem: "op te houden".',
          },
          {
            incorrectSentence: 'Het is moeilijk Nederlands te leren goed.',
            correctedSentence: 'Het is moeilijk om goed Nederlands te leren.',
            errorExplanation: '"Om" is needed after "moeilijk". The adverb "goed" comes before the object "Nederlands".',
          },
        ],
      },
    },
    {
      id: 'infinitive-ex-4',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'I am learning Dutch in order to find a job.',
            correctDutch: 'Ik leer Nederlands om een baan te vinden.',
            acceptableAnswers: ['Ik leer Nederlands om een baan te vinden.', 'Ik studeer Nederlands om een baan te vinden.'],
          },
          {
            english: 'She seems to be tired.',
            correctDutch: 'Ze lijkt moe te zijn.',
            acceptableAnswers: ['Ze lijkt moe te zijn.', 'Zij lijkt moe te zijn.'],
          },
          {
            english: 'He refuses to sign the contract.',
            correctDutch: 'Hij weigert het contract te tekenen.',
            acceptableAnswers: ['Hij weigert het contract te tekenen.'],
          },
          {
            english: 'We have had the office cleaned.',
            correctDutch: 'We hebben het kantoor laten schoonmaken.',
            acceptableAnswers: ['We hebben het kantoor laten schoonmaken.', 'Wij hebben het kantoor laten schoonmaken.'],
          },
          {
            english: 'It is important to call in time.',
            correctDutch: 'Het is belangrijk om op tijd op te bellen.',
            acceptableAnswers: ['Het is belangrijk om op tijd op te bellen.'],
          },
        ],
      },
    },
    {
      id: 'infinitive-ex-5',
      type: 'writing-prompt',
      instruction: 'Write 4–5 sentences about your goals or plans for learning Dutch. Use at least two different infinitive constructions.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf over jouw doelen of plannen voor het leren van Nederlands. Gebruik minstens twee verschillende infinitiefconstructies.',
        context: 'Think about why you are learning Dutch and what you want to achieve. Use infinitive constructions to express your goals.',
        guidelines: [
          'Use at least two different infinitive constructions (om … te, te without om, or bare infinitive)',
          'Correct "te" placement with separable verbs if applicable',
          'Clear expression of goals or plans',
        ],
        sampleResponse: 'Ik leer Nederlands om beter te communiceren op het werk. Het lijkt soms moeilijk te zijn, maar ik probeer elke dag te oefenen. Mijn doel is om het staatsexamen NT2 te halen. Ik heb besloten een taalcursus te volgen. Mijn docent laat ons veel oefeningen maken.',
      },
    },
  ],
};
