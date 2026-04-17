// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail, HelpCircle, BookOpen, FileText, Briefcase } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { Modal } from '../modal/Modal';
// import { QuoteForm } from '../modal/QuoteForm';
// import { CATEGORIES } from '../data/Categories';

// const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact', 'More'];

// // More dropdown items
// const MORE_LINKS = [
//   { name: 'Support', icon: <HelpCircle size={14} />, link: '/support' },
//   { name: 'Resources', icon: <BookOpen size={14} />, link: '/resources' },
//   { name: 'Blogs', icon: <FileText size={14} />, link: '/blogs' },
//   { name: 'Career', icon: <Briefcase size={14} />, link: '/career' },
// ];

// // Keep these in sync with the Tailwind height classes on the nav element
// const TOP_BAR_H = 42;
// const NAV_H = 80; // lg:h-[80px]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropOpen, setDropOpen] = useState(false);
//   const [moreDropOpen, setMoreDropOpen] = useState(false);
//   const [activeCat, setActiveCat] = useState('Weighing & Measurement');
//   const [mobileExpanded, setMobileExpanded] = useState({});

//   const [open, setOpen] = useState(null); // null | 'query' | 'quote'
//   const close = () => setOpen(null);

//   const timerRef = useRef(null);
//   const moreTimerRef = useRef(null);
//   const moreBtnRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', fn, { passive: true });
//     return () => window.removeEventListener('scroll', fn);
//   }, []);

//   useEffect(() => {
//     const fn = (e) => {
//       if (!e.target.closest('[data-navbar]')) {
//         setDropOpen(false);
//         setMoreDropOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', fn);
//     return () => document.removeEventListener('mousedown', fn);
//   }, []);

//   useEffect(() => {
//     const fn = () => {
//       if (window.innerWidth >= 1024) {
//         setMobileOpen(false);
//       }
//       if (window.innerWidth < 1024) {
//         setDropOpen(false);
//         setMoreDropOpen(false);
//       }
//     };
//     window.addEventListener('resize', fn);
//     return () => window.removeEventListener('resize', fn);
//   }, []);

//   const openDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(timerRef.current); setDropOpen(true); } };
//   const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150); };
  
//   const openMoreDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(moreTimerRef.current); setMoreDropOpen(true); } };
//   const closeMoreDrop = () => { moreTimerRef.current = setTimeout(() => setMoreDropOpen(false), 150); };

//   const handleNavClick = (link) => {
//     setMobileOpen(false);
//     setDropOpen(false);
//     setMoreDropOpen(false);

//     const currentPath = window.location.pathname;

//     if (link === 'Home') {
//       if (currentPath === '/') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }else{
//       navigate('/');
//       setTimeout (() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//     }
//     } else if (link === 'About') {
//       if (currentPath === '/about') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }else{
//         navigate('/about');
//         setTimeout (() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Products') {
//       if (currentPath === '/products') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }else{
//         navigate('/products');
//         setTimeout (() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Services') {
//       if (currentPath === '/services') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }else{
//         navigate('/services');
//         setTimeout (() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Contact') {
//       if (currentPath === '/contact') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       }else{
//         navigate('/contact');
//         setTimeout (() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else {
//       document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleMobileCat = (key) =>
//     setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));

//   return (
//     <>
//       {/* ─────────── TOP BAR ─────────── */}
//       <div className="fixed top-0 left-0 right-0 z-[1001] h-[42px] bg-[#0f2356] flex items-center justify-end gap-4 sm:gap-7 px-4 sm:px-10 lg:px-20">
//         <div className="flex items-center gap-1.5">
//           <Phone size={12} className="text-white/50" />
//           <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide">+91 98765 43210</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <Mail size={12} className="text-white/50" />
//           <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide xs:block">info@smartlabtech.in</span>
//         </div>
//         <div className="w-px h-4 bg-white/15 hidden sm:block" />
//         <span className="text-[11px] text-white/50 font-medium tracking-widest hidden md:block">
//           Est. 2001 · ISO 9001:2015 Certified
//         </span>
//       </div>

//       {/* ─────────── MAIN NAVBAR ─────────── */}
//       <motion.nav
//         data-navbar
//         initial={{ y: -88, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         className={`fixed left-0 right-0 z-[1000] flex items-center justify-between
//           px-4 sm:px-10 lg:px-20
//           h-[64px] sm:h-[72px] lg:h-[80px]
//           transition-all duration-300
//           ${scrolled
//             ? 'bg-white/98 border-b border-slate-200 shadow-[0_4px_24px_rgba(15,35,86,0.10)]'
//             : 'bg-white/95 border-b border-slate-200/50'
//           } backdrop-blur-xl`}
//         style={{ top: TOP_BAR_H }}
//       >
//         {/* Logo */}
//         <button
//           onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
//           className="flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
//         >
//           <img
//             src="/logo.png"
//             alt="SmartLabTech"
//             className="h-9 sm:h-11 lg:h-[48px] w-auto object-contain"
//             onError={e => { e.target.style.display = 'none'; }}
//           />
//           <div className="flex flex-col leading-tight">
//             <span className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 tracking-tight">
//               SmartLab<span className="text-sky-500">Tech</span>
//             </span>
//             <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-widest uppercase mt-0.5 hidden xs:block">
//               Scientifically Yours
//             </span>
//           </div>
//         </button>

//         {/* Desktop nav links */}
//         <div className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1">
//           {NAV_LINKS.map(link =>
//             link === 'Products' ? (
//               <button
//                 key={link}
//                 onMouseEnter={openDrop}
//                 onMouseLeave={closeDrop}
//                 className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
//                   transition-all duration-150 cursor-pointer border-none
//                   ${dropOpen
//                     ? 'text-blue-900 bg-indigo-50'
//                     : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
//                   }`}
//               >
//                 Products
//                 <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
//                   <ChevronDown size={15} />
//                 </motion.span>
//               </button>
//             ) : link === 'More' ? (
//               <div key={link} className="relative" ref={moreBtnRef}>
//                 <button
//                   onMouseEnter={openMoreDrop}
//                   onMouseLeave={closeMoreDrop}
//                   className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
//                     transition-all duration-150 cursor-pointer border-none
//                     ${moreDropOpen
//                       ? 'text-blue-900 bg-indigo-50'
//                       : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
//                     }`}
//                 >
//                   More
//                   <motion.span animate={{ rotate: moreDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
//                     <ChevronDown size={15} />
//                   </motion.span>
//                 </button>

