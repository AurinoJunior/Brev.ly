import type { Readable } from "node:stream"
import { env } from "@/env"
import { r2 } from "./client"

interface UploadCSVToStorageParams {
  contentStream: Readable
}

export async function uploadCSVToStorage({
  contentStream,
}: UploadCSVToStorageParams) {
  const uniqueFileName = `${new Date().toISOString()}-links.csv`

  await r2.putObject(
    env.CLOUDFLARE_BUCKET,
    uniqueFileName,
    contentStream,
    undefined,
    { "Content-Type": "text/csv" }
  )

  const isLocalEnv = env.NODE_ENV !== "production"
  return {
    url: new URL(
      isLocalEnv
        ? `${env.CLOUDFLARE_BUCKET}/${uniqueFileName}`
        : uniqueFileName,
      env.CLOUDFLARE_PUBLIC_URL
    ).toString(),
  }
}
