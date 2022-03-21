


// 导入组件，组件必须声明 name
import pdfViewDown from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
pdfViewDown.install = function (Vue) {
  Vue.component(pdfViewDown.name, pdfViewDown)
}

// 默认导出组件
export default pdfViewDown
