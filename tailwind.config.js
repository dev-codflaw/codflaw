/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                firaCode: ['Fira Code', 'monospace']
            },
            keyframes: {
                twinkle: {
                    '0%, 100%': { opacity: 0.8 },
                    '50%': { opacity: 1 },
                },
                fadeInScale: {
                    '0%':   { opacity: 0, transform: 'scale(0.9)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
            },
            animation: {
                twinkle: 'twinkle 2s infinite ease-in-out',
                fadeInScale: 'fadeInScale 1s ease-out forwards',
            },
        },
    },
    plugins: [],
}
