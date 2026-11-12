import Link from "next/link";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

const STYLES = [
  {
    tag: 'S-01',
    title: 'Авторитарный',
    sub: 'Решение принимает один руководитель',
    metrics: { speed: 95, control: 90, freedom: 15 },
    pros: ['Быстрые решения', 'Жёсткая дисциплина', 'Незаменим в кризис'],
    cons: ['Подавляет инициативу', 'Растёт текучка', 'Страх ошибиться'],
    when: 'Кризис, жёсткие дедлайны, новички в команде',
  },
  {
    tag: 'S-02',
    title: 'Демократический',
    sub: 'Решение принимается совместно с командой',
    metrics: { speed: 55, control: 60, freedom: 70 },
    pros: ['Вовлечённость команды', 'Разные точки зрения', 'Лояльность людей'],
    cons: ['Медленнее решения', 'Риск «согласия ради согласия»', 'Нужны зрелые сотрудники'],
    when: 'Стратегические сессии, изменения, зрелая команда',
  },
  {
    tag: 'S-03',
    title: 'Либеральный',
    sub: 'Команда решает сама, лидер — координатор',
    metrics: { speed: 40, control: 25, freedom: 95 },
    pros: ['Максимум свободы', 'Идеален для экспертов', 'Творчество и рост'],
    cons: ['Риск хаоса', 'Новички теряются', 'Сложно контролировать'],
    when: 'Экспертные команды, R&D, творческие проекты',
  },
];

