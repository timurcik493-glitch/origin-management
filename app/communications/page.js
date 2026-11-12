import Link from "next/link";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

export default function Communications() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 08 · Коммуникации</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Коммуникации в организации
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Как информация движется внутри компании — и почему 70% проблем
              в управлении — это проблемы коммуникации.
            </p>
          </div>
        </Reveal>

        {/* СХЕМА ПОТОКОВ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Потоки информации</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              В компании информация движется в четырёх направлениях
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <svg viewBox="0 0 600 380" className="w-full h-auto">
                <defs>
                  <marker id="arrBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8a78d" />
                  </marker>
                </defs>

                <rect x="230" y="30" width="140" height="60" rx="10" fill="var(--accent)" />
                <text x="300" y="65" textAnchor="middle" fill="#0a0a0a" fontSize="13" fontFamily="Inter" fontWeight="700">Руководство</text>

                <rect x="80" y="160" width="140" height="60" rx="10" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="150" y="195" textAnchor="middle" fill="var(--ink)" fontSize="13" fontFamily="Inter" fontWeight="500">Отдел A</text>

                <rect x="380" y="160" width="140" height="60" rx="10" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="450" y="195" textAnchor="middle" fill="var(--ink)" fontSize="13" fontFamily="Inter" fontWeight="500">Отдел B</text>

                <rect x="230" y="290" width="140" height="60" rx="10" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="300" y="325" textAnchor="middle" fill="var(--ink)" fontSize="13" fontFamily="Inter" fontWeight="500">Сотрудники</text>

                <path d="M 280 90 L 200 155" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrBlue)" />
                <path d="M 320 90 L 400 155" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrBlue)" />
                <path d="M 155 220 L 250 285" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrBlue)" />
                <path d="M 445 220 L 350 285" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrBlue)" />

                <path d="M 195 190 L 375 190" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 4" fill="none" markerEnd="url(#arrBlue)" opacity="0.6" />

                <text x="40" y="100" fill="#6b6b6b" fontSize="10" fontFamily="JetBrains Mono">↓ сверху вниз</text>
                <text x="475" y="100" fill="#6b6b6b" fontSize="10" fontFamily="JetBrains Mono">↑ снизу вверх</text>
                <text x="270" y="240" fill="#6b6b6b" fontSize="10" fontFamily="JetBrains Mono">горизонтально</text>
              </svg>

              <div className="grid md:grid-cols-2 gap-3 mt-6 text-sm">
                <div className="flex gap-2">
                  <span className="mono text-xs font-semibold text-[var(--accent)] w-16 flex-shrink-0">↓ Нисх.</span>
                  <span className="text-[var(--ink-2)]">приказы, цели, инструкции</span>
                </div>
                <div className="flex gap-2">
                  <span className="mono text-xs font-semibold text-[var(--accent)] w-16 flex-shrink-0">↑ Восх.</span>
                  <span className="text-[var(--ink-2)]">отчёты, обратная связь</span>
                </div>
                <div className="flex gap-2">
                  <span className="mono text-xs font-semibold text-[var(--accent)] w-16 flex-shrink-0">↔ Гориз.</span>
                  <span className="text-[var(--ink-2)]">между отделами и коллегами</span>
                </div>
                <div className="flex gap-2">
                  <span className="mono text-xs font-semibold text-[var(--accent)] w-16 flex-shrink-0">⤢ Диаг.</span>
                  <span className="text-[var(--ink-2)]">неформальные связи</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* БАРЬЕРЫ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Барьеры коммуникации</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Почему информация доходит искажённой или не доходит вовсе
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: 'Семантические', d: 'Одно слово — разные смыслы. «Скоро» для одного — 5 минут, для другого — завтра.' },
              { t: 'Иерархические', d: 'Чем больше уровней между отправителем и получателем, тем сильнее искажение.' },
              { t: 'Психологические', d: 'Страх, недоверие, стресс — блокируют восприятие даже ясного сообщения.' },
              { t: 'Физические', d: 'Шум, плохая связь, неработающая техника, «в самолёте не слышно».' },
              { t: 'Культурные', d: 'Разные ценности и нормы. То, что «нормально» для одной культуры — оскорбительно для другой.' },
              { t: 'Информационная перегрузка', d: 'Слишком много сообщений = ни одно не воспринимается. Мозг отключает фильтр.' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 80}>
                <div className="mini-card h-full">
                  <div className="mini-card-title mb-2">{x.t}</div>
                  <div className="mini-card-desc">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ОБРАТНАЯ СВЯЗЬ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Обратная связь</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Главный инструмент улучшения коммуникации
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Модель «Сэндвич» (критика между похвалой)', content: 'Хвалить → критиковать → хвалить. Классика, но у неё есть проблема: люди начинают воспринимать похвалу как предвестник критики. Работает для разовых разговоров, не для регулярной обратной связи.' },
              { title: 'Модель SBI (Situation-Behavior-Impact)', content: 'Ситуация → Поведение → Влияние. «Вчера на встрече (S) ты перебил клиента (B), это создало напряжение (I)». Конкретно, без оценок, без обобщений. Работает лучше всего.' },
              { title: 'Правило «без обобщений»', content: 'Не «ты всегда опаздываешь», а «ты опоздал на этой неделе трижды». Конкретика не даёт человеку защищаться. Обобщения вызывают спор о факте, а не о проблеме.' },
              { title: 'Обратная связь снизу вверх', content: 'Подчинённые редко дают честную обратную связь руководителю. Причины: страх, статус, культура. Решения: анонимные опросы, регулярные 1:1, культура «ошибка — это данные».' },
            ]} />
          </Reveal>
        </section>

        {/* СРАВНЕНИЕ КАНАЛОВ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Каналы коммуникации</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Канал</th>
                    <th>Богатство</th>
                    <th>Скорость</th>
                    <th>Когда использовать</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'Лицом к лицу', b: 'Максимум', s: 'Медленно', w: 'Сложные темы, обратная связь, конфликты' },
                    { c: 'Видеозвонок', b: 'Высокое', s: 'Средне', w: 'Удалённые 1:1, командные встречи' },
                    { c: 'Телефон', b: 'Среднее', s: 'Быстро', w: 'Срочные вопросы без визуала' },
                    { c: 'Email', b: 'Низкое', s: 'Средне', w: 'Официальные решения, документы' },
                    { c: 'Мессенджер', b: 'Низкое', s: 'Очень быстро', w: 'Короткие вопросы, координация' },
                    { c: 'Доска / wiki', b: 'Минимум', s: 'Асинхронно', w: 'Документация, база знаний' },
                  ].map(r => (
                    <tr key={r.c}>
                      <td>{r.c}</td>
                      <td>
                        <span style={{
                          color: r.b === 'Максимум' || r.b === 'Высокое' ? 'var(--green)' :
                                r.b === 'Среднее' ? 'var(--amber)' : 'var(--red)'
                        }}>{r.b}</span>
                      </td>
                      <td>{r.s}</td>
                      <td>{r.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/motivation" className="link-arrow text-sm">← Мотивация</Link>
            <Link href="/conflicts" className="btn">Далее: Конфликты →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}