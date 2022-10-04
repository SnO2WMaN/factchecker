import pluginReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import pluginTSconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  publicDir: "public",
  plugins: [
    pluginReact(),
    pluginTSconfigPaths(),
    pluginRewriteAll(),
  ],
});
