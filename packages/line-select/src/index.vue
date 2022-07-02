<!--
 * @Author: zemin zheng
 * @Date: 2022-03-21 11:23:21
 * @LastEditTime: 2022-07-02 15:55:40
 * @LastEditors: zemin zheng
 * @Description: 线段的选择状态组件
 * @FilePath: \componentlib\packages\line-select\src\index.vue
-->
<template>
  <div class="line-select">
    <div
      v-for="(v, k) in list"
      :key="k"
      class="line-select-item"
      :class="[k <= showIndex ? 'active' : '', v.canClick ? '' : 'noClick']"
      @click="itemClick(k, v)"
    >
      <div class="lsi-ioc" :class="k == 0 ? 'no-line' : ''"></div>
      <div class="lsi-name">{{ v.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zzm-line-select",
  props: {
    list: {
      default: () => [
        { name: '笑一个吧', canClick: true },
        { name: '功成名就', canClick: true },
        { name: '不是目的', canClick: false },
        { name: '快乐快乐', canClick: false }
      ]
    }
  },

  data() {
    return {
      showIndex: 0
    }
  },
  methods: {
    itemClick(k, v) {
      if (v.canClick) {
        this.showIndex = k
        this.$emit('selectChange', v.name)
      }
    }
  },
  mounted() {
    this.itemClick(0, this.list[0])
  }
}
</script>
<style lang="less" scoped>
.line-select {
  display: flex;
  height: 75px;
  position: relative;
  z-index: 1;
  .line-select-item {
    color: #666666;
    cursor: pointer;
    flex: 1;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    .lsi-ioc {
      height: 16px;
      width: 16px;
      background-color: #d2d9df;
      border: solid 4px #f0f4f8;
      border-radius: 50%;
      margin-bottom: 5px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        right: 10px;
        top: 6px;
        width: 100px;
        height: 2px;
        background: linear-gradient(
          90deg,
          #d2d9df 50%,
          rgba(104, 61, 61, 0) 50%
        );
        background-size: 10px 100%;
      }
      &.no-line::before {
        display: none;
      }
    }

    &.active {
      z-index: 1;
      color: #222222;
      .lsi-ioc {
        background-color: #1660d9;
        border-color: #b9d0f8;
        &::before {
          background: linear-gradient(
            90deg,
            #d2d9df 50%,
            rgba(104, 61, 61, 0) 50%
          );
          background-size: 10px 100%;
        }
      }
    }
    &.noClick {
      cursor: default;
    }
  }
}
</style>
