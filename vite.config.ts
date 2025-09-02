import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  build: { 
    outDir: 'dist', 
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Force completely different bundle names with timestamp
        entryFileNames: `assets/entry-${Date.now()}-[name]-[hash].js`,
        chunkFileNames: `assets/chunk-${Date.now()}-[name]-[hash].js`,
        assetFileNames: `assets/asset-${Date.now()}-[name]-[hash].[ext]`,
        // Ensure no caching at bundle level
        manualChunks: undefined
      }
    }
  }
}));