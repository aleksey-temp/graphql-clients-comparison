export interface UserBlank {
  firstName: string
  lastName: string
  email: string
}

export interface User extends UserBlank {
  id: number
}
