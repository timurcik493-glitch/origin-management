export default function Marquee({ items, className = '' }) {
  const row = (
    <div className="flex gap-12 px-6 shrink-0">
      {items.map((it, i) => (
        <span key={i} className="text-sm uppercase tracking-[0.28em] text-[var(--ink-soft)] flex items-center gap-3 whitespace-nowrap">
          <span className="w-1 h-1 rounded-full bg-[var(--gold)]"></span>
          {it}
        </span>
      ))}
    </div>
  );
  return (
    <div className={`overflow-hidden border-y border-[var(--line)] py-4 ${className}`}>
      <div className="marquee-track">
        {row}{row}{row}{row}
      </div>
    </div>
  );
}