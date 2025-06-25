import { describe, expect, it } from "vitest"
import { LinkNotFound } from "../errors/link-not-found"
import { createLink } from "./create-link"
import { incrementAccess } from "./increment-access"

describe("increment access", () => {
  it("should be able increment access", async () => {
    const mockIncrementAccess =
      "http://www.site-muito-legal.com.br/increment-access"

    const newLink = await createLink({
      url: mockIncrementAccess,
    })

    await incrementAccess({
      id: newLink.id,
    })

    const sut = await incrementAccess({
      id: newLink.id,
    })

    expect(sut.visits).toBe(2)
  })

  it("should not be able increment access with not found id", async () => {
    await expect(incrementAccess({ id: "not-found-id" })).rejects.toThrow(
      LinkNotFound
    )
  })
})
