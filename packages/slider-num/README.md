
# 数字滑块动画组件

## zzm-slider-num 组件

一个数字动画组件的滑块

所谓的滑块是指？

* 0-9之间的数字一直变化，利用css的translateY、transition-duration燃起动画效果


是如何循环执行数字滑块动画的？

* 通过interval时间参数，指的是多少毫秒后，重新执行滑块动画

* 初始化的时候，在scrollNum方法中嵌入setTimeout，而setTimeout内部又去执行scrollNum方法（递归了）

* 这样下来，每interval毫秒后，动画又继续执行



### 使用方法

```javascript
<zzm-slider-num :value="value" :flagAni="flagAni" :interval="interval" @start="start" />

data(){
    return {
      value: 13.14,
      flagAni: false,
      interval: 30 * 1000,
    }
},
methods: {
    start(val){
        console.log(val);
    }
},
mounted: {
    // 5.2s后重新启动滑动动画
    setTimeout(() => {
      this.flagAni = true
    }, 5200)
  },
```

### 哪里引用了 zzm-slider-num 组件？

examples/components/SlideNumUse.vue

### 效果

![1.zzm-slider-num](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220317164651.gif)

请访问：http://localhost:8080/slider-num

### Slider Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| value      | 目标值                                  | [String, Number]  | ——     | 0.00     |
| flag-ani      | 控制是否重新启动滑动动画                                  | Boolean  | ——     | false     |
| interval      | 定时器延迟触发的时间                                  | Number  | ——     | 30 * 1000     |


### Slider Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- | --- | --- |
| start     | 开始执行动画的事件               | true      | ——  | ——  |


### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/3/17  |            | zzm-slider-num  | value: 13.14, <br />flagAni: false, <br />interval: 3 * 1000,<br />  |
