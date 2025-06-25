const { exec } = require("node:child_process")

function handleReturn(error, _stdout) {
  if (error) {
    console.error(error)
    process.stdout.write("❌ Erro ao limpar o banco de dados\n")
    return
  }
}

function clearDatabase() {
  process.stdout.write("🟢 Limpando o banco de dados...\n")
  const SQL_COMMAND =
    "DROP SCHEMA IF EXISTS drizzle CASCADE; DROP SCHEMA IF EXISTS public CASCADE; CREATE SCHEMA public;"
  exec(
    `docker exec postgres_brev_ly psql -U docker -d brev_ly_test -c '${SQL_COMMAND}'`,
    handleReturn
  )
}

clearDatabase()
