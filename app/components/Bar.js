'use client';

import { useEffect, useRef, useState } from 'react';

export default function Bar({ pct, color = 'var(--gold)' }) {
  const ref = useRef(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setW(pct), 100);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="h-px md:h-[2px] bg-[var(--line)] w-full overflow-hidden">
      <div
        className="h-full bar-fill"
        style={{
          width: `${w}%`,
          background: color,
          transition: 'width 1.6s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      ></div>
    </div>
  );
}