<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 18:07:53
 * @LastEditTime: 2022-03-18 18:41:07
 * @LastEditors: zemin zheng
 * @Description: 导出exceil表格组件
 * 
 * @Description: 导出文件的名字是前端还是后端决定？
 * @Description: 后端，根据后端Response Headers的content-disposition头决定
 * 
 * @Description: 关于concatParams？
 * @Description: 这个根据业务的，有些参数我们需要自动传递，比如如果系统有时间轴参数，或者有地市参数；
 * @Description: 若没传，会自动帮你拼接上去（当然这只是业务，不要可删除）；因为组件是全局的，统一加上必要参数是很有必要的
 * 
 * @Description: 如何导出文件？
 * @Description: 使用XMLHttpRequest请求接口获取blob流，再利用FileReader使用bob流；
 * @Description: 在onload事件中创建a标签，往body内添加a标签元素，再进行模拟点击，点击完之后在删除a标签元素
 * @FilePath: \componentlib\packages\export-down\src\index.vue
-->

<!--
Response Headers
HTTP/1.1 200 OK
X-Powered-By: Express
server: nginx/1.19.1
date: Fri, 18 Mar 2022 09:49:07 GMT
content-type: application/x-msdownload
transfer-encoding: chunked
connection: close
content-disposition: attachment; filename=极值雨量统计表.xls
access-control-allow-origin: *
access-control-allow-credentials: true
-->

