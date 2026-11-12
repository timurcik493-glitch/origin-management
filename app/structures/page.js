'use client';
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import OrgStructure from "../components/OrgStructure";

const TYPES = [
  {
    key: 'linear',
    title: 'Линейная',
    desc: 'Прямая вертикаль власти: каждый подчинённый имеет ровно одного руководителя',
    pros: ['Простота и чёткость', 'Быстрые решения', 'Персональная ответственность'],
    cons: ['Высокая нагрузка на руководителя', 'Медленная реакция на изменения', 'Нужны универсалы'],
    when: 'Малый бизнес, армия, линейное производство',
  },
  {
    key: 'functional',
    title: 'Функциональная',
    desc: 'Разделение по функциям: финансы, производство, маркетинг — у каждой свой руководитель',
    pros: ['Глубокая специализация', 'Высокое качество в каждой области', 'Ясная экспертиза'],
    cons: ['Медленные кросс-функциональные решения', 'Размытая ответственность', 'Ведомственность'],
    when: 'Средний бизнес, стабильные отрасли, производство',
  },
  {
    key: 'divisional',
    title: 'Дивизиональная',
    desc: 'Компания делится на автономные дивизионы: по продуктам, регионам или клиентам',
    pros: ['Быстрая реакция на рынок', 'Ответственность за результат', 'Фокус на клиенте'],
    cons: ['Дублирование функций', 'Сложная координация', 'Риск конкуренции дивизионов'],
    when: 'Крупные корпорации, многопродуктовые компании, международный бизнес',
  },
  {
    key: 'matrix',
    title: 'Матричная',
    desc: 'Сотрудник подчиняется и функциональному руководителю, и руководителю проекта',
    pros: ['Гибкость', 'Эффективное использование ресурсов', 'Быстрая адаптация'],
    cons: ['Двойное подчинение', 'Конфликты приоритетов', 'Высокие требования к коммуникации'],
    when: 'IT-компании, консалтинг, проектные организации',
  },
];

export default function Structures() {
  const [activeType, setActiveType] = useState('linear');
  const active = TYPES.find(t => t.key === activeType);

  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 04 · Структуры</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Организационные структуры
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Как компании выстраивают иерархию, распределяют полномочия и
              организуют взаимодействие между отделами.
            </p>
          </div>
        </Reveal>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ТИПОВ */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {TYPES.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveType(t.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  activeType === t.key
                    ? 'bg-[var(--accent-bg)] border-[var(--accent)] text-[var(--accent)]'
                    : 'bg-[var(--card)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-2)]'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </section>

        {/* СХЕМА АКТИВНОГО ТИПА */}
        <section className="mb-8">
          <div className="grid lg:grid-cols-2 gap-4">
            <Reveal>
              <div className="card">
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-3">
                  Схема · {active.title}
                </div>
                <OrgStructure type={active.key} />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card h-full">
                <h3 className="text-xl font-bold mb-2">{active.title}</h3>
                <p className="text-sm text-[var(--ink-2)] mb-5 leading-relaxed">
                  {active.desc}
                </p>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-3)] mb-2">
                  Когда применять
                </div>
                <p className="text-sm text-[var(--ink-2)]">
                  {active.when}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ПЛЮСЫ И МИНУСЫ */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="pc-block plus">
              <div className="pc-head plus">
                <span style={{ fontSize: '1rem' }}>+</span>
                Преимущества
              </div>
              <ul className="pc-list">
                {active.pros.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div className="pc-block minus">
              <div className="pc-head minus">
                <span style={{ fontSize: '1rem' }}>−</span>
                Недостатки
              </div>
              <ul className="pc-list">
                {active.cons.map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* СРАВНИТЕЛЬНАЯ ТАБЛИЦА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Сравнение всех типов</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Быстрый выбор структуры под задачи компании
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Структура</th>
                    <th>Уровней управления</th>
                    <th>Скорость решений</th>
                    <th>Гибкость</th>
                    <th>Сложность</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: 'Линейная', l: '3–4', sp: 'Высокая', f: 'Низкая', c: 'Низкая' },
                    { s: 'Функциональная', l: '3–5', sp: 'Средняя', f: 'Средняя', c: 'Средняя' },
                    { s: 'Дивизиональная', l: '4–6', sp: 'Высокая', f: 'Высокая', c: 'Высокая' },
                    { s: 'Матричная', l: '2–3', sp: 'Высокая', f: 'Очень высокая', c: 'Очень высокая' },
                  ].map(r => (
                    <tr key={r.s}>
                      <td>{r.s}</td>
                      <td className="mono text-xs">{r.l}</td>
                      <td>{r.sp}</td>
                      <td>{r.f}</td>
                      <td>{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ВЫВОД */}
        <section className="mb-10">
          <Reveal>
            <div className="card card-accent">
              <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                Главное из раздела
              </div>
              <ul className="space-y-2 text-sm text-[var(--ink-2)]">
                <li>· Нет «лучшей» структуры — есть подходящая под задачу и размер компании.</li>
                <li>· Малый бизнес чаще работает на линейной, крупный — на дивизиональной.</li>
                <li>· Матричная структура — самая гибкая, но и самая требовательная к культуре.</li>
                <li>· Структура меняется вместе с ростом компании — это нормально.</li>
              </ul>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/functions" className="link-arrow text-sm">← Функции</Link>
            <Link href="/leadership" className="btn">Далее: Лидерство →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}