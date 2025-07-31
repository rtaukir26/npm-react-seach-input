import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"), // 👈 Add this
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/index.css",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "ReactSearchInput",
      fileName: () => `index.js`,
      formats: ["es"],
    },
    rollupOptions: {
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
