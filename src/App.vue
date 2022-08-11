<template>
  <div id="app">
    <!-- <h1 v-upper="msg"></h1> -->
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter v-show="$route.meta.show"></MyFooter>
  </div>
</template>

<script>

import MyHeader from './components/Header/index.vue'
import MyFooter from './components/Footer/index.vue'
export default {
  name: 'App',
  data(){
    return {
      msg:'abc'
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  mounted(){
    // 向服务器发请求获取数据，如果放在子组件中会多次发请求，造成服务器的压力，因此写再根组件中只执行一次
    //this.$store.dispatch('homeModule/categoryList');
    this.$store.dispatch('categoryList');
    //  不可行，login会展示用户信息
    // this.$store.dispatch('reqUserInfoToken')
  }
}
</script>

<style>

</style>
