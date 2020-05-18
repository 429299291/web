<template>
  <div class="profile">
    <div id="header">
      <!-- <h2 class="header-h" data-aos="fade-down" data-aos-duration="1500" >信笔一书</h2> -->
      <div class="header_inner">
        <a class="action left" data-aos="fade-right" data-aos-duration="1500">信笔一书</a>
        <div class="middle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" aos-duration="2000" data-aos-delay="1000">
          <a class="middle_child"></a>
        </div>
      </div> 
    </div>

      <div class="swiper-container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile1.jpg"><p class="swiper-p">←左 (滑动解锁) 右→</p></div>
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile2.jpg"><p class="swiper-p">第一次养花</p></div>
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile3.jpg"><p class="swiper-p">生活的乐趣在于不断的发现新世界，并时刻为之反思...</p></div>
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile8.jpg"><p class="swiper-p">车到山前必有路，哪怕山前拆车卖轱辘</p></div>
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile9.jpg"><p class="swiper-p">人生也许就是一种体验，就像钓鱼，赢在过程</p></div>
            <div class="swiper-slide"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile11.jpg"><p class="swiper-p">无知不可怕，自负才是，百年过后月依旧</p></div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>

<div id="main">
  <div class="main-inner">
    <div class="main-one">
      <div class="main-pic" style="width: 186px;"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile10.gif" alt="干什么" style="width:180px"></div>
        <p class="main-text">很久很久以前...</p>
    </div>
    <div class="main-one">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile6.png" alt="前端朱东东"></div>
        <p class="main-text">有一只小白兔</p>
    </div>
    <div class="main-one">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile4.jpg" alt="工作"></div>
        <p class="main-text">在照镜子的时候</p>
    </div> 
    <div class="main-one">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile7.jpg" alt="开发"></div>
        <p class="main-text">才发现自己是黑白的...</p>
    </div>
    <!-- <div class="main-one">
      <div class="main-pic" data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" ><img src="../assets/wo.jpg" style="width:180px" alt="这不是朱东东"></div>
        <p class="main-text"    data-aos-easing="ease-out-back" data-aos="fade-up-right" data-aos-delay="1000" data-aos-duration="1000">小小一张...</p>
    </div>     -->
  </div>
</div>
</div>
</template>

<script>
import { Swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'profile',
  data () {
    return {
      msg: 'profile',
    
    }
  },
  components:{
    Swiper,swiperSlide
  },
  mounted:function(){
    document.title = "信笔一书❤"

  　var swiper = new Swiper(".swiper-container", {
    effect : 'cube',
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 100,
      shadowScale: 0.6
    },
    loop : true,
  
　　　　});
    },   
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
.swiper-container{transform: scale(0.9);padding-left: -5%;}
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column;padding: 1rem 0!important; }
.main-pic img{max-width: 100%!important;margin: 0 auto;}
.el-carousel{margin: 1.5rem 0 0rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1081px) {
#im-container{transform: scale(0.6)!important;}
.header_inner .action.left, .header_inner .action.right{font-size: 18px;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 




#main{width: 100%;height: 100%;}
.main-inner{width: 90%;max-width: 1560px;margin: 0 auto;}
.main-one{display:flex;justify-content: center;padding: 3rem 0;align-items: center;}
.main-pic{width: 100%;max-width: 506px;margin:0 50px;}
.main-pic img{width: auto;height: auto;display: block;border: 3px #ccc solid;transition: all .5s;max-width: 512px;}
.main-text {max-width: 500px;border: 5px #ccc solid;height: 100%;padding: 2rem;display: block;margin:0 50px;border-radius: 5px;transition: all 1s;}
.main-pic img:hover{box-shadow: 3px 3px 3px #ccc;transform: translateY(-1px);}
.main-text:hover{color: #e83a3a;border: 5px #393 solid;animation: load 2s infinite alternate;}
@keyframes load {
    0% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 3px 3px rgba(0, 255, 140, 0);text-shadow:1px 1px 1px rgba(0, 0, 0, 0.3);
    }
    50% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 10px 3px rgba(0, 255, 140, 1);text-shadow:1px 1px 1px #475669;
    }
    100% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 3px 3px rgba(0, 255, 140, 0);text-shadow:1px 1px 1px rgba(0, 0, 0, 0.3);
    }
}
/* 走马灯 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


.swiper-container {
    width: 400px;
    height: 400px;
    padding: 70px 0 40px;
    overflow: hidden;
    transform: translate(0,-50px)
}  
.swiper-p{font-size: .9rem!important;text-align: center}

</style>
