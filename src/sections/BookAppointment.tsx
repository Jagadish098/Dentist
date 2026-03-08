import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function BookAppointment() {
    const [date, setDate] = useState('');
    const [timeOptions, setTimeOptions] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        
        const day = new Date(selectedDate).getDay(); // 0 is Sunday, 1 is Monday...

        if (day >= 1 && day <= 5) {
            setTimeOptions(["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM"]);
        } else if (day === 6) {
            setTimeOptions(["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"]);
        } else {
            setTimeOptions([]);
        }
        setSelectedTime('');
    };

    return (
        <section id="book-appointment" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl animate-fade-in-up">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Form Left 60% */}
                    <div className="lg:w-[60%] bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                        <span className="text-[#2563EB] font-semibold tracking-wider uppercase text-sm mb-3 block">BOOK AN APPOINTMENT</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight mb-8">
                            Effortless Online Booking for Your Dental Visit
                        </h2>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6 delay-100 animate-fade-in-right">
                                <div>
                                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Email</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all" required />
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-6 delay-200 animate-fade-in-right">
                                <div>
                                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Mobile Number</label>
                                    <input type="tel" placeholder="+1 234 567 890" className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Date</label>
                                    <input type="date" value={date} onChange={handleDateChange} className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-[#6B7280]" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-[#1F2937] mb-2">Time</label>
                                    <select 
                                        value={selectedTime} 
                                        onChange={(e) => setSelectedTime(e.target.value)} 
                                        disabled={!date || timeOptions.length === 0}
                                        className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-[#6B7280]" 
                                        required
                                    >
                                        <option value="" disabled>Select Time</option>
                                        {timeOptions.length > 0 ? (
                                            timeOptions.map((time, idx) => (
                                                <option key={idx} value={time}>{time}</option>
                                            ))
                                        ) : (
                                            date && <option disabled>Closed / No Slots</option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#2563EB] text-white rounded-full py-4 mt-8 font-bold text-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
                                Book an Appointment
                            </button>
                        </form>
                    </div>

                    {/* Info Card Right 40% */}
                    <div className="lg:w-[40%] bg-[#1E3A8A] text-white rounded-3xl p-10 flex flex-col justify-center animate-fade-in-right shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mx-10 -my-10"></div>
                        
                        <div className="bg-[#2563EB] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 pulse-glow relative z-10 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                            <Phone className="w-10 h-10 animate-pulse" />
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 relative z-10">Dental Emergency?</h3>
                        <p className="text-blue-100 text-lg leading-relaxed mb-10 relative z-10">
                            Call us immediately for urgent dental care needs. Our dedicated emergency team is here to relieve pain and protect your smile.
                        </p>
                        
                        <button className="bg-white text-[#2563EB] rounded-full px-8 py-4 font-bold text-lg hover:bg-gray-50 transition-colors w-fit relative z-10 hover:scale-[1.02] hover:shadow-lg">
                            Call Now: (555) 000-1111
                        </button>
                        
                        <p className="text-sm text-blue-200 mt-6 relative z-10 font-medium">★ 24/7 Emergency Line Available</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
