<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>比特币和区块链啥原理？矿机挖矿咋回事?</h3>
    <p class="Author">本文转自:李永乐 2019-11-16<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/bitbi.mp4" class="video" controls></video>
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
