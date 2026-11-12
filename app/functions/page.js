'use client';
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

const FUNCTIONS = [
  {
    n: 'I',
    title: 'Планирование',
    desc: 'Постановка целей и определение путей их достижения',
    color: '#e8a78d',
    details: {
      def: 'Планирование — это процесс определения целей организации и разработки планов их достижения. Отвечает на вопросы: что делать, зачем, когда, кто будет делать и какие ресурсы нужны.',
      types: ['Стратегическое (3–10 лет)', 'Тактическое (1–3 года)', 'Оперативное (до 1 года)'],
      methods: ['SMART-цели', 'Дерево целей', 'Сценарное планирование', 'Бюджетирование'],
      example: 'Компания ставит цель увеличить выручку на 20% к концу года. Разбивает по кварталам, по отделам, по каналам продаж.',
    },
  },
  {
    n: 'II',
    title: 'Организация',
    desc: 'Создание структуры и распределение ресурсов',
    color: '#d99578',
    details: {
      def: 'Организация — это процесс создания структуры компании, распределения задач, полномочий и ресурсов между исполнителями, чтобы план стал выполнимым.',
      types: ['Формальная и неформальная структура', 'Централизация / децентрализация', 'Линейная / функциональная / матричная'],
      methods: ['Организационные схемы', 'Матрица RACI', 'Делегирование', 'Регламенты и процессы'],
      example: 'Новый продукт требует кросс-функциональной команды: маркетинг, разработка, поддержка. Каждой роли прописаны задачи и зоны ответственности.',
    },
  },
  {
    n: 'III',
    title: 'Мотивация',
    desc: 'Побуждение сотрудников к эффективной работе',
    color: '#b8b8b8',
    details: {
      def: 'Мотивация — это процесс побуждения сотрудников к действию через удовлетворение их потребностей и ожиданий. Отвечает на вопрос: зачем человеку делать то, что нужно компании.',
      types: ['Материальная (зарплата, бонусы)', 'Нематериальная (признание, рост)', 'Внутренняя и внешняя'],
      methods: ['Пирамида Маслоу', 'Двухфакторная теория Герцберга', 'Теория X и Y МакГрегора', 'OKR и KPI'],
      example: 'Если сотрудник не растёт и не получает признания — он уйдёт, даже при хорошей зарплате. Деньги — гигиенический фактор, а не мотиватор.',
    },
  },
  {
    n: 'IV',
    title: 'Контроль',
    desc: 'Оценка результатов и корректировка действий',
    color: '#6b6b6b',
    details: {
      def: 'Контроль — это процесс наблюдения за фактическими результатами и их сравнения с планами. Если есть отклонения — корректировка. Замыкает цикл управления и запускает новый.',
      types: ['Предварительный (до начала)', 'Текущий (в процессе)', 'Заключительный (по факту)'],
      methods: ['KPI', 'OKR', 'Dashboard и отчёты', 'Аудит'],
      example: 'Компания планировала 20% роста, но получила 12%. Анализ показывает: один из каналов продаж не сработал. Корректируют план на следующий квартал.',
    },
  },
];

