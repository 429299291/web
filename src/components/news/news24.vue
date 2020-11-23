<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>茶馆</h3>
    <p class="Author">本文转自:蔷仔说电影 2015-1-16<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/chaguan.mp4" class="video" controls></video>
    <span>很经典的一部话剧▲茶馆</span>

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
