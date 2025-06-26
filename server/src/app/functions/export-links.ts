import { PassThrough, Transform } from "node:stream"
import { pipeline } from "node:stream/promises"
import { db, pg } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { uploadCSVToStorage } from "@/infra/storage/upload-csv-to-storage"
import { stringify } from "csv-stringify"

export async function exportLinks() {
  const { sql, params } = db
    .select({
      id: links.id,
      url: links.url,
      shortURL: links.shortURL,
      createdAt: links.createdAt,
    })
    .from(links)
    .toSQL()

  const cursor = pg.unsafe(sql, params as string[]).cursor(2)

  const csv = stringify({
    delimiter: ",",
    header: true,
    columns: [
      { key: "id", header: "ID" },
      { key: "url", header: "URL original" },
      { key: "short_url", header: "URL encurtada" },
      { key: "created_at", header: "Data de criação" },
    ],
  })

  const uploadToStorageStream = new PassThrough()

  const convertToCSVPipeline = pipeline(
    cursor,
    new Transform({
      objectMode: true,
      transform(chunks: unknown[], _encoding, callback) {
        for (const chunk of chunks) {
          this.push(chunk)
        }

        callback()
      },
    }),
    csv,
    uploadToStorageStream
  )

  const uploadToStorage = uploadCSVToStorage({
    contentStream: uploadToStorageStream,
  })

  const [{ url }] = await Promise.all([uploadToStorage, convertToCSVPipeline])

  return { csvRemoteURL: url }
}
