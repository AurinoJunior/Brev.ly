import crypto from "node:crypto"

export function generateShortUrl(url: string, length = 8) {
  const hash = crypto
    .createHash("sha256")
    .update(url + Date.now())
    .digest("base64url")

  return hash.slice(0, length)
}
