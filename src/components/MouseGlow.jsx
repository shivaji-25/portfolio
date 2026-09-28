import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return undefined;
    
    let animationFrameId = null;
    let latestX = 0;
    let latestY = 0;

    const updatePosition = () => {
      glow.style.transform = `translate3d(${latestX - 176}px, ${latestY - 176}px, 0)`;
      glow.style.opacity = '1';
      animationFrameId = null;
    };

    const moveGlow = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };
    const hideGlow = () => { glow.style.opacity = '0'; };
    window.addEventListener('pointermove', moveGlow, { passive: true });
    document.addEventListener('mouseleave', hideGlow);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', moveGlow);
      document.removeEventListener('mouseleave', hideGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="mouse-glow pointer-events-none fixed left-0 top-0 z-[1] h-[22rem] w-[22rem] rounded-full opacity-0 blur-[20px] transition-opacity duration-300"
      style={{ willChange: 'transform' }}
    />
  );
}
