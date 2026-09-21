import { Github } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const Footer = () => (
    <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
                <span className="font-display font-bold text-slate-200">{PROFILE.name}</span>
                <p className="mt-1 font-mono-jb text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    © 2026 — Designed & built with React
                </p>
            </div>
            <a
                data-testid="footer-repo-link"
                href={PROFILE.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-mono-jb text-[11px] uppercase tracking-[0.2em] text-slate-500 hover:text-blue-400 transition-colors duration-300"
            >
                <Github size={14} />
                This site's source on GitHub
            </a>
        </div>
    </footer>
);

export default Footer;
