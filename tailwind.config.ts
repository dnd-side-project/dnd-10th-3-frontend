import type { Config } from 'tailwindcss';

import { borderRadius, boxShadow, colors, spacing } from './styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors,
      spacing,
      borderRadius,
      boxShadow,
    },
    screens: {
      375: { max: '375px' },
      390: { max: '390px' },
    },
  },
  plugins: [],
};
export default config;
