import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { uuidv7 } from "uuidv7"

export const links = pgTable("links", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  url: text("url").notNull(),
  shortURL: text("short_url").unique().notNull(),
  visits: integer("visits").default(0).notNull(),
  csvRemoteURL: text("csv_remote_url").default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
