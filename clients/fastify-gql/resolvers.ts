import { Client } from 'pg'

import { DBUser } from '../../types/User'
import { getUsers, getUserById } from '../../common/users'
import { getPostsByUserId, getPosts, getPostById } from '../../common/posts'
import { DBPost } from '../../types/Post'

type Context = {
  db: Client
}

type Resolver<T, K> = (rootValue: any, args: T, context: Context) => K

type UserResolver = {
  [key: string]: (rootValue: DBUser, args: any, context: Context) => any
}

type PostResolver = {
  [key: string]: (rootValue: DBPost, args: any, context: Context) => any
}

export const users: Resolver<{}, Promise<DBUser[]>> = async (_, __, { db }) =>
  await getUsers(db)

export const user: Resolver<
  { userId: number },
  Promise<DBUser | null>
> = async (_, { userId }, { db }) => await getUserById(db, userId)

export const posts: Resolver<{}, Promise<DBPost[]>> = async (_, __, { db }) =>
  await getPosts(db)

export const post: Resolver<
  { postId: number },
  Promise<DBPost | null>
> = async (_, { postId }, { db }) => await getPostById(db, postId)

export const User: UserResolver = {
  id: ({ id }) => id,
  firstName: ({ first_name }) => first_name,
  lastName: ({ last_name }) => last_name,
  email: ({ email }) => email,
  posts: async ({ id }, _, { db }) => await getPostsByUserId(db, id)
}

export const Post: PostResolver = {
  user: async ({ user_id }, _, { db }) => await getUserById(db, user_id)
}

export const rootResolver = {
  Query: { users, user, posts, post },
  User,
  Post
}
