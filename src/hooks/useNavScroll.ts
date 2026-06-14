import { useEffect } from 'react';

export function useNavScroll(navId: string) {
  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [navId]);
}
