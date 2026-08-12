import { useEffect, useRef } from 'react';

const desktopCount = 68;
const mobileCount = 26;

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = canvas.getContext('2d');
    const pointer = { x: -1000, y: -1000 };
    let particles = [];
    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let lastPaint = 0;
    const frameInterval = 1000 / 30;

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      size: Math.random() * 1.5 + 0.55,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const count = width < 768 ? mobileCount : desktopCount;
      particles = Array.from({ length: count }, makeParticle);
    };

    const draw = (time = 0) => {
      if (!visible || !pageVisible) {
        frame = 0;
        return;
      }
      if (time - lastPaint < frameInterval) {
        frame = requestAnimationFrame(draw);
        return;
      }
      lastPaint = time;
      context.clearRect(0, 0, width, height);
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 180 && distance > 0.1) {
          const force = (180 - distance) / 180;
          particle.vx += (dx / distance) * force * 0.045;
          particle.vy += (dy / distance) * force * 0.045;
        }
        particle.vx *= 0.992;
        particle.vy *= 0.992;
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -8) particle.x = width + 8;
        if (particle.x > width + 8) particle.x = -8;
        if (particle.y < -8) particle.y = height + 8;
        if (particle.y > height + 8) particle.y = -8;

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const lineX = particle.x - other.x;
          const lineY = particle.y - other.y;
          const lineDistanceSquared = lineX * lineX + lineY * lineY;
          if (lineDistanceSquared < 10_000) {
            const lineDistance = Math.sqrt(lineDistanceSquared);
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(100, 100, 100, ${0.08 * (1 - lineDistance / 100)})`;
            context.lineWidth = 0.6;
            context.stroke();
          }
        }
        const glow = distance < 180 ? (1 - distance / 180) : 0;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size + glow * 1.8, 0, Math.PI * 2);
        context.fillStyle = `rgba(80, 80, 80, ${0.25 + glow * 0.55})`;
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => { pointer.x = event.clientX; pointer.y = event.clientY; };
    const onPointerLeave = () => { pointer.x = -1000; pointer.y = -1000; };
    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible && visible && !frame) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && pageVisible && !frame) frame = requestAnimationFrame(draw);
    });

    resize();
    observer.observe(canvas);
    frame = requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
