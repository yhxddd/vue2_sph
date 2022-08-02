import { reqGoodsDetail } from "../api"

const actions = {
    async reqGoodsDetail(context,skuId){
        let result = await reqGoodsDetail(skuId);
        if(result.code == '200')
        {
            context.commit('REQGOODSDETAIL',result.data)
        }
    }
}
const mutations = {
    REQGOODSDETAIL(state, value){
        state.goodsDetail = value;
    }
}

const state = {
    goodsDetail:{}
}
// 简化数据
const getters = {
    // 面包屑信息
    categoryView(state){
        return state.goodsDetail.categoryView || {};
    },
    skuInfo(state){
        return state.goodsDetail.skuInfo || {};
    },
    // 产品售卖属性
    spuSaleAttrList(state){
        return state.goodsDetail.spuSaleAttrList|| [];
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}