<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>宝能万科之争，中国第一股权争夺战</h3>
    <p class="Author">本文转自:冲浪普拉斯 2020-10-1<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/video/wanke.mp4" poster="../../assets/news/wanke.jpg" class="video" controls></video>
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
