
// 导入组件，组件必须声明 name
import turntable from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
turntable.install = function (Vue) {
  Vue.component(turntable.name, turntable)
}

// 默认导出组件
export default turntable
