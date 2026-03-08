import { Star } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            rating: 5,
            text: "Absolutely the best dental care I've ever received. The staff is welcoming, and the procedure was completely painless. Highly recommend Dr. Smith!",
            name: "Sarah Jenkins",
            initials: "SJ"
        },
        {
            rating: 5,
            text: "State-of-the-art facility with incredibly professional staff. I got my teeth whitened here and the results are stunning. Couldn't be happier.",
            name: "Michael Chen",
            initials: "MC"
        },
        {
            rating: 5,
            text: "I was extremely nervous about getting an implant, but the team here made me feel comfortable from start to finish. Exceptional service.",
            name: "Emily Rodriguez",
            initials: "ER"
        },
        {
            rating: 5,
            text: "Affordable, transparent pricing and fantastic care. They explain everything clearly before proceeding. Truly a trust-worthy clinic.",
            name: "James Wilson",
            initials: "JW"
        }
    ];

    return (
        <section className="py-24 bg-[#1E3A8A] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="text-center mb-16">
                    <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-3 block">TESTIMONIALS</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
                        What Our <span className="text-[#3B82F6]">Patients</span> Have to Say
                    </h2>
                </div>

                {/* Horizontal Scroll / Grid Layout */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 min-w-[350px] md:min-w-[400px] snap-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-1 text-[#FBBF24]">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <span className="font-bold text-[#1F2937] text-lg px-3 py-1 bg-yellow-50 text-[#FBBF24] rounded-lg">5.0</span>
                            </div>
                            
                            <p className="text-[#6B7280] italic leading-relaxed mb-8 text-lg flex-grow">"{testimonial.text}"</p>
                            
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-xl">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="font-bold text-[#1F2937] leading-tight">{testimonial.name}</p>
                                    <p className="text-sm text-[#6B7280] flex items-center gap-1 mt-1">
                                        <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                                        Verified Patient
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Custom CSS to hide scrollbar but keep functionality */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
