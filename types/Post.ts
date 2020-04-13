export interface PostBlank {
  content: string
  userId: number
}

export interface Post extends PostBlank {
  id: number
}

export interface DBPost {
  id: number
  content: string
  user_id: number
}
