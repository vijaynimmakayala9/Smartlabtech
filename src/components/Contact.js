import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address',        value: '402, Tech Park, Madhapur\nHyderabad, Telangana 500081', color: '#1e3a8a' },
  { icon: Phone,  label: 'Phone',          value: '+91 40 6789 1234\n+91 98765 00011',                      color: '#0284c7' },
  { icon: Mail,   label: 'Email',          value: 'info@smartlabtech.in\nsales@smartlabtech.in',            color: '#0ea5e9' },
  { icon: Clock,  label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed',          color: '#1d4ed8' },
];

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

export default function Contact({ id }) {
  const [form,      setForm]      = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors,    setErrors]    = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid phone required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputBase = 'w-full bg-slate-50 border rounded-lg text-slate-900 px-4 py-3 text-sm font-body outline-none transition-colors duration-200';
  const inputStyle = (field) => `${inputBase} ${errors[field] ? 'border-red-400' : 'border-slate-200'} focus:border-blue-500`;

  return (
    <section id={id} className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-20">

        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 border"
              style={{ background: 'rgba(14,165,233,0.08)', borderColor: 'rgba(14,165,233,0.2)' }}>
              <span className="text-[11px] font-bold text-sky-600 font-body tracking-widest uppercase">Contact Us</span>
            </div>
            <h2 className="font-display font-bold text-slate-900 leading-tight mb-3.5" style={{ fontSize: 'clamp(26px,3.5vw,48px)' }}>
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-base text-slate-400 font-body leading-relaxed max-w-lg mx-auto">
              Have questions about our products or services? Reach out and our technical team will respond within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Info */}
          <Reveal>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {CONTACT_INFO.map(({ icon: Icon, label, value, color }) => (
                  <div key={label}
                    className="bg-white border border-slate-200 rounded-xl p-5 transition-all duration-300 cursor-default"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 6px 20px ${color}18`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${color}12` }}>
                      <Icon size={19} color={color} />
                    </div>
                    <p className="text-[11px] font-bold font-body tracking-widest uppercase mb-1.5" style={{ color }}>{label}</p>
                    <p className="text-sm text-slate-500 leading-relaxed font-body whitespace-pre-line">{value}</p>
                  </div>
                ))}
              </div>

             {/* Map Section */}
            <Reveal>
              <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 pb-20">
                <div className="rounded-3xl overflow-hidden border border-slate-200 h-[380px] relative shadow-lg">
                  <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-slate-200/50" />
                  <iframe
                    title="SmartLabtech Location"
                    src="https://maps.google.com/maps?q=Balanagar+Hyderabad+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.15}>
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200"
              style={{ boxShadow: '0 4px 32px rgba(30,58,138,0.08)' }}>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="text-center py-10 px-5">
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(14,165,233,0.1)' }}>
                      <CheckCircle2 size={36} color="#0ea5e9" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-blue-900 mb-3">Message Sent!</h3>
                    <p className="text-sm text-slate-400 font-body leading-relaxed mb-6">
                      Thank you, <strong className="text-blue-900">{form.name}</strong>. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); setErrors({}); }}
                      className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white font-body border-none cursor-pointer"
                      style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}>
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-1">Send a Message</h3>
                      <p className="text-xs text-slate-400 font-body">Fill in the form and we'll respond promptly.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {[['name','Full Name','text'],['phone','Phone Number','tel']].map(([key, ph, type]) => (
                        <div key={key}>
                          <input type={type} placeholder={ph} value={form[key]}
                            onChange={e => { setForm({ ...form, [key]: e.target.value }); setErrors({ ...errors, [key]: '' }); }}
                            className={inputStyle(key)}
                            onFocus={e => e.target.style.borderColor = '#2563eb'}
                            onBlur={e => e.target.style.borderColor = errors[key] ? '#ef4444' : '#e2e8f0'} />
                          {errors[key] && <span className="text-[11px] text-red-400 font-body mt-1 block">{errors[key]}</span>}
                        </div>
                      ))}
                    </div>

                    <div>
                      <input type="email" placeholder="Email Address" value={form.email}
                        onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                        className={inputStyle('email')}
                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                        onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : '#e2e8f0'} />
                      {errors.email && <span className="text-[11px] text-red-400 font-body mt-1 block">{errors.email}</span>}
                    </div>

                    <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      className={`${inputBase} border-slate-200 cursor-pointer`}
                      onFocus={e => e.target.style.borderColor = '#2563eb'}
                      onBlur={e => e.target.style.borderColor = '#e2e8f0'}>
                      <option value="">Select Subject</option>
                      {['Product Enquiry','Get a Quote','Service Request','Technical Support','Partnership','Other'].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>

                    <div>
                      <textarea placeholder="Your message..." value={form.message} rows={4}
                        onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                        className={`${inputStyle('message')} resize-y`}
                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                        onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : '#e2e8f0'} />
                      {errors.message && <span className="text-[11px] text-red-400 font-body mt-1 block">{errors.message}</span>}
                    </div>

                    <button type="submit" disabled={loading}
                      className="flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl text-sm font-bold text-white font-body border-none cursor-pointer transition-all duration-300"
                      style={{
                        background: loading ? '#94a3b8' : 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
                        boxShadow: loading ? 'none' : '0 6px 20px rgba(30,58,138,0.25)',
                        cursor: loading ? 'not-allowed' : 'pointer',
                      }}>
                      {loading ? (
                        <>
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}