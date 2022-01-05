module.exports = {
    darkMode: "class",

    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryLight: "#FFFFFF",
                lightAccent: "#00C480",
                primaryDark: "#151516",
                darkAccent: "#00C480",
                textLight: "#151516",
                textDark: "#FFFFFF",
            },
            animation: {
                "bounce-slow": "bounce 4s linear infinite",
                "bounce-once": "bounce 4s linear infinite ",
            },
        },
    },
    variants: {
        display: ["group-hover"],
    },
    plugins: [],
};
