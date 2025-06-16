import { z } from "zod"

export const getOriginalLinkSchema = {
  summary: "Get Original Link",
  tags: ["original-link"],
  querystring: z.object({
    shortURL: z.string().min(1, "URL encurtada é obrigatória"),
  }),
  response: {
    200: z.object({
      id: z.string(),
      shortURL: z.string(),
      originalURL: z.string(),
    }),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
