'use client';
import { useState } from 'react';

const MASLOW = [
  {
    n: 1,
    title: 'Физиологические',
    sub: 'Еда, сон, зарплата, комфорт',
    width: 100,
    hint: 'Зарплата выше прожиточного минимума, оплата обедов, ДМС, эргономичные рабочие места, гибкий график с перерывами',
  },
  {
    n: 2,
    title: 'Безопасность',
    sub: 'Стабильность, защищённость',
    width: 88,
    hint: 'Официальное трудоустройство, стабильные выплаты в срок, охрана труда, долгосрочные контракты, пенсионные отчисления',
  },
  {
    n: 3,
    title: 'Социальные',
    sub: 'Команда, дружба, принадлежность',
    width: 75,
    hint: 'Командные тренинги, тимбилдинг, корпоративы, наставничество, чаты и клубы по интересам',
  },
  {
    n: 4,
    title: 'Признание',
    sub: 'Уважение, статус, достижения',
    width: 62,
    hint: 'Доска почёта, премии за достижения, публичная похвала на встречах, звание «сотрудник месяца»',
  },
  {
    n: 5,
    title: 'Самореализация',
    sub: 'Рост, творчество, потенциал',
    width: 50,
    hint: 'Обучение за счёт компании, гранты на исследования, выступления на конференциях, сложные проекты',
  },
];

export default function MaslowWithHints() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-1">
        {[...MASLOW].reverse().map((m) => (
          <div
            key={m.n}
            onMouseEnter={() => setHovered(m.n)}
            onMouseLeave={() => setHovered(null)}
            style={{ width: `${m.width}%` }}
            className={`maslow-level transition-all duration-300 cursor-pointer ${
              hovered === m.n ? 'scale-105 border-[var(--accent)] bg-[var(--accent-bg)]' : ''
            }`}
          >
            <div className="maslow-num">УРОВЕНЬ {m.n}</div>
            <div className="maslow-title">{m.title}</div>
            <div className="maslow-sub">{m.sub}</div>
            {hovered === m.n && (
              <div className="mt-2 pt-2 border-t border-[var(--accent)]/30 text-xs text-[var(--ink-2)] leading-relaxed animate-fadeIn">
                <span className="text-[var(--accent)] font-semibold">Как закрыть: </span>
                {m.hint}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-[var(--ink-3)]">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
          Наведи на уровень — увидишь пример из бизнеса
        </span>
      </div>
    </div>
  );
}