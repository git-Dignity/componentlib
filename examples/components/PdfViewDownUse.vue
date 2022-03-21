<template>
  <div class="PdfViewDownUse">
    <zzm-pdf-view-down :data="data" :docxDown="docxDown" @close="close" />
    <zzm-pdf-view-down @close="close" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        pdfId: "",
        wordUrl: "",
        pdfTitle: "",
      },

      docxDown: true,
    }
  },
  methods: {
    getData() {
      //   rainwater  这个是nginx转发过的
      this.data.pdfId = encodeURIComponent(
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
      this.data.pdfId = ""
      this.data.wordUrl = ""
      this.docxDown = false
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