//                 {/* More Dropdown - Simple Normal Dropdown positioned under button */}
//                 <AnimatePresence>
//                   {moreDropOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -8 }}
//                       transition={{ duration: 0.15, ease: "easeOut" }}
//                       onMouseEnter={openMoreDrop}
//                       onMouseLeave={closeMoreDrop}
//                       className="absolute right-0 z-[999] pt-2"
//                       style={{ top: '100%' }}
//                     >
//                       <div className="w-48 bg-white rounded-xl border border-slate-200 shadow-[0_12px_40px_rgba(15,35,86,0.15)] overflow-hidden py-1">
//                         {MORE_LINKS.map((item, idx) => (
//                           <button
//                             key={item.name}
//                             onClick={() => {
//                               setMoreDropOpen(false);
//                               navigate(item.link);
//                             }}
//                             className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-left hover:bg-indigo-50 transition-colors group ${
//                               idx !== MORE_LINKS.length - 1 ? 'border-b border-slate-100' : ''
//                             }`}
//                           >
//                             <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
//                               {item.icon}
//                             </span>
//                             <span className="text-sm font-medium text-slate-700 group-hover:text-blue-900">
//                               {item.name}
//                             </span>
//                             <ChevronRight size={12} className="ml-auto text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
//                           </button>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <button
//                 key={link}
//                 onClick={() => handleNavClick(link)}
//                 className="px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold text-black bg-transparent
//                   cursor-pointer border-none transition-all duration-150 whitespace-nowrap
//                   hover:text-blue-900 hover:bg-indigo-50"
//               >
//                 {link}
//               </button>
//             )
//           )}
//         </div>

//         {/* CTA – desktop */}
//         <button
//           onClick={() => setOpen('quote')}
//           className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
//             text-white flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-200
//             bg-gradient-to-r from-blue-900 to-sky-500 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
//         >
//           Get a Quote <ArrowRight size={15} />
//         </button>

//         {/* CTA – tablet */}
//         <button
//           onClick={() => setOpen('quote')}
//           className="hidden sm:flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold
//             text-white flex-shrink-0 border-none cursor-pointer
//             bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
//         >
//           Quote <ArrowRight size={13} />
//         </button>

//         {/* Hamburger */}
//         <button
//           onClick={() => setMobileOpen(o => !o)}
//           className={`lg:hidden p-2 rounded-xl border-none cursor-pointer transition-all text-blue-900 ml-2 sm:ml-3
//             ${mobileOpen ? 'bg-indigo-50' : 'bg-transparent hover:bg-slate-100'}`}
//           aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//         >
//           {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </motion.nav>

//       {/* Products Dropdown */}
//       <AnimatePresence>
//         {dropOpen && (
//           <motion.div
//             data-navbar
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             onMouseEnter={openDrop}
//             onMouseLeave={closeDrop}
//             className="fixed left-0 right-0 z-[999] flex justify-center px-4"
//             style={{ top: TOP_BAR_H + NAV_H + 8 }}
//           >
//             {/* CENTERED CONTAINER */}
//             <div className="w-full max-w-[1000px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(15,35,86,0.18)] overflow-hidden">

//               {/* Header */}
//               <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f2356] to-[#2563eb]">
//                 <div>
//                   <p className="text-sm font-bold text-white tracking-wide">
//                     Product Catalogue
//                   </p>
//                   <p className="text-xs text-white/60 mt-0.5">
//                     Scientific & laboratory instruments
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => {
//                     setDropOpen(false);
//                     navigate('/products');
//                   }}
//                   className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white
//               border border-white/25 bg-white/15 hover:bg-white/30 transition"
//                 >
//                   View All <ArrowRight size={13} />
//                 </button>
//               </div>

//               {/* BODY */}
//               <div className="flex max-h-[60vh]">

//                 {/* LEFT CATEGORY */}
//                 <div className="w-64 bg-slate-50 border-r border-slate-100 overflow-y-auto p-3">
//                   {Object.keys(CATEGORIES).map((cat) => {
//                     const isActive = activeCat === cat;

//                     return (
//                       <button
//                         key={cat}
//                         onClick={() => setActiveCat(cat)}
//                         onMouseEnter={() => setActiveCat(cat)}
//                         className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl mb-1 text-xs transition
//                     ${isActive
//                             ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold"
//                             : "text-slate-600 hover:bg-white hover:text-blue-900"
//                           }`}
//                       >
//                         <span className="truncate">{cat}</span>
//                         <ChevronRight size={12} />
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* RIGHT PRODUCTS GRID */}
//                 <div className="flex-1 overflow-y-auto p-4">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeCat}
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3"
//                     >
//                       {(CATEGORIES[activeCat] || []).map((item) => (
//                         <button
//                           key={item.name}
//                           onClick={() => {
//                             setDropOpen(false);
//                             navigate(item.link);
//                           }}
//                           className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition text-left group"
//                         >
//                           <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-lg text-lg group-hover:bg-indigo-100">
//                             {item.icon}
//                           </div>

//                           <p className="text-xs font-semibold text-blue-900 flex-1">
//                             {item.name}
//                           </p>

//                           <ChevronRight
//                             size={12}
//                             className="opacity-0 group-hover:opacity-100 transition"
//                           />
//                         </button>
//                       ))}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
//                 <span className="text-xs text-slate-500">
//                   Need help choosing the right instrument?
//                 </span>

//                 <button
//                   onClick={() => {
//                     setDropOpen(false);
//                     navigate('/contact');
//                   }}
//                   className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition"
//                 >
//                   Contact Expert
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ─────────── MOBILE DRAWER ─────────── */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               key="overlay"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 z-[900] bg-slate-900/40 backdrop-blur-sm"
//               style={{ top: TOP_BAR_H + 64 }}
//             />

//             <motion.div
//               key="drawer"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="fixed right-0 bottom-0 w-[min(360px,100vw)] bg-white z-[950] overflow-y-auto"
//               style={{ top: TOP_BAR_H + 64, boxShadow: '-6px 0 28px rgba(15,35,86,0.14)' }}
//             >
//               <nav>
//                 {NAV_LINKS.map(link =>
//                   link === 'Products' ? (
//                     <div key={link}>
//                       <button
//                         onClick={() => toggleMobileCat('products-top')}
//                         className="flex items-center justify-between w-full px-5 py-4 bg-transparent
//                           border-b border-slate-100 cursor-pointer text-sm text-blue-900 font-semibold text-left"
//                       >
//                         Products
//                         <motion.span
//                           animate={{ rotate: mobileExpanded['products-top'] ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="flex items-center"
//                         >
//                           <ChevronDown size={16} className="text-slate-400" />
//                         </motion.span>
//                       </button>

