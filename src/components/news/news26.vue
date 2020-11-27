<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>马云达沃斯对话</h3>
    <p class="Author">发布于:2020-10-26 视频来源于:2017-1-25<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E9%A9%AC%E4%BA%91%E5%AF%B9%E8%AF%9D.mp4" poster="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E9%A9%AC%E4%BA%91%E5%AF%B9%E8%AF%9D.jpg" class="video" controls></video>
    <span>最近马云露面的少了，但还是想发一下，很多很棘手的问题解决的很巧妙，抛开身份和问题本身，相比刘欣事件就能看出巨大的文化，观念，知识面的差异</span>
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
