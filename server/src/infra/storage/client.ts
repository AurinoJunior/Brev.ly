import { env } from "@/env"
import * as Minio from "minio"

const minioConfig: Minio.ClientOptions = {
  endPoint: env.CLOUDFLARE_ENDPOINT,
  accessKey: env.CLOUDFLARE_ACCESS_KEY_ID,
  secretKey: env.CLOUDFLARE_SECRET_ACCESS_KEY,
}

if (env.NODE_ENV === "development") {
  minioConfig.port = 9000
  minioConfig.useSSL = false
}

export const r2 = new Minio.Client(minioConfig)
