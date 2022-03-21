<!--
 * @Author: zemin zheng
 * @Date: 2022-03-17 15:42:30
 * @LastEditTime: 2022-03-17 18:17:41
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
   <!-- danger -->
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
