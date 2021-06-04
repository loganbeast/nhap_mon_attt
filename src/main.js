import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router.js'
import RSAModuloCaculate from './components/rsa/RSAModuloCaculate.vue'
import RSASign from './components/rsa/RSASign.vue'; 
import RSASignCheck from './components/rsa/RSASignCheck.vue'; 
import RSASystem from './components/rsa/RSASystem.vue'; 
import ElgamalEncrypt from './components/elgamal/ElgamalEncrypt.vue'; 
import ElgamalSign from './components/elgamal/ElgamalSign.vue'; 
import ElgamalSignCheck from './components/elgamal/ElgamalSignCheck.vue'; 
import ElgamalSystem from './components/elgamal/ElgamalSystem.vue'; 



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.component('RSAModuloCaculate', RSAModuloCaculate)
Vue.component('RSASign', RSASign)
Vue.component('RSASignCheck', RSASignCheck)
Vue.component('RSASystem', RSASystem)
Vue.component('ElgamalEncrypt', ElgamalEncrypt)
Vue.component('ElgamalSign', ElgamalSign)
Vue.component('ElgamalSignCheck', ElgamalSignCheck)
Vue.component('ElgamalSystem', ElgamalSystem)
Vue.component('RSAModuloCaculate', RSAModuloCaculate)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
