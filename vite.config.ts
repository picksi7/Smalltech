import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
// Кастомный домен smalltech.ontico.ru обслуживается из корня,
// поэтому base всегда "/". Файл public/CNAME сохраняет привязку домена при каждом деплое.
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  ssgOptions: {
    // Маршруты для статической генерации
    includedRoutes() {
      return [
        "/",
        "/manifesto",
        "/research",
        "/community",
        "/join",
        "/partnership",
        "/materials",
      ];
    },
    // Копируем index.html как 404.html для deep links на GitHub Pages
    onFinished() {
      const dist = path.resolve(__dirname, "dist");
      if (fs.existsSync(`${dist}/index.html`)) {
        fs.copyFileSync(`${dist}/index.html`, `${dist}/404.html`);
      }
    },
  },
}));
