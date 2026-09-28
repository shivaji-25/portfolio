import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-neutral-200/80">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Professional Experience
        </h2>
        <span className="text-sm sm:text-base font-semibold text-neutral-400">
          Industry Engineering Practice
        </span>
      </div>

      <div className="space-y-4">
        {experience.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.1 }}
            className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200/70 flex items-center justify-center text-neutral-800 shadow-sm shrink-0">
                  <FaBriefcase className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-500 mt-0.5">
                    {item.company}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/70 text-xs font-bold text-neutral-600 self-start sm:self-auto font-mono">
                <FaCalendarAlt className="text-[10px]" />
                {item.duration}
              </span>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
