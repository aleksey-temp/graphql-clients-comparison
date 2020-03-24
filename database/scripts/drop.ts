import { Client } from 'pg'

import { dropTableIfExists } from '../sql/drop'

export const dropTables = async (client: Client) => {
  try {
    await client.query(dropTableIfExists('posts'))
    await client.query(dropTableIfExists('users'))
  } catch (err) {
    console.log('Error: could not drop tables')
    console.error(err)
  }
}
