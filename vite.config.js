import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      tailwindconfig: path.resolve(__dirname, "./tailwind.config.cjs"),
    },
  },

  optimizeDeps: {
    include: ["tailwindconfig"],
  },

  build: {
    commonjsOptions: {
      include: [/tailwind.config.cjs/, /node_modules/],
    },
  },
});
