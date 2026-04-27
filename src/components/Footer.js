import { FlaskConical, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FOOTER_LINKS = {
  Products: ['Microscopes', 'Spectrometers', 'Centrifuges', 'Balances', 'Incubators', 'Smart Lab Systems'],
  Services: ['Equipment Supply', 'Installation & Calibration', 'Maintenance (AMC)', 'Scientific Consulting', 'Quality Validation', 'Training Programs'],
  Company: ['About Us', 'Our Journey', 'Careers', 'News & Events', 'Partners', 'CSR Initiatives'],
  Support: ['Technical Support', 'Documentation', 'FAQs', 'Request a Demo', 'Get a Quote', 'Contact Us'],
};

export default function Footer({ id }) {
  return (
    <footer id={id} className="bg-slate-900 text-slate-200 pt-[72px]">
      <div className="max-w-9xl mx-auto px-4 sm:px-8 lg:px-20">

        {/* Newsletter bar */}
        <div className="rounded-2xl p-6 sm:p-9 flex flex-wrap items-center justify-between gap-5 mb-14"
          style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0369a1)', boxShadow: '0 8px 32px rgba(30,58,138,0.35)' }}>
          <div>
            <h3 className="font-display font-bold text-white mb-1.5" style={{ fontSize: 'clamp(18px,2vw,24px)' }}>
              Stay Updated with SmartLabTech
            </h3>
            <p className="text-sm text-white/65 font-body">Subscribe for product launches, technical insights, and industry news.</p>
          </div>
          <div className="flex min-w-[280px] sm:min-w-[320px]">
            <input
              placeholder="Enter your email..."
              className="flex-1 bg-white/10 border border-white/20 border-r-0 rounded-l-lg text-white placeholder-white/50 px-4 py-3 text-sm font-body outline-none"
            />
            <button
              className="flex items-center gap-1.5 px-5 py-3 rounded-r-lg bg-white text-blue-900 text-sm font-bold font-body border-none cursor-pointer whitespace-nowrap transition-colors"
              onMouseEnter={e => e.currentTarget.style.background = '#e0f2fe'}
              onMouseLeave={e => e.currentTarget.style.background = '#fff'}
            >
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">

          {/* Brand col — spans 2 on lg */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="SmartLabTech"
                className="w-9 h-9 object-contain rounded-lg"
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div className="hidden w-9 h-9 items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}>
                <FlaskConical size={18} color="#fff" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                SmartLab<span className="text-sky-400">Tech</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-body mb-5">
              Precision instruments and scientific solutions for research, pharma, and education since 2004.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5 mb-6">
              {[FaLinkedin, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <button key={i}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/7 flex items-center justify-center cursor-pointer transition-all"
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,165,233,0.2)'; e.currentTarget.style.borderColor = '#0ea5e9'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <Icon size={16} color="#94a3b8" />
                </button>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {[[Phone, '+91 40 6789 1234'], [Mail, 'info@smartlabtech.in'], [MapPin, 'Hyderabad, Telangana']].map(([Icon, text]) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={13} color="#38bdf8" className="flex-shrink-0" />
                  <span className="text-sm text-slate-400 font-body">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold text-white tracking-widest uppercase mb-4 font-body">{title}</p>
              <ul className="flex flex-col gap-2.5 list-none">
                {links.map(link => (
                  <li key={link}>
                    <button
                      className="bg-transparent border-none cursor-pointer p-0 text-sm text-slate-400 font-body text-left transition-colors duration-200"
                      onMouseEnter={e => e.target.style.color = '#38bdf8'}
                      onMouseLeave={e => e.target.style.color = '#94a3b8'}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-wrap justify-between items-center gap-3">
          <span className="text-sm text-slate-500 font-body">© 2026 SmartLabTech Pvt. Ltd. All rights reserved.</span>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <button key={link}
                className="bg-transparent border-none cursor-pointer text-xs text-slate-500 font-body transition-colors duration-200"
                onMouseEnter={e => e.target.style.color = '#38bdf8'}
                onMouseLeave={e => e.target.style.color = '#475569'}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}