import type { ExamPracticeTest } from '../../types';

export const inburgeringA2Listening1: ExamPracticeTest = {
  id: 'inburgering-a2-listening-1',
  examType: 'inburgering-a2',
  skill: 'listening',
  title: 'Inburgeringsexamen A2 – Luisteren (Oefening 1)',
  description:
    'Practice exam for the Luisteren (listening) component of the Inburgeringsexamen A2. Listen to short spoken Dutch fragments — announcements, conversations, voicemails, and instructions — then answer comprehension questions. Each fragment can be played up to 2 times. All passages are read aloud using Dutch text-to-speech.',
  timeLimitMinutes: 35,
  passingScore: 70,
  totalQuestions: 20,
  sections: [
    // ── Fragment 1: Omroepbericht (public announcement) ──
    {
      id: 'a2-l1-s1',
      passageTitle: 'Fragment 1: Omroepbericht op het station',
      passage:
        'Goedemiddag, reizigers. Wij informeren u dat de trein naar Amsterdam Centraal vertrekt van spoor zeven. De trein heeft tien minuten vertraging vanwege werkzaamheden op het spoor. Reizigers met een overstap in Utrecht worden geadviseerd om te informeren bij de servicebalie. Wij bieden onze excuses aan voor het ongemak.',
      instructions: 'Luister naar het omroepbericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l1-q1',
          type: 'multiple-choice',
          question: 'Vanaf welk spoor vertrekt de trein naar Amsterdam Centraal?',
          options: ['Spoor vijf', 'Spoor zeven', 'Spoor tien', 'Spoor drie'],
          correctIndex: 1,
          explanation: 'The announcement states: "de trein naar Amsterdam Centraal vertrekt van spoor zeven."',
          topicArea: 'transport',
        },
        {
          id: 'a2-l1-q2',
          type: 'multiple-choice',
          question: 'Hoeveel vertraging heeft de trein?',
          options: ['Vijf minuten', 'Tien minuten', 'Twintig minuten', 'Geen vertraging'],
          correctIndex: 1,
          explanation: '"De trein heeft tien minuten vertraging vanwege werkzaamheden op het spoor."',
          topicArea: 'transport',
        },
        {
          id: 'a2-l1-q3',
          type: 'multiple-choice',
          question: 'Wat wordt geadviseerd aan reizigers met een overstap in Utrecht?',
          options: [
            'Een later vertrekkende trein nemen.',
            'Informeren bij de servicebalie.',
            'Bellen met de klantenservice.',
            'Op perron zeven wachten.',
          ],
          correctIndex: 1,
          explanation: '"Reizigers met een overstap in Utrecht worden geadviseerd om te informeren bij de servicebalie."',
          topicArea: 'transport',
        },
        {
          id: 'a2-l1-q4',
          type: 'true-false',
          question: 'De vertraging wordt veroorzaakt door een ongeluk.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The announcement says the delay is due to "werkzaamheden op het spoor" (track works), not an accident.',
          topicArea: 'transport',
        },
      ],
    },

    // ── Fragment 2: Voicemail van een doktersassistente ──
    {
      id: 'a2-l1-s2',
      passageTitle: 'Fragment 2: Voicemailbericht van de huisartsenpraktijk',
      passage:
        'Goedemiddag, u spreekt met de praktijkassistente van huisartsenpraktijk Van der Linden. Ik bel voor de heer Yilmaz. Uw bloeduitslag is binnen. De dokter wil graag een afspraak met u maken om de resultaten te bespreken. U kunt ons terugbellen op maandag of dinsdag tussen negen en twaalf uur. Ons telefoonnummer is nul-tien, drie-vier-vijf, zes-zeven-acht-negen. Wij horen graag van u. Prettige dag verder.',
      instructions: 'Luister naar het voicemailbericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l1-q5',
          type: 'multiple-choice',
          question: 'Waarom belt de praktijkassistente?',
          options: [
            'Om een afspraak te verzetten.',
            'Om te zeggen dat de bloeduitslag binnen is.',
            'Om een herhaalrecept te bevestigen.',
            'Om te vragen of de heer Yilmaz ziek is.',
          ],
          correctIndex: 1,
          explanation: '"Uw bloeduitslag is binnen. De dokter wil graag een afspraak met u maken om de resultaten te bespreken."',
          topicArea: 'healthcare',
        },
        {
          id: 'a2-l1-q6',
          type: 'multiple-choice',
          question: 'Op welke dagen kan de heer Yilmaz terugbellen?',
          options: [
            'Maandag en woensdag',
            'Dinsdag en donderdag',
            'Maandag en dinsdag',
            'Elke werkdag',
          ],
          correctIndex: 2,
          explanation: '"U kunt ons terugbellen op maandag of dinsdag."',
          topicArea: 'healthcare',
        },
        {
          id: 'a2-l1-q7',
          type: 'multiple-choice',
          question: 'Tussen welke tijden kan hij terugbellen?',
          options: [
            'Tussen acht en tien uur',
            'Tussen negen en twaalf uur',
            'Tussen tien en twaalf uur',
            'De hele dag',
          ],
          correctIndex: 1,
          explanation: '"U kunt ons terugbellen op maandag of dinsdag tussen negen en twaalf uur."',
          topicArea: 'healthcare',
        },
        {
          id: 'a2-l1-q8',
          type: 'true-false',
          question: 'De dokter heeft de resultaten al met de heer Yilmaz besproken.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The doctor wants to make an appointment to discuss the results — they have not been discussed yet.',
          topicArea: 'healthcare',
        },
      ],
    },

    // ── Fragment 3: Gesprek in een winkel ──
    {
      id: 'a2-l1-s3',
      passageTitle: 'Fragment 3: Gesprek in een supermarkt',
      passage:
        'Medewerker: Goedemiddag, kan ik u helpen? Klant: Ja, ik zoek rijst. Waar kan ik die vinden? Medewerker: Rijst staat in gangpad vier, aan de linkerkant bij de pasta. Klant: En heeft u ook bruine rijst? Medewerker: Ja, die staat ernaast. We hebben twee merken: één van drie euro vijftig en één van twee euro twintig. Klant: Ik neem de goedkopere. En kunt u zeggen waar het brood is? Medewerker: Brood vindt u helemaal achterin de winkel, gangpad zeven. Klant: Hartelijk dank. Medewerker: Geen probleem, fijne dag!',
      instructions: 'Luister naar het gesprek en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l1-q9',
          type: 'multiple-choice',
          question: 'In welk gangpad staat de rijst?',
          options: ['Gangpad twee', 'Gangpad drie', 'Gangpad vier', 'Gangpad zeven'],
          correctIndex: 2,
          explanation: '"Rijst staat in gangpad vier, aan de linkerkant bij de pasta."',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l1-q10',
          type: 'multiple-choice',
          question: 'Welke rijst kiest de klant?',
          options: [
            'De rijst van drie euro vijftig.',
            'De rijst van twee euro twintig.',
            'Witte rijst, niet bruine rijst.',
            'De klant koopt geen rijst.',
          ],
          correctIndex: 1,
          explanation: '"Ik neem de goedkopere" — the cheaper option is €2.20.',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l1-q11',
          type: 'multiple-choice',
          question: 'Waar is het brood?',
          options: [
            'Gangpad vier, rechts.',
            'Bij de kassa.',
            'Helemaal achterin de winkel, gangpad zeven.',
            'Gangpad één, aan de ingang.',
          ],
          correctIndex: 2,
          explanation: '"Brood vindt u helemaal achterin de winkel, gangpad zeven."',
          topicArea: 'shopping',
        },
        {
          id: 'a2-l1-q12',
          type: 'true-false',
          question: 'De winkel heeft alleen witte rijst.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'The employee confirms they also have bruine rijst (brown rice).',
          topicArea: 'shopping',
        },
      ],
    },

    // ── Fragment 4: Telefonisch gesprek met gemeente ──
    {
      id: 'a2-l1-s4',
      passageTitle: 'Fragment 4: Telefoongesprek met de gemeente',
      passage:
        'Medewerker: Gemeente Eindhoven, goedenmiddag. Beller: Goedenmiddag, ik bel over mijn nieuwe identiteitskaart. Ik heb hem aangevraagd maar ik heb nog niets ontvangen. Medewerker: Wanneer heeft u hem aangevraagd? Beller: Drie weken geleden. Medewerker: De normale behandelingstijd is twee tot drie weken. Het kan dus zijn dat hij vandaag of morgen in de post zit. Als u hem volgende week nog niet heeft, kunt u opnieuw bellen. Beller: Oké. Moet ik een nummer noteren? Medewerker: Nee, u kunt gewoon dit nummer bellen. Wij zijn bereikbaar van maandag tot en met vrijdag van acht tot vijf. Beller: Begrepen, dank u wel. Medewerker: Graag gedaan.',
      instructions: 'Luister naar het telefoongesprek en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l1-q13',
          type: 'multiple-choice',
          question: 'Waarover belt de inwoner?',
          options: [
            'Over een parkeerboete.',
            'Over zijn nieuwe identiteitskaart.',
            'Over een verhuizing.',
            'Over een rijbewijs.',
          ],
          correctIndex: 1,
          explanation: '"Ik bel over mijn nieuwe identiteitskaart. Ik heb hem aangevraagd maar ik heb nog niets ontvangen."',
          topicArea: 'government-services',
        },
        {
          id: 'a2-l1-q14',
          type: 'multiple-choice',
          question: 'Hoe lang is de normale behandelingstijd?',
          options: [
            'Één week',
            'Twee weken',
            'Twee tot drie weken',
            'Een maand',
          ],
          correctIndex: 2,
          explanation: '"De normale behandelingstijd is twee tot drie weken."',
          topicArea: 'government-services',
        },
        {
          id: 'a2-l1-q15',
          type: 'multiple-choice',
          question: 'Wanneer moet de beller opnieuw bellen als hij niets heeft ontvangen?',
          options: [
            'Morgen',
            'Volgende week',
            'Over twee weken',
            'Na een maand',
          ],
          correctIndex: 1,
          explanation: '"Als u hem volgende week nog niet heeft, kunt u opnieuw bellen."',
          topicArea: 'government-services',
        },
        {
          id: 'a2-l1-q16',
          type: 'true-false',
          question: 'De gemeente is op zaterdag bereikbaar.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: '"Wij zijn bereikbaar van maandag tot en met vrijdag van acht tot vijf." — not on weekends.',
          topicArea: 'government-services',
        },
      ],
    },

    // ── Fragment 5: Radiobericht over het weer ──
    {
      id: 'a2-l1-s5',
      passageTitle: 'Fragment 5: Weerbericht op de radio',
      passage:
        'En nu het weerbericht voor morgen. In de ochtend is het bewolkt met kans op regen in het noorden en oosten van het land. In de middag klaart het op in de rest van Nederland en schijnt de zon gedeeltelijk. De temperatuur komt uit op veertien graden in het noorden en achttien graden in het zuiden. In de avond neemt de bewolking weer toe. Voor het weekend verwachten we droog weer met meer zonneschijn.',
      instructions: 'Luister naar het weerbericht en beantwoord de vragen.',
      questions: [
        {
          id: 'a2-l1-q17',
          type: 'multiple-choice',
          question: 'Hoe is het weer in de ochtend in het noorden en oosten?',
          options: [
            'Zonnig en droog',
            'Bewolkt met kans op regen',
            'Stormachtig',
            'Sneeuw',
          ],
          correctIndex: 1,
          explanation: '"In de ochtend is het bewolkt met kans op regen in het noorden en oosten van het land."',
          topicArea: 'weather',
        },
        {
          id: 'a2-l1-q18',
          type: 'multiple-choice',
          question: 'Wat is de verwachte temperatuur in het zuiden morgen?',
          options: ['Veertien graden', 'Zestien graden', 'Achttien graden', 'Twintig graden'],
          correctIndex: 2,
          explanation: '"achttien graden in het zuiden."',
          topicArea: 'weather',
        },
        {
          id: 'a2-l1-q19',
          type: 'true-false',
          question: 'In de middag klaart het op in heel Nederland.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 1,
          explanation: 'It only clears up "in de rest van Nederland" — the north and east may still be affected.',
          topicArea: 'weather',
        },
        {
          id: 'a2-l1-q20',
          type: 'true-false',
          question: 'Voor het weekend wordt droog weer verwacht.',
          options: ['Juist', 'Onjuist'],
          correctIndex: 0,
          explanation: '"Voor het weekend verwachten we droog weer met meer zonneschijn."',
          topicArea: 'weather',
        },
      ],
    },
  ],
};
