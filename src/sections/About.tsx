import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
                    
                    {/* Left Image Area */}
                    <div className="lg:w-[45%] relative mt-10 lg:mt-0">
                        <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -z-10 bg-opacity-50 rotate-3 transform"></div>
                        
                        <img 
                            src="/images/doctor-portrait.png" 
                            alt="Professional Dentist" 
                            className="rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover animate-fade-in-right transform -scale-x-100"
                        />
                        
                        <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden md:flex z-10 border border-gray-50">
                            <div className="bg-[#10B981] p-2 rounded-lg text-white font-bold">5000+</div>
                            <div className="text-sm">
                                <p className="font-bold text-[#1F2937]">Happy Customers</p>
                                <p className="text-[#6B7280]">Trusted services</p>
                            </div>
                        </div>

                        <div className="absolute bottom-8 -left-8 bg-[#2563EB] text-white p-5 rounded-xl shadow-xl animate-float-reverse hidden md:block z-10">
                            <p className="font-bold text-3xl">12+</p>
                            <p className="text-sm font-medium text-blue-100 mt-1">Years Experience</p>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-[55%]">
                        <span className="text-[#2563EB] font-semibold tracking-wider uppercase text-sm mb-3 block">ABOUT US</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight mb-6">
                            <span className="text-[#2563EB]">15 Years</span> of Expertise in Dental Care
                        </h2>
                        
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                            We are committed to delivering the highest standard of dental care in a welcoming, comfortable environment. Our team of experienced professionals utilizes advanced technology to ensure that every patient achieves their healthiest, most beautiful smile.
                        </p>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                            Your oral health is our top priority. We believe in building lasting relationships with our patients through transparent, pain-free, and personalized treatments.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-3 animate-fade-in-up delay-100">
                                <CheckCircle className="w-6 h-6 text-[#10B981] shrink-0 fill-green-100" />
                                <span className="font-semibold text-[#1F2937] text-lg">Premium Dental Services You Can Trust</span>
                            </div>
                            <div className="flex items-center gap-3 animate-fade-in-up delay-200">
                                <CheckCircle className="w-6 h-6 text-[#10B981] shrink-0 fill-green-100" />
                                <span className="font-semibold text-[#1F2937] text-lg">Award-Winning Experts in Dental Care</span>
                            </div>
                            <div className="flex items-center gap-3 animate-fade-in-up delay-300">
                                <CheckCircle className="w-6 h-6 text-[#10B981] shrink-0 fill-green-100" />
                                <span className="font-semibold text-[#1F2937] text-lg">Dedicated Experts Behind Every Smile</span>
                            </div>
                        </div>

                        <Link to="/about" className="inline-block bg-[#2563EB] text-white hover:bg-blue-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
