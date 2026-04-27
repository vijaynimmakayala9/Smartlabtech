import { useEffect, useRef, useCallback } from "react";

import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import About from '../components/About.js';
import Journey from '../components/Journey.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import Testimonials from '../components/Testinomials.js';

export default function Home() {
  const isAnimating = useRef(false);
  const rafRef = useRef(null);

  const smoothScroll = useCallback((to, duration = 900) => {
    // Cancel any in-progress animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // Small delay to ensure clean state
    requestAnimationFrame(() => {
      const start = window.scrollY;
      const change = to - start;
      
      if (Math.abs(change) < 1) {
        isAnimating.current = false;
        return;
      }

      // Smoother easing function
      const easeInOutCubic = (t) => {
        return t < 0.5 
          ? 4 * t * t * t 
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      let startTime = null;
      isAnimating.current = true;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo({
          top: start + change * easedProgress,
          behavior: 'auto' // Use 'auto' instead of 'instant' for compatibility
        });

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure final position is exact
          window.scrollTo({
            top: to,
            behavior: 'auto'
          });
          isAnimating.current = false;
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    });
  }, []);

  // Intro bounce — scrolls down then back to top
  useEffect(() => {
    const timer = setTimeout(() => {
      smoothScroll(400, 800);
      setTimeout(() => smoothScroll(0, 900), 1000); // Increased delay slightly
    }, 400);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        isAnimating.current = false;
      }
    };
  }, [smoothScroll]);

  // Hash-based smooth navigation
  useEffect(() => {
    const handleHashChange = (e) => {
      const hash = window.location.hash;
      if (!hash) return;
      
      e?.preventDefault();

      const element = document.querySelector(hash);
      if (element) {
        const offset = 80;
        const pos = element.getBoundingClientRect().top + window.scrollY - offset;
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          smoothScroll(pos, 900);
        }, 50);
      }
    };

    // Handle initial hash on load
    const handleInitialHash = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const offset = 80;
          const pos = element.getBoundingClientRect().top + window.scrollY - offset;
          setTimeout(() => {
            smoothScroll(pos, 900);
          }, 300); // Longer delay for initial load
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash
    if (window.location.hash) {
      handleInitialHash();
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [smoothScroll]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Journey id="journey" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
}