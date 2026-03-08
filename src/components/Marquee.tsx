export default function Marquee() {
    const items = [
        "General Dentistry", "Teeth Whitening", "Dental Implant", "Dental Sealants"
    ];
    return (
        <div className="w-full bg-[#2563EB] py-4 overflow-hidden select-none">
            <div className="marquee-container flex w-max hover:[animation-play-state:paused]">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex gap-8 px-4 text-white text-[15px] font-semibold tracking-wider uppercase items-center">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex gap-8 items-center">
                                <span>{item}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
