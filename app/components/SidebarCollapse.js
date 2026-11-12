'use client';
import { useEffect } from 'react';

export default function SidebarCollapse() {
  useEffect(() => {
    const onScroll = () => {
      const sidebar = document.querySelector('.sidebar');
      if (!sidebar) return;
      if (window.scrollY > 60) {
        sidebar.classList.add('scrolled');
      } else {
        sidebar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}