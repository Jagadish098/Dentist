import { Phone, MapPin, Clock } from 'lucide-react';

export default function OpeningHours() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Left: Clinic Hours Card (50%) */}
                    <div className="lg:w-1/2 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 border border-gray-100 animate-fade-in-left">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB]">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#1F2937]">Clinic Hours</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                <span className="font-semibold text-[#1F2937] text-lg">Monday - Friday</span>
                                <div className="text-right">
                                    <span className="block text-[#6B7280] font-medium">10:00 AM - 2:00 PM</span>
                                    <span className="block text-[#6B7280] font-medium">5:00 PM - 9:00 PM</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                                <span className="font-semibold text-[#1F2937] text-lg">Saturday</span>
                                <span className="text-[#6B7280] font-medium">10:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-[#1F2937] text-lg">Sunday</span>
                                <span className="text-red-500 font-bold bg-red-50 px-4 py-1 rounded-full">Closed</span>
                            </div>
                        </div>

                        <button className="w-full mt-10 bg-red-500 text-white rounded-full py-4 font-bold text-lg hover:bg-red-600 transition-colors animate-pulse hover:animate-none hover:scale-[1.02] shadow-lg shadow-red-200 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5 fill-white" />
                            Dental Emergency
                        </button>
                    </div>

                    {/* Right: Contact Cards (50%) */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {/* Call Us */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between animate-fade-in-right delay-100 group hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[#6B7280] text-sm font-semibold uppercase tracking-wider mb-1">CALL US</p>
                                    <p className="font-bold text-[#1F2937] text-xl">(555) 000-1111</p>
                                </div>
                            </div>
                            <a href="tel:5550001111" className="bg-blue-50 text-[#2563EB] font-bold px-5 py-2.5 rounded-full hover:bg-[#2563EB] hover:text-white transition-colors hidden sm:block">
                                Call Now
                            </a>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between animate-fade-in-right delay-200 group hover:-translate-y-1 transition-transform">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[#6B7280] text-sm font-semibold uppercase tracking-wider mb-1">LOCATION</p>
                                    <p className="font-bold text-[#1F2937] text-lg max-w-[200px] leading-tight">123 Dental Street, NY 10001</p>
                                </div>
                            </div>
                            <button className="bg-blue-50 text-[#2563EB] font-bold px-5 py-2.5 rounded-full hover:bg-[#2563EB] hover:text-white transition-colors hidden sm:block">
                                Directions
                            </button>
                        </div>

                        {/* Map View */}
                        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[220px] animate-fade-in-right delay-300">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
