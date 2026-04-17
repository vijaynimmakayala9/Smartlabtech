import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  FaAward, FaUsers, FaCogs, FaCheckCircle, 
  FaFlask, FaMicroscope, FaTrophy, FaHandshake
} from "react-icons/fa";
import { ArrowRight, Target, Eye } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ─── Google Fonts (only font import, no custom CSS classes) ─────────── */
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
  `}</style>
);

const coreValues = [
  { icon: FaAward, title: "Quality First", desc: "We believe in delivering only the highest quality products and solutions." },
  { icon: FaUsers, title: "Customer Focus", desc: "Customer satisfaction drives every decision we make." },
  { icon: FaFlask, title: "Innovation", desc: "We bring advanced scientific tools and cutting-edge solutions." },
  { icon: FaCogs, title: "Reliability", desc: "Trusted services and long-term partnerships you can count on." },
];

const whyUs = [
  "Wide range of laboratory equipment",
  "Strong nationwide service network",
  "Experienced technical support team",
  "High-quality and certified products",
  "Competitive pricing",
  "Reliable after-sales service"
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

const AboutPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <>
      <FontLink />
      <Navbar />

      {/* Hero Section with Laboratory Background Image - Centered Content */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: 'clamp(580px, 85vh, 820px)' }}>
        {/* Parallax background image - Modern laboratory image */}
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Modern Laboratory"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-center items-center text-center h-full"
          style={{ paddingTop: 'clamp(80px,12vw,140px)', paddingBottom: 'clamp(60px,10vw,120px)' }}>

          {/* Eyebrow - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-sky-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-sky-300" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Our Story
            </span>
            <div className="w-8 h-px bg-sky-400" />
          </motion.div>

          {/* Headline with gradient text - Centered */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          {/* Subtext - Centered */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-white/80 text-center mx-auto" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Delivering high-quality laboratory equipment and scientific solutions with innovation, precision, and trust.
          </motion.p>

          {/* CTA row - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href="/contact"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get in Touch <ArrowRight size={15} />
            </a>
            <a
              href="/category"
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-white/20 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Products <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Company Overview
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Who We Are
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Smart Labtech is a leading supplier of laboratory analytical, biotechnological, environmental, microscopic, and weighing equipment. We provide high-quality, time-tested products sourced from globally renowned manufacturers.
                </p>
                <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Headquartered in Hyderabad, we serve customers across India with a strong distribution and service network. Our solutions support research, quality control, and scientific innovation in multiple industries.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] rounded-3xl blur-xl pointer-events-none" />
                <img
                  src="https://images.pexels.com/photos/256263/pexels-photo-256263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Laboratory"
                  className="relative rounded-3xl w-full object-cover shadow-xl border border-white/70"
                  style={{ height: "380px" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] py-16 border-y border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <Reveal>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] text-blue-700 text-xs font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <Target size={12} /> Mission
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
                <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  To deliver innovative, customer-oriented laboratory solutions that enhance research capabilities and scientific advancements while maintaining the highest standards of quality and reliability.
                </p>
              </div>
            </Reveal>

            {/* Vision Card */}
            <Reveal delay={0.2}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-lg hover:shadow-xl transition-all">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[linear-gradient(135deg,rgba(15,35,86,0.1)_0%,rgba(30,58,138,0.08)_50%,rgba(14,165,233,0.1)_100%)] text-blue-700 text-xs font-semibold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <Eye size={12} /> Vision
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
                <p className="text-slate-500 leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  To be a trusted leader in laboratory solutions through continuous innovation, excellent customer service, and strong commitment to scientific progress.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                What Drives Us
              </span>
              <div className="w-8 h-px bg-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Values
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((val, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200">
                  <div className="w-14 h-14 rounded-xl bg-[linear-gradient(135deg,rgba(15,35,86,0.15)_0%,rgba(30,58,138,0.1)_50%,rgba(14,165,233,0.15)_100%)] flex items-center justify-center mx-auto mb-4">
                    <val.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-700 text-base mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{val.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[linear-gradient(135deg,rgba(15,35,86,0.05)_0%,rgba(30,58,138,0.03)_50%,rgba(14,165,233,0.05)_100%)] py-20 border-y border-sky-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-blue-600" />
                  <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-blue-600" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Our Edge
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose{' '}
                  <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">Us</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  We combine technical expertise with a customer-first approach to deliver laboratory solutions that truly make a difference.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-3">
              {whyUs.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="bg-white/80 backdrop-blur-sm flex items-center gap-3 rounded-xl px-4 py-3.5 border border-slate-100 hover:border-blue-200 transition-all duration-200 hover:shadow-md">
                    <FaCheckCircle className="text-blue-500 text-sm flex-shrink-0" />
                    <span className="text-slate-600 text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Reveal>
        <div className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
            <div className="rounded-3xl p-12 md:p-16 text-center bg-[linear-gradient(135deg,rgba(15,35,86,0.95)_0%,rgba(30,58,138,0.9)_50%,rgba(14,165,233,0.95)_100%)] shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Let's Collaborate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Work With Us?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto text-sm leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Get in touch with our experts for the best laboratory solutions tailored to your needs.
              </p>
              <a
                href="/contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-blue-900 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-blue-100 before:to-transparent before:transition-transform before:duration-500 hover:before:translate-x-0"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Contact Us <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      <Footer />
    </>
  );
};

export default AboutPage;