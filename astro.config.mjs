// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://eclipsia.undo.it/",
  base: "",

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/.direnv/**"],
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
});
