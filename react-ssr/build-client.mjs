import { build } from "esbuild";

build({
  entryPoints: ["src/client.tsx"],
  bundle: true,
  outfile: "dist/client-bundle.js",
  platform: "browser",
  plugins: [],
  minify: true,
  treeShaking: true,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
