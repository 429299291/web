<template>
  <div class="news6">
  <news_header></news_header>
  <div id="main">
    <h3>中介房源照片修图</h3>
    <p class="Author">本文转自:痴迷好故事<span>(致敬原著，如有偏差，请联系)</span></p>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <img src="" alt="">
    <p></p>
    <span>▲某中介</span>

  </div>
</div>
</template>

<script>
import news_header from "./news_header";

export default {
  name: 'news8',
  data () {
    return {
      msg: 'news5',
      imgUrl:'../../assets/classic3.png'
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
