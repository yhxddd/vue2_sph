// 配置相关内容
module.exports = {
    // 不适用eslint
    lintOnSave : false,

    // 配置代理跨域
    devServer:{
        proxy:{
            "/api":{
                target:"http://gmall-h5-api.atguigu.cn",
                pathReWrite:{'^/api' : ''}
            }
        }
    }
}