import { Search, Calendar, MapPin, Smile } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Choose Your Service",
            description: "Browse our comprehensive list of dental services and find the care you need."
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Book Appointment",
            description: "Easily schedule your visit online with our flexible booking system."
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Visit Our Clinic",
            description: "Experience welcoming, state-of-the-art care at our modern facility."
        },
        {
            icon: <Smile className="w-8 h-8" />,
            title: "Get Your Perfect Smile",
            description: "Walk out with a healthier, brighter, and more confident smile."
        }
    ];

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="text-center mb-16">
                    <span className="text-[#2563EB] font-semibold tracking-wider uppercase text-sm mb-3 block">HOW IT WORKS</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight max-w-3xl mx-auto">
                        The Path to Your Perfect Smile
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[90px] left-[12%] right-[12%] h-1 bg-gray-100 -z-10 rounded-full">
                        <div className="h-full bg-[#2563EB] w-full origin-left scale-x-[1] transition-transform duration-1000"></div>
                    </div>
                    {/* Connecting Line (Mobile) */}
                    <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[39px] w-1 bg-gray-100 -z-10 rounded-full">
                        <div className="w-full bg-[#2563EB] h-full origin-top scale-y-[1] transition-transform duration-1000"></div>
                    </div>

                    <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-row lg:flex-col lg:text-center items-start lg:items-center gap-6 animate-fade-in-up delay-${(idx + 1) * 100}`}>
                                
                                <div className="shrink-0 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-[#2563EB] text-white rounded-full font-bold flex items-center justify-center text-xl shadow-md border-4 border-white">
                                        {idx + 1}
                                    </div>
                                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-[#2563EB] mt-4 lg:mx-auto">
                                        {step.icon}
                                    </div>
                                </div>

                                <div className="mt-2 lg:mt-4">
                                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">{step.title}</h3>
                                    <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
