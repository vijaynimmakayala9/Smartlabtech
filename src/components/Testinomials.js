import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
const TESTIMONIALS = [
  {
    name: 'Nimmakayala Vijay',
    role: 'Lab Director, Aurobindo Pharma',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    quote: 'SmartLabTech has been our trusted partner for over 8 years. Their analytical balances and chromatography systems are exceptionally reliable. The technical support team is always prompt and knowledgeable.',
  },
  {
    name: 'K. Manoj Kumar',
    role: 'Purchase Manager, Dr. Reddy\'s Laboratories',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    quote: 'We source most of our lab equipment from SmartLabTech. Their product quality is outstanding, and the after-sales service is unmatched. Installation was smooth and their team provided excellent training.',
  },
  {
    name: 'K. Ganapathi Vara Prasad',
    role: 'Research Head, CSIR-IICT',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    quote: 'The precision and durability of SmartLabTech\'s instruments have significantly improved our research outcomes. Their calibration services ensure our equipment always performs at peak accuracy.',
  },
  {
    name: 'Sneha Reddy',
    role: 'QC Manager, Bharat Biotech',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    quote: 'From biosafety cabinets to ULT freezers, every product we\'ve purchased from SmartLabTech has exceeded our expectations. Their AMC services keep our lab running without interruptions.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Technical Director, Sipra Labs',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
    quote: 'SmartLabTech helped us set up our entire analytical lab. Their expertise in selecting the right instruments saved us both time and money. Two decades of excellence truly shows in their service.',
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, Vimta Labs',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    quote: 'We\'ve been relying on SmartLabTech for all our laboratory needs since 2015. Their quick response time for repairs and genuine spare parts availability makes them our go-to partner.',
  },
];

/* ─── Single card ─────────────────────────────────────── */
function Card({ t }) {
  const [imgErr, setImgErr] = useState(false);
  const initials = t.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div
      className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 w-full transition-all duration-300"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', minHeight: 180 }}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        {!imgErr ? (
          <img
            src={t.image} alt={t.name}
            className="w-[72px] h-[72px] rounded-full object-cover border-2 border-slate-100"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div
            className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white text-xl font-bold font-display"
            style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-base font-bold font-body leading-tight" style={{ color: '#9b1c1c' }}>
          {t.name}
        </p>

        {/* Stars */}
        <div className="flex gap-0.5 my-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i} size={16}
              fill={i < t.rating ? '#f59e0b' : '#e5e7eb'}
              color={i < t.rating ? '#f59e0b' : '#e5e7eb'}
            />
          ))}
        </div>

        <p className="text-sm text-slate-500 font-body leading-relaxed">
          "{t.quote}"
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export default function Testimonials({ id }) {
  // Group into pairs
  const pairs = [];
  for (let i = 0; i < TESTIMONIALS.length; i += 2) {
    pairs.push([TESTIMONIALS[i], TESTIMONIALS[i + 1]].filter(Boolean));
  }

  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused,    setPaused]    = useState(false);
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: false, amount: 0.2 });

  const goTo = (idx, dir) => { setDirection(dir); setCurrent(idx); };
  const next = useCallback(() => {
    goTo((current + 1) % pairs.length, 1);
  }, [current, pairs.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + pairs.length) % pairs.length, -1);
  } , [current, pairs.length]);


  // Auto-slide left every 4 s
  useEffect(() => {
    if (paused || !isInView) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [current, paused, isInView, next]);

  const variants = {
    enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section id={id} ref={sectionRef} className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-slate-900 leading-tight mb-3" style={{ fontSize: 'clamp(26px,4vw,42px)' }}>
            What Our <span style={{ color: '#9b1c1c' }}>Alumni</span> Speaks?
          </h2>
          <p className="text-sm text-slate-400 font-body">Real success stories from our graduates across India</p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="overflow-hidden relative" style={{ minHeight: 200 }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
              >
                {pairs[current].map((t, i) => <Card key={i} t={t} />)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 cursor-pointer transition-all duration-200 group hover:bg-blue-900 hover:border-blue-900"
            style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}
          >
            <ChevronLeft size={18} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 cursor-pointer transition-all duration-200 group hover:bg-blue-900 hover:border-blue-900"
            style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.10)' }}
          >
            <ChevronRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {pairs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx, idx >= current ? 1 : -1)}
              className="h-2 rounded-full border-none cursor-pointer transition-all duration-300"
              style={{
                width: current === idx ? 28 : 8,
                background: current === idx
                  ? 'linear-gradient(90deg,#1e3a8a,#0ea5e9)'
                  : 'rgba(30,58,138,0.18)',
              }}
            />
          ))}
        </div>

        {/* Progress bar — restarts on each slide change */}
        {!paused && isInView && (
          <div className="relative w-20 h-0.5 bg-slate-200 rounded mx-auto mt-5 overflow-hidden">
            <motion.div
              key={current}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 4, ease: 'linear' }}
              className="absolute inset-0 w-full h-full origin-left rounded"
              style={{ background: 'linear-gradient(90deg,#1e3a8a,#0ea5e9)' }}
            />
          </div>
        )}

      </div>
    </section>
  );
}

