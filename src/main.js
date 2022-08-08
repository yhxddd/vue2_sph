import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router/index.js'

// 三级联动组件---声明为全局组件
import TypeNav from '@/components/TypeNav/index.vue'
// 轮播图组件声明为全局组件
import Carsousel from '@/components/Carsousel/index.vue'
// 分页器全局组件
import Pagination from '@/components/Pagination/index.vue'
// 按需引入elementui的组件
import {Button, MessageBox, Message} from 'element-ui'

import store from '@/store/index.js'
// 引入mockserver.js ---没有对外暴露，只引入让mockServer执行
import '@/mock/mockServer'

//引入swiper样式
import 'swiper/css/swiper.css'

// 将API中所有暴露的接口引入 挂载到Vue原型对象上，之后即可$API.XXX进行请求的发送
import * as API from '@/api'

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);

Vue.component(Button.name, Button);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    // 全局事件总线
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
