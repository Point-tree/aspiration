<template>
  <div class="footer">
      <div class="footer_top container">
        <div class="footer_explain">
          <div class="title">系统使用说明</div>
          <div>1、本查询系统的信息仅供参考，具体数据请以学校官网或考试院公布为准。</div>
          <div>2、如对本系统有任何疑问请联系我们，联系方式:wuhh@eol.cn。</div>
        </div>
        <div class="footer_service">
          <div class="footer_imglist">
            <div class="footer_img" style="backgroundColor: #5ac64f" @mouseenter="one=true" @mouseleave="one=false">
              <div class="item"></div>
              <div class="code" v-show="one">
                <div class="QR_code">二维码</div>
                <p>扫一扫查看掌上高考公众号</p>
              </div>
            </div>
            <div class="footer_img" style="backgroundColor: #5da3e1" @mouseenter="two=true" @mouseleave="two=false">
              <div class="item"></div>
              <div class="code" v-show="two">
                <div class="QR_code">二维码</div>
                <p>扫一扫查看掌上高考</p>
              </div>
            </div>
            <div class="footer_img" style="backgroundColor: #ff7777" @mouseenter="three=true" @mouseleave="three=false">
              <div class="item"></div>
              <div class="code" v-show="three">
                <div class="QR_code">二维码</div>
                <p>扫一扫中国下线教育</p>
              </div>
            </div>
            <div class="footer_img" style="backgroundColor: #7a9ad3" @mouseenter="four=true" @mouseleave="four=false">
              <div class="item"></div>
              <div class="code" v-show="four">
                <div class="QR_code">二维码</div>
                <p>扫一扫下载掌上高考</p>
              </div>
            </div>
          </div>
          <div class="search">扫描二维码，高校信息一秒掌握</div>
        </div>
      </div>
      <div class="copyright">
        <div>
          <a href="javascript:;">京ICP证140769号</a><span>|</span>
          <a href="javascript:;">京ICP备12045350号</a><span>|</span>
          <a href="javascript:;">京网文[2014]2016-306号</a><span>|</span>
          <a href="javascript:;">京公网安备 11010802020236号</a>
        </div>
        <div class="email">Mail to:<a href="javascript:;">webmaster@eol.cn</a></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
  data() {
    return{
      one: false,
      two: false,
      three: false,
      four: false
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
.footer{
  width: 100%;
  background-color: #3C3C3C;
  .footer_top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    height: 210px;
    .footer_explain{
      .title{
        font-weight: bold;
        font-size: 16px;
        line-height: 60px;
        margin-bottom: 10px;
      }
      div{
        color: #ABABAB;
        margin-bottom: 35px;
      }
    }
    .footer_service{
      margin-top: 10px;
      position: relative;
      .footer_imglist{
        .footer_img{
          width: 70px;
          height: 70px;
          border-radius: 100%;
          position: relative;
          float: left;
          margin-left: 10px;
          &::after{
            content: '';
            position: absolute;
            height: 33px;
            border-left: 1px dashed #ababab;
            top: 70px;
            left: 35px;
          }
          &:first-child{
            margin-left: 0;
          }
          .code{
            position: absolute;
            width: 130px;
            height: 140px;
            left: -40px;
            top: -150px;
            border: 1px solid #999;
            border-radius: 4px;
            text-align: center;
            background: #fff;
            z-index: 9999;
            padding: 5px 0;
            color: #333;
            &::after{
              content: '';
              position: absolute;
              top: 140px;
              left: 50px;
              width: 0;
              height: 0;
              border: 20px solid transparent;
              border-top-color: #fff ;
            }
            .QR_code{
              height: 100px;
              width: 100px;
              background-color: skyblue;
              margin: 0 auto;
              text-align: center;
              line-height: 100px;
            }
          }
        }
      }
      .search{
        position: absolute;
        top: 30px;
        width: 100%;
        height: 50px;
        background-color: #e0e0e0;
        margin-top: 77px;
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
        color: #000000;
        font-size: 20px;
      }
    }
  }
  .copyright{
    border-top: 1px solid rgba(240,246,253,0.2);
    padding: 20px 0 15px 0;
    text-align: center;
    color: #ababab;
    a{
      color: #ababab;
      margin: 0 20px;
    }
    .email{
      margin-top: 10px;
    }
  }
}
</style>
