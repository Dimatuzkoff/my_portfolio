module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#f59e0b",
                secondary: "#ec4899",
                dark: "#111827",
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};