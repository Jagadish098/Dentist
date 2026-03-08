import { ShieldCheck, Zap } from 'lucide-react';

export default function BookAppointment() {
    return (
        <section id="book" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 fade-up">
                    <h2 className="text-[48px] leading-[56px] font-bold text-slate-900 mb-4">Book an Appointment</h2>
                    <p className="text-[24px] text-slate-600 font-semibold max-w-2xl mx-auto">Effortless Online Booking for Your Dental Visit</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-8 bg-white rounded-2xl shadow-xl p-8 lg:p-12 fade-up delay-1">
                        <form className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2 fade-up delay-1">
                                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                            </div>

                            <div className="space-y-2 fade-up delay-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                            </div>

                            <div className="space-y-2 fade-up delay-3">
                                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" />
                            </div>

                            <div className="space-y-2 fade-up delay-4">
                                <label className="text-sm font-semibold text-slate-700">Preferred Date</label>
                                <input type="date" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-600" />
                            </div>

                            <div className="space-y-2 fade-up delay-5 md:col-span-2">
                                <label className="text-sm font-semibold text-slate-700">Preferred Time</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-slate-600">
                                    <option value="">Select a time</option>
                                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                                    <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 pt-4 fade-up delay-6">
                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="lg:col-span-4 space-y-8 fade-up delay-3">
                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Book Online?</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">Booking your visit online is fast, easy, and secure. Guarantee your spot in just a few clicks.</p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Instant Confirmation</h4>
                                        <p className="text-sm text-slate-500 mt-1">Get your appointment confirmed instantly via email.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Secure Booking</h4>
                                        <p className="text-sm text-slate-500 mt-1">Your personal information is always safe with us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
