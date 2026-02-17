import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/layout/Breadcrumb';
import GrammarTable from '@/components/lesson/GrammarTable';
import Alert from '@/components/ui/Alert';
import { GrammarTableSection } from '@/content/types';

const referenceTables: Record<
  string,
  { title: string; sections: { table: GrammarTableSection; note?: string }[] }
> = {
  'verb-conjugation': {
    title: 'Verb Conjugation',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Present Tense: Regular Verbs',
          headers: ['Pronoun', 'Ending', 'werken', 'wonen', 'fietsen'],
          rows: [
            ['ik', 'stam', 'werk', 'woon', 'fiets'],
            ['jij/je', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['u', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['hij/zij/het', 'stam + t', 'werkt', 'woont', 'fietst'],
            ['wij/we', 'infinitief', 'werken', 'wonen', 'fietsen'],
            ['jullie', 'infinitief', 'werken', 'wonen', 'fietsen'],
            ['zij/ze', 'infinitief', 'werken', 'wonen', 'fietsen'],
          ],
          caption: 'Note: When "jij/je" comes AFTER the verb, the -t drops: "werk jij?" (not "werkt jij?")',
        },
        note: 'The stem (stam) is found by removing -en from the infinitive. Apply spelling rules: double vowels become single in closed syllables (wonen → woon), v→f (leven → leef), z→s (reizen → reis).',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Hebben and Zijn (Irregular)',
          headers: ['Pronoun', 'hebben', 'zijn'],
          rows: [
            ['ik', 'heb', 'ben'],
            ['jij/je', 'hebt', 'bent'],
            ['u', 'hebt / heeft', 'bent / is'],
            ['hij/zij/het', 'heeft', 'is'],
            ['wij/we', 'hebben', 'zijn'],
            ['jullie', 'hebben', 'zijn'],
            ['zij/ze', 'hebben', 'zijn'],
          ],
        },
      },
    ],
  },
  'de-het-list': {
    title: 'De / Het Word Lists',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Common Het-woorden',
          headers: ['Dutch', 'English'],
          rows: [
            ['het huis', 'the house'],
            ['het boek', 'the book'],
            ['het kind', 'the child'],
            ['het werk', 'the work'],
            ['het water', 'the water'],
            ['het jaar', 'the year'],
            ['het land', 'the country'],
            ['het probleem', 'the problem'],
            ['het moment', 'the moment'],
            ['het voorbeeld', 'the example'],
            ['het meisje', 'the girl (diminutive)'],
            ['het kantoor', 'the office'],
            ['het bedrijf', 'the company'],
            ['het systeem', 'the system'],
            ['het gesprek', 'the conversation'],
          ],
        },
        note: 'Patterns: diminutives (-je) are always het. Words ending in -ment, -isme are usually het. Most words starting with be-, ge-, ver-, ont- are het.',
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Common De-woorden',
          headers: ['Dutch', 'English'],
          rows: [
            ['de man', 'the man'],
            ['de vrouw', 'the woman'],
            ['de tafel', 'the table'],
            ['de stad', 'the city'],
            ['de auto', 'the car'],
            ['de tijd', 'the time'],
            ['de vraag', 'the question'],
            ['de dag', 'the day'],
            ['de week', 'the week'],
            ['de vergadering', 'the meeting'],
            ['de collega', 'the colleague'],
            ['de manager', 'the manager'],
            ['de e-mail', 'the email'],
            ['de telefoon', 'the telephone'],
            ['de koffie', 'the coffee'],
          ],
        },
        note: 'All plural nouns use "de". Most words referring to people use "de".',
      },
    ],
  },
  'word-order-rules': {
    title: 'Word Order Rules',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Main Clause Word Order',
          headers: ['Position', 'Element', 'Example'],
          rows: [
            ['1', 'Subject (or other element)', 'Ik / Morgen'],
            ['2', 'Conjugated verb (ALWAYS)', 'werk / werk'],
            ['3', 'Subject (if position 1 is not subject)', '- / ik'],
            ['4+', 'Rest: Time, Manner, Place', 'morgen in Amsterdam / in Amsterdam'],
          ],
          caption: 'The verb is ALWAYS in second position in a Dutch main clause.',
        },
      },
      {
        table: {
          type: 'grammar-table',
          title: 'Time - Manner - Place',
          headers: ['Type', 'Example Words'],
          rows: [
            ['Time (wanneer?)', 'morgen, vandaag, om 9 uur, volgende week'],
            ['Manner (hoe?)', 'graag, snel, met de trein, goed'],
            ['Place (waar?)', 'in Amsterdam, op kantoor, naar huis, hier'],
          ],
          caption: 'When multiple adverbials appear, follow Time-Manner-Place order.',
        },
      },
    ],
  },
  prepositions: {
    title: 'Prepositions',
    sections: [
      {
        table: {
          type: 'grammar-table',
          title: 'Prepositions of Place',
          headers: ['Dutch', 'English', 'Example'],
          rows: [
            ['in', 'in', 'in de stad (in the city)'],
            ['op', 'on / at', 'op kantoor (at the office)'],
            ['aan', 'at / on', 'aan de tafel (at the table)'],
            ['bij', 'at / near / with', 'bij het station (near the station)'],
            ['naar', 'to', 'naar huis (to home)'],
            ['uit', 'from / out of', 'uit Nederland (from the Netherlands)'],
            ['van', 'from / of', 'van het station (from the station)'],
            ['met', 'with', 'met de trein (by train)'],
            ['voor', 'for / in front of', 'voor de deur (in front of the door)'],
            ['achter', 'behind', 'achter het gebouw (behind the building)'],
            ['naast', 'next to', 'naast het kantoor (next to the office)'],
            ['tussen', 'between', 'tussen de huizen (between the houses)'],
          ],
        },
      },
    ],
  },
};

const referenceTopicIds = Object.keys(referenceTables);

export function generateStaticParams() {
  return referenceTopicIds.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: topicId } = await params;
  const data = referenceTables[topicId];
  return {
    title: `${data?.title || 'Reference'} | NederPro`,
    description: `Dutch grammar reference: ${data?.title}`,
  };
}

export default async function ReferenceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: topicId } = await params;
  const data = referenceTables[topicId];

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb
        items={[
          { label: 'Reference', href: '/reference' },
          { label: data.title },
        ]}
      />

      <h1 className="text-3xl font-bold text-primary mb-8">{data.title}</h1>

      {data.sections.map((section, i) => (
        <div key={i} className="mb-8">
          <GrammarTable section={section.table} />
          {section.note && (
            <Alert variant="tip">{section.note}</Alert>
          )}
        </div>
      ))}
    </div>
  );
}
