<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:05:58
 * @LastEditTime: 2022-03-18 18:00:14
 * @LastEditors: zemin zheng
 * @Description: 导出exceil表格组件 -- 使用例子
 * @FilePath: \componentlib\examples\components\ExportDownUse.vue
-->

<template>
  <div class="ExportDownUse">
    <zzm-export-down :export-prop="exportProp" :name="name" @down="down" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      exportProp: {
        url: `appsvc/v1/export/exportRainHourFrequency/excel`,
        params: {
          startTime: 20210318140000,
          endTime: 20220318150000,
          // addvcd: '440100'
        },
        name: "暴雨重现期",
      },
      name: '导出'
    }
  },
  methods: {
    down(blob, contentDisposition){
      console.log(blob, contentDisposition);
    }
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.ExportDownUse {
  height: 500px;
}
</style>
