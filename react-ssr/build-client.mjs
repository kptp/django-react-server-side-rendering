import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
  entryPoints: ["src/client.tsx"],
  bundle: true,
  outfile: "dist/client-bundle.js",
  platform: "node",
  plugins: [
    polyfillNode({
      polyfills: {},
    }),
  ],
});
