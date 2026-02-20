export default function ExamsLoading() {
  return (
    <div>
      {/* Header skeleton */}
      <section className="bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 animate-pulse">
          <div className="h-3 bg-surface rounded w-32 mb-5" />
          <div className="h-10 bg-surface rounded w-56 mb-4" />
          <div className="h-4 bg-surface rounded w-full max-w-lg mb-2" />
          <div className="h-4 bg-surface rounded w-2/3 max-w-md mb-8" />
          <div className="h-8 bg-surface rounded w-28" />
        </div>
      </section>

      {/* Exam group skeleton — repeat 2 groups */}
      {[1, 2].map((g) => (
        <section key={g} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
          <div className="h-6 bg-surface rounded w-72 mb-2" />
          <div className="h-1 bg-surface rounded w-16 mb-8" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-5 flex flex-col gap-3">
                <div className="h-5 bg-surface rounded w-3/4" />
                <div className="h-3 bg-surface rounded w-full" />
                <div className="h-3 bg-surface rounded w-5/6" />
                <div className="flex gap-2 mt-1">
                  <div className="h-5 bg-surface rounded-full w-16" />
                  <div className="h-5 bg-surface rounded-full w-12" />
                  <div className="h-5 bg-surface rounded-full w-20" />
                </div>
                <div className="mt-auto h-8 bg-surface rounded-lg w-full" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
