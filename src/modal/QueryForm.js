// QueryForm.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, MessageCircleQuestion, User, Phone, Mail, Building2 } from 'lucide-react';
import { CATEGORIES } from '../data/Categories';

function Input({ icon: Icon, error, ...props }) {
  const [focused, setFocused] = useState(false);
  
  const baseClasses = "w-full bg-slate-50 border-2 rounded-xl py-[11px] px-[14px] text-sm text-slate-800 outline-none font-sans transition-all duration-200";
  const focusClasses = "focus:border-sky-600 focus:shadow-[0_0_0_3px_rgba(2,132,199,0.1)] focus:bg-white";
  const errorClasses = error ? "border-red-500" : "border-slate-200";
  
  return (
    <div className="relative">
      {Icon && (
        <Icon size={14} className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused ? 'text-sky-600' : 'text-slate-400'}`} />
      )}
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          as={undefined}
          onFocus={e => { setFocused(true); }}
          onBlur={e => { setFocused(false); }}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-[38px]' : 'pl-[14px]'} resize-vertical`}
        />
      ) : (
        <input
          {...props}
          onFocus={e => { setFocused(true); }}
          onBlur={e => { setFocused(false); }}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-[38px]' : 'pl-[14px]'}`}
        />
      )}
      {error && <p className="text-[11px] text-red-500 mt-1 font-sans">{error}</p>}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessScreen({ name, onReset, msg }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
        className="w-[72px] h-[72px] rounded-full bg-sky-100/10 flex items-center justify-center mb-5 shadow-[0_0_0_12px_rgba(14,165,233,0.06)]"
      >
        <CheckCircle2 size={34} color="#0ea5e9" />
      </motion.div>
      <h3 className="font-serif text-2xl font-bold text-blue-900 mb-2.5">
        Successfully Sent!
      </h3>
      <p className="text-sm text-slate-600 font-sans leading-relaxed mb-1.5">
        Thank you, <strong className="text-blue-900">{name}</strong>.
      </p>
      <p className="text-[13px] text-slate-400 font-sans leading-relaxed mb-7">{msg}</p>
      <button
        onClick={onReset}
        className="bg-gradient-to-r from-blue-900 to-sky-600 border-none text-white py-3 px-7 rounded-xl text-sm font-semibold cursor-pointer font-sans shadow-[0_6px_20px_rgba(30,58,138,0.25)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.3)] transition-shadow"
      >
        Submit Another
      </button>
    </motion.div>
  );
}

export function QueryForm({ onClose }) {
  const empty = { name: '', phone: '', email: '', company: '', message: '' };
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = k => e => { setForm(f => ({ ...f, [k]: e.target.value })); setErrors(er => ({ ...er, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Please enter your query';
    return e;
  };

  const submit = ev => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-sky-600 p-[22px_28px] flex-shrink-0 relative overflow-hidden rounded-t-2xl">
        <div className="absolute -top-10 -right-10 w-[120px] h-[120px] rounded-full bg-white/5" />
        <div className="absolute -bottom-5 left-[60px] w-20 h-20 rounded-full bg-white/5" />
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <MessageCircleQuestion size={20} color="#fff" />
            </div>
            <div>
              <p className="text-white font-bold text-base font-serif m-0">Contact Us</p>
              <p className="text-white/65 text-xs font-sans mt-0.5">We respond within 24 hours</p>
            </div>
          </div>
          <button onClick={onClose} className="w-[34px] h-[34px] rounded-xl bg-white/15 border border-white/20 cursor-pointer flex items-center justify-center text-white hover:bg-white/25 transition-all">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-white rounded-b-2xl">
        <AnimatePresence mode="wait">
          {done ? (
            <SuccessScreen key="done" name={form.name} onReset={() => { setDone(false); setForm(empty); }} msg="Our technical team will contact you within 24 hours." />
          ) : (
            <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onSubmit={submit} noValidate className="flex flex-col gap-4 p-[28px_28px_24px]">
              <Field label="Full Name *">
                <Input icon={User} placeholder="Your full name" value={form.name} onChange={set('name')} error={errors.name} />
              </Field>
              <div className="grid grid-cols-2 gap-3.5">
                <Field label="Phone *">
                  <Input icon={Phone} type="tel" placeholder="10-digit number" value={form.phone} onChange={set('phone')} error={errors.phone} />
                </Field>
                <Field label="Company">
                  <Input icon={Building2} placeholder="Optional" value={form.company} onChange={set('company')} />
                </Field>
              </div>
              <Field label="Email Address *">
                <Input icon={Mail} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} error={errors.email} />
              </Field>
              <Field label="Your Query *">
                <Input as="textarea" rows={4} placeholder="Describe your query in detail..." value={form.message} onChange={set('message')} error={errors.message} />
              </Field>
              <button
                type="submit" disabled={loading}
                className={`border-none text-white py-3.5 px-7 rounded-xl text-sm font-bold cursor-pointer font-sans flex items-center justify-center gap-2 mt-1 transition-all ${loading ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-blue-900 to-sky-600 shadow-[0_6px_20px_rgba(30,58,138,0.25)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.3)]'}`}
              >
                {loading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-[18px] h-[18px] rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <><Send size={14} /> Submit Query</>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}