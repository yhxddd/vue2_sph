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

// 获取购物车数据 /api/cart/cartList
export const reqShopCartList = () => {
    return requests({url:`/cart/cartList`, method:'get'})
} 

// 删除购物车商品 /cart/deleteCart/{skuId}
export const reqDelShopCarById = (skuId) => {
    return requests({url:`/cart/deleteCart/${skuId}`, method:'delete'});
}

// 修改购物车某产品选中状态 /cart/checkCart/{skuId}/{isChecked}
export const reqChangeShopCheckedById = (skuId, isChecked) => {
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`, method:'get'});
}


// 获取验证码 /user/passport/sendCode/phone
export const reqGetCode = (phone) => {
    return requests({url:`/user/passport/sendCode/${phone}`, method:'get'});
}

// 用户注册 /user/passport/register  ：phone, code, psd
export const reqUserRegister = (data) => {
    return requests({url:'/user/passport/register', data, method:'post'});
}

// 用户登录 /user/passport/login phone password
export const reqUserLogin = (data) => {
    return requests({url:'/user/passport/login', data, method:'post'});
}

// 获取用户信息（需要使用token向服务器请求用户信息）/user/passport/auth/getUserInfo
export const reqUserInfoToken = () => {
    return requests({url:'/user/passport/auth/getUserInfo', method:'get'});
}

// 用户退出登录 /user/passport/logout 
export const reqUserLogout = () => {
    return requests({url:'/user/passport/logout', method:'get'});
}

// 获取用户地址信息 /user/userAddress/auth/findUserAddressList 
export const reqUserAddress = () => {
    return requests({url:'/user/userAddress/auth/findUserAddressList', method:'get'});
}

// 获取商品清单 /order/auth/trade
export const reqOrderInfo = () => {
    return requests({url:'/order/auth/trade', method:'get'});
}

// 提交订单 /order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => {
    return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method:'post'});
}

// 获取订单支付信息 /payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => {
    return requests({url:`/payment/weixin/createNative/${orderId}`, method:'get'});
}

// 获取订单支付状态 /payment/weixin/queryPayStatus/{orderId}
export const reqPayState = (orderId) => {
    return requests({url:`/payment/weixin/queryPayStatus/${orderId}`, method:'get'});
}

// 获取个人中心数据
// 我的订单列表 /order/auth/{page}/{limit}
export const reqMyOrderList = (page, limit) => {
    return requests({url:`/order/auth/${page}/${limit}`, method:'get'});
}