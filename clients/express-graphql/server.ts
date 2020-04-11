import express from 'express'
import { Client } from 'pg'
import gqlMiddleware from 'express-graphql'

import { schema } from './gql.schema'
import { rootResolver } from './root.resolver'

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
      rootValue: rootResolver,
      context: {
        db: dbClient
      }
    })
  )

  return app
}
