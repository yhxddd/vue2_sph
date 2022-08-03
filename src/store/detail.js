import { reqGoodsDetail, reqAddOrUpdateShop } from "../api"
// 临时身份游客，生成一个随机字符串
import {getUUID} from '../utils/uuid_token.js'
const actions = {
    async reqGoodsDetail(context,skuId){
        let result = await reqGoodsDetail(skuId);
        if(result.code == '200')
        {
            context.commit('REQGOODSDETAIL',result.data)
        }
    },
    async reqAddOrUpdateShop(context, {skuId, skuNum}){
        let result = await reqAddOrUpdateShop(skuId, skuNum);
        // 此次请求，服务器不会返回data数据，因此不用再写mutations等内容
        if(result.code == '200'){
            return 'ok';
        }else{
            return Promise.reject(new Error('fail'));
        }
    }
}
const mutations = {
    REQGOODSDETAIL(state, value){
        state.goodsDetail = value;
    },
}

const state = {
    goodsDetail:{},
    // 游客身份
    uuid_token:getUUID()
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