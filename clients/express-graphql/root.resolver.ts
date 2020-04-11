import { Client } from 'pg'

import { getUsers } from '../../common/users'

type Context = {
  db: Client
}

export const rootResolver = {
  async users(_: any, { db }: Context) {
    const users = await getUsers(db)

    return users
  }
}
