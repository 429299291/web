<template>
  <div class="news1">
  <news_header></news_header>
  <div id="main">
    <h3>2019UI设计趋势</h3>
  </div>


</div>  
</template>

<script>
import news_header from "./news_header";
export default {
  name: 'news1',
  data () {
    return {
      msg: 'news1',
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
