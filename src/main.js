import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import VueWeui from 'vue-weui'
import App from './components/app.vue'
import List from './components/list.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

var Parent = { template: '<router-view></router-view>' }

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/parent' }, 
    {
      path: '/parent',
      component: Parent,
      children: [
        { path: '', name: 'default', component: List },
        { path: 'list', name: 'list', component: List },
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App), // render function
}).$mount('#app')
