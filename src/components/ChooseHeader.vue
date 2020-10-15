<template>
  <div class="choose_header">
    <div class="container">
      <div class="title"><span :class="page=='score'?'active': ''" @click="changeScore()">根据分数选大学</span><span :class="page=='rank'?'active': ''" @click="changeRank()">根据位次选大学</span></div>
      <div class="message">
        <div class="message_left">
          <form class="select">
            <div>
              <select class="select_address">
                <option value ="广州">广州</option>
                <option value ="广州">广州</option>
              </select>
            </div>
            <span>科类 ></span>
            <div>
              <input type="radio" name="type" value="理科" class="select_type" checked><span>理 科</span>
              <input type="radio" name="type" value="文科" class="select_type"><span>文 科</span>
            </div>
            <div>
              <select  class="type">
                <option value ="普通类">普通类</option>
                <option value ="全部类型">全部类型</option>
              </select>
            </div>
            <div class="select_scole">
              <input type="text" :placeholder="tip">
            </div>
            <button class="submit">预测</button>
          </form>
          <div class="detail" v-show="showDetail">
            <div class="probability">
              <span class="detail_title">录取概率 ></span>
              <span class="detail_subTitle spanActive">全部</span>
              <span class="detail_subTitle" @click="showRule=true">【推荐规则】</span>
              <div class="rule" v-if="showRule">
                <p>1、本查询系统的信息仅供参考，具体数据请以学校官网或考试院公布为准。</p>
                <p>2、考生输入分数，系统将根据在当省招生的高校招生情况，推荐合适的高校；</p>
                <p>3、本系统推荐的院校名单，仅供志愿参考。</p>
                <span class="close cursor" @click="showRule=false">X</span>
              </div>
            </div>
            <div class="probability">
              <span class="detail_title">录取概率 ></span>
              <span class="detail_subTitle spanActive">全部</span>
              <span class="detail_subTitle">【推荐规则】</span>
            </div>
            <div class="probability">
              <span class="detail_title">录取概率 ></span>
              <span class="detail_subTitle spanActive">全部</span>
              <span class="detail_subTitle">【推荐规则】</span>
            </div>
            <div class="probability">
              <span class="detail_title">录取概率 ></span>
              <span class="detail_subTitle spanActive">全部</span>
              <span class="detail_subTitle">【推荐规则】</span>
            </div>
          </div>
          <div class="close_detail" @click="show()">
            {{showCondition}}
          </div>
          <select-school v-if="result"></select-school>
          <no-found v-if="!result"></no-found>
        </div>
        <div class="message_right">
          <swiper :options="swiperOption" class="swiper_img">
            <swiper-slide>
              <a href="javascript:;"><img src="https://img.eol.cn/e_images/gk/2019/PC/spright302.jpeg"></a>
            </swiper-slide>
            <swiper-slide>
              <a href="javascript:;"><img src="https://img.eol.cn/e_images/gk/2019/PC/spright302.jpeg"></a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
          <div class="suggest_school">
            <div class="suggest_title">推荐高校</div>
            <div class="school_name" v-for="(item, index) of schoolList" :key=index>上海海事大学</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import SelectSchool from './SelectSchool'
import NoFound from './NoFound'
export default {
  name: "choose-header",
  components:{
    swiper,
    swiperSlide,
    SelectSchool,
    NoFound
  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination'
        },
      },
      result: '11',
      showDetail: true,
      showCondition: '关闭筛选条件',
      schoolList: [1,1,1,1,1,1,1,1,1],
      page: 'score',
      showRule: false,
      tip: '高考分：550'
    }
  },
  methods: {
    show(){
      this.showDetail = !this.showDetail
      if(this.showDetail == true){
        this.showCondition = '关闭筛选条件'
      }else{
        this.showCondition = '开启筛选条件'
      }
    },
    changeScore(){
      this.page = 'score'
      this.tip = '高考分：550'
    },
    changeRank(){
      this.page = 'rank'
      this.tip = '高考位次：10000'
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.choose_header{
  .title{
    display: block;
    font-size: 18px;
    height: 38px;
    line-height: 38px;
    margin-top: 12px;
    color: #333333;
    cursor: pointer;
    width: 100%;
    border-bottom: 1px solid #ededed;
    span{
      margin-right: 50px;
    }
    .active{
      color: $themeColor;
    }
  }
  .message{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    .message_left{
      flex: 4;
      margin-right: 40px;
      .select{
        display: flex;
        flex-direction: row;
        height: 32px;
        position: relative;
        padding-bottom: 20px;
        border-bottom: 1px solid #eaeaea;
        .select_address{
          height: 32px;
          width: 90px;
          padding: 5px;
          border: 1px solid #eaeaea;
          outline: none;
        }
        span{
          font-size: 14px;
          color: #55595f;
          margin: 0 20px;
          line-height: 32px;
        }
        .select_type{
          width: 14px;
          height: 14px;
          display: inline-block;
          text-align: center;
          vertical-align: middle;
        }
        .type{
          height: 32px;
          width: 120px;
          padding: 5px;
          border: 1px solid #eaeaea;
        }
        .select_scole{
          margin: 0 20px;
          input{
            border: 1px solid #d9d9d9;
            outline: none;
            border-radius: 0px;
            height: 32px;
            line-height: 32px;
            padding-left: 10px;
            width: 140px;
          }
        }
        button{
          background-color: transparent;
          outline: none;
          width: 100px;
          height: 32px;
          line-height: 32px;
          border: 1px solid $themeColor;
          color: $themeColor;
          text-align: center;
          font-size: 18px;
          cursor: pointer;
          position: absolute;
          right: 0;
        }
      }
      .detail{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #eaeaea;
        padding-top: 10px;
        .probability{
          display: flex;
          font-size: 14px;
          position: relative;
          .detail_title{
            color: #333333;
            height: 31px;
            line-height: 25px;
            width: 88px;
          }
          .detail_subTitle{
            padding: 0px 20px 8px 0px;
            color: #666;
            line-height: 24px;
            font-size: 14px;
            cursor: pointer;
          }
          .spanActive{
            color: $themeColor
          }
          .rule{
            position: absolute;
            left: 372px;
            border: 2px solid #e9e9e9;
            padding: 25px 20px 25px 20px;
            color: #333;
            background: #f6f6f6;
            z-index: 100;
            font-size: 14px;
            .close{
              position: absolute;
              right: 6px;
              top: 4px;
            }
          }
        }
      }
      .close_detail{
        width: 128px;
        height: 24px;
        margin: 0 auto;
        line-height: 24px;
        text-align: center;
        background: #f5f5f5;
        font-size: 14px;
        color: #666666;
        cursor: pointer;
        margin-bottom: 20px;
      }
    }
    .message_right{
      flex: 1;
      .swiper_img{
        width: 230px;
        img{
          width: 100%;
        }
        .swiper-pagination-bullet-active{
          background-color: #ffffff;
        }
      }
      .suggest_school{
        margin-top: 50px;
        width: 230px;
        border: 1px solid #eaeaea;
        border-top: 2px solid $themeColor;
        position: relative;
        background: white;
        padding-left: 15px;
        .suggest_title{
          display: block;
          width: 100%;
          height: 40px;
          color: $themeColor;
          font-size: 16px;
          line-height: 40px;
          border-bottom: 1px dashed #eaeaea;
          margin-bottom: 12px;
        }
        .school_name{
          font-weight: bold;
          line-height: 28px;
          color: #333;
          font-size: 14px;
          border-bottom: 1px dashed #eaeaea;
          padding: 3px 0;
        }
      }
    }
  }
}
</style>