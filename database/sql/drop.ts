type TableName = 'users' | 'posts'

export const dropTableIfExists = (tableName: TableName) => `
  drop table if exists ${tableName}
`
