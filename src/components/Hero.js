import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import analytics from '../assets/analytical.jpg';


const SLIDES = [
  {
    headline: 'Advanced Laboratory Equipment',
    sub: 'From research benches to industrial floors — precision instruments that define scientific excellence.',
    img : analytics,
    badge: 'ISO 9001:2015 Certified',
  },
  {
    headline: 'Precision Scientific Instruments',
    sub: 'Analytical tools engineered for accuracy. Trusted by leading research institutes and pharma companies.',
    img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80',
    badge: 'Serving 500+ Institutions',
  },
  {
    headline: 'Reliable Research Solutions',
    sub: 'Two decades of expertise in sourcing, installing, and supporting scientific equipment across India.',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
    badge: '20+ Years of Trust',
  },
];

function smoothScrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [displayText, setDisplayText] = useState('');
  const timerRef = useRef(null);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const next = () => go((current + 1) % SLIDES.length);
  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  useEffect(() => {
    let i = 0;
    const text = SLIDES[current].headline;
    setDisplayText('');
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 48);
    return () => clearInterval(interval);
  }, [current]);

  const slide = SLIDES[current];

  const imgVariants = {
    enter: () => ({ scale: 1.05, opacity: 0 }),
    center: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const words = displayText.split(' ');
  const firstWord = words.slice(0, 1).join(' ');
  const restWords = words.slice(1).join(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#f0f7ff 0%,#ffffff 60%,#f8faff 100%)', paddingTop: 0 }}
    >
      {/* Grid BG */}
      <div className="grid-bg absolute inset-0 opacity-60 pointer-events-none" />

      {/* Blobs */}
      <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(30,58,138,0.08) 0%,transparent 70%)' }} />

      <div className="flex-1 max-w-screen-xl mx-auto w-full px-4 sm:px-8 lg:px-20 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
            style={{ background: 'rgba(14,165,233,0.1)', borderColor: 'rgba(14,165,233,0.25)' }}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400" style={{ animation: 'pulse-dot 2s infinite' }} />
            <span className="text-xs font-semibold text-sky-700 tracking-wide font-body">{slide.badge}</span>
          </motion.div>

          {/* Sub-label */}
          <p className="font-display text-slate-400 text-xl sm:text-2xl font-normal mb-2">Looking for</p>

          {/* Animated headline */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.h1
              key={current}
              custom={direction}
              initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }}
              exit={{ x: direction > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35 } }}
              className="font-display font-bold leading-tight text-slate-900 mb-5"
              style={{ fontSize: 'clamp(28px,4.5vw,58px)' }}
            >
              <span className="block">{firstWord} </span>
              <span className="text-gradient">{restWords}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Sub text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base text-slate-500 leading-relaxed max-w-lg mb-9 font-body"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => smoothScrollTo('contact')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-body transition-all duration-250 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
                boxShadow: '0 6px 24px rgba(30,58,138,0.28)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 32px rgba(30,58,138,0.36)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(30,58,138,0.28)'}
            >
              Get Quote <ArrowRight size={16} />
            </button>
            <button
              onClick={() => smoothScrollTo('services')}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-blue-900 border border-slate-300 bg-transparent font-body transition-all duration-250"
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1e3a8a'; e.currentTarget.style.background = '#f0f7ff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = 'transparent'; }}
            >
              Browse Products
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative">
          {/* Decorative frame */}
          <div className="absolute -top-4 -right-4 left-4 bottom-4 rounded-3xl z-0"
            style={{ background: 'linear-gradient(135deg,rgba(30,58,138,0.1),rgba(14,165,233,0.08))' }} />

          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3', boxShadow: '0 24px 64px rgba(30,58,138,0.22)' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={current}
                custom={direction}
                variants={imgVariants}
                initial="enter" animate="center" exit="exit"
                src={slide.img} alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-8"
              style={{ background: 'linear-gradient(to top,rgba(15,23,42,0.7),transparent)' }}>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i} onClick={() => go(i)}
                      className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
                      style={{ width: i === current ? 24 : 8, background: i === current ? '#0ea5e9' : 'rgba(255,255,255,0.4)' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}