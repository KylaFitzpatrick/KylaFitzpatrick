import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { lenisStore } from "@/lib/scroll";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import Projects from "@/components/portfolio/Projects";
import Manifesto from "@/components/portfolio/Manifesto";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ResumeModal from "@/components/portfolio/ResumeModal";

function App() {
    const [resumeOpen, setResumeOpen] = useState(false);
    const openResume = useCallback(() => setResumeOpen(true), []);
    const closeResume = useCallback(() => setResumeOpen(false), []);

    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
        lenisStore.current = lenis;
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisStore.current = null;
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#050811] text-slate-100 antialiased">
            <div className="grain" />
            <Toaster position="bottom-right" theme="dark" />
            <Navbar onResume={openResume} />
            <main>
                <Hero onResume={openResume} />
                <Marquee />
                <Projects />
                <Manifesto />
                <Skills />
                <Contact />
            </main>
            <Footer />
            <ResumeModal open={resumeOpen} onClose={closeResume} />
        </div>
    );
}

export default App;
