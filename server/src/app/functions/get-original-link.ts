import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { eq } from "drizzle-orm"
import { LinkNotFound } from "../errors/link-not-found"

export async function getOriginalLink({ shortURL }: { shortURL: string }) {
  const existingLink = await db.query.links.findFirst({
    where: eq(links.shortURL, shortURL),
  })

  if (!existingLink) {
    throw new LinkNotFound()
  }

  return {
    id: existingLink.id,
    originalURL: existingLink.url,
  }
}
