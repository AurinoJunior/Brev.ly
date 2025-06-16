import { deleteLink } from "@/app/functions/delete-link"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { deleteLinkSchema } from "../swagger/delete-link-schema"

export const deleteLinkRoute: FastifyPluginAsyncZod = async server => {
  server.delete(
    "/links",
    { schema: deleteLinkSchema },
    async (request, reply) => {
      const { id } = request.body

      const { message } = await deleteLink({ id })

      return reply.status(200).send({ message })
    }
  )
}