//                       <AnimatePresence>
//                         {mobileExpanded['products-top'] && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.22 }}
//                             className="overflow-hidden"
//                           >
//                             {Object.entries(CATEGORIES).map(([cat, items]) => (
//                               <div key={cat}>
//                                 <button
//                                   onClick={() => toggleMobileCat(cat)}
//                                   className="flex items-center justify-between w-full px-5 py-2.5
//                                     bg-slate-50 border-b border-slate-100 cursor-pointer
//                                     text-[11px] text-blue-600 font-bold tracking-widest uppercase text-left"
//                                 >
//                                   {cat}
//                                   <ChevronDown
//                                     size={11}
//                                     className={`text-sky-400 transition-transform duration-200 ${mobileExpanded[cat] ? 'rotate-180' : ''}`}
//                                   />
//                                 </button>

//                                 <AnimatePresence>
//                                   {mobileExpanded[cat] && (
//                                     <motion.div
//                                       initial={{ height: 0, opacity: 0 }}
//                                       animate={{ height: 'auto', opacity: 1 }}
//                                       exit={{ height: 0, opacity: 0 }}
//                                       transition={{ duration: 0.16 }}
//                                       className="overflow-hidden"
//                                     >
//                                       {items.map(item => (
//                                         <button
//                                           key={item.name}
//                                           onClick={() => { setMobileOpen(false); navigate(item.link); }}
//                                           className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
//                                             border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
//                                         >
//                                           <span className="text-lg w-7 text-center flex-shrink-0">{item.icon}</span>
//                                           <p className="text-xs font-semibold text-blue-900 leading-snug">{item.name}</p>
//                                         </button>
//                                       ))}
//                                     </motion.div>
//                                   )}
//                                 </AnimatePresence>
//                               </div>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : link === 'More' ? (
//                     <div key={link}>
//                       <button
//                         onClick={() => toggleMobileCat('more-top')}
//                         className="flex items-center justify-between w-full px-5 py-4 bg-transparent
//                           border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
//                           transition-all hover:bg-indigo-50 hover:text-blue-900"
//                       >
//                         More
//                         <motion.span
//                           animate={{ rotate: mobileExpanded['more-top'] ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                           className="flex items-center"
//                         >
//                           <ChevronDown size={16} className="text-slate-400" />
//                         </motion.span>
//                       </button>

//                       <AnimatePresence>
//                         {mobileExpanded['more-top'] && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.22 }}
//                             className="overflow-hidden"
//                           >
//                             {MORE_LINKS.map(item => (
//                               <button
//                                 key={item.name}
//                                 onClick={() => { setMobileOpen(false); navigate(item.link); }}
//                                 className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
//                                   border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
//                               >
//                                 <span className="text-lg w-7 text-center flex-shrink-0 text-slate-500">{item.icon}</span>
//                                 <p className="text-sm font-medium text-slate-700 leading-snug">{item.name}</p>
//                               </button>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <button
//                       key={link}
//                       onClick={() => handleNavClick(link)}
//                       className="flex items-center justify-between w-full px-5 py-4 bg-transparent
//                         border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
//                         transition-all hover:bg-indigo-50 hover:text-blue-900"
//                     >
//                       {link} <ChevronRight size={15} className="text-slate-400" />
//                     </button>
//                   )
//                 )}
//               </nav>

//               <div className="p-4">
//                 <button
//                   onClick={() => { setMobileOpen(false); navigate('/contact'); }}
//                   className="w-full py-3.5 rounded-xl text-sm font-semibold text-white border-none cursor-pointer
//                     bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
//                 >
//                   Get a Quote
//                 </button>
//               </div>

//               <div className="mx-4 mb-5 p-4 bg-slate-50 rounded-xl border border-slate-200">
//                 <div className="flex items-center gap-3 mb-2.5">
//                   <Phone size={14} className="text-sky-400 flex-shrink-0" />
//                   <span className="text-xs text-slate-600">+91 98765 43210</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail size={14} className="text-sky-400 flex-shrink-0" />
//                   <span className="text-xs text-slate-600 break-all">info@smartlabtech.in</span>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <Modal open={open === 'quote'} onClose={close}>
//         <QuoteForm onClose={close} />
//       </Modal>

//       {/* Spacer */}
//       <div className="h-[calc(42px+64px)] sm:h-[calc(42px+72px)] lg:h-[calc(42px+80px)]" />
//     </>
//   );
// }

// // Navbar.js with Inline Search Bar
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ChevronDown, Menu, X, ChevronRight, ArrowRight, 
//   Phone, Mail, HelpCircle, BookOpen, FileText, Briefcase,
//   Search, Clock, TrendingUp, Sparkles
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { Modal } from '../modal/Modal';
// import { QuoteForm } from '../modal/QuoteForm';
// import { CATEGORIES } from '../data/Categories';

// const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact', 'More'];

// // More dropdown items
// const MORE_LINKS = [
//   { name: 'Support', icon: <HelpCircle size={14} />, link: '/support' },
//   { name: 'Resources', icon: <BookOpen size={14} />, link: '/resources' },
//   { name: 'Blogs', icon: <FileText size={14} />, link: '/blogs' },
//   { name: 'Career', icon: <Briefcase size={14} />, link: '/career' },
// ];

// // Keep these in sync with the Tailwind height classes on the nav element
// const TOP_BAR_H = 42;
// const NAV_H = 80; // lg:h-[80px]

// // Get all products for search
// const getAllProducts = () => {
//   const products = [];
//   Object.entries(CATEGORIES).forEach(([category, items]) => {
//     items.forEach(item => {
//       products.push({
//         ...item,
//         category
//       });
//     });
//   });
//   return products;
// };

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dropOpen, setDropOpen] = useState(false);
//   const [moreDropOpen, setMoreDropOpen] = useState(false);
//   const [activeCat, setActiveCat] = useState('Weighing & Measurement');
//   const [mobileExpanded, setMobileExpanded] = useState({});
  
//   // Search states
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [recommendations, setRecommendations] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(-1);
//   const searchInputRef = useRef(null);
//   const searchContainerRef = useRef(null);

//   const [open, setOpen] = useState(null); // null | 'query' | 'quote'
//   const close = () => setOpen(null);

//   const timerRef = useRef(null);
//   const moreTimerRef = useRef(null);
//   const moreBtnRef = useRef(null);
//   const navigate = useNavigate();
//   const allProducts = getAllProducts();

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', fn, { passive: true });
//     return () => window.removeEventListener('scroll', fn);
//   }, []);

//   useEffect(() => {
//     const fn = (e) => {
//       if (!e.target.closest('[data-navbar]') && !e.target.closest('[data-search-container]')) {
//         setDropOpen(false);
//         setMoreDropOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', fn);
//     return () => document.removeEventListener('mousedown', fn);
//   }, []);

