import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Mail, Linkedin, Github } from "lucide-react";
import { PROFILE, PROJECTS, SKILL_GROUPS } from "@/data/portfolio";
import { lenisStore } from "@/lib/scroll";

const Row = ({ label, children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-t border-white/[0.08]">
        <span className="sm:col-span-3 font-mono-jb text-[10px] uppercase tracking-[0.25em] text-blue-400 pt-1">
            {label}
        </span>
        <div className="sm:col-span-9">{children}</div>
    </div>
);

const ResumeModal = ({ open, onClose }) => {
    useEffect(() => {
        if (open) lenisStore.current?.stop();
        else lenisStore.current?.start();
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[80] bg-[#050811]/85 backdrop-blur-md overflow-y-auto"
                >
                    <motion.div
                        data-testid="resume-modal"
                        initial={{ y: 60, opacity: 0, scale: 0.97 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 40, opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl mx-auto my-6 sm:my-12 rounded-2xl border border-white/10 bg-[#0A0F1D] shadow-[0_0_100px_rgba(37,99,235,0.18)]"
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-white/[0.07] bg-[#0A0F1D]/95 backdrop-blur-xl rounded-t-2xl">
                            <span className="font-mono-jb text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                Resume — {PROFILE.name}
                            </span>
                            <div className="flex items-center gap-2.5">
                                <button
                                    data-testid="resume-download-button"
                                    onClick={() => window.print()}
                                    className="flex items-center gap-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-4 py-2 transition-colors duration-300"
                                >
                                    <Printer size={13} />
                                    Print / Save PDF
                                </button>
                                <button
                                    data-testid="resume-close-button"
                                    onClick={onClose}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors duration-300"
                                    aria-label="Close resume"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        <div id="resume-sheet" className="px-6 sm:px-10 py-10 bg-[#0A0F1D] rounded-b-2xl">
                            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50 tracking-tight">
                                {PROFILE.name}
                            </h2>
                            <p className="mt-1 font-display font-bold text-lg text-blue-400">
                                {PROFILE.role} — {PROFILE.tagline}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono-jb text-[11px] text-slate-400">
                                <span className="flex items-center gap-1.5"><Mail size={12} className="text-blue-400" />{PROFILE.email}</span>
                                <span className="flex items-center gap-1.5"><Linkedin size={12} className="text-blue-400" />linkedin.com/in/kylaannefitzpatrick</span>
                                <span className="flex items-center gap-1.5"><Github size={12} className="text-blue-400" />github.com/KylaFitzpatrick</span>
                            </div>

                            <div className="mt-8">
                                <Row label="Summary">
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Web developer who designs and ships fast, modern, production-ready websites end to end —
                                        from wellness platforms and art e-commerce to local business storefronts. Pairs a modern
                                        React stack with an AI-augmented workflow (Emergent, Claude) and Adobe design tooling to
                                        deliver polished, client-facing products quickly.
                                    </p>
                                </Row>

                                <Row label="Selected Work">
                                    <div className="space-y-5">
                                        {PROJECTS.map((p) => (
                                            <div key={p.id}>
                                                <div className="flex flex-wrap items-baseline gap-x-3">
                                                    <span className="font-display font-bold text-slate-100">{p.name}</span>
                                                    <span className="font-mono-jb text-[11px] text-blue-400">{p.domain}</span>
                                                </div>
                                                <p className="mt-1 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Row>

                                <Row label="Technologies">
                                    <div className="space-y-3">
                                        {SKILL_GROUPS.map((g) => (
                                            <div key={g.name}>
                                                <span className="font-mono-jb text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                                    {g.name}
                                                </span>
                                                <p className="mt-1 text-sm text-slate-300">{g.skills.join(" · ")}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Row>

                                <Row label="Experience">
                                    <div>
                                        <span className="font-display font-bold text-slate-100">Web Developer — Independent & Client Work</span>
                                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                            Full design-to-deploy ownership of production websites: discovery, UI/UX, development,
                                            launch and iteration. Three live client-facing builds showcased above.
                                        </p>
                                    </div>
                                </Row>

                                <Row label="Education">
                                    <div>
                                        <span className="font-display font-bold text-slate-100">Full-Stack Web Development — Coding Boot Camp Certificate</span>
                                        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                                            Intensive full-stack program covering JavaScript, React, Node.js and databases.
                                            Continuing practice in AI-assisted development with Emergent and Claude.
                                        </p>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
