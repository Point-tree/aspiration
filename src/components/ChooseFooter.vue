<template>  
  <div class="choose_footer">
    <div class="container">
      <div class="title"><div class="title_box"></div><div class="title_name">高考生必备资料</div></div>
      <div class="information">
        <div class="information_left">
          <div class="information_text">
            <span class="information_title">资讯</span>
            <span>各地动态</span>
            <span>高考政策</span>
            <span>艺考动态</span>
            <span>高职招生</span>
            <span>APP下载</span>
          </div>
          <div class="information_text">
            <span class="information_title">备考</span>
            <span>语</span>
            <span>数</span>
            <span>外</span>
            <span>物</span>
            <span>化</span>
            <span>生</span>
            <span>史</span>
            <span>地</span>
            <span>政</span>
            <span>文综</span>
            <span>理综</span>
            <span>经验</span>
          </div>
          <div class="information_text">
            <span class="information_title">大学</span>
            <span>正规大学</span>
            <span>211</span>
            <span>985</span>
            <span>双一流</span>
            <span>教育部直属</span>
          </div>
          <div class="information_text">
            <span class="information_title">实用</span>
            <span>大学排名</span>
            <span>各省高考人数</span>
          </div>
          <div class="information_text">
            <span class="information_title">分数线</span>
            <span>专业分数线</span>
            <span>高校录取线</span>
            <span>各省批次控制线</span>
            <span>分数线预估</span>
          </div>
        </div>
        <div class="information_right">
          <div class="information_text">
            <span class="information_title">专栏</span>
            <span>三大招飞</span>
            <span>强基计划</span>
          </div>
          <div class="information_text">
            <span class="information_title">试题</span>
            <span>2020年</span>
            <span>2019年</span>
            <span>2018年</span>
            <span>2017年</span>
            <span>2016年</span>
            <span>更多</span>
          </div>
          <div class="information_text">
            <span class="information_title">专业</span>
            <span>专业解读资讯</span>
            <span>特色专业</span>
            <span>专业解读</span>
            <span>重点学科</span>
          </div>
          <div class="information_text">
            <span class="information_title">志愿</span>
            <span>平行志愿</span>
            <span>高考百科</span>
            <span>志愿指导</span>
            <span>照顾政策</span>
          </div>
           <div class="information_text">
            <span class="information_title">招生</span>
            <span>招生规定</span>
            <span>高考报名</span>
            <span>录取政策</span>
            <span>体验政策</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choose-footer",
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.choose_footer{
  .title{
    display: flex;
    flex-direction: row;
    border-top: 1px solid #ededed;
    .title_box{
      background-color: $themeColor;
      height: 24px;
      width: 5px;
      margin: 5px 10px 0 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    .title_name{
      padding-top: 10px;
      line-height: 30px;
      padding-left: 6px;
      font-size: 16px;
      width: 100%;
      color: #333333;
      position: relative;
      margin-bottom: 25px;
    }
  }
  .information{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 50px;
    .information_left,
    .information_right{
      flex: 1;
      padding: 0 20px;
      border: .8px solid #ededed;
      height: 250px;
      margin-right: 20px;
      .information_text{
        display: flex;
        flex-direction: row;
        background-color: #fff;
        border-bottom: 1px solid #ededed;
        padding: 10px 0;
        height: 50px;
        line-height: 30px;
        box-sizing: border-box;
        font-size: 14px;
        .information_title{
          margin-right: 10px;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            height: 20px;
            border-left: 1px solid #ababab;
            top: 5px;
            right: -10px;
          }
        }
        span{
          margin: 0 10px;
          &:hover{
            border-bottom: 1px solid $themeColor;
            color: $themeColor;
            cursor: pointer;
          }
        }
      }
    }
    .information_right{
      margin-right: 0;
    }
  }
}
</style>