//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   // Update recommendations when search term changes
//   useEffect(() => {
//     if (searchTerm.trim()) {
//       const filtered = allProducts.filter(product => 
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchTerm.toLowerCase())
//       ).slice(0, 6);
//       setRecommendations(filtered);
//     } else {
//       setRecommendations(allProducts.slice(0, 4));
//     }
//     setSelectedIndex(-1);
//   }, [searchTerm]);

//   useEffect(() => {
//     const fn = () => {
//       if (window.innerWidth >= 1024) {
//         setMobileOpen(false);
//       }
//       if (window.innerWidth < 1024) {
//         setDropOpen(false);
//         setMoreDropOpen(false);
//         setIsSearchOpen(false);
//       }
//     };
//     window.addEventListener('resize', fn);
//     return () => window.removeEventListener('resize', fn);
//   }, []);

//   const openDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(timerRef.current); setDropOpen(true); } };
//   const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150); };
  
//   const openMoreDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(moreTimerRef.current); setMoreDropOpen(true); } };
//   const closeMoreDrop = () => { moreTimerRef.current = setTimeout(() => setMoreDropOpen(false), 150); };

//   const handleSearchOpen = () => {
//     setIsSearchOpen(true);
//     setDropOpen(false);
//     setMoreDropOpen(false);
//   };

//   const handleSearchClose = () => {
//     setIsSearchOpen(false);
//     setSearchTerm('');
//     setRecommendations([]);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'ArrowDown') {
//       e.preventDefault();
//       setSelectedIndex(prev => 
//         prev < recommendations.length - 1 ? prev + 1 : prev
//       );
//     } else if (e.key === 'ArrowUp') {
//       e.preventDefault();
//       setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
//     } else if (e.key === 'Enter') {
//       if (selectedIndex >= 0 && recommendations[selectedIndex]) {
//         handleSelectProduct(recommendations[selectedIndex]);
//       } else if (searchTerm.trim()) {
//         handleSearchSubmit();
//       }
//     } else if (e.key === 'Escape') {
//       handleSearchClose();
//     }
//   };

//   const handleSelectProduct = (product) => {
//     handleSearchClose();
//     navigate(product.link);
//   };

//   const handleSearchSubmit = () => {
//     if (searchTerm.trim()) {
//       handleSearchClose();
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };

//   const handleNavClick = (link) => {
//     setMobileOpen(false);
//     setDropOpen(false);
//     setMoreDropOpen(false);
//     setIsSearchOpen(false);

//     const currentPath = window.location.pathname;

//     if (link === 'Home') {
//       if (currentPath === '/') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate('/');
//         setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'About') {
//       if (currentPath === '/about') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate('/about');
//         setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Products') {
//       if (currentPath === '/products') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate('/products');
//         setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Services') {
//       if (currentPath === '/services') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate('/services');
//         setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else if (link === 'Contact') {
//       if (currentPath === '/contact') {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       } else {
//         navigate('/contact');
//         setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
//       }
//     } else {
//       document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const toggleMobileCat = (key) =>
//     setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));

//   return (
//     <>
//       {/* ─────────── TOP BAR ─────────── */}
//       <div className="fixed top-0 left-0 right-0 z-[1001] h-[42px] bg-[#0f2356] flex items-center justify-end gap-4 sm:gap-7 px-4 sm:px-10 lg:px-20">
//         <div className="flex items-center gap-1.5">
//           <Phone size={12} className="text-white/50" />
//           <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide">+91 98765 43210</span>
//         </div>
//         <div className="flex items-center gap-1.5">
//           <Mail size={12} className="text-white/50" />
//           <span className="text-[11px] sm:text-xs text-white/70 font-medium tracking-wide xs:block">info@smartlabtech.in</span>
//         </div>
//         <div className="w-px h-4 bg-white/15 hidden sm:block" />
//         <span className="text-[11px] text-white/50 font-medium tracking-widest hidden md:block">
//           Est. 2001 · ISO 9001:2015 Certified
//         </span>
//       </div>

//       {/* ─────────── MAIN NAVBAR ─────────── */}
//       <div data-navbar>
//         <motion.nav
//           initial={{ y: -88, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5, ease: 'easeOut' }}
//           className={`fixed left-0 right-0 z-[1000] 
//             px-4 sm:px-10 lg:px-20
//             h-[64px] sm:h-[72px] lg:h-[80px]
//             transition-all duration-300
//             ${scrolled
//               ? 'bg-white/98 border-b border-slate-200 shadow-[0_4px_24px_rgba(15,35,86,0.10)]'
//               : 'bg-white/95 border-b border-slate-200/50'
//             } backdrop-blur-xl`}
//           style={{ top: TOP_BAR_H }}
//         >
//           <div className="h-full flex items-center justify-between">
//             {/* Logo - Hidden when search is open on mobile */}
//             <button
//               onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
//               className={`flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0 transition-all duration-300 ${
//                 isSearchOpen ? 'lg:flex hidden' : 'flex'
//               }`}
//             >
//               <img
//                 src="/logo.png"
//                 alt="SmartLabTech"
//                 className="h-9 sm:h-11 lg:h-[48px] w-auto object-contain"
//                 onError={e => { e.target.style.display = 'none'; }}
//               />
//               <div className="flex flex-col leading-tight">
//                 <span className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 tracking-tight">
//                   SmartLab<span className="text-sky-500">Tech</span>
//                 </span>
//                 <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-widest uppercase mt-0.5 hidden xs:block">
//                   Scientifically Yours
//                 </span>
//               </div>
//             </button>

//             {/* Desktop nav links - Hidden when search is open */}
//             {!isSearchOpen && (
//               <div className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1">
//                 {NAV_LINKS.map(link =>
//                   link === 'Products' ? (
//                     <button
//                       key={link}
//                       onMouseEnter={openDrop}
//                       onMouseLeave={closeDrop}
//                       className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
//                         transition-all duration-150 cursor-pointer border-none
//                         ${dropOpen
//                           ? 'text-blue-900 bg-indigo-50'
//                           : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
//                         }`}
//                     >
//                       Products
//                       <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
//                         <ChevronDown size={15} />
//                       </motion.span>
//                     </button>
//                   ) : link === 'More' ? (
//                     <div key={link} className="relative" ref={moreBtnRef}>
//                       <button
//                         onMouseEnter={openMoreDrop}
//                         onMouseLeave={closeMoreDrop}
//                         className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
//                           transition-all duration-150 cursor-pointer border-none
//                           ${moreDropOpen
//                             ? 'text-blue-900 bg-indigo-50'
//                             : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
//                           }`}
//                       >
//                         More
//                         <motion.span animate={{ rotate: moreDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
//                           <ChevronDown size={15} />
//                         </motion.span>
//                       </button>

