# GraphQL Node.js clients comparison

Build the database image

```
docker image build -f db.Dockerfile -t graphql_db .
```

Run container with the database

```
docker container run -d -p 5432:5432 graphql_db
```

Install dependencies

```
npm install
```

To generate fake data

```
npm run db:populate
```

To drop all tables

```
npm run db:drop
```
