export default function TopicLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-5 bg-surface rounded w-48 mb-6" />
        <div className="flex items-center gap-2 mb-2">
          <div className="h-6 w-10 bg-surface rounded-full" />
          <div className="h-4 bg-surface rounded w-20" />
        </div>
        <div className="h-9 bg-surface rounded w-64 mb-1" />
        <div className="h-5 bg-surface rounded w-96 mb-8" />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 bg-surface rounded w-48" />
              <div className="h-4 bg-surface rounded w-full" />
              <div className="h-4 bg-surface rounded w-5/6" />
              <div className="h-4 bg-surface rounded w-4/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
