'use client';

import GrammarTable from '@/components/lesson/GrammarTable';
import Alert from '@/components/ui/Alert';
import SubscriptionGate from '@/components/ui/SubscriptionGate';
import { useAuth } from '@/contexts/AuthContext';
import type { GrammarTableSection } from '@/content/types';

interface ReferenceSection {
  table: GrammarTableSection;
  note?: string;
}

// Non-subscribers see the first table of each reference topic; the rest are
// gated. The first table keeps the page useful for SEO / as a lead magnet while
// the deeper tables become a reason to subscribe.
const FREE_REFERENCE_TABLES = 1;

export default function ReferenceSections({
  title,
  sections,
}: {
  title: string;
  sections: ReferenceSection[];
}) {
  const { isSubscribed, subscriptionLoaded } = useAuth();

  const visibleSections = isSubscribed
    ? sections
    : sections.slice(0, FREE_REFERENCE_TABLES);
  const hiddenCount = sections.length - visibleSections.length;
  // Only show the paywall once we know the user isn't subscribed, so paying
  // users never see a CTA flash while auth resolves.
  const showPaywall = subscriptionLoaded && !isSubscribed && hiddenCount > 0;

  return (
    <>
      {visibleSections.map((section, i) => (
        <div key={i} className="mb-8">
          <GrammarTable section={section.table} />
          {section.note && <Alert variant="tip">{section.note}</Alert>}
        </div>
      ))}

      {showPaywall && (
        <div className="mb-8">
          <p className="text-sm text-muted text-center mb-3">
            {hiddenCount} more {hiddenCount === 1 ? 'table' : 'tables'} in this
            reference — available with a subscription.
          </p>
          <SubscriptionGate feature={`the full ${title} reference`} />
        </div>
      )}
    </>
  );
}
