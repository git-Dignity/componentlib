<template>
  <div>
    <div
      class="btn"
      :class="[ {'btnClick': loadingBtn},  btnSize  ]"
      :style="typeBtn"
      @mouseover="itemHover"
      @mouseout="removeHover"
      @click="clickBtn"
    >
      <slot>按钮</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "zzm-btn",
  props: {
    loading: Boolean,
    type: String,
    size: String
  },
  data() {
    return {
      loadingBtn: this.loading,
      typeBtn: {
        background: "#409EFF"
      },
     btnSize:'btnSize',
     sss: 'aaa'
    };
  },
  watch: {
    loading(data) {
      this.loadingBtn = data;
    },
    type(data) {
      // console.log(data);
      this.type = data;
      this.initBtnType();
    },
    size(data){
      // console.log(data, "size");
      this.size = data;
      this.initBtnSize();
    }
  },
  methods: {
    init() {
      this.initBtnType();
      this.initBtnSize()
    },
    initBtnType() {
      switch (this.type) {
        case "primary":
          this.typeBtn.background = "#409EFF";
          break;
        case "success":
          this.typeBtn.background = "#67C23A";
          break;
        case "info":
          this.typeBtn.background = "#909399";
          break;
        case "warning":
          this.typeBtn.background = "#e6a23c";
          break;
        case "danger":
          this.typeBtn.background = "#f56c6c";
          break;
        default:
          this.typeBtn.background = "#409EFF";
      }
    },
    initBtnSize() {
      switch (this.size) {
        case "medium":
          this.btnSize = "btnSize-medium";
          break;
        case "small":
          this.btnSize = "btnSize-small";
          break;
        case "mini":
          this.btnSize = "btnSize-mini";
          break;
        default:
          this.btnSize = "btnSize";
      }
    },
    initBtnHoverType() {
      switch (this.type) {
        case "primary":
          this.typeBtn.background = "#66b1ff";
          break;
        case "success":
          this.typeBtn.background = "#85ce61";
          break;
        case "info":
          this.typeBtn.background = "#a6a9ad";
          break;
        case "warning":
          this.typeBtn.background = "#ebb563";
          break;
        case "danger":
          this.typeBtn.background = "#f78989";
          break;
        default:
          this.typeBtn.background = "#409EFF";
      }
    },
    itemHover() {
      this.initBtnHoverType();
    },
    removeHover() {
      this.initBtnType();
    },
    clickBtn() {
      this.$emit("click", true);
    }
  },
  mounted() {
    this.init();
  }
};
</script>


<style   scoped>
.btn,
.btn::before {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 3px;
}
.btn {
  position: relative;
  background: #409eff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  /* padding:0 5px; */
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
.btn:hover {
  background: #66b1ff;
}

/* 按钮宽高，因为绑定在style插件无法自适应，所以使用多个class控制切换 */
.btnSize{
  height: 40px;
  line-height: 40px;
}
.btnSize-medium{
  height: 36px;
  line-height: 36px;
}
.btnSize-small{
  height: 32px;
  line-height: 32px;
}
.btnSize-mini{
  height: 28px;
  line-height: 28px;
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