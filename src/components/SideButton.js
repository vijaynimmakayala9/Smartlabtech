import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, FileText, HelpCircle } from 'lucide-react';
import { Modal } from '../modal/Modal';
import { QueryForm } from '../modal/QueryForm';
import { QuoteForm } from '../modal/QuoteForm';

export default function SideButtons() {
  const [open, setOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pinned, setPinned] = useState(false); // 👈 click lock
  const wrapperRef = useRef(null);

  const closeModal = () => setOpen(null);

  // close outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
        setPinned(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* SIDE TAB */}
      <div
        ref={wrapperRef}
        className="fixed top-1/2 right-0 z-[1500] -translate-y-1/2"
        onMouseEnter={() => !pinned && setIsOpen(true)}   // 👈 hover open
        onMouseLeave={() => !pinned && setIsOpen(false)}  // 👈 hover close
      >
        <motion.div
          initial={{ x: 80 }}
          animate={{ x: isOpen ? 0 : 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex flex-col items-end gap-2"
        >
          
          {/* OPTIONS */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  onClick={() => {
                    setOpen('query');
                    setIsOpen(false);
                    setPinned(false);
                  }}
                  className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-l-full border border-r-0 hover:shadow-xl"
                >
                  <Phone size={16} className="text-sky-600" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    Contact Us
                  </span>
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  onClick={() => {
                    setOpen('quote');
                    setIsOpen(false);
                    setPinned(false);
                  }}
                  className="flex items-center gap-3 bg-white shadow-lg px-4 py-2 rounded-l-full border border-r-0 hover:shadow-xl"
                >
                  <FileText size={16} className="text-blue-700" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    Get Quote
                  </span>
                </motion.button>
              </>
            )}
          </AnimatePresence>

          {/* MAIN TAB */}
          <motion.button
            onClick={() => {
              setIsOpen(!isOpen);
              setPinned(!pinned); // 👈 toggle lock
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0f2356] to-[#2563eb] text-white px-4 py-3 rounded-l-full shadow-lg"
          >
            <HelpCircle size={20} />
            <span className="text-sm font-semibold">
              {pinned ? "Close" : "Help"}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* MODALS */}
      <Modal open={open === 'query'} onClose={closeModal}>
        <QueryForm onClose={closeModal} />
      </Modal>

      <Modal open={open === 'quote'} onClose={closeModal}>
        <QuoteForm onClose={closeModal} />
      </Modal>
    </>
  );
}