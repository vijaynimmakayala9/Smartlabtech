// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { FlaskConical, Microscope, Settings, HeartPulse, Lightbulb, ShieldCheck, Truck, BookOpen, ArrowRight } from 'lucide-react';

// const SERVICES = [
//   {
//     icon: FlaskConical,
//     title: 'Laboratory Equipment Supply',
//     desc: 'Comprehensive range of analytical and biotech instruments sourced from 50+ globally certified manufacturers.',
//     color: '#1e3a8a',
//     bg: 'rgba(30,58,138,0.07)',
//     tags: ['Analytical', 'Biotech', 'Industrial'],
//   },
//   {
//     icon: Microscope,
//     title: 'Analytical Instruments',
//     desc: 'Spectrometers, chromatographs, PCR systems and microscopy solutions for precise laboratory analysis.',
//     color: '#0284c7',
//     bg: 'rgba(2,132,199,0.07)',
//     tags: ['Spectroscopy', 'PCR', 'HPLC'],
//   },
//   {
//     icon: Settings,
//     title: 'Installation & Calibration',
//     desc: 'NABL-accredited calibration services and expert on-site installation by certified application scientists.',
//     color: '#0369a1',
//     bg: 'rgba(3,105,161,0.07)',
//     tags: ['NABL Accredited', 'On-site', 'Certified'],
//   },
//   {
//     icon: HeartPulse,
//     title: 'Maintenance & Support',
//     desc: 'Preventive maintenance contracts (AMC/CMC) and 24/7 breakdown support ensuring zero-downtime operations.',
//     color: '#1d4ed8',
//     bg: 'rgba(29,78,216,0.07)',
//     tags: ['AMC / CMC', '24/7 Support', 'Preventive'],
//   },
//   {
//     icon: Lightbulb,
//     title: 'Scientific Consulting',
//     desc: 'Expert guidance on equipment selection, lab design, workflow optimization and regulatory compliance.',
//     color: '#0ea5e9',
//     bg: 'rgba(14,165,233,0.07)',
//     tags: ['Lab Design', 'Compliance', 'Workflow'],
//   },
//   {
//     icon: ShieldCheck,
//     title: 'Quality Validation',
//     desc: 'IQ/OQ/PQ validation services for GMP-regulated pharmaceutical and biotechnology laboratories.',
//     color: '#2563eb',
//     bg: 'rgba(37,99,235,0.07)',
//     tags: ['IQ/OQ/PQ', 'GMP', 'Pharma'],
//   },
//   {
//     icon: Truck,
//     title: 'Import & Procurement',
//     desc: 'Hassle-free global procurement and import handling with complete documentation and customs clearance.',
//     color: '#1e40af',
//     bg: 'rgba(30,64,175,0.07)',
//     tags: ['Import', 'Global', 'Procurement'],
//   },
//   {
//     icon: BookOpen,
//     title: 'Training & Education',
//     desc: 'Instrument training, application workshops, and skill development programs for laboratory professionals.',
//     color: '#0c4a6e',
//     bg: 'rgba(12,74,110,0.07)',
//     tags: ['Workshops', 'Certification', 'Upskilling'],
//   },
// ];

// function ServiceCard({ service, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   const { icon: Icon, title, desc, color, bg, tags } = service;

//   return (
//     <motion.div ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.25,0.46,0.45,0.94] }}
//       style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16,
//         padding: '28px 24px', transition: 'all 0.3s ease', cursor: 'default', position: 'relative',
//         overflow: 'hidden' }}
//       onMouseEnter={e => {
//         e.currentTarget.style.borderColor = color;
//         e.currentTarget.style.boxShadow = `0 12px 40px ${color}1a`;
//         e.currentTarget.style.transform = 'translateY(-6px)';
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.borderColor = '#e2e8f0';
//         e.currentTarget.style.boxShadow = 'none';
//         e.currentTarget.style.transform = 'none';
//       }}>
//       {/* Top accent line */}
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3,
//         background: `linear-gradient(90deg,${color},${color}60)`,
//         transform: 'scaleX(0)', transition: 'transform 0.3s',
//         transformOrigin: 'left', borderRadius: '16px 16px 0 0' }}
//         ref={el => { if(el) el.closest('[data-hov]') }} />

