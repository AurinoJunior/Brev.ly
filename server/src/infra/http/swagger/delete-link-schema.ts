import { z } from "zod"

export const deleteLinkSchema = {
  summary: "Delete a existing link",
  tags: ["links"],
  body: z.object({
    id: z.string(),
  }),
  response: {
    200: z.object({ message: z.string() }),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
