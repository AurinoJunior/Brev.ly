import { z } from "zod"

export const getAllLinkSchema = {
  summary: "Get all links",
  tags: ["links"],
  response: {
    200: z.array(
      z.object({
        id: z.string(),
        shortURL: z.string(),
        originalURL: z.string(),
      })
    ),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
