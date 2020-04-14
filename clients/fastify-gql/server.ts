import Fastify from 'fastify'
import GQL from 'fastify-gql'

import { connect } from '../../database/connect'
import { schema } from './schema'
import { rootResolver } from './resolvers'

const configureServer = async () => {
  const db = await connect()
  const app = Fastify()

  app.register(GQL, {
    schema,
    resolvers: rootResolver,
    graphiql: true,
    context: () => ({ db })
  })

  return app
}

export const main = async () => {
  const app = await configureServer()

  app.listen(3003, (err, address) => {
    if (err) {
      console.log('Fastify-GQL server error...')

      process.exit(1)
    } else {
      console.log(`Fastify-GQL server started on: ${address}`)
    }
  })

  return app
}
