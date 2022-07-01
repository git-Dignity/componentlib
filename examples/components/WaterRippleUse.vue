<!--
 * @Author: zemin zheng
 * @Date: 2022-07-01 17:52:03
 * @LastEditTime: 2022-07-01 18:10:59
 * @LastEditors: zemin zheng
 * @Description: 水波纹比例图组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\WaterRippleUse.vue
-->
<template>
  <div class="WaterRipple-content">
    <zzm-water-ripple class="item" :num="0"> </zzm-water-ripple>
    <zzm-water-ripple class="item" :num="1"> </zzm-water-ripple>
    <zzm-water-ripple class="item" :num="100"> </zzm-water-ripple>
  </div>
</template>

<script>
export default {
  name: "WaterRipple",

  data() {
    return {
      countProp: 8,
    }
  },
  methods: {
    draw(e) {
      console.log(e)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.WaterRipple-content{
 display: flex;
    align-items: center;
    justify-content: center;
  height: 500px;
  width: 100%;
}
.item{
  margin: 50px;
}
</style>
