import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full h-[70px] bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]' : ''}`} style={{ animation: 'fade-in-up 0.5s ease-out' }}>
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo Icon */}
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 8 6 8 6v3c0 1.5-1 2.5-1 4v5c0 2 2 4 5 4s5-2 5-4v-5c0-1.5-1-2.5-1-4V6s0-4-4-4z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-slate-900">Dental</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6 text-sm font-medium text-slate-600">
                        <a href="#hero" className="hover:text-blue-600 transition-colors">Home</a>
                        <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
                        <a href="#about" className="hover:text-blue-600 transition-colors">About Us</a>
                        <a href="#hours" className="hover:text-blue-600 transition-colors">Contact</a>
                    </div>
                    <a href="#book" className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-600" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
                    <a href="#hero" onClick={() => setMenuOpen(false)} className="text-slate-600 font-medium">Home</a>
                    <a href="#services" onClick={() => setMenuOpen(false)} className="text-slate-600 font-medium">Services</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-600 font-medium">About Us</a>
                    <a href="#hours" onClick={() => setMenuOpen(false)} className="text-slate-600 font-medium">Contact</a>
                    <a href="#book" onClick={() => setMenuOpen(false)} className="bg-blue-600 text-white text-center py-3 rounded-full font-medium mt-2">
                        Book Appointment
                    </a>
                </div>
            )}
        </nav>
    );
}
