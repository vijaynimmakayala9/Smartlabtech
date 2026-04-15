

// import { useRef, useEffect, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Quote, Star, ChevronLeft, ChevronRight, Briefcase, Calendar, Users, TrendingUp, Award, ThumbsUp } from 'lucide-react';

// const TESTIMONIALS = [
//   {
//     name: 'Nimmakayala Vijay',
//     role: 'Research Associate',
//     company: 'Genentech Solutions',
//     year: '2022',
//     quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
//     rating: 5,
//   },
//   {
//     name: 'K. Manoj Kumar',
//     role: 'Quality Analyst',
//     company: 'PharmaCore Labs',
//     year: '2023',
//     quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
//     rating: 4,
//   },
//   {
//     name: 'K. Ganapathi Vara Prasad',
//     role: 'Lab Manager',
//     company: 'BioResearch India',
//     year: '2024',
//     quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
//     rating: 4,
//   },
//   {
//     name: 'Sneha Reddy',
//     role: 'R&D Scientist',
//     company: 'AstraZeneca India',
//     year: '2023',
//     quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
//     rating: 5,
//   },
//   {
//     name: 'Rajesh Kumar',
//     role: 'Technical Director',
//     company: 'LabTech Solutions',
//     year: '2021',
//     quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
//     rating: 5,
//   },
// ];

// const COMPANY_STATS = [
//   { icon: Users, value: '5000+', label: 'Alumni Network', color: '#1e3a8a' },
//   { icon: TrendingUp, value: '95%', label: 'Placement Rate', color: '#0284c7' },
//   { icon: Award, value: '150+', label: 'Industry Partners', color: '#0ea5e9' },
//   { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate', color: '#1d4ed8' },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function Testimonials() {
//   const scrollContainerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

//   const cardWidth = 380;
//   const visibleCards = 2;
//   const maxScroll = (TESTIMONIALS.length - visibleCards) * cardWidth;

//   const scrollToIndex = (index) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = Math.min(index * cardWidth, maxScroll);
//       scrollContainerRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//       setActiveIndex(index);
//     }
//   };

//   const nextSlide = () => {
//     const nextIndex = Math.min(activeIndex + 1, TESTIMONIALS.length - visibleCards);
//     scrollToIndex(nextIndex);
//   };

//   const prevSlide = () => {
//     const prevIndex = Math.max(activeIndex - 1, 0);
//     scrollToIndex(prevIndex);
//   };

//   // Auto-scroll logic
//   useEffect(() => {
//     if (!scrollContainerRef.current || isHovered || !isInView) return;

//     const interval = setInterval(() => {
//       let nextIndex = activeIndex + 1;
//       if (nextIndex > TESTIMONIALS.length - visibleCards) {
//         nextIndex = 0;
//       }
//       scrollToIndex(nextIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [activeIndex, isHovered, isInView]);

//   const handleScroll = () => {
//     if (!scrollContainerRef.current) return;
//     const container = scrollContainerRef.current;
//     const scrollLeft = container.scrollLeft;
//     const newIndex = Math.round(scrollLeft / cardWidth);
//     if (newIndex !== activeIndex && newIndex >= 0 && newIndex <= TESTIMONIALS.length - visibleCards) {
//       setActiveIndex(newIndex);
//     }
//   };

//   // Render stars based on rating
//   const renderStars = (rating) => {
//     return (
//       <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             size={16}
//             fill={i < rating ? '#fbbf24' : '#e2e8f0'}
//             color={i < rating ? '#fbbf24' : '#e2e8f0'}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="testimonials"
//       style={{
//         background: '#f8faff',
//         padding: 'clamp(64px, 8vw, 100px) 0',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>
        
//         {/* Header Section */}
//         <Reveal>
//           <div style={{ textAlign: 'center', marginBottom: 48 }}>
//             <div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 background: 'rgba(14,165,233,0.08)',
//                 border: '1px solid rgba(14,165,233,0.2)',
//                 borderRadius: 20,
//                 padding: '5px 14px',
//                 marginBottom: 20,
//               }}
//             >
//               <Quote size={14} color="#0284c7" />
//               <span
//                 style={{
//                   fontSize: 11,
//                   fontWeight: 700,
//                   color: '#0284c7',
//                   fontFamily: "'DM Sans', sans-serif",
//                   letterSpacing: '0.1em',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 What Our Alumni Says?
//               </span>
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: 'clamp(28px, 4vw, 42px)',
//                 fontWeight: 700,
//                 color: '#0f172a',
//                 lineHeight: 1.2,
//                 marginBottom: 16,
//               }}
//             >
//               What Our{' '}
//               <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                 Alumni
//               </span>{' '}
//               Speaks?
//             </h2>
//             <p
//               style={{
//                 fontSize: 15,
//                 color: '#64748b',
//                 fontFamily: "'DM Sans', sans-serif",
//                 lineHeight: 1.6,
//                 maxWidth: 550,
//                 margin: '0 auto',
//               }}
//             >
//               Real stories from our successful graduates
//             </p>
//           </div>
//         </Reveal>

