import { useEffect } from 'react';

/**
 * All elements that trigger hover effects
 */
const HOVER_SELECTORS =
  'a, button, .project-card, .skill-card, .ai-card, .float-card, ' +
  '.ach-card, .testimonial-card, .timeline-card, .about-card-main, ' +
  '.nav-cta, .btn-primary, .btn-secondary, .tech-badge';

/**
 * Cards that get the inner spotlight effect
 */
const CARD_SELECTORS =
  '.project-card, .skill-card, .ai-card, .float-card, ' +
  '.ach-card, .testimonial-card, .timeline-card, .about-card-main';

/* ─── Particle colors — multi-color luminous palette ─── */
const PARTICLE_COLORS = [
  [167, 139, 250],  // violet
  [124, 58, 237],   // deep violet
  [96, 165, 250],   // blue
  [34, 211, 238],   // cyan
  [236, 72, 153],   // pink
  [139, 92, 246],   // purple
  [59, 130, 246],   // royal blue
  [192, 132, 252],  // lavender
  [6, 182, 212],    // teal
  [244, 114, 182],  // rose
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: number[];
  gravity: number;
  friction: number;
}

export function useCustomCursor() {
  useEffect(() => {
    const dot    = document.getElementById('cursor-dot');
    const ring   = document.getElementById('cursor-ring');
    const canvas = document.getElementById('cursor-particles') as HTMLCanvasElement | null;
    if (!dot || !ring || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    /* ─── Canvas setup ────────────────────────────────── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ─── State ──────────────────────────────────────── */
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let prevMx = mx;
    let prevMy = my;

    // Ring lags behind
    let rx = mx;
    let ry = my;

    let isHovering = false;
    let targetEl: Element | null = null;
    let rafId = 0;

    // Particle pool
    const particles: Particle[] = [];
    const MAX_PARTICLES = 120;

    // Throttle particle spawn
    let spawnAccum = 0;

    /* ─── Spawn particles ─────────────────────────────── */
    const spawnParticle = (x: number, y: number, speed: number) => {
      if (particles.length >= MAX_PARTICLES) return;

      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const angle = Math.random() * Math.PI * 2;
      const spread = 0.5 + Math.random() * 2.5;
      const baseV = speed * 0.15;

      particles.push({
        x,
        y,
        vx: Math.cos(angle) * spread + (Math.random() - 0.5) * baseV,
        vy: Math.sin(angle) * spread + (Math.random() - 0.5) * baseV,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.8,        // 0.6–1.4 seconds
        size: 2 + Math.random() * 6,                // 2–8px radius
        color,
        gravity: 0.02 + Math.random() * 0.04,       // subtle downward pull
        friction: 0.97 + Math.random() * 0.02,       // slight slowdown
      });
    };

    /* ─── Mouse move ──────────────────────────────────── */
    const onMouseMove = (e: MouseEvent) => {
      prevMx = mx;
      prevMy = my;
      mx = e.clientX;
      my = e.clientY;

      // Dot snaps exactly
      dot.style.left = `${mx}px`;
      dot.style.top  = `${my}px`;

      // Card spotlight
      const cardEl = (e.target as Element)?.closest(CARD_SELECTORS);
      if (cardEl instanceof HTMLElement) {
        const rect = cardEl.getBoundingClientRect();
        const relX = ((mx - rect.left) / rect.width)  * 100;
        const relY = ((my - rect.top)  / rect.height) * 100;
        cardEl.style.setProperty('--mx', `${relX}%`);
        cardEl.style.setProperty('--my', `${relY}%`);
      }
    };

    /* ─── Animation loop ──────────────────────────────── */
    const tick = () => {
      // Ring: smooth lag
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;

      // Calculate mouse speed
      const dx = mx - prevMx;
      const dy = my - prevMy;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn particles based on speed — more particles when moving faster
      const particlesToSpawn = Math.min(Math.floor(speed * 0.4) + 1, 5);
      spawnAccum += particlesToSpawn * 0.5;

      while (spawnAccum >= 1) {
        spawnAccum -= 1;
        // Spawn along the path between prev and current for smoother trails
        const t = Math.random();
        const sx = prevMx + (mx - prevMx) * t;
        const sy = prevMy + (my - prevMy) * t;
        spawnParticle(sx, sy, speed);
      }

      // Always spawn at least a slow trickle even when still
      if (speed < 1 && Math.random() < 0.15) {
        spawnParticle(mx + (Math.random() - 0.5) * 8, my + (Math.random() - 0.5) * 8, 1);
      }

      prevMx = mx;
      prevMy = my;

      // ── Clear & render particles ──
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Physics
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.x += p.vx;
        p.y += p.vy;

        // Decay life
        p.life -= (1 / 60) / p.maxLife;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // ── Draw particle ──
        const alpha = p.life * p.life; // Ease-out fade
        const size  = p.size * (0.3 + 0.7 * p.life); // Shrink as it dies

        // Outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 2.5);
        grd.addColorStop(0, `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${alpha * 0.5})`);
        grd.addColorStop(0.4, `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${alpha * 0.2})`);
        grd.addColorStop(1, `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Bright core ball
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${alpha * 0.9})`;
        ctx.fill();

        // White hot center
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(tick);
    };

    /* ─── Enter hover ─────────────────────────────────── */
    const onEnter = (e: Event) => {
      isHovering = true;
      targetEl   = e.currentTarget as Element;

      dot.style.width   = '4px';
      dot.style.height  = '4px';
      dot.style.opacity = '0.5';

      ring.style.width       = '72px';
      ring.style.height      = '72px';
      ring.style.opacity     = '0.25';
      ring.style.borderColor = 'rgba(167,139,250,0.35)';

      // Burst: spawn a cluster of particles
      for (let i = 0; i < 12; i++) {
        spawnParticle(mx, my, 8);
      }

      if (targetEl instanceof HTMLElement && targetEl.matches(CARD_SELECTORS)) {
        targetEl.classList.add('cursor-spotlight');
      }
    };

    /* ─── Leave hover ─────────────────────────────────── */
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
    };

    /* ─── Click: burst ────────────────────────────────── */
    const onClick = () => {
      // Big colorful burst on click
      for (let i = 0; i < 18; i++) {
        spawnParticle(mx, my, 12);
      }
    };

    /* ─── Page enter/leave ────────────────────────────── */
    const onPageLeave = () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
      isHovering = false;
      targetEl   = null;
    };
    const onPageEnter = () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    };

    /* ─── Attach listeners ────────────────────────────── */
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

    const reattach = setTimeout(() => {
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      hoverEls = attach();
    }, 1000);

    return () => {
      window.removeEventListener('resize', resize);
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
