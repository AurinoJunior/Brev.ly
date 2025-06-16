import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { createLinkSchema } from "../swagger/create-link-schema"

export const createLinkRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    "/links",
    { schema: createLinkSchema },
    async (request, reply) => {
      const { url } = request.body

      return reply.status(201).send({
        shortUrl: "short-url-12345",
        originalUrl: url,
      })
    }
  )
}