//                       {/* More Dropdown */}
//                       <AnimatePresence>
//                         {moreDropOpen && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -8 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -8 }}
//                             transition={{ duration: 0.15, ease: "easeOut" }}
//                             onMouseEnter={openMoreDrop}
//                             onMouseLeave={closeMoreDrop}
//                             className="absolute right-0 z-[999] pt-2"
//                             style={{ top: '100%' }}
//                           >
//                             <div className="w-48 bg-white rounded-xl border border-slate-200 shadow-[0_12px_40px_rgba(15,35,86,0.15)] overflow-hidden py-1">
//                               {MORE_LINKS.map((item, idx) => (
//                                 <button
//                                   key={item.name}
//                                   onClick={() => {
//                                     setMoreDropOpen(false);
//                                     navigate(item.link);
//                                   }}
//                                   className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-left hover:bg-indigo-50 transition-colors group ${
//                                     idx !== MORE_LINKS.length - 1 ? 'border-b border-slate-100' : ''
//                                   }`}
//                                 >
//                                   <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
//                                     {item.icon}
//                                   </span>
//                                   <span className="text-sm font-medium text-slate-700 group-hover:text-blue-900">
//                                     {item.name}
//                                   </span>
//                                   <ChevronRight size={12} className="ml-auto text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
//                                 </button>
//                               ))}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <button
//                       key={link}
//                       onClick={() => handleNavClick(link)}
//                       className="px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold text-black bg-transparent
//                         cursor-pointer border-none transition-all duration-150 whitespace-nowrap
//                         hover:text-blue-900 hover:bg-indigo-50"
//                     >
//                       {link}
//                     </button>
//                   )
//                 )}
//               </div>
//             )}

//             {/* Search Bar - Expands in navbar */}
//             {isSearchOpen ? (
//               <div className="flex-1 flex items-center gap-2 ml-4">
//                 <div className="relative flex-1 max-w-2xl">
//                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     ref={searchInputRef}
//                     type="text"
//                     placeholder="Search products, brands, or categories..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     className="w-full pl-12 pr-4 py-2.5 lg:py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm lg:text-base"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSearchClose}
//                   className="p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             ) : (
//               /* Right Side Actions - When search is closed */
//               <div className="flex items-center gap-2">
//                 {/* Search Button */}
//                 <button
//                   onClick={handleSearchOpen}
//                   className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm text-slate-600 transition-all"
//                 >
//                   <Search size={16} />
//                   <span className="hidden xl:inline">Search products...</span>
//                   <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] bg-white rounded border border-slate-300 ml-2">
//                     <span className="text-xs">⌘</span>K
//                   </kbd>
//                 </button>

//                 {/* Mobile Search Button */}
//                 <button
//                   onClick={handleSearchOpen}
//                   className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
//                 >
//                   <Search size={20} />
//                 </button>

//                 {/* CTA – desktop */}
//                 <button
//                   onClick={() => setOpen('quote')}
//                   className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
//                     text-white flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-200
//                     bg-gradient-to-r from-blue-900 to-sky-500 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   Get a Quote <ArrowRight size={15} />
//                 </button>

//                 {/* CTA – tablet */}
//                 <button
//                   onClick={() => setOpen('quote')}
//                   className="hidden sm:flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold
//                     text-white flex-shrink-0 border-none cursor-pointer
//                     bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
//                 >
//                   Quote <ArrowRight size={13} />
//                 </button>

//                 {/* Hamburger */}
//                 <button
//                   onClick={() => setMobileOpen(o => !o)}
//                   className={`lg:hidden p-2 rounded-xl border-none cursor-pointer transition-all text-blue-900 ml-1
//                     ${mobileOpen ? 'bg-indigo-50' : 'bg-transparent hover:bg-slate-100'}`}
//                   aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//                 >
//                   {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//                 </button>
//               </div>
//             )}
//           </div>
//         </motion.nav>

//         {/* Search Results Dropdown - Attached to navbar */}
//         <AnimatePresence>
//           {isSearchOpen && recommendations.length > 0 && (
//             <motion.div
//               data-search-container
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//               className="fixed left-0 right-0 z-[999] px-4 sm:px-10 lg:px-20"
//               style={{ top: TOP_BAR_H + (window.innerWidth >= 1024 ? 80 : window.innerWidth >= 640 ? 72 : 64) }}
//             >
//               <div className="max-w-2xl mx-auto lg:mx-0 lg:ml-auto lg:mr-[120px]">
//                 <div className="bg-white rounded-b-2xl border border-slate-200 shadow-xl border-t-0 overflow-hidden">
//                   {/* Header */}
//                   <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-b border-slate-100">
//                     <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
//                       {searchTerm.trim() ? 'Search Results' : 'Popular Products'}
//                     </span>
//                     {searchTerm.trim() && (
//                       <button
//                         onClick={handleSearchSubmit}
//                         className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
//                       >
//                         See all results <ArrowRight size={12} />
//                       </button>
//                     )}
//                   </div>

//                   {/* Results List */}
//                   <div className="max-h-[400px] overflow-y-auto p-2">
//                     {recommendations.map((product, idx) => (
//                       <motion.button
//                         key={product.link}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: idx * 0.03 }}
//                         onClick={() => handleSelectProduct(product)}
//                         className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
//                           selectedIndex === idx
//                             ? 'bg-blue-50 border-blue-200'
//                             : 'hover:bg-slate-50'
//                         }`}
//                       >
//                         <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-sky-50 flex items-center justify-center text-xl border border-blue-100 flex-shrink-0">
//                           {product.icon}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm font-semibold text-slate-800 truncate">
//                             {product.name}
//                           </p>
//                           <p className="text-xs text-slate-500 flex items-center gap-1">
//                             <span>{product.brand}</span>
//                             <span className="w-1 h-1 bg-slate-300 rounded-full" />
//                             <span>{product.category}</span>
//                           </p>
//                         </div>
//                         <ChevronRight size={14} className="text-slate-400" />
//                       </motion.button>
//                     ))}
//                   </div>

