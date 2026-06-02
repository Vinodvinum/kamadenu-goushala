import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  site: "https://kamadenugoushala.org",
  server: {
    port: 4321,
  },
  vite: {
    define: {
      'process.env': process.env,
    },
    optimizeDeps: {
      include: ['@sanity/client', '@sanity/image-url'],
    },
  },
});
