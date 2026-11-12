'use client';
import { useEffect, useRef, useState } from 'react';

export default function LineChart({ data = [], height = 220, color = '#e8a78d', duration = 2800 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hover, setHover] = useState(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!vis) return;
    const t = setTimeout(() => setDone(true), duration + 200);
    return () => clearTimeout(t);
  }, [vis, duration]);

  const w = 700, h = height, pad = 35;
  const max = Math.max(...data.map(d => d.v)) * 1.1;
  const min = Math.min(...data.map(d => d.v)) * 0.9;
  const pts = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((d.v - min) / (max - min)) * (h - pad * 2);
    return [x, y, d];
  });
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const areaD = `${pathD} L ${pts[pts.length - 1][0]} ${h - pad} L ${pts[0][0]} ${h - pad} Z`;
  const gradId = `grad-${color.replace('#', '')}-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div ref={ref} className="w-full relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Сетка */}
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i}
            x1={pad} y1={pad + (i / 4) * (h - pad * 2)}
            x2={w - pad} y2={pad + (i / 4) * (h - pad * 2)}
            stroke="#232323" strokeWidth="1" strokeDasharray="3 4" />
        ))}

        {/* Area — заливается слева направо */}
        {vis && (
          <path
            d={areaD}
            fill={`url(#${gradId})`}
            className="chart-area-clip"
            style={{ animationDuration: `${duration}ms` }}
          />
        )}

        {/* Линия — прорисовывается */}
        {vis && (
          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-draw"
            style={{ animationDuration: `${duration}ms` }}
          />
        )}

        {/* Точки — появляются по одной, синхронно с линией */}
        {vis && pts.map((p, i) => {
          const delay = (i / (pts.length - 1)) * duration;
          return (
            <g key={i} style={{ opacity: 0, animation: `dotArrive 0.4s cubic-bezier(0.19,1,0.22,1) ${delay}ms forwards` }}>
              {/* Кольцо-burst при появлении */}
              <circle
                cx={p[0]} cy={p[1]} r="4"
                fill="none" stroke={color} strokeWidth="3"
                style={{
                  opacity: 0,
                  animation: `ringBurst 1.2s cubic-bezier(0.19,1,0.22,1) ${delay + 100}ms forwards`
                }}
              />
              {/* Зона hover */}
              <circle
                cx={p[0]} cy={p[1]} r="18" fill="transparent"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer' }}
              />
              {/* Точка */}
              <circle
                cx={p[0]} cy={p[1]}
                r={hover === i ? 7 : 4}
                fill="#131313"
                stroke={color}
                strokeWidth={hover === i ? 3 : 2}
                style={{ transition: 'r 0.2s ease, stroke-width 0.2s ease' }}
              />
              {/* Внешнее свечение при hover */}
              {hover === i && (
                <circle cx={p[0]} cy={p[1]} r="14" fill={color} opacity="0.15" />
              )}
            </g>
          );
        })}

        {/* Бегущий курсор по линии — только во время прорисовки */}
        {vis && !done && (
          <circle
            r="6" fill={color} className="chart-cursor"
            style={{ color }}
          >
            <animateMotion
              dur={`${duration}ms`}
              fill="freeze"
              path={pathD}
            />
          </circle>
        )}

        {/* Тултип при hover */}
        {hover !== null && (
          <g>
            <line
              x1={pts[hover][0]} y1={pts[hover][1]}
              x2={pts[hover][0]} y2={h - pad}
              stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <rect
              x={pts[hover][0] - 32}
              y={pts[hover][1] - 38}
              width="64" height="24" rx="5"
              fill="#0f0f0f" stroke={color} strokeWidth="1" />
            <text
              x={pts[hover][0]} y={pts[hover][1] - 22}
              textAnchor="middle" fontSize="11"
              fill={color} fontFamily="JetBrains Mono" fontWeight="600">
              {pts[hover][2].v}
            </text>
          </g>
        )}

        {/* Подписи оси — появляются вместе с точками */}
        {pts.map((p, i) => {
          const delay = (i / (pts.length - 1)) * duration;
          return (
            <text key={i}
              x={p[0]} y={h - 10}
              textAnchor="middle" fontSize="11"
              fill={hover === i ? color : '#6b6b6b'}
              fontFamily="JetBrains Mono"
              style={{
                transition: 'fill 0.2s ease',
                opacity: 0,
                animation: `dotArrive 0.3s ease ${delay}ms forwards`
              }}>
              {p[2].y}
            </text>
          );
        })}
      </svg>
    </div>
  );
}