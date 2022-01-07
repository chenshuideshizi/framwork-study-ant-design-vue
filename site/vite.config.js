import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// import md from '../plugin/md';
import docs from '../plugin/docs/index.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    docs(),
    // md(),
    vue({include: [/\.vue$/, /\.md$/],})
  ],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@': './src'
    },
    extensions: ['.js', '.vue']
  }
})
