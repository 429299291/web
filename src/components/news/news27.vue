<template>
  <div class="">
  <news_header></news_header>
  <div id="main">
    <h3>公寓暴雷，股价却节节升高？资本市场埋头狂欢，而身背租房贷的年輕人能否自救？</h3>
    <p class="Author">视频来源于:IC实验室<span></span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <video autoplay="autoplay" src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E8%9B%8B%E6%AE%BC%E5%85%AC%E5%AF%93.mp4" poster="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/news/video/%E8%9B%8B%E6%AE%BC%E5%85%AC%E5%AF%93.jpg" class="video" controls></video>
    <span>资本市场的走钢丝，监管的边缘，普通打工人维权，信息不对称、维权入口难度、时间成本、都是难以言说的隐性成本，你能不打工去跟人玩吗？</span>
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
