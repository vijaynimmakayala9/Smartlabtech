// Modal.js
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({ open, onClose, children }) {
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
            className="fixed top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-[min(560px,95vw)] max-h-[90vh] bg-white rounded-2xl overflow-hidden flex flex-col z-[2001] shadow-[0_40px_100px_rgba(15,35,86,0.3),0_8px_32px_rgba(15,35,86,0.15)] border border-blue-900/10"
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