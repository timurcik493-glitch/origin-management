import Link from "next/link";
import Reveal from "../components/Reveal";
import Funnel from "../components/Funnel";
import Accordion from "../components/Accordion";

export default function Personnel() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 06 · Персонал</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Управление персоналом
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Подбор, адаптация, развитие и оценка сотрудников. Как построить
              команду, которая работает долго и с удовольствием.
            </p>
          </div>
        </Reveal>

        {/* ЖИЗНЕННЫЙ ЦИКЛ СОТРУДНИКА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Жизненный цикл сотрудника</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Пять этапов от вакансии до ухода. Каждый влияет на следующий.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                  Воронка найма
                </div>
                <Funnel steps={[
                  { label: '100%', name: 'Отклики на вакансию' },
                  { label: '40%', name: 'Прошли скрининг' },
                  { label: '15%', name: 'Собеседование' },
                  { label: '5%', name: 'Финалисты' },
                  { label: '2%', name: 'Оффер принят' },
                ]} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-4">
                  Этапы
                </div>
                <div className="space-y-4">
                  {[
                    { n: '01', t: 'Найм', d: 'Поиск, отбор, оффер. Важно оценивать не только навыки, но и совпадение ценностей.' },
                    { n: '02', t: 'Адаптация', d: 'Первые 3 месяца решают, останется человек или уйдёт. Онбординг — критичен.' },
                    { n: '03', t: 'Развитие', d: 'Обучение, ротация, наставничество. Сотрудник должен видеть свой рост.' },
                    { n: '04', t: 'Оценка', d: 'Регулярная обратная связь, KPI, performance review. Без оценки нет роста.' },
                    { n: '05', t: 'Удержание или уход', d: 'Кто-то растёт, кто-то уходит. Оба варианта — нормально при правильной культуре.' },
                  ].map(x => (
                    <div key={x.n} className="flex gap-3">
                      <div className="mono text-xs font-semibold text-[var(--accent)] flex-shrink-0 w-6 pt-1">
                        {x.n}
                      </div>
                      <div>
                        <div className="font-semibold text-sm mb-0.5">{x.t}</div>
                        <div className="text-xs text-[var(--ink-3)] leading-relaxed">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* МЕТОДЫ ОТБОРА */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Методы отбора</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">Что реально работает — и в каких случаях</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Метод</th>
                    <th>Что оценивает</th>
                    <th>Надёжность</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { m: 'Резюме и скрининг', e: 'Формальные данные', r: 'Низкая', c: 'Низкая' },
                    { m: 'Интервью по компетенциям', e: 'Поведение в прошлом', r: 'Высокая', c: 'Средняя' },
                    { m: 'Тестовое задание', e: 'Реальные навыки', r: 'Высокая', c: 'Средняя' },
                    { m: 'Assessment center', e: 'Полный профиль', r: 'Очень высокая', c: 'Высокая' },
                    { m: 'Психологические тесты', e: 'Личность и IQ', r: 'Средняя', c: 'Низкая' },
                    { m: 'Рекомендации', e: 'Прошлый опыт', r: 'Низкая', c: 'Низкая' },
                  ].map(r => (
                    <tr key={r.m}>
                      <td>{r.m}</td>
                      <td>{r.e}</td>
                      <td>
                        <span style={{
                          color: r.r === 'Очень высокая' || r.r === 'Высокая' ? 'var(--green)' :
                                r.r === 'Средняя' ? 'var(--amber)' : 'var(--red)'
                        }}>{r.r}</span>
                      </td>
                      <td>{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* КЛЮЧЕВЫЕ МЕТРИКИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Ключевые метрики HR</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">Что измеряют в нормальной компании</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: 'Time-to-hire', d: 'Время от открытия вакансии до выхода сотрудника. Хорошо: 30–45 дней для специалиста.' },
              { n: 'Retention rate', d: 'Процент сотрудников, остающихся через год. Ниже 80% — тревожный сигнал.' },
              { n: 'eNPS', d: 'Employee Net Promoter Score — готовность рекомендовать компанию как работодателя. От −100 до +100.' },
              { n: 'Cost-per-hire', d: 'Стоимость найма одного сотрудника, включая рекламу, время рекрутера, онбординг.' },
              { n: 'Engagement', d: 'Уровень вовлечённости — насколько сотрудники хотят работать хорошо, а не просто «ходить».' },
              { n: 'Turnover', d: 'Текучесть кадров. Высокая = плохое управление. Слишком низкая = застой.' },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 80}>
                <div className="mini-card h-full">
                  <div className="mini-card-title mono">{x.n}</div>
                  <div className="mini-card-desc mt-2">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* РАЗВИТИЕ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Обучение и развитие</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: '70% — на работе', d: 'Челленджи, новые проекты, ротация. Основной способ роста — делать новое.' },
              { t: '20% — через людей', d: 'Наставники, менторы, обратная связь. Учиться у тех, кто уже прошёл путь.' },
              { t: '10% — курсы', d: 'Формальное обучение: тренинги, курсы, книги. Только 10% — потому что без практики не работает.' },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="font-semibold mb-2">{x.t}</h3>
                  <p className="text-sm text-[var(--ink-3)] leading-relaxed">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/leadership" className="link-arrow text-sm">← Лидерство</Link>
            <Link href="/motivation" className="btn">Далее: Мотивация →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}