import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import LineChart from "../components/LineChart";

export default function Control() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 13 · Контроль</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Контроль и оценка эффективности
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              KPI, метрики и анализ результатов. Как понять, что компания
              движется в правильном направлении.
            </p>
          </div>
        </Reveal>

        {/* DASHBOARD */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Дашборд метрик</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Пример типичного управленческого дашборда
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { t: 'Revenue', v: 2450000, s: 'руб', up: true, trend: '+18%' },
              { t: 'Clients', v: 1247, s: '', up: true, trend: '+23%' },
              { t: 'Churn Rate', v: 4, s: '%', up: false, trend: '−1.2%' },
              { t: 'NPS', v: 67, s: '', up: true, trend: '+5' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80}>
                <div className="metric-box">
                  <div className="metric-box-head">
                    <div className="metric-box-title">{x.t}</div>
                  </div>
                  <div className="metric-box-val">
                    <Counter to={x.v} />
                    <span style={{ fontSize: '1rem', color: 'var(--ink-3)' }}>{x.s}</span>
                  </div>
                  <div className={`metric-box-sub ${x.up ? 'metric-up' : 'metric-down'}`}>
                    {x.up ? '▲' : '▼'} {x.trend}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="card">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Динамика выручки</h3>
                  <p className="text-sm text-[var(--ink-3)]">Последние 12 месяцев</p>
                </div>
                <div className="badge">
                  <span className="badge-dot"></span>
                  План: 2.4M
                </div>
              </div>
              <LineChart
                data={[
                  { y: '1', v: 180 }, { y: '2', v: 195 }, { y: '3', v: 210 },
                  { y: '4', v: 205 }, { y: '5', v: 220 }, { y: '6', v: 235 },
                  { y: '7', v: 228 }, { y: '8', v: 242 }, { y: '9', v: 255 },
                  { y: '10', v: 248 }, { y: '11', v: 262 }, { y: '12', v: 245 },
                ]}
                height={240}
                color="#e8a78d"
              />
            </div>
          </Reveal>
        </section>

        {/* ВИДЫ КОНТРОЛЯ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Виды контроля</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: 'Предварительный', d: 'До начала работ. Проверка ресурсов, планов, бюджета.', ex: 'Собеседование при найме' },
              { t: 'Текущий', d: 'В процессе работы. Отслеживание прогресса и корректировка.', ex: 'Еженедельные статусы проекта' },
              { t: 'Заключительный', d: 'По результатам. Оценка итога и извлечение уроков.', ex: 'Performance review по кварталу' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="font-semibold mb-2">{x.t}</h3>
                  <p className="text-sm text-[var(--ink-3)] mb-3 leading-relaxed">{x.d}</p>
                  <div className="text-xs text-[var(--accent)] pt-2 border-t border-[var(--line)]">
                    {x.ex}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* KPI vs OKR */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">KPI vs OKR</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Две разные системы целей — и обе полезны
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>KPI</th>
                    <th>OKR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: 'Что измеряет', k: 'Поддержание эффективности', o: 'Достижение амбициозной цели' },
                    { p: 'Природа', k: 'Стабильная метрика', o: 'Временная инициатива' },
                    { p: 'Горизонт', k: 'Постоянный', o: 'Квартал или год' },
                    { p: 'Амбиция', k: '«Не хуже»', o: '«Значительно лучше»' },
                    { p: 'Связь с бонусом', k: 'Обычно да', o: 'Обычно нет' },
                    { p: 'Цель', k: 'Не падать ниже нормы', o: 'Прыгнуть выше головы' },
                  ].map(r => (
                    <tr key={r.p}>
                      <td>{r.p}</td>
                      <td>{r.k}</td>
                      <td>{r.o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ПРИМЕРЫ KPI */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">KPI по отделам</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Отдел</th>
                    <th>Ключевые метрики</th>
                    <th>Целевые значения</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { d: 'Продажи', k: 'Revenue, Win Rate, Time-to-close', t: '2.4M / 35% / 30 дней' },
                    { d: 'Маркетинг', k: 'CAC, ROMI, Conversion', t: '800₽ / 300% / 4.5%' },
                    { d: 'Продукт', k: 'DAU/MAU, Retention, Feature Usage', t: '45% / 60% / >80%' },
                    { d: 'Поддержка', k: 'CSAT, FRT, Time-to-resolve', t: '≥4.5 / <15 мин / <24ч' },
                    { d: 'HR', k: 'eNPS, Time-to-hire, Turnover', t: '>50 / <40дн / <10%' },
                  ].map(r => (
                    <tr key={r.d}>
                      <td>{r.d}</td>
                      <td>{r.k}</td>
                      <td className="mono text-xs">{r.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/projects" className="link-arrow text-sm">← Проекты</Link>
            <Link href="/modern" className="btn">Далее: Современный →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}