import express from 'express'
import { Client } from 'pg'
import gqlMiddleware from 'express-graphql'

import { schema } from './gql.schema'

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
