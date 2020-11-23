<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>七个会议，值得仔细品味</h3>
    <p class="Author">本文转自:网络 2020-10-24<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E4%B8%83%E4%B8%AA%E4%BC%9A%E8%AE%AE.mp4" class="video" controls></video>
    <span>很有深度的电影，希望能用不同的视角和客观的态度来从不同的角度看问题，更不要愤青什么的...螺丝钉虽小，能看几层就看个人深度了</span>
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
