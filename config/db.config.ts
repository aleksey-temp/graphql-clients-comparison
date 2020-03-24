import { ClientConfig } from 'pg'

export const dbConfig: ClientConfig = {
  user: 'dev',
  host: 'localhost',
  database: 'mydb',
  password: 'secret',
  port: 5432
}
