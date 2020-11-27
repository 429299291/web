<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>神童真的那么神吗？</h3>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E7%A5%9E%E7%AB%A5.mp4" poster="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/shentong.jpg" class="video" controls></video>
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
