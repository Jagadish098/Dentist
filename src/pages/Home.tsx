import Hero from '../sections/Hero';
import Services from '../sections/Services';
import About from '../sections/About';
import WhyChooseUs from '../sections/WhyChooseUs';
import HowItWorks from '../sections/HowItWorks';
import BookAppointment from '../sections/BookAppointment';
import OpeningHours from '../sections/OpeningHours';
import Testimonials from '../sections/Testimonials';
import Marquee from '../components/Marquee';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyChooseUs />
      <About />
      <HowItWorks />
      <BookAppointment />
      <OpeningHours />
      <Testimonials />
    </>
  );
}
