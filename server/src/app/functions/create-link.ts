import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { generateShortUrl } from "@/utils/generateShortUrl"

export async function createLink({ url }: { url: string }) {
  const shortURL = generateShortUrl(url)

  await db.insert(links).values({
    url,
    shortURL,
  })

  return {
    shortURL: shortURL,
    originalURL: url,
  }
}
