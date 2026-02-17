import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';

const historyEras = [
  {
    id: 'early-history',
    icon: '🏕️',
    period: 'Prehistory – 800 AD',
    title: 'Early Inhabitants & Roman Rule',
    description:
      'From the first settlers on artificial mounds (terpen) to Roman occupation and the arrival of Frankish tribes.',
  },
  {
    id: 'medieval-period',
    icon: '⛪',
    period: '800 – 1400',
    title: 'The Medieval Period',
    description:
      'The rise of counties and duchies, the growth of trading cities, and the role of the Church in shaping Dutch society.',
  },
  {
    id: 'habsburg-rule',
    icon: '👑',
    period: '1400 – 1568',
    title: 'Habsburg Rule & the Spanish Netherlands',
    description:
      'How the Low Countries came under Burgundian and then Habsburg-Spanish rule, and the growing tensions that led to revolt.',
  },
  {
    id: 'eighty-years-war',
    icon: '⚔️',
    period: '1568 – 1648',
    title: 'The Eighty Years\' War',
    description:
      'William of Orange, the revolt against Spain, the founding of the Dutch Republic, and the birth of a nation.',
  },
  {
    id: 'golden-age',
    icon: '🎨',
    period: '1588 – 1702',
    title: 'The Dutch Golden Age',
    description:
      'The VOC, global trade, Rembrandt and Vermeer, Amsterdam\'s canal ring, and the apex of Dutch power and culture.',
  },
  {
    id: 'decline-and-french',
    icon: '🏳️',
    period: '1702 – 1815',
    title: 'Decline, French Rule & the Batavian Republic',
    description:
      'Economic decline, Patriot revolutions, French occupation under Napoleon, and the birth of the Kingdom of the Netherlands.',
  },
  {
    id: 'kingdom-19th-century',
    icon: '🏭',
    period: '1815 – 1914',
    title: 'The Kingdom & Industrialisation',
    description:
      'The modern Kingdom of the Netherlands takes shape, Belgium splits off, and the Industrial Revolution transforms Dutch society.',
  },
  {
    id: 'world-war-2',
    icon: '🕊️',
    period: '1939 – 1945',
    title: 'World War II & the Occupation',
    description:
      'The German invasion, Anne Frank, the Holocaust, the Hongerwinter, the resistance, and the liberation by Allied forces.',
  },
  {
    id: 'postwar-modern',
    icon: '🌷',
    period: '1945 – present',
    title: 'Post-War Recovery & Modern Netherlands',
    description:
      'Rebuilding after the war, decolonisation, the Delta Works, the welfare state, European integration, and the Netherlands today.',
  },
];

export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'History' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">History of the Netherlands</h1>
      <p className="text-muted mb-8">
        A chronological journey through Dutch history — from prehistoric terpen to the modern Netherlands. Understanding this history helps you make sense of Dutch culture, values, and language.
      </p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-border sm:left-[2.75rem]" />

        <div className="space-y-4">
          {historyEras.map((era, index) => (
            <Link key={era.id} href={`/history/${era.id}`}>
              <div className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Timeline dot + icon */}
                <div className="relative z-10 flex flex-col items-center shrink-0">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-surface border-2 border-border group-hover:border-accent group-hover:bg-accent-light transition-all duration-200 flex items-center justify-center text-lg sm:text-xl shadow-sm">
                    {era.icon}
                  </div>
                  {index < historyEras.length - 1 && (
                    <div className="w-px flex-1 min-h-4" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-4">
                  <Card hover>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                      <div className="shrink-0 mb-1 sm:mb-0">
                        <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-1 rounded-md border border-accent/20 whitespace-nowrap">
                          {era.period}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{era.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{era.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
