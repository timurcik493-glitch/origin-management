import Link from "next/link";
import Reveal from "../components/Reveal";
import InView from "../components/InView";
import LineChart from "../components/LineChart";

export default function History() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 02 · История</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              История управленческой мысли
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Сто пятнадцать лет развития: от конвейера Тейлора и таблицы Файоля —
              к Agile, OKR и цифровой трансформации.
            </p>
          </div>
        </Reveal>

        {/* ГОРИЗОНТАЛЬНЫЙ ТАЙМЛАЙН */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-3">Ключевые эпохи</h2>
            <p className="text-[var(--ink-3)] mb-4 max-w-2xl">
              Прокрути вправо → чтобы увидеть всё развитие теории
            </p>
          </Reveal>
          <InView className="timeline-anim">
            <div className="timeline-h">
              {[
                { y: '1911', n: 'Научное управление', d: 'Фредерик Тейлор публикует «Принципы научного управления». Хронометраж, стандарты, разделение труда.' },
                { y: '1916', n: 'Административная школа', d: 'Анри Файоль — «Общее и промышленное управление». 14 принципов и 5 функций менеджмента.' },
                { y: '1930', n: 'Школа человеческих отношений', d: 'Элтон Мэйо и Хоторнские эксперименты. Открытие: люди — не машины, важны отношения и внимание.' },
                { y: '1954', n: 'Management by Objectives', d: 'Питер Дракер — управление по целям. Фокус на результат, а не на процесс.' },
                { y: '1960', n: 'Количественная школа', d: 'Математика, статистика, исследование операций. Модели принятия решений.' },
                { y: '1970', n: 'Системный подход', d: 'Организация — открытая система. Взаимодействие с внешней средой важнее внутренней эффективности.' },
                { y: '1979', n: '5 сил Портера', d: 'Майкл Портер — модель конкурентного анализа, которая до сих пор используется в стратегии.' },
                { y: '1986', n: 'Цикл PDCA', d: 'Уильям Деминг формализует цикл непрерывного улучшения. Основа Toyota, Lean, Six Sigma.' },
                { y: '2001', n: 'Agile-манифест', d: 'Итеративная разработка, люди важнее процессов, реакция на изменения важнее следования плану.' },
                { y: '2010s', n: 'OKR', d: 'Google и Intel масштабируют Objectives & Key Results. Цели — прозрачны и измеримы.' },
                { y: '2020s', n: 'Цифровая трансформация', d: 'Данные, AI, удалённые команды, цифровые продукты. Менеджмент перестраивается под новую реальность.' },
              ].map((e) => (
                <div key={e.y} className="timeline-h-item">
                  <div className="timeline-h-year">{e.y}</div>
                  <div className="timeline-h-name">{e.n}</div>
                  <div className="timeline-h-desc">{e.d}</div>
                </div>
              ))}
            </div>
          </InView>
        </section>

        {/* ТЕОРЕТИКИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Отцы-основатели</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Пять мыслителей, без которых менеджмент не был бы тем, чем он является
            </p>
          </Reveal>
          <InView className="cards-anim">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { y: '1856–1915', n: 'Фредерик Тейлор', r: 'Научное управление', d: 'Инженер, который первым начал измерять труд. Придумал хронометраж, стандарты операций, дифференциальную оплату.' },
                { y: '1841–1925', n: 'Анри Файоль', r: 'Административная школа', d: 'Горный инженер, ставший теоретиком. Сформулировал 14 принципов и 5 функций — фундамент, на котором стоит всё.' },
                { y: '1880–1949', n: 'Элтон Мэйо', r: 'Человеческие отношения', d: 'Психолог и социолог. Хоторнские эксперименты показали: производительность зависит от внимания и отношений, а не только от условий.' },
                { y: '1909–2005', n: 'Питер Дракер', r: 'Управление по целям', d: '«Отец современного менеджмента». Ввёл MBO, знание как ресурс, ответственность менеджера за результат.' },
                { y: '1900–1993', n: 'Уильям Деминг', r: 'Управление качеством', d: 'Сформулировал цикл PDCA и 14 принципов качества. Япония после войны построила экономику на его идеях.' },
                { y: 'р. 1947', n: 'Майкл Портер', r: 'Конкурентная стратегия', d: 'Профессор Гарварда. Модель 5 сил, ценностная цепочка, теория конкурентных преимуществ.' },
              ].map((x) => (
                <div key={x.n} className="theorist h-full">
                  <div className="theorist-year">{x.y}</div>
                  <div className="theorist-name">{x.n}</div>
                  <div className="theorist-role">{x.r}</div>
                  <div className="theorist-idea">{x.d}</div>
                </div>
              ))}
            </div>
          </InView>
        </section>

        {/* ГРАФИК РОСТА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Рост значимости менеджмента</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Условный показатель влияния теории управления на экономику
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <LineChart
                data={[
                  { y: '1911', v: 10 },
                  { y: '1930', v: 22 },
                  { y: '1950', v: 38 },
                  { y: '1970', v: 55 },
                  { y: '1990', v: 72 },
                  { y: '2010', v: 88 },
                  { y: '2026', v: 100 }
                ]}
                height={260}
                color="#e8a78d"
              />
            </div>
          </Reveal>
        </section>

        {/* СРАВНЕНИЕ ЭПОХ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Сравнение подходов</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">Что ставит во главу угла каждая школа</p>
          </Reveal>
          <InView className="table-anim">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Школа</th>
                    <th>Период</th>
                    <th>Фокус</th>
                    <th>Сильная сторона</th>
                    <th>Ограничение</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { s: 'Научная', p: '1911–1930', f: 'Процессы, операции', pl: 'Точность, измеримость', mi: 'Игнорирует человека' },
                    { s: 'Административная', p: '1920–1950', f: 'Структура компании', pl: 'Ясные роли и правила', mi: 'Медленно реагирует' },
                    { s: 'Человеческих отношений', p: '1930–1950', f: 'Люди и климат', pl: 'Лояльность, вовлечённость', mi: 'Сложно измерить' },
                    { s: 'Количественная', p: '1950–1970', f: 'Данные и модели', pl: 'Объективность', mi: 'Требует больших данных' },
                    { s: 'Системная', p: '1970–1990', f: 'Взаимосвязи', pl: 'Целостный взгляд', mi: 'Высокая абстракция' },
                    { s: 'Современная', p: '2000–2026', f: 'Гибкость и данные', pl: 'Скорость, адаптивность', mi: 'Хаос без дисциплины' },
                  ].map((r) => (
                    <tr key={r.s}>
                      <td>{r.s}</td>
                      <td className="mono text-xs">{r.p}</td>
                      <td>{r.f}</td>
                      <td style={{ color: 'var(--green)' }}>+ {r.pl}</td>
                      <td style={{ color: 'var(--red)' }}>− {r.mi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InView>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/basics" className="link-arrow text-sm">← Основы</Link>
            <Link href="/functions" className="btn">Далее: Функции →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}