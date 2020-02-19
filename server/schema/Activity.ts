import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql'
import { ActivityType } from './ActivityType'
import { ActivityWeekday } from './ActivityWeekday'

export const Activity = new GraphQLObjectType({
  name: 'Activity',
  fields: {
    group: { type: GraphQLInt },
    room: { type: GraphQLString },
    subject: { type: GraphQLString },
    teachers: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
    students: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(GraphQLString)),
      ),
    },
    weekday: {
      type: ActivityWeekday,
    },
    startTime: { type: GraphQLInt },
    endTime: { type: GraphQLInt },
    type: { type: ActivityType },
  },
})
