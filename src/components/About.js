// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { CheckCircle2, ArrowRight, Award, Users, Globe2, Zap } from 'lucide-react';

// const HIGHLIGHTS = [
//   'Authorized dealer for 50+ globally recognized laboratory brands',
//   'End-to-end support: procurement, installation, calibration & AMC',
//   'Serving pharma, biotech, research institutes & universities',
//   'NABL-accredited calibration services for analytical instruments',
//   'Dedicated technical team with domain-specific expertise',
// ];

// const PILLARS = [
//   { icon: Award,  title: 'ISO Certified',       desc: 'ISO 9001:2015 quality management system' },
//   { icon: Users,  title: '200+ Expert Staff',   desc: 'Application specialists & service engineers' },
//   { icon: Globe2, title: 'Pan-India Network',   desc: 'Service centers across 25+ cities' },
//   { icon: Zap,    title: '24/7 Support',         desc: 'Round-the-clock technical assistance' },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-60px' });
//   return (
//     <motion.div ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25,0.46,0.45,0.94] }}>
//       {children}
//     </motion.div>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) 0' }}>
//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

//         {/* Pillars */}
//         {/* <Reveal>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
//             gap: 20, marginBottom: 80 }}>
//             {PILLARS.map(({ icon: Icon, title, desc }) => (
//               <div key={title}
//                 style={{ background: '#f8faff', border: '1px solid #e2e8f0',
//                   borderRadius: 12, padding: '24px 20px', transition: 'all 0.3s' }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor='#2563eb'; e.currentTarget.style.boxShadow='0 8px 24px rgba(30,58,138,0.10)'; }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.boxShadow='none'; }}>
//                 <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,rgba(30,58,138,0.1),rgba(14,165,233,0.1))',
//                   borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
//                   <Icon size={22} color="#1e3a8a" />
//                 </div>
//                 <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 700,
//                   color: '#1e3a8a', marginBottom: 5 }}>{title}</div>
//                 <div style={{ fontSize: 12, color: '#64748b', fontFamily: "'DM Sans',sans-serif",
//                   lineHeight: 1.5 }}>{desc}</div>
//               </div>
//             ))}
//           </div>
//         </Reveal> */}

//         {/* Main layout */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
//           gap: 64, alignItems: 'center' }}>

//           {/* Image */}
//           <Reveal>
//             <div style={{ position: 'relative' }}>
//               <div style={{ position: 'absolute', top: -16, left: -16, right: 40, bottom: 40,
//                 background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(14,165,233,0.06))',
//                 borderRadius: 20 }} />
//               <img
//                 src="/Screenshot 2026-04-13 150742.png"
//                 alt="SmartLabTech Laboratory"
//                 style={{ width: '100%', borderRadius: 16,
//                   boxShadow: '0 20px 60px rgba(30,58,138,0.18)',
//                   position: 'relative', zIndex: 1 }}
//               />
//               {/* Badge overlay */}
//               <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 2,
//                 background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
//                 borderRadius: 14, padding: '18px 22px',
//                 boxShadow: '0 8px 32px rgba(30,58,138,0.3)' }}>
//                 <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32,
//                   fontWeight: 700, color: '#fff', lineHeight: 1 }}>20+</div>
//                 <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)',
//                   fontFamily: "'DM Sans',sans-serif", marginTop: 4 }}>Years of Excellence</div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Text */}
//           <Reveal delay={0.15}>
//             <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
//               borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
//               <span style={{ fontSize: 11, fontWeight: 700, color: '#0284c7',
//                 fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                 About Us
//               </span>
//             </div>

//             <h2 style={{ fontFamily: "'Playfair Display',serif",
//               fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 700,
//               color: '#0f172a', lineHeight: 1.2, marginBottom: 20 }}>
//               Welcome to{' '}
//               <span className="text-gradient">SmartLabTech</span>
//             </h2>

//             <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, marginBottom: 16,
//               fontFamily: "'DM Sans',sans-serif" }}>
//               Since 2004, SmartLabTech has been the trusted partner for research institutions, pharmaceutical giants, and educational bodies seeking world-class laboratory equipment and scientific solutions.
//             </p>
//             <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.8, marginBottom: 28,
//               fontFamily: "'DM Sans',sans-serif" }}>
//               We don't just supply equipment — we build long-term partnerships grounded in precision, reliability, and an unwavering commitment to advancing scientific discovery.
//             </p>

//             <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
//               {HIGHLIGHTS.map(h => (
//                 <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
//                   <CheckCircle2 size={18} color="#0ea5e9" style={{ flexShrink: 0, marginTop: 2 }} />
//                   <span style={{ fontSize: 14, color: '#475569', fontFamily: "'DM Sans',sans-serif",
//                     lineHeight: 1.6 }}>{h}</span>
//                 </div>
//               ))}
//             </div>

//             <button
//               style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
//                 border: 'none', color: '#fff', padding: '13px 28px',
//                 borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
//                 fontFamily: "'DM Sans',sans-serif",
//                 boxShadow: '0 6px 20px rgba(30,58,138,0.25)',
//                 display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.25s' }}
//               onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(30,58,138,0.35)'; }}
//               onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 6px 20px rgba(30,58,138,0.25)'; }}>
//               More Info <ArrowRight size={15} />
//             </button>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <Reveal>
            <div className="relative">
              {/* Decorative bg frame */}
              <div className="absolute -top-4 -left-4 right-10 bottom-10 rounded-2xl"
                style={{ background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(14,165,233,0.06))' }} />
              <img
                src="/Screenshot 2026-04-13 150742.png"
                alt="SmartLabTech Laboratory"
                className="w-full rounded-2xl relative z-10"
                style={{ boxShadow: '0 20px 60px rgba(30,58,138,0.18)' }}
              />
              {/* Years badge */}
              <div className="absolute -bottom-5 -right-5 z-20 rounded-2xl px-5 py-4"
                style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)', boxShadow: '0 8px 32px rgba(30,58,138,0.3)' }}>
                <p className="font-display text-3xl font-bold text-white leading-none">20+</p>
                <p className="text-xs text-white/75 font-body mt-1">Years of Excellence</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.15}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 border"
              style={{ background: 'rgba(14,165,233,0.08)', borderColor: 'rgba(14,165,233,0.2)' }}>
              <span className="text-[11px] font-bold text-sky-600 font-body tracking-widest uppercase">About Us</span>
            </div>

            <h2 className="font-display font-bold text-slate-900 leading-tight mb-5"
              style={{ fontSize: 'clamp(26px,3.5vw,46px)' }}>
              Welcome to{' '}
              <span className="text-gradient">SmartLabTech</span>
            </h2>

            <p className="text-base text-slate-400 leading-relaxed mb-4 font-body">
              Since 2004, SmartLabTech has been the trusted partner for research institutions, pharmaceutical giants,
              and educational bodies seeking world-class laboratory equipment and scientific solutions.
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-7 font-body">
              We don't just supply equipment — we build long-term partnerships grounded in precision, reliability,
              and an unwavering commitment to advancing scientific discovery.
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-3 mb-8">
              {HIGHLIGHTS.map(h => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-sky-400" />
                  <span className="text-sm text-slate-500 font-body leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            <button
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white font-body border-none cursor-pointer transition-all"
              style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)', boxShadow: '0 6px 20px rgba(30,58,138,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,58,138,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.25)'; }}
            >
              More Info <ArrowRight size={15} />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
} 