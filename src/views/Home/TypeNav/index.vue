<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leaveIndex">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort">
        <div class="all-sort-list2" @click="goSearch">
          <div class="item" v-for="(cate, index) in categoryList" :key="cate.categoryId" :class="{cur:currentIndex==index}">
            <h3 @mouseenter="changeIndex(index)">
              <a :data-categoryName="cate.categoryName" :data-category1Id="cate.categoryId">{{cate.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem" v-for="cateChild in cate.categoryChild" :key="cateChild.categoryId">
                <dl class="fore">
                  <dt>
                    <a :data-categoryName="cateChild.categoryName" :data-category2Id="cateChild.categoryId">{{cateChild.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="cateChildChild in cateChild.categoryChild" :key="cateChildChild.categoryId">
                      <a :data-categoryName="cateChildChild.categoryName" :data-category3Id="cateChildChild.categoryId">{{cateChildChild.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// 全部引入
import _ from 'lodash';
export default {
  name: 'TypeNav',
  data(){
    return {
      // 鼠标悬浮的一级分类的索引值
      currentIndex:-1
    }
  },
  // 组件挂载完毕，可以向服务器发送请求
  mounted(){
      //this.$store.dispatch('homeModule/categoryList');
      this.$store.dispatch('categoryList');
  },
  computed:{
    // =---开启命名空间的写法
    //...mapState('homeModule',['categoryList'])

    // ---不开启命名空间的写法
     ...mapState({
       // 对象写法，右侧需要的是一个函数，当使用计算属性时，右侧函数回立即只能怪一次，
       // 注入的state参数，其实是大仓库中的数据
       categoryList : state => state.homeModule.categoryList
     })
  },
  methods:{
    // changeIndex(index){
    //   console.log(index);
    //   this.currentIndex = index;
    // },
    // 加入节流
    changeIndex: _.throttle(function(index){
      this.currentIndex = index;
    },50),
    leaveIndex(){
      this.currentIndex = -1;
    },
    goSearch(event){
      // 事件委派+ 编程式导航
      // 问题：不一定点到a把标签（事件委派是把全部子节点的事件都委托给父节点）；如何区分几级菜单

      // ---  为a标签增加 :data-categoryname="cateChild.categoryName" 自定义属性，有该属性一定为a标签
      let element = event.target;

      // 节点上有一个dataset属性，获取节点的自定义属性与值
      let {categoryname, category1id, category2id, category3id} = element.dataset;
      if(categoryname){
        // 整理路由跳转的参数
        let location = {name:'searchComponent'};
        let query = { categoryname: categoryname};
        if(category1id){
          query.category1Id = category1id;
        }else if(category2id){
          query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        
        location.query = query;
        // 路由跳转
        this.$router.push(location);
      }
    },
  }
}
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        // .item:hover{
        //   background-color: skyblue;
        // }
        .cur{
          background-color: skyblue;
        }
      }
    }
  }
}
</style>
