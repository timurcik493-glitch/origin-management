'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Search from './Search';
import SidebarProgress from './SidebarProgress';
import SidebarCollapse from './SidebarCollapse';

// Простые штриховые иконки (1.5px, как в Linear/Notion)
const Icon = ({ d }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, opacity: 0.75 }}
  >
    <path d={d} />
  </svg>
);

const ICONS = {
  home: 'M3 12L12 3l9 9M5 10v10h14V10',
  book: 'M4 4h11a3 3 0 013 3v13H7a3 3 0 01-3-3V4zM4 17a3 3 0 013-3h11',
  clock: 'M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  cycle: 'M4 12a8 8 0 0114-5.3M20 4v4h-4M20 12a8 8 0 01-14 5.3M4 20v-4h4',
  org: 'M12 3v6M12 9H6a2 2 0 00-2 2v3M12 9h6a2 2 0 012 2v3M6 14h-.5A1.5 1.5 0 004 15.5V19M18 14h.5A1.5 1.5 0 0120 15.5V19M9 19h6',
  message: 'M21 11.5a8.4 8.4 0 01-9 8.4 9.3 9.3 0 01-3.3-.6L3 21l1.7-4.7A8.4 8.4 0 013 11.5 8.5 8.5 0 0112 3a8.5 8.5 0 019 8.5z',
  zap: 'M13 2L3 14h8l-1 8 10-12h-8l1-8z',
  crown: 'M3 8l4 4 5-7 5 7 4-4-2 12H5L3 8z',
  users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
  fire: 'M8 14s1.5 2 4 2 4-2 4-2M12 2s4 4 4 9-1.5 7-4 7-4-2-4-7 4-9 4-9z',
  target: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 17a5 5 0 100-10 5 5 0 000 10zM12 13a1 1 0 100-2 1 1 0 000 2z',
  compass: 'M12 22a10 10 0 100-20 10 10 0 000 20zM16.2 7.8l-2.9 7.4-7.4 2.9 2.9-7.4 7.4-2.9z',
  layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  spark: 'M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  check: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11',
};

const NAV = [
  {
    label: 'Начало',
    items: [{ href: '/', label: 'Введение', icon: 'home' }],
  },
  {
    label: 'Основы',
    items: [
      { href: '/basics', label: 'Основы менеджмента', icon: 'book' },
      { href: '/history', label: 'История', icon: 'clock' },
      { href: '/functions', label: 'Функции', icon: 'cycle' },
    ],
  },
  {
    label: 'Организация',
    items: [
      { href: '/structures', label: 'Орг. структуры', icon: 'org' },
      { href: '/communications', label: 'Коммуникации', icon: 'message' },
      { href: '/conflicts', label: 'Конфликты', icon: 'zap' },
    ],
  },
  {
    label: 'Люди',
    items: [
      { href: '/leadership', label: 'Лидерство', icon: 'crown' },
      { href: '/personnel', label: 'Персонал', icon: 'users' },
      { href: '/motivation', label: 'Мотивация', icon: 'fire' },
    ],
  },
  {
    label: 'Стратегия',
    items: [
      { href: '/decisions', label: 'Решения', icon: 'target' },
      { href: '/strategy', label: 'Стратегия', icon: 'compass' },
      { href: '/projects', label: 'Проекты', icon: 'layers' },
    ],
  },
  {
    label: 'Эффективность',
    items: [
      { href: '/control', label: 'Контроль и KPI', icon: 'activity' },
      { href: '/modern', label: 'Современный', icon: 'spark' },
    ],
  },
  {
    label: 'Справочник',
    items: [
      { href: '/glossary', label: 'Глоссарий', icon: 'list' },
      { href: '/quiz', label: 'Тесты', icon: 'check' },
    ],
  },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/60 z-30 lg:hidden" />
      )}
      <aside className={`sidebar ${open ? 'open' : ''}`} style={{ position: 'fixed' }}>
        <SidebarCollapse />
        <SidebarProgress />

        <Link href="/" className="sidebar-brand">
          <div className="sidebar-logo">O</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>ORIGIN</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--ink-3)', letterSpacing: '0.1em' }}>
              MANAGEMENT · 2026
            </div>
          </div>
        </Link>

        <div style={{ padding: '0.75rem' }}>
          <Search />
        </div>

        <nav>
          {NAV.map((group) => (
            <div key={group.label} className="sidebar-group">
              <div className="sidebar-group-label">{group.label}</div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`sidebar-item ${pathname === item.href ? 'active' : ''}`}
                >
                  <Icon d={ICONS[item.icon]} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div style={{ padding: '1.5rem 1.25rem', fontSize: '0.7rem', color: 'var(--ink-4)', borderTop: '1px solid var(--line)', marginTop: '1rem' }}>
          Educational platform<br />© ORIGIN MMXXVI
        </div>
      </aside>
    </>
  );
}