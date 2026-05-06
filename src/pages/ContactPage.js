import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube 
} from "react-icons/fa";
import { ArrowRight, Send } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Customer Support"
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
              We're Here to Help
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
            Contact{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Us
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
            Have questions or need assistance? We're here to help you. Reach out to us anytime.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="tel:+914023774310"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <FaPhoneAlt size={14} /> Call Us Now
            </a>
            <a
              href="mailto:info@smartlabtech.net"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <FaEnvelope size={14} /> Send Email
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT - Contact Info */}
          <div className="space-y-5">
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Reach Out
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get In Touch
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our team is ready to assist you with any queries about our products and services.
              </p>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.1}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Phone</h4>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>+91 40 23 774310</p>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>+91 98484 44237</p>
                </div>
              </div>
            </Reveal>

            {/* Email */}
            <Reveal delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Email</h4>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>info@smartlabtech.net</p>
                  <p className="text-slate-500 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>support@smartlabtech.net</p>
                </div>
              </div>
            </Reveal>

            {/* Address */}
            <Reveal delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm flex items-start gap-4 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-500 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-slate-700 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Address</h4>
                  <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Plot #74 and #75/B, Sy #735, Phase-II,<br />
                    S.V. Co-operative Industrial Estate,<br />
                    Balanagar, Hyderabad - 500 037, Telangana, India.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Business Hours */}
            <Reveal delay={0.4}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <FaClock className="text-blue-500 text-sm" />
                  <h4 className="font-semibold text-sm text-slate-700" style={{ fontFamily: "'Outfit', sans-serif" }}>Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Monday – Saturday</span>
                    <span className="text-blue-600 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full text-xs border border-blue-200" style={{ fontFamily: "'Outfit', sans-serif" }}>9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500" style={{ fontFamily: "'Outfit', sans-serif" }}>Sunday</span>
                    <span className="text-slate-400 text-xs" style={{ fontFamily: "'Outfit', sans-serif" }}>Closed</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.5}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-100">
                <h4 className="font-semibold text-sm text-slate-700 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Follow Us</h4>
                <div className="flex gap-3">
                  {[FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] flex items-center justify-center hover:bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] transition-all duration-300 group">
                      <Icon size={16} className="text-blue-500 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT - Contact Form */}
          <Reveal delay={0.2}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-slate-100 shadow-lg">
              <h3 className="text-xl font-bold mb-1 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Send a Message</h3>
              <p className="text-slate-500 text-sm mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>We'll respond within 24 hours on business days.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  required
                />
                <button
                  type="submit"
                  className="relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Map Section */}
      <Reveal>
        <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20 pb-20">
          <div className="rounded-3xl overflow-hidden border border-slate-200 h-[380px] relative shadow-lg">
            <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl ring-1 ring-inset ring-slate-200/50" />
            <iframe
              title="SmartLabtech Location"
              src="https://maps.google.com/maps?q=Balanagar+Hyderabad+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
};

export default ContactPage;