import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CATEGORIES = {
  'Weighing & Measurement': [
    { name: 'Analytical Balances Sartorius', icon: '🔬', link: '/analytics' },
    { name: 'Laboratory Balances Sartorius', icon: '📡', link: '/laboratory-balances' },
    { name: 'Industrial Platform Scales Smart Labtech', icon: '⚗️', link: '/industrial-scales' },
    { name: 'Weighing Indicators Smart Labtech', icon: '🧫', link: '/weighing-indicators' },
  ],
  'Thermal Cooling': [
    { name: 'Climate & Humidity Chambers Memmert', icon: '⚖️', link: '/climate-chambers' },
    { name: 'Drying and Heating Ovens Memmert', icon: '🌡️', link: '/drying-ovens' },
    { name: 'Incubators Memmert', icon: '🧪', link: '/incubators' },
    { name: 'Water Baths Memmert', icon: '🔒', link: '/water-baths' },
    { name: 'Ultra Low Temperature Freezers Arctiko', icon: '💧', link: '/ult-freezers' },
    { name: 'Bio Medical Storage Solutions Arctiko', icon: '❄️', link: '/biomedical-storage' },
  ],
  'Chromatography': [
    { name: 'Gas Chromatography Scion', icon: '🤖', link: '/gas-chromatography' },
    { name: 'Liquid Chromatography Waters', icon: '📶', link: '/liquid-chromatography' },
  ],
  'Rheology & Texture': [
    { name: 'Viscometers Brookfield', icon: '⚖️', link: '/viscometers' },
    { name: 'Rheometers Brookfield', icon: '🌡️', link: '/rheometers' },
    { name: 'Texture Analyzers Brookfield', icon: '🧪', link: '/texture-analyzers' },
  ],
  'Isolation & Safety': [
    { name: 'Biological Safety Cabinets ESCO', icon: '⚖️', link: '/biosafety-cabinets' },
    { name: 'Laminar Flow Chambers ESCO', icon: '🌡️', link: '/laminar-flow' },
    { name: 'Fume Hoods ESCO', icon: '🧪', link: '/fume-hoods' },
    { name: 'Glove Boxes Plas Labs', icon: '🔒', link: '/glove-boxes' },
    { name: 'Dessicators Plas Labs', icon: '💧', link: '/dessicators' },
    { name: 'PCR Chambers Plas Labs', icon: '❄️', link: '/pcr-chambers' },
  ],
  'Micro Biology': [
    { name: 'Microscopes', icon: '🔬', link: '/microscopes' },
    { name: 'Autoclaves', icon: '🦠', link: '/autoclaves' },
    { name: 'Colony Counters', icon: '🧫', link: '/colony-counters' },
  ],
  'Laboratory Equipment': [
    { name: 'Centrifuges', icon: '⚙️', link: '/centrifuges' },
    { name: 'pH Meters', icon: '📊', link: '/ph-meters' },
    { name: 'Water Purification Systems', icon: '💧', link: '/water-purification' },
    { name: 'Mixers and Shakers', icon: '🔄', link: '/mixers' },
  ],
};

const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact'];

