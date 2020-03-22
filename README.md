# GraphQL Node.js clients comparison

Build the database image
```
docker image build -f db.Dockerfile -t graphql_db .
```

Run container with the database
```
docker container run -d -p 5432:5432 graphql_db
```