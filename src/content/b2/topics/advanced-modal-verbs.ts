import { Topic } from '@/content/types';

export const advancedModalVerbs: Topic = {
  id: 'advanced-modal-verbs',
  levelId: 'b2',
  order: 3,
  title: 'Advanced Modal Verbs',
  subtitle: 'Geavanceerde modale werkwoorden',
  estimatedMinutes: 60,
  lessons: [
    {
      id: 'amv-1',
      title: 'Subtle Distinctions: moeten, mogen, kunnen, hoeven',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'At B2 level, the key challenge is the subtle semantic overlap between modals — especially moeten vs. hoeven (te), and mogen vs. kunnen.',
          explanation:
            'Learners often confuse "moeten" and "hoeven": "hoeven te" is the negation partner of "moeten" in Dutch. When "moeten" is negated, it typically shifts meaning to "may not" (prohibition), so Dutch uses "niet hoeven te" for "need not / don\'t have to". Similarly, "mogen" (permission) and "kunnen" (possibility) overlap in polite requests. Mastering these distinctions is a hallmark of advanced proficiency.',
        },
        {
          type: 'grammar-table',
          title: 'moeten vs. hoeven te',
          headers: ['Meaning', 'Dutch', 'Notes'],
          rows: [
            ['You must do it', 'Je moet het doen.', 'Obligation'],
            ['You must not do it', 'Je mag het niet doen.', 'Prohibition — NOT "moet niet"'],
            ['You don\'t have to do it', 'Je hoeft het niet te doen.', '"hoeven te" + negation = need not'],
            ['I must (inferred necessity)', 'Het moet haast wel fout zijn.', 'Epistemic moeten = it must be'],
            ['I must (strong obligation)', 'Ik moet dit vandaag afmaken.', 'Deontic moeten = I have to'],
          ],
          caption: '"Moet niet" means prohibition (must not), NOT "need not". For "need not" use "hoeft niet te".',
        },
        {
          type: 'grammar-table',
          title: 'mogen vs. kunnen in requests',
          headers: ['Situation', 'Dutch', 'Nuance'],
          rows: [
            ['Polite request (permission)', 'Mag ik het raam openen?', '"Mogen" asks for permission'],
            ['Polite request (possibility)', 'Kan ik u ergens mee helpen?', '"Kunnen" asks if it is possible'],
            ['Very formal request', 'Zou ik het raam mogen openen?', 'Conditional adds extra politeness'],
            ['Permission granted', 'U mag binnenkomen.', 'Permission from authority'],
            ['Possibility stated', 'U kunt hier parkeren.', 'It is possible to park here'],
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Je moet dit niet doen als je niet wilt.', correct: 'Je hoeft dit niet te doen als je niet wilt.', explanation: '"Moet niet" = prohibition (must not). "Hoeft niet te" = has no obligation (need not). These have opposite meanings.' },
            { incorrect: 'Ik kan niet spreken op dit moment.', correct: 'Ik kan nu even niet spreken.', explanation: 'Grammatically fine, but natural Dutch typically adds "even" and restructures for conversational contexts.' },
          ],
        },
      ],
    },
    {
      id: 'amv-2',
      title: 'Epistemic vs. Deontic Modality',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Modal verbs in Dutch carry two distinct meanings: deontic (obligation/permission) and epistemic (inference/probability). Context determines which reading applies.',
          explanation:
            'Deontic modality expresses what is allowed or required: "Je moet dit invullen" (You must fill this in — it is required). Epistemic modality expresses the speaker\'s assessment of likelihood: "Dit moet de beste oplossing zijn" (This must be the best solution — I infer it is). The same verb can carry either meaning; sentence context and intonation distinguish them.',
        },
        {
          type: 'grammar-table',
          title: 'Deontic vs. epistemic readings',
          headers: ['Modal', 'Deontic reading', 'Epistemic reading'],
          rows: [
            ['moeten', 'Je moet op tijd zijn. (must = obligation)', 'Hij moet ziek zijn. (must = I infer)'],
            ['kunnen', 'Je kunt hier parkeren. (may = allowed)', 'Dat kan niet kloppen. (can = it\'s possible)'],
            ['mogen', 'Je mag gaan. (may = permitted)', 'Dat mag dan zo zijn... (granted that)'],
            ['zullen', 'Je zult dit doen! (will = command)', 'Hij zal het wel weten. (will = probably)'],
            ['zouden', 'Zou jij dit willen doen? (polite request)', 'Dat zou de oorzaak kunnen zijn. (might be)'],
          ],
          caption: 'Epistemic modality is especially common in academic and analytical writing.',
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'Ze is om 8 uur weggegaan, dus ze moet nu al thuis zijn.', english: 'She left at 8, so she must be home by now. (epistemic)', highlight: 'moet … zijn' },
            { dutch: 'Je moet het formulier voor vrijdag inleveren.', english: 'You must submit the form before Friday. (deontic)', highlight: 'moet … inleveren' },
            { dutch: 'Dat zal wel kloppen.', english: 'That is probably correct. (epistemic)', highlight: 'zal wel' },
          ],
        },
      ],
    },
    {
      id: 'amv-4',
      title: 'Modal Verbs in the Past: Conditional and Reported Contexts',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Modal verbs in the past express what was required, permitted, or inferred at a previous time, and are essential for reported speech, hypotheticals, and formal narrative.',
          explanation:
            'The past tense of Dutch modals uses the imperfectum (moest, mocht, kon, wilde, zou) or a perfect construction with a modal infinitive (heeft moeten, had kunnen, zou hebben). At B2, the key challenge is distinguishing "moest" (was obliged to — and did it) from "had moeten" (should have — but did not). Similarly, "kon" (was able to) vs. "had kunnen" (could have, but didn\'t). These distinctions matter in business writing, formal reports, and formal complaints.',
        },
        {
          type: 'grammar-table',
          title: 'Past modals: simple vs. perfect',
          headers: ['Form', 'Meaning', 'Example', 'Implication'],
          rows: [
            ['moest + inf', 'was obliged to (did it)', 'Ik moest het rapport afmaken.', 'I had to — and I did.'],
            ['had moeten + inf', 'should have (didn\'t)', 'Ik had het rapport eerder moeten afmaken.', 'I should have — but I didn\'t.'],
            ['kon + inf', 'was able to (neutral)', 'Ze kon de vergadering bijwonen.', 'She was able to attend.'],
            ['had kunnen + inf', 'could have (but didn\'t)', 'Ze had de vergadering bij kunnen wonen.', 'She could have attended — but didn\'t.'],
            ['mocht + inf', 'was permitted to (past)', 'Hij mocht vroeg vertrekken.', 'He was allowed to leave early.'],
            ['had mogen + inf', 'should have been allowed / ought to', 'Dit had niet mogen gebeuren.', 'This should not have been allowed to happen.'],
            ['zou + inf', 'was supposed to / would', 'Ze zou om 9 uur komen.', 'She was supposed to come at 9.'],
            ['zou hebben + inf', 'would have (counterfactual)', 'Ze zou het gedaan hebben als ze tijd had gehad.', 'She would have done it if she had had time.'],
          ],
          caption: 'The perfect modal construction (had + modal infinitive) always implies the action did NOT happen.',
        },
        {
          type: 'examples',
          title: 'In formal context',
          examples: [
            { dutch: 'Het project had eerder afgerond moeten worden — de vertraging had vermeden kunnen worden.', english: 'The project should have been completed earlier — the delay could have been avoided.', highlight: 'had moeten worden … had kunnen worden' },
            { dutch: 'Ze zou de klant informeren, maar heeft dat niet gedaan.', english: 'She was supposed to inform the client, but she did not.', highlight: 'zou … informeren' },
            { dutch: 'Dit had niet mogen gebeuren onder de geldende regelgeving.', english: 'This should not have been allowed to happen under the applicable regulations.', highlight: 'had niet mogen gebeuren' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik moest het eerder doen maar heb het niet gedaan.', correct: 'Ik had het eerder moeten doen.', explanation: '"Moest" implies the obligation was fulfilled. To express a missed obligation (should have but didn\'t), use "had moeten + infinitive".' },
            { incorrect: 'Ze kon de fout vermijden maar deed dat niet.', correct: 'Ze had de fout kunnen vermijden.', explanation: '"Kon" is neutral past ability. "Had kunnen" specifically implies the action was possible but was not taken.' },
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Formal incident reports and project evaluations',
          examples: [
            { dutch: 'In de evaluatie werd vastgesteld dat de risico\'s eerder gesignaleerd hadden moeten worden.', english: 'The evaluation established that the risks should have been identified earlier.' },
            { dutch: 'De leverancier zou de goederen op dinsdag leveren, maar heeft de afspraak niet nagekomen.', english: 'The supplier was supposed to deliver the goods on Tuesday but did not honour the agreement.' },
          ],
          note: '"Had moeten" and "had kunnen" are the backbone of formal complaint letters, audit reports, and incident evaluations in Dutch.',
        },
      ],
    },
    {
      id: 'amv-3',
      title: 'Aspectual Verbs: gaan, komen, blijven, blijken, schijnen',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch has a group of verbs that combine with an infinitive to express aspect or evidentiality, similar to modal verbs in function.',
          explanation:
            '"Blijken" (to turn out) and "schijnen" (to seem/apparently) express evidentiality — how the speaker learned a fact. "Blijven" (to keep on), "gaan" (to go and do), and "komen" (to come and do) express aspect — whether an action continues, begins, or is completed. These verbs behave like modals: they govern a bare infinitive (gaan, blijven, komen) or an infinitive with "te" (blijken te, schijnen te).',
        },
        {
          type: 'grammar-table',
          title: 'Aspectual and evidential verbs',
          headers: ['Verb', 'Function', 'Example', 'English'],
          rows: [
            ['blijken te', 'evidential (turns out)', 'Het blijkt te werken.', 'It turns out to work.'],
            ['schijnen te', 'evidential (apparently)', 'Hij schijnt ziek te zijn.', 'He apparently is ill.'],
            ['blijven + inf', 'continuative (keep -ing)', 'Ze blijft oefenen.', 'She keeps practising.'],
            ['gaan + inf', 'inceptive (going to)', 'Ik ga beginnen.', 'I am going to start.'],
            ['komen + inf', 'movement + action', 'Hij komt helpen.', 'He is coming to help.'],
            ['staan te / zitten te / lopen te', 'progressive aspect', 'Ze staat te bellen.', 'She is on the phone (standing).'],
          ],
          caption: '"Blijken te" and "schijnen te" require "te" before the infinitive; "blijven", "gaan", "komen" do not.',
        },
        {
          type: 'examples',
          title: 'In context',
          examples: [
            { dutch: 'De nieuwe aanpak blijkt effectiever te zijn dan verwacht.', english: 'The new approach turns out to be more effective than expected.', highlight: 'blijkt … te zijn' },
            { dutch: 'Hij schijnt al jaren in Nederland te wonen.', english: 'He apparently has been living in the Netherlands for years.', highlight: 'schijnt … te wonen' },
            { dutch: 'Ze blijft maar vragen stellen, ook als ze het al weet.', english: 'She keeps asking questions, even when she already knows.', highlight: 'blijft … stellen' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Het blijkt werken.', correct: 'Het blijkt te werken.', explanation: '"Blijken" requires "te" before the infinitive: blijkt te werken.' },
            { incorrect: 'Ik ga te beginnen.', correct: 'Ik ga beginnen.', explanation: '"Gaan" takes a bare infinitive — no "te".' },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-amv-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct modal verb or construction.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Je ___ dit formulier niet invullen als je al geregistreerd bent. (don\'t have to)',
            options: ['moet … niet', 'hoeft … niet te', 'mag … niet', 'kunt … niet'],
            correctIndex: 1,
            explanation: '"Hoeft niet te" expresses lack of obligation (don\'t have to). "Moet niet" = must not (prohibition). "Mag niet" = may not (prohibition). "Kunt niet" = cannot (incapability).',
          },
          {
            question: 'De vergadering ___ al begonnen zijn — het is al half tien. (must = epistemic)',
            options: ['moet', 'mag', 'kan', 'hoeft'],
            correctIndex: 0,
            explanation: 'Epistemic "moeten" expresses logical inference: "moet al begonnen zijn" = it must have already started (I infer it has).',
          },
          {
            question: 'De nieuwe methode ___ effectiever te zijn dan de oude. (turns out)',
            options: ['schijnt', 'blijkt', 'gaat', 'blijft'],
            correctIndex: 1,
            explanation: '"Blijkt te zijn" = turns out to be (evidential: the speaker has evidence). "Schijnt te zijn" means "apparently is" (hearsay). "Gaat zijn" = is going to be. "Blijft zijn" = remains.',
          },
        ],
      },
    },
    {
      id: 'b2-amv-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct form of the modal or aspectual verb.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Je', after: 'morgen niet te komen — we sturen je de notulen per e-mail.', correctAnswer: 'hoeft', hint: '"Don\'t have to come" → hoeft … niet te komen.' },
          { before: 'Het systeem', after: 'goed te functioneren na de update.', correctAnswer: 'blijkt', hint: '"Turns out to function" → blijkt te functioneren.' },
          { before: 'Ze', after: 'maar doorwerken, ook al is het al laat.', correctAnswer: 'blijft', hint: '"Keeps working" → blijft + bare infinitive.' },
          { before: 'Dat', after: 'de reden voor de vertraging zijn.', correctAnswer: 'zou', hint: 'Epistemic possibility: zou kunnen zijn or zou … zijn.' },
        ],
      },
    },
    {
      id: 'b2-amv-err-1',
      type: 'error-correction',
      instruction: 'Correct the modal verb error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Je moet dit niet doen als je moe bent — het is niet verplicht.',
            correctedSentence: 'Je hoeft dit niet te doen als je moe bent — het is niet verplicht.',
            errorExplanation: '"Moet niet" means prohibition (must not), but the context says it is not required (not obligatory). Use "hoeft niet te" for lack of obligation.',
          },
          {
            incorrectSentence: 'Het blijkt werken beter dan verwacht.',
            correctedSentence: 'Het blijkt beter te werken dan verwacht.',
            errorExplanation: '"Blijken" requires "te" before the infinitive. Also, the word order should be: blijkt beter te werken (adverb before infinitive group).',
          },
          {
            incorrectSentence: 'Hij schijnt te ziek zijn.',
            correctedSentence: 'Hij schijnt ziek te zijn.',
            errorExplanation: '"Te" comes directly before the infinitive: "ziek te zijn", not "te ziek zijn". The adjective stays before "te".',
          },
        ],
      },
    },
    {
      id: 'b2-amv-mc-2',
      type: 'multiple-choice',
      instruction: 'Identify whether the modal is used epistemically (inference) or deontically (obligation/permission).',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Ze zal het wel weten — ze werkt al tien jaar in deze sector."',
            options: ['Deontic (obligation/permission)', 'Epistemic (inference/probability)'],
            correctIndex: 1,
            explanation: '"Zal wel weten" = she probably knows. This is an epistemic inference based on her experience, not an obligation.',
          },
          {
            question: '"Je zult dit rapport voor maandag inleveren!"',
            options: ['Deontic (obligation/permission)', 'Epistemic (inference/probability)'],
            correctIndex: 0,
            explanation: '"Zult … inleveren" here expresses a strong command or obligation — deontic use of "zullen".',
          },
          {
            question: '"Dat kan niet kloppen — de cijfers zijn verkeerd."',
            options: ['Deontic (obligation/permission)', 'Epistemic (inference/probability)'],
            correctIndex: 1,
            explanation: '"Kan niet kloppen" = it is not possible that it is correct / it cannot be right. This is an epistemic assessment of probability.',
          },
        ],
      },
    },
    {
      id: 'b2-amv-mc-3',
      type: 'multiple-choice',
      instruction: 'Choose the correct past modal construction.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'The deadline passed and the report was never submitted. → "Het rapport ___ voor maandag ingediend ___."',
            options: ['moest … worden', 'had … moeten worden ingediend', 'moet … zijn ingediend', 'heeft … moeten worden'],
            correctIndex: 1,
            explanation: '"Had moeten worden ingediend" expresses a past obligation that was not fulfilled (should have been submitted, but wasn\'t). "Moest worden" would imply it was submitted.',
          },
          {
            question: '"Ze ___ eerder bellen — dan hadden we het probleem op tijd kunnen oplossen."',
            options: ['moest', 'had moeten', 'heeft gemoeten', 'zou moeten'],
            correctIndex: 1,
            explanation: '"Had moeten" expresses a past obligation that was not fulfilled — she should have called earlier but didn\'t. "Moest" implies she did call.',
          },
          {
            question: '"De leverancier ___ de goederen gisteren leveren, maar heeft dat niet gedaan."',
            options: ['zou', 'moest', 'kon', 'mocht'],
            correctIndex: 0,
            explanation: '"Zou … leveren" = was supposed to deliver (planned/arranged but not done). This is the standard Dutch way to express a broken commitment.',
          },
        ],
      },
    },
    {
      id: 'b2-amv-fill-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct past modal form.',
      difficulty: 'guided',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Dit', after: 'niet mogen gebeuren. Het is in strijd met de regels.', correctAnswer: 'had', hint: '"Had niet mogen gebeuren" = should not have been allowed to happen.' },
          { before: 'Ze', after: 'de vergadering bij kunnen wonen, maar ze was ziek.', correctAnswer: 'had', hint: '"Had kunnen" = could have (but didn\'t).' },
          { before: 'Het project', after: 'eerder afgerond moeten worden.', correctAnswer: 'had', hint: '"Had moeten worden" = should have been (unfulfilled past obligation).' },
          { before: 'Hij', after: 'ons eerder informeren, maar deed dat niet.', correctAnswer: 'zou', hint: '"Zou … informeren" = was supposed to inform (broken commitment).' },
        ],
      },
    },
    {
      id: 'b2-amv-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['eerder', 'had', 'Dit', 'gemeld', 'moeten', 'worden'],
            correctOrder: ['Dit', 'had', 'eerder', 'gemeld', 'moeten', 'worden'],
            translation: 'This should have been reported earlier.',
          },
          {
            shuffledWords: ['het', 'Ze', 'had', 'kunnen', 'voorkomen', 'probleem'],
            correctOrder: ['Ze', 'had', 'het', 'probleem', 'kunnen', 'voorkomen'],
            translation: 'She could have prevented the problem.',
          },
          {
            shuffledWords: ['om', 'zou', 'Hij', 'uur', 'negen', 'aanwezig', 'zijn'],
            correctOrder: ['Hij', 'zou', 'om', 'negen', 'uur', 'aanwezig', 'zijn'],
            translation: 'He was supposed to be present at nine o\'clock.',
          },
        ],
      },
    },
    {
      id: 'b2-amv-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short formal evaluation paragraph (5–6 sentences) describing what went wrong in a project or process, using past modal constructions.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele evaluatieparagraaf over wat er mis is gegaan in een project of proces.',
        context: 'Think of a real or imagined situation: a delayed project, a miscommunication, a missed deadline, or a procedural error.',
        guidelines: [
          'Use at least one "had moeten" construction (unfulfilled obligation)',
          'Use at least one "had kunnen" construction (missed possibility)',
          'Use "zou … maar" to describe a broken commitment',
          'Keep a formal, impersonal tone (avoid "ik"; prefer passive or "men")',
        ],
        sampleResponse: 'Tijdens de evaluatie van het project is gebleken dat de risico\'s eerder gesignaleerd hadden moeten worden. De projectleider zou de stakeholders maandelijks informeren, maar heeft dit slechts eenmaal gedaan. Hierdoor had een groot deel van de vertraging voorkomen kunnen worden. Bovendien had er eerder een noodplan opgesteld moeten zijn. Deze bevindingen dienen in het volgende project ter harte te worden genomen.',
      },
    },
    {
      id: 'b2-amv-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using the correct modal construction.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'You don\'t have to attend the meeting — it\'s optional.',
            correctDutch: 'Je hoeft de vergadering niet bij te wonen — het is optioneel.',
            acceptableAnswers: ['U hoeft de vergadering niet bij te wonen — het is optioneel.', 'Je hoeft niet naar de vergadering te komen — het is optioneel.'],
            keyVocabulary: [{ dutch: 'hoeft niet te', english: 'need not / don\'t have to' }, { dutch: 'bijwonen', english: 'to attend' }],
          },
          {
            english: 'The new software turns out to be much faster than the old version.',
            correctDutch: 'De nieuwe software blijkt veel sneller te zijn dan de oude versie.',
            acceptableAnswers: ['De nieuwe software blijkt aanzienlijk sneller te zijn dan de oude versie.'],
            keyVocabulary: [{ dutch: 'blijkt te zijn', english: 'turns out to be' }],
          },
          {
            english: 'He apparently has not received the email yet.',
            correctDutch: 'Hij schijnt de e-mail nog niet ontvangen te hebben.',
            acceptableAnswers: ['Hij schijnt de e-mail nog niet te hebben ontvangen.'],
            keyVocabulary: [{ dutch: 'schijnt te hebben', english: 'apparently has' }],
          },
        ],
      },
    },
  ],
};
