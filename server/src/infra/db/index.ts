import { env } from "@/env"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { links } from "./schemas/links"

export const pg = postgres(env.DATABASE_URL)
export const db = drizzle(pg, { schema: { links } })
