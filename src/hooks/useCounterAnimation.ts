import { useEffect } from 'react';

export function useCounterAnimation(heroId: string) {
  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    let animated = false;

    const animateCounters = () => {
      if (animated) return;
      animated = true;

      document.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.count || '0');
        const suffix = (el as HTMLElement).dataset.count === '100' ? '%' : '+';
        let current = 0;
        const step = target / 40;
        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = `${Math.floor(current)}${suffix}`;
          if (current >= target) clearInterval(interval);
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) animateCounters();
      },
      { threshold: 0.5 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [heroId]);
}
