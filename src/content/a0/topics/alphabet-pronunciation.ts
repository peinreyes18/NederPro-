import { Topic } from '@/content/types';

export const alphabetPronunciation: Topic = {
  id: 'alphabet-pronunciation',
  levelId: 'a0',
  title: 'The Dutch Alphabet and Pronunciation',
  subtitle: 'Het Nederlandse alfabet en uitspraak',
  order: 1,
  estimatedMinutes: 25,
  lesson: {
    sections: [
      {
        type: 'grammar-rule',
        title: 'The Dutch Alphabet',
        rule: 'Dutch uses the same 26 letters as English, but many letters are pronounced differently.',
        explanation:
          'The Dutch alphabet has 26 letters. While many look the same as English, the pronunciation is often very different. Mastering Dutch pronunciation early will help you be understood and understand others. Pay special attention to vowel sounds and the unique Dutch consonant combinations.',
      },
      {
        type: 'grammar-table',
        title: 'Vowel Sounds',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['a (short)', 'like "a" in "father" but shorter', 'kat', 'cat'],
          ['aa / a (long)', 'like "a" in "father"', 'maat', 'measure'],
          ['e (short)', 'like "e" in "bet"', 'bed', 'bed'],
          ['ee / e (long)', 'like "ay" in "say"', 'been', 'leg'],
          ['i (short)', 'like "i" in "sit"', 'dit', 'this'],
          ['ie', 'like "ee" in "see"', 'niet', 'not'],
          ['o (short)', 'like "o" in "pot"', 'bos', 'forest'],
          ['oo / o (long)', 'like "o" in "go"', 'boot', 'boat'],
          ['u (short)', 'like "u" in "put" (rounded)', 'bus', 'bus'],
          ['uu', 'like French "u" (no English equivalent)', 'uur', 'hour'],
          ['oe', 'like "oo" in "moon"', 'boek', 'book'],
          ['eu', 'like French "eu" (rounded lips)', 'neus', 'nose'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Dutch Diphthongs',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['ei / ij', 'like "ay" in "my" (identical sound)', 'trein / vrij', 'train / free'],
          ['ui', 'unique Dutch sound (rounded "ow")', 'huis', 'house'],
          ['ou / au', 'like "ow" in "how"', 'oud / blauw', 'old / blue'],
          ['aai', '"ah" + "ee"', 'draai', 'turn'],
          ['oei', '"oo" + "ee"', 'groei', 'growth'],
          ['ooi', '"oh" + "ee"', 'mooi', 'beautiful'],
        ],
      },
      {
        type: 'grammar-table',
        title: 'Consonant Sounds',
        headers: ['Dutch', 'Sound', 'Example', 'Meaning'],
        audioColumns: [2],
        rows: [
          ['g', 'guttural, back of throat (like clearing throat)', 'goed', 'good'],
          ['ch', 'same as Dutch "g"', 'nacht', 'night'],
          ['sch', '"s" + "ch" (guttural)', 'school', 'school'],
          ['r', 'rolled or guttural (varies by region)', 'rood', 'red'],
          ['v', 'softer than English "v", almost "f"', 'van', 'from'],
          ['w', 'between English "v" and "w"', 'wat', 'what'],
          ['j', 'like English "y" in "yes"', 'ja', 'yes'],
        ],
        caption: 'The Dutch "g" and "ch" are the most distinctive sounds for learners.',
      },
      {
        type: 'examples',
        title: 'Practice Words',
        examples: [
          { dutch: 'Goedemorgen', english: 'Good morning', highlight: ['Goe'], note: 'Notice the "g" sound at the start' },
          { dutch: 'Schiphol', english: 'Amsterdam airport', highlight: ['Sch'], note: 'Common word - practice the "sch" sound' },
          { dutch: 'Ik spreek een beetje Nederlands', english: 'I speak a little Dutch', highlight: ['spreek', 'beetje'] },
          { dutch: 'Hoe gaat het?', english: 'How are you?', highlight: ['Hoe', 'gaat'] },
        ],
      },
      {
        type: 'note',
        title: 'Pronunciation Tip',
        content:
          'Dutch spelling is quite regular once you know the rules. Unlike English, Dutch words are mostly pronounced as they are written. The key challenge is mastering the unique vowel and consonant sounds that do not exist in English.',
        variant: 'tip',
      },
    ],
  },
  exercises: [
    {
      id: 'a0-alpha-speak-1',
      type: 'speaking',
      instruction: 'Say each Dutch word out loud. Tap the microphone and speak clearly.',
      difficulty: 'controlled',
      content: {
        type: 'speaking',
        items: [
          // Basic responses
          { dutchText: 'ja', englishTranslation: 'yes', hint: 'sounds like English "ya"' },
          { dutchText: 'nee', englishTranslation: 'no', hint: 'long "ee" sound — like "nay"' },
          { dutchText: 'dag', englishTranslation: 'hello / bye', hint: 'short "a" — like "dakh" with a soft g' },
          { dutchText: 'goed', englishTranslation: 'good', hint: 'start with the guttural Dutch "g"' },
          // Short vowel words
          { dutchText: 'kat', englishTranslation: 'cat', hint: 'short "a" — similar to English "cat"' },
          { dutchText: 'bed', englishTranslation: 'bed', hint: 'short "e" — like English "bed"' },
          { dutchText: 'vis', englishTranslation: 'fish', hint: 'short "i" — like English "fish"' },
          // Long vowel / diphthong words
          { dutchText: 'boek', englishTranslation: 'book', hint: '"oe" sounds like "oo" in moon' },
          { dutchText: 'huis', englishTranslation: 'house', hint: '"ui" is a unique Dutch sound — rounded lips' },
          { dutchText: 'niet', englishTranslation: 'not', hint: '"ie" sounds like "ee" in "see"' },
          // Numbers
          { dutchText: 'een', englishTranslation: 'one', hint: 'long "ee" — like "ayn"' },
          { dutchText: 'twee', englishTranslation: 'two', hint: 'long "ee" — "tvay"' },
          { dutchText: 'drie', englishTranslation: 'three', hint: '"ie" = "ee" — "dree"' },
        ],
      },
    },
    {
      id: 'a0-alpha-speak-2',
      type: 'speaking',
      instruction: 'Practice these Dutch words with tricky vowel sounds. Take your time.',
      difficulty: 'guided',
      content: {
        type: 'speaking',
        items: [
          // eu sound
          { dutchText: 'neus', englishTranslation: 'nose', hint: '"eu" — round your lips as if to say "oo" but say "ee"' },
          { dutchText: 'deur', englishTranslation: 'door', hint: '"eu" — same sound as in "neus"' },
          { dutchText: 'leuk', englishTranslation: 'nice / fun', hint: '"eu" + "k" — very common Dutch word' },
          { dutchText: 'keuken', englishTranslation: 'kitchen', hint: '"eu" twice — "kuh-ken"' },
          { dutchText: 'negen', englishTranslation: 'nine', hint: '"eu"-like sound — "nay-khen" with guttural g' },
          // ij / ei sound
          { dutchText: 'vrij', englishTranslation: 'free', hint: '"ij" sounds like "ay" in "my" — "fray"' },
          { dutchText: 'tijd', englishTranslation: 'time', hint: '"ij" = "ay" in "my" — "tayd"' },
          { dutchText: 'wijn', englishTranslation: 'wine', hint: '"ij" diphthong — "vayn"' },
          { dutchText: 'rijst', englishTranslation: 'rice', hint: '"ij" = "ay" — "rayst"' },
          { dutchText: 'lijf', englishTranslation: 'body', hint: '"ij" + soft "f" — "layf"' },
          { dutchText: 'klein', englishTranslation: 'small', hint: '"ei" = "ay" in "my" — "klayn"' },
          // au / ou sound
          { dutchText: 'blauw', englishTranslation: 'blue', hint: '"au" sounds like "ow" in "how"' },
          { dutchText: 'koud', englishTranslation: 'cold', hint: '"ou" sounds like "ow" in "how"' },
          { dutchText: 'oud', englishTranslation: 'old', hint: '"ou" sounds like "ow" in "how"' },
          { dutchText: 'goud', englishTranslation: 'gold', hint: '"ou" = "ow" in how — "khowt"' },
          { dutchText: 'mouw', englishTranslation: 'sleeve', hint: '"ou" + "w" — "mow"' },
          // sch / ch / g sounds
          { dutchText: 'school', englishTranslation: 'school', hint: '"sch" = "s" + guttural "ch"' },
          { dutchText: 'schoen', englishTranslation: 'shoe', hint: '"sch" + "oe" = "oo" — "skhoon"' },
          { dutchText: 'groen', englishTranslation: 'green', hint: 'guttural "g" + "oe" = "oo" — "khroon"' },
          { dutchText: 'gracht', englishTranslation: 'canal', hint: 'guttural "g" + "ach" — "khrakht"' },
          // ooi / aai / oei diphthongs
          { dutchText: 'mooi', englishTranslation: 'beautiful', hint: '"oo" + "ee" blended — "moy"' },
          { dutchText: 'gooi', englishTranslation: 'throw', hint: '"oo" + "ee" — "khoy"' },
          { dutchText: 'draai', englishTranslation: 'turn', hint: '"aa" + "ee" — "dray"' },
          // Long vowel words
          { dutchText: 'maan', englishTranslation: 'moon', hint: 'long "aa" sound — hold it a little longer' },
          { dutchText: 'hoog', englishTranslation: 'high / tall', hint: 'long "oo" + guttural "g" at the end' },
          { dutchText: 'nieuw', englishTranslation: 'new', hint: '"ie" + "uw" — "neew"' },
          { dutchText: 'zwart', englishTranslation: 'black', hint: '"zw" — Dutch "z" + soft "w"' },
          { dutchText: 'bruin', englishTranslation: 'brown', hint: '"ui" diphthong — "browne"' },
          { dutchText: 'trein', englishTranslation: 'train', hint: '"ei" sounds like "ay" in "my"', acceptableAnswers: ['trien', 'train'] },
          { dutchText: 'vliegtuig', englishTranslation: 'airplane', hint: '"vlieg" + "tuig" — "flee-khtoykh"' },
          { dutchText: 'goedemorgen', englishTranslation: 'good morning', hint: 'guttural "g" at the start — "khoo-deh-MOR-khen"' },
          { dutchText: 'goedemiddag', englishTranslation: 'good afternoon', hint: '"khoo-deh-MID-dakh" — guttural g twice' },
        ],
      },
    },
    {
      id: 'a0-alpha-speak-3',
      type: 'speaking',
      instruction: 'Try these useful everyday Dutch phrases. Speak slowly and clearly.',
      difficulty: 'open',
      content: {
        type: 'speaking',
        items: [
          // Greetings & basics
          { dutchText: 'dankjewel', englishTranslation: 'thank you', hint: '"dank-yuh-vel" — j sounds like English "y"' },
          { dutchText: 'dank u wel', englishTranslation: 'thank you (formal)', hint: '"dank oo vel" — formal version', acceptableAnswers: ['dank u wel', 'dankuwel'] },
          { dutchText: 'alsjeblieft', englishTranslation: 'please / here you go', hint: '"als-yuh-bleeft" — very common Dutch word' },
          { dutchText: 'goedenavond', englishTranslation: 'good evening', hint: '"khoo-den-AH-font" — guttural "g"' },
          { dutchText: 'goedenacht', englishTranslation: 'good night', hint: '"khoo-den-akht" — guttural "g" + "ch"' },
          { dutchText: 'welkom', englishTranslation: 'welcome', hint: '"vel-kom" — Dutch "w" is soft' },
          { dutchText: 'sorry', englishTranslation: 'sorry', hint: 'same as English — short "o"' },
          { dutchText: 'geen probleem', englishTranslation: 'no problem', hint: '"khayn proh-blaym" — guttural "g"', acceptableAnswers: ['geen probleem'] },
          // Questions
          { dutchText: 'hoe gaat het', englishTranslation: 'how are you', hint: '"hoo khat het" — guttural "g" in gaat', acceptableAnswers: ['hoe gaat het?', 'hoe gaat het'] },
          { dutchText: 'hoe heet je', englishTranslation: 'what is your name', hint: '"hoo hayt yuh" — j = "y"', acceptableAnswers: ['hoe heet je?', 'hoe heet je'] },
          { dutchText: 'waar kom je vandaan', englishTranslation: 'where are you from', hint: '"vaar kom yuh fan-daan"', acceptableAnswers: ['waar kom je vandaan?', 'waar kom je vandaan'] },
          { dutchText: 'spreek je Engels', englishTranslation: 'do you speak English', hint: '"sprayk yuh ENG-els" — j = "y"', acceptableAnswers: ['spreek je Engels?', 'spreek je Engels'] },
          { dutchText: 'hoeveel kost dit', englishTranslation: 'how much does this cost', hint: '"hoo-feel kost dit" — "oe" = "oo"', acceptableAnswers: ['hoeveel kost dit?', 'hoeveel kost dit'] },
          { dutchText: 'waar is het station', englishTranslation: 'where is the station', hint: '"vaar is het sta-SHON" — Dutch "w" like "v"', acceptableAnswers: ['waar is het station?', 'waar is het station'] },
          { dutchText: 'heeft u een moment', englishTranslation: 'do you have a moment', hint: '"hayft oo uhn moh-ment"', acceptableAnswers: ['heeft u een moment?', 'heeft u een moment'] },
          // Sentences
          { dutchText: 'tot ziens', englishTranslation: 'goodbye', hint: '"tot zeens" — "ie" sounds like "ee"' },
          { dutchText: 'ik heet', englishTranslation: 'my name is', hint: '"ik hayt" — "ee" is a long vowel', acceptableAnswers: ['ik heet'] },
          { dutchText: 'ik begrijp het niet', englishTranslation: 'I do not understand', hint: '"ik beh-khrayp het neet" — guttural "g"', acceptableAnswers: ['ik begrijp het niet'] },
          { dutchText: 'ik woon in Nederland', englishTranslation: 'I live in the Netherlands', hint: '"ik vohn in NAY-der-lant"', acceptableAnswers: ['ik woon in nederland', 'ik woon in Nederland'] },
          { dutchText: 'ik spreek een beetje Nederlands', englishTranslation: 'I speak a little Dutch', hint: '"ik sprayk uhn bayt-yuh NAY-der-lants"', acceptableAnswers: ['ik spreek een beetje Nederlands', 'ik spreek een beetje nederlands'] },
          // Unique Dutch
          { dutchText: 'gezellig', englishTranslation: 'cosy / fun atmosphere', hint: '"kheh-ZEL-ikh" — uniquely Dutch concept' },
          { dutchText: 'uitspraak', englishTranslation: 'pronunciation', hint: '"ui" diphthong + "spraak" — "owt-sprahk"' },
        ],
      },
    },
    {
      id: 'a0-alpha-speak-4',
      type: 'speaking',
      instruction: 'Challenge round — longer words and harder sounds. Take a deep breath and try!',
      difficulty: 'open',
      content: {
        type: 'speaking',
        items: [
          // Places
          { dutchText: 'gemeentehuis', englishTranslation: 'town hall', hint: '"kheh-MAYN-teh-howce" — "ui" diphthong at the end' },
          { dutchText: 'ziekenhuis', englishTranslation: 'hospital', hint: '"zee-ken-howce" — "ie" + "ui"' },
          { dutchText: 'bibliotheek', englishTranslation: 'library', hint: '"bib-lee-oh-tayk" — long "ee" at the end' },
          { dutchText: 'apotheek', englishTranslation: 'pharmacy', hint: '"ah-poh-tayk" — long "ee"' },
          { dutchText: 'supermarkt', englishTranslation: 'supermarket', hint: '"soo-per-markt" — close to English' },
          { dutchText: 'politiebureau', englishTranslation: 'police station', hint: '"poh-LEET-see-boo-roh"' },
          // Transport & documents
          { dutchText: 'fiets', englishTranslation: 'bicycle', hint: '"feets" — "ie" = "ee"' },
          { dutchText: 'rijbewijs', englishTranslation: 'driving licence', hint: '"ray-beh-vays" — "ij" twice + soft "w"' },
          { dutchText: 'spoorwegen', englishTranslation: 'railways', hint: '"spoor-vay-khen" — "oo" + soft "w" + guttural "g"' },
          { dutchText: 'vliegtuig', englishTranslation: 'airplane', hint: '"fleekh-toykh" — guttural g in both halves' },
          // Work & daily life
          { dutchText: 'werkgever', englishTranslation: 'employer', hint: '"verk-khay-ver" — guttural "g" in the middle' },
          { dutchText: 'verzekering', englishTranslation: 'insurance', hint: '"fer-zay-ker-ing"' },
          { dutchText: 'belastingdienst', englishTranslation: 'tax authority', hint: '"beh-last-ing-deenst"' },
          { dutchText: 'inburgering', englishTranslation: 'civic integration', hint: '"in-bur-kheh-ring" — guttural "g"' },
          // Food & culture
          { dutchText: 'stroopwafel', englishTranslation: 'stroopwafel (Dutch waffle)', hint: '"strohp-vah-fel" — Dutch "w" is soft like "v"' },
          { dutchText: 'schilderij', englishTranslation: 'painting', hint: '"schil-deh-ray" — "sch" + "ij" diphthong' },
          { dutchText: 'ondertiteling', englishTranslation: 'subtitles', hint: '"on-der-tee-teh-ling"' },
          { dutchText: 'mijnheer', englishTranslation: 'mister / sir', hint: '"mayn-hayr" — "ij" = "ay" in "my"' },
          { dutchText: 'mevrouw', englishTranslation: 'mrs / madam', hint: '"meh-frow" — "ou" = "ow" in how' },
          { dutchText: 'verontschuldiging', englishTranslation: 'apology / excuse me', hint: '"feh-ront-skhul-dih-khing" — very long word!', acceptableAnswers: ['verontschuldiging'] },
        ],
      },
    },
  ],
};
