import { Client } from 'pg'

import { UserBlank } from '../../types/User'
import { PostBlank } from '../../types/Post'

export const insertIntoUsers = async (
  { firstName, lastName, email }: UserBlank,
  client: Client
) => {
  const query =
    'insert into users(first_name, last_name, email) values($1, $2, $3)'
  const values = [firstName, lastName, email]

  await client.query(query, values)
}

export const insertIntoPosts = async (
  { content, userId }: PostBlank,
  client: Client
) => {
  const query = 'insert into posts(content, user_id) values($1, $2)'
  const values = [content, userId]

  await client.query(query, values)
}
