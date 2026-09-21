import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/data/portfolio";

const Skills = () => (
    <section id="skills" className="relative py-24 sm:py-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-14 sm:mb-20"
            >
                <span className="font-mono-jb text-[11px] uppercase tracking-[0.3em] text-emerald-400">
                    03 — Toolbox
                </span>
                <h2 className="mt-4 font-display font-bold tracking-tight text-3xl sm:text-5xl text-slate-50 max-w-2xl leading-tight">
                    Skills & technologies.
                </h2>
            </motion.div>

            <div data-testid="skills-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {SKILL_GROUPS.map((g, i) => (
                    <motion.div
                        key={g.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                        className="rounded-2xl border border-white/[0.08] bg-[#0F1A13]/70 backdrop-blur-md p-7 sm:p-8 transition-colors duration-500 hover:border-emerald-500/35"
                    >
                        <span className="font-mono-jb text-[10px] uppercase tracking-[0.25em] text-emerald-400">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-3 font-display font-bold text-xl text-slate-50">{g.name}</h3>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {g.skills.map((s) => (
                                <span
                                    key={s}
                                    data-testid={`skill-chip-${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                    className={`text-sm font-medium rounded-full px-4 py-2 transition-colors duration-300 ${
                                        g.highlight
                                            ? "text-emerald-200 border border-emerald-500/30 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.16]"
                                            : "text-slate-300 border border-white/10 bg-white/[0.03] hover:border-emerald-500/30"
                                    }`}
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
