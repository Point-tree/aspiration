<template>
  <div class="choose_header">
    <div class="container">
      <div class="message">
        <div class="message_left">
          <div class="detail" v-show="showDetail">
            <div class="probability">
              <span class="detail_title">考生类别 ></span>
              <span class="detail_subTitle" :class="subTitle=='all'?'spanActive':''" @click="subTitle='all'">全部</span>
              <span class="detail_subTitle" :class="subTitle=='science'?'spanActive':''" @click="subTitle='science'">理科</span>
              <span class="detail_subTitle" :class="subTitle=='liberalArts'?'spanActive':''" @click="subTitle='liberalArts'">文科</span>
            </div>
            <div class="probability">
              <span class="detail_title">所属地区 ></span>
              <span class="detail_subTitle" :class="site==''?'spanActive':''" @click="site=''">全部</span>
              <span class="detail_subTitle" 
                    v-for="(item, index) of allSite"
                    :class="site==item?'spanActive':''" 
                    @click="site=item"
                    :key="index"
              >
              {{item}}
              </span>
            </div>
          </div>
          <div class="close_detail" @click="show()">
            {{showCondition}}
          </div>
          <search-school v-if="result" :site="site" :subTitle="subTitle"></search-school>
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
            <ul id="subject">
              <li id="school_name" v-for="(item, index) of schoolList" :key=index>
                {{item.name}}
                <div class="sub">
                  <img :src=item.logo>
                  <div class="sub_msg">
                    <p>普通本科</p>
                    <p>开设专业</p>
                    <p>招生信息</p>
                    <p>历年分数</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import SearchSchool from './SearchSchool'
import NoFound from './NoFound'
export default {
  name: "school-header",
  components:{
    swiper,
    swiperSlide,
    SearchSchool,
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
      result: '1',
      showCondition: '关闭筛选条件',
      schoolList: [],
      showRule: false,
      site: '',
      subTitle: 'all',
      allSite: [],
    }
  },
  mounted() {
    this.getSite();
    this.getSuggest();
    window.addEventListener('scroll', this.menu);
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
    // 获得筛选学校列表
    getSite(){
      this.axios.get('/school/findAllSite').then((res)=>{
        this.allSite = res.data
      }) 
    },
    // 获得推荐高校
    getSuggest(){
      this.axios.get('/school/recommandSchool').then((res)=>{
        this.schoolList = res.data;
      }).then(()=>{
        this.initList();
      })
    },
    // 滚动定位事件
    menu() {
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollBottom = document.documentElement.scrollHeight-330-document.documentElement.clientHeight || document.body.scrollHeight-330-document.body.clientHeight;
      var suggest = document.querySelector('.suggest_school')
      if(scroll >= 460 && scroll <= scrollBottom){
        suggest.style.position = 'fixed'
      }else{
        suggest.style.position = 'relative'
      }
    },
    // 找不到数据
    // nofound(i) {
    //   this.result = i
    // },
    // 事件绑定封装
    bind(el, eventType, callback) {
      if(typeof el.addEventListener === 'function'){
          //标准事件绑定方法
          el.addEventListener(eventType, callback, false);
      }else if(typeof el.attechEvent === 'function'){
          //IE事件绑定方法
          el.attachEvent('on' + eventType, callback);
      }
    },
    //鼠标悬停的处理函数
    mouseoverHandler(e){
      var target = e.target || e.srcElement;
      var outer = document.getElementById('subject');
      var list = outer.getElementsByTagName('li');
      //清空所有LI元素的class
      for(var i = 0; i < list.length; i++){
          list[i].querySelector('.sub').style.display = 'none';
      }
      //根据事件的冒泡原理，找到需要变更class 的LI元素
      while(target.tagName != 'LI' || target.tagName == 'BODY'){
          target = target.parentNode;
      }
      target.querySelector('.sub').style.display = 'block';
    },
    //初始化手风琴样式
    initList() {
    //取得外部元素
      var outer = document.getElementById('subject');
      //取得每个列表项
      var list = outer.getElementsByTagName('li');
      for(var i =0; i < list.length; i++){
          //对每个列表绑定鼠标悬停事件的监听
        this.bind(list[i],'mouseover',this.mouseoverHandler);
      }
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.choose_header{
  .message{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    .message_left{
      flex: 4;
      margin-right: 40px;
      .detail{
        display: flex;
        flex-direction: column;
        border-top: 1px solid #eaeaea;
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
        top: 0;
        z-index: 10;
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
        #subject{
          transition:all .1s linear;
          #school_name{
            font-weight: bold;
            line-height: 28px;
            color: #333;
            font-size: 14px;
            border-bottom: 1px dashed #eaeaea;
            padding: 3px 0;
            overflow:hidden;
            .sub{
              display: none;
              img{
                height: 78px;
                width: 78px;
                float: left;
                margin-right: 20px;
              }
              .sub_msg{
                text-align: center;
                p{
                  line-height: 22px;
                  color: #666;
                  font-weight: lighter;
                  cursor: pointer;
                  &:hover{
                    color: $themeColor;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>