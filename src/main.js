// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VureResource from 'vue-resource'
import Vuefire from 'vuefire'
import firebase from './service/firebase'

Vue.config.productionTip = false

Vue.use(Vuefire)
Vue.use(VureResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cars: firebase.database.ref("cars")
  },
  router,
  template: '<App/>',
  components: { App }
})
