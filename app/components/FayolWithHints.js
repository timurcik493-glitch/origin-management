'use client';
import { useState } from 'react';

const PRINCIPLES = [
  { n: 1, title: 'Разделение труда', desc: 'Специализация повышает эффективность', hint: 'На конвейере Toyota каждый рабочий выполняет одну операцию — это ускоряет сборку в 3 раза' },
  { n: 2, title: 'Полномочия и ответственность', desc: 'Право отдавать приказы + обязанность выполнять', hint: 'Тимлид может решать задачи команды до 500К ₽, а выше — согласование с CPO' },
  { n: 3, title: 'Дисциплина', desc: 'Соблюдение правил и договорённостей', hint: 'В Amazon опоздание на встречу = штраф для всей команды, не только опоздавшего' },
  { n: 4, title: 'Единоначалие', desc: 'Один сотрудник — один руководитель', hint: 'В матричной структуре нарушается — поэтому там конфликты приоритетов' },
  { n: 5, title: 'Единство направления', desc: 'Одна цель — один план — один лидер', hint: 'В OKR все команды двигаются к одной цели компании, а не к своим' },
  { n: 6, title: 'Подчинение личных интересов', desc: 'Общие цели выше частных', hint: 'Отказ от личной премии, чтобы сохранить команду в кризис' },
  { n: 7, title: 'Вознаграждение', desc: 'Справедливая оплата за труд', hint: 'Google платит оклад, а не бонус за KPI — чтобы избежать «игры в цифры»' },
  { n: 8, title: 'Централизация', desc: 'Баланс централизации и децентрализации', hint: 'В кризис Boeing централизует решения, в стабильность — отдаёт дивизионам' },
  { n: 9, title: 'Иерархия', desc: 'Чёткая цепь команд', hint: 'Слишком длинная иерархия тормозит — поэтому в стартапах 2-3 уровня' },
  { n: 10, title: 'Порядок', desc: 'Место для всего и всё на месте', hint: 'Метод 5S в Toyota: сортировка, порядок, стандарт' },
  { n: 11, title: 'Справедливость', desc: 'Доброжелательность + правосудие', hint: 'Правила одинаковы для директора и стажёра — как в Netflix' },
  { n: 12, title: 'Стабильность персонала', desc: 'Текучка — признак плохого управления', hint: 'В Apple средний стаж 8+ лет — это следствие культуры' },
  { n: 13, title: 'Инициатива', desc: 'Свобода предлагать и реализовывать', hint: 'В Google 20% времени на личные проекты — так появился Gmail' },
  { n: 14, title: 'Корпоративный дух', desc: 'Единство — сила команды', hint: 'В неформальной культуре Pixar любой может остановить проект и предложить идею' },
];

export default function FayolWithHints() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-2">
      {PRINCIPLES.map((p, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={p.n}
            className="accordion-item"
            style={{ borderColor: isOpen ? 'var(--accent)' : undefined }}
          >
            <div
              className="accordion-head"
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <div className="flex items-center gap-3">
                <span className="mono text-xs font-bold text-[var(--accent)] opacity-60 w-6">
                  {String(p.n).padStart(2, '0')}
                </span>
                <span>{p.title}</span>
              </div>
            </div>
            {isOpen && (
              <div className="accordion-body">
                <p className="mb-3">{p.desc}</p>
                <div className="p-3 rounded-lg bg-[var(--bg-3)] border-l-2 border-[var(--accent)]">
                  <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
                    Пример из бизнеса
                  </div>
                  <p className="text-sm text-[var(--ink-2)] leading-relaxed">{p.hint}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}