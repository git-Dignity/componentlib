<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-07-01 18:11:23
 * @LastEditors: zemin zheng
 * @Description: 全部组件案例入口
 * @FilePath: \componentlib\examples\components\index.vue
-->
<template>
  <div class="content">
   <zzm-btn class="button" type="primary" size="medium" @click="btnComponent">按钮组件案例</zzm-btn>
   <zzm-btn class="button" type="success" size="medium" @click="turntableComponent">大转盘组件案例</zzm-btn>
   <zzm-btn class="button" type="info" size="medium" @click="sliderNumComponent">数字滑块动画组件案例</zzm-btn>
   <zzm-btn class="button" type="warning" size="medium" @click="exportDownComponent">导出下载组件案例</zzm-btn>
   <zzm-btn class="button" type="danger" size="medium" @click="pdfViewDownComponent">PDF可查看下载PDF/DOC组件案例</zzm-btn>
   <zzm-btn class="button" type="primary" size="medium" @click="waterRippleComponent">水波纹比例图</zzm-btn>
 
  </div>
</template>

<script>
export default {
  name: 'Index',
 
  data() {
    return {
     
    };
  },
  methods: {
    btnComponent() {
       this.$router.push('/button');
    },
    turntableComponent() {
       this.$router.push('/turn-table');
    },
    sliderNumComponent(){
      this.$router.push('/slider-num');
    },
    exportDownComponent(){
      this.$router.push('/export-down');
    },
    pdfViewDownComponent(){
      this.$router.push('/pdf-view-down')
    },
    waterRippleComponent(){
      this.$router.push('/water-ripple')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button{
    margin-right: 15px;
}

</style>
