import { motion } from "framer-motion";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  const certColors = [
    { badge: 'bg-[#0A66C2]/10 text-[#0A66C2]', kicker: 'text-[#0A66C2]', border: 'border-[#0A66C2]/20', glow: 'hover:shadow-[0_0_30px_rgba(10,102,194,.15)]' },
    { badge: 'bg-[#22c55e]/10 text-[#22c55e]', kicker: 'text-[#22c55e]', border: 'border-[#22c55e]/20', glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,.15)]' },
    { badge: 'bg-[#f59e0b]/10 text-[#f59e0b]', kicker: 'text-[#f59e0b]', border: 'border-[#f59e0b]/20', glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,.15)]' },
    { badge: 'bg-[#8b5cf6]/10 text-[#8b5cf6]', kicker: 'text-[#8b5cf6]', border: 'border-[#8b5cf6]/20', glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,.15)]' },
  ];
  
  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.1 }}
        >
          <p className="section-kicker">05 / Certifications</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-heading">Professional credentials.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                Internship and course certificates that demonstrate practical,
                hands-on learning.
              </p>
            </div>
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.13em] text-blue-300">
              <FaArrowRight /> Scroll sideways to review
            </p>
          </div>
        </motion.div>
        <div className="certificate-scroll mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5">
          {certifications.map((certificate, index) => {
            const colors = certColors[index % certColors.length];
            return (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`glass-card min-w-[min(88vw,39rem)] snap-start overflow-hidden rounded-[1.5rem] md:min-w-[38rem] transition-all ${colors.glow}`}
            >
              <div className={`border-b ${colors.border} p-5 sm:p-6`}>
                <div className="flex items-start gap-3">
                  <motion.span 
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${colors.badge}`}
                    whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaAward />
                  </motion.span>
                  <div>
                    <p className={`font-mono text-[9px] uppercase tracking-[.13em] ${colors.kicker}`}>
                      Certificate 0{index + 1} · {certificate.date}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold tracking-[-.04em] text-zinc-100">
                      {certificate.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-zinc-400">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {certificate.description}
                </p>
              </div>
              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white/[.025] p-3 sm:p-4"
                aria-label={`Open ${certificate.title}`}
              >
                <motion.img
                  src={certificate.image}
                  alt={`${certificate.title} issued by ${certificate.issuer}`}
                  loading="lazy"
                  width="900"
                  height="1200"
                  className="h-[24rem] w-full rounded-xl object-contain bg-white transition-transform duration-500 sm:h-[30rem]"
                  whileHover={{ scale: 1.02 }}
                />
              </a>
            </motion.article>
          );})}
        </div>
      </div>
    </section>
  );
}
