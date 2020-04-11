import { Client } from 'pg'

import { User, DBUser } from '../types/User'
import { userConverter } from '../converters/user.converter'

export const getUsers = async (client: Client): Promise<User[]> => {
  const q = 'select * from users'

  const res = await client.query<DBUser>(q)

  return res.rows.map(dbUser => userConverter(dbUser))
}
