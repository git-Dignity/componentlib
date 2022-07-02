

# 线段的选择状态组件

## zzm-line-select 组件

一个基于css的线段的选择状态组件


### 使用方法

```javascript
<zzm-line-select :list="list" @selectChange="lineSelectChange" />

data(){
    return {
      list: [
        { name: "AAAAA", canClick: true },
        { name: "BBBBB", canClick: true },
        { name: "CCCCC", canClick: false },
        { name: "DDDDD", canClick: false },
      ],
    }
},
methods: {
  lineSelectChange(name) {
    console.log(name)
  },
},
mounted() {
  this.getData()
},
```

### 哪里引用了 zzm-line-select 组件？

examples/components/LineSelectUse.vue.vue

### 效果

![4.zzm-line-select](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220702160025.gif)

请访问：http://localhost:8080/line-select

### LineSelect Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| list      | 所需数据                                  | Object  | ——     | ——     |


### LineSelect Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- | 
| selectChange     | 改变的事件               | name      | 


### LineSelect-list Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| name      | 线段的名字                                  | String  | ——     |  AAAAA   |
| canClick      | 是否可点击                                       | Boolean  | ——     | true     |


### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/7/2  |            | zzm-line-select  | list{}<br />  |
