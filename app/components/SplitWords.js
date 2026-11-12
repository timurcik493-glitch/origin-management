'use client';
import { useEffect, useRef, useState } from 'react';

export default function SplitWords({ text, className = '', tag: Tag = 'h1' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`split-words ${visible ? 'is-visible' : ''} ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="split-word">
          <span>{w}</span>
        </span>
      ))}
    </Tag>
  );
}