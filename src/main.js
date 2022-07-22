import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router/index.js'

// 三级联动组件---声明为全局组件
import TypeNav from '@/views/Home/TypeNav/index.vue'

import store from '@/store/index.js'

// import {reqCategoryList} from '@/api'
// reqCategoryList();
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
