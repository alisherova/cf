import fs from "node:fs";
import { defineConfig } from "vite";
import react from "vite-preset-react";
import * as esbuild from "esbuild";

const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some((matcher) => matcher.test(id))) {
      const file = fs.readFileSync(id, { encoding: "utf-8" });
      return esbuild.transformSync(file, { loader: "jsx" });
    }
  },
});

export default defineConfig({
  plugins: [react({ removeDevtoolsInProd: true, injectReact: true })],
  base: "/cf/",
  build: {
    rollupOptions: {
      plugins: [rollupPlugin([sourceJSPattern])],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        jsx: "automatic",
      },
    },
  },
  esbuild: {
    loader: "jsx",
    include: [sourceJSPattern],
    exclude: [],
  },
  // define: {
  //   // By default, Vite doesn't include shims for NodeJS/
  //   // necessary for segment analytics lib to work
  //   global: {},
  // },
});
