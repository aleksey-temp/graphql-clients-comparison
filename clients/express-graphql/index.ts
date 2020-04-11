import { connect } from '../../database/connect'
import { configureServer } from './server'

const main = async () => {
  const dbClient = await connect()
  const app = configureServer({ dbClient })

  app.listen(3001)

  console.log('Express-GraphQL server launched on port 3001')
}

main()
