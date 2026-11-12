'use client';
import { useState } from 'react';

export default function SWOTMatrix() {
  const [active, setActive] = useState('s');
  const data = {
    s: {
      title: 'Strengths',
      ru: 'Сильные стороны',
      hint: 'Что у нас получается лучше всех — внутри',
      items: ['Сильная команда', 'Уникальная технология', 'Узнаваемый бренд', 'Эффективные процессы'],
    },
    w: {
      title: 'Weaknesses',
      ru: 'Слабые стороны',
      hint: 'Где мы уязвимы — внутри',
      items: ['Узкое место в производстве', 'Кадровый голод', 'Зависимость от поставщика', 'Слабая аналитика'],
    },
    o: {
      title: 'Opportunities',
      ru: 'Возможности',
      hint: 'Что можно использовать — снаружи',
      items: ['Новый рынок', 'Технологический тренд', 'Изменение законодательства', 'Уход конкурента'],
    },
    t: {
      title: 'Threats',
      ru: 'Угрозы',
      hint: 'Что может навредить — снаружи',
      items: ['Новый конкурент', 'Санкции', 'Падение спроса', 'Новая технология'],
    },
  };

  return (
    <div>
      <div className="swot-grid">
        {Object.entries(data).map(([k, d]) => (
          <div
            key={k}
            className={`swot-cell ${k}`}
            onClick={() => setActive(k)}
            style={{ cursor: 'pointer' }}
          >
            <div className="swot-letter">{k.toUpperCase()}</div>
            <div className="swot-title">{d.ru}</div>
            <div className="swot-sub">{d.title}</div>
            <ul className="swot-list">
              {d.items.slice(0, 3).map((it) => <li key={it}>· {it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="card mt-4">
        <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-2">
          {data[active].title} · {data[active].ru}
        </div>
        <p className="text-sm text-[var(--ink-2)] mb-3">{data[active].hint}</p>
        <ul className="space-y-1.5">
          {data[active].items.map((it) => (
            <li key={it} className="text-sm text-[var(--ink-2)] flex gap-2">
              <span className="text-[var(--accent)]">·</span>{it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}