# GraphQL Node.js clients comparison

This repo contains multiple GraphQL servers examples.

Data inside these servers is taken from a PostgreSQL database.
In order to setup PostgreSQL in docker do the following:

1. Build the database image
   `docker image build -f db.Dockerfile -t graphql_db .`

2. Run container with the database
   `docker container run -d -p 5432:5432 graphql_db`

3. Install dependencies
   `npm install`

4. Generate fake data
   `npm run db:populate`

5. (Optional) drop databases to remove data
   `npm run db:drop`

## Express-Graphql

Uses `grapgql.js` and `express-graphql` middleware

1. Run server `npm run express-graphql`
2. Go to `localhost:3001/graphql`
3. Run benchmark `npm run express-graphql:benchmark`
