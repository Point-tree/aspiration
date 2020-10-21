<template>
  <div class="index">
    <div class="container">
      <swiper :options="swiperOption" class="swiper_img">
        <swiper-slide>
          <a href="javascript:;"><img src="https://img8.eol.cn/e_images/gk/2019/PC/3dbanner402.png"></a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;"><img src="https://img9.eol.cn/e_images/gk/2019/PC/3dbanner303.jpeg"></a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1588917923_2991_thumb.jpg"></a>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="detail">
        <div class="detail_item">
          <a href="javascript:;">双一流建设高校</a>
          <a href="javascript:;">双一流建设学科</a>
          <a href="javascript:;">985工程高校</a>
          <a href="javascript:;">211工程高校</a>
          <a href="javascript:;">国家重点学科</a>
          <a href="javascript:;">特色专业</a>
          <a href="javascript:;">历年高考分数线</a>
          <a href="javascript:;">高招调查报告</a>
          <a href="javascript:;">图解强基计划</a>
          <a href="javascript:;">高考真题</a>
          <a href="javascript:;">高考百科</a>
          <a href="javascript:;">一分一段</a>
          <a href="javascript:;">高职频道</a>
          <a href="javascript:;">专业解读</a>
          <a href="javascript:;">高考大纲</a>
        </div>
        <div class="deadline">
          <div class="deadline_title">高考倒计时</div>
          <div class="deadline_time">
            <span class="day_num">2</span>
            <span class="day_num">2</span>
            <span class="day_num">2</span>
            <span class="day_unit">天</span>
          </div>
        </div>
      </div>
      <div class="hotRecommon">
        <div class="title"><div class="title_box"></div><div class="title_name">热门推荐</div></div>
        <div class="recommon_body">
          <div class="picture cursor"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1595485860_3376_thumb.png" alt="高考招生咨询会"><p>2020高考招生咨询会，正在进行中</p></div>
          <div class="news">
            <div class="news_item cursor"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1597906391_4422_thumb.jpg" alt="2020年高招办请回答"><span>2020年高招办请回答</span></div>
            <div class="news_item cursor"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1578913537_7659_thumb.jpg" alt="大学信息名单 ——全面掌握大学信息 助力金榜题名"><span>大学信息名单 ——全面掌握大学信息 助力金榜题名</span></div>
            <div class="news_item cursor"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1578913556_7898_thumb.jpg" alt="高考实用信息导航——一站式了解高考"><span>高考实用信息导航——一站式了解高考</span></div>
            <div class="news_item cursor"><img src="https://static-gkcx.eol.cn//upload/operate_img/gkcx_1578913574_7558_thumb.jpg" alt="全国高校特色专业建设点名单"><span>全国高校特色专业建设点名单</span></div>
          </div>
          <div class="news_detail">
            <ul>
              <li>各地投档分数线</li>
              <li>各地高考报名人数</li>
              <li>重点高校官网导航</li>
              <li>高职单招小百科</li>
              <li>高考志愿填报指南</li>
              <li>新高考，考生如何选科</li>
              <li>高校自主招生全面详解</li>
              <li>聚焦高考</li>
              <li>数说高考</li>
              <li>各省招生工作规定</li>
              <li>2020年各地新高考选科要求</li>
              <li>高考全知道</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="school">
        <div class="title"><div class="title_box"></div><div class="title_name">推荐院校</div><div class="change cursor" @click="getSuggest()"><img src="">换一批</div></div>
        <div class="school_detail">
          <div 
            class="school_box cursor"
            v-for="(item, index) of schoolList"
            :key="index"
          >
            <div class="img_box">
              <img :src=item.picture :alt=item.name>
            </div>
            <div class="school_name">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="about_school">
        <div class="professional">
          <div class="title"><div class="title_box"></div><div class="title_name">专业解读</div></div>
          <div class="professional_video cursor">
            <div class="video_box">
              <img src="https://img7.eol.cn/e_images/gk/2019/PC/special101.png" alt="船舶与海洋工程专业解读">
              <div class="video_name">船舶与海洋工程专业解读</div>
            </div>
            <div class="video_box">
              <img src="https://img5.eol.cn/e_images/gk/2019/PC/special201.png" alt="生态学专业解读">
              <div class="video_name">生态学专业解读</div>
            </div>
            <div class="video_box">
              <img src="https://img3.eol.cn/e_images/gk/2019/PC/special301.png" alt="计算机科学与技术专业解读">
              <div class="video_name">计算机科学与技术专业解读</div>
            </div>
            <div class="video_box">
              <img src="https://img4.eol.cn/e_images/gk/2019/PC/special401.png" alt="建筑学专业解读">
              <div class="video_name">建筑学专业解读</div>
            </div>
            <div class="video_box">
              <img src="https://img7.eol.cn/e_images/gk/2019/PC/special501.png" alt="护理学专业解读">
              <div class="video_name">护理学专业解读</div>
            </div>
            <div class="video_box">
              <img src="https://img8.eol.cn/e_images/gk/2019/PC/special601.png" alt="化学专业解读">
              <div class="video_name">化学专业解读</div>
            </div>
          </div>
        </div>
        <div class="hot_school">
          <div class="title"><div class="title_box"></div><div class="title_name">院校热度</div><div class="school_type"><span class="cursor" :class="school_rank=='undergraduate'?'active':''" @click="school_rank='undergraduate'">本科</span><span class="cursor" :class="school_rank=='specialty'?'active':''" @click="school_rank='specialty'">专科</span></div></div>
          <div class="rank">
            <div class="school_rank">
              <div class="school_num import">1</div><div class="school_name cursor">厦门大学</div><div class="school_hot_num cursor">12468798</div>
            </div>
            <div class="school_rank">
              <div class="school_num import">2</div><div class="school_name cursor">四川大学</div><div class="school_hot_num cursor">12348768</div>
            </div>
            <div class="school_rank">
              <div class="school_num import">3</div><div class="school_name cursor">武汉大学</div><div class="school_hot_num cursor">11846876</div>
            </div>
            <div class="school_rank">
              <div class="school_num">4</div><div class="school_name cursor">北京大学</div><div class="school_hot_num cursor">10548673</div>
            </div>
            <div class="school_rank">
              <div class="school_num">5</div><div class="school_name cursor">中山大学</div><div class="school_hot_num cursor">9468465</div>
            </div>
            <div class="school_rank">
              <div class="school_num">6</div><div class="school_name cursor">清华大学</div><div class="school_hot_num cursor">9445433</div>
            </div>
            <div class="school_rank">
              <div class="school_num">7</div><div class="school_name cursor">中南大学</div><div class="school_hot_num cursor">9446768</div>
            </div>
            <div class="school_rank">
              <div class="school_num">8</div><div class="school_name cursor">西南大学</div><div class="school_hot_num cursor">8446746</div>
            </div>
            <div class="school_rank">
              <div class="school_num">9</div><div class="school_name cursor">浙江大学</div><div class="school_hot_num cursor">8434876</div>
            </div>
            <div class="school_rank">
              <div class="school_num">10</div><div class="school_name cursor">浙江大学</div><div class="school_hot_num cursor">7545346</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: "index",
  components:{
    swiper,
    swiperSlide
  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect: {
          shadowOffset: 50,
          shadowScale: 0.6
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      school_rank: 'undergraduate',
      schoolList: []
    }
  },
  mounted(){
    this.getSuggest();
  },
  methods: {
    // 获得推荐高校
    getSuggest(){
      this.axios.get('/school/recommandSchool').then((res)=>{
        this.schoolList = res.data;
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.index{
  margin-top: 20px;
  .swiper-container {
    width: 80%;
    img{
      width:100%;
    }
  }
  .detail{
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    .detail_item{
      flex: 5;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      a{
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border: 1px solid $themeColor;
        border-radius: 6px;
        margin: 0 20px 20px 0;
        color: #666666;
        cursor: pointer;
        font-size: 16px;
        padding: 0 10px;
      }
    }
    .deadline{
      flex: 1;
      float: right;
      width: 226px;
      background-color: $themeColor;
      border-radius: 6px;
      color: white;
      font-size: 24px;
      font-weight: 400;
      color: #fff;
      text-align: center;
      padding-top: 48px;
      margin-bottom: 20px;
      .deadline_time{
        margin-top: 37px;
        font-size: 32px;
        font-weight: bold;
        position: relative;
        .day_num{
          padding: 5px 10px;
          color: $themeColor;
          background: white;
          margin-right: 10px;
          border-radius: 2px;
        }
        .day_unit{
          font-size: 14px;
          font-weight: 400;
          position: absolute;
          bottom: -7px;
        }
      }
    }

  }
  .hotRecommon{
    margin-bottom: 30px;
    .title{
      display: flex;
      flex-direction: row;
      .title_box{
        background-color: $themeColor;
        height: 24px;
        width: 5px;
        margin: 5px 10px 0 0;
      }
      .title_name{
        font-size: 24px;
        font-weight: 400;
        color: #333;
        margin-bottom: 23px !important;
      }
    }
    .recommon_body{
      display: flex;
      flex-direction: row;
      position: relative;
      .picture{
        margin-right: 29px;
        img{
          width: 390px;
        }
        p{
          width: 390px;
          text-indent: 4px;
          margin-top: 18px;
          font-size: 16px;
          font-weight: 400;
          &:hover{
            color: $themeColor;
          }
        }
      }
      .news{
        .news_item{
          margin-bottom: 30px;
          display: flex;
          justify-content: flex-start;
          img{
            width: 90px;
            margin-right: 14px;
          }
          span{
            height: 46px;
            font-size: 14px;
            &:hover{
              color: $themeColor;
            }
          }
        }
      }
      .news_detail{
        position: absolute;
        top: 0;
        right: 110px;
        font-size: 14px;
        li{
          margin-bottom: 16px;
          position: relative;
          cursor: pointer;
          &::before{
            content: "\2022";
            color: #F15D52;
            font-size: 20px;
            margin-right: 8px;
            position: absolute;
            left: -14px;
            top: 0;
          }
          &:hover{
            color: $themeColor;
          }
        }
      }
    }
  }
  .school{
    margin-bottom: 50px;
    .title{
      display: flex;
      flex-direction: row;
      position: relative;
      .title_box{
        background-color: $themeColor;
        height: 24px;
        width: 5px;
        margin: 5px 10px 0 0;
      }
      .title_name{
        font-size: 24px;
        font-weight: 400;
        color: #333;
        margin-bottom: 23px !important;
      }
      .change{
        position: absolute;
        right: 5px;
        top: 0;
        color: #333;
        font-size: 14px;
        &:hover{
          color: $themeColor;
        }
      }
    }
    .school_detail{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .school_box{
        margin-right: auto;
        width: 285px;
        &:nth-child(4n){
          margin-right: 0;
        }
        .school_name{
          margin-top: 15px;
          font-size: 16px;
          font-weight: 400;
          text-align: center;
          &:hover{
            color: $themeColor;
          }
        }
        .img_box{
          width: 285px;
          height: 179px;
          img{
            width: 285px;
            height: 179px;
          }
        }
      }
    }
  }
  .about_school{
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    .professional{
      flex: 4;
      .title{
        display: flex;
        flex-direction: row;
        position: relative;
        .title_box{
          background-color: $themeColor;
          height: 24px;
          width: 5px;
          margin: 5px 10px 0 0;
        }
        .title_name{
          font-size: 24px;
          font-weight: 400;
          color: #333;
          margin-bottom: 23px !important;
        }
      }
      .professional_video{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .video_box{
          width: 274px;
          margin-right: auto;
          img{
            width: 274px;
          }
          .video_name{
            text-align: center;
            margin-top: 14px;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 400;
            color: #333;
          }
        }
      }
    }
    .hot_school{
      flex: 1;
      .title{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid #E4E4E4;
        .title_box{
          background-color: $themeColor;
          height: 24px;
          width: 5px;
          margin: 5px 10px 0 0;
        }
        .title_name{
          font-size: 24px;
          font-weight: 400;
          color: #333;
          margin-bottom: 23px !important;
        }
        .school_type{
          position: absolute;
          right: 0;
          display: flex;
          span{
            width: 28px;
            line-height: 4px;
            font-size: 12px;
            padding: 10px 7px;
            margin-right: 5px;
            border-radius: 4px;
          }
          .active{
            color: white;
            background-color: $themeColor;
          }
        }
      }
      .rank{
        margin-top: 20px;
        .school_rank{
          display: flex;
          flex-direction: row;
          position: relative;
          margin-bottom: 16px;
          .school_num{
            width: 20px;
            height: 20px;
            line-height: 20px;
            background-color: #cccccc;
            color: #fff;
            text-align: center;
            margin-right: 10px;
          }
          .import{
            background-color: #F0052B;
          }
          .school_name{
            font-size: 14px;
            &:hover{
              color: $themeColor
            }
          }
          .school_hot_num{
            position: absolute;
            line-height: 20px;
            right: 0;
            &:hover{
              color: $themeColor
            }
          }
        }
      }
    }
  }
}
</style>
