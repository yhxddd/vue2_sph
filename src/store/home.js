// home模块的vuex
import { reqCategoryList, reqBannerList, reqFloorList} from "../api";

const actions = {
    // 获取三级菜单数据
    async categoryList(context){
        let result = await reqCategoryList();
        if(result.code == '200'){
            context.commit('CATEGORYLIST',result.data)
        }
    },
    // 获取轮播图数据
    async reqBannerList(context){
        let result = await reqBannerList();
        if(result.code == '200'){
            context.commit('REQBANNERLIST',result.data)
        }
    },
    // 获取home下层级轮播的数据
    async reqFloorList(context){
        let result = await reqFloorList();
        if(result.code == '200'){
            context.commit('REQFLOORLIST',result.data)
        }
    }
};

const mutations = {
    CATEGORYLIST(state, value){
        state.categoryList = value;
    },
    REQBANNERLIST(state, value){
        state.bannerList = value;
    },
    REQFLOORLIST(state, value){
        state.floorList = value;
    }
};


const getters = {};

const state = {
    // home中三级菜单的数据
    categoryList:[],
    // 轮播图数据
    bannerList:[],
    // floor数据
    floorList:[]
};


export default{
    state,
    mutations,
    actions,
    getters
}