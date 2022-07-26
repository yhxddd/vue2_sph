<template>
  <div>
    <TypeNav></TypeNav>
    <h1>{{$route.query.categoryname}}</h1>
    <h1>{{$route.query.category1Id}}</h1>
    <h1>{{$route.query.category2Id}}</h1>
    <h1>{{$route.query.category3Id}}</h1>
  </div>
</template>

<script>
export default {
    name:'Search'
}
</script>

<style>

</style>