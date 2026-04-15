// SideButtons.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, ArrowRight } from 'lucide-react';
import { Modal } from '../modal/Modal';
import { QueryForm } from '../modal/QueryForm';
import { QuoteForm } from '../modal/QuoteForm';

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