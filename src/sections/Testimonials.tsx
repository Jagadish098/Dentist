import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Leslie Alexander",
            role: "Satisfied Patient",
            title: "Professional and Friendly!",
            review: "The staff made me feel so comfortable. Best dental experience I've ever had. Highly recommend!",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            name: "Bessie Lane",
            role: "Satisfied Patient",
            title: "Highly Recommended!",
            review: "Amazing results! My smile has never looked better. The team is skilled and caring.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
        },
        {
            name: "Robert Fox",
            role: "Satisfied Patient",
            title: "Exceptional Care!",
            review: "From booking to treatment, everything was seamless. Truly patient-centered approach.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
        }
    ];

    return (
        <section className="py-24 bg-[#1E3A8A]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-[48px] leading-[56px] font-bold text-white mb-4">What Our Patients Have to Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 hover-lift fade-up flex flex-col relative" style={{ transitionDelay: `${idx * 0.2}s` }}>
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-50 opacity-50" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">{rev.title}</h3>
                            <p className="text-slate-600 text-base leading-[1.6] mb-8 flex-1">"{rev.review}"</p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{rev.name}</h4>
                                    <p className="text-sm text-slate-500">{rev.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
