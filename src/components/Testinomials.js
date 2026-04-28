import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Nimmakayala Vijay',
    role: 'Lab Director, Aurobindo Pharma',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    quote:
      'SmartLabTech has been our trusted partner for over 8 years. Their analytical balances and chromatography systems are exceptionally reliable. The technical support team is always prompt and knowledgeable.',
  },
  {
    name: 'K. Manoj Kumar',
    role: "Purchase Manager, Dr. Reddy's Laboratories",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    quote:
      'We source most of our lab equipment from SmartLabTech. Their product quality is outstanding, and the after-sales service is unmatched. Installation was smooth and their team provided excellent training.',
  },
  {
    name: 'K. Ganapathi Vara Prasad',
    role: 'Research Head, CSIR-IICT',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    quote:
      "The precision and durability of SmartLabTech's instruments have significantly improved our research outcomes. Their calibration services ensure our equipment always performs at peak accuracy.",
  },
  {
    name: 'Sneha Reddy',
    role: 'QC Manager, Bharat Biotech',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    quote:
      "From biosafety cabinets to ULT freezers, every product we've purchased from SmartLabTech has exceeded our expectations. Their AMC services keep our lab running without interruptions.",
  },
  {
    name: 'Rajesh Kumar',
    role: 'Technical Director, Sipra Labs',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
    quote:
      'SmartLabTech helped us set up our entire analytical lab. Their expertise in selecting the right instruments saved us both time and money. Two decades of excellence truly shows in their service.',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, Vimta Labs',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    quote:
      "We've been relying on SmartLabTech for all our laboratory needs since 2015. Their quick response time for repairs and genuine spare parts availability makes them our go-to partner.",
  },
];

/* ─── Single card ─────────────────────────────────────── */
function Card({ t }) {
  const [imgErr, setImgErr] = useState(false);
  const initials = t.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] w-[300px] sm:w-[340px] lg:w-[360px] flex-shrink-0 select-none">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          {!imgErr ? (
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-slate-100"
              onError={() => setImgErr(true)}
              draggable={false}
            />
          ) : (
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br from-blue-900 to-sky-500">
              {initials}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-900 leading-tight truncate">{t.name}</p>
          <p className="text-xs text-slate-400 leading-snug mt-0.5 truncate">{t.role}</p>
          <div className="flex gap-0.5 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={13}
                fill={i < t.rating ? '#f59e0b' : '#e5e7eb'}
                color={i < t.rating ? '#f59e0b' : '#e5e7eb'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">"{t.quote}"</p>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export default function Testimonials({ id }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [paused, setPaused] = useState(false);

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <section
        id={id}
        ref={sectionRef}
        className="relative bg-slate-50 py-8 sm:py-8 lg:py-8 overflow-hidden"
      >
        {/* Header */}
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 bg-sky-500/[0.08] border border-sky-500/20">
              <span className="text-[11px] font-bold text-sky-600 tracking-widest uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="font-bold text-slate-900 leading-tight mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto">
              Real feedback from research institutes, pharma companies, and labs across India.
            </p>
          </motion.div>
        </div>

        {/* Single scrolling row — full bleed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden"
        >
          <div className={`flex gap-5 w-max marquee-track ${paused ? 'paused' : ''}`}>
            {doubled.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </section>
    </>
  );
}