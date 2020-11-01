<template>
  <div class="hello">
   <zzm-turntable 
   :prizeListProp = "prizeList" 
   :countProp = "countProp" 
   @draw = "draw">
   </zzm-turntable>
  </div>
</template>

<script>
import {prizeList} from './src/TurntableUse/config'
export default {
  name: 'Turntable',
  
  data() {
    return {
      prizeList: prizeList,
      countProp:8
    };
  },
  methods: {
    draw(e){
      console.log(e)
    }
   
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
