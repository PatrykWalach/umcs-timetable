<template>
  <TimetableDay v-if="activities" :activities="activities" />
</template>

<script lang="ts">
import { useResult, useQuery } from '@vue/apollo-composable'
import { HomeQuery } from './Home.gql'
import TimetableDay from '@/components/TimetableDay.vue'
import { createComponent } from '@vue/composition-api'
import {
  HomeQuery as HomeQueryResult,
  HomeQueryVariables,
} from './__generated__/HomeQuery'

export default createComponent({
  components: {
    TimetableDay,
  },
  setup() {
    const { result } = useQuery<HomeQueryResult, HomeQueryVariables>(
      HomeQuery,
      () => ({
        studentsId: 842,
        lab: 6,
        parlour: 4,
      }),
    )

    const activities = useResult(result, [], data =>
      data.parlour.concat(data.lab, data.other),
    )

    return { activities }
  },
})
</script>
