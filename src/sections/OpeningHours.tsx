import { Phone, MapPin, Map } from 'lucide-react';

export default function OpeningHours() {
    return (
        <section id="hours" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4 fade-up delay-1 hover-lift">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                                <p className="text-slate-500 mb-3">Have questions? Call us now</p>
                                <a href="tel:5551234567" className="inline-block bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 px-6 py-2 rounded-full font-semibold transition-colors text-slate-900">
                                    Call Now
                                </a>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4 fade-up delay-2 hover-lift">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Location</h3>
                                <p className="text-slate-500">123 Dental Street, Medical City, ST 12345</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 flex items-start gap-4 fade-up delay-3 hover-lift">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Map className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Map View</h3>
                                <div className="w-full h-32 bg-slate-200 rounded-lg mt-3 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map Thumbnail" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0F172A] rounded-2xl p-8 lg:p-12 text-white fade-up delay-4 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>

                        <h3 className="text-[32px] font-bold mb-8 relative z-10">Clinic Hours</h3>

                        <div className="space-y-4 mb-10 relative z-10">
                            <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                                <span className="text-slate-300 font-medium text-lg">Monday - Friday</span>
                                <span className="font-semibold text-lg">09:00 - 20:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                                <span className="text-slate-300 font-medium text-lg">Saturday</span>
                                <span className="font-semibold text-lg">10:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-slate-300 font-medium text-lg">Sunday</span>
                                <span className="text-slate-500 font-semibold text-lg">Closed</span>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-xl p-6 relative z-10 overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-6 h-6 animate-pulse" />
                                    <span className="font-bold text-lg">Dental Emergency?</span>
                                </div>
                                <p className="text-blue-100">Call Us Anytime for Urgent Care</p>
                                <a href="tel:5551234567" className="bg-white text-blue-600 hover:bg-slate-50 px-6 py-2 rounded-full font-bold mt-2 inline-block transition-colors">
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
