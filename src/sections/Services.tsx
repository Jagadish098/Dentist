import { Shield, Sparkles, Syringe } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "General Dentistry",
            description: "Comprehensive dental care for the whole family including cleanings, exams, and preventive treatments"
        },
        {
            icon: <Syringe className="w-6 h-6 text-blue-600" />,
            title: "Dental Implantation",
            description: "Permanent tooth replacement solutions using state-of-the-art implant technology"
        },
        {
            icon: <Sparkles className="w-6 h-6 text-blue-600" />,
            title: "Teeth Whitening",
            description: "Professional whitening treatments for a brighter, more confident smile"
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-[48px] leading-[56px] font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-[24px] text-slate-600 font-semibold max-w-2xl mx-auto">We offer a wide range of dental services</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 hover-lift fade-up delay-${idx + 1}`}>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-500 text-base leading-[1.6]">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center fade-up delay-4">
                    <button className="bg-white border-2 border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600 px-8 py-3.5 rounded-full font-semibold transition-all duration-300">
                        See All Services
                    </button>
                </div>
            </div>
        </section>
    );
}
