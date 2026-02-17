import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import Alert from '@/components/ui/Alert';

interface PhraseItem {
  dutch: string;
  english: string;
}

interface CultureSection {
  heading: string;
  paragraphs?: string[];
  phrases?: PhraseItem[];
  tip?: string;
  doList?: string[];
  dontList?: string[];
}

interface CultureTip {
  title: string;
  icon: string;
  intro: string;
  sections: CultureSection[];
}

const cultureContent: Record<string, CultureTip> = {
  'greetings-social-norms': {
    title: 'Greetings & Social Norms',
    icon: '👋',
    intro:
      'The Dutch have specific customs around greetings that can feel quite different from what you might be used to. Understanding these norms helps you feel comfortable in both social and professional settings.',
    sections: [
      {
        heading: 'The Three Kisses (Drie Zoenen)',
        paragraphs: [
          'When greeting friends, family, or acquaintances at social gatherings, the Dutch often give three kisses on alternating cheeks — right, left, right. This is called "drie zoenen" and is mostly used among women and between men and women. Men typically shake hands with each other.',
          'This custom is mainly for birthdays, holidays, and when you haven\'t seen someone in a while. You won\'t do this with colleagues at work every morning!',
        ],
        tip: 'If you\'re unsure whether to kiss or shake hands, follow the other person\'s lead. It\'s perfectly fine to simply shake hands.',
      },
      {
        heading: 'Formal vs. Informal: "U" vs. "Jij"',
        paragraphs: [
          'Dutch has two words for "you": the formal "u" and the informal "jij/je". Choosing the right one matters. Use "u" with older people, in formal situations, at government offices (gemeente), and when speaking to someone you don\'t know. Use "jij" with friends, colleagues of similar age, and in casual settings.',
          'The Dutch are generally quick to switch to informal — a colleague might say "Zeg maar jij" (just say jij) to let you know you can be informal.',
        ],
        phrases: [
          { dutch: 'Hoe gaat het met u?', english: 'How are you? (formal)' },
          { dutch: 'Hoe gaat het met je?', english: 'How are you? (informal)' },
          { dutch: 'Zeg maar jij.', english: 'Just say jij. (You can be informal.)' },
          { dutch: 'Aangenaam kennis te maken.', english: 'Nice to meet you. (formal)' },
          { dutch: 'Leuk je te ontmoeten.', english: 'Nice to meet you. (informal)' },
        ],
      },
      {
        heading: 'Birthday Customs',
        paragraphs: [
          'Dutch birthdays are unique: you congratulate not just the person having a birthday, but also their family and friends! You might hear "Gefeliciteerd!" said to the mother of the birthday person. At a birthday party (verjaardagsfeest), expect to sit in a circle (de kring) and receive a cup of coffee with cake.',
        ],
        phrases: [
          { dutch: 'Gefeliciteerd!', english: 'Congratulations! / Happy birthday!' },
          { dutch: 'Gefeliciteerd met je verjaardag!', english: 'Happy birthday!' },
          { dutch: 'Van harte gefeliciteerd!', english: 'Warm congratulations!' },
          { dutch: 'de verjaardagskalender', english: 'the birthday calendar (hung in the toilet!)' },
        ],
        tip: 'Many Dutch households hang a birthday calendar (verjaardagskalender) in the bathroom so they never forget an upcoming birthday!',
      },
      {
        heading: 'Do\'s and Don\'ts',
        doList: [
          'Shake hands firmly when meeting someone for the first time',
          'Make eye contact during greetings',
          'Congratulate everyone at a birthday party, not just the birthday person',
          'Be punctual — the Dutch value being on time',
        ],
        dontList: [
          'Don\'t kiss people you\'re meeting for the first time',
          'Don\'t show up unannounced — always make an "afspraak" (appointment)',
          'Don\'t be late without letting someone know',
        ],
      },
    ],
  },
  'dutch-directness': {
    title: 'Dutch Directness',
    icon: '🗣️',
    intro:
      'The Dutch are known worldwide for being direct. This communication style can feel blunt or even rude at first, but understanding it is key to feeling at home in the Netherlands.',
    sections: [
      {
        heading: 'Why Are the Dutch So Direct?',
        paragraphs: [
          'For the Dutch, being direct is a form of honesty and respect. They believe it\'s better to say what you think clearly than to be vague or beat around the bush. This applies in personal life, at work, and even with strangers.',
          'When a Dutch person says "I don\'t agree" or "That\'s not a good idea," they\'re not being rude — they\'re just being clear. In many cultures, such feedback might be wrapped in softer language, but the Dutch prefer efficiency over politeness.',
        ],
        tip: 'Dutch directness is rarely personal. If a colleague gives you blunt feedback, they likely respect you enough to be honest rather than tell you what you want to hear.',
      },
      {
        heading: 'Directness at Work',
        paragraphs: [
          'In Dutch workplaces, everyone is expected to share their opinion — even interns or new employees. During meetings (vergaderingen), you\'re encouraged to disagree openly. The boss doesn\'t always have the final word; decisions are often made by consensus (overleg).',
          'Performance reviews are straightforward. Your manager will tell you what you\'re doing well and what needs improvement without sugar-coating it.',
        ],
        phrases: [
          { dutch: 'Ik ben het er niet mee eens.', english: 'I don\'t agree with that.' },
          { dutch: 'Wat bedoel je precies?', english: 'What do you mean exactly?' },
          { dutch: 'Dat is niet mijn ervaring.', english: 'That\'s not my experience.' },
          { dutch: 'Kun je dat uitleggen?', english: 'Can you explain that?' },
          { dutch: 'Laten we eerlijk zijn.', english: 'Let\'s be honest.' },
        ],
      },
      {
        heading: 'How to Respond',
        paragraphs: [
          'The best way to handle Dutch directness is to not take it personally and to be direct in return. The Dutch appreciate people who say what they mean. If you disagree, say so clearly but calmly. If you need time to think, say "Ik wil er even over nadenken" (I want to think about it).',
        ],
        phrases: [
          { dutch: 'Ik wil er even over nadenken.', english: 'I want to think about it.' },
          { dutch: 'Daar heb je een punt.', english: 'You have a point there.' },
          { dutch: 'Ik zie het anders.', english: 'I see it differently.' },
        ],
      },
      {
        heading: 'Do\'s and Don\'ts',
        doList: [
          'Be honest and clear in your communication',
          'Share your opinion, even in work meetings',
          'Ask questions when you don\'t understand something',
          'Appreciate directness as a sign of respect',
        ],
        dontList: [
          'Don\'t interpret directness as rudeness',
          'Don\'t be overly vague or indirect — it can be seen as dishonest',
          'Don\'t take blunt feedback personally',
        ],
      },
    ],
  },
  'workplace-culture': {
    title: 'Workplace Culture',
    icon: '💼',
    intro:
      'Dutch workplace culture is known for its flat hierarchy, work-life balance, and some unique traditions like the borrel. Understanding these norms will help you succeed in a Dutch office.',
    sections: [
      {
        heading: 'The Borrel',
        paragraphs: [
          'The "borrel" is a quintessentially Dutch tradition — an informal after-work drink, usually on Friday (vrijdagmiddagborrel). It\'s an important social event where colleagues relax, chat, and bond outside of work tasks. There\'s usually beer, wine, and bitterballen.',
          'Attending the borrel is technically optional, but it\'s highly recommended for building relationships. Many important conversations happen during borrels.',
        ],
        phrases: [
          { dutch: 'Ga je mee naar de borrel?', english: 'Are you coming to the borrel?' },
          { dutch: 'Proost!', english: 'Cheers!' },
          { dutch: 'Nog eentje?', english: 'One more?' },
          { dutch: 'de vrijdagmiddagborrel', english: 'the Friday afternoon drinks' },
        ],
        tip: 'At a borrel, make sure to look people in the eye when you say "Proost!" (Cheers). It\'s considered bad luck not to!',
      },
      {
        heading: 'Flat Hierarchy',
        paragraphs: [
          'Dutch companies typically have a flat organizational structure. Managers are approachable and often sit in the same open office space as everyone else. It\'s common to call your boss by their first name.',
          'Everyone\'s opinion is valued, and decisions are made through consensus (poldermodel). This means meetings can take longer, but everyone feels heard.',
        ],
        phrases: [
          { dutch: 'Wat vinden jullie?', english: 'What do you all think?' },
          { dutch: 'de vergadering', english: 'the meeting' },
          { dutch: 'het overleg', english: 'the consultation/meeting' },
          { dutch: 'de lunchpauze', english: 'the lunch break' },
        ],
      },
      {
        heading: 'Lunch Culture',
        paragraphs: [
          'Dutch lunch is famously simple: a broodje (sandwich) with cheese or ham, often eaten at your desk or in a canteen. Don\'t expect a warm meal — that\'s reserved for dinner (avondeten). Lunch breaks are typically 30 minutes.',
          'Many companies provide a lunch in the canteen (kantine) for a small fee. Eating together with colleagues is common and a good way to build relationships.',
        ],
        phrases: [
          { dutch: 'Zullen we samen lunchen?', english: 'Shall we have lunch together?' },
          { dutch: 'een broodje kaas', english: 'a cheese sandwich' },
          { dutch: 'de kantine', english: 'the canteen' },
        ],
      },
      {
        heading: 'Work-Life Balance',
        paragraphs: [
          'The Dutch take work-life balance seriously. Working part-time is very common, even for men. Many people work 4 days a week and have a "papadag" or "mamadag" (a day off to spend with children). Leaving the office on time is expected — staying late is not seen as dedication but as poor time management.',
        ],
        phrases: [
          { dutch: 'Ik werk vier dagen per week.', english: 'I work four days a week.' },
          { dutch: 'de papadag', english: 'daddy day (day off for childcare)' },
          { dutch: 'vrije dagen', english: 'days off / vacation days' },
          { dutch: 'parttime werken', english: 'to work part-time' },
        ],
      },
      {
        heading: 'Do\'s and Don\'ts',
        doList: [
          'Join the borrel, especially when you\'re new',
          'Be on time for meetings — punctuality matters',
          'Share your opinion openly in meetings',
          'Use first names, even with your manager',
        ],
        dontList: [
          'Don\'t stay late at the office to impress — it won\'t work',
          'Don\'t skip lunch with colleagues too often',
          'Don\'t expect a warm lunch — bring a boterham!',
        ],
      },
    ],
  },
  'holidays-celebrations': {
    title: 'Holidays & Celebrations',
    icon: '🎉',
    intro:
      'The Netherlands has some unique holidays and traditions that you won\'t find anywhere else. Knowing about them helps you connect with Dutch culture and understand what your colleagues are talking about.',
    sections: [
      {
        heading: 'Koningsdag (King\'s Day) — April 27',
        paragraphs: [
          'Koningsdag is the biggest national celebration, honoring the King\'s birthday. The entire country turns orange (the royal color). There are street markets (vrijmarkt) where anyone can sell things, live music everywhere, and boat parties on the canals.',
          'People wear orange clothing, hats, and accessories. Many cities have live music stages, and Amsterdam\'s canals fill with boats. It\'s a national holiday, so most businesses are closed.',
        ],
        phrases: [
          { dutch: 'Fijne Koningsdag!', english: 'Happy King\'s Day!' },
          { dutch: 'de vrijmarkt', english: 'the free market (anyone can sell)' },
          { dutch: 'oranje', english: 'orange (the national color)' },
          { dutch: 'Leve de Koning!', english: 'Long live the King!' },
        ],
        tip: 'Wear orange on Koningsdag! It\'s the color of the royal family (Huis van Oranje). You\'ll stand out if you don\'t.',
      },
      {
        heading: 'Sinterklaas — December 5',
        paragraphs: [
          'Sinterklaas is the Dutch version of Santa Claus, but celebrated on December 5 (Pakjesavond). Sinterklaas arrives by steamboat from Spain in mid-November, accompanied by his helpers (Pieten). Children put their shoe (schoen) by the fireplace with a carrot for Sinterklaas\'s horse.',
          'Adults also celebrate by exchanging "surprises" — creative handmade gift wrappings with a funny poem (gedicht) about the recipient. Writing these poems is a beloved tradition.',
        ],
        phrases: [
          { dutch: 'het Sinterklaasfeest', english: 'the Sinterklaas celebration' },
          { dutch: 'Pakjesavond', english: 'Gift evening (December 5)' },
          { dutch: 'het gedicht', english: 'the poem' },
          { dutch: 'de surprise', english: 'the creative gift wrapping' },
          { dutch: 'pepernoten', english: 'small spiced cookies (Sinterklaas treat)' },
          { dutch: 'Schoen zetten', english: 'to put your shoe (by the fireplace)' },
        ],
      },
      {
        heading: 'Bevrijdingsdag (Liberation Day) — May 5',
        paragraphs: [
          'Bevrijdingsdag celebrates the liberation of the Netherlands from Nazi occupation in 1945. The day before, May 4, is Dodenherdenking (Remembrance of the Dead), when the entire country observes two minutes of silence at 8:00 PM. It\'s a deeply respected moment.',
          'On May 5, there are festivals across the country with free concerts, speeches, and celebrations of freedom. It\'s a national holiday every five years (2025, 2030, etc.).',
        ],
        phrases: [
          { dutch: 'Bevrijdingsdag', english: 'Liberation Day' },
          { dutch: 'Dodenherdenking', english: 'Remembrance of the Dead' },
          { dutch: 'twee minuten stilte', english: 'two minutes of silence' },
          { dutch: 'de vrijheid', english: 'freedom' },
        ],
      },
      {
        heading: 'Other Notable Holidays',
        paragraphs: [
          'Carnaval (February/March) is celebrated in the south of the Netherlands (Brabant, Limburg) with costumes, parades, and three days of festivities. Oud en Nieuw (New Year\'s Eve) features fireworks everywhere — the Dutch spend millions on fireworks each year. Pasen (Easter) and Kerst (Christmas) are family-focused holidays.',
        ],
        phrases: [
          { dutch: 'Gelukkig Nieuwjaar!', english: 'Happy New Year!' },
          { dutch: 'Vrolijk Kerstfeest!', english: 'Merry Christmas!' },
          { dutch: 'Fijne Pasen!', english: 'Happy Easter!' },
          { dutch: 'het vuurwerk', english: 'the fireworks' },
          { dutch: 'Oud en Nieuw', english: 'Old and New (New Year\'s Eve)' },
        ],
      },
    ],
  },
  'food-dining': {
    title: 'Food & Dining',
    icon: '🧀',
    intro:
      'Dutch food culture may surprise you. From simple lunches to unique snacks and the concept of "gezelligheid," there\'s a lot to discover about how the Dutch eat, drink, and socialize around food.',
    sections: [
      {
        heading: 'Traditional Dutch Food',
        paragraphs: [
          'Dutch cuisine is hearty and simple. Stamppot (mashed potatoes mixed with vegetables) is the ultimate comfort food, often served with rookworst (smoked sausage). Erwtensoep (split pea soup) is a thick winter soup — if the spoon stands up in it, it\'s perfect!',
          'The Netherlands is famous for its cheese, especially Gouda and Edam. Dutch cheese markets (kaasmarkt) are popular tourist attractions in cities like Alkmaar and Gouda.',
        ],
        phrases: [
          { dutch: 'stamppot', english: 'mashed potato dish (with vegetables)' },
          { dutch: 'de erwtensoep / snert', english: 'split pea soup' },
          { dutch: 'de rookworst', english: 'smoked sausage' },
          { dutch: 'de kaas', english: 'the cheese' },
          { dutch: 'Eet smakelijk!', english: 'Enjoy your meal! (Bon appetit!)' },
        ],
      },
      {
        heading: 'Dutch Snacks',
        paragraphs: [
          'The Dutch love their snacks (hapjes). Bitterballen are deep-fried meat-based balls served with mustard — the perfect borrel snack. Frikandel, kroket, and kibbeling (fried fish) are popular from snack bars (snackbar). And no visit to the Netherlands is complete without trying a fresh stroopwafel from a street market.',
        ],
        phrases: [
          { dutch: 'de bitterballen', english: 'deep-fried savory meat balls' },
          { dutch: 'de stroopwafel', english: 'syrup waffle' },
          { dutch: 'de kroket', english: 'deep-fried ragout roll' },
          { dutch: 'de frikandel', english: 'deep-fried minced meat sausage' },
          { dutch: 'patat / friet', english: 'fries (with mayo!)' },
          { dutch: 'een frietje met', english: 'fries with mayo (short for "met mayonaise")' },
        ],
        tip: 'The Dutch eat their fries (patat/friet) with mayonnaise, not ketchup! Ask for "patat oorlog" (fries war) to get fries with mayo, peanut sauce, and onions.',
      },
      {
        heading: 'Breakfast & Hagelslag',
        paragraphs: [
          'Dutch breakfast is bread-based: slices of bread with butter and toppings like cheese, ham, peanut butter, or hagelslag (chocolate sprinkles). Yes, adults eat chocolate sprinkles on bread for breakfast, and it\'s completely normal! There\'s also ontbijtkoek (spiced breakfast cake) and beschuit met muisjes (rusk with anise sprinkles, traditionally served when a baby is born).',
        ],
        phrases: [
          { dutch: 'hagelslag', english: 'chocolate sprinkles (for bread)' },
          { dutch: 'het ontbijt', english: 'breakfast' },
          { dutch: 'een boterham', english: 'a slice of bread / sandwich' },
          { dutch: 'beschuit met muisjes', english: 'rusk with anise sprinkles (birth tradition)' },
        ],
      },
      {
        heading: 'Going Dutch (Splitting the Bill)',
        paragraphs: [
          'The expression "going Dutch" really does come from the Netherlands! It\'s very common to split the bill (de rekening delen) when dining out with friends. Don\'t expect someone to pay for the whole group. Even on dates, splitting is normal, though this is slowly changing.',
          'The concept of "gezelligheid" is central to Dutch dining — it means a warm, convivial atmosphere. Any meal is better when it\'s gezellig!',
        ],
        phrases: [
          { dutch: 'Laten we de rekening delen.', english: 'Let\'s split the bill.' },
          { dutch: 'Mag ik de rekening?', english: 'May I have the bill?' },
          { dutch: 'gezellig', english: 'cozy / convivial / fun (untranslatable!)' },
          { dutch: 'Dat was gezellig!', english: 'That was a great time!' },
          { dutch: 'apart betalen', english: 'to pay separately' },
        ],
      },
    ],
  },
  'cycling-culture': {
    title: 'Cycling Culture',
    icon: '🚲',
    intro:
      'The Netherlands has more bicycles than people. Cycling is not just a hobby — it\'s the primary mode of transportation. Understanding bike culture is essential for daily life.',
    sections: [
      {
        heading: 'Why Cycling Is King',
        paragraphs: [
          'With over 35,000 kilometers of dedicated bike paths (fietspaden), the Netherlands is the most bike-friendly country in the world. People cycle to work, school, the supermarket, and even in the rain. There are more than 23 million bicycles for a population of about 18 million people.',
          'Cycling is for everyone: businesspeople in suits, parents with children, elderly people — it\'s simply the most efficient way to get around in Dutch cities.',
        ],
        phrases: [
          { dutch: 'de fiets', english: 'the bicycle' },
          { dutch: 'het fietspad', english: 'the bike path' },
          { dutch: 'de fietsenmaker', english: 'the bicycle repair shop' },
          { dutch: 'de fietsenstalling', english: 'the bicycle parking' },
          { dutch: 'Ik ga op de fiets.', english: 'I\'m going by bike.' },
        ],
      },
      {
        heading: 'Bike Rules & Etiquette',
        paragraphs: [
          'Always use the fietspad (bike path) — cycling on the sidewalk is not allowed. Use hand signals: stick your left arm out to turn left, right arm for right. At night, you must have a front light (wit) and rear light (rood) — police will fine you if you don\'t.',
          'Always lock your bike! Bike theft is very common. Use a strong lock (slot) and always lock your bike to something fixed. Many Dutch bikes have a built-in ring lock (ringslot) plus an additional chain lock (kettingslot).',
        ],
        phrases: [
          { dutch: 'het slot', english: 'the lock' },
          { dutch: 'het kettingslot', english: 'the chain lock' },
          { dutch: 'de fietslamp', english: 'the bike light' },
          { dutch: 'linksaf / rechtsaf', english: 'turn left / turn right' },
          { dutch: 'Pas op!', english: 'Watch out! / Be careful!' },
        ],
        tip: 'Never walk on the bike path! Cyclists won\'t hesitate to ring their bell at you. Listen for the bell (fietsbel) — it means "move!"',
      },
      {
        heading: 'Types of Bikes',
        paragraphs: [
          'The classic Dutch bike is the "omafiets" (grandma bike) — a sturdy, upright bicycle with a step-through frame. Bakfietsen (cargo bikes) are used to transport children, groceries, and even furniture. Electric bikes (e-bikes) are increasingly popular, especially for longer commutes.',
          'You can buy a second-hand bike at markets or shops like Marktplaats (Dutch eBay). Swapfiets offers bike subscriptions — pay monthly and they handle repairs.',
        ],
        phrases: [
          { dutch: 'de omafiets', english: 'classic Dutch bike (grandma bike)' },
          { dutch: 'de bakfiets', english: 'cargo bike' },
          { dutch: 'de elektrische fiets / e-bike', english: 'electric bicycle' },
          { dutch: 'een lekke band', english: 'a flat tire' },
          { dutch: 'de fietsenwinkel', english: 'the bicycle shop' },
        ],
      },
      {
        heading: 'Do\'s and Don\'ts',
        doList: [
          'Always use hand signals when turning',
          'Lock your bike with at least one strong lock',
          'Use lights at night — it\'s the law',
          'Stay on the bike path (fietspad)',
          'Look out for scooters on the bike path',
        ],
        dontList: [
          'Don\'t walk on the bike path — ever!',
          'Don\'t cycle while looking at your phone',
          'Don\'t buy a bike that seems too cheap — it might be stolen',
          'Don\'t forget to signal before stopping suddenly',
        ],
      },
    ],
  },
  'housing-registration': {
    title: 'Housing & Registration',
    icon: '🏠',
    intro:
      'Moving to the Netherlands involves some essential administrative steps. Here\'s what you need to know about finding housing, registering, and getting set up with the crucial Dutch systems.',
    sections: [
      {
        heading: 'BSN Number (Burgerservicenummer)',
        paragraphs: [
          'The BSN is your citizen service number — the most important number you\'ll have in the Netherlands. You need it for everything: opening a bank account, starting a job, visiting the doctor, and paying taxes. You receive your BSN when you register at the gemeente (municipality).',
        ],
        phrases: [
          { dutch: 'het burgerservicenummer (BSN)', english: 'citizen service number' },
          { dutch: 'Wat is uw BSN?', english: 'What is your BSN?' },
          { dutch: 'het identiteitsbewijs', english: 'the identity document' },
        ],
        tip: 'Register at the gemeente as soon as possible after arriving. Without a BSN, you can\'t open a bank account or start working officially.',
      },
      {
        heading: 'Gemeente Registration',
        paragraphs: [
          'Within 5 days of arriving, you must register at the gemeente (municipality office) of your city. You\'ll need your passport, birth certificate (sometimes apostilled), and a rental contract. After registration, you\'ll receive your BSN and be in the BRP (Basisregistratie Personen — population registry).',
          'Make an afspraak (appointment) online beforehand — most municipalities don\'t accept walk-ins.',
        ],
        phrases: [
          { dutch: 'de gemeente', english: 'the municipality' },
          { dutch: 'een afspraak maken', english: 'to make an appointment' },
          { dutch: 'het inschrijven', english: 'the registration' },
          { dutch: 'Ik wil me inschrijven.', english: 'I want to register.' },
          { dutch: 'het huurcontract', english: 'the rental contract' },
        ],
      },
      {
        heading: 'DigiD',
        paragraphs: [
          'DigiD is your digital identity for accessing Dutch government services online. You use it for taxes (Belastingdienst), healthcare declarations, municipality services, and much more. It works like a login system with two-factor authentication.',
          'Apply for DigiD online at digid.nl after you have your BSN. You\'ll receive an activation code by post.',
        ],
        phrases: [
          { dutch: 'DigiD', english: 'digital identity (government login)' },
          { dutch: 'de Belastingdienst', english: 'the tax authority' },
          { dutch: 'inloggen met DigiD', english: 'log in with DigiD' },
          { dutch: 'de activeringscode', english: 'the activation code' },
        ],
      },
      {
        heading: 'Finding Housing',
        paragraphs: [
          'Housing in the Netherlands, especially in big cities like Amsterdam, Utrecht, and Rotterdam, is very competitive. Start looking early. Websites like Funda (for buying), Pararius, and Kamernet (for renting) are the main platforms. Be wary of scams — never pay a deposit before seeing the property.',
          'Rent prices are divided into social housing (sociale huur) and free-sector housing (vrije sector). Social housing has long waiting lists, sometimes 10+ years in Amsterdam.',
        ],
        phrases: [
          { dutch: 'de huur', english: 'the rent' },
          { dutch: 'de huurwoning', english: 'rental apartment' },
          { dutch: 'de koopwoning', english: 'house for sale' },
          { dutch: 'de makelaar', english: 'the real estate agent' },
          { dutch: 'de borg', english: 'the deposit' },
          { dutch: 'Ik zoek een woning.', english: 'I\'m looking for a place to live.' },
        ],
        tip: 'Beware of scam listings that ask for deposits before viewing. Always visit the property in person before paying anything.',
      },
    ],
  },
  healthcare: {
    title: 'Healthcare System',
    icon: '🏥',
    intro:
      'The Dutch healthcare system is well-organized but works differently from most countries. Understanding the role of the huisarts (GP), the referral system, and insurance is essential for your health and peace of mind.',
    sections: [
      {
        heading: 'The Huisarts (General Practitioner)',
        paragraphs: [
          'The huisarts (GP/family doctor) is the cornerstone of Dutch healthcare. They are your first point of contact for ALL health issues. You cannot go directly to a specialist — you must be referred by your huisarts. This is called the "verwijzing" (referral) system.',
          'Register with a huisarts near your home as soon as possible. Some practices have waiting lists, so don\'t wait until you\'re sick! You\'ll first make an appointment with the assistant (doktersassistent), who will assess your situation.',
        ],
        phrases: [
          { dutch: 'de huisarts', english: 'the GP / family doctor' },
          { dutch: 'de doktersassistent', english: 'the doctor\'s assistant' },
          { dutch: 'een afspraak maken', english: 'to make an appointment' },
          { dutch: 'Ik wil een afspraak maken.', english: 'I want to make an appointment.' },
          { dutch: 'de verwijzing', english: 'the referral' },
          { dutch: 'het spreekuur', english: 'the consultation hours' },
        ],
        tip: 'The doktersassistent is not just a receptionist — they are trained to triage. They will ask about your symptoms to determine urgency. Be open and specific about your complaint.',
      },
      {
        heading: 'Health Insurance (Zorgverzekering)',
        paragraphs: [
          'Health insurance is mandatory in the Netherlands. Everyone must have a basisverzekering (basic insurance), which costs around \u20ac120-\u20ac140 per month. You choose your own insurer (like Zilveren Kruis, CZ, or Menzis). On top of basic insurance, you can add aanvullende verzekering (supplementary insurance) for dental, physiotherapy, etc.',
          'There is a yearly deductible called the "eigen risico" (currently \u20ac385). This means you pay the first \u20ac385 of specialized care costs yourself. Visits to the huisarts are free and do not count toward the deductible.',
        ],
        phrases: [
          { dutch: 'de zorgverzekering', english: 'health insurance' },
          { dutch: 'de basisverzekering', english: 'basic insurance' },
          { dutch: 'het eigen risico', english: 'the yearly deductible' },
          { dutch: 'de zorgtoeslag', english: 'healthcare allowance (government subsidy)' },
          { dutch: 'de premie', english: 'the premium (monthly cost)' },
        ],
      },
      {
        heading: 'The Referral System',
        paragraphs: [
          'To see a specialist (specialist), you need a referral (verwijzing) from your huisarts. This applies to dermatologists, cardiologists, psychologists, and almost all other specialists. Without a referral, you\'ll have to pay the full cost yourself.',
          'The first aid (spoedeisende hulp / SEH) at hospitals is for real emergencies only. For urgent but non-emergency issues outside office hours, call the huisartsenpost (GP night/weekend service).',
        ],
        phrases: [
          { dutch: 'de specialist', english: 'the specialist' },
          { dutch: 'het ziekenhuis', english: 'the hospital' },
          { dutch: 'de spoedeisende hulp (SEH)', english: 'emergency room' },
          { dutch: 'de huisartsenpost', english: 'GP after-hours service' },
          { dutch: 'Ik heb een verwijzing nodig.', english: 'I need a referral.' },
        ],
      },
      {
        heading: 'The Dutch Approach to Medicine',
        paragraphs: [
          'The Dutch approach to healthcare can feel quite conservative compared to other countries. Don\'t expect antibiotics for a cold or medication for every complaint. The huisarts may tell you to "take a paracetamol and wait" — this is normal Dutch medical advice, not negligence!',
          'The phrase "neem een paracetamolletje" (take a paracetamol) is so common it\'s become a cultural joke. The Dutch believe in letting the body heal itself when possible.',
        ],
        phrases: [
          { dutch: 'Neem een paracetamolletje.', english: 'Take a paracetamol. (classic Dutch advice)' },
          { dutch: 'het recept', english: 'the prescription' },
          { dutch: 'de apotheek', english: 'the pharmacy' },
          { dutch: 'Ik voel me niet lekker.', english: 'I don\'t feel well.' },
          { dutch: 'de huisartsenpost bellen', english: 'to call the after-hours GP' },
        ],
        tip: 'If you feel your concerns are not being taken seriously, you can ask for a second opinion (second opinion) or switch huisarts. You have the right to do so.',
      },
    ],
  },
  'birthday-songs-traditions': {
    title: 'Birthday Songs & Traditions',
    icon: '🎂',
    intro:
      'Dutch birthdays come with their own unique traditions, songs, and social rituals. Knowing the birthday songs and customs will help you feel confident at any Dutch verjaardagsfeest (birthday party).',
    sections: [
      {
        heading: '"Lang zal hij/zij leven" — The Main Birthday Song',
        paragraphs: [
          'The most important Dutch birthday song is "Lang zal hij/zij leven" (Long shall he/she live). It\'s sung at virtually every birthday party, from children\'s parties to office celebrations. The song is short, upbeat, and everyone joins in. You\'ll use "hij" (he) or "zij" (she) depending on the birthday person.',
          'The song is traditionally sung right when the birthday person arrives at a party, or when the cake comes out. Everyone stands, sings together, and then congratulates the birthday person with "Gefeliciteerd!" followed by three kisses or a handshake.',
        ],
        phrases: [
          { dutch: 'Lang zal hij/zij leven!', english: 'Long shall he/she live!' },
          { dutch: 'in de gloria', english: 'in glory (part of the song)' },
          { dutch: 'Hip hip hoera!', english: 'Hip hip hooray!' },
          { dutch: 'Gefeliciteerd!', english: 'Congratulations! / Happy birthday!' },
        ],
        tip: 'The song is typically repeated three times in a row, getting louder and more enthusiastic each time. Don\'t be shy — join in even if your Dutch isn\'t perfect!',
      },
      {
        heading: '"Er is er een jarig" — The Children\'s Birthday Song',
        paragraphs: [
          '"Er is er een jarig, hoera, hoera!" (Someone is having a birthday, hooray, hooray!) is the other well-known Dutch birthday song. It\'s especially popular at children\'s parties, in schools, and at daycare (kinderopvang). It\'s cheerful and easy to learn.',
          'Children also celebrate their birthday at school by handing out traktaties (treats) to all their classmates. The birthday child walks around the classroom with a decorated box or tray of treats — this is a big deal for Dutch kids!',
        ],
        phrases: [
          { dutch: 'Er is er een jarig!', english: 'Someone is having a birthday!' },
          { dutch: 'Hoera, hoera!', english: 'Hooray, hooray!' },
          { dutch: 'de traktatie', english: 'the birthday treat (given out at school)' },
          { dutch: 'de jarige', english: 'the birthday boy/girl' },
          { dutch: 'de verjaardag', english: 'the birthday' },
        ],
      },
      {
        heading: 'The Circle Party (De Kring)',
        paragraphs: [
          'The classic Dutch birthday party is the "kringverjaardag" — a circle party. Guests sit in a large circle in the living room, and the birthday person (or their family) serves coffee, cake, and later drinks and snacks. You go around the circle congratulating everyone: not just the birthday person, but also their partner, parents, siblings, and close friends.',
          'This tradition can feel unusual at first, but it\'s deeply ingrained in Dutch culture, especially among older generations and in more traditional families. Younger Dutch people sometimes joke about it, but the kring is still very much alive.',
        ],
        phrases: [
          { dutch: 'de kringverjaardag', english: 'the circle birthday party' },
          { dutch: 'Gefeliciteerd met je man/vrouw!', english: 'Congratulations on your husband/wife (\'s birthday)!' },
          { dutch: 'de taart', english: 'the cake' },
          { dutch: 'een kopje koffie', english: 'a cup of coffee' },
          { dutch: 'de hapjes', english: 'the snacks / appetizers' },
          { dutch: 'de slingers', english: 'the garlands / streamers (decoration)' },
        ],
        tip: 'When you arrive at a Dutch birthday party, make your way around the entire circle to congratulate each person individually with a handshake or three kisses. Yes, all of them!',
      },
      {
        heading: 'Abraham & Sarah — Turning 50',
        paragraphs: [
          'Turning 50 is a major milestone in the Netherlands. When someone turns 50, they "see Abraham" (men) or "see Sarah" (women). Friends and family place a large inflatable or wooden figure of Abraham or Sarah in the front yard, often dressed in funny clothes. The house and office are decorated with banners saying "Abraham gezien!" or "Sarah gezien!"',
          'This tradition comes from a Bible verse (John 8:57). There\'s often a big party with special decorations and sometimes even a personalized newspaper or book about the birthday person\'s life.',
        ],
        phrases: [
          { dutch: 'Hij heeft Abraham gezien!', english: 'He has seen Abraham! (He turned 50!)' },
          { dutch: 'Zij heeft Sarah gezien!', english: 'She has seen Sarah! (She turned 50!)' },
          { dutch: 'de Abraham / Sarah pop', english: 'the Abraham / Sarah doll (placed in the yard)' },
          { dutch: 'een halve eeuw', english: 'half a century' },
        ],
      },
      {
        heading: 'Useful Birthday Vocabulary',
        phrases: [
          { dutch: 'Van harte gefeliciteerd!', english: 'Warm congratulations! / Happy birthday!' },
          { dutch: 'Gefeliciteerd met je verjaardag!', english: 'Happy birthday!' },
          { dutch: 'Hoeveel kaarsjes?', english: 'How many candles?' },
          { dutch: 'een cadeautje', english: 'a (small) gift' },
          { dutch: 'de verjaardagskalender', english: 'the birthday calendar (often in the bathroom!)' },
          { dutch: 'de verjaardagskaart', english: 'the birthday card' },
          { dutch: 'Fijne verjaardag!', english: 'Happy birthday! (Have a nice birthday!)' },
          { dutch: 'de feestmuts', english: 'the party hat' },
          { dutch: 'Proost op de jarige!', english: 'Cheers to the birthday person!' },
        ],
      },
      {
        heading: 'Do\'s and Don\'ts',
        doList: [
          'Congratulate everyone at the party, not just the birthday person',
          'Join in singing — enthusiasm matters more than perfect Dutch',
          'Bring a small gift (cadeautje) or a birthday card (verjaardagskaart)',
          'Expect coffee and cake first, then drinks and snacks later',
        ],
        dontList: [
          'Don\'t forget to check the verjaardagskalender — forgetting a Dutch birthday is a big faux pas',
          'Don\'t skip the congratulation round when you arrive at the party',
          'Don\'t leave without saying goodbye to the birthday person and thanking them',
        ],
      },
    ],
  },
  'dutch-golden-age': {
    title: 'The Golden Age',
    icon: '🎨',
    intro:
      'The 17th century was the Dutch Golden Age (de Gouden Eeuw) — a period of extraordinary wealth, global trade, scientific discovery, and artistic brilliance. Understanding this era helps explain why the Netherlands looks the way it does today, from Amsterdam\'s canal ring to the masterpieces in the Rijksmuseum.',
    sections: [
      {
        heading: 'The VOC and Global Trade',
        paragraphs: [
          'The Vereenigde Oost-Indische Compagnie (VOC), or Dutch East India Company, was founded in 1602 and became the world\'s first multinational corporation. It was also the first company to issue stocks on a public exchange — the Amsterdam Stock Exchange (Amsterdamse Effectenbeurs), the oldest in the world.',
          'The VOC traded spices, textiles, and other goods across Asia, making the Netherlands fabulously wealthy. At its peak, the VOC had over 150 merchant ships, 40 warships, and 50,000 employees. Dutch traders established posts in Indonesia, South Africa, Japan, and many other locations.',
          'The West India Company (WIC) focused on the Americas and Africa. New Amsterdam — later renamed New York — was founded as a Dutch trading post. The influence of Dutch trade can still be seen in place names across the world.',
        ],
        phrases: [
          { dutch: 'de Gouden Eeuw', english: 'the Golden Age (17th century)' },
          { dutch: 'de VOC (Vereenigde Oost-Indische Compagnie)', english: 'the Dutch East India Company' },
          { dutch: 'de handel', english: 'trade / commerce' },
          { dutch: 'de koopman', english: 'the merchant' },
          { dutch: 'de specerijen', english: 'the spices' },
          { dutch: 'de beurs', english: 'the stock exchange' },
        ],
        tip: 'The VOC is a common topic in Dutch history discussions and on the KNM exam. You\'ll also see "VOC-mentaliteit" used (sometimes critically) to describe Dutch entrepreneurial spirit.',
      },
      {
        heading: 'Art and the Dutch Masters',
        paragraphs: [
          'The Golden Age produced some of the greatest painters in history. Rembrandt van Rijn is the most famous, known for "De Nachtwacht" (The Night Watch), which hangs in the Rijksmuseum in Amsterdam. Johannes Vermeer painted intimate domestic scenes, including "Het Meisje met de Parel" (Girl with a Pearl Earring), displayed in the Mauritshuis in The Hague.',
          'Other notable painters include Frans Hals (portraits), Jan Steen (humorous scenes of daily life), and Jacob van Ruisdael (landscapes). Dutch painters of this era pioneered new genres: still lifes (stillevens), landscapes (landschappen), and domestic scenes.',
          'Art was not just for the wealthy — middle-class families also bought paintings to decorate their homes. This was unique in Europe at the time and reflects the Dutch merchant culture.',
        ],
        phrases: [
          { dutch: 'het schilderij', english: 'the painting' },
          { dutch: 'de schilder', english: 'the painter' },
          { dutch: 'het Rijksmuseum', english: 'the National Museum (Amsterdam)' },
          { dutch: 'De Nachtwacht', english: 'The Night Watch (Rembrandt)' },
          { dutch: 'Het Meisje met de Parel', english: 'Girl with a Pearl Earring (Vermeer)' },
          { dutch: 'het meesterwerk', english: 'the masterpiece' },
        ],
      },
      {
        heading: 'Amsterdam\'s Canal Ring',
        paragraphs: [
          'The iconic grachtengordel (canal ring) of Amsterdam was built during the Golden Age, starting in 1613. The three main canals — Herengracht, Keizersgracht, and Prinsengracht — were designed as a grand urban expansion to house the city\'s growing wealthy merchant class.',
          'The canal houses (grachtenpanden) with their narrow facades and decorative gables are one of the most recognizable images of the Netherlands. Houses were taxed based on their width, which is why they are famously narrow but deep. Many have hooks at the top for hoisting furniture through windows — the staircases were too narrow!',
          'The Amsterdam canal ring was designated a UNESCO World Heritage Site in 2010. Today, a boat tour (rondvaart) through the canals is one of the most popular tourist activities.',
        ],
        phrases: [
          { dutch: 'de gracht', english: 'the canal' },
          { dutch: 'de grachtengordel', english: 'the canal ring' },
          { dutch: 'het grachtenpand', english: 'the canal house' },
          { dutch: 'de gevel', english: 'the facade / gable' },
          { dutch: 'de rondvaart', english: 'the boat tour' },
          { dutch: 'de Herengracht', english: 'the Gentlemen\'s Canal' },
        ],
        tip: 'If you live in Amsterdam, knowing the names of the three main canals (Herengracht, Keizersgracht, Prinsengracht) is essential for navigation. Remember: they go in alphabetical order from inside to outside!',
      },
      {
        heading: 'Science and Innovation',
        paragraphs: [
          'The Golden Age was also a time of remarkable scientific progress. Antonie van Leeuwenhoek invented the microscope and was the first person to observe bacteria and other microorganisms. Christiaan Huygens made major contributions to physics and astronomy, including inventing the pendulum clock.',
          'The Netherlands became a center for publishing and intellectual freedom. Philosophers like Baruch Spinoza and Rene Descartes (who lived in the Netherlands) worked here because of the relative tolerance for free thought. The University of Leiden, founded in 1575, became one of Europe\'s leading centers of learning.',
        ],
        phrases: [
          { dutch: 'de uitvinding', english: 'the invention' },
          { dutch: 'de wetenschap', english: 'science' },
          { dutch: 'de microscoop', english: 'the microscope' },
          { dutch: 'de universiteit', english: 'the university' },
          { dutch: 'de vrijheid van denken', english: 'freedom of thought' },
        ],
      },
      {
        heading: 'Golden Age Vocabulary for Daily Life',
        phrases: [
          { dutch: 'de Gouden Eeuw', english: 'the Golden Age' },
          { dutch: 'het museum', english: 'the museum' },
          { dutch: 'de tentoonstelling', english: 'the exhibition' },
          { dutch: 'de geschiedenis', english: 'history' },
          { dutch: 'de cultuur', english: 'culture' },
          { dutch: 'de welvaart', english: 'prosperity / wealth' },
          { dutch: 'het erfgoed', english: 'heritage' },
          { dutch: 'de wereldhandel', english: 'world trade' },
        ],
      },
    ],
  },
  'dutch-independence': {
    title: 'Independence & the 80 Years\' War',
    icon: '⚔️',
    intro:
      'The birth of the Netherlands as an independent nation is one of the most dramatic stories in European history. The 80 Years\' War (Tachtigjarige Oorlog, 1568\u20131648) against Spanish rule shaped Dutch identity, values of freedom and tolerance, and even the national anthem.',
    sections: [
      {
        heading: 'Spanish Rule and the Revolt',
        paragraphs: [
          'In the 16th century, the Netherlands was part of the Spanish Habsburg Empire. King Philip II of Spain imposed heavy taxes and brutally persecuted Protestants through the Spanish Inquisition. The Dutch, who valued their local freedoms and were increasingly Protestant, grew resentful.',
          'The revolt began in 1568 when William of Orange (Willem van Oranje), a nobleman also known as "William the Silent" (Willem de Zwijger), led the resistance against Spanish tyranny. The early years were difficult — the Dutch suffered many defeats, and William had to flee several times.',
          'The Spanish Duke of Alba was sent to crush the rebellion and established the "Raad van Beroerten" (Council of Troubles), nicknamed the "Bloedraad" (Blood Council), which executed thousands of people. This brutality only strengthened Dutch resolve.',
        ],
        phrases: [
          { dutch: 'de Tachtigjarige Oorlog', english: 'the 80 Years\' War (1568\u20131648)' },
          { dutch: 'de opstand', english: 'the revolt / rebellion' },
          { dutch: 'Willem van Oranje', english: 'William of Orange' },
          { dutch: 'de Vader des Vaderlands', english: 'the Father of the Fatherland' },
          { dutch: 'de vrijheid', english: 'freedom' },
          { dutch: 'het verzet', english: 'the resistance' },
        ],
        tip: 'William of Orange is called "de Vader des Vaderlands" (Father of the Fatherland). The royal family\'s name "Oranje" (Orange) comes from him — which is why orange is the national color.',
      },
      {
        heading: 'The Dutch Republic',
        paragraphs: [
          'In 1581, the northern provinces formally declared independence from Spain with the Plakkaat van Verlatinghe (Act of Abjuration) — a document that later inspired the American Declaration of Independence. The Republic of the Seven United Netherlands was born.',
          'The Dutch Republic was unique in Europe: it had no king, was governed by the States-General (Staten-Generaal), and was led by a stadhouder (stadtholder) from the House of Orange. Power was shared between the provinces, and cities had significant autonomy. This decentralized structure fostered trade, tolerance, and innovation.',
          'Religious tolerance was a cornerstone of the Republic. While the Dutch Reformed Church was the official church, Catholics, Jews, and other religious groups were generally allowed to worship privately. This tolerance attracted persecuted groups from across Europe, enriching Dutch culture and economy.',
        ],
        phrases: [
          { dutch: 'de Republiek', english: 'the Republic' },
          { dutch: 'de Staten-Generaal', english: 'the States-General (parliament)' },
          { dutch: 'de stadhouder', english: 'the stadtholder (head of state)' },
          { dutch: 'het Plakkaat van Verlatinghe', english: 'the Act of Abjuration (1581)' },
          { dutch: 'de onafhankelijkheid', english: 'independence' },
          { dutch: 'de godsdienstvrijheid', english: 'freedom of religion' },
        ],
      },
      {
        heading: 'The Wilhelmus — National Anthem',
        paragraphs: [
          'The Dutch national anthem, "Het Wilhelmus," is the oldest national anthem in the world (written around 1572). It is written from the perspective of William of Orange and expresses his loyalty to the Dutch people and his struggle against Spanish tyranny.',
          'The anthem has 15 verses, though only the first and sixth are usually sung. The first letters of each verse spell "WILLEM VAN NASSOV" (William of Nassau), making it an acrostic. You\'ll hear it at national events, football matches, and on Koningsdag.',
          'Learning at least the first verse is a nice gesture as a newcomer. It\'s also part of the KNM exam — you\'re expected to know that the Wilhelmus is the national anthem and understand its basic meaning.',
        ],
        phrases: [
          { dutch: 'het Wilhelmus', english: 'the national anthem of the Netherlands' },
          { dutch: 'het volkslied', english: 'the national anthem (general term)' },
          { dutch: 'de Nederlandse vlag', english: 'the Dutch flag (red, white, blue)' },
          { dutch: 'Oranje boven!', english: 'Go Orange! (patriotic cheer)' },
        ],
        tip: 'The Dutch flag is red, white, and blue (rood, wit, blauw) — it was originally orange, white, and blue, but the orange was changed to red because it faded at sea. Orange is still used separately as the national color.',
      },
      {
        heading: 'The Peace of Westphalia (1648)',
        paragraphs: [
          'The 80 Years\' War officially ended with the Peace of Westphalia (Vrede van Westfalen) in 1648, which recognized Dutch independence. By this time, the Netherlands had already become one of the wealthiest and most powerful nations in Europe.',
          'The peace treaty is a landmark in international law — it established the principle of national sovereignty that still underpins international relations today. For the Dutch, it marked the formal beginning of their independent identity as a nation.',
        ],
        phrases: [
          { dutch: 'de Vrede van Westfalen', english: 'the Peace of Westphalia (1648)' },
          { dutch: 'de soevereiniteit', english: 'sovereignty' },
          { dutch: 'de vrede', english: 'peace' },
          { dutch: 'de natie', english: 'the nation' },
          { dutch: 'het verdrag', english: 'the treaty' },
        ],
      },
      {
        heading: 'Independence Vocabulary for Daily Life',
        phrases: [
          { dutch: 'de geschiedenis', english: 'history' },
          { dutch: 'de oorlog', english: 'war' },
          { dutch: 'de koning / de koningin', english: 'the king / the queen' },
          { dutch: 'het koninkrijk', english: 'the kingdom' },
          { dutch: 'de democratie', english: 'democracy' },
          { dutch: 'de grondwet', english: 'the constitution' },
          { dutch: 'de Tweede Kamer', english: 'the House of Representatives' },
          { dutch: 'de regering', english: 'the government' },
        ],
      },
    ],
  },
  'dutch-water-management': {
    title: 'Water & the Polders',
    icon: '🌊',
    intro:
      'There\'s a famous saying: "God created the world, but the Dutch created the Netherlands." With about a quarter of the country below sea level, the Dutch relationship with water has defined their landscape, engineering, governance, and national character for centuries.',
    sections: [
      {
        heading: 'Living Below Sea Level',
        paragraphs: [
          'Approximately 26% of the Netherlands lies below sea level, and about 60% of the population lives in areas that would flood without protection. The lowest point is Zuidplaspolder near Rotterdam, at 6.76 meters below sea level. Without its elaborate system of dikes, dunes, and pumping stations, much of the western Netherlands — including Amsterdam, Rotterdam, and The Hague — would be underwater.',
          'The Dutch have been fighting water for over 2,000 years. The earliest inhabitants built terpen (artificial mounds) to live above flood level. Over the centuries, they developed increasingly sophisticated engineering to not just defend against water, but to actively reclaim land from the sea.',
        ],
        phrases: [
          { dutch: 'beneden zeeniveau', english: 'below sea level' },
          { dutch: 'de zeespiegel', english: 'the sea level' },
          { dutch: 'het laagland', english: 'the lowland' },
          { dutch: 'de Nederlanden', english: 'the Low Countries (literal name origin)' },
          { dutch: 'de overstromingen', english: 'the floods' },
        ],
        tip: 'The name "Nederland" literally means "low land" — this isn\'t just a name, it\'s a geographical fact that shapes every aspect of Dutch life and governance.',
      },
      {
        heading: 'Windmills and Polders',
        paragraphs: [
          'A polder is an area of low-lying land reclaimed from water and protected by dikes. The Dutch created polders by building a dike around a lake or marshy area, then pumping the water out using windmills. The drained land became incredibly fertile farmland.',
          'Windmills (windmolens) became the symbol of Dutch engineering. At their peak in the 19th century, there were over 10,000 windmills in the Netherlands. They pumped water, ground grain, sawed wood, and powered other industries. Today, about 1,000 historic windmills remain, and 19 at Kinderdijk are a UNESCO World Heritage Site.',
          'The Beemster Polder, created in 1612, was one of the first large-scale land reclamation projects and is also a UNESCO World Heritage Site. The entire province of Flevoland was reclaimed from the sea in the 20th century — it\'s the largest artificial island in the world.',
        ],
        phrases: [
          { dutch: 'de polder', english: 'the polder (reclaimed land)' },
          { dutch: 'de molen / de windmolen', english: 'the mill / the windmill' },
          { dutch: 'de dijk', english: 'the dike / levee' },
          { dutch: 'droogmalen', english: 'to pump dry (land reclamation)' },
          { dutch: 'Kinderdijk', english: 'UNESCO windmill site near Rotterdam' },
          { dutch: 'de Flevopolder', english: 'the Flevo Polder (largest artificial island)' },
        ],
      },
      {
        heading: 'The 1953 Watersnoodramp',
        paragraphs: [
          'On the night of February 1, 1953, a devastating storm surge struck the southwestern Netherlands. The combination of a spring tide and severe northwest storm caused dikes to breach in over 150 places. The Watersnoodramp (flood disaster) killed 1,836 people and forced the evacuation of 100,000 more.',
          'The disaster was a national trauma and a turning point. The government immediately launched the Deltaplan (Delta Plan) — one of the most ambitious engineering projects in history. The goal: make sure such a flood could never happen again.',
        ],
        phrases: [
          { dutch: 'de Watersnoodramp', english: 'the 1953 flood disaster' },
          { dutch: 'de stormvloed', english: 'the storm surge' },
          { dutch: 'de dijkdoorbraak', english: 'the dike breach' },
          { dutch: 'het Deltaplan', english: 'the Delta Plan' },
          { dutch: 'de evacuatie', english: 'the evacuation' },
        ],
        tip: 'The Watersnoodramp is remembered every year on February 1. It\'s an important topic on the KNM exam — you should know what happened and why the Delta Works were built.',
      },
      {
        heading: 'The Delta Works (Deltawerken)',
        paragraphs: [
          'The Delta Works is a series of 13 massive dams, barriers, sluices, and storm surge barriers built between 1954 and 1997. The crown jewel is the Oosterscheldekering (Eastern Scheldt storm surge barrier), a 9-kilometer-long barrier that normally stays open to preserve the ecosystem but closes during dangerous storms.',
          'The Maeslantkering near Rotterdam protects Europe\'s largest port. It consists of two enormous steel gates, each as large as the Eiffel Tower. The entire system is computer-controlled and closes automatically when water levels reach dangerous heights.',
          'The Delta Works was named one of the Seven Wonders of the Modern World by the American Society of Civil Engineers. Today, Dutch water management expertise is exported worldwide — Dutch engineers help countries from Bangladesh to the United States with flood protection.',
        ],
        phrases: [
          { dutch: 'de Deltawerken', english: 'the Delta Works' },
          { dutch: 'de stormvloedkering', english: 'the storm surge barrier' },
          { dutch: 'de Oosterscheldekering', english: 'the Eastern Scheldt barrier' },
          { dutch: 'de Maeslantkering', english: 'the Maeslant barrier (Rotterdam)' },
          { dutch: 'de sluis', english: 'the lock / sluice' },
          { dutch: 'de dam', english: 'the dam' },
        ],
      },
      {
        heading: 'The Waterschap — Water Boards',
        paragraphs: [
          'The Netherlands has a unique form of government you won\'t find anywhere else: waterschappen (water boards). These are regional authorities responsible for managing water levels, maintaining dikes, and treating wastewater. They\'re among the oldest democratic institutions in the Netherlands, predating the national government by centuries.',
          'Every resident pays waterschap taxes (waterschapsbelasting). You elect water board representatives in special elections held alongside municipal or European elections. The expression "poldermodel" — the Dutch consensus-based decision-making style — comes directly from the historical need for communities to cooperate on water management.',
        ],
        phrases: [
          { dutch: 'het waterschap', english: 'the water board' },
          { dutch: 'de waterschapsbelasting', english: 'water board tax' },
          { dutch: 'het poldermodel', english: 'the polder model (consensus politics)' },
          { dutch: 'het waterbeheer', english: 'water management' },
          { dutch: 'het waterpeil', english: 'the water level' },
          { dutch: 'de waterzuivering', english: 'water treatment / purification' },
        ],
        tip: 'You\'ll see waterschapsbelasting on your annual tax bills. It\'s a real expense — typically \u20ac300\u2013\u20ac400 per year. Understanding what it pays for (flood protection!) makes it feel more reasonable.',
      },
    ],
  },
  'world-war-2-netherlands': {
    title: 'WWII & Liberation',
    icon: '🕊️',
    intro:
      'The Second World War left deep scars on the Netherlands. Five years of German occupation, the near-total destruction of the Dutch Jewish community, and the terrible Hongerwinter are events that still shape Dutch identity, remembrance culture, and values today.',
    sections: [
      {
        heading: 'The German Invasion (May 1940)',
        paragraphs: [
          'Germany invaded the Netherlands on May 10, 1940. The Dutch army, which had been neutral in World War I and hoped to remain so again, was overwhelmed within days. On May 14, the Luftwaffe bombed the center of Rotterdam, destroying the entire city center and killing around 900 people. The Netherlands surrendered the same day to prevent the bombing of other cities.',
          'Queen Wilhelmina and the government fled to London, where they led the Dutch government-in-exile. The Queen\'s radio speeches from London, broadcast by Radio Oranje, became a symbol of resistance and hope throughout the occupation.',
        ],
        phrases: [
          { dutch: 'de bezetting', english: 'the occupation' },
          { dutch: 'de invasie', english: 'the invasion' },
          { dutch: 'het bombardement op Rotterdam', english: 'the bombing of Rotterdam' },
          { dutch: 'de capitulatie', english: 'the capitulation / surrender' },
          { dutch: 'Koningin Wilhelmina', english: 'Queen Wilhelmina' },
          { dutch: 'Radio Oranje', english: 'Radio Orange (exile broadcasts)' },
        ],
      },
      {
        heading: 'Anne Frank and the Holocaust',
        paragraphs: [
          'Before the war, the Netherlands had a thriving Jewish community of about 140,000 people. The German occupation brought increasingly harsh anti-Jewish measures: registration, exclusion from public life, the wearing of the yellow star (Jodenster), and ultimately deportation to concentration and extermination camps.',
          'Anne Frank, a Jewish girl from Frankfurt who had fled to Amsterdam with her family, went into hiding in a secret annex (het Achterhuis) on the Prinsengracht in 1942. She kept a diary during the two years in hiding. The family was betrayed and arrested in August 1944. Anne died in Bergen-Belsen concentration camp in 1945, just weeks before liberation.',
          'Her diary, published by her father Otto Frank (the only family member to survive), became one of the most widely read books in history. The Anne Frank Huis on the Prinsengracht is one of the most visited museums in the Netherlands.',
          'Of the approximately 107,000 Dutch Jews deported during the war, only about 5,000 survived. The Netherlands had one of the highest percentages of Jewish victims in Western Europe — a painful reality that is openly acknowledged and discussed.',
        ],
        phrases: [
          { dutch: 'het Achterhuis', english: 'the Secret Annex (Anne Frank\'s hiding place)' },
          { dutch: 'het dagboek', english: 'the diary' },
          { dutch: 'de onderduiker', english: 'person in hiding (during WWII)' },
          { dutch: 'de Jodenvervolging', english: 'the persecution of Jews' },
          { dutch: 'het concentratiekamp', english: 'the concentration camp' },
          { dutch: 'de Anne Frank Huis', english: 'the Anne Frank House (museum)' },
        ],
        tip: 'Visiting the Anne Frank Huis is a deeply moving experience. Book tickets well in advance — they sell out weeks ahead. It\'s located on Prinsengracht 263 in Amsterdam.',
      },
      {
        heading: 'The Resistance (Het Verzet)',
        paragraphs: [
          'Many Dutch people resisted the occupation in various ways. The organized resistance (het verzet) sabotaged German operations, produced underground newspapers (verzetskranten), and helped people in hiding. An estimated 25,000\u201330,000 Jews and others were hidden by Dutch families — known as "onderduikers."',
          'The February Strike (Februaristaking) of 1941 was a remarkable event: workers in Amsterdam went on a general strike to protest the first Nazi raids against Jewish citizens. It was the only mass public protest against the persecution of Jews in occupied Europe. A statue of the "Dokwerker" (Dock Worker) in Amsterdam commemorates this event.',
          'The resistance came at enormous risk. Those caught hiding Jews or participating in resistance activities were executed or sent to concentration camps. The Verzetsmuseum (Resistance Museum) in Amsterdam tells these stories in detail.',
        ],
        phrases: [
          { dutch: 'het verzet', english: 'the resistance' },
          { dutch: 'de Februaristaking', english: 'the February Strike (1941)' },
          { dutch: 'de verzetsstrijder', english: 'the resistance fighter' },
          { dutch: 'de ondergrondse', english: 'the underground (resistance network)' },
          { dutch: 'het Verzetsmuseum', english: 'the Resistance Museum' },
          { dutch: 'de Dokwerker', english: 'the Dock Worker (memorial statue)' },
        ],
      },
      {
        heading: 'The Hongerwinter (1944\u20131945)',
        paragraphs: [
          'The winter of 1944\u20131945 was catastrophic. After the Allies liberated the south of the Netherlands, the German-occupied north suffered a devastating famine known as the Hongerwinter (Hunger Winter). The Germans blocked food transports as punishment for a Dutch railway strike that had supported the Allied advance.',
          'In the western Netherlands, over 4.5 million people faced starvation. People ate tulip bulbs, sugar beets, and anything they could find. An estimated 20,000 people died of hunger and cold. City dwellers made desperate "hongertochten" (hunger trips) to the countryside to find food.',
          'The Hongerwinter ended when Canadian and Allied forces liberated the rest of the Netherlands in May 1945. Swedish bread and Allied food drops (Operation Manna) brought relief. The experience left a lasting mark on Dutch society and is still remembered by older generations.',
        ],
        phrases: [
          { dutch: 'de Hongerwinter', english: 'the Hunger Winter (1944\u20131945)' },
          { dutch: 'de hongersnood', english: 'the famine' },
          { dutch: 'de hongertocht', english: 'the hunger trip (to find food)' },
          { dutch: 'de voedseldropping', english: 'the food drop (Allied relief)' },
          { dutch: 'de spoorwegstaking', english: 'the railway strike' },
          { dutch: 'de tulpenbollen', english: 'the tulip bulbs (eaten during famine)' },
        ],
      },
      {
        heading: 'Liberation and Remembrance',
        paragraphs: [
          'The Netherlands was liberated by Canadian, British, American, and Polish forces between September 1944 and May 1945. The south was freed first (Operation Market Garden), while the north had to wait until May 5, 1945. Canadian soldiers played a particularly important role, and the Dutch\u2013Canadian bond remains strong to this day.',
          'Every year on May 4, the entire country observes Dodenherdenking (Remembrance of the Dead). At 8:00 PM, two minutes of silence are observed nationwide. Traffic stops, trains halt, and everyone stands still. It\'s one of the most powerful national moments you\'ll experience in the Netherlands.',
          'May 5 is Bevrijdingsdag (Liberation Day), a day of celebration with festivals and concerts across the country. Every five years (2025, 2030, etc.) it\'s an official national holiday when everyone gets the day off.',
        ],
        phrases: [
          { dutch: 'de Bevrijdingsdag', english: 'Liberation Day (May 5)' },
          { dutch: 'Dodenherdenking', english: 'Remembrance of the Dead (May 4)' },
          { dutch: 'twee minuten stilte', english: 'two minutes of silence' },
          { dutch: 'de bevrijding', english: 'the liberation' },
          { dutch: 'de Dam', english: 'Dam Square (main memorial ceremony)' },
          { dutch: 'het Nationaal Monument', english: 'the National Monument (on Dam Square)' },
          { dutch: 'de bevrijdingsfestivals', english: 'the liberation festivals' },
        ],
        tip: 'On May 4 at 8:00 PM, observe the two minutes of silence wherever you are. It\'s deeply important to the Dutch, and not participating is considered very disrespectful. You\'ll notice the entire country falls silent — it\'s a deeply moving experience.',
      },
    ],
  },
};

