<template>
<div id="header">
        <!-- <a class="action left" data-aos="fade-down" data-aos-duration="1500"><p class="header_p" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">—有深度的内容搬运工</p></a> -->
        <p class="left">有深度的内容搬运工</p>
        <!-- <div class="angel" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" aos-duration="2000" data-aos-delay="2000">
          <div class="angel_inner"></div>
        </div> -->
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
#header{height: 5rem;background-color: #fff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;display: flex;justify-content: center;align-items: flex-end;color: #fff;font-size: 0.6rem;padding: 0.5rem 0;}
/* .angel{
  position: fixed;
  width: 5rem;
  height: 5rem;
  right: 3%;
  top: 10%;
  background-position: 50% 50%;
}
.angel:hover .angel_inner{
    opacity: 0.3;
    transform: translate(3rem,-3rem);
    width: 2rem;
    height: 2rem;
    background-position: 100% 100%;
}
.angel_inner{
  width: 5rem;
  height: 5rem;
  background-size: contain;
  transition: all 1s linear;
  background-repeat: no-repeat;
  background-image: url(https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/angel.png);
} */
</style>
