import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const lineUp = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
    { k: "03", v: "Production websites live" },
    { k: "10x", v: "AI-augmented workflow" },
    { k: "100%", v: "Design-to-deploy ownership" },
];

const Hero = ({ onResume }) => {
    const ref = useRef(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 42, damping: 18 });
    const sy = useSpring(my, { stiffness: 42, damping: 18 });
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const orbY = useTransform(scrollYProgress, [0, 1], [0, 220]);
    const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    const onMouseMove = (e) => {
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.width / 2) / 22);
        my.set((e.clientY - r.height / 2) / 22);
    };

    return (
        <section
            id="top"
            ref={ref}
            onMouseMove={onMouseMove}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[72px]"
        >
            <div className="hero-grid absolute inset-0" />

            <motion.div
                style={{ x: sx, y: orbY }}
                className="absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full bg-blue-600/20 blur-[140px] pointer-events-none"
            />
            <motion.div
                style={{ x: sx, y: sy }}
                className="absolute top-1/4 right-[8%] w-72 h-72 pointer-events-none hidden lg:block"
            >
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/25 animate-spin-slower" />
                <div className="absolute inset-10 rounded-full border border-blue-400/15" />
                <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.9)]" />
            </motion.div>

            <motion.div style={{ opacity: fade }} className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 w-full">
                <motion.div variants={container} initial="hidden" animate="show">
                    <motion.div variants={fadeUp} className="mb-8">
                        <span
                            data-testid="hero-availability-badge"
                            className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-500/[0.07] backdrop-blur-md px-4 py-2"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-slow" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            <span className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-blue-300">
                                Available for new projects
                            </span>
                        </span>
                    </motion.div>

                    <h1 data-testid="hero-heading" className="font-display font-extrabold tracking-tight leading-[0.95] text-slate-50">
                        <span className="block overflow-hidden pb-1">
                            <motion.span variants={lineUp} className="block text-5xl sm:text-7xl lg:text-8xl">
                                KYLA
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden pb-2">
                            <motion.span variants={lineUp} className="block text-5xl sm:text-7xl lg:text-8xl text-stroke-blue">
                                FITZPATRICK
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden mt-5">
                            <motion.span variants={lineUp} className="block text-xl sm:text-2xl lg:text-3xl font-bold text-slate-300 tracking-normal">
                                Web Developer — I build <span className="text-blue-400">fast, modern</span> websites.
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p variants={fadeUp} className="mt-8 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
                        From wellness platforms to art e-commerce and local business storefronts — I design, build and ship
                        production websites end to end. Recruiters: my resume is one click away.
                    </motion.p>

                    <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
                        <button
                            data-testid="hero-explore-button"
                            onClick={() => scrollToSection("#work")}
                            className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.5)]"
                        >
                            View selected work
                            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                        </button>
                        <button
                            data-testid="hero-resume-button"
                            onClick={onResume}
                            className="group flex items-center gap-2.5 border border-white/15 hover:border-blue-500/50 text-slate-200 hover:text-blue-300 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors duration-300 bg-white/[0.03] backdrop-blur-md"
                        >
                            <FileText size={16} className="text-blue-400" />
                            View resume
                        </button>
                    </motion.div>

                    <motion.div variants={fadeUp} className="mt-16 sm:mt-20 grid grid-cols-3 max-w-2xl border-t border-white/[0.07] pt-8 gap-4">
                        {STATS.map((s) => (
                            <div key={s.k}>
                                <div className="font-display font-bold text-2xl sm:text-4xl text-blue-400">{s.k}</div>
                                <div className="mt-1.5 font-mono-jb text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-slate-500">
                                    {s.v}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-jb text-[10px] uppercase tracking-[0.3em] text-slate-600"
            >
                — scroll to explore —
            </motion.div>
        </section>
    );
};

export default Hero;
