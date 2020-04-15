import Koa from 'koa'
import { ApolloServer } from 'apollo-server-koa'

import { connect } from '../../database/connect'
import { schema } from '../apollo-server/schema'
import { rootResolver } from '../fastify-gql/resolvers'

export const configureServer = async () => {
  const db = await connect()

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: rootResolver,
    context: { db }
  })

  const app = new Koa()

  server.applyMiddleware({ app })

  return app
}

export const main = async () => {
  const app = await configureServer()

  const server = app.listen(3006, () => {
    console.log('Apollo-Server-Koa started on port: 3006')
  })

  return server
}
