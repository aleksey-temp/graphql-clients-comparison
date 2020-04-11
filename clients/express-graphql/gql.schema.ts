import { buildSchema } from 'graphql'

export const schema = buildSchema(`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    user: User!
  }

  type Query {
    users: [User]
  }
`)
