// 进行API统一管理
import requests from "./request";

import mockRequest from './mockAjax';

// 三级联动的接口---get 无参数
//  ---向外暴露一个函数用于请求数据，其他模块相同数据可直接调用
export const reqCategoryList = () => {
    return requests({url: '/product/getBaseCategoryList', method:'get'})
}


//获取banner（Home首页轮播图数据）
export const reqBannerList = () => {
    return mockRequest({url:'/banner', method:'get'})
}

//获取floor
export const reqFloorList = () => {
    return mockRequest.get('/floor')
}

// 获取搜索模块数据，post请求带参数;给服务器传递参数至少是一个空对象
export const reqSearchInfo = (params) => {
    return requests({url:'/list', method:'post',data:params})
}

// 获取产品详情的数据 /api/item/{ skuId }
export const reqGoodsDetail = (skuId) => {
    return requests({url:`/item/${skuId}`, method:'get'})
}

// 将产品加入购物车 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShop = (skuId,skuNum) => {
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`, method:'post'})
} 
