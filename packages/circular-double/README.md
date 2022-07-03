

# 圆形百分比组件

## zzm-circular-double 组件

一个圆形百分比组件


### 使用方法

```javascript
<zzm-circular-double :childData="config1" />

data(){
    return {
      config1: {
        color: "#4674C6",
        num: 0.68,
      },
    }
},
methods: {

}
```

### 哪里引用了 zzm-circular-double 组件？

examples/components/CircularDoubleUse.vue

### 效果

![6.zzm-circular-double](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220703111543.png)

请访问：http://localhost:8080/circular-double

### CircularDouble Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| child-data      | 数据                                  | Object  | ——     | ——     |


### CircularDouble Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- | 
| -----     | -----               | -----     |


### CircularDouble-child-data Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| num      | 数值                                  | Number  | ——     | 0.68     |
| color      | 颜色                                       | String  | ——     | '#000'     |

### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/7/3  |            | zzm-circular-double  | child-data:{ <br />num: 0.68<br />}<br />  |
