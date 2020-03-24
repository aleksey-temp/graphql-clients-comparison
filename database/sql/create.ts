export const createUsersTableSqlQuery = `
  create table users (
    id serial primary key,
    first_name text not null,
    last_name text not null,
    email text not null unique
  )
`

export const createPostsTableSqlQuery = `
  create table posts (
    id serial primary key,
    content text not null,
    user_id integer references users(id)
  )
`
