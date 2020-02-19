import { GraphQLEnumType } from 'graphql'
import { ActivityWeekday as Weekday } from '../../__generated__/globalTypes'

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

enum WeekdayText {
  poniedziałek = 'poniedziałek',
  wtorek = 'wtorek',
  środa = 'środa',
  czwartek = 'czwartek',
  piątek = 'piątek',
}

const WeekdayTextMap = {
  [Weekday.MONDAY]: WeekdayText.poniedziałek,
  [Weekday.TUESDAY]: WeekdayText.wtorek,
  [Weekday.WEDNESDAY]: WeekdayText.środa,
  [Weekday.THURSDAY]: WeekdayText.czwartek,
  [Weekday.FRIDAY]: WeekdayText.piątek,
}
const WeekdayMap =
  // Object.fromEntries(
  //   Object.entries(WeekdayTextMap).map(([key, value]: [Weekday, WeekdayText]) => [
  //     value,
  //     key,
  //   ]),
  // )
  {
    [WeekdayText.poniedziałek]: Weekday.MONDAY,
    [WeekdayText.wtorek]: Weekday.TUESDAY,
    [WeekdayText.środa]: Weekday.WEDNESDAY,
    [WeekdayText.czwartek]: Weekday.THURSDAY,
    [WeekdayText.piątek]: Weekday.FRIDAY,
  }

export const getWeekdayText = (weekday: Weekday) =>
  WeekdayTextMap[weekday] || null

export const getWeekday = (weekdayText: WeekdayText): Weekday =>
  WeekdayMap[weekdayText] || null
