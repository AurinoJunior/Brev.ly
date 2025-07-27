import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    pool: "threads", // Força utilização da configuração de pool de threads
    poolOptions: {
      threads: {
        singleThread: true, // Roda sem paralelismo
      },
    },
  },
  plugins: [tsconfigPaths()],
})
