import Navbar  from '../components/Navbar.js';
import Hero    from '../components/Hero.js';
import About   from '../components/About.js';
import Services from '../components/Services.js';
import Journey  from '../components/Journey.js';
import Contact  from '../components/Contact.js';
import Footer   from '../components/Footer.js';
import Testimonials from '../components/Testinomials.js';
import SideButtons from '../components/SideButton.js';
import ScrollIndicator from '../views/ScrollDots.js';
import ScrollDots from '../views/ScrollDots.js';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Journey id="journey" />
      <Testimonials id="testimonials" />
      {/* <Services /> id="hero" */}
      <Contact id="contact" />
      <Footer id="footer" />
      <ScrollDots/>
    </div>
  );
}