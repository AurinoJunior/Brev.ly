import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"

export async function getAllLinks() {
  const allLinks = await db
    .select({
      id: links.id,
      originalURL: links.url,
      shortURL: links.shortURL,
    })
    .from(links)

  return allLinks
}
