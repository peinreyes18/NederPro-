export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number; // minutes
  tags: string[];
  content: string; // markdown-like HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'learn-dutch-online',
    title: 'The Best Way to Learn Dutch Online in 2025',
    description: 'A practical guide to learning Dutch online — what works, what doesn\'t, and how to reach conversational Dutch faster than most language learners.',
    publishedAt: '2025-11-15',
    readingTime: 8,
    tags: ['Dutch learning', 'language learning', 'online Dutch'],
    content: `
<h2>Why most Dutch learners quit — and how to avoid it</h2>
<p>Dutch is ranked as one of the easiest languages for English speakers to learn by the Foreign Service Institute. Yet most people who try to learn Dutch online give up within three months. The reason isn't difficulty — it's method.</p>
<p>Apps like Duolingo make language learning feel like a game, but they leave you unable to hold a real conversation. You can recognise cartoon animals in Dutch but stumble when your Dutch colleague asks where you're going for lunch.</p>
<p>The learners who succeed have one thing in common: <strong>they treat grammar seriously from day one.</strong></p>

<h2>The Dutch learning roadmap that actually works</h2>
<p>Here's what a structured approach to Dutch looks like across the CEFR framework:</p>
<ul>
  <li><strong>A0 (Starter):</strong> Pronunciation, numbers, greetings, basic phrases. Goal: sound Dutch, not English.</li>
  <li><strong>A1 (Breakthrough):</strong> Present tense verbs, articles (de/het), word order, negation. This is where the grammar foundation is laid.</li>
  <li><strong>A2 (Waystage):</strong> Perfect tense, separable verbs, modal verbs, subordinate clauses. This is the level required for the Inburgeringsexamen.</li>
  <li><strong>B1 (Threshold):</strong> Passive voice, relative clauses, conditionals. Required for the Staatsexamen NT2 Programma I.</li>
  <li><strong>B2 (Vantage):</strong> Complex word order, formal writing, advanced grammar. Needed for university admission and professional roles.</li>
</ul>

<h2>The de/het problem (and why it matters more than you think)</h2>
<p>Dutch has two grammatical genders: <em>de</em> (common gender) and <em>het</em> (neuter). There are no hard rules — you have to learn each noun's article. This is one of the first hurdles that trips up learners.</p>
<p>The good news: <em>het</em> words make up only about 20% of Dutch nouns. If in doubt, use <em>de</em> — you'll be right four times out of five.</p>
<p>The better news: patterns exist. All diminutives (words ending in <em>-je</em>) use <em>het</em>. Compound words take the article of their last component. Verbs used as nouns use <em>het</em>.</p>

<h2>What to study each day</h2>
<p>Consistency beats intensity. Thirty minutes a day, five days a week, beats a weekend marathon followed by two weeks of nothing. A simple daily rhythm:</p>
<ol>
  <li>10 minutes: vocabulary review (spaced repetition)</li>
  <li>15 minutes: one grammar topic — study the rule, do the exercises</li>
  <li>5 minutes: read or listen to something in Dutch</li>
</ol>
<p>At this pace, you can reach A2 in four to six months and B1 in twelve to eighteen months — without burning out.</p>

<h2>The best free Dutch resources</h2>
<ul>
  <li><strong>NederPro</strong> — structured CEFR grammar lessons with exercises and exam practice</li>
  <li><strong>Radio Nederland Wereldomroep archives</strong> — authentic Dutch audio</li>
  <li><strong>Npo.nl</strong> — Dutch TV with subtitles, great for B1+ learners</li>
  <li><strong>Forvo</strong> — hear native speakers pronounce individual words</li>
</ul>

<h2>When you're ready for the exam</h2>
<p>If you're living in the Netherlands, you'll likely need the <a href="/inburgeringsexamen">Inburgeringsexamen</a> (A2 level) or the <a href="/staatsexamen-nt2">Staatsexamen NT2</a> (B1 or B2 level). Both have a specific format you need to practise — reading comprehension, writing tasks, listening, and speaking.</p>
<p>The best exam preparation combines grammar study with timed practice tests. NederPro's exam section includes 34 mock exam sets aligned with the official format.</p>
    `.trim(),
  },
  {
    slug: 'inburgeringsexamen-practice',
    title: 'How to Prepare for the Inburgeringsexamen: Complete 2025 Guide',
    description: 'Everything you need to know about the Dutch civic integration exam — what it tests, how it\'s structured, and the most effective way to prepare for it.',
    publishedAt: '2025-12-01',
    readingTime: 10,
    tags: ['Inburgeringsexamen', 'integration exam', 'Dutch exam'],
    content: `
<h2>What is the Inburgeringsexamen?</h2>
<p>The <strong>Inburgeringsexamen</strong> (civic integration exam) is a Dutch government exam that most non-EU immigrants must pass to receive a permanent residence permit in the Netherlands. It was reformed significantly in 2022 with the introduction of the <em>Wet inburgering 2021</em>.</p>
<p>The exam tests Dutch language proficiency at <strong>A2 level</strong> (CEFR) across four skills, plus knowledge of Dutch society.</p>

<h2>The five components of the Inburgeringsexamen</h2>
<h3>1. Lezen (Reading) — A2</h3>
<p>You read short texts — forms, signs, emails, advertisements — and answer multiple-choice questions. Texts are taken from everyday Dutch life: a letter from your gemeente, a notice at work, a leaflet from a doctor's office.</p>

<h3>2. Luisteren (Listening) — A2</h3>
<p>You listen to short audio fragments and answer questions. Conversations are realistic: a phone message, a radio announcement, a conversation at the supermarket.</p>

<h3>3. Schrijven (Writing) — A2</h3>
<p>You write short texts in Dutch: a simple email, a response to a message, a short form. You are assessed on task completion and basic grammar, not perfect spelling.</p>

<h3>4. Spreken (Speaking) — A2</h3>
<p>You speak into a microphone answering questions and responding to situations. This is done on a computer, not with a live examiner.</p>

<h3>5. KNM — Kennis van de Nederlandse Maatschappij</h3>
<p>The KNM tests your knowledge of Dutch society: the healthcare system, the education system, work and benefits, housing, and Dutch values. The questions are in Dutch, but the knowledge they test is factual, not linguistic.</p>

<h2>How difficult is the exam?</h2>
<p>A2 Dutch is genuinely achievable. It means you can handle simple, predictable situations in Dutch — not hold complex conversations. The exam assesses whether you have the language skills to function in daily Dutch life, not whether you speak perfect Dutch.</p>
<p>Most full-time students reach A2 in six to nine months. Part-time learners (a few hours per week) typically need twelve to eighteen months.</p>

<h2>The most common mistakes in preparation</h2>
<ol>
  <li><strong>Only studying vocabulary, not grammar.</strong> The writing and speaking components require correct sentence structure. Knowing 2,000 words doesn't help if you can't put them in the right order.</li>
  <li><strong>Not practising under exam conditions.</strong> The listening and reading sections are timed. Practising with real time pressure is essential.</li>
  <li><strong>Ignoring the KNM.</strong> Many learners focus on language but underestimate the society knowledge component. It covers a lot of material.</li>
  <li><strong>Speaking only their own language at home.</strong> Even 15 minutes of Dutch conversation per day makes a measurable difference to spoken fluency.</li>
</ol>

<h2>A 12-week preparation plan</h2>
<p><strong>Weeks 1–4: Grammar foundation</strong><br />Complete A1 grammar (present tense, articles, word order, negation, pronouns). Do 20 minutes of vocabulary daily.</p>
<p><strong>Weeks 5–8: A2 grammar and KNM</strong><br />Perfect tense, modal verbs, separable verbs, subordinate clauses. Study one KNM topic per week (healthcare, education, housing, work, society).</p>
<p><strong>Weeks 9–12: Exam practice</strong><br />Timed reading tests, listening practice, writing tasks with feedback, speaking exercises. Review weak areas from grammar.</p>

<h2>Practice resources</h2>
<p>NederPro includes <a href="/exams">dedicated Inburgeringsexamen practice sets</a> for all four language components, plus KNM mock exams with authentic question formats. The grammar lessons cover everything you need from A0 through A2.</p>
    `.trim(),
  },
  {
    slug: 'dutch-grammar-beginners',
    title: 'Dutch Grammar for Beginners: The Essential Guide (A0–A1)',
    description: 'A clear, no-nonsense guide to Dutch grammar for absolute beginners. Understand word order, verb conjugation, articles, and negation — the four pillars of Dutch sentences.',
    publishedAt: '2026-01-10',
    readingTime: 9,
    tags: ['Dutch grammar', 'beginners', 'A1 Dutch', 'Dutch for beginners'],
    content: `
<h2>What makes Dutch grammar different from English</h2>
<p>Dutch and English share the same Germanic roots, which makes Dutch more accessible to English speakers than most European languages. But there are key differences that trip up beginners:</p>
<ul>
  <li><strong>Word order in subordinate clauses</strong> — the verb goes to the end</li>
  <li><strong>Two definite articles</strong> — <em>de</em> and <em>het</em> (like German der/die/das, but simpler)</li>
  <li><strong>Verb conjugation</strong> — similar to English but with a few extra patterns</li>
  <li><strong>Compound words</strong> — Dutch stacks nouns into very long words</li>
</ul>
<p>None of these are difficult once you understand the patterns. Let's go through each one.</p>

<h2>1. Dutch word order: the V2 rule</h2>
<p>In Dutch main clauses, the verb always comes in <strong>second position</strong>. This is called the V2 rule.</p>
<p>In English: <em>I go to work every day.</em><br />In Dutch: <em>Ik ga elke dag naar mijn werk.</em> (verb <em>ga</em> is second)</p>
<p>When you move something to the front of a Dutch sentence (for emphasis), the subject and verb swap positions:</p>
<p><em>Elke dag ga ik naar mijn werk.</em> (Every day I go to work.)</p>
<p>This inversion rule catches beginners constantly. Memorise it early.</p>

<h2>2. De and het: Dutch articles</h2>
<p>Dutch has two definite articles: <em>de</em> (used with about 80% of nouns) and <em>het</em> (used with about 20%). The indefinite article is always <em>een</em> for both genders.</p>
<p>You cannot reliably predict whether a noun takes <em>de</em> or <em>het</em>, so you need to learn them with each new word. However, some patterns help:</p>
<ul>
  <li>All diminutives (<em>-je</em> endings) → <strong>het</strong>: <em>het boekje, het meisje</em></li>
  <li>All verbs used as nouns → <strong>het</strong>: <em>het eten, het rijden</em></li>
  <li>Most two-syllable words with <em>be-, ge-, ver-, ont-</em> prefixes → <strong>het</strong></li>
  <li>People and animals (mostly) → <strong>de</strong></li>
  <li>All plurals → always <strong>de</strong></li>
</ul>

<h2>3. Present tense verb conjugation</h2>
<p>Dutch verb conjugation is more regular than English. Start with the infinitive (the dictionary form, ending in <em>-en</em>): <em>werken</em> (to work).</p>
<p>The stem is the infinitive minus <em>-en</em>: <em>werk</em>.</p>
<table>
  <tr><td>ik werk</td><td>I work</td></tr>
  <tr><td>jij werkt</td><td>you work</td></tr>
  <tr><td>hij/zij werkt</td><td>he/she works</td></tr>
  <tr><td>wij werken</td><td>we work</td></tr>
  <tr><td>jullie werken</td><td>you (plural) work</td></tr>
  <tr><td>zij werken</td><td>they work</td></tr>
</table>
<p>Note: when <em>jij</em> comes after the verb (inversion), the <em>-t</em> drops: <em>Werk jij hier?</em> (Do you work here?)</p>

<h2>4. Negation: niet vs. geen</h2>
<p>Dutch uses two words for negation: <em>niet</em> (not) and <em>geen</em> (no/not a/not any).</p>
<p><strong>Geen</strong> negates nouns with indefinite articles or no article:</p>
<p><em>Ik heb een auto.</em> → <em>Ik heb geen auto.</em> (I don't have a car.)</p>
<p><strong>Niet</strong> negates everything else — verbs, adjectives, adverbs, and definite noun phrases:</p>
<p><em>Ik werk niet.</em> (I don't work.)<br /><em>Het is niet goed.</em> (It is not good.)</p>
<p>When <em>niet</em> negates the whole predicate, it goes to the end of the clause:</p>
<p><em>Ik ga vandaag niet naar kantoor.</em> (I'm not going to the office today.)</p>

<h2>5. Essential A0–A1 vocabulary</h2>
<p>Grammar rules are useless without words to use them with. Focus your early vocabulary on:</p>
<ul>
  <li><strong>Numbers 1–100</strong> — for prices, addresses, phone numbers</li>
  <li><strong>Days and months</strong> — for appointments and dates</li>
  <li><strong>Question words</strong> — wie, wat, waar, wanneer, hoe, waarom</li>
  <li><strong>Common verbs</strong> — zijn (to be), hebben (to have), gaan (to go), maken (to make), werken (to work), wonen (to live)</li>
  <li><strong>Greetings and politeness</strong> — hallo, goedemorgen, alsjeblieft, dankuwel, tot ziens</li>
</ul>

<h2>Your next step</h2>
<p>The grammar topics above are covered in detail in NederPro's <a href="/levels/a0">A0</a> and <a href="/levels/a1">A1 grammar levels</a>, each with exercises to practise what you've learned. Start with pronunciation (critical for Dutch — the <em>g</em> sound has no equivalent in English) and work through each topic in order.</p>
    `.trim(),
  },
  {
    slug: 'staatsexamen-nt2-guide',
    title: 'Staatsexamen NT2: How to Pass Programma I (B1) and Programma II (B2)',
    description: 'A complete preparation guide for the Dutch Staatsexamen NT2 — what the exam tests, how it differs from the Inburgeringsexamen, and how to prepare for B1 and B2 level Dutch.',
    publishedAt: '2026-02-05',
    readingTime: 9,
    tags: ['Staatsexamen NT2', 'B1 Dutch', 'B2 Dutch', 'NT2 exam'],
    content: `
<h2>What is the Staatsexamen NT2?</h2>
<p>The <strong>Staatsexamen NT2</strong> (State Exam Dutch as a Second Language) is the highest official Dutch language certification available to non-native speakers. It exists in two levels:</p>
<ul>
  <li><strong>Programma I</strong> — B1 level (CEFR). Required for MBO-level education and many professional registrations.</li>
  <li><strong>Programma II</strong> — B2 level (CEFR). Required for HBO/WO university admission and professional roles in healthcare, law, and education.</li>
</ul>
<p>Unlike the Inburgeringsexamen, the Staatsexamen NT2 is not required by law — but it is often required by institutions. Many Dutch universities, the BIG-register (healthcare professionals), and the Dutch Bar Association require Programma II.</p>

<h2>How the Staatsexamen differs from the Inburgeringsexamen</h2>
<p>The Inburgeringsexamen tests A2 Dutch — basic functional language. The Staatsexamen NT2 tests intermediate to advanced Dutch used in academic and professional contexts.</p>
<p>Key differences:</p>
<ul>
  <li>No KNM (knowledge of society) component in the Staatsexamen</li>
  <li>Texts are longer, more complex, and often from professional or academic domains</li>
  <li>The writing tasks require structured argumentation, not just simple messages</li>
  <li>Vocabulary range is much wider — B2 requires 6,000–8,000 word families</li>
</ul>

<h2>The four components of the Staatsexamen NT2</h2>
<h3>Leesvaardigheid (Reading)</h3>
<p>You read texts of 300–800 words — newspaper articles, academic texts, professional correspondence — and answer multiple-choice and open questions. Time pressure is significant: Programma II gives you 100 minutes for complex texts.</p>

<h3>Luistervaardigheid (Listening)</h3>
<p>Audio fragments from radio programmes, lectures, interviews, and meetings. At B2 level, speakers use natural speed and colloquial language. Note-taking is allowed and recommended.</p>

<h3>Schrijfvaardigheid (Writing)</h3>
<p>You write 150–300 words on a given topic — a formal letter, a report, a response to a text you've read. The marking criteria include task completion, coherence, grammar, and register (formal/informal).</p>
<p>At B2, you are expected to argue a position, use connective language (however, although, therefore), and vary your sentence structure.</p>

<h3>Spreekvaardigheid (Speaking)</h3>
<p>You have a conversation with an examiner (not a computer, unlike the Inburgeringsexamen). You discuss topics, respond to situations, and may give a short presentation. At B2, you need fluent, near-spontaneous speech with minimal pausing.</p>

<h2>The grammar you need for B1</h2>
<p>B1 Dutch requires solid command of:</p>
<ul>
  <li>Passive voice (<em>worden</em> and <em>zijn</em> + past participle)</li>
  <li>Relative clauses (<em>die/dat</em> and <em>waar-</em> words)</li>
  <li>Infinitive constructions (<em>om te</em>, <em>te</em> + infinitive)</li>
  <li>Conditional sentences (<em>als...dan</em>, <em>zou...als</em>)</li>
  <li>Reported speech (verb of saying + subordinate clause)</li>
  <li>Conjunctions and connectors for text cohesion</li>
</ul>

<h2>The grammar you need for B2</h2>
<p>B2 adds complexity and nuance:</p>
<ul>
  <li>Complex word order (multiple clauses, verb clusters)</li>
  <li>Nominalization (turning verbs and adjectives into nouns for formal writing)</li>
  <li>Advanced modal verbs and their nuance (<em>zou</em>, <em>zal</em>, <em>moet</em>, <em>mag</em>)</li>
  <li>Register and style — knowing when to write <em>u</em> vs <em>jij</em>, <em>thans</em> vs <em>nu</em></li>
  <li>Cohesion devices: discourse markers, ellipsis, pronoun reference</li>
</ul>

<h2>How long does it take to prepare?</h2>
<p>From A2 to B1: approximately 300–400 guided learning hours. From A2 to B2: 500–600 hours.</p>
<p>This translates to:</p>
<ul>
  <li>B1: 12–18 months studying 1–2 hours per day</li>
  <li>B2: 18–24 months at the same pace</li>
</ul>
<p>Intensive full-time preparation (NT2 courses) can compress B1 to 6 months and B2 to 9–12 months.</p>

<h2>Practice resources</h2>
<p>NederPro's <a href="/levels/b1">B1 level</a> and <a href="/levels/b2">B2 level</a> grammar lessons cover every grammar topic you need for the Staatsexamen NT2. The <a href="/exams">exam practice section</a> includes dedicated NT2 Programma I and Programma II mock sets for reading, writing, and listening.</p>
<p>For the speaking component, practise with native speakers via language exchange (Tandem, HelloTalk) or Dutch conversation groups — this is the one component that needs live practice.</p>
    `.trim(),
  },
  {
    slug: 'how-long-to-learn-dutch',
    title: 'How Long Does It Take to Learn Dutch? A Realistic Timeline',
    description: 'Find out exactly how long it takes to reach A2, B1, and B2 in Dutch — based on CEFR research, study hours, and what actually makes learners progress faster.',
    publishedAt: '2026-02-20',
    readingTime: 7,
    tags: ['Dutch learning', 'language learning', 'CEFR', 'Dutch timeline'],
    content: `
<h2>The short answer: Dutch takes 600–750 hours to reach B2</h2>
<p>According to the Foreign Service Institute (FSI), Dutch is a Category I language — meaning it takes an English speaker approximately <strong>600–750 class hours</strong> to reach professional working proficiency (roughly B2 level). That makes it one of the fastest major European languages to learn.</p>
<p>In practice, however, FSI estimates are for intensive, supervised instruction. Self-study takes longer. Here's a more realistic breakdown for adult learners studying independently.</p>

<h2>Time to reach each CEFR level</h2>
<h3>A1 — Breakthrough (approx. 80–120 hours)</h3>
<p>At A1 you can introduce yourself, handle very simple exchanges, and read basic notices and signs. This takes most adult self-studiers <strong>2–4 months</strong> at 1 hour per day.</p>
<p>What you'll have mastered: present tense, de/het articles, basic word order, numbers, personal pronouns, common greetings and expressions.</p>

<h3>A2 — Waystage (approx. 200–300 hours total)</h3>
<p>A2 is the level required for the Dutch Inburgeringsexamen. You can handle familiar everyday situations — shopping, travelling, simple work conversations. Self-studiers typically reach A2 in <strong>6–12 months</strong>.</p>
<p>What you'll add: perfect tense, modal verbs, separable verbs, subordinate clauses, comparative adjectives.</p>

<h3>B1 — Threshold (approx. 400–500 hours total)</h3>
<p>B1 is required for the Staatsexamen NT2 Programma I and for many MBO-level qualifications. You can follow the main points of clear standard Dutch on familiar subjects. <strong>12–18 months</strong> is a typical timeline for dedicated self-studiers.</p>
<p>What you'll add: passive voice, relative clauses, conditional sentences, infinitive constructions, formal register.</p>

<h3>B2 — Vantage (approx. 600–750 hours total)</h3>
<p>B2 is required for university admission and the Staatsexamen NT2 Programma II. You can understand complex texts and interact fluently with native speakers. From A0, most self-studiers reach B2 in <strong>24–36 months</strong>.</p>

<h2>What makes you progress faster</h2>
<p>These factors can cut your timeline by 30–50%:</p>
<ul>
  <li><strong>Consistency over intensity.</strong> 30 minutes every day beats 4-hour weekend sessions. Your brain consolidates language during sleep — daily exposure is more effective than irregular cramming.</li>
  <li><strong>Active production, not just passive consumption.</strong> Reading and listening build recognition. Writing and speaking build production. Exam success and real communication require both.</li>
  <li><strong>Structured grammar from the start.</strong> Apps that delay grammar in favour of gamification leave learners unable to form original sentences. Learning grammar explicitly accelerates every other skill.</li>
  <li><strong>Spaced repetition for vocabulary.</strong> Using a spaced repetition system (SRS) means you review vocabulary at exactly the moment you're about to forget it — making each review count far more.</li>
  <li><strong>Using Dutch daily outside lessons.</strong> Change your phone language, watch Dutch TV with Dutch subtitles, read a Dutch news site. Immersion outside class doubles your input hours with no extra study time.</li>
</ul>

<h2>A realistic weekly study plan</h2>
<p>If you're targeting A2 in 9 months (the Inburgeringsexamen timeline):</p>
<ul>
  <li><strong>Monday–Friday:</strong> 30 minutes — one grammar topic + 10 vocabulary flashcards</li>
  <li><strong>Saturday:</strong> 60 minutes — review weak topics + one exercise set</li>
  <li><strong>Sunday:</strong> 30 minutes — listen to Dutch audio, read a short Dutch text</li>
</ul>
<p>That's roughly 3.5 hours per week, or ~150 hours in 9 months — achievable for A2.</p>

<h2>The biggest time-waster: switching methods</h2>
<p>The single biggest reason Dutch learners take longer than necessary is constantly switching between apps, courses, and methods. Every switch costs you time as you restart from the beginning of a new system's curriculum. Pick a structured path and follow it from A0 to your target level.</p>
<p>NederPro is built around a single linear path: <a href="/levels/a0">A0</a> → <a href="/levels/a1">A1</a> → <a href="/levels/a2">A2</a> → <a href="/levels/b1">B1</a> → <a href="/levels/b2">B2</a>. Each level builds on the last. Every grammar topic has exercises, and the exam practice section prepares you specifically for the Inburgeringsexamen or Staatsexamen NT2.</p>
    `.trim(),
  },
  {
    slug: 'dutch-vocabulary-beginners',
    title: 'Dutch Vocabulary for Beginners: The 500 Words You Need First',
    description: 'The most important Dutch vocabulary for A0–A1 learners — organised by category with pronunciation tips, and a study strategy that makes words stick.',
    publishedAt: '2026-03-01',
    readingTime: 8,
    tags: ['Dutch vocabulary', 'Dutch words', 'beginners', 'A1 Dutch'],
    content: `
<h2>Why vocabulary matters more at A0, and grammar matters more at A1</h2>
<p>When you start learning Dutch from scratch, your first goal is simple: understand and be understood. That requires words. In the first few weeks, building a core vocabulary of 200–300 high-frequency words will move you further than studying grammar rules you have no words to apply.</p>
<p>At A1, the balance shifts. You have enough words to form sentences — but without grammar, those sentences don't make sense. From A1 onward, grammar and vocabulary grow together.</p>

<h2>Category 1: Greetings and everyday phrases</h2>
<p>These are the words you'll use from day one. Learn them as complete phrases, not individual words.</p>
<ul>
  <li><strong>Hallo / Hoi</strong> — Hello / Hi (informal)</li>
  <li><strong>Goedemorgen / Goedemiddag / Goedenavond</strong> — Good morning / afternoon / evening</li>
  <li><strong>Dag / Doei</strong> — Goodbye (formal) / Bye (informal)</li>
  <li><strong>Tot ziens / Tot straks</strong> — See you / See you later</li>
  <li><strong>Alsjeblieft / Alstublieft</strong> — Please (informal/formal)</li>
  <li><strong>Dankjewel / Dank u wel</strong> — Thank you (informal/formal)</li>
  <li><strong>Graag gedaan</strong> — You're welcome</li>
  <li><strong>Sorry / Pardon</strong> — Sorry / Excuse me</li>
  <li><strong>Hoe gaat het?</strong> — How are you?</li>
  <li><strong>Goed, dankjewel</strong> — Good, thank you</li>
</ul>

<h2>Category 2: Numbers 1–20</h2>
<p>Numbers come up constantly. Memorise 1–20 as quickly as possible.</p>
<p>een, twee, drie, vier, vijf, zes, zeven, acht, negen, tien, elf, twaalf, dertien, veertien, vijftien, zestien, zeventien, achttien, negentien, twintig</p>
<p><strong>Pronunciation note:</strong> The Dutch <em>ij</em> in <em>vijf</em> and <em>vijftien</em> sounds like English "eye". The <em>ei</em> in <em>tein</em> sounds similar.</p>

<h2>Category 3: Question words</h2>
<p>Master these early — they unlock every type of conversation.</p>
<ul>
  <li><strong>Wie</strong> — Who</li>
  <li><strong>Wat</strong> — What</li>
  <li><strong>Waar</strong> — Where</li>
  <li><strong>Wanneer</strong> — When</li>
  <li><strong>Hoe</strong> — How</li>
  <li><strong>Waarom</strong> — Why</li>
  <li><strong>Welk / Welke</strong> — Which</li>
  <li><strong>Hoeveel</strong> — How many / How much</li>
</ul>

<h2>Category 4: High-frequency verbs</h2>
<p>These 20 verbs cover the vast majority of everyday sentences at A0–A1.</p>
<ul>
  <li><strong>zijn</strong> — to be</li>
  <li><strong>hebben</strong> — to have</li>
  <li><strong>gaan</strong> — to go</li>
  <li><strong>komen</strong> — to come</li>
  <li><strong>doen</strong> — to do</li>
  <li><strong>maken</strong> — to make</li>
  <li><strong>zeggen</strong> — to say</li>
  <li><strong>weten</strong> — to know (a fact)</li>
  <li><strong>kennen</strong> — to know (a person/place)</li>
  <li><strong>willen</strong> — to want</li>
  <li><strong>kunnen</strong> — can / to be able to</li>
  <li><strong>moeten</strong> — must / to have to</li>
  <li><strong>mogen</strong> — may / to be allowed to</li>
  <li><strong>werken</strong> — to work</li>
  <li><strong>wonen</strong> — to live (reside)</li>
  <li><strong>spreken</strong> — to speak</li>
  <li><strong>eten</strong> — to eat</li>
  <li><strong>drinken</strong> — to drink</li>
  <li><strong>zien</strong> — to see</li>
  <li><strong>heten</strong> — to be called (Ik heet...)</li>
</ul>

<h2>Category 5: People and relationships</h2>
<ul>
  <li><strong>man / vrouw</strong> — man / woman</li>
  <li><strong>vader / moeder</strong> — father / mother</li>
  <li><strong>zoon / dochter</strong> — son / daughter</li>
  <li><strong>broer / zus</strong> — brother / sister</li>
  <li><strong>vriend / vriendin</strong> — male friend / female friend (or boyfriend/girlfriend)</li>
  <li><strong>collega</strong> — colleague</li>
  <li><strong>buurman / buurvrouw</strong> — male/female neighbour</li>
</ul>

<h2>Category 6: Places and directions</h2>
<ul>
  <li><strong>huis</strong> (het) — house</li>
  <li><strong>straat</strong> (de) — street</li>
  <li><strong>stad</strong> (de) — city</li>
  <li><strong>winkel</strong> (de) — shop</li>
  <li><strong>supermarkt</strong> (de) — supermarket</li>
  <li><strong>station</strong> (het) — train station</li>
  <li><strong>links / rechts</strong> — left / right</li>
  <li><strong>rechtdoor</strong> — straight ahead</li>
  <li><strong>dichtbij / ver weg</strong> — nearby / far away</li>
</ul>

<h2>How to make vocabulary stick</h2>
<p><strong>1. Learn words in sentences, not in isolation.</strong> <em>Ik woon in Amsterdam</em> is more memorable than <em>wonen = to live</em> in a list.</p>
<p><strong>2. Use spaced repetition.</strong> Review new words after 1 day, 3 days, 7 days, 14 days. This schedule matches the natural forgetting curve and converts short-term to long-term memory efficiently.</p>
<p><strong>3. Always learn nouns with their article.</strong> Say <em>de straat</em>, not just <em>straat</em>. Say <em>het huis</em>, not just <em>huis</em>. The article is part of the word.</p>
<p><strong>4. Prioritise high-frequency words.</strong> The 500 most common Dutch words account for roughly 75% of everyday spoken Dutch. Focus there before expanding to specialist vocabulary.</p>
<p>NederPro's <a href="/vocabulary">vocabulary section</a> organises Dutch words by category (daily life, work, travel, emotions) with built-in spaced repetition and audio pronunciation.</p>
    `.trim(),
  },
  {
    slug: 'dutch-pronunciation-guide',
    title: 'Dutch Pronunciation Guide: Every Sound Explained for English Speakers',
    description: 'Master Dutch pronunciation from scratch — the famous Dutch G, vowel sounds, diphthongs, and the consonants that trip up English speakers. With examples and tips.',
    publishedAt: '2026-03-15',
    readingTime: 8,
    tags: ['Dutch pronunciation', 'Dutch sounds', 'speak Dutch', 'Dutch phonetics'],
    content: `
<h2>Why Dutch pronunciation is worth studying properly</h2>
<p>Dutch sounds strange to English ears at first. The guttural G, the long vowels, the diphthongs — none of them exist in English. But Dutch pronunciation is more consistent than English: once you learn the patterns, you can read almost any Dutch word aloud correctly. There are far fewer exceptions than in English spelling.</p>
<p>Getting pronunciation right early matters for two reasons: it makes you easier to understand, and it makes listening comprehension much easier because you recognise words you already know.</p>

<h2>The Dutch G — the most notorious sound</h2>
<p>The Dutch <em>g</em> is a voiced velar fricative — the same sound as the <em>ch</em> in Scottish "loch" or Spanish "j", but voiced (with your vocal cords active). English has no equivalent.</p>
<p><strong>How to produce it:</strong> Place the back of your tongue near your soft palate (velum) and let air pass through while vibrating your vocal cords. It should feel like a gentle gargling sound in the back of your throat.</p>
<p><strong>Examples:</strong> <em>goed</em> (good), <em>gaan</em> (to go), <em>groot</em> (big), <em>groen</em> (green)</p>
<p><strong>Note:</strong> In the Netherlands, the G is softer than in Belgium. Southern Dutch G is very close to the Scottish loch sound.</p>

<h2>Dutch vowels: long vs. short</h2>
<p>Dutch has a clear distinction between short and long vowels. The spelling signals this:</p>
<ul>
  <li>A vowel is <strong>long</strong> when it appears in an open syllable (a syllable ending in the vowel itself): <em>bo-ter</em> (butter) — long O</li>
  <li>A vowel is <strong>short</strong> when it appears in a closed syllable (followed by a consonant in the same syllable): <em>pot</em> (pot) — short O</li>
  <li>A double vowel (<em>aa, ee, oo, uu</em>) is always long: <em>maan</em> (moon), <em>been</em> (leg), <em>boot</em> (boat)</li>
</ul>

<h3>The main vowels</h3>
<ul>
  <li><strong>a</strong> (short) — like the <em>a</em> in "cat": <em>bad</em> (bath), <em>man</em> (man)</li>
  <li><strong>aa / a</strong> (long) — like the <em>a</em> in "father" but more closed: <em>maan</em> (moon), <em>vader</em> (father)</li>
  <li><strong>e</strong> (short) — like the <em>e</em> in "bed": <em>bed</em> (bed), <em>pen</em> (pen)</li>
  <li><strong>ee / e</strong> (long) — like the <em>ay</em> in "day" but without the glide: <em>been</em> (leg), <em>meter</em> (metre)</li>
  <li><strong>i</strong> (short) — like the <em>i</em> in "bit": <em>dit</em> (this)</li>
  <li><strong>ie</strong> (long) — like the <em>ee</em> in "see": <em>niet</em> (not), <em>vier</em> (four)</li>
  <li><strong>o</strong> (short) — like the <em>o</em> in "hot": <em>pot</em> (pot), <em>kom</em> (bowl)</li>
  <li><strong>oo / o</strong> (long) — like the <em>o</em> in "go" but without the glide: <em>boot</em> (boat), <em>zo</em> (so)</li>
  <li><strong>u</strong> (short) — rounded, between English <em>uh</em> and French <em>u</em>: <em>bus</em> (bus)</li>
  <li><strong>uu / u</strong> (long) — like French <em>u</em>: round your lips tightly and say "ee": <em>uur</em> (hour), <em>duur</em> (expensive)</li>
</ul>

<h2>Dutch diphthongs</h2>
<p>Diphthongs are vowel combinations that glide from one sound to another.</p>
<ul>
  <li><strong>ij / ei</strong> — like English "eye": <em>zijn</em> (to be), <em>mijn</em> (my), <em>wijn</em> (wine)</li>
  <li><strong>ou / au</strong> — like English "ow" in "now": <em>oud</em> (old), <em>blauw</em> (blue)</li>
  <li><strong>ui</strong> — no English equivalent. Round your lips (like <em>uu</em>) and say "eye". This is the hardest Dutch diphthong: <em>huis</em> (house), <em>buiten</em> (outside)</li>
  <li><strong>oe</strong> — like English "oo" in "pool": <em>boek</em> (book), <em>doen</em> (to do)</li>
  <li><strong>eu</strong> — like French <em>eu</em>: round lips in an "o" shape and say "e": <em>neus</em> (nose), <em>leuk</em> (nice/fun), <em>deur</em> (door)</li>
</ul>

<h2>Key consonants that differ from English</h2>
<ul>
  <li><strong>v</strong> — softer than English, almost like an <em>f</em>: <em>vader</em> (father), <em>vier</em> (four)</li>
  <li><strong>w</strong> — between English <em>v</em> and <em>w</em>: press your top teeth lightly on your lower lip: <em>water</em>, <em>wonen</em></li>
  <li><strong>r</strong> — can be trilled (tongue-tip) in the south or guttural (throat) in standard Dutch: <em>rood</em> (red)</li>
  <li><strong>ch</strong> — the same sound as the Dutch G: <em>acht</em> (eight), <em>licht</em> (light)</li>
  <li><strong>j</strong> — always a <em>y</em> sound as in English "yes": <em>jaar</em> (year), <em>jij</em> (you)</li>
  <li><strong>ng</strong> — like English <em>ng</em> in "ring": <em>lang</em> (long), <em>zingen</em> (to sing)</li>
</ul>

<h2>Stress patterns</h2>
<p>Dutch word stress generally falls on the root of the word, not on prefixes. Prefixes like <em>be-, ge-, ver-, ont-, her-</em> are usually unstressed: <em>be<strong>gin</strong></em>, <em>ge<strong>mak</strong></em>, <em>ver<strong>dacht</strong></em>.</p>
<p>In compound words, stress usually falls on the first element: <em><strong>zon</strong>dag</em> (Sunday), <em><strong>huis</strong>werk</em> (homework).</p>

<h2>The fastest way to improve your pronunciation</h2>
<p>The most effective practice is <strong>shadowing</strong>: listen to a Dutch sentence, pause the audio, and repeat it immediately, trying to match the sounds exactly. Do this with short phrases at first, then extend to longer sentences.</p>
<p>NederPro's <a href="/levels/a0">A0 pronunciation module</a> covers every sound with audio examples and exercises. Each vocabulary word in the app can be played aloud so you always hear the correct pronunciation alongside the written form.</p>
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
