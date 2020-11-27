<template>
<div id="header">
      <div class="header_inner">
        <a class="action left" data-aos="fade-down" data-aos-duration="1500"><p class="header_p" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">—有深度的内容搬运工</p></a>
        <div class="middle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" aos-duration="2000" data-aos-delay="2000">
          <a class="middle_child"></a>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'news_header',
  data () {
    return {
      msg: 'news'
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
#header .header_p{font-size: .3rem!important;padding-top: .1rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 401px) {
#header .header_p{font-size: .3rem!important;padding-top: .1rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1024px) {
#header .header_p{font-size: .3rem!important;padding-top: .2rem!important;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
#header .header_p{font-size: .3rem;color: #fefefe;padding-top: 0.7rem;padding-left: 5rem;}
</style>
