import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/DSC09662.jpg';
import img2 from '../assets/DSC04569.jpg';
import img3 from '../assets/DSC04595.jpg';

const SLIDES = [
  { url: img1, year: '1999', label: 'The Beginning',  desc: 'Founded with a vision to redefine scientific excellence in India.' },
  { url: img2, year: '2005', label: 'First Lab Wing', desc: 'Expanded our infrastructure with a state-of-the-art laboratory wing.' },
  { url: img3, year: '2009', label: 'ISO Certified',  desc: 'Achieved ISO certification, marking our commitment to global quality standards.' },
];

export default function JourneySection({ id }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id={id} className="bg-white py-8 overflow-hidden relative font-body">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-[15%] -right-[8%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.10) 0%,transparent 65%)' }} />
        <div className="absolute top-[40%] left-[45%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle,rgba(99,102,241,0.07) 0%,transparent 65%)' }} />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Image / Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <img
                src="/ChatGPT Image Apr 14, 2026, 02_46_22 PM.png"
                alt="25 years of excellence"
                className="w-full h-auto block object-contain"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              {/* Fallback */}
              <div className="hidden flex-col items-center justify-center h-[380px] gap-5">
                <p className="font-display font-extrabold leading-none text-7xl text-gradient">25</p>
                <p className="text-sm text-slate-400 tracking-[0.2em] uppercase">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Slider card */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden" style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.22)' }}>
            {SLIDES.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: i === current ? 1 : 0, x: i === current ? 0 : 100 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img src={slide.url} alt={slide.label} className="w-full h-full object-cover" />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(2,6,23,0.9),transparent 60%)' }} />
                {/* Content */}
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  {/* <p className="text-sm text-sky-400 mb-1.5">{slide.year}</p> */}
                  {/* <h3 className="text-2xl font-bold mb-2">{slide.label}</h3> */}
                  {/* <p className="text-sm opacity-80 max-w-md">{slide.desc}</p> */}
                </div>
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
    </section>
  );
}