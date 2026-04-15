// import { useRef, useState, useEffect } from 'react';
// import { motion  } from 'framer-motion';
// import img1 from '../assets/DSC09662.jpg';
// import img2 from '../assets/DSC04569.jpg';
// import img3 from '../assets/DSC04595.jpg';

// const SLIDES = [
//   {
//     url: img1,
//     year: '1999',
//     label: 'The Beginning',
//     desc: 'Founded with a vision to redefine scientific excellence in India.',
//   },
//   {
//     url: img2,
//     year: '2005',
//     label: 'First Lab Wing',
//     desc: 'Expanded our infrastructure with a state-of-the-art laboratory wing.',
//   },
//   {
//     url: img3,
//     year: '2009',
//     label: 'ISO Certified',
//     desc: 'Achieved ISO certification, marking our commitment to global quality standards.',
//   }, 
// ];


// export default function JourneySection() {
//   const [current, setCurrent] = useState(0);
//   const sectionRef = useRef(null);


//   useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrent((prev) => (prev + 1) % SLIDES.length);
//   }, 3000); // ⏱️ change every 3 sec

//   return () => clearInterval(interval);
// }, []);
  

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         background: '#ffffff',
//         padding: '10px 0',
//         minHeight: '100vh',
//         overflow: 'hidden',
//         position: 'relative',
//         fontFamily: "'DM Sans', sans-serif",
//       }}
//     >
//       {/* Background glow orbs */}
//       <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
//         <div style={{
//           position: 'absolute', bottom: '-15%', right: '-8%',
//           width: 600, height: 600,
//           background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)',
//           borderRadius: '50%',
//         }} />
//         <div style={{
//           position: 'absolute', top: '40%', left: '45%',
//           width: 400, height: 400,
//           background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
//           borderRadius: '50%',
//         }} />
//         {/* Grid pattern */}
//         <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
//           <defs>
//             <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
//               <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>

//         {/* Two-column layout */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: 60,
//           alignItems: 'center',
//         }}>

//           {/* ── LEFT: Image / Logo panel ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//           >
//             {/* Main image panel */}
//             <div style={{
//               position: 'relative',
//             }}>
//               <img
//                 src="/ChatGPT Image Apr 14, 2026, 02_46_22 PM.png"
//                 alt="25 years of excellence"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.parentNode.querySelector('.fallback-logo').style.display = 'flex';
//                 }}
//                 style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
//               />
//               {/* Fallback */}
//               <div className="fallback-logo" style={{
//                 display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
//                 height: 380, gap: 20,
//               }}>
//                 <div style={{
//                   fontSize: 72, fontWeight: 800, lineHeight: 1,
//                   background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
//                   WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//                   fontFamily: "'Playfair Display', serif",
//                 }}>25</div>
//                 <div style={{ color: 'rgba(148,163,184,1)', fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
//                   Years of Excellence
//                 </div>
//               </div>

//               {/* Corner glow */}
//               {/* <div style={{
//                 position: 'absolute', top: 0, left: 0, right: 0, height: 200,
//                 background: 'linear-gradient(to bottom, rgba(14,165,233,0.08), transparent)',
//                 pointerEvents: 'none',
//               }} /> */}
//             </div>

//             {/* Stats row below image */}
//             {/* <div style={{
//               display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
//               gap: 12, marginTop: 20,
//             }}>
//               {STATS.map((s, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
//                   style={{
//                     background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.06))',
//                     border: '1px solid rgba(56,189,248,0.15)',
//                     borderRadius: 16,
//                     padding: '16px 12px',
//                     textAlign: 'center',
//                   }}
//                 >
//                   <div style={{
//                     fontSize: 22, fontWeight: 800, color: '#38bdf8',
//                     fontFamily: "'Playfair Display', serif",
//                     lineHeight: 1,
//                   }}>{s.val}</div>
//                   <div style={{ fontSize: 11, color: 'rgba(148,163,184,0.8)', marginTop: 6, letterSpacing: '0.06em' }}>
//                     {s.lbl}
//                   </div>
//                 </motion.div>
//               ))}
//             </div> */}
//           </motion.div>

//           {/* ── RIGHT: Single card display ── */}
//           <div style={{
//             position: 'relative',
//             height: 420,
//             borderRadius: 20,
//             overflow: 'hidden',
//             boxShadow: '0 30px 80px rgba(0,0,0,0.4)'
//           }}>
//             {SLIDES.map((slide, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{
//                   opacity: i === current ? 1 : 0,
//                   x: i === current ? 0 : 100
//                 }}
//                 transition={{ duration: 0.8 }}
//                 style={{
//                   position: 'absolute',
//                   inset: 0
//                 }}
//               >
//                 {/* Image */}
//                 <img
//                   src={slide.url}
//                   alt={slide.label}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover'
//                   }}
//                 />

//                 {/* Gradient overlay */}
//                 <div style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: 'linear-gradient(to top, rgba(2,6,23,0.9), transparent 60%)'
//                 }} />

//                 {/* Content */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: 30,
//                   left: 30,
//                   right: 30,
//                   color: '#fff'
//                 }}>
//                   <div style={{
//                     fontSize: 14,
//                     color: '#38bdf8',
//                     marginBottom: 6
//                   }}>
//                     {slide.year}
//                   </div>

//                   <h3 style={{
//                     fontSize: 28,
//                     fontWeight: 700,
//                     marginBottom: 8
//                   }}>
//                     {slide.label}
//                   </h3>

//                   <p style={{
//                     fontSize: 14,
//                     opacity: 0.8,
//                     maxWidth: 400
//                   }}>
//                     {slide.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Progress bar */}
//             <div style={{
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               height: 3,
//               width: `${((current + 1) / SLIDES.length) * 100}%`,
//               background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
//               transition: 'width 0.5s'
//             }} />
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(0.7); }
//         }
//         @keyframes shimmer {
//           0% { background-position: 200% center; }
//           100% { background-position: -200% center; }
//         }
//         @media (max-width: 768px) {
//           section > div > div:last-child {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


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

export default function JourneySection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white py-2.5 min-h-screen overflow-hidden relative font-body">
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