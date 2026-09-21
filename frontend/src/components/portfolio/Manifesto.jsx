import { motion } from "framer-motion";
import { CHAPTERS } from "@/data/portfolio";

const Manifesto = () => (
    <section id="manifesto" className="relative py-24 sm:py-36 bg-[#0A110D]/40 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-14 sm:mb-20"
            >
                <span className="font-mono-jb text-[11px] uppercase tracking-[0.3em] text-emerald-400">
                    02 — The Manifesto
                </span>
                <h2 className="mt-4 font-display font-bold tracking-tight text-3xl sm:text-5xl text-slate-50 max-w-2xl leading-tight">
                    How I build.
                </h2>
            </motion.div>

            <div>
                {CHAPTERS.map((c, i) => (
                    <motion.div
                        key={c.n}
                        data-testid={`manifesto-chapter-${c.n}`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                        className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-10 sm:py-14 border-t border-white/[0.07] last:border-b items-start"
                    >
                        <div className="sm:col-span-3">
                            <span className="font-display font-extrabold text-6xl sm:text-7xl leading-none text-transparent [-webkit-text-stroke:1px_rgba(52,211,153,0.35)] transition-all duration-500 group-hover:[-webkit-text-stroke:1px_rgba(52,211,153,0.8)]">
                                {c.n}
                            </span>
                        </div>
                        <h3 className="sm:col-span-4 font-display font-bold text-2xl sm:text-3xl text-slate-100 tracking-tight">
                            {c.title}
                        </h3>
                        <p className="sm:col-span-5 text-slate-400 text-base leading-relaxed">{c.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Manifesto;
