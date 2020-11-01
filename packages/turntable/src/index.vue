<template>
  <div class="container">
    <div class="wheel-main">
      <div class="wheel-pointer" @click="beginRotate()"></div>
      <canvas width="600" height="400" id="canvas_bg" :style="rotateBgStyle"></canvas>
      <div class="wheel-bg" :style="rotateStyle">
        <div class="prize-list">
          <div
            class="prize-item"
            v-for="(item,index) in prizeList"
            :key="index"
            :style="item.style"
          >
            <div class="prize-pic">
              <img :src="item.icon" />
            </div>
            <div class="prize-type">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="toast" v-show="prize">
      <div class="toast-container">
        <div
          class="toast-picture"
          :class="prize && prize.isPrize === 1 ? 'congratulation-img' : 'sorry-img'"
        ></div>
        <div class="close" @click="closeToast()"></div>
        <div class="toast-title">{{toastTitle}}</div>
        <div class="toast-btn">
          <div class="toast-cancel" @click="closeToast">关闭</div>
        </div>
      </div>
    </div>
    <div class="toast-mask" v-show="prize"></div>
  </div>
</template>
<script>
import { prizeList } from "./config";
const CIRCLE_ANGLE = 360;

const config = {
  // 总旋转时间
  duration: 4000,
  // 旋转圈数
  circle: 8,
  mode: "ease-in-out"
};

