import Vue from 'vue'
import App from './App.vue'
import router from './route/route'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')