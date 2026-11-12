'use client';
import { useEffect, useRef, useState } from 'react';

export default function StickyScroll({ children, height = '300vh' }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className="sticky-wrap" style={{ height }}>
      <div className="sticky-pin">
        {typeof children === 'function' ? children(progress) : children}
      </div>
    </div>
  );
}