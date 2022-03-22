<!--
 * @Author: zemin zheng
 * @Date: 2022-03-21 11:23:21
 * @LastEditTime: 2022-03-22 10:50:43
 * @LastEditors: zemin zheng
 * @Description: PDF可查看下载PDF/DOC组件
 * 
 * @Description: 可以预览是PDF，但下载我想是word，支持吗？
 * @Description: sure，只要将docxDown值设为true，传入wordUrl链接即可；若为false，下载的就是pdf

 * @Description: 追问：好奇你是怎么实现的？我记得PDF插件只能下载PDF
 * @Description：是的，原本只支持下载PDF；但我阅读源码，多写了一个new file：viewerDocxDown.js，就可以支持下载word
 * @FilePath: \componentlib\packages\pdf-view-down\src\index.vue
-->

<template>
  <div
    class="wf-popup pdf-container"
    v-if="data.pdfUrl"
    ref="pdf"
    v-directives="{ trigger: '.c-psf-top' }"
  >
    <span class="wf-close" @click="close">x</span>
    <div class="wf-head">
      <div class="wf-title">{{ data.pdfTitle }}</div>
    </div>
    <div class="wf-content">
      <div class="canvas">
        <iframe
          :src="
            docxDown
              ? 'pdf/web/viewerDocxDown.html?wordUrl=' +
                data.wordUrl +
                '&file=' +
                data.pdfUrl
              : 'pdf/web/viewer.html?wordUrl=' +
                data.wordUrl +
                '&file=' +
                data.pdfUrl
          "
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zzm-pdf-view-down",
  props: {
    // 所需数据
    data: {
      type: Object,
      default: () => {
        return {
          // 报告test：文件是在public\pdf\web文件夹中（预览本地的）
          pdfUrl: encodeURIComponent("报告test.pdf"),
          wordUrl: encodeURIComponent("报告test.docx"), // 好像只支持docx，上次弄个doc不可以
          pdfTitle: "报告test",
        }
      },
    },
    // 是否下载的是word
    docxDown: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * @description: 关闭事件
     * @description: 不可以直接修改docxDown的值，通过父组件设置sync，子组件使用update改变其值
     * @param {*}
     * @return {*}
     */
    close() {
      this.data.pdfUrl = ""
      this.data.wordUrl = ""
      // this.docxDown = false
      this.$emit("update:docxDown", false)
      this.$emit("close", true)
    },
  },
}
</script>
<style lang="less" scoped>
.wf-popup {
  position: relative;
  width: 100%;
  height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff; // #f7f8fa
  z-index: 2;
  font-size: 16px;

  .wf-close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }

  .wf-head {
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #cfd7e5;
    .wf-title {
      font-size: 18px;
      font-weight: bold;
      margin-right: auto;
      margin-left: 20px;
    }
  }
  .wf-content {
    flex: 1;
    margin: 0 20px 20px 20px;
    overflow: hidden;
    margin: 0;

    .canvas {
      width: 100%;
      height: 100%;
      // height: calc(100% - 36px);
    }
  }
}
</style>