//       <div style={{ width: 52, height: 52, background: bg, borderRadius: 12,
//         display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
//         <Icon size={24} color={color} />
//       </div>

//       <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600,
//         color: '#0f172a', marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>

//       <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 16,
//         fontFamily: "'DM Sans',sans-serif" }}>{desc}</p>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
//         {tags.map(tag => (
//           <span key={tag} style={{ fontSize: 11, fontWeight: 600, color,
//             background: bg, padding: '3px 10px', borderRadius: 20,
//             fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.04em' }}>
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div style={{ display: 'flex', alignItems: 'center', gap: 6,
//         fontSize: 13, color, fontWeight: 600, fontFamily: "'DM Sans',sans-serif", cursor: 'pointer' }}>
//         Learn More <ArrowRight size={14} />
//       </div>
//     </motion.div>
//   );
// }

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25,0.46,0.45,0.94] }}>
//       {children}
//     </motion.div>
//   );
// }

// export default function Services() {
//   return (
//     <section id="services"
//       style={{ background: '#f8faff', padding: 'clamp(0px,8vw,0px) 0', position: 'relative', overflow: 'hidden' }}>

//       {/* Decorative background blob */}
//       <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600,
//         background: 'radial-gradient(circle,rgba(14,165,233,0.06) 0%,transparent 70%)',
//         borderRadius: '50%', pointerEvents: 'none' }} />

//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

//         {/* Header */}
//         <Reveal>
//           <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
//             <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
//               borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
//               <span style={{ fontSize: 11, fontWeight: 700, color: '#0284c7',
//                 fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                 Our Services
//               </span>
//             </div>
//             <h2 style={{ fontFamily: "'Playfair Display',serif",
//               fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 700,
//               color: '#0f172a', lineHeight: 1.2, marginBottom: 16 }}>
//               Comprehensive{' '}
//               <span className="text-gradient">Lab Solutions</span>
//             </h2>
//             <p style={{ fontSize: 16, color: '#64748b', lineHeight: 1.75,
//               fontFamily: "'DM Sans',sans-serif" }}>
//               From procurement to post-installation support — we deliver end-to-end laboratory services with unmatched technical expertise and reliability.
//             </p>
//           </div>
//         </Reveal>

//         {/* Cards Grid */}
//         <div style={{ display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 22 }}>
//           {SERVICES.map((svc, i) => <ServiceCard key={svc.title} service={svc} index={i} />)}
//         </div>

//         {/* CTA Banner */}
//         <Reveal delay={0.1}>
//           <div style={{ marginTop: 56, background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0369a1)',
//             borderRadius: 20, padding: 'clamp(28px,4vw,48px) clamp(24px,4vw,56px)',
//             display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//             flexWrap: 'wrap', gap: 24,
//             boxShadow: '0 16px 48px rgba(30,58,138,0.25)' }}>
//             <div>
//               <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(20px,2.5vw,28px)',
//                 fontWeight: 700, color: '#fff', marginBottom: 8 }}>
//                 Need a customized lab solution?
//               </h3>
//               <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)',
//                 fontFamily: "'DM Sans',sans-serif" }}>
//                 Talk to our technical experts and get a solution tailored for your laboratory needs.
//               </p>
//             </div>
//             <button
//               onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}
//               style={{ background: '#fff', border: 'none', color: '#1e3a8a',
//                 padding: '14px 30px', borderRadius: 10, fontSize: 14, fontWeight: 700,
//                 cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
//                 display: 'flex', alignItems: 'center', gap: 8,
//                 boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
//                 transition: 'all 0.25s', whiteSpace: 'nowrap' }}
//               onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
//               onMouseLeave={e => e.currentTarget.style.transform='none'}>
//               Get a Free Consultation <ArrowRight size={15} />
//             </button>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }


