import Navbar  from '../components/Navbar.js';
import Hero    from '../components/Hero.js';
import About   from '../components/About.js';
import Services from '../components/Services.js';
import Journey  from '../components/Journey.js';
import Contact  from '../components/Contact.js';
import Footer   from '../components/Footer.js';
import Testimonials from '../components/Testinomials.js';
import SideButtons from '../components/SideButton.js';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Testimonials />
      {/* <Services /> */}
      <Contact />
      <Footer />
      <SideButtons />
    </div>
  );
}