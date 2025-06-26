import type { Readable } from "node:stream"
import { env } from "@/env"
import { Upload } from "@aws-sdk/lib-storage"
import { r2 } from "./client"

interface UploadCSVToStorageParams {
  contentStream: Readable
}

export async function uploadCSVToStorage({
  contentStream,
}: UploadCSVToStorageParams) {
  const uniqueFileName = `${new Date().toISOString()}-links.csv`

  const upload = new Upload({
    client: r2,
    params: {
      Key: uniqueFileName,
      Bucket: env.CLOUDFLARE_BUCKET,
      Body: contentStream,
      ContentType: "text/csv",
    },
  })

  await upload.done()

  return {
    url: new URL(uniqueFileName, env.CLOUDFLARE_PUBLIC_URL).toString(),
  }
}
