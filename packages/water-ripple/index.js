/*
 * @Author: zemin zheng
 * @Date: 2022-07-01 17:55:22
 * @LastEditTime: 2022-07-01 17:56:08
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\packages\water-ripple\index.js
 */



// 导入组件，组件必须声明 name
import waterRipple from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
waterRipple.install = function (Vue) {
  Vue.component(waterRipple.name, waterRipple)
}

// 默认导出组件
export default waterRipple
