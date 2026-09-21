import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/data/portfolio";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(PROFILE.email);
            setCopied(true);
            toast.success("Email copied to clipboard");
            setTimeout(() => setCopied(false), 2200);
        } catch {
            toast.error("Couldn't copy — email is " + PROFILE.email);
        }
    };

    return (
        <section id="contact" className="relative py-24 sm:py-36 bg-[#0A0F1D]/40 border-t border-white/[0.05] overflow-hidden">
            <div className="absolute -bottom-40 left-[-10%] w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-[140px] pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="font-mono-jb text-[11px] uppercase tracking-[0.3em] text-blue-400">
                        04 — Contact
                    </span>
                    <h2 className="mt-4 font-display font-extrabold tracking-tight text-4xl sm:text-6xl text-slate-50 leading-[1.02] max-w-3xl">
                        Let's build your next <span className="text-blue-400">website</span>.
                    </h2>
                    <p className="mt-6 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
                        Recruiting for a web role, or need a site shipped fast? My inbox is open — I usually reply within a day.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <button
                            data-testid="contact-email-copy-button"
                            onClick={copyEmail}
                            className="group flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-md pl-6 pr-2.5 py-2.5 hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <span className="font-mono-jb text-sm text-slate-200">{PROFILE.email}</span>
                            <span className="w-9 h-9 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300">
                                {copied ? <Check size={15} /> : <Copy size={15} />}
                            </span>
                        </button>
                        <a
                            data-testid="contact-email-link"
                            href={`mailto:${PROFILE.email}`}
                            className="flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-6 py-3.5 transition-colors duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
                        >
                            <Mail size={15} />
                            Send an email
                        </a>
                    </div>

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                        <a
                            data-testid="contact-linkedin-link"
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0F172A]/70 backdrop-blur-md p-6 hover:border-blue-500/40 transition-colors duration-300"
                        >
                            <span className="flex items-center gap-4">
                                <span className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                                    <Linkedin size={19} />
                                </span>
                                <span>
                                    <span className="block font-display font-bold text-slate-100">LinkedIn</span>
                                    <span className="block font-mono-jb text-[10px] text-slate-500 mt-0.5">in/kylaannefitzpatrick</span>
                                </span>
                            </span>
                            <ArrowUpRight size={18} className="text-slate-500 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            data-testid="contact-github-link"
                            href={PROFILE.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0F172A]/70 backdrop-blur-md p-6 hover:border-blue-500/40 transition-colors duration-300"
                        >
                            <span className="flex items-center gap-4">
                                <span className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                                    <Github size={19} />
                                </span>
                                <span>
                                    <span className="block font-display font-bold text-slate-100">GitHub</span>
                                    <span className="block font-mono-jb text-[10px] text-slate-500 mt-0.5">@KylaFitzpatrick</span>
                                </span>
                            </span>
                            <ArrowUpRight size={18} className="text-slate-500 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
