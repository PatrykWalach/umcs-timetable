<template>
  <v-calendar
    color="primary"
    type="day"
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
import {TimetableDay_activities} from './__generated__/TimetableDay_activities'

interface Props {
  activities: TimetableDay_activities[]
  start: string
}

export default createComponent<Readonly<Props>>({
  props: {
    activities: { type: Array, default: null, required: true },
    start: { type: String, default: '2000-12-12', required: false },
  },
  setup(props) {
    const events = computed(() =>
      props.activities.map(({ subject, startTime, endTime }) => ({
        name: subject,
        start: `${props.start} ${Math.floor((startTime||0) / 60)}:${(startTime||0) % 60}`,
        end: `${props.start} ${Math.floor((endTime||0) / 60)}:${(endTime||0) % 60}`,
      })),
    )

    return { events }
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
