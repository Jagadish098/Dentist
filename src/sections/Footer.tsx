import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#1E3A8A] text-white py-16 animate-fade-in-up">
            <div className="container mx-auto px-4 max-w-7xl">
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
                    {/* Column 1 - Main */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8 2 4 5 4 10C4 13.5 6 15.5 7.5 17C8.5 18 9 19.5 9 21C9 21.6 9.4 22 10 22h4C14.6 22 15 21.6 15 21C15 19.5 15.5 18 16.5 17C18 15.5 20 13.5 20 10C20 5 16 2 12 2ZM12 19V11" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <span className="text-2xl font-bold">Dental</span>
                        </Link>
                        <p className="text-blue-200 mb-8 leading-relaxed max-w-xs">
                            Bringing Your Perfect Smile to Life with State-of-the-Art Care.
                        </p>
                        <div className="space-y-4">
                            <a href="tel:0000000000" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                <Phone className="w-5 h-5" /> 
                                (555) 000-1111
                            </a>
                            <a href="mailto:example@dental.com" className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" /> 
                                example@dental.com
                            </a>
                            <div className="flex items-center gap-3 text-blue-100">
                                <MapPin className="w-5 h-5" /> 
                                123 Dental Street, NY 10001
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">Home</Link></li>
                            <li><Link to="/services" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">Services</Link></li>
                            <li><Link to="/about" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">About Us</Link></li>
                            <li><a href="#book-appointment" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Our Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">General Dentistry</Link></li>
                            <li><Link to="/services" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">Dental Implantation</Link></li>
                            <li><Link to="/services" className="text-blue-200 hover:text-blue-300 hover:translate-x-2 transition-all duration-300 inline-block font-medium">Teeth Whitening</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-blue-300 text-sm">© 2024 Dental Website. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] hover:scale-125 transition-all duration-300">
                            <Facebook className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] hover:scale-125 transition-all duration-300">
                            <Twitter className="w-5 h-5 fill-current" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] hover:scale-125 transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#1E3A8A] hover:scale-125 transition-all duration-300">
                            <Linkedin className="w-5 h-5 fill-current" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
