'use client';
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

const MASLOW = [
  { n: 1, t: 'Физиологические', s: 'Еда, сон, зарплата, комфорт', w: 100 },
  { n: 2, t: 'Безопасность', s: 'Стабильность, защищённость', w: 88 },
  { n: 3, t: 'Социальные', s: 'Команда, дружба, принадлежность', w: 75 },
  { n: 4, t: 'Признание', s: 'Уважение, статус, достижения', w: 62 },
  { n: 5, t: 'Самореализация', s: 'Рост, творчество, потенциал', w: 50 },
];

export default function Motivation() {
  const [activeTheory, setActiveTheory] = useState(0);

  const THEORIES = [
    {
      author: 'Абрахам Маслоу',
      title: 'Пирамида потребностей',
      year: '1943',
      short: '5 уровней потребностей — от базовых к возвышенным',
      idea: 'Люди мотивированы последовательно: пока не удовлетворены базовые нужды (еда, безопасность), высшие (признание, самореализация) не работают. Удовлетворённая потребность перестаёт мотивировать.',
      app: 'Для менеджера: сначала обеспечь достойную зарплату и стабильность, потом говори о признании и развитии. Если базовый уровень не закрыт — высшие мотиваторы бесполезны.',
    },
    {
      author: 'Фредерик Герцберг',
      title: 'Двухфакторная теория',
      year: '1959',
      short: 'Гигиенические факторы и мотиваторы — две разные категории',
      idea: 'Есть гигиенические факторы (зарплата, условия, политика компании) — их отсутствие вызывает недовольство, но их наличие не мотивирует. И есть мотиваторы (признание, рост, достижения) — они вызывают удовлетворённость и вовлечённость.',
      app: 'Поднять зарплату — снять недовольство, но не сделать счастливым. Для вовлечённости нужно давать признание, интересные задачи, возможности роста.',
    },
    {
      author: 'Дуглас МакГрегор',
      title: 'Теория X и Y',
      year: '1960',
      short: 'Два взгляда менеджера на природу сотрудников',
      idea: 'Теория X: люди ленивы, не любят работать, их нужно контролировать и принуждать. Теория Y: люди хотят работать, брать ответственность, реализовывать потенциал. Стиль менеджера создаёт ту реальность, в которую он верит.',
      app: 'Если руководитель относится к людям как к безответственным — они такими и становятся. Вера в потенциал команды — не наивность, а управленческая стратегия.',
    },
    {
      author: 'Виктор Врум',
      title: 'Теория ожиданий',
      year: '1964',
      short: 'Мотивация = ожидание × инструментальность × валентность',
      idea: 'Человек мотивирован, когда: (1) верит, что усилие приведёт к результату, (2) верит, что результат приведёт к вознаграждению, (3) хочет именно это вознаграждение. Если звено отсутствует — мотивации нет.',
      app: 'Проверь три вещи: чёткие цели и ресурсы, честная связка «результат → награда», награда действительно значима для сотрудника. Ломается любое звено — рушится мотивация.',
    },
    {
      author: 'Дэвид МакКлелланд',
      title: 'Теория приобретённых потребностей',
      year: '1961',
      short: 'Три потребности: достижение, власть, причастность',
      idea: 'У каждого человека преобладает одна из трёх потребностей: достижение (делать лучше), власть (влиять), причастность (быть с людьми). Мотивация зависит от соответствия работы этой потребности.',
      app: 'Сотрудник с потребностью в достижении заскучает на рутине. С потребностью во власти — будет неудобен на подчинённой роли. Подбирай задачи под доминирующую потребность.',
    },
  ];

  const t = THEORIES[activeTheory];

  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 07 · Мотивация</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Мотивация
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Пять теорий, которые объясняют, почему люди работают хорошо — или
              плохо. И как менеджер может на это влиять.
            </p>
          </div>
        </Reveal>

        {/* ПИРАМИДА МАСЛОУ */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold mb-3">Пирамида Маслоу</h2>
                <p className="text-[var(--ink-2)] mb-4 leading-relaxed">
                  Абрахам Маслоу в 1943 году описал иерархию потребностей:
                  человек движется от базовых нужд к возвышенным.
                </p>
                <div className="card card-accent">
                  <p className="text-sm text-[var(--ink)] leading-relaxed">
                    <strong>Для менеджера:</strong> сначала обеспечь достойную
                    зарплату и безопасность. Только потом говори о признании,
                    росте и самореализации. Без базового уровня высшие мотиваторы
                    не работают.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                {[...MASLOW].reverse().map((m, i) => (
                  <div
                    key={m.n}
                    className="maslow-level"
                    style={{
                      width: `${m.w}%`,
                      transitionDelay: `${i * 60}ms`,
                    }}
                  >
                    <div className="maslow-num">УРОВЕНЬ {m.n}</div>
                    <div className="maslow-title">{m.t}</div>
                    <div className="maslow-sub">{m.s}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ПЕРЕКЛЮЧАТЕЛЬ ТЕОРИЙ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Пять теорий мотивации</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Нажми на теорию, чтобы увидеть подробный разбор
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-2 mb-6">
            {THEORIES.map((theory, i) => (
              <button
                key={theory.title}
                onClick={() => setActiveTheory(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  activeTheory === i
                    ? 'bg-[var(--accent-bg)] border-[var(--accent)] text-[var(--accent)]'
                    : 'bg-[var(--card)] border-[var(--line)] text-[var(--ink-2)] hover:border-[var(--line-2)]'
                }`}
              >
                {theory.author.split(' ').slice(-1)[0]}
              </button>
            ))}
          </div>

          <Reveal key={activeTheory}>
            <div className="card">
              <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <div className="theory-card-author">{t.author}</div>
                <span className="mono text-xs text-[var(--ink-3)]">{t.year}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
              <p className="text-[var(--accent)] text-sm font-medium mb-5">{t.short}</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-2">
                    Суть теории
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{t.idea}</p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--ink-3)] font-semibold mb-2">
                    Применение
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{t.app}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* СРАВНЕНИЕ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Сравнение теорий</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Теория</th>
                    <th>Автор</th>
                    <th>Год</th>
                    <th>Фокус</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: 'Иерархия потребностей', a: 'Маслоу', y: '1943', f: 'Потребности по уровням' },
                    { t: 'Двухфакторная', a: 'Герцберг', y: '1959', f: 'Гигиена vs мотиваторы' },
                    { t: 'X и Y', a: 'МакГрегор', y: '1960', f: 'Убеждения менеджера' },
                    { t: 'Теория ожиданий', a: 'Врум', y: '1964', f: 'Ожидание × ценность' },
                    { t: 'Приобретённые потребности', a: 'МакКлелланд', y: '1961', f: 'Достижение / власть / причастность' },
                  ].map(r => (
                    <tr key={r.t}>
                      <td>{r.t}</td>
                      <td>{r.a}</td>
                      <td className="mono text-xs">{r.y}</td>
                      <td>{r.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ВНУТРЕННЯЯ/ВНЕШНЯЯ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Внутренняя и внешняя мотивация</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Два принципиально разных механизма — и оба нужны
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                  Внешняя
                </div>
                <p className="text-sm text-[var(--ink-2)] mb-3 leading-relaxed">
                  Снаружи: деньги, бонусы, статус, страх наказания. Работает быстро, но недолго.
                </p>
                <div className="text-xs text-[var(--ink-3)]">
                  <strong className="text-[var(--green)]">Плюс:</strong> быстрый эффект
                  <br />
                  <strong className="text-[var(--red)]">Минус:</strong> исчезает, когда исчезает стимул
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card h-full">
                <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                  Внутренняя
                </div>
                <p className="text-sm text-[var(--ink-2)] mb-3 leading-relaxed">
                  Изнутри: интерес, смысл, автономия, мастерство. Работает медленно, но навсегда.
                </p>
                <div className="text-xs text-[var(--ink-3)]">
                  <strong className="text-[var(--green)]">Плюс:</strong> долгосрочный эффект
                  <br />
                  <strong className="text-[var(--red)]">Минус:</strong> сложно построить
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/personnel" className="link-arrow text-sm">← Персонал</Link>
            <Link href="/communications" className="btn">Далее: Коммуникации →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}