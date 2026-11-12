import Link from "next/link";
import Reveal from "../components/Reveal";
import SWOTMatrix from "../components/SWOTMatrix";

export default function Strategy() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 11 · Стратегия</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Стратегический менеджмент
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Миссия, видение, цели и SWOT-анализ. Как компания определяет,
              куда она идёт — и почему одни доходят, а другие нет.
            </p>
          </div>
        </Reveal>

        {/* МИССИЯ / ВИДЕНИЕ / ЦЕЛИ */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: 'Миссия', s: 'Зачем мы существуем', d: 'Смысл существования компании, её роль для клиентов, сотрудников и общества. Отвечает на вопрос «зачем мы есть».', ex: '«Мы делаем управление доступным для каждой компании»' },
              { t: 'Видение', s: 'Куда мы идём', d: 'Образ будущего через 5–10 лет. Каким мы хотим стать? Вдохновляющий образ, который ведёт команду.', ex: '«Стать главной образовательной платформой в СНГ»' },
              { t: 'Цели', s: 'Что конкретно делаем', d: 'Измеримые результаты на пути к видению. Разбиваются на тактические и оперативные.', ex: '«1 млн пользователей к 2028 году»' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100}>
                <div className="card h-full">
                  <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                    {x.t}
                  </div>
                  <div className="text-sm text-[var(--ink-3)] mb-3">{x.s}</div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed mb-4">{x.d}</p>
                  <div className="pt-3 border-t border-[var(--line)] text-xs italic text-[var(--ink-3)]">
                    {x.ex}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SWOT */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">SWOT-анализ</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Классический инструмент стратегического анализа. Нажми на любой квадрант,
              чтобы увидеть подробности внизу.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <SWOTMatrix />
          </Reveal>
        </section>

        {/* СТРАТЕГИЧЕСКИЕ МАТРИЦЫ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Стратегические комбинации</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              SWOT не работает по отдельности — работает в комбинациях
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: 'S + O', d: 'Атака', desc: 'Используй сильные стороны, чтобы захватить возможности. Самая выгодная стратегия.', c: 'var(--green)' },
              { t: 'S + T', d: 'Защита', desc: 'Используй сильные стороны, чтобы противостоять угрозам.', c: 'var(--accent)' },
              { t: 'W + O', d: 'Развитие', desc: 'Устраняй слабые стороны через новые возможности. Требует инвестиций.', c: 'var(--amber)' },
              { t: 'W + T', d: 'Оборона', desc: 'Минимизируй слабости, избегай угроз. Часто — сигнал к пересмотру стратегии.', c: 'var(--red)' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80}>
                <div className="card" style={{ borderLeftColor: x.c, borderLeftWidth: '2px' }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-mono text-sm font-semibold" style={{ color: x.c }}>{x.t}</span>
                    <span className="text-lg font-bold">{x.d}</span>
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{x.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 5 СИЛ ПОРТЕРА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">5 сил Портера</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Модель конкурентного анализа отрасли (Майкл Портер, 1979)
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { n: '01', t: 'Угроза новых игроков', d: 'Насколько легко войти в отрасль? Барьеры: капитал, лицензии, бренд.' },
              { n: '02', t: 'Сила поставщиков', d: 'Могут ли поставщики диктовать цены? Зависимость = слабость.' },
              { n: '03', t: 'Сила покупателей', d: 'Могут ли клиенты диктовать условия? Много альтернатив = их сила.' },
              { n: '04', t: 'Угроза заменителей', d: 'Есть ли другие способы решить ту же задачу? Не конкуренты, а альтернативы.' },
              { n: '05', t: 'Интенсивность конкуренции', d: 'Сколько игроков и насколько жёсткая борьба за долю рынка?' },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 80}>
                <div className="mini-card h-full">
                  <div className="mini-card-num">{x.n}</div>
                  <div className="mini-card-title mb-2">{x.t}</div>
                  <div className="mini-card-desc">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* УРОВНИ СТРАТЕГИИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Уровни стратегии</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Уровень</th>
                    <th>Кто разрабатывает</th>
                    <th>На что влияет</th>
                    <th>Горизонт</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { l: 'Корпоративная', w: 'Совет директоров, CEO', f: 'Портфель бизнесов, M&A, диверсификация', h: '5–10 лет' },
                    { l: 'Бизнес-стратегия', w: 'Руководители бизнес-единиц', f: 'Конкурентное преимущество на рынке', h: '3–5 лет' },
                    { l: 'Функциональная', w: 'Директора функций', f: 'Маркетинг, финансы, производство, HR', h: '1–3 года' },
                    { l: 'Операционная', w: 'Руководители подразделений', f: 'Ежедневные процессы и задачи', h: 'До 1 года' },
                  ].map(r => (
                    <tr key={r.l}>
                      <td>{r.l}</td>
                      <td>{r.w}</td>
                      <td>{r.f}</td>
                      <td className="mono text-xs">{r.h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/decisions" className="link-arrow text-sm">← Решения</Link>
            <Link href="/projects" className="btn">Далее: Проекты →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}