const cultureTopicIds = Object.keys(cultureContent);

export function generateStaticParams() {
  return cultureTopicIds.map((tipId) => ({ tipId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tipId: string }>;
}): Promise<Metadata> {
  const { tipId } = await params;
  const tip = cultureContent[tipId];
  return {
    title: `${tip?.title || 'Culture'} | NederPro`,
    description: tip?.intro?.slice(0, 160) || 'Dutch culture tips',
  };
}

function PhraseTable({ phrases }: { phrases: PhraseItem[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-surface">
            <th className="text-left px-4 py-2.5 font-semibold text-primary border-b border-border">
              Dutch 🇳🇱
            </th>
            <th className="text-left px-4 py-2.5 font-semibold text-primary border-b border-border">
              English 🇬🇧
            </th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((phrase, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-background' : 'bg-surface/50'}
            >
              <td className="px-4 py-2.5 font-medium text-accent-hover border-b border-border">
                {phrase.dutch}
              </td>
              <td className="px-4 py-2.5 text-muted border-b border-border">
                {phrase.english}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DosDonts({
  doList,
  dontList,
}: {
  doList?: string[];
  dontList?: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 my-4">
      {doList && (
        <Card className="border-success/30 bg-success-light/20">
          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> Do
          </h4>
          <ul className="space-y-2">
            {doList.map((item, i) => (
              <li key={i} className="text-sm text-primary flex items-start gap-2">
                <span className="text-success mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      )}
      {dontList && (
        <Card className="border-error/30 bg-error-light/20">
          <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
            <span className="text-lg">❌</span> Don&apos;t
          </h4>
          <ul className="space-y-2">
            {dontList.map((item, i) => (
              <li key={i} className="text-sm text-primary flex items-start gap-2">
                <span className="text-error mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default async function CultureTipPage({
  params,
}: {
  params: Promise<{ tipId: string }>;
}) {
  const { tipId } = await params;
  const tip = cultureContent[tipId];

  if (!tip) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Culture Tips', href: '/culture' },
          { label: tip.title },
        ]}
      />

      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl">{tip.icon}</span>
        <h1 className="text-3xl font-bold text-primary">{tip.title}</h1>
      </div>
      <p className="text-muted leading-relaxed mb-10">{tip.intro}</p>

      {tip.sections.map((section, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-border">
            {section.heading}
          </h2>

          {section.paragraphs?.map((p, j) => (
            <p key={j} className="text-primary-light leading-relaxed mb-4">
              {p}
            </p>
          ))}

          {section.phrases && <PhraseTable phrases={section.phrases} />}

          {(section.doList || section.dontList) && (
            <DosDonts doList={section.doList} dontList={section.dontList} />
          )}

          {section.tip && (
            <Alert variant="tip">
              <span className="font-semibold">💡 Tip: </span>
              {section.tip}
            </Alert>
          )}
        </div>
      ))}
    </div>
  );
}
