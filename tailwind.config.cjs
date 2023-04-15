/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(165, 180 , 252, 0.35)",
                    "0 0px 65px rgba(165, 180 ,252, 0.2)",
                ]
            }
        },
    },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
    ],
}
