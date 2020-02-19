import { resolveActivities } from '../resolvers/Activities'
import { GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql'
import { Activity } from './Activity'
import { ActivityWeekday } from './ActivityWeekday'
import { ActivityType } from './ActivityType'
import {
  ActivityType as Type,
  ActivityWeekday as Weekday,
} from '../../__generated__/globalTypes'

export const Activities = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Activity))),
  resolve: resolveActivities,
  args: {
    studentsId: { type: new GraphQLNonNull(GraphQLInt) },
    weekday: { type: new GraphQLList(new GraphQLNonNull(ActivityWeekday)) },
    group: { type: new GraphQLList(new GraphQLNonNull(GraphQLInt)) },
    type: {
      type: new GraphQLList(new GraphQLNonNull(ActivityType)),
    },
  },
}

export interface ActivitiesArguments {
  studentsId: number
  weekday: Weekday[] | null
  group: number[] | null
  type: Type[] | null
}
