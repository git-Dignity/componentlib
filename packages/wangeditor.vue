<template>
  <div>
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"/>
    <Editor
        style="height: 300px"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onChange="onChange"
        @onCreated="onCreated"/>
    <el-button @click="getHtml">获取HTML</el-button>
  </div>
</template>
<script>
/**
 * @富文本编辑器
 * @文档地址： https://www.wangeditor.com/v5/installation.html
 * @文档地址VUE2： https://www.wangeditor.com/v5/for-frame.html#%E9%85%8D%E7%BD%AE
 *
 * 安装命令
 * npm install @wangeditor/editor --save
 * npm install @wangeditor/editor-for-vue --save
 */

import '@wangeditor/editor/dist/css/style.css'
// import { DomEditor } from "@wangeditor/editor"
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'wangeditor',
  props: {
    uploadURL: String,  // 上传的url
    infoShowImage: Function,  // 图片回显函数
    infoShowVideo: Function,  // 视频回显函数
  },
  components: {
    Editor,
    Toolbar
  },
  data () {
    return {
      editor: null,
      mode: 'default', // default or simple
      html: '',
      fHtml: '',
      fDisable: false,
      // 配置类文档链接：https://www.wangeditor.com/v5/toolbar-config.html
      // 工具栏配置
      toolbarConfig: {
        // 不显示哪些工具按钮
        excludeKeys: ['fullScreen', 'emotion', 'codeBlock', 'todo', 'code']
      },
      // 编辑器配置
      editorConfig: {
        placeholder: '请输入内容...',
        readOnly: false, // 是否只读
        autoFocus: false, // 默认是否 focus
        MENU_CONF: {
          uploadImage: {
            fieldName: 'file',
            server: this.uploadURL,
            // 单个文件的最大体积限制，默认为 2M
            maxFileSize: 10 * 1024 * 1024, // 1M
            // 最多可上传几个文件，默认为 100
            maxNumberOfFiles: 50,
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],
            // 自定义增加 http  header
            headers: {
                'TOKEN': this.$store.getters.token,
            }, 
            // 跨域是否传递 cookie ，默认为 false
            // withCredentials: true,
            // 超时时间，默认为 10 秒
            timeout: 30 * 1000, // 30 秒
             customUpload: (file, insertFn) =>{  // TS 语法
                // file 即选中的文件
                // 自己实现上传，并得到图片 url alt href
                // 最后插入图片
                // insertFn(url, alt, href)
                this.infoShowImage(file).then((ttt)=>{
                  if(ttt){
                    let {url, alt, href} = ttt
                    insertFn(url, alt, href)
                  }
                })
            },

            customInsert: (res, insertFn) => {  // TS 语法
                this.infoShowImage(res).then((ttt)=>{
                  if(ttt){
                    let {url, alt, href} = ttt
                    insertFn(url, alt, href)
                  }
                })
            },

          },

          uploadVideo: {
              fieldName: 'file',
              server: this.uploadURL,
              // 单个文件的最大体积限制，默认为 10M
              maxFileSize: 5 * 1024 * 1024, // 5M
              // 最多可上传几个文件，默认为 5
              maxNumberOfFiles: 3,
              // 选择文件时的类型限制，默认为 ['video/*'] 。如不想限制，则设置为 []
              allowedFileTypes: ['video/*'],
              // 自定义增加 http  header
              headers: {
                'TOKEN': this.$store.getters.token,
            }, 
              // 跨域是否传递 cookie ，默认为 false
              // withCredentials: true,
              // 超时时间，默认为 30 秒
              timeout: 15 * 1000, // 15 秒
              customInsert: (res, insertFn) => {  // TS 语法
                this.infoShowVideo(res).then((ttt)=>{
                  if(ttt){
                    let {url, alt, href} = ttt
                    insertFn(url, alt, href)
                  }
                })
            }
            }
        }
      },
    }
  },
  methods: {
    // 编辑器创建完毕时的回调函数
    onCreated(editor) {
      this.editor = Object.seal(editor)
      if(this.fHtml){
        this.setHtml(this.fHtml)
        this.fHtml = ''
      }
      this.disable(this.fDisable)
    },

    // 编辑器内容、选区变化时的回调函数
    onChange(editor) {
      this.$emit('richChange', editor)
      const toolbar = DomEditor.getToolbar(editor)
      const curToolbarConfig = toolbar.getConfig()
      console.log(curToolbarConfig.toolbarKeys) // 当前菜单排序和分组
    },

    // 清空编辑器内容
    onClear () {
      this.editor.clear()
    },

    // 获取编辑器所有工具
    getHtml () {
      return this.editor.getHtml()
    },

    // 设置html
    setHtml (htmlStr) {
      if(this.editor){
        this.editor.setHtml(htmlStr)
        // this.editor.focus() // 会报 Cannot resolve a Slate node from DOM node: [object HTMLSpanElement] 的错
      }else{
        this.fHtml = htmlStr
      }
    },

    disable(disable){
      if(this.editor){
        if(disable){
          this.editor.disable()
        }else{
          this.editor.enable()
          setTimeout(()=>{
            this.editor.focus(true)
          },500)
        }
      }else{
        this.fDisable = disable
      }
    },

    // 判断当前编辑器内容是否为空
    onIsEmpty () {
      this.editor.isEmpty()
    },

    // 强制更新视图
    onUpdateView () {
      this.editor.updateView()
    },

    // 返回当前 editor，需要执行什么事件自行处理
    onReturnEditor () {
      return this.editor
    },
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
}
</script>
