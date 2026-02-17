export default function VocabularyCategoryLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-5 bg-surface rounded w-32 mb-6" />
        <div className="flex items-center gap-3 mb-1">
          <div className="h-9 w-9 bg-surface rounded" />
          <div>
            <div className="h-9 bg-surface rounded w-40 mb-1" />
            <div className="h-4 bg-surface rounded w-28" />
          </div>
        </div>
        <div className="h-5 bg-surface rounded w-72 mb-6" />
        <div className="h-10 bg-surface rounded w-40 mb-6" />
        <div className="border border-border rounded-lg overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-12 bg-surface/50 border-b border-border" />
          ))}
        </div>
      </div>
    </div>
  );
}
