'use client';
import { useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";
import Confetti from "../components/Confetti";

const QUESTIONS = [
  {
    q: 'Сколько функций управления выделил Анри Файоль?',
    options: ['3', '4', '5', '7'],
    correct: 1,
    explain: 'Файоль выделил 4 функции: планирование, организация, мотивация, контроль. Иногда добавляют 5-ю — координацию, но классическая модель — 4.',
  },
  {
    q: 'Что НЕ является гигиеническим фактором по Герцбергу?',
    options: ['Зарплата', 'Условия труда', 'Политика компании', 'Признание'],
    correct: 3,
    explain: 'Признание — это мотиватор, а не гигиенический фактор. Гигиенические (зарплата, условия, политика) снимают недовольство, но не мотивируют.',
  },
  {
    q: 'Какая структура предполагает двойное подчинение сотрудника?',
    options: ['Линейная', 'Функциональная', 'Матричная', 'Дивизиональная'],
    correct: 2,
    explain: 'Матричная структура: сотрудник подчиняется и функциональному руководителю, и руководителю проекта. Гибко, но конфликтно.',
  },
  {
    q: 'Что означает аббревиатура SMART?',
    options: [
      'Specific, Measurable, Achievable, Relevant, Time-bound',
      'Simple, Modern, Active, Real, Timed',
      'Strategic, Managed, Agile, Reactive, Tested',
      'Strong, Motivated, Action, Result, Task',
    ],
    correct: 0,
    explain: 'SMART — критерии постановки цели: Specific (конкретная), Measurable (измеримая), Achievable (достижимая), Relevant (релевантная), Time-bound (с ограничением срока).',
  },
  {
    q: 'В сетке Томаса-Килманна стратегия «Сотрудничество» — это...',
    options: [
      'Высокая настойчивость + низкая кооперация',
      'Высокая настойчивость + высокая кооперация',
      'Низкая настойчивость + низкая кооперация',
      'Низкая настойчивость + высокая кооперация',
    ],
    correct: 1,
    explain: 'Сотрудничество (Collaborate) — максимум и настойчивости, и кооперации. Ищем решение, устраивающее всех. Считается оптимальным в долгую.',
  },
  {
    q: 'Что такое OKR?',
    options: [
      'Метрика эффективности продаж',
      'Система целей: Objectives & Key Results',
      'Метод оценки персонала',
      'Стандарт финансовой отчётности',
    ],
    correct: 1,
    explain: 'OKR — Objectives & Key Results: амбициозная цель + 3–5 измеримых ключевых результатов. Используется Google, Intel, Spotify.',
  },
  {
    q: 'Какой цикл описывает непрерывное улучшение по Демингу?',
    options: ['SWOT', 'SMART', 'PDCA', 'BCG'],
    correct: 2,
    explain: 'PDCA: Plan → Do → Check → Act. Деминг формализовал цикл в 1950-е, он лёг в основу Toyota Production System.',
  },
  {
    q: 'Сколько сил в модели конкуренции Портера?',
    options: ['3', '5', '7', '9'],
    correct: 1,
    explain: '5 сил: угроза новых игроков, сила поставщиков, сила покупателей, угроза заменителей, интенсивность конкуренции.',
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const select = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers({ ...answers, [qIdx]: optIdx });
  };

  const score = Object.entries(answers).filter(([i, a]) => QUESTIONS[i].correct === a).length;

  return (
    <div className="main-with-sidebar">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">

        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Справочник · Проверка знаний</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Тест по менеджменту
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              8 вопросов по всему курсу. После ответа — разбор правильного
              варианта с объяснением.
            </p>
          </div>
        </Reveal>

        {submitted && (
          <>
            <Reveal>
              <div className="card card-accent mb-6 text-center">
                <div className="text-sm uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                  Результат
                </div>
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                  {score} / {QUESTIONS.length}
                </div>
                <div className="text-sm text-[var(--ink-2)]">
                  {score === QUESTIONS.length ? 'Идеально! Вы знаете теорию.' :
                   score >= QUESTIONS.length * 0.7 ? 'Хороший результат. Есть что повторить.' :
                   'Стоит вернуться к разделам курса.'}
                </div>
              </div>
            </Reveal>
            <Confetti trigger={score === QUESTIONS.length && submitted} />
          </>
        )}

        <div className="space-y-4">
          {QUESTIONS.map((q, qIdx) => (
            <Reveal key={qIdx} delay={qIdx * 40}>
              <div className="quiz-card">
                <div className="quiz-q">
                  <span className="text-[var(--accent)] mono mr-2">{String(qIdx + 1).padStart(2, '0')}.</span>
                  {q.q}
                </div>
                <div className="quiz-options">
                  {q.options.map((opt, optIdx) => {
                    const selected = answers[qIdx] === optIdx;
                    const isCorrect = q.correct === optIdx;
                    let cls = 'quiz-option';
                    if (submitted) {
                      cls += ' disabled';
                      if (isCorrect) cls += ' correct';
                      else if (selected) cls += ' wrong';
                    } else if (selected) {
                      cls += ' active';
                    }
                    return (
                      <button
                        key={optIdx}
                        className={cls}
                        onClick={() => select(qIdx, optIdx)}
                        style={selected && !submitted ? { borderColor: 'var(--accent)', background: 'var(--accent-bg)' } : {}}
                      >
                        <span className="quiz-option-letter">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {submitted && (
                  <div className="quiz-explain">
                    <strong style={{ color: 'var(--accent)' }}>Разбор: </strong>
                    {q.explain}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {!submitted ? (
          <div className="mt-6 flex justify-center">
            <button
              className="btn"
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(answers).length < QUESTIONS.length}
              style={{
                opacity: Object.keys(answers).length < QUESTIONS.length ? 0.5 : 1,
                cursor: Object.keys(answers).length < QUESTIONS.length ? 'not-allowed' : 'pointer',
              }}
            >
              Проверить ответы ({Object.keys(answers).length} / {QUESTIONS.length})
            </button>
          </div>
        ) : (
          <div className="mt-6 flex justify-center gap-3">
            <button
              className="btn btn-secondary"
              onClick={() => { setAnswers({}); setSubmitted(false); window.scrollTo(0, 0); }}
            >
              Пройти заново
            </button>
            <Link href="/" className="btn">На главную</Link>
          </div>
        )}

        <Reveal>
          <div className="flex justify-between items-center pt-6 mt-8 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/glossary" className="link-arrow text-sm">← Глоссарий</Link>
            <Link href="/" className="link-arrow text-sm">Введение →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}