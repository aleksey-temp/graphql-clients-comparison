export interface PostBlank {
  content: string
  userId: number
}

export interface Post extends PostBlank {
  id: number
}
