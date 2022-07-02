<!--
 * @Author: zemin zheng
 * @Date: 2022-03-21 11:25:45
 * @LastEditTime: 2022-07-02 15:55:59
 * @LastEditors: zemin zheng
 * @Description: 线段的选择状态组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\LineSelectUse.vue.vue
-->
<template>
  <div class="LineSelectUse">
    <zzm-line-select :list="list" @selectChange="lineSelectChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "AAAAA", canClick: true },
        { name: "BBBBB", canClick: true },
        { name: "CCCCC", canClick: false },
        { name: "DDDDD", canClick: false },
      ],
    }
  },
  methods: {
    lineSelectChange(name) {
      console.log(name)
    },
  },

  mounted() {},
}
</script>

<style scoped>
.LineSelectUse {
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
