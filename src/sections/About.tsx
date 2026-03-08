import { CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="relative fade-up delay-1">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                                alt="Doctor Portrait"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating cards */}
                        <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-lg fade-up delay-2 hidden md:block" style={{ transform: 'scale(0.9)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">12+</div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -left-8 bg-white p-4 rounded-xl shadow-lg fade-up delay-3 hidden md:block" style={{ transform: 'scale(0.9) translateY(-50%)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-lg">5k+</div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Happy Patients</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-xl shadow-lg fade-up delay-4 hidden md:block" style={{ transform: 'scale(0.9)' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">10+</div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Dental Services</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="fade-up delay-2">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">ABOUT US</span>
                            <h2 className="text-[48px] leading-[56px] font-bold text-slate-900 mb-6">15 Years of Expertise in Dental Care</h2>
                            <p className="text-slate-500 text-lg leading-[1.6]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                        </div>

                        <ul className="space-y-4 fade-up delay-3">
                            {[
                                "Premium Dental Services You Can Trust",
                                "Award-Winning Experts in Dental Care",
                                "Dedicated Experts Behind Every Smile"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4 fade-up delay-4">
                            <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
