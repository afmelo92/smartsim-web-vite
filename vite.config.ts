import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// transform svg to react component
export default defineConfig({
  plugins: [react(), svgr()],
});
