import { createLink } from "@/app/functions/create-link"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { createLinkSchema } from "../swagger/create-link-schema"

export const createLinkRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    "/links",
    { schema: createLinkSchema },
    async (request, reply) => {
      const { url } = request.body

      const { originalURL, shortURL } = await createLink({ url })

      return reply.status(201).send({ originalURL, shortURL })
    }
  )
}
