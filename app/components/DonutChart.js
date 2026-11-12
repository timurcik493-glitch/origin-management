'use client';
import { useEffect, useRef, useState } from 'react';

export default function DonutChart({ segments = [], size = 180, thickness = 24, centerLabel = '', centerSub = '' }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.v, 0);
  let offset = 0;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#232323" strokeWidth={thickness} />
        {segments.map((seg, i) => {
          const len = (seg.v / total) * c;
          const dash = `${len} ${c - len}`;
          const currOffset = -offset;
          offset += len;
          const isHover = hover === i;
          const delay = i * 0.25;
          return (
            <circle
              key={i}
              cx={size/2} cy={size/2} r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={isHover ? thickness + 4 : thickness}
              strokeDasharray={dash}
              strokeDashoffset={vis ? currOffset : c}
              strokeLinecap="butt"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="donut-segment"
              style={{
                transition: `stroke-dashoffset 0.8s cubic-bezier(0.19,1,0.22,1) ${delay}s, stroke-width 0.25s ease, opacity 0.25s ease`,
                opacity: hover === null || isHover ? 1 : 0.4,
                filter: isHover ? `drop-shadow(0 0 8px ${seg.color}80)` : 'none',
              }}
            />
          );
        })}
      </svg>
      {(centerLabel || centerSub) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          {hover !== null ? (
            <>
              <div className="text-xl font-bold" style={{ color: segments[hover].color }}>
                {Math.round((segments[hover].v / total) * 100)}%
              </div>
              <div className="text-[0.6rem] uppercase tracking-widest text-[var(--ink-3)]">
                {segments[hover].v}
              </div>
            </>
          ) : (
            <>
              {centerLabel && <div className="text-2xl font-bold">{centerLabel}</div>}
              {centerSub && <div className="text-[0.65rem] uppercase tracking-widest text-[var(--ink-3)]">{centerSub}</div>}
            </>
          )}
        </div>
      )}
    </div>
  );
}