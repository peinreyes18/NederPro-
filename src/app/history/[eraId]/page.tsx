import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';
import Alert from '@/components/ui/Alert';

interface PhraseItem {
  dutch: string;
  english: string;
}

interface HistorySection {
  heading: string;
  paragraphs?: string[];
  phrases?: PhraseItem[];
  tip?: string;
}

interface HistoryEra {
  title: string;
  icon: string;
  period: string;
  intro: string;
  sections: HistorySection[];
}

const historyContent: Record<string, HistoryEra> = {
  'early-history': {
    title: 'Early Inhabitants & Roman Rule',
    icon: '🏕️',
    period: 'Prehistory – 800 AD',
    intro:
      'Long before the Netherlands existed as a nation, the low-lying delta of the Rhine, Meuse, and Scheldt rivers was home to various peoples who found creative ways to survive in a waterlogged landscape. Roman conquest brought roads, cities, and written records — and left lasting traces on the Dutch language and land.',
    sections: [
      {
        heading: 'The First Settlers and the Terpen',
        paragraphs: [
          'The earliest inhabitants of what is now the Netherlands lived on the higher sandy soils in the east and south, where the ground was firmer. The coastal west was a vast marshy delta, periodically flooded by the sea and rivers.',
          'Around 500 BC, Germanic and Celtic tribes began settling the coastal marshes by building terpen — artificial earthen mounds raised above the flood level. Villages were built on these mounds, which could be as high as several metres. Over 1,000 terpen still exist today in the provinces of Friesland and Groningen, some still visible as gentle hills in the flat landscape.',
          'These early settlers herded cattle, fished, and farmed. They were not a single unified people but a collection of tribes including the Frisians (Friezen) along the coast, the Batavians (Batavieren) in the river delta, and the Belgae in the south.',
        ],
        phrases: [
          { dutch: 'de terp', english: 'the artificial mound (to live above flood level)' },
          { dutch: 'de Friezen', english: 'the Frisians (tribe of the north coast)' },
          { dutch: 'de Batavieren', english: 'the Batavians (tribe of the river delta)' },
          { dutch: 'de delta', english: 'the delta (river mouth area)' },
          { dutch: 'de prehistorie', english: 'prehistory' },
        ],
        tip: 'The province of Friesland still has its own distinct language — Fries (West Frisian) — spoken by around 450,000 people. It is officially recognised alongside Dutch and is the language most closely related to Old English.',
      },
      {
        heading: 'Roman Conquest and the Limes',
        paragraphs: [
          'In 57 BC, Julius Caesar conquered the southern Low Countries (modern Belgium and south Netherlands) as part of his Gallic Wars. The Rhine River became the northern frontier of the Roman Empire — a border called the limes (pronounced "lee-mess").',
          'The Romans established military forts and civilian towns along the Rhine. The city of Nijmegen (Noviomagus) became the most important Roman city north of the Alps in the Netherlands. Utrecht (Traiectum) and Maastricht (Mosae Trajectum) also have Roman origins.',
          'The Batavian tribe lived within the Roman Empire and became valued Roman allies. Batavian cavalry and infantry served throughout the Roman world. In 69 AD, the Batavian Revolt (Bataafse Opstand) — led by Claudius Civilis — briefly threw off Roman rule, a moment later glorified as a Dutch founding myth.',
          'Roman rule brought Latin, which influenced Dutch vocabulary. Many Dutch words for infrastructure, law, and trade have Latin roots. Roman roads, drainage systems, and agricultural techniques also left lasting marks.',
        ],
        phrases: [
          { dutch: 'de Romeinen', english: 'the Romans' },
          { dutch: 'de limes', english: 'the Roman frontier (along the Rhine)' },
          { dutch: 'de Bataafse Opstand', english: 'the Batavian Revolt (69 AD)' },
          { dutch: 'Nijmegen', english: 'oldest city in the Netherlands (Roman: Noviomagus)' },
          { dutch: 'de Rijn', english: 'the Rhine (Roman frontier river)' },
        ],
        tip: 'Nijmegen celebrates its status as the Netherlands\' oldest city. The Valkhof Museum there has outstanding Roman and Carolingian artefacts. On the KNM exam, knowing that Nijmegen is the oldest Dutch city is useful general knowledge.',
      },
      {
        heading: 'After Rome: Franks and Frisians',
        paragraphs: [
          'As the Western Roman Empire collapsed in the 5th century, Germanic tribes moved in. The Franks gradually took control of the southern and central Low Countries, while the Frisians maintained a powerful kingdom along the North Sea coast stretching from modern Belgium to Denmark.',
          'Frisian traders dominated North Sea commerce for centuries. The Frisian town of Dorestad (near modern Wijk bij Duurstede) was one of the largest trading centres in northern Europe in the 7th–8th centuries.',
          'Christianity spread into the region through missionaries. The Englishman Willibrord became the first bishop of Utrecht (695 AD) and is considered the apostle of the Frisians. Boniface, another English missionary, was martyred by Frisians in 754 AD near Dokkum — he is now the patron saint of the Netherlands.',
          'Charlemagne (Karel de Grote) unified much of Europe under Frankish rule and incorporated the Low Countries into his empire. After his death, the empire was divided, and the Low Countries fell into the Middle Frankish kingdom — the beginnings of what would eventually become the Netherlands.',
        ],
        phrases: [
          { dutch: 'de Franken', english: 'the Franks' },
          { dutch: 'Karel de Grote', english: 'Charlemagne (Frankish emperor)' },
          { dutch: 'de bisschop', english: 'the bishop' },
          { dutch: 'het christendom', english: 'Christianity' },
          { dutch: 'de handelaar', english: 'the trader / merchant' },
        ],
      },
    ],
  },
  'medieval-period': {
    title: 'The Medieval Period',
    icon: '⛪',
    period: '800 – 1400',
    intro:
      'The medieval Netherlands was not yet a unified country but a patchwork of competing counties, duchies, and bishoprics. This era saw the rise of powerful trading cities, the construction of great churches, and the first large-scale effort to reclaim land from water — setting the stage for everything that followed.',
    sections: [
      {
        heading: 'The Feudal Patchwork',
        paragraphs: [
          'After Charlemagne\'s empire broke apart, the Low Countries were divided among many local lords. The most powerful territories included the County of Holland (centered on Dordrecht and later Haarlem), the County of Zeeland, the Duchy of Guelders (Gelderland), the Duchy of Brabant, the County of Flanders, and the Prince-Bishopric of Utrecht.',
          'These territories were nominally part of the Holy Roman Empire but in practice operated independently. The counts of Holland gradually expanded their influence northward, draining lakes and marshes and establishing new settlements.',
          'Conflict between these powers was constant. Wars over succession, trade routes, and fishing rights shaped the region. The herring trade — particularly after the invention of a salting technique around 1380 — made Holland fabulously wealthy.',
        ],
        phrases: [
          { dutch: 'het graafschap', english: 'the county' },
          { dutch: 'het hertogdom', english: 'the duchy' },
          { dutch: 'de graaf', english: 'the count' },
          { dutch: 'de heer', english: 'the lord (feudal)' },
          { dutch: 'het kasteel', english: 'the castle' },
          { dutch: 'de haring', english: 'the herring' },
        ],
      },
      {
        heading: 'The Growth of Cities and Trade',
        paragraphs: [
          'From around 1000 AD, towns began to grow rapidly. Cities received charters (stadsrechten) from their lords granting rights of self-governance. Dordrecht (1220) was the first Dutch city to receive city rights. Amsterdam, founded around 1270 as a small fishing village at the mouth of the Amstel river, would eventually become the most important city in the world.',
          'Dutch cities became major trading hubs, connecting the wool trade of England and Flanders with the grain and timber of the Baltic. The Hanseatic League connected Dutch cities like Deventer, Kampen, and Zwolle to a vast northern European trading network.',
          'Craftsmen organised into guilds (gilden) to regulate their trades. The wealth from trade funded the construction of magnificent Gothic churches — many of which still define Dutch city centres today.',
        ],
        phrases: [
          { dutch: 'de stadsrechten', english: 'city rights / charter' },
          { dutch: 'het gilde', english: 'the guild (craftsmen\'s association)' },
          { dutch: 'de handel', english: 'trade / commerce' },
          { dutch: 'de Hanze', english: 'the Hanseatic League' },
          { dutch: 'de kerk', english: 'the church' },
          { dutch: 'Amsterdam', english: 'founded c. 1270 at the mouth of the Amstel river' },
        ],
        tip: 'Many Dutch cities hold their weekly markets (weekmarkten) on the same spots where medieval markets were held. The market square (marktplein) at the heart of most Dutch towns is a direct link to the medieval economy.',
      },
      {
        heading: 'Land Reclamation Begins',
        paragraphs: [
          'The medieval Dutch began the systematic reclamation of land that would become a defining national characteristic. Peat bogs were cut for fuel, but this lowered the land surface and caused it to flood. The response was to build more dikes and dig more drainage ditches.',
          'The first waterschappen (water boards) were established in the 12th and 13th centuries — democratic local bodies responsible for maintaining dikes and water levels. These are among the oldest democratic institutions in the Netherlands, predating the national parliament by centuries.',
          'By the 14th century, the essential techniques of Dutch water management — dikes, sluices, and pumping — were well established. The Dutch were learning to not just survive in their landscape but to transform it.',
        ],
        phrases: [
          { dutch: 'de ontginning', english: 'land reclamation / clearing' },
          { dutch: 'het veen', english: 'the peat bog' },
          { dutch: 'de dijk', english: 'the dike' },
          { dutch: 'de sluis', english: 'the sluice / lock' },
          { dutch: 'het waterschap', english: 'the water board' },
          { dutch: 'draineren', english: 'to drain' },
        ],
      },
    ],
  },
  'habsburg-rule': {
    title: 'Habsburg Rule & the Spanish Netherlands',
    icon: '👑',
    period: '1400 – 1568',
    intro:
      'Through strategic marriages and inheritance, the Low Countries came under Burgundian and then Habsburg rule in the 15th and early 16th centuries. This period brought relative prosperity and cultural flourishing — but also growing religious tension and resentment at foreign rule that would eventually explode into the Eighty Years\' War.',
    sections: [
      {
        heading: 'The Burgundian Netherlands',
        paragraphs: [
          'In the late 14th century, the Duke of Burgundy began acquiring the various counties and duchies of the Low Countries through inheritance and purchase. By the mid-15th century, Philip the Good (Filips de Goede) had united most of the Low Countries under Burgundian rule.',
          'The Burgundian court was one of the most magnificent in Europe, centered at Brussels. It patronised art, music, and literature on a grand scale. Flemish painters like Jan van Eyck flourished under Burgundian patronage, producing works of extraordinary realism.',
          'The Low Countries were the economic powerhouse of the Burgundian state. The cities of Flanders (Ghent, Bruges, Antwerp) and Holland were among the wealthiest in Europe. The first permanent meetings of the States-General (Staten-Generaal) — representatives of the various provinces — took place under Burgundian rule.',
        ],
        phrases: [
          { dutch: 'de Bourgondiërs', english: 'the Burgundians' },
          { dutch: 'Filips de Goede', english: 'Philip the Good (Burgundian duke)' },
          { dutch: 'de Staten-Generaal', english: 'the States-General (parliament)' },
          { dutch: 'de Nederlanden', english: 'the Netherlands / Low Countries' },
          { dutch: 'de welvaart', english: 'prosperity / wealth' },
        ],
      },
      {
        heading: 'Charles V and Habsburg Rule',
        paragraphs: [
          'When the last Burgundian ruler died in 1477, her daughter Mary married Maximilian of Habsburg, bringing the Low Countries into the Habsburg empire. Their grandson Charles V (Karel V) inherited not only the Netherlands but also Spain, the Holy Roman Empire, and vast territories in the Americas — making him the most powerful ruler in the world.',
          'Charles was actually born in Ghent and spoke Dutch as his first language. He had genuine affection for the Low Countries and managed to maintain reasonable relations with the provinces, though he imposed increasing taxes to fund his wars.',
          'Under Charles, the Reformation arrived. Martin Luther\'s ideas spread rapidly through the Low Countries, and Calvinism (via Geneva and John Calvin) found a particularly strong following. Charles persecuted heretics, but the new ideas proved impossible to eradicate.',
          'When Charles abdicated in 1555, he gave the Netherlands to his son Philip II of Spain — a devout Catholic who had never lived in the Low Countries and did not speak Dutch.',
        ],
        phrases: [
          { dutch: 'Karel V', english: 'Charles V (Habsburg emperor, born in Ghent)' },
          { dutch: 'Filips II', english: 'Philip II of Spain' },
          { dutch: 'de Hervorming', english: 'the Reformation' },
          { dutch: 'het calvinisme', english: 'Calvinism' },
          { dutch: 'de ketterij', english: 'heresy' },
          { dutch: 'de abdikatie', english: 'the abdication' },
        ],
        tip: 'Charles V is one of the few rulers of the Netherlands who could be considered genuinely Dutch in spirit — born in Ghent, Dutch-speaking, and fond of the Low Countries. His abdication ceremony in Brussels in 1555 was a famously emotional event.',
      },
      {
        heading: 'Growing Tensions Under Philip II',
        paragraphs: [
          'Philip II governed the Netherlands from Spain and had little understanding of or sympathy for Dutch traditions of local self-governance. He imposed higher taxes, placed Spanish troops in Dutch cities, and intensified religious persecution through the Inquisition.',
          'The Dutch nobility, led by figures like William of Orange and Count Egmont, petitioned Philip to moderate his policies. When a group of lesser nobles presented a petition in 1566, a Spanish courtier dismissed them as "these beggars" (ces gueux). The Dutch nobles adopted the term proudly — calling themselves Geuzen (Beggars) and turning it into a symbol of resistance.',
          'In 1566, the Beeldenstorm (Iconoclasm) swept through the Low Countries. Calvinist mobs attacked Catholic churches, smashing statues and religious images. Philip\'s response was to send the Duke of Alba (Alva) with an army to crush the rebellion — setting the stage for the Eighty Years\' War.',
        ],
        phrases: [
          { dutch: 'de Geuzen', english: 'the Beggars (Dutch rebel nickname)' },
          { dutch: 'de Beeldenstorm', english: 'the Iconoclasm (1566)' },
          { dutch: 'de Hertog van Alva', english: 'the Duke of Alba' },
          { dutch: 'de inquisitie', english: 'the Inquisition' },
          { dutch: 'het verzet', english: 'the resistance' },
          { dutch: 'de belasting', english: 'the tax' },
        ],
      },
    ],
  },
  'eighty-years-war': {
    title: "The Eighty Years' War",
    icon: '⚔️',
    period: '1568 – 1648',
    intro:
      "The Eighty Years' War (Tachtigjarige Oorlog) is the founding story of the Netherlands as an independent nation. Over eight decades, the Dutch provinces fought for — and won — their freedom from Spanish rule. The values forged in this struggle: tolerance, self-governance, and freedom of conscience, remain central to Dutch identity today.",
    sections: [
      {
        heading: 'The Revolt Begins',
        paragraphs: [
          "The war is traditionally dated from 1568, when William of Orange (Willem van Oranje) — also known as William the Silent (Willem de Zwijger) — led the first military campaigns against Spanish forces. Early efforts failed and William had to flee. Meanwhile, the Duke of Alba established the Raad van Beroerten (Council of Troubles), nicknamed the Bloedraad (Blood Council), which executed thousands of suspected rebels including the counts of Egmont and Hoorn in Brussels.",
          'The war\'s turning point came in 1572 when a group of Calvinist privateers called the Watergeuzen (Sea Beggars) captured the port of Den Briel. This gave the rebels a base and sparked uprisings across Holland and Zeeland. The rebel provinces declared William of Orange their stadhouder (governor).',
          'The Spanish attempted to reconquer the north but were repeatedly frustrated. The Siege of Leiden (1574) was a defining moment: after months of starvation, William broke the Spanish siege by opening the dikes and flooding the land, allowing the rebel fleet to bring relief. To celebrate, Leiden University was founded — still one of the Netherlands\' most prestigious institutions.',
        ],
        phrases: [
          { dutch: 'de Tachtigjarige Oorlog', english: "the Eighty Years' War (1568–1648)" },
          { dutch: 'Willem van Oranje', english: 'William of Orange (leader of the revolt)' },
          { dutch: 'de Bloedraad', english: 'the Blood Council (Duke of Alba\'s tribunal)' },
          { dutch: 'de Watergeuzen', english: 'the Sea Beggars (Calvinist privateers)' },
          { dutch: 'het Beleg van Leiden', english: 'the Siege of Leiden (1574)' },
          { dutch: 'de stadhouder', english: 'the stadtholder (governor/leader)' },
        ],
        tip: 'Leiden celebrates its relief on October 3 every year with a traditional meal of hutspot (stew) and herring — said to be what the rebels found in the abandoned Spanish camp. It\'s one of the Netherlands\' most unique local traditions.',
      },
      {
        heading: 'Independence Declared',
        paragraphs: [
          'In 1579, the northern provinces formed the Union of Utrecht (Unie van Utrecht) — a defensive alliance that became the foundation of the Dutch Republic. In 1581, they issued the Plakkaat van Verlatinghe (Act of Abjuration), formally declaring Philip II\'s sovereignty over them null and void. This was one of history\'s first declarations of independence from a sovereign ruler, and it later influenced the American Declaration of Independence.',
          "William of Orange was assassinated in Delft in 1584 by a Spanish agent. He is buried in the Nieuwe Kerk in Delft, as are all subsequent members of the Dutch royal family. He is called 'de Vader des Vaderlands' (Father of the Fatherland).",
          'Despite William\'s death, the Republic survived. The Spanish Armada\'s defeat by England in 1588 weakened Spanish power, and the Republic entered its Golden Age.',
        ],
        phrases: [
          { dutch: 'de Unie van Utrecht', english: 'the Union of Utrecht (1579)' },
          { dutch: 'het Plakkaat van Verlatinghe', english: 'the Act of Abjuration (1581)' },
          { dutch: 'de onafhankelijkheid', english: 'independence' },
          { dutch: 'de Republiek der Zeven Verenigde Nederlanden', english: 'the Republic of the Seven United Netherlands' },
          { dutch: 'de Vader des Vaderlands', english: 'the Father of the Fatherland (William of Orange)' },
        ],
      },
      {
        heading: 'The Twelve Years\' Truce and Final Peace',
        paragraphs: [
          "By 1609, both sides were exhausted. The Twelve Years' Truce (Twaalfjarig Bestand) gave the Republic de facto recognition. It expired in 1621 and fighting resumed, but Spain's power was waning. The Peace of Westphalia (Vrede van Westfalen, 1648) formally ended the war and granted the Dutch Republic full international recognition as an independent sovereign state.",
          'The Peace of Westphalia is a landmark document in international law. It established the principle of national sovereignty — that each state has the right to determine its own internal affairs — a principle that still underpins the international order.',
          'By 1648, the Republic was already at the height of its Golden Age. The war for independence had, paradoxically, forged a prosperous, tolerant, and innovative nation.',
        ],
        phrases: [
          { dutch: 'het Twaalfjarig Bestand', english: "the Twelve Years' Truce (1609–1621)" },
          { dutch: 'de Vrede van Westfalen', english: 'the Peace of Westphalia (1648)' },
          { dutch: 'de soevereiniteit', english: 'sovereignty' },
          { dutch: 'het verdrag', english: 'the treaty' },
          { dutch: 'de vrede', english: 'peace' },
        ],
      },
    ],
  },
  'golden-age': {
    title: 'The Dutch Golden Age',
    icon: '🎨',
    period: '1588 – 1702',
    intro:
      'The 17th century was the Dutch Golden Age (de Gouden Eeuw) — a period of extraordinary wealth, global dominance, scientific discovery, and artistic brilliance. The Dutch Republic became the world\'s leading commercial and maritime power, and Amsterdam was the centre of global trade. This era shaped not just the Netherlands but the modern world.',
    sections: [
      {
        heading: 'The VOC and Global Trade',
        paragraphs: [
          'The Vereenigde Oost-Indische Compagnie (VOC), founded in 1602, was the world\'s first multinational corporation and the first to issue publicly traded shares. The Amsterdam Stock Exchange (Amsterdamse Effectenbeurs), founded the same year, is the oldest stock exchange in the world.',
          'The VOC established a trading empire across Asia: controlling the spice trade from the Maluku Islands (then called the Spice Islands), establishing Batavia (modern Jakarta) as its Asian headquarters, and trading with Japan, China, India, Persia, and Arabia. At its peak the VOC had over 150 merchant ships, 40 warships, and 50,000 employees.',
          'The West India Company (WIC) focused on the Americas and Africa. The Dutch founded New Amsterdam (later New York) in 1626 and controlled much of the Brazilian coast and the Caribbean. The Dutch slave trade, however, is a dark chapter: the WIC transported hundreds of thousands of enslaved Africans across the Atlantic.',
        ],
        phrases: [
          { dutch: 'de Gouden Eeuw', english: 'the Golden Age (17th century)' },
          { dutch: 'de VOC', english: 'Dutch East India Company (Vereenigde Oost-Indische Compagnie)' },
          { dutch: 'de WIC', english: 'Dutch West India Company' },
          { dutch: 'de Amsterdamse Effectenbeurs', english: 'Amsterdam Stock Exchange (world\'s oldest)' },
          { dutch: 'Batavia', english: 'VOC capital in Asia (now Jakarta, Indonesia)' },
          { dutch: 'Nieuw Amsterdam', english: 'New Amsterdam (now New York City)' },
        ],
        tip: 'The VOC is frequently mentioned in Dutch cultural discourse. "VOC-mentaliteit" (VOC mentality) is used — sometimes critically — to describe a bold, entrepreneurial spirit. Understanding the VOC\'s complexity, including its role in colonialism and the slave trade, is part of honest Dutch historical memory.',
      },
      {
        heading: 'Art: Rembrandt, Vermeer, and the Dutch Masters',
        paragraphs: [
          'The Golden Age produced some of the greatest painters in Western art history. Unlike most European art of the period — funded by churches and kings — Dutch art was bought by a large, wealthy middle class. This commercial art market produced extraordinary diversity.',
          'Rembrandt van Rijn (1606–1669) is the towering figure of Dutch painting. His "De Nachtwacht" (The Night Watch, 1642) in the Rijksmuseum is among the most famous paintings in the world. Rembrandt revolutionised the use of light and shadow (chiaroscuro) and created deeply psychological portraits.',
          'Johannes Vermeer (1632–1675) of Delft painted intimate domestic interiors of extraordinary refinement. "Het Meisje met de Parel" (Girl with a Pearl Earring) hangs in the Mauritshuis in The Hague. Only about 34 of his paintings survive, making each one priceless.',
          'Other masters include Frans Hals (lively portraits), Jan Steen (humorous moral scenes), Jacob van Ruisdael (landscapes), and Pieter de Hooch (courtyard and domestic scenes). The Dutch mastered new genres: still life (stilleven), landscape (landschap), and everyday domestic scenes (genre painting).',
        ],
        phrases: [
          { dutch: 'De Nachtwacht', english: 'The Night Watch (Rembrandt, 1642)' },
          { dutch: 'Het Meisje met de Parel', english: 'Girl with a Pearl Earring (Vermeer)' },
          { dutch: 'het Rijksmuseum', english: 'the National Museum in Amsterdam' },
          { dutch: 'het Mauritshuis', english: 'Royal Picture Gallery in The Hague' },
          { dutch: 'het stilleven', english: 'the still life (painting genre)' },
          { dutch: 'het meesterwerk', english: 'the masterpiece' },
        ],
      },
      {
        heading: "Amsterdam's Canal Ring",
        paragraphs: [
          "Amsterdam's iconic grachtengordel (canal ring) was built during the Golden Age. Starting in 1613, the city expanded with three great concentric canals: Herengracht (Gentlemen's Canal), Keizersgracht (Emperor's Canal), and Prinsengracht (Prince's Canal).",
          'The canal houses (grachtenpanden) were built by wealthy merchants. Houses were taxed by their facade width, which is why they are narrow but very deep and tall. Each has a hook (hijsbalk) at the top to hoist furniture and goods through the upper windows — the internal staircases were too steep.',
          'The canal ring was designated a UNESCO World Heritage Site in 2010. It remains one of the best-preserved 17th-century urban landscapes in the world and defines Amsterdam\'s visual identity.',
        ],
        phrases: [
          { dutch: 'de grachtengordel', english: "the canal ring (Amsterdam's UNESCO heritage)" },
          { dutch: 'de Herengracht', english: "the Gentlemen's Canal" },
          { dutch: 'de Keizersgracht', english: "the Emperor's Canal" },
          { dutch: 'de Prinsengracht', english: "the Prince's Canal" },
          { dutch: 'het grachtenpand', english: 'the canal house' },
          { dutch: 'de gevel', english: 'the gable / facade' },
        ],
        tip: 'Remember the canal order: Herengracht, Keizersgracht, Prinsengracht — from inside to outside, alphabetically by the second letter (e, e, r... no — by first letter: H, K, P — they go outward alphabetically). A good mnemonic: "Heren Kijken Prachtig" (Gentlemen Look Magnificent).',
      },
      {
        heading: 'Science and Intellectual Freedom',
        paragraphs: [
          'The Dutch Republic became a centre of scientific innovation and intellectual freedom. Antonie van Leeuwenhoek (1632–1723) of Delft perfected the microscope and was the first person to observe bacteria, protozoa, and other microorganisms, founding microbiology.',
          'Christiaan Huygens (1629–1695) invented the pendulum clock, discovered Saturn\'s rings and its moon Titan, and made major contributions to optics and mechanics. His work on wave theory of light was foundational.',
          'The Republic\'s relative religious tolerance made it a refuge for persecuted thinkers. Philosopher Baruch Spinoza — born in Amsterdam to a Portuguese Jewish family — developed radical ideas about God and nature. René Descartes lived in the Netherlands for 20 years. The University of Leiden (founded 1575) attracted scholars from across Europe.',
        ],
        phrases: [
          { dutch: 'Antonie van Leeuwenhoek', english: 'inventor of the practical microscope; discovered bacteria' },
          { dutch: 'Christiaan Huygens', english: 'scientist; invented pendulum clock, discovered Saturn\'s moon Titan' },
          { dutch: 'de microscoop', english: 'the microscope' },
          { dutch: 'de Universiteit Leiden', english: 'Leiden University (founded 1575)' },
          { dutch: 'de tolerantie', english: 'tolerance / religious freedom' },
          { dutch: 'de wetenschap', english: 'science' },
        ],
      },
    ],
  },
  'decline-and-french': {
    title: 'Decline, French Rule & the Batavian Republic',
    icon: '🏳️',
    period: '1702 – 1815',
    intro:
      'After its glorious 17th century, the Dutch Republic entered a long period of gradual decline. Wars with England and France drained its resources, internal divisions weakened governance, and the old trading empire slowly eroded. The late 18th century brought revolution, French occupation, and ultimately the transformation into a modern kingdom.',
    sections: [
      {
        heading: 'The Decline of the Republic',
        paragraphs: [
          'The death of the last powerful stadhouder, William III (also king of England as William III), in 1702 marked the end of the Republic\'s greatest era. The 18th century was characterised by political stagnation, with the wealthy regent class (regenten) dominating city and provincial governments and resisting reform.',
          'Three Anglo-Dutch Wars (1652–1674) and repeated conflicts with France exhausted Dutch finances and damaged trade. The Fourth Anglo-Dutch War (1780–1784) was particularly damaging — it destroyed much of the Dutch merchant fleet and colonies. By the end of the century, the Republic had declined from global superpower to a second-rank state.',
          'A reform movement — the Patriots (Patriotten) — emerged in the 1780s, demanding more democratic government and an end to aristocratic corruption. The Patriots briefly took power in several cities but were crushed by a Prussian army in 1787, invited by the stadhouder.',
        ],
        phrases: [
          { dutch: 'de Republiek', english: 'the Dutch Republic' },
          { dutch: 'de regenten', english: 'the regent class (ruling oligarchy)' },
          { dutch: 'de Patriotten', english: 'the Patriots (reform movement, 1780s)' },
          { dutch: 'de neergang', english: 'the decline' },
          { dutch: 'de stadhouder', english: 'the stadtholder' },
        ],
      },
      {
        heading: 'The Batavian Republic and French Rule',
        paragraphs: [
          'In 1795, French Revolutionary forces invaded the Netherlands. The Patriots — now returned with French support — declared the Batavian Republic (Bataafse Republiek), named after the ancient Batavian tribe. For the first time, all Dutch citizens were equal before the law, and a new constitution was written.',
          'The Batavian Republic was in practice a French satellite state. Napoleon gradually tightened his grip: in 1806 he made his brother Louis Napoleon (Lodewijk Napoleon) king of a new Kingdom of Holland. Louis Napoleon actually tried to be a good Dutch king, learning the language and resisting French demands, but Napoleon dissolved the kingdom in 1810 and annexed the Netherlands directly into France.',
          'The French period was transformative despite its difficulties. The Netherlands got a national civil code, a national army, and modern administrative systems. The metric system was introduced. But the Continental System (Napoleon\'s trade blockade against Britain) devastated Dutch commerce.',
        ],
        phrases: [
          { dutch: 'de Bataafse Republiek', english: 'the Batavian Republic (1795–1806)' },
          { dutch: 'Lodewijk Napoleon', english: 'Louis Napoleon (King of Holland, 1806–1810)' },
          { dutch: 'de grondwet', english: 'the constitution' },
          { dutch: 'de gelijkheid', english: 'equality' },
          { dutch: 'de annexatie', english: 'the annexation' },
          { dutch: 'het Koninkrijk Holland', english: 'the Kingdom of Holland (1806–1810)' },
        ],
        tip: 'Louis Napoleon is remembered somewhat fondly in the Netherlands — he genuinely tried to govern well. He famously mispronounced "Konijn van Holland" (rabbit of Holland) when trying to say "Koning van Holland" (King of Holland). A popular Dutch joke.',
      },
      {
        heading: 'The Birth of the Kingdom',
        paragraphs: [
          "After Napoleon's defeat, the Congress of Vienna (1815) redrew Europe's borders. The northern Netherlands became the Kingdom of the Netherlands under William I (Willem I) of the House of Orange — now a constitutional monarchy rather than a republic.",
          'William I also received the former Austrian Netherlands (Belgium) and ruled a United Kingdom of the Netherlands that included both countries. This uneasy union lasted only until 1830, when the Belgians revolted and declared independence. The separation was finalised in 1839.',
          'The House of Orange — descendants of William of Orange — have ruled as monarchs ever since. The transition from republic to monarchy marked a fundamental change in Dutch governance, though many republican traditions, such as tolerance and pragmatic consensus, survived.',
        ],
        phrases: [
          { dutch: 'het Koninkrijk der Nederlanden', english: 'the Kingdom of the Netherlands' },
          { dutch: 'Willem I', english: 'William I (first King of the Netherlands)' },
          { dutch: 'het Huis van Oranje', english: 'the House of Orange (royal family)' },
          { dutch: 'de constitutionele monarchie', english: 'the constitutional monarchy' },
          { dutch: 'België', english: 'Belgium (separated from Netherlands in 1830)' },
        ],
      },
    ],
  },
  'kingdom-19th-century': {
    title: 'The Kingdom & Industrialisation',
    icon: '🏭',
    period: '1815 – 1914',
    intro:
      'The 19th century brought great changes to the Netherlands: the separation from Belgium, the Industrial Revolution, the construction of railways and canals, the abolition of slavery, and the expansion of the welfare state. By 1914, the Netherlands was a modern industrial nation with a constitutional monarchy and a growing empire.',
    sections: [
      {
        heading: 'A New Kingdom Finds Its Feet',
        paragraphs: [
          'William I was an energetic but autocratic king who invested heavily in infrastructure — canals, roads, and later railways. The North Holland Canal (1824) and later the North Sea Canal (1876) ensured Amsterdam remained connected to the sea. The first Dutch railway, between Amsterdam and Haarlem, opened in 1839.',
          "After Belgium's independence in 1830, the Netherlands focused on its remaining colonial empire, especially the Dutch East Indies (Indonesia). Profits from the colonial cultivation system (cultuurstelsel) — which forced Indonesian farmers to grow export crops — funded much of the Netherlands' 19th-century development.",
          'The Constitution of 1848, introduced by King William II under pressure from the liberal politician Johan Rudolf Thorbecke, transformed the Netherlands into a genuine constitutional monarchy with ministerial responsibility to parliament. The king reigned but did not govern — a system that survives today.',
        ],
        phrases: [
          { dutch: 'de grondwet van 1848', english: 'the Constitution of 1848' },
          { dutch: 'de spoorlijn', english: 'the railway line' },
          { dutch: 'het cultuurstelsel', english: 'the cultivation system (colonial)' },
          { dutch: 'de ministeriële verantwoordelijkheid', english: 'ministerial responsibility' },
          { dutch: 'Nederlands-Indië', english: 'Dutch East Indies (now Indonesia)' },
        ],
        tip: 'The Constitution of 1848 is a landmark in Dutch political history. Johan Rudolf Thorbecke is considered the "father of Dutch democracy" — there is a famous statue of him in The Hague.',
      },
      {
        heading: 'Industrialisation and Social Reform',
        paragraphs: [
          'Industrialisation came later and more gradually to the Netherlands than to Britain or Belgium, partly because cheap peat provided energy, partly because Dutch wealth came from trade rather than manufacturing. But by the second half of the 19th century, factories and railways were transforming Dutch society.',
          'The Industrial Revolution brought urbanisation, poverty, and social problems. Child labour was common; working conditions were harsh. The socialist movement emerged, and trade unions (vakbonden) were founded. The first Child Labour Law (Kinderwet, 1874) — championed by Samuel van Houten — banned work for children under 12.',
          "The 'pillarisation' (verzuiling) system emerged: Dutch society organised itself into separate Protestant, Catholic, and secular 'pillars' (zuilen), each with its own schools, hospitals, trade unions, newspapers, and political parties. This system of structured tolerance shaped the Netherlands well into the 20th century.",
        ],
        phrases: [
          { dutch: 'de industrialisatie', english: 'industrialisation' },
          { dutch: 'de vakbond', english: 'the trade union' },
          { dutch: 'de Kinderwet', english: 'the Child Labour Law (1874)' },
          { dutch: 'de verzuiling', english: 'pillarisation (social organisation)' },
          { dutch: 'de zuil', english: 'the pillar (Protestant, Catholic, secular)' },
          { dutch: 'de arbeider', english: 'the worker / labourer' },
        ],
      },
      {
        heading: 'Abolition of Slavery and Colonialism',
        paragraphs: [
          'The Netherlands abolished slavery in its colonies in 1863 — one of the last countries in the Western world to do so. Dutch slavery had been centered on Suriname and the Caribbean islands (now the Caribbean Netherlands). July 1, 1863 — known as Keti Koti ("broken chains" in Sranan Tongo) — is now commemorated annually.',
          "Dutch colonialism in Indonesia was accompanied by exploitation and, in the late 19th century, violent 'pacification' campaigns in Aceh (the Aceh War, 1873–1914) and other regions. Dutch historians increasingly examine this colonial history critically.",
          "The Netherlands remained neutral in World War I, which allowed it to trade with both sides. This neutrality brought prosperity but also left the country without strong international alliances — a vulnerability that would prove catastrophic in 1940.",
        ],
        phrases: [
          { dutch: 'de slavernij', english: 'slavery' },
          { dutch: 'de afschaffing', english: 'the abolition' },
          { dutch: 'Keti Koti', english: 'broken chains (abolition commemoration, July 1)' },
          { dutch: 'Suriname', english: 'former Dutch colony in South America' },
          { dutch: 'de neutraliteit', english: 'neutrality' },
          { dutch: 'de kolonisatie', english: 'colonisation' },
        ],
        tip: 'The Keti Koti festival on July 1 is increasingly recognised as an important date in the Netherlands. In 2023, King Willem-Alexander offered a formal apology for Dutch slavery. It is an important part of understanding modern Dutch identity.',
      },
    ],
  },
  'world-war-2': {
    title: 'World War II & the Occupation',
    icon: '🕊️',
    period: '1939 – 1945',
    intro:
      'World War II left deep and permanent scars on the Netherlands. Five years of German occupation, the near-total destruction of the Dutch Jewish community, the horror of the Hongerwinter, and ultimately liberation — these events continue to shape Dutch identity, values, and remembrance culture in the 21st century.',
    sections: [
      {
        heading: 'The German Invasion (May 1940)',
        paragraphs: [
          'Germany invaded the Netherlands on May 10, 1940. The Netherlands had been neutral in World War I and hoped neutrality would protect it again — a hope quickly shattered. After four days of fighting, the Luftwaffe bombed the centre of Rotterdam on May 14, killing around 900 civilians and destroying the city centre. The Netherlands surrendered the same day.',
          'Queen Wilhelmina and the government fled to London, establishing a government-in-exile. The Queen\'s radio broadcasts via Radio Oranje became a beacon of hope for the Dutch people throughout the occupation. The royal family\'s courage made the House of Orange a powerful symbol of resistance.',
          'The German occupation under Reichskommissar Arthur Seyss-Inquart initially attempted to govern collaboratively, exploiting Dutch administrative structures. But conditions deteriorated rapidly, especially for Jewish citizens.',
        ],
        phrases: [
          { dutch: 'de bezetting', english: 'the occupation' },
          { dutch: 'de capitulatie', english: 'the capitulation / surrender' },
          { dutch: 'het bombardement op Rotterdam', english: 'the bombing of Rotterdam (May 14, 1940)' },
          { dutch: 'de regering in ballingschap', english: 'the government-in-exile' },
          { dutch: 'Koningin Wilhelmina', english: 'Queen Wilhelmina (led from London)' },
          { dutch: 'Radio Oranje', english: 'Radio Orange (BBC Dutch broadcasts from London)' },
        ],
      },
      {
        heading: 'Persecution of Jews and the Holocaust',
        paragraphs: [
          'Before the war, the Netherlands had a Jewish community of about 140,000 people — the vast majority Dutch-born citizens. The German occupiers imposed increasingly harsh anti-Jewish measures: registration, exclusion from public life, forced wearing of the yellow star (Jodenster), and dismissal from jobs.',
          'From 1942, mass deportations began. Jews were collected at the Hollandsche Schouwburg theatre in Amsterdam and transported to Westerbork transit camp, then eastward to Auschwitz, Sobibor, and other death camps.',
          'Anne Frank — a Jewish girl from Frankfurt who had fled to Amsterdam — went into hiding with her family in 1942 in a secret annex (het Achterhuis) above a canal house on the Prinsengracht. She kept a detailed diary. The family was betrayed and arrested in August 1944. Anne died in Bergen-Belsen in February 1945. Her father Otto, the only family member to survive, published her diary after the war.',
          'Of approximately 107,000 Dutch Jews deported, only around 5,000 survived. The Netherlands had one of the highest Jewish death rates in Western Europe — a fact that historians attribute to the efficient Dutch civil administration, geographic factors (no mountains or borders to flee to), and the high proportion of Dutch collaborators.',
        ],
        phrases: [
          { dutch: 'de Jodenvervolging', english: 'the persecution of Jews' },
          { dutch: 'de Jodenster', english: 'the yellow star (worn by Jews)' },
          { dutch: 'het Achterhuis', english: "the Secret Annex (Anne Frank's hiding place)" },
          { dutch: 'het dagboek', english: 'the diary' },
          { dutch: 'de deportatie', english: 'the deportation' },
          { dutch: 'kamp Westerbork', english: 'Westerbork transit camp' },
          { dutch: 'de onderduiker', english: 'person in hiding during the war' },
        ],
        tip: 'The Anne Frank Huis on Prinsengracht 263 in Amsterdam is one of the most visited museums in the Netherlands. Book tickets well in advance. It is a deeply important site of memory.',
      },
      {
        heading: 'The Resistance',
        paragraphs: [
          'Many Dutch people resisted the occupation. The February Strike (Februaristaking) of February 25–26, 1941 was a remarkable moment: Amsterdam dock workers went on a general strike to protest the first German raids against the Jewish community. It was the only mass public protest against Jewish persecution in occupied Europe.',
          'The organised resistance (het verzet) published underground newspapers (verzetskranten), forged identity documents, hid Jewish families and Allied airmen, and sabotaged German operations. An estimated 25,000–30,000 people were hidden (onderduikers) by Dutch families.',
          'The resistance came at enormous cost. Those caught faced execution or deportation. The Verzetsmuseum (Dutch Resistance Museum) in Amsterdam documents these stories. A statue of the Dokwerker (Dock Worker) near Waterlooplein commemorates the February Strike.',
        ],
        phrases: [
          { dutch: 'het verzet', english: 'the resistance' },
          { dutch: 'de Februaristaking', english: 'the February Strike (1941)' },
          { dutch: 'de verzetskrant', english: 'the underground newspaper' },
          { dutch: 'het Verzetsmuseum', english: 'the Dutch Resistance Museum (Amsterdam)' },
          { dutch: 'de Dokwerker', english: 'the Dock Worker (memorial statue)' },
        ],
      },
      {
        heading: 'The Hongerwinter (1944–1945)',
        paragraphs: [
          "The winter of 1944–1945 was the most catastrophic period of the occupation. After the Allied liberation of the south and the failed Operation Market Garden (the Arnhem battle), the Germans blockaded food supplies to the west of the Netherlands as punishment for a Dutch railway strike that had supported the Allied advance.",
          'Over 4.5 million people in the western Netherlands faced severe starvation. City dwellers ate tulip bulbs, sugar beets, and anything they could find. An estimated 20,000 people died of hunger and cold. Desperate "hongertochten" (hunger trips) took people from cities to farms in search of food.',
          'Relief came only with full liberation. Allied aircraft dropped food in Operation Manna (April–May 1945). The Hongerwinter left lasting physical effects — research on children born in 1944–1945 shaped understanding of how prenatal malnutrition affects lifelong health.',
        ],
        phrases: [
          { dutch: 'de Hongerwinter', english: 'the Hunger Winter (1944–1945)' },
          { dutch: 'de hongertocht', english: 'the hunger trip (to find food)' },
          { dutch: 'de spoorwegstaking', english: 'the railway strike (1944)' },
          { dutch: 'Operatie Market Garden', english: 'Operation Market Garden (failed Allied operation at Arnhem)' },
          { dutch: 'de tulpenbollen', english: 'tulip bulbs (eaten during the famine)' },
        ],
      },
      {
        heading: 'Liberation and Remembrance',
        paragraphs: [
          'The Netherlands was liberated in stages between September 1944 and May 5, 1945, by Canadian, British, American, and Polish forces. Canada played a particularly important role; the Dutch–Canadian bond is commemorated each year at the Canadian War Cemetery in Groesbeek.',
          'Every year, May 4 is Dodenherdenking (Remembrance Day). At 8:00 PM, two minutes of silence are observed nationwide — traffic stops, trains halt. The main ceremony is at the National Monument on Dam Square in Amsterdam, attended by the King and broadcast live on television. It is one of the most solemn and widely observed moments in Dutch public life.',
          'May 5 is Bevrijdingsdag (Liberation Day), celebrated with festivals across the country. Every five years (2025, 2030, etc.) it is an official national holiday for all workers.',
        ],
        phrases: [
          { dutch: 'de Bevrijdingsdag', english: 'Liberation Day (May 5)' },
          { dutch: 'Dodenherdenking', english: 'Remembrance of the Dead (May 4)' },
          { dutch: 'twee minuten stilte', english: 'two minutes of silence (at 8 PM on May 4)' },
          { dutch: 'het Nationaal Monument', english: 'the National Monument (Dam Square, Amsterdam)' },
          { dutch: 'de Canadezen', english: 'the Canadians (key liberators of the Netherlands)' },
        ],
        tip: 'On May 4 at 8:00 PM, wherever you are in the Netherlands, stop and observe the two minutes of silence. It is deeply important to the Dutch and not participating is considered very disrespectful.',
      },
    ],
  },
  'postwar-modern': {
    title: 'Post-War Recovery & Modern Netherlands',
    icon: '🌷',
    period: '1945 – present',
    intro:
      'After the devastation of World War II, the Netherlands rebuilt itself with remarkable speed and transformed into one of the world\'s most prosperous, open, and progressive societies. The post-war decades brought decolonisation, the Delta Works, European integration, natural gas wealth, and a series of social revolutions that made the Netherlands a global leader in tolerance and innovation.',
    sections: [
      {
        heading: 'Rebuilding and the Marshall Plan',
        paragraphs: [
          'The Netherlands emerged from the war severely damaged. Rotterdam\'s city centre was destroyed, the infrastructure was wrecked, and the economy was in ruins. American Marshall Plan aid (1948–1952) helped finance reconstruction, while Dutch workers rebuilt with remarkable energy and efficiency.',
          'The Dutch economy grew rapidly in the 1950s and 1960s. The port of Rotterdam became the largest in the world. Dutch industry, agriculture, and trade flourished. The Netherlands joined NATO (1949) and was a founding member of what became the European Union — the Treaty of Rome (1957).',
          "The social welfare system (verzorgingsstaat) expanded dramatically. Universal healthcare, education, unemployment benefits, and old-age pensions (AOW, introduced 1957) created one of the world's most comprehensive welfare states.",
        ],
        phrases: [
          { dutch: 'het Marshallplan', english: 'the Marshall Plan (US post-war aid)' },
          { dutch: 'de wederopbouw', english: 'the reconstruction (post-war rebuilding)' },
          { dutch: 'de verzorgingsstaat', english: 'the welfare state' },
          { dutch: 'de AOW', english: 'state pension (Algemene Ouderdomswet, 1957)' },
          { dutch: 'de Europese Unie', english: 'the European Union' },
          { dutch: 'de NAVO', english: 'NATO' },
        ],
      },
      {
        heading: 'Decolonisation and Immigration',
        paragraphs: [
          'The Dutch East Indies declared independence as Indonesia in 1945. After a brutal colonial war (1945–1949), the Netherlands recognised Indonesian independence in 1949. This was a painful loss — the Indies had been central to Dutch identity and economy for 350 years.',
          'Suriname became independent in 1975. The Antilles followed a different path; the former Netherlands Antilles were dissolved in 2010 into separate countries (Aruba, Curaçao, Sint Maarten) and special municipalities (Bonaire, Sint Eustatius, Saba) within the Kingdom.',
          'Decolonisation brought immigration. Hundreds of thousands of Dutch citizens from Indonesia (including many Moluccans, called "Molukkers") migrated to the Netherlands after 1949. Guest workers (gastarbeiders) arrived from Turkey and Morocco in the 1960s–70s to fuel economic growth. Many stayed, and their descendants are now an integral part of Dutch society.',
        ],
        phrases: [
          { dutch: 'de dekolonisatie', english: 'decolonisation' },
          { dutch: 'Indonesië', english: 'Indonesia (independent 1949)' },
          { dutch: 'Suriname', english: 'Suriname (independent 1975)' },
          { dutch: 'de gastarbeider', english: 'the guest worker (1960s–70s migrant workers)' },
          { dutch: 'de Molukkers', english: 'the Moluccans (Indonesian minority in Netherlands)' },
          { dutch: 'de immigratie', english: 'immigration' },
        ],
      },
      {
        heading: 'The Delta Works and Natural Gas',
        paragraphs: [
          'The catastrophic 1953 Watersnoodramp (flood disaster) — which killed 1,836 people — galvanised the Netherlands into building the Delta Works, one of the greatest engineering projects in history. Between 1954 and 1997, the government built dams, sluices, and storm surge barriers across the southwestern delta. The Oosterscheldekering and Maeslantkering are engineering marvels.',
          'In 1959, huge natural gas fields were discovered in Groningen — among the largest in the world. Gas revenues funded the welfare state and infrastructure for decades. However, the extraction caused earthquakes that have damaged thousands of homes in the region. Gas extraction ended in 2023.',
          "The 'Dutch disease' (Hollandse ziekte) became an economic concept: when natural resource revenues cause a currency to strengthen and harm other export industries. Ironically, this economic phenomenon was named after the Netherlands' own experience.",
        ],
        phrases: [
          { dutch: 'de Deltawerken', english: 'the Delta Works (flood barriers)' },
          { dutch: 'de Watersnoodramp', english: 'the 1953 flood disaster' },
          { dutch: 'het aardgas', english: 'natural gas' },
          { dutch: 'de Groningse gaswinning', english: 'the Groningen gas extraction' },
          { dutch: 'de aardbevingen', english: 'the earthquakes (caused by gas extraction)' },
          { dutch: 'de Hollandse ziekte', english: 'Dutch disease (economic term)' },
        ],
      },
      {
        heading: 'Social Revolution and Progressive Policies',
        paragraphs: [
          'From the 1960s onward, the Netherlands became a global symbol of progressive social policy. The counterculture movement was strong, especially in Amsterdam (the "Provo" movement). Drug policy became pragmatic rather than prohibitionist — a policy of tolerance (gedoogbeleid) toward cannabis use led to the coffeeshop system.',
          'The Netherlands became the first country in the world to legalise same-sex marriage (2001). It legalised euthanasia under strict conditions (2002) and has among the most liberal abortion laws in the world. These policies reflect deeply held Dutch values of personal autonomy and pragmatic problem-solving.',
          'Dutch society also grappled with the challenges of integration, particularly after the murders of Pim Fortuyn (2002) and filmmaker Theo van Gogh (2004) sparked intense national debate about immigration, Islam, and Dutch identity. The debates continue, with ongoing political tensions between liberal and more conservative visions of Dutch society.',
        ],
        phrases: [
          { dutch: 'het gedoogbeleid', english: "tolerance policy (regarding drugs etc.)" },
          { dutch: 'de coffeeshop', english: 'the cannabis café (legal under gedoogbeleid)' },
          { dutch: 'het homohuwelijk', english: 'same-sex marriage (legalised 2001)' },
          { dutch: 'de euthanasie', english: 'euthanasia (legalised 2002)' },
          { dutch: 'de integratie', english: 'integration (of immigrant communities)' },
          { dutch: 'de Provo\'s', english: 'the Provos (1960s Amsterdam countercultural movement)' },
        ],
        tip: 'The Netherlands today is a constitutional monarchy with a parliamentary democracy, a highly open economy (among the world\'s top 20), and one of the highest standards of living in the world. Understanding its history explains why tolerance, pragmatism, and water management remain central to Dutch national identity.',
      },
    ],
  },
};

