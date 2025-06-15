import { fastifyCors } from "@fastify/cors"
import fastifySwagger from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { fastify } from "fastify"
import {
  hasZodFastifySchemaValidationErrors,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

server.setErrorHandler((error, _, reply) => {
  if (hasZodFastifySchemaValidationErrors(error)) {
    return reply.status(400).send({
      message: "Validation error",
      issues: error.cause,
    })
  }

  console.error(error)

  return reply.status(500).send({
    message: "Internal server error",
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
})

server.register(fastifySwaggerUi, {
  routePrefix: "/docs",
})

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.info("HTTP server running!")
})
