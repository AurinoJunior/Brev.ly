import { describe, expect, it } from "vitest"
import { LinkAlreadyExists } from "../errors/link-already-exists"
import { createLink } from "./create-link"

describe("create link", () => {
  it("should be able create a new link", async () => {
    const sut = await createLink({
      url: "http://www.site-muito-legal.com.br/rocketseat",
      shortURL: "http://brev.ly/rocket",
    })

    expect(sut).toHaveProperty("id")
  })

  it("should not be able create a new link already exists", async () => {
    await expect(
      createLink({
        url: "http://www.site-muito-legal.com.br/rocketseat",
        shortURL: "http://brev.ly/rocket",
      })
    ).rejects.toThrow(LinkAlreadyExists)
  })
})
