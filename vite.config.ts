import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
    exclude: ["tempo-devtools"],
  },
  plugins: [react(), process.env.NODE_ENV === "development" && tempo()].filter(
    Boolean,
  ),
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: process.env.NODE_ENV === "production" ? ["tempo-devtools"] : [],
      output: {
        manualChunks: (id) => {
          // Exclude tempobook from production builds
          if (
            process.env.NODE_ENV === "production" &&
            id.includes("tempobook")
          ) {
            return undefined;
          }

          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("@radix-ui")) {
              return "ui";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 300,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.warn",
          "console.error",
        ],
        passes: 10,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        reduce_vars: true,
        reduce_funcs: true,
        collapse_vars: true,
        dead_code: true,
        unused: true,
        join_vars: true,
        sequences: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        loops: true,
        hoist_funs: true,
        hoist_vars: true,
        if_return: true,
        inline: true,
        side_effects: false,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
      },
    },
    sourcemap: false,
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    target: "es2020",
    reportCompressedSize: false,
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  },
});
