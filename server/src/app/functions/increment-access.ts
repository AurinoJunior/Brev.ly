import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { eq } from "drizzle-orm"
import { LinkNotFound } from "../errors/link-not-found"

export async function incrementAccess({ id }: { id: string }) {
  const existingLink = await db.query.links.findFirst({
    where: eq(links.id, id),
  })

  if (!existingLink) {
    throw new LinkNotFound()
  }

  const result = await db
    .update(links)
    .set({
      visits: existingLink.visits + 1,
    })
    .where(eq(links.id, id))
    .returning({
      visits: links.visits,
    })

  return {
    visits: result[0].visits,
  }
}
