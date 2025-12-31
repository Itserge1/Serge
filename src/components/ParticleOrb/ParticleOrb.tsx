'use client';

import { useState, useEffect } from 'react';
import styles from './ParticleOrb.module.css';

interface Particle {
    z: number;
    y: number;
    hue: number;
    saturation: number; // Add this
    lightness: number;  // Add this
    delay: number;
    id: number;
}

export default function ParticleOrb() {
    const totalParticles = 300;
    const orbSize = 160;
    const particleSize = 2;
    const animationTime = 14;
    const baseHue = 190; // Cyan hue

    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: totalParticles }, (_, i) => ({
            z: Math.random() * 360,
            y: Math.random() * 360,
            hue: baseHue, // Keep same hue (cyan)
            saturation: 100 - (70 / totalParticles * (i + 1)), // Fade from 100% to 30%
            lightness: 50 + (50 / totalParticles * (i + 1)), // Fade from 50% to 100% (white)
            delay: (i + 1) * 0.01,
            id: i
        }));

        setParticles(newParticles);
    }, []);

    useEffect(() => {
        if (particles.length === 0) return;

        const styleId = 'particle-orb-styles';
        let styleEl = document.getElementById(styleId);

        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }

        styleEl.textContent = `
            @keyframes orb-rotate {
                100% {
                    transform: rotateY(360deg) rotateX(360deg);
                }
            }

            .orb-wrap {
                animation: orb-rotate ${animationTime}s infinite linear;
                transform-style: preserve-3d;
            }

            ${particles.map(p => `
                @keyframes orb-orbit-${p.id} {
                    20% {
                        opacity: 1;
                    }
                    30% {
                        transform: rotateZ(-${p.z}deg) rotateY(${p.y}deg) translateX(${orbSize}px) rotateZ(${p.z}deg);
                    }
                    80% {
                        transform: rotateZ(-${p.z}deg) rotateY(${p.y}deg) translateX(${orbSize}px) rotateZ(${p.z}deg);
                        opacity: 1;
                    }
                    100% {
                        transform: rotateZ(-${p.z}deg) rotateY(${p.y}deg) translateX(${orbSize * 3}px) rotateZ(${p.z}deg);
                    }
                }

                .orb-particle-${p.id} {
                    position: absolute;
                    width: ${particleSize}px;
                    height: ${particleSize}px;
                    left: -${particleSize / 2}px;
                    top: -${particleSize / 2}px;
                    border-radius: 50%;
                    transform-style: preserve-3d;
                    animation: orb-orbit-${p.id} ${animationTime}s infinite;
                    animation-delay: ${p.delay}s;
                    background-color: hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%);
                    opacity: 0;
                }
            `).join('\n')}
        `;

        return () => {
            const el = document.getElementById(styleId);
            if (el) el.remove();
        };
    }, [particles, animationTime, orbSize, particleSize]);

    if (particles.length === 0) {
        return <div className={styles.container} />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.perspectiveWrapper}>
                <div className={`${styles.particleWrap} orb-wrap`}>
                    {particles.map(p => (
                        <div
                            key={p.id}
                            className={`orb-particle-${p.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}