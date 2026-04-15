import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Send, CheckCircle2, MessageCircleQuestion, FileText,
  User, Phone, Mail, Building2, FlaskConical, ChevronDown
} from 'lucide-react';

/* ─── PRODUCT CATEGORIES (pulled from your Navbar data) ──────────────────── */
const PRODUCT_OPTIONS = [
  'Analytical Balances (Sartorius)',
  'Laboratory Balances (Sartorius)',
  'Industrial Platform Scales',
  'Climate & Humidity Chambers (Memmert)',
  'Drying & Heating Ovens (Memmert)',
  'Incubators (Memmert)',
  'Water Baths (Memmert)',
  'ULT Freezers (Arctiko)',
  'Gas Chromatography (Scion)',
  'Liquid Chromatography (Waters)',
  'Viscometers (Brookfield)',
  'Rheometers (Brookfield)',
  'Texture Analyzers (Brookfield)',
  'Biological Safety Cabinets (ESCO)',
  'Laminar Flow Chambers (ESCO)',
  'Fume Hoods (ESCO)',
  'Glove Boxes (Plas Labs)',
  'Microscopes',
  'Autoclaves',
  'Centrifuges',
  'pH Meters',
  'Water Purification Systems',
  'Other',
];

/* ─── SHARED STYLES ──────────────────────────────────────────────────────── */
const inputCls =
  'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 outline-none transition-all duration-200 font-body focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 placeholder-slate-400';

const errCls = 'text-[11px] text-red-500 mt-1 font-body';

const GRAD = 'linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)';

/* ─── FIELD COMPONENT ────────────────────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-body">{label}</label>
      {children}
      {error && <p className={errCls}>{error}</p>}
    </div>
  );
}

/* ─── SUCCESS SCREEN ─────────────────────────────────────────────────────── */
function SuccessScreen({ name, onReset, msg }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-10 px-6 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, delay: 0.1 }}
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ background: 'rgba(14,165,233,0.12)' }}
      >
        <CheckCircle2 size={32} color="#0ea5e9" />
      </motion.div>
      <h3 className="font-display text-xl font-bold text-blue-900 mb-2">Submitted!</h3>
      <p className="text-sm text-slate-500 font-body leading-relaxed mb-1">
        Thank you, <strong className="text-blue-800">{name}</strong>.
      </p>
      <p className="text-sm text-slate-400 font-body mb-6">{msg}</p>
      <button
        onClick={onReset}
        className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white font-body border-none cursor-pointer transition-all hover:opacity-90"
        style={{ background: GRAD }}
      >
        Submit Another
      </button>
    </motion.div>
  );
}

