import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
// import md from '../plugin/md';
import docs from '../plugin/docs/index.js';
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Inspect(), // only applies in dev mode
    docs(),
    // md(),
    vue({include: [/\.vue$/, /\.md$/],})
  ],
  server: {
    port: 3004
  },
  resolve: {
    alias: {
      '@': './src'
    },
    extensions: ['.js', '.vue']
  }
})
