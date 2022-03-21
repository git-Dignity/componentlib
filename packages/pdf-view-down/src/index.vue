// 看到水情，还没有看完

<template>
  <!-- pdf -->
  <div
    class="wf-popup pdf-container"
    v-if="data.pdfId"
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
                data.pdfId
              : 'pdf/web/viewer.html?wordUrl=' +
                data.wordUrl +
                '&file=' +
                data.pdfId
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
    data: {
      type: Object,
      default: () => {
        return {
          // 报告test：文件是在public\pdf\web文件夹中（预览本地的）
          pdfId: encodeURIComponent("报告test.pdf"),
          wordUrl: encodeURIComponent("报告test.docx"),
          pdfTitle: "报告test",
        }
      },
    },
    docxDown: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
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