export default function Leadership() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 05 · Лидерство</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Лидерство и руководство
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Стили управления, полномочия, влияние и ответственность.
              Чем лидер отличается от менеджера — и когда какой стиль работает.
            </p>
          </div>
        </Reveal>

        {/* ЛИДЕР vs МЕНЕДЖЕР */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Лидер ≠ Менеджер</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Две разные роли, которые часто путают
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                  Лидер
                </div>
                <ul className="space-y-2.5 text-sm text-[var(--ink-2)]">
                  <li>· Делает правильные вещи (эффективность)</li>
                  <li>· Вдохновляет и ведёт за собой</li>
                  <li>· Работает с видением и смыслом</li>
                  <li>· Влияет через отношения и доверие</li>
                  <li>· Принимает неопределённость</li>
                  <li>· Думает о будущем</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-3">
                  Менеджер
                </div>
                <ul className="space-y-2.5 text-sm text-[var(--ink-2)]">
                  <li>· Делает вещи правильно (результативность)</li>
                  <li>· Планирует и контролирует</li>
                  <li>· Работает с процессами и KPI</li>
                  <li>· Влияет через полномочия и должность</li>
                  <li>· Снижает неопределённость</li>
                  <li>· Думает о текущем</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 СТИЛЯ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Три классических стиля</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Модель Курта Левина (1939). Нет «лучшего» стиля — есть подходящий
              под ситуацию и зрелость команды.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4">
            {STYLES.map((s, i) => (
              <Reveal key={s.tag} delay={i * 100}>
                <div className="style-card h-full">
                  <div className="style-card-tag">{s.tag}</div>
                  <div className="style-card-title">{s.title}</div>
                  <div className="style-card-sub">{s.sub}</div>

                  <div className="style-metrics">
                    {[
                      { l: 'Скорость', v: s.metrics.speed },
                      { l: 'Контроль', v: s.metrics.control },
                      { l: 'Свобода', v: s.metrics.freedom },
                    ].map(m => (
                      <div key={m.l} className="style-metric">
                        <div className="style-metric-label">{m.l}</div>
                        <div className="style-metric-bar">
                          <div className="style-metric-fill" style={{ width: `${m.v}%` }}></div>
                        </div>
                        <div className="style-metric-val">{m.v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="style-pros-cons">
                    {s.pros.slice(0, 2).map(p => (
                      <div key={p} className="row">
                        <span className="plus">+</span>{p}
                      </div>
                    ))}
                    {s.cons.slice(0, 2).map(c => (
                      <div key={c} className="row">
                        <span className="minus">−</span>{c}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--line)] text-xs text-[var(--ink-3)]">
                    <span className="font-semibold text-[var(--ink-2)]">Когда:</span> {s.when}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* СРАВНЕНИЕ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Сравнение по 6 критериям</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Критерий</th>
                    <th>Авторитарный</th>
                    <th>Демократический</th>
                    <th>Либеральный</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'Кто решает', a: 'Руководитель', d: 'Совместно', l: 'Команда' },
                    { c: 'Скорость', a: 'Высокая', d: 'Средняя', l: 'Зависит от команды' },
                    { c: 'Контроль', a: 'Жёсткий', d: 'Гибкий', l: 'Минимальный' },
                    { c: 'Инициатива', a: 'Подавляется', d: 'Поощряется', l: 'Полная свобода' },
                    { c: 'Мотивация', a: 'Внешняя (страх)', d: 'Внутренняя (вовлечённость)', l: 'Внутренняя (автономия)' },
                    { c: 'Когда хорош', a: 'Кризис, новички', d: 'Изменения, стратегия', l: 'Эксперты, творчество' },
                  ].map(r => (
                    <tr key={r.c}>
                      <td>{r.c}</td>
                      <td>{r.a}</td>
                      <td>{r.d}</td>
                      <td>{r.l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* СИТУАЦИОННЫЙ ПОДХОД */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Ситуационный подход</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Стиль выбирается под зрелость команды и сложность задачи.
              Модель Херси-Бланшара (1969).
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { lvl: 'Низкая зрелость', style: 'Авторитарный', note: 'Даю чёткие инструкции' },
                  { lvl: 'Средняя зрелость', style: 'Демократический', note: 'Обсуждаю с командой' },
                  { lvl: 'Хорошая зрелость', style: 'Партнёрский', note: 'Поддерживаю инициативу' },
                  { lvl: 'Высокая зрелость', style: 'Делегирование', note: 'Передаю ответственность' },
                ].map((x, i) => (
                  <div key={x.lvl} className="mini-card">
                    <div className="mini-card-num">0{i + 1}</div>
                    <div className="mini-card-title">{x.lvl}</div>
                    <div className="text-sm font-semibold text-[var(--accent)] mb-1 mt-2">{x.style}</div>
                    <div className="mini-card-desc">{x.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* АККОРДЕОН */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Ключевые концепции</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Власть и влияние — в чём разница?', content: 'Власть — это формальная возможность влиять (должность, полномочия). Влияние — реальная способность менять поведение других (через доверие, экспертизу, харизму). Можно иметь власть и не иметь влияния — и наоборот.' },
              { title: '5 источников власти по Френч и Рэйвен', content: 'Легитимная (должность), вознаграждающая (могу дать), принуждающая (могу наказать), экспертная (знаю), референтная (уважают). Самые устойчивые — экспертная и референтная: они не исчезают при смене должности.' },
              { title: 'Теория лидерских качеств', content: 'Ранние подходы искали «врождённые» черты лидера. Итог: универсального набора нет. Но есть корреляции — эмоциональный интеллект, ответственность, способность учиться.' },
              { title: 'Транзакционное vs трансформационное лидерство', content: 'Транзакционное: «обмен» — я плачу, ты делаешь. Работает для рутины. Трансформационное: меняю ценности и мотивацию — команда идёт за идеей. Работает для изменений и роста.' },
              { title: 'Эмоциональный интеллект лидера', content: 'По Гоулману — 4 навыка: самосознание, саморегуляция, эмпатия, социальные навыки. Исследования показывают: EQ предсказывает успех лидера лучше, чем IQ.' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/structures" className="link-arrow text-sm">← Структуры</Link>
            <Link href="/personnel" className="btn">Далее: Персонал →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}