// // src/components/Testimonials.js
// import { useRef, useEffect, useState, useCallback } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// const TESTIMONIALS = [
//   {
//     name: 'Nimmakayala Vijay',
//     role: 'Lab Director, Aurobindo Pharma',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
//     quote: 'SmartLabTech has been our trusted partner for over 8 years. Their analytical balances and chromatography systems are exceptionally reliable. The technical support team is always prompt and knowledgeable.',
//   },
//   {
//     name: 'K. Manoj Kumar',
//     role: 'Purchase Manager, Dr. Reddy\'s Laboratories',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
//     quote: 'We source most of our lab equipment from SmartLabTech. Their product quality is outstanding, and the after-sales service is unmatched. Installation was smooth and their team provided excellent training.',
//   },
//   {
//     name: 'K. Ganapathi Vara Prasad',
//     role: 'Research Head, CSIR-IICT',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
//     quote: 'The precision and durability of SmartLabTech\'s instruments have significantly improved our research outcomes. Their calibration services ensure our equipment always performs at peak accuracy.',
//   },
//   {
//     name: 'Sneha Reddy',
//     role: 'QC Manager, Bharat Biotech',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
//     quote: 'From biosafety cabinets to ULT freezers, every product we\'ve purchased from SmartLabTech has exceeded our expectations. Their AMC services keep our lab running without interruptions.',
//   },
//   {
//     name: 'Rajesh Kumar',
//     role: 'Technical Director, Sipra Labs',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
//     quote: 'SmartLabTech helped us set up our entire analytical lab. Their expertise in selecting the right instruments saved us both time and money. Two decades of excellence truly shows in their service.',
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Operations Head, Vimta Labs',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
//     quote: 'We\'ve been relying on SmartLabTech for all our laboratory needs since 2015. Their quick response time for repairs and genuine spare parts availability makes them our go-to partner.',
//   },
// ];

// /* ─── Single Card Component ─── */
// function Card({ t }) {
//   const [imgErr, setImgErr] = useState(false);
//   const initials = t.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

//   return (
//     <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100 w-full shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[180px]">
//       {/* Avatar */}
//       <div className="flex-shrink-0">
//         {!imgErr ? (
//           <img
//             src={t.image}
//             alt={t.name}
//             className="w-[72px] h-[72px] rounded-full object-cover border-2 border-slate-100"
//             onError={() => setImgErr(true)}
//           />
//         ) : (
//           <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-white text-xl font-bold bg-gradient-to-br from-blue-900 to-sky-500">
//             {initials}
//           </div>
//         )}
//       </div>

//       {/* Content */}
//       <div className="flex-1 min-w-0">
//         <p className="text-base font-bold text-blue-900 leading-tight">
//           {t.name}
//         </p>
        
//         <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>

