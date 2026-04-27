import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const HIGHLIGHTS = [
  'Authorized dealer for 50+ globally recognized laboratory brands',
  'End-to-end support: procurement, installation, calibration & AMC',
  'Serving pharma, biotech, research institutes & universities',
  'NABL-accredited calibration services for analytical instruments',
  'Dedicated technical team with domain-specific expertise',
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function About({ id }) {
  return (
    <section id={id} className="bg-white py-8 sm:py-8 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

          {/* ── IMAGE ── */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">

              {/* Decorative bg frame */}
              <div className="absolute -top-3 -left-3 right-8 bottom-8 sm:-top-4 sm:-left-4 sm:right-10 sm:bottom-10 rounded-2xl bg-gradient-to-br from-blue-900/[0.08] to-sky-500/[0.06]" />

              <img
                src="/Screenshot 2026-04-13 150742.png"
                alt="SmartLabTech Laboratory"
                className="w-full rounded-2xl relative z-10 shadow-[0_20px_60px_rgba(30,58,138,0.18)]"
              />

              {/* Years badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 z-20 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 bg-gradient-to-br from-blue-900 to-blue-700 shadow-[0_8px_32px_rgba(30,58,138,0.3)]">
                <p className="text-2xl sm:text-3xl font-bold text-white leading-none">20+</p>
                <p className="text-[11px] sm:text-xs text-white/75 mt-1 whitespace-nowrap">Years of Excellence</p>
              </div>
            </div>
          </Reveal>

          {/* ── TEXT ── */}
          <Reveal delay={0.15}>
            <div className="mt-8 lg:mt-0">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 sm:mb-5 bg-sky-500/[0.08] border border-sky-500/20">
                <span className="text-[11px] font-bold text-sky-600 tracking-widest uppercase">About Us</span>
              </div>

              {/* Heading */}
              <h2 className="font-bold text-slate-900 leading-tight mb-4 sm:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                Welcome to{' '}
                <span className="text-blue-600">SmartLabTech</span>
              </h2>

              {/* Body paragraphs */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-3 sm:mb-4">
                Since 2004, SmartLabTech has been the trusted partner for research institutions, pharmaceutical giants,
                and educational bodies seeking world-class laboratory equipment and scientific solutions.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 sm:mb-7">
                We don't just supply equipment — we build long-term partnerships grounded in precision, reliability,
                and an unwavering commitment to advancing scientific discovery.
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2.5 sm:gap-3 mb-7 sm:mb-8">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="flex-shrink-0 mt-0.5 text-sky-400"
                    />
                    <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-900 to-sky-500 shadow-[0_6px_20px_rgba(30,58,138,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(30,58,138,0.35)] active:translate-y-0 transition-all duration-200 w-full xs:w-auto justify-center xs:justify-start">
                More Info <ArrowRight size={15} />
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}