/*
 * @Author: zemin zheng
 * @Date: 2022-07-01 17:55:22
 * @LastEditTime: 2022-07-02 15:30:30
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\packages\line-select\index.js
 */



// 导入组件，组件必须声明 name
import lineSelect from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
lineSelect.install = function (Vue) {
  Vue.component(lineSelect.name, lineSelect)
}

// 默认导出组件
export default lineSelect
