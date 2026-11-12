'use client';
import { useEffect, useRef, useState } from 'react';

export default function ParallaxImage({ children, className = '', speed = 0.3 }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const dist = center - vh / 2;
      setOffset(-dist * speed);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div style={{ transform: `translateY(${offset}px)`, transition: 'transform 0.1s linear' }}>
        {children}
      </div>
    </div>
  );
}