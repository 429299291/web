<template>
  <div class="index">
      <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
    <div id='title' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-delay="500">
      <span>HELLO WORLD</span>
      <br>
      <span class="textmain">The more see, the more understand humility and respect</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "indexq",
  data() {
    return {
      msg: "index",
    };
  },
  methods: {
  },
  computed: {},
  mounted() {
    document.title = "猪弟弟❤";
  }
};
</script>

<style scoped>
@media screen and (max-width: 1025px) {
  span{font-size: 1.5rem;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */

.index {height: 100vh;overflow: hidden;}
/*banner*/
.beian {
  position: absolute;
  left: 50%;
  transform: translate(-50% ,0);
  bottom: 10px;
  z-index: 999;
}
.beian a{color:rgba(200, 200, 200, 0.9);font-size: 0.5rem;}
.beian .el-image{padding-right: 0.2rem!important;width: 0.8rem!important}
#title {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #FFF;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  width: 100%;
  font-size: 50px;
  transform: translate(-50%,-50%);
  letter-spacing: 10px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.textmain{font-size: 1rem;letter-spacing: normal;}
</style>
