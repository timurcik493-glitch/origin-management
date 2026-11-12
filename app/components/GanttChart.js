'use client';
import { useEffect, useRef, useState } from 'react';

const PHASES = [
  { label: 'Инициация', start: 0, end: 12, color: '#e8a78d' },
  { label: 'Планирование', start: 10, end: 25, color: '#d99578' },
  { label: 'Проектирование', start: 22, end: 40, color: '#b8b8b8' },
  { label: 'Разработка', start: 38, end: 70, color: '#6b6b6b' },
  { label: 'Тестирование', start: 65, end: 82, color: '#3b82f6' },
  { label: 'Внедрение', start: 80, end: 95, color: '#10b981' },
  { label: 'Закрытие', start: 93, end: 100, color: '#8b5cf6' },
];

export default function GanttChart() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

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
      <div className="gantt">
        <div className="gantt-head">
          <div className="gantt-head-label">Этап</div>
          <div className="gantt-months">
            <span>М1</span><span>М2</span><span>М3</span><span>М4</span><span>М5</span><span>М6</span>
          </div>
        </div>
        {PHASES.map((p, i) => (
          <div key={p.label} className="gantt-row">
            <div className="gantt-label">{p.label}</div>
            <div className="gantt-track">
              <div
                className="gantt-bar"
                style={{
                  left: `${p.start}%`,
                  width: vis ? `${p.end - p.start}%` : '0%',
                  background: p.color,
                  transition: `width 1s cubic-bezier(0.19,1,0.22,1) ${i * 0.1}s`,
                }}
              >
                {p.end - p.start > 15 ? `${p.end - p.start}%` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}