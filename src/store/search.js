import { reqSearchInfo } from "../api"

const actions = {
    // 获取搜索数据
    async reqSearchInfo(context,params={}){
        let result = await reqSearchInfo(params);
        if(result.code == '200')
        {
            context.commit('REQSEARCHINFO',result.data)
        }
    }
}
const mutations = {
    REQSEARCHINFO(state, value){
        state.searchList = value;
    }
}

const state = {
    searchList:{}
}
// 简化数据
const getters = {
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}