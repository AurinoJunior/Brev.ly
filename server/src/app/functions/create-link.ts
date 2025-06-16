import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { generateShortUrl } from "@/utils/generateShortUrl"
import { LinkAlreadyExists } from "../errors/link-already-exists"

export async function createLink({ url }: { url: string }) {
  const shortURL = generateShortUrl(url)

  const existingLink = await db.query.links.findFirst({
    where: (links, { eq }) => eq(links.url, url),
  })

  if (existingLink) {
    throw new LinkAlreadyExists()
  }

  const result = await db
    .insert(links)
    .values({
      url,
      shortURL,
    })
    .returning({ id: links.id })

  return {
    id: result[0].id,
    shortURL: shortURL,
    originalURL: url,
  }
}
