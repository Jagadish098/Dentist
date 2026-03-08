import { Star, Monitor, Tag, Smile } from 'lucide-react';

export default function WhyChooseUs() {
    const cards = [
        {
            icon: <Star className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
            title: "Experienced Dentists",
            description: "Our team of highly qualified dentists brings years of expertise to every procedure"
        },
        {
            icon: <Monitor className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
            title: "Advanced Technology",
            description: "We use the latest dental technology for precise diagnostics and comfortable treatments"
        },
        {
            icon: <Tag className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
            title: "Affordable Prices",
            description: "Quality dental care at competitive prices with flexible payment options"
        },
        {
            icon: <Smile className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
            title: "Pain-Free Treatment",
            description: "Modern techniques and gentle care ensuring a comfortable, anxiety-free experience"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-[48px] leading-[56px] font-bold text-slate-900 mb-4">Why Choose Us</h2>
                    <p className="text-[24px] text-slate-600 font-semibold max-w-2xl mx-auto">Benefits of Our Dental Services</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className="group bg-[#EFF6FF] rounded-2xl p-8 hover-lift fade-up flex flex-col items-center text-center transition-all duration-300" style={{ transitionDelay: `${idx * 0.1}s` }}>
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                                {card.icon}
                            </div>
                            <h3 className="text-[18px] font-semibold text-slate-900 mb-4">{card.title}</h3>
                            <p className="text-slate-500 text-[14px] leading-[1.6]">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
