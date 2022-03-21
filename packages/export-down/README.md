
# 导出exceil表格组件

## zzm-export-down 组件

一个导出exceil的表格

导出文件的名字是前端还是后端决定？

* 后端，根据后端Response Headers的content-disposition头决定


关于concatParams？

* 这个根据业务的，有些参数我们需要自动传递，比如如果系统有时间轴参数，或者有地市参数；

* 若没传，会自动帮你拼接上去（当然这只是业务，不要可删除）；因为组件是全局的，统一加上必要参数是很有必要的


如何导出文件？

* 使用XMLHttpRequest请求接口获取blob流，再利用FileReader使用bob流；

* 在onload事件中创建a标签，往body内添加a标签元素，再进行模拟点击，点击完之后在删除a标签元素



### 使用方法

```javascript
<zzm-export-down :export-prop="exportProp" :name="name" @down="down"  />

data(){
    return {
      exportProp: {
        url: `appsvc/v1/export/exportRainHourFrequency/excel`,
        params: {
          startTime: 20210318140000,
          endTime: 20220318150000,
          // addvcd: '440100'
        },
        name: "暴雨重现期",
      },
      name: '导出'
    }
},
methods: {
  down(blob, contentDisposition){
    console.log(blob, contentDisposition);
  }
}
```

### 哪里引用了 zzm-export-down 组件？

examples/components/ExportDownUse.vue

### 效果

![2.zzm-export-down](https://gitee.com/zhengzem/graphic-bed/raw/master/img/20220321103507.png)

请访问：http://localhost:8080/export-down

### ExportDown Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| export-prop      | 导出文件所需的参数                                  | Object  | ——     | ——     |
| name      | 按钮名                                  | String  | ——     | 导出     |


### ExportDown Events

| 事件名        | 说明                                       | 参数                    |
| ------------- | ------------------------------------------ | ----------------------- | --- | --- |
| down     | 导出下载成功的函数               | blob：文件二进制流, contentDisposition：文件名      | ——  | ——  |


### ExportDown-export-prop Attributes

| 参数            | 说明                                        | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------- | ------ | ------ |
| url      | 请求后端的URL接口                                  | String  | ——     | ——     |
| query      | 请求接口所需参数                                       | Object  | ——     | {}     |
| method      | 请求类型                                       | String  | GET/POST     | GET     |


### 组件相关信息

| Author     | CreateTime | UpdateTime | Introduction | parameter                                                                                                                          |
| ---------- | ---------- | ---------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| zhengzemin | 2022/3/21  |            | zzm-export-down  | export-prop:{ <br />url: appsvc/v1/export/exportRainHourFrequency/excel, <br />params: { <br />endTime: 20220318150000,<br />},<br />},<br />name: '导出'<br />  |