export default function Functions() {
  const [activeFn, setActiveFn] = useState(0);

  const active = FUNCTIONS[activeFn];

  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 03 · Функции</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Функции менеджмента
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Цикл, который повторяется непрерывно: планирование → организация →
              мотивация → контроль → снова планирование.
            </p>
          </div>
        </Reveal>

        {/* ИНТЕРАКТИВНЫЙ ЦИКЛ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Классический цикл управления</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Нажми на функцию, чтобы раскрыть подробности ниже
            </p>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-3 mb-6">
            {FUNCTIONS.map((f, i) => (
              <Reveal key={f.n} delay={i * 80}>
                <div
                  className={`cycle-node ${activeFn === i ? 'active' : ''}`}
                  onClick={() => setActiveFn(i)}
                >
                  <div className="cycle-num">{f.n}</div>
                  <div className="cycle-title">{f.title}</div>
                  <div className="cycle-desc">{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Стрелки-связи */}
          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--ink-3)] flex-wrap">
              {FUNCTIONS.map((f, i) => (
                <span key={f.n} className="flex items-center gap-2">
                  <span>{f.title}</span>
                  {i < FUNCTIONS.length - 1 && <span style={{ color: 'var(--accent)' }}>→</span>}
                </span>
              ))}
              <span style={{ color: 'var(--accent)' }}>↻</span>
            </div>
          </Reveal>
        </section>

        {/* АКТИВНАЯ ФУНКЦИЯ */}
        <section className="mb-12">
          <Reveal key={activeFn}>
            <div className="card" style={{ borderColor: active.color }}>
              <div className="flex items-baseline gap-3 mb-4">
                <div
                  className="text-5xl font-bold mono"
                  style={{ color: active.color }}
                >
                  {active.n}
                </div>
                <h3 className="text-2xl font-bold">{active.title}</h3>
              </div>

              <p className="text-[var(--ink-2)] mb-6 leading-relaxed">
                {active.details.def}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-3)] mb-3">
                    Виды
                  </div>
                  <ul className="space-y-2 text-sm">
                    {active.details.types.map((t) => (
                      <li key={t} className="flex gap-2 text-[var(--ink-2)]">
                        <span style={{ color: active.color }}>·</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-3)] mb-3">
                    Методы
                  </div>
                  <ul className="space-y-2 text-sm">
                    {active.details.methods.map((m) => (
                      <li key={m} className="flex gap-2 text-[var(--ink-2)]">
                        <span style={{ color: active.color }}>·</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="mt-6 p-4 rounded-lg"
                style={{ background: 'var(--bg-3)', borderLeft: `2px solid ${active.color}` }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-3)] mb-2">
                  Пример
                </div>
                <p className="text-sm text-[var(--ink-2)] leading-relaxed">
                  {active.details.example}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ВЗАИМОСВЯЗЬ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Как функции связаны</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Функции не выполняются по очереди. Они переплетены и повторяются на всех уровнях.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <svg viewBox="0 0 600 260" className="w-full h-auto">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8a78d" />
                  </marker>
                </defs>
                {[
                  { x: 100, y: 130, t: 'Планирование', c: '#e8a78d' },
                  { x: 300, y: 130, t: 'Организация', c: '#d99578' },
                  { x: 500, y: 130, t: 'Мотивация', c: '#b8b8b8' },
                ].map((n, i) => (
                  <g key={i}>
                    <rect x={n.x - 70} y={n.y - 25} width="140" height="50" rx="10"
                      fill="var(--card)" stroke={n.c} strokeWidth="1.5" />
                    <text x={n.x} y={n.y + 5} textAnchor="middle" fill="var(--ink)"
                      fontSize="13" fontFamily="Inter" fontWeight="500">{n.t}</text>
                  </g>
                ))}
                <path d="M 170 130 L 225 130" stroke="#e8a78d" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
                <path d="M 370 130 L 425 130" stroke="#e8a78d" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
                <path d="M 500 155 Q 500 220 300 220 Q 100 220 100 155" stroke="#e8a78d" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
                <text x="300" y="238" textAnchor="middle" fill="#6b6b6b" fontSize="11" fontFamily="JetBrains Mono">контроль → снова планирование</text>
                <rect x="455" y="105" width="95" height="50" rx="10"
                  fill="var(--card)" stroke="var(--line-2)" strokeWidth="1.5" opacity="0" />
              </svg>
              <div className="text-sm text-[var(--ink-3)] mt-4 text-center">
                Контроль замыкает цикл и даёт данные для нового планирования
              </div>
            </div>
          </Reveal>
        </section>

        {/* ПОДРОБНЕЕ */}
        <section className="mb-12">
          <Reveal>
            <h2 className="text-2xl font-bold mb-6">Ключевые концепции</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: 'Что происходит, если пропустить одну из функций?', content: 'Пропуск планирования = хаотичные действия. Пропуск организации = задачи не распределены. Пропуск мотивации = команда не вовлечена. Пропуск контроля = ошибки не обнаруживаются. Полный цикл критичен.' },
              { title: 'Почему контроль замыкает цикл?', content: 'Контроль даёт обратную связь: что сработало, а что нет. Эти данные становятся входом для нового планирования. Без контроля цикл превращается в линейный процесс — и организация теряет способность учиться.' },
              { title: 'Планирование и контроль — две стороны одной медали', content: 'План без контроля — фантазия. Контроль без плана — бессмысленное наблюдение. Они всегда идут в паре: сначала ставим цель, потом сверяем результат.' },
              { title: 'Мотивация как связующее звено', content: 'Мотивация превращает формальную структуру в работающую команду. Без неё люди будут работать вполсилы, даже если всё спланировано и организовано идеально.' },
            ]} />
          </Reveal>
        </section>

        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/history" className="link-arrow text-sm">← История</Link>
            <Link href="/structures" className="btn">Далее: Структуры →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}