const eraIds = Object.keys(historyContent);

export function generateStaticParams() {
  return eraIds.map((eraId) => ({ eraId }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eraId: string }>;
}): Promise<Metadata> {
  const { eraId } = await params;
  const era = historyContent[eraId];
  return {
    title: `${era?.title || 'History'} | NederPro`,
    description: era?.intro?.slice(0, 160) || 'Dutch history',
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

export default async function HistoryEraPage({
  params,
}: {
  params: Promise<{ eraId: string }>;
}) {
  const { eraId } = await params;
  const era = historyContent[eraId];

  if (!era) {
    notFound();
  }

  const currentIndex = eraIds.indexOf(eraId);
  const prevEra = currentIndex > 0 ? eraIds[currentIndex - 1] : null;
  const nextEra = currentIndex < eraIds.length - 1 ? eraIds[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'History', href: '/history' },
          { label: era.title },
        ]}
      />

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{era.icon}</span>
        <div>
          <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-1 rounded-md border border-accent/20">
            {era.period}
          </span>
          <h1 className="text-3xl font-bold text-primary mt-1">{era.title}</h1>
        </div>
      </div>
      <p className="text-muted leading-relaxed mb-10">{era.intro}</p>

      {era.sections.map((section, i) => (
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

          {section.tip && (
            <Alert variant="tip">
              <span className="font-semibold">💡 Tip: </span>
              {section.tip}
            </Alert>
          )}
        </div>
      ))}

      {/* Prev / Next navigation */}
      <div className="flex gap-4 mt-12 pt-6 border-t border-border">
        {prevEra ? (
          <a
            href={`/history/${prevEra}`}
            className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-surface-hover transition-colors text-sm"
          >
            <span className="text-muted">←</span>
            <div>
              <div className="text-xs text-muted">Previous</div>
              <div className="font-medium text-primary">{historyContent[prevEra].title}</div>
            </div>
          </a>
        ) : (
          <div className="flex-1" />
        )}
        {nextEra ? (
          <a
            href={`/history/${nextEra}`}
            className="flex-1 flex items-center justify-end gap-2 px-4 py-3 rounded-lg border border-border hover:bg-surface-hover transition-colors text-sm text-right"
          >
            <div>
              <div className="text-xs text-muted">Next</div>
              <div className="font-medium text-primary">{historyContent[nextEra].title}</div>
            </div>
            <span className="text-muted">→</span>
          </a>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
