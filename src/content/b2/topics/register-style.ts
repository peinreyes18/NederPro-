import { Topic } from '@/content/types';

export const registerStyle: Topic = {
  id: 'register-style',
  levelId: 'b2',
  order: 8,
  title: 'Register & Style',
  subtitle: 'Taalregister en stijl',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'rs-1',
      title: 'Formal vs. Informal Register',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Register is the variety of language used in a particular situation. Dutch has a broad spectrum from very informal (spoken, texting) to very formal (official documents, legal texts). B2 requires flexible switching between registers.',
          explanation:
            'The same meaning can be expressed at different register levels. A B2 speaker recognises these differences and deliberately chooses the right register for the context: a complaint email to a company is more formal than a WhatsApp to a friend; a report to management uses different vocabulary than a conversation over lunch. Key differences involve pronoun choice (u vs. jij), vocabulary (verzoeken vs. vragen), and sentence structure (passive vs. active; nominalizations vs. verbs).',
        },
        {
          type: 'grammar-table',
          title: 'Register spectrum: the same message at different levels',
          headers: ['Register', 'Example', 'Features'],
          rows: [
            ['Very informal (texting)', 'hé, wanneer kom je? al lang niks gehoord', 'No capitals, ellipsis, dialect words'],
            ['Informal spoken', 'Hey, wanneer kom jij? Ik heb je al tijden niet gezien.', 'jij, direct question, contractions'],
            ['Neutral written', 'Wanneer kunt u komen? Ik hoor graag van u.', 'u, polite tone, complete sentences'],
            ['Formal written', 'Wij verzoeken u ons te berichten wanneer u beschikbaar bent.', 'wij, verzoeken, infinitive construction'],
            ['Very formal (legal)', 'Wij verzoeken u vriendelijk doch dringend ons zo spoedig mogelijk te informeren.', 'vriendelijk doch dringend, zo spoedig mogelijk'],
          ],
          caption: 'The pronoun choice (jij/jou vs. u) is the single most visible register marker in Dutch.',
        },
        {
          type: 'grammar-table',
          title: 'Informal → formal vocabulary shifts',
          headers: ['Informal', 'Formal / written', 'English'],
          rows: [
            ['vragen', 'verzoeken', 'to ask / request'],
            ['zeggen', 'mededelen / stellen', 'to say / inform'],
            ['sturen', 'toezenden / opsturen', 'to send'],
            ['krijgen', 'ontvangen', 'to receive / get'],
            ['willen', 'wensen / beogen', 'to want / wish / aim to'],
            ['denken', 'menen / zijn van mening dat', 'to think / be of the opinion that'],
            ['laten weten', 'informeren / berichten', 'to let know / inform'],
            ['gebruik maken van', 'aanwenden / benutten', 'to use / make use of'],
          ],
        },
      ],
    },
    {
      id: 'rs-2',
      title: 'Avoiding Repetition: Synonyms and Reference Chains',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Sophisticated writing avoids repeating the same noun or phrase. Dutch writers use synonyms, pronouns, demonstratives, and nominalizations to create reference chains.',
          explanation:
            'Good cohesion means linking ideas through reference without constant repetition. First mention: use a full noun phrase. Subsequent mentions: use a pronoun (dit, dat, deze, die, het, ze, hij), a synonym, a hypernym (broader word), or a nominalization. This technique is called "referentieketen" (reference chain) and is essential for formal writing and the reading comprehension tasks in Staatsexamen NT2.',
        },
        {
          type: 'grammar-table',
          title: 'Reference strategies',
          headers: ['Strategy', 'Example', 'Notes'],
          rows: [
            ['Pronoun', 'Het systeem → het', '"Het" for het-words, "hij" for de-words referring to persons/things', ],
            ['Demonstrative', 'Het voorstel → dit voorstel / dit', '"Dit/deze" for things nearby in text; "dat/die" for more distant'],
            ['Synonym', 'Het programma → de software → het pakket', 'Same referent, different word'],
            ['Hypernym', 'De vergadering → de bijeenkomst → het overleg', 'Broader or parallel term'],
            ['Nominalization', 'We evalueren → de evaluatie', 'Verb → noun for subsequent reference'],
            ['Ellipsis', '"Wie wil er koffie?" "Ik [wil koffie]."', 'Omit repeated elements'],
          ],
          caption: '"Dit/deze" vs. "dat/die": "dit/deze" refers to something just introduced (closer); "dat/die" refers to something mentioned earlier (farther).',
        },
        {
          type: 'examples',
          title: 'Reference chain in a paragraph',
          examples: [
            { dutch: 'Het bedrijf heeft een nieuw beleid geïntroduceerd. Dit beleid richt zich op duurzaamheid. Het is ontworpen om de CO₂-uitstoot te verminderen. Deze maatregel wordt door de medewerkers positief ontvangen.', english: 'The company has introduced a new policy. This policy focuses on sustainability. It is designed to reduce CO₂ emissions. This measure is received positively by employees.', highlight: 'Dit beleid … Het … Deze maatregel' },
          ],
        },
      ],
    },
    {
      id: 'rs-3',
      title: 'Paraphrase and Reformulation',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Paraphrase is the ability to express the same meaning in different words. At B2, this skill is tested in summarising, explaining, and responding to texts.',
          explanation:
            'Reformulation is signalled by phrases like "met andere woorden" (in other words), "dat wil zeggen" (that is to say), "oftewel" (or rather), and "anders gezegd" (put differently). Being able to paraphrase shows command of vocabulary breadth and conceptual flexibility. In formal writing, paraphrase is used to explain technical terms, clarify complex ideas, or rephrase an argument more precisely.',
        },
        {
          type: 'grammar-table',
          title: 'Reformulation signals',
          headers: ['Expression', 'English', 'Context'],
          rows: [
            ['met andere woorden', 'in other words', 'General reformulation'],
            ['dat wil zeggen (d.w.z.)', 'that is to say / i.e.', 'Clarification / definition'],
            ['oftewel', 'or rather / in other words', 'Informal-to-neutral reformulation'],
            ['anders gezegd', 'put differently', 'Restatement from different angle'],
            ['ter verduidelijking', 'for clarification', 'Formal elaboration'],
            ['wat hiermee bedoeld wordt is', 'what is meant by this is', 'Explicit definition'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'Paraphrase strategies',
          headers: ['Original', 'Paraphrase', 'Strategy'],
          rows: [
            ['De maatregel is proportioneel.', 'De maatregel is evenredig aan het probleem.', 'Synonym + elaboration'],
            ['Het project is mislukt.', 'Het project heeft niet de gewenste resultaten opgeleverd.', 'Nominalised restatement'],
            ['Ze weigerde.', 'Ze zag geen mogelijkheid om hieraan deel te nemen.', 'Indirect reformulation'],
            ['Dit is fout.', 'Dit strookt niet met de feiten.', 'Formal equivalent'],
          ],
          caption: 'In the Staatsexamen NT2, paraphrase questions ask you to explain what an underlined term means in context.',
        },
        {
          type: 'workplace-context',
          scenario: 'Formal email correspondence',
          examples: [
            { dutch: 'Wij verzoeken u uw reactie vóór 15 maart aan ons toe te zenden. Met andere woorden: wij ontvangen uw antwoord graag uiterlijk op die datum.', english: 'We ask you to send us your response before 15 March. In other words: we would like to receive your answer by that date at the latest.' },
            { dutch: 'De tijdlijn is aangepast, dat wil zeggen dat de oplevering nu gepland staat voor eind april in plaats van medio maart.', english: 'The timeline has been adjusted, meaning that delivery is now planned for end of April instead of mid-March.' },
          ],
          note: 'Reformulation in formal correspondence prevents misunderstanding and shows thoroughness.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-rs-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the most appropriate formal equivalent.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'Informal: "We willen graag weten wanneer u beschikbaar bent." Formal equivalent:',
            options: [
              'Wij verzoeken u ons te berichten over uw beschikbaarheid.',
              'We willen uw beschikbaarheid weten.',
              'U bent wanneer beschikbaar?',
              'Kunt u zeggen wanneer?',
            ],
            correctIndex: 0,
            explanation: '"Wij verzoeken u … te berichten" replaces "willen weten" with formal "verzoeken + infinitive". "Over uw beschikbaarheid" nominalizes the time question.',
          },
          {
            question: 'Which is the best paraphrase of "De maatregel is evenredig aan het risico"?',
            options: [
              'De maatregel is proportioneel.',
              'De maatregel is gelijk aan het risico.',
              'De maatregel is een risico.',
              'Het risico is groot.',
            ],
            correctIndex: 0,
            explanation: '"Proportioneel" is a direct formal synonym of "evenredig aan" (proportionate to). The other options either change the meaning or are too vague.',
          },
          {
            question: 'The text says "het project leverde niet de beoogde resultaten op". Choose the best reference for the next sentence.',
            options: [
              'Dit resultaat was teleurstellend.',
              'Dit falen had meerdere oorzaken.',
              'Het project was slecht.',
              'Resultaten zijn belangrijk.',
            ],
            correctIndex: 1,
            explanation: '"Dit falen" refers back to the project\'s failure using a nominalization (falen) and a demonstrative (dit). It is concise and cohesive. "Dit resultaat" is also close but less precise since the result itself was absent.',
          },
        ],
      },
    },
    {
      id: 'b2-rs-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the appropriate formal word or expression.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'Wij', after: 'u uw aanvraag vóór 1 april in te dienen.', correctAnswer: 'verzoeken', hint: 'Formal equivalent of "vragen": verzoeken.' },
          { before: 'Het rapport is voltooid. Wij zullen het u zo spoedig mogelijk', after: '.', correctAnswer: 'toezenden', hint: 'Formal equivalent of "sturen": toezenden.' },
          { before: 'De deadline is vervroegd,', after: 'zeggen dat u het formulier voor vrijdag moet inleveren.', correctAnswer: 'dat wil', hint: '"Dat wil zeggen" = that is to say / i.e.' },
          { before: 'Het project is mislukt. Met', after: 'woorden: de doelstellingen zijn niet bereikt.', correctAnswer: 'andere', hint: '"Met andere woorden" = in other words.' },
        ],
      },
    },
    {
      id: 'b2-rs-err-1',
      type: 'error-correction',
      instruction: 'Rewrite the sentence in the appropriate register (formal written Dutch).',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Ik wil graag weten of u mijn e-mail hebt gekregen.',
            correctedSentence: 'Ik verneem graag of u mijn e-mail heeft ontvangen.',
            errorExplanation: '"Gekregen" → formal "ontvangen"; "wil graag weten" → formal "verneem graag" (I would like to learn / hear back).',
          },
          {
            incorrectSentence: 'We denken dat dit een goed plan is.',
            correctedSentence: 'Wij zijn van mening dat dit een doeltreffend plan is.',
            errorExplanation: '"We denken" → "Wij zijn van mening dat" (formal); "goed" → "doeltreffend" (effective/sound — more precise formal word).',
          },
          {
            incorrectSentence: 'Stuur ons asap een reactie.',
            correctedSentence: 'Wij verzoeken u ons zo spoedig mogelijk een reactie toe te sturen.',
            errorExplanation: 'Informal imperative + "asap" are inappropriate in formal Dutch. Use "wij verzoeken u … te + infinitive" and "zo spoedig mogelijk".',
          },
        ],
      },
    },
    {
      id: 'b2-rs-mc-2',
      type: 'multiple-choice',
      instruction: 'Choose the best demonstrative pronoun to create a cohesive reference chain.',
      difficulty: 'guided',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: '"Het bedrijf heeft een nieuw systeem geïntroduceerd. ___ systeem is ontworpen om efficiency te verhogen."',
            options: ['Dat', 'Dit', 'Die', 'Welk'],
            correctIndex: 1,
            explanation: '"Dit systeem" — the system was just introduced (near in the text), so "dit" (this) is the right demonstrative. "Dat" would refer to something more distant.',
          },
          {
            question: '"We bespraken vorige week een voorstel. ___ bleek echter niet haalbaar."',
            options: ['Dit', 'Dat', 'Deze', 'Die'],
            correctIndex: 1,
            explanation: '"Dat" refers back to the proposal mentioned in the previous sentence (more distant reference). "Dit" would suggest the proposal was just mentioned immediately before.',
          },
        ],
      },
    },
    {
      id: 'b2-rs-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a formal complaint or request email (6–8 sentences) about a problem at work or with a service. Use at least three features of formal register.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele klacht- of verzoekmail over een probleem op het werk of met een dienst.',
        context: 'You can choose a real or invented situation: a delayed delivery, a billing error, a request for information, or a request to reschedule.',
        guidelines: [
          'Use "u" throughout (never "jij/je")',
          'Use at least two formal vocabulary items (verzoeken, ontvangen, toezenden, mededelen)',
          'Include a reformulation phrase (met andere woorden, dat wil zeggen)',
          'End with a formal closing: "Wij zien uw reactie met belangstelling tegemoet" or similar',
        ],
        sampleResponse: 'Geachte heer/mevrouw,\n\nWij schrijven u naar aanleiding van de factuur die wij op 10 februari jl. hebben ontvangen. Het bedrag op deze factuur klopt niet met de eerder gemaakte afspraken, dat wil zeggen dat er een bedrag van €500,- teveel in rekening is gebracht.\n\nWij verzoeken u deze fout zo spoedig mogelijk te corrigeren en ons een gecorrigeerde factuur toe te zenden. Met andere woorden: wij verwachten een aangepaste factuur binnen vijf werkdagen.\n\nWij zien uw reactie met belangstelling tegemoet.\n\nMet vriendelijke groet,',
      },
    },
  ],
};
