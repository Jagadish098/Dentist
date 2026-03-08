import { Stethoscope, Microscope, Wallet, HeartPulse } from 'lucide-react';

export default function WhyChooseUs() {
    const benefits = [
        {
            icon: <Stethoscope className="w-8 h-8 transition-colors duration-300" />,
            title: "Experienced Dentist",
            description: "Expert care from highly qualified professionals with years of specialized dental experience."
        },
        {
            icon: <Microscope className="w-8 h-8 transition-colors duration-300" />,
            title: "Advanced Technology",
            description: "State-of-the-art equipment for precise diagnosis and comfortable treatments."
        },
        {
            icon: <Wallet className="w-8 h-8 transition-colors duration-300" />,
            title: "Affordable Price",
            description: "High-quality dental care with transparent pricing and flexible payment options."
        },
        {
            icon: <HeartPulse className="w-8 h-8 transition-colors duration-300" />,
            title: "Pain Free Treatment",
            description: "Modern techniques ensuring minimally invasive and completely comfortable procedures."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-[#2563EB] font-semibold tracking-wider uppercase text-sm mb-3 block">WHY CHOOSE US</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight max-w-3xl mx-auto">
                        Benefits of Our Dental Services: Your Path to a Healthier Smile
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group delay-${(idx + 1) * 100} animate-fade-in-up`}
                        >
                            <div className="w-[60px] h-[60px] bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">{benefit.title}</h3>
                            <p className="text-[#6B7280] leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
