'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PAGE_MAP = {
  '/': 'home',
  '/basics': 'basics',
  '/history': 'history',
  '/functions': 'functions',
  '/structures': 'structures',
  '/leadership': 'leadership',
  '/personnel': 'personnel',
  '/motivation': 'motivation',
  '/communications': 'communications',
  '/conflicts': 'conflicts',
  '/decisions': 'decisions',
  '/strategy': 'strategy',
  '/projects': 'projects',
  '/control': 'control',
  '/modern': 'modern',
  '/glossary': 'glossary',
  '/quiz': 'quiz',
};

export default function PageTheme() {
  const pathname = usePathname();

  useEffect(() => {
    const page = PAGE_MAP[pathname] || 'home';
    document.body.setAttribute('data-page', page);
  }, [pathname]);

  return <div className="page-glow" />;
}