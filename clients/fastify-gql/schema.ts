export const schema = `
  type Query {
    users: [User]
    user(userId: Int): User
    posts: [Post]
    post(postId: Int): Post
  }

  type User {
    id: Int
    firstName: String
    lastName: String
    email: String
    posts: [Post]
  }

  type Post {
    id: Int
    content: String
    user: User
  }
`
