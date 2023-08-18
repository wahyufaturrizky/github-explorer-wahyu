/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#2C9CDB",
        "primary-gray": "#808080",
        "light-gray": "#F2F2F2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
