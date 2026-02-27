export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-primary">M</span>
        <span className="text-xl font-bold tracking-widest">ANASHKA</span>
        <span className="ml-2 text-xs font-semibold tracking-widest text-primary border border-primary/50 px-1.5 py-0.5 rounded">CRMP</span>
      </div>
    </div>
  )
}