export default {
  name: "zzm-turntable",
  props: {
    // 奖品列表
    prizeListProp: {
      type: Array,
      default: () => prizeList
    },
    // 剩余抽奖次数
    countProp: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      count: this.countProp, // 剩余抽奖次数
      duration: 3000, // 转盘旋转时间
      prizeList: [], // 奖品列表
      rotateAngle: 0, // 旋转角度
      index: 0,
      prize: null
    };
  },
  created() {
    // 初始化一些值
    this.angleList = [];
    // 是否正在旋转
    this.isRotating = false;
    // 基本配置
    this.config = config;

    // 获取奖品列表
    this.initPrizeList();
  },
  computed: {
    /**
     * 奖品旋转
     */
    rotateStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle}deg);
            transform: rotate(${this.rotateAngle}deg);`;
    },
    /**
     * 旋转背景颜色
     * 因为奖品小于8类的时候，会有样式上的错位，所以需要角度this.rotateAngle - this.prizeList.length*5.5
     */
    rotateBgStyle() {
      return `
        -webkit-transition: transform ${this.config.duration}ms ${
        this.config.mode
      };
        transition: transform ${this.config.duration}ms ${this.config.mode};
        -webkit-transform: rotate(${this.rotateAngle -
          this.prizeList.length * 5.5}deg);
            transform: rotate(${this.rotateAngle -
              this.prizeList.length * 5.5}deg);`;
    },
    toastTitle() {
      return this.prize && this.prize.isPrize === 1
        ? "恭喜您，获得" + this.prize.name
        : "未中奖";
    }
  },
  watch: {
    // prizeListProp(data) {
    //   console.log(data);
    // }
  },
  methods: {
    initPrizeList() {
      // 这里可以发起请求，从服务端获取奖品列表
      // 这里使用模拟数据
      this.prizeList = this.formatPrizeList(this.prizeListProp);
    },
    /**
     * 初始化画布（该转盘背景）
     */
    initCanvas() {
      var myCanvas = document.querySelector("canvas");
      var ctx = myCanvas.getContext("2d");
      var w = ctx.canvas.width;
      var h = ctx.canvas.height;

      /*分成几等分*/
      var num = this.prizeList.length;
      /*一份多少弧度*/
      var angle = (Math.PI * 2) / num;
      // const half = angle / 2;
      /*原点坐标*/
      var x0 = w / 2;
      var y0 = h / 2;
      /*获取随机颜色*/
      var getRandomColor = function() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
      /*上一次绘制的结束弧度等于当前次的起始弧度*/
      var n = this.prizeList.length - 1;
      for (var i = 0; i < num; i++) {
        var startAngle = i * angle;
        var endAngle = (i + 1) * angle;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.arc(x0, y0, 150, startAngle, endAngle);
        // 若传进来有设置color，则赋值，无则随机颜色

        if(i===num-1){
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[num-1].color
            : getRandomColor();
        }  else  {
          n--;
          ctx.fillStyle = this.prizeList[i].color
            ? this.prizeList[n].color
            : getRandomColor();
        }

        ctx.fill();
      }
    },
    // 格式化奖品列表，计算每个奖品的位置
    formatPrizeList(list) {
      // 记录每个奖的位置
      const angleList = [];

      const l = list.length;
      // 计算单个奖项所占的角度
      const average = CIRCLE_ANGLE / l;
      // console.log(average)

      const half = average / 2;

      // 循环计算给每个奖项添加style属性
      list.forEach((item, i) => {
        // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
        const angle = -(i * average + half); // + l * 5.5
        // 增加 style
        item.style = `-webkit-transform: rotate(${angle}deg);
                      transform: rotate(${angle}deg);`;

        // 记录每个奖项的角度范围
        angleList.push(i * average + half);
      });

      this.angleList = angleList;
      return list;
    },
    beginRotate() {
      // 添加次数校验

      if (this.count === 0) return;

      // 开始抽奖
      // 这里这里向服务端发起请求，得到要获得的奖
      // 可以返回下标，也可以返回奖品 id，通过查询 奖品列表，最终得到下标

      // 随机获取下标
      this.index = this.random(this.prizeList.length - 1);

      // 减少剩余抽奖次数
      this.count--;

      // 开始旋转
      this.rotating();
    },
    random(max, min = 0) {
      return parseInt(Math.random() * (max - min + 1) + min);
    },
    rotating() {
      const { isRotating, angleList, config, rotateAngle, index } = this;

      if (isRotating) return;

      this.isRotating = true;

      // 计算角度
      const angle =
        // 初始角度
        rotateAngle +
        // 多旋转的圈数
        config.circle * CIRCLE_ANGLE +
        // 奖项的角度
        angleList[index] -
        (rotateAngle % CIRCLE_ANGLE);

      this.rotateAngle = angle;

      // 旋转结束后，允许再次触发
      setTimeout(() => {
        this.rotateOver();
      }, config.duration + 1000);
    },
    rotateOver() {
      this.isRotating = false;

      this.prize = this.prizeListProp[this.index];

      this.$emit("draw", [this.prize, this.count]);

      //   console.log(this.prize, this.index, this.count);
    },
    //关闭弹窗
    closeToast() {
      this.prize = null;
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style scoped>
.container {
  width: 100%;
}
.wheel-main {
  margin: 0 auto;
  position: relative;
  width: 295px;
  height: 295px;
}
.wheel-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  /* background: url("../assets/img/draw_wheel.png") no-repeat center top; */
  background-size: 100%;
  color: #fff;
}
.wheel-pointer {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 85px;
  height: 85px;
  background: url("./../../../examples/assets/img/draw_btn.png") no-repeat
    center top;
  background-size: 100%;
  transform: translate3d(-50%, -50%, 0);
}
.wheel-bg div {
  text-align: center;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  position: absolute;
  width: 95px;
  height: 150px;
  top: 0;
  left: 50%;
  margin-left: -47.5px;
  transform-origin: 50% 100%;
}

.prize-pic img {
  width: 4.0625rem;
  height: 2.5rem;
  margin-top: 1.5625rem;
}
.prize-count {
  font-size: 0.875rem;
}
.prize-type {
  font-size: 0.75rem;
}
.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20000;
  transform: translate(-50%, -50%);
  width: 15.4375rem;
  background: #fff;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  background-color: rgb(252, 244, 224);
}
.toast-container {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px dotted #fccc6e;
}
.toast-picture {
  position: absolute;
  top: -6.5rem;
  left: -1.5rem;
  width: 18.75rem;
  height: 8.5625rem;
}
.congratulation-img {
  background: url("./../../../examples/assets/img/congratulation.png") no-repeat
    center top;
  background-size: 100%;
}
.sorry-img {
  background: url("./../../../examples/assets/img/sorry.png") no-repeat center
    top;
  background-size: 100%;
}
.toast-pictrue-change {
  position: absolute;
  top: -1.5rem;
  left: -1.375rem;
  width: 17.5rem;
  height: 3.125rem;
}
.toast-title {
  padding: 2.8125rem 0;
  font-size: 18px;
  color: #fc7939;
  text-align: center;
}
.toast-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9375rem;
}
.toast-btn div {
  background-image: -moz-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );

  background-image: -ms-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  background-image: -webkit-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
  width: 4.6875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
  color: #fff;
}
.close {
  position: absolute;
  top: -0.9375rem;
  right: -0.9375rem;
  width: 2rem;
  height: 2rem;
  background: url("./../../../examples/assets/img/close_store.png") no-repeat
    center top;
  background-size: 100%;
}

canvas {
  position: absolute;
  left: -153px;
  top: -47px;
}
</style>

// canvas代替图片：https://juejin.im/post/6844903695893659655
// CSS八等分圆：https://juejin.im/post/6844903859312132110
// canvas绘制一个圆分成六等分颜色随机：https://blog.csdn.net/qq_44797965/article/details/104330823