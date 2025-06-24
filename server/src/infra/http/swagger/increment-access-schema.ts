import { z } from "zod"

export const incrementAccessSchema = {
  summary: "Create a new link",
  tags: ["links"],
  body: z.object({
    id: z.string().min(1, { message: "O ID é obrigatório!" }),
  }),
  response: {
    201: z.object({
      id: z.string(),
      visits: z.number(),
    }),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
