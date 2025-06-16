import { z } from "zod"

export const createLinkSchema = {
  summary: "Create a new link",
  tags: ["links"],
  body: z.object({
    url: z.string().url("URL inválida!"),
  }),
  response: {
    201: z.object({
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
