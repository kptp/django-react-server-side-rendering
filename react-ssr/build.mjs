import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  outfile: "dist/bundle.js",
  platform: "node",
  plugins: [
    polyfillNode({
      polyfills: {},
    }),
  ],
});
