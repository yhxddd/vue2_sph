import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from './home.js'
import searchModule from './search.js'
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        homeModule,
        searchModule
    }
})