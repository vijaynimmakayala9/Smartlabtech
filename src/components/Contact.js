// import { useRef, useState } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

// const CONTACT_INFO = [
//   { icon: MapPin, label: 'Address', value: '402, Tech Park, Madhapur\nHyderabad, Telangana 500081', color: '#1e3a8a' },
//   { icon: Phone, label: 'Phone', value: '+91 40 6789 1234\n+91 98765 00011', color: '#0284c7' },
//   { icon: Mail, label: 'Email', value: 'info@smartlabtech.in\nsales@smartlabtech.in', color: '#0ea5e9' },
//   { icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed', color: '#1d4ed8' },
// ];

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

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = 'Name is required';
//     if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
//     if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g,''))) e.phone = 'Valid phone required';
//     if (!form.message.trim()) e.message = 'Message is required';
//     return e;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
//   };

//   const inputStyle = (field) => ({
//     width: '100%', background: '#f8faff',
//     border: `1.5px solid ${errors[field] ? '#ef4444' : '#e2e8f0'}`,
//     borderRadius: 8, color: '#0f172a', padding: '12px 16px', fontSize: 14,
//     fontFamily: "'DM Sans',sans-serif", outline: 'none', transition: 'border-color 0.2s',
//   });

//   return (
//     <section id="contact"
//       style={{ background: '#f8faff', padding: 'clamp(20px,8vw,20px) 0' }}>
//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

//         {/* Header */}
//         <Reveal>
//           <div style={{ textAlign: 'center', marginBottom: 64 }}>
//             <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
//               borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
//               <span style={{ fontSize: 11, fontWeight: 700, color: '#0284c7',
//                 fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                 Contact Us
//               </span>
//             </div>
//             <h2 style={{ fontFamily: "'Playfair Display',serif",
//               fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 700,
//               color: '#0f172a', lineHeight: 1.2, marginBottom: 14 }}>
//               Get in{' '}
//               <span className="text-gradient">Touch</span>
//             </h2>
//             <p style={{ fontSize: 16, color: '#64748b', fontFamily: "'DM Sans',sans-serif",
//               lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
//               Have questions about our products or services? Reach out and our technical team will respond within 24 hours.
//             </p>
//           </div>
//         </Reveal>

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
//           gap: 48 }}>

//           {/* Left: Info */}
//           <Reveal>
//             <div>
//               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
//                 {CONTACT_INFO.map(({ icon: Icon, label, value, color }) => (
//                   <div key={label}
//                     style={{ background: '#fff', border: '1px solid #e2e8f0',
//                       borderRadius: 12, padding: '20px 18px', transition: 'all 0.3s' }}
//                     onMouseEnter={e => { e.currentTarget.style.borderColor=color; e.currentTarget.style.boxShadow=`0 6px 20px ${color}18`; }}
//                     onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.boxShadow='none'; }}>
//                     <div style={{ width: 40, height: 40,
//                       background: `${color}12`, borderRadius: 10,
//                       display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
//                       <Icon size={19} color={color} />
//                     </div>
//                     <div style={{ fontSize: 11, fontWeight: 700, color: color,
//                       fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.08em',
//                       textTransform: 'uppercase', marginBottom: 5 }}>{label}</div>
//                     <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6,
//                       fontFamily: "'DM Sans',sans-serif", whiteSpace: 'pre-line' }}>{value}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Map placeholder */}
//               <div style={{ borderRadius: 16, overflow: 'hidden', height: 260, position: 'relative',
//                 background: 'linear-gradient(135deg,#f0f7ff,#e2e8f0)',
//                 border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=80"
//                   alt="Location"
//                   style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
//                 <div style={{ position: 'absolute', inset: 0, display: 'flex',
//                   flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
//                   <div style={{ width: 52, height: 52, background: '#1e3a8a', borderRadius: '50%',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     boxShadow: '0 0 0 8px rgba(30,58,138,0.15)' }}>
//                     <MapPin size={22} color="#fff" />
//                   </div>
//                   <div style={{ background: '#fff', borderRadius: 8, padding: '8px 16px',
//                     fontSize: 13, fontWeight: 600, color: '#1e3a8a',
//                     fontFamily: "'DM Sans',sans-serif", boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
//                     SmartLabTech HQ — Hyderabad
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* Right: Form */}
//           <Reveal delay={0.15}>
//             <div style={{ background: '#fff', borderRadius: 20, padding: 'clamp(24px,3vw,40px)',
//               boxShadow: '0 4px 32px rgba(30,58,138,0.08)', border: '1px solid #e2e8f0' }}>

