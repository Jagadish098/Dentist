import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const scrollToSection = (id: string) => {
        if (location.pathname !== "/") {
            window.location.href = `/#${id}`;
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-white py-5'
            }`}
        >
            <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-50">
                    <svg className="w-8 h-8 text-[#2563EB]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8 2 4 5 4 10C4 13.5 6 15.5 7.5 17C8.5 18 9 19.5 9 21C9 21.6 9.4 22 10 22h4C14.6 22 15 21.6 15 21C15 19.5 15.5 18 16.5 17C18 15.5 20 13.5 20 10C20 5 16 2 12 2ZM12 19V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-2xl font-bold text-[#2563EB]">Dental</span>
                </Link>

                {/* Desktop Links - Optional, keeping minimal based on prompt but helpful for nav */}
                <div className="hidden md:flex items-center gap-8 font-medium text-[#6B7280]">
                    <Link to="/" className="hover:text-[#2563EB] transition-colors">Home</Link>
                    <Link to="/services" className="hover:text-[#2563EB] transition-colors">Services</Link>
                    <Link to="/about" className="hover:text-[#2563EB] transition-colors">About Us</Link>
                </div>

                {/* Desktop Button */}
                <button 
                    onClick={() => scrollToSection('book-appointment')}
                    className="hidden md:block bg-[#2563EB] text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                    Book Appointment
                </button>

                {/* Mobile Hamburger toggle */}
                <button 
                    className="md:hidden z-50 text-[#1F2937]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col px-6 py-24 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6 text-lg font-medium text-[#1F2937] mb-8">
                    <Link to="/" className="hover:text-[#2563EB]">Home</Link>
                    <Link to="/services" className="hover:text-[#2563EB]">Services</Link>
                    <Link to="/about" className="hover:text-[#2563EB]">About Us</Link>
                </div>
                <button 
                    onClick={() => scrollToSection('book-appointment')}
                    className="bg-[#2563EB] text-white px-6 py-4 rounded-full font-bold shadow-lg w-full mt-auto mb-8 hover:bg-blue-700"
                >
                    Book Appointment
                </button>
            </div>
        </nav>
    );
}
