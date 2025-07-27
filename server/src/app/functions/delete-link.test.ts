import { db } from "@/infra/db"
import { links } from "@/infra/db/schemas/links"
import { eq } from "drizzle-orm"
import { describe, expect, it } from "vitest"
import { LinkNotFound } from "../errors/link-not-found"
import { createLink } from "./create-link"
import { deleteLink } from "./delete-link"

describe("delete link", () => {
  it("should be able to delete a link", async () => {
    const sut = await createLink({
      url: "http://www.site-muito-legal.com.br/",
      shortURL: "http://brev.ly/test",
    })

    await deleteLink({ id: sut.id })

    const result = await db.select().from(links).where(eq(links.id, sut.id))

    expect(result).toHaveLength(0)
  })

  it("should not be able to delete a not found link", async () => {
    await expect(deleteLink({ id: "not-found-id" })).rejects.toThrow(
      LinkNotFound
    )
  })
})
