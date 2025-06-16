import { getAllLinks } from "@/app/functions/get-all-links"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getAllLinkSchema } from "../swagger/get-all-links-schema"

export const getAllLinkRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    "/links",
    { schema: getAllLinkSchema },
    async (_request, reply) => {
      const links = await getAllLinks()

      return reply.status(200).send(links)
    }
  )
}
