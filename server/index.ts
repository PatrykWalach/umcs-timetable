import express from 'express'
import graphqlHTTP from 'express-graphql'
import { schema } from './schema'

// import { ApolloServer } from 'apollo-server-express'

const app = express()
const port = 80

// const apollo = new ApolloServer({ schema })

// apollo.applyMiddleware({ app, path: '/graphql' })

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
)

app.use(express.static('dist'))

app.listen(port)

console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`)
