import { useEffect, useRef, useState } from "react";

export default function DotRing({
  size = 320,
  colors = ["#FF6B6B", "#F59E0B", "#60A5FA", "#A78BFA"],
}) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        setPlaying(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const dotCount = 28;
  const radius = size / 2 - 18;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`dot-ring ${playing ? "playing" : "paused"}`}
      style={{
        width: size,
        height: size,
        display: "block",
        pointerEvents: "none",
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${cx}, ${cy})`}>
          {[...Array(dotCount)].map((_, i) => {
            const angle = (i / dotCount) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const color = colors[i % colors.length];
            const delay = (i / dotCount) * 1.6;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={6}
                fill={color}
                style={{
                  transformOrigin: "center",
                  transformBox: "fill-box",
                  animationDelay: `${delay}s`,
                }}
                className="dot-ring__dot"
              />
            );
          })}
        </g>
      </svg>
      <style>{`
        .dot-ring { position: fixed; inset: 0; margin: auto; left: 50%; top: 8rem; transform: translateX(-50%); z-index: 0; opacity: 0.35 }
        .dot-ring svg { display: block }
        .dot-ring.playing { animation: dot-ring-rotate 16s linear infinite }
        .dot-ring.paused { animation-play-state: paused; }
        .dot-ring__dot { transform-origin: center; animation: dot-ring-pulse 1.6s ease-in-out infinite; }
        .dot-ring.paused .dot-ring__dot { animation-play-state: paused }
        @keyframes dot-ring-rotate { from { transform: translateX(-50%) rotate(0deg) } to { transform: translateX(-50%) rotate(360deg) } }
        @keyframes dot-ring-pulse { 0% { opacity: 0.45; r: 4 } 50% { opacity: 1; r: 8 } 100% { opacity: 0.45; r: 4 } }
      `}</style>
    </div>
  );
}
