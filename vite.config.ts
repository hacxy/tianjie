import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'WM',
      fileName: (format) => `index.${format === 'umd' ? 'min.js' : 'js'}`
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [dts()]
});
