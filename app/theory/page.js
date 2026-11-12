import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import DonutChart from "../components/DonutChart";
import LineChart from "../components/LineChart";

export default function Theory() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#22d3ee] opacity-[0.15] -top-40 -left-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] pulse-dot"></span>
              Chapter 01 · Theory
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 max-w-4xl tracking-tight">
              Принципы, на которых<br /><span className="gradient-text">стоит управление</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-[var(--ink-soft)] max-w-2xl leading-relaxed">
              Функции, школы, мотивация, структуры — фундамент, без которого не работает
              ни один framework. Строгая теория в графиках и таблицах.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 01 — CORE FUNCTIONS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">01 · Foundation</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Четыре функции управления</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Классическая модель Анри Файоля: management — это не одна задача,
              а непрерывный цикл из четырёх взаимосвязанных функций.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Planning", ru: "Планирование", d: "Постановка целей, прогноз, выбор стратегии", c: "var(--cyan)" },
            { n: "02", t: "Organizing", ru: "Организация", d: "Структура, ресурсы, полномочия, роли", c: "var(--violet)" },
            { n: "03", t: "Motivating", ru: "Мотивация", d: "Побуждение через потребности и стимулы", c: "var(--pink)" },
            { n: "04", t: "Controlling", ru: "Контроль", d: "Сверка результата с планом, корректировка", c: "var(--emerald)" },
          ].map((f, i) => (
            <Reveal key={f.n} delay={i * 120}>
              <div className="card p-6 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-3xl font-black mono" style={{ color: f.c, opacity: 0.7 }}>{f.n}</div>
                  <div className="w-2 h-2 rounded-full pulse-dot" style={{ background: f.c }}></div>
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--muted)] mb-1">{f.t}</div>
                <h3 className="text-lg font-bold mb-2">{f.ru}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 02 — MASLOW + CHART */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Reveal variant="left">
            <div>
              <div className="eyebrow mb-3">02 · Motivation</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Пирамида Маслоу</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Абрахам Маслоу (1943) описал иерархию потребностей: пока не удовлетворены
                базовые, человек не мотивирован высшими. Для менеджера это значит —
                сначала зарплата и безопасность, потом признание и рост.
              </p>
              <div className="quote-block">
                Удовлетворённая потребность перестаёт мотивировать. Менеджер,
                не понимающий уровня сотрудника, работает вслепую.
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="card p-6">
              <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Hierarchy of Needs · Maslow</div>
              <div className="flex flex-col gap-2">
                {[
                  { lvl: "5", t: "Self-actualization", ru: "Самореализация", d: "рост, творчество", w: "45%", c: "var(--pink)" },
                  { lvl: "4", t: "Esteem", ru: "Признание", d: "статус, репутация", w: "60%", c: "var(--violet)" },
                  { lvl: "3", t: "Social", ru: "Социальные", d: "команда, дружба", w: "75%", c: "var(--cyan)" },
                  { lvl: "2", t: "Safety", ru: "Безопасность", d: "стабильность", w: "90%", c: "var(--emerald)" },
                  { lvl: "1", t: "Physiological", ru: "Физиологические", d: "зарплата, комфорт", w: "100%", c: "var(--amber)" },
                ].map((p, i) => (
                  <div key={p.lvl} className="flex items-center justify-center">
                    <div
                      className="rounded-lg px-4 py-3 text-center relative transition-all duration-500 hover:scale-[1.03]"
                      style={{
                        width: p.w,
                        background: `linear-gradient(135deg, ${p.c}15 0%, ${p.c}05 100%)`,
                        border: `1px solid ${p.c}40`,
                        boxShadow: `inset 0 1px 0 ${p.c}20`,
                      }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-0.5">
                        <span className="mono text-[0.55rem] tracking-[0.15em] opacity-60" style={{ color: p.c }}>LVL {p.lvl}</span>
                        <span className="text-xs font-bold" style={{ color: p.c }}>{p.ru}</span>
                      </div>
                      <div className="text-[0.65rem] text-[var(--ink-soft)]">{p.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — FAYOL'S 14 PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">03 · Principles</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">14 принципов Файоля</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Анри Файоль сформулировал их в 1916 году. Спустя век они всё ещё
              лежат в основе управления любой компании.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="principle-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { n: "Разделение труда", d: "Специализация повышает эффективность" },
              { n: "Полномочия", d: "Право отдавать приказы + ответственность" },
              { n: "Дисциплина", d: "Соблюдение правил и соглашений" },
              { n: "Единоначалие", d: "Один сотрудник — один руководитель" },
              { n: "Единство направления", d: "Одна цель — один план — один лидер" },
              { n: "Подчинение личных интересов", d: "Общие цели выше частных" },
              { n: "Вознаграждение", d: "Справедливая оплата труда" },
              { n: "Централизация", d: "Баланс централизации и децентрализации" },
              { n: "Иерархия", d: "Чёткая цепь команд сверху вниз" },
              { n: "Порядок", d: "Место для всего и всё на своём месте" },
              { n: "Справедливость", d: "Сочетание доброты и правосудия" },
              { n: "Стабильность персонала", d: "Текучка — признак плохого управления" },
              { n: "Инициатива", d: "Свобода предлагать и реализовывать идеи" },
              { n: "Корпоративный дух", d: "Единство — сила команды" },
            ].map((p, i) => (
              <div key={p.n} className="principle-card">
                <h4 className="text-sm font-bold mb-1.5 pr-6">{p.n}</h4>
                <p className="text-xs text-[var(--ink-soft)] leading-snug">{p.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 04 — SCHOOLS (modern table) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">04 · Evolution</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Школы менеджмента</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Как менялось представление об управлении за 100 лет
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "80px 2fr 3fr 100px" }}>
              <span>Year</span>
              <span>School</span>
              <span>Core idea</span>
              <span>Era</span>
            </div>
            {[
              { y: "1911", n: "Scientific Management", ru: "Научное управление", f: "Frederick Taylor", d: "Стандартизация операций, хронометраж, разделение труда", tag: "Classic", tagCls: "tag-amber" },
              { y: "1916", n: "Administrative Theory", ru: "Административная школа", f: "Henri Fayol", d: "Управление как универсальный процесс + 14 принципов", tag: "Classic", tagCls: "tag-amber" },
              { y: "1930", n: "Human Relations", ru: "Человеческие отношения", f: "Elton Mayo", d: "Психологический климат, потребности, внимание к людям", tag: "Human", tagCls: "tag-pink" },
              { y: "1950", n: "Quantitative", ru: "Количественная школа", f: "Operations Research", d: "Математика, статистика, модели принятия решений", tag: "Math", tagCls: "tag-violet" },
              { y: "1970", n: "Systems Thinking", ru: "Системный подход", f: "Ludwig von Bertalanffy", d: "Организация — открытая система во взаимодействии со средой", tag: "Modern", tagCls: "tag-cyan" },
              { y: "2000", n: "Agile & Lean", ru: "Гибкие методологии", f: "Software industry", d: "Итерации, обратная связь, минимум потерь", tag: "Contemporary", tagCls: "tag-emerald" },
            ].map((s, i) => (
              <div key={s.y} className="table-row-modern"
                   style={{ gridTemplateColumns: "80px 2fr 3fr 100px", animationDelay: `${i * 0.08}s` }}>
                <div className="cell-num mono">{s.y}</div>
                <div className="cell-title">
                  {s.n}
                  <small>{s.f}</small>
                </div>
                <div className="cell-desc">{s.d}</div>
                <span className={`cell-tag ${s.tagCls}`}>{s.tag}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 05 — MANAGEMENT LEVELS (modern table) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">05 · Structure</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Уровни менеджмента</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Чем выше уровень — тем больше стратегии и меньше операционки
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
              { n: "1", n_en: "Top Management", ru: "Топ-менеджмент", f: "CEO, board", d: "Стратегия, миссия, ключевые решения", tag: "3–10 лет", tagCls: "tag-pink" },
              { n: "2", n_en: "Middle Management", ru: "Средний менеджмент", f: "Department heads", d: "Тактика, координация команд, KPI", tag: "6 мес – 3 года", tagCls: "tag-violet" },
              { n: "3", n_en: "Line Management", ru: "Линейный менеджмент", f: "Team leads", d: "Операционка, ежедневные задачи", tag: "Дни – недели", tagCls: "tag-cyan" },
              { n: "4", n_en: "Individual Contributors", ru: "Специалисты", f: "Experts", d: "Реализация конкретных задач", tag: "Сегодня", tagCls: "tag-emerald" },
            ].map((l, i) => (
              <div key={l.n} className="table-row-modern"
                   style={{ gridTemplateColumns: "60px 2fr 3fr 120px", animationDelay: `${i * 0.08}s` }}>
                <div className="cell-num mono">L{l.n}</div>
                <div className="cell-title">{l.n_en}<small>{l.ru} · {l.f}</small></div>
                <div className="cell-desc">{l.d}</div>
                <span className={`cell-tag ${l.tagCls}`}>{l.tag}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 06 — COMPARISON (modern table) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">06 · Comparison</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Сравнение подходов</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Каждая школа видела управление по-своему — но каждая дополняла предыдущую
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "60px 1.5fr 1.5fr 1.5fr 1.5fr" }}>
              <span>#</span>
              <span>Approach</span>
              <span>Focus</span>
              <span>Strength</span>
              <span>Weakness</span>
            </div>
            {[
              { n: "01", a: "Scientific", f: "Процессы", s: "Точность, измеримость", w: "Игнорирует человека" },
              { n: "02", a: "Administrative", f: "Структура", s: "Ясные роли и правила", w: "Медленно реагирует" },
              { n: "03", a: "Human Relations", f: "Люди", s: "Лояльность, климат", w: "Сложно измерить" },
              { n: "04", a: "Quantitative", f: "Данные", s: "Объективность, прогноз", w: "Требует данных" },
              { n: "05", a: "Systems", f: "Взаимосвязи", s: "Целостный взгляд", w: "Высокая абстракция" },
              { n: "06", a: "Agile", f: "Итерации", s: "Гибкость, скорость", w: "Хаос без дисциплины" },
            ].map((r, i) => (
              <div key={r.n} className="table-row-modern"
                   style={{ gridTemplateColumns: "60px 1.5fr 1.5fr 1.5fr 1.5fr", animationDelay: `${i * 0.06}s` }}>
                <div className="cell-num mono">{r.n}</div>
                <div className="cell-title">{r.a}</div>
                <div className="cell-desc">{r.f}</div>
                <div className="cell-desc" style={{ color: 'var(--emerald)' }}>+ {r.s}</div>
                <div className="cell-desc" style={{ color: 'var(--pink)' }}>− {r.w}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* СТАТИСТИКА */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: 100, l: "years of theory", s: "+", c: "var(--cyan)" },
            { n: 14, l: "principles of Fayol", s: "", c: "var(--violet)" },
            { n: 5, l: "levels of needs", s: "", c: "var(--pink)" },
            { n: 6, l: "management schools", s: "", c: "var(--emerald)" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 120}>
              <div className="stat-box p-6 text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-1" style={{ color: s.c }}>
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NAV */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Reveal>
          <div className="flex justify-between items-center pt-8 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/" className="link-underline text-sm text-[var(--ink-soft)] hover:text-[var(--cyan)]">← Home</Link>
            <Link href="/models" className="btn btn-primary">Next → Frameworks</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}