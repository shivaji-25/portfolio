import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { personalDetails, leetcodeAnalytics } from '../data/portfolioData';

export default function About() {
  const total = leetcodeAnalytics.totalSolved;

  return (
    <section id="about" className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-neutral-200/80">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Professional Profile
        </h2>
        <span className="text-sm sm:text-base font-semibold text-neutral-400">
          Core Foundations
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Left Bento Card: Bio & Academic Info (md:col-span-7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="md:col-span-7 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">
              Committed to Architectural Discipline and Algorithmic Rigor.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {personalDetails.bioFull}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-xl bg-[#F6F6F8] border border-neutral-200/80 px-3.5 py-2 text-xs font-semibold text-neutral-800">
                <FaGraduationCap className="text-neutral-500" />
                <span>{personalDetails.college}</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-xl bg-[#F6F6F8] border border-neutral-200/80 px-3.5 py-2 text-xs font-semibold text-neutral-800">
                <FaMapMarkerAlt className="text-neutral-500" />
                <span>{personalDetails.location}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-1.5 text-xs font-semibold text-neutral-500">
            <span>Primary Specialization</span>
            <span className="text-neutral-900 font-bold">Java Backend & Distributed Systems</span>
          </div>
        </motion.div>

        {/* Right Bento Card: LeetCode Analytics (md:col-span-5) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.05 }}
          className="md:col-span-5 rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 shrink-0">
                  <FaCode className="text-xs" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono truncate">
                  Algorithmic Metrics
                </span>
              </div>
              <span className="text-lg font-black text-neutral-900 font-mono">
                {total}+
              </span>
            </div>

            {/* Breakdown Bars */}
            <div className="mt-5 space-y-3">
              {[
                { label: 'Easy', count: leetcodeAnalytics.easy, color: 'bg-emerald-500', total },
                { label: 'Medium', count: leetcodeAnalytics.medium, color: 'bg-amber-500', total },
                { label: 'Hard', count: leetcodeAnalytics.hard, color: 'bg-rose-500', total },
              ].map((item) => (
                <div key={item.label} className="text-xs">
                  <div className="flex justify-between font-semibold mb-1 text-neutral-700">
                    <span>{item.label}</span>
                    <span className="font-mono text-neutral-500">{item.count}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${(item.count / total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Top Topics */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {leetcodeAnalytics.topTopics.slice(0, 3).map((topic) => (
                <span
                  key={topic.topic}
                  className="px-2.5 py-1 rounded-lg bg-[#F6F6F8] text-[11px] font-medium text-neutral-600 border border-neutral-200/60"
                >
                  {topic.topic.split('(')[0].trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100">
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-black hover:underline"
            >
              <span>Inspect LeetCode Problem-Solving Profile</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
