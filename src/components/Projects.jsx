import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaGithub,
  FaRoute,
  FaUserGraduate,
  FaBox,
  FaVoteYea,
  FaCode,
} from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const projectThemes = {
  'campus-nav': {
    bg: 'bg-[#EDE9FE]',
    text: 'text-[#6D28D9]',
    border: 'border-[#DDD6FE]',
    icon: FaRoute,
  },
  'student-mgmt': {
    bg: 'bg-[#D1FAE5]',
    text: 'text-[#047857]',
    border: 'border-[#A7F3D0]',
    icon: FaUserGraduate,
  },
  'package-tracking': {
    bg: 'bg-[#FEF3C7]',
    text: 'text-[#B45309]',
    border: 'border-[#FDE68A]',
    icon: FaBox,
  },
  'online-voting': {
    bg: 'bg-[#E0F2FE]',
    text: 'text-[#0369A1]',
    border: 'border-[#BAE6FD]',
    icon: FaVoteYea,
  },
};

const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  // Use relative path so it resolves seamlessly on GitHub Pages, Vercel, Netlify
  const cleanPath = path.replace(/^\//, '');
  return `./${cleanPath}`;
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-neutral-200/80">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Featured Engineering Projects
        </h2>
        <span className="text-sm sm:text-base font-mono font-semibold text-neutral-400">
          2026
        </span>
      </div>

      {/* Indexed Work List Rows */}
      <div className="space-y-4">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id;
          const formattedIndex = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
          const theme = projectThemes[project.id] || {
            bg: 'bg-[#F3F4F6]',
            text: 'text-[#374151]',
            border: 'border-[#E5E7EB]',
            icon: FaCode,
          };
          const IconComponent = theme.icon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
              className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Main Clickable Row */}
              <div
                onClick={() => toggleExpand(project.id)}
                className="p-4 sm:p-6 flex items-center justify-between cursor-pointer group select-none"
              >
                {/* Left section: Number + Thumbnail + Title */}
                <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                  {/* Number 01, 02... */}
                  <span className="text-xs sm:text-base font-bold text-neutral-400 w-6 sm:w-8 shrink-0 font-mono">
                    {formattedIndex}
                  </span>

                  {/* Thumbnail Container (with stylized fallback and image) */}
                  <div
                    className={`w-16 h-12 sm:w-24 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-sm relative flex items-center justify-center border ${theme.border} ${theme.bg}`}
                  >
                    {/* Stylized Pastel Bento Graphic Fallback */}
                    <div className={`flex flex-col items-center justify-center ${theme.text}`}>
                      <IconComponent className="text-xl sm:text-2xl" />
                    </div>

                    {/* Image Layer with Error Handling */}
                    {project.image && (
                      <img
                        src={getAssetUrl(project.image)}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-black truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-medium hidden sm:block truncate mt-0.5">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Right section: Category + Year + Action Button */}
                <div className="flex items-center gap-4 sm:gap-8 shrink-0 pl-3">
                  <div className="text-right hidden sm:block">
                    <div className="text-xs sm:text-sm font-semibold text-neutral-800">
                      {project.category}
                    </div>
                    <div className="text-xs text-neutral-400 font-mono mt-0.5">
                      {project.year || '2026'}
                    </div>
                  </div>

                  {/* Circular Action Arrow Button (turns black on hover) */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200/90 bg-neutral-50 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all shadow-sm">
                    <FaArrowRight
                      className={`text-xs sm:text-sm transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : '-rotate-45'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Expandable Project Details Drawer */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-neutral-100 bg-[#FAFAFC] px-5 py-6 sm:px-8 sm:py-7"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                          Architectural Overview & Technical Specifications
                        </h4>
                        <p className="text-neutral-700 text-sm leading-relaxed font-normal">
                          {project.architecture || project.impact}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-4 flex flex-col justify-end gap-2.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 hover:bg-black text-white px-4 py-2.5 text-xs font-bold transition-all shadow-sm"
                        >
                          <FaGithub className="text-sm" />
                          <span>Source Code Repository</span>
                        </a>

                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200 px-4 py-2.5 text-xs font-bold transition-all shadow-sm"
                        >
                          <span>Inquire Regarding Project</span>
                          <FaArrowRight className="text-[10px]" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
