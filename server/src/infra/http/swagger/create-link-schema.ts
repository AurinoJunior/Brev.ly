import { z } from "zod"

export const createLinkSchema = {
  summary: "Create a new link",
  tags: ["links"],
  body: z.object({
    url: z.string().url().min(1, "URL is required"),
  }),
  response: {
    201: z.object({ shortUrl: z.string(), originalUrl: z.string() }),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
