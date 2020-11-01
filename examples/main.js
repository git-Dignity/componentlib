import Vue from 'vue'
import VueRouter from 'vue-router'
import routers  from './router'
import App from './App.vue'


// 导入组件库
import ZzmComponent from './../packages/index'

import  '../lib/zzmcomponentlib.css'
// 注册组件库
Vue.use(ZzmComponent)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router  = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
