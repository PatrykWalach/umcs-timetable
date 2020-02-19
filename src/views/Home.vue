<template>
  <TimetableDay v-if="activities" :activities="activities" />
</template>

<script lang="ts">
import {
  HomeQuery as HomeQueryResult,
  HomeQueryVariables,
} from './__generated__/HomeQuery'
import { useResult, useQuery } from '@vue/apollo-composable'
import { HomeQuery } from './Home.gql'
import TimetableDay from '@/components/TimetableDay.vue'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  components: {
    TimetableDay,
  },
  setup() {
    const { result } = useQuery<HomeQueryResult, HomeQueryVariables>(
      HomeQuery,
      () => ({
        lab: [6],
        parlour: [4],
        studentsId: 842,
      }),
    )

    const activities = useResult(result, null, data =>
      data.parlour.concat(data.lab, data.other),
    )

    return { activities }
  },
})
</script>
