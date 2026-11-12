'use client';
import { useEffect, useRef, useState } from 'react';

export default function RadarChart({ data = [], size = 340, color = '#22d3ee' }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2 - 55;
  const n = data.length;
  const angles = data.map((_, i) => (i / n) * Math.PI * 2 - Math.PI / 2);

  const point = (val, angle, level = 1) => {
    const r = (val / 100) * maxR * level;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r];
  };

  // Основной многоугольник
  const dataPoints = data.map((d, i) => point(d.v, angles[i]));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z';

  return (
    <div ref={ref} className="relative inline-block">
      <svg width={size} height={size}>
        {/* Концентрические многоугольники (сетка) */}
        {[0.25, 0.5, 0.75, 1].map((lvl, li) => (
          <polygon
            key={li}
            points={angles.map(a => {
              const p = point(100, a, lvl);
              return `${p[0]},${p[1]}`;
            }).join(' ')}
            fill="none"
            stroke="#1e293b"
            strokeWidth="1"
            strokeDasharray={lvl === 1 ? "0" : "3 3"}
          />
        ))}

        {/* Радиальные линии */}
        {angles.map((a, i) => {
          const p = point(100, a);
          return <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} stroke="#1e293b" strokeWidth="1" />;
        })}

        {/* Заливка */}
        {vis && (
          <polygon points={dataPoints.map(p => `${p[0]},${p[1]}`).join(' ')}
            fill={color} className="radar-fill" style={{ opacity: 0.25 }} />
        )}

        {/* Контур */}
        {vis && (
          <path d={dataPath} fill="none" stroke={color} strokeWidth="2" className="radar-shape"
            style={{ filter: `drop-shadow(0 0 8px ${color}80)` }} />
        )}

        {/* Точки */}
        {vis && dataPoints.map((p, i) => (
          <g key={i} className="radar-dot">
            <circle cx={p[0]} cy={p[1]} r="6" fill={color} opacity="0.2" />
            <circle cx={p[0]} cy={p[1]} r="4" fill="#0b0b12" stroke={color} strokeWidth="2" />
          </g>
        ))}

        {/* Подписи */}
        {data.map((d, i) => {
          const labelR = maxR + 30;
          const lx = cx + Math.cos(angles[i]) * labelR;
          const ly = cy + Math.sin(angles[i]) * labelR;
          const align = Math.abs(Math.cos(angles[i])) < 0.3 ? 'middle' : (lx > cx ? 'start' : 'end');
          return (
            <g key={i}>
              <text x={lx} y={ly} textAnchor={align} dominantBaseline="middle"
                fontSize="10" fill="#94a3b8" fontWeight="600" fontFamily="Inter">
                {d.l}
              </text>
              <text x={lx} y={ly + 12} textAnchor={align} dominantBaseline="middle"
                fontSize="11" fill={color} fontWeight="700" fontFamily="JetBrains Mono">
                {d.v}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}