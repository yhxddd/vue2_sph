// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由组件
import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
import Search from '../views/Search/index.vue'
import Detail from '../views/Detail/index.vue'
// 将vueRouter原型对象的push保存一份---这个push的this为window，下面是用时，需要改变this指向
let orginPush = VueRouter.prototype.push;
let orginReplace = VueRouter.prototype.replace;

// 重写push   --- 原因：编程式导航携带参数跳转后，参数不变多次点击，控制台回报错；
                    // 新vue-router引入promise，代码需要使用相应的成功和失败函数进行声明
// location：跳转的url和传递的参数
VueRouter.prototype.push = function(location, resolve, reject){
    if (resolve && reject){
        // 使用call 改变this指向为调用push的VueRouter实例对象
        orginPush.call(this, location, resolve, reject);
    }else{
        orginPush.call(this, location, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if (resolve && reject){
        // 使用call 改变this指向为调用push的VueRouter实例对象
        orginReplace.call(this, location, resolve, reject);
    }else{
        orginReplace.call(this, location, ()=>{}, ()=>{})
    }
}

export default new VueRouter({
    routes:[
        //重定向：
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            name:'searchComponent',
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/detail/:skuid',
            component:Detail,
            meta:{show:true}
        }
    ],
    // 滚动行为 为跳转路由后页面位于哪个位置
    scrollBehavior(to, from, savedPosition){
        // 限制单个路由可以用to判断
        // 返回纵坐标的位置
        return { y:0 }
    }
})