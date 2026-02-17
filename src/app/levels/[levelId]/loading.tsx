export default function LevelLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-5 bg-surface rounded w-32 mb-6" />
        <div className="flex items-center gap-3 mb-2">
          <div className="h-9 w-12 bg-surface rounded" />
          <div className="h-9 bg-surface rounded w-48" />
        </div>
        <div className="h-5 bg-surface rounded w-80 mb-8" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-20 bg-surface rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
