/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-03-17 18:05:41
 * @LastEditors: zemin zheng
 * @Description: 路由文件入口
 * @FilePath: \componentlib\examples\router.js
 */


import Index from './components/index.vue'
import ButtonUse from './components/ButtonUse.vue'
import TurntableUse from './components/TurntableUse.vue'
import SlideNumUse from './components/SlideNumUse.vue'
import ExportDownUse from './components/ExportDownUse.vue'




 const routers  = [
    {path: '/', name:'Index', component: Index},
    // button 
    {path:'/button', name:'button', component:ButtonUse},
    // 大转盘
    {path:'/turn-table',name:'turn-table',  component:TurntableUse},
    // 数字滑块动画
    {path: '/slider-num', name: 'slider-num', component: SlideNumUse},
    // 导出下载
    {path: '/export-down', name: 'export-down', component: ExportDownUse}
]

export default routers 