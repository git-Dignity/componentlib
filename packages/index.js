/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-07-03 11:03:01
 * @LastEditors: zemin zheng
 * @Description: 导入组件
 * @FilePath: \componentlib\packages\index.js
 */

import zzmButton from "./button"
import zzmTurntable from "./turntable"
import zzmSliderNum from "./slider-num"
import zzmExportDown from "./export-down"
import zzmPdfViewDown from "./pdf-view-down"
import   {zzmWaterRipple1,zzmWaterRipple2} from './water-ripple'
import zzmLineSelect from './line-select'
import zzmCircularDouble from './circular-double'

// 存储组件列表
const components = [zzmButton, zzmTurntable, zzmSliderNum, zzmExportDown, zzmPdfViewDown, zzmWaterRipple1,zzmWaterRipple2, zzmLineSelect, zzmCircularDouble]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  zzmButton,
  zzmTurntable,
  zzmSliderNum,
  zzmExportDown,
  zzmPdfViewDown,
  zzmWaterRipple1,
  zzmWaterRipple2,
  zzmLineSelect,
  zzmCircularDouble
}
