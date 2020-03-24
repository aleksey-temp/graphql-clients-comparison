import { Client } from 'pg'

import {
  createUsersTableSqlQuery,
  createPostsTableSqlQuery
} from '../sql/create'

export const createTables = async (client: Client) => {
  try {
    await client.query(createUsersTableSqlQuery)
    await client.query(createPostsTableSqlQuery)
  } catch (err) {
    console.log('Error occured when creating tables')
  }
}
