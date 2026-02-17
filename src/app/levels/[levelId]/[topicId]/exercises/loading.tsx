export default function ExercisesLoading() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="animate-pulse">
        <div className="h-5 bg-surface rounded w-64 mb-6" />
        <div className="h-8 bg-surface rounded w-56 mb-6" />
        <div className="flex items-center justify-between mb-2">
          <div className="h-4 bg-surface rounded w-28" />
          <div className="h-6 w-20 bg-surface rounded-full" />
        </div>
        <div className="h-2 bg-surface rounded mb-6" />
        <div className="bg-background rounded-lg border border-border p-6 space-y-4">
          <div className="h-6 bg-surface rounded w-3/4" />
          <div className="h-10 bg-surface rounded" />
          <div className="h-10 bg-surface rounded w-1/2" />
        </div>
      </div>
    </div>
  );
}
