import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IReading2: ExamPracticeTest = {
  id: 'staatsexamen-nt2-i-reading-2',
  examType: 'staatsexamen-nt2-i',
  skill: 'reading',
  title: 'Staatsexamen NT2 Programma I – Lezen (Oefening 2)',
  description:
    'Practice reading exam for Staatsexamen NT2 Programma I at B1 level. Read longer Dutch texts — news articles, official letters, workplace documents, and informational brochures — and answer comprehension questions. Reflects the format and difficulty of the official DUO Staatsexamen.',
  timeLimitMinutes: 75,
  passingScore: 60,
  totalQuestions: 30,
  sections: [
    // ── Section 1: News article ──
    {
      id: 'nt2-i-r2-s1',
      passageTitle: 'Tekst 1: Meer Nederlanders kiezen voor de fiets naar het werk',
      passage:
        'Het aantal Nederlanders dat de fiets gebruikt als primair vervoermiddel naar het werk is de afgelopen vijf jaar met twintig procent gestegen. Dat blijkt uit een onderzoek van het Kennisinstituut voor Mobiliteitsbeleid (KiM). Vooral in steden als Utrecht, Groningen en Amsterdam fietsen steeds meer mensen dagelijks naar hun werkplek.\n\nDe stijging heeft meerdere oorzaken. Ten eerste zijn er meer fietspaden aangelegd in binnensteden, waardoor fietsen veiliger en sneller is geworden. Ten tweede spelen de hoge brandstofprijzen een rol: veel automobilisten zijn overgestapt op de fiets om kosten te besparen. Ten derde heeft de coronapandemie ertoe bijgedragen dat mensen meer gingen fietsen en dit gewoon zijn gebleven.\n\nNiet iedereen is blij met de groei van het fietsverkeer. Winkeliers in drukke winkelstraten klagen over een gebrek aan fietsparkeerplaatsen. Ook zijn er op sommige plekken conflicten tussen fietsers en voetgangers op gedeelde paden. Gemeenten werken aan oplossingen, zoals ondergrondse fietsenstallingen en bredere fietspaden.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q1',
          type: 'multiple-choice',
          question: 'Hoeveel is het aantal forensen op de fiets gestegen in vijf jaar?',
          options: ['10 procent.', '15 procent.', '20 procent.', '25 procent.'],
          correctIndex: 2,
          explanation: 'The article states the number increased by twenty percent over five years.',
          topicArea: 'transport',
        },
        {
          id: 'nt2-i-r2-q2',
          type: 'multiple-choice',
          question: 'Welke drie redenen worden genoemd voor de stijging van het fietsgebruik?',
          options: [
            'Meer fietspaden, lagere brandstofprijzen en subsidie van de overheid.',
            'Meer fietspaden, hoge brandstofprijzen en de coronapandemie.',
            'Betere fietsen, hoge brandstofprijzen en meer bewustzijn over milieu.',
            'Meer fietspaden, lagere fietsprijzen en de coronapandemie.',
          ],
          correctIndex: 1,
          explanation:
            'The article cites more cycle paths, high fuel prices, and the effect of the COVID pandemic.',
          topicArea: 'transport',
        },
        {
          id: 'nt2-i-r2-q3',
          type: 'true-false',
          question: 'Alle winkeliers zijn blij met de toename van het fietsverkeer.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The article states that shopkeepers in busy shopping streets complain about a lack of bicycle parking.',
          topicArea: 'transport',
        },
        {
          id: 'nt2-i-r2-q4',
          type: 'multiple-choice',
          question: 'Welke oplossingen worden door gemeenten voorgesteld?',
          options: [
            'Minder auto\'s toestaan in de binnenstad en meer parkeergarages bouwen.',
            'Ondergrondse fietsenstallingen en bredere fietspaden.',
            'Hogere parkeertarieven voor auto\'s en gratis fietsparkeren.',
            'Aparte rijstroken voor e-bikes en meer verkeerslichten.',
          ],
          correctIndex: 1,
          explanation: 'The article mentions underground bicycle storage and wider cycle paths as solutions.',
          topicArea: 'transport',
        },
      ],
    },

    // ── Section 2: Official letter ──
    {
      id: 'nt2-i-r2-s2',
      passageTitle: 'Tekst 2: Brief van de Belastingdienst',
      passage:
        'Datum: 1 februari 2026\nBetreft: Uw aanvraag voor zorgtoeslag\n\nGeachte mevrouw Okafor,\n\nWij hebben uw aanvraag voor zorgtoeslag ontvangen. Op basis van de door u verstrekte gegevens heeft u recht op een maandelijkse voorschot van €112,00.\n\nDit bedrag wordt automatisch overgemaakt op de 20e van elke maand naar het door u opgegeven rekeningnummer.\n\nBelangrijk: uw toeslag is gebaseerd op uw geschatte inkomen voor dit jaar. Als uw inkomen verandert, moet u dit direct doorgeven via Mijn Toeslagen op toeslagen.nl. Als u dit niet doet en uw inkomen is hoger dan geschat, moet u de toeslag mogelijk terugbetalen.\n\nVoor vragen kunt u bellen met de BelastingTelefoon op 0800-0543 (gratis), maandag tot en met vrijdag van 08:00 tot 20:00 uur.\n\nMet vriendelijke groet,\nDe Belastingdienst/Toeslagen',
      instructions: 'Lees de brief en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q5',
          type: 'multiple-choice',
          question: 'Hoeveel zorgtoeslag ontvangt mevrouw Okafor per maand?',
          options: ['€100,00.', '€112,00.', '€120,00.', '€152,00.'],
          correctIndex: 1,
          explanation: 'The letter states the monthly advance is €112.00.',
          topicArea: 'benefits',
        },
        {
          id: 'nt2-i-r2-q6',
          type: 'multiple-choice',
          question: 'Wanneer wordt de toeslag overgemaakt?',
          options: [
            'Op de 1e van de maand.',
            'Op de 15e van de maand.',
            'Op de 20e van de maand.',
            'Op de laatste dag van de maand.',
          ],
          correctIndex: 2,
          explanation: 'The letter states the amount is transferred on the 20th of each month.',
          topicArea: 'benefits',
        },
        {
          id: 'nt2-i-r2-q7',
          type: 'true-false',
          question:
            'Als het inkomen van mevrouw Okafor stijgt, hoeft zij dit niet door te geven aan de Belastingdienst.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The letter explicitly states she must report income changes immediately via Mijn Toeslagen, otherwise she may have to repay the benefit.',
          topicArea: 'benefits',
        },
        {
          id: 'nt2-i-r2-q8',
          type: 'multiple-choice',
          question: 'Hoe kunt u de BelastingTelefoon bereiken?',
          options: [
            'Via toeslagen.nl.',
            'Op 0800-0543, maandag t/m vrijdag van 08:00 tot 20:00 uur.',
            'Via e-mail, maandag t/m vrijdag.',
            'Op 0800-0543, elke dag van 09:00 tot 17:00 uur.',
          ],
          correctIndex: 1,
          explanation: 'The letter provides the phone number 0800-0543, available Monday to Friday 08:00–20:00.',
          topicArea: 'benefits',
        },
      ],
    },

    // ── Section 3: Information brochure ──
    {
      id: 'nt2-i-r2-s3',
      passageTitle: 'Tekst 3: Informatie — Rijbewijs halen in Nederland',
      passage:
        'Een rijbewijs halen in Nederland kost tijd en geld, maar het is goed georganiseerd. De meeste mensen beginnen met een theoriecursus en theorieexamen, gevolgd door praktijklessen en een praktijkexamen bij het CBR.\n\nStappen voor het rijbewijs:\n1. Aanvragen van een leerpas bij de gemeente (geldig identiteitsbewijs vereist)\n2. Theorieexamen afleggen bij het CBR: u kunt dit online aanvragen via cbr.nl\n3. Praktijklessen volgen bij een erkende rijschool\n4. Praktijkexamen afleggen: de examinator beoordeelt uw rijvaardigheid\n5. Rijbewijs ophalen bij de gemeente na het slagen\n\nKosten:\nHet theorieexamen kost circa €40. Een praktijkexamen kost circa €120. De kosten voor rijlessen variëren per rijschool (gemiddeld €40–€60 per les). Het is verstandig minimaal 30 lessen te plannen.\n\nHet rijbewijs is 10 jaar geldig en kan worden verlengd bij de gemeente.',
      instructions: 'Lees de informatie en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q9',
          type: 'multiple-choice',
          question: 'Waar vraagt u een leerpas aan?',
          options: ['Bij het CBR.', 'Bij de rijschool.', 'Bij de gemeente.', 'Via cbr.nl.'],
          correctIndex: 2,
          explanation: 'Step 1 says you request the learning pass (leerpas) at the gemeente.',
          topicArea: 'driving',
        },
        {
          id: 'nt2-i-r2-q10',
          type: 'multiple-choice',
          question: 'Hoeveel kost het praktijkexamen bij het CBR?',
          options: ['Circa €40.', 'Circa €60.', 'Circa €120.', 'Circa €150.'],
          correctIndex: 2,
          explanation: 'The brochure states the practical exam costs approximately €120.',
          topicArea: 'driving',
        },
        {
          id: 'nt2-i-r2-q11',
          type: 'true-false',
          question: 'Een rijbewijs in Nederland is 15 jaar geldig.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The brochure states a driving licence is valid for 10 years.',
          topicArea: 'driving',
        },
        {
          id: 'nt2-i-r2-q12',
          type: 'multiple-choice',
          question: 'Hoeveel lessen worden aanbevolen als minimum?',
          options: ['10 lessen.', '20 lessen.', '30 lessen.', '40 lessen.'],
          correctIndex: 2,
          explanation: 'The text recommends planning at least 30 lessons.',
          topicArea: 'driving',
        },
      ],
    },

    // ── Section 4: Magazine article ──
    {
      id: 'nt2-i-r2-s4',
      passageTitle: 'Tekst 4: Vrijwilligerswerk in Nederland',
      passage:
        'Meer dan 4 miljoen Nederlanders doen vrijwilligerswerk. Ze helpen in buurthuizen, sportclubs, ziekenhuizen en bij hulporganisaties. Vrijwilligerswerk is populair: het geeft mensen een gevoel van verbondenheid en voldoening.\n\nVoor nieuwkomers kan vrijwilligerswerk een uitstekende manier zijn om de Nederlandse taal te oefenen en een sociaal netwerk op te bouwen. Veel organisaties zoeken actief naar vrijwilligers met een andere culturele achtergrond, omdat zij een waardevolle bijdrage kunnen leveren.\n\nHoe vind je een vrijwilligersplek? Via de website vrijwilligerswerk.nl kun je zoeken op woonplaats en interesse. Je kunt ook langsgaan bij een vrijwilligerscentrale in je buurt. Die helpt je gratis bij het vinden van een passende plek.\n\nBelangrijk om te weten: vrijwilligerswerk is onbetaald. Je kunt soms wel een kleine vergoeding krijgen voor reiskosten. Vrijwilligerswerk mag je uitkeringssituatie niet in gevaar brengen — bespreek het altijd eerst met je uitkeringsinstantie als je een uitkering hebt.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q13',
          type: 'multiple-choice',
          question: 'Hoeveel Nederlanders doen vrijwilligerswerk?',
          options: [
            'Meer dan 1 miljoen.',
            'Meer dan 2 miljoen.',
            'Meer dan 4 miljoen.',
            'Meer dan 6 miljoen.',
          ],
          correctIndex: 2,
          explanation: 'The article states that more than 4 million Dutch people do volunteer work.',
          topicArea: 'society',
        },
        {
          id: 'nt2-i-r2-q14',
          type: 'multiple-choice',
          question: 'Waarom is vrijwilligerswerk goed voor nieuwkomers?',
          options: [
            'Omdat het goed betaald wordt.',
            'Omdat het taal oefenen en een sociaal netwerk opbouwen mogelijk maakt.',
            'Omdat nieuwkomers verplicht zijn om vrijwilligerswerk te doen.',
            'Omdat ze er een vaste baan mee kunnen vinden.',
          ],
          correctIndex: 1,
          explanation:
            'The article says volunteering helps newcomers practice Dutch and build a social network.',
          topicArea: 'society',
        },
        {
          id: 'nt2-i-r2-q15',
          type: 'true-false',
          question: 'Vrijwilligerswerk wordt altijd goed betaald.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The article clearly states volunteer work is unpaid (onbetaald), though sometimes a small travel expense allowance is possible.',
          topicArea: 'society',
        },
        {
          id: 'nt2-i-r2-q16',
          type: 'multiple-choice',
          question:
            'Wat moet u doen als u een uitkering heeft en wilt beginnen met vrijwilligerswerk?',
          options: [
            'Stoppen met de uitkering.',
            'Eerst overleggen met uw uitkeringsinstantie.',
            'Alleen vrijwilligerswerk doen bij een sportclub.',
            'Meer dan 10 uur per week werken als vrijwilliger.',
          ],
          correctIndex: 1,
          explanation:
            'The article advises first discussing it with your benefit authority if you receive a benefit.',
          topicArea: 'society',
        },
      ],
    },

    // ── Section 5: Workplace memo ──
    {
      id: 'nt2-i-r2-s5',
      passageTitle: 'Tekst 5: Memo — Nieuwe regels thuiswerken',
      passage:
        'AAN: Alle medewerkers\nVAN: HR-afdeling\nONDERWERP: Thuiswerkbeleid 2026\nDATUM: 3 februari 2026\n\nVanaf 1 maart 2026 gelden de volgende regels voor thuiswerken:\n\n1. Medewerkers mogen maximaal 3 dagen per week thuiswerken.\n2. Op maandag en donderdag is iedereen verplicht aanwezig op kantoor (vaste kantoordag).\n3. Thuiswerken moet minimaal 24 uur van tevoren worden doorgegeven via het personeelssysteem.\n4. Medewerkers ontvangen een thuiswerkvergoeding van €3,00 per thuiswerkdag.\n5. Bij thuiswerken gelden dezelfde werktijden als op kantoor.\n\nVoor vragen over dit beleid kunt u terecht bij uw leidinggevende of bij HR via hr@bedrijfsnaam.nl.',
      instructions: 'Lees de memo en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q17',
          type: 'multiple-choice',
          question: 'Op welke dagen moet iedereen verplicht op kantoor zijn?',
          options: [
            'Maandag en woensdag.',
            'Maandag en donderdag.',
            'Dinsdag en donderdag.',
            'Woensdag en vrijdag.',
          ],
          correctIndex: 1,
          explanation: 'The memo states Monday and Thursday are mandatory office days.',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r2-q18',
          type: 'multiple-choice',
          question: 'Hoeveel vergoeding ontvangen medewerkers per thuiswerkdag?',
          options: ['€2,00.', '€2,50.', '€3,00.', '€3,50.'],
          correctIndex: 2,
          explanation: 'The memo states a home working allowance of €3.00 per day.',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r2-q19',
          type: 'true-false',
          question: 'Medewerkers hoeven niet van tevoren door te geven dat ze thuiswerken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Rule 3 states that working from home must be registered at least 24 hours in advance.',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r2-q20',
          type: 'multiple-choice',
          question: 'Hoeveel dagen per week mogen medewerkers maximaal thuiswerken?',
          options: ['1 dag.', '2 dagen.', '3 dagen.', '4 dagen.'],
          correctIndex: 2,
          explanation: 'The memo states employees may work from home a maximum of 3 days per week.',
          topicArea: 'work',
        },
      ],
    },

    // ── Section 6: Social care article ──
    {
      id: 'nt2-i-r2-s6',
      passageTitle: 'Tekst 6: Schuldhulpverlening — wat is het en wie kan het aanvragen?',
      passage:
        'Schulden kunnen een grote last zijn. Als u te veel schulden heeft en ze niet meer kunt betalen, kunt u hulp vragen. Dit heet schuldhulpverlening. In Nederland regelt de gemeente deze hulp.\n\nHoe werkt het?\nU vraagt een afspraak aan bij de gemeente. Een schuldhulpverlener bekijkt uw situatie: hoeveel schulden heeft u en bij wie? Na de inventarisatie wordt een plan gemaakt. In sommige gevallen betaalt u een vast bedrag per maand en regelt de schuldhulpverlener de rest met uw schuldeisers. Dit heet een schuldsaneringsregeling.\n\nWie kan hulp aanvragen?\nIedereen die in de gemeente is ingeschreven en problemen heeft met schulden. U hoeft niet te wachten tot de problemen heel groot zijn: vroeg hulp zoeken is beter.\n\nWat kunt u alvast doen?\n• Maak een overzicht van al uw schulden\n• Verzamel uw recente bankafschriften en loonstroken\n• Neem contact op via de website van uw gemeente',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q21',
          type: 'multiple-choice',
          question: 'Bij welke instantie vraagt u schuldhulpverlening aan?',
          options: ['De bank.', 'De gemeente.', 'Het UWV.', 'De Belastingdienst.'],
          correctIndex: 1,
          explanation: 'The text states the gemeente (municipality) arranges debt assistance.',
          topicArea: 'social-services',
        },
        {
          id: 'nt2-i-r2-q22',
          type: 'true-false',
          question: 'U moet wachten tot uw schulden heel groot zijn voordat u hulp kunt aanvragen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The text explicitly says it is better to seek help early rather than waiting until problems are very large.',
          topicArea: 'social-services',
        },
        {
          id: 'nt2-i-r2-q23',
          type: 'multiple-choice',
          question: 'Wat is een schuldsaneringsregeling?',
          options: [
            'Een lening om schulden te betalen.',
            'Een regeling waarbij u een vast bedrag betaalt en de schuldhulpverlener de rest regelt.',
            'Een aanvraag om schulden te laten kwijtschelden.',
            'Een plan om meer te verdienen.',
          ],
          correctIndex: 1,
          explanation:
            'A debt restructuring arrangement involves paying a fixed monthly amount while the debt counsellor handles the rest with creditors.',
          topicArea: 'social-services',
        },
      ],
    },

    // ── Section 7: Government info ──
    {
      id: 'nt2-i-r2-s7',
      passageTitle: 'Tekst 7: Informatie — Paspoort of ID-kaart aanvragen',
      passage:
        'Een paspoort of ID-kaart aanvragen doet u bij de gemeente. U heeft een afspraak nodig — dit kunt u online inplannen via de website van uw gemeente.\n\nWat heeft u nodig?\n• Uw oude paspoort of ID-kaart (als u die heeft)\n• 1 recente pasfoto (maak de foto bij een fotograaf of een fotohokje; let op de eisen)\n• Voor kinderen: een handtekening van beide ouders of gezaghebbende\n\nKosten (2026):\n• Paspoort: €77,80\n• ID-kaart: €38,90\n• Kinderen (jonger dan 18 jaar): lagere tarieven\n\nLevertijd:\nNormaal: 5 werkdagen\nSpoed (extra kosten): 1 werkdag\n\nLet op: paspoorten zijn 10 jaar geldig (voor personen van 18 jaar en ouder). ID-kaarten zijn ook 10 jaar geldig.',
      instructions: 'Lees de informatie en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r2-q24',
          type: 'multiple-choice',
          question: 'Hoeveel kost een paspoort in 2026?',
          options: ['€38,90.', '€65,00.', '€77,80.', '€85,00.'],
          correctIndex: 2,
          explanation: 'The information sheet states a passport costs €77.80.',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q25',
          type: 'multiple-choice',
          question: 'Hoe lang duurt het normaal om een paspoort te ontvangen?',
          options: ['1 werkdag.', '3 werkdagen.', '5 werkdagen.', '10 werkdagen.'],
          correctIndex: 2,
          explanation: 'Normal delivery takes 5 working days.',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q26',
          type: 'true-false',
          question: 'Een ID-kaart is in Nederland maar 5 jaar geldig.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'Both passports and ID cards are valid for 10 years (for adults).',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q27',
          type: 'multiple-choice',
          question: 'Wat heeft u nodig als u een paspoort aanvraagt voor uw kind?',
          options: [
            'Alleen uw eigen paspoort.',
            'Een handtekening van beide ouders of gezaghebbende.',
            'Een doktersverklaring.',
            'Alleen de geboortedatum van het kind.',
          ],
          correctIndex: 1,
          explanation:
            'For children, a signature from both parents or the person with parental authority is required.',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q28',
          type: 'multiple-choice',
          question: 'Hoe plant u een afspraak in voor een paspoort?',
          options: [
            'Door te bellen met het paspoortloket.',
            'Via de website van uw gemeente.',
            'Door langs te gaan zonder afspraak.',
            'Via de DigiD-app.',
          ],
          correctIndex: 1,
          explanation: 'The text states you can schedule an appointment online via your municipality\'s website.',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q29',
          type: 'multiple-choice',
          question: 'Wat zijn de kosten voor spoedlevering van een paspoort?',
          options: [
            'Hetzelfde als de normale prijs.',
            'Er zijn extra kosten bovenop de normale prijs.',
            'Spoedlevering is gratis.',
            'De tekst vermeldt geen prijs voor spoedlevering.',
          ],
          correctIndex: 1,
          explanation:
            'The text states spoed (urgent) delivery is available at extra cost, though the exact surcharge is not specified.',
          topicArea: 'government-id',
        },
        {
          id: 'nt2-i-r2-q30',
          type: 'true-false',
          question: 'Kinderen jonger dan 18 jaar betalen een lager tarief voor een paspoort of ID-kaart.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: 'The information sheet explicitly states lower rates apply for children under 18.',
          topicArea: 'government-id',
        },
      ],
    },
  ],
};
