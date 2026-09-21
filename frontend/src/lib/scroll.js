export const lenisStore = { current: null };

export const scrollToSection = (id) => {
    if (lenisStore.current) {
        lenisStore.current.scrollTo(id, { offset: -72, duration: 1.4 });
    } else {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
};
