import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    compression({
      algorithm: 'gzip',
    }),
    // compression({
    //   algorithm: 'brotliCompress',
    // }),
  ],
});
