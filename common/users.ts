import { Client } from 'pg'

import { DBUser } from '../types/User'

export const getUsers = async (client: Client): Promise<DBUser[]> => {
  const q = 'select * from users'

  const res = await client.query<DBUser>(q)

  return res.rows
}

export const getUserById = async (client: Client, userId: number) => {
  const q = 'select * from users where id = $1'
  const values = [userId]

  const res = await client.query<DBUser>(q, values)

  return res.rows.length === 0 ? null : res.rows[0]
}
