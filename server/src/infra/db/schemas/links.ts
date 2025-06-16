import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { uuidv7 } from "uuidv7"

export const links = pgTable("links", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  url: text("url").notNull(),
  shortURL: text("short_url").notNull().unique(),
  visits: integer("visits").notNull().default(0),
  csvRemoteURL: text("csv_remote_url").default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