//                   {/* Quick Links when no search term */}
//                   {!searchTerm.trim() && (
//                     <div className="border-t border-slate-100 p-3 bg-slate-50">
//                       <div className="flex items-center gap-2 mb-2">
//                         <TrendingUp size={12} className="text-slate-400" />
//                         <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
//                           Quick Links
//                         </span>
//                       </div>
//                       <div className="flex flex-wrap gap-2">
//                         {['Analytical Balances', 'Chromatography', 'Centrifuges', 'Incubators'].map((item) => (
//                           <button
//                             key={item}
//                             onClick={() => {
//                               setSearchTerm(item);
//                               setTimeout(() => searchInputRef.current?.focus(), 100);
//                             }}
//                             className="px-3 py-1.5 bg-white text-slate-600 text-xs rounded-full border border-slate-200 hover:bg-slate-100 transition"
//                           >
//                             {item}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Products Dropdown */}
//       <AnimatePresence>
//         {dropOpen && !isSearchOpen && (
//           <motion.div
//             data-navbar
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             onMouseEnter={openDrop}
//             onMouseLeave={closeDrop}
//             className="fixed left-0 right-0 z-[999] flex justify-center px-4"
//             style={{ top: TOP_BAR_H + NAV_H + 8 }}
//           >
//             <div className="w-full max-w-[1000px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(15,35,86,0.18)] overflow-hidden">
//               {/* Header */}
//               <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f2356] to-[#2563eb]">
//                 <div>
//                   <p className="text-sm font-bold text-white tracking-wide">
//                     Product Catalogue
//                   </p>
//                   <p className="text-xs text-white/60 mt-0.5">
//                     Scientific & laboratory instruments
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => {
//                     setDropOpen(false);
//                     navigate('/products');
//                   }}
//                   className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white
//                     border border-white/25 bg-white/15 hover:bg-white/30 transition"
//                 >
//                   View All <ArrowRight size={13} />
//                 </button>
//               </div>

//               {/* BODY */}
//               <div className="flex max-h-[60vh]">
//                 {/* LEFT CATEGORY */}
//                 <div className="w-64 bg-slate-50 border-r border-slate-100 overflow-y-auto p-3">
//                   {Object.keys(CATEGORIES).map((cat) => {
//                     const isActive = activeCat === cat;
//                     return (
//                       <button
//                         key={cat}
//                         onClick={() => setActiveCat(cat)}
//                         onMouseEnter={() => setActiveCat(cat)}
//                         className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl mb-1 text-xs transition
//                           ${isActive
//                             ? "bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold"
//                             : "text-slate-600 hover:bg-white hover:text-blue-900"
//                           }`}
//                       >
//                         <span className="truncate">{cat}</span>
//                         <ChevronRight size={12} />
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* RIGHT PRODUCTS GRID */}
//                 <div className="flex-1 overflow-y-auto p-4">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeCat}
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3"
//                     >
//                       {(CATEGORIES[activeCat] || []).map((item) => (
//                         <button
//                           key={item.name}
//                           onClick={() => {
//                             setDropOpen(false);
//                             navigate(item.link);
//                           }}
//                           className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition text-left group"
//                         >
//                           <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-lg text-lg group-hover:bg-indigo-100">
//                             {item.icon}
//                           </div>
//                           <p className="text-xs font-semibold text-blue-900 flex-1">
//                             {item.name}
//                           </p>
//                           <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
//                         </button>
//                       ))}
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
//                 <span className="text-xs text-slate-500">
//                   Need help choosing the right instrument?
//                 </span>
//                 <button
//                   onClick={() => {
//                     setDropOpen(false);
//                     navigate('/contact');
//                   }}
//                   className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition"
//                 >
//                   Contact Expert
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ─────────── MOBILE DRAWER ─────────── */}
      // <AnimatePresence>
      //   {mobileOpen && (
      //     <>
      //       <motion.div
      //         key="overlay"
      //         initial={{ opacity: 0 }}
      //         animate={{ opacity: 1 }}
      //         exit={{ opacity: 0 }}
      //         onClick={() => setMobileOpen(false)}
      //         className="fixed inset-0 z-[900] bg-slate-900/40 backdrop-blur-sm"
      //         style={{ top: TOP_BAR_H + 64 }}
      //       />

      //       <motion.div
      //         key="drawer"
      //         initial={{ x: '100%' }}
      //         animate={{ x: 0 }}
      //         exit={{ x: '100%' }}
      //         transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      //         className="fixed right-0 bottom-0 w-[min(360px,100vw)] bg-white z-[950] overflow-y-auto"
      //         style={{ top: TOP_BAR_H + 64, boxShadow: '-6px 0 28px rgba(15,35,86,0.14)' }}
      //       >
      //         <nav>
      //           {NAV_LINKS.map(link =>
      //             link === 'Products' ? (
      //               <div key={link}>
      //                 <button
      //                   onClick={() => toggleMobileCat('products-top')}
      //                   className="flex items-center justify-between w-full px-5 py-4 bg-transparent
      //                     border-b border-slate-100 cursor-pointer text-sm text-blue-900 font-semibold text-left"
      //                 >
      //                   Products
      //                   <motion.span
      //                     animate={{ rotate: mobileExpanded['products-top'] ? 180 : 0 }}
      //                     transition={{ duration: 0.2 }}
      //                     className="flex items-center"
      //                   >
      //                     <ChevronDown size={16} className="text-slate-400" />
      //                   </motion.span>
      //                 </button>

      //                 <AnimatePresence>
      //                   {mobileExpanded['products-top'] && (
      //                     <motion.div
      //                       initial={{ height: 0, opacity: 0 }}
      //                       animate={{ height: 'auto', opacity: 1 }}
      //                       exit={{ height: 0, opacity: 0 }}
      //                       transition={{ duration: 0.22 }}
      //                       className="overflow-hidden"
      //                     >
      //                       {Object.entries(CATEGORIES).map(([cat, items]) => (
      //                         <div key={cat}>
      //                           <button
      //                             onClick={() => toggleMobileCat(cat)}
      //                             className="flex items-center justify-between w-full px-5 py-2.5
      //                               bg-slate-50 border-b border-slate-100 cursor-pointer
      //                               text-[11px] text-blue-600 font-bold tracking-widest uppercase text-left"
      //                           >
      //                             {cat}
      //                             <ChevronDown
      //                               size={11}
      //                               className={`text-sky-400 transition-transform duration-200 ${mobileExpanded[cat] ? 'rotate-180' : ''}`}
      //                             />
      //                           </button>

      //                           <AnimatePresence>
      //                             {mobileExpanded[cat] && (
      //                               <motion.div
      //                                 initial={{ height: 0, opacity: 0 }}
      //                                 animate={{ height: 'auto', opacity: 1 }}
      //                                 exit={{ height: 0, opacity: 0 }}
      //                                 transition={{ duration: 0.16 }}
      //                                 className="overflow-hidden"
      //                               >
      //                                 {items.map(item => (
      //                                   <button
      //                                     key={item.name}
      //                                     onClick={() => { setMobileOpen(false); navigate(item.link); }}
      //                                     className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
      //                                       border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
      //                                   >
      //                                     <span className="text-lg w-7 text-center flex-shrink-0">{item.icon}</span>
      //                                     <p className="text-xs font-semibold text-blue-900 leading-snug">{item.name}</p>
      //                                   </button>
      //                                 ))}
      //                               </motion.div>
      //                             )}
      //                           </AnimatePresence>
      //                         </div>
      //                       ))}
      //                     </motion.div>
      //                   )}
      //                 </AnimatePresence>
      //               </div>
      //             ) : link === 'More' ? (
      //               <div key={link}>
      //                 <button
      //                   onClick={() => toggleMobileCat('more-top')}
      //                   className="flex items-center justify-between w-full px-5 py-4 bg-transparent
      //                     border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
      //                     transition-all hover:bg-indigo-50 hover:text-blue-900"
      //                 >
      //                   More
      //                   <motion.span
      //                     animate={{ rotate: mobileExpanded['more-top'] ? 180 : 0 }}
      //                     transition={{ duration: 0.2 }}
      //                     className="flex items-center"
      //                   >
      //                     <ChevronDown size={16} className="text-slate-400" />
      //                   </motion.span>
      //                 </button>

      //                 <AnimatePresence>
      //                   {mobileExpanded['more-top'] && (
      //                     <motion.div
      //                       initial={{ height: 0, opacity: 0 }}
      //                       animate={{ height: 'auto', opacity: 1 }}
      //                       exit={{ height: 0, opacity: 0 }}
      //                       transition={{ duration: 0.22 }}
      //                       className="overflow-hidden"
      //                     >
      //                       {MORE_LINKS.map(item => (
      //                         <button
      //                           key={item.name}
      //                           onClick={() => { setMobileOpen(false); navigate(item.link); }}
      //                           className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
      //                             border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
      //                         >
      //                           <span className="text-lg w-7 text-center flex-shrink-0 text-slate-500">{item.icon}</span>
      //                           <p className="text-sm font-medium text-slate-700 leading-snug">{item.name}</p>
      //                         </button>
      //                       ))}
      //                     </motion.div>
      //                   )}
      //                 </AnimatePresence>
      //               </div>
      //             ) : (
      //               <button
      //                 key={link}
      //                 onClick={() => handleNavClick(link)}
      //                 className="flex items-center justify-between w-full px-5 py-4 bg-transparent
      //                   border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
      //                   transition-all hover:bg-indigo-50 hover:text-blue-900"
      //               >
      //                 {link} <ChevronRight size={15} className="text-slate-400" />
      //               </button>
      //             )
      //           )}
      //         </nav>

      //         <div className="p-4">
      //           <button
      //             onClick={() => { setMobileOpen(false); navigate('/contact'); }}
      //             className="w-full py-3.5 rounded-xl text-sm font-semibold text-white border-none cursor-pointer
      //               bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
      //           >
      //             Get a Quote
      //           </button>
      //         </div>

      //         <div className="mx-4 mb-5 p-4 bg-slate-50 rounded-xl border border-slate-200">
      //           <div className="flex items-center gap-3 mb-2.5">
      //             <Phone size={14} className="text-sky-400 flex-shrink-0" />
      //             <span className="text-xs text-slate-600">+91 98765 43210</span>
      //           </div>
      //           <div className="flex items-center gap-3">
      //             <Mail size={14} className="text-sky-400 flex-shrink-0" />
      //             <span className="text-xs text-slate-600 break-all">info@smartlabtech.in</span>
      //           </div>
      //         </div>
      //       </motion.div>
      //     </>
      //   )}
      // </AnimatePresence>

