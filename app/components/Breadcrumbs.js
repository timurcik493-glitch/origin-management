'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAMES = {
  '': 'Главная',
  'basics': 'Основы',
  'history': 'История',
  'functions': 'Функции',
  'structures': 'Структуры',
  'leadership': 'Лидерство',
  'personnel': 'Персонал',
  'motivation': 'Мотивация',
  'communications': 'Коммуникации',
  'conflicts': 'Конфликты',
  'decisions': 'Решения',
  'strategy': 'Стратегия',
  'projects': 'Проекты',
  'control': 'Контроль',
  'modern': 'Современный',
  'glossary': 'Глоссарий',
  'quiz': 'Тесты',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segment = pathname.replace('/', '');
  const name = NAMES[segment] || '';

  if (!segment || !name) return null;

  return (
    <nav className="breadcrumbs">
      <Link href="/">Главная</Link>
      <span className="sep">/</span>
      <span className="current">{name}</span>
    </nav>
  );
}