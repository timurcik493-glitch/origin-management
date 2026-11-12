'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const PAGES = [
  { href: '/', label: 'Введение', type: 'page' },
  { href: '/basics', label: 'Основы менеджмента', type: 'chapter' },
  { href: '/history', label: 'История управления', type: 'chapter' },
  { href: '/functions', label: 'Функции менеджмента', type: 'chapter' },
  { href: '/structures', label: 'Орг. структуры', type: 'chapter' },
  { href: '/leadership', label: 'Лидерство', type: 'chapter' },
  { href: '/personnel', label: 'Персонал', type: 'chapter' },
  { href: '/motivation', label: 'Мотивация', type: 'chapter' },
  { href: '/communications', label: 'Коммуникации', type: 'chapter' },
  { href: '/conflicts', label: 'Конфликты', type: 'chapter' },
  { href: '/decisions', label: 'Решения', type: 'chapter' },
  { href: '/strategy', label: 'Стратегия', type: 'chapter' },
  { href: '/projects', label: 'Проекты', type: 'chapter' },
  { href: '/control', label: 'Контроль и KPI', type: 'chapter' },
  { href: '/modern', label: 'Современный менеджмент', type: 'chapter' },
  { href: '/glossary', label: 'Глоссарий', type: 'reference' },
  { href: '/quiz', label: 'Тесты', type: 'reference' },
];

const KEYWORDS = {
  '/basics': ['определение', 'функции', 'файоль', 'принципы', 'уровни', 'цели'],
  '/history': ['тейлор', 'мэйо', 'дракер', 'деминг', 'портер', 'школы', 'эволюция'],
  '/functions': ['планирование', 'организация', 'мотивация', 'контроль', 'цикл', 'SMART'],
  '/structures': ['линейная', 'функциональная', 'дивизиональная', 'матричная', 'иерархия'],
  '/leadership': ['стили', 'авторитарный', 'демократический', 'либеральный', 'левин', 'ситуационный'],
  '/motivation': ['маслоу', 'герцберг', 'макгрегор', 'врум', 'макклелланд', 'пирамида'],
  '/strategy': ['SWOT', 'миссия', 'видение', 'стратегия', 'портер'],
  '/projects': ['gantt', 'этапы', 'жизненный цикл', 'риски', 'ресурсы'],
  '/modern': ['agile', 'lean', 'okr', 'digital', 'трансформация'],
};

export default function Search() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    if (open) document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [open]);

  const results = q.trim()
    ? PAGES.filter(p => {
        const matchLabel = p.label.toLowerCase().includes(q.toLowerCase());
        const kws = KEYWORDS[p.href] || [];
        const matchKw = kws.some(k => k.toLowerCase().includes(q.toLowerCase()));
        return matchLabel || matchKw;
      }).slice(0, 6)
    : [];

  return (
    <div className="search-box" onClick={(e) => e.stopPropagation()}>
      <svg className="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        className="search-input"
        placeholder="Поиск по сайту..."
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
      />
      {open && results.length > 0 && (
        <div className="search-results">
          {results.map(r => (
            <Link key={r.href} href={r.href} className="search-item" onClick={() => { setQ(''); setOpen(false); }}>
              {r.label}
              <span className="search-item-type">{r.type}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}