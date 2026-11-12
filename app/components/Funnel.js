'use client';
import { useEffect, useRef, useState } from 'react';

export default function Funnel({ steps = [] }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const widths = [100, 85, 70, 55, 40, 28];

  return (
    <div ref={ref} className="funnel">
      {steps.map((step, i) => (
        <div
          key={i}
          className="funnel-step"
          style={{
            width: `${widths[i] || 40}%`,
            minWidth: '180px',
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateY(0)' : 'translateY(-8px)',
            transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s, border-color 0.3s`,
          }}
        >
          <div className="funnel-step-label">{step.label}</div>
          <div className="funnel-step-name">{step.name}</div>
          {step.value && <div className="funnel-step-value">{step.value}</div>}
        </div>
      ))}
    </div>
  );
}