'use client';
import { useEffect, useRef, useState } from 'react';

const LEVELS = [
  {
    n: 1,
    title: 'Топ-менеджмент',
    sub: 'CEO · Совет директоров · C-level',
    desc: 'Стратегия компании, миссия, ключевые решения, M&A, отношения с инвесторами. Горизонт планирования: 3–10 лет.',
    width: '50%',
  },
  {
    n: 2,
    title: 'Средний менеджмент',
    sub: 'Руководители отделов и направлений',
    desc: 'Тактика, координация команд, KPI подразделений, распределение ресурсов между отделами. Горизонт: 6 месяцев – 3 года.',
    width: '70%',
  },
  {
    n: 3,
    title: 'Линейный менеджмент',
    sub: 'Тимлиды · Супервайзеры · Менеджеры проектов',
    desc: 'Операционное управление: ежедневные задачи, контроль исполнения, работа с людьми напрямую. Горизонт: дни – недели.',
    width: '90%',
  },
  {
    n: 4,
    title: 'Исполнители',
    sub: 'Специалисты · Сотрудники',
    desc: 'Реализация конкретных задач, экспертиза в своей области. Горизонт: сегодня, эта неделя.',
    width: '100%',
  },
];

export default function PyramidLevels() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="pyramid">
        {LEVELS.map((lvl, i) => (
          <div
            key={lvl.n}
            className="pyramid-level"
            style={{
              width: lvl.width,
              opacity: vis ? 1 : 0,
              transform: vis ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, border-color 0.3s, box-shadow 0.3s`,
              cursor: 'pointer',
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="pyramid-level-title">{lvl.title}</div>
            <div className="pyramid-level-sub">{lvl.sub}</div>
          </div>
        ))}
      </div>
      {active !== null && (
        <div className="card mt-4" style={{ borderColor: 'var(--accent)' }}>
          <div className="text-xs uppercase tracking-widest text-[var(--accent)] mb-2 font-semibold">
            Уровень {LEVELS[active].n}
          </div>
          <p className="text-sm text-[var(--ink-2)] leading-relaxed">
            {LEVELS[active].desc}
          </p>
        </div>
      )}
    </div>
  );
}