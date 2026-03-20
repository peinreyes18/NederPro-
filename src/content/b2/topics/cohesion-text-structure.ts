import { Topic } from '@/content/types';

export const cohesionTextStructure: Topic = {
  id: 'cohesion-text-structure',
  levelId: 'b2',
  order: 13,
  title: 'Cohesion & Text Structure',
  subtitle: 'Samenhang en tekstopbouw',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'cohesion-1',
      title: 'Reference Chains: Pronouns and Substitution',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Cohesion is achieved through reference (pronouns, demonstratives), substitution (replacing a noun with a pro-form), and lexical chains (synonyms, hypernyms). Mastering these creates smooth, professional Dutch text.',
          explanation:
            'In extended Dutch texts, good writers avoid repeating the same noun phrase. They use a variety of reference devices: personal pronouns (hij, zij, het), demonstrative pronouns (deze, dit, die, dat), and substitution forms (dat/dit doen, zo\'n, dezelfde). Tracking these reference chains correctly is essential for both the reading comprehension and the writing components of NT2 Programma II.',
        },
        {
          type: 'grammar-table',
          title: 'Reference devices in Dutch',
          headers: ['Device', 'Form', 'Example'],
          rows: [
            ['Personal pronoun (de-word)', 'hij / zij / hem / haar', 'De minister presenteerde het plan. Hij benadrukte de urgentie.'],
            ['Personal pronoun (het-word)', 'het', 'Het rapport werd gepubliceerd. Het bevatte schokkende conclusies.'],
            ['Demonstrative (near)', 'deze / dit', 'Er zijn twee opties. Deze optie is goedkoper.'],
            ['Demonstrative (far/contrast)', 'die / dat', 'Het eerste plan kostte te veel. Dat plan werd verworpen.'],
            ['Substitution with "zo\'n"', 'zo\'n + noun', 'Een referendum is niet ideaal. Zo\'n stemming kost tijd en geld.'],
            ['Nominalization reference', 'dit/dat/het + abstract noun', 'Ze verhoogden de belastingen. Dit besluit leidde tot protest.'],
            ['Lexical chain (synonym)', 'synonym or related term', 'Het akkoord werd getekend. De overeenkomst treedt in 2025 in werking.'],
          ],
          caption: 'Reference and substitution devices must agree in gender and number with the noun they replace.',
        },
        {
          type: 'examples',
          title: 'Reference chains in a formal text',
          examples: [
            { dutch: 'De regering presenteerde gisteren een nieuw klimaatplan. Het plan omvat vijf maatregelen. Deze zullen de komende tien jaar worden ingevoerd.', english: 'The government presented a new climate plan yesterday. The plan includes five measures. These will be implemented over the next ten years.', highlight: 'Het plan … Deze' },
            { dutch: 'De commissie publiceerde haar rapport. Dit leidde tot veel discussie. Die discussie duurt nog steeds voort.', english: 'The committee published its report. This led to much debate. That debate is still ongoing.', highlight: 'Dit … Die discussie' },
          ],
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Het bedrijf groeide snel. Hij investeerde in nieuwe technologie.', correct: 'Het bedrijf groeide snel. Het investeerde in nieuwe technologie.', explanation: '"Bedrijf" is a het-word → reference pronoun must be "het", not "hij".' },
            { incorrect: 'De maatregel was omstreden. Dit was een moeilijke beslissing.', correct: 'De maatregel was omstreden. Dit was een moeilijke beslissing. (acceptable) / De maatregel — die was omstreden.', explanation: 'Using "dit" to refer back to a specific noun (de-word) is acceptable when summarising, but "die" is more precise.' },
          ],
        },
      ],
    },
    {
      id: 'cohesion-2',
      title: 'Signpost Language: Structuring Arguments',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Academic and formal Dutch uses signpost language (structuurwoorden) to make the organisation of a text explicit. These signal introduction, addition, contrast, cause, consequence, and conclusion.',
          explanation:
            'Unlike English, Dutch signpost language varies significantly between spoken and written registers. B2 writers must use formal connectors, not conversational ones. The NT2 Programma II writing tasks are assessed partly on how well candidates structure their argument using appropriate linking language.',
        },
        {
          type: 'grammar-table',
          title: 'Signpost language by function',
          headers: ['Function', 'Formal expression', 'Less formal equivalent'],
          rows: [
            ['Introducing a topic', 'In dit stuk wordt ingegaan op… / Centraal staat de vraag…', 'Ik schrijf over…'],
            ['Adding information', 'Bovendien / Tevens / Daarnaast / Voorts', 'Ook / En'],
            ['Contrasting', 'Echter / Desalniettemin / Toch / Integendeel / Anderzijds', 'Maar / Al'],
            ['Cause', 'Aangezien / Doordat / Wegens / Vanwege / Nu', 'Omdat'],
            ['Consequence', 'Derhalve / Bijgevolg / Als gevolg hiervan / Dientengevolge', 'Dus / Daardoor'],
            ['Concession', 'Hoewel / Ofschoon / Ondanks het feit dat', 'Al / Alhoewel'],
            ['Conclusion/summary', 'Kortom / Samenvattend / Concluderend / Al met al', 'Dus'],
            ['Exemplifying', 'Ter illustratie / Zo blijkt dat / Neem bijvoorbeeld', 'Bijvoorbeeld'],
          ],
          caption: 'Formal connectors typically trigger subject-verb inversion when they begin a clause.',
        },
        {
          type: 'examples',
          title: 'Signpost language in formal writing',
          examples: [
            { dutch: 'De kosten van het project zijn aanzienlijk gestegen. Desalniettemin heeft de raad besloten door te gaan.', english: 'The costs of the project have risen considerably. Nevertheless, the council has decided to continue.', highlight: 'Desalniettemin' },
            { dutch: 'Aangezien de resultaten tegenvallen, is bijsturing noodzakelijk.', english: 'Since the results are disappointing, adjustment is necessary.', highlight: 'Aangezien' },
            { dutch: 'Bovendien blijkt uit recent onderzoek dat de maatregel averechts werkt.', english: 'Furthermore, recent research shows that the measure is counterproductive.', highlight: 'Bovendien' },
            { dutch: 'Kortom: het huidige beleid voldoet niet aan de gestelde doelen.', english: 'In short: current policy does not meet the stated objectives.', highlight: 'Kortom' },
          ],
        },
        {
          type: 'note',
          variant: 'info',
          title: 'Inversion after sentence-initial connectors',
          content: 'When a formal connector starts a main clause, Dutch requires subject-verb inversion:\n\n✓ "Bovendien heeft de commissie besloten…" (inversion: heeft de commissie)\n✗ "Bovendien de commissie heeft besloten…" (no inversion — wrong)\n\nThis applies to: bovendien, echter, derhalve, daardoor, bijgevolg, desalniettemin, toch, etc.\n\nNote: "Aangezien", "doordat", "hoewel" introduce subordinate clauses — the verb goes to the end of that clause, and the main clause still has inversion.',
        },
        {
          type: 'grammar-table',
          title: 'Typical paragraph structure in formal Dutch',
          headers: ['Position', 'Function', 'Typical language'],
          rows: [
            ['Opening sentence', 'State the topic/claim', 'De centrale vraag is… / In dit betoog wordt betoogd dat…'],
            ['Second sentence', 'Explain or elaborate', 'Dit houdt in dat… / Meer concreet betekent dit…'],
            ['Middle sentences', 'Evidence + connectors', 'Zo blijkt uit… / Bovendien toont onderzoek aan…'],
            ['Contrast sentence', 'Acknowledge counter-argument', 'Echter / Tegenstanders stellen dat… / Men kan tegenwerpen dat…'],
            ['Final sentence', 'Conclude paragraph', 'Kortom / Hieruit volgt dat… / Al met al kan worden gesteld…'],
          ],
        },
      ],
    },
    {
      id: 'cohesion-3',
      title: 'Advanced Sentence Connections: Nominalization and Anaphora',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Highly cohesive Dutch text uses nominalization (turning verb/adjective phrases into noun phrases) to create compact, forward-moving sentences. Anaphora (repeating a key word for emphasis) is used for rhetorical effect.',
          explanation:
            'Formal Dutch, especially in journalism and policy documents, compresses information by turning clauses into noun phrases. This "packs" information efficiently and allows the writer to use that noun phrase as a reference anchor for the next sentence. Recognising and producing this pattern is a key B2/C1 skill.',
        },
        {
          type: 'examples',
          title: 'Nominalization for cohesion',
          examples: [
            { dutch: 'De overheid besloot de pensioenen te verhogen. Dit besluit werd goed ontvangen.', english: 'The government decided to raise pensions. This decision was well received.', highlight: 'Dit besluit' },
            { dutch: 'Steeds meer jongeren vertrekken naar het buitenland. Deze uitstroom vormt een probleem.', english: 'More and more young people are leaving for abroad. This outflow is a problem.', highlight: 'Deze uitstroom' },
            { dutch: 'De economie groeide sterk in het derde kwartaal. Die groei is echter niet gelijkmatig verdeeld.', english: 'The economy grew strongly in the third quarter. However, this growth is not evenly distributed.', highlight: 'Die groei' },
          ],
        },
        {
          type: 'note',
          variant: 'tip',
          title: 'The "summary noun" technique',
          content: 'A powerful B2+ cohesion technique: end a clause with an action, then begin the next clause with a summary noun that captures that action:\n\n"De minister verhoogde de belasting, verlaagde de toeslagen en maakte thuiszorg duurder. Dit ingrijpende pakket aan bezuinigingen leidde tot massaprotest."\n\n→ "Dit ingrijpende pakket aan bezuinigingen" summarises the whole previous clause in one noun phrase, which then becomes the subject of the new clause. This creates very smooth, efficient text.',
        },
        {
          type: 'workplace-context',
          scenario: 'Writing a formal report introduction',
          examples: [
            { dutch: 'In dit rapport wordt ingegaan op de financiële prestaties van het afgelopen jaar. Centraal staat de vraag of de gestelde doelen zijn behaald.', english: 'This report addresses the financial performance of the past year. Central is the question of whether the stated objectives have been achieved.' },
            { dutch: 'De resultaten geven een gemengd beeld. Enerzijds is de omzet gestegen; anderzijds zijn de kosten onevenredig toegenomen.', english: 'The results present a mixed picture. On the one hand, revenue has increased; on the other hand, costs have increased disproportionately.' },
            { dutch: 'Samenvattend kan worden gesteld dat bijsturing noodzakelijk is om de continuïteit van de organisatie te waarborgen.', english: 'In summary, it can be stated that adjustment is necessary to safeguard the continuity of the organisation.' },
          ],
          note: 'The passive voice ("wordt ingegaan op", "kan worden gesteld") is very common in formal Dutch reports and signals an impersonal, professional tone.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'cohesion-ex-1',
      type: 'multiple-choice',
      instruction: 'Choose the most appropriate reference word or connector.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De commissie publiceerde haar rapport. ___ bevatte veertien aanbevelingen.',
            options: ['Hij', 'Zij', 'Het', 'Die'],
            correctIndex: 2,
            explanation: '"Rapport" is a het-word → reference pronoun is "het".',
          },
          {
            question: 'De kosten stegen aanzienlijk. ___ heeft de raad toch besloten het project door te zetten.',
            options: ['Aangezien', 'Desalniettemin', 'Bovendien', 'Derhalve'],
            correctIndex: 1,
            explanation: '"Desalniettemin" (nevertheless) signals a contrast — the council continued despite the cost rise.',
          },
          {
            question: 'De vraag is urgent en vraagt om actie. ___ zijn twee opties denkbaar.',
            options: ['Derhalve', 'Hoewel', 'Hiervoor', 'Echter'],
            correctIndex: 2,
            explanation: '"Hiervoor" (for this) is an anaphoric reference back to the "urgent question". It introduces two options as solutions.',
          },
          {
            question: 'De maatregel bleek effectief. ___ werd het programma landelijk uitgerold.',
            options: ['Echter', 'Bovendien', 'Daarop', 'Aangezien'],
            correctIndex: 2,
            explanation: '"Daarop" (as a result / following that) connects consequence to cause in sequence.',
          },
          {
            question: 'Er zijn diverse oplossingen voorgesteld. ___ oplossing heeft echter voor- en nadelen.',
            options: ['Ieder', 'Elk', 'Iedere', 'Elke'],
            correctIndex: 3,
            explanation: '"Oplossing" is a de-word. The correct form is "elke" (or "iedere") — not "elk" or "ieder" which are used before het-words or in isolation.',
          },
        ],
      },
    },
    {
      id: 'cohesion-ex-2',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct formal connector or reference word.',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          {
            before: 'De economische situatie is fragiel.',
            after: 'worden verdere bezuinigingen onvermijdelijk geacht.',
            correctAnswer: 'Derhalve',
            hint: 'Derhalve = therefore (formal)',
            acceptableAnswers: ['Derhalve', 'Bijgevolg', 'Als gevolg hiervan'],
          },
          {
            before: 'Het rapport bevat sterke aanbevelingen.',
            after: 'zijn er ook kritische kanttekeningen geplaatst.',
            correctAnswer: 'Echter',
            hint: 'Echter = however (formal)',
            acceptableAnswers: ['Echter', 'Toch', 'Desalniettemin'],
          },
          {
            before: 'De maatregel werd ingevoerd.',
            after: 'maatregel bleek echter moeilijk handhaafbaar.',
            correctAnswer: 'Deze',
            hint: 'Reference back to "de maatregel" (de-word, near) → deze',
            acceptableAnswers: ['Deze', 'Die'],
          },
          {
            before: 'Het project is succesvol afgerond.',
            after: 'vormt een goed voorbeeld voor toekomstige initiatieven.',
            correctAnswer: 'Dit',
            hint: 'Reference to the whole situation/result → dit',
            acceptableAnswers: ['Dit', 'Dat'],
          },
          {
            before: '',
            after: 'de resultaten tegenvallen, is aanpassing van het beleid noodzakelijk.',
            correctAnswer: 'Aangezien',
            hint: 'Aangezien = since/because (formal, begins subordinate clause)',
            acceptableAnswers: ['Aangezien', 'Doordat', 'Nu'],
          },
        ],
      },
    },
    {
      id: 'cohesion-ex-3',
      type: 'error-correction',
      instruction: 'Each sentence has a cohesion or connector error. Find and correct it.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Het bedrijf presenteerde zijn nieuwe strategie. Hij was gericht op duurzame groei.',
            correctedSentence: 'Het bedrijf presenteerde zijn nieuwe strategie. Deze was gericht op duurzame groei.',
            errorExplanation: '"Strategie" is a de-word. Reference back to it should use "deze" (near demonstrative) or "die" (far), not "hij" (which refers to a person or specific de-word, but is informal here).',
          },
          {
            incorrectSentence: 'De kosten zijn gestegen. Bovendien de overheid besloot te bezuinigen.',
            correctedSentence: 'De kosten zijn gestegen. Bovendien besloot de overheid te bezuinigen.',
            errorExplanation: '"Bovendien" is a sentence-initial connector that triggers subject-verb inversion: "Bovendien besloot de overheid…"',
          },
          {
            incorrectSentence: 'Kortom, ik denk dat het beleid niet werkt.',
            correctedSentence: 'Kortom: het beleid werkt niet.',
            errorExplanation: 'In formal writing, "kortom" introduces a concise summary statement without "ik denk dat". The formal register requires an impersonal or direct statement.',
          },
          {
            incorrectSentence: 'De directeur nam ontslag omdat de resultaten slecht waren. Maar de aandeelhouders waren verrast.',
            correctedSentence: 'De directeur nam ontslag omdat de resultaten slecht waren. De aandeelhouders waren hier echter niet minder door verrast.',
            errorExplanation: '"Maar" is conversational. In formal writing, use "echter" (however) or restructure. Also, the original does not explain the surprise clearly.',
          },
        ],
      },
    },
    {
      id: 'cohesion-ex-4',
      type: 'translation',
      instruction: 'Translate into formal Dutch using appropriate cohesion and signpost language.',
      difficulty: 'guided',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The results are promising. However, further research is needed.',
            correctDutch: 'De resultaten zijn veelbelovend. Echter, verder onderzoek is noodzakelijk.',
            acceptableAnswers: ['De resultaten zijn veelbelovend. Echter, verder onderzoek is noodzakelijk.', 'De resultaten zijn veelbelovend. Desalniettemin is verder onderzoek nodig.'],
          },
          {
            english: 'Since the budget is limited, we must prioritise.',
            correctDutch: 'Aangezien het budget beperkt is, moeten we prioriteren.',
            acceptableAnswers: ['Aangezien het budget beperkt is, moeten we prioriteren.', 'Nu het budget beperkt is, moeten we prioriteiten stellen.'],
          },
          {
            english: 'Furthermore, the new regulation will come into effect in January.',
            correctDutch: 'Bovendien treedt de nieuwe regelgeving in januari van kracht.',
            acceptableAnswers: ['Bovendien treedt de nieuwe regelgeving in januari van kracht.', 'Tevens wordt de nieuwe regelgeving in januari van kracht.'],
          },
          {
            english: 'In short, the policy does not meet the stated objectives.',
            correctDutch: 'Kortom: het beleid voldoet niet aan de gestelde doelstellingen.',
            acceptableAnswers: ['Kortom: het beleid voldoet niet aan de gestelde doelstellingen.', 'Samenvattend kan worden gesteld dat het beleid de doelstellingen niet haalt.'],
          },
        ],
      },
    },
    {
      id: 'cohesion-ex-5',
      type: 'writing-prompt',
      instruction: 'Write a structured formal paragraph (6–8 sentences) arguing for or against a policy of your choice. Use at least four different signpost expressions.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een formele alinea van 6–8 zinnen waarin u een standpunt inneemt over een beleidskwestie. Gebruik minstens vier structuurwoorden uit het formele register.',
        context: 'Possible topics: the 30-km speed limit in cities, mandatory Dutch lessons for newcomers, a four-day workweek, raising the retirement age.',
        guidelines: [
          'Begin with a clear claim/position sentence',
          'Use at least one cause connector (aangezien, doordat, nu)',
          'Use at least one contrast connector (echter, desalniettemin, anderzijds)',
          'Use a consequence connector (derhalve, bijgevolg, als gevolg)',
          'End with a conclusion marker (kortom, samenvattend, concluderend)',
          'Use impersonal constructions where possible (er wordt, men kan stellen)',
        ],
        sampleResponse: 'De invoering van een vierdaagse werkweek verdient serieuze overweging. Aangezien de productiviteit in meerdere landen niet is gedaald na de invoering ervan, zijn de argumenten tegen een dergelijke maatregel minder sterk dan aanvankelijk gedacht. Bovendien toont onderzoek aan dat werknemers met meer rusttijd beter presteren en minder uitvallen. Desalniettemin zijn er sectoren waarvoor een kortere werkweek moeilijk realiseerbaar is. Als gevolg hiervan is maatwerk per sector noodzakelijk. Derhalve stelt de commissie voor om te beginnen met een pilot in de dienstensector. Kortom: de vierdaagse werkweek biedt kansen, mits zorgvuldig ingevoerd.',
      },
    },
    {
      id: 'cohesion-ex-6',
      type: 'listening-comprehension',
      instruction: 'Listen to the formal speech fragment and answer the questions.',
      difficulty: 'open',
      content: {
        type: 'listening-comprehension',
        situation: 'A speech by a policy advisor to a municipal council about housing policy.',
        audioText: 'Geachte raadsleden, centraal in mijn betoog staat de vraag hoe de gemeente de woningnood kan aanpakken. Aangezien de bevolking de komende tien jaar met twintig procent groeit, is bijsturing van het bouwbeleid dringend noodzakelijk. Bovendien zijn de huidige wachttijden voor sociale huurwoningen onaanvaardbaar lang. Desalniettemin zijn er ook tegenargumenten. Zo stellen sommige fracties dat bouwen in het groen de leefbaarheid aantast. Echter, de urgentie van de situatie overtreft dit bezwaar. Derhalve bepleit ik een gefaseerde aanpak waarbij zowel binnenstedelijk als aan de randen van de gemeente wordt gebouwd. Kortom: stilzitten is geen optie.',
        maxPlays: 2,
        questions: [
          {
            question: 'What is the central question of the speech?',
            options: [
              'How to reduce the city budget.',
              'How the municipality can address the housing shortage.',
              'Whether the city should grow by twenty percent.',
              'How to improve public transport.',
            ],
            correctIndex: 1,
            explanation: '"Centraal in mijn betoog staat de vraag hoe de gemeente de woningnood kan aanpakken." The central question is how to address the housing shortage.',
          },
          {
            question: 'What connector does the speaker use to introduce the counter-argument?',
            options: [
              'Bovendien',
              'Derhalve',
              'Aangezien',
              'Desalniettemin',
            ],
            correctIndex: 3,
            explanation: '"Desalniettemin zijn er ook tegenargumenten." — "Desalniettemin" (nevertheless) introduces the other side of the argument.',
          },
          {
            question: 'What does the speaker propose at the end?',
            options: [
              'To stop building altogether.',
              'To build only inside the city.',
              'A phased approach building both inside the city and at its edges.',
              'To wait for more research before acting.',
            ],
            correctIndex: 2,
            explanation: '"Derhalve bepleit ik een gefaseerde aanpak waarbij zowel binnenstedelijk als aan de randen van de gemeente wordt gebouwd." A phased approach in both locations.',
          },
        ],
      },
    },
  ],
};
