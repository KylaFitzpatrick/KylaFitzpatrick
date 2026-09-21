import { Sparkle } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/portfolio";

const Marquee = () => {
    const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div
            data-testid="editorial-marquee"
            className="marquee-wrap relative overflow-hidden border-y border-white/[0.06] bg-[#0A0F1D]/60 py-6 select-none"
        >
            <div className="animate-marquee flex w-max items-center gap-10 pr-10">
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-10">
                        <span className="font-display font-bold text-lg sm:text-xl uppercase tracking-wide text-slate-500 whitespace-nowrap">
                            {item}
                        </span>
                        <Sparkle size={14} className="text-blue-500/70 shrink-0" />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
