<template>
  <v-calendar
    color="primary"
    type="week"
    :start="start"
    :end="end"
    :value="start"
    :weekdays="weekdays"
    :first-interval="8 * 2"
    :interval-minutes="60 / 2"
    :interval-count="12 * 2"
    event-overlap-mode="column"
    :events="events"
  >
  </v-calendar>
</template>
<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import { TimetableDay_activities } from './__generated__/TimetableDay_activities'
import { ActivityWeekday as Weekday } from '../../__generated__/globalTypes'

interface Props {
  activities: TimetableDay_activities[]
}
const formatDay = (day: number) => (day < 10 ? '0' + day : day)

const getDay = (weekday: number, currentWeekday: number, currentDay: number) =>
  formatDay(
    weekday < currentWeekday
      ? weekday + currentDay - currentWeekday
      : currentDay + weekday - currentWeekday,
  )

const getWeekdayNumber = (weekday: Weekday | null) => {
  switch (weekday) {
    case Weekday.MONDAY:
      return 1
    case Weekday.TUESDAY:
      return 2
    case Weekday.WEDNESDAY:
      return 3
    case Weekday.THURSDAY:
      return 4
    case Weekday.FRIDAY:
      return 5
    default:
      return 0
  }
}

const getWeekday = (weekday: number) => {
  switch (weekday) {
    case 1:
      return Weekday.MONDAY
    case 2:
      return Weekday.TUESDAY
    case 3:
      return Weekday.WEDNESDAY
    case 4:
      return Weekday.THURSDAY
    case 5:
      return Weekday.FRIDAY
    default:
      return null
  }
}

const getDate = (weekday: Weekday | null, todayDate: Date) => {
  const currentWeekday = todayDate.getDay()
  const isoString = todayDate.toISOString().substring(0, 10)

  const preDate = isoString.substring(0, 8)
  const currentDay = parseInt(isoString.substring(8))

  switch (weekday) {
    case Weekday.MONDAY:
      return preDate + getDay(1, currentWeekday, currentDay)
    case Weekday.TUESDAY:
      return preDate + getDay(2, currentWeekday, currentDay)
    case Weekday.WEDNESDAY:
      return preDate + getDay(3, currentWeekday, currentDay)
    case Weekday.THURSDAY:
      return preDate + getDay(4, currentWeekday, currentDay)
    case Weekday.FRIDAY:
      return preDate + getDay(5, currentWeekday, currentDay)
    default:
      return isoString
  }
}
export default createComponent<Readonly<Props>>({
  props: {
    activities: { type: Array, default: null, required: true },
  },
  setup(props, { root }) {
    const currentDate = new Date()
    const today = currentDate.toISOString().substring(0, 10)

    const startWeekday = computed(() => {
      if (root.$vuetify.breakpoint.xsOnly) {
        return getWeekday(currentDate.getDay())
      }
      return Weekday.MONDAY
    })

    const endWeekday = computed(() => {
      if (root.$vuetify.breakpoint.xsOnly) {
        return getWeekday(currentDate.getDay())
      }
      return Weekday.FRIDAY
    })

    const start = computed(() => getDate(startWeekday.value, currentDate))

    const end = computed(() => getDate(endWeekday.value, currentDate))

    const events = computed(() =>
      props.activities.map(({ subject, startTime, endTime, weekday }) => {
        const date = getDate(weekday, currentDate)

        const start = startTime || 0
        const end = endTime || 0

        return {
          end: `${date} ${Math.floor(end / 60)}:${end % 60}`,
          name: subject,
          start: `${date} ${Math.floor(start / 60)}:${start % 60}`,
        }
      }),
    )

    return { events, today, start, end, weekdays: [1, 2, 3, 4, 5] }
  },
})
</script>
