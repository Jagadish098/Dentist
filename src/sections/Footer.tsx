export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-300 pt-20 pb-8 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="fade-up delay-1">
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 8 6 8 6v3c0 1.5-1 2.5-1 4v5c0 2 2 4 5 4s5-2 5-4v-5c0-1.5-1-2.5-1-4V6s0-4-4-4z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold">Dental</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Providing exceptional dental care with modern technology and compassionate service.
                        </p>
                        <div className="space-y-3">
                            <p>Phone: <a href="tel:5551234567" className="text-blue-400 hover:text-blue-300"> (555) 123-4567</a></p>
                            <p>Email: <a href="mailto:info@dentalclinic.com" className="text-blue-400 hover:text-blue-300">info@dentalclinic.com</a></p>
                            <p>Address: 123 Dental Street, Medical City</p>
                        </div>
                    </div>

                    <div className="fade-up delay-2">
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#hero" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Services</a></li>
                            <li><a href="#about" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">About Us</a></li>
                            <li><a href="#book" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Book Appointment</a></li>
                            <li><a href="#hours" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Contact</a></li>
                        </ul>
                    </div>

                    <div className="fade-up delay-3">
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">General Dentistry</a></li>
                            <li><a href="#" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Dental Implants</a></li>
                            <li><a href="#" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Teeth Whitening</a></li>
                            <li><a href="#" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Orthodontics</a></li>
                            <li><a href="#" className="hover:text-blue-400 hover:translate-x-1 inline-block transition-all">Emergency Care</a></li>
                        </ul>
                    </div>

                    <div className="fade-up delay-4">
                        <h4 className="text-white font-bold text-lg mb-6">Subscribe for Updates</h4>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 fade-up delay-5">
                    <p className="text-slate-500 text-sm">© 2024 Dental Clinic. All Rights Reserved.</p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
