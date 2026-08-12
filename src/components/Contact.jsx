import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaCopy,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { personalDetails } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalDetails.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  
  const sendMail = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");
    
    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up at formspree.io to get a form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio enquiry from ${form.name}`,
        }),
      });
      
      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Error sending email:", err);
    } finally {
      setSending(false);
    }
  };
  
  const inputStyle =
    "w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-sm text-[#0A0A0A] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#0A66C2] focus:bg-white focus:ring-2 focus:ring-[#0A66C2]/20";

  return (
    <section
      id="contact"
      className="relative px-6 pb-28 pt-24 sm:px-8 lg:pb-36 lg:pt-32 bg-[#F5F6FA]"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.1 }}
        className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] lg:grid-cols-[.9fr_1.1fr] border border-[#E2E8F0] shadow-lg"
      >
        <div className="relative p-7 sm:p-10 bg-white">
          <div className="relative">
            <p className="section-kicker">06 / Contact</p>
            <h2 className="mt-4 max-w-md text-4xl font-extrabold leading-[.95] tracking-[-.075em] text-[#0A0A0A] sm:text-5xl">
              Let's discuss opportunities.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#475569]">
              I am seeking backend and full-stack roles where strong engineering
              can contribute to meaningful products.
            </p>
            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-3 rounded-xl p-3 text-sm font-bold text-[#0A0A0A] transition-colors hover:text-[#0A66C2] bg-[#F5F6FA] border border-[#E2E8F0]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2]">
                  <FaEnvelope />
                </span>
                <span className="truncate">{personalDetails.email}</span>
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-1 text-xs font-bold text-[#475569] transition-colors hover:text-[#0A0A0A]"
              >
                {copied ? <FaCheck className="text-[#0A66C2]" /> : <FaCopy />}{" "}
                {copied ? "Email copied to clipboard" : "Copy email address"}
              </button>
            </div>
            <div className="mt-10 flex gap-3">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-[#E2E8F0] bg-[#F5F6FA] text-[#0A0A0A] transition-all hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 text-[#0A66C2] shadow-sm transition-all hover:bg-[#0A66C2] hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendMail}
          className="border-t border-[#E2E8F0] bg-[#EEF1F6] p-7 sm:p-10 lg:border-l lg:border-t-0"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[.13em] text-[#9CA3AF]">
                Name
              </span>
              <input
                required
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                placeholder="Your name"
                className={inputStyle}
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[.13em] text-[#9CA3AF]">
                Email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                placeholder="you@company.com"
                className={inputStyle}
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[.13em] text-[#9CA3AF]">
              Position or project
            </span>
            <textarea
              required
              rows="6"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              placeholder="Describe the role, project, or team needs..."
              className={`${inputStyle} resize-none`}
            />
          </label>
          <button 
            type="submit" 
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(10,102,194,.24)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Send inquiry"} <FaArrowRight className="text-xs" />
          </button>
          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center gap-2 text-xs text-[#22c55e] font-semibold"
              >
                <FaCheck /> Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-3 flex items-center gap-2 text-xs text-[#ef4444] font-semibold"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
