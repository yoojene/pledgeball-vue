import Vue from 'vue'
import App from './App.vue'
import router from './router'

import IonicVue from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { firestorePlugin } from 'vuefire'

Vue.config.productionTip = false
Vue.use(IonicVue);
Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
