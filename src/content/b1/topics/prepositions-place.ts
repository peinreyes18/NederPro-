import { Topic } from '@/content/types';

export const prepositionsPlace: Topic = {
  id: 'prepositions-place',
  levelId: 'b1',
  order: 5,
  title: 'Prepositions of Place',
  subtitle: 'Plaatsbepalingen',
  estimatedMinutes: 45,
  lessons: [
    {
      id: 'prep-place-1',
      title: 'Core Prepositions of Location',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch prepositions of place describe where something is located. Many have a distinct form for "position" (where something is) vs. "direction" (where something goes).',
          explanation:
            'English often uses the same preposition for location and direction (e.g. "at the table" vs. "to the table"). Dutch sometimes uses different words. The distinction is especially important with "in/naar", "op/naar", and "bij/naar". Mastering this distinction is key to natural-sounding Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Location vs. direction',
          headers: ['Meaning', 'Location (where is it?)', 'Direction (where does it go?)'],
          rows: [
            ['in / into', 'in (in the box)', 'in / naar (into the box)'],
            ['on / onto', 'op (on the table)', 'op / naar (onto the table)'],
            ['at / to', 'bij / aan (at the desk)', 'naar (to the office)'],
            ['under / beneath', 'onder (under the chair)', 'onder (under the chair)'],
            ['above / over', 'boven (above the door)', 'over (over the bridge)'],
            ['next to', 'naast (next to the window)', 'naast (next to the window)'],
            ['behind', 'achter (behind the building)', 'achter (behind the building)'],
            ['in front of', 'voor (in front of the door)', 'voor (in front of the door)'],
            ['between', 'tussen (between the desks)', 'tussen (between the desks)'],
          ],
          caption: 'Location prepositions answer "waar?" (where?). Direction prepositions answer "waarheen?" (where to?).',
        },
        {
          type: 'examples',
          title: 'Location vs. direction in context',
          examples: [
            { dutch: 'Het boek ligt op de tafel. (location) / Leg het boek op de tafel. (direction)', english: 'The book is on the table. / Put the book on the table.', highlight: 'op' },
            { dutch: 'Ze werkt in Amsterdam. (location) / Ze gaat naar Amsterdam. (direction)', english: 'She works in Amsterdam. / She is going to Amsterdam.', highlight: 'in / naar' },
            { dutch: 'Hij zit aan zijn bureau. (location) / Hij loopt naar zijn bureau. (direction)', english: 'He is sitting at his desk. / He walks to his desk.', highlight: 'aan / naar' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik ga in het kantoor.', correct: 'Ik ga naar het kantoor.', explanation: 'Use "naar" for movement toward a place. "In het kantoor" means you are already inside.' },
            { incorrect: 'Ze woont aan Amsterdam.', correct: 'Ze woont in Amsterdam.', explanation: '"Wonen in" is the correct collocation for living in a city or place.' },
            { incorrect: 'Het ligt aan de grond.', correct: 'Het ligt op de grond.', explanation: '"Op de grond" = on the ground/floor. "Aan de grond" has a different idiomatic meaning.' },
          ],
        },
      ],
    },
    {
      id: 'prep-place-2',
      title: 'in, op, aan, bij: the tricky four',
      sections: [
        {
          type: 'grammar-rule',
          rule: '"In", "op", "aan", and "bij" all translate to English "at" or "on" in different contexts. They must be learned with their collocations.',
          explanation:
            'These four prepositions overlap heavily in English translation and cause the most confusion for learners. The choice depends on the type of location, not on a simple rule. Memorising common collocations is the most effective strategy.',
        },
        {
          type: 'grammar-table',
          title: 'in — enclosed or surrounded spaces',
          headers: ['Collocation', 'Translation'],
          rows: [
            ['in het kantoor', 'in the office'],
            ['in de stad', 'in the city'],
            ['in Nederland', 'in the Netherlands'],
            ['in de kamer', 'in the room'],
            ['in de rij', 'in the queue'],
            ['in de auto', 'in the car'],
            ['in bed', 'in bed'],
            ['in het ziekenhuis', 'in hospital'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'op — surfaces and open spaces',
          headers: ['Collocation', 'Translation'],
          rows: [
            ['op de tafel', 'on the table'],
            ['op de grond', 'on the ground/floor'],
            ['op het werk', 'at work'],
            ['op school', 'at school'],
            ['op de fiets', 'on the bicycle'],
            ['op straat', 'on the street'],
            ['op het platteland', 'in the countryside'],
            ['op de hoogte', 'up to date / aware'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'aan — attached or along a line/edge',
          headers: ['Collocation', 'Translation'],
          rows: [
            ['aan de muur', 'on the wall'],
            ['aan tafel', 'at the table (dining)'],
            ['aan het bureau', 'at the desk'],
            ['aan het werk', 'at work (working)'],
            ['aan de rivier', 'on/along the river'],
            ['aan de beurt', 'it\'s your turn'],
            ['aan de telefoon', 'on the phone'],
            ['aan de overkant', 'on the other side'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'bij — proximity / at someone\'s place',
          headers: ['Collocation', 'Translation'],
          rows: [
            ['bij de ingang', 'near/at the entrance'],
            ['bij het raam', 'by the window'],
            ['bij de dokter', 'at the doctor\'s'],
            ['bij mij thuis', 'at my place'],
            ['bij het station', 'near the station'],
            ['bij een bedrijf werken', 'to work at a company'],
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik werk in een bedrijf.', correct: 'Ik werk bij een bedrijf.', explanation: 'Use "bij" when working at a company (as an employee). "In" suggests you are physically inside.' },
            { incorrect: 'Het schilderij hangt op de muur.', correct: 'Het schilderij hangt aan de muur.', explanation: 'Things attached/hanging use "aan" (on the wall), not "op".' },
            { incorrect: 'Ze zit in tafel.', correct: 'Ze zit aan tafel.', explanation: '"Aan tafel" = at the table (dining/working). "In" would mean inside the table.' },
          ],
        },
      ],
    },
    {
      id: 'prep-place-3',
      title: 'Pronominal Adverbs: hier, daar, waar + preposition',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'When a preposition refers to a thing (not a person), combine "hier", "daar", or "waar" with the preposition instead of using a pronoun.',
          explanation:
            'In Dutch, you cannot combine a preposition directly with the pronouns "het" or "dit" to refer to things. Instead, use the pronominal adverb system: hier + preposition, daar + preposition, or waar + preposition.\n\n• "Ik denk eraan" (not "Ik denk aan het") = I think about it\n• "Hiermee" (not "met dit") = with this\n• "Daarin" (not "in dat") = in that',
        },
        {
          type: 'grammar-table',
          title: 'Pronominal adverbs with place prepositions',
          headers: ['Preposition', 'hier + prep', 'daar + prep', 'waar + prep'],
          rows: [
            ['in', 'hierin (in this)', 'daarin (in that)', 'waarin (in which)'],
            ['op', 'hierop (on this)', 'daarop (on that)', 'waarop (on which)'],
            ['aan', 'hieraan (on/at this)', 'daaraan (on/at that)', 'waaraan (on/at which)'],
            ['bij', 'hierbij (with this/attached)', 'daarbij (with that)', 'waarbij (at/with which)'],
            ['voor', 'hiervoor (for this/in front)', 'daarvoor (for that)', 'waarvoor (for which)'],
            ['achter', 'hierachter (behind this)', 'daarachter (behind that)', 'waarachter (behind which)'],
            ['naast', 'hiernaast (next to this)', 'daarnaast (next to that)', 'waarnaast (next to which)'],
          ],
          caption: 'These combinations can be split in speech: "daar … in", "hier … op", "waar … aan".',
        },
        {
          type: 'examples',
          title: 'Pronominal adverbs in context',
          examples: [
            { dutch: 'Hierbij stuur ik u de bijlage. (Formal email)', english: 'Attached herewith I send you the attachment.', highlight: 'Hierbij' },
            { dutch: 'Het kantoor staat daarin beschreven.', english: 'The office is described in that.', highlight: 'daarin' },
            { dutch: 'Dit is de kamer waarin ik werk.', english: 'This is the room in which I work.', highlight: 'waarin' },
            { dutch: 'Ik weet niet waar hij over praat.', english: 'I don\'t know what he is talking about.', highlight: 'waar ... over' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Splitting pronominal adverbs',
          content: 'Pronominal adverbs can be split in informal speech or when another word comes between them:\n\n"Daarin" → "daar … in" → "Ik geloof daar niet in." (I don\'t believe in that.)\n"Hiermee" → "Hiermee ben ik het eens." OR "Ik ben het hier mee eens."\n\nBoth forms are correct; splitting is more common in speech.',
        },
      ],
    },
    {
      id: 'prep-place-4',
      title: 'Prepositions of Place in Workplace Dutch',
      sections: [
        {
          type: 'workplace-context',
          scenario: 'Giving directions and describing locations in the office',
          examples: [
            { dutch: 'De vergaderruimte is aan het einde van de gang, naast de lift.', english: 'The meeting room is at the end of the corridor, next to the lift.' },
            { dutch: 'Mijn bureau staat tegenover de ingang.', english: 'My desk is opposite the entrance.' },
            { dutch: 'De printer staat in de hoek, naast het raam.', english: 'The printer is in the corner, next to the window.' },
            { dutch: 'U kunt het formulier vinden op de website of bij de receptie.', english: 'You can find the form on the website or at reception.' },
          ],
          note: 'Being able to give and understand directions and location descriptions is an essential workplace skill.',
        },
        {
          type: 'grammar-table',
          title: 'Useful location phrases',
          headers: ['Dutch', 'English'],
          rows: [
            ['aan het einde van', 'at the end of'],
            ['tegenover', 'opposite / across from'],
            ['naast', 'next to'],
            ['in de buurt van', 'near / in the vicinity of'],
            ['dichtbij', 'nearby / close to'],
            ['ver van', 'far from'],
            ['op de hoek van', 'on the corner of'],
            ['in het midden van', 'in the middle of'],
            ['boven op', 'on top of'],
            ['rechts/links van', 'to the right/left of'],
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'prep-place-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct preposition.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ze werkt ___ een groot bedrijf in Rotterdam.',
            options: ['in', 'bij', 'op', 'aan'],
            correctIndex: 1,
            explanation: '"Bij een bedrijf werken" = to work at a company. "Bij" is used for employment.',
          },
          {
            question: 'Het schilderij hangt ___ de muur.',
            options: ['op', 'in', 'aan', 'bij'],
            correctIndex: 2,
            explanation: 'Things attached to a wall use "aan de muur" (on the wall).',
          },
          {
            question: 'We gaan morgen ___ Amsterdam.',
            options: ['in', 'bij', 'aan', 'naar'],
            correctIndex: 3,
            explanation: 'Movement toward a place uses "naar". "In Amsterdam" = already in Amsterdam.',
          },
          {
            question: 'Hij zit ___ tafel met de klanten.',
            options: ['op', 'aan', 'in', 'bij'],
            correctIndex: 1,
            explanation: '"Aan tafel" = at the table (during a meal or meeting).',
          },
          {
            question: 'De sleutels liggen ___ de la.',
            options: ['aan', 'bij', 'in', 'op'],
            correctIndex: 2,
            explanation: '"In de la" = in the drawer. Enclosed space → "in".',
          },
          {
            question: 'Ze woont ___ het station.',
            options: ['bij', 'op', 'aan', 'in'],
            correctIndex: 0,
            explanation: '"Bij het station" = near/at the station. "Bij" expresses proximity.',
          },
        ],
      },
    },
    {
      id: 'prep-place-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Complete each sentence with the correct preposition: in, op, aan, bij, naar, naast, tegenover, or achter.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Het kantoor van de directeur staat',
            after: 'de receptie.',
            correctAnswer: 'tegenover',
            hint: '"Tegenover" = opposite, across from.',
            acceptableAnswers: ['tegenover'],
          },
          {
            before: 'Ik ga elke dag',
            after: 'de fiets naar mijn werk.',
            correctAnswer: 'op',
            hint: '"Op de fiets" = on the bicycle.',
            acceptableAnswers: ['op'],
          },
          {
            before: 'De documenten moeten',
            after: 'de manager worden gegeven.',
            correctAnswer: 'aan',
            hint: '"Aan" is used for indirect objects and certain collocations.',
            acceptableAnswers: ['aan'],
          },
          {
            before: 'Ze is nu',
            after: 'het werk — stoor haar niet.',
            correctAnswer: 'aan',
            hint: '"Aan het werk" = working.',
            acceptableAnswers: ['aan'],
          },
          {
            before: 'Het nieuwe restaurant staat',
            after: 'het postkantoor.',
            correctAnswer: 'naast',
            hint: '"Naast" = next to.',
            acceptableAnswers: ['naast'],
          },
        ],
      },
    },
    {
      id: 'prep-place-ex-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct pronominal adverb.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Ik stuur de bijlage mee. ___ vindt u het contract.',
            options: ['Hierbij', 'Hierop', 'Hiermee', 'Hierin'],
            correctIndex: 0,
            explanation: '"Hierbij" (attached herewith) is the standard phrase in formal Dutch emails when attaching a document.',
          },
          {
            question: 'We hebben een nieuw plan. ___ wil ik meer vertellen.',
            options: ['Hierin', 'Hierover', 'Hierop', 'Hieraan'],
            correctIndex: 1,
            explanation: '"Hierover" (about this) is used when referring to a topic to be discussed.',
          },
          {
            question: 'Dit is de map ___ de documenten worden bewaard.',
            options: ['waarop', 'waaraan', 'waarin', 'waarvoor'],
            correctIndex: 2,
            explanation: '"Waarin" (in which) because documents are stored IN the folder.',
          },
          {
            question: 'Het bureau ___ ik werk, staat bij het raam.',
            options: ['waaraan', 'waarin', 'waarop', 'waarvoor'],
            correctIndex: 0,
            explanation: '"Aan het bureau werken" = to work at the desk. So the relative pronoun is "waaraan".',
          },
        ],
      },
    },
    {
      id: 'prep-place-ex-4',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik werk in een internationaal bedrijf als accountant.',
            correctedSentence: 'Ik werk bij een internationaal bedrijf als accountant.',
            errorExplanation: 'Use "bij" for working at a company as an employee.',
          },
          {
            incorrectSentence: 'De poster hangt op de muur in de vergaderruimte.',
            correctedSentence: 'De poster hangt aan de muur in de vergaderruimte.',
            errorExplanation: '"Aan de muur" = on the wall. Things attached/hanging use "aan".',
          },
          {
            incorrectSentence: 'Ik ga morgen in de dokter.',
            correctedSentence: 'Ik ga morgen naar de dokter.',
            errorExplanation: 'Movement toward a person or place uses "naar".',
          },
          {
            incorrectSentence: 'Ze woont dichtbij van het station.',
            correctedSentence: 'Ze woont dichtbij het station.',
            errorExplanation: '"Dichtbij" is already a preposition and does not need "van" after it.',
          },
          {
            incorrectSentence: 'Hij werkt in het bedrijf Philips.',
            correctedSentence: 'Hij werkt bij het bedrijf Philips.',
            errorExplanation: 'Use "bij" for employment at a company. "In" would mean physically inside the building.',
          },
        ],
      },
    },
    {
      id: 'prep-place-ex-5',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'He works at an accounting firm in The Hague.',
            correctDutch: 'Hij werkt bij een accountantskantoor in Den Haag.',
            acceptableAnswers: ['Hij werkt bij een accountantskantoor in Den Haag.'],
          },
          {
            english: 'The whiteboard is on the wall next to the door.',
            correctDutch: 'Het whiteboard hangt aan de muur naast de deur.',
            acceptableAnswers: ['Het whiteboard hangt aan de muur naast de deur.', 'Het whiteboard staat aan de muur naast de deur.'],
          },
          {
            english: 'Please find the agenda attached.',
            correctDutch: 'Hierbij vindt u de agenda.',
            acceptableAnswers: ['Hierbij vindt u de agenda.', 'Bijgevoegd vindt u de agenda.'],
          },
          {
            english: 'The meeting room is opposite the lift.',
            correctDutch: 'De vergaderzaal staat tegenover de lift.',
            acceptableAnswers: ['De vergaderzaal staat tegenover de lift.', 'De vergaderruimte staat tegenover de lift.', 'De vergaderruimte is tegenover de lift.'],
          },
        ],
      },
    },
  ],
};
