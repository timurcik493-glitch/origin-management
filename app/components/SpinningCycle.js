'use client';

export default function SpinningCycle({ items = [], size = 320 }) {
  const radius = size / 2 - 50;
  const center = size / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Внешнее кольцо */}
      <svg width={size} height={size} className="absolute inset-0">
        <circle cx={center} cy={center} r={radius + 30} fill="none"
          stroke="#1e293b" strokeWidth="1" strokeDasharray="4 8" className="rotate-slower" style={{ transformOrigin: `${center}px ${center}px` }} />
        <circle cx={center} cy={center} r={radius + 15} fill="none"
          stroke="url(#cycleGrad)" strokeWidth="1" opacity="0.4" />
        <circle cx={center} cy={center} r={radius - 30} fill="none"
          stroke="#1e293b" strokeWidth="1" strokeDasharray="2 6" className="rotate-slow" style={{ transformOrigin: `${center}px ${center}px` }} />
        <defs>
          <linearGradient id="cycleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Центр */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#a78bfa]/20 border border-[#22d3ee]/40 flex items-center justify-center backdrop-blur-sm glow-pulse">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-[var(--muted)]">Цикл</div>
            <div className="text-lg font-bold gradient-text">∞</div>
          </div>
        </div>
      </div>

      {/* Элементы по кругу */}
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
        const x = center + Math.cos(angle) * radius;
        const y = center + Math.sin(angle) * radius;
        return (
          <div
            key={i}
            className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[var(--panel)] border border-[var(--line-2)] flex items-center justify-center text-center hover:border-[var(--cyan)] hover:scale-110 transition-all duration-300"
            style={{ left: x, top: y, boxShadow: '0 4px 16px -4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' }}
          >
            <div className="px-2">
              <div className="text-[10px] uppercase tracking-wider text-[var(--cyan)] font-semibold">{item.n}</div>
              <div className="text-xs font-medium leading-tight">{item.t}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}