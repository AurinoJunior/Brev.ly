import { fastifyCors } from "@fastify/cors"
import fastifySwagger from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { fastify } from "fastify"
import {
  hasZodFastifySchemaValidationErrors,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"
import { createLinkRoute } from "./routes/create-link"
import { deleteLinkRoute } from "./routes/delete-link"
import { exportLinksRoute } from "./routes/export-links"
import { getAllLinkRoute } from "./routes/get-all-links"
import { getOriginalLinkRoute } from "./routes/get-original-link"
import { incrementAccessRoute } from "./routes/increment-access"

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, _, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: error.validation[0].message,
    })
  }

  console.error(error)

  return reply.status(500).send({
    message: error.message || "Internal Server Error",
  })
})

server.register(fastifyCors, { origin: "*" })

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Brev.ly Server",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
  routePrefix: "/docs",
})

// ROUTES
server.register(createLinkRoute)
server.register(deleteLinkRoute)
server.register(getOriginalLinkRoute)
server.register(getAllLinkRoute)
server.register(incrementAccessRoute)
server.register(exportLinksRoute)

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.info("HTTP server running!")
})
