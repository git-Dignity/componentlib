<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:56:03
 * @LastEditTime: 2022-03-17 17:20:35
 * @LastEditors: zemin zheng
 * @Description: 数字滑块动画组件
 * 
 * @Description: 所谓的滑块是指？
 * @Description: 0-9之间的数字一直变化，利用css的translateY、transition-duration燃起动画效果
 * 
 * @Description: 是如何循环执行数字滑块动画的？
 * @Description: 通过interval时间参数，指的是多少毫秒后，重新执行滑块动画
 * @Description: 初始化的时候，在scrollNum方法中嵌入setTimeout，而setTimeout内部又去执行scrollNum方法（递归了）
 * @Description: 这样下来，每interval毫秒后，动画又继续执行
 * @FilePath: \componentlib\packages\slider-num\src\index.vue
-->
<template>
  <div class="slide-num-content">
    <div
      class="scroll-item"
      v-for="(i, idx) in numList"
      :key="idx"
      :class="{ active: isActive }"
    >
      <div :class="i | classesFilter">
        <span class="scroll-num">.</span>
        <span class="scroll-num">-</span>
        <span class="scroll-num" v-for="(j, jIdx) in 10" :key="jIdx">{{
          jIdx
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zzm-slider-num",
  props: {
    // 目标值
    value: {
      type: [String, Number],
      default: "0.00",
    },
    // 控制是否重新启动滑动动画
    flagAni: {
      type: Boolean,
      default: false,
    },
    // 定时器延迟触发的时间
    interval: {
      type: Number,
      default: 30 * 1000,
    },
  },
  filters: {
    classesFilter(v) {
      const newVal = v === "." ? "dot" : v === "-" ? "minus" : v
      return `scroll-num-wrap num-${newVal}`
    },
  },
  computed: {
    numList() {
      return (this.changeValue || this.value)
        .toString()
        .trim()
        .split("")
    },
  },
  data() {
    return {
      // 定时器
      timer: null,

      // 改变的值，默认是0.00
      changeValue: null,

      // 是否有动画,class名字（transition-duration）
      isActive: true,
    }
  },
  watch: {
    /**
     * @description: 控制是否重新启动滑动动画
     * @param {*}
     * @return {*}
     */

    flagAni: {
      handler() {
        clearTimeout(this.timer)
        this.scrollNum()
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * @description: 数字滑块定时器
     * @param {*}
     * @return {*}
     */

    scrollNum() {
      this.isActive = false
      this.changeValue = "0.00"
      setTimeout(() => {
        this.isActive = true
        this.changeValue = null
      }, 100)
      this.timer = setTimeout(() => {
        this.scrollNum()
        this.$emit("start", true) // 开始执行动画的事件
      }, this.interval)
    },
    /**
     * @description: 启动定时器
     * @param {*}
     * @return {*}
     */

    setTimer() {
      this.timer = setTimeout(this.scrollNum, this.interval)
    },
  },
  mounted() {
    this.setTimer()
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  },
}
</script>

<style lang="less" scoped>
.slide-num-content {
  display: inline-block;
  vertical-align: middle;
  transition: 0.3s all;
  padding-bottom: 8px;
  .scroll-item {
    overflow: hidden;
    height: 40px;
    float: left;
    .scroll-num-wrap {
      transform: translateY(2.5rem);

      &.num-dot {
        transform: translateY(0);
      }
      &.num-minus {
        transform: translateY(-2.5rem);
      }
      &.num-0 {
        transform: translateY(-5rem);
      }
      &.num-1 {
        transform: translateY(-7.5rem);
      }
      &.num-2 {
        transform: translateY(-10rem);
      }
      &.num-3 {
        transform: translateY(-12.5rem);
      }
      &.num-4 {
        transform: translateY(-15rem);
      }
      &.num-5 {
        transform: translateY(-17.5rem);
      }
      &.num-6 {
        transform: translateY(-20rem);
      }
      &.num-7 {
        transform: translateY(-22.5rem);
      }
      &.num-8 {
        transform: translateY(-25rem);
      }
      &.num-9 {
        transform: translateY(-27.5rem);
      }
      .scroll-num {
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
    &.active .scroll-num-wrap {
      transition-duration: 1s;
    }
  }
}
</style>