<template>
  <div class="content">
    <div class="title-img-but" @click="down">
      <img src="./img/export.png" />{{ name }}
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "zzm-export-down",
  props: {
    // 导出文件所需的参数
    exportProp: {
      type: Object,
      default: () => {
        return {
          url: "",
          params: {},
          name: "",
          type: "xls",
          method: "get",
        }
      },
    },
    // 按钮名
    name: {
      type: String,
      default: "导出",
    },
  },
  data() {
    return {}
  },
  methods: {
    /**
     * @description: 下载
     * @param {*}
     * @return {*}
     */

    down() {
      this.downExceil({
        url: this.exportProp.url + this.concatParams(this.exportProp.params),
        name: this.exportProp.name,
        type: this.exportProp.type,
      })
    },
    /**
     * 将对象拼接成get传值的形式
     * 1：若params: {
          dateTime: moment(new Date()).format('YYYYMMDDHH')
          ...
        }
        return ?dateTime=2020110614

        2：若params:{}  则return ''
      * 若 params.addvcd存在，则不拼接地市和流域的联动了，无则拼接 
      * 若 params.dateTime存在，则拼接时间联动了，无则不拼接
     */
    concatParams(params) {
      let paramsStr = ""
      let isHasAddvcd = false // 是否有传addvcd，有就不拼接地市和流域的联动了，无则拼接
      let isHasDateTime = false // 是否有传dateTime，有就拼接时间联动了，无则不拼接
      for (var k in params) {
        if (k === "addvcd") {
          isHasAddvcd = true
        }
        if (k === "dateTime") {
          isHasDateTime = true
          continue
        }
        paramsStr += k + "=" + params[k] + "&"
      }

      paramsStr =
        paramsStr === "" ? "" : "?" + paramsStr.substr(0, paramsStr.length - 1)

      if (!isHasAddvcd) {
        paramsStr =
          paramsStr === "" ? `?addvcd=440000` : paramsStr + `&addvcd=440000`
      }
      if (isHasDateTime) {
        paramsStr =
          paramsStr === ""
            ? `?dateTime=${new Date()}`
            : paramsStr + `&dateTime=${new Date()}`
      }

      return paramsStr
    },
    /**
     * @description: 下载表格
     * @param {*} option
     * @return {*}
     */

    downExceil(option) {
      const {
        url,
        query,
        method = "get",
      } = option
      if (method == "get") {
        let _this = this
        // console.log(name, type, data)
        var xhr = new XMLHttpRequest() //定义http请求对象
        xhr.open("get", url, true)
        // xhr.setRequestHeader('x-access-token', headersTmp['x-access-token'])
        xhr.send()
        xhr.responseType = "blob" // 返回类型blob
        xhr.onload = function() {
          // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
          if (this.status === 200) {
            var blob = this.response
            // console.log(blob)
            // content-disposition：这个字段就是后端返回来的文件名字
            let contentDisposition = xhr.getResponseHeader(
              "content-disposition"
            )
            let temp = contentDisposition
              ? xhr
                  .getResponseHeader("content-disposition")
                  .split(";")[1]
                  .split("filename=")[1]
              : ""

            // var fileName = decodeURIComponent(temp)
            _this.$emit('down', blob, contentDisposition)

            var reader = new FileReader()
            reader.readAsDataURL(blob) // 转换为base64，可以直接放入a标签href
            reader.onload = function(e) {
              // console.log(e) //查看有没有接收到数据流
              // 转换完成，创建一个a标签用于下载
              const elink = document.createElement("a")
              // iso8859-1 转为utf-8
              // elink.download = decodeURI(escape(temp)) + '.' + type
              // console.log(temp)
              elink.download = decodeURI(escape(temp))
              elink.style.display = "none"

              elink.href = e.target.result
              document.body.appendChild(elink)
              elink.click()
              URL.revokeObjectURL(elink.href) // 释放URL 对象
              document.body.removeChild(elink)
            }
          }
        }

        // 原方法(未鉴权)
        // const elink = document.createElement('a')
        // elink.download = name + '.xlsx'
        // elink.style.display = 'none'
        // elink.href = url
        // document.body.appendChild(elink)
        // elink.click()
        // URL.revokeObjectURL(elink.href) // 释放URL 对象
        // document.body.removeChild(elink)

        // 方法三：fetch（无法获取后端返回的fileName）
        // fetch(url, {
        //   method: 'GET'
        // })
        //   .then(res => {
        //     // let aaa = res.json()
        //     // aaa.then(r => {
        //     //   console.log(r)
        //     // })
        //     // console.log(res)

        //     return res.blob()
        //   })
        //   .then(data => {
        //     console.log(data)
        //     let reader = new FileReader() // 创建读取文件对象
        //     reader.addEventListener('loadend', function() {
        //       let res = JSON.parse(reader.result) // 返回的数据
        //       // console.log(res)
        //       if (res.msg === '签名参数已过期') {
        //         router.push('/login')
        //         sessionStorage.clear()
        //         Cookies.remove('mwwd-accessToken')
        //         Cookies.remove('uid')
        //         Message.error(res.msg)
        //       }
        //     })
        //     reader.readAsText(data, 'utf-8') // 设置读取的数据以及返回的数据类型为utf-8

        //     const blobUrl = window.URL.createObjectURL(data)
        //     const elink = document.createElement('a')
        //     elink.download = name + '.' + type
        //     elink.style.display = 'none'
        //     // console.log(blobUrl)
        //     // elink.href = blobUrl
        //     elink.href = url
        //     document.body.appendChild(elink)
        //     elink.click()
        //     URL.revokeObjectURL(elink.href) // 释放URL 对象
        //     document.body.removeChild(elink)
        //   })
        //   .catch(e => {
        //     console.log(e)
        //   })
      } else {
        console.log(query, "post")

        axios
          .post(url, query, {
            responseType: "blob",
            params: query,
          })
          .then((res) => {
            // console.log('下载数据', res)
            const blob = new Blob([res.data]) //处理文档流
            const fileName = res.headers["content-disposition"]
            const elink = document.createElement("a")
            elink.download = decodeURI(
              escape(fileName.split(";")[1].split("filename=")[1])
            )
            // elink.download = decodeURI(fileName.split('filename=')[1])
            elink.style.display = "none"
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
          })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.content {
  justify-content: flex-start;
  display: flex;
  align-items: center;
}
.title-img-but {
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #222;
  cursor: pointer;
  z-index: 1;
  position: relative;
  justify-content: flex-end;
  padding: 5px;
  border: 1px solid #f3f3f3;
  border-radius: 3px;
  img {
    height: 22px;
    // width: 22px;
    margin-right: 5px;
  }
  & > i {
    color: #1660d9;
    margin-right: 5px;
  }
}
</style>
