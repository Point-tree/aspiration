<template>
  <div class="select_school">
    <div class="result_num">
      <span>共匹配</span><span class="strong">{{schoolList.length}}</span><span>所学校，共</span><span class="strong">0</span><span>页</span>
    </div>
    <div class="result_table">
      <div class="table_title">
        <div class="school_name">学校名称</div>
        <div class="low_price">招生地址</div>
        <div class="admission_batch">考生类别</div>
        <div class="school_type">录取批次</div>
        <div class="admission_probability">招生类型</div>
        <div class="low_rank">2019年最低排位</div>
        <div class="some_major">2019年最低分数</div>
        <div class="school_compoment">高校对比</div>
      </div>
      <div class="table_msg" v-for="item of schoolList" :key="item.id" v-show="schoolList">
        <div class="school_name">
          <img v-lazy="item.logo" :alt="item.name">
          <span class="name">{{item.name}}</span>
        </div>
        <div class="low_price">{{item.site}}</div>
        <div class="admission_batch">{{item.sort}}</div>
        <div class="school_type">本科提前批（非军检）</div>
        <div class="admission_probability">普通类</div>
        <div class="low_rank">{{item.lowestrank}}</div>
        <div class="some_major">{{item.lowestmark}}</div>
        <div class="school_compoment">
          <span>+对比</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'select-school',
  props: {
    subTitle: String,
    site: String,
  },
  data() {
    return{
      schoolList: []
    }
  },
  mounted () {
    this.getSchool();
  },
  watch: {
    subTitle(){
      this.getSchool();
    },
    site(){
      this.getSchool();
    }
  },
  methods: {
    getSchool(){
      this.axios.get('/school/predictSchool',{
         params: {
          pageNum: 1,// 页码
          schoolName: this.schoolName,
          sort: this.subTitle,
          site: this.site
        }
      }).then((res)=>{
        this.schoolList = res.data
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.select_school{
  width: 100%;
  margin-bottom: 50px;
  .result_num{
    span{
      line-height: 21px;
      font-size: 14px;
      font-weight: lighter;
    }
    .strong{
      margin: 0 4px;
      color: $themeColor;
    }
  }
  .result_table{
    margin-top: 6px;
    .table_title{
      background-color: rgb(244, 244, 244);
      line-height: 52px;
      div{
        border: 1px solid #e9e9e9;
        box-sizing: border-box;
      }
    }
    .table_title, .table_msg{
      display: flex;
      flex-direction: row;
      text-align: center;
      .school_name{
        width: 200px;
      }
      .low_price{
        width: 80px;
      }
      .admission_batch{
        width: 80px;
      }
      .school_type{
        width: 180px;
      }
      .admission_probability{
        width: 80px;
      }
      .low_rank{
        width: 120px;
      }
      .some_major{
        width: 120px;
      }
      .school_compoment{
        flex: 1;
      }
    }
    .table_msg{
      height: 110px;
      line-height: 100px;
      div{
        border: 1px solid #e9e9e9;
        box-sizing: border-box;
      }
      .school_name{
        display: flex;
        flex-direction: row;
        img{
          width: 24px;
          height: 24px;
          margin-right: 6px;
          margin-left: 16px;
        }
        .name{
          font-size: 16px;
          line-height: 24px;
          margin-top: 20px;
        }
      }
      .school_compoment{
        color: $themeColor;
        font-weight: bolder;
        font-size: 16px;
      }
    }
  }
}
</style>