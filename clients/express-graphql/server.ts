import express from 'express'
import { Client } from 'pg'
import gqlMiddleware from 'express-graphql'

import { schema } from './gql.schema'
import { connect } from '../../database/connect'

type Options = {
  dbClient: Client
}

export const configureServer = ({ dbClient }: Options) => {
  const app = express()

  app.use(
    '/graphql',
    gqlMiddleware({
      schema,
      graphiql: true,
      context: {
        db: dbClient
      }
    })
  )

  return app
}

export const main = async () => {
  const dbClient = await connect()
  const app = configureServer({ dbClient })

  const server = app.listen(3001)

  console.log('Express-GraphQL server launched on port 3001')

  return server
}
