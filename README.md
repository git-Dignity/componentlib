

# [个人NPM组件库zzmcomponentlib](https://www.npmjs.com/package/zzmcomponentlib)

[该组件库在线链接](http://zhengzemin.cn:8087/)

[郑泽敏个人组件库在线文档](http://zhengzemin.cn:8088/componentDos/visualization/button.html)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 打包到npm
```
npm run lib
```

### 登录npm
```
npm adduser
```

### npm发布包：
```
npm publish
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Git
master：主分支
develop：开发分支（目前在此开发）

### 目录
|-- examples      // 原 src 目录，改成 examples 用作示例展示

|-- packages      // 新增 packages 用于编写存放组件


### Update Log
---

## 使用该组件库

### 安装
`npm install zzmcomponentlib --save-dev`

### 卸载
`npm uninstall zzmcomponentlib`

### 更新的就npm i全局一下，在`npm i zzmcomponentlib --save-dev`

```
import zzmcomponentlib from 'zzmcomponentlib'
import  'zzmcomponentlib/lib/zzmcomponentlib.css'
Vue.use(zzmcomponentlib)
```


### 0.0.1
| 新特性       | 描述      | Bug修复           | 作者           | 更新时间           | 
| ----------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| 添加`zzm-btn`组件          | 按钮 | -- | ZZM | 2020/10/19 23:30 | 
| 添加`zzm-turntable`组件      | 大转盘    | -- | ZZM | 2020/11/1 16:29 | 
| 添加`zzm-slider-num`组件     | 数字滑块动画     | -- | ZZM | 2022/3/17 17:30 | 
| 添加`zzm-export-down`组件    | 导出下载exceil表格      | -- | ZZM | 2022/3/21 12:30 | 
| 添加`zzm-pdf-view-down`组件    | PDF可查看下载PDF/DOC      | -- | ZZM | 2022/3/22 12:30 | 
| 添加`zzm-water-ripple`组件    | 水波纹比例图      | -- | ZZM | 2022/7/1 17:50 | 
| 添加`zzm-water-ripple-1`组件    | 水波纹另外形状比例图      | -- | ZZM | 2022/7/2 16:50 | 
| 添加`zzm-line-select`组件    | 线段的选择状态      | -- | ZZM | 2022/7/2 15:22 | 
| 添加`zzm-circular-double`组件    | 圆形百分比      | -- | ZZM | 2022/7/3 10:22 | 