//         {/* Testimonials Horizontal Scroll Section */}
//         <div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           style={{ position: 'relative' }}
//         >
//           {/* Gradient fade overlays */}
//           <div
//             style={{
//               position: 'absolute',
//               left: 0,
//               top: 0,
//               bottom: 0,
//               width: 50,
//               background: 'linear-gradient(to right, #f8faff, transparent)',
//               pointerEvents: 'none',
//               zIndex: 2,
//             }}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               right: 0,
//               top: 0,
//               bottom: 0,
//               width: 50,
//               background: 'linear-gradient(to left, #f8faff, transparent)',
//               pointerEvents: 'none',
//               zIndex: 2,
//             }}
//           />

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             style={{
//               position: 'absolute',
//               left: -15,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               width: 40,
//               height: 40,
//               borderRadius: '50%',
//               border: '1px solid #e2e8f0',
//               background: '#fff',
//               cursor: 'pointer',
//               display: activeIndex === 0 ? 'none' : 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               zIndex: 3,
//               transition: 'all 0.3s',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = '#1e3a8a';
//               e.currentTarget.style.color = '#fff';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#fff';
//               e.currentTarget.style.color = '#1e3a8a';
//             }}
//           >
//             <ChevronLeft size={18} color="currentColor" />
//           </button>

//           <button
//             onClick={nextSlide}
//             style={{
//               position: 'absolute',
//               right: -15,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               width: 40,
//               height: 40,
//               borderRadius: '50%',
//               border: '1px solid #e2e8f0',
//               background: '#fff',
//               cursor: 'pointer',
//               display: activeIndex >= TESTIMONIALS.length - 2 ? 'none' : 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               zIndex: 3,
//               transition: 'all 0.3s',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = '#1e3a8a';
//               e.currentTarget.style.color = '#fff';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#fff';
//               e.currentTarget.style.color = '#1e3a8a';
//             }}
//           >
//             <ChevronRight size={18} color="currentColor" />
//           </button>

//           {/* Scroll Container */}
//           <div
//             ref={scrollContainerRef}
//             onScroll={handleScroll}
//             style={{
//               display: 'flex',
//               gap: 24,
//               overflowX: 'auto',
//               scrollBehavior: 'smooth',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               padding: '10px 0 20px 0',
//               cursor: isHovered ? 'grab' : 'default',
//             }}
//             className="hide-scrollbar"
//           >
//             {TESTIMONIALS.map((testimonial, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 style={{
//                   minWidth: 340,
//                   flex: '1 1 auto',
//                   background: '#fff',
//                   borderRadius: 16,
//                   padding: '28px 24px',
//                   boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
//                   border: '1px solid #eef2f6',
//                   transition: 'all 0.3s ease',
//                 }}
//                 whileHover={{
//                   y: -4,
//                   boxShadow: '0 12px 28px rgba(30,58,138,0.12)',
//                   borderColor: '#0ea5e9',
//                 }}
//               >
//                 {/* Name */}
//                 <h3
//                   style={{
//                     fontSize: 18,
//                     fontWeight: 700,
//                     color: '#1e3a8a',
//                     fontFamily: "'DM Sans', sans-serif",
//                     marginBottom: 8,
//                   }}
//                 >
//                   {testimonial.name}
//                 </h3>

//                 {/* Stars */}
//                 {renderStars(testimonial.rating)}

//                 {/* Quote Text */}
//                 <p
//                   style={{
//                     fontSize: 14,
//                     color: '#475569',
//                     fontFamily: "'DM Sans', sans-serif",
//                     lineHeight: 1.7,
//                     marginBottom: 0,
//                   }}
//                 >
//                   "{testimonial.quote}"
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Progress Indicators */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: 10,
//             marginTop: 32,
//           }}
//         >
//           {[...Array(TESTIMONIALS.length - 1)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => scrollToIndex(idx)}
//               style={{
//                 width: activeIndex === idx ? 32 : 8,
//                 height: 8,
//                 borderRadius: 4,
//                 border: 'none',
//                 background:
//                   activeIndex === idx
//                     ? 'linear-gradient(90deg, #1e3a8a, #0ea5e9)'
//                     : 'rgba(30,58,138,0.2)',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//               }}
//             />
//           ))}
//         </div>

//         {/* Auto-play indicator bar */}
//         {!isHovered && isInView && (
//           <div
//             style={{
//               position: 'relative',
//               width: 100,
//               height: 2,
//               background: '#e2e8f0',
//               borderRadius: 2,
//               margin: '24px auto 0',
//               overflow: 'hidden',
//             }}
//           >
//             <motion.div
//               animate={{ x: ['-100%', '0%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 background: 'linear-gradient(90deg, #1e3a8a, #0ea5e9)',
//               }}
//             />
//           </div>
//         )}
//       </div>

//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .text-gradient {
//           background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         @media (max-width: 768px) {
//           button[style*="position: absolute"] {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Nimmakayala Vijay',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
  },
  {
    name: 'K. Manoj Kumar',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
  },
  {
    name: 'K. Ganapathi Vara Prasad',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
  },
  {
    name: 'Sneha Reddy',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80',
    quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
    quote: 'The practical exposure and modern lab facilities gave me an edge in my career. The mentorship program is outstanding and truly industry-relevant.',
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
export default function Testimonials() {
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
  const next = () => goTo((current + 1) % pairs.length,  1);
  const prev = () => goTo((current - 1 + pairs.length) % pairs.length, -1);

  // Auto-slide left every 4 s
  useEffect(() => {
    if (paused || !isInView) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [current, paused, isInView]);

  const variants = {
    enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }),
  };

  return (
    <section ref={sectionRef} id="testimonials" className="bg-white py-16 sm:py-24">
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