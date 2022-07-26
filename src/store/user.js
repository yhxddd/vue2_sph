// 登录+注册模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfoToken, reqUserLogout } from "../api";


const actions = {
    // 注册 获取验证码
    async reqGetCode(context, phone){
        let result = await reqGetCode(phone);
        if(result.code == '200'){
            context.commit('REQGETCODE',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('getCode Error'));
        }
    },
    // 获取注册结果
    async reqUserRegister(context, userInfo){
        let result = await reqUserRegister(userInfo);
        if(result.code == '200'){
            return 'ok';
        }else{
            return Promise.reject(new Error('register Error'));
        }
    },
    // 用户登录
    async reqUserLogin(context, userInfo){
        let result = await reqUserLogin(userInfo);
        // result中有用户信息和返回的token
        if(result.code == '200'){
            context.commit('REQUSERLOGIN',result.data.token);
            localStorage.setItem('USERTOKEN', result.data.token)
            return 'ok';
        }else{
            return Promise.reject(new Error('login Error'));
        }
    },
    // 获取用户信息
    async reqUserInfoToken(context){
        let result = await reqUserInfoToken();
        if(result.code == '200'){
            context.commit('REQUSERINFOTOKEN',result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('getUserInfo Error'));
        }
    },
    // 退出登录
    async reqUserLogout(context){
        let result = await reqUserLogout();
        if(result.code == '200'){
            context.commit('REQUSERLOGOUT');
        }
    }
};
const mutations = {
    REQGETCODE(state, value){
        state.code = value;
    },
    REQUSERLOGIN(state, value){
        state.token = value;
    },
    REQUSERINFOTOKEN(state, value){
        state.userInfo = value;
    },
    REQUSERLOGOUT(state){
        state.userInfo = {};
        state.token = '';
        localStorage.removeItem('USERTOKEN');
    }
};
const state = {
    code:'',
    token:localStorage.getItem('USERTOKEN') || '',
    userInfo:{}
};
const getters = {

};
export default {
    actions,
    mutations,
    state,
    getters
}