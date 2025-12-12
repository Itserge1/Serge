"use client"

import { useFadeIn } from '@/hooks/useFadeIn';
import  { ReactNode} from "react";
import styles from './FadeInSection.module.css';

interface FadeInSectionProps {
    children: ReactNode;
    className?: string;
}

const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
    const fadeInRef = useFadeIn();

    return (
        <div
            ref={fadeInRef}
            className={`fade-in-section ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;