import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#8b5cf6] opacity-[0.12] -top-40 -left-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <Reveal>
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--violet)] pulse-dot"></span>
              Chapter 04 · About
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.9] mb-8 max-w-5xl tracking-tight">
              ORIGIN —<br /><span className="gradient-text">истоки управления</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-[var(--ink-soft)] max-w-2xl leading-relaxed">
              Проект о том, откуда взялся менеджмент, каким он стал
              и куда движется. Строгая теория в данных и графиках.
            </p>
          </Reveal>
        </div>
      </section>

      {/* МИССИЯ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4" variant="left">
            <div>
              <div className="eyebrow mb-4">Mission</div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Зачем этот<br />проект</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[var(--cyan)] to-[var(--magenta)] mt-6 rounded-full"></div>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-8">
            <p className="dropcap text-lg leading-[1.85] text-[var(--ink)] mb-6">
              Менеджмент — это не скучные определения из учебника. Это система,
              которая объясняет, почему одни команды взлетают, а другие буксуют
              десятилетиями.
            </p>
            <p className="text-base leading-[1.85] text-[var(--ink-soft)] mb-6">
              ORIGIN собирает лучшее из классических школ и современных практик —
              и упаковывает в схемы, графики и таблицы, которые работают в реальной
              жизни, а не только на экзамене.
            </p>
            <p className="text-base leading-[1.85] text-[var(--ink-soft)]">
              Никакой воды. Только теория, проверенная временем, и инструменты,
              которые можно применить завтра.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ЦИФРЫ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: 5, l: "разделов курса", c: "var(--cyan)" },
            { n: 14, l: "принципов Файоля", c: "var(--violet)" },
            { n: 12, l: "frameworks", c: "var(--magenta)" },
            { n: 100, l: "лет теории", c: "var(--lime)" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="big-stat-card" data-num={s.n}>
                <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: s.c }}>
                  <Counter to={s.n} />
                </div>
                <div className="mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ПРИНЦИПЫ ПРОЕКТА */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">Principles</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">На чём стоит проект</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Четыре принципа, которые определяют содержание и форму
            </p>
          </div>
        </Reveal>

        <div className="modern-table">
          <div className="table-head" style={{ gridTemplateColumns: "60px 2fr 3fr" }}>
            <span>#</span>
            <span>Principle</span>
            <span>Description</span>
          </div>
          {[
            { n: "01", t: "Только применимое", d: "Никакой «воды». Каждая модель — с примером реального использования" },
            { n: "02", t: "Наглядно", d: "Графики, таблицы, схемы — так запоминается в разы лучше, чем текст" },
            { n: "03", t: "С опорой на классику", d: "Тейлор, Файоль, Маслоу, Портер — фундамент, а не устаревшее" },
            { n: "04", t: "Без догм", d: "Нет «единственно верного» стиля — есть подходящий под ситуацию" },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="table-row-modern"
                   style={{ gridTemplateColumns: "60px 2fr 3fr", animationDelay: `${i * 0.06}s` }}>
                <div className="cell-num mono">{p.n}</div>
                <div className="cell-title">{p.t}</div>
                <div className="cell-desc">{p.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">Audience</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Для кого</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Проект будет полезен в трёх случаях
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              code: "A-01",
              title: "Студентам",
              desc: "Готовиться к экзаменам по менеджменту, экономике и теории организаций",
              points: ["Быстрый поиск определений", "Схемы для конспектов", "Сравнительные таблицы"],
              c: "var(--cyan)",
            },
            {
              code: "A-02",
              title: "Начинающим менеджерам",
              desc: "Быстро войти в роль и понять базовые инструменты управления",
              points: ["Функции и цикл управления", "Frameworks для практики", "Стили и уровни"],
              c: "var(--violet)",
            },
            {
              code: "A-03",
              title: "Предпринимателям",
              desc: "Строить команду и процессы с нуля без типичных ошибок",
              points: ["SWOT и 5 сил Портера", "SMART и OKR", "Стили под ситуацию"],
              c: "var(--magenta)",
            },
          ].map((a, i) => (
            <Reveal key={a.code} delay={i * 150}>
              <div className="card p-7 h-full">
                <div className="mono text-xs font-bold tracking-widest mb-4" style={{ color: a.c }}>{a.code}</div>
                <h3 className="text-2xl font-bold mb-3">{a.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-6">{a.desc}</p>
                <ul className="space-y-2 border-t border-[var(--line)] pt-4">
                  {a.points.map(p => (
                    <li key={p} className="text-xs text-[var(--ink-soft)] flex gap-2">
                      <span style={{ color: a.c }}>·</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ТАЙМЛАЙН */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">Timeline</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">100 лет в одной линии</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              От первых работ Тейлора — к современным Agile-практикам
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "100px 2fr 3fr" }}>
              <span>Year</span>
              <span>Milestone</span>
              <span>What changed</span>
            </div>
            {[
              { y: "1911", t: "The Principles of Scientific Management", d: "Фредерик Тейлор — научная организация труда", tag: "tag-amber" },
              { y: "1916", t: "Administration Industrielle et Générale", d: "Анри Файоль — 14 принципов управления", tag: "tag-amber" },
              { y: "1943", t: "A Theory of Human Motivation", d: "Абрахам Маслоу — пирамида потребностей", tag: "tag-magenta" },
              { y: "1954", t: "The Practice of Management", d: "Питер Друкер — management by objectives (MBO)", tag: "tag-cyan" },
              { y: "1979", t: "How Competitive Forces Shape Strategy", d: "Майкл Портер — 5 сил конкуренции", tag: "tag-violet" },
              { y: "1986", t: "PDCA Cycle formalized", d: "Уильям Деминг — цикл непрерывного улучшения", tag: "tag-lime" },
              { y: "2001", t: "Agile Manifesto", d: "Итеративная разработка, обратная связь, люди важнее процессов", tag: "tag-cyan" },
              { y: "2010s", t: "OKR at scale", d: "Google и Intel — цели и ключевые результаты", tag: "tag-violet" },
            ].map((m, i) => (
              <div key={m.y} className="table-row-modern"
                   style={{ gridTemplateColumns: "100px 2fr 3fr", animationDelay: `${i * 0.05}s` }}>
                <div className="cell-num mono">{m.y}</div>
                <div className="cell-title">{m.t}</div>
                <div className="cell-desc">{m.d}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="wow-card p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="eyebrow mb-3">Готовы?</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Начните с <span className="gradient-text">фундамента</span>
                </h2>
                <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                  Теория — это основа. Без неё frameworks работают вслепую.
                  Пройдите курс по порядку: Theory → Frameworks → Leadership.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/theory" className="btn btn-primary justify-between">
                  <span>Theory · Принципы</span><span>→</span>
                </Link>
                <Link href="/models" className="btn justify-between">
                  <span>Frameworks · Методы</span><span>→</span>
                </Link>
                <Link href="/styles" className="btn justify-between">
                  <span>Leadership · Стили</span><span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER NAV */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-8">
        <Reveal>
          <div className="flex justify-between items-center pt-8 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/styles" className="link-underline text-sm text-[var(--ink-soft)] hover:text-[var(--cyan)]">← Leadership</Link>
            <Link href="/" className="btn">На главную</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}