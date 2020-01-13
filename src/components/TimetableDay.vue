<template>
  <v-calendar
    color="primary"
    :type="$vuetify.breakpoint.xsOnly ? 'day' : '4day'"
    :start="start"
    :first-interval="8 * 2"
    :interval-minutes="60 / 2"
    :interval-count="12 * 2"
    :events="events"
    event-overlap-mode="column"
  >
  </v-calendar>
</template>
<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import { TimetableDay_activities } from './__generated__/TimetableDay_activities'
import { Type, Weekday } from '__generated__/globalTypes'

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

const getDate = (weekday: Weekday | null, todayDate: Date) => {
  const currentWeekday = todayDate.getDay()
  const isoString = todayDate.toISOString().substring(0, 10)

  const preDate = isoString.substring(0, 8)
  const currentDay = parseInt(isoString.substring(8))

  switch (weekday) {
    case 'MONDAY':
      return preDate + getDay(1, currentWeekday, currentDay)
    case 'TUESDAY':
      return preDate + getDay(2, currentWeekday, currentDay)
    case 'WEDNESDAY':
      return preDate + getDay(3, currentWeekday, currentDay)
    case 'THURSDAY':
      return preDate + getDay(4, currentWeekday, currentDay)
    case 'FRIDAY':
      return preDate + getDay(5, currentWeekday, currentDay)
    default:
      return isoString
  }
}
export default createComponent<Readonly<Props>>({
  props: {
    activities: { type: Array, default: null, required: true },
  },
  setup(props) {
    const currentDate = new Date()
    const start = currentDate.toISOString().substring(0, 10)

    const events = computed(() =>
      props.activities.map(({ subject, startTime, endTime, weekday }) => {
        const date = getDate(weekday, currentDate)
        console.log('TCL: setup -> date', weekday, date)
        const start = startTime || 0
        const end = endTime || 0

        return {
          name: subject,
          start: `${date} ${Math.floor(start / 60)}:${start % 60}`,
          end: `${date} ${Math.floor(end / 60)}:${end % 60}`,
        }
      }),
    )

    return { events, start }
  },
})
</script>

<style lang="scss" scoped>
.timetable-day {
  //   min-width: 100%;
  //   height: 100%;

  scroll-snap-align: start;
}
</style>
