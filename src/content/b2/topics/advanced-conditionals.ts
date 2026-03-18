import { Topic } from '@/content/types';

export const advancedConditionals: Topic = {
  id: 'advanced-conditionals',
  levelId: 'b2',
  order: 11,
  title: 'Advanced Conditionals',
  subtitle: 'Geavanceerde voorwaardelijke zinnen',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'ac-1',
      title: 'The Three Conditional Types',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch conditionals express three degrees of reality: open (real), hypothetical (unreal present/future), and counterfactual (unreal past). Each uses a distinct tense combination.',
          explanation:
            'Conditional sentences consist of a condition clause (als/indien/mocht) and a result clause. The tense combination signals whether the speaker considers the condition possible, unlikely, or impossible. Getting these right is essential for formal writing, professional communication, and nuanced argumentation at B2 level.',
        },
        {
          type: 'grammar-table',
          title: 'The three conditional types',
          headers: ['Type', 'Condition (als-clause)', 'Result clause', 'Example'],
          rows: [
            ['Open / real', 'Present tense', 'Present / future / imperative', 'Als je hard werkt, krijg je goede resultaten.'],
            ['Hypothetical (unreal present)', 'Imperfectum (zou + inf)', 'Zou + infinitief', 'Als ik meer tijd had, zou ik vaker sporten.'],
            ['Counterfactual (unreal past)', 'Plusquamperfectum', 'Zou + hebben/zijn + pp', 'Als ik het geweten had, zou ik je geholpen hebben.'],
          ],
          caption: 'The key marker of hypothetical and counterfactual conditionals is "zou(den)" in the result clause.',
        },
        {
          type: 'examples',
          title: 'All three types in context',
          examples: [
            {
              dutch: 'Als het regent, neem ik een paraplu mee. (open)',
              english: 'If it rains, I take an umbrella. (genuine possibility)',
              highlight: 'regent / neem',
            },
            {
              dutch: 'Als ik directeur was, zou ik de regels veranderen. (hypothetical)',
              english: 'If I were the director, I would change the rules. (unlikely)',
              highlight: 'was / zou veranderen',
            },
            {
              dutch: 'Als ik het eerder had geweten, zou ik anders hebben gehandeld. (counterfactual)',
              english: 'If I had known earlier, I would have acted differently. (impossible — past is fixed)',
              highlight: 'had geweten / zou hebben gehandeld',
            },
          ],
        },
        {
          type: 'note',
          content: 'In informal spoken Dutch, the imperfectum is sometimes used in the result clause instead of "zou + inf": "Als ik meer tijd had, sportte ik vaker." This is common but considered less precise in formal writing.',
          variant: 'tip',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Als ik meer tijd zou hebben, zou ik vaker sporten.',
              correct: 'Als ik meer tijd had, zou ik vaker sporten.',
              explanation: 'In hypothetical conditionals, the "als"-clause uses imperfectum (had), NOT "zou hebben". "Zou" belongs in the result clause only.',
            },
            {
              incorrect: 'Als ik het zou hebben geweten, zou ik hebben geholpen.',
              correct: 'Als ik het had geweten, zou ik hebben geholpen.',
              explanation: 'In counterfactual conditionals, the "als"-clause uses plusquamperfectum (had geweten), not "zou hebben geweten".',
            },
          ],
        },
      ],
    },
    {
      id: 'ac-2',
      title: 'Conditional Without Als: Inversion and Mocht/Mochten',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch conditionals can be expressed without "als" by inverting the subject and verb, or by using "mocht/mochten" for low-probability or formal conditions.',
          explanation:
            'When "als" is omitted, the conditional clause begins directly with the finite verb: "Werkt hij hard, dan krijgt hij het. / Zou hij hard werken, dan zou hij het krijgen." This inversion style is common in formal, journalistic, and literary Dutch. "Mocht/Mochten + infinitive" expresses a low-probability condition and is typical of formal and official language (letters, contracts, policy documents).',
        },
        {
          type: 'grammar-table',
          title: 'Conditional without "als"',
          headers: ['Type', 'Structure', 'Example'],
          rows: [
            ['Open (inverted)', 'Verb + subject + …', 'Werkt hij hard, dan slaagt hij.'],
            ['Hypothetical (inverted)', 'Zou + subject + inf + …', 'Zou hij harder werken, dan zou hij slagen.'],
            ['Counterfactual (inverted)', 'Had + subject + pp + …', 'Had hij harder gewerkt, dan zou hij geslaagd zijn.'],
            ['Formal low probability', 'Mocht/Mochten + subject + inf', 'Mocht u vragen hebben, dan kunt u ons bereiken.'],
            ['Formal low probability (plural)', 'Mochten + subject + inf', 'Mochten er problemen zijn, dan horen wij dat graag.'],
          ],
          caption: '"Dan" in the result clause is optional but common when the condition clause comes first.',
        },
        {
          type: 'examples',
          title: 'Formal vs. informal equivalents',
          examples: [
            {
              dutch: 'Informeel: Als u vragen heeft, kunt u ons bellen.',
              english: 'If you have questions, you can call us.',
              highlight: 'Als',
            },
            {
              dutch: 'Formeel: Mocht u vragen hebben, dan kunt u ons bereiken via het onderstaande nummer.',
              english: 'Should you have any questions, you can reach us at the number below.',
              highlight: 'Mocht',
            },
            {
              dutch: 'Literair/formeel: Had men eerder ingegrepen, dan was de schade beperkt gebleven.',
              english: 'Had one intervened earlier, the damage would have remained limited.',
              highlight: 'Had men',
            },
          ],
        },
        {
          type: 'note',
          content: '"Mocht" / "Mochten" (from "mogen") is used almost exclusively in formal writing — business letters, legal documents, policy texts. In everyday speech, "als" + present is preferred.',
          variant: 'tip',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Zou hij werkt harder, hij zou slagen.',
              correct: 'Zou hij harder werken, dan zou hij slagen.',
              explanation: 'In the inverted hypothetical conditional, "zou + subject + infinitive" is the structure: the main verb must be an infinitive, not a conjugated form.',
            },
            {
              incorrect: 'Mocht u vragen heeft, bel ons.',
              correct: 'Mocht u vragen hebben, bel ons dan.',
              explanation: '"Mocht" is followed by a subject and an infinitive (hebben), not a conjugated verb (heeft).',
            },
          ],
        },
      ],
    },
    {
      id: 'ac-3',
      title: 'Mixed Conditionals and Nuance',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Mixed conditionals combine a counterfactual past condition with a present result, or a hypothetical present condition with a past result, to express complex temporal relationships.',
          explanation:
            'Sometimes the time frame of the condition and the result differ. In English: "If I had studied medicine, I would be a doctor now." Dutch handles this the same way: the condition uses the tense appropriate to its time frame and the result uses the tense appropriate to its time frame. These mixed conditionals are common in sophisticated argumentation and reflect nuanced thinking.',
        },
        {
          type: 'grammar-table',
          title: 'Mixed conditional patterns',
          headers: ['Pattern', 'Condition clause', 'Result clause', 'Example'],
          rows: [
            ['Past condition → present result', 'Plusquamperfectum (als ik X had gedaan)', 'Zou + infinitief (nu)', 'Als ik geneeskunde had gestudeerd, zou ik nu arts zijn.'],
            ['Present condition → past result', 'Imperfectum (als ik X was/had)', 'Zou + hebben/zijn + pp', 'Als ik meer ambitie had, zou ik destijds anders hebben gekozen.'],
            ['Habitual condition → present result', 'Als + tegenwoordige tijd', 'Tegenwoordige tijd / zou', 'Als je altijd eerlijk bent, heb je niets te verbergen.'],
          ],
          caption: 'The key is to identify the time frame of each clause independently and apply the correct tense to each.',
        },
        {
          type: 'examples',
          title: 'Mixed conditionals in context',
          examples: [
            {
              dutch: 'Als ik als kind meer had geoefend, zou ik nu professioneel muzikant zijn.',
              english: 'If I had practised more as a child, I would be a professional musician now.',
              highlight: 'had geoefend / zou zijn',
            },
            {
              dutch: 'Als hij meer zelfvertrouwen had, zou hij destijds voor de baan hebben gesolliciteerd.',
              english: 'If he had more self-confidence (now/generally), he would have applied for the job back then.',
              highlight: 'had / zou hebben gesolliciteerd',
            },
            {
              dutch: 'Mocht dit in het verleden anders zijn besloten, dan stonden we nu ergens anders.',
              english: 'Should this have been decided differently in the past, we would now be in a different position.',
              highlight: 'zijn besloten / stonden we',
            },
          ],
        },
        {
          type: 'grammar-table',
          title: 'Conditional with "tenzij", "op voorwaarde dat", "mits"',
          headers: ['Connector', 'Meaning', 'Register', 'Example'],
          rows: [
            ['tenzij', 'unless', 'neutral', 'Ik kom, tenzij het regent.'],
            ['op voorwaarde dat', 'on the condition that', 'formal', 'We stemmen in, op voorwaarde dat de kosten worden gedekt.'],
            ['mits', 'provided that / as long as', 'formal/neutral', 'Je mag gaan, mits je op tijd terug bent.'],
            ['zolang', 'as long as', 'neutral', 'Zolang je je best doet, is er niets aan de hand.'],
            ['indien', 'if (formal)', 'formal/legal', 'Indien u niet reageert, vervalt de aanbieding.'],
          ],
          caption: '"Indien" is the formal equivalent of "als" — common in legal texts, official letters, and policy documents.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            {
              incorrect: 'Als ik nu zou zijn arts, zou ik in het ziekenhuis werken.',
              correct: 'Als ik nu arts was, zou ik in het ziekenhuis werken.',
              explanation: 'For hypothetical present conditions, use imperfectum (was) in the condition clause — not "zou zijn".',
            },
            {
              incorrect: 'Tenzij als het regent, ga ik.',
              correct: 'Tenzij het regent, ga ik.',
              explanation: '"Tenzij" already means "unless/if not". Do not add "als" — it is redundant.',
            },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-ac-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the correct conditional construction.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Als ik meer geld ___, zou ik een huis kopen. (hypothetical)',
            options: ['had', 'zou hebben', 'heb', 'zal hebben'],
            correctIndex: 0,
            explanation: 'In the "als"-clause of a hypothetical conditional, use imperfectum (had), NOT "zou hebben".',
          },
          {
            question: 'Als ze eerder ___ had ingediend, had ze de deadline gehaald. (counterfactual)',
            options: ['het rapport', 'had het rapport', 'zou het rapport', 'het rapport zou'],
            correctIndex: 0,
            explanation: 'Counterfactual condition: "Als ze het rapport eerder had ingediend" — the subject and object follow normally after "als".',
          },
          {
            question: 'Which is the correct formal equivalent of "Als u vragen heeft, kunt u bellen."?',
            options: [
              'Mocht u vragen hebben, dan kunt u ons bellen.',
              'Mocht u vragen heeft, dan kunt u ons bellen.',
              'Zou u vragen hebben, dan kunt u ons bellen.',
              'Als u vragen zou hebben, dan kunt u bellen.',
            ],
            correctIndex: 0,
            explanation: '"Mocht + subject + infinitive (hebben)" is the correct formal low-probability conditional.',
          },
        ],
      },
    },
    {
      id: 'b2-ac-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Complete the conditional sentence with the correct verb form.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'Als ik toen beter',
            after: 'had nagedacht, zou ik die fout niet hebben gemaakt.',
            correctAnswer: 'had',
            hint: 'Counterfactual: plusquamperfectum in the als-clause.',
          },
          {
            before: 'Als hij meer zelfvertrouwen',
            after: ', zou hij de presentatie beter hebben gehouden.',
            correctAnswer: 'had gehad',
            hint: 'Mixed conditional: past result from a present condition — use plusquamperfectum for "more self-confidence back then".',
          },
          {
            before: 'Ik ga mee,',
            after: 'het te druk wordt.',
            correctAnswer: 'tenzij',
            hint: '"Unless" = tenzij.',
          },
          {
            before: 'We stemmen in,',
            after: 'dat alle kosten worden vergoed.',
            correctAnswer: 'op voorwaarde',
            hint: '"On the condition that" = op voorwaarde dat.',
          },
        ],
      },
    },
    {
      id: 'b2-ac-err-1',
      type: 'error-correction',
      instruction: 'Correct the error in the conditional sentence.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Als ik zou meer geld hebben, zou ik een reis maken.',
            correctedSentence: 'Als ik meer geld had, zou ik een reis maken.',
            errorExplanation: 'In the hypothetical "als"-clause, use imperfectum (had) — NOT "zou hebben". "Zou" only appears in the result clause.',
          },
          {
            incorrectSentence: 'Had hij harder gewerkt zou hij zijn geslaagd.',
            correctedSentence: 'Had hij harder gewerkt, dan zou hij geslaagd zijn.',
            errorExplanation: 'In inverted counterfactual conditionals, a comma separates the condition from the result, and "dan" is typically added. The past participle "geslaagd" comes before the auxiliary "zijn".',
          },
          {
            incorrectSentence: 'Tenzij als je het formulier opstuurt, kunnen we niet verder.',
            correctedSentence: 'Tenzij je het formulier opstuurt, kunnen we niet verder.',
            errorExplanation: '"Tenzij" (unless) already implies the conditional. Adding "als" is redundant.',
          },
          {
            incorrectSentence: 'Mocht u vragen heeft, contacteer ons.',
            correctedSentence: 'Mocht u vragen hebben, neem dan contact met ons op.',
            errorExplanation: '"Mocht" requires an infinitive (hebben), not a conjugated verb (heeft).',
          },
        ],
      },
    },
    {
      id: 'b2-ac-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using the indicated conditional type.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'If the budget had been approved, we would have started the project last month. (counterfactual)',
            correctDutch: 'Als het budget was goedgekeurd, hadden we vorige maand met het project begonnen.',
            acceptableAnswers: [
              'Als het budget goedgekeurd was, zouden we vorige maand met het project zijn begonnen.',
              'Was het budget goedgekeurd, dan hadden we vorige maand met het project begonnen.',
            ],
            keyVocabulary: [
              { dutch: 'goedkeuren', english: 'to approve' },
              { dutch: 'beginnen met', english: 'to start (on)' },
            ],
          },
          {
            english: 'Should you require further information, please do not hesitate to contact us. (formal: mocht)',
            correctDutch: 'Mocht u nadere informatie nodig hebben, aarzel dan niet om contact met ons op te nemen.',
            acceptableAnswers: ['Mocht u meer informatie wensen, neem dan gerust contact met ons op.'],
            keyVocabulary: [
              { dutch: 'nadere informatie', english: 'further information' },
              { dutch: 'aarzel niet', english: 'do not hesitate' },
            ],
          },
          {
            english: 'If I had studied harder, I would be in a better position now. (mixed conditional)',
            correctDutch: 'Als ik harder had gestudeerd, zou ik nu in een betere positie zijn.',
            acceptableAnswers: ['Had ik harder gestudeerd, dan zou ik nu beter af zijn.'],
            keyVocabulary: [
              { dutch: 'beter af zijn', english: 'to be better off' },
              { dutch: 'positie', english: 'position' },
            ],
          },
        ],
      },
    },
    {
      id: 'b2-ac-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a conditional sentence.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['zou', 'Als', 'ik', 'had', 'meer', 'tijd', 'ik', 'vaker', 'sporten'],
            correctOrder: ['Als', 'ik', 'meer', 'tijd', 'had', 'zou', 'ik', 'vaker', 'sporten'],
            translation: 'If I had more time, I would exercise more often.',
          },
          {
            shuffledWords: ['hebben', 'Mocht', 'u', 'vragen', 'dan', 'ons', 'bellen', 'kunt', 'u'],
            correctOrder: ['Mocht', 'u', 'vragen', 'hebben', 'dan', 'kunt', 'u', 'ons', 'bellen'],
            translation: 'Should you have questions, you can call us.',
          },
          {
            shuffledWords: ['zijn', 'geslaagd', 'gewerkt', 'harder', 'hij', 'zou', 'Had', 'hij'],
            correctOrder: ['Had', 'hij', 'harder', 'gewerkt', 'zou', 'hij', 'geslaagd', 'zijn'],
            translation: 'Had he worked harder, he would have passed.',
          },
        ],
      },
    },
    {
      id: 'b2-ac-rc-1',
      type: 'reading-comprehension',
      instruction: 'Read the text and answer the questions about conditional structures.',
      difficulty: 'guided',
      content: {
        type: 'reading-comprehension',
        passage: 'In de beleidsnota staat het volgende: "Mochten de doelstellingen niet worden gehaald, dan zullen aanvullende maatregelen worden overwogen. Had men eerder geïnvesteerd in preventie, dan was de huidige situatie minder ernstig geweest. Wij zijn ervan overtuigd dat, als het beleid tijdig wordt bijgesteld, de resultaten de komende jaren aanzienlijk zullen verbeteren. Op voorwaarde dat alle partijen samenwerken, is een positieve uitkomst zeker mogelijk."',
        questions: [
          {
            question: '"Mochten de doelstellingen niet worden gehaald" — what does "mochten" signal here?',
            options: [
              'A formal, low-probability conditional (should the targets not be met)',
              'Permission (the targets are allowed not to be met)',
              'A counterfactual (the targets were not met)',
              'A past habitual action',
            ],
            correctAnswer: 'A formal, low-probability conditional (should the targets not be met)',
            explanation: '"Mochten + infinitive" is the formal conditional expressing low probability — typical of policy documents and official letters.',
          },
          {
            question: '"Had men eerder geïnvesteerd … dan was de huidige situatie minder ernstig geweest." — What type of conditional is this?',
            options: [
              'Counterfactual (unreal past) — inverted without "als"',
              'Hypothetical (unreal present)',
              'Open (real) conditional',
              'Mixed conditional',
            ],
            correctAnswer: 'Counterfactual (unreal past) — inverted without "als"',
            explanation: 'Inverted counterfactual: "Had + subject + pp" in the condition; "zou/was + pp + zijn/hebben" in the result. No "als" is used.',
          },
          {
            question: '"Op voorwaarde dat alle partijen samenwerken, is een positieve uitkomst zeker mogelijk." — What does "op voorwaarde dat" mean?',
            options: [
              'On the condition that / provided that',
              'Unless',
              'As long as (time)',
              'Despite the fact that',
            ],
            correctAnswer: 'On the condition that / provided that',
            explanation: '"Op voorwaarde dat" = on the condition that. It is the formal equivalent of "als" in conditional sentences, expressing a prerequisite.',
          },
        ],
      },
    },
    {
      id: 'b2-ac-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a short policy recommendation (5–7 sentences) using at least one of each conditional type: open, hypothetical, and counterfactual. Include at least one formal connector (mocht, indien, mits, op voorwaarde dat).',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een korte beleidsaanbeveling over een maatschappelijk thema naar keuze (bijv. klimaat, onderwijs, gezondheidszorg, huisvesting).',
        context: 'Use all three conditional types. Include at least one formal connector (mocht, indien, mits, op voorwaarde dat). Vary between "als"-clauses and inverted conditionals.',
        guidelines: [
          'Include one open conditional (real possibility)',
          'Include one hypothetical conditional (zou + inf)',
          'Include one counterfactual conditional (had + pp / zou hebben + pp)',
          'Use at least one formal conditional connector',
          'Keep the text coherent and policy-appropriate in register',
        ],
        sampleResponse: 'Als we nu investeren in duurzame energie, zullen de kosten op lange termijn aanzienlijk dalen. Mochten de huidige subsidies worden stopgezet, dan zou de transitie aanzienlijk trager verlopen. Had men tien jaar geleden al strengere normen ingevoerd, dan waren we nu verder gevorderd. Wij adviseren dan ook dat het beleid wordt aangescherpt, op voorwaarde dat de industrie voldoende ondersteuning ontvangt. Indien alle partijen deze aanbevelingen opvolgen, is een klimaatneutrale economie in 2050 zeker haalbaar.',
      },
    },
  ],
};
