import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                "mmax-340": "repeat(auto-fit, minmax(340px, 1fr))",
            },
            borderColor: {
                "praca-grey": "#2E2E2E",
            },
            backgroundColor: {
                "praca-grey": "#292929",
            },
        },
    },
    plugins: [],
};
export default config;
