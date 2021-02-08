<template>
  <div class="profile">
    <div id="header">
      <div class="header_inner">
        <a class="action left" data-aos="fade-right" data-aos-duration="1500">信笔一书</a>
        <div class="middle" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="3000" aos-duration="2000" data-aos-delay="1000">
          <a class="middle_child"></a>
        </div>
      </div> 
    </div>
<div id="main">
  <div class="main-inner">
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile2.jpg" alt="第一次养花"></div>
        <p class="main-text">花无重开日</p>
    </div>
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile3.jpg" alt="生活的乐趣在于不断的发现新世界，并时刻为之反思"></div>
        <p class="main-text">生活的乐趣在于不断的发现新世界，并时刻为之反思</p>
    </div>
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile8.jpg" alt="车到山前必有路，哪怕山前拆车卖轱辘"></div>
        <p class="main-text">车到山前必有路，哪怕山前拆车卖轱辘</p>
    </div>
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile9.jpg" alt="人生也许就是一种体验，就像钓鱼，赢在过程"></div>
        <p class="main-text">人生也许就是一种体验，就像钓鱼，赢在过程</p>
    </div>
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile11.jpg" alt="无知不可怕，自负才是，百年过后月依旧"></div>
        <p class="main-text">无知不可怕，自负才是</p>
    </div>
    <div class="main-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic" style="width: 186px;"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile10.gif" alt="干什么" style="width:180px"></div>
        <p class="main-text">恰到好处的幽默是智慧</p>
    </div>
    <div class="main-one" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <div class="main-pic"><img src="https://web-personal-zhu.oss-cn-shenzhen.aliyuncs.com/images/profile/profile7.jpg" alt="开发"></div>
        <p class="main-text">随便写点感叹...</p>
    </div>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'profile',
  data () {
    return {
      msg: 'profile',
    }
  },
  components:{
    
  },
  mounted:function(){
    document.title = "信笔一书❤"
    },   
}
</script>
<style scoped>
@media screen and (max-width: 801px) {
.main-text{padding: 0rem!important;margin: 0!important;border: none!important;padding:.5rem 0 0 0!important;}.main-pic{margin: 0!important}
.main-one{flex-direction:column;padding: 1rem 0!important; }
.main-pic img{max-width: 100%!important;margin: 0 auto;}
.el-carousel{margin: 1.5rem 0 0rem!important}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 
@media screen and (max-width: 1081px) {
#im-container{transform: scale(0.6)!important;}
.header_inner .action.left, .header_inner .action.right{font-size: 1rem;}
} /* 设置了浏览器宽度不大于500px时 abc 显示100px宽度 */ 


#main{width: 100%;height: 100%;}
.main-inner{width: 90%;max-width: 1560px;margin: 0 auto;}
.main-one{display:flex;justify-content: center;padding: 3rem 0;align-items: center;}
.main-pic{width: 100%;max-width: 506px;margin:0 50px;}
.main-pic img{width: auto;height: auto;display: block;border: 3px #ccc solid;transition: all .5s;max-width: 512px;}
.main-text {max-width: 500px;border: 5px #999 solid;height: 100%;padding: 1rem;display: block;margin:0 50px;border-radius: 5px;transition: all 1s;}
.main-pic img:hover{box-shadow: 3px 3px 3px #ccc;transform: translateY(-1px);}
.main-text:hover{border: 5px #393 solid;animation: load 2s infinite alternate;}
@keyframes load {
    0% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 3px 3px rgba(0, 255, 140, 0);;
    }
    50% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 10px 3px rgba(0, 255, 140, 1);
    }
    100% {
        box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 1), 0px 0px 3px 3px rgba(0, 255, 140, 0);
    }
}
</style>
