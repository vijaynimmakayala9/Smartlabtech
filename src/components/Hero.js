import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import analytics from "../assets/analytical.jpg";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    headline: "Advanced Laboratory Equipment",
    sub: "From research benches to industrial floors — precision instruments that define scientific excellence.",
    img: analytics,
    badge: "ISO 9001:2015 Certified",
  },
  {
    headline: "Precision Scientific Instruments",
    sub: "Analytical tools engineered for accuracy. Trusted by leading research institutes and pharma companies.",
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80",
    badge: "Serving 500+ Institutions",
  },
  {
    headline: "Reliable Research Solutions",
    sub: "Two decades of expertise in sourcing, installing, and supporting scientific equipment across India.",
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
    <section id={id} className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            {slide.badge}
          </div>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg sm:text-xl mb-2">
            Looking for
          </p>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={current}
              initial={{ x: direction > 0 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -60 : 60, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4"
            >
              <span className="block">{firstWord}</span>
              <span className="text-blue-600">{restWords}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <p className="text-slate-500 max-w-md mb-6 text-sm sm:text-base leading-relaxed">
            {slide.sub}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => smoothScrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-900 to-sky-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Quote <ArrowRight size={16} />
            </button>

            <button
              onClick={() => navigate('/products')}
              className="px-6 py-3 rounded-xl border border-slate-300 text-blue-900 text-sm font-semibold hover:bg-blue-50 transition"
            >
              Browse Products
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative">

            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slide.img}
                alt=""
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-sky-500"
                      : "w-2 bg-white/50"
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