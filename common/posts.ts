import { Client } from 'pg'

import { DBPost } from '../types/Post'

export const getPostsByUserId = async (
  db: Client,
  userId: number
): Promise<DBPost[]> => {
  const q = `
    SELECT * FROM posts WHERE user_id = $1
  `
  const values = [userId]

  const res = await db.query<DBPost>(q, values)

  return res.rows
}

export const getPosts = async (db: Client): Promise<DBPost[]> => {
  const q = `
    SELECT * FROM posts
  `

  const res = await db.query<DBPost>(q)

  return res.rows
}

export const getPostById = async (
  db: Client,
  postId: number
): Promise<DBPost | null> => {
  const q = `
    SELECT * FROM posts WHERE id = $1
  `
  const values = [postId]

  const res = await db.query<DBPost>(q, values)

  return res.rows.length === 0 ? null : res.rows[0]
}
