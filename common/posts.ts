import { Client } from 'pg'

import { DBPost } from '../types/Post'

export const getPostsByUserId = async (db: Client, userId: number) => {
  const q = `
    SELECT * FROM posts WHERE user_id = $1
  `
  const values = [userId]

  const res = await db.query<DBPost>(q, values)

  return res.rows
}
