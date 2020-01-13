<template>
  <v-app>
    <v-app-bar app>
      <v-tabs v-model="tabs">
        <v-tab href="#monday">Mon</v-tab>
        <v-tab href="#tuesday">Tue</v-tab>
        <v-tab href="#wednesday">Wed</v-tab>
        <v-tab href="#thursday">Thu</v-tab>
        <v-tab href="#friday">Fri</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-content>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { createComponent, ref, computed } from '@vue/composition-api'

export default createComponent({
  setup(_, { root }) {
    const tabs = computed({
      get: () => root.$route.params.weekday,
      set: weekday =>
        root.$router.push({
          params: {
            weekday,
          },
        }),
    })
    return { tabs }
  },
})
</script>
