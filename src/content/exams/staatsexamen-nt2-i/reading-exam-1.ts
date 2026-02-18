import type { ExamPracticeTest } from '../../types';

export const staatsexamenNt2IReading1: ExamPracticeTest = {
  id: 'staatsexamen-nt2-i-reading-1',
  examType: 'staatsexamen-nt2-i',
  skill: 'reading',
  title: 'Staatsexamen NT2 Programma I – Lezen (Oefening 1)',
  description:
    'Practice reading exam for Staatsexamen NT2 Programma I at B1 level. Read longer Dutch texts — newspaper articles, formal letters, workplace documents, and informational brochures — and answer comprehension questions. Reflects the format and difficulty of the official DUO Staatsexamen.',
  timeLimitMinutes: 75,
  passingScore: 60,
  totalQuestions: 30,
  sections: [

    // ── Section 1: Newspaper article ──
    {
      id: 'nt2-i-r1-s1',
      passageTitle: 'Tekst 1: Meer mensen werken thuis',
      passage:
        'Steeds meer Nederlanders werken een deel van de week thuis. Dat blijkt uit een onderzoek van het Centraal Bureau voor de Statistiek (CBS). In 2019 werkte ongeveer 14% van de werknemers regelmatig thuis. In 2023 is dat gestegen naar ruim 40%.\n\nVolgens de onderzoekers heeft de coronapandemie deze verandering versneld. "Veel bedrijven hebben gezien dat thuiswerken goed werkt en zijn ermee doorgegaan," zegt onderzoeker Miriam de Vries. "Werknemers waarderen de flexibiliteit en besparen op reistijd."\n\nToch zijn niet alle werkgevers even enthousiast. Sommige bedrijven vinden dat samenwerking en creativiteit lijden onder het thuiswerken. "Je mist de spontane gesprekken bij het koffiezetapparaat," zegt directeur Hans Kuijpers van een groot marketingbedrijf. "Die zijn juist heel belangrijk voor innovatie."\n\nEen groeiend aantal bedrijven hanteert nu een hybride model: werknemers werken een paar dagen thuis en een paar dagen op kantoor. Zo proberen zij de voordelen van thuiswerken te combineren met de voordelen van werken op kantoor.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q1',
          type: 'multiple-choice',
          question: 'Wat is het onderwerp van dit artikel?',
          options: [
            'De gevolgen van de coronapandemie voor de economie.',
            'De toename van thuiswerken in Nederland.',
            'De nadelen van werken op kantoor.',
          ],
          correctIndex: 1,
          explanation: 'The article is about the increase in working from home in the Netherlands.',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q2',
          type: 'multiple-choice',
          question: 'Hoeveel procent van de werknemers werkte in 2023 regelmatig thuis?',
          options: ['Ongeveer 14%', 'Ruim 40%', 'Meer dan 60%'],
          correctIndex: 1,
          explanation: '"In 2023 is dat gestegen naar ruim 40%."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q3',
          type: 'multiple-choice',
          question: 'Wat vindt directeur Hans Kuijpers een nadeel van thuiswerken?',
          options: [
            'Werknemers besparen te veel op reistijd.',
            'Spontane gesprekken die belangrijk zijn voor innovatie, worden gemist.',
            'Thuiswerken kost bedrijven te veel geld.',
          ],
          correctIndex: 1,
          explanation: '"Je mist de spontane gesprekken bij het koffiezetapparaat. Die zijn juist heel belangrijk voor innovatie."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q4',
          type: 'multiple-choice',
          question: 'Wat is een hybride model?',
          options: [
            'Werknemers werken altijd thuis.',
            'Werknemers werken afwisselend thuis en op kantoor.',
            'Werknemers kiezen zelf wanneer ze werken.',
          ],
          correctIndex: 1,
          explanation: '"Werknemers werken een paar dagen thuis en een paar dagen op kantoor."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q5',
          type: 'true-false',
          question: 'Alle werkgevers zijn enthousiast over thuiswerken.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"Toch zijn niet alle werkgevers even enthousiast." = not all employers are equally enthusiastic.',
          topicArea: 'work',
        },
      ],
    },

    // ── Section 2: Formal letter from an employer ──
    {
      id: 'nt2-i-r1-s2',
      passageTitle: 'Tekst 2: Brief van de werkgever',
      passage:
        'Amsterdam, 12 september 2024\n\nGeachte mevrouw Bergström,\n\nNaar aanleiding van ons gesprek op 5 september wil ik u bevestigen dat u per 1 november 2024 in dienst treedt bij Logistics Solutions BV als administratief medewerker.\n\nUw arbeidscontract heeft een proeftijd van twee maanden. Gedurende de proeftijd kunnen beide partijen het contract zonder opgave van reden opzeggen.\n\nU werkt 32 uur per week, verdeeld over vier dagen. Uw brutosalaris bedraagt €2.450 per maand. U heeft recht op 25 vakantiedagen per jaar.\n\nWij verzoeken u vóór 1 oktober de bijgevoegde formulieren ingevuld en ondertekend te retourneren. Indien u vragen heeft, kunt u contact opnemen met onze HR-afdeling via hr@logisticssolutions.nl.\n\nWij verheugen ons op een goede samenwerking.\n\nMet vriendelijke groet,\nThomas Willems\nDirecteur Logistics Solutions BV',
      instructions: 'Lees de brief en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q6',
          type: 'multiple-choice',
          question: 'Wanneer begint mevrouw Bergström bij haar nieuwe werkgever?',
          options: ['1 september 2024', '1 oktober 2024', '1 november 2024'],
          correctIndex: 2,
          explanation: '"U treedt per 1 november 2024 in dienst."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q7',
          type: 'multiple-choice',
          question: 'Wat betekent "proeftijd" in deze brief?',
          options: [
            'Een periode waarin het salaris lager is.',
            'Een periode waarin beide partijen het contract kunnen opzeggen zonder reden.',
            'Een periode van extra vakantiedagen.',
          ],
          correctIndex: 1,
          explanation: '"Gedurende de proeftijd kunnen beide partijen het contract zonder opgave van reden opzeggen."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q8',
          type: 'multiple-choice',
          question: 'Hoeveel vakantiedagen heeft mevrouw Bergström per jaar?',
          options: ['20 dagen', '25 dagen', '32 dagen'],
          correctIndex: 1,
          explanation: '"U heeft recht op 25 vakantiedagen per jaar."',
          topicArea: 'work',
        },
        {
          id: 'nt2-i-r1-q9',
          type: 'true-false',
          question: 'Mevrouw Bergström moet de formulieren vóór 1 november terugsturen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"Wij verzoeken u vóór 1 oktober de formulieren te retourneren." — the deadline is 1 October, not 1 November.',
          topicArea: 'work',
        },
      ],
    },

    // ── Section 3: Informational brochure ──
    {
      id: 'nt2-i-r1-s3',
      passageTitle: 'Tekst 3: De Nederlandse belasting',
      passage:
        'Belastingaangifte doen in Nederland\n\nAls u in Nederland woont en inkomsten heeft, moet u ieder jaar belastingaangifte doen. Dit doet u bij de Belastingdienst. De aangifte gaat over het vorige jaar. In 2024 doet u dus aangifte over 2023.\n\nWanneer moet u aangifte doen?\nU ontvangt een brief van de Belastingdienst als u aangifte moet doen. In de brief staat voor welke datum u klaar moet zijn. Meestal is dit 1 mei.\n\nHoe doet u aangifte?\nU kunt aangifte doen via de website van de Belastingdienst (www.belastingdienst.nl). Hiervoor heeft u een DigiD nodig. U kunt ook hulp vragen bij een belastingconsulent of bij organisaties die gratis belastinghulp aanbieden.\n\nTeruggave of bijbetaling\nNa uw aangifte berekent de Belastingdienst of u geld terugkrijgt of moet bijbetalen. Als u te veel belasting heeft betaald via uw loon, krijgt u geld terug. Heeft u te weinig betaald, dan moet u bijbetalen.\n\nBelangrijke tip: Bewaar altijd uw loonstrookjes, bankafschriften en andere financiële documenten. U heeft deze nodig voor uw aangifte.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q10',
          type: 'multiple-choice',
          question: 'Wat is de gewone deadline voor de belastingaangifte?',
          options: ['1 januari', '1 mei', '1 september'],
          correctIndex: 1,
          explanation: '"Meestal is dit 1 mei."',
          topicArea: 'civic',
        },
        {
          id: 'nt2-i-r1-q11',
          type: 'multiple-choice',
          question: 'Wat heeft u nodig om online aangifte te doen?',
          options: ['Een paspoort en een rijbewijs.', 'Een DigiD.', 'Een brief van de gemeente.'],
          correctIndex: 1,
          explanation: '"Hiervoor heeft u een DigiD nodig."',
          topicArea: 'civic',
        },
        {
          id: 'nt2-i-r1-q12',
          type: 'multiple-choice',
          question: 'U heeft in 2023 te weinig belasting betaald. Wat gebeurt er?',
          options: [
            'U krijgt geld terug van de Belastingdienst.',
            'U moet geld bijbetalen aan de Belastingdienst.',
            'U hoeft niets te doen.',
          ],
          correctIndex: 1,
          explanation: '"Heeft u te weinig betaald, dan moet u bijbetalen."',
          topicArea: 'civic',
        },
        {
          id: 'nt2-i-r1-q13',
          type: 'true-false',
          question: 'U kunt gratis hulp krijgen bij uw belastingaangifte.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"Organisaties die gratis belastinghulp aanbieden" = organisations that offer free tax assistance.',
          topicArea: 'civic',
        },
      ],
    },

    // ── Section 4: Opinion piece / magazine article ──
    {
      id: 'nt2-i-r1-s4',
      passageTitle: 'Tekst 4: Leren een nieuwe taal: tips van experts',
      passage:
        'Het leren van een nieuwe taal is voor velen een uitdaging. Toch zijn er wetenschappelijk onderbouwde strategieën die het proces aanzienlijk kunnen versnellen.\n\nExpert Nora van den Berg, taaldocente aan de Universiteit van Amsterdam, benadrukt het belang van dagelijkse oefening. "Vijftien minuten per dag is veel effectiever dan één keer per week drie uur studeren," zegt ze. "Het brein onthoudt informatie beter als je er regelmatig mee bezig bent."\n\nEen andere belangrijke strategie is immersie: zoveel mogelijk omringen met de taal die je leert. Dit betekent films kijken, muziek luisteren, boeken lezen en proberen te spreken met native speakers. "Fouten maken is niet erg," zegt Van den Berg. "Het is juist een teken dat je de taal actief gebruikt."\n\nTaalleraar Marco Pietersen voegt eraan toe dat motivatie cruciaal is. "Als je een duidelijk doel hebt — voor werk, voor je studie, voor je omgeving — dan volhoudt je veel beter." Hij raadt aan een taaltandem te zoeken: iemand die jouw taal wil leren terwijl jij zijn of haar taal leert. Zo oefen je samen en help je elkaar.\n\nTot slot wijzen experts erop dat perfectie niet het doel moet zijn. Communicatie is het hoofddoel van taal, en dat bereik je door te oefenen, ook als je nog niet alles perfect beheerst.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q14',
          type: 'multiple-choice',
          question: 'Wat zegt expert Nora van den Berg over de beste manier van studeren?',
          options: [
            'Één keer per week drie uur studeren is het effectiefst.',
            'Elke dag een kwartier studeren is effectiever dan één keer per week drie uur.',
            'Je moet minstens een uur per dag studeren.',
          ],
          correctIndex: 1,
          explanation: '"Vijftien minuten per dag is veel effectiever dan één keer per week drie uur studeren."',
          topicArea: 'language-learning',
        },
        {
          id: 'nt2-i-r1-q15',
          type: 'multiple-choice',
          question: 'Wat betekent "immersie" in de context van taal leren?',
          options: [
            'Alleen grammatica studeren.',
            'Zoveel mogelijk omringen met de taal die je leert.',
            'Elke dag een woordenboek lezen.',
          ],
          correctIndex: 1,
          explanation: '"Immersie: zoveel mogelijk omringen met de taal die je leert."',
          topicArea: 'language-learning',
        },
        {
          id: 'nt2-i-r1-q16',
          type: 'multiple-choice',
          question: 'Wat is een taaltandem?',
          options: [
            'Een fiets waarmee je naar de taalles rijdt.',
            'Een persoon die jouw taal leert terwijl jij zijn of haar taal leert.',
            'Een computerprogramma voor taalonderwijs.',
          ],
          correctIndex: 1,
          explanation: '"Iemand die jouw taal wil leren terwijl jij zijn of haar taal leert."',
          topicArea: 'language-learning',
        },
        {
          id: 'nt2-i-r1-q17',
          type: 'true-false',
          question: 'Volgens de experts is het hoofddoel van taal perfectie bereiken.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"Perfectie is niet het doel … Communicatie is het hoofddoel van taal."',
          topicArea: 'language-learning',
        },
        {
          id: 'nt2-i-r1-q18',
          type: 'multiple-choice',
          question: 'Waarom is motivatie volgens Marco Pietersen zo belangrijk?',
          options: [
            'Omdat je dan minder fouten maakt.',
            'Omdat je dan beter volhoudt bij het leren.',
            'Omdat je dan sneller spreekt als een native speaker.',
          ],
          correctIndex: 1,
          explanation: '"Als je een duidelijk doel hebt … dan volhoudt je veel beter."',
          topicArea: 'language-learning',
        },
      ],
    },

    // ── Section 5: Workplace document / memo ──
    {
      id: 'nt2-i-r1-s5',
      passageTitle: 'Tekst 5: Memo over nieuwe veiligheidsregels',
      passage:
        'AAN: Alle medewerkers\nVAN: Facility Management\nONDERWERP: Nieuwe veiligheidsregels per 1 oktober\nDATUM: 15 september 2024\n\nVanaf 1 oktober gelden er nieuwe veiligheidsregels in ons gebouw. Wij vragen uw aandacht voor het volgende:\n\n1. Toegangspassen\nAlle medewerkers zijn verplicht hun toegangspas altijd zichtbaar te dragen op de werkplek. Bezoekers moeten zich melden bij de receptie en krijgen een bezoekerspas.\n\n2. Nooduitgangen\nHoud nooduitgangen te allen tijde vrij. Het is verboden spullen voor of bij een nooduitgang te plaatsen. Bij een brandalarm verlaat u het gebouw direct via de dichtstbijzijnde nooduitgang en verzamelt u zich op het parkeerterrein aan de achterkant.\n\n3. Sleutelbeheer\nSleutels mogen niet worden doorgegeven aan collega\'s of derden. Als u een sleutel verliest, meldt u dit direct bij Facility Management.\n\nBij vragen kunt u terecht bij Facility Management, kamer 1.04, of via fm@bedrijf.nl.\n\nHartelijk dank voor uw medewerking.',
      instructions: 'Lees de memo en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q19',
          type: 'multiple-choice',
          question: 'Vanaf wanneer gelden de nieuwe veiligheidsregels?',
          options: ['15 september', '1 oktober', '1 november'],
          correctIndex: 1,
          explanation: '"Vanaf 1 oktober gelden er nieuwe veiligheidsregels."',
          topicArea: 'workplace',
        },
        {
          id: 'nt2-i-r1-q20',
          type: 'multiple-choice',
          question: 'Wat moeten bezoekers doen als ze het gebouw binnenkomen?',
          options: [
            'Ze mogen direct naar hun afspraak gaan.',
            'Ze moeten zich melden bij de receptie en krijgen een bezoekerspas.',
            'Ze moeten hun eigen toegangspas meenemen.',
          ],
          correctIndex: 1,
          explanation: '"Bezoekers moeten zich melden bij de receptie en krijgen een bezoekerspas."',
          topicArea: 'workplace',
        },
        {
          id: 'nt2-i-r1-q21',
          type: 'multiple-choice',
          question: 'Waar moeten medewerkers naartoe bij een brandalarm?',
          options: [
            'Naar de receptie op de begane grond.',
            'Naar het parkeerterrein aan de achterkant.',
            'Naar kamer 1.04.',
          ],
          correctIndex: 1,
          explanation: '"U verzamelt zich op het parkeerterrein aan de achterkant."',
          topicArea: 'workplace',
        },
        {
          id: 'nt2-i-r1-q22',
          type: 'true-false',
          question: 'U mag uw sleutel aan een collega geven als u ziek bent.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 1,
          explanation: '"Sleutels mogen niet worden doorgegeven aan collega\'s of derden." = Keys may not be passed to colleagues or third parties.',
          topicArea: 'workplace',
        },
      ],
    },

    // ── Section 6: Health / social information ──
    {
      id: 'nt2-i-r1-s6',
      passageTitle: 'Tekst 6: Mantelzorg in Nederland',
      passage:
        'Mantelzorg is de zorg die mensen vrijwillig geven aan een zieke, gehandicapte of oudere persoon uit hun omgeving. Denk aan een familielid, vriend of buur. Mantelzorg is niet hetzelfde als vrijwilligerswerk: mantelzorgers zorgen voor iemand met wie ze een persoonlijke band hebben.\n\nIn Nederland zorgen meer dan 5 miljoen mensen voor een naaste. Dat is bijna een derde van de bevolking. Veel mantelzorgers combineren de zorg met hun werk en gezin. Dit kan zwaar zijn.\n\nOverbelasting\nEen groot probleem bij mantelzorg is overbelasting. Mantelzorgers vergeten soms voor zichzelf te zorgen. Signalen van overbelasting zijn: altijd moe zijn, geen tijd meer hebben voor jezelf, prikkelbaar worden, of het gevoel hebben dat je er niet meer tegenop kunt.\n\nSteun en respijtzorg\nAls mantelzorger hoeft u het niet alleen te doen. U kunt steun vragen bij het Mantelzorgsteunpunt in uw gemeente. Ook bestaat er respijtzorg: tijdelijke overname van de zorg zodat de mantelzorger even kan uitrusten. Informeer bij uw gemeente of zorginstelling.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q23',
          type: 'multiple-choice',
          question: 'Wat is mantelzorg?',
          options: [
            'Professionele thuiszorg betaald door de gemeente.',
            'Vrijwillige zorg aan een bekende zoals een familielid of vriend.',
            'Zorg in een verpleeghuis.',
          ],
          correctIndex: 1,
          explanation: '"Mantelzorg is de zorg die mensen vrijwillig geven aan een zieke, gehandicapte of oudere persoon uit hun omgeving."',
          topicArea: 'healthcare',
        },
        {
          id: 'nt2-i-r1-q24',
          type: 'multiple-choice',
          question: 'Welk signaal wijst op overbelasting bij een mantelzorger?',
          options: [
            'Meer vrije tijd hebben dan normaal.',
            'Altijd moe zijn en geen tijd meer voor jezelf.',
            'Veel contact hebben met de huisarts.',
          ],
          correctIndex: 1,
          explanation: '"Signalen van overbelasting zijn: altijd moe zijn, geen tijd meer hebben voor jezelf, prikkelbaar worden…"',
          topicArea: 'healthcare',
        },
        {
          id: 'nt2-i-r1-q25',
          type: 'multiple-choice',
          question: 'Wat is respijtzorg?',
          options: [
            'Extra geld voor mantelzorgers.',
            'Tijdelijke overname van de zorg zodat de mantelzorger kan uitrusten.',
            'Een cursus voor nieuwe mantelzorgers.',
          ],
          correctIndex: 1,
          explanation: '"Respijtzorg: tijdelijke overname van de zorg zodat de mantelzorger even kan uitrusten."',
          topicArea: 'healthcare',
        },
        {
          id: 'nt2-i-r1-q26',
          type: 'true-false',
          question: 'Meer dan 5 miljoen mensen in Nederland zorgen voor een naaste.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"In Nederland zorgen meer dan 5 miljoen mensen voor een naaste." = True.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Section 7: Public information / government communication ──
    {
      id: 'nt2-i-r1-s7',
      passageTitle: 'Tekst 7: Huursubsidie aanvragen',
      passage:
        'Huurtoeslag: wat is het en hoe vraagt u het aan?\n\nHuurtoeslag (ook wel huursubsidie genoemd) is een bijdrage van de overheid in de huurkosten. U kunt huurtoeslag aanvragen als u een huurwoning heeft en uw inkomen niet te hoog is.\n\nVoorwaarden\n• U huurt een zelfstandige woning (met eigen voordeur, keuken en toilet)\n• Uw huur is niet hoger dan de maximale huurgrens (in 2024: €879,66 per maand)\n• Uw inkomen is onder de inkomensgrens\n• U bent 18 jaar of ouder\n• U heeft de Nederlandse nationaliteit of een geldige verblijfsvergunning\n\nHoe vraagt u het aan?\nU vraagt huurtoeslag aan via de website van de Belastingdienst (toeslagen.nl). U heeft hiervoor een DigiD nodig. Het is verstandig de aanvraag te doen zodra u de huurwoning betrekt.\n\nWanneer ontvangt u de toeslag?\nU ontvangt iedere maand een voorschot op uw rekening. Na afloop van het jaar controleert de Belastingdienst of uw inkomen klopt. Als u te veel heeft ontvangen, moet u dit terugbetalen.',
      instructions: 'Lees de tekst en beantwoord de vragen.',
      questions: [
        {
          id: 'nt2-i-r1-q27',
          type: 'multiple-choice',
          question: 'Wat is huurtoeslag?',
          options: [
            'Een goedkope huurwoning van de gemeente.',
            'Een bijdrage van de overheid in de huurkosten.',
            'Een lening voor de aanbetaling van een huurwoning.',
          ],
          correctIndex: 1,
          explanation: '"Huurtoeslag is een bijdrage van de overheid in de huurkosten."',
          topicArea: 'housing',
        },
        {
          id: 'nt2-i-r1-q28',
          type: 'multiple-choice',
          question: 'U woont in een kamer met gedeelde keuken en toilet. Heeft u recht op huurtoeslag?',
          options: [
            'Ja, iedereen met een laag inkomen heeft recht op huurtoeslag.',
            'Nee, want u heeft geen zelfstandige woning met eigen keuken en toilet.',
            'Ja, als uw kamer goedkoop genoeg is.',
          ],
          correctIndex: 1,
          explanation: 'One requirement is: "U huurt een zelfstandige woning (met eigen voordeur, keuken en toilet)." A shared room does not qualify.',
          topicArea: 'housing',
        },
        {
          id: 'nt2-i-r1-q29',
          type: 'multiple-choice',
          question: 'Hoe ontvangt u de huurtoeslag?',
          options: [
            'Eén keer per jaar een groot bedrag.',
            'Elke maand een voorschot op uw rekening.',
            'Via een korting op uw huurrekening.',
          ],
          correctIndex: 1,
          explanation: '"U ontvangt iedere maand een voorschot op uw rekening."',
          topicArea: 'housing',
        },
        {
          id: 'nt2-i-r1-q30',
          type: 'true-false',
          question: 'Als u aan het einde van het jaar te veel huurtoeslag heeft ontvangen, moet u dit terugbetalen.',
          options: ['Waar', 'Niet waar'],
          correctIndex: 0,
          explanation: '"Als u te veel heeft ontvangen, moet u dit terugbetalen." = True.',
          topicArea: 'housing',
        },
      ],
    },
  ],
};
