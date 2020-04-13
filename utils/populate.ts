import { Client } from 'pg'
import faker from 'faker'

import { UserBlank } from '../types/User'
import { PostBlank } from '../types/Post'
import { MAX_USERS, MAX_POSTS } from '../config/data.config'
import { connect } from '../database/connect'
import { createTables } from '../database/scripts/create'
import { insertIntoUsers, insertIntoPosts } from '../database/sql/insert'

const insertRandomUsers = async (client: Client) => {
  const ops: Promise<void>[] = []

  for (let i = 0; i < MAX_USERS; i++) {
    const user: UserBlank = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    }

    ops.push(insertIntoUsers(user, client))
  }

  return Promise.all(ops)
}

const insertRandomPosts = async (client: Client) => {
  const ops: Promise<void>[] = []

  for (let i = 0; i < MAX_POSTS; i++) {
    const post: PostBlank = {
      content: faker.lorem.paragraph(),
      userId: faker.random.number({ min: 1, max: MAX_USERS })
    }

    ops.push(insertIntoPosts(post, client))
  }

  return Promise.all(ops)
}

const populate = async () => {
  const client = await connect()

  const startTime = Date.now()

  await createTables(client)
  console.log('Created tables: users, posts')

  await insertRandomUsers(client)
  console.log('Inserted fake users')

  await insertRandomPosts(client)
  console.log('Inserted fake posts')

  return (Date.now() - startTime) / 1000
}

populate().then(time => {
  console.log(`Success. Data population took ${time}s`)

  process.exit(0)
})
