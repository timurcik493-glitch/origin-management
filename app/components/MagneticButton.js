'use client';
import { useEffect } from 'react';

export default function MagneticButtons() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.btn, .btn-secondary, .link-arrow');

    const handlers = [];
    buttons.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const onLeave = () => {
        btn.style.transform = '';
      };
      btn.classList.add('btn-magnetic');
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      handlers.push({ btn, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ btn, onMove, onLeave }) => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return null;
}