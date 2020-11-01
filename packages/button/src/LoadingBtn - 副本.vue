<template>
  <div>
    <div class="btn" :class="{ 'btnClick': loadingBtn }" @click="clickBtn">
      <slot>{{btnName}}</slot>
    </div>
    <button id="btn" @click="clickBtn">收藏</button>
  </div>
</template>

<script>
import StateMachine  from 'javascript-state-machine'


export default {
  name: "zzm-btn",
  props: {
    loading: Boolean,
    type: String
  },
  data() {
    return {
      btnName: '按钮',
      loadingBtn: this.loading,
      fsm: new StateMachine({
        init: "收藏",
        transitions: [
          //不要写欠个s
          {
            name: "doStore", //name的方法和methods的onDoStore名字一样，on加name，不过是驼峰命名
            from: "收藏",
            to: "取消收藏"
          },
          {
            name: "deleteStore",
            from: "取消收藏",
            to: "收藏"
          }
        ]
      })
    };
  },
  watch: {
    loading(data) {
      this.loadingBtn = data;
    },
    type(data) {
      console.log(data);
    }
  },
  methods: {
    clickBtn() {
      this.loadingBtn === true ? this.onDoStore() : this.onDeleteStore()
      
      // this.$emit("click", true);
    },
    //监听执行收藏
    onDoStore() {
      //方法名字和transition的name一样，on加name，不过是驼峰命名
      // alert('收藏成功');  //可以post请求，数据库更新

      this.updateText("btn");
    },
    onDeleteStore() {
      // alert('取消收藏成功'); //可以post请求，数据库更新
      this.updateText("btn");
    },
    updateText(element){
      // console.log(element)
      // console.log(this.fsm.state)
      document.getElementById(element).innerText = this.loadingBtn
        // this.btnName = this.fsm.state
    },
     onbeforeevent (){
      console.log(159)
    }
  },
  mounted(){
    // console.log(this.fsm.doStore())
  },
  onbeforeevent (){
      console.log(159)
    }
};
</script>


<style   scoped>
.btn,
.btn::before {
  width: 200px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 3px;
}
.btn {
  position: relative;
  background: #5ad;
  color: #fff;
  cursor: pointer;
}
.btn::before {
  content: "loading";
  position: absolute;
  display: none;
  z-index: 2;
  top: 0;
  left: 0;
  color: #fff;
  text-shadow: rgba(100, 0, 0, 1) 0 0 3px;
  background: linear-gradient(
    45deg,
    #fc0 0%,
    #fc0 20%,
    #fa0 20%,
    #fa0 45%,
    #fc0 45%,
    #fc0 70%,
    #fa0 70%,
    #fa0 95%,
    #fc0 95%,
    #fc0 100%
  );
  background-size: 30px 30px;
  background-position: 0 0;
  animation: btnClick 1s infinite linear;
}
.btn.btnClick::before {
  display: block;
}

@keyframes btnClick {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 0;
  }
}
</style>


<!--  写组件，写规范
  实现点击按钮后CSS加载效果: https://mp.weixin.qq.com/s/82HRpX5WpDVt7DTsdDsyzA
 -->