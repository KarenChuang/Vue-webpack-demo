import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'

import App from './components/app.vue'
import List from './components/list.vue'
import Detail from './components/detail.vue'
import CaseList from './components/caseList.vue'



Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)


var Parent = { template: '<router-view></router-view>' }

var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/main' }, 
    {
      path: '/main',
      component: Parent,
      children: [
        { path: '', name: 'default', component: List },
        { path: 'detail', name: 'detail', component: Detail },
        { path: 'caseList', name: 'caseList', component: CaseList },
      ]
    }
  ]
})

new Vue({
  router,
  render: h => h(App), // render function
}).$mount('#app')
