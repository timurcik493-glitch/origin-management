'use client';
import { useEffect, useRef, useState } from 'react';

export default function PdcaWheel({ size = 400, dark = false }) {
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

  const cx = size / 2, cy = size / 2;
  const outerR = size / 2 - 20;
  const innerR = size / 2 - 70;

  const segments = [
    { label: 'P', ru: 'Plan', color: '#0071e3' },
    { label: 'D', ru: 'Do', color: '#5e5ce6' },
    { label: 'C', ru: 'Check', color: '#bf5af2' },
    { label: 'A', ru: 'Act', color: '#30d158' },
  ];

  const polar = (r, angleDeg) => {
    const a = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  const describeArc = (startAngle, endAngle, r) => {
    const start = polar(r, endAngle);
    const end = polar(r, startAngle);
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
  };

  const gap = 4;
  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={cx} cy={cy} r={outerR + 12} fill="none"
          stroke={dark ? '#333336' : '#d2d2d7'} strokeWidth="1"
          strokeDasharray="1 6" className="rotate-slow"
          style={{ transformOrigin: `${cx}px ${cy}px` }} />

        {segments.map((seg, i) => {
          const start = i * 90 + gap;
          const end = (i + 1) * 90 - gap;
          const arcPath = describeArc(start, end, outerR) +
            ` L ${polar(innerR, end).x} ${polar(innerR, end).y}` +
            ` A ${innerR} ${innerR} 0 0 1 ${polar(innerR, start).x} ${polar(innerR, start).y} Z`;
          const midAngle = (start + end) / 2;
          const labelPos = polar((outerR + innerR) / 2, midAngle);

          return (
            <g key={i} style={{ opacity: vis ? 1 : 0, transition: `opacity 0.7s ease ${i * 0.15}s` }}>
              <path d={arcPath} fill={seg.color} fillOpacity="0.1"
                stroke={seg.color} strokeWidth="1.5" strokeOpacity="0.7" />
              <text x={labelPos.x} y={labelPos.y - 4} textAnchor="middle" dominantBaseline="middle"
                fontSize="36" fontWeight="700" fill={seg.color}
                fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">
                {seg.label}
              </text>
              <text x={labelPos.x} y={labelPos.y + 22} textAnchor="middle" dominantBaseline="middle"
                fontSize="10" fontWeight="500"
                fill={dark ? '#86868b' : '#86868b'}
                fontFamily="-apple-system, sans-serif" letterSpacing="0.1em">
                {seg.ru.toUpperCase()}
              </text>
            </g>
          );
        })}

        {[0, 90, 180, 270].map((angle, i) => {
          const p = polar(outerR + 20, angle + 4);
          return (
            <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={segments[i].color}
              style={{ opacity: vis ? 1 : 0, transition: `opacity 0.4s ease ${0.8 + i * 0.15}s` }} />
          );
        })}

        <circle cx={cx} cy={cy} r={innerR - 8} fill="none"
          stroke={dark ? '#333336' : '#d2d2d7'} strokeWidth="1" strokeDasharray="2 4" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-[0.6rem] tracking-[0.3em] uppercase mb-2"
            style={{ color: dark ? '#86868b' : '#86868b' }}>
            Cycle
          </div>
          <div className="text-5xl font-bold"
            style={{ color: dark ? '#f5f5f7' : '#1d1d1f', letterSpacing: '-0.05em' }}>
            ∞
          </div>
        </div>
      </div>
    </div>
  );
}