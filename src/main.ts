import './registerServiceWorker'
import CompositionApi, { provide } from '@vue/composition-api'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import Vue from 'vue'
import { apollo } from './apollo'
import router from '@/router'
import { vuetify } from '@/vuetify'
Vue.use(CompositionApi)

Vue.config.productionTip = false

new Vue({
  router,
  setup() {
    provide(DefaultApolloClient, apollo)
    return {}
  },
  render: h => h(App),
  vuetify,
}).$mount('#app')
