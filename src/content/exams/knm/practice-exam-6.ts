import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam6: ExamPracticeTest = {
  id: 'knm-practice-6',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 6 – Kennis van de Nederlandse Maatschappij',
  description:
    'Practice exam for the Kennis van de Nederlandse Maatschappij (KNM) component of the inburgeringsexamen. Tests knowledge of Dutch society, norms, institutions, and daily life. This exam covers traffic rules, Dutch traditions and holidays, mental health services, tenant rights, anti-discrimination law, child protection, income tax, and Dutch citizenship.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Verkeer en Rijbewijs ──
    {
      id: 'knm6-s1',
      passageTitle: 'Verkeer, Verkeersregels en Rijbewijs',
      instructions: 'Beantwoord de vragen over verkeer en verkeersregels in Nederland.',
      questions: [
        {
          id: 'knm6-q1',
          type: 'multiple-choice',
          question: 'Wat is de maximumsnelheid op een autosnelweg buiten de bebouwde kom in Nederland?',
          options: [
            '100 km/u op alle snelwegen, altijd.',
            '120 km/u overdag en 100 km/u \'s nachts op de meeste snelwegen.',
            '130 km/u op alle snelwegen, altijd.',
            '150 km/u als er geen borden staan.',
          ],
          correctIndex: 1,
          explanation:
            'On most Dutch motorways the speed limit is 100 km/h between 06:00–19:00 and 130 km/h at other times, though some sections are permanently 120 or 130 km/h. Always follow the posted signs.',
          topicArea: 'traffic',
        },
        {
          id: 'knm6-q2',
          type: 'true-false',
          question: 'In Nederland hebben fietsers op een fietspad altijd voorrang op auto\'s die de rijbaan oversteken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Cyclists on a cycle path have right of way over motorists crossing that path, unless a specific traffic sign indicates otherwise.',
          topicArea: 'traffic',
        },
        {
          id: 'knm6-q3',
          type: 'multiple-choice',
          question: 'Karim rijdt door een 30 km/u zone in een woonwijk en de politie meet 52 km/u. Wat zijn de gevolgen?',
          options: [
            'Hij krijgt alleen een mondeling waarschuwing.',
            'Hij krijgt een boete en kan strafpunten op zijn rijbewijs krijgen.',
            'Er zijn geen gevolgen als hij zijn rijbewijs heeft.',
            'Zijn auto wordt direct in beslag genomen.',
          ],
          correctIndex: 1,
          explanation:
            'Speeding results in a fine based on the excess speed. Serious or repeated violations can lead to points on the licence or licence suspension.',
          topicArea: 'traffic',
        },
        {
          id: 'knm6-q4',
          type: 'multiple-choice',
          question: 'Wat is de wettelijk toegestane maximale hoeveelheid alcohol in het bloed voor een ervaren bestuurder in Nederland?',
          options: [
            '0,8 promille',
            '0,5 promille',
            '0,2 promille',
            '0,0 promille — rijden met alcohol is altijd verboden',
          ],
          correctIndex: 1,
          explanation:
            'For experienced drivers (driving licence held for more than 5 years) the legal limit is 0.5 per mille. Novice drivers (first 5 years) have a limit of 0.2 per mille.',
          topicArea: 'traffic',
        },
        {
          id: 'knm6-q5',
          type: 'true-false',
          question: 'Een rijbewijs B in Nederland is 10 jaar geldig en moet daarna worden verlengd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'A Dutch category B driving licence is valid for 10 years and must be renewed at the municipality (gemeente) before it expires.',
          topicArea: 'traffic',
        },
      ],
    },

    // ── Section 2: Nederlandse Tradities en Feestdagen ──
    {
      id: 'knm6-s2',
      passageTitle: 'Nederlandse Tradities en Nationale Feestdagen',
      instructions: 'Beantwoord de vragen over Nederlandse tradities en feestdagen.',
      questions: [
        {
          id: 'knm6-q6',
          type: 'multiple-choice',
          question: 'Op welke dag wordt Koningsdag gevierd in Nederland?',
          options: [
            '30 april',
            '27 april (of 26 april als 27 april op een zondag valt)',
            '31 december',
            '5 mei',
          ],
          correctIndex: 1,
          explanation:
            'King\'s Day (Koningsdag) is celebrated on 27 April — the birthday of King Willem-Alexander. If 27 April falls on a Sunday, it is celebrated on 26 April.',
          topicArea: 'traditions',
        },
        {
          id: 'knm6-q7',
          type: 'true-false',
          question: 'Sinterklaas is een traditioneel Nederlands feest waarbij kinderen cadeaus krijgen op 5 december.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Sinterklaas is celebrated on 5 December (Sinterklaasavond/Pakjesavond). Children receive gifts and sweets. The Sinterklaas season begins when he "arrives" by steamboat in mid-November.',
          topicArea: 'traditions',
        },
        {
          id: 'knm6-q8',
          type: 'multiple-choice',
          question: 'Wat wordt herdacht op 4 mei in Nederland?',
          options: [
            'De geboorte van de koning.',
            'De bevrijding van Nederland aan het einde van de Tweede Wereldoorlog.',
            'De gevallenen en slachtoffers van de Tweede Wereldoorlog en andere oorlogen.',
            'De oprichting van de Europese Unie.',
          ],
          correctIndex: 2,
          explanation:
            '4 May (Dodenherdenking) is the National Remembrance Day for all Dutch victims of the Second World War and other armed conflicts. On 5 May (Bevrijdingsdag) the end of the German occupation in 1945 is celebrated.',
          topicArea: 'traditions',
        },
        {
          id: 'knm6-q9',
          type: 'multiple-choice',
          question: 'Priya is uitgenodigd voor een verjaardagsfeestje in Nederland. Wat is de gebruikelijke Nederlandse gewoonte?',
          options: [
            'Alleen familie feliciteert de jarige — vrienden worden niet verwacht.',
            'Iedereen feliciteert de jarige én de aanwezige familieleden van de jarige.',
            'Men brengt uitsluitend bloemen mee en geen andere cadeaus.',
            'Gasten betalen voor hun eigen eten en drinken.',
          ],
          correctIndex: 1,
          explanation:
            'In the Netherlands it is customary to congratulate not only the birthday person but also their family members present at the party. Gifts are also commonly given.',
          topicArea: 'traditions',
        },
        {
          id: 'knm6-q10',
          type: 'true-false',
          question: 'Tweede Kerstdag (26 december) is in Nederland een officiële feestdag.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Netherlands observes both First Christmas Day (25 December) and Second Christmas Day (26 December) as public holidays. Most offices and shops are closed on both days.',
          topicArea: 'traditions',
        },
      ],
    },

    // ── Section 3: Geestelijke Gezondheid ──
    {
      id: 'knm6-s3',
      passageTitle: 'Geestelijke Gezondheid en GGZ',
      instructions: 'Beantwoord de vragen over geestelijke gezondheidszorg in Nederland.',
      questions: [
        {
          id: 'knm6-q11',
          type: 'multiple-choice',
          question: 'Wat is de eerste stap als u psychische klachten heeft in Nederland?',
          options: [
            'Direct naar een psychiater gaan.',
            'Zelf medicijnen kopen bij de apotheek.',
            'Naar de huisarts gaan, die u kan doorverwijzen.',
            'Bellen met 112.',
          ],
          correctIndex: 2,
          explanation:
            'In the Netherlands, the huisarts (GP) is always the first point of contact, including for mental health issues. The GP can refer you to a POH-GGZ (practice support worker for mental health) or a specialist.',
          topicArea: 'mental-health',
        },
        {
          id: 'knm6-q12',
          type: 'true-false',
          question: 'De Geestelijke Gezondheidszorg (GGZ) in Nederland biedt hulp bij psychische problemen zoals depressie en angststoornissen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The GGZ (mental health care) sector provides treatment for psychological conditions including depression, anxiety disorders, trauma, and more serious psychiatric illnesses.',
          topicArea: 'mental-health',
        },
        {
          id: 'knm6-q13',
          type: 'multiple-choice',
          question: 'Wat is de crisislijn 113 Zelfmoordpreventie?',
          options: [
            'Een hulplijn voor mensen die willen stoppen met roken.',
            'Een gratis 24/7 hulplijn voor mensen met suïcidegedachten of mensen die zich ernstig zorgen maken over iemand.',
            'Een lijn voor mensen die verslaafden willen aanmelden.',
            'Een informatielijn van de overheid over geestelijke gezondheid.',
          ],
          correctIndex: 1,
          explanation:
            '113 Zelfmoordpreventie is a free 24/7 crisis line for people with suicidal thoughts, and for those worried about someone. You can call 113 or 0800-0113 (free).',
          topicArea: 'mental-health',
        },
        {
          id: 'knm6-q14',
          type: 'multiple-choice',
          question: 'Ahmed werkt fulltime maar voelt zich al weken erg gestrest en slaapt slecht. Wat is de beste eerste stap?',
          options: [
            'Extra uren werken om de achterstand in te halen.',
            'Zelf medicijnen kopen.',
            'Met zijn werkgever praten en een afspraak maken bij de huisarts.',
            'Niets doen en hopen dat het vanzelf overgaat.',
          ],
          correctIndex: 2,
          explanation:
            'Prolonged stress and poor sleep can be symptoms of burnout. Speaking to your employer and seeing the GP early can prevent the situation from worsening.',
          topicArea: 'mental-health',
        },
        {
          id: 'knm6-q15',
          type: 'true-false',
          question: 'In Nederland is psychische hulp via de huisarts volledig vergoed vanuit de basisverzekering, zonder eigen risico.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Basic mental health care (generalistische basis-GGZ) is covered by the basisverzekering, but the eigen risico (deductible) still applies. The annual deductible is €385 (2024) and must be paid before insurance covers the rest.',
          topicArea: 'mental-health',
        },
      ],
    },

    // ── Section 4: Huurrechten ──
    {
      id: 'knm6-s4',
      passageTitle: 'Huurrechten en Huurdersbescherming',
      instructions: 'Beantwoord de vragen over de rechten en plichten van huurders in Nederland.',
      questions: [
        {
          id: 'knm6-q16',
          type: 'multiple-choice',
          question: 'Hoeveel borg mag een verhuurder in Nederland maximaal vragen van een huurder?',
          options: [
            'Maximaal één maand huur.',
            'Maximaal twee maanden kale huur.',
            'Maximaal drie maanden huur.',
            'Er is geen wettelijk maximum voor borg.',
          ],
          correctIndex: 1,
          explanation:
            'Since 2023 the maximum security deposit a landlord may charge is two months of the base rent (kale huur). Any excess must be returned to the tenant.',
          topicArea: 'housing',
        },
        {
          id: 'knm6-q17',
          type: 'true-false',
          question: 'Een verhuurder mag de huur elk jaar verhogen met elk bedrag dat hij wil.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Rent increases are subject to legal maximums. For social housing (sociale huur) the government sets the maximum annual increase. For private rental housing, maximums also apply based on inflation and salary indices.',
          topicArea: 'housing',
        },
        {
          id: 'knm6-q18',
          type: 'multiple-choice',
          question: 'Fatima wil haar huurwoning opzeggen. Wat is de wettelijke opzegtermijn voor een huurder in Nederland?',
          options: [
            'Één week.',
            'Één maand.',
            'Drie maanden.',
            'Zes maanden.',
          ],
          correctIndex: 1,
          explanation:
            'A tenant must give one month\'s notice to terminate their rental contract, unless a longer period is agreed in the contract (maximum 3 months for the tenant). The landlord has a longer notice period.',
          topicArea: 'housing',
        },
        {
          id: 'knm6-q19',
          type: 'multiple-choice',
          question: 'Mijn verhuurder weigert een ernstige lekkage te repareren. Waar kan ik terecht?',
          options: [
            'De politie bellen.',
            'Zelf de huur stopzetten.',
            'De Huurcommissie of een rechter inschakelen.',
            'De Belastingdienst bellen.',
          ],
          correctIndex: 2,
          explanation:
            'The Huurcommissie (Rent Tribunal) handles disputes between tenants and landlords about maintenance, rent level, and service costs for social housing. For private disputes, the civil court may be needed.',
          topicArea: 'housing',
        },
        {
          id: 'knm6-q20',
          type: 'true-false',
          question: 'Een verhuurder mag een huurder op elk moment zonder reden uit de woning zetten.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Dutch law provides strong tenant protection (huurbescherming). A landlord can only terminate the rental contract on specific legal grounds (e.g. urgent personal use, serious nuisance) and must go through the courts if the tenant does not agree.',
          topicArea: 'housing',
        },
      ],
    },

    // ── Section 5: Antidiscriminatiewetgeving ──
    {
      id: 'knm6-s5',
      passageTitle: 'Antidiscriminatie en Gelijke Behandeling',
      instructions: 'Beantwoord de vragen over antidiscriminatiewetgeving in Nederland.',
      questions: [
        {
          id: 'knm6-q21',
          type: 'multiple-choice',
          question: 'Welke wet verbiedt discriminatie op grond van godsdienst, ras, geslacht en seksuele gerichtheid in Nederland?',
          options: [
            'De Arbeidswet',
            'De Wet gelijke behandeling (Algemene wet gelijke behandeling, AWGB)',
            'De Wet op de privacy (AVG)',
            'De Grondwet artikel 1, maar verder zijn er geen specifieke wetten',
          ],
          correctIndex: 1,
          explanation:
            'The Algemene wet gelijke behandeling (AWGB) prohibits discrimination on grounds including religion, belief, political opinion, race, sex, nationality, sexual orientation, and civil status. Article 1 of the Constitution also forbids discrimination.',
          topicArea: 'discrimination',
        },
        {
          id: 'knm6-q22',
          type: 'true-false',
          question: 'Discriminatie op de arbeidsmarkt op grond van leeftijd is in Nederland wettelijk verboden.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Wet gelijke behandeling op grond van leeftijd bij de arbeid (WGBL) prohibits age discrimination in employment, unless there is an objective justification.',
          topicArea: 'discrimination',
        },
        {
          id: 'knm6-q23',
          type: 'multiple-choice',
          question: 'Laila wordt door haar werkgever niet bevorderd, ondanks goede beoordelingen, terwijl minder goed beoordeelde mannelijke collega\'s wel worden bevorderd. Waar kan zij terecht?',
          options: [
            'Bij de gemeente.',
            'Bij een antidiscriminatiebureau (ADB) of het College voor de Rechten van de Mens.',
            'Alleen bij de politie.',
            'Bij de Belastingdienst.',
          ],
          correctIndex: 1,
          explanation:
            'Antidiscriminatiebureaus (ADB) give free advice and support to discrimination victims. The College voor de Rechten van de Mens investigates complaints and can issue official opinions.',
          topicArea: 'discrimination',
        },
        {
          id: 'knm6-q24',
          type: 'multiple-choice',
          question: 'Wat is het verschil tussen directe en indirecte discriminatie?',
          options: [
            'Directe discriminatie gebeurt altijd bewust; indirecte discriminatie nooit.',
            'Directe discriminatie behandelt mensen anders vanwege een beschermd kenmerk; indirecte discriminatie is een ogenschijnlijk neutrale regel die bepaalde groepen benadeelt.',
            'Indirecte discriminatie is minder ernstig en niet strafbaar.',
            'Er is geen juridisch verschil tussen de twee begrippen in Nederland.',
          ],
          correctIndex: 1,
          explanation:
            'Direct discrimination means treating someone less favourably because of a protected characteristic. Indirect discrimination occurs when a neutral rule disproportionately disadvantages a group with a protected characteristic, unless objectively justified.',
          topicArea: 'discrimination',
        },
        {
          id: 'knm6-q25',
          type: 'true-false',
          question: 'In Nederland is het strafbaar om haatzaaiende uitlatingen te doen op grond van ras of godsdienst.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Articles 137c–137e of the Dutch Criminal Code (Wetboek van Strafrecht) criminalise incitement to hatred, discrimination, or violence against people based on race, religion, sexual orientation, disability, or other grounds.',
          topicArea: 'discrimination',
        },
      ],
    },

    // ── Section 6: Kinderbescherming ──
    {
      id: 'knm6-s6',
      passageTitle: 'Kinderbescherming en Jeugdhulp',
      instructions: 'Beantwoord de vragen over kinderbescherming en jeugdhulp in Nederland.',
      questions: [
        {
          id: 'knm6-q26',
          type: 'multiple-choice',
          question: 'Wat is Veilig Thuis?',
          options: [
            'Een organisatie die gezinnen helpt bij het zoeken naar een woning.',
            'Het landelijk advies- en meldpunt huiselijk geweld en kindermishandeling.',
            'Een instelling die kinderen tijdelijk opvangt tijdens schoolvakanties.',
            'Een politie-eenheid die gespecialiseerd is in jeugdcriminaliteit.',
          ],
          correctIndex: 1,
          explanation:
            'Veilig Thuis is the national advice and reporting centre for domestic violence and child abuse. Anyone — professionals or civilians — can call them for advice (0800-2000, free).',
          topicArea: 'child-protection',
        },
        {
          id: 'knm6-q27',
          type: 'true-false',
          question: 'Iedereen in Nederland heeft een meldplicht als zij kindermishandeling vermoeden.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'There is no general legal obligation for all citizens to report child abuse, but there is a strong social expectation to report suspicions to Veilig Thuis. Certain professionals (e.g. doctors, teachers) have a professional duty of care. A statutory reporting code (meldcode) applies to many professions.',
          topicArea: 'child-protection',
        },
        {
          id: 'knm6-q28',
          type: 'multiple-choice',
          question: 'Wat is de Kinderbeschermingsmaatregel "ondertoezichtstelling" (OTS)?',
          options: [
            'Een maatregel waarbij ouders tijdelijk meer rechten krijgen over hun kind.',
            'Een maatregel waarbij de rechter bepaalt dat een jeugdbeschermer toezicht houdt op een kind en het gezin om de ontwikkeling te beschermen.',
            'Een straf voor ouders die hun kind slaan.',
            'Een vrijwillige afspraak tussen ouders en school.',
          ],
          correctIndex: 1,
          explanation:
            'An ondertoezichtstelling (OTS) is a court-ordered child protection measure where a youth protection worker supervises the family to ensure the child\'s development. Parents retain parental authority but must cooperate.',
          topicArea: 'child-protection',
        },
        {
          id: 'knm6-q29',
          type: 'multiple-choice',
          question: 'Rami maakt zich zorgen over zijn buurkind dat vaak \'s avonds alleen buiten staat en er verwaarloosd uitziet. Wat kan hij het beste doen?',
          options: [
            'Niets doen — het is niet zijn zaak.',
            'Direct de politie bellen en het kind meenemen.',
            'Contact opnemen met Veilig Thuis voor advies.',
            'Het kind zelf meenemen naar huis.',
          ],
          correctIndex: 2,
          explanation:
            'Contacting Veilig Thuis for advice is the right first step when you have concerns about a child\'s safety. They can advise on what to do next without immediately initiating a formal investigation.',
          topicArea: 'child-protection',
        },
        {
          id: 'knm6-q30',
          type: 'true-false',
          question: 'In Nederland is lichamelijke bestraffing van kinderen wettelijk verboden, ook thuis.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Since 2007, Dutch law explicitly prohibits all forms of physical punishment of children, including in the home. This is enshrined in the Civil Code (Burgerlijk Wetboek).',
          topicArea: 'child-protection',
        },
      ],
    },

    // ── Section 7: Belastingen en Toeslagen ──
    {
      id: 'knm6-s7',
      passageTitle: 'Inkomstenbelasting en Toeslagen',
      instructions: 'Beantwoord de vragen over het Nederlandse belasting- en toeslagensysteem.',
      questions: [
        {
          id: 'knm6-q31',
          type: 'multiple-choice',
          question: 'Wat is de Belastingdienst?',
          options: [
            'Een bank die leningen verstrekt aan burgers.',
            'De overheidsorganisatie die belastingen int en toeslagen uitkeert.',
            'Een verzekeringsmaatschappij voor rijksambtenaren.',
            'Een organisatie die werklozen helpt een baan te vinden.',
          ],
          correctIndex: 1,
          explanation:
            'The Belastingdienst (Tax and Customs Administration) is the Dutch government organisation responsible for collecting taxes and distributing toeslagen (benefits/allowances).',
          topicArea: 'taxation',
        },
        {
          id: 'knm6-q32',
          type: 'true-false',
          question: 'In Nederland moet u ieder jaar vóór 1 mei een belastingaangifte indienen als u een belastingaangifte heeft ontvangen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'If you receive a tax return form (aangifte) from the Belastingdienst, you must submit it by 1 May of the following year (e.g. for 2023 income: submit before 1 May 2024). You can request an extension.',
          topicArea: 'taxation',
        },
        {
          id: 'knm6-q33',
          type: 'multiple-choice',
          question: 'Wat zijn toeslagen (zoals huurtoeslag en zorgtoeslag)?',
          options: [
            'Boetes die u betaalt als u te laat belasting betaalt.',
            'Financiële bijdragen van de overheid om kosten voor wonen, zorg en kinderopvang betaalbaar te houden voor mensen met een lager inkomen.',
            'Extraatjes die werkgevers vrijwillig betalen.',
            'Belastingvoordelen die alleen gelden voor mensen met een eigen woning.',
          ],
          correctIndex: 1,
          explanation:
            'Toeslagen are government allowances to help people with lower incomes cover essential costs: huurtoeslag (rent), zorgtoeslag (health insurance), kinderopvangtoeslag (childcare), and kindgebonden budget (child benefit top-up).',
          topicArea: 'taxation',
        },
        {
          id: 'knm6-q34',
          type: 'multiple-choice',
          question: 'Elena heeft een nieuw salaris gekregen. Waarom is het belangrijk dat ze haar toeslagen direct aanpast bij de Belastingdienst?',
          options: [
            'Zodat ze meer toeslag kan aanvragen.',
            'Om terugbetaling van teveel ontvangen toeslag te voorkomen — toeslagen zijn inkomensafhankelijk.',
            'Omdat toeslagen automatisch stoppen als je loon stijgt.',
            'Omdat de Belastingdienst dit wettelijk binnen 24 uur vereist.',
          ],
          correctIndex: 1,
          explanation:
            'Toeslagen are income-dependent. If your income changes and you do not update your details, you may receive too much toeslag and have to pay it back. Always update the Belastingdienst when your income changes.',
          topicArea: 'taxation',
        },
        {
          id: 'knm6-q35',
          type: 'true-false',
          question: 'In Nederland betaalt u belasting over uw spaargeld en beleggingen (box 3), zelfs als u er geen rente op ontvangt.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'In Box 3, the Dutch tax system taxes a notional (fictitious) return on savings and investments above a threshold. You pay tax on an assumed return, regardless of actual returns received.',
          topicArea: 'taxation',
        },
      ],
    },

    // ── Section 8: Naturalisatie en Nationaliteit ──
    {
      id: 'knm6-s8',
      passageTitle: 'Naturalisatie en de Nederlandse Nationaliteit',
      instructions: 'Beantwoord de vragen over het verkrijgen van de Nederlandse nationaliteit.',
      questions: [
        {
          id: 'knm6-q36',
          type: 'multiple-choice',
          question: 'Hoelang moet u doorgaans rechtmatig in Nederland verblijven voor u kunt naturaliseren tot Nederlander?',
          options: [
            '2 jaar',
            '3 jaar',
            '5 jaar',
            '10 jaar',
          ],
          correctIndex: 2,
          explanation:
            'In general, you must have legally resided in the Netherlands for at least 5 consecutive years before you can apply for naturalisation. The period can be shorter for some groups (e.g. spouses of Dutch nationals: 3 years).',
          topicArea: 'citizenship',
        },
        {
          id: 'knm6-q37',
          type: 'true-false',
          question: 'Na naturalisatie tot Nederlander moet u in principe uw oude nationaliteit opgeven.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Netherlands generally requires applicants to give up their original nationality upon naturalisation (renunciation requirement). There are exceptions, for example for EU citizens or people from countries that do not allow renunciation.',
          topicArea: 'citizenship',
        },
        {
          id: 'knm6-q38',
          type: 'multiple-choice',
          question: 'Wat zijn de taalvereisten voor naturalisatie in Nederland?',
          options: [
            'U moet vloeiend Nederlands spreken op niveau C2.',
            'U moet het inburgeringsexamen of een gelijkwaardig diploma hebben gehaald, wat ten minste niveau A2 aantoont.',
            'Er zijn geen taalvereisten — alleen een verblijfsvergunning is nodig.',
            'U moet een taaltest afleggen bij de Raad van State.',
          ],
          correctIndex: 1,
          explanation:
            'To naturalise, you must demonstrate sufficient Dutch language proficiency, typically by passing the inburgeringsexamen (civic integration exam) at the required level, or by holding an equivalent recognised diploma.',
          topicArea: 'citizenship',
        },
        {
          id: 'knm6-q39',
          type: 'multiple-choice',
          question: 'Giulia is getrouwd met een Nederlander en woont al 3 jaar legaal in Nederland. Kan zij naturaliseren?',
          options: [
            'Nee, zij moet 5 jaar wachten zoals iedereen.',
            'Ja, voor echtgenoten van Nederlanders geldt een kortere verblijfseis van 3 jaar.',
            'Ja, maar alleen als zij haar Italiaanse nationaliteit direct opgeeft.',
            'Nee, EU-burgers kunnen niet naturaliseren in Nederland.',
          ],
          correctIndex: 1,
          explanation:
            'Spouses or registered partners of Dutch nationals who have lived in the Netherlands for at least 3 years may apply for naturalisation under a reduced residence requirement, provided all other conditions are met.',
          topicArea: 'citizenship',
        },
        {
          id: 'knm6-q40',
          type: 'true-false',
          question: 'In Nederland wordt de nationaliteit automatisch doorgegeven aan kinderen geboren uit een Nederlandse vader of moeder.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Dutch nationality is passed on by descent (ius sanguinis). A child born to at least one Dutch parent automatically acquires Dutch nationality at birth, regardless of where they are born.',
          topicArea: 'citizenship',
        },
      ],
    },
  ],
};
