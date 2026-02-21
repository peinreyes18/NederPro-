import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Dutch Culture Tips',
  description:
    'Practical insights about Dutch culture, customs, and daily life in the Netherlands — greetings, cycling etiquette, workplace norms, holidays, food, and more. With useful Dutch vocabulary included.',
  openGraph: {
    title: 'Dutch Culture Tips | NederPro',
    description:
      'Understand Dutch customs, social norms, and daily life in the Netherlands. Essential cultural knowledge for newcomers and language learners.',
  },
};

const cultureTips = [
  {
    id: 'greetings-social-norms',
    icon: '👋',
    title: 'Greetings & Social Norms',
    description:
      'Learn about drie zoenen, when to use "u" vs. "jij", and how the Dutch greet each other.',
  },
  {
    id: 'dutch-directness',
    icon: '🗣️',
    title: 'Dutch Directness',
    description:
      'Why the Dutch say exactly what they mean, and how to handle their famously direct communication style.',
  },
  {
    id: 'workplace-culture',
    icon: '💼',
    title: 'Workplace Culture',
    description:
      'The borrel, lunch culture, flat hierarchy, and what to expect in a Dutch office.',
  },
  {
    id: 'holidays-celebrations',
    icon: '🎉',
    title: 'Holidays & Celebrations',
    description:
      'Koningsdag, Sinterklaas, Bevrijdingsdag, Carnaval, and other important Dutch traditions.',
  },
  {
    id: 'food-dining',
    icon: '🧀',
    title: 'Food & Dining',
    description:
      'Stamppot, bitterballen, hagelslag, going Dutch, and the concept of gezelligheid.',
  },
  {
    id: 'cycling-culture',
    icon: '🚲',
    title: 'Cycling Culture',
    description:
      'Bike rules, hand signals, fietspad etiquette, and why the bicycle is king in the Netherlands.',
  },
  {
    id: 'housing-registration',
    icon: '🏠',
    title: 'Housing & Registration',
    description:
      'BSN number, gemeente registration, DigiD, and practical tips for settling in.',
  },
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare System',
    description:
      'The huisarts, referral system, health insurance, and how to navigate Dutch healthcare.',
  },
  {
    id: 'birthday-songs-traditions',
    icon: '🎂',
    title: 'Birthday Songs & Traditions',
    description:
      'Learn the Dutch birthday songs, the circle party, and how to celebrate verjaardagen like a local.',
  },
  {
    id: 'dutch-golden-age',
    icon: '🎨',
    title: 'The Golden Age',
    description:
      'The VOC, global trade, Rembrandt and Vermeer, and how 17th-century wealth shaped the Netherlands.',
  },
  {
    id: 'dutch-independence',
    icon: '⚔️',
    title: 'Independence & the 80 Years\' War',
    description:
      'William of Orange, the revolt against Spain, and the birth of the Dutch Republic.',
  },
  {
    id: 'dutch-water-management',
    icon: '🌊',
    title: 'Water & the Polders',
    description:
      'How the Dutch built a nation below sea level — windmills, dikes, the Delta Works, and the waterschap.',
  },
  {
    id: 'world-war-2-netherlands',
    icon: '🕊️',
    title: 'WWII & Liberation',
    description:
      'The German occupation, Anne Frank, the Hongerwinter, and why Bevrijdingsdag matters so much.',
  },
];

export default function CulturePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <Breadcrumb items={[{ label: 'Culture Tips' }]} />

      <h1 className="text-3xl font-bold text-primary mb-2">Dutch Culture Tips</h1>
      <p className="text-muted mb-8">
        Practical insights about life, customs, and daily norms in the Netherlands — with useful Dutch vocabulary included.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {cultureTips.map((tip) => (
          <Link key={tip.id} href={`/culture/${tip.id}`}>
            <Card hover>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
