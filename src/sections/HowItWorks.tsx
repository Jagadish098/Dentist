import { MousePointerClick, CalendarRange, Building2, SmilePlus } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            icon: <MousePointerClick className="w-8 h-8 text-blue-600" />,
            title: "Choose Your Service",
            description: "Browse our comprehensive range of dental treatments"
        },
        {
            num: "02",
            icon: <CalendarRange className="w-8 h-8 text-blue-600" />,
            title: "Book Appointment",
            description: "Schedule your visit online or call us directly"
        },
        {
            num: "03",
            icon: <Building2 className="w-8 h-8 text-blue-600" />,
            title: "Visit Our Clinic",
            description: "Come to our modern, comfortable facility"
        },
        {
            num: "04",
            icon: <SmilePlus className="w-8 h-8 text-blue-600" />,
            title: "Get Your Perfect Smile",
            description: "Leave with the healthy, beautiful smile you deserve"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 fade-up">
                    <h2 className="text-[48px] leading-[56px] font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-[24px] text-slate-600 font-semibold max-w-2xl mx-auto">The Path to Your Perfect Smile</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2 hidden lg:block overflow-hidden rounded-full">
                        <div className="h-full bg-blue-600 w-full transition-transform duration-1000 ease-out origin-left scale-x-100"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center fade-up" style={{ transitionDelay: `${idx * 0.2}s` }}>
                                <div className="relative mb-8 group hover-lift delay-1 cursor-pointer">
                                    <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-50 shadow-lg flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-20">
                                        {step.num}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-500 text-base leading-[1.6] max-w-xs">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
