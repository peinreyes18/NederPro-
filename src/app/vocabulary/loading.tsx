export default function VocabularyLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 animate-pulse">
      <div className="h-4 bg-surface rounded w-24 mb-6" />
      <div className="h-8 bg-surface rounded w-40 mb-2" />
      <div className="h-4 bg-surface rounded w-72 mb-8" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-background p-5">
            <div className="h-5 bg-surface rounded w-3/4 mb-2" />
            <div className="h-3 bg-surface rounded w-full mb-1.5" />
            <div className="h-3 bg-surface rounded w-2/3 mb-4" />
            <div className="flex gap-2">
              <div className="h-5 bg-surface rounded-full w-12" />
              <div className="h-5 bg-surface rounded-full w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
