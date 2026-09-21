import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe, ScanSearch } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const ProjectCard = ({ project, index, featured, onPreview }) => {
    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
    };

    return (
        <motion.article
            data-testid={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
            onMouseMove={onMove}
            className={`spotlight-card group rounded-2xl border border-white/[0.08] bg-[#0F172A]/70 backdrop-blur-md overflow-hidden transition-colors duration-500 hover:border-blue-500/40 ${
                featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
            }`}
        >
            <div className={featured ? "" : ""}>
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0A0F1D]/80">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
                    <span className="ml-3 flex items-center gap-1.5 font-mono-jb text-[10px] text-slate-500 bg-white/[0.04] rounded-md px-2.5 py-1">
                        <Globe size={10} className="text-blue-400" />
                        {project.domain}
                    </span>
                    <span className="ml-auto flex items-center gap-1.5 font-mono-jb text-[9px] uppercase tracking-[0.15em] text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
                    </span>
                </div>
                <button
                    data-testid={`project-preview-trigger-${project.id}`}
                    onClick={() => onPreview(project)}
                    className="block w-full overflow-hidden cursor-pointer"
                    aria-label={`Preview ${project.name}`}
                >
                    <div className={`overflow-hidden ${featured ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
                        <img
                            src={project.image}
                            alt={`${project.name} landing page screenshot`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                    </div>
                </button>
            </div>

            <div className="relative z-[2] p-6 sm:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <span className="font-mono-jb text-[10px] uppercase tracking-[0.25em] text-blue-400">
                            {String(index + 1).padStart(2, "0")} — {project.tag}
                        </span>
                        <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl text-slate-50">{project.name}</h3>
                    </div>
                    <button
                        data-testid={`project-quickview-${project.id}`}
                        onClick={() => onPreview(project)}
                        className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors duration-300"
                        aria-label="Quick view"
                    >
                        <ScanSearch size={16} />
                    </button>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="font-mono-jb text-[10px] uppercase tracking-[0.12em] text-slate-300 border border-white/10 bg-white/[0.03] rounded-full px-3 py-1.5"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                    <a
                        data-testid={`project-visit-${project.id}`}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-5 py-2.5 transition-colors duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.45)]"
                    >
                        Visit site
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                    <a
                        data-testid={`project-github-${project.id}`}
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/40 rounded-full px-5 py-2.5 transition-colors duration-300"
                    >
                        <Github size={15} />
                        GitHub
                    </a>
                </div>
            </div>
        </motion.article>
    );
};

export default ProjectCard;
