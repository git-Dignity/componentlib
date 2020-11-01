<template>
  <div class="content">
   <zzm-btn class="button" type="primary" size="medium" @click="btnComponent">按钮组件案例</zzm-btn>
   <zzm-btn class="button" type="success" size="medium" @click="turntableComponent">大转盘组件案例</zzm-btn>
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
       this.$router.push('/ButtonUse');
    },
    turntableComponent() {
       this.$router.push('/TurntableUse');
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
