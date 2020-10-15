<template>
  <div class="no_found">
    <div class="result_num">
      <span>共匹配</span><span class="strong">0</span><span>所学校，共</span><span class="strong">0</span><span>页</span>
    </div>
    <div class="img">
      <img src="./../assets/images/404.png" alt="404">
    </div>
  </div>
</template>

<script>
export default {
  name: "no-found"
}
</script>

<style lang="scss">
@import './../assets/scss/bass.scss';
@import './../assets/scss/config.scss';
.no_found{
  width: 886px;
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
  .img{
    width: 443px;
    margin: 0 auto;
  }
}
</style>