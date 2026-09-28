import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaPlay,
  FaJava,
  FaServer,
  FaCode,
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostman } from 'react-icons/si';
import { personalDetails } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* 1. Bento Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        
        {/* Card 1: Left Tall Profile Card (md:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative md:col-span-4 rounded-[2rem] bg-white border border-black/[0.06] overflow-hidden flex flex-col shadow-sm"
        >
          {/* Top Pattern Section */}
          <div className="relative h-52 sm:h-64 bg-[#EBE6F8] p-6">
            {/* Dot grid texture layer with top rounding */}
            <div
              className="absolute inset-0 opacity-40 overflow-hidden rounded-t-[2rem]"
              style={{
                backgroundImage: 'radial-gradient(#9d8cc9 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
              }}
            />
            {/* Cutout circular avatar overlapping boundary exactly 50% */}
            <div className="absolute bottom-0 translate-y-1/2 left-6 w-[110px] h-[110px] sm:w-[128px] sm:h-[128px] rounded-full border-4 border-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] overflow-hidden bg-[#EDE9FE] z-10 flex items-center justify-center">
              <span className="text-2xl font-black text-[#6D28D9]">SC</span>
              <img
                src="./profile.jpg"
                alt={personalDetails.name}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>

          {/* Bottom Content Section */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-[74px] sm:pt-[84px] flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-[1.85rem] font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Architecting Scalable Backend Systems & Robust APIs.
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
                Java · Spring Boot · MySQL · RESTful APIs · Data Structures & Algorithms
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
              <span>Candidate Status</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-[10px] sm:text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Open for SDE Roles</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Middle About Card (md:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="md:col-span-4 rounded-[2rem] bg-white border border-black/[0.06] p-6 sm:p-8 flex flex-col justify-between shadow-sm"
        >
          <div>
            <span className="text-neutral-400 font-bold text-xs uppercase tracking-widest block mb-4 font-mono">
              Executive Profile
            </span>
            <p className="text-neutral-800 text-sm sm:text-[15px] leading-relaxed font-normal">
              I am a <strong className="text-neutral-900 font-semibold">Java Backend Engineer</strong> and Computer Science undergraduate specializing in scalable microservices, robust RESTful APIs, and algorithmic problem-solving.
            </p>
            <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
              Dedicated to architecting resilient, fault-tolerant backend infrastructures that ensure optimal system throughput, data integrity, and high operational reliability.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#projects"
              className="rounded-full bg-neutral-900 hover:bg-black text-white font-semibold text-xs sm:text-sm px-6 py-3.5 transition-all inline-flex items-center justify-between w-full group shadow-sm hover:scale-[1.01]"
            >
              <span>Explore Technical Projects</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Stacked Cards (md:col-span-4) */}
        <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
          
          {/* Top Row: Two Half Cards */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Card 3: Orange-Red Accent Card */}
            <motion.a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="rounded-[2rem] bg-[#FF5533] text-white p-5 flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform cursor-pointer group"
            >
              <div className="flex items-center justify-end">
                <span className="w-8 h-8 rounded-full bg-white text-[#FF5533] flex items-center justify-center font-bold text-xs shadow-sm transition-transform group-hover:scale-110">
                  <FaPlay className="text-[10px] ml-0.5" />
                </span>
              </div>

              <div className="my-2">
                {/* Audio Equalizer wave bars */}
                <div className="flex items-end gap-1 h-6">
                  {[40, 85, 55, 95, 45, 75, 30, 90, 60, 80].map((height, i) => (
                    <span
                      key={i}
                      className="w-1 bg-white/90 rounded-full animate-pulse"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-extrabold text-sm sm:text-base tracking-tight leading-snug">
                  127+ LeetCode Solved
                </p>
                <p className="text-[11px] text-white/80 mt-0.5 font-medium">
                  Algorithmic Performance ↗
                </p>
              </div>
            </motion.a>

            {/* Card 4: Formal Resume Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="rounded-[2rem] bg-white border border-black/[0.06] p-5 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                  Documentation
                </span>
                <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                  Official Resume
                </h2>
              </div>

              <a
                href={personalDetails.resume || '/resume.pdf'}
                download="Shivaji_CS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white active:bg-neutral-950 active:text-white transition-all text-[11px] sm:text-xs font-bold py-2.5 px-2 sm:px-3 text-center text-neutral-800 border border-neutral-200/80 mt-3 block truncate"
              >
                Download Resume ↗
              </a>
            </motion.div>
          </div>

          {/* Card 5: Core Technical Stack & Engineering Competencies (High-Utility Card) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="rounded-[2rem] bg-white border border-black/[0.06] p-5 sm:p-6 shadow-sm flex flex-col justify-between flex-1"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Technical Proficiencies
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 bg-neutral-100 border border-neutral-200/80 px-2.5 py-0.5 rounded-full font-semibold">
                  HTTP 200 OK
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900">
                Core Tech Stack
              </h3>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 my-3.5">
              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#EA2D2E] flex items-center justify-center text-base shrink-0">
                  <FaJava />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">Java 17</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">Core Backend</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#6DB33F] flex items-center justify-center text-base shrink-0">
                  <SiSpringboot />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">Spring Boot</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">Microservices</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#00758F] flex items-center justify-center text-base shrink-0">
                  <SiMysql />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">MySQL</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">RDBMS & Schema</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#8B5CF6] flex items-center justify-center text-base shrink-0">
                  <FaServer />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">REST APIs</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">High Throughput</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#FFA116] flex items-center justify-center text-base shrink-0">
                  <FaCode />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">DSA & Algo</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">127+ LeetCode</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-neutral-50/80 border border-neutral-200/60 hover:border-neutral-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#FF6C37] flex items-center justify-center text-base shrink-0">
                  <SiPostman />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-neutral-900 leading-tight truncate">Postman & Git</div>
                  <div className="text-[10px] text-neutral-500 font-medium truncate">API QA & CI/CD</div>
                </div>
              </div>
            </div>

            {/* Quick Footer Action */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
              <span className="text-[11px] font-semibold text-neutral-500 font-mono">
                Dr. NGP IT • CSE '26
              </span>
              <a
                href="#skills"
                className="font-bold text-neutral-900 hover:text-black inline-flex items-center gap-1 group py-1"
              >
                <span>All Competencies</span>
                <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Stats Strip (Matching Image 4) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="mt-6 sm:mt-8 rounded-[2rem] bg-white border border-black/[0.06] shadow-sm p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
          
          {/* Stat 1 */}
          <div className="pb-5 md:pb-0 px-2 md:px-8 first:pl-0">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              127+
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
              Algorithmic Problems Solved (LeetCode)
            </div>
          </div>

          {/* Stat 2 */}
          <div className="py-5 md:py-0 px-2 md:px-8">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              04+
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
              Production & Backend Projects Engineered
            </div>
          </div>

          {/* Stat 3 */}
          <div className="pt-5 md:pt-0 px-2 md:px-8">
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              7.45
            </div>
            <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-1">
              Cumulative Grade Point Average (CGPA)
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
