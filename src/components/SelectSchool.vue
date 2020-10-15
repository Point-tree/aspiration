<template>
  <div class="select_school">
    <div class="result_num">
      <span>共匹配</span><span class="strong">{{baodi.length+wentuo.length+chongci.length}}</span><span>所学校，共</span><span class="strong">0</span><span>页</span>
    </div>
    <div class="result_table">
      <div class="table_title">
        <div class="school_name">学校名称</div>
        <div class="low_price">2017年最低分</div>
        <div class="admission_batch">录取批次</div>
        <div class="school_type">招生类型</div>
        <div class="admission_probability">录取概率</div>
        <div class="some_major">部分开设专业</div>
        <div class="school_compoment">高校对比</div>
      </div>
      <div class="table_msg" v-for="item1 of chongci" :key="item1.id" v-show="chongci">
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
        <div class="some_major">
          <ul>
            <li>体育教育</li>
            <li>运动人体科学</li>
            <li>运动训练</li>
          </ul>
        </div>
        <div class="school_compoment">
          <span>+对比</span>
        </div>
      </div>
      <div class="table_msg" v-for="item2 of wentuo" :key="item2.id" v-show="wentuo">
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
        <div class="some_major">
          <ul>
            <li>体育教育</li>
            <li>运动人体科学</li>
            <li>运动训练</li>
          </ul>
        </div>
        <div class="school_compoment">
          <span>+对比</span>
        </div>
      </div>
      <div class="table_msg" v-for="item3 of baodi" :key="item3.id" v-show="baodi">
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
        <div class="some_major">
          <ul>
            <li>体育教育</li>
            <li>运动人体科学</li>
            <li>运动训练</li>
          </ul>
        </div>
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
  data() {
    return{
      res: {},
      baodi: [],
      chongci: [],
      wentuo: []
    }
  },
  mounted () {
    this.getSchool();
  },
  methods: {
    getSchool(){
      this.axios.get('/Aspiration_war_exploded/school/predictSchoolAll',{
        params: {
          rank: 6000,
          sort: '理科'
        }
      }).then((res)=>{
        this.res = res.data
        this.baodi = res.data.baodi
        this.chongci = res.data.chongci
        this.wentuo = res.data.wentuo
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
      .some_major{
        padding-top: 20px;
        li{
          line-height: 21px;
          cursor: pointer;
          &:hover{
            color: $themeColor;
          }
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