//         {/* Stars */}
//         <div className="flex gap-0.5 my-2">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               size={14}
//               fill={i < t.rating ? '#f59e0b' : '#e5e7eb'}
//               color={i < t.rating ? '#f59e0b' : '#e5e7eb'}
//             />
//           ))}
//         </div>

//         <p className="text-sm text-slate-600 leading-relaxed italic">
//           "{t.quote}"
//         </p>
//       </div>
//     </div>
//   );
// }

// /* ─── Main Component ─── */
// export default function Testimonials({ id }) {
//   // Group testimonials into pairs for carousel
//   const pairs = [];
//   for (let i = 0; i < TESTIMONIALS.length; i += 2) {
//     pairs.push([TESTIMONIALS[i], TESTIMONIALS[i + 1]].filter(Boolean));
//   }

//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [paused, setPaused] = useState(false);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2 });


//   const goTo = (idx, dir) => {
//     setDirection(dir);
//     setCurrent(idx);
//   };
// const next = useCallback(() => {
//   goTo((current + 1) % pairs.length, 1);
// }, [current, pairs.length]); // Dependencies for next

// const prev = useCallback(() => {
//   goTo((current - 1 + pairs.length) % pairs.length, -1);
// }, [current, pairs.length]);


// useEffect(() => {
//   if (paused || !isInView) return;
//   const timer = setInterval(next, 4000);
//   return () => clearInterval(timer);
// }, [current, paused, isInView, next]);

//   const variants = {
//     enter: (d) => ({ 
//       x: d > 0 ? '100%' : '-100%', 
//       opacity: 0 
//     }),
//     center: { 
//       x: 0, 
//       opacity: 1, 
//       transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } 
//     },
//     exit: (d) => ({ 
//       x: d > 0 ? '-60%' : '60%', 
//       opacity: 0, 
//       transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
//     }),
//   };

//   return (
//     <section id={id} ref={sectionRef} className="bg-white py-16 sm:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
//             Testimonials
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
//             Trusted by <span className="text-blue-600">Industry Leaders</span>
//           </h2>
//           <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
//             See what our clients say about our laboratory equipment and services
//           </p>
//         </div>

//         {/* Carousel */}
//         <div
//           className="relative"
//           onMouseEnter={() => setPaused(true)}
//           onMouseLeave={() => setPaused(false)}
//         >
//           {/* Slides Container */}
//           <div className="overflow-hidden relative min-h-[200px]">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={current}
//                 custom={direction}
//                 variants={variants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
//               >
//                 {pairs[current].map((t, i) => (
//                   <Card key={i} t={t} />
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Previous Arrow */}
//           <button
//             onClick={prev}
//             aria-label="Previous testimonial"
//             className="absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 shadow-md hover:bg-blue-900 hover:border-blue-900 group transition-all duration-200"
//           >
//             <ChevronLeft size={18} className="text-slate-500 group-hover:text-white transition-colors" />
//           </button>

//           {/* Next Arrow */}
//           <button
//             onClick={next}
//             aria-label="Next testimonial"
//             className="absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center z-20 shadow-md hover:bg-blue-900 hover:border-blue-900 group transition-all duration-200"
//           >
//             <ChevronRight size={18} className="text-slate-500 group-hover:text-white transition-colors" />
//           </button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center items-center gap-2 mt-8">
//           {pairs.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => goTo(idx, idx >= current ? 1 : -1)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 current === idx 
//                   ? 'w-7 bg-gradient-to-r from-blue-900 to-sky-500' 
//                   : 'w-2 bg-blue-200 hover:bg-blue-300'
//               }`}
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>

//         {/* Progress Bar */}
//         {!paused && isInView && (
//           <div className="relative w-20 h-0.5 bg-slate-200 rounded-full mx-auto mt-5 overflow-hidden">
//             <motion.div
//               key={current}
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 4, ease: 'linear' }}
//               className="absolute inset-0 w-full h-full origin-left rounded-full bg-gradient-to-r from-blue-900 to-sky-500"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }