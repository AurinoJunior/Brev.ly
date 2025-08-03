import { exportLinks } from "@/app/functions/export-links"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { exportLinksSchema } from "../swagger/export-links-schema"

export const exportLinksRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    "/links/export",
    { schema: exportLinksSchema },
    async (_request, reply) => {
      const { csvRemoteURL } = await exportLinks()

      return reply.status(200).send({ csvRemoteURL })
    }
  )
}
