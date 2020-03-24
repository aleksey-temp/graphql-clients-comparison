import { Client } from 'pg'

import { dbConfig } from '../config/db.config'

export const connect = async () => {
  const client = new Client(dbConfig)

  try {
    await client.connect()

    console.log('Database connection established')

    return client
  } catch (err) {
    console.log('Error: could not connect to database')

    process.exit(1)
  }
}
