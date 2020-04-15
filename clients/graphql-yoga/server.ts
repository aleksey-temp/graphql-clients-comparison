import { GraphQLServer } from 'graphql-yoga'

import { connect } from '../../database/connect'
import { schema } from '../fastify-gql/schema'
import { rootResolver } from '../fastify-gql/resolvers'

export const configureServer = async () => {
  const db = await connect()

  const server = new GraphQLServer({
    typeDefs: schema,
    resolvers: rootResolver,
    context: { db }
  })

  return server
}

export const main = async () => {
  const server = await configureServer()
  const port = 3008

  const app = await server.start({ port }, () => {
    console.log(`GraphQL Yoga server started on port: ${port}`)
  })

  return { port, app }
}
