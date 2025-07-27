import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { beforeAll, describe, expect, it } from "vitest"
import { createLink } from "./create-link"
import { getAllLinks } from "./get-all-links"

describe("get all links", () => {
  beforeAll(async () => {
    await db.delete(links)
  })

  it("should be get all links", async () => {
    await createLink({
      url: "http://www.site-muito-legal.com.br/test-1",
      shortURL: "http://brev.ly/test-1",
    })

    await createLink({
      url: "http://www.site-muito-legal.com.br/test-2",
      shortURL: "http://brev.ly/test-2",
    })

    const sut = await getAllLinks()

    const dbResult = await db.select().from(links)

    expect(sut).toHaveLength(dbResult.length)
  })
})
