import { Topic } from '@/content/types';

export const wordFormation: Topic = {
  id: 'word-formation',
  levelId: 'b1',
  order: 6,
  title: 'Word Formation',
  subtitle: 'Woordvorming',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'word-form-1',
      title: 'Noun Suffixes: forming nouns from verbs and adjectives',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch forms nouns from verbs and adjectives using suffixes. The most important are: -ing, -er/-ster, -heid, -nis, -schap, and -te.',
          explanation:
            'Understanding how Dutch builds words from smaller parts dramatically expands your vocabulary. If you know a verb, you can often predict the related noun — and vice versa. This is a key strategy for reading and understanding unfamiliar words in Dutch texts.',
        },
        {
          type: 'grammar-table',
          title: '-ing: action or process nouns (from verbs)',
          headers: ['Verb', 'Noun (-ing)', 'Translation'],
          rows: [
            ['vergaderen', 'de vergadering', 'meeting'],
            ['opleiden', 'de opleiding', 'training / education'],
            ['oplossen', 'de oplossing', 'solution'],
            ['verbeteren', 'de verbetering', 'improvement'],
            ['samenwerken', 'de samenwerking', 'collaboration'],
            ['veranderen', 'de verandering', 'change'],
            ['uitvoeren', 'de uitvoering', 'execution / performance'],
            ['beoordelen', 'de beoordeling', 'assessment / evaluation'],
          ],
          caption: '-ing nouns are always de-words (common gender).',
        },
        {
          type: 'grammar-table',
          title: '-er / -ster: person nouns (agent nouns)',
          headers: ['Verb', 'Male agent (-er)', 'Female agent (-ster)', 'Translation'],
          rows: [
            ['werken', 'werker', 'werkster', 'worker'],
            ['leren', 'leerder / leraar', 'leerkracht / lerares', 'learner / teacher'],
            ['besturen', 'bestuurder', 'bestuurster', 'driver / manager'],
            ['spelen', 'speler', 'speelster', 'player'],
            ['leiden', 'leider', 'leidster', 'leader'],
            ['schrijven', 'schrijver', 'schrijfster', 'writer'],
            ['kopen', 'koper', 'koopster', 'buyer'],
          ],
          caption: 'In modern Dutch, the -ster distinction is often dropped. "De werker" can refer to any gender.',
        },
        {
          type: 'grammar-table',
          title: '-heid: abstract quality nouns (from adjectives)',
          headers: ['Adjective', 'Noun (-heid)', 'Translation'],
          rows: [
            ['vrij', 'vrijheid', 'freedom'],
            ['moeilijk', 'moeilijkheid', 'difficulty'],
            ['mogelijk', 'mogelijkheid', 'possibility'],
            ['beschikbaar', 'beschikbaarheid', 'availability'],
            ['verantwoordelijk', 'verantwoordelijkheid', 'responsibility'],
            ['eerlijk', 'eerlijkheid', 'honesty'],
            ['duidelijk', 'duidelijkheid', 'clarity'],
            ['veilig', 'veiligheid', 'safety / security'],
          ],
          caption: '-heid nouns are always de-words.',
        },
        {
          type: 'grammar-table',
          title: '-te and -nis: other abstract nouns',
          headers: ['Base word', 'Noun', 'Translation'],
          rows: [
            ['warm (adj)', 'de warmte', 'warmth'],
            ['koud (adj)', 'de koude', 'cold (noun)'],
            ['breed (adj)', 'de breedte', 'width'],
            ['hoog (adj)', 'de hoogte', 'height'],
            ['diep (adj)', 'de diepte', 'depth'],
            ['kennen (verb)', 'de kennis', 'knowledge'],
            ['begrijpen (verb)', 'het begrip', 'understanding'],
            ['gevangen (adj/pp)', 'de gevangenis', 'prison'],
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'het vergadering', correct: 'de vergadering', explanation: 'All -ing nouns are de-words, never het-words.' },
            { incorrect: 'de verantwoordlijkheid', correct: 'de verantwoordelijkheid', explanation: 'The full adjective form "verantwoordelijk" is kept: verantwoordelijk + heid.' },
            { incorrect: 'een mogelijkheid van reizen', correct: 'een mogelijkheid om te reizen', explanation: 'After nouns derived with -heid that express possibility/necessity, use "om te + infinitive", not "van".' },
          ],
        },
      ],
    },
    {
      id: 'word-form-2',
      title: 'Prefixes: forming new words',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch uses prefixes to change or extend the meaning of words. Key prefixes include: on-, ver-, be-, ge-, her-, and mis-.',
          explanation:
            'Prefixes attach to the beginning of a word and change its meaning in a predictable way. Learning these prefixes allows you to understand — and create — a much larger range of Dutch vocabulary. Some prefixes are inseparable (always attached); others are the same as separable verb prefixes.',
        },
        {
          type: 'grammar-table',
          title: 'on- : negation or reversal',
          headers: ['Base word', 'With on-', 'Translation'],
          rows: [
            ['mogelijk', 'onmogelijk', 'impossible'],
            ['duidelijk', 'onduidelijk', 'unclear'],
            ['eerlijk', 'oneerlijk', 'dishonest / unfair'],
            ['tevreden', 'ontevreden', 'unsatisfied'],
            ['afhankelijk', 'onafhankelijk', 'independent'],
            ['bekend', 'onbekend', 'unknown'],
            ['verwacht', 'onverwacht', 'unexpected'],
          ],
          caption: '"On-" is equivalent to English "un-", "in-", or "im-". It negates or reverses the meaning.',
        },
        {
          type: 'grammar-table',
          title: 'ver- : change of state, direction, or intensification',
          headers: ['Base word', 'With ver-', 'Translation'],
          rows: [
            ['beter (adj)', 'verbeteren', 'to improve'],
            ['groot (adj)', 'vergroten', 'to enlarge'],
            ['kopen (verb)', 'verkopen', 'to sell'],
            ['huren (verb)', 'verhuren', 'to rent out'],
            ['geten (verb)', 'vergeten', 'to forget'],
            ['staan (verb)', 'verstaan', 'to understand (speech)'],
            ['bouwen (verb)', 'verbouwen', 'to renovate / to grow (crops)'],
          ],
          caption: '"Ver-" signals change, transformation, or movement away. It is very productive in Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'be- and ge- : creating transitive verbs and collective nouns',
          headers: ['Prefix', 'Base', 'Result', 'Translation'],
          rows: [
            ['be-', 'antwoorden', 'beantwoorden', 'to answer (something)'],
            ['be-', 'spreken', 'bespreken', 'to discuss'],
            ['be-', 'handelen', 'behandelen', 'to handle / to treat'],
            ['be-', 'oordelen', 'beoordelen', 'to assess / evaluate'],
            ['ge-', 'bouw', 'gebouw', 'building'],
            ['ge-', 'bied', 'gebied', 'area / region'],
            ['ge-', 'voel', 'gevoel', 'feeling'],
            ['ge-', 'bruik', 'gebruik', 'use / usage'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'her- and mis- : repetition and error',
          headers: ['Prefix', 'Base', 'Result', 'Translation'],
          rows: [
            ['her-', 'schrijven', 'herschrijven', 'to rewrite'],
            ['her-', 'gebruiken', 'hergebruiken', 'to reuse'],
            ['her-', 'denken', 'herdenken', 'to commemorate'],
            ['her-', 'vatten', 'hervatten', 'to resume'],
            ['mis-', 'verstaan', 'misverstaan', 'to misunderstand'],
            ['mis-', 'bruiken', 'misbruiken', 'to misuse'],
            ['mis-', 'leiden', 'misleiden', 'to mislead'],
          ],
          caption: '"Her-" = re- (to do again). "Mis-" = mis- (done wrongly).',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'onpossibel', correct: 'onmogelijk', explanation: 'Do not calque from English. "Impossible" in Dutch is "onmogelijk" (on + mogelijk).' },
            { incorrect: 'herbespreken', correct: 'opnieuw bespreken / nogmaals bespreken', explanation: '"Her-" does not attach to all verbs. For "to discuss again", use "opnieuw bespreken" or "nogmaals bespreken".' },
          ],
        },
      ],
    },
    {
      id: 'word-form-3',
      title: 'Compound Words',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch freely combines words to create compound nouns, adjectives, and verbs. The last element determines the gender and part of speech.',
          explanation:
            'Dutch is famous for its very long compound words. These are formed by joining two or more words together, often without a space or with a connecting element (-s- or -e-). The final word in the compound determines its gender and grammatical category. Understanding how compounds work lets you decode and build new words independently.',
        },
        {
          type: 'grammar-table',
          title: 'Common compound nouns',
          headers: ['Components', 'Compound', 'Translation'],
          rows: [
            ['werk + gever', 'de werkgever', 'employer'],
            ['werk + nemer', 'de werknemer', 'employee'],
            ['werk + plek', 'de werkplek', 'workplace'],
            ['werk + vergadering', 'de werkvergadering', 'work meeting'],
            ['kantoor + gebouw', 'het kantoorgebouw', 'office building'],
            ['jaar + verslag', 'het jaarverslag', 'annual report'],
            ['veiligheids + maatregel', 'de veiligheidsmaatregel', 'safety measure'],
            ['samen + werking', 'de samenwerking', 'collaboration'],
          ],
          caption: 'The article of a compound is determined by the LAST element: het gebouw → het kantoorgebouw.',
        },
        {
          type: 'grammar-rule',
          rule: 'A connecting -s- or -en- is sometimes inserted between parts of a compound.',
          explanation:
            'Some compounds require a connecting element:\n• -s- is common after nouns ending in -heid, -schap, -ing, -sel, -st\n• -en- is used when the first part is a noun with a clear plural in -en\n\nThis is a matter of feel and convention — not a strict rule. When in doubt, look up the word.',
        },
        {
          type: 'grammar-table',
          title: 'Compounds with connecting elements',
          headers: ['Components', 'Compound', 'Connector', 'Translation'],
          rows: [
            ['veiligheid + maatregel', 'veiligheidsmaatregel', '-s-', 'safety measure'],
            ['overheid + beleid', 'overheidsbeleid', '-s-', 'government policy'],
            ['kind + opvang', 'kinderopvang', '-er-', 'childcare'],
            ['dag + kaart', 'dagkaart', '(none)', 'day ticket'],
            ['zorg + verlening', 'zorgverlening', '(none)', 'care provision'],
            ['aandeel + houder', 'aandeelhouder', '(none)', 'shareholder'],
          ],
        },
        {
          type: 'examples',
          title: 'Decoding long Dutch words',
          examples: [
            { dutch: 'de arbeidsmarktpositie = arbeids + markt + positie', english: 'position on the labour market', highlight: 'arbeidsmarktpositie' },
            { dutch: 'de beroepsaansprakelijkheidsverzekering = beroeps + aansprakelijkheid + verzekering', english: 'professional liability insurance', highlight: 'beroepsaansprakelijkheidsverzekering' },
            { dutch: 'de vergaderruimte = vergader + ruimte', english: 'meeting room', highlight: 'vergaderruimte' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'het werkgever', correct: 'de werkgever', explanation: '"Gever" (giver) is a de-word, so "werkgever" is also de-word.' },
            { incorrect: 'een werk plek', correct: 'een werkplek', explanation: 'Dutch compounds are written as ONE word, without a space.' },
            { incorrect: 'kantoor-gebouw', correct: 'kantoorgebouw', explanation: 'Dutch compounds do not use hyphens (except in a few specific cases). Write as one word.' },
          ],
        },
      ],
    },
    {
      id: 'word-form-4',
      title: 'Word Families and Vocabulary Strategies',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Recognising word families allows you to learn many related words at once.',
          explanation:
            'A "word family" is a group of related words built from the same root. For example, the root "werk" generates many related forms. Learning word families is one of the most efficient vocabulary-building strategies for Dutch learners.',
        },
        {
          type: 'grammar-table',
          title: 'Word family: werk (work)',
          headers: ['Word', 'Type', 'Translation'],
          rows: [
            ['werken', 'verb', 'to work'],
            ['de werker / de werkster', 'noun (agent)', 'worker'],
            ['de werkgever', 'noun (compound)', 'employer'],
            ['de werknemer', 'noun (compound)', 'employee'],
            ['de werkplek', 'noun (compound)', 'workplace'],
            ['de werkloosheid', 'noun (-heid)', 'unemployment'],
            ['werkloos', 'adjective', 'unemployed'],
            ['de werkzaamheden', 'noun (plural)', 'activities / work (formal)'],
            ['samenwerken', 'verb (compound)', 'to collaborate'],
            ['de samenwerking', 'noun (-ing)', 'collaboration'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'Word family: opleiden / opleiding',
          headers: ['Word', 'Type', 'Translation'],
          rows: [
            ['opleiden', 'verb', 'to train / to educate'],
            ['de opleiding', 'noun (-ing)', 'training / education / course'],
            ['de opleidingsmanager', 'compound noun', 'training manager'],
            ['opgeleid', 'adjective (pp)', 'trained / educated'],
            ['goed opgeleid', 'adjective phrase', 'well-educated'],
            ['de opleidingskosten', 'compound noun', 'training costs'],
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Reading a job advertisement',
          examples: [
            { dutch: 'Wij zoeken een goed opgeleide medewerker met relevante werkervaring.', english: 'We are looking for a well-educated employee with relevant work experience.' },
            { dutch: 'Verantwoordelijkheden: het beoordelen van aanvragen en het opstellen van verslagen.', english: 'Responsibilities: assessing applications and drafting reports.' },
            { dutch: 'U bent verantwoordelijk voor de samenwerking met externe partijen.', english: 'You are responsible for collaboration with external parties.' },
          ],
          note: 'Job advertisements in Dutch use many derived and compound words. Understanding word formation makes them much easier to read.',
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'Vocabulary strategy: learn words in families',
          content: 'Instead of learning isolated words, learn them in groups:\n\n1. Look up the root verb or adjective\n2. Find the -ing noun, the agent noun, and any compounds\n3. Note the article (de/het) for each noun\n4. Find an example sentence for each form\n\nExample: vergaderen → vergadering → vergaderruimte → vergaderverslag → vergaderschema',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'word-form-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct derived noun.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the noun derived from "verbeteren" (to improve)?',
            options: ['de verbeter', 'de verbetering', 'het verbeternis', 'de verbeterd'],
            correctIndex: 1,
            explanation: 'Verbs form action nouns with -ing: verbeteren → de verbetering. All -ing nouns are de-words.',
          },
          {
            question: 'Which word means "responsibility" in Dutch?',
            options: ['de verantwoordheid', 'de verantwoordelijkheid', 'het verantwoordelijk', 'de verantwoording'],
            correctIndex: 1,
            explanation: 'The adjective "verantwoordelijk" + -heid = "verantwoordelijkheid". The full adjective form is kept.',
          },
          {
            question: 'What does "onverwacht" mean?',
            options: ['very expected', 'unexpected', 'expected again', 'not yet expected'],
            correctIndex: 1,
            explanation: '"On-" negates the base word. "Verwacht" = expected. "Onverwacht" = unexpected.',
          },
          {
            question: 'What does the prefix "her-" add to a verb?',
            options: ['negation', 'intensification', 'repetition / doing again', 'doing incorrectly'],
            correctIndex: 2,
            explanation: '"Her-" = re- in English. "Herschrijven" = to rewrite, "hergebruiken" = to reuse.',
          },
          {
            question: 'What is the article of "kantoorgebouw"?',
            options: ['de', 'het', 'both de and het', 'no article needed'],
            correctIndex: 1,
            explanation: 'The article of a compound is determined by the LAST element. "Gebouw" is a het-word, so "kantoorgebouw" is also het.',
          },
        ],
      },
    },
    {
      id: 'word-form-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Form the correct word by adding the given suffix or prefix to the base word.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Samenwerken is erg belangrijk. De',
            after: 'met collega\'s gaat goed.',
            correctAnswer: 'samenwerking',
            hint: 'samenwerken + -ing = ?',
            acceptableAnswers: ['samenwerking'],
          },
          {
            before: 'Dit is niet mogelijk. Het is gewoon',
            after: '.',
            correctAnswer: 'onmogelijk',
            hint: 'on- + mogelijk = ?',
            acceptableAnswers: ['onmogelijk'],
          },
          {
            before: 'De directeur is verantwoordelijk. Zijn',
            after: 'is groot.',
            correctAnswer: 'verantwoordelijkheid',
            hint: 'verantwoordelijk + -heid = ?',
            acceptableAnswers: ['verantwoordelijkheid'],
          },
          {
            before: 'Ze hebben het document opnieuw geschreven. Ze hebben het',
            after: '.',
            correctAnswer: 'herschreven',
            hint: 'her- + schrijven (past participle) = ?',
            acceptableAnswers: ['herschreven'],
          },
          {
            before: 'Dit is het',
            after: 'van het bedrijf.',
            correctAnswer: 'jaarverslag',
            hint: 'jaar + verslag = ? (annual report)',
            acceptableAnswers: ['jaarverslag'],
          },
        ],
      },
    },
    {
      id: 'word-form-ex-3',
      type: 'multiple-choice',
      instruction: 'Based on word formation, work out the meaning of the bold word.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De medewerker meldde een misverstand aan de manager.',
            options: [
              'an incorrect understanding / miscommunication',
              'a new understanding',
              'a complete understanding',
              'a repeated understanding',
            ],
            correctIndex: 0,
            explanation: '"Mis-" = done incorrectly. "Verstaan" = to understand. "Misverstand" = misunderstanding.',
          },
          {
            question: 'De veiligheidsmaatregel is verplicht voor alle medewerkers.',
            options: ['safety measure', 'safety manager', 'safety training', 'safety report'],
            correctIndex: 0,
            explanation: '"Veiligheid" (safety) + -s- + "maatregel" (measure) = veiligheidsmaatregel (safety measure).',
          },
          {
            question: 'Het overheidsbeleid wordt elk jaar aangepast.',
            options: ['government policy', 'government building', 'government worker', 'government budget'],
            correctIndex: 0,
            explanation: '"Overheid" (government) + -s- + "beleid" (policy) = overheidsbeleid (government policy).',
          },
          {
            question: 'De opleidingskosten worden vergoed door de werkgever.',
            options: ['training costs', 'training manager', 'training schedule', 'training certificate'],
            correctIndex: 0,
            explanation: '"Opleiding" (training) + -s- + "kosten" (costs) = opleidingskosten (training costs).',
          },
        ],
      },
    },
    {
      id: 'word-form-ex-4',
      type: 'error-correction',
      instruction: 'Find and correct the error in each sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'De werk plek moet netjes en schoon zijn.',
            correctedSentence: 'De werkplek moet netjes en schoon zijn.',
            errorExplanation: 'Dutch compound words are written as one word without a space.',
          },
          {
            incorrectSentence: 'Ze heeft veel verantwoordheid in haar functie.',
            correctedSentence: 'Ze heeft veel verantwoordelijkheid in haar functie.',
            errorExplanation: 'The full adjective "verantwoordelijk" is used as the base: verantwoordelijk + heid = verantwoordelijkheid.',
          },
          {
            incorrectSentence: 'Het kantoor-gebouw is vernieuwd.',
            correctedSentence: 'Het kantoorgebouw is vernieuwd.',
            errorExplanation: 'Dutch compounds are not hyphenated. Write as one word: kantoorgebouw.',
          },
          {
            incorrectSentence: 'Ik heb het rapport mis-verstaan.',
            correctedSentence: 'Ik heb het rapport misverstaan.',
            errorExplanation: '"Misverstaan" is an inseparable verb. The prefix "mis-" is inseparable — write as one word.',
          },
          {
            incorrectSentence: 'De werker is ziek vandaag.',
            correctedSentence: 'De medewerker is vandaag ziek.',
            errorExplanation: 'In workplace contexts, "medewerker" is preferred. Also, time adverbials come after the subject.',
          },
        ],
      },
    },
    {
      id: 'word-form-ex-5',
      type: 'translation',
      instruction: 'Translate these sentences into Dutch, paying attention to word formation.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The collaboration with the new team is going well.',
            correctDutch: 'De samenwerking met het nieuwe team gaat goed.',
            acceptableAnswers: ['De samenwerking met het nieuwe team gaat goed.'],
          },
          {
            english: 'This problem is completely impossible to solve.',
            correctDutch: 'Dit probleem is totaal onmogelijk op te lossen.',
            acceptableAnswers: ['Dit probleem is totaal onmogelijk op te lossen.', 'Dit probleem is volledig onmogelijk op te lossen.', 'Dit probleem is onmogelijk op te lossen.'],
          },
          {
            english: 'The employer is responsible for the safety of his employees.',
            correctDutch: 'De werkgever is verantwoordelijk voor de veiligheid van zijn medewerkers.',
            acceptableAnswers: ['De werkgever is verantwoordelijk voor de veiligheid van zijn medewerkers.', 'De werkgever is verantwoordelijk voor de veiligheid van zijn werknemers.'],
          },
          {
            english: 'The annual report has been rewritten by the communications department.',
            correctDutch: 'Het jaarverslag is herschreven door de communicatieafdeling.',
            acceptableAnswers: ['Het jaarverslag is herschreven door de communicatieafdeling.', 'Het jaarverslag werd herschreven door de communicatieafdeling.'],
          },
        ],
      },
    },
    {
      id: 'word-form-ex-6',
      type: 'writing-prompt',
      instruction: 'Write 4–5 sentences about your ideal workplace or a recent work experience. Use at least four words formed with the suffixes or prefixes you have learned.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Beschrijf jouw ideale werkplek of een recente werkervaring. Gebruik minstens vier woorden met de achtervoegsels of voorvoegsels die je hebt geleerd.',
        context: 'Think about your workplace experiences. Describe the environment, your colleagues, your responsibilities, and what makes a good workplace.',
        guidelines: [
          'Use at least 4 derived or compound words correctly (e.g. samenwerking, verantwoordelijkheid, werkgever)',
          'Correct article (de/het) for all nouns',
          'Coherent and relevant content',
        ],
        sampleResponse: 'Mijn ideale werkplek is een omgeving waar samenwerking centraal staat. Ik vind het belangrijk dat er een duidelijke communicatie is tussen medewerkers en leidinggevenden. De verantwoordelijkheid voor de werkzaamheden moet eerlijk worden verdeeld. Verbetering van de werkomstandigheden is ook een prioriteit.',
      },
    },
  ],
};
