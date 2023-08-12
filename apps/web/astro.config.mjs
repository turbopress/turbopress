import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [mdx(), tailwind()],
  server: {
    port: parseInt(process.env.ASTRO_PORT ?? "3000"),
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
