/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:07:11
 * @LastEditTime: 2022-07-03 11:01:29
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\packages\circular-double\index.js
 */


// 导入组件，组件必须声明 name
import circularDouble from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
circularDouble.install = function (Vue) {
  Vue.component(circularDouble.name, circularDouble)
}

// 默认导出组件
export default circularDouble
