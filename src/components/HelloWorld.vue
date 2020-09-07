<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide"> 2
          <p class="animate__animated animate__fadeInDown">深圳机场战队，王者荣耀QQ区</p>

        </div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>
<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'v_header',
  data () {
    return {
	  msg: 'header',
	  center: {lng:0, lat:0},
      zoom:13,	  
    }
  },
  methods: {

  },
components: {
},
  mounted () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        



  }}
</script>
<style scoped>
.swiper-container {
    width: 600px;
    height: 300px;
}  
</style>
