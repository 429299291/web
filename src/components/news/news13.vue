<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>提前消费会幸福吗？</h3>
    <p class="Author">本文转自:IC实验室 2020-5-23<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/1.mp4" class="video" controls></video>
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
.video{max-width: 1280;max-height: 720px;width: 100%;height: 100%;}
</style>
