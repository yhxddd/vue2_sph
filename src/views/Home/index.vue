<template>
  <div>
    <!-- 使用三级联动组件，已经注册为全局组件，因此不需要再引入-->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
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
export default {
    name: "Home",
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
      Like,
      Floor,
      Brand
    }
}
</script>

<style>

</style>