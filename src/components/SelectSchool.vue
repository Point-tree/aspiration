<template>
  <div class="select_school">
    <div class="result_num">
      <span>共匹配</span><span class="strong">{{safe.length+reliable.length+sprint.length}}</span><span>所学校，共</span><span class="strong">0</span><span>页</span>
    </div>
    <div class="result_table">
      <div class="table_title">
        <div class="school_name">学校名称</div>
        <div class="low_price">2019年最低分</div>
        <div class="admission_batch">录取批次</div>
        <div class="school_type">招生类型</div>
        <div class="admission_probability">录取概率</div>
        <div class="some_major">2019年最低排位</div>
        <div class="school_compoment">高校对比</div>
      </div>
      <div class="table_msg" v-for="item1 of sprint" :key="item1.id" v-show="sprint">
        <div class="school_name">
          <img src="https://static-data.eol.cn/upload/logo/303.jpg" alt="广州体育学院">
          <span class="school">
            <span class="name">{{item1.name}}</span>
            <span class="type">体育类</span>
          </span>
        </div>
        <div class="low_price"><div class="type">{{item1.sort}}</div><div class="score">{{item1.lowestmark}}</div></div>
        <div class="admission_batch">本科二批</div>
        <div class="school_type">普通类</div>
        <div class="admission_probability">冲刺</div>
        <div class="some_major">{{item1.lowestrank}}</div>
        <div class="school_compoment">
          <span>+对比</span>
        </div>
      </div>
      <div class="table_msg" v-for="item2 of reliable" :key="item2.id" v-show="reliable">
        <div class="school_name">
          <img src="https://static-data.eol.cn/upload/logo/303.jpg" alt="广州体育学院">
          <span class="school">
            <span class="name">{{item2.name}}</span>
            <span class="type">体育类</span>
          </span>
        </div>
        <div class="low_price"><div class="type">{{item2.sort}}</div><div class="score">{{item2.lowestmark}}</div></div>
        <div class="admission_batch">本科二批</div>
        <div class="school_type">普通类</div>
        <div class="admission_probability">稳妥</div>
        <div class="some_major">{{item2.lowestrank}}</div>
        <div class="school_compoment">
          <span>+对比</span>
        </div>
      </div>
      <div class="table_msg" v-for="item3 of safe" :key="item3.id" v-show="safe">
        <div class="school_name">
          <img src="https://static-data.eol.cn/upload/logo/303.jpg" alt="广州体育学院">
          <span class="school">
            <span class="name">{{item3.name}}</span>
            <span class="type">体育类</span>
          </span>
        </div>
        <div class="low_price"><div class="type">{{item3.sort}}</div><div class="score">{{item3.lowestmark}}</div></div>
        <div class="admission_batch">本科二批</div>
        <div class="school_type">普通类</div>
        <div class="admission_probability">保底</div>
        <div class="some_major">{{item3.lowestrank}}</div>
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
    rank: Number
  },
  data() {
    return{
      res: {},
      safe: [],
      sprint: [],
      reliable: []
    }
  },
  mounted () {
    // this.getSchool();
  },
  watch: {
    subTitle(){
      this.getSchool();
    },
    site(){
      this.getSchool();
    },
    rank(){
      this.getSchool();
    }
  },
  methods: {
    // getSchool(){
    //   this.axios.get('/school/predictSchool',{
    //      params: {
    //       rank: this.rank || 6000,
    //       sort: '理科',
    //       site: this.site
    //     }
    //   }).then((res)=>{
    //     this.res = res.data
    //     if(this.subTitle == 'safe'){
    //       this.sprint = []
    //       this.reliable = []
    //       this.safe = res.data.safe
    //       this.$emit('nofound','1')
    //     }else if(this.subTitle == 'sprint'){
    //       this.safe = []
    //       this.reliable = []
    //       this.sprint = res.data.sprint
    //       this.$emit('nofound','1')
    //     }else if(this.subTitle == 'reliable'){
    //       this.sprint = []
    //       this.safe = []
    //       this.reliable = res.data.reliable
    //       this.$emit('nofound','1')
    //     }else{
    //       this.safe = res.data.safe
    //       this.sprint = res.data.sprint
    //       this.reliable = res.data.reliable
    //       this.$emit('nofound','1')
    //     }
    //     if(this.safe==[]&&this.sprint==[]&&this.reliable==[]){
    //       this.$emit('nofound','')
    //     }
    //   }) 
    // }
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
        width: 300px;
      }
      .low_price{
        width: 97px;
      }
      .admission_batch{
        width: 64px;
      }
      .school_type{
        width: 64px;
      }
      .admission_probability{
        width: 64px;
      }
      .some_major{
        width: 197px;
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
          width: 100px;
          height: 100px;
          margin-right: 6px;
          margin-left: 16px;
        }
        .school{
          display: flex;
          flex-direction: column;
          text-align: left;
          .name{
            font-size: 16px;
            line-height: 24px;
            margin-top: 20px;
          }
          .type{
            font-size: 14px;
            line-height: 24px;
            margin-top: 6px;
          }
        }
      }
      .low_price{
        display: flex;
        flex-direction: row;
        .type{
          flex: 1;
        }
        .score{
          flex: 1;
        }
      }
      .admission_probability{
        color: red;
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