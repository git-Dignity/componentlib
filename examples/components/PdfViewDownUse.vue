<!--
 * @Author: zemin zheng
 * @Date: 2022-03-21 11:25:45
 * @LastEditTime: 2022-03-22 10:49:00
 * @LastEditors: zemin zheng
 * @Description: PDF可查看下载PDF/DOC组件 -- 使用例子
 * 
 * @Description: 这里提供两个例子
 * @Description: 一个传参的data，pdf、doc链接都是后端返回走nginx，因为有传docxDown，所以下载是doc的
 * @Description: 什么都没有传；因为没传有默认值，预览报告test.pdf，又因为没传docxDown，所以下载也是pdf文件的
 * @FilePath: \componentlib\examples\components\PdfViewDownUse.vue
-->
<template>
  <div class="PdfViewDownUse">
    <zzm-pdf-view-down :data="data" :docx-down.sync="docxDown" @close="close" />
    <zzm-pdf-view-down @close="close" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        pdfUrl: "",
        wordUrl: "",
        pdfTitle: "",
      },
      docxDown: true,
    }
  },
  methods: {
    getData() {
      //   rainwater  这个是nginx转发过的
      this.data.pdfUrl = encodeURIComponent(
        "/rainwater/雨水情小时报-2022032111.pdf"
      )
      this.data.wordUrl = encodeURIComponent(
        "/rainwater/雨水情小时报-2022032111.docx"
      )
      this.data.pdfTitle = "/rainwater/雨水情小时报-2022032111.pdf".split(
        "rainwater/"
      )[1]
      this.docxDown = true
    },
    close(data) {
      console.log(data)
      // this.data.pdfUrl = ""
      // this.data.wordUrl = ""
      // this.docxDown = false
    },
  },

  mounted() {
    this.getData()
  },
}
</script>

<style scoped>
.PdfViewDownUse {
  width: 100%;
  height: 800px;
  display: flex;
}
</style>
