import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam7: ExamPracticeTest = {
  id: 'knm-practice-7',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 7 – Kennis van de Nederlandse Maatschappij',
  description:
    'Practice exam for the Kennis van de Nederlandse Maatschappij (KNM) component of the inburgeringsexamen. Tests knowledge of Dutch society, norms, institutions, and daily life. This exam covers the Dutch political system, education structure, healthcare access, social norms and etiquette, the legal system, environmental rules, media literacy, and the welfare state.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Het politieke stelsel ──
    {
      id: 'knm7-s1',
      passageTitle: 'Het Nederlandse Politieke Stelsel',
      instructions: 'Beantwoord de vragen over de Nederlandse politiek en democratie.',
      questions: [
        {
          id: 'knm7-q1',
          type: 'multiple-choice',
          question: 'Hoe vaak worden de Tweede Kamerverkiezingen in Nederland normaliter gehouden?',
          options: [
            'Elke twee jaar.',
            'Elke vier jaar.',
            'Elke vijf jaar.',
            'Elke zes jaar.',
          ],
          correctIndex: 1,
          explanation:
            'Elections for the Tweede Kamer (House of Representatives) are normally held every four years, unless the government falls earlier and early elections are called.',
          topicArea: 'politics',
        },
        {
          id: 'knm7-q2',
          type: 'multiple-choice',
          question: 'Wat is de taak van de Eerste Kamer in Nederland?',
          options: [
            'Het schrijven van nieuwe wetten.',
            'Het toetsen en goedkeuren van wetten die door de Tweede Kamer zijn aangenomen.',
            'Het benoemen van ministers.',
            'Het uitvoeren van het regeringsbeleid.',
          ],
          correctIndex: 1,
          explanation:
            'The Eerste Kamer (Senate) reviews and approves (or rejects) legislation already passed by the Tweede Kamer. It does not write new laws itself.',
          topicArea: 'politics',
        },
        {
          id: 'knm7-q3',
          type: 'true-false',
          question: 'In Nederland heeft de koning of koningin grote politieke macht en kan hij of zij zelfstandig wetten maken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The Netherlands has a constitutional monarchy. The king or queen has a mainly ceremonial role. Real political power lies with the elected parliament and government. The monarch signs (bekrachtigt) laws but cannot make them independently.',
          topicArea: 'politics',
        },
        {
          id: 'knm7-q4',
          type: 'multiple-choice',
          question: 'Welke stad is de regeringszetel (het bestuurlijk centrum) van Nederland?',
          options: ['Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht'],
          correctIndex: 2,
          explanation:
            'The Hague (Den Haag) is the seat of government — parliament, government ministries, and the Supreme Court are located there. Amsterdam is the constitutional capital.',
          topicArea: 'politics',
        },
        {
          id: 'knm7-q5',
          type: 'multiple-choice',
          question: 'Wat is een coalitieakkoord?',
          options: [
            'Een verdrag tussen Nederland en andere landen.',
            'Een schriftelijke afspraak tussen politieke partijen over hun gezamenlijk regeringsbeleid.',
            'De officiële uitslag van de verkiezingen.',
            'Een wet die alle partijen verplicht samen te werken.',
          ],
          correctIndex: 1,
          explanation:
            'A coalitieakkoord (coalition agreement) is a written agreement between the political parties that form a coalition government, outlining their shared policy programme for the term.',
          topicArea: 'politics',
        },
      ],
    },

    // ── Section 2: Het onderwijssysteem ──
    {
      id: 'knm7-s2',
      passageTitle: 'Het Nederlandse Onderwijssysteem',
      instructions: 'Beantwoord de vragen over onderwijs in Nederland.',
      questions: [
        {
          id: 'knm7-q6',
          type: 'multiple-choice',
          question: 'Op welke leeftijd begint de leerplicht in Nederland?',
          options: ['4 jaar', '5 jaar', '6 jaar', '7 jaar'],
          correctIndex: 1,
          explanation:
            'Children in the Netherlands are legally required to attend school from the age of 5 (though most start at 4). The full leerplicht (compulsory education) applies from age 5 until 16 (full-time) and then partially until 18.',
          topicArea: 'education',
        },
        {
          id: 'knm7-q7',
          type: 'multiple-choice',
          question: 'Welke schoolsoort bereidt leerlingen het beste voor op de universiteit?',
          options: ['Vmbo', 'Havo', 'Vwo', 'Mbo'],
          correctIndex: 2,
          explanation:
            'VWO (Voorbereidend Wetenschappelijk Onderwijs) is the highest level of secondary school and prepares students for university (WO). HAVO leads to HBO (universities of applied sciences).',
          topicArea: 'education',
        },
        {
          id: 'knm7-q8',
          type: 'true-false',
          question: 'Basisonderwijs in Nederland is verplicht gratis voor alle kinderen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Primary school (basisonderwijs) in the Netherlands is free and compulsory. Schools may ask for voluntary contributions (vrijwillige ouderbijdrage) but these cannot be required.',
          topicArea: 'education',
        },
        {
          id: 'knm7-q9',
          type: 'multiple-choice',
          question: 'Fatima wil graag een praktijkgerichte beroepsopleiding volgen na de middelbare school. Welk type onderwijs past het best?',
          options: ['WO (wetenschappelijk onderwijs)', 'Hbo (hoger beroepsonderwijs)', 'Mbo (middelbaar beroepsonderwijs)', 'Pro (praktijkonderwijs)'],
          correctIndex: 2,
          explanation:
            'MBO (middelbaar beroepsonderwijs) provides vocational and professional training at secondary level. It has four levels (MBO 1–4) and leads directly to a profession.',
          topicArea: 'education',
        },
        {
          id: 'knm7-q10',
          type: 'multiple-choice',
          question: 'Wat is een citotoets (of Doorstroomtoets)?',
          options: [
            'Een rijexamen voor jongeren.',
            'Een toets aan het einde van de basisschool die helpt bij het schooladvies voor de middelbare school.',
            'Een examen dat bepaalt of een kind naar het speciaal onderwijs gaat.',
            'Een test die kinderen moeten doen voor zij naar de basisschool gaan.',
          ],
          correctIndex: 1,
          explanation:
            'The Doorstroomtoets (formerly called Cito-toets) is taken at the end of primary school (group 8) and provides an objective assessment to support the school advice (schooladvies) for secondary school placement.',
          topicArea: 'education',
        },
      ],
    },

    // ── Section 3: Gezondheidszorg en huisarts ──
    {
      id: 'knm7-s3',
      passageTitle: 'De Nederlandse Gezondheidszorg',
      instructions: 'Beantwoord de vragen over de Nederlandse gezondheidszorg.',
      questions: [
        {
          id: 'knm7-q11',
          type: 'multiple-choice',
          question: 'Wat is de rol van de huisarts in het Nederlandse zorgstelsel?',
          options: [
            'De huisarts is een specialist die alleen ernstige ziekten behandelt.',
            'De huisarts is de eerste lijn van de zorg en verwijst patiënten zo nodig door naar specialisten.',
            'De huisarts regelt alleen recepten voor medicijnen.',
            'De huisarts is alleen voor mensen zonder zorgverzekering.',
          ],
          correctIndex: 1,
          explanation:
            'The huisarts (GP) is the central first point of contact in Dutch healthcare. They treat a wide range of conditions and provide referrals to specialists when necessary.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm7-q12',
          type: 'true-false',
          question: 'In Nederland bent u verplicht een zorgverzekering te hebben.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Everyone living or working in the Netherlands is legally obliged to take out a basic health insurance (basisverzekering). If you do not, you can receive a fine from the CAK.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm7-q13',
          type: 'multiple-choice',
          question: 'Wanneer belt u het alarmnummer 112 in Nederland?',
          options: [
            'Altijd als u een dokter nodig heeft.',
            'Alleen als u een afspraak wilt maken bij de huisarts.',
            'Bij levensbedreigende noodsituaties: brand, ernstig ongeluk, of misdrijf in uitvoering.',
            'Als u informatie wilt over medicijnen.',
          ],
          correctIndex: 2,
          explanation:
            '112 is the European emergency number for life-threatening situations — fire, serious accidents, crimes in progress. For medical questions, you should call the huisarts or the huisartsenpost (0900-number).',
          topicArea: 'healthcare',
        },
        {
          id: 'knm7-q14',
          type: 'multiple-choice',
          question: 'Wat is een eigen risico bij de zorgverzekering?',
          options: [
            'Het maandelijkse premie dat u betaalt voor uw zorgverzekering.',
            'Het bedrag dat u jaarlijks zelf betaalt voor zorgkosten voordat de verzekering bijspringt.',
            'Een extra verzekering die u kunt afsluiten bovenop de basisverzekering.',
            'De vergoeding die de overheid betaalt voor mensen met een laag inkomen.',
          ],
          correctIndex: 1,
          explanation:
            'The eigen risico is the annual deductible — the amount you pay yourself for healthcare costs before your insurance starts covering them. In 2024 the mandatory eigen risico is €385 per year.',
          topicArea: 'healthcare',
        },
        {
          id: 'knm7-q15',
          type: 'true-false',
          question: 'Huisartsbezoeken in Nederland zijn gratis en vallen niet onder het eigen risico.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Visits to the GP (huisarts) are covered by the basisverzekering and do NOT fall under the eigen risico. You do not pay for GP consultations out of pocket.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 4: Sociale normen en omgangsvormen ──
    {
      id: 'knm7-s4',
      passageTitle: 'Sociale Normen en Omgangsvormen in Nederland',
      instructions: 'Beantwoord de vragen over Nederlandse normen, waarden en omgangsvormen.',
      questions: [
        {
          id: 'knm7-q16',
          type: 'multiple-choice',
          question: 'Wat wordt in Nederland als de meest directe manier van communiceren beschouwd?',
          options: [
            'Altijd beleefd omschrijven wat je bedoelt en nooit rechtstreeks kritiek geven.',
            'Openlijk en eerlijk zeggen wat je denkt, ook als dat kritisch is.',
            'Altijd via een tussenpersoon communiceren.',
            'Alleen via schriftelijke communicatie.',
          ],
          correctIndex: 1,
          explanation:
            'Dutch culture is known for directness (directheid). Being straightforward and honest is valued, even if it may seem blunt compared to other cultures.',
          topicArea: 'social-norms',
        },
        {
          id: 'knm7-q17',
          type: 'true-false',
          question: 'In Nederland is het gebruikelijk om op tijd te komen voor een afspraak.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Punctuality is important in Dutch culture. Arriving on time (or a few minutes early) for appointments — whether social or professional — is considered respectful.',
          topicArea: 'social-norms',
        },
        {
          id: 'knm7-q18',
          type: 'multiple-choice',
          question: 'Boris is uitgenodigd voor een verjaardagsfeest van een Nederlandse collega om 19:00. Om hoe laat is het het meest gepast te arriveren?',
          options: [
            'Om 18:00 — vroeg komen is beleefd.',
            'Om 19:00 of een paar minuten later.',
            'Om 20:30 — laat aankomen toont respect voor de gastheer.',
            'Er is geen verwachting — wanneer u maar wilt.',
          ],
          correctIndex: 1,
          explanation:
            'In the Netherlands it is expected to arrive at or around the stated time. Arriving much early or very late is considered impolite.',
          topicArea: 'social-norms',
        },
        {
          id: 'knm7-q19',
          type: 'multiple-choice',
          question: 'Wat wordt bedoeld met "doe maar gewoon, dan doe je al gek genoeg" in de Nederlandse cultuur?',
          options: [
            'Nederlanders houden van feesten en theatraal gedrag.',
            'Bescheidenheid en normaliteit worden gewaardeerd; overdreven opschepperij is niet gewenst.',
            'Je moet altijd hetzelfde doen als je buren.',
            'Je moet nooit kritiek geven op de samenleving.',
          ],
          correctIndex: 1,
          explanation:
            'This Dutch saying reflects the cultural value of modesty and normalcy. Showing off or acting above your station is frowned upon. Equality and down-to-earth behaviour are prized.',
          topicArea: 'social-norms',
        },
        {
          id: 'knm7-q20',
          type: 'true-false',
          question: 'In Nederland is het normaal om bij een eerste ontmoeting direct te vragen naar iemands inkomen of huur.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'While Dutch people are direct in many ways, asking about someone\'s income, rent, or financial details at a first meeting is considered intrusive and not the norm.',
          topicArea: 'social-norms',
        },
      ],
    },

    // ── Section 5: Het rechtssysteem ──
    {
      id: 'knm7-s5',
      passageTitle: 'Het Nederlandse Rechtssysteem',
      instructions: 'Beantwoord de vragen over het Nederlandse rechtssysteem en rechtsbescherming.',
      questions: [
        {
          id: 'knm7-q21',
          type: 'multiple-choice',
          question: 'Wat is de Grondwet?',
          options: [
            'Het wetboek voor civiele zaken.',
            'De wet die de rechten en plichten van burgers en de inrichting van de staat vastlegt.',
            'Een verzameling van lokale gemeentelijke regels.',
            'Het verdrag waarmee Nederland lid werd van de EU.',
          ],
          correctIndex: 1,
          explanation:
            'The Grondwet (Constitution) is the highest law of the Netherlands. It lays down the fundamental rights of citizens and the structure of the state and government.',
          topicArea: 'law',
        },
        {
          id: 'knm7-q22',
          type: 'true-false',
          question: 'In Nederland is iedereen onschuldig totdat het tegendeel bewezen is.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The presumption of innocence (onschuldpresumptie) is a fundamental principle of Dutch law. A person is innocent until proven guilty by a court.',
          topicArea: 'law',
        },
        {
          id: 'knm7-q23',
          type: 'multiple-choice',
          question: 'Amara heeft een conflict met haar werkgever. Ze wil juridisch advies maar heeft weinig geld. Waar kan zij het beste terecht?',
          options: [
            'Rechtstreeks naar de rechter gaan.',
            'Het Juridisch Loket voor gratis of laagdrempelige juridische hulp.',
            'Zelf de wet opzoeken en de zaak zelfstandig aanspannen.',
            'De politie bellen.',
          ],
          correctIndex: 1,
          explanation:
            'Het Juridisch Loket provides free or low-cost legal advice. It is the first point of contact for legal questions in the Netherlands.',
          topicArea: 'law',
        },
        {
          id: 'knm7-q24',
          type: 'multiple-choice',
          question: 'Wat is de taak van de politie in Nederland?',
          options: [
            'Wetten maken en aanpassen.',
            'Rechtspreking over strafzaken.',
            'Handhaving van de openbare orde en veiligheid en opsporing van misdrijven.',
            'Uitvoeren van sociale dienstverlening.',
          ],
          correctIndex: 2,
          explanation:
            'The police (politie) are responsible for maintaining public order and safety and for investigating crimes. They do not make laws or pass judicial sentences.',
          topicArea: 'law',
        },
        {
          id: 'knm7-q25',
          type: 'true-false',
          question: 'Als u een boete heeft gekregen waarmee u het niet eens bent, kunt u bezwaar maken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'In the Netherlands you have the right to challenge (bezwaar maken) fines and administrative decisions you disagree with. There are formal procedures for this, including appeal to the courts if necessary.',
          topicArea: 'law',
        },
      ],
    },

    // ── Section 6: Milieu en afval ──
    {
      id: 'knm7-s6',
      passageTitle: 'Milieu, Afval en Duurzaamheid',
      instructions: 'Beantwoord de vragen over milieu en afvalregels in Nederland.',
      questions: [
        {
          id: 'knm7-q26',
          type: 'multiple-choice',
          question: 'Hoe worden afval en oud papier in Nederland doorgaans gescheiden?',
          options: [
            'Alles gaat in één grijze container — sorteren is niet nodig.',
            'Via aparte containers of zakken: restafval, gft, papier, glas en plastic/blik/drankpakken (pbd).',
            'Afval mag niet buiten worden gezet; u moet het zelf naar een stortplaats brengen.',
            'Alleen bedrijven hoeven afval te scheiden.',
          ],
          correctIndex: 1,
          explanation:
            'Dutch municipalities use separate collection for different waste streams: residual waste (restafval), organic/garden waste (gft), paper, glass, and plastic/cans/cartons (pbd). Rules vary slightly per municipality.',
          topicArea: 'environment',
        },
        {
          id: 'knm7-q27',
          type: 'true-false',
          question: 'In Nederland is statiegeld van toepassing op bepaalde plastic flessen en blikjes.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Netherlands has a deposit scheme (statiegeld) on large PET bottles (since 2002), and since 2023 also on small PET bottles and aluminium cans, to encourage recycling.',
          topicArea: 'environment',
        },
        {
          id: 'knm7-q28',
          type: 'multiple-choice',
          question: 'Yusuf wil zijn oude koelkast wegdoen. Wat moet hij doen?',
          options: [
            'Het gewoon op straat neerzetten voor de vuilnisdienst.',
            'Het zelf op de milieustraat (recyclestation) inleveren of via de gemeente gratis laten ophalen.',
            'Het in de grijze restafvalcontainer gooien.',
            'Zelf verbranden in de achtertuin.',
          ],
          correctIndex: 1,
          explanation:
            'Large household appliances (witgoed/bruingoed) must be taken to the milieustraat (waste recycling depot) or scheduled for a free municipal collection. Putting them on the street or in regular waste bins is not allowed.',
          topicArea: 'environment',
        },
        {
          id: 'knm7-q29',
          type: 'multiple-choice',
          question: 'Wat is de milieustraat?',
          options: [
            'Een winkelstraat met alleen milieuvriendelijke producten.',
            'Een gemeentelijk recyclestation waar u grofvuil, chemisch afval en andere bijzondere materialen gratis kunt inleveren.',
            'Een wijk waar alleen elektrische auto\'s mogen rijden.',
            'Een organisatie die milieuwetten handhaaft.',
          ],
          correctIndex: 1,
          explanation:
            'The milieustraat is a municipal recycling depot where residents can drop off bulky waste, chemical waste, garden waste, wood and other materials free of charge.',
          topicArea: 'environment',
        },
        {
          id: 'knm7-q30',
          type: 'true-false',
          question: 'In Nederland mag u oud papier in de grijze restafvalcontainer gooien.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Paper must be separated and placed in the designated paper container or bag, or taken to a paper collection point. Placing recyclables in the residual waste is discouraged and in some municipalities subject to fines.',
          topicArea: 'environment',
        },
      ],
    },

    // ── Section 7: Media en informatie ──
    {
      id: 'knm7-s7',
      passageTitle: 'Media, Nieuws en Desinformatie',
      instructions: 'Beantwoord de vragen over media en nieuws in Nederland.',
      questions: [
        {
          id: 'knm7-q31',
          type: 'multiple-choice',
          question: 'Wat is de NPO?',
          options: [
            'Een commercieel nieuwsplatform.',
            'De Nederlandse Publieke Omroep — de publieke televisie- en radiozender gefinancierd door de overheid.',
            'Een politieke partij.',
            'Een internetprovider.',
          ],
          correctIndex: 1,
          explanation:
            'NPO (Nederlandse Publieke Omroep) is the Dutch public broadcasting organisation. It provides independent news and programming funded by the government (not advertising revenue). It includes NPO 1, 2, 3 and Radio 1, 2 etc.',
          topicArea: 'media',
        },
        {
          id: 'knm7-q32',
          type: 'true-false',
          question: 'Desinformatie is onjuiste of misleidende informatie die bewust wordt verspreid om mensen te misleiden.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Desinformatie (disinformation) is deliberately false or misleading information spread to deceive. Misinformatie (misinformation) is false information spread without deliberate intent.',
          topicArea: 'media',
        },
        {
          id: 'knm7-q33',
          type: 'multiple-choice',
          question: 'Hoe kunt u controleren of een nieuwsbericht betrouwbaar is?',
          options: [
            'Als het veel wordt gedeeld op sociale media, is het altijd waar.',
            'Controleer de bron, lees meerdere betrouwbare nieuwsmedia en check of andere bronnen hetzelfde melden.',
            'Nieuws van grote bedrijven is altijd betrouwbaar.',
            'Als een familielid het heeft gedeeld, klopt het.',
          ],
          correctIndex: 1,
          explanation:
            'Media literacy involves checking the source, cross-referencing with multiple reliable outlets, and critically evaluating claims before accepting them as true.',
          topicArea: 'media',
        },
        {
          id: 'knm7-q34',
          type: 'multiple-choice',
          question: 'Selin ontvangt een e-mail die beweert van haar bank te zijn en vraagt haar wachtwoord in te voeren via een link. Wat is dit waarschijnlijk?',
          options: [
            'Een echte melding van haar bank.',
            'Een phishingpoging — een frauduleus bericht om gegevens te stelen.',
            'Normale communicatie van haar bank.',
            'Een reclame voor een nieuw bankproduct.',
          ],
          correctIndex: 1,
          explanation:
            'Banks in the Netherlands never ask for passwords or login details via email. This is a classic phishing attempt. Selin should not click the link and should report it to her bank.',
          topicArea: 'media',
        },
        {
          id: 'knm7-q35',
          type: 'true-false',
          question: 'In Nederland is persvrijheid grondwettelijk beschermd.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Freedom of the press (persvrijheid) is protected by Article 7 of the Dutch Constitution, which guarantees freedom of expression. The Netherlands consistently ranks among the top countries for press freedom.',
          topicArea: 'media',
        },
      ],
    },

    // ── Section 8: Sociale zekerheid en uitkeringen ──
    {
      id: 'knm7-s8',
      passageTitle: 'De Verzorgingsstaat en Sociale Zekerheid',
      instructions: 'Beantwoord de vragen over het Nederlandse stelsel van sociale zekerheid.',
      questions: [
        {
          id: 'knm7-q36',
          type: 'multiple-choice',
          question: 'Wat is de bijstand (Participatiewet)?',
          options: [
            'Een uitkering voor mensen die vanwege ziekte niet kunnen werken.',
            'Een minimumuitkering voor mensen die niet in hun eigen levensonderhoud kunnen voorzien en niet in aanmerking komen voor een andere uitkering.',
            'Een vergoeding voor mensen die vrijwilligerswerk doen.',
            'Een subsidie voor bedrijven die werklozen aannemen.',
          ],
          correctIndex: 1,
          explanation:
            'The bijstand (social assistance under the Participatiewet) is a last-resort minimum income benefit for people who cannot support themselves and who do not qualify for other benefits like WW or WIA. It is administered by municipalities.',
          topicArea: 'benefits',
        },
        {
          id: 'knm7-q37',
          type: 'true-false',
          question: 'De AOW is een staatspensioen dat door de overheid wordt betaald aan mensen die de AOW-leeftijd hebben bereikt.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'AOW (Algemene Ouderdomswet) is the Dutch state pension. Everyone who has lived or worked in the Netherlands receives an AOW benefit upon reaching the AOW retirement age (currently 67 years).',
          topicArea: 'benefits',
        },
        {
          id: 'knm7-q38',
          type: 'multiple-choice',
          question: 'Mohamed is ziek en kan niet werken. Hij heeft een arbeidscontract. Wie betaalt zijn loon gedurende de eerste twee jaar ziekte?',
          options: [
            'De overheid via het UWV.',
            'Zijn werkgever — werkgevers zijn verplicht minimaal 70% van het loon door te betalen.',
            'De zorgverzekering.',
            'Niemand — ziekte is een eigen risico.',
          ],
          correctIndex: 1,
          explanation:
            'In the Netherlands, employers are legally obliged to pay at least 70% of an employee\'s salary (at least minimum wage) during the first two years of illness. After two years, the UWV may take over via the WIA benefit.',
          topicArea: 'benefits',
        },
        {
          id: 'knm7-q39',
          type: 'multiple-choice',
          question: 'Wat is het minimumloon in Nederland?',
          options: [
            'Er is geen wettelijk minimumloon in Nederland.',
            'Het is hetzelfde voor iedereen, ongeacht leeftijd.',
            'Er is een wettelijk minimumloon (WML) dat jaarlijks wordt aangepast en afhankelijk is van leeftijd.',
            'Het minimumloon wordt per gemeente vastgesteld.',
          ],
          correctIndex: 2,
          explanation:
            'The Netherlands has a statutory minimum wage (Wettelijk minimumloon / WML) that is updated twice a year. From age 21 the full adult minimum wage applies; younger workers receive a percentage of the adult rate.',
          topicArea: 'benefits',
        },
        {
          id: 'knm7-q40',
          type: 'true-false',
          question: 'Iedereen in Nederland heeft recht op bijstand, ongeacht nationaliteit of verblijfsstatus.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Only people with a valid residence permit (rechtmatig verblijf) and who meet other conditions (including means testing) are entitled to bijstand. Undocumented migrants and people with certain visa types are not eligible.',
          topicArea: 'benefits',
        },
      ],
    },
  ],
};
