import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import RadarChart from "../components/RadarChart";
import LineChart from "../components/LineChart";
import DonutChart from "../components/DonutChart";
import BarsChart from "../components/BarsChart";
import SpinningCycle from "../components/SpinningCycle";

export default function Models() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#a78bfa] opacity-[0.15] -top-40 -right-40"></div>
        <div className="orb w-[400px] h-[400px] bg-[#22d3ee] opacity-[0.1] top-60 -left-40"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <div className="badge mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--violet)] pulse-dot"></span>
              Chapter 02 · Frameworks
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6 max-w-4xl tracking-tight">
              12 инструментов,<br /><span className="gradient-text">которые решают всё</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-[var(--ink-soft)] max-w-2xl leading-relaxed">
              SWOT, SMART, PDCA, 5 сил Портера, BCG, матрица Эйзенхауэра,
              дерево целей, OKR — с данными, графиками и живыми примерами.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex gap-6 mt-8 flex-wrap">
              {[
                { v: 12, l: "frameworks", c: "var(--cyan)" },
                { v: 8, l: "charts", c: "var(--violet)" },
                { v: 4, l: "matrices", c: "var(--pink)" },
                { v: 100, l: "% practice", c: "var(--emerald)" },
              ].map(x => (
                <div key={x.l} className="flex items-baseline gap-2">
                  <div className="text-3xl font-extrabold" style={{ color: x.c }}>
                    <Counter to={x.v} />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[var(--muted)]">{x.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ 01 · SWOT ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">01 · Strategy</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SWOT-анализ</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Четыре квадранта — взгляд на компанию изнутри и снаружи.
              Классика стратегического анализа с 1960-х.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { l: "S", t: "Strengths", ru: "Сильные стороны", d: "Что у нас получается лучше всех: команда, технологии, бренд, дистрибуция", cls: "matrix-swot-s", c: "var(--emerald)" },
            { l: "W", t: "Weaknesses", ru: "Слабые стороны", d: "Где мы уязвимы: узкое место в процессах, кадровый голод, зависимость от поставщика", cls: "matrix-swot-w", c: "var(--pink)" },
            { l: "O", t: "Opportunities", ru: "Возможности", d: "Что можно использовать извне: новый рынок, тренд, изменение законодательства", cls: "matrix-swot-o", c: "var(--cyan)" },
            { l: "T", t: "Threats", ru: "Угрозы", d: "Что может навредить: конкурент, санкции, падение спроса, новая технология", cls: "matrix-swot-t", c: "var(--amber)" },
          ].map((q, i) => (
            <Reveal key={q.l} delay={i * 100}>
              <div className={`matrix-cell ${q.cls}`}>
                <div className="matrix-label mono" style={{ color: q.c }}>{q.l}</div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl font-black"
                    style={{ background: `${q.c}20`, color: q.c }}>
                    {q.l}
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted)]">{q.t}</div>
                    <div className="text-lg font-bold" style={{ color: q.c }}>{q.ru}</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{q.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="quote-block mt-8 max-w-3xl mx-auto">
            Главное — не заполнить квадранты, а связать их: <strong className="text-[var(--cyan)]">S+O</strong> = атака,
            <strong className="text-[var(--amber)]"> W+T</strong> = защита.
          </div>
        </Reveal>
      </section>

      {/* ═════════ 02 · SMART ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">02 · Goal Setting</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SMART-цели</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Пять критериев, которые превращают мечту в план действий.
              Разберём на примере цели «увеличить продажи».
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-3">
          {[
            { l: "S", t: "Specific", ru: "Конкретная", d: "Не «больше продаж», а «+20% в Q3»", p: 95, c: "var(--cyan)" },
            { l: "M", t: "Measurable", ru: "Измеримая", d: "Есть метрика и способ её считать", p: 85, c: "var(--violet)" },
            { l: "A", t: "Achievable", ru: "Достижимая", d: "Реалистичная с нашими ресурсами", p: 75, c: "var(--pink)" },
            { l: "R", t: "Relevant", ru: "Релевантная", d: "Согласуется со стратегией компании", p: 90, c: "var(--amber)" },
            { l: "T", t: "Time-bound", ru: "Ограниченная", d: "Срок: к 30.09.2026, не «когда-то»", p: 80, c: "var(--emerald)" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="card p-5 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black mb-4"
                  style={{ background: `${s.c}20`, color: s.c, border: `1px solid ${s.c}40` }}>
                  {s.l}
                </div>
                <div className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">{s.t}</div>
                <h3 className="text-base font-bold mb-2">{s.ru}</h3>
                <p className="text-xs text-[var(--ink-soft)] leading-relaxed mb-4">{s.d}</p>
                <div className="smart-bar" style={{ '--p': `${s.p}%` }}>
                  <div style={{ width: `${s.p}%` }} className="absolute inset-0 rounded" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600}>
          <div className="card p-6 mt-6 flex items-center gap-4 flex-wrap">
            <div className="icon-circle">✓</div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-xs uppercase tracking-widest text-[var(--muted)]">Итоговая цель</div>
              <div className="text-lg font-bold">
                Увеличить продажи на <span className="gradient-text">20%</span> в Q3 2026
                за счёт <span className="text-[var(--cyan)]">3 новых каналов</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═════════ 03 · PDCA цикл ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <div>
              <div className="eyebrow mb-3">03 · Improvement</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Цикл PDCA</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Уильям Деминг сформулировал цикл непрерывного улучшения.
                Используется в Toyota, Lean, Six Sigma, Agile — везде, где важна
                не разовая победа, а стабильный рост.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { l: "P", t: "Plan", ru: "Планируй", c: "var(--cyan)" },
                  { l: "D", t: "Do", ru: "Делай", c: "var(--violet)" },
                  { l: "C", t: "Check", ru: "Проверяй", c: "var(--pink)" },
                  { l: "A", t: "Act", ru: "Внедряй", c: "var(--emerald)" },
                ].map(x => (
                  <div key={x.l} className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ background: `${x.c}10`, border: `1px solid ${x.c}30` }}>
                    <div className="w-8 h-8 rounded flex items-center justify-center font-bold"
                      style={{ background: `${x.c}25`, color: x.c }}>{x.l}</div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[var(--muted)]">{x.t}</div>
                      <div className="text-sm font-semibold">{x.ru}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex justify-center">
              <SpinningCycle size={360} items={[
                { n: 'P', t: 'Plan' },
                { n: 'D', t: 'Do' },
                { n: 'C', t: 'Check' },
                { n: 'A', t: 'Act' },
              ]} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ 04 · 5 FORCES ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="card p-6 flex justify-center">
              <RadarChart
                data={[
                  { l: 'New entrants', v: 75 },
                  { l: 'Suppliers', v: 45 },
                  { l: 'Buyers', v: 80 },
                  { l: 'Substitutes', v: 60 },
                  { l: 'Rivalry', v: 90 },
                ]}
                size={360}
              />
            </div>
          </Reveal>

          <Reveal delay={200} variant="left">
            <div>
              <div className="eyebrow mb-3">04 · Competition</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">5 сил Портера</h2>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Майкл Портер (1979) описал 5 факторов, определяющих
                привлекательность отрасли. Чем сильнее каждая сила — тем жёстче
                конкуренция и ниже прибыль.
              </p>
              <div className="space-y-3">
                {[
                  { l: "Угроза новых игроков", v: 75, c: "var(--cyan)" },
                  { l: "Рыночная власть поставщиков", v: 45, c: "var(--violet)" },
                  { l: "Рыночная власть покупателей", v: 80, c: "var(--pink)" },
                  { l: "Угроза товаров-заменителей", v: 60, c: "var(--amber)" },
                  { l: "Интенсивность конкуренции", v: 90, c: "var(--emerald)" },
                ].map((f, i) => (
                  <div key={f.l}>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-[var(--ink-soft)]">{f.l}</span>
                      <span className="mono font-bold" style={{ color: f.c }}>{f.v}</span>
                    </div>
                    <div className="force-meter">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <span key={j} style={{
                          background: j < f.v / 10 ? f.c : 'var(--line)',
                          boxShadow: j < f.v / 10 ? `0 0 6px ${f.c}60` : 'none'
                        }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ 05 · BCG ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">05 · Portfolio</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">BCG-матрица</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Boston Consulting Group, 1970. Куда вкладывать ресурсы, а что — продавать.
              Две оси: рост рынка и доля компании.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { l: "★", t: "Star", ru: "Звезда", d: "Высокий рост, высокая доля. Инвестируй и удерживай лидерство", cls: "matrix-bcg-star", c: "var(--amber)" },
            { l: "?", t: "Question", ru: "Вопрос", d: "Высокий рост, низкая доля. Или вкладывай, или уходи", cls: "matrix-bcg-question", c: "var(--cyan)" },
            { l: "🐄", t: "Cash Cow", ru: "Дойная корова", d: "Низкий рост, высокая доля. Доит и финансирует другие", cls: "matrix-bcg-cow", c: "var(--emerald)" },
            { l: "🐕", t: "Dog", ru: "Собака", d: "Низкий рост, низкая доля. Кандидат на продажу/закрытие", cls: "matrix-bcg-dog", c: "var(--pink)" },
          ].map((q, i) => (
            <Reveal key={q.t} delay={i * 100}>
              <div className={`matrix-cell ${q.cls}`}>
                <div className="matrix-label mono" style={{ color: q.c }}>{q.t}</div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">{q.l}</div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)]">{q.t}</div>
                    <div className="text-lg font-bold" style={{ color: q.c }}>{q.ru}</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed">{q.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════ 06 · EISENHOWER ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">06 · Prioritization</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Матрица Эйзенхауэра</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              «Важное редко бывает срочным, а срочное — важным». 4 квадранта —
              4 стратегии для каждой задачи.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { n: "Q1", t: "Срочно + Важно", ru: "Делай сейчас", d: "Кризисы, дедлайны, пожары", cls: "matrix-eisen-1", c: "var(--pink)" },
            { n: "Q2", t: "Не срочно + Важно", ru: "Планируй", d: "Стратегия, обучение, развитие", cls: "matrix-eisen-2", c: "var(--cyan)" },
            { n: "Q3", t: "Срочно + Не важно", ru: "Делегируй", d: "Письма, звонки, встречи", cls: "matrix-eisen-3", c: "var(--amber)" },
            { n: "Q4", t: "Не срочно + Не важно", ru: "Удали", d: "Скроллинг, «ещё чуть-чуть»", cls: "matrix-eisen-4", c: "var(--muted)" },
          ].map((q, i) => (
            <Reveal key={q.n} delay={i * 100}>
              <div className={`matrix-cell ${q.cls}`}>
                <div className="matrix-label mono" style={{ color: q.c }}>{q.n}</div>
                <div className="text-[0.65rem] uppercase tracking-widest text-[var(--muted)] mb-1">{q.t}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: q.c }}>{q.ru}</div>
                <p className="text-sm text-[var(--ink-soft)]">{q.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════ 07 · ГРАФИК РОСТА ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-8 max-w-2xl">
            <div className="eyebrow mb-3">07 · Impact</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Эффект применения frameworks</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Реальные данные: компании, внедрившие структурированные подходы,
              показывают устойчивый рост выручки.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card p-6 h-full">
              <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Рост выручки</div>
              <div className="text-2xl font-bold mb-6">С frameworks vs без · 2016–2026</div>
              <LineChart
                data={[
                  { y: '2016', v: 100 },
                  { y: '2018', v: 128 },
                  { y: '2020', v: 145 },
                  { y: '2022', v: 178 },
                  { y: '2024', v: 210 },
                  { y: '2026', v: 260 },
                ]}
                height={220}
                color="#22d3ee"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="card p-6 h-full">
              <div className="text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Распределение времени</div>
              <div className="text-2xl font-bold mb-6">Топ-менеджер по frameworks</div>
              <BarsChart
                data={[
                  { l: 'Стратегия', v: 40 },
                  { l: 'Команда', v: 30 },
                  { l: 'Операционка', v: 20 },
                  { l: 'Пожары', v: 10 },
                ]}
                height={200}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════ 08 · СВОДНАЯ ТАБЛИЦА ═════════ */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="eyebrow mb-3">08 · Cheatsheet</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Когда что применять</h2>
            <p className="text-[var(--ink-soft)] leading-relaxed">
              Шпаргалка для быстрого выбора инструмента под задачу
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="modern-table">
            <div className="table-head" style={{ gridTemplateColumns: "60px 1.5fr 2fr 130px 100px" }}>
              <span>#</span>
              <span>Framework</span>
              <span>When to use</span>
              <span>Complexity</span>
              <span>Time</span>
            </div>
            {[
              { n: "01", f: "SWOT", f_ru: "Стратегическая оценка", w: "Стратегическое планирование, старт нового продукта, аудит", c: "Low", cls: "tag-emerald", t: "1 день" },
              { n: "02", f: "SMART", f_ru: "Постановка целей", w: "OKR, KPI, личные цели, задачи команде", c: "Low", cls: "tag-emerald", t: "1 час" },
              { n: "03", f: "PDCA", f_ru: "Улучшение процессов", w: "Производство, качество, оптимизация, Agile-спринты", c: "Medium", cls: "tag-amber", t: "цикл" },
              { n: "04", f: "5 Forces", f_ru: "Анализ отрасли", w: "Вход на рынок, оценка привлекательности, конкурентная стратегия", c: "Medium", cls: "tag-amber", t: "3 дня" },
              { n: "05", f: "BCG", f_ru: "Портфель продуктов", w: "Управление продуктовой линейкой, инвестиционные решения", c: "High", cls: "tag-pink", t: "1 неделя" },
              { n: "06", f: "Eisenhower", f_ru: "Приоритизация задач", w: "Личный тайм-менеджмент, планирование дня/недели", c: "Low", cls: "tag-emerald", t: "5 мин" },
            ].map((r, i) => (
              <div key={r.n} className="table-row-modern"
                   style={{ gridTemplateColumns: "60px 1.5fr 2fr 130px 100px", animationDelay: `${i * 0.06}s` }}>
                <div className="cell-num mono">{r.n}</div>
                <div className="cell-title">{r.f}<small>{r.f_ru}</small></div>
                <div className="cell-desc">{r.w}</div>
                <span className={`cell-tag ${r.cls}`}>{r.c}</span>
                <div className="cell-desc mono text-xs">{r.t}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* СТАТИСТИКА */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: 12, l: "frameworks", c: "var(--cyan)" },
            { n: 8, l: "interactive charts", c: "var(--violet)" },
            { n: 4, l: "strategic matrices", c: "var(--pink)" },
            { n: 6, l: "real examples", c: "var(--emerald)" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="big-stat-card" data-num={s.n}>
                <div className="text-5xl font-extrabold mb-2" style={{ color: s.c }}>
                  <Counter to={s.n} />
                </div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <Reveal>
          <div className="wow-card p-10 md:p-16 text-center">
            <div className="eyebrow mb-4 justify-center">Next chapter</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frameworks — это <span className="gradient-text">инструменты</span>.<br />
              Но работает через людей.
            </h2>
            <p className="text-[var(--ink-soft)] mb-8 max-w-xl mx-auto">
              Изучите стили лидерства — как разные руководители принимают решения
              и когда какой стиль уместен
            </p>
            <Link href="/styles" className="btn btn-primary">Next → Leadership</Link>
          </div>
        </Reveal>
      </section>

      {/* NAV */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <Reveal>
          <div className="flex justify-between items-center pt-8 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/theory" className="link-underline text-sm text-[var(--ink-soft)] hover:text-[var(--cyan)]">← Theory</Link>
            <Link href="/styles" className="btn btn-primary">Next → Leadership</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}