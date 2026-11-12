'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Карта: селектор → data-anim
const TARGETS = [
  // Таблицы
  { sel: '.table-wrap', anim: 'table' },
  { sel: '.data-table-wrap', anim: 'table' },
  { sel: '.modern-table', anim: 'table' },
  // Пирамиды и уровни
  { sel: '.pyramid', anim: 'levels' },
  { sel: '.maslow-level', anim: 'pyramid' },
  // Таймлайны
  { sel: '.timeline-h', anim: 'timeline' },
  { sel: '.timeline-item', anim: 'timeline' },
  // Квадранты
  { sel: '.swot-grid', anim: 'quad' },
  { sel: '.tk-grid', anim: 'quad' },
  // Сетки карточек
  { sel: '.grid.md\\:grid-cols-2', anim: 'cards' },
  { sel: '.grid.md\\:grid-cols-3', anim: 'cards' },
  { sel: '.grid.lg\\:grid-cols-3', anim: 'cards' },
  { sel: '.grid.lg\\:grid-cols-4', anim: 'cards' },
  { sel: '.grid.md\\:grid-cols-4', anim: 'cards' },
  { sel: '.grid.grid-cols-2', anim: 'cards' },
  { sel: '.grid.grid-cols-4', anim: 'cards' },
];

export default function AutoAnimate() {
  const pathname = usePathname();

  useEffect(() => {
    // Даём DOM отрендериться
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );

      // Для каждого селектора находим элементы, помечаем data-anim и наблюдаем
      TARGETS.forEach(({ sel, anim }) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (el.dataset.anim) return; // уже обработан
          el.dataset.anim = anim;
          observer.observe(el);
        });
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}