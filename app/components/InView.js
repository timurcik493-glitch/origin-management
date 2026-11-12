'use client';
import { useEffect, useRef, useState } from 'react';

export default function InView({ children, className = '', threshold = 0.15, once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (once) obs.disconnect();
      } else if (!once) {
        setVisible(false);
      }
    }, { threshold, rootMargin: '0px 0px -80px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <div ref={ref} className={`${className} ${visible ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}