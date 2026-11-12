import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import BarsChart from "../components/BarsChart";
import DonutChart from "../components/DonutChart";

export default function Styles() {
  const styles = [
    {
      code: "S-01",
      name: "Авторитарный",
      en: "Autocratic",
      color: "var(--magenta)",
      tagline: "Решение принимает руководитель",
      decision: "Руководитель",
      speed: 95,
      control: 90,
      freedom: 15,
      pros: ["Быстрые решения", "Чёткая дисциплина", "Незаменим в кризисе"],
      cons: ["Подавляет инициативу", "Растёт текучка", "Страх ошибиться"],
      use: "Кризис, новички в команде, жёсткий дедлайн",
    },
    {
      code: "S-02",
      name: "Демократический",
      en: "Democratic",
      color: "var(--cyan)",
      tagline: "Решение принимается совместно",
      decision: "Совместно",
      speed: 55,
      control: 60,
      freedom: 70,
      pros: ["Вовлечённость команды", "Разные точки зрения", "Лояльность людей"],
      cons: ["Медленнее решения", "Риск «согласия ради согласия»", "Нужны зрелые сотрудники"],
      use: "Стратегические сессии, внедрение изменений, зрелая команда",
    },
    {
      code: "S-03",
      name: "Либеральный",
      en: "Laissez-faire",
      color: "var(--lime)",
      tagline: "Команда решает сама",
      decision: "Команда",
      speed: 40,
      control: 25,
      freedom: 95,
      pros: ["Максимум свободы", "Идеален для экспертов", "Творчество и рост"],
      cons: ["Риск хаоса", "Новички теряются", "Сложно контролировать"],
      use: "Экспертные команды, R&D, творческие проекты",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#ff2d9b] opacity-[0.12] -top-40 -right-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--magenta)] pulse-dot"></span>
              Chapter 03 · Leadership
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 max-w-4xl tracking-tight">
              Стили лидерства<br /><span className="gradient-text">и уровни управления</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-[var(--ink-soft)] max-w-2xl leading-relaxed">
              Как разные руководители принимают решения — и когда какой стиль уместен.
              Модель Курта Левина и ситуационный подход Херси-Бланшара.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 — УРОВНИ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">01 · Hierarchy</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Уровни менеджмента</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Чем выше уровень — тем больше стратегии и меньше операционки.
              Каждый уровень требует своего горизонта планирования.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "60px 2fr 3fr 120px" }}>
              <span>Lvl</span>
              <span>Level</span>
              <span>Focus</span>
              <span>Horizon</span>
            </div>
            {[
              { n: "L1", en: "Top Management", ru: "Топ-менеджмент", f: "CEO · Board · C-level", d: "Стратегия, миссия, ключевые решения, M&A", tag: "3–10 лет", cls: "tag-magenta" },
              { n: "L2", en: "Middle Management", ru: "Средний менеджмент", f: "Department Heads", d: "Тактика, координация команд, KPI отделов", tag: "6 мес – 3 года", cls: "tag-violet" },
              { n: "L3", en: "Line Management", ru: "Линейный менеджмент", f: "Team Leads", d: "Операционные задачи, ежедневный контроль", tag: "Дни – недели", cls: "tag-cyan" },
              { n: "L4", en: "Individual Contributors", ru: "Специалисты", f: "Experts", d: "Реализация конкретных задач, экспертиза", tag: "Сегодня", cls: "tag-lime" },
            ].map((l, i) => (
              <div key={l.n} className="table-row-modern"
                   style={{ gridTemplateColumns: "60px 2fr 3fr 120px", animationDelay: `${i * 0.08}s` }}>
                <div className="cell-num mono">{l.n}</div>
                <div className="cell-title">{l.en}<small>{l.ru} · {l.f}</small></div>
                <div className="cell-desc">{l.d}</div>
                <span className={`cell-tag ${l.cls}`}>{l.tag}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 02 — 3 СТИЛЯ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">02 · Kurt Lewin · 1939</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Три классических стиля</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Курт Левин описал три модели поведения лидера. Нет «лучшего» стиля —
              есть подходящий под ситуацию и зрелость команды.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {styles.map((s, i) => (
            <Reveal key={s.code} delay={i * 150}>
              <div className="card p-7 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="mono text-xs font-bold tracking-widest" style={{ color: s.color }}>{s.code}</div>
                  <div className="mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">{s.en}</div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
                <p className="text-sm text-[var(--ink-soft)] mb-6 italic">«{s.tagline}»</p>

                {/* Мини-метрики */}
                <div className="space-y-3 mb-6">
                  {[
                    { l: "Скорость", v: s.speed },
                    { l: "Контроль", v: s.control },
                    { l: "Свобода", v: s.freedom },
                  ].map(m => (
                    <div key={m.l}>
                      <div className="flex justify-between text-[0.7rem] mb-1">
                        <span className="text-[var(--muted)]">{m.l}</span>
                        <span className="mono font-bold" style={{ color: s.color }}>{m.v}</span>
                      </div>
                      <div className="bar-track h-1.5">
                        <div className="h-full rounded-full bar-fill"
                          style={{ width: `${m.v}%`, background: s.color, boxShadow: `0 0 8px ${s.color}80` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[var(--line)] pt-4 mb-4">
                  <div className="text-[0.65rem] uppercase tracking-widest text-[var(--lime)] mb-2">+ Плюсы</div>
                  <ul className="space-y-1 mb-4">
                    {s.pros.map(p => (
                      <li key={p} className="text-xs text-[var(--ink-soft)] flex gap-2">
                        <span style={{ color: s.color }}>·</span>{p}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[0.65rem] uppercase tracking-widest text-[var(--magenta)] mb-2">− Минусы</div>
                  <ul className="space-y-1">
                    {s.cons.map(c => (
                      <li key={c} className="text-xs text-[var(--ink-soft)] flex gap-2">
                        <span style={{ color: s.color }}>·</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-[var(--line)]">
                  <div className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">Когда уместен</div>
                  <p className="text-xs text-[var(--ink)] leading-relaxed">{s.use}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 03 — СРАВНЕНИЕ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">03 · Comparison</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Сравнение стилей</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Быстрый выбор под ситуацию — по 5 критериям
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr" }}>
              <span>Criterion</span>
              <span style={{ color: 'var(--magenta)' }}>Autocratic</span>
              <span style={{ color: 'var(--cyan)' }}>Democratic</span>
              <span style={{ color: 'var(--lime)' }}>Laissez-faire</span>
            </div>
            {[
              { c: "Кто решает", a: "Руководитель", d: "Совместно", l: "Команда" },
              { c: "Скорость решений", a: "Высокая", d: "Средняя", l: "Зависит от команды" },
              { c: "Уровень контроля", a: "Жёсткий", d: "Гибкий", l: "Минимальный" },
              { c: "Инициатива", a: "Подавляется", d: "Поощряется", l: "Полная свобода" },
              { c: "Когда хорош", a: "Кризис, новички", d: "Изменения, стратегия", l: "Эксперты, креатив" },
            ].map((r, i) => (
              <div key={r.c} className="table-row-modern"
                   style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr", animationDelay: `${i * 0.06}s` }}>
                <div className="cell-title">{r.c}</div>
                <div className="cell-desc">{r.a}</div>
                <div className="cell-desc">{r.d}</div>
                <div className="cell-desc">{r.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 04 — СИТУАЦИОННЫЙ ПОДХОД */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div>
              <div className="eyebrow mb-3">04 · Situational</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Когда какой стиль</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Ситуационный подход Херси-Бланшара: стиль выбирается под зрелость
                команды и сложность задачи, а не по личным предпочтениям.
              </p>
              <div className="quote-block">
                Не бывает плохих или хороших стилей. Бывает стиль, не соответствующий ситуации.
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-6">
              <div className="mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Effective style by situation</div>
              <div className="text-xl font-bold mb-6">Эффективность · %</div>
              <BarsChart
                data={[
                  { l: 'Кризис', v: 95 },
                  { l: 'Стратегия', v: 88 },
                  { l: 'Эксперты', v: 92 },
                  { l: 'Новички', v: 85 },
                  { l: 'Творчество', v: 78 },
                ]}
                height={220}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — РАСПРЕДЕЛЕНИЕ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">05 · Distribution</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Какой стиль используют</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Распределение стилей в реальных компаниях (по исследованиям Gallup)
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card p-6">
              <div className="mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)] mb-2">Style distribution</div>
              <div className="text-xl font-bold mb-4">Распределение в %</div>
              <div className="flex justify-center">
                <DonutChart
                  segments={[
                    { v: 45, color: '#ff2d9b' },
                    { v: 35, color: '#00e5ff' },
                    { v: 20, color: '#a3ff12' },
                  ]}
                  size={200}
                  thickness={22}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-6 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff2d9b]"></span>
                  <span className="text-[var(--ink-soft)]">Авторитарный</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00e5ff]"></span>
                  <span className="text-[var(--ink-soft)]">Демократический</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#a3ff12]"></span>
                  <span className="text-[var(--ink-soft)]">Либеральный</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {[
                { n: 45, l: "авторитарный", c: "var(--magenta)" },
                { n: 35, l: "демократический", c: "var(--cyan)" },
                { n: 20, l: "либеральный", c: "var(--lime)" },
                { n: 3, l: "стиля Левина", c: "var(--violet)" },
              ].map((s, i) => (
                <div key={s.l} className="stat-box p-5 flex flex-col justify-center">
                  <div className="text-4xl font-extrabold mb-1" style={{ color: s.c }}>
                    <Counter to={s.n} suffix={i < 3 ? "%" : ""} />
                  </div>
                  <div className="mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* NAV */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-8">
        <Reveal>
          <div className="flex justify-between items-center pt-8 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/models" className="link-underline text-sm text-[var(--ink-soft)] hover:text-[var(--cyan)]">← Frameworks</Link>
            <Link href="/about" className="btn btn-primary">Next → About</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}