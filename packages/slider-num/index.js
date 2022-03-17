

// 导入组件，组件必须声明 name
import sliderNum from './src/index.vue'

// 为组件提供 install 安装方法，供按需引入
sliderNum.install = function (Vue) {
  Vue.component(sliderNum.name, sliderNum)
}

// 默认导出组件
export default sliderNum
