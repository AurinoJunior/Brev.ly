import { z } from "zod"

export const exportLinksSchema = {
  summary: "Gen a CSV file and upload it to Cloudflare R2",
  tags: ["links"],
  response: {
    200: z.object({
      csvRemoteURL: z.string(),
    }),
    400: z.object({
      message: z.string(),
    }),
    500: z.object({
      message: z.string(),
    }),
  },
}
