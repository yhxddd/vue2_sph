import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router/index.js'

// 三级联动组件---声明为全局组件
import TypeNav from '@/components/TypeNav/index.vue'

// 轮播图组件声明为全局组件
import Carsousel from '@/components/Carsousel/index.vue'

import store from '@/store/index.js'
// 引入mockserver.js ---没有对外暴露，只引入让mockServer执行
import '@/mock/mockServer'

//引入swiper样式
import 'swiper/css/swiper.css'

// import {reqCategoryList} from '@/api'
// reqCategoryList();
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
