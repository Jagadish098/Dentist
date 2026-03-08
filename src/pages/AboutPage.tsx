import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="pt-20 pb-24 bg-[#F8FAFC]">
            <div className="bg-[#1E3A8A] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-blue-200">Home &gt; About Us</p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl mt-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -z-10 rotate-3 transform transition-transform hover:rotate-6"></div>
                        <img 
                            src="/images/doctor-portrait.webp" 
                            alt="Professional Doctor" 
                            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
                        />
                        
                        <div className="absolute top-8 -right-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float hidden md:flex">
                            <div className="bg-[#10B981] p-2 rounded-lg">
                                <span className="text-white font-bold">5K+</span>
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-[#1F2937]">Happy Patients</p>
                                <p className="text-[#6B7280]">Trust our clinic</p>
                            </div>
                        </div>

                        <div className="absolute bottom-8 -left-8 bg-[#2563EB] text-white p-5 rounded-xl shadow-xl animate-float-reverse hidden md:block">
                            <p className="font-bold text-3xl">15+</p>
                            <p className="text-sm font-medium text-blue-100 mt-1">Years Experience</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-[#2563EB] font-bold tracking-wider uppercase text-sm mb-3">ABOUT US</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-6">
                            Bringing Your Perfect <span className="text-[#2563EB]">Smile</span> to Life
                        </h3>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-6">
                            Dr. Smith brings over 15 years of dedicated experience to his practice, focusing on delivering exceptional, pain-free dental care. A graduate of top-tier dental institutions, he is passionate about continuous education, staying abreast of the latest advancements in dental technology.
                        </p>
                        <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                            "Our mission is simple: to provide a comfortable, welcoming environment where patients receive state-of-the-art care tailored to their unique needs. We believe a healthy smile is the foundation of overall wellness."
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Premium Dental Services You Can Trust",
                                "Award-Winning Experts in Dental Care",
                                "Dedicated Professionals Behind Every Smile",
                                "State-of-the-Art Technology & Pain-Free Methods"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="bg-green-100 rounded-full p-1">
                                        <CheckCircle className="w-5 h-5 text-[#10B981]" />
                                    </div>
                                    <span className="font-semibold text-[#1F2937]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Values Sections */}
                <div className="mt-32 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-blue-50 text-[#2563EB] mx-auto rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl font-bold">01</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4">Our Mission</h4>
                        <p className="text-[#6B7280]">To provide exceptional and compassionate dental care, empowering individuals to achieve lifelong oral health.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-blue-50 text-[#2563EB] mx-auto rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl font-bold">02</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                        <p className="text-[#6B7280]">Becoming the leading community dental practice known for technological innovation and patient comfort.</p>
                    </div>
                    <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-blue-50 text-[#2563EB] mx-auto rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl font-bold">03</span>
                        </div>
                        <h4 className="text-xl font-bold mb-4">Our Approach</h4>
                        <p className="text-[#6B7280]">We treat every patient like family, prioritizing open communication and personalized care plans.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
