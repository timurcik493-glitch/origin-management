'use client';
import { useEffect, useState } from 'react';

export default function SidebarProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Вертикальная линия прогресса вдоль правого края сайдбара */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '2px',
          height: `${pct}%`,
          background: 'var(--accent)',
          transition: 'height 0.1s linear',
          boxShadow: '0 0 10px rgba(232,167,141,0.6)',
          zIndex: 45,
          pointerEvents: 'none',
        }}
      />
      {/* Маленький индикатор с процентами снизу */}
      <div
        style={{
          position: 'absolute',
          right: '8px',
          top: `calc(${pct}% - 20px)`,
          transform: 'translateY(-50%)',
          background: 'var(--bg-2)',
          border: '1px solid var(--line-2)',
          borderRadius: '4px',
          padding: '2px 6px',
          fontSize: '0.6rem',
          fontFamily: 'JetBrains Mono, monospace',
          color: 'var(--accent)',
          transition: 'top 0.1s linear',
          zIndex: 46,
          pointerEvents: 'none',
          opacity: pct > 3 && pct < 97 ? 1 : 0,
        }}
      >
        {Math.round(pct)}%
      </div>
    </>
  );
}