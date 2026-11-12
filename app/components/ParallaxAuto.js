'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ParallaxAuto() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.stat-num, .stat-large .num, .big-number, .metric-box-val');
      els.forEach((el) => {
        if (el.dataset.parallax) return;
        el.dataset.parallax = '1';

        const parent = el.closest('.stat-card, .stat, .stat-large, .metric-box') || el;

        const update = () => {
          const rect = parent.getBoundingClientRect();
          const vh = window.innerHeight;
          const center = rect.top + rect.height / 2;
          const offset = (center - vh / 2) * -0.08;
          el.style.transform = `translateY(${offset}px)`;
        };
        const onScroll = () => requestAnimationFrame(update);

        el.style.transition = 'transform 0.1s linear';
        el.style.willChange = 'transform';
        window.addEventListener('scroll', onScroll, { passive: true });
        update();

        el._cleanup = () => window.removeEventListener('scroll', onScroll);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}