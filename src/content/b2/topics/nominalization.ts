import { Topic } from '@/content/types';

export const nominalization: Topic = {
  id: 'nominalization',
  levelId: 'b2',
  order: 5,
  title: 'Nominalization',
  subtitle: 'Nominalisering',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'nom-1',
      title: 'Converting Verbs into Nouns',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Nominalization is the process of turning a verb or adjective into a noun. In formal Dutch, nominalizations replace verb-based clauses to create a denser, more abstract style.',
          explanation:
            'Instead of "Wij hebben het systeem geïmplementeerd en dit heeft geleid tot verbeteringen" (We implemented the system and this led to improvements), formal writing compresses: "De implementatie van het systeem heeft geleid tot verbeteringen." The verb "implementeren" becomes the noun "de implementatie". This reduces the number of clauses, increases information density, and is a defining feature of academic, legal, and administrative Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Key nominalization suffixes (verbs → nouns)',
          headers: ['Suffix', 'Verb base', 'Nominalization', 'Translation'],
          rows: [
            ['-ing', 'verbeteren', 'de verbetering', 'improvement'],
            ['-ing', 'uitvoeren', 'de uitvoering', 'execution'],
            ['-ing', 'opleiding → opleiden', 'de opleiding', 'training'],
            ['-atie / -tie', 'implementeren', 'de implementatie', 'implementation'],
            ['-atie / -tie', 'communiceren', 'de communicatie', 'communication'],
            ['-sie', 'concluderen', 'de conclusie', 'conclusion'],
            ['-sis / -se', 'analyseren', 'de analyse', 'analysis'],
            ['-ment', 'ontwikkelen (→ development)', 'de ontwikkeling', 'development'],
            ['het + inf.', 'lopen', 'het lopen', 'walking / the act of walking'],
          ],
          caption: 'Nouns in -ing are always de-words. "Het + infinitive" nominalizes the action itself (gerund-like).',
        },
        {
          type: 'examples',
          title: 'Clause → nominalized phrase',
          examples: [
            { dutch: 'Doordat wij analyseren → door de analyse', english: 'By analysing → through the analysis', highlight: 'de analyse' },
            { dutch: 'Nadat men heeft besloten → na het besluit', english: 'After deciding → after the decision', highlight: 'het besluit' },
            { dutch: 'Omdat het systeem faalt → vanwege het falen van het systeem', english: 'Because the system fails → due to the failure of the system', highlight: 'het falen' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Na dat we hebben geanalyseerd, publiceerden we de resultaten.', correct: 'Na de analyse publiceerden we de resultaten.', explanation: 'Replace the subordinate clause "nadat we hebben geanalyseerd" with the nominalized phrase "na de analyse" for a more formal, compact style.' },
            { incorrect: 'De verbeteren van de situatie is noodzakelijk.', correct: 'De verbetering van de situatie is noodzakelijk.', explanation: 'Use the noun form (de verbetering), not the infinitive (verbeteren), as the head of a noun phrase.' },
          ],
        },
      ],
    },
    {
      id: 'nom-2',
      title: 'Converting Adjectives into Nouns',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Adjectives become abstract nouns through suffixes: -heid, -heid, -iteit, -ie, -te, and -nis. These noun forms are essential for academic and professional writing.',
          explanation:
            'Saying "het feit dat het systeem flexibel is" (the fact that the system is flexible) can be replaced by "de flexibiliteit van het systeem" (the flexibility of the system). Learning these adjective → noun conversions expands your formal vocabulary dramatically. Most adjective nominalizations are de-words.',
        },
        {
          type: 'grammar-table',
          title: 'Adjective → noun conversions',
          headers: ['Suffix', 'Adjective', 'Noun', 'Translation'],
          rows: [
            ['-heid', 'eerlijk', 'de eerlijkheid', 'honesty'],
            ['-heid', 'beschikbaar', 'de beschikbaarheid', 'availability'],
            ['-heid', 'verantwoordelijk', 'de verantwoordelijkheid', 'responsibility'],
            ['-iteit', 'flexibel', 'de flexibiliteit', 'flexibility'],
            ['-iteit', 'productief', 'de productiviteit', 'productivity'],
            ['-iteit', 'kwalitatief', 'de kwaliteit', 'quality'],
            ['-ie', 'transparant', 'de transparantie', 'transparency'],
            ['-te', 'warm', 'de warmte', 'warmth'],
            ['-te', 'breed', 'de breedte', 'width'],
            ['-nis', 'kennen', 'de kennis', 'knowledge'],
          ],
        },
        {
          type: 'note',
          content: 'Some adjective nominalizations are irregular: "goed" → "het goed / het goede / de goedheid" (depending on meaning). Check a dictionary for unexpected forms.',
          variant: 'info',
        },
      ],
    },
    {
      id: 'nom-3',
      title: 'Using Nominalizations in Context',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Nominalizations function as subjects, objects, or objects of prepositions in a clause. They connect to the rest of the sentence via van, voor, aan, over, and other prepositions.',
          explanation:
            'Once you have a nominalized noun phrase, you need to link it to other elements using prepositions. "We verbeteren de kwaliteit" becomes "de verbetering van de kwaliteit". "We beslissen over het budget" becomes "de beslissing over het budget". The choice of preposition follows the verb\'s original prepositional frame: "beslissen over" → "de beslissing over".',
        },
        {
          type: 'grammar-table',
          title: 'Verb → nominalization: preposition carried over',
          headers: ['Verb + preposition', 'Nominalization', 'Example phrase'],
          rows: [
            ['beslissen over', 'de beslissing over', 'de beslissing over het budget'],
            ['bijdragen aan', 'de bijdrage aan', 'de bijdrage aan het project'],
            ['reageren op', 'de reactie op', 'de reactie op de klacht'],
            ['deelnemen aan', 'de deelname aan', 'de deelname aan het programma'],
            ['verantwoordelijk zijn voor', 'de verantwoordelijkheid voor', 'de verantwoordelijkheid voor de uitvoering'],
            ['investeren in', 'de investering in', 'de investering in duurzaamheid'],
          ],
          caption: 'The preposition that followed the verb is retained in the nominalized noun phrase.',
        },
        {
          type: 'workplace-context',
          scenario: 'Writing a formal memo or policy document',
          examples: [
            { dutch: 'De implementatie van het nieuwe beleid vereist zorgvuldige voorbereiding.', english: 'The implementation of the new policy requires careful preparation.' },
            { dutch: 'Wij verzoeken uw medewerking aan de uitvoering van dit traject.', english: 'We request your cooperation in the execution of this process.' },
            { dutch: 'De verantwoordelijkheid voor de kwaliteitsborging ligt bij de afdeling.', english: 'Responsibility for quality assurance lies with the department.' },
          ],
          note: 'In formal documents, several nominalizations may appear in a single sentence. Avoid over-nominalizing conversational text.',
        },
      ],
    },
    {
      id: 'nom-4',
      title: 'Nominalizations in Authentic Texts: Recognition and Rewriting',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'A key B2 skill is recognising nominalizations in formal texts and understanding how to "unpack" them back into verb-based clauses — and equally, how to compress verb-based clauses into noun phrases when writing.',
          explanation:
            'Dutch formal texts — government communications, academic papers, business reports — are dense with nominalizations. Readers must decode them quickly; writers must produce them accurately. The test is bidirectional: can you identify what verb or adjective underlies a nominalization ("de uitvoering" ← uitvoeren), and can you transform a plain clause into a formal noun phrase?',
        },
        {
          type: 'examples',
          title: 'Unpacking nominalizations from formal Dutch',
          examples: [
            { dutch: 'Na de beoordeling van de aanvraag ontvangt u een beslissing.', english: 'After the assessment of the application, you will receive a decision.', highlight: 'de beoordeling', note: 'de beoordeling ← beoordelen (to assess/evaluate)' },
            { dutch: 'De uitvoering van dit beleid vereist samenwerking tussen alle afdelingen.', english: 'The execution of this policy requires cooperation between all departments.', highlight: 'De uitvoering … samenwerking', note: 'uitvoering ← uitvoeren; samenwerking ← samenwerken' },
            { dutch: 'Wij verzoeken u uw medewerking te verlenen aan de implementatie van dit traject.', english: 'We request your cooperation in the implementation of this process.', highlight: 'uw medewerking … de implementatie', note: 'medewerking ← meewerken; implementatie ← implementeren' },
            { dutch: 'Ingevolge de inwerkingtreding van de nieuwe wet dienen bedrijven hun beleid aan te passen.', english: 'Following the entry into force of the new law, companies must adjust their policy.', highlight: 'de inwerkingtreding', note: 'inwerkingtreding ← in werking treden (to come into force)' },
          ],
        },
        {
          type: 'grammar-table',
          title: 'Common compound nominalizations in official Dutch',
          headers: ['Nominalization', 'Underlying verb/phrase', 'English'],
          rows: [
            ['de inwerkingtreding', 'in werking treden', 'entry into force'],
            ['de indiensttreding', 'in dienst treden', 'start of employment / taking up post'],
            ['de gegevensverwerking', 'gegevens verwerken', 'data processing'],
            ['de besluitvorming', 'besluiten vormen / nemen', 'decision-making'],
            ['de beleidsvorming', 'beleid vormen', 'policy formation'],
            ['de kwaliteitsborging', 'kwaliteit borgen', 'quality assurance'],
            ['de dienstverlening', 'diensten verlenen', 'service provision'],
            ['de taakverdeling', 'taken verdelen', 'division of tasks / task allocation'],
            ['de samenwerking', 'samenwerken', 'cooperation'],
            ['de oplevering', 'opleveren', 'delivery / completion (of a project)'],
          ],
          caption: 'Compound nominalizations are highly frequent in Dutch administrative, legal, and HR language. Recognising their component parts speeds up reading.',
        },
        {
          type: 'note',
          content: 'Over-nominalizing conversational or informal text makes it stilted. The goal is register-appropriate use: nominalizations belong in formal writing, not casual emails or spoken Dutch.',
          variant: 'warning',
        },
        {
          type: 'workplace-context',
          scenario: 'Reading a Dutch government or HR document',
          examples: [
            { dutch: 'Bij de indiensttreding dient de medewerker een kopie van het identiteitsbewijs te overleggen.', english: 'Upon starting employment, the employee must provide a copy of their identity document.' },
            { dutch: 'De besluitvorming omtrent het nieuwe beleid is nog in volle gang.', english: 'The decision-making regarding the new policy is still in full swing.' },
            { dutch: 'Wij waarderen uw medewerking aan de kwaliteitsborging van onze dienstverlening.', english: 'We appreciate your cooperation in the quality assurance of our service provision.' },
          ],
          note: 'Each of these sentences contains 2–4 nominalizations. This density is normal in formal Dutch; it is a skill in itself to read fluently.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-nom-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct nominalization.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Which is the correct nominalization of "implementeren"?',
            options: ['het implementeren', 'de implementatie', 'de implementering', 'het geïmplementeerde'],
            correctIndex: 1,
            explanation: '"De implementatie" is the standard noun form of "implementeren" (Latin origin → -atie suffix). "Het implementeren" (infinitive used as noun) is grammatically possible but less formal.',
          },
          {
            question: 'Which sentence uses a nominalization correctly?',
            options: [
              'Na dat we beslissen, start het project.',
              'Na het beslissen start het project.',
              'Na de beslissing start het project.',
              'Na beslist te hebben start het project.',
            ],
            correctIndex: 2,
            explanation: '"Na de beslissing" is a clean nominalized prepositional phrase. "Na het beslissen" is grammatical but more colloquial. The "nadat" clause is also grammatical but uses a full subordinate clause rather than a nominalized phrase.',
          },
          {
            question: 'What is the correct noun form of "flexibel"?',
            options: ['de flexibele', 'de flexibelheid', 'de flexibiliteit', 'het flexibel'],
            correctIndex: 2,
            explanation: 'Adjectives ending in -bel/-ief/-ief typically form nouns with -iteit: flexibel → flexibiliteit.',
          },
        ],
      },
    },
    {
      id: 'b2-nom-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Replace the underlined part with a nominalized phrase. Write only the nominalized noun (and article if needed).',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Doordat het systeem faalt,', after: 'van het systeem, moeten we ingrijpen.', correctAnswer: 'Vanwege het falen', hint: '"Doordat … faalt" → vanwege + nominalization of "falen".' },
          { before: 'Nadat we het rapport hebben beoordeeld, → Na', after: 'van het rapport, sturen we feedback.', correctAnswer: 'de beoordeling', hint: 'beoordelen → de beoordeling.' },
          { before: 'Het feit dat hij verantwoordelijk is → Zijn', after: 'voor dit project is duidelijk.', correctAnswer: 'verantwoordelijkheid', hint: 'verantwoordelijk + -heid → de verantwoordelijkheid.' },
        ],
      },
    },
    {
      id: 'b2-nom-err-1',
      type: 'error-correction',
      instruction: 'Rewrite the sentence using a nominalization to make it more formal.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Omdat we investeren in opleiding, stijgt de productiviteit.',
            correctedSentence: 'Door de investering in opleiding stijgt de productiviteit.',
            errorExplanation: 'Replace the subordinate "omdat we investeren in" with the nominalized prepositional phrase "door de investering in".',
          },
          {
            incorrectSentence: 'De verbeteren van de service is noodzakelijk.',
            correctedSentence: 'De verbetering van de service is noodzakelijk.',
            errorExplanation: 'Use the noun form "de verbetering" (not the infinitive "verbeteren") as the head of the noun phrase.',
          },
          {
            incorrectSentence: 'Na deelnemen aan het programma, ontvangt u een certificaat.',
            correctedSentence: 'Na deelname aan het programma ontvangt u een certificaat.',
            errorExplanation: '"Deelnemen aan" nominalizes to "de deelname aan". Use "na deelname aan het programma" for a clean formal phrase.',
          },
        ],
      },
    },
    {
      id: 'b2-nom-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct nominalized noun (with article where needed).',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De', after: 'aan het project vereist veel middelen. (deelnemen)', correctAnswer: 'deelname', hint: 'deelnemen aan → de deelname aan.' },
          { before: 'De', after: 'op de klacht liet lang op zich wachten. (reageren op)', correctAnswer: 'reactie', hint: 'reageren op → de reactie op.' },
          { before: 'De', after: 'van het nieuwe systeem verloopt soepel. (implementeren)', correctAnswer: 'implementatie', hint: 'implementeren → de implementatie.' },
          { before: 'De', after: 'voor de kwaliteit ligt bij het management. (verantwoordelijk zijn voor)', correctAnswer: 'verantwoordelijkheid', hint: 'verantwoordelijk zijn voor → de verantwoordelijkheid voor.' },
        ],
      },
    },
    {
      id: 'b2-nom-sb-1',
      type: 'sentence-builder',
      instruction: 'Build the formal sentence using the nominalized noun phrase.',
      difficulty: 'guided',
      content: {
        type: 'sentence-builder',
        items: [
          {
            availableWords: ['De', 'samenwerking', 'alle', 'tussen', 'afdelingen', 'is', 'essentieel'],
            correctSentence: 'De samenwerking tussen alle afdelingen is essentieel.',
            englishPrompt: 'Cooperation between all departments is essential.',
          },
          {
            availableWords: ['Na', 'de', 'evaluatie', 'wordt', 'een', 'genomen', 'beslissing'],
            correctSentence: 'Na de evaluatie wordt een beslissing genomen.',
            englishPrompt: 'After the evaluation, a decision will be made.',
          },
          {
            availableWords: ['De', 'verantwoordelijkheid', 'de', 'voor', 'uitvoering', 'bij', 'het', 'ligt', 'management'],
            correctSentence: 'De verantwoordelijkheid voor de uitvoering ligt bij het management.',
            englishPrompt: 'Responsibility for the execution lies with the management.',
          },
        ],
      },
    },
    {
      id: 'b2-nom-wp-1',
      type: 'writing-prompt',
      instruction: 'Rewrite the following informal paragraph as a formal document section. Replace at least four verb-based clauses with nominalizations.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Herschrijf de onderstaande informele tekst als een formele alinea met behulp van nominalisering.',
        context: 'Informal source text: "We hebben het systeem geïmplementeerd en de medewerkers zijn opgeleid. Daarna hebben we de kwaliteit gecontroleerd. We denken dat het goed werkt en stellen voor dit verder uit te rollen."',
        guidelines: [
          'Convert "hebben geïmplementeerd" → "de implementatie van"',
          'Convert "zijn opgeleid" → "de opleiding van"',
          'Convert "hebben gecontroleerd" → "de kwaliteitscontrole"',
          'Use passive or impersonal constructions (er wordt, men)',
          'End with a formal recommendation',
        ],
        sampleResponse: 'Na de implementatie van het systeem en de opleiding van de medewerkers heeft een kwaliteitscontrole plaatsgevonden. Op basis van deze bevindingen lijkt de werking van het systeem bevredigend. De uitrol naar de overige afdelingen wordt dan ook aanbevolen.',
      },
    },
    {
      id: 'b2-nom-trans-1',
      type: 'translation',
      instruction: 'Translate into formal Dutch using nominalizations.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'After the evaluation of the results, a decision will be made.',
            correctDutch: 'Na de evaluatie van de resultaten wordt een beslissing genomen.',
            acceptableAnswers: ['Na de beoordeling van de resultaten wordt een besluit genomen.'],
            keyVocabulary: [{ dutch: 'de evaluatie', english: 'the evaluation' }, { dutch: 'een beslissing nemen', english: 'to make a decision' }],
          },
          {
            english: 'The responsibility for the implementation lies with the project manager.',
            correctDutch: 'De verantwoordelijkheid voor de implementatie ligt bij de projectmanager.',
            acceptableAnswers: ['De verantwoordelijkheid voor de uitvoering ligt bij de projectleider.'],
            keyVocabulary: [{ dutch: 'de verantwoordelijkheid voor', english: 'the responsibility for' }, { dutch: 'de implementatie', english: 'the implementation' }],
          },
          {
            english: 'Due to the flexibility of the system, productivity has increased significantly.',
            correctDutch: 'Dankzij de flexibiliteit van het systeem is de productiviteit aanzienlijk gestegen.',
            acceptableAnswers: ['Door de flexibiliteit van het systeem is de productiviteit significant toegenomen.'],
            keyVocabulary: [{ dutch: 'de flexibiliteit', english: 'the flexibility' }, { dutch: 'de productiviteit', english: 'the productivity' }],
          },
        ],
      },
    },
  ],
};