//       <Modal open={open === 'quote'} onClose={close}>
//         <QuoteForm onClose={close} />
//       </Modal>

//       {/* Spacer */}
//       <div className="h-[calc(42px+64px)] sm:h-[calc(42px+72px)] lg:h-[calc(42px+80px)]" />
//     </>
//   );
// }

// Navbar.js - Fixed Search Input
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, ChevronRight, ArrowRight, 
  Phone, Mail, HelpCircle, BookOpen, FileText, Briefcase,
  Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../modal/Modal';
import { QuoteForm } from '../modal/QuoteForm';
import { CATEGORIES } from '../data/Categories';
import SearchBar from './SearchBar';

const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact', 'More'];

const MORE_LINKS = [
  { name: 'Support', icon: <HelpCircle size={14} />, link: '/support' },
  { name: 'Resources', icon: <BookOpen size={14} />, link: '/resources' },
  { name: 'Blogs', icon: <FileText size={14} />, link: '/blogs' },
  { name: 'Career', icon: <Briefcase size={14} />, link: '/career' },
];

const TOP_BAR_H = 42;
const NAV_H = 80;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [moreDropOpen, setMoreDropOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('Weighing & Measurement');
  const [mobileExpanded, setMobileExpanded] = useState({});
  
  // Search states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchBarRef = useRef(null);
  const searchInputRef = useRef(null);

  const [open, setOpen] = useState(null);
  const close = () => setOpen(null);

  const timerRef = useRef(null);
  const moreTimerRef = useRef(null);
  const moreBtnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (!e.target.closest('[data-navbar]') && !e.target.closest('[data-search-container]')) {
        setDropOpen(false);
        setMoreDropOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Keyboard shortcut for search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        setDropOpen(false);
        setMoreDropOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
      if (window.innerWidth < 1024) {
        setDropOpen(false);
        setMoreDropOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const openDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(timerRef.current); setDropOpen(true); } };
  const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 150); };
  
  const openMoreDrop = () => { if (window.innerWidth >= 1024) { clearTimeout(moreTimerRef.current); setMoreDropOpen(true); } };
  const closeMoreDrop = () => { moreTimerRef.current = setTimeout(() => setMoreDropOpen(false), 150); };

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    setDropOpen(false);
    setMoreDropOpen(false);
    setSearchTerm('');
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setDropOpen(false);
    setMoreDropOpen(false);
    setIsSearchOpen(false);

    const currentPath = window.location.pathname;

    if (link === 'Home') {
      if (currentPath === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    } else if (link === 'About') {
      if (currentPath === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/about');
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    } else if (link === 'Products') {
      if (currentPath === '/products') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/products');
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    } else if (link === 'Services') {
      if (currentPath === '/services') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/services');
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    } else if (link === 'Contact') {
      if (currentPath === '/contact') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/contact');
        setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
      }
    } else {
      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div data-navbar>
        <motion.nav
          initial={{ y: -88, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`fixed left-0 right-0 z-[1000] 
            px-4 sm:px-10 lg:px-20
            h-[64px] sm:h-[72px] lg:h-[80px]
            transition-all duration-300
            ${scrolled
              ? 'bg-white/98 border-b border-slate-200 shadow-[0_4px_24px_rgba(15,35,86,0.10)]'
              : 'bg-white/95 border-b border-slate-200/50'
            } backdrop-blur-xl`}
          style={{ top: TOP_BAR_H }}
        >
          <div className="h-full flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-2.5 sm:gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0 transition-all duration-300 ${
                isSearchOpen ? 'lg:flex hidden' : 'flex'
              }`}
            >
              <img
                src="/logo.png"
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

            {/* Desktop nav links - Hidden when search is open */}
            {!isSearchOpen && (
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
                  ) : link === 'More' ? (
                    <div key={link} className="relative" ref={moreBtnRef}>
                      <button
                        onMouseEnter={openMoreDrop}
                        onMouseLeave={closeMoreDrop}
                        className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-semibold
                          transition-all duration-150 cursor-pointer border-none
                          ${moreDropOpen
                            ? 'text-blue-900 bg-indigo-50'
                            : 'text-black bg-transparent hover:text-blue-900 hover:bg-indigo-50'
                          }`}
                      >
                        More
                        <motion.span animate={{ rotate: moreDropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
                          <ChevronDown size={15} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {moreDropOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            onMouseEnter={openMoreDrop}
                            onMouseLeave={closeMoreDrop}
                            className="absolute right-0 z-[999] pt-2"
                            style={{ top: '100%' }}
                          >
                            <div className="w-48 bg-white rounded-xl border border-slate-200 shadow-[0_12px_40px_rgba(15,35,86,0.15)] overflow-hidden py-1">
                              {MORE_LINKS.map((item, idx) => (
                                <button
                                  key={item.name}
                                  onClick={() => {
                                    setMoreDropOpen(false);
                                    navigate(item.link);
                                  }}
                                  className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-left hover:bg-indigo-50 transition-colors group ${
                                    idx !== MORE_LINKS.length - 1 ? 'border-b border-slate-100' : ''
                                  }`}
                                >
                                  <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                                    {item.icon}
                                  </span>
                                  <span className="text-sm font-medium text-slate-700 group-hover:text-blue-900">
                                    {item.name}
                                  </span>
                                  <ChevronRight size={12} className="ml-auto text-slate-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
            )}

            {/* Search Bar Container */}
            <div 
              ref={searchBarRef}
              className={`${isSearchOpen ? 'flex-1 flex items-center gap-2 ml-4' : ''}`}
            >
              {isSearchOpen ? (
                <>
                  <div className="relative flex-1 max-w-2xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search products, brands, or categories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchSubmit();
                        } else if (e.key === 'Escape') {
                          handleSearchClose();
                        }
                      }}
                      className="w-full pl-12 pr-4 py-2.5 lg:py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm lg:text-base"
                    />
                  </div>
                  <button
                    onClick={handleSearchClose}
                    className="p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                  >
                    <X size={20} />
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSearchOpen}
                    className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm text-slate-600 transition-all"
                  >
                    <Search size={16} />
                    <span className="hidden xl:inline">Search products...</span>
                    <span className="xl:hidden">Search...</span>
                  </button>

                  <button
                    onClick={handleSearchOpen}
                    className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
                  >
                    <Search size={20} />
                  </button>

                  <button
                    onClick={() => setOpen('quote')}
                    className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                      text-white flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-200
                      bg-gradient-to-r from-blue-900 to-sky-500 shadow-md hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Get a Quote <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => setOpen('quote')}
                    className="hidden sm:flex lg:hidden items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold
                      text-white flex-shrink-0 border-none cursor-pointer
                      bg-gradient-to-r from-blue-900 to-sky-500 shadow-md"
                  >
                    Quote <ArrowRight size={13} />
                  </button>

                  <button
                    onClick={() => setMobileOpen(o => !o)}
                    className={`lg:hidden p-2 rounded-xl border-none cursor-pointer transition-all text-blue-900 ml-1
                      ${mobileOpen ? 'bg-indigo-50' : 'bg-transparent hover:bg-slate-100'}`}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.nav>

        {/* Search Bar Component - Pass searchTerm and setSearchTerm */}
        <SearchBar 
          isOpen={isSearchOpen} 
          onClose={handleSearchClose} 
          searchBarRef={searchBarRef}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* Products Dropdown */}
        <AnimatePresence>
          {dropOpen && !isSearchOpen && (
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
              <div className="w-full max-w-[1000px] bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(15,35,86,0.18)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#0f2356] to-[#2563eb]">
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">Product Catalogue</p>
                    <p className="text-xs text-white/60 mt-0.5">Scientific & laboratory instruments</p>
                  </div>
                  <button
                    onClick={() => { setDropOpen(false); navigate('/products'); }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/25 bg-white/15 hover:bg-white/30 transition"
                  >
                    View All <ArrowRight size={13} />
                  </button>
                </div>

                {/* BODY */}
                <div className="flex max-h-[60vh]">
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
                            <p className="text-xs font-semibold text-blue-900 flex-1">{item.name}</p>
                            <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 transition" />
                          </button>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
                  <span className="text-xs text-slate-500">Need help choosing the right instrument?</span>
                  <button
                    onClick={() => { setDropOpen(false); navigate('/contact'); }}
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold border border-blue-400 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Contact Expert
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Drawer - abbreviated for brevity */}
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
                  ) : link === 'More' ? (
                    <div key={link}>
                      <button
                        onClick={() => toggleMobileCat('more-top')}
                        className="flex items-center justify-between w-full px-5 py-4 bg-transparent
                          border-b border-slate-100 cursor-pointer text-sm text-slate-700 font-medium text-left
                          transition-all hover:bg-indigo-50 hover:text-blue-900"
                      >
                        More
                        <motion.span
                          animate={{ rotate: mobileExpanded['more-top'] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ChevronDown size={16} className="text-slate-400" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileExpanded['more-top'] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            {MORE_LINKS.map(item => (
                              <button
                                key={item.name}
                                onClick={() => { setMobileOpen(false); navigate(item.link); }}
                                className="flex items-center gap-3 w-full px-6 py-3 bg-transparent
                                  border-b border-slate-50 cursor-pointer text-left hover:bg-indigo-50 transition-colors"
                              >
                                <span className="text-lg w-7 text-center flex-shrink-0 text-slate-500">{item.icon}</span>
                                <p className="text-sm font-medium text-slate-700 leading-snug">{item.name}</p>
                              </button>
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
                  onClick={() => { setMobileOpen(false); navigate('/contact'); }}
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

      <Modal open={open === 'quote'} onClose={close}>
        <QuoteForm onClose={close} />
      </Modal>

      <div className="h-[calc(42px+64px)] sm:h-[calc(42px+72px)] lg:h-[calc(42px+80px)]" />
    </>
  );
}