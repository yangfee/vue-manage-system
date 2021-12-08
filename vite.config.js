import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./",
  plugins: [vue()],
  optimizeDeps: {
    include: ["schart.js"],
  },
  resolve: {
    alias: [
      {
        // @/a/b === src/a/b
        find: "@/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        // ~/a/b === src/a/b
        find: "~/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        // ~mode  === node_modules/mode
        find: /~([^\/]+)/,
        replacement: `${path.resolve(__dirname, "node_modules/$1")}/`,
      },
    ],
  },
});