//               <AnimatePresence mode="wait">
//                 {submitted ? (
//                   <motion.div key="success"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0 }}
//                     style={{ textAlign: 'center', padding: '40px 20px' }}>
//                     <motion.div
//                       initial={{ scale: 0 }} animate={{ scale: 1 }}
//                       transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
//                       style={{ width: 72, height: 72, background: 'rgba(14,165,233,0.1)',
//                         borderRadius: '50%', display: 'flex', alignItems: 'center',
//                         justifyContent: 'center', margin: '0 auto 20px' }}>
//                       <CheckCircle2 size={36} color="#0ea5e9" />
//                     </motion.div>
//                     <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24,
//                       fontWeight: 700, color: '#1e3a8a', marginBottom: 12 }}>
//                       Message Sent!
//                     </h3>
//                     <p style={{ fontSize: 14, color: '#64748b', fontFamily: "'DM Sans',sans-serif",
//                       lineHeight: 1.7, marginBottom: 24 }}>
//                       Thank you, <strong style={{ color: '#1e3a8a' }}>{form.name}</strong>. Our team will get back to you within 24 hours.
//                     </p>
//                     <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',subject:'',message:'' }); setErrors({}); }}
//                       style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
//                         border: 'none', color: '#fff', padding: '11px 24px', borderRadius: 8,
//                         fontSize: 14, fontWeight: 600, cursor: 'pointer',
//                         fontFamily: "'DM Sans',sans-serif" }}>
//                       Send Another Message
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <motion.form key="form" onSubmit={handleSubmit} noValidate
//                     style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
//                     <div>
//                       <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22,
//                         fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
//                         Send a Message
//                       </h3>
//                       <p style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif" }}>
//                         Fill in the form and we'll respond promptly.
//                       </p>
//                     </div>

//                     <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
//                       {[['name','Full Name','text'],['phone','Phone Number','tel']].map(([key,ph,type]) => (
//                         <div key={key}>
//                           <input type={type} placeholder={ph} value={form[key]}
//                             onChange={e => { setForm({...form,[key]:e.target.value}); setErrors({...errors,[key]:''}); }}
//                             style={inputStyle(key)}
//                             onFocus={e => e.target.style.borderColor='#2563eb'}
//                             onBlur={e => e.target.style.borderColor=errors[key]?'#ef4444':'#e2e8f0'} />
//                           {errors[key] && <span style={{ fontSize:11, color:'#ef4444', fontFamily:"'DM Sans',sans-serif", marginTop:3, display:'block' }}>{errors[key]}</span>}
//                         </div>
//                       ))}
//                     </div>

//                     <div>
//                       <input type="email" placeholder="Email Address" value={form.email}
//                         onChange={e => { setForm({...form,email:e.target.value}); setErrors({...errors,email:''}); }}
//                         style={inputStyle('email')}
//                         onFocus={e => e.target.style.borderColor='#2563eb'}
//                         onBlur={e => e.target.style.borderColor=errors.email?'#ef4444':'#e2e8f0'} />
//                       {errors.email && <span style={{ fontSize:11, color:'#ef4444', fontFamily:"'DM Sans',sans-serif", marginTop:3, display:'block' }}>{errors.email}</span>}
//                     </div>

//                     <div>
//                       <select value={form.subject}
//                         onChange={e => setForm({...form,subject:e.target.value})}
//                         style={{ ...inputStyle('subject'), cursor:'pointer' }}
//                         onFocus={e => e.target.style.borderColor='#2563eb'}
//                         onBlur={e => e.target.style.borderColor='#e2e8f0'}>
//                         <option value="">Select Subject</option>
//                         {['Product Enquiry','Get a Quote','Service Request','Technical Support','Partnership','Other'].map(o => (
//                           <option key={o} value={o}>{o}</option>
//                         ))}
//                       </select>
//                     </div>

//                     <div>
//                       <textarea placeholder="Your message..." value={form.message} rows={4}
//                         onChange={e => { setForm({...form,message:e.target.value}); setErrors({...errors,message:''}); }}
//                         style={{ ...inputStyle('message'), resize:'vertical' }}
//                         onFocus={e => e.target.style.borderColor='#2563eb'}
//                         onBlur={e => e.target.style.borderColor=errors.message?'#ef4444':'#e2e8f0'} />
//                       {errors.message && <span style={{ fontSize:11, color:'#ef4444', fontFamily:"'DM Sans',sans-serif", marginTop:3, display:'block' }}>{errors.message}</span>}
//                     </div>

//                     <button type="submit" disabled={loading}
//                       style={{ background: loading ? '#94a3b8' : 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
//                         border: 'none', color: '#fff', padding: '14px 28px', borderRadius: 10,
//                         fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
//                         fontFamily: "'DM Sans',sans-serif",
//                         display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
//                         boxShadow: loading ? 'none' : '0 6px 20px rgba(30,58,138,0.25)',
//                         transition: 'all 0.3s' }}>
//                       {loading ? (
//                         <>
//                           <motion.div animate={{ rotate: 360 }} transition={{ duration:1, repeat:Infinity, ease:'linear' }}
//                             style={{ width:18, height:18, border:'2.5px solid rgba(255,255,255,0.3)',
//                               borderTopColor:'#fff', borderRadius:'50%' }} />
//                           Sending...
//                         </>
//                       ) : (
//                         <>Send Message <Send size={15} /></>
//                       )}
//                     </button>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }


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

export default function Contact() {
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
    <section id="contact" className="bg-slate-50 py-16 sm:py-24">
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

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden relative border border-slate-200 flex items-center justify-center" style={{ height: 260, background: 'linear-gradient(135deg,#f0f7ff,#e2e8f0)' }}>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=80"
                  alt="Location" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center"
                    style={{ boxShadow: '0 0 0 8px rgba(30,58,138,0.15)' }}>
                    <MapPin size={22} color="#fff" />
                  </div>
                  <div className="bg-white rounded-lg px-4 py-2 text-sm font-semibold text-blue-900 font-body"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    SmartLabTech HQ — Hyderabad
                  </div>
                </div>
              </div>
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