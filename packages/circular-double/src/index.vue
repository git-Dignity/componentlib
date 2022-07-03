<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:07:53
 * @LastEditTime: 2022-07-03 11:12:24
 * @LastEditors: zemin zheng
 * @Description: 圆形百分比组件
 * @FilePath: \componentlib\packages\circular-double\src\index.vue
-->

<template>
  <div>
    <div class="loading">
      <div class="container-left">
        <div class="left"></div>
        <div
          class="left-after"
          :style="{
            transform: transformL,
            backgroundColor: backgroundColor,
            display: divDisplayL
          }"
        ></div>
      </div>

      <div class="container-right">
        <div class="right"></div>
        <div
          class="right-after"
          :style="{
            transform: transformR,
            backgroundColor: backgroundColor,
            display: divDisplayR
          }"
        ></div>
      </div>

      <div class="progress">
        <div class="innerPark">
          {{ childDataNum }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zzm-circular-double',
  props: {
    childData: {
      type: Object
    }
  },
  data() {
    return {
      transformL: '',
      transformR: '',
      divDisplayL: '',
      divDisplayR: '',
      backgroundColor: '#4472c4',
      childDataNum: 0
    }
  },
  computed: {},
  watch: {
    'childData.num'() {
      this.setElementTransform()
      this.childDataNum = this.toPercent(this.childData.num)
    }
  },
  mounted() {
    this.setElementTransform()
    this.childDataNum = this.toPercent(this.childData && this.childData.num)
  },
  methods: {
    setElementTransform() {
      let val = this.childData && this.childData.num || 0;

      if (val <= 0) {
        this.transformR = `rotateZ(0.5turn)`
        this.transformL = `rotateZ(0.5turn)`
        this.divDisplayL = 'none'
        this.divDisplayR = 'none'
      } else if (val >= 1) {
        this.transformR = `rotateZ(0turn)`
        this.transformL = `rotateZ(0turn)`
        this.divDisplayL = 'block'
        this.divDisplayR = 'block'
      } else if (val > 0.5) {
        this.transformR = `rotateZ(0turn)`
        this.transformL = `rotateZ(${val - 1}turn)`
        this.divDisplayL = 'block'
        this.divDisplayR = 'block'
      } else {
        this.transformR = `rotateZ(${val - 0.5}turn)`
        this.transformL = `rotateZ(0.5turn)`
        this.divDisplayL = 'none'
        this.divDisplayR = 'block'
      }
    },
    toPercent(point) {
      if (point === 0) return '--%'

      var str = Number(point * 100).toFixed(0)
      console.log(point, str)

      str += '%'
      return str
    }
  }
}
</script>

<style lang="less" scoped>
@heigt: 100px;

.loading {
  //   width: @heigt;
  //   height: @heigt;
  position: relative;
}

.loading .progress {
  position: absolute;
  width: 83px;
  height: 83px;
  background-color: #f5faf9;
  border-radius: 50%;
  left: 9px;
  top: 9px;
  line-height: 83px;
  text-align: center;
}
.progress {
  //   width: 34px;
  //   height: 14px;
  font-family: MicrosoftYaHei-Bold;
  font-size: 16px;
  font-weight: bolder;
  font-stretch: normal;
  line-height: 83px;
  letter-spacing: 0px;
  color: #222222;
  .innerPark {
    position: absolute;
    width: 64px;
    height: 64px;
    left: 9px;
    top: 9px;
    line-height: 64px;
    text-align: center;
    border-radius: 50%;

    background-image: linear-gradient(0deg, #efefef 0%, #ffffff 100%);
    box-shadow: 0px 6px 7px 1px rgba(40, 46, 53, 0.45);
  }
}

.container-left {
  float: left;
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 100px;
  border-radius: @heigt 0 0 @heigt;
}
.container-right {
  float: left;
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 100px;
  border-radius: 0 @heigt @heigt 0;
}

.left,
.right {
  width: @heigt;
  height: @heigt;
  overflow: hidden;
  // position: relative;
  position: absolute;

  float: left;
  background-color: #e5e9e4;
}

.left {
  border-radius: @heigt 0 0 @heigt;
  right: 0;
  top: 0px;
}

.right {
  border-radius: 0 @heigt @heigt 0;
  left: 0;
  top: 0px;
}

.left-after,
.right-after {
  //   content: '';
  position: absolute;
  display: block;
  width: @heigt / 2;
  height: @heigt;
  background-color: white;
  border-radius: @heigt 0 0 @heigt;
  // background-color: #e5e9e4;
  background-color: red;
}

.right-after {
  //   content: '';
  position: absolute;
  display: block;
  border-radius: 0 @heigt @heigt 0;
}
.left-after {
  transform-origin: right center;
}

.right-after {
  transform-origin: left center;
  //   transform: rotateZ(0.5turn);
}
</style>
