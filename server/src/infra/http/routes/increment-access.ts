import { incrementAccess } from "@/app/functions/increment-access"
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { incrementAccessSchema } from "../swagger/increment-access-schema"

export const incrementAccessRoute: FastifyPluginAsyncZod = async server => {
  server.post(
    "/increment",
    { schema: incrementAccessSchema },
    async (request, reply) => {
      const { id } = request.body

      const { visits } = await incrementAccess({ id })

      return reply.status(201).send({ id, visits })
    }
  )
}
