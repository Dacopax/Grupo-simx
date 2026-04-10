/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                '2xl': '1600px',
            },
        },
        extend: {
            colors: {
                // Monolithic Matte Turquoise Palette
                turquoise: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    200: '#99f6e4',
                    300: '#5eead4',
                    400: '#2dd4bf', // Main Matte Accent
                    500: '#14b8a6',
                    600: '#0d9488',
                    700: '#0f766e',
                    800: '#115e59',
                    900: '#134e4a',
                    950: '#042f2e',
                },
                simx: {
                    // Elite Corporate Brand Scale
                    brand: {
                        50: '#E6FDFF',
                        100: '#B8F9FF',
                        200: '#8AF5FF',
                        300: '#5CF1FF',
                        400: '#2EEEFF',
                        500: '#00EAFF',
                        600: '#00C0D1',
                        700: '#00838F',
                        800: '#086775',
                        900: '#044D57', // Matte Background Start
                        950: '#022C32', // Deep Matte Background
                    },
                    primary: {
                        500: '#044D57',
                        950: '#022C32',
                    }
                }
            },
            fontFamily: {
                header: ['var(--font-sora)', 'Sora', 'sans-serif'],
                body: ['var(--font-dmsans)', 'DM Sans', 'sans-serif'],
            },
            backgroundImage: {
                'industrial-gradient': "linear-gradient(to bottom, #044D57, #022C32)",
                'arctic-glass': "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)",
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
            },
        },
    },
    plugins: [],
}
