import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/WhatColors",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        theme_color: "#ffffff",
        background_color: "#008080",
        display: "standalone",
        scope: "/WhatColors",
        start_url: "/WhatColors",
        description: "WhatColors is Online Color Blind Test Website",
        name: "WhatColors: ColorBlind Test",
        short_name: "WhatColors",
        icons: [
          {
            src: "/WhatColors/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "/WhatColors/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/WhatColors/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/WhatColors/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        clientsClaim: true,
        skipWaiting: true,
        sourcemap: false,
      },
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
