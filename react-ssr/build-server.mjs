import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
  entryPoints: ["src/server.tsx"],
  bundle: true,
  outfile: "dist/server-bundle.js",
  platform: "node",
  plugins: [
    polyfillNode({
      polyfills: {},
    }),
  ],
});
