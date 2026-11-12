'use client';
import { useEffect } from 'react';
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

export default function AutoBreadcrumbs() {
  const pathname = usePathname();

  useEffect(() => {
    // Только для внутренних страниц
    const segment = pathname.replace('/', '');
    if (!segment || !NAMES[segment]) return;

    // Подождать, пока DOM отрендерится
    const timer = setTimeout(() => {
      const container = document.querySelector('.main-with-sidebar > div');
      if (!container) return;
      if (container.querySelector('.breadcrumbs-auto')) return;

      const nav = document.createElement('nav');
      nav.className = 'breadcrumbs breadcrumbs-auto';
      nav.innerHTML = `
        <a href="/">Главная</a>
        <span class="sep">/</span>
        <span class="current">${NAMES[segment]}</span>
      `;
      container.insertBefore(nav, container.firstChild);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}