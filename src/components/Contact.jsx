import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaCheck,
  FaCopy,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaArrowUp,
  FaGlobe,
} from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalDetails.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalDetails.email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-8 sm:py-12 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Dark Contact Card (Matching Image 3) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#111111] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle radial sheen in corner */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/[0.03] pointer-events-none blur-2xl" />

        {/* Muted Section Label */}
        <span className="text-neutral-400 font-bold text-xs uppercase tracking-[0.2em] block mb-6 font-mono">
          PROFESSIONAL INQUIRIES & COLLABORATION
        </span>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-[1.15] mb-10">
          Open to Software Engineering Roles & Technical Collaborations.
        </h2>

        {/* Action Row: Email Pill + Social Circles */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16">
          
          {/* Email Pill Button */}
          <button
            onClick={copyEmail}
            className="rounded-full bg-white text-neutral-900 hover:bg-neutral-100 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide transition-all inline-flex items-center gap-2.5 shadow-md active:scale-95 group cursor-pointer max-w-full"
          >
            <FaEnvelope className="text-neutral-700 text-xs sm:text-sm shrink-0" />
            <span className="truncate">{personalDetails.email}</span>
            {copied ? (
              <span className="ml-1 text-xs text-emerald-600 font-bold inline-flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                <FaCheck className="text-[10px]" /> Copied!
              </span>
            ) : (
              <span className="text-neutral-400 text-xs font-normal group-hover:text-neutral-600 transition-colors hidden sm:inline shrink-0">
                (Click to copy)
              </span>
            )}
          </button>

          {/* Social Icon Circles */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* LeetCode */}
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
              className="w-11 h-11 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white hover:bg-neutral-800 transition-all shadow-sm hover:scale-105"
            >
              <FaCode className="text-sm" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white hover:bg-neutral-800 transition-all shadow-sm hover:scale-105"
            >
              <FaLinkedin className="text-sm" />
            </a>

            {/* GitHub */}
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white hover:bg-neutral-800 transition-all shadow-sm hover:scale-105"
            >
              <FaGithub className="text-sm" />
            </a>

            {/* Direct Mail */}
            <a
              href={`mailto:${personalDetails.email}`}
              aria-label="Send direct email"
              className="w-11 h-11 rounded-full border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white hover:bg-neutral-800 transition-all shadow-sm hover:scale-105"
            >
              <FaGlobe className="text-sm" />
            </a>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-400">
          <div>
            © 2026 {personalDetails.name}. All rights reserved.
          </div>

          <div className="text-neutral-500">
            Coimbatore, Tamil Nadu, India
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
