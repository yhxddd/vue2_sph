import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from './home/index.js'
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        homeModule
    }
})