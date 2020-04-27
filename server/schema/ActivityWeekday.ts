import { GraphQLEnumType } from 'graphql'
import { ActivityWeekday as Weekday } from '../../__generated__/globalTypes'

export enum WeekdayText {
  poniedziałek = Weekday.MONDAY,
  wtorek = Weekday.TUESDAY,
  środa = Weekday.WEDNESDAY,
  czwartek = Weekday.THURSDAY,
  piątek = Weekday.FRIDAY,
}

export const ActivityWeekday = new GraphQLEnumType({
  name: 'ActivityWeekday',
  values: {
    MONDAY: { value: 'MONDAY' },
    TUESDAY: { value: 'TUESDAY' },
    WEDNESDAY: { value: 'WEDNESDAY' },
    THURSDAY: { value: 'THURSDAY' },
    FRIDAY: { value: 'FRIDAY' },
  },
})
