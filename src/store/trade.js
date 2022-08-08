// 订单页
import { reqUserAddress, reqOrderInfo } from '../api'

const actions = {
    // 获取用户地址信息
    async reqUserAddress(context){
        let result = await reqUserAddress();
        if(result.code=='200'){
            context.commit('REQUSERADDRESS', result.data);
        }
    },
    // 获取结算页面商品清单
    async reqOrderInfo(context){
        let result = await reqOrderInfo();
        if(result.code=='200'){
            context.commit('REQORDERINFO', result.data);
        }
    }
}
const mutations = {
    REQUSERADDRESS(state, value){
        state.addressArray = value;
    },
    REQORDERINFO(state, value){
        state.orderInfo = value;
    }
}
const state = {
    addressArray:[],
    orderInfo:{}
}
const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}