/* ─── ANY QUERIES FORM ───────────────────────────────────────────────────── */
function QueryForm({ onClose }) {
  const empty = { name: '', phone: '', email: '', company: '', message: '' };
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
                               e.phone   = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email   = 'Valid email required';
    if (!form.message.trim()) e.message = 'Please enter your query';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0"
        style={{ background: GRAD }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
            <MessageCircleQuestion size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm font-body">Any Queries?</p>
            <p className="text-white/65 text-xs font-body">We respond within 24 hours</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 transition-colors border-none cursor-pointer text-white"
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {done ? (
            <SuccessScreen
              key="done"
              name={form.name}
              onReset={() => { setDone(false); setForm(empty); }}
              msg="Our technical team will contact you within 24 hours."
            />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={submit}
              noValidate
              className="flex flex-col gap-4 p-5"
            >
              <Field label="Full Name *" error={errors.name}>
                <div className="relative">
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    placeholder="Your full name"
                    value={form.name}
                    onChange={set('name')}
                    className={`${inputCls} pl-9`}
                  />
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Phone *" error={errors.phone}>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={set('phone')}
                      className={`${inputCls} pl-9`}
                    />
                  </div>
                </Field>

                <Field label="Company" error={errors.company}>
                  <div className="relative">
                    <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      placeholder="Optional"
                      value={form.company}
                      onChange={set('company')}
                      className={`${inputCls} pl-9`}
                    />
                  </div>
                </Field>
              </div>

              <Field label="Email *" error={errors.email}>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set('email')}
                    className={`${inputCls} pl-9`}
                  />
                </div>
              </Field>

              <Field label="Your Query *" error={errors.message}>
                <textarea
                  rows={4}
                  placeholder="Describe your query or requirement in detail..."
                  value={form.message}
                  onChange={set('message')}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white font-body border-none cursor-pointer transition-all hover:opacity-90 mt-1"
                style={{ background: loading ? '#94a3b8' : GRAD, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                  />
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

/* ─── GET QUOTE FORM ─────────────────────────────────────────────────────── */
function QuoteForm({ onClose }) {
  const empty = { name: '', phone: '', email: '', company: '', product: '', qty: '', city: '', message: '' };
  const [form, setForm]     = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone]     = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
                               e.phone   = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                               e.email   = 'Valid email required';
    if (!form.product)        e.product = 'Please select a product';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #0f2356 0%, #1e3a8a 100%)' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
            <FileText size={18} className="text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm font-body">Get a Quote</p>
            <p className="text-white/65 text-xs font-body">Quick quote within 2 business hours</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 transition-colors border-none cursor-pointer text-white"
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {done ? (
            <SuccessScreen
              key="done"
              name={form.name}
              onReset={() => { setDone(false); setForm(empty); }}
              msg="Our sales team will send you a detailed quote within 2 business hours."
            />
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={submit}
              noValidate
              className="flex flex-col gap-4 p-5"
            >
              <div className="grid grid-cols-2 gap-3">
                <Field label="Full Name *" error={errors.name}>
                  <div className="relative">
                    <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input placeholder="Your name" value={form.name} onChange={set('name')} className={`${inputCls} pl-9`} />
                  </div>
                </Field>

                <Field label="Phone *" error={errors.phone}>
                  <div className="relative">
                    <Phone size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input type="tel" placeholder="10-digit" value={form.phone} onChange={set('phone')} className={`${inputCls} pl-9`} />
                  </div>
                </Field>
              </div>

              <Field label="Email Address *" error={errors.email}>
                <div className="relative">
                  <Mail size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} className={`${inputCls} pl-9`} />
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Company / Institute" error={errors.company}>
                  <div className="relative">
                    <Building2 size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input placeholder="Optional" value={form.company} onChange={set('company')} className={`${inputCls} pl-9`} />
                  </div>
                </Field>

                <Field label="City" error={errors.city}>
                  <input placeholder="Your city" value={form.city} onChange={set('city')} className={inputCls} />
                </Field>
              </div>

              <Field label="Product / Instrument *" error={errors.product}>
                <div className="relative">
                  <FlaskConical size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
                  <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select
                    value={form.product}
                    onChange={set('product')}
                    className={`${inputCls} pl-9 pr-8 appearance-none cursor-pointer`}
                  >
                    <option value="">Select a product category</option>
                    {PRODUCT_OPTIONS.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Quantity Required">
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    value={form.qty}
                    onChange={set('qty')}
                    className={inputCls}
                  />
                </Field>

                <Field label="Usage / Application">
                  <input placeholder="Research / QC / Production" value={form.message} onChange={set('message')} className={inputCls} />
                </Field>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white font-body border-none transition-all hover:opacity-90 mt-1"
                style={{ background: loading ? '#94a3b8' : GRAD, cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                  />
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

/* ─── POPUP MODAL WRAPPER ────────────────────────────────────────────────── */
function Popup({ open, onClose, children }) {
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[2000]"
            onClick={onClose}
          />

          {/* Panel — slides in from right */}
          <motion.div
            key="panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[460px] bg-white z-[2001] flex flex-col overflow-hidden"
            style={{ boxShadow: '-8px 0 48px rgba(15,35,86,0.22)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── MAIN EXPORT ─────────────────────────────────────────────────────────── */
export default function SideButtons() {
  const [open, setOpen] = useState(null); // null | 'query' | 'quote'

  const close = () => setOpen(null);

  const BTN_BASE =
    'relative flex items-center justify-center cursor-pointer border-none overflow-hidden group';

  return (
    <>
      {/* ── Fixed vertical strip on RIGHT edge ── */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[1500] flex flex-col gap-[2px]"
        style={{ filter: 'drop-shadow(-4px 0 16px rgba(15,35,86,0.25))' }}
      >
        {/* ANY QUERIES button */}
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(open === 'query' ? null : 'query')}
          className={BTN_BASE}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            background: open === 'query'
              ? 'linear-gradient(180deg, #1d4ed8, #0284c7)'
              : GRAD,
            color: '#fff',
            padding: '20px 14px',
            borderRadius: '0 0 12px 12px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            minWidth: 44,
          }}
          title="Any Queries?"
        >
          {/* Shimmer */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15), transparent)' }}
          />
          <MessageCircleQuestion size={16} style={{ marginBottom: 8, transform: 'rotate(180deg)', flexShrink: 0 }} />
          Any Queries
        </motion.button>

        {/* GET QUOTE button */}
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setOpen(open === 'quote' ? null : 'quote')}
          className={BTN_BASE}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            background: open === 'quote'
              ? 'linear-gradient(180deg, #0f2356, #1e3a8a)'
              : 'linear-gradient(135deg, #0f2356 0%, #1e3a8a 100%)',
            color: '#fff',
            padding: '20px 14px',
            borderRadius: '12px 12px 0 0',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            minWidth: 44,
          }}
          title="Get a Quote"
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.12), transparent)' }}
          />
          <FileText size={16} style={{ marginBottom: 8, transform: 'rotate(180deg)', flexShrink: 0 }} />
          Get Quote
        </motion.button>
      </div>

      {/* ── ANY QUERIES popup ── */}
      <Popup open={open === 'query'} onClose={close}>
        <QueryForm onClose={close} />
      </Popup>

      {/* ── GET QUOTE popup ── */}
      <Popup open={open === 'quote'} onClose={close}>
        <QuoteForm onClose={close} />
      </Popup>
    </>
  );
}