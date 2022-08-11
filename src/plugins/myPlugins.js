// vue的插件一定是暴露一个对象
let myPlugins = {};

myPlugins.install = function(Vue,options){
    console.log('自定义插件')
    Vue.directive(options.name, (element, params)=>{
        console.log('自定义指令name', options.name)
        console.log('自定义指令绑定的元素', element)
        console.log('自定义指令的属性', params)
        element.innerHTML = params.value.toUpperCase();
    })
}
export default myPlugins;