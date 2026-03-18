import { Topic } from '@/content/types';

export const indirectSpeechAdvanced: Topic = {
  id: 'indirect-speech-advanced',
  levelId: 'b2',
  order: 9,
  title: 'Advanced Indirect Speech',
  subtitle: 'Geavanceerde indirecte rede',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'isa-1',
      title: 'Tense Shifts in Indirect Speech',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When reporting speech or thought, Dutch shifts tenses back and adjusts pronouns and time expressions to fit the new speaker perspective.',
          explanation:
            'In indirect speech (indirecte rede), the tense of the original utterance is typically maintained in informal and journalistic Dutch, but in formal and literary Dutch a backshift occurs — present becomes imperfectum, perfect becomes past perfect (plusquamperfectum). Understanding both conventions is essential at B2 level.',
        },
        {
          type: 'grammar-table',
          title: 'Tense shifts: direct → indirect speech',
          headers: ['Direct speech tense', 'Informal indirect', 'Formal/literary indirect'],
          rows: [
            ['Present: "Ik werk hier."', '"dat hij hier werkt."', '"dat hij daar werkte."'],
            ['Perfect: "Ik heb het gedaan."', '"dat hij het heeft gedaan."', '"dat hij het had gedaan."'],
            ['Future: "Ik zal komen."', '"dat hij zal komen."', '"dat hij zou komen."'],
            ['Modal present: "Ik moet gaan."', '"dat hij moet gaan."', '"dat hij moest gaan."'],
            ['Imperfectum: "Ik werkte er."', '"dat hij er werkte."', '"dat hij er gewerkt had."'],
          ],
          caption: 'In everyday spoken and journalistic Dutch, the original tense is usually kept. In formal prose and literary writing, a backshift is preferred.',
        },
        {
          type: 'examples',
          title: 'Direct vs. indirect',
          examples: [
            {
              dutch: 'Direct: "Ik ga morgen naar Amsterdam."',
              english: 'Direct: "I am going to Amsterdam tomorrow."',
              highlight: 'ga morgen',
            },
            {
              dutch: 'Indirect (informal): Hij zei dat hij de volgende dag naar Amsterdam ging.',
              english: 'Indirect (informal): He said that he was going to Amsterdam the next day.',
              highlight: 'ging / de volgende dag',
            },
            {
              dutch: 'Indirect (formal): Hij deelde mee dat hij de volgende dag naar Amsterdam zou gaan.',
              english: 'Indirect (formal): He announced that he would go to Amsterdam the next day.',
              highlight: 'zou gaan',
            },
          ],
        },
        {
          type: 'note',
          content: 'Time expressions also shift: "morgen" → "de volgende dag", "gisteren" → "de vorige dag / de dag ervoor", "nu" → "toen", "hier" → "daar".',
          variant: 'tip',
        },
        {
          type: 'grammar-table',
          title: 'Shifting of time and place expressions',
          headers: ['Direct speech', 'Indirect speech'],
          rows: [
            ['nu', 'toen / op dat moment'],
            ['morgen', 'de volgende dag / de dag erna'],
            ['gisteren', 'de dag ervoor / de vorige dag'],
            ['vandaag', 'die dag'],
            ['hier', 'daar'],
            ['dit', 'dat'],
            ['deze week', 'die week'],
            ['vorige week', 'de week ervoor'],
          ],
          caption: 'These shifts are obligatory in formal registers; in informal Dutch they are optional.',
        },
      ],
    },
    {
      id: 'isa-2',
      title: 'Reporting Verbs and Their Constructions',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Different reporting verbs require different grammatical constructions: dat-clause, te-infinitive, or direct object.',
          explanation:
            'Reporting verbs (zeggen, beweren, mededelen, vragen, verzoeken, bevelen, suggereren, etc.) each carry specific grammatical requirements. Choosing the right reporting verb and construction determines formality and precision.',
        },
        {
          type: 'grammar-table',
          title: 'Common reporting verbs and their constructions',
          headers: ['Verb', 'Meaning', 'Construction', 'Example'],
          rows: [
            ['zeggen', 'to say', 'dat + subclause', 'Hij zei dat hij moe was.'],
            ['beweren', 'to claim', 'dat + subclause', 'Ze beweert dat ze onschuldig is.'],
            ['mededelen', 'to announce (formal)', 'dat + subclause', 'De minister deelde mee dat het budget was verhoogd.'],
            ['verklaren', 'to declare/state', 'dat + subclause', 'Hij verklaarde dat de vergadering was afgelopen.'],
            ['vragen', 'to ask', 'of + subclause / om te + inf', 'Ze vroeg of hij kon komen. / Ze vroeg hem te komen.'],
            ['verzoeken', 'to request (formal)', 'om te + infinitive', 'Ik verzoek u het formulier in te vullen.'],
            ['bevelen', 'to order', 'te + infinitive', 'De rechter beval hem te zwijgen.'],
            ['voorstellen', 'to suggest', 'om te + inf / dat', 'Hij stelde voor om te pauzeren.'],
            ['toegeven', 'to admit', 'dat + subclause', 'Ze gaf toe dat ze een fout had gemaakt.'],
            ['ontkennen', 'to deny', 'dat + subclause / te + inf', 'Hij ontkende dat hij het wist.'],
          ],
          caption: '"Mededelen" and "verklaren" are formal equivalents of "zeggen" used in official and journalistic contexts.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ze vroeg dat hij zou komen.',
              correct: 'Ze vroeg of hij kon komen. / Ze vroeg hem te komen.',
              explanation: '"Vragen" meaning "to ask someone to do something" takes "om te + infinitive" or "of + subclause" (for yes/no questions), not "dat".',
            },
            {
              incorrect: 'Hij verzoekte dat u het invult.',
              correct: 'Hij verzocht u het in te vullen.',
              explanation: '"Verzoeken" takes an object + "te + infinitive", not a "dat"-clause.',
            },
          ],
        },
      ],
    },
    {
      id: 'isa-3',
      title: 'Free Indirect Speech (Erlebte Rede)',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Free indirect speech blends the narrator\'s voice with the character\'s thoughts or words without an explicit reporting verb or subordinating conjunction.',
          explanation:
            'In literary and journalistic Dutch, free indirect speech (vrije indirecte rede) allows the narrator to slip into a character\'s perspective. The tense shifts as in indirect speech, but there is no "hij zei dat…" frame. Pronouns switch to third person but the emotional register, questions, and exclamations of the original voice remain. This technique creates intimacy and is common in advanced written Dutch.',
        },
        {
          type: 'examples',
          title: 'Comparing the three types',
          examples: [
            {
              dutch: 'Direct: "Ik begrijp dit niet," dacht ze. "Waarom luistert niemand naar mij?"',
              english: 'Direct: "I don\'t understand this," she thought. "Why does nobody listen to me?"',
              highlight: '"…"',
            },
            {
              dutch: 'Indirect: Ze dacht dat ze het niet begreep en vroeg zich af waarom niemand naar haar luisterde.',
              english: 'Indirect: She thought that she didn\'t understand it and wondered why nobody listened to her.',
              highlight: 'dat ze / vroeg zich af',
            },
            {
              dutch: 'Free indirect: Ze begreep het niet. Waarom luisterde niemand naar haar?',
              english: 'Free indirect: She didn\'t understand it. Why did nobody listen to her?',
              highlight: 'begreep / luisterde',
            },
          ],
        },
        {
          type: 'note',
          content: 'Free indirect speech is recognisable by: (1) third person pronouns, (2) imperfectum or conditional tense, (3) absence of a reporting verb, (4) retention of questions, exclamations, and emotional language.',
          variant: 'tip',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Ze dacht: ze begrijpt het niet.',
              correct: 'Ze dacht dat ze het niet begreep. / Ze begreep het niet. (free indirect)',
              explanation: 'Mixing a direct speech frame ("ze dacht:") with third-person indirect speech is incoherent. Either use a reporting verb + "dat" or drop the frame entirely for free indirect speech.',
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-isa-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct indirect speech transformation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Direct: "Ik ben morgen niet op kantoor." → Indirect (formal): Ze meldde dat ze ...',
            options: [
              'de volgende dag niet op kantoor zou zijn.',
              'morgen niet op kantoor is.',
              'de volgende dag niet op kantoor is.',
              'morgen niet op kantoor was.',
            ],
            correctIndex: 0,
            explanation: 'Formal indirect speech: present → zou + infinitive (conditional); "morgen" → "de volgende dag".',
          },
          {
            question: 'Which reporting verb requires "om te + infinitive"?',
            options: ['verzoeken', 'zeggen', 'beweren', 'verklaren'],
            correctIndex: 0,
            explanation: '"Verzoeken" (to request) takes "om te + infinitive": "Ik verzoek u het formulier in te vullen."',
          },
          {
            question: 'Direct: "Heb jij het rapport gelezen?" → Indirect: Hij vroeg ...',
            options: [
              'of zij het rapport had gelezen.',
              'dat zij het rapport had gelezen.',
              'of zij het rapport leest.',
              'wat zij het rapport las.',
            ],
            correctIndex: 0,
            explanation: 'Yes/no questions become "of"-clauses in indirect speech. Tense shifts: perfect → past perfect (had gelezen).',
          },
        ],
      },
    },
    {
      id: 'b2-isa-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the indirect speech sentence with the correct form of the verb in brackets.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Direct: "Ik werk al tien jaar hier." → Indirect: Hij zei dat hij al tien jaar daar',
            after: '.',
            correctAnswer: 'werkte',
            hint: 'Present tense shifts to imperfectum in formal indirect speech.',
          },
          {
            before: 'Direct: "We hebben het besluit genomen." → Indirect: Ze verklaarden dat ze het besluit',
            after: '.',
            correctAnswer: 'hadden genomen',
            hint: 'Perfect tense shifts to past perfect (plusquamperfectum) in formal indirect speech.',
          },
          {
            before: 'Direct: "Ik zal je bellen." → Indirect: Hij beloofde dat hij haar',
            after: '.',
            correctAnswer: 'zou bellen',
            hint: 'Future tense (zullen) shifts to conditional (zou + inf) in indirect speech.',
          },
          {
            before: 'Ze vroeg',
            after: 'hij de vergadering had bijgewoond.',
            correctAnswer: 'of',
            hint: 'Yes/no questions in indirect speech use "of".',
          },
        ],
      },
    },
    {
      id: 'b2-isa-err-1',
      type: 'error-correction',
      instruction: 'Correct the error in the indirect speech sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ze zei dat ze morgen niet kan komen.',
            correctedSentence: 'Ze zei dat ze de volgende dag niet kon komen.',
            errorExplanation: 'In indirect speech, "morgen" shifts to "de volgende dag" and the present tense shifts to imperfectum (kon).',
          },
          {
            incorrectSentence: 'Hij vroeg dat ik het document zou doorsturen.',
            correctedSentence: 'Hij vroeg of ik het document zou doorsturen. / Hij vroeg me het document door te sturen.',
            errorExplanation: '"Vragen" (to ask/request) uses "of + subclause" for questions or "om te + infinitive" for requests — not "dat".',
          },
          {
            incorrectSentence: 'De directeur verzocht dat alle medewerkers aanwezig zijn.',
            correctedSentence: 'De directeur verzocht alle medewerkers aanwezig te zijn.',
            errorExplanation: '"Verzoeken" takes an object + "te + infinitive", not a "dat"-clause.',
          },
          {
            incorrectSentence: 'Ze beweert te niet weten waar hij is.',
            correctedSentence: 'Ze beweert niet te weten waar hij is.',
            errorExplanation: 'Negation with "te + infinitive": "niet" precedes "te": "niet te weten".',
          },
        ],
      },
    },
    {
      id: 'b2-isa-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using formal indirect speech.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The minister announced that the new regulations would come into force the following month.',
            correctDutch: 'De minister deelde mee dat de nieuwe regels de volgende maand van kracht zouden worden.',
            acceptableAnswers: ['De minister verklaarde dat de nieuwe regelgeving de volgende maand in zou gaan.'],
            keyVocabulary: [
              { dutch: 'van kracht worden', english: 'to come into force' },
              { dutch: 'de volgende maand', english: 'the following month' },
            ],
          },
          {
            english: 'She admitted that she had made a mistake and requested that the deadline be extended.',
            correctDutch: 'Ze gaf toe dat ze een fout had gemaakt en verzocht om de deadline te verlengen.',
            acceptableAnswers: ['Ze erkende dat ze een fout had gemaakt en vroeg of de deadline verlengd kon worden.'],
            keyVocabulary: [
              { dutch: 'toegeven', english: 'to admit' },
              { dutch: 'verlengen', english: 'to extend' },
            ],
          },
          {
            english: 'He denied having known about the problem and claimed that the decision had been made without his knowledge.',
            correctDutch: 'Hij ontkende van het probleem geweten te hebben en beweerde dat het besluit zonder zijn medeweten was genomen.',
            acceptableAnswers: ['Hij ontkende dat hij van het probleem wist en beweerde dat de beslissing buiten hem om was genomen.'],
            keyVocabulary: [
              { dutch: 'medeweten', english: 'knowledge / awareness' },
              { dutch: 'buiten iemand om', english: 'without someone\'s involvement' },
            ],
          },
        ],
      },
    },
    {
      id: 'b2-isa-rc-1',
      type: 'reading-comprehension',
      instruction: 'Read the text and answer the questions about indirect speech.',
      difficulty: 'guided',
      content: {
        type: 'reading-comprehension',
        passage: 'Tijdens de persconferentie verklaarde de woordvoerder dat de organisatie zich volledig achter de beslissing schaarde. Ze voegde eraan toe dat er geen reden was tot bezorgdheid en dat alle betrokkenen tijdig op de hoogte zouden worden gesteld. Een journalist vroeg of de interne rapporten openbaar zouden worden gemaakt. De woordvoerder antwoordde dat dit op dit moment niet aan de orde was, maar dat de mogelijkheid niet was uitgesloten. Later schreef een columnist: Ze zou er niets over kwijt willen. Transparantie? Dat was er niet bij.',
        questions: [
          {
            question: 'In de zin "dat de organisatie zich volledig achter de beslissing schaarde" — welke tijdsverschuiving heeft plaatsgevonden?',
            options: [
              'Tegenwoordige tijd → onvoltooid verleden tijd (schaarde)',
              'Voltooid tegenwoordige tijd → plusquamperfectum',
              'Toekomende tijd → zou + infinitief',
              'Er is geen tijdsverschuiving.',
            ],
            correctAnswer: 'Tegenwoordige tijd → onvoltooid verleden tijd (schaarde)',
            explanation: '"Schaart zich" (present) shifts to "schaarde zich" (imperfectum) in formal indirect speech.',
          },
          {
            question: 'De journalist vroeg "of de interne rapporten openbaar zouden worden gemaakt". Wat was de oorspronkelijke directe vraag?',
            options: [
              '"Worden de interne rapporten openbaar gemaakt?"',
              '"Zijn de interne rapporten openbaar gemaakt?"',
              '"Maken jullie de interne rapporten openbaar?"',
              '"Zullen de interne rapporten openbaar worden gemaakt?"',
            ],
            correctAnswer: '"Worden de interne rapporten openbaar gemaakt?"',
            explanation: 'The indirect "of … zouden worden gemaakt" corresponds to a direct present/future question: "Worden de rapporten openbaar gemaakt?"',
          },
          {
            question: 'De laatste twee zinnen ("Ze zou er niets over kwijt willen. Transparantie? Dat was er niet bij.") zijn een voorbeeld van:',
            options: [
              'Vrije indirecte rede (free indirect speech)',
              'Directe rede',
              'Gewone indirecte rede met "dat"',
              'Een citaat',
            ],
            correctAnswer: 'Vrije indirecte rede (free indirect speech)',
            explanation: 'There is no reporting verb or "dat"-clause. The columnist\'s critical voice merges with the description, using third person + imperfectum/conditional — hallmarks of free indirect speech.',
          },
        ],
      },
    },
    {
      id: 'b2-isa-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form an indirect speech sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['dat', 'De', 'mee', 'zou', 'de', 'deelde', 'directeur', 'vergadering', 'worden', 'uitgesteld'],
            correctOrder: ['De', 'directeur', 'deelde', 'mee', 'dat', 'de', 'vergadering', 'zou', 'worden', 'uitgesteld'],
            translation: 'The director announced that the meeting would be postponed.',
          },
          {
            shuffledWords: ['had', 'Ze', 'ze', 'gaf', 'gemaakt', 'toe', 'fout', 'een', 'dat'],
            correctOrder: ['Ze', 'gaf', 'toe', 'dat', 'ze', 'een', 'fout', 'had', 'gemaakt'],
            translation: 'She admitted that she had made a mistake.',
          },
          {
            shuffledWords: ['aanwezig', 'verzocht', 'te', 'zijn', 'medewerkers', 'alle', 'Hij'],
            correctOrder: ['Hij', 'verzocht', 'alle', 'medewerkers', 'aanwezig', 'te', 'zijn'],
            translation: 'He requested all employees to be present.',
          },
        ],
      },
    },
    {
      id: 'b2-isa-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short news report (5–6 sentences) describing what was said at a press conference or meeting, using formal indirect speech with at least three different reporting verbs.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een kort nieuwsbericht over wat er tijdens een persconferentie of vergadering is gezegd.',
        context: 'Use formal indirect speech with tense backshift. Include at least three different reporting verbs (e.g. verklaren, mededelen, beweren, ontkennen, toevoegen, vragen). Shift time expressions where appropriate.',
        guidelines: [
          'Use at least three different reporting verbs',
          'Apply tense backshift (tegenwoordige tijd → imperfectum, perfectum → plusquamperfectum)',
          'Shift time expressions (morgen → de volgende dag, etc.)',
          'Include at least one "of"-clause for an indirect question',
        ],
        sampleResponse: 'Tijdens de persconferentie verklaarde de minister-president dat de nieuwe wet de volgende maand in werking zou treden. Hij voegde eraan toe dat alle burgers tijdig geïnformeerd zouden worden. Een journalist vroeg of de oppositie was geconsulteerd. De woordvoerder bevestigde dat dit het geval was geweest en ontkende dat er sprake was geweest van geheime besluitvorming.',
      },
    },
  ],
};
