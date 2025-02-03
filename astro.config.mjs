// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

import svelte from "@astrojs/svelte";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), db()],
  devToolbar: { enabled: false },
  adapter: vercel(),
  output: "server",
});