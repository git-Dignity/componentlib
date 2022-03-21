/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:07:11
 * @LastEditTime: 2022-03-17 18:07:40
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\packages\export-down\index.js
 */


// 导入组件，组件必须声明 name
import exportDown from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
exportDown.install = function (Vue) {
  Vue.component(exportDown.name, exportDown)
}

// 默认导出组件
export default exportDown
