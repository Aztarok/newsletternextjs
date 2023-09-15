/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                darkSlateGray: "hsl(234, 29%, 20%)",
                tomato: "hsl(4, 100%, 67%)",
                lightTomato: "hsl(4, 100%, 67%, 0.2)",
                charcoalGray: "hsl(235, 18%, 26%)",
                grayBetter: "hsl(231, 7%, 60%)",
                whiteBetter: "hsl(0, 0%, 100%)"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            }
        }
    },
    plugins: []
};
