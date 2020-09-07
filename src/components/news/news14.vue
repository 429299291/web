<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>一部值得深思的电影</h3>
    <p class="Author">本文转自:YouTube 2020-6-7<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
      <p>目前各大平台都收费，因这电影引人 <em>深思/反思</em> 的地方很多，教育意义大，故通过技术方式 <em>免费</em> 放出来</p>
    <video src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/audio.mp4" class="video" controls poster="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/video/news2.png"></video>
    <span>▲限时免费，估计不久就有版权方找本站了</span>
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
.video{width: 100%;height: 100%;}
</style>
