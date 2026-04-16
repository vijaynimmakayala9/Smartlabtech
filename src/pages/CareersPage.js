
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Search, MapPin, Briefcase, Clock, ChevronRight,
  X, Send, Mail, Phone, CheckCircle2,
  Building2, ArrowRight, Filter, Users, Award, Zap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Google Fonts ──────────────────────────────────────────────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');

    .font-display { font-family: 'Playfair Display', Georgia, serif; }
    .font-body { font-family: 'Outfit', system-ui, sans-serif; }

    /* Gradient text */
    .text-gradient {
      background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Noise texture */
    .noise::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
      background-size: 180px;
      opacity: 0.025;
      pointer-events: none;
      mix-blend-mode: overlay;
    }

    /* Grid pattern */
    .grid-lines {
      background-image:
        linear-gradient(rgba(30,58,138,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(30,58,138,0.03) 1px, transparent 1px);
      background-size: 64px 64px;
    }

    /* Thin scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(30,58,138,0.3); border-radius: 4px; }

    /* Job card hover */
    .job-card {
      transition: transform 0.28s cubic-bezier(0.34,1.2,0.64,1), border-color 0.2s, box-shadow 0.28s;
    }
    .job-card:hover { transform: translateY(-4px); }

    /* Button shine effect */
    .btn-shine {
      position: relative;
      overflow: hidden;
    }
    .btn-shine::after {
      content: '';
      position: absolute;
      top: -50%; left: -60%;
      width: 40%; height: 200%;
      background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
      transition: left 0.55s ease;
    }
    .btn-shine:hover::after { left: 130%; }

    /* Input focus ring */
    .input-field {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      color: #0f172a;
      border-radius: 12px;
      padding: 10px 14px;
      font-family: 'Outfit', sans-serif;
      font-size: 13px;
      outline: none;
      transition: all 0.2s;
      width: 100%;
    }
    .input-field::placeholder { color: #94a3b8; }
    .input-field:focus {
      border-color: #3b82f6;
      background: white;
      box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
    }
    .input-field.error { border-color: #ef4444; }

    /* Parallax hero image */
    .hero-parallax { will-change: transform; }
  `}</style>
);

/* ─── Job Data ──────────────────────────────────────────────────────────── */
const JOBS = [
  {
    id: 1,
    title: 'SERVICE EXECUTIVE',
    dept: 'SERVICE',
    location: 'Hyderabad',
    type: 'SERVICE',
    posted: '4 years ago',
    desc: 'Responsible for installation, servicing, and maintenance of laboratory instruments at client sites. Requires hands-on technical skills and excellent client communication.',
    skills: ['Instrument Servicing', 'Field Support', 'Documentation', 'Client Handling'],
    openings: 2,
  },
  {
    id: 2,
    title: 'SERVICE EXECUTIVE / SR. SERVICE EXECUTIVE',
    dept: 'SERVICE',
    location: 'Bangalore, Chennai',
    type: 'SERVICE',
    posted: '4 years ago',
    desc: 'Installation, commissioning, and preventive maintenance of scientific laboratory instruments. Provide technical training and support to end users.',
    skills: ['Commissioning', 'Preventive Maintenance', 'Training', 'Troubleshooting'],
    openings: 3,
  },
  {
    id: 3,
    title: 'SERVICE EXECUTIVE / SERVICE ENGINEER / SR. SERVICE ENGINEER',
    dept: 'SERVICE',
    location: 'Hyderabad',
    type: 'SERVICE',
    posted: '4 years ago',
    desc: 'Multi-level service role covering installation to senior engineering responsibilities. Ideal for candidates with experience in scientific or medical equipment service.',
    skills: ['Service Engineering', 'AMC Management', 'Calibration', 'NABL Standards'],
    openings: 2,
  },
  {
    id: 4,
    title: 'SALES SUPPORT EXECUTIVE',
    dept: 'SALES SUPPORT',
    location: 'Hyderabad',
    type: 'SALES SUPPORT',
    posted: '4 years ago',
    desc: 'Coordinate between the sales team and clients to ensure smooth order processing, documentation, and timely delivery of laboratory equipment and instruments.',
    skills: ['Order Processing', 'CRM', 'Coordination', 'MS Office'],
    openings: 1,
  },
  {
    id: 5,
    title: 'SALES MANAGER',
    dept: 'SALES MANAGER',
    location: 'Hyderabad',
    type: 'SALES MANAGER',
    posted: '4 years ago',
    desc: 'Lead and manage the regional sales team to achieve targets in the laboratory and scientific instruments market. Build relationships with pharma, research, and academic clients.',
    skills: ['Team Leadership', 'B2B Sales', 'Target Achievement', 'Key Accounts'],
    openings: 1,
  },
  {
    id: 6,
    title: 'SALES EXECUTIVE',
    dept: 'SALES EXECUTIVE',
    location: 'Hyderabad',
    type: 'SALES EXECUTIVE',
    posted: '4 years ago',
    desc: 'Drive sales of laboratory instruments and equipment to research institutions, pharmaceutical companies, hospitals, and universities across the assigned territory.',
    skills: ['Territory Sales', 'Lead Generation', 'Product Demo', 'Negotiation'],
    openings: 2,
  },
];

const JOB_TYPES = ['All', 'SALES EXECUTIVE', 'SALES MANAGER', 'SALES SUPPORT', 'SERVICE'];
const LOCATIONS = ['All', 'Hyderabad', 'Bangalore', 'Chennai'];

/* ─── Colour map for dept badges ─────────────────────────── */
const TYPE_COLOR = {
  'SERVICE': { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', dot: '#0ea5e9' },
  'SALES SUPPORT': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', dot: '#8b5cf6' },
  'SALES MANAGER': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: '#3b82f6' },
  'SALES EXECUTIVE': { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', dot: '#14b8a6' },
};

/* ─── Reveal wrapper ─────────────────────────────────────── */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Apply Modal ────────────────────────────────────────── */
function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const colors = TYPE_COLOR[job.type] || TYPE_COLOR['SERVICE'];

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1300);
  };

  const inputClass = (field) => `
    input-field ${errors[field] ? 'error' : ''}
  `;

  return (
    <div className="flex flex-col h-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
      {/* Modal Header */}
      <div className="relative flex-shrink-0 px-6 py-5 overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-sky-600">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="flex items-start justify-between relative z-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: colors.dot }} />
              <p className="text-[11px] font-bold text-sky-200 tracking-widest uppercase font-body">
                {job.type.replace('_', ' ')} · Apply Now
              </p>
            </div>
            <h3 className="font-display text-xl font-bold text-white leading-snug">{job.title}</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-xs text-white/70">
                <MapPin size={11} /> {job.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/70">
                <Briefcase size={11} /> {job.dept}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all flex-shrink-0"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Modal Body */}
      <div className="flex-1 overflow-y-auto bg-white">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4"
              >
                <CheckCircle2 size={32} className="text-emerald-500" />
              </motion.div>
              <h4 className="font-display text-xl font-bold text-slate-900 mb-2">Application Submitted!</h4>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Thank you, <strong className="text-blue-600">{form.name}</strong>. Our HR team will review your application and reach out within 3–5 business days.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-sky-500 hover:shadow-lg transition-all"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3.5 p-6"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-[10px] text-red-400 mt-0.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Phone *</label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-[10px] text-red-400 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Current City</label>
                <input
                  type="text"
                  placeholder="City you're based in"
                  value={form.city}
                  onChange={handleChange('city')}
                  className={inputClass('city')}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">Cover Note (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your experience and why you're a great fit..."
                  value={form.message}
                  onChange={handleChange('message')}
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 to-sky-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                  />
                ) : (
                  <>
                    <Send size={14} /> Submit Application
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Job Card ───────────────────────────────────────────── */
function JobCard({ job, index, onApply }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const colors = TYPE_COLOR[job.type] || TYPE_COLOR['SERVICE'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="job-card bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200"
    >
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-sky-500 to-blue-600" />

      <div className="p-5 sm:p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            {/* Dept badge */}
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border font-body mb-2.5 ${colors.bg} ${colors.text} ${colors.border}`}>
              <Briefcase size={9} />
              {job.dept}
            </span>
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
              {job.title}
            </h3>
          </div>
          {/* Openings badge */}
          <div className="flex-shrink-0 text-center bg-blue-50 border border-blue-100 rounded-xl px-3 py-2">
            <p className="font-display text-xl font-bold text-blue-700 leading-none">{job.openings}</p>
            <p className="text-[9px] text-blue-400 font-semibold uppercase tracking-wider mt-0.5">
              Opening{job.openings > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin size={12} className="text-blue-400" /> {job.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock size={12} className="text-slate-300" /> Posted {job.posted}
          </span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.map(s => (
            <span key={s} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg">
              {s}
            </span>
          ))}
        </div>

        {/* Description toggle */}
        <AnimatePresence>
          {expanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="text-sm text-slate-500 leading-relaxed mb-4 overflow-hidden"
            >
              {job.desc}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-semibold text-blue-600 flex items-center gap-1 hover:text-blue-800 transition-colors"
          >
            {expanded ? 'Show less' : 'View details'}
            <motion.span animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronRight size={13} />
            </motion.span>
          </button>

          <button
            onClick={() => onApply(job)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-sky-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply Now <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function Careers() {
  const [keyword, setKeyword] = useState('');
  const [typeFilter, setType] = useState('All');
  const [locFilter, setLoc] = useState('All');
  const [applyJob, setApplyJob] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const filtered = JOBS.filter(j => {
    const kw = keyword.toLowerCase();
    const matchKw = !kw || j.title.toLowerCase().includes(kw) || j.dept.toLowerCase().includes(kw) || j.location.toLowerCase().includes(kw);
    const matchType = typeFilter === 'All' || j.type === typeFilter;
    const matchLoc = locFilter === 'All' || j.location.includes(locFilter);
    return matchKw && matchType && matchLoc;
  });

  const clearFilters = () => {
    setKeyword('');
    setType('All');
    setLoc('All');
  };
  const hasFilters = keyword || typeFilter !== 'All' || locFilter !== 'All';

  return (
    <>
      <FontLink />
      <Navbar />

      {/* ════════════════════════════════════════════════════════
          HERO — full-bleed background image with parallax (Blue Theme)
      ════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        {/* Parallax background image */}
        <motion.div className="absolute inset-0 hero-parallax" style={{ y: imgY }}>
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&q=80"
            alt="Laboratory instruments"
            className="w-full h-full object-cover object-center"
            style={{ transform: 'scale(1.12)' }}
          />
          {/* Blue theme overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,35,86,0.88) 0%, rgba(30,58,138,0.72) 50%, rgba(14,165,233,0.82) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f2356 0%, transparent 55%)' }} />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-lines opacity-60" />

        {/* Blue radial accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(14,165,233,0.12) 0%, transparent 60%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300">
              SmartLabTech · Careers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-bold text-white leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(40px, 6.5vw, 88px)', letterSpacing: '-0.02em' }}
          >
            Build Your Career<br />
            <em className="not-italic text-gradient">With Purpose.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="font-body text-base sm:text-lg leading-relaxed mb-10 max-w-lg text-white/70"
          >
            Join SmartLabTech — helping world-class scientific instruments reach research labs, pharma companies, and universities across India.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#listings"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body text-sm font-bold bg-white text-blue-900 hover:shadow-lg transition-all no-underline"
            >
              View Open Roles <ArrowRight size={15} />
            </a>
            <a
              href="mailto:careers@smartlabtech.in"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all no-underline"
            >
              <Mail size={14} /> Send Your CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          LISTINGS SECTION (Blue Theme)
      ════════════════════════════════════════════════════════ */}
      <section id="listings" className="bg-slate-50 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">
          {/* Section header */}
          <Reveal className="mb-10">
            <div className="flex items-end justify-between flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px bg-blue-600" />
                  <span className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600">
                    Job Archives
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                  Open <span className="text-gradient">Positions</span>
                </h2>
              </div>
              <p className="font-body text-sm text-slate-500">
                {filtered.length} position{filtered.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* ── SIDEBAR FILTERS ── */}
            <Reveal delay={0.1} className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Filter size={13} className="text-blue-700" />
                    <span className="font-body text-sm font-semibold text-slate-800">Filters</span>
                  </div>
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1 font-body text-[11px] font-semibold text-red-400 hover:text-red-600 transition-colors"
                    >
                      <X size={10} /> Clear all
                    </button>
                  )}
                </div>

                {/* Keyword */}
                <div className="mb-5">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-widest mb-2 text-slate-400">Keywords</p>
                  <div className="relative">
                    <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Title, skill…"
                      value={keyword}
                      onChange={e => setKeyword(e.target.value)}
                      className="input-field pl-8"
                    />
                  </div>
                </div>

                {/* Job Type */}
                <div className="mb-5">
                  <p className="font-body text-[10px] font-semibold uppercase tracking-widest mb-2.5 text-slate-400">Job Type</p>
                  <div className="flex flex-col gap-1">
                    {JOB_TYPES.map(t => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`w-full text-left px-3 py-2 rounded-xl font-body text-xs font-semibold transition-all ${
                          typeFilter === t
                            ? 'text-white bg-gradient-to-r from-blue-700 to-sky-500'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-blue-700'
                        }`}
                      >
                        {t === 'All' ? 'All Types' : t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <p className="font-body text-[10px] font-semibold uppercase tracking-widest mb-2.5 text-slate-400">Location</p>
                  <div className="flex flex-col gap-1">
                    {LOCATIONS.map(l => (
                      <button
                        key={l}
                        onClick={() => setLoc(l)}
                        className={`w-full text-left px-3 py-2 rounded-xl font-body text-xs font-semibold transition-all flex items-center gap-2 ${
                          locFilter === l
                            ? 'text-white bg-gradient-to-r from-blue-700 to-sky-500'
                            : 'text-slate-500 hover:bg-slate-50 hover:text-blue-700'
                        }`}
                      >
                        {l !== 'All' && <MapPin size={10} />}
                        {l === 'All' ? 'All Locations' : l}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ── JOB LIST ── */}
            <div className="flex-1 min-w-0">
              {/* Active chips */}
              {hasFilters && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {keyword && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      "{keyword}"
                      <button onClick={() => setKeyword('')} className="text-blue-400 hover:text-blue-700">
                        <X size={11} />
                      </button>
                    </span>
                  )}
                  {typeFilter !== 'All' && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                      {typeFilter}
                      <button onClick={() => setType('All')} className="text-sky-400 hover:text-sky-700">
                        <X size={11} />
                      </button>
                    </span>
                  )}
                  {locFilter !== 'All' && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      <MapPin size={10} /> {locFilter}
                      <button onClick={() => setLoc('All')} className="text-slate-400 hover:text-slate-700">
                        <X size={11} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-slate-100">
                  <p className="text-4xl mb-4">🔍</p>
                  <p className="font-display text-xl font-bold text-slate-700 mb-2">No positions found</p>
                  <p className="text-sm text-slate-400 mb-5">Try adjusting your filters or keywords</p>
                  <button
                    onClick={clearFilters}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-sky-500 hover:shadow-lg transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {filtered.map((job, i) => (
                    <JobCard key={job.id} job={job} index={i} onApply={setApplyJob} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIMPLE CTA BANNER (Blue Theme) ── */}
      <Reveal>
        <div className="py-16 px-4 bg-slate-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">
            <div className="rounded-2xl p-8 sm:p-12 flex flex-wrap items-center justify-between gap-6 bg-gradient-to-r from-blue-900 via-blue-800 to-sky-600 shadow-xl">
              <div>
                <p className="text-[11px] font-bold text-sky-200 tracking-widest uppercase mb-2">Can't find your role?</p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">Send us your Resume</h3>
                <p className="text-sm text-white/70 max-w-sm">
                  We're always looking for talented people. Drop your CV and we'll keep it on file for future openings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:careers@smartlabtech.in"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-blue-900 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline"
                >
                  <Mail size={15} /> Email Your CV
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all no-underline"
                >
                  <Phone size={15} /> Call HR Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />

      {/* ── APPLY MODAL ── */}
      <AnimatePresence>
        {applyJob && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplyJob(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[2000]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={e => e.stopPropagation()}
              className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[2001]"
            >
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}