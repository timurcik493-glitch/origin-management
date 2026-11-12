'use client';
import { useEffect, useRef, useState } from 'react';

export default function BarsChart({ data = [], height = 180, color = '#e8a78d' }) {
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

  const max = Math.max(...data.map(d => d.v));
  const w = 500, pad = 20, gap = 14;
  const barW = (w - pad * 2 - gap * (data.length - 1)) / data.length;

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${w} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient id="barGradDraw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.45" />
          </linearGradient>
        </defs>
        {data.map((d, i) => {
          const bh = (d.v / max) * (height - 40);
          const x = pad + i * (barW + gap);
          const y = height - 30 - bh;
          const isHover = hover === i;
          const delay = i * 0.18;
          return (
            <g key={i}>
              {vis && (
                <rect
                  x={x} y={height - 30 - bh} width={barW} height={bh} rx="2"
                  fill="url(#barGradDraw)"
                  className="bar-grow"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  style={{
                    animationDelay: `${delay}s`,
                    opacity: hover === null || isHover ? 1 : 0.45,
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                  }}
                />
              )}
              <text
                x={x + barW / 2} y={height - 8}
                textAnchor="middle" fontSize="10"
                fill={isHover ? color : '#6b6b6b'}
                fontFamily="JetBrains Mono"
                style={{
                  transition: 'fill 0.2s ease',
                  opacity: 0,
                  animation: `dotArrive 0.3s ease ${delay}s forwards`
                }}>
                {d.l}
              </text>
              <text
                x={x + barW / 2} y={y - 8}
                textAnchor="middle"
                fontSize={isHover ? 14 : 12}
                fill={isHover ? color : '#f5f5f5'}
                fontFamily="JetBrains Mono" fontWeight="600"
                style={{
                  transition: 'fill 0.2s ease, font-size 0.2s ease',
                  opacity: 0,
                  animation: `dotArrive 0.4s ease ${delay + 0.3}s forwards`
                }}>
                {d.v}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}