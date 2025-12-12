import { useEffect, useRef } from "react";

interface useFadeInOptions {
    rootMargin?: string;
    threshold?: number;
}

export const useFadeIn = (options = {} as useFadeInOptions) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: options.rootMargin || '0px',
            threshold: options.threshold || 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [options.rootMargin, options.threshold]);

    return elementRef;
};