// Keep these in sync with the Tailwind height classes on the nav element
const TOP_BAR_H = 42;
const NAV_H = 80; // lg:h-[80px]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('Weighing & Measurement');
  const [mobileExpanded, setMobileExpanded] = useState({});

  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (!e.target.closest('[data-navbar]')) setDropOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
      if (window.innerWidth < 1024) setDropOpen(false);
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const openDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(timerRef.current); setDropOpen(true); } };
  const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150); };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setDropOpen(false);
    if (link === 'Home') { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    else if (link === 'Products') document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    else document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMobileCat = (key) =>
    setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      {/* ─────────── TOP BAR ─────────── */}
      <div className="fixed top-0 left-0 right-0 z-[1001] h-[42px] bg-[#0f2356] flex items-center justify-end gap-4 sm:gap-7 px-4 sm:px-10 lg:px-20">
        <div className="flex items-center gap-1.5">
          <Phone size={12} className="text-white/50" />
          <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide">+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={12} className="text-white/50" />
          <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide xs:block">info@smartlabtech.in</span>
        </div>
        <div className="w-px h-4 bg-white/15 hidden sm:block" />
        <span className="text-[11px] text-white/50 font-medium tracking-widest hidden md:block">
          Est. 2001 · ISO 9001:2015 Certified
        </span>
      </div>

      {/* ─────────── MAIN NAVBAR ─────────── */}
      <motion.nav
        data-navbar
        initial={{ y: -88, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-[1000] flex items-center justify-between
          px-4 sm:px-10 lg:px-20
          h-[64px] sm:h-[72px] lg:h-[80px]
          transition-all duration-300
          ${scrolled
            ? 'bg-white/98 border-b border-slate-200 shadow-[0_4px_24px_rgba(15,35,86,0.10)]'
            : 'bg-white/95 border-b border-slate-200/50'
          } backdrop-blur-xl`}
        style={{ top: TOP_BAR_H }}
      >
        {/* Logo */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
        >
          <img
            src="/Screenshot 2026-04-13 151403.png"
            alt="SmartLabTech"
            className="h-9 sm:h-11 lg:h-[48px] w-auto object-contain"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 tracking-tight">
              SmartLab<span className="text-sky-500">Tech</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-widest uppercase mt-0.5 hidden xs:block">
              Scientifically Yours
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1">
          {NAV_LINKS.map(link =>
            link === 'Products' ? (
              <button
                key={link}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
                className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
                  transition-all duration-150 cursor-pointer border-none
                  ${dropOpen
                    ? 'text-blue-900 bg-indigo-50'
                    : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
                  }`}
              >
                Products
                <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
                  <ChevronDown size={15} />
                </motion.span>
              </button>
            ) : (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold text-black bg-transparent
                  cursor-pointer border-none transition-all duration-150 whitespace-nowrap
                  hover:text-blue-900 hover:bg-indigo-50"
              >
                {link}
              </button>
            )
          )}
        </div>

        {/* CTA – desktop */}
        <button
          onClick={() => handleNavClick('Contact')}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
            text-white flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-200
            bg-gradient-to-r from-blue-900 to-sky-500 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
        >
          Get a Quote <ArrowRight size={15} />
        </button>

        {/* CTA – tablet */}
        <button
          onClick={() => handleNavClick('Contact')}
          className="hidden sm:flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold
            text-white flex-shrink-0 border-none cursor-pointer
            bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
        >
          Quote <ArrowRight size={13} />
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className={`lg:hidden p-2 rounded-xl border-none cursor-pointer transition-all text-blue-900 ml-2 sm:ml-3
            ${mobileOpen ? 'bg-indigo-50' : 'bg-transparent hover:bg-slate-100'}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {dropOpen && (
          <motion.div
            data-navbar
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
            className="fixed left-0 right-0 z-[999] flex justify-center px-4"
            style={{ top: TOP_BAR_H + NAV_H + 8 }}
          >
            {/* CENTERED CONTAINER */}
            <div className="w-full max-w-[1000px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(15,35,86,0.18)] overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f2356] to-[#2563eb]">
                <div>
                  <p className="text-sm font-bold text-white tracking-wide">
                    Product Catalogue
                  </p>
                  <p className="text-xs text-white/60 mt-0.5">
                    Scientific & laboratory instruments
                  </p>
                </div>

                <button
                  onClick={() => {
                    setDropOpen(false);
                    handleNavClick("Products");
                  }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white
              border border-white/25 bg-white/15 hover:bg-white/30 transition"
                >
                  View All <ArrowRight size={13} />
                </button>
              </div>

              {/* BODY */}
              <div className="flex max-h-[60vh]">

                {/* LEFT CATEGORY */}
                <div className="w-64 bg-slate-50 border-r border-slate-100 overflow-y-auto p-3">
                  {Object.keys(CATEGORIES).map((cat) => {
                    const isActive = activeCat === cat;

                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        onMouseEnter={() => setActiveCat(cat)}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl mb-1 text-xs transition
                    ${isActive
                            ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold"
                            : "text-slate-600 hover:bg-white hover:text-blue-900"
                          }`}
                      >
                        <span className="truncate">{cat}</span>
                        <ChevronRight size={12} />
                      </button>
                    );
                  })}
                </div>

                {/* RIGHT PRODUCTS GRID */}
                <div className="flex-1 overflow-y-auto p-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCat}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3"
                    >
                      {(CATEGORIES[activeCat] || []).map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setDropOpen(false);
                            navigate(item.link);
                          }}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition text-left group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-lg text-lg group-hover:bg-indigo-100">
                            {item.icon}
                          </div>

                          <p className="text-xs font-semibold text-blue-900 flex-1">
                            {item.name}
                          </p>

                          <ChevronRight
                            size={12}
                            className="opacity-0 group-hover:opacity-100 transition"
                          />
                        </button>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Need help choosing the right instrument?
                </span>

                <button
                  onClick={() => {
                    setDropOpen(false);
                    handleNavClick("Contact");
                  }}
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  Contact Expert
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────── MOBILE DRAWER ─────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[900] bg-slate-900/40 backdrop-blur-sm"
              style={{ top: TOP_BAR_H + 64 }}
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed right-0 bottom-0 w-[min(360px,100vw)] bg-white z-[950] overflow-y-auto"
              style={{ top: TOP_BAR_H + 64, boxShadow: '-6px 0 28px rgba(15,35,86,0.14)' }}
            >
              <nav>
                {NAV_LINKS.map(link =>
                  link === 'Products' ? (
                    <div key={link}>
                      <button
                        onClick={() => toggleMobileCat('products-top')}
                        className="flex items-center justify-between w-full px-5 py-4 bg-transparent
                          border-b border-slate-100 cursor-pointer text-sm text-blue-900 font-semibold text-left"
                      >
                        Products
                        <motion.span
                          animate={{ rotate: mobileExpanded['products-top'] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ChevronDown size={16} className="text-slate-400" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileExpanded['products-top'] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            {Object.entries(CATEGORIES).map(([cat, items]) => (
                              <div key={cat}>
                                <button
                                  onClick={() => toggleMobileCat(cat)}
                                  className="flex items-center justify-between w-full px-5 py-2.5
                                    bg-slate-50 border-b border-slate-100 cursor-pointer
                                    text-[11px] text-blue-600 font-bold tracking-widest uppercase text-left"
                                >
                                  {cat}
                                  <ChevronDown
                                    size={11}
                                    className={`text-sky-400 transition-transform duration-200 ${mobileExpanded[cat] ? 'rotate-180' : ''}`}
                                  />
                                </button>

                                <AnimatePresence>
                                  {mobileExpanded[cat] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.16 }}
                                      className="overflow-hidden"
                                    >
                                      {items.map(item => (
                                        <button
                                          key={item.name}
                                          onClick={() => { setMobileOpen(false); navigate(item.link); }}
                                          className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
                                            border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
                                        >
                                          <span className="text-lg w-7 text-center flex-shrink-0">{item.icon}</span>
                                          <p className="text-xs font-semibold text-blue-900 leading-snug">{item.name}</p>
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      key={link}
                      onClick={() => handleNavClick(link)}
                      className="flex items-center justify-between w-full px-5 py-4 bg-transparent
                        border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
                        transition-all hover:bg-indigo-50 hover:text-blue-900"
                    >
                      {link} <ChevronRight size={15} className="text-slate-400" />
                    </button>
                  )
                )}
              </nav>

              <div className="p-4">
                <button
                  onClick={() => { setMobileOpen(false); handleNavClick('Contact'); }}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white border-none cursor-pointer
                    bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
                >
                  Get a Quote
                </button>
              </div>

              <div className="mx-4 mb-5 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-2.5">
                  <Phone size={14} className="text-sky-400 flex-shrink-0" />
                  <span className="text-xs text-slate-600">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-sky-400 flex-shrink-0" />
                  <span className="text-xs text-slate-600 break-all">info@smartlabtech.in</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[calc(42px+64px)] sm:h-[calc(42px+72px)] lg:h-[calc(42px+80px)]" />
    </>
  );
}