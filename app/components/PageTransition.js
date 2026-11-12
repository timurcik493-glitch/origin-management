'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const pathname = usePathname();

  useEffect(() => {
    // При смене страницы — короткий fade-in контента
    const main = document.querySelector('.main-with-sidebar');
    if (main) {
      main.style.opacity = '0';
      main.style.transform = 'translateY(8px)';
      requestAnimationFrame(() => {
        main.style.transition = 'opacity 0.45s cubic-bezier(0.19,1,0.22,1), transform 0.45s cubic-bezier(0.19,1,0.22,1)';
        main.style.opacity = '1';
        main.style.transform = 'translateY(0)';
      });
    }
  }, [pathname]);

  return null;
}