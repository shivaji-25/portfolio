import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaCalendarAlt, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="py-8 sm:py-10 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-neutral-200/80">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Certifications & Qualifications
        </h2>
        <span className="text-sm sm:text-base font-semibold text-neutral-400">
          Verified Credentials
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.08 }}
            className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-neutral-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200/70 flex items-center justify-center text-neutral-800 shadow-sm shrink-0">
                    <FaAward className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-500 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/70 text-[11px] font-bold text-neutral-600 font-mono self-start sm:self-auto shrink-0">
                  <FaCalendarAlt className="text-[9px]" />
                  {cert.date}
                </span>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <button
                onClick={() => setSelectedImage(cert.image)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#F6F6F8] hover:bg-neutral-900 hover:text-white px-4 py-2.5 min-h-[44px] text-xs font-bold text-neutral-800 transition-colors border border-neutral-200/80 cursor-pointer"
              >
                <span>Inspect Verified Credential</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal with inertia touch scrolling and 44px touch targets */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="touch-scroll fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overscroll-contain overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-black/10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 min-h-[44px] min-w-[44px] rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-md hover:bg-black active:scale-95 transition-all z-10 cursor-pointer"
              >
                <FaTimes className="text-sm" />
              </button>
              <div className="rounded-2xl overflow-hidden border border-neutral-100 mt-2">
                <img
                  src={selectedImage}
                  alt="Certificate Preview"
                  className="w-full h-auto object-contain max-h-[80vh]"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
