import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
       // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        name: "AntiNormieHub",
        description: "A movie app",
        short_name: "MovieHub",
        theme_color: "#000000",
        background_color: "#050505",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
