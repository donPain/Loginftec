
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
    // @ts-ignore
    render: h => h(App),
    router
}).$mount('#app')