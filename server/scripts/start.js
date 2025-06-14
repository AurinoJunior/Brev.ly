const { spawn } = require("node:child_process")

const commandStart = [
  "yarn services:up",
  "node scripts/wait-for-db.js",
  "yarn db:migrate",
  "yarn tsx watch --env-file .env src/infra/http/server.ts",
].join(" && ")

spawn(commandStart, { stdio: "inherit", shell: true })

function servicesStop() {
  console.warn("Encerrando...")

  spawn("yarn services:stop", {
    detached: true,
    shell: true,
    windowsHide: true,
    stdio: "ignore",
  })
}

process.on("SIGINT", servicesStop) // SIGINT -> Saida forçada Ex: ctrl+c
process.on("SIGTERM", servicesStop) // SIGTERM -> saida natural
