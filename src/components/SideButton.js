import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Send, CheckCircle2, MessageCircleQuestion, FileText,
  User, Phone, Mail, Building2, FlaskConical, ChevronDown, ArrowRight
} from 'lucide-react';
import { CATEGORIES } from './Navbar';

export const getAllProductNames = () => {
  const allProducts = [];
  Object.keys(CATEGORIES).forEach(category => {
    CATEGORIES[category].forEach(product => {
      allProducts.push(product.name);
    });
  });
  return allProducts;
};


const PRODUCT_OPTIONS = getAllProductNames();


const GRAD = 'linear-gradient(135deg, #1e3a8a 0%, #0284c7 60%, #0ea5e9 100%)';
const GRAD_DARK = 'linear-gradient(135deg, #0f2356 0%, #1e3a8a 100%)';

/* ── INPUT BASE STYLE ── */
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
      ) : props.as === 'select' ? (
        <select
          {...props}
          as={undefined}
          onFocus={e => { setFocused(true); }}
          onBlur={e => { setFocused(false); }}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-[38px]' : 'pl-[14px]'} pr-8 appearance-none cursor-pointer`}
        />
      ) : (
        <input
          {...props}
          onFocus={e => { setFocused(true); }}
          onBlur={e => { setFocused(false); }}
          className={`${baseClasses} ${focusClasses} ${errorClasses} ${Icon ? 'pl-[38px]' : 'pl-[14px]'}`}
        />
      )}
      {props.as === 'select' && (
        <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
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

/* ── CONTACT US FORM ── */
function QueryForm({ onClose }) {
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

/* ── GET QUOTE FORM ── */
function QuoteForm({ onClose }) {
  const empty = { name: '', phone: '', email: '', company: '', product: '', qty: '', city: '', usage: '' };
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
    if (!form.product) e.product = 'Please select a product';
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
      <div className="bg-gradient-to-r from-[#0f2356] to-blue-900 p-[22px_28px] flex-shrink-0 relative overflow-hidden rounded-t-2xl">
        <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-sky-500/15" />
        <div className="absolute -bottom-4 left-20 w-[60px] h-[60px] rounded-full bg-sky-500/10" />
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-sky-500/20 backdrop-blur-sm flex items-center justify-center border border-sky-500/30">
              <FileText size={20} color="#38bdf8" />
            </div>
            <div>
              <p className="text-white font-bold text-base font-serif m-0">Get a Quote</p>
              <p className="text-white/55 text-xs font-sans mt-0.5">Quote within 2 business hours</p>
            </div>
          </div>
          <button onClick={onClose} className="w-[34px] h-[34px] rounded-xl bg-white/10 border border-white/15 cursor-pointer flex items-center justify-center text-white hover:bg-white/20 transition-all">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-white rounded-b-2xl">
        <AnimatePresence mode="wait">
          {done ? (
            <SuccessScreen key="done" name={form.name} onReset={() => { setDone(false); setForm(empty); }} msg="Our sales team will send a detailed quote within 2 business hours." />
          ) : (
            <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onSubmit={submit} noValidate className="flex flex-col gap-4 p-[28px_28px_24px]">
              <div className="grid grid-cols-2 gap-3.5">
                <Field label="Full Name *">
                  <Input icon={User} placeholder="Your name" value={form.name} onChange={set('name')} error={errors.name} />
                </Field>
                <Field label="Phone *">
                  <Input icon={Phone} type="tel" placeholder="10-digit" value={form.phone} onChange={set('phone')} error={errors.phone} />
                </Field>
              </div>
              <Field label="Email Address *">
                <Input icon={Mail} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} error={errors.email} />
              </Field>
              <div className="grid grid-cols-2 gap-3.5">
                <Field label="Company / Institute">
                  <Input icon={Building2} placeholder="Optional" value={form.company} onChange={set('company')} />
                </Field>
                <Field label="City">
                  <Input placeholder="Your city" value={form.city} onChange={set('city')} />
                </Field>
              </div>
              <Field label="Product / Instrument *">
                <Input as="select" icon={FlaskConical} value={form.product} onChange={set('product')} error={errors.product}>
                  <option value="">Select a product category</option>
                  {PRODUCT_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                </Input>
              </Field>
              <div className="grid grid-cols-2 gap-3.5">
                <Field label="Quantity">
                  <Input type="number" min="1" placeholder="e.g. 2" value={form.qty} onChange={set('qty')} />
                </Field>
                <Field label="Usage / Application">
                  <Input placeholder="Research / QC / Production" value={form.usage} onChange={set('usage')} />
                </Field>
              </div>
              <button
                type="submit" disabled={loading}
                className={`border-none text-white py-3.5 px-7 rounded-xl text-sm font-bold cursor-pointer font-sans flex items-center justify-center gap-2 mt-1 transition-all ${loading ? 'bg-slate-400 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-blue-900 to-sky-600 shadow-[0_6px_20px_rgba(30,58,138,0.25)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.3)]'}`}
              >
                {loading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-[18px] h-[18px] rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <><FileText size={14} /> Request Quote</>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── CENTERED MODAL WRAPPER ── */
function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0f2356]/55 backdrop-blur-sm z-[2000]"
          />

          {/* Modal panel – centered */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={e => e.stopPropagation()}
            className="fixed top-[10%] bottom-[10%] left-[30%] right-[30%] left-1/2 -translate-x-1/2 w-[min(560px,95vw)] max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col z-[2001] shadow-[0_40px_100px_rgba(15,35,86,0.3),0_8px_32px_rgba(15,35,86,0.15)] border border-blue-900/10"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-900 to-sky-500 z-10" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── MAIN EXPORT ── */
export default function SideButtons() {
  const [open, setOpen] = useState(null); // null | 'query' | 'quote'
  const [hovered, setHovered] = useState(false);
  const close = () => setOpen(null);

  return (
    <>
      {/* ── Side Trigger Widget ── */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[1500] flex items-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Expandable panel */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-2.5 mr-2 pointer-events-none"
          style={{ pointerEvents: hovered ? 'auto' : 'none' }}
        >
          {/* Contact Us button */}
          <motion.button
            whileHover={{ x: -4, boxShadow: '0 12px 32px rgba(30,58,138,0.22)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen('query')}
            className="flex items-center justify-between gap-2.5 py-3.5 px-[18px] bg-white border border-blue-900/15 rounded-xl cursor-pointer min-w-[180px] shadow-[0_6px_24px_rgba(30,58,138,0.12)] font-sans hover:shadow-[0_8px_28px_rgba(30,58,138,0.18)] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center">
                <Phone size={15} color="#0284c7" />
              </div>
              <span className="text-[13px] font-bold text-slate-800">Contact Us</span>
            </div>
            <ArrowRight size={14} color="#94a3b8" />
          </motion.button>

          {/* Get Quote button */}
          <motion.button
            whileHover={{ x: -4, boxShadow: '0 12px 32px rgba(30,58,138,0.22)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen('quote')}
            className="flex items-center justify-between gap-2.5 py-3.5 px-[18px] bg-white border border-blue-900/15 rounded-xl cursor-pointer min-w-[180px] shadow-[0_6px_24px_rgba(30,58,138,0.12)] font-sans hover:shadow-[0_8px_28px_rgba(30,58,138,0.18)] transition-all"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-900/10 flex items-center justify-center">
                <FileText size={15} color="#1e3a8a" />
              </div>
              <span className="text-[13px] font-bold text-slate-800">Get Quote</span>
            </div>
            <ArrowRight size={14} color="#94a3b8" />
          </motion.button>
        </motion.div>

        {/* Vertical "ENQUIRY" tab */}
        <motion.div
          animate={{ boxShadow: hovered ? '-6px 0 24px rgba(30,58,138,0.35)' : '-4px 0 16px rgba(30,58,138,0.2)' }}
          className="bg-gradient-to-r from-blue-900 to-sky-600 text-white rounded-l-xl py-5 px-2.5 writing-vertical rotate-180 text-xs font-extrabold tracking-[0.18em] font-sans cursor-default select-none relative overflow-hidden"
        >
          {/* Shimmer on hover */}
          <motion.div
            animate={{ x: hovered ? '200%' : '-200%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none"
          />
          ENQUIRY
        </motion.div>
      </div>

      {/* ── Centered Modals ── */}
      <Modal open={open === 'query'} onClose={close}>
        <QueryForm onClose={close} />
      </Modal>

      <Modal open={open === 'quote'} onClose={close}>
        <QuoteForm onClose={close} />
      </Modal>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');
        .writing-vertical {
          writing-mode: vertical-rl;
        }
        * { box-sizing: border-box; }
      `}</style>
    </>
  );
}