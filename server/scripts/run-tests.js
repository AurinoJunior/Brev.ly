const { spawn } = require("node:child_process");

const commandsToRunTests = [
  "yarn services:up",
  "node scripts/wait-for-db.js",
  "node scripts/reset-db.js",
  "yarn db:migrate:test",
  "dotenv -e .env.test -- vitest run",
].join(" && ");

spawn(commandsToRunTests, { stdio: "inherit", shell: true });

function servicesStop() {
  console.warn("Encerrando...");

  spawn("yarn services:stop", {
    detached: true,
    shell: true,
    windowsHide: true,
    stdio: "ignore",
  });
}

process.on("SIGINT", servicesStop);
process.on("SIGTERM", servicesStop);
process.on("exit", servicesStop);
