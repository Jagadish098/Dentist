import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import Services from './sections/Services';
import About from './sections/About';
import WhyChooseUs from './sections/WhyChooseUs';
import HowItWorks from './sections/HowItWorks';
import BookAppointment from './sections/BookAppointment';
import OpeningHours from './sections/OpeningHours';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';
import Marquee from './components/Marquee';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <main className="min-h-screen w-full bg-slate-50 relative pt-[70px]">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <BookAppointment />
      <OpeningHours />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
