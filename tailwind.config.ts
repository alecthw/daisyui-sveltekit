import { addDynamicIconSelectors } from '@iconify/tailwind';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  plugins: [daisyui, addDynamicIconSelectors()],
} satisfies Config;
