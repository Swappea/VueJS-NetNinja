import Vue from 'vue'
import App from './App.vue'

// // Register globally
// import Ninjas from './components/Ninjas.vue'
// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
