// 进行API统一管理
import requests from "./request";

// 三级联动的接口---get 无参数
//  ---向外暴露一个函数用于请求数据，其他模块相同数据可直接调用
export const reqCategoryList = () => {
    return requests({url: '/product/getBaseCategoryList', method:'get'})
}
