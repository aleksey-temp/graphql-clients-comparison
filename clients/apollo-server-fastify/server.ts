import { ApolloServer } from 'apollo-server-fastify'
import fastify from 'fastify'

import { connect } from '../../database/connect'
import { schema } from '../apollo-server/schema'
import { rootResolver } from '../fastify-gql/resolvers'

export const configureServer = async () => {
  const db = await connect()

  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers: rootResolver,
    context: { db }
  })

  const app = fastify()

  app.register(apolloServer.createHandler())

  return app
}

export const main = async () => {
  const app = await configureServer()

  app.listen(3007, (err, address) => {
    if (err) {
      console.log('Could not start Apollo-Server-Fastify...')
      console.error(err)

      process.exit(1)
    } else {
      console.log(`Apollo-Server-Fastify started on: ${address}`)
    }
  })

  return app
}
