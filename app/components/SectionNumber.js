'use client';
import { useEffect, useRef, useState } from 'react';

export default function SectionNumber({ num, label }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '1rem',
        marginBottom: '0.75rem',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateX(0)' : 'translateX(-16px)',
        transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.19,1,0.22,1)',
      }}
    >
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '2.2rem',
          fontWeight: 700,
          color: 'var(--accent)',
          opacity: 0.35,
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}
      >
        {num}
      </span>
      <span
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--ink-3)',
        }}
      >
        {label}
      </span>
    </div>
  );
}