import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia('(pointer: coarse)').matches) return undefined;
    const moveGlow = (event) => {
      glow.style.transform = `translate3d(${event.clientX - 176}px, ${event.clientY - 176}px, 0)`;
      glow.style.opacity = '1';
    };
    const hideGlow = () => { glow.style.opacity = '0'; };
    window.addEventListener('pointermove', moveGlow, { passive: true });
    document.addEventListener('mouseleave', hideGlow);
    return () => {
      window.removeEventListener('pointermove', moveGlow);
      document.removeEventListener('mouseleave', hideGlow);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="mouse-glow pointer-events-none fixed left-0 top-0 z-[1] h-[22rem] w-[22rem] rounded-full opacity-0 blur-[28px] transition-opacity duration-500"
    />
  );
}
