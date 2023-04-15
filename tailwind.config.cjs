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
                    "0 0px 20px rgba(49, 46 , 129, 0.5)",
                    "0 0px 65px rgba(49, 46 ,129, 0.5)",
                ]
            }
        },
    },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
    ],
}
