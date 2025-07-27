import { exportLinks } from "@/app/functions/export-links"
import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { uploadCSVToStorage } from "@/infra/storage/upload-csv-to-storage"
import { beforeAll, describe, expect, it, vi } from "vitest"
import { createLink } from "./create-link"

vi.mock("@/infra/storage/upload-csv-to-storage", () => ({
  uploadCSVToStorage: vi
    .fn()
    .mockResolvedValue({ url: "http://example.com/file.csv" }),
}))

describe("export links", () => {
  beforeAll(async () => {
    await db.delete(links)
  })

  it("should be able to export links", async () => {
    const link1 = await createLink({
      url: "http://www.site-muito-legal.com.br/export-link/1",
      shortURL: "http://brev.ly/test1",
    })
    const link2 = await createLink({
      url: "http://www.site-muito-legal.com.br/export-link/2",
      shortURL: "http://brev.ly/test2",
    })
    const link3 = await createLink({
      url: "http://www.site-muito-legal.com.br/export-link/3",
      shortURL: "http://brev.ly/test3",
    })

    const sut = await exportLinks()

    const calledArgs = vi.mocked(uploadCSVToStorage).mock.calls[0][0]
    const generatedCSVStream = calledArgs.contentStream

    const csvAsString = await new Promise<string>((resolve, reject) => {
      const chunks: Buffer[] = []

      generatedCSVStream.on("data", (chunk: Buffer) => {
        chunks.push(chunk)
      })

      generatedCSVStream.on("end", () => {
        resolve(Buffer.concat(chunks).toString("utf-8"))
      })

      generatedCSVStream.on("error", err => {
        reject(err)
      })
    })

    const csvAsArray = csvAsString
      .trim()
      .split("\n")
      .map(row => row.split(","))

    expect(sut.csvRemoteURL).toBe("http://example.com/file.csv")
    expect(csvAsArray).toEqual([
      ["ID", "URL original", "URL encurtada", "Data de criação"],
      [link1.id, link1.originalURL, link1.shortURL, expect.any(String)],
      [link2.id, link2.originalURL, link2.shortURL, expect.any(String)],
      [link3.id, link3.originalURL, link3.shortURL, expect.any(String)],
    ])
  })
})
