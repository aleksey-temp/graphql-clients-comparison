import { connect } from '../database/connect'
import { dropTables } from '../database/scripts/drop'

const drop = async () => {
  const client = await connect()

  await dropTables(client)
}

drop().then(() => {
  console.log('Database tables were dropped')

  process.exit(0)
})
