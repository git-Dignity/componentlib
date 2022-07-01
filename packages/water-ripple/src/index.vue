<!--
 * @Author: zemin zheng
 * @Date: 2022-03-21 11:23:21
 * @LastEditTime: 2022-07-01 18:10:51
 * @LastEditors: zemin zheng
 * @Description: 水波纹比例图组件
 * @FilePath: \componentlib\packages\water-ripple\src\index.vue
-->

<template>
  <div>
    <div class="container" v-show="num !== 0">
      <div class="wave"></div>
      <div class="wave-mask"></div>
      <span class="wave-num"> {{ num }}</span>
    </div>
    <div class="container" v-show="num === 0">
      <div class="wave0">0</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zzm-water-ripple",
  props: {
    // 是否下载的是word
    num: {
      type: Number,
      default: 0,
    },
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.container {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  // padding: 5px;
  overflow: hidden;
  margin-top: 60px;
  box-shadow: 0px 0px 10px #a2c2f8;
  .wave0 {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  .wave {
    position: relative;
    width: 80px;
    height: 80px;
    background-image: linear-gradient(-180deg, #3b7bdb 13%, #4d6fdf 91%);
    border-radius: 50%;
  }
  .wave-mask {
    position: absolute;
    width: 160px;
    height: 160px;
    top: 0;
    left: 50%;
    border-radius: 40%;
    transform: translate(-50%, -70%) rotate(0);
    animation: toRotate 10s linear -5s infinite;
    z-index: 20;
    background-color: #ffffff;
  }
  .wave-num {
    color: black;
    z-index: 21;
    font-weight: bold;
    position: absolute;
    top: 28%;
    // left: 20%;
    // top: 60%;
    left: 35%;
  }
  @keyframes toRotate {
    50% {
      transform: translate(-50%, -70%) rotate(180deg);
    }
    100% {
      transform: translate(-50%, -70%) rotate(360deg);
    }
  }
}
</style>
