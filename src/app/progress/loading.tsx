export default function ProgressLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 animate-pulse">
      {/* Breadcrumb */}
      <div className="h-4 bg-surface rounded w-28 mb-8" />

      {/* Title */}
      <div className="h-8 bg-surface rounded w-48 mb-8" />

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-background p-5">
            <div className="h-3 bg-surface rounded w-24 mb-3" />
            <div className="h-8 bg-surface rounded w-12" />
          </div>
        ))}
      </div>

      {/* Streak card */}
      <div className="rounded-2xl border border-border bg-background p-5 mb-8">
        <div className="flex justify-between">
          <div>
            <div className="h-3 bg-surface rounded w-28 mb-2" />
            <div className="h-4 bg-surface rounded w-32" />
          </div>
          <div className="text-right">
            <div className="h-3 bg-surface rounded w-20 mb-2" />
            <div className="h-4 bg-surface rounded w-16" />
          </div>
        </div>
      </div>

      {/* Level progress cards */}
      <div className="h-6 bg-surface rounded w-40 mb-4" />
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl border border-border bg-background p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-6 bg-surface rounded w-8" />
                <div className="h-5 bg-surface rounded w-36" />
              </div>
              <div className="h-5 bg-surface rounded-full w-16" />
            </div>
            <div className="h-2 bg-surface rounded-full w-full mb-2" />
            <div className="h-3 bg-surface rounded w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}
