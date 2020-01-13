<template>
  <TimetableDay v-if="activities" :activities="activities" />
</template>

<script lang="ts">
import { useResult, useQuery } from '@vue/apollo-composable'
import { HomeQuery } from './Home.gql.js'
import TimetableDay from '@/components/TimetableDay.vue'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  components: {
    TimetableDay,
  },
  props: { weekday: { type: String, default: 'MONDAY', required: true } },
  setup(props) {
    const { result } = useQuery(HomeQuery, () => ({
      // group: [6],
      studentsId: 842,
      // type: ['LAB'],
      weekday: [props.weekday],
    }))

    const activities = useResult(result, [])

    return { activities }
  },
})
</script>
<style lang="scss" scoped>
.timetable {
  // display: flex;

  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}
</style>
