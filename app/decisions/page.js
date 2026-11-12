import Link from "next/link";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

const STEPS = [
  { n: '01', t: 'Определение проблемы', d: 'Что не так? Каковы симптомы и корневая причина? Не путай проблему со следствием.' },
  { n: '02', t: 'Сбор информации', d: 'Какие данные нужны? Что уже известно, чего не хватает? Не действуй вслепую.' },
  { n: '03', t: 'Генерация альтернатив', d: 'Минимум 3 варианта решения. Один вариант = не решение, а приказ.' },
  { n: '04', t: 'Оценка альтернатив', d: 'По критериям: стоимость, скорость, риски, обратимость, соответствие стратегии.' },
  { n: '05', t: 'Выбор', d: 'Принять решение и зафиксировать основание. Не откладывать бесконечно.' },
  { n: '06', t: 'Реализация', d: 'План действий, ответственные, сроки. Без реализации решение — это мнение.' },
  { n: '07', t: 'Оценка результата', d: 'Сработало или нет? Что учтём в следующий раз? Замыкаем цикл обучения.' },
];

export default function Decisions() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 10 · Решения</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Управленческие решения
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Как принимать решения, которые не хочется отменять через неделю.
              Этапы, методы, ошибки и способы их избежать.
            </p>
          </div>
        </Reveal>

        {/* 7 ЭТАПОВ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Семь этапов принятия решения</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Классический процесс от постановки проблемы до оценки результата
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="mini-card h-full">
                  <div className="mini-card-num">{s.n}</div>
                  <div className="mini-card-title mb-2">{s.t}</div>
                  <div className="mini-card-desc">{s.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ДЕРЕВО РЕШЕНИЙ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Дерево решений</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Визуальный способ оценить альтернативы и их последствия
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <svg viewBox="0 0 640 340" className="w-full h-auto">
                <defs>
                  <marker id="arrT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8a78d" />
                  </marker>
                </defs>
                <rect x="250" y="20" width="140" height="46" rx="8" fill="var(--accent)" />
                <text x="320" y="48" textAnchor="middle" fill="#0a0a0a" fontSize="13" fontWeight="700" fontFamily="Inter">Решение</text>

                <path d="M 290 66 L 140 130" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrT)" />
                <path d="M 320 66 L 320 130" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrT)" />
                <path d="M 350 66 L 500 130" stroke="#e8a78d" strokeWidth="1.5" fill="none" markerEnd="url(#arrT)" />

                <rect x="70" y="140" width="140" height="46" rx="8" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="140" y="168" textAnchor="middle" fill="var(--ink)" fontSize="12" fontFamily="Inter" fontWeight="500">Вариант A</text>

                <rect x="250" y="140" width="140" height="46" rx="8" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="320" y="168" textAnchor="middle" fill="var(--ink)" fontSize="12" fontFamily="Inter" fontWeight="500">Вариант B</text>

                <rect x="430" y="140" width="140" height="46" rx="8" fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" />
                <text x="500" y="168" textAnchor="middle" fill="var(--ink)" fontSize="12" fontFamily="Inter" fontWeight="500">Вариант C</text>

                {[140, 320, 500].map((x, i) => (
                  <g key={i}>
                    <path d={`M ${x} 186 L ${x - 30} 240`} stroke="var(--line-2)" strokeWidth="1" fill="none" markerEnd="url(#arrT)" opacity="0.7" />
                    <path d={`M ${x} 186 L ${x + 30} 240`} stroke="var(--line-2)" strokeWidth="1" fill="none" markerEnd="url(#arrT)" opacity="0.7" />
                  </g>
                ))}

                {[
                  { x: 110, y: 250, t: 'Успех +5' },
                  { x: 170, y: 250, t: 'Провал -2' },
                  { x: 290, y: 250, t: 'Успех +8' },
                  { x: 350, y: 250, t: 'Провал -3' },
                  { x: 470, y: 250, t: 'Успех +3' },
                  { x: 530, y: 250, t: 'Провал -1' },
                ].map((c, i) => (
                  <g key={i}>
                    <rect x={c.x - 26} y={c.y} width="52" height="26" rx="4"
                      fill={c.t.includes('Успех') ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.12)'}
                      stroke={c.t.includes('Успех') ? 'var(--green)' : 'var(--red)'} strokeWidth="1" />
                    <text x={c.x} y={c.y + 17} textAnchor="middle"
                      fill={c.t.includes('Успех') ? 'var(--green)' : 'var(--red)'}
                      fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">{c.t}</text>
                  </g>
                ))}

                <text x="320" y="315" textAnchor="middle" fill="var(--ink-3)" fontSize="10" fontFamily="JetBrains Mono">
                  Выбор = вариант с максимальной ожидаемой ценностью
                </text>
              </svg>
            </div>
          </Reveal>
        </section>

        {/* ТИПЫ РЕШЕНИЙ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Типы решений</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Тип</th>
                    <th>Характер</th>
                    <th>Уровень</th>
                    <th>Пример</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { t: 'Стратегические', c: 'Долгосрочные, необратимые', l: 'Топ', e: 'Выход на новый рынок' },
                    { t: 'Тактические', c: 'Среднесрочные, частично обратимые', l: 'Средний', e: 'Запуск нового канала продаж' },
                    { t: 'Оперативные', c: 'Краткосрочные, легко обратимые', l: 'Линейный', e: 'Перераспределение задач в команде' },
                    { t: 'Запрограммированные', c: 'По алгоритму, повторяющиеся', l: 'Любой', e: 'Заказ расходников' },
                    { t: 'Незапрограммированные', c: 'Новые, нестандартные', l: 'Топ / средний', e: 'Реакция на кризис' },
                  ].map(r => (
                    <tr key={r.t}>
                      <td>{r.t}</td>
                      <td>{r.c}</td>
                      <td className="mono text-xs">{r.l}</td>
                      <td>{r.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* ОШИБКИ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Когнитивные искажения</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Подтверждение (Confirmation Bias)', content: 'Ищем информацию, которая подтверждает нашу точку зрения, и игнорируем противоречащую. Решение: специально ищите аргументы «против» своей позиции.' },
              { title: 'Якорение', content: 'Первое число или факт «прилипает» и влияет на все последующие оценки. Решение: собирать данные до обсуждения, не называть ориентиры первыми.' },
              { title: 'Издержки утопленного корабля', content: '«Мы уже вложили столько, что нельзя останавливаться». Но прошлые вложения невозвратны — решение должно опираться на будущую ценность, а не на прошлые затраты.' },
              { title: 'Эффект доступности', content: 'Переоцениваем то, что легко вспомнить (свежие новости, яркие примеры). Решение: опираться на статистику, а не на последний громкий случай.' },
              { title: 'Групповое мышление', content: 'Команда начинает соглашаться друг с другом, чтобы избежать конфликта. Решение: назначать «адвоката дьявола», проводить анонимные опросы, разбивать на подгруппы.' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/conflicts" className="link-arrow text-sm">← Конфликты</Link>
            <Link href="/strategy" className="btn">Далее: Стратегия →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}