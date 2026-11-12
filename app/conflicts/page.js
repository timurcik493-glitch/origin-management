'use client';
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

const TK_MODES = [
  {
    key: 'compete',
    label: 'Compete',
    title: 'Соперничество',
    desc: 'Высокая настойчивость · Низкая кооперация. Удовлетворяю свои интересы в ущерб другому.',
    when: 'Кризис, срочное решение, 100% уверенность в своей правоте',
    class: '',
  },
  {
    key: 'collaborate',
    label: 'Collaborate',
    title: 'Сотрудничество',
    desc: 'Высокая настойчивость · Высокая кооперация. Ищу решение, устраивающее всех.',
    when: 'Обе стороны важны, есть время на поиск оптимального решения',
    class: 'optimal',
    best: 'Лучшее в долгую',
  },
  {
    key: 'avoid',
    label: 'Avoid',
    title: 'Избегание',
    desc: 'Низкая настойчивость · Низкая кооперация. Не вступаю в конфликт, откладываю.',
    when: 'Проблема незначима, эмоции накалены, нужен тайм-аут',
    class: '',
  },
  {
    key: 'compromise',
    label: 'Compromise',
    title: 'Компромисс',
    desc: 'Средняя настойчивость · Средняя кооперация. Каждая сторона отдаёт что-то.',
    when: 'Ограниченное время, равные силы сторон, нужно быстрое решение',
    class: '',
  },
  {
    key: 'accommodate',
    label: 'Accommodate',
    title: 'Приспособление',
    desc: 'Низкая настойчивость · Высокая кооперация. Уступаю, ставлю чужие интересы выше.',
    when: 'Вопрос не критичен, отношения важнее, вы неправы',
    class: '',
  },
];

export default function Conflicts() {
  const [active, setActive] = useState('collaborate');
  const activeMode = TK_MODES.find(m => m.key === active);

  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 09 · Конфликты</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Управление конфликтами
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Причины, виды и стратегии разрешения. Конфликт — это не всегда плохо.
              Вопрос в том, как им управлять.
            </p>
          </div>
        </Reveal>

        {/* ТИПЫ КОНФЛИКТОВ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Виды конфликтов</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Не все конфликты одинаковы — и не все вредны
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: 'Функциональные', d: 'Полезные. Приводят к улучшениям, новым идеям, снятию напряжения.', color: 'var(--green)' },
              { t: 'Дисфункциональные', d: 'Вредные. Разрушают команду, снижают эффективность, отнимают ресурсы.', color: 'var(--red)' },
              { t: 'Внутриличностные', d: 'Внутри человека: между «хочу» и «должен», между ценностями и реальностью.', color: 'var(--amber)' },
              { t: 'Межличностные', d: 'Между двумя людьми: разные цели, стили, ценности или ожидания.', color: 'var(--accent)' },
              { t: 'Межгрупповые', d: 'Между отделами: борьба за ресурсы, разные KPI, разная культура.', color: 'var(--accent)' },
              { t: 'Организационные', d: 'Системные: структура компании провоцирует конфликт между ролями.', color: 'var(--ink-2)' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80}>
                <div className="mini-card h-full" style={{ borderLeftColor: x.color, borderLeftWidth: '2px' }}>
                  <div className="mini-card-title mb-2" style={{ color: x.color }}>{x.t}</div>
                  <div className="mini-card-desc">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* СЕТКА ТОМАСА-КИЛМАННА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Сетка Томаса-Килманна</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Пять стратегий поведения в конфликте. Нажми на любую, чтобы увидеть
              подробности внизу.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="tk-grid">
              {TK_MODES.slice(0, 4).map((m) => (
                <div
                  key={m.key}
                  className={`tk-cell ${m.class} ${active === m.key ? 'active' : ''}`}
                  onClick={() => setActive(m.key)}
                >
                  <div className="tk-label">{m.label.toUpperCase()}</div>
                  <div className="tk-title">{m.title}</div>
                  <div className="tk-desc">{m.desc.split('.')[0]}.</div>
                  {m.best && <div className="tk-best">★ {m.best}</div>}
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="card">
              <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-2">
                Активная стратегия
              </div>
              <h3 className="text-xl font-bold mb-2">{activeMode.title}</h3>
              <p className="text-sm text-[var(--ink-2)] mb-4 leading-relaxed">{activeMode.desc}</p>
              <div className="pt-3 border-t border-[var(--line)] text-xs">
                <span className="font-semibold text-[var(--accent)]">Когда уместна: </span>
                <span className="text-[var(--ink-3)]">{activeMode.when}</span>
              </div>
            </div>
            <div
              className="card cursor-pointer"
              onClick={() => setActive('accommodate')}
              style={{
                borderColor: active === 'accommodate' ? 'var(--accent)' : 'var(--line)',
                background: active === 'accommodate' ? 'var(--accent-bg)' : 'var(--card)',
              }}
            >
              <div className="tk-label mb-2">{TK_MODES[4].label.toUpperCase()}</div>
              <div className="tk-title mb-2">{TK_MODES[4].title}</div>
              <p className="text-sm text-[var(--ink-3)] leading-relaxed">{TK_MODES[4].desc}</p>
            </div>
          </div>
        </section>

        {/* СТАДИИ КОНФЛИКТА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Стадии развития конфликта</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Любой конфликт проходит через 5 стадий — если не остановить раньше
            </p>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { n: '01', t: 'Зарождение', d: 'Противоречие существует, но не осознано' },
              { n: '02', t: 'Осознание', d: 'Стороны понимают, что интересы не совпадают' },
              { n: '03', t: 'Проявление', d: 'Открытое столкновение — слова, действия' },
              { n: '04', t: 'Эскалация', d: 'Конфликт углубляется, эмоции нарастают' },
              { n: '05', t: 'Разрешение', d: 'Спад или взрыв — зависит от управления' },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 80}>
                <div className="mini-card h-full relative">
                  <div className="mini-card-num">{x.n}</div>
                  <div className="mini-card-title mb-2">{x.t}</div>
                  <div className="mini-card-desc">{x.d}</div>
                  {i < 4 && (
                    <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[var(--ink-4)] z-10">→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ПРАКТИКА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Как разрешать конфликт</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Шаг 1. Отделите человека от проблемы', content: '«Ты плохой» — это оценка человека. «Твоё поведение X создаёт проблему Y» — это про проблему. Пока идёт атака на личность, поиск решения невозможен. Начните с конкретного факта.' },
              { title: 'Шаг 2. Соберите факты, а не эмоции', content: 'Что произошло? Когда? Что конкретно сказали? Без оценок «он всегда», «она никогда». Факты можно обсуждать, оценки — только оспаривать.' },
              { title: 'Шаг 3. Выясните настоящий интерес', content: 'Позиция: «я хочу, чтобы проект сдали в пятницу». Интерес: «я боюсь подвести клиента». Интересы за позицией — часто можно найти решение, которое удовлетворит и того, и другого.' },
              { title: 'Шаг 4. Привлеките нейтрального посредника', content: 'Если стороны не слышат друг друга — нужен медиатор. Это не «слабый» шаг, а профессиональный. HR, руководитель выше уровнем, внешний коуч — кто-то, кому доверяют обе стороны.' },
              { title: 'Шаг 5. Зафиксируйте договорённость', content: 'Что стороны договорились делать? Кто, что, когда. Без письменной фиксации конфликт часто вспыхивает снова через неделю по тем же причинам.' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/communications" className="link-arrow text-sm">← Коммуникации</Link>
            <Link href="/decisions" className="btn">Далее: Решения →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}