import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FlaskConical, Microscope, Settings, HeartPulse, Lightbulb, ShieldCheck, Truck, BookOpen, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: FlaskConical, title: 'Laboratory Equipment Supply',  desc: 'Comprehensive range of analytical and biotech instruments sourced from 50+ globally certified manufacturers.', color: '#1e3a8a', bg: 'rgba(30,58,138,0.07)',  tags: ['Analytical','Biotech','Industrial'] },
  { icon: Microscope,   title: 'Analytical Instruments',      desc: 'Spectrometers, chromatographs, PCR systems and microscopy solutions for precise laboratory analysis.',       color: '#0284c7', bg: 'rgba(2,132,199,0.07)',   tags: ['Spectroscopy','PCR','HPLC'] },
  { icon: Settings,     title: 'Installation & Calibration',  desc: 'NABL-accredited calibration services and expert on-site installation by certified application scientists.',    color: '#0369a1', bg: 'rgba(3,105,161,0.07)',   tags: ['NABL Accredited','On-site','Certified'] },
  { icon: HeartPulse,   title: 'Maintenance & Support',       desc: 'Preventive maintenance contracts (AMC/CMC) and 24/7 breakdown support ensuring zero-downtime operations.',    color: '#1d4ed8', bg: 'rgba(29,78,216,0.07)',   tags: ['AMC / CMC','24/7 Support','Preventive'] },
  { icon: Lightbulb,    title: 'Scientific Consulting',       desc: 'Expert guidance on equipment selection, lab design, workflow optimization and regulatory compliance.',          color: '#0ea5e9', bg: 'rgba(14,165,233,0.07)',  tags: ['Lab Design','Compliance','Workflow'] },
  { icon: ShieldCheck,  title: 'Quality Validation',          desc: 'IQ/OQ/PQ validation services for GMP-regulated pharmaceutical and biotechnology laboratories.',               color: '#2563eb', bg: 'rgba(37,99,235,0.07)',   tags: ['IQ/OQ/PQ','GMP','Pharma'] },
  { icon: Truck,        title: 'Import & Procurement',        desc: 'Hassle-free global procurement and import handling with complete documentation and customs clearance.',        color: '#1e40af', bg: 'rgba(30,64,175,0.07)',   tags: ['Import','Global','Procurement'] },
  { icon: BookOpen,     title: 'Training & Education',        desc: 'Instrument training, application workshops, and skill development programs for laboratory professionals.',      color: '#0c4a6e', bg: 'rgba(12,74,110,0.07)',   tags: ['Workshops','Certification','Upskilling'] },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { icon: Icon, title, desc, color, bg, tags } = service;
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white border border-slate-200 rounded-2xl p-7 relative overflow-hidden cursor-default transition-all duration-300 group"
      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 12px 40px ${color}1a`; e.currentTarget.style.transform = 'translateY(-6px)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
        <Icon size={24} color={color} />
      </div>

      <h3 className="font-display text-lg font-semibold text-slate-900 mb-2.5 leading-snug">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4 font-body">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full font-body tracking-wide"
            style={{ color, background: bg }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-sm font-semibold font-body cursor-pointer" style={{ color }}>
        Learn More <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      {/* Blob */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(14,165,233,0.06) 0%,transparent 70%)' }} />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 border"
              style={{ background: 'rgba(14,165,233,0.08)', borderColor: 'rgba(14,165,233,0.2)' }}>
              <span className="text-[11px] font-bold text-sky-600 font-body tracking-widest uppercase">Our Services</span>
            </div>
            <h2 className="font-display font-bold text-slate-900 leading-tight mb-4" style={{ fontSize: 'clamp(26px,3.5vw,48px)' }}>
              Comprehensive{' '}
              <span className="text-gradient">Lab Solutions</span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed font-body">
              From procurement to post-installation support — we deliver end-to-end laboratory services with unmatched technical expertise and reliability.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => <ServiceCard key={svc.title} service={svc} index={i} />)}
        </div>

        {/* CTA Banner */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl p-8 sm:p-12 flex flex-wrap sm:flex-nowrap items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0369a1)', boxShadow: '0 16px 48px rgba(30,58,138,0.25)' }}>
            <div>
              <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 'clamp(20px,2.5vw,28px)' }}>
                Need a customized lab solution?
              </h3>
              <p className="text-sm text-white/75 font-body">
                Talk to our technical experts and get a solution tailored for your laboratory needs.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-blue-900 bg-white border-none cursor-pointer whitespace-nowrap font-body transition-all"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              Get a Free Consultation <ArrowRight size={15} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}