import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { PROFILE } from "@/data/portfolio";

const LINKS = [
    { label: "Work", id: "#work", testid: "nav-link-projects" },
    { label: "Manifesto", id: "#manifesto", testid: "nav-link-manifesto" },
    { label: "Skills", id: "#skills", testid: "nav-link-skills" },
    { label: "Contact", id: "#contact", testid: "nav-link-contact" },
];

const Navbar = ({ onResume }) => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        scrollToSection(id);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
                scrolled
                    ? "bg-[#050811]/80 backdrop-blur-xl border-b border-white/[0.06]"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 h-[72px] flex items-center justify-between">
                <button
                    data-testid="nav-brand-logo"
                    onClick={() => go("#top")}
                    className="flex items-center gap-3 group"
                >
                    <span className="font-mono-jb text-xs font-medium w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500/20">
                        KF
                    </span>
                    <span className="font-display font-bold text-sm tracking-wide text-slate-100 hidden sm:block">
                        {PROFILE.name}
                    </span>
                </button>

                <div className="hidden md:flex items-center gap-8">
                    {LINKS.map((l) => (
                        <button
                            key={l.id}
                            data-testid={l.testid}
                            onClick={() => go(l.id)}
                            className="font-mono-jb text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-blue-400 transition-colors duration-300"
                        >
                            {l.label}
                        </button>
                    ))}
                    <button
                        data-testid="nav-resume-button"
                        onClick={onResume}
                        className="flex items-center gap-2 font-mono-jb text-[11px] uppercase tracking-[0.2em] text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-colors duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
                    >
                        <FileText size={13} />
                        Resume
                    </button>
                </div>

                <button
                    data-testid="nav-mobile-menu-button"
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-slate-300 p-2"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden bg-[#050811]/95 backdrop-blur-xl border-b border-white/[0.06]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {LINKS.map((l) => (
                                <button
                                    key={l.id}
                                    data-testid={`mobile-${l.testid}`}
                                    onClick={() => go(l.id)}
                                    className="text-left font-mono-jb text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    {l.label}
                                </button>
                            ))}
                            <button
                                data-testid="mobile-nav-resume-button"
                                onClick={() => {
                                    setOpen(false);
                                    onResume();
                                }}
                                className="flex items-center gap-2 font-mono-jb text-xs uppercase tracking-[0.2em] text-blue-400"
                            >
                                <FileText size={14} /> Resume
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;
