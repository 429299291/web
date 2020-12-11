<template>
  <div class="index">
      <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div id='title' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-delay="500">
    <span>HELLO WORLD</span>
    <br>
    <span class="textmain">The more me see, the more you understand humility and admiration</span>
  </div>
    <div id="banner">
      <div class="headcanvas">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
        <div class="line line5"></div>
        <div class="line line6"></div>
        <div class="line line7"></div>
        <div class="line line8"></div>
        <div class="line line9"></div>
        <div class="line line10"></div>
        <div class="line line11"></div>
        <div class="line line12"></div>
        <div class="line line13"></div>
        <div class="line line14"></div>
        <div class="line line15"></div>
        <div class="line line16"></div>
        <div class="line line17"></div>
        <div class="line line18"></div>
        <div class="line line19"></div>
        <div class="line line20"></div>
        <div class="line line21"></div>
        <div class="line line22"></div>
        <div class="line line23"></div>
        <div class="line line24"></div>
        <div class="line line25"></div>
        <div class="line line26"></div>
        <div class="line line27"></div>
        <div class="line line28"></div>
        <div class="line line29"></div>
        <div class="line line30"></div>
      </div>
      <small data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" data-aos-delay="15000" class="beian"><a href="http://www.beian.miit.gov.cn" target="view_frame"><el-image src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/beian.png" fit="contain"  class='beian_img'></el-image>粤ICP备 18068542号</a></small>
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
#banner {
  width: 100%;
  }
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
