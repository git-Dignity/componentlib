<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:55:42
 * @LastEditTime: 2022-03-17 17:24:57
 * @LastEditors: zemin zheng
 * @Description: 数字滑块动画组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\SlideNumUse.vue
-->
<template>
  <div class="SlideNumUse">
    <zzm-slider-num :value="value" :flag-ani="flagAni" :interval="interval" @start="start" />
  </div>
</template>

<script>
export default {
  name: "SlideNum",

  data() {
    return {
      value: 13.14,
      flagAni: false,
      interval: 3 * 1000,   // 3s后重新播放动画
    }
  },
  methods: {
      /**
       * @description: 开始执行动画的事件
       * @param {*} val
       * @return {*}
       */      
      start(val){
          console.log(val);
      }
  },
  mounted() {
    // 5.2s后重新启动滑动动画
    // setInterval(() => {
    //   this.flagAni = true
    // }, 5200)
    // setInterval(() => {
    //   this.flagAni = false
    // }, 3000)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
