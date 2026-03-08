import { Shield, Sparkles, Syringe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            icon: <Shield className="w-6 h-6 text-[#2563EB]" />,
            image: "/images/general-dentistry.png",
            title: "General Dentistry",
            description: "Comprehensive dental care for the whole family including cleanings, exams, and preventive treatments"
        },
        {
            icon: <Syringe className="w-6 h-6 text-[#2563EB]" />,
            image: "/images/dental-implant.png",
            title: "Dental Implantation",
            description: "Permanent tooth replacement solutions using state-of-the-art implant technology"
        },
        {
            icon: <Sparkles className="w-6 h-6 text-[#2563EB]" />,
            image: "/images/teeth-whitening.png",
            title: "Teeth Whitening",
            description: "Professional whitening treatments for a brighter, more confident smile"
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-[#2563EB] font-semibold tracking-wider uppercase text-sm mb-3 block">OUR SERVICES</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight max-w-2xl">
                            A Wide Range of Services for Your Best Smile
                        </h2>
                    </div>
                    <Link to="/services" className="shrink-0 border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 group">
                        Explore All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-0 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 group delay-${(idx + 1) * 100} animate-fade-in-up overflow-hidden shadow-sm border border-gray-100`}>
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{service.title}</h3>
                                <p className="text-[#6B7280] leading-relaxed mb-6">{service.description}</p>
                                <Link to="/services" className="text-[#2563EB] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                    Learn more <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
