// 对axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
//nprogress 是一个对象，对象的start、 done分别代表进度条开始和结束
import store from '../store/index.js'

// 引入进度条样式
import "nprogress/nprogress.css"
// 利用axios对象的creat创建一个axios实例
const requests = axios.create({
    // 配置对象----基础路径
    baseURL: '/api',
    // 请求超时时间
    timeout: 5000
});

// 请求拦截器：再发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config)=>{
    // config：配置对象，对象里有一个headers请求头很重要
    if(store.state.detailModule.uuid_token){
        // 给请求头添加userTempId
        config.headers.userTempId = store.state.detailModule.uuid_token;
    }
    if(store.state.userModule.token){
        config.headers.token =  store.state.userModule.token;
    }
    nprogress.start();
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：
    return res.data;
},(err)=>{
    // 失败返回的函数
    console.log(err)
    nprogress.done();
    return Promise.reject(new Error("fail"))
})

export default requests;