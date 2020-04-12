import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInt
} from 'graphql'

import { getUsers, getUserById } from '../../common/users'
import { getPostsByUserId } from '../../common/posts'
import { DBUser } from '../../types/User'
import { DBPost } from '../../types/Post'

const UserType: any = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (user: DBUser) => user.id
    },
    firstName: {
      type: GraphQLString,
      resolve: (user: DBUser) => user.first_name
    },
    lastName: {
      type: GraphQLString,
      resolve: (user: DBUser) => user.last_name
    },
    email: {
      type: GraphQLString,
      resolve: (user: DBUser) => user.email
    },
    posts: {
      type: GraphQLList(PostType),
      resolve: async (user: DBUser, _, { db }) => {
        return await getPostsByUserId(db, user.id)
      }
    }
  })
})

const PostType: any = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    content: { type: GraphQLString },
    user: {
      type: GraphQLNonNull(UserType),
      resolve: async (post: DBPost, _, { db }) => {
        return await getUserById(db, post.user_id)
      }
    }
  })
})

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve: async (_, __, { db }) => await getUsers(db)
    },
    user: {
      type: UserType,
      args: {
        userId: { type: GraphQLInt }
      },
      resolve: async (_, { userId }, { db }) => await getUserById(db, userId)
    }
  }
})

export const schema = new GraphQLSchema({ query })
