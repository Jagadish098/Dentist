import { Shield, Syringe, Sparkles, Stethoscope, Heart, Activity, Thermometer, UserCheck, Clock, Zap, Smile, BookOpen, PenTool, CheckCircle, Crosshair } from 'lucide-react';

export default function ServicesPage() {
    const allServices = [
        { icon: <Shield className="w-6 h-6 text-[#2563EB]" />, title: "General Dentistry", description: "Comprehensive dental care for the whole family including cleanings, exams, and preventive treatments" },
        { icon: <Syringe className="w-6 h-6 text-[#2563EB]" />, title: "Dental Implants", description: "Permanent tooth replacement solutions using state-of-the-art implant technology" },
        { icon: <Sparkles className="w-6 h-6 text-[#2563EB]" />, title: "Teeth Whitening", description: "Professional whitening treatments for a brighter, more confident smile" },
        { icon: <Stethoscope className="w-6 h-6 text-[#2563EB]" />, title: "Orthodontics", description: "Straighten your teeth with traditional braces or clear aligners" },
        { icon: <Activity className="w-6 h-6 text-[#2563EB]" />, title: "Periodontics", description: "Advanced care for your gums and the bone supporting your teeth" },
        { icon: <Thermometer className="w-6 h-6 text-[#2563EB]" />, title: "Endodontics", description: "Root canal therapy and treatments focused on the dental pulp" },
        { icon: <UserCheck className="w-6 h-6 text-[#2563EB]" />, title: "Oral Surgery", description: "Extractions, impacted wisdom teeth, and other surgical procedures" },
        { icon: <Smile className="w-6 h-6 text-[#2563EB]" />, title: "Pediatric Dentistry", description: "Specialized, gentle dental care for infants, children, and teens" },
        { icon: <Zap className="w-6 h-6 text-[#2563EB]" />, title: "Cosmetic Dentistry", description: "Veneers, bonding, and smile makeovers to enhance your appearance" },
        { icon: <Clock className="w-6 h-6 text-[#2563EB]" />, title: "Emergency Dental Care", description: "Immediate treatment for toothaches, chipped teeth, and other emergencies" },
        { icon: <Heart className="w-6 h-6 text-[#2563EB]" />, title: "Dental Crowns & Bridges", description: "Restorations to protect damaged teeth or replace missing ones" },
        { icon: <BookOpen className="w-6 h-6 text-[#2563EB]" />, title: "Dentures", description: "Custom-fitted complete and partial dentures for functional smiles" },
        { icon: <PenTool className="w-6 h-6 text-[#2563EB]" />, title: "Root Canal Treatment", description: "Saving infected or severely decayed teeth with precision care" },
        { icon: <CheckCircle className="w-6 h-6 text-[#2563EB]" />, title: "Dental Fillings", description: "Tooth-colored composite fillings to repair cavities naturally" },
        { icon: <Shield className="w-6 h-6 text-[#2563EB]" />, title: "Dental Sealants", description: "Protective coatings applied to chewing surfaces to prevent decay" },
        { icon: <Crosshair className="w-6 h-6 text-[#2563EB]" />, title: "Gum Treatment", description: "Deep cleaning and therapeutic procedures for periodontal health" },
        { icon: <Heart className="w-6 h-6 text-[#2563EB]" />, title: "Dental X-Rays", description: "Digital imaging for accurate diagnosis and treatment planning" },
        { icon: <Search className="w-6 h-6 text-[#2563EB]" />, title: "Oral Cancer Screening", description: "Thorough examinations to detect early signs of oral diseases" }
    ];

    return (
        <div className="pt-20 pb-24 bg-[#F8FAFC]">
            <div className="bg-[#1E3A8A] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-blue-200">Home &gt; Services</p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl mt-20">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {allServices.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">{service.title}</h3>
                            <p className="text-[#6B7280] leading-relaxed mb-6">{service.description}</p>
                            <a href="#" className="flex items-center gap-2 text-[#2563EB] font-bold group-hover:gap-3 transition-all duration-300">
                                Learn More <span className="text-lg">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Temporary, using Lucide 'Search' replacement for oral cancer
function Search(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}
