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

## Express-GraphQL

Uses `grapgql.js` and `express-graphql` middleware

1. Run server `npm run express-graphql`
2. Go to `localhost:3001/graphql`

Run benchmark: `npm run express-graphql:benchmark`

## Restify-GraphQL

Uses `graphql.js` and `express-graphql` middleware

1. Run server `npm run restify-graphql`
2. Go to `localhost:3002/graphql`

Run benchmark: `npm run restify-graphql:benchmark`

## Fastify-GQL

Uses `fastify` as a web-framework and `fastify-gql`

1. Run server `npm run fastify-gql`
2. Go to `localhost:3003/graphql`

Run benchmark: `npm run restify-gql:benchmark`

## Apollo-Server

Uses `apollo-server` and `graphql`

1. Run server `npm run apollo-server`
2. Go to `localhost:3004/graphql`

Run benchmark: `npm run apollo-server:benchmark`

## Apollo-Server-Express

Uses `apollo-server` and `express` as a server

1. Run server `npm run apollo-server-express`
2. Go to `localhost:3005/graphql`

Run benchmark: `npm run apollo-server-express:benchmark`

## Apollo-Server-Koa

Uses `apollo-server` and `koa` as a server

1. Run server `npm run apollo-server-koa`
2. Go to `localhost:3006/graphql`

Run benchmark: `npm run apollo-server-koa:benchmark`
