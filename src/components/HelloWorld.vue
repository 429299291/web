<template>
<div class="main">
  <div id='stars'></div>
  <div id='stars2'></div>
  <div id='stars3'></div>
  <div id='title'>
    <span>
      HELLO WORLD
    </span>
    <br>
    <span class="textmain">
      The more you see, the more you understand humility and admiration
    </span>
  </div>
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


  }}
</script>

<style scoped>

</style>
