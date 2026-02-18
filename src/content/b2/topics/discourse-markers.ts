import { Topic } from '@/content/types';

export const discourseMarkers: Topic = {
  id: 'discourse-markers',
  levelId: 'b2',
  order: 4,
  title: 'Discourse Markers & Cohesion',
  subtitle: 'Verbindingswoorden en samenhang',
  estimatedMinutes: 55,
  lessons: [
    {
      id: 'dm-1',
      title: 'Addition, Contrast, and Concession',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Discourse markers signal the logical relationship between clauses and paragraphs. At B2, learners must command a wide range with precise meaning distinctions.',
          explanation:
            'Basic conjunctions like "maar" and "en" are not enough for advanced writing. B2 requires markers that signal addition (bovendien, daarnaast), contrast (echter, daarentegen, integendeel), concession (hoewel, ofschoon, al, toch), and elaboration (namelijk, immers, dat wil zeggen). Many of these markers also affect word order: those that begin a main clause trigger V2 inversion.',
        },
        {
          type: 'grammar-table',
          title: 'Addition markers',
          headers: ['Marker', 'Position', 'Example', 'English'],
          rows: [
            ['bovendien', 'sentence-initial (V2)', 'Bovendien is de prijs gestegen.', 'Moreover / In addition'],
            ['daarnaast', 'sentence-initial (V2)', 'Daarnaast zijn er andere voordelen.', 'Besides / Furthermore'],
            ['tevens', 'after verb (adverb)', 'Het rapport is tevens beschikbaar online.', 'Also / Likewise'],
            ['niet alleen … maar ook', 'correlative', 'Niet alleen efficiënt, maar ook betaalbaar.', 'Not only … but also'],
            ['enerzijds … anderzijds', 'correlative', 'Enerzijds is het goedkoop; anderzijds risicovol.', 'On the one hand … on the other'],
          ],
        },
        {
          type: 'grammar-table',
          title: 'Contrast and concession markers',
          headers: ['Marker', 'Word order', 'Example', 'English'],
          rows: [
            ['echter', 'after subject/verb (adverb)', 'Dit is echter niet het geval.', 'However'],
            ['daarentegen', 'sentence-initial (V2)', 'Daarentegen stijgen de kosten wel.', 'On the contrary / In contrast'],
            ['integendeel', 'sentence-initial (V2)', 'Integendeel, de resultaten zijn positief.', 'On the contrary'],
            ['hoewel', 'subordinating conj.', 'Hoewel het duur is, is het effectief.', 'Although'],
            ['ofschoon', 'subordinating conj.', 'Ofschoon de tijd krap is, lukt het.', 'Although (formal)'],
            ['toch', 'sentence-internal', 'Het is moeilijk, maar toch haalbaar.', 'Yet / Still / Nevertheless'],
            ['desondanks', 'sentence-initial (V2)', 'Desondanks gaan we door.', 'Despite this / Nevertheless'],
            ['desalniettemin', 'sentence-initial (V2)', 'Desalniettemin zijn er kansen.', 'Nevertheless (very formal)'],
          ],
          caption: '"Echter" never starts a sentence as the first word in formal Dutch — it is placed after the subject or verb.',
        },
        {
          type: 'note',
          content: '"Echter" is a common advanced mistake: *"Echter, dit klopt niet." is non-standard. Correct: "Dit klopt echter niet." Or use "Toch" / "Maar" sentence-initially.',
          variant: 'warning',
        },
      ],
    },
    {
      id: 'dm-2',
      title: 'Cause, Result, and Purpose',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Dutch has a rich set of markers for causal and consequential relations, with important distinctions in register and sentence-type.',
          explanation:
            '"Want" and "omdat" both express cause but differ grammatically: "want" is a coordinating conjunction (main clause follows), while "omdat" is subordinating (verb to end). "Zodat" expresses result/consequence while "opdat" (formal) expresses purpose. "Derhalve", "dientengevolge", and "bijgevolg" are formal equivalents of "therefore" that begin main clauses with V2.',
        },
        {
          type: 'grammar-table',
          title: 'Cause and result markers',
          headers: ['Marker', 'Type', 'Example', 'English'],
          rows: [
            ['want', 'coord. conj.', 'Ik blijf thuis, want ik ben ziek.', 'for / because (coord.)'],
            ['omdat', 'subord. conj.', 'Ik blijf thuis omdat ik ziek ben.', 'because (subord.)'],
            ['aangezien', 'subord. conj. (formal)', 'Aangezien de tijd ontbreekt, stellen wij voor...', 'Since / Given that'],
            ['doordat', 'subord. conj.', 'Doordat het regende, liep het evenement vertraging op.', 'Because of the fact that'],
            ['zodat', 'subord. conj. (result)', 'We werkten hard, zodat het op tijd klaar was.', 'so that (result)'],
            ['opdat', 'subord. conj. (purpose, formal)', 'We trainen het team opdat de kwaliteit stijgt.', 'so that / in order that (purpose)'],
            ['daarom', 'adverb (V2)', 'Het regende; daarom gingen we niet.', 'Therefore / That is why'],
            ['derhalve', 'adverb (V2, formal)', 'De data zijn onvolledig; derhalve…', 'Therefore / Hence (formal)'],
            ['dientengevolge', 'adverb (V2, formal)', 'Dientengevolge werd het project stilgelegd.', 'As a result / Consequently (formal)'],
          ],
          caption: '"Want" cannot introduce an adverbial clause; "omdat" can. Both are correct but not interchangeable positionally.',
        },
        {
          type: 'common-mistakes',
          mistakes: [
            { incorrect: 'Ik blijf thuis want ik ben ziek ben.', correct: 'Ik blijf thuis omdat ik ziek ben.', explanation: '"Want" is coordinating: the clause after it is a main clause (normal word order). "Omdat" is subordinating: the verb goes to the end.' },
            { incorrect: 'Zodat we ons doel bereiken, trainen we elke dag.', correct: 'We trainen elke dag zodat we ons doel bereiken.', explanation: '"Zodat" (result) almost always follows the cause clause. "Opdat" (purpose) can occasionally be fronted in formal writing.' },
          ],
        },
      ],
    },
    {
      id: 'dm-3',
      title: 'Elaboration, Exemplification, and Summary',
      sections: [
        {
          type: 'grammar-rule',
          rule: 'Advanced texts use markers to elaborate on ideas (namelijk, immers), introduce examples (bijvoorbeeld, ter illustratie), and summarize (kortom, samenvattend, concluderend).',
          explanation:
            '"Namelijk" and "immers" both introduce explanation or elaboration but differ subtly: "namelijk" provides a factual clarification, "immers" implies shared knowledge ("as you know / after all"). "Dat wil zeggen" (i.e.) and "met andere woorden" (in other words) signal reformulation. These markers are essential for structuring paragraphs in formal writing.',
        },
        {
          type: 'grammar-table',
          title: 'Elaboration and exemplification',
          headers: ['Marker', 'Function', 'Example'],
          rows: [
            ['namelijk', 'factual explanation', 'Er is een probleem: de data zijn namelijk incompleet.'],
            ['immers', 'shared knowledge / after all', 'Dit is niet verrassend; de markt is immers volatiel.'],
            ['dat wil zeggen (d.w.z.)', 'reformulation / i.e.', 'De maatregel is proportioneel, d.w.z. evenredig aan het risico.'],
            ['met andere woorden', 'reformulation', 'Met andere woorden: we moeten meer investeren.'],
            ['bijvoorbeeld (bijv.)', 'exemplification', 'Neem bijvoorbeeld de situatie in 2020.'],
            ['ter illustratie', 'exemplification (formal)', 'Ter illustratie dient het volgende voorbeeld.'],
            ['kortom', 'summary', 'Kortom, de aanpak is geslaagd.'],
            ['samenvattend', 'summary', 'Samenvattend kan worden gesteld dat...'],
            ['concluderend', 'conclusion', 'Concluderend is de methode effectief bevonden.'],
          ],
        },
        {
          type: 'workplace-context',
          scenario: 'Structuring a business presentation or report',
          examples: [
            { dutch: 'De kosten zijn gestegen; dit heeft namelijk te maken met de grondstofprijzen.', english: 'Costs have increased; this is specifically due to raw material prices.' },
            { dutch: 'Kortom, de pilot was succesvol en wij bevelen uitrol aan.', english: 'In short, the pilot was successful and we recommend roll-out.' },
            { dutch: 'Neem ter illustratie de resultaten van kwartaal drie.', english: 'Take, for illustration, the results of quarter three.' },
          ],
          note: '"Namelijk" never starts a sentence; it must appear after the element it clarifies.',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'b2-dm-mc-1',
      type: 'multiple-choice',
      instruction: 'Choose the most appropriate discourse marker.',
      difficulty: 'controlled',
      content: {
        type: 'multiple-choice',
        questions: [
          {
            question: 'De resultaten zijn goed. ___, zijn er nog verbeterpunten.',
            options: ['Echter', 'Bovendien', 'Namelijk', 'Derhalve'],
            correctIndex: 0,
            explanation: '"Echter" signals contrast (however). Note: "Echter" must NOT be the first word of the sentence in standard Dutch — here it appears after the subject is implied. In a proper sentence it would be: "De resultaten zijn goed. Er zijn echter nog verbeterpunten."',
          },
          {
            question: 'We trainen het team dagelijks ___ de kwaliteit te verbeteren. (purpose)',
            options: ['zodat', 'opdat', 'doordat', 'aangezien'],
            correctIndex: 1,
            explanation: '"Opdat" expresses purpose (in order that) in formal register and takes a subordinate clause. "Zodat" expresses result, not intention. "Doordat" = because of the fact that. "Aangezien" = since/given that.',
          },
          {
            question: 'Er is een probleem: de begroting is ___ te krap om het project te financieren.',
            options: ['immers', 'namelijk', 'kortom', 'desondanks'],
            correctIndex: 1,
            explanation: '"Namelijk" introduces a factual clarification of what the problem is. "Immers" implies shared knowledge. "Kortom" summarizes. "Desondanks" means "despite this".',
          },
        ],
      },
    },
    {
      id: 'b2-dm-fill-1',
      type: 'fill-in-the-blank',
      instruction: 'Fill in the correct discourse marker from the box: (echter / bovendien / aangezien / derhalve / namelijk)',
      difficulty: 'controlled',
      content: {
        type: 'fill-in-the-blank',
        sentences: [
          { before: 'De deadline is morgen;', after: 'moeten we vandaag afronden.', correctAnswer: 'derhalve', hint: 'Formal "therefore" that begins a new main clause (V2).' },
          { before: 'Het systeem werkt niet goed. Er zijn', after: 'drie storingen gemeld vandaag.', correctAnswer: 'bovendien', hint: '"In addition / moreover" — adds further information.' },
          { before: '', after: 'de tijd ontbreekt, stellen wij voor de vergadering te verzetten.', correctAnswer: 'Aangezien', hint: '"Since / given that" — formal subordinating conjunction.' },
          { before: 'Er is een voordeel,', after: 'de lagere kosten.', correctAnswer: 'namelijk', hint: '"Namely" — introduces a clarification; cannot start a sentence.' },
        ],
      },
    },
    {
      id: 'b2-dm-err-1',
      type: 'error-correction',
      instruction: 'Correct the discourse marker error.',
      difficulty: 'guided',
      content: {
        type: 'error-correction',
        items: [
          {
            incorrectSentence: 'Echter, dit klopt niet met de feiten.',
            correctedSentence: 'Dit klopt echter niet met de feiten.',
            errorExplanation: '"Echter" cannot be the very first word of a sentence in standard formal Dutch. It must follow at least the subject or be placed sentence-internally.',
          },
          {
            incorrectSentence: 'Ik blijf thuis, omdat ik ben ziek.',
            correctedSentence: 'Ik blijf thuis omdat ik ziek ben.',
            errorExplanation: '"Omdat" is a subordinating conjunction: the verb goes to the end of the clause. "ik ben ziek" → "ik ziek ben".',
          },
          {
            incorrectSentence: 'Zodat we meer informatie verzamelen, nemen we een beslissing.',
            correctedSentence: 'We verzamelen meer informatie zodat we een beslissing kunnen nemen.',
            errorExplanation: '"Zodat" (result/consequence) follows the cause clause. The main clause comes first.',
          },
          {
            incorrectSentence: 'De studie is afgerond. Namelijk, de resultaten worden gepubliceerd.',
            correctedSentence: 'De studie is afgerond. De resultaten worden namelijk binnenkort gepubliceerd.',
            errorExplanation: '"Namelijk" does not start a sentence. It appears after the element it clarifies, typically after the subject or finite verb.',
          },
        ],
      },
    },
    {
      id: 'b2-dm-wo-1',
      type: 'word-order',
      instruction: 'Put the words in the correct order to form a coherent sentence with the discourse marker.',
      difficulty: 'guided',
      content: {
        type: 'word-order',
        items: [
          {
            shuffledWords: ['zijn', 'Derhalve', 'maatregelen', 'vereist', 'aanvullende'],
            correctOrder: ['Derhalve', 'zijn', 'aanvullende', 'maatregelen', 'vereist'],
            translation: 'Therefore, additional measures are required.',
          },
          {
            shuffledWords: ['het', 'budget', 'is', 'er', 'overschreden', 'bovendien'],
            correctOrder: ['Bovendien', 'is', 'het', 'budget', 'overschreden'],
            translation: 'Moreover, the budget has been exceeded.',
          },
          {
            shuffledWords: ['aanpak', 'nieuwe', 'de', 'kortom', 'succesvol', 'is'],
            correctOrder: ['Kortom', 'de', 'nieuwe', 'aanpak', 'is', 'succesvol'],
            translation: 'In short, the new approach is successful.',
          },
        ],
      },
    },
    {
      id: 'b2-dm-trans-1',
      type: 'translation',
      instruction: 'Translate into Dutch using an appropriate discourse marker.',
      difficulty: 'open',
      content: {
        type: 'translation',
        items: [
          {
            english: 'The project was delayed. Nevertheless, the team delivered excellent results.',
            correctDutch: 'Het project liep vertraging op. Desondanks leverde het team uitstekende resultaten.',
            acceptableAnswers: ['Het project was vertraagd. Toch leverde het team uitstekende resultaten.', 'Hoewel het project vertraging opliep, leverde het team uitstekende resultaten.'],
            keyVocabulary: [{ dutch: 'desondanks', english: 'nevertheless / despite this' }, { dutch: 'vertraging oplopen', english: 'to be delayed' }],
          },
          {
            english: 'Since the deadline has been moved, we now have more time to revise the report.',
            correctDutch: 'Aangezien de deadline is verschoven, hebben we nu meer tijd om het rapport te herzien.',
            acceptableAnswers: ['Doordat de deadline is verschoven, hebben we nu meer tijd om het rapport te herzien.'],
            keyVocabulary: [{ dutch: 'aangezien', english: 'since / given that' }, { dutch: 'herzien', english: 'to revise' }],
          },
        ],
      },
    },
    {
      id: 'b2-dm-wp-1',
      type: 'writing-prompt',
      instruction: 'Write a coherent paragraph of 5–6 sentences arguing for or against a change at your workplace or in your field of study. Use at least four different discourse markers.',
      difficulty: 'open',
      content: {
        type: 'writing-prompt',
        prompt: 'Schrijf een alinea waarin je voor of tegen een verandering pleit. Gebruik minstens vier verschillende verbindingswoorden.',
        context: 'Think of a real or hypothetical change: a new policy, a restructuring, a new tool, a different approach to studying.',
        guidelines: [
          'State your position clearly in the first sentence',
          'Support it with at least two arguments using addition markers (bovendien, daarnaast)',
          'Acknowledge a counterargument using a contrast or concession marker (echter, hoewel, toch)',
          'Conclude with a summary marker (kortom, concluderend)',
        ],
        sampleResponse: 'De invoering van flexibele werktijden is een positieve ontwikkeling. Bovendien verhoogt dit de medewerkerstevredenheid aanzienlijk. Daarnaast blijkt uit onderzoek dat productiviteit stijgt wanneer medewerkers hun eigen uren kunnen indelen. Er zijn echter ook uitdagingen, namelijk de coördinatie van vergaderingen. Desondanks wegen de voordelen zwaarder dan de nadelen. Kortom, flexibel werken dient te worden ingevoerd.',
      },
    },
  ],
};
