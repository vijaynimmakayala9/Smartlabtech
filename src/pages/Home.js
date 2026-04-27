import { useEffect, useState } from "react";

import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import About from '../components/About.js';
import Journey from '../components/Journey.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import Testimonials from '../components/Testinomials.js';
import ScrollDots from '../views/ScrollDots.js';

export default function Home() {
  const [isScrolling, setIsScrolling] = useState(false);

  // Smooth scroll with cubic-bezier easing for natural feel
  const smoothScroll = (to, duration = 1000) => {
    const start = window.scrollY;
    const change = to - start;
    let startTime = null;

    // Custom easing: cubic-bezier(0.25, 0.46, 0.45, 0.94) - smooth deceleration
    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Using easeOutCubic for smooth landing
      const eased = easeOutCubic(progress);
      window.scrollTo(0, start + change * eased);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    // Gentle intro animation - subtle downward then upward motion
    const startIntroAnimation = () => {
      // Step 1: Scroll down slightly (280px) to create subtle motion
      smoothScroll(600, 600);

      // Step 2: After slight delay, scroll back up smoothly
      setTimeout(() => {
        smoothScroll(0, 600);
      }, 650);
    };

    // Start intro animation after page load
    const timer = setTimeout(startIntroAnimation, 400);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section helper (for navigation)
  useEffect(() => {
    const handleHashChange = (e) => {
      const hash = window.location.hash;
      if (hash) {
        e?.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // Navbar height offset
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          smoothScroll(offsetPosition, 800);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Check initial hash
    if (window.location.hash) {
      setTimeout(() => handleHashChange(), 100);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Journey id="journey" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Footer id="footer" />
      {/* <ScrollDots /> */}
    </div>
  );
}