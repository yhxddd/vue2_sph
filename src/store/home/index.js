import { reqCategoryList } from "../../api";

// home模块的vuex
const actions = {
    async categoryList(context){
        let result = await reqCategoryList();
        if(result.code == '200')
        {
            context.commit('CATEGORYLIST',result.data)
        }
    }
};

const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    }
};


const getters = {};

const state = {
    categoryList:[]
};


export default{
    state,
    mutations,
    actions,
    getters
}