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
| 新特性       | Bug修复           | 作者           | 更新时间           | 
| ----------------- |:-------------:|:-------------:|:-------------:|
| 添加`zzm-btn`组件          | -- | ZZM | 2020/10/19 23:30 | 
| 添加`zzm-turntable`组件          | -- | ZZM | 2020/11/1 16:29 | 
