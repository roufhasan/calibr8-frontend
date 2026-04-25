export default function SearchListSkeleton() {
  return Array.from({ length: 3 }).map((_, i) => (
    <li key={i} className="flex items-center gap-2 px-3 py-2">
      <div className="bg-muted size-8 shrink-0 animate-pulse rounded" />
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="bg-muted h-2 w-16 animate-pulse rounded" />
        <div className="bg-muted h-3 w-32 animate-pulse rounded" />
      </div>
      <div className="bg-muted size-7 animate-pulse rounded" />
    </li>
  ));
}
