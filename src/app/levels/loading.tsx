export default function LevelsLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-5 bg-surface rounded w-20 mb-6" />
        <div className="h-9 bg-surface rounded w-56 mb-2" />
        <div className="h-5 bg-surface rounded w-96 mb-8" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-40 bg-surface rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
