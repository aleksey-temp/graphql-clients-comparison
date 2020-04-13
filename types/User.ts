export interface UserBlank {
  firstName: string
  lastName: string
  email: string
}

export interface User extends UserBlank {
  id: number
}

export interface DBUser {
  id: number
  first_name: string
  last_name: string
  email: string
}
