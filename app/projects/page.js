import Link from "next/link";
import Reveal from "../components/Reveal";
import GanttChart from "../components/GanttChart";
import Accordion from "../components/Accordion";

export default function Projects() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 12 · Проекты</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Управление проектами
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Жизненный цикл проекта: от инициации до закрытия. Сроки, ресурсы,
              риски и командная работа.
            </p>
          </div>
        </Reveal>

        {/* ЖИЗНЕННЫЙ ЦИКЛ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Жизненный цикл проекта</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Пять фаз, через которые проходит любой проект
            </p>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { n: '01', t: 'Инициация', d: 'Определение цели, стейкхолдеров, устава' },
              { n: '02', t: 'Планирование', d: 'Сроки, ресурсы, бюджет, риски' },
              { n: '03', t: 'Исполнение', d: 'Реализация плана, координация' },
              { n: '04', t: 'Мониторинг', d: 'Контроль прогресса и корректировки' },
              { n: '05', t: 'Закрытие', d: 'Сдача результата, ретроспектива' },
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

        {/* GANTT */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Диаграмма Ганта</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Классический инструмент визуализации расписания проекта.
              Каждая полоса = этап с датой начала и окончания.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <GanttChart />
          </Reveal>
        </section>

        {/* ТРЕУГОЛЬНИК */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Проектный треугольник</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Три ограничения, между которыми всегда идёт баланс. Меняешь одно — меняются два других.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <svg viewBox="0 0 500 380" className="w-full h-auto">
                <defs>
                  <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e8a78d" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#e8a78d" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <polygon points="250,40 460,340 40,340" fill="url(#triGrad)" stroke="#e8a78d" strokeWidth="1.5" />
                <circle cx="250" cy="40" r="6" fill="#e8a78d" />
                <circle cx="40" cy="340" r="6" fill="#e8a78d" />
                <circle cx="460" cy="340" r="6" fill="#e8a78d" />

                <text x="250" y="25" textAnchor="middle" fill="var(--ink)" fontSize="14" fontWeight="600" fontFamily="Inter">Сроки</text>
                <text x="40" y="370" textAnchor="middle" fill="var(--ink)" fontSize="14" fontWeight="600" fontFamily="Inter">Стоимость</text>
                <text x="460" y="370" textAnchor="middle" fill="var(--ink)" fontSize="14" fontWeight="600" fontFamily="Inter">Качество</text>

                <text x="250" y="220" textAnchor="middle" fill="var(--ink-3)" fontSize="11" fontFamily="JetBrains Mono">баланс</text>
              </svg>
              <div className="grid md:grid-cols-3 gap-3 mt-4 text-sm">
                <div className="text-center">
                  <div className="text-[var(--accent)] font-semibold mb-1">Быстрее</div>
                  <div className="text-xs text-[var(--ink-3)]">→ дороже или хуже</div>
                </div>
                <div className="text-center">
                  <div className="text-[var(--accent)] font-semibold mb-1">Дешевле</div>
                  <div className="text-xs text-[var(--ink-3)]">→ дольше или хуже</div>
                </div>
                <div className="text-center">
                  <div className="text-[var(--accent)] font-semibold mb-1">Качественнее</div>
                  <div className="text-xs text-[var(--ink-3)]">→ дольше или дороже</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* МЕТОДОЛОГИИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Методологии управления</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Методология</th>
                    <th>Подход</th>
                    <th>Хорошо для</th>
                    <th>Сложность</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { m: 'Waterfall', a: 'Последовательный', g: 'Строительство, оборудование', c: 'Низкая' },
                    { m: 'Agile / Scrum', a: 'Итеративный', g: 'IT, продукты, стартапы', c: 'Средняя' },
                    { m: 'Kanban', a: 'Поток задач', g: 'Поддержка, сервис', c: 'Низкая' },
                    { m: 'PRINCE2', a: 'Процессный', g: 'Крупные гос. проекты', c: 'Высокая' },
                    { m: 'Hybrid', a: 'Смешанный', g: 'Большинство проектов', c: 'Средняя' },
                  ].map(r => (
                    <tr key={r.m}>
                      <td>{r.m}</td>
                      <td>{r.a}</td>
                      <td>{r.g}</td>
                      <td>{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* РИСКИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Управление рисками</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Идентификация рисков', content: 'Соберите список угроз: технические, финансовые, кадровые, рыночные, юридические. Метод: мозговой штурм + чек-листы по прошлым проектам.' },
              { title: 'Оценка: вероятность × влияние', content: 'Каждый риск оценивается по двум шкалам (1–5). Итог — приоритет. Высокая вероятность × высокое влияние = красная зона, требует немедленных действий.' },
              { title: 'Стратегии реагирования', content: 'Избежать (убрать причину), снизить (уменьшить вероятность или влияние), передать (страховка, аутсорс), принять (если риск мал).' },
              { title: 'Мониторинг', content: 'Раз в неделю — обзор: какие риски реализовались, какие новые появились, где изменилась оценка. Риск-реестр — живой документ, а не файл «на полке».' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/strategy" className="link-arrow text-sm">← Стратегия</Link>
            <Link href="/control" className="btn">Далее: Контроль →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}