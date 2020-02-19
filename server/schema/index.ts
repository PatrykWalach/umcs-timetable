import { GraphQLSchema } from 'graphql'
import { Query } from './Query'

export const schema = new GraphQLSchema({
  query: Query,
})
