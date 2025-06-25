const { exec } = require("node:child_process")

function handleReturn(_error, stdout) {
  if (stdout.search("accepting connections") === -1) {
    process.stdout.write(".")
    setTimeout(checkPostgres, 500)
    return
  }

  process.stdout.write("\n🟢 Postgres está pronto e aceitando conexões!\n")
}

function checkPostgres() {
  exec("docker exec postgres_brev_ly pg_isready --host localhost", handleReturn)
}

process.stdout.write("\n\n🔴 Aguardando Postgres aceitar conexões")
checkPostgres()
