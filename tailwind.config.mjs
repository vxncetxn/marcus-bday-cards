/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/noise-light.png')",
      },
    },
    fontFamily: {
      sans: ["PP Telegraf", ...defaultTheme.fontFamily.sans],
      serif: ["PP Acma", ...defaultTheme.fontFamily.serif],
      aside: ["PP Neue Montreal"],
    },
    fontMetrics: {
      sans: {
        capHeight: 665,
        ascent: 965,
        descent: -300,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      serif: {
        capHeight: 780,
        ascent: 1032,
        descent: -480,
        lineGap: 0,
        unitsPerEm: 1000,
      },
      aside: {
        capHeight: 715,
        ascent: 958,
        descent: -242,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    },
    spacing: {
      0: "0",
      2: "0.125rem",
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
      80: "5rem",
      96: "6rem",
      120: "7.5rem",
      160: "10rem",
      200: "12.5rem",
      240: "15rem",
      280: "17.5rem",
      320: "20rem",
      360: "22.5rem",
    },
  },
  plugins: [
    require("tailwindcss-capsize"),
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("owl", "&>*+*");
    }),
  ],
};
