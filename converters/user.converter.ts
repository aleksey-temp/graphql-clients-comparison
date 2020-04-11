import { DBUser, User } from '../types/User'

export const userConverter = ({
  id,
  first_name,
  last_name,
  email
}: DBUser): User => ({
  id,
  email,
  firstName: first_name,
  lastName: last_name
})
