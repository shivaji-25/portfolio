import { useEffect, useRef, useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowDown,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import gsap from "gsap";
import { personalDetails } from "../data/portfolioData";
import DotRing from "./DotRing";
import FoldText from "./FoldText";

const heroStats = [
  { value: "123+", label: "problems solved" },
  { value: "04", label: "shipped projects" },
  { value: "7.40", label: "CGPA" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [expandedStat, setExpandedStat] = useState(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Optimized Hyperspeed config - high performance
  const hyperspeedOptions = useMemo(
    () => ({
      distortion: "turbulentDistortion",
      length: 300,
      roadWidth: 8,
      islandWidth: 1,
      lanesPerRoad: 2,
      fov: 90,
      fovSpeedUp: 120,
      speedUp: 2,
      carLightsFade: 0.7,
      totalSideLightSticks: 8,
      lightPairsPerRoadWay: 15,
      shoulderLinesWidthPercentage: 0.03,
      brokenLinesWidthPercentage: 0.06,
      brokenLinesLengthPercentage: 0.3,
      lightStickWidth: [0.08, 0.2],
      lightStickHeight: [1.0, 1.3],
      movingAwaySpeed: [70, 90],
      movingCloserSpeed: [-130, -170],
      carLightsLength: [8, 40],
      carLightsRadius: [0.03, 0.1],
      carWidthPercentage: [0.2, 0.4],
      carShiftX: [-0.5, 0.5],
      carFloorSeparation: [0, 3],
      colors: {
        roadColor: 0xf5f6fa,
        islandColor: 0xe5e7eb,
        background: 0xf5f6fa,
        shoulderLines: 0xd1d5db,
        brokenLines: 0xd1d5db,
        leftCars: [0x0a66c2, 0x6366f1, 0x8b5cf6],
        rightCars: [0x10b981, 0x14b8a6, 0x06b6d4],
        sticks: 0x9ca3af,
      },
    }),
    [],
  );

  // Intersection Observer to pause animation when hero is not visible
  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((index) => (index + 1) % personalDetails.roles.length),
      2600,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from('[data-hero="eyebrow"]', { opacity: 0, y: 16, duration: 0.3 })
        // Title animation handled by FoldText component
        .from(
          '[data-hero="copy"]',
          { opacity: 0, y: 16, duration: 0.32 },
          "-=0.2",
        )
        .from(
          '[data-hero="actions"]',
          { opacity: 0, y: 14, duration: 0.3 },
          "-=0.18",
        )
        .from(
          '[data-hero="stats"] > *',
          { opacity: 0, y: 12, stagger: 0.05, duration: 0.25 },
          "-=0.15",
        )
        .from(
          '[data-hero="console"]',
          { opacity: 0, scale: 0.94, rotate: 2, duration: 0.4 },
          "-=0.4",
        );
    }, heroRef);
    return () => context.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:min-h-[800px] bg-[#F5F6FA]"
    >
      {/* Lightweight dot-ring background (replaces Hyperspeed) */}
      {isHeroVisible && (
        <div
          className="fixed inset-0 opacity-30 pointer-events-none will-change-transform"
          style={{ height: "100vh", zIndex: 0 }}
        >
          <DotRing size={520} />
        </div>
      )}

      <div className="absolute left-1/2 top-40 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full hero-outer-ring" />
      <div className="absolute left-1/2 top-40 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full hero-outer-ring hero-outer-ring--soft" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
        <div className="max-w-3xl">
          <div
            data-hero="eyebrow"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[#9CA3AF]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0A66C2] opacity-12" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0A66C2]" />
            </span>
            seeking software opportunities
          </div>
          <h1
            data-hero="title"
            className="max-w-4xl text-[clamp(3.3rem,8vw,7.2rem)] font-extrabold leading-[0.89] tracking-[-0.085em] text-[#0A0A0A]"
          >
            <FoldText
              text={`I build\nsystems that move.`}
              splitBy="word"
              hinge="top"
              trigger="mount"
              duration={0.6}
              stagger={0.05}
              ease="power3.out"
              perspective={800}
              creaseShading={0.5}
              fontSize="clamp(3.3rem, 8vw, 7.2rem)"
              fontWeight={800}
              color="#0A0A0A"
            />
          </h1>
          <div data-hero="copy" className="mt-8 max-w-xl space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-lg font-medium leading-relaxed text-ink-secondary sm:text-xl">
                Hi, I'm{" "}
                <span className="text-[#0A0A0A]">{personalDetails.name}</span> —
                a Java backend developer
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#475569]">
              Delivering reliable backend systems with Java, Spring Boot, MySQL,
              and REST APIs.
            </p>
            <div className="flex h-6 items-center font-mono text-sm text-[#9CA3AF]">
              <span className="mr-2 text-[#9CA3AF]">//</span>
              <span>seeking:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="ml-2 text-[#0A0A0A]"
                >
                  {personalDetails.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <div
            data-hero="actions"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-1 shadow-soft"
            >
              View selected projects{" "}
              <FaArrowDown className="text-xs transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-5 py-3.5 text-sm font-bold text-[#0A0A0A] transition-all hover:border-[#0A66C2] hover:shadow-soft"
            >
              Contact me for opportunities <FaArrowRight className="text-xs" />
            </a>
          </div>
          <div
            data-hero="stats"
            className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-[#E2E8F0] border-y border-[#E2E8F0] py-5"
          >
            {heroStats.map((stat, index) => {
              const colors = ["#0A66C2", "#22c55e", "#f59e0b"];
              const isExpanded = expandedStat === index;
              return (
                <motion.div
                  key={stat.label}
                  className="px-3 first:pl-0 cursor-pointer relative"
                  onClick={() => setExpandedStat(isExpanded ? null : index)}
                  whileHover={{ scale: 1.05 }}
                  animate={
                    isExpanded
                      ? { scale: 1.1, zIndex: 10 }
                      : { scale: 1, zIndex: 1 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="text-xl font-extrabold tracking-[-0.05em] sm:text-2xl transition-colors"
                    animate={{ color: isExpanded ? colors[index] : "#0A0A0A" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#9CA3AF]">
                    {stat.label}
                  </div>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-xl border-2 pointer-events-none"
                      style={{
                        borderColor: colors[index],
                        boxShadow: `0 0 20px ${colors[index]}40`,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tech stack card removed as requested */}
      </div>
    </section>
  );
}
