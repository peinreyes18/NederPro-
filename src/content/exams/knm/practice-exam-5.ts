import type { ExamPracticeTest } from '../../types';

export const knmPracticeExam5: ExamPracticeTest = {
  id: 'knm-practice-5',
  examType: 'knm',
  skill: 'knowledge',
  title: 'KNM Oefenexamen 5 – Kennis van de Nederlandse Maatschappij',
  description:
    'Practice exam for the Kennis van de Nederlandse Maatschappij (KNM) component of the inburgeringsexamen. Tests knowledge of Dutch society, norms, institutions, and daily life. This exam covers family life, religion and secularism, volunteering, media, banking, emergency services, and civic participation.',
  timeLimitMinutes: 45,
  passingScore: 80,
  totalQuestions: 40,
  sections: [
    // ── Section 1: Gezin en Familie ──
    {
      id: 'knm5-s1',
      passageTitle: 'Gezin, Familie en Relaties',
      instructions: 'Beantwoord de vragen over gezin en familie in Nederland.',
      questions: [
        {
          id: 'knm5-q1',
          type: 'multiple-choice',
          question: 'Wat is geregistreerd partnerschap in Nederland?',
          options: [
            'Een religieus huwelijk dat door de kerk wordt erkend.',
            'Een officiële relatie met vergelijkbare rechten als het huwelijk, geregistreerd bij de gemeente.',
            'Een informele samenwoningsovereenkomst zonder juridische gevolgen.',
            'Een contract dat alleen geldt voor mensen met de Nederlandse nationaliteit.',
          ],
          correctIndex: 1,
          explanation:
            'Geregistreerd partnerschap is een legally registered relationship at the municipality with rights similar to marriage.',
          topicArea: 'family',
        },
        {
          id: 'knm5-q2',
          type: 'true-false',
          question: 'In Nederland is het wettelijk verplicht voor vrouwen om de achternaam van hun man aan te nemen bij een huwelijk.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'In the Netherlands, taking your partner\'s surname is a choice, not a legal requirement. Both partners keep their own name by default.',
          topicArea: 'family',
        },
        {
          id: 'knm5-q3',
          type: 'multiple-choice',
          question: 'Sofía en haar partner wonen al 3 jaar samen maar zijn niet getrouwd. Sofía is zwanger. Wat moet haar partner doen om juridisch vader te worden?',
          options: [
            'Niets — hij is automatisch de juridische vader.',
            'Het kind erkennen bij de gemeente.',
            'Met Sofía trouwen voor de geboorte.',
            'Een verklaring ondertekenen bij de notaris.',
          ],
          correctIndex: 1,
          explanation:
            'For unmarried couples, the father must legally acknowledge (erkennen) the child at the municipality to obtain parental rights.',
          topicArea: 'family',
        },
        {
          id: 'knm5-q4',
          type: 'multiple-choice',
          question: 'Wat is het consultatiebureau?',
          options: [
            'Een plek waar ouders juridisch advies krijgen over hun kinderen.',
            'Een gratis gezondheidsservice voor baby\'s en jonge kinderen.',
            'Een kinderdagverblijf voor kinderen tot 4 jaar.',
            'Een school voor kinderen met een taalachterstand.',
          ],
          correctIndex: 1,
          explanation:
            'Het consultatiebureau (child health clinic) offers free health check-ups and vaccinations for babies and young children.',
          topicArea: 'family',
        },
        {
          id: 'knm5-q5',
          type: 'true-false',
          question: 'In Nederland is echtscheiding wettelijk toegestaan.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: 'Divorce is legally permitted in the Netherlands and processed through the courts.',
          topicArea: 'family',
        },
      ],
    },

    // ── Section 2: Religie en Levensbeschouwing ──
    {
      id: 'knm5-s2',
      passageTitle: 'Religie, Levensbeschouwing en Vrijheid',
      instructions: 'Beantwoord de vragen over religie en levensbeschouwing in Nederland.',
      questions: [
        {
          id: 'knm5-q6',
          type: 'multiple-choice',
          question: 'Wat betekent vrijheid van godsdienst in Nederland?',
          options: [
            'De overheid schrijft voor welke religie mensen mogen belijden.',
            'Mensen mogen zelf kiezen welke godsdienst ze aanhangen, of geen.',
            'Alle religies worden financieel ondersteund door de overheid.',
            'Religieuze scholen zijn verboden in Nederland.',
          ],
          correctIndex: 1,
          explanation:
            'Freedom of religion means people may freely choose their religion — or none — without state interference.',
          topicArea: 'religion',
        },
        {
          id: 'knm5-q7',
          type: 'true-false',
          question: 'In Nederland is het verplicht voor ambtenaren om hun religie te vermelden bij het aanvragen van een baan.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Discrimination based on religion is prohibited. Employers may not ask about religion during a job application.',
          topicArea: 'religion',
        },
        {
          id: 'knm5-q8',
          type: 'multiple-choice',
          question: 'Welke beschrijving past bij het begrip "secularisering" in Nederland?',
          options: [
            'Meer mensen worden religieus.',
            'De overheid wordt steeds meer beïnvloed door religieuze partijen.',
            'Minder mensen zijn actief religieus en religie speelt een kleinere rol in het openbare leven.',
            'Alle kerken in Nederland worden gesloten.',
          ],
          correctIndex: 2,
          explanation:
            'Secularisation describes the decline in active religious participation and the shrinking role of religion in public life.',
          topicArea: 'religion',
        },
        {
          id: 'knm5-q9',
          type: 'multiple-choice',
          question: 'Hamid wil graag vrijdagsgebed bijwonen in zijn lunchpauze op het werk. Wat kan hij het beste doen?',
          options: [
            'Gewoon weggaan zonder het te melden.',
            'Zijn werkgever vragen om een langere lunchpauze op vrijdag.',
            'Zijn baan opzeggen omdat het niet te combineren is.',
            'De vrijdagsgebeden verzuimen omdat werk voorrang heeft.',
          ],
          correctIndex: 1,
          explanation:
            'It is best to discuss the need for a longer Friday lunch break with your employer. In the Netherlands, employers often accommodate reasonable religious requests.',
          topicArea: 'religion',
        },
        {
          id: 'knm5-q10',
          type: 'true-false',
          question: 'Openbare scholen in Nederland mogen geen godsdienstonderwijs geven.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Public schools may offer religious education as an optional subject, though they are not obligated to do so. Religious (bijzondere) schools do provide faith-based education.',
          topicArea: 'religion',
        },
      ],
    },

    // ── Section 3: Media en Informatie ──
    {
      id: 'knm5-s3',
      passageTitle: 'Media, Internet en Informatie',
      instructions: 'Beantwoord de vragen over media en het gebruik van informatie in Nederland.',
      questions: [
        {
          id: 'knm5-q11',
          type: 'multiple-choice',
          question: 'Wat is de NPO?',
          options: [
            'Een commerciële televisiezender die reclame uitzendt.',
            'De Nederlandse Publieke Omroep, een publieke omroep gefinancierd door de overheid.',
            'Een krant die dagelijks verschijnt.',
            'Een organisatie die internetprivacy beschermt.',
          ],
          correctIndex: 1,
          explanation:
            'The NPO (Nederlandse Publieke Omroep) is the Dutch public broadcaster, funded by the government and required to be informative, educational, and culturally valuable.',
          topicArea: 'media',
        },
        {
          id: 'knm5-q12',
          type: 'true-false',
          question: 'In Nederland is de pers vrij en mag de overheid kranten niet verbieden.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Press freedom is a fundamental right in the Netherlands. The government cannot ban or censor newspapers.',
          topicArea: 'media',
        },
        {
          id: 'knm5-q13',
          type: 'multiple-choice',
          question: 'U ontvangt een e-mail die zegt dat u €10.000 heeft gewonnen en u moet uw bankgegevens invullen. Wat doet u?',
          options: [
            'Uw bankgegevens invullen zodat het geld wordt overgemaakt.',
            'De e-mail negeren of verwijderen — dit is waarschijnlijk oplichting.',
            'De e-mail doorsturen naar familie om te controleren.',
            'Bellen met het nummer in de e-mail.',
          ],
          correctIndex: 1,
          explanation:
            'This is a classic phishing/scam email. You should ignore or delete it and never share your bank details.',
          topicArea: 'media',
        },
        {
          id: 'knm5-q14',
          type: 'multiple-choice',
          question: 'Wat is het recht op privacy in Nederland?',
          options: [
            'Bedrijven mogen uw persoonlijke gegevens zonder toestemming delen.',
            'U heeft het recht dat uw persoonlijke gegevens worden beschermd en niet zomaar worden gedeeld.',
            'Alleen de overheid heeft recht op toegang tot uw gegevens.',
            'Privacy is in Nederland niet wettelijk geregeld.',
          ],
          correctIndex: 1,
          explanation:
            'Privacy is a fundamental right. The AVG (GDPR) protects personal data in the Netherlands and the EU.',
          topicArea: 'media',
        },
        {
          id: 'knm5-q15',
          type: 'true-false',
          question: 'Iedereen in Nederland heeft toegang tot gratis internet via de overheid.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Internet is not provided free of charge by the government in the Netherlands. However, public libraries offer free internet access.',
          topicArea: 'media',
        },
      ],
    },

    // ── Section 4: Bankzaken en Geldzaken ──
    {
      id: 'knm5-s4',
      passageTitle: 'Bankzaken en Geldzaken',
      instructions: 'Beantwoord de vragen over bankieren en omgaan met geld in Nederland.',
      questions: [
        {
          id: 'knm5-q16',
          type: 'multiple-choice',
          question: 'Wat is een betaalrekening (bankrekening)?',
          options: [
            'Een rekening waarmee u geld kunt sparen met hoge rente.',
            'Een rekening waarop uw salaris en uitkeringen worden gestort en waarmee u dagelijkse betalingen doet.',
            'Een rekening die u alleen kunt gebruiken voor grote aankopen.',
            'Een rekening die alleen voor ondernemers beschikbaar is.',
          ],
          correctIndex: 1,
          explanation:
            'A betaalrekening (current account) is for everyday transactions — receiving salary and making payments.',
          topicArea: 'banking',
        },
        {
          id: 'knm5-q17',
          type: 'true-false',
          question: 'Met iDEAL kunt u online betalen via uw eigen bank.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'iDEAL is the most widely used Dutch online payment method, allowing secure payments directly from your bank account.',
          topicArea: 'banking',
        },
        {
          id: 'knm5-q18',
          type: 'multiple-choice',
          question: 'Wat is rood staan op uw bankrekening?',
          options: [
            'Geld sparen dat u later kunt opnemen.',
            'Meer geld uitgeven dan u op uw rekening heeft, waardoor u schuld krijgt bij de bank.',
            'Een fout van de bank waardoor uw saldo verkeerd wordt weergegeven.',
            'Een boete die u betaalt als u te laat betaalt.',
          ],
          correctIndex: 1,
          explanation:
            '"Rood staan" means your account balance goes below zero — you are spending more than you have, creating a debt with the bank.',
          topicArea: 'banking',
        },
        {
          id: 'knm5-q19',
          type: 'multiple-choice',
          question: 'Yusuf merkt dat er geld van zijn bankrekening is afgeschreven dat hij niet herkent. Wat moet hij doen?',
          options: [
            'Wachten om te zien of het geld terugkomt.',
            'Direct contact opnemen met zijn bank en eventueel aangifte doen bij de politie.',
            'Een nieuwe bankrekening openen.',
            'Het bedrag negeren als het klein is.',
          ],
          correctIndex: 1,
          explanation:
            'Unrecognised transactions should be reported to your bank immediately. If it is fraud, you may also need to file a police report.',
          topicArea: 'banking',
        },
        {
          id: 'knm5-q20',
          type: 'true-false',
          question: 'In Nederland kunt u uw loon altijd contant ontvangen van uw werkgever.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'In the Netherlands, wages are almost always paid by bank transfer. Having a bank account is essentially required for employment.',
          topicArea: 'banking',
        },
      ],
    },

    // ── Section 5: Hulpdiensten en Veiligheid ──
    {
      id: 'knm5-s5',
      passageTitle: 'Hulpdiensten en Openbare Veiligheid',
      instructions: 'Beantwoord de vragen over hulpdiensten en veiligheid in Nederland.',
      questions: [
        {
          id: 'knm5-q21',
          type: 'multiple-choice',
          question: 'Wanneer belt u 112?',
          options: [
            'Als u een vraag heeft voor de gemeente.',
            'Als er sprake is van een levensbedreigende situatie of een ernstig misdrijf.',
            'Als u uw paspoort kwijt bent.',
            'Als u overlast heeft van uw buren.',
          ],
          correctIndex: 1,
          explanation:
            '112 is the emergency number for life-threatening situations, fires, and serious crimes requiring immediate police, fire brigade, or ambulance.',
          topicArea: 'emergency-services',
        },
        {
          id: 'knm5-q22',
          type: 'multiple-choice',
          question: 'U ziet dat uw buurman elke nacht luid muziek speelt. Wat kunt u het beste eerst doen?',
          options: [
            'Direct de politie bellen.',
            'Uw buurman zelf aanspreken op de overlast.',
            'Een advocaat inschakelen.',
            'Uw woning verlaten.',
          ],
          correctIndex: 1,
          explanation:
            'It is best to first address the nuisance directly with your neighbour. If that does not work, you can contact the municipality or police.',
          topicArea: 'emergency-services',
        },
        {
          id: 'knm5-q23',
          type: 'true-false',
          question: 'In Nederland mag u zichzelf altijd verdedigen met een wapen als u bang bent.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The Netherlands has strict weapons laws. Carrying or using weapons is generally prohibited. Self-defence is subject to strict legal conditions (proportionality).',
          topicArea: 'emergency-services',
        },
        {
          id: 'knm5-q24',
          type: 'multiple-choice',
          question: 'Wat doet de brandweer in Nederland?',
          options: [
            'Alleen branden blussen.',
            'Branden blussen, hulp verlenen bij ongelukken en gevaarlijke situaties, en preventieadvies geven.',
            'Alleen mensen redden bij overstromingen.',
            'Beveiligingsdiensten verlenen voor bedrijven.',
          ],
          correctIndex: 1,
          explanation:
            'The fire brigade (brandweer) handles fires, accidents, dangerous situations, and also provides fire prevention advice.',
          topicArea: 'emergency-services',
        },
        {
          id: 'knm5-q25',
          type: 'multiple-choice',
          question: 'Wat is het niet-spoedeisende politienummer in Nederland?',
          options: ['112', '0900-8844', '14 070', '0800-0543'],
          correctIndex: 1,
          explanation:
            '0900-8844 is the non-emergency police number for reporting incidents that are not life-threatening.',
          topicArea: 'emergency-services',
        },
      ],
    },

    // ── Section 6: Vrijwilligerswerk en Burgerparticipatie ──
    {
      id: 'knm5-s6',
      passageTitle: 'Burgerparticipatie en Maatschappelijke Betrokkenheid',
      instructions: 'Beantwoord de vragen over burgerparticipatie en betrokkenheid in Nederland.',
      questions: [
        {
          id: 'knm5-q26',
          type: 'multiple-choice',
          question: 'Wat is een bewonersvereniging?',
          options: [
            'Een organisatie van huurders die klagen over hun verhuurder.',
            'Een vereniging van buurtbewoners die samen de leefbaarheid en belangen van de wijk behartigen.',
            'Een vakbond voor mensen die in de woningbouwsector werken.',
            'Een overheidsorgaan dat toezicht houdt op woningcorporaties.',
          ],
          correctIndex: 1,
          explanation:
            'A bewonersvereniging is a neighbourhood association where residents work together to improve liveability and represent local interests.',
          topicArea: 'civic-participation',
        },
        {
          id: 'knm5-q27',
          type: 'true-false',
          question: 'In Nederland kunt u als burger een petitie indienen om de overheid ergens op te wijzen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Citizens can submit petitions to parliament or local councils as a form of civic participation.',
          topicArea: 'civic-participation',
        },
        {
          id: 'knm5-q28',
          type: 'multiple-choice',
          question: 'Amara wil iets veranderen in zijn buurt, zoals een speeltuin aanleggen. Wat kan hij doen?',
          options: [
            'Alleen wachten tot de gemeente het zelf doet.',
            'Contact opnemen met de gemeente, een bewonersvereniging oprichten of een burgerinitiatiefvoorstel indienen.',
            'De speeltuin zelf bouwen zonder overleg.',
            'Zijn buren dwingen mee te betalen.',
          ],
          correctIndex: 1,
          explanation:
            'Citizens can contact the municipality, form a neighbourhood association, or submit a citizens\' initiative proposal.',
          topicArea: 'civic-participation',
        },
        {
          id: 'knm5-q29',
          type: 'multiple-choice',
          question: 'Wat is een wijkagent?',
          options: [
            'Een agent die alleen bij ernstige misdaden wordt ingezet.',
            'Een politieagent die is toegewezen aan een specifieke wijk en goed bekend is met de bewoners.',
            'Een ambtenaar van de gemeente die overlast registreert.',
            'Een vrijwilliger die buurtpreventie doet.',
          ],
          correctIndex: 1,
          explanation:
            'A wijkagent is a community police officer assigned to a specific neighbourhood, known to residents and accessible for local issues.',
          topicArea: 'civic-participation',
        },
        {
          id: 'knm5-q30',
          type: 'true-false',
          question: 'Mensen zonder Nederlandse nationaliteit mogen nooit meedoen aan lokale politiek in Nederland.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'EU citizens living in the Netherlands may vote in and stand for municipal elections. Non-EU residents may vote in municipal elections after 5 years of residency.',
          topicArea: 'civic-participation',
        },
      ],
    },

    // ── Section 7: Kinderopvang en Gezondheid ──
    {
      id: 'knm5-s7',
      passageTitle: 'Kinderopvang, School en Gezondheid',
      instructions: 'Beantwoord de vragen over kinderopvang, onderwijs en gezondheid.',
      questions: [
        {
          id: 'knm5-q31',
          type: 'multiple-choice',
          question: 'Wat is een kinderdagverblijf?',
          options: [
            'Een school voor kinderen van 4 tot 12 jaar.',
            'Een opvang voor kinderen van 0 tot 4 jaar terwijl de ouders werken.',
            'Een plek waar zieke kinderen worden verzorgd.',
            'Een buitenschoolse opvang voor scholieren.',
          ],
          correctIndex: 1,
          explanation:
            'A kinderdagverblijf (daycare centre) provides care for children aged 0 to 4 while parents work.',
          topicArea: 'childcare',
        },
        {
          id: 'knm5-q32',
          type: 'true-false',
          question: 'Ouders kunnen kinderopvangtoeslag aanvragen bij de Belastingdienst om de kosten van kinderopvang te verlagen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'Kinderopvangtoeslag is a government subsidy via the Belastingdienst/Toeslagen to help working parents pay for childcare.',
          topicArea: 'childcare',
        },
        {
          id: 'knm5-q33',
          type: 'multiple-choice',
          question: 'Wat is buitenschoolse opvang (BSO)?',
          options: [
            'Opvang voor kinderen voor en na schooltijd.',
            'Een extra school die kinderen bezoeken in het weekend.',
            'Onderwijs aan huis voor zieke kinderen.',
            'Sport- en spelactiviteiten georganiseerd door de gemeente.',
          ],
          correctIndex: 0,
          explanation:
            'BSO (buitenschoolse opvang) provides before and after school care for primary school-age children.',
          topicArea: 'childcare',
        },
        {
          id: 'knm5-q34',
          type: 'multiple-choice',
          question: 'Nadia heeft een dochter van 2 jaar die nog niet goed praat. Wie kan haar het beste helpen?',
          options: [
            'De school van de dochter.',
            'De huisarts of het consultatiebureau.',
            'De politie.',
            'De Belastingdienst.',
          ],
          correctIndex: 1,
          explanation:
            'The huisarts (GP) or consultatiebureau (child health clinic) is the first point of contact for developmental concerns in young children.',
          topicArea: 'childcare',
        },
        {
          id: 'knm5-q35',
          type: 'true-false',
          question: 'Het Rijksvaccinatieprogramma in Nederland is verplicht voor alle kinderen.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'The national vaccination programme is free and strongly recommended, but not legally mandatory in the Netherlands.',
          topicArea: 'childcare',
        },
      ],
    },

    // ── Section 8: Natuur, Milieu en Duurzaamheid ──
    {
      id: 'knm5-s8',
      passageTitle: 'Natuur, Milieu en Duurzaamheid',
      instructions: 'Beantwoord de vragen over natuur, milieu en duurzaamheid in Nederland.',
      questions: [
        {
          id: 'knm5-q36',
          type: 'multiple-choice',
          question: 'Wat is het statiegeldsysteem in Nederland?',
          options: [
            'Een systeem waarbij u extra betaalt voor producten die slecht zijn voor het milieu.',
            'Een systeem waarbij u geld terugkrijgt als u lege flessen of blikjes inlevert.',
            'Een subsidie voor mensen die zonnepanelen kopen.',
            'Een belasting op plasticgebruik door bedrijven.',
          ],
          correctIndex: 1,
          explanation:
            'The statiegeld (deposit) system allows you to return empty bottles and cans to get your deposit money back, encouraging recycling.',
          topicArea: 'environment',
        },
        {
          id: 'knm5-q37',
          type: 'true-false',
          question: 'In Nederland mag u oud papier en karton gewoon bij het restafval gooien.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation:
            'Paper and cardboard must be separated and placed in the paper container (blauwe bak) or paper collection point, not in the general waste.',
          topicArea: 'environment',
        },
        {
          id: 'knm5-q38',
          type: 'multiple-choice',
          question: 'Wat is een Nationaal Park in Nederland?',
          options: [
            'Een recreatiepark met attracties voor families.',
            'Een beschermd natuurgebied waar de natuur beheerd en beschermd wordt.',
            'Een industriegebied buiten de stad.',
            'Een park dat eigendom is van de nationale overheid en vrij toegankelijk is voor sport.',
          ],
          correctIndex: 1,
          explanation:
            'A Nationaal Park is a protected nature reserve where the natural environment is managed and conserved.',
          topicArea: 'environment',
        },
        {
          id: 'knm5-q39',
          type: 'multiple-choice',
          question: 'Wat betekent het begrip "duurzaamheid"?',
          options: [
            'Producten kopen die lang meegaan.',
            'Op een manier leven en produceren die de aarde en toekomstige generaties niet schaadt.',
            'Alleen biologische producten eten.',
            'Energie besparen door minder te verwarmen.',
          ],
          correctIndex: 1,
          explanation:
            '"Duurzaamheid" (sustainability) means living and producing in a way that does not harm the planet or future generations.',
          topicArea: 'environment',
        },
        {
          id: 'knm5-q40',
          type: 'true-false',
          question: 'Nederland heeft internationale verplichtingen om de CO₂-uitstoot te verminderen als onderdeel van het Klimaatakkoord van Parijs.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation:
            'The Netherlands is a signatory to the Paris Agreement and has committed to reducing greenhouse gas emissions in line with European and international targets.',
          topicArea: 'environment',
        },
      ],
    },
  ],
};
