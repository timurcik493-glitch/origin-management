'use client';
import Link from "next/link";
import { useState, useMemo } from "react";
import Reveal from "../components/Reveal";

const TERMS = [
  { t: 'Адаптация персонала', d: 'Процесс приспособления новых сотрудников к условиям работы, коллективу и культуре компании.', cat: 'Персонал' },
  { t: 'Agile', d: 'Набор гибких методологий разработки и управления, основанный на итерациях и обратной связи.', cat: 'Современный' },
  { t: 'BCG-матрица', d: 'Инструмент портфельного анализа, распределяющий продукты по двум осям: рост рынка и доля.', cat: 'Стратегия' },
  { t: 'Бюрократия', d: 'Система управления, основанная на формальных правилах, иерархии и чётком разделении ролей.', cat: 'Структуры' },
  { t: 'Видение', d: 'Образ желаемого будущего компании через 5–10 лет, вдохновляющий команду.', cat: 'Стратегия' },
  { t: 'Делегирование', d: 'Передача части полномочий и ответственности подчинённым при сохранении контроля.', cat: 'Лидерство' },
  { t: 'Дивизиональная структура', d: 'Структура, где компания делится на автономные подразделения по продукту, региону или клиенту.', cat: 'Структуры' },
  { t: 'KPI', d: 'Key Performance Indicators — ключевые показатели эффективности, измеряющие достижение целей.', cat: 'Контроль' },
  { t: 'Контроль', d: 'Функция управления: сравнение фактических результатов с планами и корректировка отклонений.', cat: 'Функции' },
  { t: 'Конфликт', d: 'Столкновение противоположных интересов, целей или взглядов у двух и более сторон.', cat: 'Конфликты' },
  { t: 'Lean', d: 'Бережливое производство: устранение всех потерь, создание только ценности для клиента.', cat: 'Современный' },
  { t: 'Лидерство', d: 'Способность влиять на людей и вести их за собой без опоры только на формальные полномочия.', cat: 'Лидерство' },
  { t: 'Матричная структура', d: 'Структура, где сотрудник подчиняется одновременно функциональному и проектному руководителю.', cat: 'Структуры' },
  { t: 'Менеджмент', d: 'Система принципов и методов управления организацией для достижения целей наиболее эффективно.', cat: 'Основы' },
  { t: 'Миссия', d: 'Смысл существования компании, её роль для клиентов, сотрудников и общества.', cat: 'Стратегия' },
  { t: 'Мотивация', d: 'Процесс побуждения сотрудников к действию через удовлетворение их потребностей.', cat: 'Функции' },
  { t: 'OKR', d: 'Objectives & Key Results — система амбициозных целей и измеримых результатов на квартал/год.', cat: 'Современный' },
  { t: 'PDCA', d: 'Цикл Деминга: Plan → Do → Check → Act — модель непрерывного улучшения.', cat: 'Современный' },
  { t: 'Пирамида Маслоу', d: 'Иерархия потребностей человека: от физиологических к самореализации.', cat: 'Мотивация' },
  { t: 'Планирование', d: 'Функция управления: постановка целей и определение путей их достижения.', cat: 'Функции' },
  { t: 'Портер, Майкл', d: 'Профессор Гарварда, автор модели 5 сил и теории конкурентных преимуществ.', cat: 'История' },
  { t: 'Проект', d: 'Временное предприятие, направленное на создание уникального продукта или услуги.', cat: 'Проекты' },
  { t: 'SMART', d: 'Критерии цели: Specific, Measurable, Achievable, Relevant, Time-bound.', cat: 'Функции' },
  { t: 'SWOT', d: 'Strengths, Weaknesses, Opportunities, Threats — инструмент стратегического анализа.', cat: 'Стратегия' },
  { t: 'Структура организации', d: 'Упорядоченная совокупность подразделений и связей между ними.', cat: 'Структуры' },
  { t: 'Тейлор, Фредерик', d: 'Основатель научного управления: хронометраж, стандарты, разделение труда.', cat: 'История' },
  { t: 'Управление', d: 'Процесс воздействия на объект для перевода его в желаемое состояние.', cat: 'Основы' },
  { t: 'Файоль, Анри', d: 'Автор 14 принципов и 5 функций управления — фундамент классической школы.', cat: 'История' },
  { t: 'Функции менеджмента', d: 'Планирование, организация, мотивация, контроль — основа управленческого цикла.', cat: 'Функции' },
  { t: 'Хоторнский эксперимент', d: 'Исследование Элтона Мэйо, показавшее важность человеческих отношений.', cat: 'История' },
  { t: 'Цель', d: 'Конкретный измеримый результат, которого нужно достичь в заданные сроки.', cat: 'Основы' },
  { t: 'Эффективность', d: 'Способность достигать целей с минимальными затратами ресурсов.', cat: 'Основы' },
];

const ALPHABET = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossary() {
  const [q, setQ] = useState('');
  const [letter, setLetter] = useState('');

  const filtered = useMemo(() => {
    let list = TERMS;
    if (q.trim()) {
      list = list.filter(t =>
        t.t.toLowerCase().includes(q.toLowerCase()) ||
        t.d.toLowerCase().includes(q.toLowerCase())
      );
    }
    if (letter) {
      list = list.filter(t => t.t[0].toUpperCase() === letter);
    }
    return list;
  }, [q, letter]);

  const availableLetters = useMemo(() => {
    const set = new Set(TERMS.map(t => t.t[0].toUpperCase()));
    return set;
  }, []);

  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Справочник · Глоссарий</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Глоссарий
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Основные термины и определения менеджмента. {TERMS.length} понятий
              с быстрым поиском и алфавитным фильтром.
            </p>
          </div>
        </Reveal>

        {/* ПОИСК */}
        <Reveal delay={100}>
          <div className="mb-4">
            <div className="search-box">
              <svg className="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                className="search-input"
                placeholder="Поиск термина или определения..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>
        </Reveal>

        {/* АЛФАВИТ */}
        <Reveal delay={150}>
          <div className="alphabet-bar">
            <button
              className={`alphabet-btn ${letter === '' ? 'active' : ''}`}
              onClick={() => setLetter('')}
              style={{ width: 'auto', padding: '0 0.75rem' }}
            >
              Все
            </button>
            {ALPHABET.slice(0, 33).map(l => (
              <button
                key={l}
                className={`alphabet-btn ${letter === l ? 'active' : ''}`}
                onClick={() => setLetter(letter === l ? '' : l)}
                disabled={!availableLetters.has(l)}
              >
                {l}
              </button>
            ))}
          </div>
        </Reveal>

        {/* СПИСОК */}
        <Reveal delay={200}>
          <div className="text-sm text-[var(--ink-3)] mb-3">
            Найдено: {filtered.length} из {TERMS.length}
          </div>
          <div className="card p-0 overflow-hidden">
            {filtered.length === 0 ? (
              <div className="p-8 text-center text-[var(--ink-3)]">
                Ничего не найдено. Попробуйте другой запрос.
              </div>
            ) : (
              filtered.map((t) => (
                <div key={t.t} className="glossary-item">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <div className="glossary-term">{t.t}</div>
                    <span className="text-[0.7rem] text-[var(--ink-4)] uppercase tracking-wider">{t.cat}</span>
                  </div>
                  <div className="glossary-def">{t.d}</div>
                </div>
              ))
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="flex justify-between items-center pt-6 mt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/modern" className="link-arrow text-sm">← Современный</Link>
            <Link href="/quiz" className="btn">Проверить знания →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}