import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalDetails } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 pb-24 pt-10 sm:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs sm:flex-row sm:items-center"
      >
        <p className="font-mono text-zinc-500">
          © 2026 <span className="text-zinc-300">{personalDetails.name}</span> ·
          crafted with React, motion & focus.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/[0.04] text-zinc-100 transition-all hover:border-white/50 hover:bg-white/10 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-xl accent-ring transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
