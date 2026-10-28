import { useEffect, useRef } from 'react';

const SPACING = 28;      // px between dots
const DOT_R   = 1.1;     // base radius
const INFLUENCE = 150;   // cursor radius of effect
const PULL    = 0.8;     // gravity strength
const SPRING  = 0.06;    // return force
const FRICTION = 0.84;   // velocity damping
const BASE    = 'rgba(139,149,165,0.22)';

export default function DotBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const interactive =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dots = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = BASE;
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
      if (!interactive) drawStatic();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx   = mouse.x - d.x;
        const dy   = mouse.y - d.y;
        const dist = Math.hypot(dx, dy);
        let near   = 0;
        if (dist < INFLUENCE) {
          near  = 1 - dist / INFLUENCE;
          d.vx += (dx / (dist || 1)) * near * PULL;
          d.vy += (dy / (dist || 1)) * near * PULL;
        }
        d.vx += (d.ox - d.x) * SPRING;
        d.vy += (d.oy - d.y) * SPRING;
        d.vx *= FRICTION;
        d.vy *= FRICTION;
        d.x  += d.vx;
        d.y  += d.vy;
        ctx.fillStyle = near > 0
          ? 'rgba(34,211,238,' + (0.2 + near * 0.6) + ')'
          : BASE;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_R + near * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove    = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave   = ()  => { mouse.x = -9999; mouse.y = -9999; };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && interactive) raf = requestAnimationFrame(tick);
    };

    let lastW = window.innerWidth;
    const onResize = () => {
      // on touch devices the URL bar fires resize on scroll; only rebuild when width changes
      if (!interactive && window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      build();
    };

    build();
    window.addEventListener('resize', onResize);
    if (interactive) {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVisibility);
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
