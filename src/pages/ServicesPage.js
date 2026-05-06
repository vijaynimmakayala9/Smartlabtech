import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  FaTools, FaCogs, FaWrench, FaFlask, FaTruck, FaCheckCircle,
} from "react-icons/fa";
import { ArrowRight, Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

const services = [
  { label: "Installation & Commissioning", icon: FaCogs, desc: "Expert setup and system commissioning at your site." },
  { label: "On-site Repair", icon: FaWrench, desc: "Fast, reliable repairs without disrupting your workflow." },
  { label: "Calibration & Testing", icon: FaFlask, desc: "Precision calibration to national and international standards." },
  { label: "Annual Maintenance Contract", icon: FaTools, desc: "Comprehensive AMC plans for uninterrupted operations." },
  { label: "IQ / OQ Validation", icon: FaCheckCircle, desc: "Complete installation and operational qualification support." },
  { label: "Spare Parts Support", icon: FaCogs, desc: "Genuine spare parts delivered swiftly across India." },
  { label: "Customization", icon: FaWrench, desc: "Tailored solutions designed around your specific needs." },
  { label: "Equipment Shifting / Re-location", icon: FaTruck, desc: "Safe and professional equipment relocation services." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Support Available" },
  { value: "Pan India", label: "Service Network" },
];

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ServicesPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    designation: '',
    contactNumber: '',
    email: '',
    instrumentType: '',
    modelNumber: '',
    serialNumber: '',
    contractType: '',
    problem: ''
  });

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Service request submitted successfully! Our team will contact you shortly.');
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200";

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section with Background Image */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        {/* Parallax background image */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Technical Support"
            className="w-full h-full object-cover object-center scale-110"
          />
          {/* Hero overlay with premium gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,35,86,0.88)_0%,rgba(30,58,138,0.72)_50%,rgba(14,165,233,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#0f2356_0%,transparent_55%)]" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />

        {/* Blue radial accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none bg-gradient-to-bl from-sky-500/10 to-transparent rounded-full blur-3xl" />

        {/* Content - Centered */}
        <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center text-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Expert Support Across India
            </span>
            <div className="w-8 h-px bg-sky-400" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-white/80 text-center mx-auto" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Professional installation, maintenance, and calibration services to ensure optimal performance and longevity of your laboratory equipment.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto w-full"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                <div className="text-white/60 text-xs tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Who We Are
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Factory-Trained Technicians,<br />
                  <span className="text-slate-400 font-light">Nationwide Reach</span>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  SmartLabtech offers services designed to meet your needs from installation to maintenance and calibration, ensuring full repair coverage and minimal downtime. Our team of experienced, factory-trained technicians is committed to supporting your service needs across India.
                </p>
                <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  We provide nationwide service support with expert engineers available anytime. Our extensive customer service network ensures fast and reliable assistance wherever you are.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3">
                {["ISO-certified service protocols", "Dedicated regional service engineers", "Same-day response for critical issues", "Documented service reports for every visit"].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm flex items-center gap-4 rounded-xl px-5 py-4 border border-slate-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-slate-600 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What We Offer
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service Catalogue
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center mb-4 group-hover:bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] transition-all duration-300">
                    <service.icon size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-slate-700 font-semibold text-sm mb-2 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{service.label}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Installation & Training", body: "Begins with proper installation, system qualification, and comprehensive user training for your team." },
              { step: "02", title: "Routine Maintenance", body: "Scheduled preventive maintenance and calibration to maintain peak instrument performance year-round." },
              { step: "03", title: "Long-term Support", body: "AMC plans and rapid on-site repair to minimise downtime and extend the life of your equipment." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors duration-300">
                  <span className="text-[11px] text-blue-500 font-bold tracking-widest block mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.step}</span>
                  <h3 className="text-slate-700 font-semibold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] py-20">
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/80 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-blue-600" />
                    <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Always Available
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-5 leading-tight text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                    When You Need Professional Support
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Our team provides technical guidance and quick access to spare parts. If issues arise, we ensure prompt support and logistics management to minimize downtime and keep your lab running.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-3">
                {["24/7 Helpdesk", "Genuine Spare Parts", "Pan India Coverage", "Express Dispatch"].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-4 text-center border border-slate-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md">
                      <FaCheckCircle className="text-blue-500 mx-auto mb-2 text-sm" />
                      <span className="text-slate-600 text-xs font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Request a Visit
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Service Call Request
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Fill in the details below and our service team will get back to you within 24 hours.
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-slate-100 shadow-lg">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Details / Location"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation / Department"
                  value={formData.designation}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="instrumentType"
                  placeholder="Instrument Type"
                  value={formData.instrumentType}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="modelNumber"
                  placeholder="Model Number"
                  value={formData.modelNumber}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="serialNumber"
                  placeholder="Serial Number"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="contractType"
                  placeholder="Contract Type / PO Number"
                  value={formData.contractType}
                  onChange={handleChange}
                  className={`${inputClass} md:col-span-2`}
                />
                <textarea
                  name="problem"
                  rows="4"
                  placeholder="Nature of Problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className={`${inputClass} md:col-span-2 resize-none`}
                  required
                />
                <button
                  type="submit"
                  className="relative overflow-hidden md:col-span-2 text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Submit Service Request
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;