import { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import img1 from '../assets/DSC09662.jpg';
import img2 from '../assets/DSC04569.jpg';
import img3 from '../assets/DSC04595.jpg';

const SLIDES = [
  { url: img1, year: '1999', label: 'The Beginning', desc: 'Founded with a vision to redefine scientific excellence in India.' },
  { url: img2, year: '2005', label: 'First Lab Wing', desc: 'Expanded our infrastructure with a state-of-the-art laboratory wing.' },
  { url: img3, year: '2009', label: 'ISO Certified', desc: 'Achieved ISO certification, marking our commitment to global quality standards.' },
];

const STATS = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 10, suffix: 'K+', label: 'Products Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function useCounter(target, inView, duration = 2) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, duration]);
  return val;
}

function StatItem({ value, suffix, label, inView, delay }) {
  const count = useCounter(value, inView, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center"
    >
      <span className="font-serif text-4xl font-black leading-none tracking-tight bg-gradient-to-br from-slate-900 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
        {count}{suffix}
      </span>
      <span className="mt-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400">
        {label}
      </span>
    </motion.div>
  );
}

export default function JourneySection({ id }) {
  const [current, setCurrent] = useState(0);
  const leftRef = useRef(null);
  const inView = useInView(leftRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id={id} className="bg-white py-8  overflow-hidden relative font-body">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-[15%] -right-[8%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.10) 0%,transparent 65%)' }} />
        <div className="absolute top-[40%] left-[45%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(99,102,241,0.07) 0%,transparent 65%)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="jgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#jgrid)" />
        </svg>
      </div>

      <div className="max-w-9xl mx-auto py-8 px-4 sm:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: Premium milestone display ── */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-10"
          >
            {/* Orbiting rings + 25 core */}
            <div className="relative w-[300px] h-[300px] flex-shrink-0">

              {/* Outer dashed orbit ring — slow CW */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-indigo-200"
              >
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 shadow-[0_0_12px_rgba(99,102,241,0.7)]" />
              </motion.div>

              {/* Middle counter-orbit ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-7 rounded-full border border-sky-200/50"
              >
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-gradient-to-br from-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              </motion.div>

              {/* Inner frosted glass circle */}
              <div className="absolute inset-14 rounded-full border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 shadow-[0_20px_60px_rgba(99,102,241,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]" />

              {/* Core content */}
              <div className="absolute inset-14 rounded-full flex flex-col items-center justify-center gap-0.5">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-[64px] font-black leading-none tracking-tighter bg-gradient-to-br from-slate-900 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
                >
                  25
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500 text-center leading-tight"
                >
                  Years of<br />Excellence
                </motion.span>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mt-1.5 w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                />
              </div>

              {/* Floating year badges */}
              {[
                { label: '1999', angle: -40, r: 142, delay: 0.6 },
                { label: '2005', angle: 140, r: 142, delay: 0.8 },
                { label: '2009', angle: 90, r: 147, delay: 1.0 },
              ].map(({ label, angle, r, delay }) => {
                const rad = (angle * Math.PI) / 180;
                const x = 150 + r * Math.cos(rad) - 22;
                const y = 150 + r * Math.sin(rad) - 13;
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute px-2.5 py-1 rounded-full text-[11px] font-bold text-indigo-500 tracking-wide whitespace-nowrap bg-white/90 backdrop-blur-sm border border-indigo-100 shadow-[0_4px_16px_rgba(99,102,241,0.15)]"
                    style={{ left: x, top: y }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>

            {/* Stats row */}
            <div className="w-full grid grid-cols-3 gap-2 relative">
              {/* Gradient dividers */}
              <div className="absolute top-2 bottom-2 left-1/3 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
              <div className="absolute top-2 bottom-2 left-2/3 w-px bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />

              {STATS.map((s, i) => (
                <StatItem key={i} {...s} inView={inView} delay={0.9 + i * 0.15} />
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="text-center text-[13px] text-blue-400 italic font-serif tracking-wide max-w-[280px]"
            >
              "Precision forged over a quarter century of scientific dedication."
            </motion.p>
          </motion.div>

          {/* ── RIGHT: Slider card ── */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
            {SLIDES.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : 100 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img src={slide.url} alt={slide.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
              </motion.div>
            ))}

            {/* Progress bar */}
            <div
              className="absolute bottom-0 left-0 h-[3px] transition-all duration-500"
              style={{
                width: `${((current + 1) / SLIDES.length) * 100}%`,
                background: 'linear-gradient(90deg,#38bdf8,#6366f1)',
              }}
            />
          </div>

        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap'); .font-serif { font-family: 'Playfair Display', Georgia, serif; }`}</style>
    </section>
  );
}