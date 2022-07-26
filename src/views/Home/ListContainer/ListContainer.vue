<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <Carsousel :list="bannerList"></Carsousel>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: 'ListContainer',
    computed:{
      ...mapState({
        bannerList: state =>state.homeModule.bannerList
      })
    },
    mounted(){
      this.$store.dispatch('reqBannerList');
      // new swiper实例之前必须有数据，放在此处时，会进入mounted然后进入actions获取banner数据，
      // 然后直接new swiper，之后再将banner数据修改会vuex中(mutations)
    },
    /*
    watch:{
      // bannerList由空数组变为有数据，所以可以采用监听的方式
      bannerList: {
        immediate:true,
        handler(){
          // 如果执行到handler，则证明bannerList已经有数据了，但不能保证v-for已经渲染完毕
          this.$nextTick(() => {
            new Swiper(this.$refs.mySwiper, {
              loop: true, // 循环模式选项
              
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                clickable:true
              },
              
              // 如果需要前进后退按钮
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              
              // 如果需要滚动条
              scrollbar: {
                el: '.swiper-scrollbar',
              },
            })
          })
        }
      }
    }*/
  }
</script>

<style lang="less" scoped>
  .list-container {
    width: 1200px;
    margin: 0 auto;

    .sortList {
      height: 464px;
      padding-left: 210px;

      .center {
        box-sizing: border-box;
        width: 740px;
        height: 100%;
        padding: 5px;
        float: left;
      }

      .right {
        float: left;
        width: 250px;

        .news {
          border: 1px solid #e4e4e4;
          margin-top: 5px;

          h4 {
            border-bottom: 1px solid #e4e4e4;
            padding: 5px 10px;
            margin: 5px 5px 0;
            line-height: 22px;
            overflow: hidden;
            font-size: 14px;

            .fl {
              float: left;
            }

            .fr {
              float: right;
              font-size: 12px;
              font-weight: 400;
            }
          }

          .news-list {
            padding: 5px 15px;
            line-height: 26px;

            .bold {
              font-weight: 700;
            }
          }
        }

        .lifeservices {
          border-right: 1px solid #e4e4e4;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;

          .life-item {
            border-left: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            margin-right: -1px;
            height: 64px;
            text-align: center;
            position: relative;
            cursor: pointer;
            width: 25%;

            .list-item {
              background-image: url(./images/icons.png);
              width: 61px;
              height: 40px;
              display: block;
            }

            .service-intro {
              line-height: 22px;
              width: 60px;
              display: block;
            }

            &:nth-child(1) {
              .list-item {
                background-position: 0px -5px;
              }
            }

            &:nth-child(2) {
              .list-item {
                background-position: -62px -5px;
              }
            }

            &:nth-child(3) {
              .list-item {
                background-position: -126px -5px;
              }
            }

            &:nth-child(4) {
              .list-item {
                background-position: -190px -5px;
              }
            }

            &:nth-child(5) {
              .list-item {
                background-position: 0px -76px;
              }
            }

            &:nth-child(6) {
              .list-item {
                background-position: -62px -76px;
              }
            }

            &:nth-child(7) {
              .list-item {
                background-position: -126px -76px;
              }
            }

            &:nth-child(8) {
              .list-item {
                background-position: -190px -76px;
              }
            }

            &:nth-child(9) {
              .list-item {
                background-position: 0px -146px;
              }
            }

            &:nth-child(10) {
              .list-item {
                background-position: -62px -146px;
              }
            }

            &:nth-child(11) {
              .list-item {
                background-position: -126px -146px;
              }
            }

            &:nth-child(12) {
              .list-item {
                background-position: -190px -146px;
              }
            }
          }
        }

        .ads {
          margin-top: 5px;

          img {
            opacity: 0.8;
            transition: all 400ms;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>