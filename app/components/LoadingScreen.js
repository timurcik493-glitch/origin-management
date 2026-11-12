'use client';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('origin_loaded')) {
      setHidden(true);
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem('origin_loaded', '1');
      setHidden(true);
    }, 2900);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="loading-screen">
      <div>
        {'ORIGIN'.split('').map((letter, i) => (
          <span key={i} className="loading-letter">{letter}</span>
        ))}
      </div>
      <div className="loading-line"></div>
      <div className="loading-sub">Энциклопедия менеджмента</div>
    </div>
  );
}