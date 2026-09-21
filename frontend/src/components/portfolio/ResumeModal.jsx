import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Mail, Linkedin, Github, Download, Phone } from "lucide-react";
import { PROFILE, PROJECTS, SKILL_GROUPS, EXPERIENCE, EDUCATION } from "@/data/portfolio";
import { lenisStore } from "@/lib/scroll";

const Row = ({ label, children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-t border-white/[0.08]">
        <span className="sm:col-span-3 font-mono-jb text-[10px] uppercase tracking-[0.25em] text-emerald-400 pt-1">
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
                    className="fixed inset-0 z-[80] bg-[#060B08]/85 backdrop-blur-md overflow-y-auto"
                >
                    <motion.div
                        data-testid="resume-modal"
                        initial={{ y: 60, opacity: 0, scale: 0.97 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 40, opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-3xl mx-auto my-6 sm:my-12 rounded-2xl border border-white/10 bg-[#0A110D] shadow-[0_0_100px_rgba(5,150,105,0.18)]"
                    >
                        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-white/[0.07] bg-[#0A110D]/95 backdrop-blur-xl rounded-t-2xl">
                            <span className="hidden sm:block font-mono-jb text-[10px] uppercase tracking-[0.25em] text-slate-500">
                                Resume — {PROFILE.name}
                            </span>
                            <div className="flex items-center gap-2.5">
                                <a
                                    data-testid="resume-download-button"
                                    href={PROFILE.resumePdf}
                                    download="KylaFitzpatrick_Resume.pdf"
                                    className="flex items-center gap-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full px-4 py-2 transition-colors duration-300"
                                >
                                    <Download size={13} />
                                    Download PDF
                                </a>
                                <button
                                    data-testid="resume-print-button"
                                    onClick={() => window.print()}
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-200 border border-white/15 hover:border-emerald-500/50 rounded-full px-4 py-2 transition-colors duration-300"
                                >
                                    <Printer size={13} />
                                    Print
                                </button>
                                <button
                                    data-testid="resume-close-button"
                                    onClick={onClose}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500/50 transition-colors duration-300"
                                    aria-label="Close resume"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        <div id="resume-sheet" className="px-6 sm:px-10 py-10 bg-[#0A110D] rounded-b-2xl">
                            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-50 tracking-tight">
                                {PROFILE.name}
                            </h2>
                            <p className="mt-1 font-display font-bold text-lg text-emerald-400">
                                Software Engineer — 8 years in QA & engineering
                            </p>
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono-jb text-[11px] text-slate-400">
                                <span className="flex items-center gap-1.5"><Phone size={12} className="text-emerald-400" />{PROFILE.phone}</span>
                                <span className="flex items-center gap-1.5"><Mail size={12} className="text-emerald-400" />{PROFILE.email}</span>
                                <span className="flex items-center gap-1.5"><Github size={12} className="text-emerald-400" />github.com/KylaFitzpatrick</span>
                                <span className="flex items-center gap-1.5"><Linkedin size={12} className="text-emerald-400" />linkedin.com/in/kylaannefitzpatrick</span>
                            </div>

                            <div className="mt-8">
                                <Row label="Summary">
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                        Software engineer leveraging 8 years of experience in QA and collaboration in engineering
                                        environments — currently Software Engineer III at Walmart Global Tech. Also designs and ships
                                        fast, modern, production-ready websites end to end, pairing a modern React stack with an
                                        AI-augmented workflow (Emergent, Claude) and Adobe design tooling.
                                    </p>
                                </Row>

                                <Row label="Selected Work">
                                    <div className="space-y-5">
                                        {PROJECTS.map((p) => (
                                            <div key={p.id}>
                                                <div className="flex flex-wrap items-baseline gap-x-3">
                                                    <span className="font-display font-bold text-slate-100">{p.name}</span>
                                                    <span className="font-mono-jb text-[11px] text-emerald-400">{p.domain}</span>
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
                                    <div className="space-y-6">
                                        {EXPERIENCE.map((e) => (
                                            <div key={`${e.company}-${e.when}`}>
                                                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                                                    <span className="font-display font-bold text-slate-100">
                                                        {e.role} <span className="text-emerald-400">— {e.company}</span>
                                                    </span>
                                                    <span className="font-mono-jb text-[10px] uppercase tracking-[0.15em] text-slate-500">
                                                        {e.where} · {e.when}
                                                    </span>
                                                </div>
                                                <ul className="mt-1.5 space-y-1">
                                                    {e.points.map((p) => (
                                                        <li key={p} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                                                            <span className="text-emerald-500 mt-[2px]">▸</span>
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </Row>

                                <Row label="Education">
                                    <div className="space-y-4">
                                        {EDUCATION.map((e) => (
                                            <div key={e.title}>
                                                <span className="font-display font-bold text-slate-100">{e.title}</span>
                                                <p className="mt-0.5 text-sm text-slate-400">{e.school}</p>
                                                {e.note && <p className="mt-0.5 text-sm text-slate-500">{e.note}</p>}
                                            </div>
                                        ))}
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
