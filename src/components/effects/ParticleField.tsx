"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Animated "constellation" of particles behind the hero. Particles drift,
 * link to nearby neighbours, repel from the pointer, recolour with the theme
 * and fade out as the hero scrolls away. Skipped under reduced-motion.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const root = document.documentElement;
    const readAccent = () =>
      getComputedStyle(root).getPropertyValue("--accent").trim() || "#7c6cff";

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let accent = readAccent();
    let frame = 0;
    const mouse = { x: -999, y: -999 };
    const count = window.innerWidth < 700 ? 42 : 90;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const seed = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22 * dpr,
        vy: (Math.random() - 0.5) * 0.22 * dpr,
        r: (Math.random() * 1.6 + 0.6) * dpr,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const [r, g, b] = hexToRgb(accent.startsWith("#") ? accent : "#7c6cff");
      const light = root.getAttribute("data-theme") === "light";
      const linkDist = 130 * dpr;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 * dpr && md > 0.1) {
          const force = ((120 * dpr - md) / (120 * dpr)) * 0.9;
          p.x += (mdx / md) * force;
          p.y += (mdy / md) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${light ? 0.5 : 0.75})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * (light ? 0.16 : 0.3);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    seed();
    draw();

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX * dpr;
      mouse.y = event.clientY * dpr;
    };
    const onPointerLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.9));
      canvas.style.opacity = (opacity * 0.9).toFixed(2);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        seed();
      }, 150);
    };

    const themeObserver = new MutationObserver(() => {
      accent = readAccent();
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
