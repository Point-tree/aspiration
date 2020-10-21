<template>
  <div class="header">
    <div class="container">
      <div class="title">
        <div class="logo"></div>
        <div class="search">
          <div class="search_input">
            <input type="text" placeholder="查学校、查专业、查咨询" @focus="searchItem=true" @blur="searchItem=false">
            <button class="cursor">搜索</button>
          </div>
          <div class="search_item" v-if="searchItem">
            <div class="item_title">热门搜索</div>
            <div class="item_item">
              <div class="item_num" style="background-color: red">1</div><div class="item_name" style="color: red">广东财经大学</div>
            </div>
            <div class="item_item">
              <div class="item_num" style="background-color: orange">1</div><div class="item_name" style="color: red">清华大学</div>
            </div>
            <div class="item_item">
              <div class="item_num" style="background-color: yellow">1</div><div class="item_name" style="color: red">北京大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">厦门大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">复旦大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">广东医科大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">中山大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">广州大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">厦门大学</div>
            </div>
            <div class="item_item">
              <div class="item_num">1</div><div class="item_name">厦门大学</div>
            </div>
          </div>
        </div>
        <div class="city">
          <span>广州</span><a href="javascript:;">[切换城市]</a>
        </div>
      </div>
      <div class="header_nav">
        <div @click="index()" :class="active == 'index' ? 'active': ''">首页</div>
        <div @click="signIntent()" :class="active == 'signIntent' ? 'active': ''">填志愿</div>
        <div>查学校</div>
        <div>查专业</div>
        <div>院校分数线</div>
        <div>报考热度排名</div>
        <div>高考频道</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data(){
    return {
      searchItem: false,
      active: ''
    }
  },
  methods: {
    index(){
      this.$router.push('/index')
      this.active = 'index'
    },

    signIntent(){
      this.$router.push('/signIntent')
      this.active = 'signIntent'
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.header{
  margin-top: 60px;
  .title{
    display: flex;
    justify-content: space-between;
    height: 40px;
    .logo{
      height: 100%;
      width: 212px;
      background-image: url('./../assets/images/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .search{
      .search_input{
        display: flex;
        justify-content: row;
        width: 400px;
        height: 100%;
        border-radius: 20px;
        background-color: $inputColor;
        overflow: hidden;
        input{
          flex: 7;
          border: none;
          background-color: rgba(0,0,0,0);
          padding: 0 14px;
          color: #999;
          text-indent: 15px;
          font-weight: 400;
          font-size: 14px;
        }
        button{
          flex: 1;
          border: none;
          background-color: rgba(0,0,0,0);
          padding-right: 4px;
        }
      }
      .search_item{
        position: relative;
        width: 90%;
        margin: 0 auto;
        padding: 14px 0;
        z-index: 20;
        background-color: white;
        box-shadow:4px 4px 15px rgba(0,0,0,.3);
        .item_title{
          margin-bottom: 14px;
          color: #999999;
          font-size: 14px;
          padding: 0 30px;
        }
        .item_item{
          display: flex;
          margin-bottom: 10px;
          cursor: pointer;
          padding: 5px 0 5px 30px;
          &:hover{
            background-color: #cccccc;
          }
          .item_num{
            height: 20px;
            width: 20px;
            text-align: center;
            line-height: 20px;
            background-color: #666666;
            color: white;
            margin-right: 20px;
          }
          .item_name{
            line-height: 20px;
            color: #666666;
            font-size: 16px;
          }
        }
      }
    }
    .city{
      height: 34px;
      display: flex;
      span{
        background-color: $themeColor;
        color: #ffffff;
        padding: 0 14px;
        font-size: 18px;
        line-height: 34px;
      }
      a{
        font-size: 12px;
        font-weight: normal;
        margin-left: 10px;
        color: rgb(5, 146, 220);
        cursor: pointer;
        line-height: 34px;
      }
    }
  }
  .header_nav{
    display: flex;
    justify-content: left;
    align-items: center;
    div{
      font-size: 21px;
      cursor: pointer;
      padding: 0 32px;
      line-height: 60px;
      height: 60px;
    }
    .active{
      color: $themeColor;
      border-bottom: 2px solid $themeColor;
    }
  }
}
</style>
