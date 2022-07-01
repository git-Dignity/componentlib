
# PDF可查看下载PDF/DOC组件

## zzm-pdf-view-down 组件

一个基于PDF.js viewer可查看下载PDF/DOC的预览下载文件


可以预览是PDF，但下载我想是word，支持吗？

* sure，只要将docxDown值设为true，传入wordUrl链接即可；若为false，下载的就是pdf


追问：好奇你是怎么实现的？我记得PDF插件只能下载PDF

* 是的，原本只支持下载PDF；但我阅读源码，多写了一个new file：viewerDocxDown.js，就可以支持下载word



### 使用方法

```javascript
<zzm-pdf-view-down :data="data" :docxDown.sync="docxDown" @close="close" />
<zzm-pdf-view-down @close="close" />

data(){
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
    },
},
mounted() {
  this.getData()
},
```

### 哪里引用了 zzm-pdf-view-down 组件？

examples/components/PdfViewDownUse.vue

### 效果

![3.zzm-pdf-view-down](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220322102923.png)

请访问：http://localhost:8080/pdf-view-down

### PdfViewDown Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| data      | 所需数据                                  | Object  | ——     | ——     |
| docx-down      | 是否下载的是word                                  | Boolean  | ——     | false     |


### PdfViewDown Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- | --- | --- |
| close     | 关闭事件               | true      | ——  | ——  |


### PdfViewDown-data Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| pdfUrl      | PDF链接地址                                  | String  | ——     | encodeURIComponent("报告test.pdf")    |
| wordUrl      | WORD链接地址                                       | String  | ——     | encodeURIComponent("报告test.docx")     |
| pdfTitle      | PDF标题                                       | String  | ——     | 报告test     |


### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/3/22  |            | zzm-pdf-view-down  | data:{ <br />pdfUrl: encodeURIComponent("报告test.pdf"), <br />wordUrl: encodeURIComponent("报告test.docx"), <br />pdfTitle: "报告test",<br />},<br />docxDown: true,<br />  |
