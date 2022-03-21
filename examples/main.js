import Vue from 'vue'
import VueRouter from 'vue-router'
import routers  from './router'
import App from './App.vue'

// 拖拉指令
import directives from '../utils/directives.js'

// 导入组件库
import ZzmComponent from './../packages/index'

import  '../lib/zzmcomponentlib.css'
// 注册组件库
Vue.use(ZzmComponent)
Vue.use(VueRouter)
Vue.directive('directives', directives.draggable)

Vue.config.productionTip = false

const router  = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
