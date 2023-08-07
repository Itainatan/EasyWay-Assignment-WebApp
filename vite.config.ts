import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  envPrefix: "REACT_APP_",
  build: {
    outDir: "build",
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: +process.env.PORT || 3000,
  },
});
