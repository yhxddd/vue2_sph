<template>
  <div>
    <!-- 使用三级联动组件，已经注册为全局组件，因此不需要再引入-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :listData="floor"/>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import TodayRecommend from './TodayRecommend/TodayRecommend.vue'
import Rank from './Rank/Rank.vue'
import Like from './Like/Like.vue'
import Floor from './Floor/Floor.vue'
import Brand from './Brand/Brand.vue'
import { mapState } from 'vuex'
export default {
    name: "Home",
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    },
    mounted(){
      this.$store.dispatch('reqFloorList');
      // 获取登录的用户信息
      //this.$store.dispatch('reqUserInfoToken');
    },
    computed:{
      ...mapState({floorList: state => state.homeModule.floorList})
    }
}
</script>

<style>

</style>