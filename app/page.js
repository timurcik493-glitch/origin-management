import Breadcrumbs from "./components/Breadcrumbs";
import Link from "next/link";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import LineChart from "./components/LineChart";
import DonutChart from "./components/DonutChart";
import SplitWords from "./components/SplitWords";

export default function Home() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        <Breadcrumbs />
        {/* HEADER */}
        <Reveal>
          <div className="flex justify-between items-start flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-medium tracking-widest text-[var(--ink-3)] uppercase mb-4">
                Обзор курса · 2026
              </div>
              <SplitWords
                text="Энциклопедия менеджмента"
                tag="h1"
                className="text-3xl md:text-4xl font-bold mb-6"
              />
              <p className="text-[var(--ink-2)] max-w-2xl">
                Полный образовательный курс: от классических школ до Agile.
                Пятнадцать разделов, интерактивные схемы, графики и тесты.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/basics" className="btn">Начать курс →</Link>
            </div>
          </div>
        </Reveal>

        {/* STAT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { title: "Разделов курса", value: "15", trend: "+3", trendSub: "новых в 2026", up: true },
            { title: "Терминов в глоссарии", value: "87", trend: "+12", trendSub: "за месяц", up: true },
            { title: "Схем и графиков", value: "42", trend: "+5", trendSub: "интерактивных", up: true },
            { title: "Лет истории", value: "115", trend: "1911—2026", trendSub: "", up: true },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="stat-card">
                <div className="stat-card-head">
                  <div className="stat-card-title">{s.title}</div>
                  <div className="stat-card-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3v18h18M9 17V9m6 8V5m6 12v-6" />
                    </svg>
                  </div>
                </div>
                <div className="stat-card-value">
                  <Counter to={parseInt(s.value)} />
                  {s.value.includes('—') && <span style={{ fontSize: '1.1rem' }}> {s.value}</span>}
                </div>
                <div className={`stat-card-trend ${s.up ? 'up' : 'down'}`}>
                  {s.up ? '▲' : '▼'} {s.trend}
                  {s.trendSub && <span className="stat-card-trend-sub">{s.trendSub}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* БОЛЬШОЙ ГРАФИК */}
        <Reveal delay={200}>
          <div className="card mb-6">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <div>
                <h2 className="text-lg font-semibold mb-2">Эволюция управленческой мысли</h2>
                <p className="text-sm text-[var(--ink-3)]">Рост значимости менеджмента · 1911—2026</p>
              </div>
              <div className="badge">
                <span className="badge-dot"></span>
                +340% за 100 лет
              </div>
            </div>
            <LineChart
              data={[
                { y: '1911', v: 10 },
                { y: '1930', v: 22 },
                { y: '1950', v: 38 },
                { y: '1970', v: 55 },
                { y: '1990', v: 72 },
                { y: '2010', v: 88 },
                { y: '2026', v: 100 }
              ]}
              height={260}
              color="#e8a78d"
            />
          </div>
        </Reveal>

        {/* ДВЕ КАРТОЧКИ ВНИЗУ */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <Reveal delay={300}>
            <div className="card h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Структура курса</h2>
                <span className="text-xs text-[var(--ink-3)]">15 разделов</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <DonutChart
                  segments={[
                    { v: 20, color: '#e8a78d' },
                    { v: 25, color: '#d99578' },
                    { v: 20, color: '#b8b8b8' },
                    { v: 20, color: '#6b6b6b' },
                    { v: 15, color: '#404040' },
                  ]}
                  size={160}
                  thickness={22}
                  centerLabel="15"
                  centerSub="разделов"
                />
                <div className="flex-1 w-full">
                  {[
                    { l: 'Основы', v: 20, c: '#e8a78d' },
                    { l: 'Организация', v: 25, c: '#d99578' },
                    { l: 'Люди', v: 20, c: '#b8b8b8' },
                    { l: 'Стратегия', v: 20, c: '#6b6b6b' },
                    { l: 'Справочник', v: 15, c: '#404040' },
                  ].map((x) => (
                    <div key={x.l} className="flex items-center justify-between mb-2.5 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: x.c }}></span>
                        <span className="text-[var(--ink-2)]">{x.l}</span>
                      </div>
                      <span className="mono text-[var(--ink-3)]">{x.v}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="card h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Быстрый старт</h2>
                <Link href="/basics" className="link-arrow text-sm">Начать</Link>
              </div>
              <div className="space-y-3">
                {[
                  { n: '01', t: 'Основы менеджмента', d: 'Что такое управление и зачем оно', href: '/basics' },
                  { n: '02', t: 'Функции управления', d: 'Планирование, организация, мотивация, контроль', href: '/functions' },
                  { n: '03', t: 'Стратегический менеджмент', d: 'Миссия, SWOT, стратегическое планирование', href: '/strategy' },
                  { n: '04', t: 'Современный менеджмент', d: 'Agile, Lean, цифровая трансформация', href: '/modern' },
                ].map((x, i) => (
                  <Link
                    key={x.n}
                    href={x.href}
                    className="block p-3 rounded-lg border border-[var(--line)] hover:border-[var(--accent)] hover:bg-[var(--bg-3)] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="mono text-xs font-semibold text-[var(--accent)] w-8">{x.n}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm mb-0.5 group-hover:text-[var(--accent)] transition-colors">{x.t}</div>
                        <div className="text-xs text-[var(--ink-3)]">{x.d}</div>
                      </div>
                      <div className="text-[var(--ink-3)] group-hover:text-[var(--accent)] transition-colors">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ЧТО ВНУТРИ */}
        <Reveal delay={500}>
          <div className="card">
            <h2 className="text-lg font-semibold mb-2">Что вы найдёте на платформе</h2>
            <p className="text-sm text-[var(--ink-3)] mb-6">Три ключевых принципа</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: '01', t: 'Глубокая теория', d: 'Каждый раздел — не поверхностное определение, а полноценный материал с классификациями, примерами и выводами.' },
                { n: '02', t: 'Живые визуализации', d: 'Схемы, графики, таймлайны и таблицы, которые прорисовываются при скролле и реагируют на курсор.' },
                { n: '03', t: 'Проверка знаний', d: 'Тесты после крупных тем с подробным разбором правильных ответов.' },
              ].map((x, i) => (
                <div key={x.n}>
                  <div className="mono text-xs font-semibold text-[var(--accent)] mb-2">{x.n}</div>
                  <h3 className="font-semibold mb-2">{x.t}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}