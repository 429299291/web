<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>深挖恒大重组危机！许家印亲自下场! </h3>
    <p class="Author">本文转自:狮子座 2020-10-16<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/hengda.mp4" poster="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/hengda.png" class="video" controls></video>
    <!-- <span>▲</span> -->

  </div>
</div>
</template>

<script>
import news_header from "./news_header";

export default {
  name: 'news8',
  data () {
    return {
      msg: 'news13',
    }
  },
  components:{
    news_header
  },
  mounted(){
    document.title = document.getElementsByTagName("h3")[0].innerText
  }    
  }
</script>
<style scoped>
@import "../../../public/css/news.css";
</style>
