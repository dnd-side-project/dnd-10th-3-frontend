import type { Config } from 'tailwindcss';

import { borderRadius, boxShadow, colors, spacing } from './src/styles/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/foundations/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        mainGradient: 'linear-gradient(0deg, rgb(255,255,255,1) 0%, rgb(251,241,248,1) 100%)',
      },
      colors,
      spacing,
      borderRadius,
      boxShadow,
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
    screens: {
      375: { max: '375px' },
      390: { max: '390px' },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
