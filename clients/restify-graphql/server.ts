import { createServer } from 'restify'
import gqlHttp from 'express-graphql'
import { Client } from 'pg'

import { schema } from '../express-graphql/gql.schema'
import { connect } from '../../database/connect'

export const configureServer = (db: Client) => {
  const app = createServer()
  const gqlMiddleware = gqlHttp({
    schema,
    graphiql: true,
    context: { db }
  })

  app.post('/graphql', gqlMiddleware)

  app.get('/graphql', gqlMiddleware)

  return app
}

export const main = async () => {
  const dbClient = await connect()
  const app = configureServer(dbClient)

  app.listen('3002')

  console.log('Restify-GraphQL server started on port 3002')

  return app
}
