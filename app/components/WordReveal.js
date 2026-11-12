'use client';
import { useEffect, useRef, useState } from 'react';

export default function WordReveal({ text, className = '', delay = 0, stagger = 60, tag = 'h1' }) {
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

  const Tag = tag;
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '0.28em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: vis ? 'translateY(0)' : 'translateY(105%)',
              opacity: vis ? 1 : 0,
              transition: `transform 0.8s cubic-bezier(0.19,1,0.22,1) ${delay + i * stagger}ms, opacity 0.8s ease ${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}