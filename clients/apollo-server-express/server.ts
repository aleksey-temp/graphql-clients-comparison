import express from 'express'
import { ApolloServer } from 'apollo-server-express'

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

  const app = express()

  server.applyMiddleware({ app })

  return app
}

export const main = async () => {
  const app = await configureServer()

  const server = app.listen(3005, () => {
    console.log('Apollo-Server-Express started on port: 3005')
  })

  return server
}
