import { ApolloServer } from 'apollo-server'

import { connect } from '../../database/connect'
import { rootResolver } from '../fastify-gql/resolvers'
import { schema } from './schema'

export const configureServer = async () => {
  const db = await connect()

  return new ApolloServer({
    typeDefs: schema,
    resolvers: rootResolver,
    context: { db }
  })
}

export const main = async () => {
  const server = await configureServer()

  const { url } = await server.listen(3004)

  console.log(`Apollo-Server started on: ${url}`)

  return server
}
