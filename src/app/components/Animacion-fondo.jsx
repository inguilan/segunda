import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import React, { useEffect, useState } from 'react';


const AnimacionFondo = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setIsInitialized(true);
        };

        initializeParticles();
    }, []);

    return (
        isInitialized && (
            <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-[-1] pointer-events-none">
                <Particles
                    id="tsparticles"
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                                onHover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#ffffff',
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outModes: {
                                    default: 'bounce',
                                },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: 'circle',
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        )
    );
};

export default AnimacionFondo;
