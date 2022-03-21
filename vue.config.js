/*
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-03-18 17:31:39
 * @LastEditors: zemin zheng
 * @Description: 头部注释
 * @FilePath: \componentlib\vue.config.js
 */
const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  devServer: {
    port: 8080,
    // https: true,
    proxy: {
      "/appsvc": {
        target: "http://10.44.20.234/",
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   '^/appsvc-test/': '/appsvc/'
        // }
      },
      '/rainwater/': {
        target: "http://10.44.20.234/",
        changeOrigin: true,
        ws: true
      },
      "/zzm":{
        target: "http://zhengzemin.cn/",
        changeOrigin: true,
        ws: true,
      }
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("./examples"))

    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
}
