import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/data/portfolio";
import { lenisStore } from "@/lib/scroll";

const Projects = () => {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (preview) lenisStore.current?.stop();
        else lenisStore.current?.start();
    }, [preview]);

    return (
        <section id="work" className="relative py-24 sm:py-36">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-14 sm:mb-20"
                >
                    <span className="font-mono-jb text-[11px] uppercase tracking-[0.3em] text-blue-400">
                        01 — Selected Work
                    </span>
                    <h2 className="mt-4 font-display font-bold tracking-tight text-3xl sm:text-5xl text-slate-50 max-w-2xl leading-tight">
                        Websites I've designed & shipped.
                    </h2>
                    <p className="mt-5 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
                        Three production builds, three different industries — each one live, client-facing and built
                        end to end. Click any card for a closer look.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard
                            key={p.id}
                            project={p}
                            index={i}
                            featured={i === 0}
                            onPreview={setPreview}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {preview && (
                    <motion.div
                        data-testid="project-preview-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setPreview(null)}
                        className="fixed inset-0 z-[70] bg-[#050811]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.92, y: 32, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 16, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0A0F1D] shadow-[0_0_80px_rgba(37,99,235,0.15)]"
                        >
                            <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/[0.07]">
                                <div>
                                    <span className="font-mono-jb text-[10px] uppercase tracking-[0.25em] text-blue-400">
                                        {preview.tag}
                                    </span>
                                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-50">{preview.name}</h3>
                                </div>
                                <button
                                    data-testid="project-preview-close-button"
                                    onClick={() => setPreview(null)}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors duration-300"
                                    aria-label="Close preview"
                                >
                                    <X size={17} />
                                </button>
                            </div>
                            <img
                                src={preview.image}
                                alt={`${preview.name} landing page`}
                                className="w-full object-cover object-top"
                            />
                            <div className="px-5 sm:px-7 py-6">
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{preview.description}</p>
                                <a
                                    data-testid="project-preview-visit-button"
                                    href={preview.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-6 py-3 transition-colors duration-300"
                                >
                                    Visit {preview.domain}
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
