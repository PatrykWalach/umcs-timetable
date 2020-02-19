import { GraphQLObjectType } from 'graphql'
import { Activities } from './Activities'

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: { Activities },
})
