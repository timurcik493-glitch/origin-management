'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TiltAuto() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.stat-card, .mini-card, .theorist, .style-card, .metric-box');

      const handlers = [];
      els.forEach((el) => {
        if (el.dataset.tilt) return;
        el.dataset.tilt = '1';
        el.classList.add('tilt-auto');

        const onMove = (e) => {
          const r = el.getBoundingClientRect();
          const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
          el.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateY(-3px)`;
          el.style.setProperty('--mx', `${(e.clientX - r.left)}px`);
          el.style.setProperty('--my', `${(e.clientY - r.top)}px`);
        };
        const onLeave = () => {
          el.style.transform = '';
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        handlers.push({ el, onMove, onLeave });
      });

      return () => {
        handlers.forEach(({ el, onMove, onLeave }) => {
          el.removeEventListener('mousemove', onMove);
          el.removeEventListener('mouseleave', onLeave);
        });
      };
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}