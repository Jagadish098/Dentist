import React, { useEffect, useState, useRef } from 'react';
import { Star, ArrowRight, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FloatingIcons from '../components/FloatingIcons';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Trigger animations on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-dental-gray"
    >
      {/* Floating Background Icons */}
      <FloatingIcons />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-gray via-white to-dental-blue/5 pointer-events-none" />

      {/* Main Content Container */}
      <div
        className="relative z-10 w-full min-h-screen flex items-center"
        style={{ transform: `translateY(-${parallaxOffset}px)` }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              {/* Trust Badge */}
              <div
                className={`inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm mb-6 transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                  }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-sm font-medium text-dental-navy">
                  Trusted by 5000+ Happy Patients
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dental-navy leading-tight mb-6 transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: '200ms' }}
              >
                Every Smile{' '}
                <span className="text-dental-blue relative">
                  Matters
                  <svg
                    className={`absolute -bottom-2 left-0 w-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{ transitionDelay: '800ms' }}
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 8C50 2 150 2 198 8"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className={`transition-all duration-1000 ${isVisible ? 'path-draw' : ''
                        }`}
                      style={{
                        strokeDasharray: 200,
                        strokeDashoffset: isVisible ? 0 : 200,
                        transition: 'stroke-dashoffset 1s ease-out 0.8s',
                      }}
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p
                className={`text-lg sm:text-xl text-dental-navy/70 max-w-xl mb-8 leading-relaxed transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: '300ms' }}
              >
                Advanced dental care for healthy, confident smiles. Modern
                technology, expert dentists, and gentle treatments.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Primary CTA */}
                <button className="btn-primary group flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* Secondary CTA */}
                <button className="btn-secondary group flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span>View Treatments</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex items-center gap-6 mt-10 transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-dental-blue to-dental-light-blue border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-dental-navy/60">
                    <span className="font-semibold text-dental-navy">4.9</span>{' '}
                    rating
                  </span>
                </div>
                <div className="h-8 w-px bg-dental-gray-200" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-dental-navy/60">
                    Accepting new patients
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Before/After Slider */}
            <div className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none">
              <BeforeAfterSlider
                beforeImage="/images/smile-before.jpg"
                afterImage="/images/smile-after.jpg"
                beforeLabel="Before"
                afterLabel="After"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dental-gray to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
