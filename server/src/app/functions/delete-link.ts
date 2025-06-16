import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { eq } from "drizzle-orm"
import { LinkNotFound } from "../errors/link-not-found"

export async function deleteLink({ id }: { id: string }) {
  const existingLink = await db.query.links.findFirst({
    where: eq(links.id, id),
  })

  if (!existingLink) {
    throw new LinkNotFound()
  }

  await db.delete(links).where(eq(links.id, id))

  return { message: "Link deletado!" }
}
