<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-07-02 15:33:36
 * @LastEditors: zemin zheng
 * @Description: 全部组件案例入口
 * @FilePath: \componentlib\examples\components\index.vue
-->
<template>
  <div>
    <div class="content">
      <zzm-btn class="button" type="primary" size="medium" @click="btnComponent('button')"
        >按钮组件案例</zzm-btn
      >
      <zzm-btn
        class="button"
        type="success"
        size="medium"
        @click="btnComponent('turn-table')"
        >大转盘组件案例</zzm-btn
      >
      <zzm-btn
        class="button"
        type="info"
        size="medium"
        @click="btnComponent('slider-num')"
        >数字滑块动画组件案例</zzm-btn
      >
      <zzm-btn
        class="button"
        type="warning"
        size="medium"
        @click="btnComponent('export-down')"
        >导出下载组件案例</zzm-btn
      >
      <zzm-btn
        class="button"
        type="danger"
        size="medium"
        @click="btnComponent('pdf-view-down')"
        >PDF可查看下载PDF/DOC组件案例</zzm-btn
      >
    </div>
    <div class="content">
      <zzm-btn
        class="button"
        type="primary"
        size="medium"
        @click="btnComponent('water-ripple')"
        >水波纹比例图</zzm-btn
      >
      <zzm-btn
        class="button"
        type="success"
        size="medium"
        @click="btnComponent('line-select')"
        >线段的选择状态</zzm-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",

  data() {
    return {}
  },
  methods: {
    btnComponent(name) {
      this.$router.push("/" + name)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
}
.button {
  margin-right: 15px;
}
</style>
