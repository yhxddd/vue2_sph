import { reqShopCartList, reqDelShopCarById, reqChangeShopCheckedById } from "../api"

const actions = {
    async reqShopCartList(context){
        let result = await reqShopCartList();
        if(result.code == '200'){
            context.commit('REQSHOPCARTLIST',result.data);
        }
    },
    // 删除某产品
    async reqDelShopCarById(context, skuId){
        let result = await reqDelShopCarById(skuId);
        if(result.code == '200'){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    // 修改某产品选中状态
    async reqChangeShopCheckedById(context,{skuId, isChecked}){
        let result = await reqChangeShopCheckedById(skuId, isChecked);
        if(result.code == '200'){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'));
        }
    },
    // 删除选中的商品
    reqDelCheckedShop(context){
        let PromiseArr = [];
        // context就可以理解为一个仓库，包含commit、getters、dispatch、state
        context.getters.cartList.cartInfoList.forEach(item => {
          let promise = item.isChecked == 1? context.dispatch('reqDelShopCarById', item.skuId):'';  
          PromiseArr.push(promise);
        });
        // 返回的操作结果，全成功才成功
        return Promise.all(PromiseArr)
    },
    // 修改表格下方的全选框的状态
    reqChangeAllShopChecked(context, isChecked){
        let PromiseArr = [];
        context.getters.cartList.cartInfoList.forEach(item => {
            let promise = context.dispatch('reqChangeShopCheckedById',{skuId:item.skuId,isChecked:isChecked})
            PromiseArr.push(promise);
        })
        return Promise.all(PromiseArr);
    }
}

const mutations = {
    REQSHOPCARTLIST(state, value){
        state.cartList = value;
    }
}

const state = {
    cartList:[]
}
const getters = {
    cartList(state){
        return state.cartList[0] || {};
    },
}

export default {
    state,
    actions,
    mutations,
    getters
}