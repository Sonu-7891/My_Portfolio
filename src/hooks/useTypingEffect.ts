import { useEffect, useRef } from 'react';
import { TYPING_PHRASES } from '@/data/portfolioData';

export function useTypingEffect(elementId: string) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const typingEl = document.getElementById(elementId);
    if (!typingEl) return;

    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;

    const type = () => {
      const phrase = TYPING_PHRASES[pIdx];
      typingEl.textContent = deleting ? phrase.slice(0, cIdx--) : phrase.slice(0, cIdx++);

      if (!deleting && cIdx > phrase.length) {
        timeoutRef.current = setTimeout(() => {
          deleting = true;
          type();
        }, 2000);
        return;
      }

      if (deleting && cIdx < 0) {
        deleting = false;
        pIdx = (pIdx + 1) % TYPING_PHRASES.length;
        cIdx = 0;
      }

      timeoutRef.current = setTimeout(type, deleting ? 40 : 80);
    };

    type();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [elementId]);
}
