

# 水波纹比例图组件

## zzm-water-ripple 组件
## zzm-water-ripple-1 组件

一个基于css水波纹比例图组件


zzm-water-ripple、zzm-water-ripple-1有什么区别

* 样式不一样


### 使用方法

```javascript
<div class="substance">
  <zzm-water-ripple class="item" :num="0"> </zzm-water-ripple>
  <zzm-water-ripple class="item" :num="1"> </zzm-water-ripple>
  <zzm-water-ripple class="item" :num="100"> </zzm-water-ripple>
</div>
<div class="substance">
  <zzm-water-ripple-1 class="item" :num="0"> </zzm-water-ripple-1>
  <zzm-water-ripple-1 class="item" :num="1"> </zzm-water-ripple-1>
  <zzm-water-ripple-1 class="item" :num="100"> </zzm-water-ripple-1>
</div>

data(){
    return {}
},
methods: {
  
},
mounted() {
 
},
```

### 哪里引用了 zzm-water-ripple 组件？

examples/components/WaterRippleUse.vue

### 效果

![5.zzm-water-ripple](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220702163356.gif)

请访问：http://localhost:8080/water-ripple

### WaterRipple Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| num      | 数值                                  | Number  | ——     | 0    |


### WaterRipple Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- |
| click     | 点击事件               | true      | 


### WaterRipple-data Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| ——      | ——                                  | String  | ——     | ——    |


### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/7/2  |            | zzm-water-ripple  | num:0<br />  |
| zhengzemin | 2022/7/2  |            | zzm-water-ripple-1  | num:0<br />  |