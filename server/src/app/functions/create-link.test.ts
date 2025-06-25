import { describe, expect, it } from "vitest"
import { LinkAlreadyExists } from "../errors/link-already-exists"
import { createLink } from "./create-link"

describe("create link", () => {
  it("should be able create a new link", async () => {
    const mockURL = "http://www.site-muito-legal.com.br/rocketseat"

    const sut = await createLink({
      url: mockURL,
    })

    expect(sut).toHaveProperty("shortURL")
  })

  it("should not be able create a new link already exists", async () => {
    const mockURL = "http://www.site-muito-legal.com.br/rocketseat"

    await expect(createLink({ url: mockURL })).rejects.toThrow(
      LinkAlreadyExists
    )
  })
})
