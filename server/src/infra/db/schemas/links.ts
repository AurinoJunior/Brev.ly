import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core"
import { uuidv7 } from "uuidv7"

export const links = pgTable("links", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => uuidv7()),
  url: text("name").notNull(),
  shortUrl: text("remote_key").notNull().unique(),
  visits: integer("visits").notNull().default(0),
  csvRemoteUrl: text("remote_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})
