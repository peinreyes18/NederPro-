import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam8: ExamPracticeTest = {
  id: 'knm-practice-8',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 8 – Kennis van de Nederlandse Maatschappij',
  description:
    'Practice exam for the Kennis van de Nederlandse Maatschappij (KNM) component of the inburgeringsexamen. Tests knowledge of Dutch society, norms, institutions, and daily life. This exam covers Dutch banking and finances, the labour market, childcare and parental leave, neighbourhood participation, emergency services, Dutch history and symbols, digital government services, and patient rights.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Bankieren en geldzaken ──
    {
      id: 'knm8-s1',
      passageTitle: 'Bankieren en Persoonlijke Financiën',
      instructions: 'Beantwoord de vragen over bankieren en financiën in Nederland.',
      questions: [
        {
          id: 'knm8-q1',
          type: 'multiple-choice',
          question: 'Wat heeft u nodig om een bankrekening te openen bij een Nederlandse bank?',
          options: [
            'Alleen een e-mailadres.',
            'Een geldig identiteitsbewijs en een BSN-nummer.',
            'Een werkgeversverklaring en een huurcontract.',
            'Een verklaring van de gemeente.',
          ],
          correctIndex: 1,
          explanation:
            'To open a bank account in the Netherlands you need a valid identity document (passport, ID card, or residence permit) and a BSN (Burgerservicenummer). Some banks also ask for proof of address.',
          topicArea: 'finances',
        },
        {
          id: 'knm8-q2',
          type: 'true-false',
          question: 'iDEAL is een veelgebruikte Nederlandse betaalmethode waarmee u veilig online kunt betalen via uw eigen bank.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'iDEAL is the most widely used online payment method in the Netherlands, allowing consumers to pay directly from their own bank account. It is used by the majority of Dutch webshops and public services.',
          topicArea: 'finances',
        },
        {
          id: 'knm8-q3',
          type: 'multiple-choice',
          question: 'Wat is een automatische incasso?',
          options: [
            'Een lening die automatisch wordt verlengd.',
            'Een machtiging waarmee een bedrijf automatisch een bedrag van uw rekening afschrijft op een vaste datum.',
            'Een spaarrekening die automatisch rente toevoegt.',
            'Een creditcard die automatisch wordt afbetaald.',
          ],
          correctIndex: 1,
          explanation:
            'An automatische incasso (direct debit) is an authorisation allowing a company (e.g. for rent, insurance, utilities) to automatically debit your bank account on a set date. You can reverse (storneren) an incorrect direct debit within 56 days.',
          topicArea: 'finances',
        },
        {
          id: 'knm8-q4',
          type: 'multiple-choice',
          question: 'Nadia heeft schulden en kan ze niet meer betalen. Wat is de beste eerste stap?',
          options: [
            'De schuldeisers negeren.',
            'Contact opnemen met de gemeente of een schuldhulpverleningsorganisatie voor advies.',
            'Een nieuwe lening afsluiten om de schulden te betalen.',
            'De bankrekening opheffen.',
          ],
          correctIndex: 1,
          explanation:
            'If you cannot pay your debts, the first step is to seek help from the gemeente (municipality) or a debt counselling service (schuldhulpverlening). Ignoring debts makes the situation worse.',
          topicArea: 'finances',
        },
        {
          id: 'knm8-q5',
          type: 'true-false',
          question: 'In Nederland is het rente op een spaarrekening altijd belastingvrij.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Savings are subject to tax in Box 3 of the Dutch income tax system. A notional return on savings and investments above a certain threshold is taxed. Interest itself and dividends are included in the Box 3 calculation.',
          topicArea: 'finances',
        },
      ],
    },

    // ── Section 2: Werk en de arbeidsmarkt ──
    {
      id: 'knm8-s2',
      passageTitle: 'Werken in Nederland',
      instructions: 'Beantwoord de vragen over werken, solliciteren en arbeidsrechten in Nederland.',
      questions: [
        {
          id: 'knm8-q6',
          type: 'multiple-choice',
          question: 'Wat is het UWV?',
          options: [
            'Een vakbond voor zorgmedewerkers.',
            'Het Uitvoeringsinstituut Werknemersverzekeringen — de organisatie die onder meer WW- en WIA-uitkeringen verstrekt.',
            'Een bemiddelingsbureau voor tijdelijk werk.',
            'Een overheidsinstelling die bedrijven controleert op veiligheid.',
          ],
          correctIndex: 1,
          explanation:
            'UWV (Uitvoeringsinstituut Werknemersverzekeringen) is the Dutch social security benefits agency. It administers unemployment (WW), disability (WIA) and other employment-related benefits.',
          topicArea: 'labour',
        },
        {
          id: 'knm8-q7',
          type: 'true-false',
          question: 'In Nederland hebben werknemers recht op minimaal vier weken betaalde vakantie per jaar.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Dutch law (Burgerlijk Wetboek) guarantees a minimum of four times the number of working days per week in paid holiday. For a full-time employee (5 days per week) this is 20 days, or four weeks.',
          topicArea: 'labour',
        },
        {
          id: 'knm8-q8',
          type: 'multiple-choice',
          question: 'Wat is een cao (collectieve arbeidsovereenkomst)?',
          options: [
            'Een persoonlijk arbeidscontract tussen één werknemer en werkgever.',
            'Een collectieve overeenkomst over arbeidsvoorwaarden voor een hele sector of bedrijf, onderhandeld door vakbonden en werkgevers.',
            'Een wet die de maximale arbeidsuren vaststelt.',
            'Een uitkering voor mensen in de zorg.',
          ],
          correctIndex: 1,
          explanation:
            'A cao (collective labour agreement) is a contract negotiated between trade unions (vakbonden) and employers (or employers\' organisations) that sets minimum wages, hours, holiday and other terms for an entire sector or company.',
          topicArea: 'labour',
        },
        {
          id: 'knm8-q9',
          type: 'multiple-choice',
          question: 'Victor wordt ontslagen. Zijn werkgever wil geen ontslagvergoeding betalen. Waar kan Victor terecht?',
          options: [
            'Bij de politie.',
            'Bij zijn huisarts.',
            'Bij de rechter (kantonrechter) of een vakbond voor advies en eventuele rechtsbijstand.',
            'Bij de Belastingdienst.',
          ],
          correctIndex: 2,
          explanation:
            'For employment disputes including unfair dismissal or unpaid severance (transitievergoeding), the kantonrechter (district court) has jurisdiction. Trade unions (vakbonden) can also offer advice and support.',
          topicArea: 'labour',
        },
        {
          id: 'knm8-q10',
          type: 'true-false',
          question: 'Een zelfstandige ondernemer (zzp\'er) in Nederland heeft automatisch recht op WW als hij stopt met werken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'ZZP (self-employed) workers do not pay WW premiums and therefore are not entitled to unemployment benefits. They are responsible for their own income security, e.g. through savings or private insurance.',
          topicArea: 'labour',
        },
      ],
    },

    // ── Section 3: Kinderopvang en ouderschapsverlof ──
    {
      id: 'knm8-s3',
      passageTitle: 'Kinderopvang, Ouderschapsverlof en Gezin',
      instructions: 'Beantwoord de vragen over kinderopvang en verlof in Nederland.',
      questions: [
        {
          id: 'knm8-q11',
          type: 'multiple-choice',
          question: 'Wat is kinderopvangtoeslag?',
          options: [
            'Een gratis dagopvang die de overheid aanbiedt voor alle kinderen.',
            'Een financiële bijdrage van de overheid om de kosten van kinderopvang te verlagen voor werkende ouders.',
            'Een subsidie voor scholen om naschoolse activiteiten aan te bieden.',
            'Een vergoeding voor ouders die zelf thuisblijven om voor hun kinderen te zorgen.',
          ],
          correctIndex: 1,
          explanation:
            'Kinderopvangtoeslag is an income-dependent government allowance to help working parents pay for childcare (dagopvang or buitenschoolse opvang). It is administered by the Belastingdienst/Toeslagen.',
          topicArea: 'childcare',
        },
        {
          id: 'knm8-q12',
          type: 'true-false',
          question: 'In Nederland heeft een vader of medeouder recht op betaald geboorteverlof na de geboorte van een kind.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Partners (vader or medeouder) are entitled to one week of paid birth leave (geboorteverlof) at full pay after the birth of a child. They can also take up to 5 additional weeks of partially paid parental leave via the UWV.',
          topicArea: 'childcare',
        },
        {
          id: 'knm8-q13',
          type: 'multiple-choice',
          question: 'Wat is de peuterspeelzaal of het kinderdagverblijf?',
          options: [
            'Een school voor kinderen van 6–12 jaar.',
            'Een opvanglocatie voor jonge kinderen (0–4 jaar) waar ze onder begeleiding spelen en leren.',
            'Een sportclub voor kinderen.',
            'Een instelling voor kinderen met speciale zorgbehoeften.',
          ],
          correctIndex: 1,
          explanation:
            'Kinderdagverblijven (daycare centres) and peuterspeelzalen (toddler groups) provide supervised care and early learning for children aged 0–4. They help with language development and socialisation.',
          topicArea: 'childcare',
        },
        {
          id: 'knm8-q14',
          type: 'multiple-choice',
          question: 'Petra werkt en wil haar 2-jarige kind naar de dagopvang sturen. De opvang is duur. Wat kan zij doen?',
          options: [
            'Niets — kinderopvang is altijd volledig eigen verantwoordelijkheid.',
            'Kinderopvangtoeslag aanvragen bij de Belastingdienst.',
            'De kosten aftrekken van haar hypotheek.',
            'Een lening aanvragen bij de gemeente.',
          ],
          correctIndex: 1,
          explanation:
            'Working parents can apply for kinderopvangtoeslag via the Belastingdienst/Toeslagen portal. The allowance depends on income and the number of hours of childcare used.',
          topicArea: 'childcare',
        },
        {
          id: 'knm8-q15',
          type: 'true-false',
          question: 'Ouderschapsverlof in Nederland is altijd volledig betaald door de werkgever.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Ouderschapsverlof (parental leave) allows parents to work less for a period. Since 2022, 9 of the 26 weeks of parental leave are partially paid (about 70% of daily wage) via the UWV. The rest is unpaid unless the employer offers more.',
          topicArea: 'childcare',
        },
      ],
    },

    // ── Section 4: Buurtleven en participatie ──
    {
      id: 'knm8-s4',
      passageTitle: 'Buurtleven, Participatie en Vrijwilligerswerk',
      instructions: 'Beantwoord de vragen over buurtleven en maatschappelijke participatie.',
      questions: [
        {
          id: 'knm8-q16',
          type: 'multiple-choice',
          question: 'Wat is een VvE (Vereniging van Eigenaren)?',
          options: [
            'Een vakbond voor woningbouwcorporaties.',
            'Een organisatie van de gezamenlijke eigenaren van appartementen in een gebouw, die verantwoordelijk zijn voor het beheer en onderhoud van gemeenschappelijke ruimtes.',
            'Een keurmerk voor energiezuinige woningen.',
            'Een overheidsinstelling die huurprijzen reguleert.',
          ],
          correctIndex: 1,
          explanation:
            'A VvE (Owners\' Association) is the legal body comprising all apartment owners in a building. It is responsible for managing, maintaining and funding the common areas (hallways, roof, facade, etc.).',
          topicArea: 'neighbourhood',
        },
        {
          id: 'knm8-q17',
          type: 'true-false',
          question: 'In Nederland is het verplicht om lid te zijn van een buurtvereniging.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'There is no obligation to join a buurtvereniging (neighbourhood association). Participation in community associations is voluntary in the Netherlands.',
          topicArea: 'neighbourhood',
        },
        {
          id: 'knm8-q18',
          type: 'multiple-choice',
          question: 'Ali wil iets doen voor zijn buurt en mensen leren kennen. Welk type organisatie past hierbij?',
          options: [
            'De Belastingdienst.',
            'Een buurtvereniging, wijkcentrum of vrijwilligersorganisatie.',
            'Het UWV.',
            'De Kamer van Koophandel.',
          ],
          correctIndex: 1,
          explanation:
            'Neighbourhood associations (buurtverenigingen), community centres (wijkcentra) and volunteer organisations are ideal ways to meet people and contribute to the local community.',
          topicArea: 'neighbourhood',
        },
        {
          id: 'knm8-q19',
          type: 'multiple-choice',
          question: 'Wat is de wijkagent?',
          options: [
            'Een gemeenteraadslid dat de wijk vertegenwoordigt.',
            'Een politieagent die speciaal verantwoordelijk is voor een bepaalde wijk en het eerste aanspreekpunt is voor bewoners.',
            'Een medewerker van de woningcorporatie die huurders begeleidt.',
            'Een vrijwilliger die patrouilles loopt in de wijk.',
          ],
          correctIndex: 1,
          explanation:
            'The wijkagent (community police officer) is a police officer assigned to a specific neighbourhood. They are a point of contact for residents on local safety issues and help build trust between police and the community.',
          topicArea: 'neighbourhood',
        },
        {
          id: 'knm8-q20',
          type: 'true-false',
          question: 'In Nederland mogen burgers bij de gemeenteraad inspreken over plannen die hun buurt raken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Citizens have the right to inspreken (address the council) at municipality meetings on subjects that affect them. This is part of the democratic participation rights in the Netherlands.',
          topicArea: 'neighbourhood',
        },
      ],
    },

    // ── Section 5: Hulpdiensten en noodsituaties ──
    {
      id: 'knm8-s5',
      passageTitle: 'Hulpdiensten en Noodsituaties',
      instructions: 'Beantwoord de vragen over hulpdiensten en hoe te handelen in noodsituaties.',
      questions: [
        {
          id: 'knm8-q21',
          type: 'multiple-choice',
          question: 'Welke drie hulpdiensten zijn bereikbaar via 112?',
          options: [
            'Politie, gemeente en Belastingdienst.',
            'Politie, brandweer en ambulance.',
            'Ambulance, Rode Kruis en maatschappelijk werk.',
            'Brandweer, GGD en rijkswaterstaat.',
          ],
          correctIndex: 1,
          explanation:
            '112 connects to the three main emergency services: politie (police), brandweer (fire brigade), and ambulance. The operator will direct your call to the right service.',
          topicArea: 'emergency',
        },
        {
          id: 'knm8-q22',
          type: 'true-false',
          question: 'In Nederland zijn er sirenes die één keer per maand worden getest om burgers te waarschuwen bij rampen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Netherlands tests its national outdoor warning system (WAS — Waarschuwings- en AlarmeringStelsel) on the first Monday of each month at 12:00. The siren test lasts about 90 seconds.',
          topicArea: 'emergency',
        },
        {
          id: 'knm8-q23',
          type: 'multiple-choice',
          question: 'Wat moet u doen als u thuis een gaslek vermoedt?',
          options: [
            'Ramen en deuren sluiten en wachten tot het vanzelf overgaat.',
            'Niet bellen — gas is niet gevaarlijk als u ramen opent.',
            'Onmiddellijk de woning verlaten, geen elektrische apparaten gebruiken, en bellen met de gaslijnstoring van uw netbeheerder (of 112 bij gevaar).',
            'Alleen de buren waarschuwen.',
          ],
          correctIndex: 2,
          explanation:
            'If you suspect a gas leak: leave the premises immediately, do not operate any electrical switches or appliances (can cause sparks), ventilate if safe to do so, and call the network operator\'s emergency line or 112 if there is immediate danger.',
          topicArea: 'emergency',
        },
        {
          id: 'knm8-q24',
          type: 'multiple-choice',
          question: 'Welke app stuurt de overheid bij een noodsituatie (zoals een dijkdoorbraak of aanslag) berichten naar iedereen in het getroffen gebied?',
          options: [
            'WhatsApp.',
            'NL-Alert — het nationale noodberichtensysteem via sms/cell broadcast.',
            'De DigiD-app.',
            'De NPO-app.',
          ],
          correctIndex: 1,
          explanation:
            'NL-Alert is the Dutch national emergency alert system. It sends messages directly to mobile phones in the affected area via cell broadcast (no app or registration required). Messages appear automatically on the screen.',
          topicArea: 'emergency',
        },
        {
          id: 'knm8-q25',
          type: 'true-false',
          question: 'Als u getuige bent van een verkeersongeluk in Nederland, bent u wettelijk verplicht hulp te verlenen als dat veilig is.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Article 450 of the Dutch Criminal Code (Wetboek van Strafrecht) obliges anyone who can provide assistance to a person in urgent need to do so, provided it does not endanger themselves or others. Failure to do so is a criminal offence.',
          topicArea: 'emergency',
        },
      ],
    },

    // ── Section 6: Nederlandse geschiedenis en symbolen ──
    {
      id: 'knm8-s6',
      passageTitle: 'Nederlandse Geschiedenis en Nationale Symbolen',
      instructions: 'Beantwoord de vragen over de Nederlandse geschiedenis en nationale symbolen.',
      questions: [
        {
          id: 'knm8-q26',
          type: 'multiple-choice',
          question: 'Wat zijn de kleuren van de Nederlandse vlag?',
          options: [
            'Blauw, wit en geel.',
            'Rood, wit en blauw (van boven naar beneden).',
            'Oranje, wit en blauw.',
            'Groen, wit en rood.',
          ],
          correctIndex: 1,
          explanation:
            'The Dutch flag consists of three horizontal stripes: red (top), white (middle), and blue (bottom). Orange is used on special occasions (e.g. King\'s Day) as an alternative colour due to the House of Orange.',
          topicArea: 'history-symbols',
        },
        {
          id: 'knm8-q27',
          type: 'true-false',
          question: 'Nederland was bezet door nazi-Duitsland tijdens de Tweede Wereldoorlog (1940–1945).',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Germany occupied the Netherlands from May 1940 to May 1945. The liberation came in stages, with the south liberated in late 1944 and the north in May 1945. About 200,000 Dutch citizens, including 102,000 Dutch Jews, were killed during the occupation.',
          topicArea: 'history-symbols',
        },
        {
          id: 'knm8-q28',
          type: 'multiple-choice',
          question: 'Wat is het Nederlandse volkslied?',
          options: [
            'De Internationale',
            'Het Wilhelmus',
            'Wien Neêrlands Bloed',
            'Merseyside',
          ],
          correctIndex: 1,
          explanation:
            'Het Wilhelmus is the Dutch national anthem. It is the oldest national anthem in the world still in use, dating from the late 16th century, composed during the Dutch Revolt against Spanish rule.',
          topicArea: 'history-symbols',
        },
        {
          id: 'knm8-q29',
          type: 'multiple-choice',
          question: 'Waarvoor staat de "poldermodel" als begrip?',
          options: [
            'De Nederlandse methode van waterbeheer via polders.',
            'Het Nederlandse model van overleg en consensus tussen werkgevers, vakbonden en overheid.',
            'Een bouwmethode voor woningen in lage gebieden.',
            'Een politieke stroming die de belangen van boeren vertegenwoordigt.',
          ],
          correctIndex: 1,
          explanation:
            'The polder model refers to the Dutch tradition of consensus-based decision making through structured consultation between the government, employer organisations and trade unions (the "social partners"). This approach is symbolised by the Sociaal-Economische Raad (SER).',
          topicArea: 'history-symbols',
        },
        {
          id: 'knm8-q30',
          type: 'true-false',
          question: 'Amsterdam is de hoofdstad van Nederland, maar Den Haag is de regeringszetel.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Amsterdam is the constitutional capital of the Netherlands (and home to the Royal Palace on Dam Square), while The Hague (Den Haag) is where the government, parliament and most ministries are located.',
          topicArea: 'history-symbols',
        },
      ],
    },

    // ── Section 7: DigiD en digitale overheidsdiensten ──
    {
      id: 'knm8-s7',
      passageTitle: 'DigiD en Digitale Overheidsdiensten',
      instructions: 'Beantwoord de vragen over DigiD en digitale communicatie met de overheid.',
      questions: [
        {
          id: 'knm8-q31',
          type: 'multiple-choice',
          question: 'Wat is DigiD?',
          options: [
            'Een bankpas voor online betalingen.',
            'Een digitale identiteit waarmee u kunt inloggen bij overheidsinstanties en andere organisaties in Nederland.',
            'Een app van de Belastingdienst voor belastingaangiftes.',
            'Een e-mailadres dat de overheid aan iedere inwoner verstrekt.',
          ],
          correctIndex: 1,
          explanation:
            'DigiD (Digitale Identiteit) is the Dutch government-issued digital identity login system. It is used to log in to hundreds of government and healthcare websites, including the Belastingdienst, UWV, MijnOverheid and many more.',
          topicArea: 'digital-government',
        },
        {
          id: 'knm8-q32',
          type: 'true-false',
          question: 'MijnOverheid.nl is een portal waar u persoonlijke berichten van overheidsinstanties kunt ontvangen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'MijnOverheid.nl is the personal government portal where Dutch residents can receive official messages (Berichtenbox) from government agencies, view registered data, and access various public services online.',
          topicArea: 'digital-government',
        },
        {
          id: 'knm8-q33',
          type: 'multiple-choice',
          question: 'Hira ontvangt een sms die beweert van DigiD te zijn en vraagt haar om op een link te klikken en haar wachtwoord te bevestigen. Wat moet zij doen?',
          options: [
            'Op de link klikken en haar wachtwoord invoeren.',
            'De link doorsturen naar vrienden om hen te waarschuwen.',
            'Niet klikken — dit is een phishingpoging. DigiD stuurt nooit zulke berichten. Melden bij valse-email@digid.nl.',
            'Haar DigiD-wachtwoord onmiddellijk veranderen via de link.',
          ],
          correctIndex: 2,
          explanation:
            'DigiD never asks you to confirm your password via SMS or email links. This is a phishing attempt. Do not click the link. You can report phishing messages to valse-email@digid.nl.',
          topicArea: 'digital-government',
        },
        {
          id: 'knm8-q34',
          type: 'multiple-choice',
          question: 'Waarvoor kunt u DigiD onder andere gebruiken?',
          options: [
            'Alleen voor belastingaangifte.',
            'Voor het inloggen op overheids- en zorgwebsites, zoals belastingaangifte, UWV, toeslagen en uw medisch dossier (via MedMij).',
            'Voor het openen van een bankrekening.',
            'Voor het aanvragen van een rijbewijs bij het CBR (zonder verdere verificatie).',
          ],
          correctIndex: 1,
          explanation:
            'DigiD is used for a wide range of government and healthcare services: tax returns, benefit applications, viewing personal government records, healthcare portals, and many more.',
          topicArea: 'digital-government',
        },
        {
          id: 'knm8-q35',
          type: 'true-false',
          question: 'Als u geen computer heeft, kunt u niet meer in contact komen met de Nederlandse overheid.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The Dutch government is committed to maintaining non-digital access routes. You can visit municipal offices, call government helplines, or visit a library for assistance. The government has pledged that a human/non-digital route will always be available.',
          topicArea: 'digital-government',
        },
      ],
    },

    // ── Section 8: Patiëntenrechten en zorgkeuze ──
    {
      id: 'knm8-s8',
      passageTitle: 'Patiëntenrechten en Zorgkeuze',
      instructions: 'Beantwoord de vragen over uw rechten als patiënt in Nederland.',
      questions: [
        {
          id: 'knm8-q36',
          type: 'multiple-choice',
          question: 'Heeft een patiënt in Nederland het recht om te weigeren een medische behandeling te ondergaan?',
          options: [
            'Nee — artsen bepalen altijd welke behandeling nodig is.',
            'Ja — patiënten hebben het recht behandelingen te weigeren (informed consent).',
            'Alleen als de patiënt ouder is dan 18 jaar en het eigen risico heeft betaald.',
            'Nee — in noodsituaties moet altijd behandeld worden, ook zonder toestemming.',
          ],
          correctIndex: 1,
          explanation:
            'Under the WGBO (Wet op de Geneeskundige Behandelingsovereenkomst), patients have the right to informed consent — they must be fully informed and give permission for treatment. They also have the right to refuse treatment.',
          topicArea: 'patient-rights',
        },
        {
          id: 'knm8-q37',
          type: 'true-false',
          question: 'In Nederland heeft u recht op inzage in uw eigen medisch dossier.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Under the WGBO, patients have the right to access their own medical records. They can also request corrections if data is incorrect. Healthcare providers must respond to such requests within a reasonable timeframe.',
          topicArea: 'patient-rights',
        },
        {
          id: 'knm8-q38',
          type: 'multiple-choice',
          question: 'Karim is ontevreden over de behandeling bij zijn huisarts. Wat kan hij doen?',
          options: [
            'Niets — klachten over huisartsen zijn niet mogelijk.',
            'Direct de politie bellen.',
            'De klacht bespreken met de huisarts, en indien nodig een klacht indienen bij de klachtencommissie of het Regionaal Tuchtcollege voor de Gezondheidszorg.',
            'Zijn zorgverzekering stopzetten.',
          ],
          correctIndex: 2,
          explanation:
            'Patients who are dissatisfied can first discuss their concerns with the healthcare provider. Formally, they can file a complaint with the practice\'s klachtencommissie or the Regionaal Tuchtcollege voor de Gezondheidszorg (Regional Disciplinary Committee).',
          topicArea: 'patient-rights',
        },
        {
          id: 'knm8-q39',
          type: 'multiple-choice',
          question: 'Mag een arts informatie over uw gezondheid delen met uw werkgever zonder uw toestemming?',
          options: [
            'Ja, werkgevers hebben altijd recht op medische informatie.',
            'Nee — artsen hebben een wettelijke geheimhoudingsplicht (medisch beroepsgeheim). Informatie mag alleen met toestemming worden gedeeld.',
            'Ja, maar alleen voor verzuimbegeleiding.',
            'Ja, als de werkgever hierom vraagt.',
          ],
          correctIndex: 1,
          explanation:
            'Doctors are bound by medical confidentiality (medisch beroepsgeheim). They cannot share health information with employers, insurers or others without the patient\'s explicit consent, except in specific legal circumstances.',
          topicArea: 'patient-rights',
        },
        {
          id: 'knm8-q40',
          type: 'true-false',
          question: 'U mag zelf kiezen bij welke huisarts u zich inschrijft in Nederland.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Patients in the Netherlands are free to register with any GP practice of their choice, subject to the practice having capacity. You are not automatically assigned a GP — you must actively register.',
          topicArea: 'patient-rights',
        },
      ],
    },
  ],
};
