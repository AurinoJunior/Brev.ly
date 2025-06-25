import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { describe, expect, it } from "vitest"
import { createLink } from "./create-link"
import { getAllLinks } from "./get-all-links"

describe("get all links", () => {
  it("should be get all links", async () => {
    const testURL1 = "http://www.site-muito-legal.com.br/test-1"
    const testURL2 = "http://www.site-muito-legal.com.br/test-2"

    await createLink({
      url: testURL1,
    })

    await createLink({
      url: testURL2,
    })

    const sut = await getAllLinks()

    const dbResult = await db.select().from(links)

    expect(sut).toHaveLength(dbResult.length)
  })
})
