import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css",
          dest: ".", // keeps it next to JS build
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "ReactSearchBox",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // 👇 This prevents bundling React and ReactDOM
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
