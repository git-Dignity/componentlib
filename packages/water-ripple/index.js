/*
 * @Author: zemin zheng
 * @Date: 2022-07-01 17:55:22
 * @LastEditTime: 2022-07-02 16:22:40
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\packages\water-ripple\index.js
 */



// 导入组件，组件必须声明 name
import zzmWaterRipple1 from './src/water-ripple-1.vue'
import zzmWaterRipple2 from './src/water-ripple-2.vue'

// 为组件提供 install 安装方法，供按需引入
zzmWaterRipple1.install = function (Vue) {
  Vue.component(zzmWaterRipple1.name, zzmWaterRipple1)
}

zzmWaterRipple2.install = function (Vue) {
  Vue.component(zzmWaterRipple2.name, zzmWaterRipple2)
}


// 默认导出组件
export {
  zzmWaterRipple1,
  zzmWaterRipple2
} 
