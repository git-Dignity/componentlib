<template>
  <div class="hello">
   <zzm-btn :loading="loading" type="danger" size="medium" @click="loadClick" >查询</zzm-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonUse',
  props: {
    msg: String
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    loadClick() {
        this.loading = true;
        setTimeout( () =>{
            this.loading = false;
        },2000)
    }
  }
}
</script>

