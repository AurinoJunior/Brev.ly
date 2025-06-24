import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { eq } from "drizzle-orm"
import { describe, expect, it } from "vitest"
import { LinkAlreadyExists } from "../errors/link-already-exists"
import { createLink } from "./create-link"

describe("create link", () => {
  it("should be able create a new link", async () => {
    const mockURL = "http://www.site-muito-legal.com.br/rocketseat"

    await createLink({
      url: mockURL,
    })

    const result = await db.select().from(links).where(eq(links.url, mockURL))

    expect(result).toHaveLength(1)
  })

  it("should not be able create a new link already exists", async () => {
    const mockURL = "http://www.site-muito-legal.com.br/rocketseat"

    await expect(createLink({ url: mockURL })).rejects.toThrow(
      LinkAlreadyExists
    )
  })
})
