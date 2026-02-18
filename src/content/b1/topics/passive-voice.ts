import { Topic } from '@/content/types';

export const passiveVoice: Topic = {
  id: 'passive-voice',
  levelId: 'b1',
  order: 2,
  title: 'Passive Voice',
  subtitle: 'Lijdende vorm',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'passive-1',
      title: 'Forming the Passive: worden + past participle',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The Dutch passive voice is formed with worden (present/past) + past participle.',
          explanation:
            'In the active voice, the subject performs the action. In the passive voice, the subject undergoes the action. Dutch uses worden as the auxiliary for the passive in present and simple past tenses. The past participle goes to the end of the clause.',
        },
        {
          type: 'grammar-table',
          title: 'Passive with worden (present tense)',
          headers: ['Person', 'Active', 'Passive'],
          rows: [
            ['ik', 'Ik schrijf de brief.', 'De brief wordt geschreven.'],
            ['jij/u', 'Jij leest het rapport.', 'Het rapport wordt gelezen.'],
            ['hij/zij', 'Hij maakt de taart.', 'De taart wordt gemaakt.'],
            ['wij', 'Wij bouwen het huis.', 'Het huis wordt gebouwd.'],
            ['jullie', 'Jullie sturen de e-mail.', 'De e-mail wordt gestuurd.'],
            ['zij', 'Zij verkopen de producten.', 'De producten worden verkocht.'],
          ],
          caption: 'Note that worden conjugates in the normal present tense pattern.',
        },
        {
          type: 'grammar-table',
          title: 'Passive with werd/werden (simple past)',
          headers: ['Sentence', 'Translation'],
          rows: [
            ['De brief werd geschreven.', 'The letter was written.'],
            ['De producten werden verkocht.', 'The products were sold.'],
            ['Het vergadering werd gehouden.', 'The meeting was held.'],
            ['De rapporten werden ingediend.', 'The reports were submitted.'],
          ],
          caption: 'Use werd (singular) or werden (plural) for the simple past passive.',
        },
        {
          type: 'examples',
          title: 'Active vs. passive in context',
          examples: [
            { dutch: 'De manager stuurt de e-mail. → De e-mail wordt gestuurd.', english: 'The manager sends the email. → The email is sent.', highlight: 'wordt gestuurd' },
            { dutch: 'Ze bouwen een nieuw kantoor. → Een nieuw kantoor wordt gebouwd.', english: 'They are building a new office. → A new office is being built.', highlight: 'wordt gebouwd' },
            { dutch: 'De directeur nam de beslissing. → De beslissing werd genomen.', english: 'The director made the decision. → The decision was made.', highlight: 'werd genomen' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De brief is geschreven door mij. (passive present)', correct: 'De brief wordt geschreven door mij.', explanation: 'Use worden (not zijn) for the present passive. "Is geschreven" is the perfect tense of the passive.' },
            { incorrect: 'De producten worden verkochten.', correct: 'De producten worden verkocht.', explanation: 'The past participle does not add extra endings in the passive.' },
            { incorrect: 'Hij werd gefired.', correct: 'Hij werd ontslagen.', explanation: 'Use Dutch verbs. "Onfired" does not exist; the correct Dutch past participle is "ontslagen".' },
          ],
        },
      ],
    },
    {
      id: 'passive-2',
      title: 'The Perfect Passive: zijn + past participle',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'The perfect passive uses zijn + past participle.',
          explanation:
            'When you want to express the passive in the perfect tense (describing a completed action with present relevance), use zijn as the auxiliary, NOT worden. This is one of the most common mistakes Dutch learners make.',
        },
        {
          type: 'grammar-table',
          title: 'Perfect passive vs. simple past passive',
          headers: ['Tense', 'Structure', 'Example', 'Translation'],
          rows: [
            ['Present passive', 'wordt/worden + pp', 'Het rapport wordt geschreven.', 'The report is being written.'],
            ['Past passive', 'werd/werden + pp', 'Het rapport werd geschreven.', 'The report was written.'],
            ['Perfect passive', 'is/zijn + pp', 'Het rapport is geschreven.', 'The report has been written.'],
            ['Pluperfect passive', 'was/waren + pp', 'Het rapport was geschreven.', 'The report had been written.'],
          ],
        },
        {
          type: 'examples',
          title: 'Perfect passive in workplace context',
          examples: [
            { dutch: 'De offerte is verstuurd.', english: 'The quotation has been sent.', highlight: 'is verstuurd' },
            { dutch: 'De vergadering is verzet naar maandag.', english: 'The meeting has been moved to Monday.', highlight: 'is verzet' },
            { dutch: 'Alle klachten zijn behandeld.', english: 'All complaints have been handled.', highlight: 'zijn behandeld' },
            { dutch: 'De nieuwe medewerkers zijn verwelkomd.', english: 'The new employees have been welcomed.', highlight: 'zijn verwelkomd' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'State vs. process',
          content: 'Sometimes "is + past participle" describes a STATE (result), not a passive process. "De deur is gesloten" can mean the door is closed (state) OR the door has been closed (passive perfect). Context usually makes it clear.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'De brief is worden geschreven.', correct: 'De brief is geschreven.', explanation: 'In the perfect passive, use alleen zijn + past participle. Do not add worden.' },
            { incorrect: 'Het project wordt klaar.', correct: 'Het project is afgerond.', explanation: '"Worden" must be followed by a past participle in the passive, not an adjective.' },
          ],
        },
      ],
    },
    {
      id: 'passive-3',
      title: 'Agent and Impersonal Passive',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use "door" to express the agent (who performs the action) in a passive sentence.',
          explanation:
            'The agent — the person or thing that performs the action — is introduced with "door" (by). The agent is optional and is often omitted when it is unknown, obvious, or unimportant.',
        },
        {
          type: 'examples',
          title: 'Passive with door (agent)',
          examples: [
            { dutch: 'De brief is geschreven door de directeur.', english: 'The letter was written by the director.', highlight: 'door de directeur' },
            { dutch: 'Het rapport wordt beoordeeld door het team.', english: 'The report is being assessed by the team.', highlight: 'door het team' },
            { dutch: 'De wet werd aangenomen door de Tweede Kamer.', english: 'The law was passed by the House of Representatives.', highlight: 'door de Tweede Kamer' },
          ],
        },
        {
          type: 'grammar-rule',
          rule: 'The impersonal passive uses "er" as a placeholder subject.',
          explanation:
            'When there is no specific object that becomes the subject of a passive sentence (especially with intransitive verbs), Dutch uses an impersonal passive with "er" as a dummy subject. This is very common in Dutch and is used to describe general activities.',
        },
        {
          type: 'examples',
          title: 'Impersonal passive with er',
          examples: [
            { dutch: 'Er wordt hard gewerkt.', english: 'There is hard work being done. / People work hard.', highlight: 'Er wordt' },
            { dutch: 'Er werd veel gelachen.', english: 'There was a lot of laughter. / People laughed a lot.', highlight: 'Er werd' },
            { dutch: 'Er wordt niet gerookt in dit gebouw.', english: 'Smoking is not permitted in this building.', highlight: 'Er wordt niet gerookt' },
            { dutch: 'Er zijn gisteren veel vragen gesteld.', english: 'Many questions were asked yesterday.', highlight: 'Er zijn' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Meeting and policy language',
          examples: [
            { dutch: 'Er wordt verwacht dat u op tijd aanwezig bent.', english: 'It is expected that you are present on time.' },
            { dutch: 'Er wordt momenteel aan een oplossing gewerkt.', english: 'A solution is currently being worked on.' },
            { dutch: 'Er wordt regelmatig vergaderd over dit onderwerp.', english: 'Meetings are held regularly on this subject.' },
          ],
          note: 'The impersonal passive is very common in official Dutch communications, signs, and workplace instructions.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Er zijn gewerkt veel mensen.', correct: 'Er is veel gewerkt.', explanation: 'With an impersonal passive of an intransitive verb, use singular "is/wordt". The impersonal "er" takes singular agreement.' },
            { incorrect: 'De taak wordt gedaan van mij.', correct: 'De taak wordt door mij gedaan.', explanation: 'Use "door" not "van" to introduce the agent in a passive sentence.' },
          ],
        },
      ],
    },
    {
      id: 'passive-4',
      title: 'When to Use the Passive',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Use the passive when the action is more important than the performer, or when the performer is unknown or irrelevant.',
          explanation:
            'Dutch uses the passive less frequently than English. Often, Dutch speakers prefer an active construction with "men" (one/people) or "ze" (they) instead of a passive. However, the passive is very common in formal writing, news reports, and official communications.',
        },
        {
          type: 'grammar-table',
          title: 'Passive vs. active alternatives',
          headers: ['Passive', 'Active alternative', 'Notes'],
          rows: [
            ['Er wordt veel koffie gedronken.', 'Men drinkt veel koffie.', '"Men" = one/people (formal)'],
            ['De regels worden gevolgd.', 'Ze volgen de regels.', '"Ze" = they (informal)'],
            ['Het pakket wordt bezorgd.', 'De koerier bezorgt het pakket.', 'Specifying the agent = active preferred'],
            ['Het rapport is goedgekeurd.', 'De manager heeft het rapport goedgekeurd.', 'When agent is known, active is more natural'],
          ],
          caption: 'In everyday speech, the active voice with "ze" or "men" is often preferred over the passive.',
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Passive in formal Dutch',
          content: 'The passive voice is very common in:\n• News reports and journalism\n• Official government documents\n• Academic writing\n• Workplace memos and formal emails\n• Signs and regulations\n\nExample: "Roken is verboden." (Smoking is prohibited.) / "Bezoekers worden verzocht zich te melden bij de receptie." (Visitors are requested to report to reception.)',
        },
        {
          type: 'workplace-context',
          scenario: 'Reading a workplace memo',
          examples: [
            { dutch: 'Medewerkers worden verzocht hun werkplek schoon te houden.', english: 'Employees are requested to keep their workspace clean.' },
            { dutch: 'De deadline is vastgesteld op 15 maart.', english: 'The deadline has been set for March 15th.' },
            { dutch: 'Overtredingen worden gemeld aan de leidinggevende.', english: 'Violations will be reported to the supervisor.' },
          ],
          note: 'Being able to read and understand passive constructions in Dutch workplace texts is essential for professional integration.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'passive-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct passive form.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De brief ___ elke dag geschreven door de secretaresse.',
            options: ['is', 'wordt', 'werd', 'zijn'],
            correctIndex: 1,
            explanation: 'For a repeated present-tense action in the passive, use "wordt" (present tense of worden).',
          },
          {
            question: 'Gisteren ___ de vergadering gehouden in de grote zaal.',
            options: ['wordt', 'is', 'werd', 'worden'],
            correctIndex: 2,
            explanation: '"Gisteren" signals simple past. Use "werd" (singular past of worden) for the passive.',
          },
          {
            question: 'De offerte ___ al verstuurd.',
            options: ['wordt', 'werd', 'is', 'worden'],
            correctIndex: 2,
            explanation: '"Al" (already) combined with a completed action uses the perfect passive: zijn + past participle.',
          },
          {
            question: 'Alle rapporten ___ gisteren ingediend.',
            options: ['werden', 'zijn', 'worden', 'was'],
            correctIndex: 0,
            explanation: '"Alle rapporten" is plural. "Gisteren" signals past. Use "werden" (plural past of worden).',
          },
          {
            question: '___ hier gerookt?',
            options: ['Is', 'Wordt', 'Werden', 'Zijn'],
            correctIndex: 1,
            explanation: 'The impersonal passive in the present uses "Wordt er…?" The question is about a current rule/habit.',
          },
        ],
      },
    },
    {
      id: 'passive-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Transform the active sentence into a passive sentence. Fill in the passive verb form.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De chef maakt het rapport. → Het rapport',
            after: 'door de chef.',
            correctAnswer: 'wordt gemaakt',
            hint: 'Present passive: wordt + past participle',
            acceptableAnswers: ['wordt gemaakt'],
          },
          {
            before: 'Ze repareerden de computer. → De computer',
            after: '.',
            correctAnswer: 'werd gerepareerd',
            hint: 'Simple past passive: werd + past participle',
            acceptableAnswers: ['werd gerepareerd'],
          },
          {
            before: 'De directeur heeft het contract getekend. → Het contract',
            after: 'door de directeur.',
            correctAnswer: 'is getekend',
            hint: 'Perfect passive: is + past participle',
            acceptableAnswers: ['is getekend'],
          },
          {
            before: 'Ze verkopen de producten in heel Nederland. → De producten',
            after: 'in heel Nederland.',
            correctAnswer: 'worden verkocht',
            hint: 'Present plural passive: worden + past participle',
            acceptableAnswers: ['worden verkocht'],
          },
          {
            before: 'Men had de regels al veranderd. → De regels',
            after: '.',
            correctAnswer: 'waren al veranderd',
            hint: 'Pluperfect passive: waren + past participle',
            acceptableAnswers: ['waren al veranderd'],
          },
        ],
      },
    },
    {
      id: 'passive-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence contains an error. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De brief is worden verstuurd door de manager.',
            correctedSentence: 'De brief is verstuurd door de manager.',
            errorExplanation: 'The perfect passive uses only zijn + past participle. Do not add "worden".',
          },
          {
            incorrectSentence: 'De producten worden verkochten gisteren.',
            correctedSentence: 'De producten werden gisteren verkocht.',
            errorExplanation: '"Gisteren" requires past tense "werden". The past participle "verkocht" never adds extra endings.',
          },
          {
            incorrectSentence: 'Er zijn veel gevraagd vragen.',
            correctedSentence: 'Er zijn veel vragen gesteld.',
            errorExplanation: '"Vragen stellen" (to ask questions) is the standard collocation. The past participle comes after the noun.',
          },
          {
            incorrectSentence: 'Het huis wordt gebouwd van de aannemer.',
            correctedSentence: 'Het huis wordt gebouwd door de aannemer.',
            errorExplanation: 'Use "door" (by) to introduce the agent in a passive sentence, not "van".',
          },
          {
            incorrectSentence: 'Gisteren wordt er hard gewerkt.',
            correctedSentence: 'Gisteren werd er hard gewerkt.',
            errorExplanation: '"Gisteren" requires past tense. Use "werd" for the impersonal passive in the simple past.',
          },
        ],
      },
    },
    {
      id: 'passive-ex-4',
      type: 'multiple-choice',
      instruction: 'Choose the sentence that correctly uses the passive voice.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which sentence correctly expresses: "The project was finished last week"?',
            options: [
              'Het project is afgerond vorige week.',
              'Het project werd vorige week afgerond.',
              'Het project wordt vorige week afgerond.',
              'Het project was worden afgerond vorige week.',
            ],
            correctIndex: 1,
            explanation: '"Vorige week" (last week) requires simple past. The simple past passive uses "werd" for singular.',
          },
          {
            question: 'Which sentence correctly uses the impersonal passive?',
            options: [
              'Men worden hard gewerkt.',
              'Er wordt hard gewerkt.',
              'Ze wordt hard gewerkt.',
              'Er worden hard gewerkt.',
            ],
            correctIndex: 1,
            explanation: 'The impersonal passive uses "er" as dummy subject and singular "wordt". "Men" is not used with passive.',
          },
          {
            question: 'The report has already been checked. How do you express this?',
            options: [
              'Het rapport wordt al gecontroleerd.',
              'Het rapport werd al gecontroleerd.',
              'Het rapport is al gecontroleerd.',
              'Het rapport zijn al gecontroleerd.',
            ],
            correctIndex: 2,
            explanation: '"Al" (already) with a recently completed action uses the perfect passive: is + past participle.',
          },
        ],
      },
    },
    {
      id: 'passive-ex-5',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch using the passive voice.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The meeting is held every Monday.',
            correctDutch: 'De vergadering wordt elke maandag gehouden.',
            acceptableAnswers: ['De vergadering wordt elke maandag gehouden.'],
          },
          {
            english: 'The decision was made by the director.',
            correctDutch: 'De beslissing werd genomen door de directeur.',
            acceptableAnswers: ['De beslissing werd genomen door de directeur.', 'De beslissing werd door de directeur genomen.'],
          },
          {
            english: 'The new employee has been welcomed.',
            correctDutch: 'De nieuwe medewerker is verwelkomd.',
            acceptableAnswers: ['De nieuwe medewerker is verwelkomd.'],
          },
          {
            english: 'Dutch is spoken in the Netherlands and Belgium.',
            correctDutch: 'Nederlands wordt gesproken in Nederland en België.',
            acceptableAnswers: ['Nederlands wordt gesproken in Nederland en België.', 'In Nederland en België wordt Nederlands gesproken.'],
          },
        ],
      },
    },
    {
      id: 'passive-ex-6',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a passive sentence.',
      difficulty: 'open',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['De', 'auto', 'werd', 'de', 'garage', 'gerepareerd', 'door', 'monteur', 'van'],
            correctOrder: ['De', 'auto', 'werd', 'gerepareerd', 'door', 'de', 'monteur', 'van', 'de', 'garage'],
            translation: 'The car was repaired by the garage mechanic.',
          },
          {
            shuffledWords: ['Er', 'verwacht', 'dat', 'op', 'wordt', 'tijd', 'aanwezig', 'u', 'bent'],
            correctOrder: ['Er', 'wordt', 'verwacht', 'dat', 'u', 'op', 'tijd', 'aanwezig', 'bent'],
            translation: 'It is expected that you are present on time.',
          },
          {
            shuffledWords: ['Alle', 'klachten', 'behandeld', 'zijn', 'door', 'afdeling', 'klantenservice', 'de'],
            correctOrder: ['Alle', 'klachten', 'zijn', 'behandeld', 'door', 'de', 'afdeling', 'klantenservice'],
            translation: 'All complaints have been handled by the customer service department.',
          },
        ],
      },
    },
    {
      id: 'passive-ex-7',
      type: 'writing-prompt',
      instruction: 'Write 3–4 sentences describing what happened at a workplace event. Use at least two passive constructions.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Beschrijf wat er tijdens de teamvergadering is gebeurd. Gebruik de lijdende vorm.',
        context: 'Think about a team meeting, product launch, or office event. Describe what was done, decided, or announced.',
        guidelines: [
          'Use at least 2 passive constructions (worden/werd/is + past participle)',
          'Use correct agreement between subject and auxiliary',
          'Write in a logical order',
        ],
        sampleResponse: 'De vergadering werd om 9 uur geopend door de manager. Alle resultaten van het kwartaal werden besproken. Er zijn nieuwe doelen gesteld voor het komende kwartaal. De presentatie is daarna verstuurd naar alle medewerkers.',
      },
    },
  ],
};
