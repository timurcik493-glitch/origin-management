import Link from "next/link";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

export default function Modern() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 14 · Современность</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Современный менеджмент
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Agile, Lean, OKR, цифровая трансформация. Как управление
              меняется под давлением новых технологий и новых команд.
            </p>
          </div>
        </Reveal>

        {/* AGILE */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Agile</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Итеративный подход, родившийся в IT и перевернувший управление
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card">
                <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                  4 ценности манифеста (2001)
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    'Люди и взаимодействие — важнее процессов и инструментов',
                    'Работающий продукт — важнее документации',
                    'Сотрудничество с клиентом — важнее контракта',
                    'Готовность к изменениям — важнее следования плану',
                  ].map((x, i) => (
                    <li key={i} className="flex gap-3 text-[var(--ink-2)]">
                      <span className="mono text-xs font-bold text-[var(--accent)] flex-shrink-0 pt-0.5">
                        0{i + 1}
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card">
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-3">
                  Scrum-спринт
                </div>
                <div className="space-y-2">
                  {[
                    { t: 'Sprint Planning', d: 'Планирование задач на спринт (2 недели)' },
                    { t: 'Daily Standup', d: '15 минут: что сделал, что дальше, есть блокеры' },
                    { t: 'Sprint Review', d: 'Демонстрация результата стейкхолдерам' },
                    { t: 'Retrospective', d: 'Что прошло хорошо, что улучшить' },
                  ].map((x, i) => (
                    <div key={i} className="flex gap-3 py-2 border-b border-[var(--line)] last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-sm font-medium text-[var(--ink)]">{x.t}</div>
                        <div className="text-xs text-[var(--ink-3)] mt-0.5">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LEAN */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Lean</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Бережливое производство из Toyota: убрать всё лишнее, оставить только ценность
            </p>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-3">
            {[
              { n: '01', t: 'Определить ценность', d: 'Что клиент реально считает ценным' },
              { n: '02', t: 'Картировать поток', d: 'Найти все шаги, убрать лишние' },
              { n: '03', t: 'Создать поток', d: 'Убрать задержки и барьеры' },
              { n: '04', t: 'Pull-система', d: 'Производим по запросу, не на склад' },
              { n: '05', t: 'Совершенствовать', d: 'Кайдзен — постоянные улучшения' },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 80}>
                <div className="mini-card h-full">
                  <div className="mini-card-num">{x.n}</div>
                  <div className="mini-card-title mb-2 text-sm">{x.t}</div>
                  <div className="mini-card-desc text-xs">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* OKR */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">OKR</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Objectives & Key Results. Система целей, которую используют Google, Intel, Spotify
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                Пример OKR команды продукта на квартал
              </div>
              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] mb-1">
                  Objective
                </div>
                <div className="text-xl font-bold mb-1">Стать основным инструментом для менеджеров</div>
                <div className="text-sm text-[var(--ink-3)]">
                  Амбициозная, качественная, вдохновляющая цель
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] mb-2">
                  Key Results
                </div>
                <div className="space-y-2">
                  {[
                    { kr: 'KR1', t: 'Увеличить MAU с 45k до 90k', p: 45 },
                    { kr: 'KR2', t: 'Поднять retention с 45% до 65%', p: 30 },
                    { kr: 'KR3', t: 'Запустить 3 новых интеграции', p: 60 },
                  ].map((k, i) => (
                    <div key={k.kr} className="p-3 rounded-lg bg-[var(--bg-3)]">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-[var(--ink)]">
                          <span className="mono text-xs text-[var(--accent)] mr-2">{k.kr}</span>
                          {k.t}
                        </span>
                        <span className="mono text-xs text-[var(--ink-3)]">{k.p}%</span>
                      </div>
                      <div className="goal-bar">
                        <div className="goal-fill" style={{ width: `${k.p}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* СРАВНЕНИЕ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Agile vs Lean vs Waterfall</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Параметр</th>
                    <th>Waterfall</th>
                    <th>Agile</th>
                    <th>Lean</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { p: 'Подход', w: 'Последовательный', a: 'Итеративный', l: 'Потоковый' },
                    { p: 'Изменения', w: 'Плохо', a: 'Приветствуются', l: 'Устраняются' },
                    { p: 'Фокус', w: 'План', a: 'Результат', l: 'Ценность' },
                    { p: 'Цикл', w: 'Длинный', a: 'Короткий (1–4 нед)', l: 'Непрерывный' },
                    { p: 'Документация', w: 'Много', a: 'Минимум', l: 'По необходимости' },
                  ].map(r => (
                    <tr key={r.p}>
                      <td>{r.p}</td>
                      <td>{r.w}</td>
                      <td>{r.a}</td>
                      <td>{r.l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ЦИФРОВАЯ ТРАНСФОРМАЦИЯ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Цифровая трансформация</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Что это на самом деле', content: 'Не «поставить CRM» и не «перенести всё в облако». Это изменение способа делать бизнес с помощью данных и технологий. Меняется не только IT, но и процессы, культура, модель управления.' },
              { title: 'Три стадии зрелости', content: '1) Digitization — оцифровка существующих процессов. 2) Digitalization — переосмысление процессов с цифровыми инструментами. 3) Digital transformation — новые бизнес-модели, которых без цифры не было бы.' },
              { title: 'Роль данных', content: 'Данные становятся главным активом. Управление на основе данных (data-driven) требует: единого источника правды, культуры работы с метриками, отказ от решений «по интуиции».' },
              { title: 'Гибридные команды', content: 'Продуктовые команды с продакт-менеджером, дизайнером, разработчиками — вместо «отдела маркетинга, отдела разработки». Меняется структура, скорость и ответственность.' },
              { title: 'Человеческий фактор', content: '70% цифровых трансформаций проваливаются — не из-за технологий, а из-за сопротивления людей. Нужна работа с культурой, обучение, «цифровые чемпионы» в командах.' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/control" className="link-arrow text-sm">← Контроль</Link>
            <Link href="/glossary" className="btn">Далее: Глоссарий →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}