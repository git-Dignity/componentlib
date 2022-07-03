<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:05:58
 * @LastEditTime: 2022-07-03 11:12:31
 * @LastEditors: zemin zheng
 * @Description: 圆形百分比组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\CircularDoubleUse.vue
-->

<template>
  <div class="CircularDoubleUse">
    <zzm-circular-double :childData="config1" />
    <zzm-circular-double :childData="config2" />
    <zzm-circular-double :childData="config3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
         config1: {
        color: "#4674C6",
        num: 0,
      },
       config2: {
        color: "#4674C6",
        num: 0.68,
      },
      config3: {
        color: "#4674C6",
        num: 1,
      },
    }
  },
  methods: {
    down(blob, contentDisposition) {
      console.log(blob, contentDisposition)
    },
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.CircularDoubleUse {
  height: 500px;
  display: flex;
}
</style>
