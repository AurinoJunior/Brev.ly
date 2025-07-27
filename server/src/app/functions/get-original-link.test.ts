import { describe, expect, it } from "vitest"
import { LinkNotFound } from "../errors/link-not-found"
import { createLink } from "./create-link"
import { getOriginalLink } from "./get-original-link"

describe("get original link", () => {
  it("should be able get original link", async () => {
    const mockOriginalLink = "http://www.site-muito-legal.com.br/original-link"

    const newLink = await createLink({
      url: mockOriginalLink,
      shortURL: "http://brev.ly/link",
    })

    const sut = await getOriginalLink({
      shortURL: newLink.shortURL,
    })

    expect(sut.originalURL).toBe(mockOriginalLink)
  })

  it("should not be able get a original link with not found shortURL", async () => {
    await expect(getOriginalLink({ shortURL: "not-found-id" })).rejects.toThrow(
      LinkNotFound
    )
  })
})
