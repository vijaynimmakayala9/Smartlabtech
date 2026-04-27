import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import analytics from "../assets/analytical.jpg";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    headline: "Advanced Laboratory Equipment",
    sub: "looking for Advanced Laboratory Equipment you've come to the right place!",
    img: analytics,
    badge: "ISO 9001:2015 Certified",
  },
  {
    headline: "Precision Scientific Instruments",
    sub: "looking for Precision Scientific Instruments you've come to the right place!",
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80",
    badge: "Serving 500+ Institutions",
  },
  {
    headline: "Reliable Research Solutions",
    sub: "looking for Reliable Research Solutions you've come to the right place!",
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    badge: "20+ Years of Trust",
  },
];

const smoothScrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero({ id }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [displayText, setDisplayText] = useState("");

  const intervalRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const go = (i) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    let i = 0;
    const text = SLIDES[current].headline;
    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(typing);
    }, 40);

    return () => clearInterval(typing);
  }, [current]);

  const slide = SLIDES[current];

  const words = displayText.split(" ");
  const firstWord = words[0];
  const restWords = words.slice(1).join(" ");

  return (
    <section
      id={id}
      className="relative vh-100 flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background blobs — hidden on very small screens to reduce noise */}
      <div className="hidden sm:block absolute -top-32 -right-32 w-64 h-64 md:w-[400px] md:h-[400px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-24 -left-24 w-48 h-48 md:w-[300px] md:h-[300px] bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 sm:py-20 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* ── LEFT CONTENT ── */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 mb-4 sm:mb-5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse shrink-0" />
            {slide.badge}
          </div>

          {/* Eyebrow text */}
          <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
            Looking for
          </p>

          {/* Animated headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3 sm:mb-4"
            >
              <span className="block">{firstWord}</span>
              <span className="text-blue-600">{restWords}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <p className="text-slate-500 max-w-xs sm:max-w-sm md:max-w-md mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
            {slide.sub}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row flex-wrap gap-3 w-full xs:w-auto">
            <button
              onClick={() => smoothScrollTo("contact")}
              className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 rounded-xl bg-gradient-to-r from-blue-900 to-sky-500 text-white text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150 w-full xs:w-auto"
            >
              Get Quote <ArrowRight size={16} />
            </button>

            <button
              onClick={() => navigate("/products")}
              className="flex items-center justify-center px-5 py-3 sm:px-6 rounded-xl border border-slate-300 text-blue-900 text-sm font-semibold hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 w-full xs:w-auto"
            >
              Browse Products
            </button>
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="relative w-full order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-xl w-full relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slide.img}
                alt={slide.headline}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-2 z-10">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current
                      ? "w-6 bg-sky-500"
                      : "w-2 bg-white/60 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}