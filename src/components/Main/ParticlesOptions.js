export const ParticlesOptions = [
    {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
                resize: true,
            },
            modes: {
                bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: 0.15,
                    size: 22.5,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                enable: false,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.25,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 6000,
                },
                /*                 value: 25, */
            },
            opacity: {
                value: 0.025,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {
                    min: 5,
                    max: 20,
                },
            },
        },
        detectRetina: true,
    },
];
