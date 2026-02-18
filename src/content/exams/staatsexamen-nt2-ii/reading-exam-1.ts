import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IIReading1: ExamPracticeTest = {
  id: 'staatsexamen-nt2-ii-reading-1',
  examType: 'staatsexamen-nt2-ii',
  skill: 'reading',
  title: 'Staatsexamen NT2 Programma II – Lezen (Oefening 1)',
  description:
    'Practice reading exam for Staatsexamen NT2 Programma II at B2 level. Read complex Dutch texts — opinion articles, academic summaries, formal policy documents, and analytical reports — and answer in-depth comprehension questions. Reflects the format and difficulty of the official DUO Staatsexamen Programma II.',
  timeLimitMinutes: 100,
  passingScore: 60,
  totalQuestions: 35,
  sections: [
    // ── Section 1: Opinion column (newspaper) ──
    {
      id: 'nt2-ii-r1-s1',
      passageTitle: 'Tekst 1: De waarde van meertaligheid op de werkvloer',
      passage:
        'In een steeds globaliserend Nederland klinkt de roep om meertalige medewerkers luider dan ooit. Bedrijven die actief zijn op internationale markten zoeken personeel dat niet alleen Nederlands, maar ook Engels, Duits of Frans beheerst. Toch is meertaligheid op de werkvloer een complex vraagstuk. Enerzijds vergroot het de kansen van een bedrijf om nieuwe markten aan te boren en klantrelaties op te bouwen. Anderzijds kan de nadruk op vreemde talen ten koste gaan van de sociale cohesie binnen een team.\n\nEen recente studie van de Universiteit van Amsterdam toonde aan dat werknemers die op de werkvloer voornamelijk een andere taal dan hun moedertaal spreken, hogere stressniveaus rapporteren. Zij ervaren een grotere cognitieve belasting en voelen zich soms minder betrokken bij teamdiscussies. Dit pleit ervoor dat bedrijven niet alleen investeren in taaltraining, maar ook in een inclusieve werkcultuur waarbij iedereen zich veilig voelt om bij te dragen.\n\nDe oplossing ligt waarschijnlijk niet in een keuze voor de ene of de andere taal, maar in een weloverwogen taalbeleid. Organisaties dienen helder te communiceren welke taal wanneer wordt gebruikt: intern overleg in het Nederlands, klantcommunicatie in de voorkeurstaal van de klant. Zo worden de voordelen van meertaligheid benut zonder dat medewerkers het gevoel krijgen dat hun moedertaal wordt gemarginaliseerd.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q1',
          type: 'multiple-choice',
          question: 'Wat is de hoofdgedachte van dit artikel?',
          options: [
            'Meertaligheid op de werkvloer heeft uitsluitend voordelen voor bedrijven.',
            'Een goed taalbeleid combineert de voordelen van meertaligheid met aandacht voor werknemers.',
            'Bedrijven moeten stoppen met het eisen van vreemde taalkennis.',
            'Nederlanders leren te weinig vreemde talen voor de internationale arbeidsmarkt.',
          ],
          correctIndex: 1,
          explanation:
            'The article argues for a balanced language policy that leverages multilingualism while protecting employee well-being.',
          topicArea: 'work-language',
        },
        {
          id: 'nt2-ii-r1-q2',
          type: 'multiple-choice',
          question: 'Wat concludeerde de studie van de Universiteit van Amsterdam?',
          options: [
            'Meertalige werknemers presteren beter dan eentalige collega\'s.',
            'Werken in een vreemde taal leidt tot meer stress en minder betrokkenheid.',
            'Klantrelaties verbeteren als werknemers hun moedertaal spreken.',
            'Bedrijven met een taalbeleid zijn minder winstgevend.',
          ],
          correctIndex: 1,
          explanation:
            'The study found that employees working mainly in a non-native language report higher stress and feel less engaged in team discussions.',
          topicArea: 'work-language',
        },
        {
          id: 'nt2-ii-r1-q3',
          type: 'multiple-choice',
          question: 'Welke oplossing stelt de auteur voor?',
          options: [
            'Uitsluitend Nederlands spreken op de werkvloer.',
            'Alle vergaderingen in het Engels voeren.',
            'Een taalbeleid met duidelijke regels over wanneer welke taal wordt gebruikt.',
            'Taaltraining verplicht stellen voor alle medewerkers.',
          ],
          correctIndex: 2,
          explanation:
            'The author proposes a deliberate language policy specifying which language is used in which context.',
          topicArea: 'work-language',
        },
        {
          id: 'nt2-ii-r1-q4',
          type: 'true-false',
          question:
            'Volgens de tekst heeft meertaligheid op de werkvloer alleen maar voordelen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The text explicitly states that multilingualism is a complex issue with both advantages and disadvantages.',
          topicArea: 'work-language',
        },
        {
          id: 'nt2-ii-r1-q5',
          type: 'multiple-choice',
          question: 'Wat wordt bedoeld met "cognitieve belasting" in de tweede alinea?',
          options: [
            'De hoeveelheid werk die iemand op een dag doet.',
            'De mentale inspanning die het kost om in een vreemde taal te werken.',
            'Het aantal vergaderingen dat iemand per week bijwoont.',
            'De druk om snel te communiceren met klanten.',
          ],
          correctIndex: 1,
          explanation:
            '"Cognitieve belasting" refers to the mental effort required when operating in a non-native language.',
          topicArea: 'work-language',
        },
      ],
    },

    // ── Section 2: Academic article summary ──
    {
      id: 'nt2-ii-r1-s2',
      passageTitle: 'Tekst 2: Klimaatadaptatie in Nederlandse steden',
      passage:
        'De gevolgen van klimaatverandering zijn ook in Nederland merkbaar: hittegolven worden intensiever en langduriger, extreme regenval veroorzaakt wateroverlast in stedelijke gebieden, en droogteperioden bedreigen de landbouw. Steden als Amsterdam, Rotterdam en Utrecht werken daarom actief aan klimaatadaptatie: het aanpassen van de stad aan de verwachte klimaatomstandigheden.\n\nEen belangrijk onderdeel van deze strategie is vergroening. Parken, groene daken en zogenoemde "regenwatertuinen" verminderen de hittestress en helpen overtollig regenwater op te vangen. Rotterdam heeft zich internationaal een naam gemaakt met innovatieve oplossingen, zoals het Benthemplein — een plein dat bij zware regenval functioneert als wateropvangbassin. Dit soort maatregelen vermindert de druk op het rioolstelsel aanzienlijk.\n\nNaast vergroening zetten gemeenten in op hitteplannen: protocollen die worden geactiveerd bij extreme hitte om kwetsbare groepen zoals ouderen en chronisch zieken te beschermen. Gemeenten informeren bewoners via apps en websites, openen koelcentra en instrueren zorginstellingen over preventieve maatregelen. Experts waarschuwen echter dat de huidige inspanningen onvoldoende zijn om de verwachte klimaatverandering op te vangen. Structurele investeringen en een integrale aanpak — waarbij ruimtelijke ordening, waterbeheer en volksgezondheid samenkomen — zijn volgens hen noodzakelijk.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q6',
          type: 'multiple-choice',
          question: 'Wat is het doel van klimaatadaptatie zoals beschreven in de tekst?',
          options: [
            'De uitstoot van broeikasgassen verminderen.',
            'De stad aanpassen aan de verwachte gevolgen van klimaatverandering.',
            'Meer internationale bedrijven naar Nederland aantrekken.',
            'De landbouw verduurzamen door minder water te gebruiken.',
          ],
          correctIndex: 1,
          explanation:
            'The text defines klimaatadaptatie as adapting the city to expected climate conditions.',
          topicArea: 'environment',
        },
        {
          id: 'nt2-ii-r1-q7',
          type: 'multiple-choice',
          question: 'Waarvoor dient het Benthemplein in Rotterdam?',
          options: [
            'Het is een groot park bedoeld voor ontspanning.',
            'Het is een plein dat bij zware regenval water opvangt.',
            'Het is een koelcentrum voor kwetsbare groepen.',
            'Het is een innovatief groen dak op een gebouw.',
          ],
          correctIndex: 1,
          explanation:
            'The Benthemplein functions as a water retention basin during heavy rainfall, reducing pressure on the sewage system.',
          topicArea: 'environment',
        },
        {
          id: 'nt2-ii-r1-q8',
          type: 'multiple-choice',
          question: 'Wat zeggen experts over de huidige klimaatinspanningen van gemeenten?',
          options: [
            'Ze zijn meer dan voldoende om klimaatverandering op te vangen.',
            'Ze zijn een goed voorbeeld voor andere Europese steden.',
            'Ze zijn onvoldoende en er zijn structurele investeringen nodig.',
            'Ze zijn te duur en moeten worden teruggeschroefd.',
          ],
          correctIndex: 2,
          explanation:
            'Experts warn that current efforts are insufficient and structural investment with an integral approach is necessary.',
          topicArea: 'environment',
        },
        {
          id: 'nt2-ii-r1-q9',
          type: 'true-false',
          question:
            'Hitteplannen zijn protocollen die alleen bedoeld zijn voor de landbouwsector.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Hitteplannen are protocols to protect vulnerable groups like the elderly and chronically ill — not specifically for the agricultural sector.',
          topicArea: 'environment',
        },
        {
          id: 'nt2-ii-r1-q10',
          type: 'multiple-choice',
          question: 'Welke drie beleidsterreinen noemen experts als onderdeel van een integrale aanpak?',
          options: [
            'Onderwijs, gezondheidszorg en economie.',
            'Ruimtelijke ordening, waterbeheer en volksgezondheid.',
            'Landbouw, industrie en transport.',
            'Energie, milieu en wonen.',
          ],
          correctIndex: 1,
          explanation:
            'The text states that spatial planning, water management, and public health must come together in an integral approach.',
          topicArea: 'environment',
        },
      ],
    },

    // ── Section 3: Policy document (formal) ──
    {
      id: 'nt2-ii-r1-s3',
      passageTitle: 'Tekst 3: Beleidsnota — Digitale inclusie in de publieke dienstverlening',
      passage:
        'Met de toenemende digitalisering van overheidsdiensten stijgt ook het risico op digitale uitsluiting. Een aanzienlijk deel van de Nederlandse bevolking beschikt niet over de digitale vaardigheden die nodig zijn om zelfstandig gebruik te maken van overheidsportalen zoals MijnOverheid, DigiD of de Belastingdienst-app. Dit betreft met name ouderen, laaggeletterden en nieuwkomers.\n\nDe gemeente stelt voor het komende begrotingsjaar de volgende maatregelen voor:\n\n1. Uitbreiding van het aanbod aan digitale vaardigheidscursussen bij bibliotheken en buurtcentra, met een streefcijfer van 5.000 extra deelnemers.\n2. Aanstelling van gemeentelijke "digihulpen": getrainde vrijwilligers die inwoners helpen bij digitale overheidstaken.\n3. Verplichting voor alle gemeentelijke websites om te voldoen aan het toegankelijkheidsniveau WCAG 2.1 AA per 1 januari van het komende jaar.\n4. Instelling van een klachtenlijn voor inwoners die problemen ervaren met digitale dienstverlening.\n\nDe verwachte kosten bedragen €1,2 miljoen per jaar. De gemeente zal cofinanciering aanvragen bij het Ministerie van Binnenlandse Zaken. Evaluatie vindt jaarlijks plaats aan de hand van gebruikersenquêtes en toegankelijkheidsaudits.',
      instructions: 'Lees het beleidsdocument en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q11',
          type: 'multiple-choice',
          question: 'Wat is het centrale probleem dat in dit beleidsdocument wordt beschreven?',
          options: [
            'Overheidsportalen zijn te duur om te onderhouden.',
            'Een deel van de bevolking kan niet zelfstandig digitale overheidsdiensten gebruiken.',
            'Gemeentelijke websites voldoen niet aan de wettelijke eisen.',
            'Bibliotheken hebben te weinig computers voor burgers.',
          ],
          correctIndex: 1,
          explanation:
            'The document focuses on digital exclusion — a significant part of the population lacks the skills to use government portals independently.',
          topicArea: 'government-policy',
        },
        {
          id: 'nt2-ii-r1-q12',
          type: 'multiple-choice',
          question: 'Wat zijn "digihulpen" volgens de beleidsnota?',
          options: [
            'Betaalde IT-medewerkers van de gemeente.',
            'Getrainde vrijwilligers die inwoners helpen bij digitale overheidstaken.',
            'Speciale softwareprogramma\'s voor laaggeletterden.',
            'Medewerkers van bibliotheken die cursussen geven.',
          ],
          correctIndex: 1,
          explanation:
            '"Digihulpen" are trained volunteers who assist residents with digital government tasks.',
          topicArea: 'government-policy',
        },
        {
          id: 'nt2-ii-r1-q13',
          type: 'true-false',
          question:
            'Alle gemeentelijke websites moeten per 1 januari van het komende jaar voldoen aan WCAG 2.1 AA.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The policy document explicitly states this deadline for WCAG 2.1 AA compliance.',
          topicArea: 'government-policy',
        },
        {
          id: 'nt2-ii-r1-q14',
          type: 'multiple-choice',
          question: 'Hoe worden de resultaten van de maatregelen geëvalueerd?',
          options: [
            'Door jaarlijkse audits door een extern accountantsbureau.',
            'Door gebruikersenquêtes en toegankelijkheidsaudits.',
            'Door vergelijking met andere gemeenten in de regio.',
            'Door rapportages van het Ministerie van Binnenlandse Zaken.',
          ],
          correctIndex: 1,
          explanation:
            'The document states that evaluation takes place annually using user surveys and accessibility audits.',
          topicArea: 'government-policy',
        },
        {
          id: 'nt2-ii-r1-q15',
          type: 'multiple-choice',
          question: 'Welke groepen worden specifiek genoemd als doelgroep van dit beleid?',
          options: [
            'Jongeren, studenten en zzp\'ers.',
            'Ouderen, laaggeletterden en nieuwkomers.',
            'Werklozen, bijstandsgerechtigden en vluchtelingen.',
            'Mkb-ondernemers, zelfstandigen en ambtenaren.',
          ],
          correctIndex: 1,
          explanation:
            'The document specifically mentions elderly people, people with low literacy, and newcomers as the target groups.',
          topicArea: 'government-policy',
        },
      ],
    },

    // ── Section 4: Long analytical article ──
    {
      id: 'nt2-ii-r1-s4',
      passageTitle: 'Tekst 4: De arbeidsmarkt na de automatisering',
      passage:
        'Automatisering en kunstmatige intelligentie veranderen de arbeidsmarkt in een tempo dat beleidsmakers nauwelijks kunnen bijhouden. Routinetaken — zowel handmatige als administratieve — worden in toenemende mate overgenomen door machines en algoritmen. Dit leidt tot productiviteitswinsten voor bedrijven, maar stelt tegelijkertijd werknemers voor de vraag: wat blijft er over voor mensen?\n\nOnderzoek van het Centraal Planbureau laat zien dat banen met een hoge mate van routinematigheid het meest kwetsbaar zijn. Denk aan kassamedewerkers, administratief medewerkers en productiemedewerkers. Tegelijkertijd groeit de vraag naar beroepen waarbij menselijke vaardigheden centraal staan: empathie, creativiteit, complexe probleemoplossing en interpersoonlijke communicatie. Zorgprofessionals, onderwijzers en innovatiegerichte ingenieurs zijn voorbeelden van beroepen die vooralsnog moeilijk volledig te automatiseren zijn.\n\nEen veel gehoord bezwaar is dat de transitie te snel gaat voor mensen om zich aan te passen. Omscholing en bijscholing zijn essentieel, maar vereisen zowel tijd als financiële middelen die niet iedereen heeft. De overheid staat voor de uitdaging een vangnet te bieden zonder werkeloosheid te stimuleren. Sommige economen pleiten voor een basisinkomen als buffer; anderen wijzen op het gevaar van afhankelijkheid en gebrek aan participatie.\n\nHet is duidelijk dat de arbeidsmarkt van morgen fundamenteel anders zal zijn dan die van vandaag. De vraag is niet óf er verandering komt, maar hoe samenleving en beleid de transitie zo rechtvaardig en inclusief mogelijk kunnen maken.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q16',
          type: 'multiple-choice',
          question: 'Welke banen zijn volgens het CPB het meest kwetsbaar voor automatisering?',
          options: [
            'Banen die veel creativiteit en empathie vereisen.',
            'Banen met een hoge mate van routinematigheid.',
            'Banen in de zorgsector en het onderwijs.',
            'Banen waarbij complexe probleemoplossing centraal staat.',
          ],
          correctIndex: 1,
          explanation:
            'CPB research shows that jobs with a high degree of routine tasks are most vulnerable to automation.',
          topicArea: 'labour-market',
        },
        {
          id: 'nt2-ii-r1-q17',
          type: 'multiple-choice',
          question: 'Welke menselijke vaardigheden worden steeds belangrijker op de arbeidsmarkt?',
          options: [
            'Snelheid, nauwkeurigheid en technische kennis.',
            'Empathie, creativiteit en complexe probleemoplossing.',
            'Fysieke kracht, precisie en herhaling.',
            'Digitale vaardigheden, programmeren en dataverwerking.',
          ],
          correctIndex: 1,
          explanation:
            'The article highlights empathy, creativity, complex problem-solving, and interpersonal communication as growing in demand.',
          topicArea: 'labour-market',
        },
        {
          id: 'nt2-ii-r1-q18',
          type: 'true-false',
          question:
            'Alle economen zijn het erover eens dat een basisinkomen de beste oplossing is voor automatiseringsproblemen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The text presents a debate: some economists support a basic income, others warn about dependency and lack of participation.',
          topicArea: 'labour-market',
        },
        {
          id: 'nt2-ii-r1-q19',
          type: 'multiple-choice',
          question: 'Wat is volgens de tekst de voornaamste uitdaging voor omscholing?',
          options: [
            'Werkgevers zijn niet bereid om voor omscholing te betalen.',
            'Omscholing kost tijd en geld die niet iedereen heeft.',
            'Er zijn te weinig opleidingen beschikbaar voor nieuwe beroepen.',
            'Werknemers willen niet van beroep wisselen.',
          ],
          correctIndex: 1,
          explanation:
            'The article states that retraining requires both time and financial resources that not everyone has access to.',
          topicArea: 'labour-market',
        },
        {
          id: 'nt2-ii-r1-q20',
          type: 'multiple-choice',
          question: 'Welke toon heeft het laatste alinea van het artikel?',
          options: [
            'Pessimistisch — de auteur ziet geen oplossing.',
            'Neutraal-analytisch — de auteur stelt een vraag zonder antwoord te geven.',
            'Optimistisch — de auteur gelooft dat automatisering alleen voordelen heeft.',
            'Kritisch — de auteur verwerpt alle voorgestelde oplossingen.',
          ],
          correctIndex: 1,
          explanation:
            'The final paragraph poses the question of how society can make the transition as fair and inclusive as possible, without providing a definitive answer.',
          topicArea: 'labour-market',
        },
      ],
    },

    // ── Section 5: Formal letter / memo ──
    {
      id: 'nt2-ii-r1-s5',
      passageTitle: 'Tekst 5: Brief van de Ondernemingsraad aan het management',
      passage:
        'Aan: Directie Algemeen\nVan: Ondernemingsraad\nBetreft: Zienswijze inzake de voorgenomen reorganisatie\nDatum: 14 februari 2026\n\nGeachte directie,\n\nDe Ondernemingsraad (OR) heeft kennisgenomen van het voornemen tot reorganisatie zoals uiteengezet in de adviesaanvraag d.d. 3 februari 2026. Wij waarderen de transparante communicatie en de gelegenheid die ons is geboden om te reageren binnen de gestelde termijn.\n\nNa bestudering van de stukken en na raadpleging van de achterban, wenst de OR de volgende punten te benadrukken:\n\n1. Sociaal plan: De OR dringt erop aan dat het sociaal plan ruimschoots voor de aanvang van de reorganisatie wordt vastgesteld en dat hierin duidelijke afspraken worden opgenomen over herplaatsing, omscholing en vertrekregelingen.\n2. Communicatie naar medewerkers: De OR verzoekt de directie te garanderen dat medewerkers tijdig en volledig worden geïnformeerd over de gevolgen van de reorganisatie voor hun functie.\n3. Monitoring: De OR wenst gedurende de reorganisatieperiode driemaandelijks geïnformeerd te worden over de voortgang en de gevolgen voor het personeel.\n\nWij vertrouwen erop dat u onze zienswijze serieus in overweging neemt en zijn bereid tot nader overleg.\n\nMet vriendelijke groet,\nDe Ondernemingsraad',
      instructions: 'Lees de brief en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q21',
          type: 'multiple-choice',
          question: 'Wat is het doel van deze brief?',
          options: [
            'De reorganisatie formeel goedkeuren namens de medewerkers.',
            'De zienswijze van de Ondernemingsraad over de geplande reorganisatie kenbaar maken.',
            'De directie vragen om de reorganisatie stop te zetten.',
            'Een sociaal plan voorleggen aan de directie.',
          ],
          correctIndex: 1,
          explanation:
            'The letter presents the Works Council\'s (OR) opinion on the proposed reorganization and makes specific requests.',
          topicArea: 'formal-correspondence',
        },
        {
          id: 'nt2-ii-r1-q22',
          type: 'multiple-choice',
          question: 'Hoe vaak wil de OR geïnformeerd worden over de voortgang van de reorganisatie?',
          options: [
            'Maandelijks.',
            'Halfjaarlijks.',
            'Driemaandelijks.',
            'Jaarlijks.',
          ],
          correctIndex: 2,
          explanation: 'The OR requests to be informed quarterly (driemaandelijks) during the reorganization period.',
          topicArea: 'formal-correspondence',
        },
        {
          id: 'nt2-ii-r1-q23',
          type: 'true-false',
          question: 'De OR is negatief over de manier waarop de directie heeft gecommuniceerd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The OR explicitly appreciates the transparent communication and the opportunity to respond within the given timeframe.',
          topicArea: 'formal-correspondence',
        },
        {
          id: 'nt2-ii-r1-q24',
          type: 'multiple-choice',
          question: 'Welk onderdeel moet volgens de OR ruimschoots voor de reorganisatie worden vastgesteld?',
          options: [
            'Het communicatieplan voor medewerkers.',
            'De monitoringrapportages.',
            'Het sociaal plan.',
            'De adviesaanvraag.',
          ],
          correctIndex: 2,
          explanation:
            'The OR insists that the sociaal plan (social plan) is established well before the reorganization begins.',
          topicArea: 'formal-correspondence',
        },
        {
          id: 'nt2-ii-r1-q25',
          type: 'multiple-choice',
          question: 'Welke term in de brief betekent "de mening van de achterban hebben gevraagd"?',
          options: [
            'Na bestudering van de stukken.',
            'Na raadpleging van de achterban.',
            'Na kennisneming van het voornemen.',
            'Na ontvangst van de adviesaanvraag.',
          ],
          correctIndex: 1,
          explanation:
            '"Na raadpleging van de achterban" means they consulted the constituency/members they represent.',
          topicArea: 'formal-correspondence',
        },
      ],
    },

    // ── Section 6: Magazine article (social issue) ──
    {
      id: 'nt2-ii-r1-s6',
      passageTitle: 'Tekst 6: Eenzaamheid onder jongvolwassenen — een verborgen probleem',
      passage:
        'Eenzaamheid wordt vaak geassocieerd met ouderen, maar onderzoek laat zien dat ook jongvolwassenen — met name in de leeftijdsgroep van 18 tot 30 jaar — in toenemende mate kampen met gevoelens van eenzaamheid. Dit ogenschijnlijke paradox — een generatie die constant verbonden lijkt via sociale media — heeft wetenschappers en beleidsmakers verrast.\n\nSociale media bieden weliswaar de schijn van verbondenheid, maar onderzoek wijst uit dat intensief gebruik ervan juist samenhangt met gevoelens van ontoereikendheid en sociale vergelijking. Jongeren vergelijken hun eigen leven met de zorgvuldig gecureerde beelden van leeftijdsgenoten, wat negatieve effecten heeft op het zelfbeeld. Bovendien vervangt online contact het face-to-facecontact niet volledig: het ontbreekt aan de diepgang en wederzijdse kwetsbaarheid die echte vriendschappen kenmerken.\n\nDe overgang naar volwassenheid brengt ook structurele veranderingen met zich mee: vertrek uit het ouderlijk huis, einde van de schoolperiode en het opbouwen van een nieuw sociaal netwerk. Voor sommigen gaat dit proces moeizaam. Daarbij spelen drempels als perfectionisme, prestatiedruk en de angst om afgewezen te worden een rol.\n\nGGZ-instellingen en gemeenten experimenteren met nieuwe vormen van ondersteuning: ontmoetingsplekken voor jongvolwassenen, apps die anoniem contact faciliteren met lotgenoten, en trainingen in sociale vaardigheden. De vraag is of deze interventies voldoende schaal kunnen bereiken om het probleem structureel aan te pakken.',
      instructions: 'Lees het artikel en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q26',
          type: 'multiple-choice',
          question: 'Waarom worden wetenschappers verrast door eenzaamheid onder jongvolwassenen?',
          options: [
            'Omdat jongeren veel meer sociale activiteiten ondernemen dan vroeger.',
            'Omdat jongeren via sociale media altijd verbonden lijken te zijn.',
            'Omdat eenzaamheid vroeger niet voorkwam bij jonge mensen.',
            'Omdat jongeren zelden naar de huisarts gaan voor psychische klachten.',
          ],
          correctIndex: 1,
          explanation:
            'Scientists are surprised because this generation appears constantly connected through social media, yet reports increasing loneliness.',
          topicArea: 'society',
        },
        {
          id: 'nt2-ii-r1-q27',
          type: 'multiple-choice',
          question: 'Welk negatief effect heeft intensief gebruik van sociale media volgens het artikel?',
          options: [
            'Jongeren besteden minder tijd aan studie en werk.',
            'Sociale media veroorzaken slaapproblemen bij jongvolwassenen.',
            'Sociale vergelijking leidt tot gevoelens van ontoereikendheid.',
            'Jongeren verliezen contact met hun familie.',
          ],
          correctIndex: 2,
          explanation:
            'Intensive social media use is associated with feelings of inadequacy due to social comparison with peers\' curated images.',
          topicArea: 'society',
        },
        {
          id: 'nt2-ii-r1-q28',
          type: 'true-false',
          question:
            'Volgens de tekst vervangt online contact face-to-facecontact volledig.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The text explicitly states that online contact does not fully replace face-to-face contact — it lacks the depth and mutual vulnerability of real friendships.',
          topicArea: 'society',
        },
        {
          id: 'nt2-ii-r1-q29',
          type: 'multiple-choice',
          question: 'Welke drie persoonlijke drempels worden genoemd die eenzaamheid kunnen verergeren?',
          options: [
            'Werkloosheid, schulden en gebrek aan opleiding.',
            'Perfectionisme, prestatiedruk en angst om afgewezen te worden.',
            'Introversie, sociale fobie en depressie.',
            'Gebrek aan vrijetijdsactiviteiten, slechte woonomstandigheden en armoede.',
          ],
          correctIndex: 1,
          explanation:
            'The article mentions perfectionism, performance pressure, and fear of rejection as personal barriers.',
          topicArea: 'society',
        },
        {
          id: 'nt2-ii-r1-q30',
          type: 'multiple-choice',
          question: 'Welk voorbehoud maakt de auteur in de laatste alinea?',
          options: [
            'De genoemde interventies zijn te duur om op grote schaal in te zetten.',
            'Het is onduidelijk of de interventies voldoende schaal kunnen bereiken.',
            'GGZ-instellingen zijn niet bereid om samen te werken met gemeenten.',
            'Jongvolwassenen willen geen gebruik maken van de aangeboden ondersteuning.',
          ],
          correctIndex: 1,
          explanation:
            'The author questions whether the interventions can reach sufficient scale to address the problem structurally.',
          topicArea: 'society',
        },
      ],
    },

    // ── Section 7: Government/institutional report ──
    {
      id: 'nt2-ii-r1-s7',
      passageTitle: 'Tekst 7: Informatieblad — Het nieuwe pensioenstelsel',
      passage:
        'Per 1 juli 2023 is de Wet toekomst pensioenen (Wtp) in werking getreden. Deze wet vervangt het oude stelsel van vaste pensioenuitkeringen door een persoonlijk pensioenvermogen. Wat betekent dit voor u?\n\nOud stelsel versus nieuw stelsel\nIn het oude stelsel beloofden pensioenfondsen een vaste uitkering op basis van uw salaris en het aantal gewerkte jaren. In het nieuwe stelsel bouwt u een persoonlijk pensioenpot op. De hoogte van uw uiteindelijke pensioen hangt af van de premies die zijn ingelegd, het beleggingsrendement en de economische omstandigheden.\n\nVoordelen van het nieuwe stelsel\nHet nieuwe stelsel is transparanter: u kunt zien hoeveel vermogen u heeft opgebouwd. Bovendien sluit het beter aan bij de flexibele arbeidsmarkt, waarop mensen vaker van baan wisselen, als zzp\'er werken of periodes zonder betaald werk hebben.\n\nMogelijke nadelen\nOmdat het pensioen afhankelijk is van beleggingsresultaten, is er meer onzekerheid over de hoogte van de uiteindelijke uitkering. Bij slechte economische tijden kan het pensioen lager uitvallen dan gehoopt. Het pensioenfonds zorgt wel voor buffers om grote schommelingen op te vangen.\n\nWat moet u doen?\nIn de meeste gevallen hoeft u niets te doen: uw werkgever en pensioenfonds regelen de overgang. Wel is het verstandig om uw pensioenoverzicht te controleren via MijnPensioenoverzicht.nl en contact op te nemen met uw pensioenfonds als u vragen heeft.',
      instructions: 'Lees het informatieblad en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-ii-r1-q31',
          type: 'multiple-choice',
          question: 'Wat is het belangrijkste verschil tussen het oude en het nieuwe pensioenstelsel?',
          options: [
            'In het nieuwe stelsel betalen werknemers hogere premies.',
            'Het oude stelsel beloofde een vaste uitkering; het nieuwe bouwt een persoonlijk vermogen op.',
            'In het nieuwe stelsel gaat u eerder met pensioen.',
            'Het oude stelsel gold alleen voor ambtenaren.',
          ],
          correctIndex: 1,
          explanation:
            'The key difference is that the old system promised a fixed benefit, while the new system builds personal pension capital.',
          topicArea: 'finance-social',
        },
        {
          id: 'nt2-ii-r1-q32',
          type: 'multiple-choice',
          question: 'Waarvan hangt de hoogte van het pensioen in het nieuwe stelsel af?',
          options: [
            'Alleen van het aantal gewerkte jaren en het salaris.',
            'Van de ingelegde premies, het beleggingsrendement en de economische omstandigheden.',
            'Van de keuze van het pensioenfonds door de werknemer.',
            'Van de leeftijd waarop u met pensioen gaat.',
          ],
          correctIndex: 1,
          explanation:
            'The text states that the final pension depends on contributions paid, investment returns, and economic circumstances.',
          topicArea: 'finance-social',
        },
        {
          id: 'nt2-ii-r1-q33',
          type: 'true-false',
          question:
            'In het nieuwe pensioenstelsel is er meer zekerheid over de hoogte van de uiteindelijke uitkering dan in het oude stelsel.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The text explicitly mentions that the new system introduces more uncertainty because the pension depends on investment results.',
          topicArea: 'finance-social',
        },
        {
          id: 'nt2-ii-r1-q34',
          type: 'multiple-choice',
          question: 'Wat wordt als voordeel van het nieuwe stelsel genoemd voor mensen met een flexibele loopbaan?',
          options: [
            'Ze ontvangen een hogere uitkering bij pensionering.',
            'Het stelsel sluit beter aan bij veranderende werksituaties zoals zzp-werk.',
            'Ze hoeven minder premie te betalen.',
            'Ze kunnen eerder stoppen met werken.',
          ],
          correctIndex: 1,
          explanation:
            'The new system better suits the flexible labour market where people change jobs more often, work as self-employed, or have periods without paid work.',
          topicArea: 'finance-social',
        },
        {
          id: 'nt2-ii-r1-q35',
          type: 'multiple-choice',
          question: 'Wat wordt aan werknemers geadviseerd om te doen na de overgang naar het nieuwe stelsel?',
          options: [
            'Zo snel mogelijk overstappen naar een ander pensioenfonds.',
            'Hun pensioeninleg verhogen via de werkgever.',
            'Hun pensioenoverzicht controleren via MijnPensioenoverzicht.nl.',
            'Bezwaar maken als ze het niet eens zijn met de overgang.',
          ],
          correctIndex: 2,
          explanation:
            'The information sheet advises employees to check their pension overview via MijnPensioenoverzicht.nl and contact their pension fund with questions.',
          topicArea: 'finance-social',
        },
      ],
    },
  ],
};
