import { getOriginalLink } from "@/app/functions/get-original-link"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { getOriginalLinkSchema } from "../swagger/get-original-link-schema"

export const getOriginalLinkRoute: FastifyPluginAsyncZod = async server => {
  server.get(
    "/original-link",
    { schema: getOriginalLinkSchema },
    async (request, reply) => {
      const { shortURL } = request.query

      const { id, originalURL } = await getOriginalLink({
        shortURL,
      })

      return reply.status(200).send({ id, originalURL, shortURL })
    }
  )
}
