import Link from "next/link";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import PyramidLevels from "../components/PyramidLevels";
import Accordion from "../components/Accordion";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionNumber from "../components/SectionNumber";

export default function Basics() {
  return (
    <div className="main-with-sidebar">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        <Breadcrumbs />

        {/* HEADER */}
        <Reveal>
          <div className="mb-10">
            <div className="badge mb-4"><span className="badge-dot"></span>Раздел 01 · Основы</div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
              Основы менеджмента
            </h1>
            <p className="text-lg text-[var(--ink-2)] max-w-3xl">
              Понятие, сущность, цели, задачи и принципы управления. С чего начинается теория
              и почему менеджмент — это отдельная наука, а не просто «руководство людьми».
            </p>
          </div>
        </Reveal>

        {/* ОПРЕДЕЛЕНИЕ */}
        <Reveal delay={100}>
          <div className="card card-accent mb-6">
            <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
              Определение
            </div>
            <p className="text-xl text-[var(--ink)] leading-relaxed">
              <strong>Менеджмент</strong> — это система принципов, методов, средств и форм
              управления производством и людьми, направленная на достижение целей организации
              наиболее эффективным способом.
            </p>
          </div>
        </Reveal>

        {/* СУБЪЕКТ, ОБЪЕКТ, ЦЕЛЬ */}
        <section className="mb-12">
          <SectionNumber num="01" label="Три опоры" />
          <Reveal>
            <h2 className="text-2xl font-bold mb-5">Три опоры управления</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: '01', t: 'Субъект', d: 'Тот, кто управляет. Менеджер, руководитель, орган управления. Обладает властью, полномочиями и несёт ответственность за результат.' },
              { n: '02', t: 'Объект', d: 'То, чем управляют. Люди, процессы, ресурсы, проекты, организация в целом. Может быть как отдельный сотрудник, так и целая корпорация.' },
              { n: '03', t: 'Цель', d: 'То, ради чего всё делается. Конкретный измеримый результат, которого нужно достичь в заданные сроки с заданными ресурсами.' },
            ].map((x, i) => (
              <Reveal key={x.n} delay={i * 80}>
                <div className="mini-card h-full">
                  <div className="mini-card-num">{x.n}</div>
                  <div className="mini-card-title">{x.t}</div>
                  <div className="mini-card-desc">{x.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ЦЕЛИ И ЗАДАЧИ */}
        <section className="mb-12">
          <SectionNumber num="02" label="Цели и задачи" />
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal>
              <div className="card h-full">
                <h2 className="text-xl font-bold mb-4">Цели менеджмента</h2>
                <ul className="space-y-3 text-sm text-[var(--ink-2)]">
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">01</span>
                    <span><strong className="text-[var(--ink)]">Достижение целей организации</strong> — главная цель любого управления: прибыль, доля рынка, устойчивость.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">02</span>
                    <span><strong className="text-[var(--ink)]">Эффективность</strong> — максимум результата при минимуме затрат. Не «больше сделать», а «сделать правильнее».</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">03</span>
                    <span><strong className="text-[var(--ink)]">Устойчивое развитие</strong> — компания должна расти не только сегодня, но и через 5–10 лет.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">04</span>
                    <span><strong className="text-[var(--ink)]">Развитие людей</strong> — сотрудники растут вместе с компанией. Это и мотивация, и долгосрочная выгода.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card h-full">
                <h2 className="text-xl font-bold mb-4">Задачи менеджмента</h2>
                <ul className="space-y-3 text-sm text-[var(--ink-2)]">
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">01</span>
                    <span><strong className="text-[var(--ink)]">Организация производства</strong> — превратить ресурсы в продукт, а продукт в ценность для клиента.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">02</span>
                    <span><strong className="text-[var(--ink)]">Управление персоналом</strong> — подобрать, обучить, мотивировать и удержать нужных людей.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">03</span>
                    <span><strong className="text-[var(--ink)]">Координация</strong> — синхронизировать работу отделов, чтобы они тянули в одну сторону.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--accent)] font-bold">04</span>
                    <span><strong className="text-[var(--ink)]">Адаптация</strong> — реагировать на изменения рынка, технологий и законодательства.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* УРОВНИ */}
        <section className="mb-12">
          <SectionNumber num="03" label="Уровни" />
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">Уровни управления</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Чем выше уровень — тем больше стратегии и меньше операционки.
              Наведи на уровень, чтобы увидеть подробности.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card">
              <PyramidLevels />
            </div>
          </Reveal>
        </section>

        {/* ПРИНЦИПЫ ФАЙОЛЯ — аккордеон */}
        <section className="mb-12">
          <SectionNumber num="04" label="Принципы Файоля" />
          <Reveal>
            <h2 className="text-2xl font-bold mb-2">14 принципов Файоля</h2>
            <p className="text-[var(--ink-3)] mb-6 max-w-2xl">
              Анри Файоль сформулировал их в 1916 году. Спустя век они всё ещё
              работают — раскрой любой принцип, чтобы узнать подробнее.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={[
              { title: '1. Разделение труда', content: 'Специализация повышает эффективность: каждый делает то, что умеет лучше всех. Но перебарщивать нельзя — чрезмерная специализация снижает гибкость и мотивацию.' },
              { title: '2. Полномочия и ответственность', content: 'Полномочия — право отдавать приказы. Ответственность — обязанность выполнять. Одно без другого — либо диктатура, либо анархия. Давая полномочия, передавай и ответственность.' },
              { title: '3. Дисциплина', content: 'Соблюдение правил и договорённостей. Дисциплина держится на уважении к руководству и справедливых санкциях, а не на страхе.' },
              { title: '4. Единоначалие', content: 'У сотрудника должен быть только один руководитель. Два начальника = конфликт приоритетов и размытая ответственность.' },
              { title: '5. Единство направления', content: 'Одна цель — один план — один ответственный. Все действия в рамках группы должны иметь общую цель.' },
              { title: '6. Подчинение личных интересов общим', content: 'Интересы компании важнее личных амбиций. Но это улица с двусторонним движением: компания тоже должна уважать интересы сотрудников.' },
              { title: '7. Вознаграждение', content: 'Справедливая оплата за труд. Не обязательно максимальная — но справедливая и понятная.' },
              { title: '8. Централизация', content: 'Оптимальный баланс между централизацией и децентрализацией. В кризис — больше централизации, в стабильность — больше свободы подразделениям.' },
              { title: '9. Иерархия', content: 'Чёткая цепь команд от верха до низа. Но слишком длинная иерархия тормозит решения — иногда нужны «мостики» между уровнями.' },
              { title: '10. Порядок', content: 'Место для всего и всё на своём месте. Касается не только вещей, но и людей: правильный человек на правильной должности.' },
              { title: '11. Справедливость', content: 'Сочетание доброжелательности и правосудия. Менеджер должен быть и человечным, и последовательным в правилах.' },
              { title: '12. Стабильность персонала', content: 'Высокая текучка — признак плохого управления. Люди должны успевать приносить пользу и расти.' },
              { title: '13. Инициатива', content: 'Свобода предлагать и реализовывать идеи. Лучше ошибиться с инициативным сотрудником, чем получить пассивного исполнителя.' },
              { title: '14. Корпоративный дух', content: 'Единство — сила команды. Разделяй и властвуй — плохая стратегия. Объединяй и расти — хорошая.' },
            ]} />
          </Reveal>
        </section>

        {/* ЦИФРЫ */}
        <section className="mb-12">
          <SectionNumber num="05" label="В цифрах" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: 4, l: 'функции управления' },
              { n: 3, l: 'уровня менеджмента' },
              { n: 14, l: 'принципов Файоля' },
              { n: 5, l: 'классических школ' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="stat">
                  <div className="stat-num"><Counter to={s.n} /></div>
                  <div className="stat-label">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ВЫВОДЫ */}
        <section className="mb-10">
          <SectionNumber num="06" label="Выводы" />
          <Reveal>
            <div className="card card-accent">
              <div className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-3">
                Главное из раздела
              </div>
              <ul className="space-y-2 text-sm text-[var(--ink-2)]">
                <li>· Менеджмент — это система, а не набор приёмов.</li>
                <li>· Управление всегда включает субъект, объект и цель.</li>
                <li>· Три уровня менеджмента требуют разных компетенций.</li>
                <li>· 14 принципов Файоля работают и в 2026 году.</li>
              </ul>
            </div>
          </Reveal>
        </section>

        {/* НАВИГАЦИЯ */}
        <Reveal>
          <div className="flex justify-between items-center pt-6 border-t border-[var(--line)] flex-wrap gap-4">
            <Link href="/" className="link-arrow text-sm">← Введение</Link>
            <Link href="/history" className="btn">Далее: История →</Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}