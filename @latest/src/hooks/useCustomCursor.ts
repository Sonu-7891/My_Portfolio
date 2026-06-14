import { useEffect } from 'react';

/**
 * All elements that trigger the mirror-lens on hover
 */
const HOVER_SELECTORS =
  'a, button, .project-card, .skill-card, .ai-card, .float-card, ' +
  '.ach-card, .testimonial-card, .timeline-card, .about-card-main, ' +
  '.nav-cta, .btn-primary, .btn-secondary, .tech-badge';

/**
 * Cards that get the inner spotlight/mirror glow effect
 */
const CARD_SELECTORS =
  '.project-card, .skill-card, .ai-card, .float-card, ' +
  '.ach-card, .testimonial-card, .timeline-card, .about-card-main';

export function useCustomCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot');
    const lens = document.getElementById('cursor-lens');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !lens || !ring) return;

    /* ─── State ──────────────────────────────────────────── */
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    // Ring lags behind for trailing depth
    let rx = mx;
    let ry = my;

    // Lens: magnetic pull toward hovered element
    let lx = mx;
    let ly = my;

    let isHovering = false;
    let targetEl: Element | null = null;
    let rafId = 0;

    /* ─── Mouse move ─────────────────────────────────────── */
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      // Dot snaps exactly
      dot.style.left  = `${mx}px`;
      dot.style.top   = `${my}px`;

      // ── Card spotlight: update CSS variables for inner glow ──
      const cardEl = (e.target as Element)?.closest(CARD_SELECTORS);
      if (cardEl instanceof HTMLElement) {
        const rect = cardEl.getBoundingClientRect();
        const relX = ((mx - rect.left) / rect.width)  * 100;
        const relY = ((my - rect.top)  / rect.height) * 100;
        cardEl.style.setProperty('--mx', `${relX}%`);
        cardEl.style.setProperty('--my', `${relY}%`);
      }
    };

    /* ─── Animation loop ─────────────────────────────────── */
    const tick = () => {
      // Ring: smooth lag
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;

      // Lens: when hovering, magnetically pulled toward element center
      if (isHovering && targetEl) {
        const rect = targetEl.getBoundingClientRect();
        const ecx  = rect.left + rect.width  / 2;
        const ecy  = rect.top  + rect.height / 2;

        // Blend: 80% mouse, 20% element center
        const pullX = mx + (ecx - mx) * 0.2;
        const pullY = my + (ecy - my) * 0.2;

        lx += (pullX - lx) * 0.14;
        ly += (pullY - ly) * 0.14;
      } else {
        lx += (mx - lx) * 0.1;
        ly += (my - ly) * 0.1;
      }

      lens.style.left = `${lx}px`;
      lens.style.top  = `${ly}px`;

      rafId = requestAnimationFrame(tick);
    };

    /* ─── Enter hover: activate mirror lens ──────────────── */
    const onEnter = (e: Event) => {
      isHovering = true;
      targetEl   = e.currentTarget as Element;

      // Dot shrinks to a tiny pinpoint
      dot.style.width   = '4px';
      dot.style.height  = '4px';
      dot.style.opacity = '0.5';

      // Ring dims + expands
      ring.style.width       = '72px';
      ring.style.height      = '72px';
      ring.style.opacity     = '0.25';
      ring.style.borderColor = 'rgba(167,139,250,0.35)';

      // Lens grows to mirror size
      lens.classList.add('active');

      // Add spotlight class to card
      if (targetEl instanceof HTMLElement && targetEl.matches(CARD_SELECTORS)) {
        targetEl.classList.add('cursor-spotlight');
      }
    };

    /* ─── Leave hover: collapse lens ────────────────────── */
    const onLeave = (e: Event) => {
      const el = e.currentTarget as Element;
      if (el instanceof HTMLElement) {
        el.classList.remove('cursor-spotlight');
      }
      isHovering = false;
      targetEl   = null;

      dot.style.width   = '8px';
      dot.style.height  = '8px';
      dot.style.opacity = '1';

      ring.style.width       = '36px';
      ring.style.height      = '36px';
      ring.style.opacity     = '1';
      ring.style.borderColor = 'rgba(6,182,212,0.45)';

      lens.classList.remove('active');
    };

    /* ─── Click: pulse ripple ────────────────────────────── */
    const onClick = () => {
      lens.classList.add('clicked');
      setTimeout(() => lens.classList.remove('clicked'), 420);
    };

    /* ─── Page enter/leave ───────────────────────────────── */
    const onPageLeave = () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
      lens.classList.remove('active');
      isHovering = false;
      targetEl   = null;
    };
    const onPageEnter = () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    };

    /* ─── Attach listeners ───────────────────────────────── */
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onClick);
    document.documentElement.addEventListener('mouseleave', onPageLeave);
    document.documentElement.addEventListener('mouseenter', onPageEnter);
    rafId = requestAnimationFrame(tick);

    const attach = () => {
      const els = document.querySelectorAll(HOVER_SELECTORS);
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
      return els;
    };

    let hoverEls = attach();

    // Re-attach after DOM is fully rendered
    const reattach = setTimeout(() => {
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      hoverEls = attach();
    }, 1000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onClick);
      document.documentElement.removeEventListener('mouseleave', onPageLeave);
      document.documentElement.removeEventListener('mouseenter', onPageEnter);
      cancelAnimationFrame(rafId);
      clearTimeout(reattach);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);
}
