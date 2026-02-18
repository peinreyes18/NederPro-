import { Topic } from '@/content/types';

export const subjectiveIdioms: Topic = {
  id: 'subjunctive-idioms',
  levelId: 'b2',
  order: 6,
  title: 'Subjunctive & Fixed Expressions',
  subtitle: 'Aanvoegende wijs en vaste uitdrukkingen',
  estimatedMinutes: 50,
  lessons: [
    {
      id: 'si-1',
      title: 'The Dutch Subjunctive (Aanvoegende Wijs)',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch retains a subjunctive mood in a small set of fixed expressions, wishes, and formal constructions. It is formed by using the bare verb stem (without endings).',
          explanation:
            'The Dutch subjunctive is not as productive as the French or German subjunctive — it survives mainly in fixed phrases. In the third person singular, the subjunctive lacks the regular -t ending: "hij leve" (may he live) rather than "hij leeft". You will encounter it in toasts, blessings, formal motions, legal language, and some literary expressions. Recognising and using these forms marks advanced proficiency.',
        },
        {
          type: 'grammar-table',
          title: 'Subjunctive forms',
          headers: ['Normal indicative', 'Subjunctive', 'Context'],
          rows: [
            ['hij leeft', 'hij leve', 'Toast / wish: "Lang leve de koning!"'],
            ['zij is', 'zij zij', 'Formal proposal / motion: "Het zij zo." (So be it.)'],
            ['god is', 'God zij', 'Fixed phrase: "God zij dank." (Thank God.)'],
            ['het moge', '(moge + inf)', '"Moge dit u van dienst zijn." (May this be of service.)'],
            ['hij werke', '(rare)', 'Legal/biblical: "Wie werke, ete." (Let him who works, eat.)'],
          ],
          caption: 'In everyday speech the subjunctive is replaced by "moge + infinitive" or "laat + subject + verb".',
        },
        {
          type: 'grammar-table',
          title: 'Common surviving subjunctive fixed phrases',
          headers: ['Expression', 'English', 'Register'],
          rows: [
            ['Lang leve ...!', 'Long live ...!', 'Toasts, celebrations'],
            ['Leve de vrijheid!', 'Long live freedom!', 'Emotional expression'],
            ['God zij dank.', 'Thank God. / God be thanked.', 'Formal, religious'],
            ['Moge het u goed gaan.', 'May things go well for you.', 'Formal farewell'],
            ['Het zij zo.', 'So be it.', 'Formal acceptance'],
            ['Vrede zij u.', 'Peace be with you.', 'Religious / liturgical'],
            ['Moge dit van dienst zijn.', 'May this be of service.', 'Very formal correspondence'],
            ['Koste wat het kost.', 'Whatever it costs. / At any cost.', 'Fixed idiom (archaic subj.)'],
          ],
        },
        {
          type: 'note',
          content: 'In modern Dutch, "laat" + pronoun + verb is the productive equivalent of the subjunctive for wishes: "Laat hem maar komen" (Let him come). The subjunctive forms above are learned as fixed phrases rather than a productive grammar rule.',
          variant: 'info',
        },
      ],
    },
    {
      id: 'si-2',
      title: 'Advanced Fixed Expressions and Idioms',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch has a rich stock of fixed expressions (vaste verbindingen) and idioms (idiomen) that cannot be translated word-for-word. Mastering them is essential for natural, fluent production at B2.',
          explanation:
            'Fixed expressions include collocations (words that habitually go together: "een beslissing nemen", not "doen"), prepositional phrases (op de hoogte zijn van), and true idioms (het kind met het badwater weggooien). At B2 you should both recognise these in texts and use them actively in writing and speech.',
        },
        {
          type: 'grammar-table',
          title: 'Essential collocations (verb + noun)',
          headers: ['Dutch collocation', 'Incorrect calque', 'English meaning'],
          rows: [
            ['een beslissing nemen', '*een beslissing doen / maken', 'to make a decision'],
            ['een vergadering houden', '*een vergadering maken', 'to hold a meeting'],
            ['rekening houden met', '*rekening nemen met', 'to take into account'],
            ['belang hechten aan', '*belang geven aan', 'to attach importance to'],
            ['gebruik maken van', '*gebruik doen van', 'to make use of'],
            ['aandacht besteden aan', '*aandacht geven aan', 'to pay attention to'],
            ['een rol spelen', '*een rol doen', 'to play a role'],
            ['invloed uitoefenen op', '*invloed hebben op iets doen', 'to exert influence on'],
          ],
          caption: 'Collocations must be memorised as chunks. They are tested in Staatsexamen NT2 reading and writing tasks.',
        },
        {
          type: 'grammar-table',
          title: 'Common Dutch idioms',
          headers: ['Idiom', 'Literal meaning', 'Actual meaning'],
          rows: [
            ['het kind met het badwater weggooien', 'throw the child out with the bathwater', 'to discard something valuable along with the bad'],
            ['van het kastje naar de muur gestuurd worden', 'sent from cupboard to wall', 'to be passed from pillar to post (bureaucracy)'],
            ['iemand op de hoogte stellen', 'to place someone on the height', 'to inform someone'],
            ['op de lange baan schuiven', 'to push onto the long track', 'to postpone / kick into the long grass'],
            ['de knoop doorhakken', 'to chop through the knot', 'to make a difficult decision'],
            ['iets door de vingers zien', 'to see something through the fingers', 'to turn a blind eye to something'],
            ['met de deur in huis vallen', 'to fall in the house with the door', 'to get straight to the point'],
            ['het over een andere boeg gooien', 'to throw it over a different bow', 'to try a different approach'],
          ],
        },
      ],
    },
    {
      id: 'si-3',
      title: 'Prepositional Fixed Phrases',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Many B2-level fixed expressions consist of a preposition + noun (phrase) and function as adverbials or predicates.',
          explanation:
            'These prepositional fixed phrases are formulaic: the preposition is fixed and cannot be changed by analogy. "Op de hoogte zijn van" (to be aware of) cannot be "aan de hoogte" or "in de hoogte". They must be memorised as complete units. They appear frequently in formal writing, business correspondence, and academic texts.',
        },
        {
          type: 'grammar-table',
          title: 'Essential prepositional fixed phrases',
          headers: ['Expression', 'English equivalent', 'Example'],
          rows: [
            ['op de hoogte zijn van', 'to be aware of / informed about', 'Ik ben op de hoogte van de situatie.'],
            ['in staat zijn om te', 'to be able to / capable of', 'Ze is in staat om dit zelfstandig te doen.'],
            ['op het punt staan om te', 'to be about to', 'Hij staat op het punt om te vertrekken.'],
            ['in aanmerking komen voor', 'to be eligible for', 'U komt in aanmerking voor de subsidie.'],
            ['van kracht zijn', 'to be in force / valid', 'De wet is nog steeds van kracht.'],
            ['ter beschikking stellen', 'to make available', 'Wij stellen de ruimte ter beschikking.'],
            ['in het geding zijn', 'to be at stake', 'De reputatie van het bedrijf is in het geding.'],
            ['buiten beschouwing laten', 'to leave out of consideration', 'We laten dit aspect buiten beschouwing.'],
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik ben bewust van het probleem.', correct: 'Ik ben op de hoogte van het probleem. / Ik ben me bewust van het probleem.', explanation: '"Bewust" is an adjective and requires reflexive "me": "Ik ben me bewust van". The fixed phrase "op de hoogte zijn van" is always correct for "to be aware of".' },
            { incorrect: 'Ze is capabel om het te doen.', correct: 'Ze is in staat om het te doen.', explanation: '"In staat zijn om te" is the fixed Dutch expression for "capable of / able to". "Capabel" exists but is used differently.' },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-si-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct collocation.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'We moeten ___ met de bezwaren van de klanten.',
            options: ['rekening houden', 'rekening nemen', 'rekening maken', 'rekening geven'],
            correctIndex: 0,
            explanation: '"Rekening houden met" is the fixed collocation meaning "to take into account". No other verb combines with "rekening" in this sense.',
          },
          {
            question: 'De directeur heeft gisteren een belangrijke ___ genomen.',
            options: ['beslissing', 'keuze gemaakt', 'besluit gedaan', 'mening'],
            correctIndex: 0,
            explanation: '"Een beslissing nemen" is the correct collocation. "Een keuze maken" is also correct but "gemaakt" in option B makes it odd. "Een besluit doen" is wrong; "een mening" does not collocate with "nemen" in this context.',
          },
          {
            question: 'Ik ben volledig ___ van de wijzigingen in het contract.',
            options: ['op de hoogte', 'bewust', 'in de hoogte', 'op de kennis'],
            correctIndex: 0,
            explanation: '"Op de hoogte zijn van" = to be informed/aware of. "Bewust" needs a reflexive pronoun: "me bewust van". "In de hoogte" and "op de kennis" are not fixed expressions.',
          },
        ],
      },
    },
    {
      id: 'b2-si-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the fixed expression.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Lang', after: 'de koning!', correctAnswer: 'leve', hint: 'Subjunctive form of "leven": leve (no -t ending).' },
          { before: 'We moeten dit probleem', after: 'beschouwing laten voor nu.', correctAnswer: 'buiten', hint: 'Fixed phrase: buiten beschouwing laten = to leave out of consideration.' },
          { before: 'Het is tijd om de knoop', after: '.', correctAnswer: 'door te hakken', hint: '"De knoop doorhakken" = to make a difficult decision.' },
          { before: 'De nieuwe regels zijn per 1 januari van', after: '.', correctAnswer: 'kracht', hint: '"Van kracht zijn" = to be in force.' },
        ],
      },
    },
    {
      id: 'b2-si-err-1',
      type: 'error-correction',
      instruction: 'Correct the collocation or fixed expression error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'We moeten aandacht geven aan de kwaliteit van het product.',
            correctedSentence: 'We moeten aandacht besteden aan de kwaliteit van het product.',
            errorExplanation: '"Aandacht besteden aan" is the correct collocation for "to pay attention to". "Geven" does not collocate with "aandacht" in this sense.',
          },
          {
            incorrectSentence: 'Ze is capabel om de functie te vervullen.',
            correctedSentence: 'Ze is in staat om de functie te vervullen.',
            errorExplanation: '"In staat zijn om te" is the standard Dutch fixed phrase for "capable of / able to". "Capabel" exists in Dutch but is less idiomatic in this construction.',
          },
          {
            incorrectSentence: 'De wet is nog steeds in kracht.',
            correctedSentence: 'De wet is nog steeds van kracht.',
            errorExplanation: 'The fixed phrase is "van kracht zijn" (to be in force). "In kracht" is not a standard expression.',
          },
          {
            incorrectSentence: 'Hij viel met de deur in het huis.',
            correctedSentence: 'Hij viel met de deur in huis.',
            errorExplanation: 'The idiom is "met de deur in huis vallen" (to get straight to the point). "Het huis" needs no article in this fixed phrase.',
          },
        ],
      },
    },
    {
      id: 'b2-si-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the idiom that best fits the context.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Na maanden van discussie besloot het team eindelijk actie te ondernemen. Ze hadden eindelijk ___.',
            options: ['de knoop doorgehakt', 'het kind met het badwater weggegooid', 'de deur in huis gevallen', 'op de lange baan geschoven'],
            correctIndex: 0,
            explanation: '"De knoop doorhakken" = to finally make a difficult decision after prolonged deliberation. This fits perfectly.',
          },
          {
            question: 'De nieuwe manager besloot de strategie compleet te veranderen. Ze gooide het ___ .',
            options: ['kind met het badwater weg', 'over een andere boeg', 'buiten beschouwing', 'op de lange baan'],
            correctIndex: 1,
            explanation: '"Het over een andere boeg gooien" = to try a different approach / change strategy completely.',
          },
        ],
      },
    },
    {
      id: 'b2-si-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using the appropriate fixed expression or idiom.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The new regulation will come into force on 1 March.',
            correctDutch: 'De nieuwe regeling treedt op 1 maart in werking.',
            acceptableAnswers: ['De nieuwe regeling is per 1 maart van kracht.', 'De nieuwe wet treedt op 1 maart in werking.'],
            keyVocabulary: [{ dutch: 'in werking treden', english: 'to come into force / take effect' }, { dutch: 'van kracht zijn', english: 'to be in force' }],
          },
          {
            english: 'We must take the interests of all stakeholders into account.',
            correctDutch: 'We moeten rekening houden met de belangen van alle belanghebbenden.',
            acceptableAnswers: ['Wij dienen rekening te houden met de belangen van alle betrokkenen.'],
            keyVocabulary: [{ dutch: 'rekening houden met', english: 'to take into account' }, { dutch: 'belanghebbenden', english: 'stakeholders' }],
          },
          {
            english: 'Long live the Netherlands!',
            correctDutch: 'Lang leve Nederland!',
            acceptableAnswers: ['Leve Nederland!'],
            keyVocabulary: [{ dutch: 'lang leve', english: 'long live (subjunctive)' }],
          },
        ],
      },
    },
  ],
};
